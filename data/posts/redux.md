## ✨ 리덕스란?

---

자바스크립트 애플리케이션을 위한 `상태 관리 라이브러리` 입니다.
즉 Redux는 React뿐만아니라 Angular, Vue 또는 Vanilla JavaScript와 같은 다른 라이브러리, 프레임워크에서도 사용할 수 있습니다.

### 🤔 상태 관리의 필요성

---

우선 상태 관리 라이브러리를 사용하는 이유에 대해서 간단하게 설명하겠습니다.
컴포넌트에서 사용하는 상태(state)가 변경되면, 컴포넌트는 리렌더링되면서 변하는 값을 표시합니다. 대부분 이 state를 다른 자식 컴포넌트에도 적용하기 위해 전달하려는 경우가 생기는데, 그 때는 props로 이 값을 내려주게 됩니다.

하지만 부모 컴포넌트에서 자식 컴포넌트로 data를 보내는것이 아니라 그 자식의 자식 컴포넌트 등 직접적인 연관이 없는 컴포넌트에게 data를 전달하려면 어떻게 해야할까요?

상태값을 전달하기 위해, 또 그것을 변경하는 함수도 같이 전달하려고 부모-자식-.. 으로 이어지는 전달 과정을 매번 작성해야 하는 매우 비효율적인 상황이 발생합니다.

또한 프로젝트가 커져서 컴포넌트 갯수가 많아지고 그들간에 서로 공유하는 state 값들이 많아진다면, state가 어디서 어떻게 변하는지, 그리고 이 업데이트가 어떤 컴포넌트의 어떤 작업으로 인해 발생했는지, 손쉽게 파악하기가 힘들 것입니다.

그래서 이런문제를 해결하기 위해 상태관리 라이브러리들을 사용하기 시작했습니다.

위 그림처럼 Redux는 store 라는 state 저장 공간을 두어, 여러 컴포넌트가 하나의 store를 바라 보게끔 합니다.

따라서 어떤 컴포넌트에서도 props로 내려서 data를 전달 받을 필요가 없습니다.

### ✏️ 리덕스 사용법

---

#### 1. 스토어(Store)

---

Redux 스토어(store)는 애플리케이션의 상태를 관리하고, .getState(), .dispach(), .subscribe() 같은 메서드를 제공합니다.

스토어는 애플리케이션의 상태를 나타내는 많은 key:value 쌍으로 구성된 정보를 가진 하나의 큰 JavaScript 객체입니다. React 컴포넌트에 분산되어 있는 상태 객체와 달리 스토어는 **하나** 만 존재합니다. 스토어는 애플리케이션에 상태를 제공하며 상태가 업데이트 되면 뷰(UI)가 다시 그려집니다.

> 💡 참고로 내부 상태를 변경하는 유일한 방법은 해당 상태에 대한 Action을 전달하는 것입니다!

> 💡 앱에는 하나의 스토어만 있어야 합니다.

```js
// store.js
import { createStore } from 'redux';

const store = createStore(reducer);
```

#### 2. 액션(Action)

---

Action은 "상태 변경을 설명하는 정보"를 스토어로 보내는 자바스크립트 객체입니다.
상태 값을 변경(교체) 할 경우, 교체 할 상태 값(payload)을 리듀서(함수)에 보낼 수 있습니다.

```js
// store/actions/actionTypes.js

const ADD = 'ADD';
const DELETE = 'DELETE';
```

```js
// store/actions/todos.js
import { ADD, MINUS } from './actionTypes';

export const addTodo = () => ({ type: ADD });
export const deleteTodo = () => ({ type: DELETE });
```

#### 3. 스테이트(State)

---

Redux 스토어에서 관리하는 상태(데이터) 입니다.
상태 트리(state tree)는 "불변 상태(Immutable State). 즉 순수한 상태"를 가져야 합니다. 애플리케이션의 UI, View 레이어 상태는 순수한 함수(리듀서)로 처리 될 때 예측 가능(사이드 이펙트 ✘) 하기 때문입니다.

