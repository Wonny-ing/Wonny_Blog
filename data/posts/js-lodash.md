## GSAP

---

`Lodash` 는 주로 객체, 배열과 같은 데이터의 구조를 간편하게 함수형으로 다룰 수 있게 해주는 자바스크립트 라이브러리 입니다.

예를 들어 바닐라 자바스크립트의 배열 안의 객체들의 값을 핸들링 할때 (배열, 객체 및 문자열 반복 or 복합적인 함수 생성) 코드 몇줄만으로 유기적으로 다룰수가 있어서 매우 유용합니다.

참고로 `_`라는 기호를 사용해서 명칭이 `Lodash` 입니다.
`_`기호를 처음에 선언하여 사용이 됩니다.

### 설치

---

[Lodash 공식 문서](https://lodash.com/)

공식 홈페이지에서 `Lodash`을 어떻게 설치할 수 있는지 알아볼 수 있습니다.

Lodash을 사용하려면 **CDN 방식**으로 로드하거나 사이트에서 **직접 파일을 다운**받거나 **npm**을 통해 다운받는 방식 등 여러가지 방법들이 존재하는데 프로젝트에 따라 원하는 방식대로 설치하시면됩니다.

[lodash.js (cdn방식)](https://cdnjs.com/libraries/lodash.js)

필자는 핵심 `Lodash` 도구를 페이지에 추가할 수 있는 가장 간단한 방법인** CDN 방식**을 사용해보았습니다.

`lodash.js`를 검색하여 위의 사이트에 접속 후 가장 상위에 있는
**lodash.min.js** 코드 **script tag**를 복사하시고, 프로젝트의 `index.html` 파일의 `head 태그`안에 삽입하시면 됩니다.

```html
<script
  src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js"
  integrity="sha512-WFN04846sdKMIP5LKNphMaWzU7YpMyCU245etK3g/2ARYbPK9Ub18eG+ljU96qKRCWh+quCY7yefSmlkQw1ANQ=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
></script>
```

### Lodash 메소드

---

#### \_.throttle

**`_.throttle`** 는 동일 이벤트가 반복적으로 시행되는 이런 경우에 이벤트의 실제 반복 주기와 상관없이 임의로 설정한 **일정 시간 간격**(밀리세컨드)으로 콜백 함수의 실행을 제어합니다.

즉, 요약하자면 이벤트의 반복 실행시 **콜백 함수의 불필요한 실행을 줄이는 역할**을 합니다.

글로만 보면 왜 사용하는지 알기 어려우니 해당 예제를 통해 왜 사용하는지 알아봅시다.

```js
window.addEventListener('scroll', {
  console.log('scroll!');
});
```

![](https://velog.velcdn.com/images/won11/post/0c017188-c476-455a-82ba-ac7f2262c466/image.png)

`_.throttle` 메소드는 주로 화면에서 **스크롤 이벤트** 작업할때 많이 사용합니다.

해당 코드를 프로젝트 js파일에 적용하고 개발자도구 console창을 열어 확인해보면
창이 스크롤 될때마다 해당 함수가 실행되는것을 볼 수 있습니다.

이런 경우 사이트에 들어가는 내용이 많아질수록 프로젝트가 무거워지고 스크롤할때마다 함수를 실행하는게 부담스러워져 화면이 버벅이는 현상이 나타날 수 있습니다.

이때 실행되는 **함수의 수를 제어**할 수 있는 `_.throttle`를 사용하면,

> \_.throttle(`콜백함수`, `밀리세컨드`)

```js
window.addEventListener('scroll', _.throttle(function() {
  console.log('scroll!');
}, 300);
```

화면이 스크롤될때 실행되는 함수의 개수를 0.3초 단위로 부하를 줘서 함수가 계속 실행되는것을 방지할 수 있습니다.
