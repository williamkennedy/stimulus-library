(window.webpackJsonp=window.webpackJsonp||[]).push([[153,8,78,127,139],{154:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),l=(n(0),n(231)),o={},c={unversionedId:"examples/clipboard_controller.haml",id:"examples/clipboard_controller.haml",isDocsHomePage:!1,title:"clipboard_controller.haml",description:"`haml",source:"@site/docs/examples/clipboard_controller.haml.mdx",slug:"/examples/clipboard_controller.haml",permalink:"/stimulus-library/docs/examples/clipboard_controller.haml",version:"current"},i=[],b={toc:i};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haml"},'%p PIN:\n.input-group{"data-clipboard-remove-unused-value" => "true", "data-controller" => "clipboard"}\n  %input.input.input-group-field{"data-clipboard-target" => "source", readonly: "readonly", type: "text", value: "1234"}/\n  %a.button.input-group-button.clipboard-button{"data-action" => "clipboard#copy", href: "#"}\n    %span{"data-clipboard-target" => "copy"}\n      %i.far.fa-clipboard\n      Copy\n    %span{"data-clipboard-target" => "fallback"}\n      %i.far.fa-hand-pointer\n      Select\n')))}p.isMDXComponent=!0},157:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),l=(n(0),n(231)),o={},c={unversionedId:"examples/clipboard_controller.html",id:"examples/clipboard_controller.html",isDocsHomePage:!1,title:"clipboard_controller.html",description:"`html",source:"@site/docs/examples/clipboard_controller.html.mdx",slug:"/examples/clipboard_controller.html",permalink:"/stimulus-library/docs/examples/clipboard_controller.html",version:"current"},i=[],b={toc:i};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-html"},'<p> PIN:</p>\n<div class="input-group" data-controller="clipboard" data-clipboard-remove-unused-value="true">\n  <input type="text" class="input input-group-field" data-clipboard-target="source" readonly="readonly" value="1234"/>\n  <a href="#" class="button input-group-button clipboard-button" data-action="clipboard#copy">\n    <span data-clipboard-target="copy">\n      <i class="far fa-clipboard"></i>\n      Copy\n    </span>\n    <span data-clipboard-target="fallback">\n      <i class="far fa-hand-pointer"></i>\n      Select\n    </span>\n  </a>\n</div>\n')))}p.isMDXComponent=!0},225:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return m}));var r=n(3),a=n(7),l=(n(0),n(231)),o=n(58),c=n(60),i=n(157),b=n(154),p={id:"ClipboardController",title:"ClipboardController"},s={unversionedId:"controllers/ClipboardController",id:"controllers/ClipboardController",isDocsHomePage:!1,title:"ClipboardController",description:"Purpose",source:"@site/docs/controllers/clipboard_controller.mdx",slug:"/controllers/ClipboardController",permalink:"/stimulus-library/docs/controllers/ClipboardController",version:"current",sidebar:"someSidebar",previous:{title:"CheckboxSelectAllController",permalink:"/stimulus-library/docs/controllers/CheckboxSelectAllController"},next:{title:"ConfirmController",permalink:"/stimulus-library/docs/controllers/ConfirmController"}},d=[{value:"Purpose",id:"purpose",children:[]},{value:"Actions",id:"actions",children:[]},{value:"Targets",id:"targets",children:[]},{value:"Classes",id:"classes",children:[]},{value:"Values",id:"values",children:[]},{value:"Events",id:"events",children:[]},{value:"Side Effects",id:"side-effects",children:[]},{value:"HTML",id:"html",children:[]},{value:"HAML",id:"haml",children:[]}],u={toc:d};function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"purpose"},"Purpose"),Object(l.b)("p",null,"Controller for adding 'copy-to-clipboard' functionality to a link/button/etc, with support for progressive enhancement."),Object(l.b)("p",null,"If 'copy' is supported, the controller will select the contents of the given input and execute a \"copy\"."),Object(l.b)("p",null,"If 'copy' is NOT supported by the browser the controller will simply select the contents of the given input for the user to be able to copy manually."),Object(l.b)("p",null,'You can also wire up the controller to have a copy button, and an optional fallback button (i.e. "Select this text") to show if clipboard controls are not supported by the user\'s browser. Setting the ',Object(l.b)("inlineCode",{parentName:"p"},"removeUnused")," value to ",Object(l.b)("inlineCode",{parentName:"p"},"true")," will make the controller remove whichever target is unused."),Object(l.b)("h2",{id:"actions"},Object(l.b)("a",{parentName:"h2",href:"https://stimulus.hotwire.dev/reference/actions"},"Actions")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Action"),Object(l.b)("th",{parentName:"tr",align:null},"Purpose"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"select")),Object(l.b)("td",{parentName:"tr",align:null},"Selects the content of the ",Object(l.b)("inlineCode",{parentName:"td"},"source")," target")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"copy")),Object(l.b)("td",{parentName:"tr",align:null},"Selects the content of the ",Object(l.b)("inlineCode",{parentName:"td"},"source")," target, and executes a copy, if supported")))),Object(l.b)("h2",{id:"targets"},Object(l.b)("a",{parentName:"h2",href:"https://stimulus.hotwire.dev/reference/targets"},"Targets")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Target"),Object(l.b)("th",{parentName:"tr",align:null},"Purpose"),Object(l.b)("th",{parentName:"tr",align:null},"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"source")),Object(l.b)("td",{parentName:"tr",align:null},"The ",Object(l.b)("inlineCode",{parentName:"td"},"<input>"),", ",Object(l.b)("inlineCode",{parentName:"td"},"<select>")," or ",Object(l.b)("inlineCode",{parentName:"td"},"<textarea>")," to select/copy the value from"),Object(l.b)("td",{parentName:"tr",align:null},"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"copy")," (Optional)"),Object(l.b)("td",{parentName:"tr",align:null},"The element to remove if ",Object(l.b)("inlineCode",{parentName:"td"},"removeUnused"),"  value is ",Object(l.b)("inlineCode",{parentName:"td"},"true")," and copy ",Object(l.b)("strong",{parentName:"td"},"is")," supported"),Object(l.b)("td",{parentName:"tr",align:null},"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"fallback")," (Optional)"),Object(l.b)("td",{parentName:"tr",align:null},"The element to remove if ",Object(l.b)("inlineCode",{parentName:"td"},"removeUnused")," value  is ",Object(l.b)("inlineCode",{parentName:"td"},"true")," and copy is ",Object(l.b)("strong",{parentName:"td"},"not")," supported"),Object(l.b)("td",{parentName:"tr",align:null},"-")))),Object(l.b)("h2",{id:"classes"},Object(l.b)("a",{parentName:"h2",href:"https://stimulus.hotwire.dev/reference/classes"},"Classes")),Object(l.b)(o.default,{mdxType:"NoClasses"}),Object(l.b)("h2",{id:"values"},Object(l.b)("a",{parentName:"h2",href:"https://stimulus.hotwire.dev/reference/values"},"Values")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Value"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"removeUnusedValue")),Object(l.b)("td",{parentName:"tr",align:null},"Boolean"),Object(l.b)("td",{parentName:"tr",align:null},"If ",Object(l.b)("inlineCode",{parentName:"td"},"copy")," is not supported by the browser, remove the ",Object(l.b)("inlineCode",{parentName:"td"},"copy")," target from the DOM. Otherwise remove the ",Object(l.b)("inlineCode",{parentName:"td"},"fallback")," target"),Object(l.b)("td",{parentName:"tr",align:null},"false")))),Object(l.b)("h2",{id:"events"},"Events"),Object(l.b)(c.default,{mdxType:"NoEvents"}),Object(l.b)("h2",{id:"side-effects"},"Side Effects"),Object(l.b)("p",null,"None"),Object(l.b)("h1",{id:"how-to-use"},"How to Use"),Object(l.b)("h2",{id:"html"},"HTML"),Object(l.b)(i.default,{mdxType:"ClipboardControllerHtml"}),Object(l.b)("h2",{id:"haml"},"HAML"),Object(l.b)(b.default,{mdxType:"ClipboardControllerHaml"}))}m.isMDXComponent=!0},231:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),s=p(n),u=r,m=s["".concat(o,".").concat(u)]||s[u]||d[u]||l;return n?a.a.createElement(m,c(c({ref:t},b),{},{components:n})):a.a.createElement(m,c({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var b=2;b<l;b++)o[b]=n[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},58:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),l=(n(0),n(231)),o={},c={unversionedId:"_partials/no-classes",id:"_partials/no-classes",isDocsHomePage:!1,title:"no-classes",description:"| Class | Purpose |",source:"@site/docs/_partials/no-classes.md",slug:"/_partials/no-classes",permalink:"/stimulus-library/docs/_partials/no-classes",version:"current"},i=[],b={toc:i};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Class"),Object(l.b)("th",{parentName:"tr",align:null},"Purpose"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"-")),Object(l.b)("td",{parentName:"tr",align:null},"-")))))}p.isMDXComponent=!0},60:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),l=(n(0),n(231)),o={},c={unversionedId:"_partials/no-events",id:"_partials/no-events",isDocsHomePage:!1,title:"no-events",description:"| Event | When | Dispatched on | event.detail |",source:"@site/docs/_partials/no-events.md",slug:"/_partials/no-events",permalink:"/stimulus-library/docs/_partials/no-events",version:"current"},i=[],b={toc:i};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Event"),Object(l.b)("th",{parentName:"tr",align:null},"When"),Object(l.b)("th",{parentName:"tr",align:null},"Dispatched on"),Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"th"},"event.detail")))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"-")),Object(l.b)("td",{parentName:"tr",align:null},"-"),Object(l.b)("td",{parentName:"tr",align:null},"-"),Object(l.b)("td",{parentName:"tr",align:null},"-")))))}p.isMDXComponent=!0}}]);