(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{231:function(e,r,t){"use strict";t.d(r,"a",(function(){return s})),t.d(r,"b",(function(){return d}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=o.a.createContext({}),u=function(e){var r=o.a.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},s=function(e){var r=u(e.components);return o.a.createElement(i.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},f=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),s=u(t),f=n,d=s["".concat(c,".").concat(f)]||s[f]||m[f]||a;return t?o.a.createElement(d,p(p({ref:r},i),{},{components:t})):o.a.createElement(d,p({ref:r},i))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,c=new Array(a);c[0]=f;var p={};for(var l in r)hasOwnProperty.call(r,l)&&(p[l]=r[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var i=2;i<a;i++)c[i]=t[i];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},98:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return p})),t.d(r,"toc",(function(){return l})),t.d(r,"default",(function(){return u}));var n=t(3),o=t(7),a=(t(0),t(231)),c={},p={unversionedId:"examples/appearance_controller.html",id:"examples/appearance_controller.html",isDocsHomePage:!1,title:"appearance_controller.html",description:"`html",source:"@site/docs/examples/appearance_controller.html.mdx",slug:"/examples/appearance_controller.html",permalink:"/stimulus-library/docs/examples/appearance_controller.html",version:"current"},l=[],i={toc:l};function u(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},i,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-html"},'<video controls data-controller="appearance" data-action="appearance:appear->video-player#play appearance:away->video-player#pause">\n  <source src="movie.mp4" type="video/mp4">\n  <source src="movie.ogg" type="video/ogg">\n  Your browser does not support the video tag.\n</video>```\n')))}u.isMDXComponent=!0}}]);