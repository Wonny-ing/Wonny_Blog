## 문제상황

---

전의 포스팅처럼 useQuery를 이용해 서버 데이터를 가져오고 장바구니에서 해당 상품을 추가하고 삭제하는 함수를 만들어 적용해보았는데 실시간으로 UI가 업데이트가 되지 않는 문제점이 발생했습니다.

해당 상품의 수량을 증가하는 버튼을 눌렀을 때, 실시간으로 업데이트되지 않고,
새로고침을 하거나 다른 윈도우창으로 이동하고 돌아왔을 때 업데이트가 되었습니다.

## 문제상황이 발생한 이유

---

기본적으로 useQuery를 사용하면 캐시된 데이터는 `stale` 상태라고 간주합니다.
여기서 말하는 `stale`은 오래된, 신선하지 않은 뜻을 가지고 있습니다.

이 기본적인 행동을 변경하기 위해서는 전역적으로 쿼리를 사용하거나 `staleTime` 옵션을 설정해주면됩니다.
한번 네트워크에서 받아온 데이터를 얼마동안 신선하다고 간주할건지 정하는 것이다
여기서 말하는 신선하다는 말은 동일한 네트워크를 요청했을 때 신선하니까 또 다시 네트워크 요청을 하지않고 캐시된 데이터를 사용할것입니다.

따라서 `stale` 상태라고 지정된 쿼리들은

- 새로운 쿼리가 만들어 졌을 때
- 윈도우가 자동으로 포커스 되었을 때
- 네트워크에 재연결 되었을 때
- 쿼리가 몇초간격으로 리패칭 하라고 설정했을 때

자동적으로 `refetched` 됩니다.

이처럼 캐시가 되어있는 경우에는 우리가 무언가를 수정을 했다면 Invalidate 캐시를 해주어야합니다.

## 해결방법

---

해당 문제를 해결하기 위해서는 `useMutation` 훅을 사용하면 됩니다.

### useMutation

---

useQuery 와 다르게 mutation은 데이터 생성/수정/삭제 할 때 사용됩니다.
useQuery의 옵션처럼 onSuccess, onError, onSettled 콜백을 전달할 수 있으며 거기에 더해 mutate를 호출했을 때 실행할 onMutate 콜백도 사용할 수 있습니다.

위의 코드를 useMutation 훅을 이용하여 수정해줍니다.

**mutationFn (variables: TVariables) => Promise<TData>**

- 비동기 작업을 수행하고 프로미스를 반환하는 함수입니다. (쉽게 말해 api 요청하는 함수)
- variables 는 mutate가 전달하는 객체입니다.

**onSuccess\***
onSuccess 옵션은 mutation 이 성공하고 결과를 전달할 때 실행됩니다.

**쿼리 무효화(Invalidation)**

쿼리 데이터가 stale 상태로 바뀌기만을 기다릴 수만은 없는 케이스가 있는데
지금 같이 장바구니에 들어있는 아이템의 수량을 수정하거나 삭제하는 경우에는 서버에서 업데이트된 데이터를 다시 가져올 필요가 있습니다.

이와 같은 경우에는 지정한 staleTime 이 지나기 전에 직접 쿼리를 무효화해서 데이터를 새로 가져오도록 해야 합니다.

```js
queryClient.invalidateQueries();
```

해당 코드는 캐시에 있는 모든 쿼리를 무효화해 줍니다.

```js
queryClient.invalidateQueries(['carts', useName]);
```

['carts', useName]란 Key를 가진 쿼리를 무효화해줍니다.

그리고 필요한 곳에서 mutate를 사용하여 호출 해줍니다.

> 💡 제품을 읽어오는 곳에서는 useQuery를 사용하고 Key를 carts라고 해줬으니
> 제품을 업데이트 하는곳에서도 동일한 키를 쓰도록 해주어야합니다.

**onMutate**
mutation 함수가 실행되기 전에 실행되고 mutation 함수가 받을 동일한 변수가 전달됩니다.

그리고 추가적으로 `mutate`를 호출할 때, `onSuccess` 옵션을 또 정의할 수 있습니다.

위의 방법처럼 해주면 실시간으로 UI도 업데이트 되는것을 확인할 수 있습니다!

조금 더 깔끔하게 코드를 작성할 수 있는 useMutation 을 커스텀 훅으로 만드는 내용까지 다음 포스팅에 작성해보겠습니다!
