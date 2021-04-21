(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{138:function(t,e,r){"use strict";r.r(e),r.d(e,"frontMatter",(function(){return l})),r.d(e,"metadata",(function(){return c})),r.d(e,"toc",(function(){return i})),r.d(e,"default",(function(){return p}));var n=r(3),o=r(7),a=(r(0),r(231)),l={},c={unversionedId:"examples/table_sort_controller.html",id:"examples/table_sort_controller.html",isDocsHomePage:!1,title:"table_sort_controller.html",description:"`html",source:"@site/docs/examples/table_sort_controller.html.mdx",slug:"/examples/table_sort_controller.html",permalink:"/stimulus-library/docs/examples/table_sort_controller.html",version:"current"},i=[],s={toc:i};function p(t){var e=t.components,r=Object(o.a)(t,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:e,mdxType:"MDXLayout"}),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-html"},'<table class="table" data-controller="table-sort">\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Age</th>\n      <th>Email Address</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr data-sort-top="true">\n      <td colspan="3">\n        This row is always at the top\n      </td>\n    </tr>\n    <tr>\n      <td>Sally</td>\n      <td>21</td>\n      <td>sally@example.com</td>\n    </tr>\n    <tr>\n      <td>Trevor</td>\n      <td>45</td>\n      <td>trevor@example.com</td>\n    </tr>\n    <tr>\n      <td>Aiyla</td>\n      <td>32</td>\n      <td>aiyla@example.com</td>\n    </tr>\n    <tr data-sort-bottom="true">\n      <td colspan="3">\n        This row is always at the bottom\n      </td>\n    </tr>\n  </tbody>\n</table>\n')))}p.isMDXComponent=!0},231:function(t,e,r){"use strict";r.d(e,"a",(function(){return u})),r.d(e,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var s=o.a.createContext({}),p=function(t){var e=o.a.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):c(c({},e),t)),r},u=function(t){var e=p(t.components);return o.a.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return o.a.createElement(o.a.Fragment,{},e)}},m=o.a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,a=t.originalType,l=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),u=p(r),m=n,b=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return r?o.a.createElement(b,c(c({ref:e},s),{},{components:r})):o.a.createElement(b,c({ref:e},s))}));function b(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var a=r.length,l=new Array(a);l[0]=m;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=t,c.mdxType="string"==typeof t?t:n,l[1]=c;for(var s=2;s<a;s++)l[s]=r[s];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);