(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{137:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return p}));t(50),t(23),t(18),t(19),t(51),t(0);var l=t(151);function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e}).apply(this,arguments)}var a={id:"position-fixed-transform",title:"\u56fa\u5b9a\u5e03\u5c40\u4e0e\u5c42\u53e0\u4e0a\u4e0b\u6587\u4e4b\u95f4\u7684\u5173\u7cfb",author:"\u5218\u8fdb\u884c",authorTitle:"\u7a0b\u5e8f\u5458",authorURL:"https://github.com/liujinxing",authorImageURL:"https://avatars0.githubusercontent.com/u/1055306?s=400&u=3b86b7fb114b05a0b12a8a8092f5f6c69972ae23&v=4",tags:["css","fixed","transform"]},i=[{value:"\u95ee\u9898\u539f\u56e0",id:"\u95ee\u9898\u539f\u56e0",children:[]},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",children:[{value:"\u65b9\u6848\u4e8c",id:"\u65b9\u6848\u4e8c",children:[]},{value:"\u65b9\u6848\u4e09",id:"\u65b9\u6848\u4e09",children:[]},{value:"\u65b9\u6848\u56db",id:"\u65b9\u6848\u56db",children:[]},{value:"\u6700\u7ec8\u9009\u62e9",id:"\u6700\u7ec8\u9009\u62e9",children:[]}]},{value:"\u5c0f\u7ed3",id:"\u5c0f\u7ed3",children:[]},{value:"\u53c2\u8003\u6587\u6863",id:"\u53c2\u8003\u6587\u6863",children:[]}],o={rightToc:i},c="wrapper";function p(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["components"]);return Object(l.b)(c,r({},o,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("p",null,"\u4e00\u76f4\u4ee5\u6765\uff0c\u6211\u5bf9 ",Object(l.b)("inlineCode",{parentName:"p"},"position: fixed")," \u6709\u4e00\u4e2a\u7f8e\u4e3d\u7684\u8bef\u4f1a\uff0c\u4ee5\u4e3a\u5b83\u53ea\u662f\u7b80\u5355\u7684\u76f8\u5bf9\u4e8e\u5c4f\u5e55\u89c6\u53e3\uff08 viewport \uff09\u3002\u4f46\u662f\u6700\u8fd1\u5728\u9879\u76ee\u5f00\u53d1\u4e2d\u9700\u8981\u5f00\u53d1\u62d6\u62fd\u79fb\u52a8\u529f\u80fd\uff0c\u5c31\u9047\u5230\u4e00\u4e2a ",Object(l.b)("inlineCode",{parentName:"p"},"position: fixed")," \u7684\u9519\u8bef\u7528\u6cd5\u3002\u5148\u770b\u770b\u4e0b\u9762\u4e00\u6bb5\u4ee3\u7801\uff1a"),Object(l.b)("p",null,"html \u4ee3\u7801\u7247\u6bb5\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",r({parentName:"pre"},{className:"language-html"}),'<div class="container">\n  <div class="item dragging"></div>\n  <div class="item"></div>\n  <div class="item"></div>\n</div>\n')),Object(l.b)("p",null,"css \u4ee3\u7801\u7247\u6bb5\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",r({parentName:"pre"},{className:"language-css"}),".container {\n  transform: translate3d(0px, 0px, 0px);\n  border: 1px solid green;\n  margin: 50px;\n  padding: 10px;\n}\n\n.item {\n  height: 50px;\n  width: 50px;\n  margin: 10px;\n  background: red;\n  font-size: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.item.dragging {\n  background: yellow;\n  position: fixed;\n  left: 0px;\n  top: 0px;\n}\n")),Object(l.b)("p",null,"\u4e0a\u9762\u7684\u4ee3\u7801\u672c\u671f\u671b\u6709\u5982\u4e0b\u7684\u5c55\u73b0\u6548\u679c\uff1a"),Object(l.b)("p",null,Object(l.b)("img",r({parentName:"p"},{src:"/assets/position-fixed-transform-except.png",alt:"\u671f\u671b\u7684\u5c55\u73b0\u6548\u679c"}))),Object(l.b)("p",null,"\u4f46\u662f\u5b9e\u9645\u4e0a\u7684\u6548\u679c\u5982\u4e0b\uff1a"),Object(l.b)("p",null,Object(l.b)("img",r({parentName:"p"},{src:"/assets/position-fixed-transform-really.png",alt:"\u5b9e\u9645\u5c55\u73b0\u6548\u679c"}))),Object(l.b)("p",null,"\u5f53\u6211\u9047\u5230\u4e0a\u9762\u7684\u95ee\u9898\u65f6\uff0c\u4e8c\u8bdd\u4e0d\u8bf4\uff0c\u5148\u67e5\u67e5\u8d44\u6599\u5427\u3002\u6253\u5f00\u5e38\u7528\u7684 MDN \u770b\u770b ",Object(l.b)("a",r({parentName:"p"},{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/position"}),"position")," \u7684\u4ecb\u7ecd\uff0c\u679c\u7136\u6253\u7834\u4e86\u6211\u7684\u7c97\u6d45\u8ba4\u77e5\u3002"),Object(l.b)("h2",{id:"\u95ee\u9898\u539f\u56e0"},"\u95ee\u9898\u539f\u56e0"),Object(l.b)("p",null,"\u95ee\u9898\u7684\u539f\u56e0\u5176\u5b9e\u975e\u5e38\u7b80\u5355\uff0c",Object(l.b)("inlineCode",{parentName:"p"},".container")," \u5143\u7d20\u4e0a\u591a\u4e86 ",Object(l.b)("inlineCode",{parentName:"p"},"transform: translate3d(0px, 0px, 0px);")," \u8fd9\u4e2a\u6837\u5f0f\uff0c\u5bfc\u81f4\u51fa\u73b0\u4e0a\u9762\u7684\u5b9e\u9645\u6548\u679c\u3002 MDN \u5bf9 ",Object(l.b)("inlineCode",{parentName:"p"},"position: fixed")," \u6709\u8fd9\u6837\u7684\u63cf\u8ff0\uff1a"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("strong",{parentName:"p"},"fixed")),Object(l.b)("p",{parentName:"blockquote"},"\u4e0d\u4e3a\u5143\u7d20\u9884\u7559\u7a7a\u95f4\uff0c\u800c\u662f\u901a\u8fc7\u6307\u5b9a\u5143\u7d20\u76f8\u5bf9\u4e8e\u5c4f\u5e55\u89c6\u53e3\uff08viewport\uff09\u7684\u4f4d\u7f6e\u6765\u6307\u5b9a\u5143\u7d20\u4f4d\u7f6e\u3002\u5143\u7d20\u7684\u4f4d\u7f6e\u5728\u5c4f\u5e55\u6eda\u52a8\u65f6\u4e0d\u4f1a\u6539\u53d8\u3002\u6253\u5370\u65f6\uff0c\u5143\u7d20\u4f1a\u51fa\u73b0\u5728\u7684\u6bcf\u9875\u7684\u56fa\u5b9a\u4f4d\u7f6e\u3002",Object(l.b)("inlineCode",{parentName:"p"},"fixed")," \u5c5e\u6027\u4f1a\u521b\u5efa\u65b0\u7684\u5c42\u53e0\u4e0a\u4e0b\u6587\u3002\u5f53\u5143\u7d20\u7956\u5148\u7684 ",Object(l.b)("inlineCode",{parentName:"p"},"transform")," \u5c5e\u6027\u975e ",Object(l.b)("inlineCode",{parentName:"p"},"none")," \u65f6\uff0c\u5bb9\u5668\u7531\u89c6\u53e3\u6539\u4e3a\u8be5\u7956\u5148\u3002")),Object(l.b)("p",null,"\u4e0a\u9762\u7684\u63cf\u8ff0\u6709\u4e00\u4e2a\u4f8b\u5916\u60c5\u51b5\u63cf\u8ff0\uff1a",Object(l.b)("strong",{parentName:"p"},"\u5f53\u5143\u7d20\u7956\u5148\u7684 ",Object(l.b)("inlineCode",{parentName:"strong"},"transform")," \u5c5e\u6027\u975e ",Object(l.b)("inlineCode",{parentName:"strong"},"none")," \u65f6\uff0c\u5bb9\u5668\u7531\u89c6\u53e3\u6539\u4e3a\u8be5\u7956\u5148"),"\u3002\u8fd9\u5c31\u662f\u95ee\u9898\u7684\u771f\u56e0\u3002"),Object(l.b)("h2",{id:"\u89e3\u51b3\u65b9\u6848"},"\u89e3\u51b3\u65b9\u6848"),Object(l.b)("p",null,"\u95ee\u9898\u7684\u539f\u56e0\u627e\u5230\u4e86\uff0c\u5c31\u5f97\u60f3\u529e\u6cd5\u89e3\u51b3\u95ee\u9898\uff0c\u6ee1\u8db3\u9700\u6c42\u3002\u5148\u7ed9\u51fa\u6709\u95ee\u9898\u7684\u62d6\u62fd\u79fb\u52a8\u7684\u4f2a\u4ee3\u7801\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",r({parentName:"pre"},{className:"language-ts"}),'const container = document.querySelector(".container");\n\nfunction handleDragStart(dragElement) {\n  const { left, top } = dragElement.getBoundingClientRect();\n  dragElement.style.position = "fixed";\n  dragElement.style.left = `${left}px`;\n  dragElement.style.top = `${top}px`;\n}\n\nfunction handleDragMove(dragElement, clientX, clientY) {\n  dragElement.style.transform = `translate3d(${clientX}px, ${clientY}px, 0px)`;\n}\n\nfunction handleDragEnd(dragElement) {\n  dragElement.style.position = "";\n  dragElement.style.left = "";\n  dragElement.style.top = "";\n}\n')),Object(l.b)("p",null,"\u6ce8\u610f\uff0c\u62d6\u62fd\u79fb\u52a8\u7684\u5b9e\u73b0\u9700\u8981\u8003\u8651\u5230",Object(l.b)("inlineCode",{parentName:"p"},".container"),"\u6709\u6eda\u52a8\u6761\u7684\u60c5\u51b5\uff0c\u4e14\u5728\u62d6\u62fd\u8fc7\u7a0b\u4e2d\u4f1a\u6709\u6eda\u52a8\u7684\u60c5\u51b5\u3002"),Object(l.b)("p",null,"\u9488\u5bf9\u62d6\u62fd\u79fb\u52a8\u8fd9\u4e2a\u573a\u666f\uff0c\u7ed9\u51fa\u7684\u65b9\u6848\u6709\uff1a"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u65b9\u6848\u4e00\uff1a\u5728\u62d6\u62fd\u5f00\u59cb\u65f6\uff0c\u53bb\u6389 ",Object(l.b)("inlineCode",{parentName:"li"},".container")," \u5143\u7d20\u4e0a\u7684 ",Object(l.b)("inlineCode",{parentName:"li"},"transform: translate3d(0px, 0px, 0px);")),Object(l.b)("li",{parentName:"ul"},"\u65b9\u6848\u4e8c\uff1a\u590d\u5236\u4e00\u4efd\u62d6\u62fd\u5143\u7d20\u5e76\u6dfb\u52a0\u5230 ",Object(l.b)("inlineCode",{parentName:"li"},"document.body")," \u4e0a\uff0c\u7136\u540e\u7ed9\u5b83\u5e94\u7528\u4e0a ",Object(l.b)("inlineCode",{parentName:"li"},"position: fixed")," \u7b49\u5b9a\u4f4d\u6837\u5f0f"),Object(l.b)("li",{parentName:"ul"},"\u65b9\u6848\u4e09\uff1a\u4f9d\u7136\u91c7\u7528 ",Object(l.b)("inlineCode",{parentName:"li"},"position: fixed"),"\uff0c\u4f46\u662f\u5b9a\u4f4d\u7684\u4f4d\u7f6e\u9700\u8981\u51cf\u53bb ",Object(l.b)("inlineCode",{parentName:"li"},".container")," \u7684\u4f4d\u7f6e"),Object(l.b)("li",{parentName:"ul"},"\u65b9\u6848\u56db\uff1a\u4e0d\u91c7\u7528 ",Object(l.b)("inlineCode",{parentName:"li"},"position: fixed"),"\uff0c\u5728\u6709\u79fb\u52a8\u65f6\uff0c\u5c06\u79fb\u52a8\u7684\u504f\u79fb\u91cf\u52a0\u5230\u62d6\u62fd\u5143\u7d20\u7684 ",Object(l.b)("inlineCode",{parentName:"li"},"translate3d")," \u4e0a\u53bb")),Object(l.b)("p",null,"\u56e0\u9879\u76ee\u5b9e\u9645\u9700\u8981\uff0c\u65b9\u6848\u4e00\u91c7\u7528\u4e0d\u4e86\u3002\u63a5\u7740\u6211\u4eec\u770b\u770b\u4e0b\u9762\u4e09\u4e2a\u65b9\u6848\u5982\u4f55\u5b9e\u73b0\u3002"),Object(l.b)("h3",{id:"\u65b9\u6848\u4e8c"},"\u65b9\u6848\u4e8c"),Object(l.b)("pre",null,Object(l.b)("code",r({parentName:"pre"},{className:"language-ts"}),'const container = document.querySelector(".container");\nlet previewELement;\n\nfunction handleDragStart(dragElement) {\n  const { left, top } = dragElement.getBoundingClientRect();\n  previewElement = dragElement.cloneNode(true);\n  previewElement.style.position = "fixed";\n  previewElement.style.left = `${left}px`;\n  previewElement.style.top = `${top}px`;\n  document.body.appendChild(previewElement);\n}\n\nfunction handleDragEnd() {\n  previewElement.remove();\n}\n')),Object(l.b)("h3",{id:"\u65b9\u6848\u4e09"},"\u65b9\u6848\u4e09"),Object(l.b)("pre",null,Object(l.b)("code",r({parentName:"pre"},{className:"language-ts"}),'const container = document.querySelector(".container");\n\nfunction handleDragStart(dragElement) {\n  const {\n    left: parentLeft,\n    top: parentTop\n  } = container.getBoundingClientRect();\n  const { left, top } = dragElement.getBoundingClientRect();\n\n  dragElement.style.position = "fixed";\n  dragElement.style.left = `${left - parentLeft}px`;\n  dragElement.style.top = `${top - parentTop}px`;\n}\n')),Object(l.b)("h3",{id:"\u65b9\u6848\u56db"},"\u65b9\u6848\u56db"),Object(l.b)("p",null,"\u5047\u8bbe\u53ea\u9700\u8981\u5de6\u53f3\u6eda\u52a8\uff0c\u4e0d\u9700\u8981\u4e0a\u4e0b\u6eda\u52a8\u3002"),Object(l.b)("pre",null,Object(l.b)("code",r({parentName:"pre"},{className:"language-ts"}),'const container = document.querySelector(".container");\nlet initScrollLeft, currentScrollLeft;\nlet left, top;\n\nfunction handleDragStart(dragElement) {\n  initScrollLeft = container.scrollLeft;\n  currentScrollLeft = container.currentScrollLeft;\n  container.addEventListener("scroll", handleScroll, false);\n}\n\nfunction handleDragMove(dragElement, movementX, movementY) {\n  left = movementX;\n  top = movementY;\n  setDragPosition(dragElement);\n}\n\nfunction handleDragEnd() {\n  container.removeEventListener("scroll", handleScroll, false);\n}\n\nfunction setDragPosition(dragElement) {\n  const x = left + (currentScrollLeft - initScrollLeft);\n  const y = top;\n  dragElement.style.transform = `translate3d(${x}px, ${y}px, 0px)`;\n}\n\nfunction handleScroll() {\n  currentScrollLeft = container.scrollLeft;\n\n  setDragPosition(dragElement);\n}\n')),Object(l.b)("h3",{id:"\u6700\u7ec8\u9009\u62e9"},"\u6700\u7ec8\u9009\u62e9"),Object(l.b)("p",null,"\u56e0\u79cd\u79cd\u539f\u56e0\uff0c\u7efc\u5408\u8003\u8651\uff0c\u9879\u76ee\u6700\u7ec8\u91c7\u7528\u4e86\u65b9\u6848\u4e09\u3002"),Object(l.b)("h2",{id:"\u5c0f\u7ed3"},"\u5c0f\u7ed3"),Object(l.b)("p",null,"\u5728\u5b9e\u9645\u9879\u76ee\u5f00\u53d1\u4e2d\uff0c\u9047\u5230\u7c7b\u4f3c\u8fd9\u6837\u7684\u95ee\u9898\uff0c\u5efa\u8bae\u5148\u53bb\u4e13\u4e1a\u7ad9\u70b9\u4e0a\u67e5\u770b\u4e00\u4e0b\u4e13\u4e1a\u672f\u8bed\u89e3\u91ca\uff0c\u770b\u770b\u662f\u5426\u771f\u7684\u5b8c\u5168\u4e86\u89e3\u6240\u91c7\u7528\u6280\u672f\u7684\u6982\u5ff5\u3002HTML5\u3001 CSS\u3001 JavaScript \u7b49\u57fa\u7840\u6982\u5ff5\u6027\u5efa\u8bae\u53c2\u8003 ",Object(l.b)("a",r({parentName:"p"},{href:"https://developer.mozilla.org/zh-CN/"}),"MDN"),"\u3002"),Object(l.b)("h2",{id:"\u53c2\u8003\u6587\u6863"},"\u53c2\u8003\u6587\u6863"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",r({parentName:"li"},{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/position"}),"MDN: position"))))}p.isMDXComponent=!0}}]);