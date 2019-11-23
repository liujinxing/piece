/*! For license information please see common.b99a74fa.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{145:function(e,t,a){"use strict";a(50);var n=a(0),r=a.n(n),c=a(46);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var o=/^\/(?!\/)/;t.a=function(e){var t,a=e.to,i=e.href,s=a||i,u=o.test(s),d=!1,f="undefined"!=typeof window&&"IntersectionObserver"in window;return Object(n.useEffect)((function(){return!f&&u&&window.docusaurus.prefetch(s),function(){f&&t&&t.disconnect()}}),[s,f,u]),s&&u?r.a.createElement(c.b,l({},e,{onMouseEnter:function(){d||(window.docusaurus.preload(s),d=!0)},innerRef:function(e){var a,n;f&&e&&u&&(a=e,n=function(){window.docusaurus.prefetch(s)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){a===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(a),t.disconnect(),n())}))}))).observe(a))},to:s})):r.a.createElement("a",l({},e,{href:s}))}},146:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)&&n.length){var l=r.apply(null,n);l&&e.push(l)}else if("object"===c)for(var o in n)a.call(n,o)&&n[o]&&e.push(o)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},147:function(e,t,a){"use strict";var n=a(0),r=a(63);t.a=function(){return Object(n.useContext)(r.a)}},148:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(52),l=a(147),o=a(149),i=(a(50),a(23),a(18),a(19),a(51),a(145)),s=function(){return null},u=a(156),d=a.n(u),f=a(146),h=a.n(f),m=a(123),v=a.n(m);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var g=function(){return r.a.createElement("span",{className:h()(v.a.toggle,v.a.moon)})},b=function(){return r.a.createElement("span",{className:h()(v.a.toggle,v.a.sun)})},k=function(e){return r.a.createElement(d.a,p({icons:{checked:r.a.createElement(g,null),unchecked:r.a.createElement(b,null)}},e))},y=function(){var e=n.useState("undefined"!=typeof document?document.querySelector("html").getAttribute("data-theme"):""),t=e[0],a=e[1];return n.useEffect((function(){try{a(localStorage.getItem("theme"))}catch(e){console.error(e)}}),[a]),[t,n.useCallback((function(e){try{localStorage.setItem("theme",e),a(e)}catch(t){console.error(t)}}),[a])]},E=a(124),_=a.n(E);function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function w(e){var t=e.to,a=e.href,n=e.label,c=(e.position,function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["to","href","label","position"])),l=Object(o.a)(t);return r.a.createElement(i.a,O({className:"navbar__item navbar__link"},a?{target:"_blank",rel:"noopener noreferrer",href:a}:{activeClassName:"navbar__link--active",to:l},c),n)}var N=function(){var e=Object(l.a)(),t=Object(n.useState)(!1),a=t[0],u=t[1],d=Object(n.useState)(!1),f=d[0],m=d[1],v=y(),p=v[0],g=v[1],b=e.siteConfig,E=void 0===b?{}:b,N=E.baseUrl,j=E.themeConfig,C=void 0===j?{}:j,x=C.navbar,T=void 0===x?{}:x,S=C.disableDarkMode,M=void 0!==S&&S,P=T.title,F=T.logo,X=void 0===F?{}:F,B=T.links,I=void 0===B?[]:B,L=Object(n.useCallback)((function(){u(!0)}),[u]),D=Object(n.useCallback)((function(){u(!1)}),[u]),A=Object(n.useCallback)((function(e){return g(e.target.checked?"dark":"")}),[g]),R=Object(o.a)(X.src);return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null,r.a.createElement("html",{lang:"en","data-theme":p})),r.a.createElement("nav",{className:h()("navbar","navbar--light","navbar--fixed-top",{"navbar-sidebar--show":a})},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:L,onKeyDown:L},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(i.a,{className:"navbar__brand",to:N},null!=X&&r.a.createElement("img",{className:"navbar__logo",src:R,alt:X.alt}),null!=P&&r.a.createElement("strong",{className:f?_.a.hideLogoText:""},P)),I.filter((function(e){return"right"!==e.position})).map((function(e,t){return r.a.createElement(w,O({},e,{key:t}))}))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},I.filter((function(e){return"right"===e.position})).map((function(e,t){return r.a.createElement(w,O({},e,{key:t}))})),!M&&r.a.createElement(k,{className:_.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:"dark"===p,onChange:A}),r.a.createElement(s,{handleSearchBarToggle:m,isSearchBarExpanded:f}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:function(){u(!1)}}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(i.a,{className:"navbar__brand",onClick:D,to:N},null!=X&&r.a.createElement("img",{className:"navbar__logo",src:R,alt:X.alt}),null!=P&&r.a.createElement("strong",null,P)),!M&&a&&r.a.createElement(k,{"aria-label":"Dark mode toggle in sidebar",checked:"dark"===p,onChange:A})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},I.map((function(e,t){return r.a.createElement("li",{className:"menu__list-item",key:t},r.a.createElement(w,O({className:"menu__link"},e,{onClick:D})))}))))))))},j=a(125),C=a.n(j);function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function T(e){var t=e.to,a=e.href,n=e.label,c=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["to","href","label"]),l=Object(o.a)(t);return r.a.createElement(i.a,x({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:a}:{to:l},c),n)}var S=function(e){var t=e.url,a=e.alt;return r.a.createElement("img",{className:"footer__logo",alt:a,src:t})};var M=function(){var e=Object(l.a)().siteConfig,t=(void 0===e?{}:e).themeConfig,a=(void 0===t?{}:t).footer,n=a||{},c=n.copyright,i=n.links,s=void 0===i?[]:i,u=n.logo,d=void 0===u?{}:u,f=Object(o.a)(d.src);return a?r.a.createElement("footer",{className:h()("footer",{"footer--dark":"dark"===a.style})},r.a.createElement("div",{className:"container"},s&&s.length>0&&r.a.createElement("div",{className:"row footer__links"},s.map((function(e,t){return r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?r.a.createElement("div",{key:t,dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(T,e))}))):null)}))),(d||c)&&r.a.createElement("div",{className:"text--center"},d&&d.src&&r.a.createElement("div",{className:"margin-bottom--sm"},d.href?r.a.createElement("a",{href:d.href,target:"_blank",rel:"noopener noreferrer",className:C.a.footerLogoLink},r.a.createElement(S,{alt:d.alt,url:f})):r.a.createElement(S,{alt:d.alt,url:f})),c))):null};a(126);t.a=function(e){var t=Object(l.a)().siteConfig,a=void 0===t?{}:t,n=a.favicon,i=a.tagline,s=a.title,u=a.themeConfig.image,d=a.url,f=e.children,h=e.title,m=e.noFooter,v=e.description,p=e.image,g=e.keywords,b=e.permalink,k=h||s+" \xb7 "+i,y=p||u,E=d+Object(o.a)(y),_=Object(o.a)(n);return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null,r.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),k&&r.a.createElement("title",null,k),k&&r.a.createElement("meta",{property:"og:title",content:k}),n&&r.a.createElement("link",{rel:"shortcut icon",href:_}),v&&r.a.createElement("meta",{name:"description",content:v}),v&&r.a.createElement("meta",{property:"og:description",content:v}),g&&g.length&&r.a.createElement("meta",{name:"keywords",content:g.join(",")}),y&&r.a.createElement("meta",{property:"og:image",content:E}),y&&r.a.createElement("meta",{property:"twitter:image",content:E}),y&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+k}),b&&r.a.createElement("meta",{property:"og:url",content:d+b}),r.a.createElement("meta",{name:"twitter:card",content:"summary"})),r.a.createElement(N,null),r.a.createElement("div",{className:"main-wrapper"},f),!m&&r.a.createElement(M,null))}},149:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));a(155);var n=a(147);function r(e){var t=(Object(n.a)().siteConfig||{}).baseUrl,a=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?a+e.slice(1):a+e}},151:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n),c=r.a.createContext({}),l=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):Object.assign({},t,e)),a},o=function(e){var t=l(e.components);return r.a.createElement(c.Provider,{value:t},e.children)};var i="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,i=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}(e,["components","mdxType","originalType","parentName"]),u=l(a),d=n,f=u[o+"."+d]||u[d]||s[d]||c;return a?r.a.createElement(f,Object.assign({},{ref:t},i,{components:a})):r.a.createElement(f,Object.assign({},{ref:t},i))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,l=new Array(c);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[i]="string"==typeof e?e:n,l[1]=o;for(var d=2;d<c;d++)l[d]=a[d];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},153:function(e,t,a){var n=a(76),r=a(26);e.exports=function(e,t,a){if(n(t))throw TypeError("String#"+a+" doesn't accept regex!");return String(r(e))}},154:function(e,t,a){var n=a(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(a){try{return t[n]=!1,!"/./"[e](t)}catch(r){}}return!0}},155:function(e,t,a){"use strict";var n=a(13),r=a(33),c=a(153),l="".startsWith;n(n.P+n.F*a(154)("startsWith"),"String",{startsWith:function(e){var t=c(this,e,"startsWith"),a=r(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),n=String(e);return l?l.call(t,n,a):t.slice(a,a+n.length)===n}})},156:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a(0),l=f(c),o=f(a(146)),i=f(a(11)),s=f(a(157)),u=f(a(158)),d=a(159);function f(e){return e&&e.__esModule?e:{default:e}}var h=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,r=(t.icons,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["className","icons"])),c=(0,o.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return l.default.createElement("div",{className:c,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},l.default.createElement("div",{className:"react-toggle-track"},l.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),l.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),l.default.createElement("div",{className:"react-toggle-thumb"}),l.default.createElement("input",n({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(c.PureComponent);t.default=h,h.displayName="Toggle",h.defaultProps={icons:{checked:l.default.createElement(s.default,null),unchecked:l.default.createElement(u.default,null)}},h.propTypes={checked:i.default.bool,disabled:i.default.bool,defaultChecked:i.default.bool,onChange:i.default.func,onFocus:i.default.func,onBlur:i.default.func,className:i.default.string,name:i.default.string,value:i.default.string,id:i.default.string,"aria-labelledby":i.default.string,"aria-label":i.default.string,icons:i.default.oneOfType([i.default.bool,i.default.shape({checked:i.default.node,unchecked:i.default.node})])}},157:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},c.default.createElement("title",null,"switch-check"),c.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},158:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},c.default.createElement("title",null,"switch-x"),c.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},159:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}}}]);