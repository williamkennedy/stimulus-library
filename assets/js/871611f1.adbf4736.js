(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{141:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return c})),n.d(r,"metadata",(function(){return s})),n.d(r,"toc",(function(){return i})),n.d(r,"default",(function(){return l}));var t=n(3),o=n(7),a=(n(0),n(231)),c={},s={unversionedId:"examples/password_confirm_controller.haml",id:"examples/password_confirm_controller.haml",isDocsHomePage:!1,title:"password_confirm_controller.haml",description:"`haml",source:"@site/docs/examples/password_confirm_controller.haml.mdx",slug:"/examples/password_confirm_controller.haml",permalink:"/stimulus-library/docs/examples/password_confirm_controller.haml",version:"current"},i=[],p={toc:i};function l(e){var r=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},p,n,{components:r,mdxType:"MDXLayout"}),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-haml"},'%div{"data-action" => "password-confirm:no-match->errors#do-something", "data-controller" => "password-confirm"}\n  %label{for: "password"} Password\n  %input#password{autocomplete: "new-password", "data-password-confirm-target" => "password", name: "password", type: "password"}/\n  %label{for: "password_confirmation"} Password Confirmation\n  %input#password_confirmation{autocomplete: "new-password", "data-password-confirm-target" => "password", name: "password_confirmation", type: "password"}/\n')))}l.isMDXComponent=!0},231:function(e,r,n){"use strict";n.d(r,"a",(function(){return u})),n.d(r,"b",(function(){return d}));var t=n(0),o=n.n(t);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function c(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var r=o.a.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},u=function(e){var r=l(e.components);return o.a.createElement(p.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},f=o.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),f=t,d=u["".concat(c,".").concat(f)]||u[f]||m[f]||a;return n?o.a.createElement(d,s(s({ref:r},p),{},{components:n})):o.a.createElement(d,s({ref:r},p))}));function d(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var a=n.length,c=new Array(a);c[0]=f;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:t,c[1]=s;for(var p=2;p<a;p++)c[p]=n[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);