## Swiper

---

**`Swiper`** 는 하드웨어 가속 전환과 여러 기본 동작을 갖춘 현대적인 **`슬라이드 라이브러리`** 입니다.

### 설치

---

**`swiper`**를 사용하려면 여러 방법이 존재합니다.

1. CDN 방식

2. swiper js파일을 직접 다운 받아 삽입하는 방식

[Getting Started With Swiper](https://swiperjs.com/get-started)
프로젝트에 따라서 원하는 방식으로 공식 문서에서 제공하는 설치법에 따라 설치하시면 됩니다.

필자는 외부에서 받아와서 사이트에 적용시키는 `CDN 방식`을 사용해보았습니다.
CDN 방식을 사용하는 이유는 **업데이트가 자동**으로 되며, 따로 파일을 다운받고 서버에 올려줄 필요없이 **단 두줄**만 적어 놓으면 바로 불러와지기 때문입니다.

> 💡 **CDN이란?**
> CDN(Content Delivery Network; 컨텐츠 전송 네트워크)이란 컨텐츠를 효율적으로 전달하기 위해 여러 노드를 가진 네트워크에 데이터를 저장하여 제공하는 시스템입니다.

> ❗️ **CDN vs 직접 파일 다운로드 방식**
> 상황에 따라 다르다고 할 수 있습니다.
> 인터넷 환경이 잘 갖춰져 있다면 `CDN`과 `직접 파일 읽기 방식` 큰 차이가 없을 수 있지만 `CDN 방식`은 서비스에서 사용하지 않는 이미지나 기능도 끌어오기에 로딩속도에 영양을 끼칠 수 있습니다.
> 하지만 간단히 적용하고 디버깅하는 용도라면 직접 파일을 받는것보다 코드 몇 줄이 좋을 것입니다.

```html
<!-- in HEAD -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css"
/>

<script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
```

HEAD 태그안에 css,js 라이브러리를 삽입해 줍니다.
이때 꼭 두개의 파일 다 필요합니다.

> **`min`** : 원본을 조금 더 최적화해서 압축시킨 버전입니다.

### 기본 레이아웃 구조

---

#### HTML

```html
<!-- Slider main container -->
<div class="swiper">
  <!-- Additional required wrapper -->
  <div class="swiper-wrapper">
    <!-- Slides -->
    <div class="swiper-slide">Slide 1</div>
    <div class="swiper-slide">Slide 2</div>
    <div class="swiper-slide">Slide 3</div>
    ...
  </div>

  <!-- 페이징 필요시 추가 -->
  <div class="swiper-pagination"></div>
  <!-- 이전, 다음 버튼 필요시 추가 -->
  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>

  <!-- 스크롤 필요시 추가 -->
  <div class="swiper-scrollbar"></div>
</div>
```

body 태그 안에 위와 같이 태그에 `class`만 넣어주고 스크립트에서 슬라이드로 사용할 태그를 지정만 해주면 됩니다.
**`swiper`** > **`swiper-wrapper`** > **`swiper-slide`** 구조로 되어 있습니다.

#### JS

```js
new Swiper('.swiper', {
  // 다양한 옵션 설정,
  // 아래에서 설명하는 옵션들은 해당 위치에 들어갑니다!!
  slidesPerView: 'auto',
  spaceBetween: 2,
});
```

**`new Swiper(선택자, 옵션)`** 함수에 문자 데이터 형태로 **선택자**를 인수로 삽입, **옵션**을 객체 데이터 형식으로 넣어주면 됩니다.

### Swiper 옵션

---

자주사용하는 Swiper 옵션들을 정리해 보았습니다.

```js
new Swiper('.swiper', {
  direction: 'vertical', // 슬라이드 진행 방향, 기본값 horizontal(가로)

  // autoplay: true 도 가능하지만 객체 데이터로 할당하면 추가적인 옵션 설정 가능
  autoplay: {
    // 자동재생 여부
    delay: 5000, // 시작시간 설정
  },
  loop: true, // 반복재생 여부
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기

  // 페이저 버튼 사용자 설정
  pagination: {
    // 페이지 번호 요소 선택자
    el: '.promotion .swiper-pagination',

    // 사용자의 페이지 번호 요소 제어 가능 요소 (사용자가 단순히 시각적으로만 보는것 뿐만아니라 눌러서 제어할 수 있는지에 대한 여부)
    clickable: true,
  },

  // nav 화살표 출력 시 추가
  navigation: {
    prevEl: '.swiper-prev',
    nextEl: '.swiper-next',
  },
});
```

### 추가 설명

---

`<div class="swiper-pagination"></div>` 요소안에는
`<span class="swiper-pagination-bullet"></span>` 들이 존재합니다.

여기서 swiper-pagination-bullet은 위 사진처럼 각각의 동그라미를 뜻합니다.
해당 class를 이용해 css에서 스타일을 주는 것도 가능합니다.
