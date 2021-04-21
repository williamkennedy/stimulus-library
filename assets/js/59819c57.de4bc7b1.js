(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{122:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return l})),r.d(n,"metadata",(function(){return c})),r.d(n,"toc",(function(){return i})),r.d(n,"default",(function(){return p}));var t=r(3),a=r(7),o=(r(0),r(231)),l={},c={unversionedId:"examples/form_save_controller.haml",id:"examples/form_save_controller.haml",isDocsHomePage:!1,title:"form_save_controller.haml",description:"`haml",source:"@site/docs/examples/form_save_controller.haml.mdx",slug:"/examples/form_save_controller.haml",permalink:"/stimulus-library/docs/examples/form_save_controller.haml",version:"current"},i=[],u={toc:i};function p(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},u,r,{components:n,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-haml"},'%form#test-form{ data: { controller: "form-save"}}\n  %div\n    %label\n      Name\n      %input{ type: "text", name: "name"}\n\n  %div\n    %label\n      Age\n      %input{ type: "number", name: "age"}\n\n  %div\n    %label\n      Quest\n      %textarea{ name: "quest"}\n\n\n  %div\n    %label\n      Do you like cake?\n      %input{ type: "checkbox", name: "gorilla"}\n\n  %br\n  %div\n    %p Favourite Ice Cream\n    %br\n    %label\n      Mint\n      %input{ type: "radio", name: "ice_cream", value: "Mint"}\n    %label\n      Chocolate\n      %input{ type: "radio", name: "ice_cream", value: "Chocolate"}\n    %label\n      Vanilla\n      %input{ type: "radio", name: "ice_cream", value: "Vanilla"}\n  %hr\n\n  %div\n    %a{ href: "", data: {action:"form-save#restore"}} Restore saved progress\n  %div\n    %a{ href: "", data: {action:"form-save#save"}} Save your progress\n\n  %div\n    %button{ type: "reset" } reset\n    %button{ type: "submit" } submit```\n')))}p.isMDXComponent=!0},231:function(e,n,r){"use strict";r.d(n,"a",(function(){return m})),r.d(n,"b",(function(){return b}));var t=r(0),a=r.n(t);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),p=function(e){var n=a.a.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},m=function(e){var n=p(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},f=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(r),f=t,b=m["".concat(l,".").concat(f)]||m[f]||s[f]||o;return r?a.a.createElement(b,c(c({ref:n},u),{},{components:r})):a.a.createElement(b,c({ref:n},u))}));function b(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,l=new Array(o);l[0]=f;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:t,l[1]=c;for(var u=2;u<o;u++)l[u]=r[u];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);