## 가운데 정렬

---

CSS를 작업하다보면 빈번하게 contents를 **중앙 정렬**을 하게 되는 경우가 많은데 이때 어려움을 느끼는 경우가 많습니다.

그래서 다양한 CSS 속성을 활용해 contents를 수직 및 수평으로 가운데 정렬할 수 있는 방법들을 소개해 드리려고 합니다.

### 1. margin: auto;

---

**`block level element`** 를 **수평 가운데 정렬** 해주는 방법입니다.

<br/>

!codepen[wonny-ing/embed/JjvNLVY?default-tab=html%2Cresult]

<br/>

`div` 같은 **`block level element`** 는 한 줄에 하나의 요소만 올 수 있습니다.
이때 위의 이미지처럼 오른쪽에 자동으로 **`margin`** 이 주어집니다.

<br/>

!codepen[wonny-ing/embed/KKRoLqX?default-tab=html%2Cresult]

**`margin: auto;`** 를 사용하게 되면, 브라우저에서 자동으로 **`margin`** 을 골고루 넣어줍니다. 따라서 가운데 정렬이 됩니다.

> 💡 **`margin`** 은 한 줄에 하나만 들어가기 위해서 들어가있는 item이기 때문에 **수평으로만 가운데 정렬**이 가능합니다.

### 2. text-align: center;

---

**`inline level element`** 를 **수평 가운데 정렬** 해주는 방법입니다.

<br/>

!codepen[wonny-ing/embed/GRddJjR?default-tab=html%2Cresult]

<br/>

부모요소인 container에 **`text-align: center;`** 를 주게되면,
text뿐만 아니라 block element 안에서 **inline-block 요소** 와 **inline 요소**들도 가운데 정렬이 가능합니다.

> 💡 **`block level element`**은 정렬되지 않습니다!

1번 방법과 마찬가지로 **수평으로만 정렬**이 가능한 방법 입니다.

### 3. transform과 position

---

**`block level element`** 를 **수평, 수직 가운데 정렬** 해주는 방법입니다.

```css
transform: translate(50%, 50%);
```

`translate(50%, 50%);`는 해당 요소의 오른쪽으로 아래로 50%만큼 이동하는 것을 말합니다.
해당 방법만으로는 **첫번째 이미지**처럼 부모 요소의 중간 즉, 가운데 정렬이 되지 않습니다.

따라서 자식 요소 자체를 부모 요소의 50%정도로 이동해줘야 합니다. 이때 사용할 수 있는 속성이 `position` 입니다.

```css
position: absolute;
top: 50%;
left: 50%;
```

부모요소에 position: relative; 속성을 부여하고, 위의 코드를 자식 요소인 item에 부여합니다.
**두번째 이미지**처럼 왼쪽 상단 점을 기준으로 위에서 50%, 왼쪽에서 50% 이동을 합니다.
따라서 요소자체가 중앙으로 온것이 아니라 왼쪽 상단 점이 가운데로 온 것이기 때문에 또 작업을 해줘야합니다.

```css
transform: translate(-50%, -50%);
```

`translate(-50%, -50%);`는 해당 요소의 중앙 점을 기준으로 왼쪽으로 위로 50%만큼 이동되므로 **세번째 이미지**처럼 부모요소의 가운데 정렬을 하게 됩니다.

### 4. text-align와 line-height

---

**`inline level element`** 를 **수평, 수직 가운데 정렬** 해주는 방법입니다.

해키한 방법이지만 자주 사용되는 방법입니다.

!codepen[wonny-ing/embed/xxjjGdQ?default-tab=html%2Cresult]

```css
text-align: center;
```

`text-align` 속성만 사용하면 **수평 가운데 정렬**만 가능합니다.

```css
line-height: [item 높이값];
```

item의 `line-height`을 부모상자만큼 주면 **수직 가운데 정렬**이 됩니다.

따라서 **수평, 수직 모두 가운데 정렬**이 됩니다.
해당 방법이 가능한 이유는 텍스트는 top과 bottom이라는 `font matrix`가 존재하는데 기존 텍스트의 높이가 아닌 `line-height` 속성으로 부모요소의 높이만큼 임의적으로 바꿔주게되면 자동으로 중간에 오게 만들어주기 때문입니다.

다만, 이 방법의 문제점은 **한 줄의 텍스트만 수직 가운데 정렬이 가능**합니다.
두줄 이상의 경우 텍스트의 높이가 부모의 높이로 임의적으로 바꿔주었기때문에 부모 요소의 밖으로 나가 다음줄에 정렬되기 때문입니다.

### 5. position

---

**`position`** 속성을 이용하여 간단하게 **수평, 수직 가운데 정렬** 해주는 방법입니다.

!codepen[wonny-ing/embed/WNJJvXj?default-tab=html%2Cresult]

```css
position: absolute;
width: 100px;
height: 100px;
top: 0;
bottom: 0;
margin: auto 0;
```

부모 요소안 자식 요소가 **수직 가운데 정렬**하는 방법과

```css
position: absolute;
width: 100px;
height: 100px;
left: 0;
right: 0;
margin: 0 auto;
```

부모 요소안 자식 요소가 **수평 가운데 정렬**하는 방법을 같이 사용하면됩니다.

> 💡 해당 방법을 사용할때는 꼭 요소의 **너비**가 있어야 합니다
