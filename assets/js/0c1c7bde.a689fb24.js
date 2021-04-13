(window.webpackJsonp=window.webpackJsonp||[]).push([[9,8,26,32,49,50,76,83,84],{166:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return d})),a.d(t,"metadata",(function(){return f})),a.d(t,"toc",(function(){return h})),a.d(t,"default",(function(){return g}));var n=a(3),r=a(7),l=(a(0),a(225)),o=a(61),c=a(59),i=a(58),s=a(60),b=a(68),m=a(69),u=a(70),p=a(71),d={id:"FallbackImageController",title:"FallbackImageController"},f={unversionedId:"controllers/FallbackImageController",id:"controllers/FallbackImageController",isDocsHomePage:!1,title:"FallbackImageController",description:"Purpose",source:"@site/docs/controllers/fallback_image_controller.mdx",slug:"/controllers/FallbackImageController",permalink:"/stimulus-library/docs/controllers/FallbackImageController",version:"current",sidebar:"someSidebar",previous:{title:"EnableInputsController",permalink:"/stimulus-library/docs/controllers/EnableInputsController"},next:{title:"FormSaveController",permalink:"/stimulus-library/docs/controllers/FormSaveController"}},h=[{value:"Purpose",id:"purpose",children:[]},{value:"Actions",id:"actions",children:[]},{value:"Targets",id:"targets",children:[]},{value:"Classes",id:"classes",children:[]},{value:"Values",id:"values",children:[]},{value:"Events",id:"events",children:[]},{value:"Side Effects",id:"side-effects",children:[]},{value:"HTML",id:"html",children:[]},{value:"HAML",id:"haml",children:[]},{value:"HTML",id:"html-1",children:[]},{value:"HAML",id:"haml-1",children:[]}],O={toc:h};function g(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},O,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"purpose"},"Purpose"),Object(l.b)("p",null,"If an image fails to load from the source, provide a fallback image, or hide it from the DOM altogether to prevent the unsightly little broken-image icon."),Object(l.b)("h2",{id:"actions"},Object(l.b)("a",{parentName:"h2",href:"https://stimulus.hotwire.dev/reference/actions"},"Actions")),Object(l.b)(o.default,{mdxType:"NoActions"}),Object(l.b)("h2",{id:"targets"},Object(l.b)("a",{parentName:"h2",href:"https://stimulus.hotwire.dev/reference/targets"},"Targets")),Object(l.b)(c.default,{mdxType:"NoTargets"}),Object(l.b)("h2",{id:"classes"},Object(l.b)("a",{parentName:"h2",href:"https://stimulus.hotwire.dev/reference/classes"},"Classes")),Object(l.b)(i.default,{mdxType:"NoClasses"}),Object(l.b)("h2",{id:"values"},Object(l.b)("a",{parentName:"h2",href:"https://stimulus.hotwire.dev/reference/values"},"Values")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Value"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"placeholder")," (Optional)"),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null},"The URL of a fallback image to be displayed if the ",Object(l.b)("inlineCode",{parentName:"td"},"<img>"),"'s ",Object(l.b)("inlineCode",{parentName:"td"},"src")," cannot be loaded."),Object(l.b)("td",{parentName:"tr",align:null},"The ",Object(l.b)("inlineCode",{parentName:"td"},"<img>"),"'s ",Object(l.b)("inlineCode",{parentName:"td"},"src"))))),Object(l.b)("h2",{id:"events"},"Events"),Object(l.b)(s.default,{mdxType:"NoEvents"}),Object(l.b)("h2",{id:"side-effects"},"Side Effects"),Object(l.b)("p",null,"None"),Object(l.b)("h1",{id:"how-to-use"},"How to Use"),Object(l.b)("p",null,"To make the image hide from the dom if it fails to load"),Object(l.b)("h2",{id:"html"},"HTML"),Object(l.b)(b.default,{mdxType:"FallbackImageControllerHtml"}),Object(l.b)("h2",{id:"haml"},"HAML"),Object(l.b)(m.default,{mdxType:"FallbackImageControllerHaml"}),Object(l.b)("p",null,"To make the image change its ",Object(l.b)("inlineCode",{parentName:"p"},"src")," to the provided placeholder URL if it fails to load."),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Please note:")," If the placeholder URL you provide fails to load, there is no fallback - the borked image icon may still show. This controller relies on the ",Object(l.b)("inlineCode",{parentName:"p"},"onError")," behaviour of the ",Object(l.b)("inlineCode",{parentName:"p"},"img")," tag, but it may only run once."),Object(l.b)("h2",{id:"html-1"},"HTML"),Object(l.b)(u.default,{mdxType:"FallbackImageControllerPlaceholderHtml"}),Object(l.b)("h2",{id:"haml-1"},"HAML"),Object(l.b)(p.default,{mdxType:"FallbackImageControllerPlaceholderHaml"}))}g.isMDXComponent=!0},225:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},m=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=b(a),p=n,d=m["".concat(o,".").concat(p)]||m[p]||u[p]||l;return a?r.a.createElement(d,c(c({ref:t},s),{},{components:a})):r.a.createElement(d,c({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<l;s++)o[s]=a[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},58:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),l=(a(0),a(225)),o={},c={unversionedId:"_partials/no-classes",id:"_partials/no-classes",isDocsHomePage:!1,title:"no-classes",description:"| Class | Purpose |",source:"@site/docs/_partials/no-classes.md",slug:"/_partials/no-classes",permalink:"/stimulus-library/docs/_partials/no-classes",version:"current"},i=[],s={toc:i};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Class"),Object(l.b)("th",{parentName:"tr",align:null},"Purpose"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"-")),Object(l.b)("td",{parentName:"tr",align:null},"-")))))}b.isMDXComponent=!0},59:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),l=(a(0),a(225)),o={},c={unversionedId:"_partials/no-targets",id:"_partials/no-targets",isDocsHomePage:!1,title:"no-targets",description:"| Target | Purpose | Default |",source:"@site/docs/_partials/no-targets.md",slug:"/_partials/no-targets",permalink:"/stimulus-library/docs/_partials/no-targets",version:"current"},i=[],s={toc:i};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Target"),Object(l.b)("th",{parentName:"tr",align:null},"Purpose"),Object(l.b)("th",{parentName:"tr",align:null},"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"-")),Object(l.b)("td",{parentName:"tr",align:null},"-"),Object(l.b)("td",{parentName:"tr",align:null},"-")))))}b.isMDXComponent=!0},60:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),l=(a(0),a(225)),o={},c={unversionedId:"_partials/no-events",id:"_partials/no-events",isDocsHomePage:!1,title:"no-events",description:"| Event | When | Dispatched on | event.detail |",source:"@site/docs/_partials/no-events.md",slug:"/_partials/no-events",permalink:"/stimulus-library/docs/_partials/no-events",version:"current"},i=[],s={toc:i};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Event"),Object(l.b)("th",{parentName:"tr",align:null},"When"),Object(l.b)("th",{parentName:"tr",align:null},"Dispatched on"),Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"th"},"event.detail")))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"-")),Object(l.b)("td",{parentName:"tr",align:null},"-"),Object(l.b)("td",{parentName:"tr",align:null},"-"),Object(l.b)("td",{parentName:"tr",align:null},"-")))))}b.isMDXComponent=!0},61:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),l=(a(0),a(225)),o={},c={unversionedId:"_partials/no-actions",id:"_partials/no-actions",isDocsHomePage:!1,title:"no-actions",description:"| Action | Purpose |",source:"@site/docs/_partials/no-actions.md",slug:"/_partials/no-actions",permalink:"/stimulus-library/docs/_partials/no-actions",version:"current"},i=[],s={toc:i};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Action"),Object(l.b)("th",{parentName:"tr",align:null},"Purpose"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"-")),Object(l.b)("td",{parentName:"tr",align:null},"-")))))}b.isMDXComponent=!0},68:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),l=(a(0),a(225)),o={},c={unversionedId:"examples/fallback_image_controller.html",id:"examples/fallback_image_controller.html",isDocsHomePage:!1,title:"fallback_image_controller.html",description:"`html",source:"@site/docs/examples/fallback_image_controller.html.mdx",slug:"/examples/fallback_image_controller.html",permalink:"/stimulus-library/docs/examples/fallback_image_controller.html",version:"current"},i=[],s={toc:i};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-html"},'<img src="/cats/mr-tibbins.jpg" alt="Cat wearing Bowtie" data-controller="fallback-image"/>\n')))}b.isMDXComponent=!0},69:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),l=(a(0),a(225)),o={},c={unversionedId:"examples/fallback_image_controller.haml",id:"examples/fallback_image_controller.haml",isDocsHomePage:!1,title:"fallback_image_controller.haml",description:"`haml",source:"@site/docs/examples/fallback_image_controller.haml.mdx",slug:"/examples/fallback_image_controller.haml",permalink:"/stimulus-library/docs/examples/fallback_image_controller.haml",version:"current"},i=[],s={toc:i};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haml"},'%img{alt: "Cat wearing Bowtie", "data-controller" => "fallback-image", src: "/cats/mr-tibbins.jpg"}/\n')))}b.isMDXComponent=!0},70:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),l=(a(0),a(225)),o={},c={unversionedId:"examples/fallback_image_controller_placeholder.html",id:"examples/fallback_image_controller_placeholder.html",isDocsHomePage:!1,title:"fallback_image_controller_placeholder.html",description:"`html",source:"@site/docs/examples/fallback_image_controller_placeholder.html.mdx",slug:"/examples/fallback_image_controller_placeholder.html",permalink:"/stimulus-library/docs/examples/fallback_image_controller_placeholder.html",version:"current"},i=[],s={toc:i};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-html"},'<img src="/cats/mr-tibbins.jpg" alt="Cat wearing Bowtie" data-controller="fallback-image" data-fallback-placeholder-value="https://placehold.it/200"/>\n')))}b.isMDXComponent=!0},71:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),l=(a(0),a(225)),o={},c={unversionedId:"examples/fallback_image_controller_placeholder.haml",id:"examples/fallback_image_controller_placeholder.haml",isDocsHomePage:!1,title:"fallback_image_controller_placeholder.haml",description:"`haml",source:"@site/docs/examples/fallback_image_controller_placeholder.haml.mdx",slug:"/examples/fallback_image_controller_placeholder.haml",permalink:"/stimulus-library/docs/examples/fallback_image_controller_placeholder.haml",version:"current"},i=[],s={toc:i};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haml"},'%img{alt: "Cat wearing Bowtie", "data-controller" => "fallback-image", "data-fallback-placeholder-value" => "https://placehold.it/200", src: "/cats/mr-tibbins.jpg"}/\n')))}b.isMDXComponent=!0}}]);