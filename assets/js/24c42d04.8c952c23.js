(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{231:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=a.a.createContext({}),p=function(t){var e=a.a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},s=function(t){var e=p(t.components);return a.a.createElement(u.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.a.createElement(a.a.Fragment,{},e)}},m=a.a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,l=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),s=p(n),m=r,b=s["".concat(l,".").concat(m)]||s[m]||d[m]||o;return n?a.a.createElement(b,c(c({ref:e},u),{},{components:n})):a.a.createElement(b,c({ref:e},u))}));function b(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,l=new Array(o);l[0]=m;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=t,c.mdxType="string"==typeof t?t:r,l[1]=c;for(var u=2;u<o;u++)l[u]=n[u];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},89:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return l})),n.d(e,"metadata",(function(){return c})),n.d(e,"toc",(function(){return i})),n.d(e,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(231)),l={},c={unversionedId:"examples/table_truncate_controller.html",id:"examples/table_truncate_controller.html",isDocsHomePage:!1,title:"table_truncate_controller.html",description:"`html",source:"@site/docs/examples/table_truncate_controller.html.mdx",slug:"/examples/table_truncate_controller.html",permalink:"/stimulus-library/docs/examples/table_truncate_controller.html",version:"current"},i=[],u={toc:i};function p(t){var e=t.components,n=Object(a.a)(t,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:e,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-html"},'<table class="table" data-controller="table-truncate" data-table-truncate-limit-value="2">\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Age</th>\n      <th>Email Address</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Sally</td>\n      <td>21</td>\n      <td>sally@example.com</td>\n    </tr>\n    <tr>\n      <td>Trevor</td>\n      <td>45</td>\n      <td>trevor@example.com</td>\n    </tr>\n    <tr>\n      <td>Aiyla</td>\n      <td>32</td>\n      <td>aiyla@example.com</td>\n    </tr>\n    <tr data-table-truncate-target="showMore" class="has-text-centered">\n      <td colspan="3">\n        <a class="button is-primary is-small">Show More</a>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')))}p.isMDXComponent=!0}}]);