```js
// 상태
// - 일반적으로 state 또는 initState 이름으로 설정
// - 상태는 리듀서(함수)의 첫번째 인자로 전달 됨

// todos
const initState = [];
```

#### 4. 리듀서(Reducer)

---

리듀서란? '애플리케이션 상태를 교체하는 함수'를 말합니다. '이전 상태(prevState)'를 '업데이트된 상태(state)'로 교체(return) 합니다.

> 리듀서는 상태와 액션을 전달 받아 '이전 상태'를 '다음 상태'로 교체 한 후 반환합니다. 주어진 상태를 수정하는 것이 아니라, 새로운 상태로 교체하는 것이 중요합니다. 즉, 리듀서는 '순수한 함수' 여야 합니다.
> ❗️ **`순수한 함수`** 란? 반환(reture) 값이 전달 인자(argument) 값에만 의존하는 함수를 말합니다.

```js
리듀서 = (상태, 액션) {
  // 액션 타입 분석
  // 이전 상태 → 다음 상태로 교체
  // 다음 상태 반환
}
```

> 💡 reducer 내부에서 하지 말아야 할 것!

- 전달 받은 매개변수 state, action에 변형을 가하면 안됩니다.
- 네트워킹(API 호출 ← 비동기 통신) 또는 라우팅을 변경하면 안됩니다.
- non-pure 함수들 호출 ex) `Date.now()` or `Math.random()`

```js
const reducer = (prevState = initState, action) => {
  switch (action.type) {
    case ADD:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE:
      return prevState.filter((toDo) => toDo.id !== action.id);
    default:
      return prevState;
  }
};
```

#### 5. getState()

---

애플리케이션의 현재 상태 트리를 반환합니다.
스토어의 리듀서가 반환한 마지막 값과 같습니다.

```js
store.getState();
```

#### 6. 서브스크립션(subscribe)

---

애플리케이션 상태 변경을 구독(subscribe, 감지) 하여 상태가 업데이트 되면 등록된 리스너(listener)를 실행시킵니다.

```js
store.subscribe(render);
```

React Redux 라이브러리를 추가해 사용하면 서브스크립션은 자동 처리됩니다.

### Redux 전체 사용 코드

---

```js
// src/index.js
import React from 'react';
import App from './components/App';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import store from './store';

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
```

```js
// store/index.js
import { createStore } from 'redux';

const store = createStore(reducer);
```

```js
// store/action/index.js
const addTodo = (text) => {
  return {
    type: ADD,
    text,
  };
};

const deleteTodo = (id) => {
  return {
    type: DELETE,
    id,
  };
};
```

```js
// store/action/actionTypes.js
export const ADD = 'ADD';
export const DELETE = 'DELETE';
```

```js
// store/reducers/todos.js
import ADD from '../action/ADD';
import DELETE from '../action/DELETE';

const reducer = (prevState = initState, action) => {
  switch (action.type) {
    case ADD:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE:
      return prevState.filter((toDo) => toDo.id !== action.id);
    default:
      return prevState;
  }
```

### Redux 스토어 구조

---

```js
store/
├── index.js # 스토어 엔트리 (스토어 생성 ← 루트 리듀서)
├── actions/
│   ├── index.js # 액션 엔트리 (액션 내보내기)
│   ├── actionTypes.js # 액션 타입 (액션 타입: 상수)
│   └── todos.js
└── reducers/
    ├── index.js # 리듀서 엔트리 ([루트 리듀서:병합] 내보내기)
    └── todos.js
```

## 레퍼런스

🌑 [참고블로그](https://yamoo9.github.io/react-master/lecture/rd-redux.html#%E1%84%89%E1%85%A1%E1%86%BC%E1%84%90%E1%85%A2-%E1%84%80%E1%85%AA%E1%86%AB%E1%84%85%E1%85%B5%E1%84%8B%E1%85%B4-%E1%84%91%E1%85%B5%E1%86%AF%E1%84%8B%E1%85%AD%E1%84%89%E1%85%A5%E1%86%BC)
