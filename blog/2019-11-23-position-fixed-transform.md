---
id: position-fixed-transform
title: 固定布局与层叠上下文之间的关系
author: 刘进行
authorTitle: 程序员
authorURL: https://github.com/liujinxing
authorImageURL: https://avatars0.githubusercontent.com/u/1055306?s=400&u=3b86b7fb114b05a0b12a8a8092f5f6c69972ae23&v=4
tags: [css, fixed, transform]
---

一直以来，我对 `position: fixed` 有一个美丽的误会，以为它只是简单的相对于屏幕视口（ viewport ）。但是最近在项目开发中需要开发拖拽移动功能，就遇到一个 `position: fixed` 的错误用法。先看看下面一段代码：

html 代码片段：

```html
<div class="container">
  <div class="item dragging"></div>
  <div class="item"></div>
  <div class="item"></div>
</div>
```

css 代码片段：

```css
.container {
  transform: translate3d(0px, 0px, 0px);
  border: 1px solid green;
  margin: 50px;
  padding: 10px;
}

.item {
  height: 50px;
  width: 50px;
  margin: 10px;
  background: red;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.item.dragging {
  background: yellow;
  position: fixed;
  left: 0px;
  top: 0px;
}
```

上面的代码本期望有如下的展现效果：

![期望的展现效果](/assets/position-fixed-transform-except.png)

但是实际上的效果如下：

![实际展现效果](/assets/position-fixed-transform-really.png)

当我遇到上面的问题时，二话不说，先查查资料吧。打开常用的 MDN 看看 [position](https://developer.mozilla.org/zh-CN/docs/Web/CSS/position) 的介绍，果然打破了我的粗浅认知。

## 问题原因

问题的原因其实非常简单，`.container` 元素上多了 `transform: translate3d(0px, 0px, 0px);` 这个样式，导致出现上面的实际效果。 MDN 对 `position: fixed` 有这样的描述：

> **fixed**
>
> 不为元素预留空间，而是通过指定元素相对于屏幕视口（viewport）的位置来指定元素位置。元素的位置在屏幕滚动时不会改变。打印时，元素会出现在的每页的固定位置。`fixed` 属性会创建新的层叠上下文。当元素祖先的 `transform` 属性非 `none` 时，容器由视口改为该祖先。

上面的描述有一个例外情况描述：**当元素祖先的 `transform` 属性非 `none` 时，容器由视口改为该祖先**。这就是问题的真因。

## 解决方案

问题的原因找到了，就得想办法解决问题，满足需求。先给出有问题的拖拽移动的伪代码：

```ts
const container = document.querySelector(".container");

function handleDragStart(dragElement) {
  const { left, top } = dragElement.getBoundingClientRect();
  dragElement.style.position = "fixed";
  dragElement.style.left = `${left}px`;
  dragElement.style.top = `${top}px`;
}

function handleDragMove(dragElement, clientX, clientY) {
  dragElement.style.transform = `translate3d(${clientX}px, ${clientY}px, 0px)`;
}

function handleDragEnd(dragElement) {
  dragElement.style.position = "";
  dragElement.style.left = "";
  dragElement.style.top = "";
}
```

注意，拖拽移动的实现需要考虑到`.container`有滚动条的情况，且在拖拽过程中会有滚动的情况。

针对拖拽移动这个场景，给出的方案有：

- 方案一：在拖拽开始时，去掉 `.container` 元素上的 `transform: translate3d(0px, 0px, 0px);`
- 方案二：复制一份拖拽元素并添加到 `document.body` 上，然后给它应用上 `position: fixed` 等定位样式
- 方案三：依然采用 `position: fixed`，但是定位的位置需要减去 `.container` 的位置
- 方案四：不采用 `position: fixed`，在有移动时，将移动的偏移量加到拖拽元素的 `translate3d` 上去

因项目实际需要，方案一采用不了。接着我们看看下面三个方案如何实现。

### 方案二

```ts
const container = document.querySelector(".container");
let previewELement;

function handleDragStart(dragElement) {
  const { left, top } = dragElement.getBoundingClientRect();
  previewElement = dragElement.cloneNode(true);
  previewElement.style.position = "fixed";
  previewElement.style.left = `${left}px`;
  previewElement.style.top = `${top}px`;
  document.body.appendChild(previewElement);
}

function handleDragEnd() {
  previewElement.remove();
}
```

### 方案三

```ts
const container = document.querySelector(".container");

function handleDragStart(dragElement) {
  const {
    left: parentLeft,
    top: parentTop
  } = container.getBoundingClientRect();
  const { left, top } = dragElement.getBoundingClientRect();

  dragElement.style.position = "fixed";
  dragElement.style.left = `${left - parentLeft}px`;
  dragElement.style.top = `${top - parentTop}px`;
}
```

### 方案四

假设只需要左右滚动，不需要上下滚动。

```ts
const container = document.querySelector(".container");
let initScrollLeft, currentScrollLeft;
let left, top;

function handleDragStart(dragElement) {
  initScrollLeft = container.scrollLeft;
  currentScrollLeft = container.currentScrollLeft;
  container.addEventListener("scroll", handleScroll, false);
}

function handleDragMove(dragElement, movementX, movementY) {
  left = movementX;
  top = movementY;
  setDragPosition(dragElement);
}

function handleDragEnd() {
  container.removeEventListener("scroll", handleScroll, false);
}

function setDragPosition(dragElement) {
  const x = left + (currentScrollLeft - initScrollLeft);
  const y = top;
  dragElement.style.transform = `translate3d(${x}px, ${y}px, 0px)`;
}

function handleScroll() {
  currentScrollLeft = container.scrollLeft;

  setDragPosition(dragElement);
}
```

### 最终选择

因种种原因，综合考虑，项目最终采用了方案三。

## 小结

在实际项目开发中，遇到类似这样的问题，建议先去专业站点上查看一下专业术语解释，看看是否真的完全了解所采用技术的概念。HTML5、 CSS、 JavaScript 等基础概念性建议参考 [MDN](https://developer.mozilla.org/zh-CN/)。

## 参考文档

- [MDN: position](https://developer.mozilla.org/zh-CN/docs/Web/CSS/position)
