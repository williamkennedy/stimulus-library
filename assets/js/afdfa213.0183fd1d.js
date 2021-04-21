(window.webpackJsonp=window.webpackJsonp||[]).push([[116,8,41,58,78],{104:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),o=(n(0),n(231)),l={},s={unversionedId:"examples/nested_form_controller.haml",id:"examples/nested_form_controller.haml",isDocsHomePage:!1,title:"nested_form_controller.haml",description:"`haml",source:"@site/docs/examples/nested_form_controller.haml.mdx",slug:"/examples/nested_form_controller.haml",permalink:"/stimulus-library/docs/examples/nested_form_controller.haml",version:"current"},i=[],c={toc:i};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-haml"},'-#\x3c!-- FILE: tasks/form --\x3e\n\n-#\x3c!--\n-#.....\n-#Parent association fields\n-#.....\n-#--\x3e\n\n%h4 Tasks\n%div{ data: { controller: "nested-form" } }\n  %script{ type: "text/x-template", data: { nested_form_target: "template" } }\n    = f.simple_fields_for :tasks, Task.new, child_index: \'NEW_RECORD\' do |task|\n      = render "task_fields", f: task\n\n  %div{ data: { nested_form_target: "target"} }\n    = f.simple_fields_for :tasks do |task|\n      = render "task_fields", f: task\n\n  = link_to "Add Task", "#", class: "button green", data: { action: "click->nested-form#add" }\n\n-#\x3c!--\n-#.....\n-#Parent association fields\n-#.....\n-#--\x3e\n\n\n\n\n\n\n\n-#\x3c!-- FILE: tasks/_task_fields --\x3e\n= content_tag :div, class: "nested-fields", data: { new_record: f.object.new_record? } do\n  .form-group\n    = f.label :description\n    = f.text_field :description, class: \'form-control\'\n\n  %small= link_to "Remove", "#", data: { action: "click->nested-form#remove" }\n  = f.hidden_field :_destroy```\n')))}d.isMDXComponent=!0},117:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),o=(n(0),n(231)),l={},s={unversionedId:"examples/nested_form_controller.erb",id:"examples/nested_form_controller.erb",isDocsHomePage:!1,title:"nested_form_controller.erb",description:"`erb",source:"@site/docs/examples/nested_form_controller.erb.mdx",slug:"/examples/nested_form_controller.erb",permalink:"/stimulus-library/docs/examples/nested_form_controller.erb",version:"current"},i=[],c={toc:i};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-erb"},'\x3c!-- FILE: tasks/form--\x3e\n\n\x3c!--\n.....\nParent association fields\n.....\n--\x3e\n\n<h4> Tasks</h4>\n<div data-controller="nested-form">\n  <script type="text/x-template" data-nested-form-target="template">\n    <%= f.simple_fields_for :tasks, Task.new, child_index: \'NEW_RECORD\' do |task| %>\n      <%= render "task_fields", f: task %>\n    <% end %>\n  <\/script>\n\n  <div data-nested-form-target="target">\n    <%= f.simple_fields_for :tasks do |task| %>\n      <%= render "task_fields", f: task %>\n    <% end %>\n  </div>\n\n  <%= link_to "Add Task", "#", class: "button green", data: { action: "click->nested-form#add" } %>\n</div>\n\x3c!--\n.....\nParent association fields\n.....\n--\x3e\n\n\n\n\n\n\n\n\x3c!-- FILE: tasks/_task_fields --\x3e\n<div class="nested-fields" data-new-record="<%= f.object.new_record? %>">\n  <div class="form-group">\n    <%= f.label :description %>\n    <%= f.text_field :description, class: \'form-control\' %>\n  </div>\n  <small><%= link_to "Remove", "#", data: { action: "click->nested-form#remove" } %></small>\n  <%= f.hidden_field :_destroy %>\n</div>\n')))}d.isMDXComponent=!0},214:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return d})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(231)),l=n(58),s=n(60),i=n(117),c=n(104),d={id:"NestedFormController",title:"NestedFormController"},b={unversionedId:"controllers/NestedFormController",id:"controllers/NestedFormController",isDocsHomePage:!1,title:"NestedFormController",description:"Purpose",source:"@site/docs/controllers/nested_form_controller.mdx",slug:"/controllers/NestedFormController",permalink:"/stimulus-library/docs/controllers/NestedFormController",version:"current",sidebar:"someSidebar",previous:{title:"LimitedSelectionCheckboxesController",permalink:"/stimulus-library/docs/controllers/LimitedSelectionCheckboxesController"},next:{title:"PasswordConfirmController",permalink:"/stimulus-library/docs/controllers/PasswordConfirmController"}},p=[{value:"Purpose",id:"purpose",children:[]},{value:"Actions",id:"actions",children:[]},{value:"Targets",id:"targets",children:[]},{value:"Classes",id:"classes",children:[]},{value:"Values",id:"values",children:[]},{value:"Events",id:"events",children:[]},{value:"Side Effects",id:"side-effects",children:[]},{value:"HTML",id:"html",children:[]},{value:"HAML",id:"haml",children:[]}],m={toc:p};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"purpose"},"Purpose"),Object(o.b)("p",null,"Primarily for Rails ",Object(o.b)("inlineCode",{parentName:"p"},"accepts_nested_attributes_for")," associations, enabling a form interface that allows a user to added and remove sub-records."),Object(o.b)("h2",{id:"actions"},Object(o.b)("a",{parentName:"h2",href:"https://stimulus.hotwire.dev/reference/actions"},"Actions")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Action"),Object(o.b)("th",{parentName:"tr",align:null},"Purpose"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"add")),Object(o.b)("td",{parentName:"tr",align:null},"Add a new record to the form using the given template")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"remove")),Object(o.b)("td",{parentName:"tr",align:null},"Remove the nearest parent record from the form. If the record is a new record, just removes it from the DOm, otherwise looks for a hidden input with ",Object(o.b)("inlineCode",{parentName:"td"},'name="_destroy"')," sets it to ",Object(o.b)("inlineCode",{parentName:"td"},"1")," (true) and hides the record using ",Object(o.b)("inlineCode",{parentName:"td"},"display: none"))))),Object(o.b)("h2",{id:"targets"},Object(o.b)("a",{parentName:"h2",href:"https://stimulus.hotwire.dev/reference/targets"},"Targets")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Target"),Object(o.b)("th",{parentName:"tr",align:null},"Purpose"),Object(o.b)("th",{parentName:"tr",align:null},"Default"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"template")),Object(o.b)("td",{parentName:"tr",align:null},"The ",Object(o.b)("inlineCode",{parentName:"td"},"<template>")," or ",Object(o.b)("inlineCode",{parentName:"td"},'<script type="text/x-template">')," tag containing the HTML for a sub record."),Object(o.b)("td",{parentName:"tr",align:null},"-")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"target")),Object(o.b)("td",{parentName:"tr",align:null},"Where to add the created sub-records."),Object(o.b)("td",{parentName:"tr",align:null},"-")))),Object(o.b)("h2",{id:"classes"},Object(o.b)("a",{parentName:"h2",href:"https://stimulus.hotwire.dev/reference/classes"},"Classes")),Object(o.b)(l.default,{mdxType:"NoClasses"}),Object(o.b)("h2",{id:"values"},Object(o.b)("a",{parentName:"h2",href:"https://stimulus.hotwire.dev/reference/values"},"Values")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Value"),Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Description"),Object(o.b)("th",{parentName:"tr",align:null},"Default"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"wrapperClass")),Object(o.b)("td",{parentName:"tr",align:null},"String"),Object(o.b)("td",{parentName:"tr",align:null},"The class of the ",Object(o.b)("inlineCode",{parentName:"td"},"<div>")," that wraps each sub-record."),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"nested-fields"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"insert")),Object(o.b)("td",{parentName:"tr",align:null},"String"),Object(o.b)("td",{parentName:"tr",align:null},"How to insert records around ",Object(o.b)("inlineCode",{parentName:"td"},"target"),". Accepts any one of the parameters accepted by ",Object(o.b)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML"},Object(o.b)("inlineCode",{parentName:"a"},"insertAdjacentHTML"))),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"beforeend")," (append)")))),Object(o.b)("h2",{id:"events"},"Events"),Object(o.b)(s.default,{mdxType:"NoEvents"}),Object(o.b)("h2",{id:"side-effects"},"Side Effects"),Object(o.b)("p",null,"None"),Object(o.b)("h1",{id:"how-to-use"},"How to Use"),Object(o.b)("p",null,"This controller requires a bit of structured markup."),Object(o.b)("p",null,"There should be a ",Object(o.b)("inlineCode",{parentName:"p"},'<template data-nested-form-target="template">')," or a ",Object(o.b)("inlineCode",{parentName:"p"},'<script data-nested-form-target="template" type="text/x-template>')," tag that holds the markup that should be added every time the user adds a new record. If you want to use multiple levels of nested forms you should\nuse ",Object(o.b)("inlineCode",{parentName:"p"},'<script data-nested-form-target="template" type="text/x-template>'),", as most browsers down allow ",Object(o.b)("inlineCode",{parentName:"p"},"<template>")," tags to be nested."),Object(o.b)("p",null,"Ideally you should have a reusable partial for the nested-record's fields so that you can render it for the ",Object(o.b)("inlineCode",{parentName:"p"},"template")," that the controller uses to create new records, and for each of the existing records in the form."),Object(o.b)("p",null,"Each distinct record in the form should be wrapped in a div with a class of either ",Object(o.b)("inlineCode",{parentName:"p"},"nested-fields")," or the value specified in ",Object(o.b)("inlineCode",{parentName:"p"},"data-nested-form-wrapper-class-value"),"- this enables the controller to perform the operations it needs to do on all of the nested records."),Object(o.b)("p",null,"When generating the markup for the ",Object(o.b)("inlineCode",{parentName:"p"},"template"),", the inputs should be named using the magic value ",Object(o.b)("inlineCode",{parentName:"p"},"NEW_RECORD")," where you want a unique identifier to be placed when the controller inserts a new record. i.e. ",Object(o.b)("inlineCode",{parentName:"p"},"lists[task_attributes][NEW_RECORD][id]"),". Using Rails ",Object(o.b)("inlineCode",{parentName:"p"},"fields_for")," helper, this is as easy as\nspecifying ",Object(o.b)("inlineCode",{parentName:"p"},"f.simple_fields_for ..., child_index: 'NEW_RECORD' ")),Object(o.b)("h2",{id:"html"},"HTML"),Object(o.b)(i.default,{mdxType:"NestedFormControllerErb"}),Object(o.b)("h2",{id:"haml"},"HAML"),Object(o.b)(c.default,{mdxType:"NestedFormControllerHaml"}))}u.isMDXComponent=!0},231:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),d=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=d(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),b=d(n),m=r,u=b["".concat(l,".").concat(m)]||b[m]||p[m]||o;return n?a.a.createElement(u,s(s({ref:t},c),{},{components:n})):a.a.createElement(u,s({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),o=(n(0),n(231)),l={},s={unversionedId:"_partials/no-classes",id:"_partials/no-classes",isDocsHomePage:!1,title:"no-classes",description:"| Class | Purpose |",source:"@site/docs/_partials/no-classes.md",slug:"/_partials/no-classes",permalink:"/stimulus-library/docs/_partials/no-classes",version:"current"},i=[],c={toc:i};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Class"),Object(o.b)("th",{parentName:"tr",align:null},"Purpose"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"-")),Object(o.b)("td",{parentName:"tr",align:null},"-")))))}d.isMDXComponent=!0},60:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),o=(n(0),n(231)),l={},s={unversionedId:"_partials/no-events",id:"_partials/no-events",isDocsHomePage:!1,title:"no-events",description:"| Event | When | Dispatched on | event.detail |",source:"@site/docs/_partials/no-events.md",slug:"/_partials/no-events",permalink:"/stimulus-library/docs/_partials/no-events",version:"current"},i=[],c={toc:i};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Event"),Object(o.b)("th",{parentName:"tr",align:null},"When"),Object(o.b)("th",{parentName:"tr",align:null},"Dispatched on"),Object(o.b)("th",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"th"},"event.detail")))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"-")),Object(o.b)("td",{parentName:"tr",align:null},"-"),Object(o.b)("td",{parentName:"tr",align:null},"-"),Object(o.b)("td",{parentName:"tr",align:null},"-")))))}d.isMDXComponent=!0}}]);