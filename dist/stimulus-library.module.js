import{Controller as e}from"stimulus";import t from"dialog-polyfill";import n from"lodash/camelCase";function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function o(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function c(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0;return function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}var u=function(e){function t(t){var n;return n=e.call(this,t)||this,new Proxy(a(n),{get:function(e,t){var i=Reflect.get(e,t),r=a(n);if(function(e){switch(e){case"application":case"element":case"constructor":case"initialize":case"log":case"data":case"valueDescriptorMap":case"identifier":return!1}return!(/^_.*?$/.test(e)||/^.*?Target(s)?$/.test(e)||/^.*?Value$/.test(e)||/^.*?ValueChanged$/.test(e)||/^.*?Class$/.test(e))}(t.toString())){if("function"==typeof i)return new Proxy(i,{apply:function(e,n,i){return r.log(t.toString(),{args:i}),Reflect.apply(e,n,i)}});n.log(t.toString())}return i}})||a(n)}o(t,e);var n=t.prototype;return n.dispatch=function(e,t,n){void 0===n&&(n={bubbles:!0,cancelable:!0,detail:{target:e}});var i=new CustomEvent(t,n);e.dispatchEvent(i)},n.log=function(e,t){if(void 0===t&&(t={}),this.application.debug){var n=console;n.groupCollapsed("%c"+this.identifier+" %c#"+e,"color: #3B82F6","color: unset"),n.log(s({element:this.element},t)),n.groupEnd()}},t}(e),h=function(e){function t(){return e.apply(this,arguments)||this}o(t,e);var n=t.prototype;return n.connect=function(){this.loadContent()},n.loadContent=function(){var e=this.hasReplaceTarget?this.replaceTarget:this.element;fetch(this.endpointValue).then(function(e){return e.text()}).then(function(t){var n=document.createElement("div");n.innerHTML=t,e.replaceWith(n);var i=new CustomEvent("ajax:success",{detail:""});e.dispatchEvent(i)}).catch(function(t){e.replaceWith("Sorry, this content failed to load");var n=new CustomEvent("ajax:error",{detail:""});e.dispatchEvent(n)}).finally(function(){var t=new CustomEvent("ajax:complete",{detail:""});e.dispatchEvent(t)})},t}(u);h.targets=["replace"],h.values={endpoint:String};var d=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).boundHandler=t.handler.bind(a(t)),t}o(t,e);var n=t.prototype;return n.connect=function(){var e=this;this.element.querySelectorAll("input, select, textarea").forEach(function(t){return t.addEventListener("change",e.boundHandler)})},n.disconnect=function(){var e=this;this.element.querySelectorAll("input, select, textarea").forEach(function(t){return t.removeEventListener("change",e.boundHandler)})},n.handler=function(e){this.element.dispatchEvent(new CustomEvent("submit",{bubbles:!0,cancelable:!0}))},t}(u);const f=(e,t)=>{const n=e[t];return"function"==typeof n?n:(...e)=>{}},p=(e,t,n)=>{let i=e;return!0===n?i=`${t.identifier}:${e}`:"string"==typeof n&&(i=`${n}:${e}`),i},m=(e,t,n)=>{const{bubbles:i,cancelable:r,composed:s}=t||{bubbles:!0,cancelable:!0,composed:!0};return t&&Object.assign(n,{originalEvent:t}),new CustomEvent(e,{bubbles:i,cancelable:r,composed:s,detail:n})},v={dispatchEvent:!0,eventPrefix:!0},g={events:["click","touchend"],onlyVisible:!0,dispatchEvent:!0,eventPrefix:!0},b={debug:!1,logger:console};class y{constructor(e,t={}){var n,i,r;this.log=(e,t)=>{this.debug&&(this.logger.groupCollapsed(`%c${this.controller.identifier} %c#${e}`,"color: #3B82F6","color: unset"),this.logger.log(Object.assign({controllerId:this.controllerId},t)),this.logger.groupEnd())},this.debug=null!==(i=null!==(n=null==t?void 0:t.debug)&&void 0!==n?n:e.application.stimulusUseDebug)&&void 0!==i?i:b.debug,this.logger=null!==(r=null==t?void 0:t.logger)&&void 0!==r?r:b.logger,this.controller=e,this.controllerId=e.element.id||e.element.dataset.id,this.controllerInitialize=e.initialize.bind(e),this.controllerConnect=e.connect.bind(e),this.controllerDisconnect=e.disconnect.bind(e)}}class E extends y{constructor(e,t={}){super(e,t),this.observe=()=>{this.targetElement.addEventListener("mouseenter",this.onEnter),this.targetElement.addEventListener("mouseleave",this.onLeave)},this.unobserve=()=>{this.targetElement.removeEventListener("mouseenter",this.onEnter),this.targetElement.removeEventListener("mouseleave",this.onLeave)},this.onEnter=()=>{f(this.controller,"mouseEnter").call(this.controller),this.log("mouseEnter",{hover:!0})},this.onLeave=()=>{f(this.controller,"mouseLeave").call(this.controller),this.log("mouseLeave",{hover:!1})},this.targetElement=(null==t?void 0:t.element)||e.element,this.controller=e,this.enhanceController(),this.observe()}enhanceController(){const e=this.controller.disconnect.bind(this.controller);Object.assign(this.controller,{disconnect:()=>{this.unobserve(),e()}})}}class w extends y{constructor(e,t={}){super(e,t),this.observe=()=>{try{this.observer.observe(this.targetElement,this.options)}catch(e){this.controller.application.handleError(e,"At a minimum, one of childList, attributes, and/or characterData must be true",{})}},this.unobserve=()=>{this.observer.disconnect()},this.mutation=e=>{f(this.controller,"mutate").call(this.controller,e),this.log("mutate",{entries:e})},this.targetElement=(null==t?void 0:t.element)||e.element,this.controller=e,this.options=t,this.observer=new MutationObserver(this.mutation),this.enhanceController(),this.observe()}enhanceController(){const e=this.controller.disconnect.bind(this.controller);Object.assign(this.controller,{disconnect:()=>{this.unobserve(),e()}})}}const V=e=>{const t=t=>{const{innerWidth:n,innerHeight:i}=window,r={height:i||Infinity,width:n||Infinity,event:t};f(e,"windowResize").call(e,r)},n=e.disconnect.bind(e),i=()=>{window.addEventListener("resize",t),t()},r=()=>{window.removeEventListener("resize",t)};return Object.assign(e,{disconnect(){r(),n()}}),i(),[i,r]},T=(e,t=200)=>{let n=null;return function(){const i=arguments,r=this,s=()=>e.apply(r,i);n&&clearTimeout(n),n=setTimeout(s,t)}};var k=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).boundHandler=t.handler.bind(a(t)),t}o(t,e);var n=t.prototype;return n.connect=function(){var e=this.element;e.style.resize="none",e.style.boxSizing="border-box",e.addEventListener("input",this.boundHandler),e.addEventListener("focus",this.boundHandler),V(this),requestAnimationFrame(this.boundHandler)},n.windowResize=function(){this.handler()},n.handler=function(){this.autosize(this.element)},n.autosize=function(e){var t=e.offsetHeight-e.clientHeight;e.style.height="auto",e.style.height=e.scrollHeight+t+"px"},t}(u),C=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).boundHandler=t.updateCharCount.bind(a(t)),t}o(t,e);var n=t.prototype;return n.connect=function(){this.updateCharCount(),this.inputTarget.addEventListener("input",this.boundHandler)},n.disconnect=function(){this.inputTarget.removeEventListener("input",this.boundHandler)},n.updateCharCount=function(){var e=this.inputTarget.value.length;this.outputTarget.innerText=e.toString(),this.hasErrorClass&&(this.isValidCount(e)?this.outputTarget.classList.remove(this.errorClass):this.outputTarget.classList.add(this.errorClass))},n.isValidCount=function(e){var t=0,n=99999;return this.hasMinValue&&(t=this.minValue),this.hasMaxValue&&(n=this.maxValue),e>=t&&e<=n},t}(u);C.targets=["input","output"],C.values={min:Number,max:Number},C.classes=["error"];var S=function(e){function t(){return e.apply(this,arguments)||this}o(t,e);var n=t.prototype;return n.initialize=function(){this.toggle=this.toggle.bind(this),this.refresh=this.refresh.bind(this)},n.connect=function(){var e=this;requestAnimationFrame(function(){e.hasSelectAllTarget&&(e.selectAllTarget.addEventListener("change",e.toggle),e.checkboxTargets.forEach(function(t){return t.addEventListener("change",e.refresh)}),e.refresh())})},n.disconnect=function(){var e=this;this.hasSelectAllTarget&&(this.selectAllTarget.removeEventListener("change",this.toggle),this.checkboxTargets.forEach(function(t){return t.removeEventListener("change",e.refresh)}))},n.toggle=function(e){e.preventDefault();var t=e.target;this.checkboxTargets.forEach(function(e){return e.checked=t.checked})},n.refresh=function(){var e=this.checkboxTargets.length,t=this.checked.length;this.selectAllTarget.checked=t>0,this.selectAllTarget.indeterminate=t>0&&t<e},r(t,[{key:"checked",get:function(){return this.checkboxTargets.filter(function(e){return e.checked})}},{key:"unchecked",get:function(){return this.checkboxTargets.filter(function(e){return!e.checked})}}]),t}(u);S.targets=["selectAll","checkbox"];var L=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).supported=!1,t}o(t,e);var n=t.prototype;return n.connect=function(){this.supported=document.queryCommandSupported("copy"),this.hasRemoveUnusedValue&&this.removeUnusedValue&&(this.supported&&this.hasFallbackTarget?this.fallbackTarget.remove():this.hasCopyTarget&&this.copyTarget.remove())},n.select=function(e){e&&e.preventDefault(),this.sourceTarget.select()},n.copy=function(e){e&&e.preventDefault(),this.sourceTarget.select(),this.supported&&document.execCommand("copy")},t}(u);function I(e){return"A"==e.nodeName}function M(e){return"FORM"==e.nodeName}function H(e){return"INPUT"==e.nodeName}L.targets=["button","copy","fallback"],L.values={removeUnused:Boolean};var x=function(e){function t(){return e.apply(this,arguments)||this}o(t,e);var n=t.prototype;return n.initialize=function(){this.confirm=this.confirm.bind(this)},n.connect=function(){var e=this;requestAnimationFrame(function(){var t=e.element;if(M(t))t.addEventListener("submit",e.confirm);else{if(!I(t))throw new Error("Can't handle confirmation on attached element");t.addEventListener("click",e.confirm)}})},n.confirm=function(e){window.confirm(this.message)||(e.preventDefault(),this.dispatch(this.element,"confirm:cancelled"))},r(t,[{key:"message",get:function(){return this.hasMessageValue?this.messageValue:"Are you sure?"}}]),t}(u);x.values={message:String};var O=function(e){function t(){return e.apply(this,arguments)||this}o(t,e);var n=t.prototype;return n.connect=function(){var e=this,t=this.messageValue;window.onbeforeunload=function(){return null==t||t},window.addEventListener("popstate",this.handlePopstate),window.addEventListener("submit",function(){window.removeEventListener("popstate",e.handlePopstate),window.onbeforeunload=null})},n.handlePopstate=function(e){return!1},t}(u);O.values={message:String};var A=function(e){function t(){return e.apply(this,arguments)||this}return o(t,e),t.prototype.connect=function(){console.log("Debug Controller",this,this.testTargets)},t}(u);A.targets=["test"];var D=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).initialValue=null,t.boundHandler=t.handler.bind(a(t)),t}o(t,e);var n=t.prototype;return n.connect=function(){var e=this.element;this.initialValue=this.isInputElement(e)&&this.isCheckable(e)?e.checked:e.value,e.addEventListener("input",this.boundHandler),e.addEventListener("change",this.boundHandler)},n.disconnect=function(){var e=this.element;e.removeEventListener("input",this.boundHandler),e.removeEventListener("change",this.boundHandler)},n.restore=function(){var e=this.element;this.isInputElement(e)&&this.isCheckable(e)?e.checked=this.initialValue:e.value=this.initialValue},n.handler=function(e){var t=this.element;this.initialValue!==t.value?t.setAttribute("data-dirty","true"):t.removeAttribute("data-dirty")},n.isCheckable=function(e){return"radio"===e.type||"checkbox"===e.type},n.isInputElement=function(e){return"INPUT"===e.tagName},t}(u),_=function(e){function t(){return e.apply(this,arguments)||this}o(t,e);var n=t.prototype;return n.connect=function(){this.toggle()},n.toggle=function(){this.hasDisablerTarget&&this.disablerTarget.checked?this.disableInputs():this.enableInputs()},n.disableInputs=function(){var e=this.hasClearValue&&this.clearValue;this.disableTargets.forEach(function(t,n){e&&(t.value=""),t.disabled=!0})},n.enableInputs=function(){this.disableTargets.forEach(function(e,t){e.disabled=!1})},t}(u);_.targets=["disabler","disable"],_.values={clear:Boolean};var N=function(e){function t(){return e.apply(this,arguments)||this}return o(t,e),t.prototype.dismiss=function(){this.element.remove()},t}(u),P=function(e){function t(){return e.apply(this,arguments)||this}o(t,e);var n=t.prototype;return n.connect=function(){((e,t={})=>{new w(this,t)})(0,{element:this.element,childList:!0}),this.checkEmpty()},n.mutate=function(e){this.checkEmpty()},n.checkEmpty=function(){var e,t=this;0===(e=this.hasScopeSelectorValue?this.element.querySelectorAll(this.scopeSelectorValue):this.element.children).length?(this.hasNotEmptyClass&&this.notEmptyClass.split(" ").forEach(function(e){return t.element.classList.remove(e)}),this.hasEmptyClass&&this.emptyClass.split(" ").forEach(function(e){return t.element.classList.add(e)}),this.element.dispatchEvent(new CustomEvent("dom:empty",{bubbles:!0,cancelable:!0}))):(this.hasNotEmptyClass&&this.notEmptyClass.split(" ").forEach(function(e){return t.element.classList.add(e)}),this.hasEmptyClass&&this.emptyClass.split(" ").forEach(function(e){return t.element.classList.remove(e)}),this.element.dispatchEvent(new CustomEvent("dom:not-empty",{bubbles:!0,cancelable:!0,detail:{count:e.length}})))},t}(u);P.classes=["empty","notEmpty"],P.values={scopeSelector:String};var j=function(e){function t(){return e.apply(this,arguments)||this}o(t,e);var n=t.prototype;return n.connect=function(){this.toggle()},n.toggle=function(){this.hasEnablerTarget&&this.enablerTarget.checked?this.enableInputs():this.disableInputs()},n.disableInputs=function(){var e=this.hasClearValue&&this.clearValue;this.enableTargets.forEach(function(t,n){e&&(t.value=""),t.disabled=!0})},n.enableInputs=function(){this.enableTargets.forEach(function(e,t){e.disabled=!1})},t}(u);j.targets=["enabler","enable"],j.values={clear:Boolean};var R=function(e){function t(){return e.apply(this,arguments)||this}return o(t,e),t.prototype.connect=function(){var e=this,t=this.element;t.onerror=function(){e.hasPlaceholderValue?t.src=e.placeholderValue:t.style.display="none"}},t}(u);R.values={placeholder:String};var z=function(e){function t(){return e.apply(this,arguments)||this}o(t,e);var n=t.prototype;return n.initialize=function(){this._clear=this._clear.bind(this)},n.connect=function(){var e=this;requestAnimationFrame(function(){if(!M(e.element))throw new Error("Expected controller to be mounted on a form element.");e.restoreOnLoad&&e.restore(),e.clearOnSubmit&&e.element.addEventListener("submit",e._clear)})},n.disconnect=function(){this.clearOnSubmit&&this.element.removeEventListener("submit",this._clear)},n._clear=function(){localStorage.removeItem(this.formIdentifier),this.dispatch(this.element,"form-save:cleared")},n.clear=function(e){e&&e.preventDefault(),this._clear()},n.save=function(e){e.preventDefault(),localStorage.setItem(this.formIdentifier,JSON.stringify(this.formData[this.formIdentifier])),this.dispatch(this.element,"form-save:save:success")},n.restore=function(e){if(e&&e.preventDefault(),localStorage.getItem(this.formIdentifier)){for(var t,n=JSON.parse(localStorage.getItem(this.formIdentifier)),i=c(this.formElements);!(t=i()).done;){var r=t.value;r.name in n&&(H(r)&&"checkbox"==r.type?r.checked=n[r.name]:H(r)&&"radio"==r.type?r.value==n[r.name]&&(r.checked=!0):r.value=n[r.name])}this.dispatch(this.element,"form-save:restore:success")}else this.dispatch(this.element,"form-save:restore:empty")},r(t,[{key:"formID",get:function(){if(this.hasIdValue)return this.idValue;var e=this.element.id;if(""!==e)return e;throw new Error("No ID value to uniquely identify this form. Please either specify data-"+this.identifier+"-id-value or give this form an 'id' attribute. ")}},{key:"formIdentifier",get:function(){return location.href+" "+this.formID}},{key:"formElements",get:function(){return this.element.elements}},{key:"formData",get:function(){for(var e,t,n=((e={})[this.formIdentifier]={},e),i=c(this.formElements);!(t=i()).done;){var r=t.value;r.name.length>0&&(H(r)&&"checkbox"==r.type?n[this.formIdentifier][r.name]=r.checked:H(r)&&"radio"==r.type?r.checked&&(n[this.formIdentifier][r.name]=r.value):n[this.formIdentifier][r.name]=r.value)}return n}},{key:"restoreOnLoad",get:function(){return!this.hasRestoreOnLoadValue||this.restoreOnLoadValue}},{key:"clearOnSubmit",get:function(){return!this.hasClearOnSubmitValue||this.clearOnSubmitValue}}]),t}(u);z.values={id:String,restoreOnLoad:Boolean,clearOnSubmit:Boolean};var F,B=function(e){function t(){return e.apply(this,arguments)||this}o(t,e);var n=t.prototype;return n.connect=function(){if(this.options={element:this.element,threshold:.3},"IntersectionObserver"in window){var e=((e,t={})=>{const{dispatchEvent:n,eventPrefix:i}=Object.assign({},v,t),r=(null==t?void 0:t.element)||e.element,s=e.disconnect.bind(e),o=new IntersectionObserver(t=>{const[s]=t;s.isIntersecting?(t=>{if(e.isVisible=!0,f(e,"appear").call(e,t),n){const n=p("appear",e,i),s=m(n,null,{controller:e,entry:t});r.dispatchEvent(s)}})(s):e.isVisible&&(t=>{if(e.isVisible=!1,f(e,"disappear").call(e,t),n){const n=p("disappear",e,i),s=m(n,null,{controller:e,entry:t});r.dispatchEvent(s)}})(s)},t),a=()=>{o.observe(r)},l=()=>{o.unobserve(r)};return Object.assign(e,{isVisible:!1,disconnect(){l(),s()}}),a(),[a,l]})(this,this.options);this.observe=e[0],this.unobserve=e[1]}else this.loadContent()},n.appear=function(e){var t=this.element;""===t.src&&e.target===t&&e.isIntersecting&&(this.loadContent(),this.unobserve&&this.unobserve())},t}(h),q=function(e,t){var n=void 0===t?{}:t,i=n.behavior,r=void 0===i?"smooth":i,s=n.block,o=void 0===s?"start":s,a=n.inline,l=void 0===a?"nearest":a;try{var c=function(){e.scrollIntoView({behavior:r,block:o,inline:l})},u=function(){if("smooth"==r&&!W)return Promise.resolve(function(){try{return Promise.resolve(import("smoothscroll-polyfill")).then(function(e){F||(F=!0,(0,e.polyfill)())})}catch(e){return Promise.reject(e)}}()).then(function(){})}();return Promise.resolve(u&&u.then?u.then(c):c())}catch(e){return Promise.reject(e)}},W="scrollBehavior"in document.documentElement.style;function $(e){if(!e)return null;var t=getComputedStyle(e).overflowY;return"visible"!==t&&"hidden"!==t&&e.scrollHeight>=e.clientHeight?e:$(e.parentElement)||document.body}var U=function(e){function n(){var t;return(t=e.apply(this,arguments)||this)._dialog=null,t}o(n,e);var i=n.prototype;return i.initialize=function(){this.open=this.open.bind(this),this.close=this.close.bind(this)},i.connect=function(){},i.open=function(){var e=this,n=this.element;if(!this._dialog){this._dialog=document.createElement("dialog");var i=document.createElement("img");i.className=this.imageClassName,i.src=this.src,i.srcset=this.srcSet,i.sizes=this.sizes,this._dialog.appendChild(i),n.insertAdjacentElement("afterend",this._dialog),t.registerDialog(this._dialog),this._dialog.className=this.modalClassName,this._dialog.showModal(),q(this._dialog,{behavior:"smooth",block:"end"}).catch(function(){return e._dialog.scrollIntoView(!1)}),this._dialog.addEventListener("click",this.close),this._dialog.addEventListener("cancel",this.close),this._dialog.addEventListener("close",this.close)}},i.close=function(){var e=this;this._dialog&&(this._dialog.close(),this._dialog.remove(),this._dialog=null,q(this.element,{behavior:"smooth",block:"end"}).catch(function(){return e.element.scrollIntoView(!1)}))},r(n,[{key:"src",get:function(){return this.hasSrcValue?this.srcValue:this.element.src}},{key:"srcSet",get:function(){return this.hasSrcSetValue?this.srcSetValue:this.element.srcset}},{key:"sizes",get:function(){return this.hasSizesValue?this.sizesValue:this.element.sizes}},{key:"modalClassName",get:function(){return this.hasModalClass?this.modalClass:"image-lightbox-dialog"}},{key:"imageClassName",get:function(){return this.hasImageClass?this.imageClass:"image-lightbox-image"}}]),n}(u);U.values={src:String,srcSet:String,sizes:String},U.classes=["modal","image"];var J=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).maxSelections=0,t.boundHandleInputs=t.handleInputs.bind(a(t)),t}o(t,e);var n=t.prototype;return n.connect=function(){var e=this;this.inputTargets.forEach(function(t){return t.addEventListener("change",e.boundHandleInputs)})},n.disconnect=function(){var e=this;this.inputTargets.forEach(function(t){return t.removeEventListener("change",e.boundHandleInputs)})},n.handleInputs=function(e){var t=this.inputTargets.reduce(function(e,t){return t.checked?e+1:e},0),n=e.target;t>this.maxSelections?(e.preventDefault(),n.checked=!1,n.dispatchEvent(new CustomEvent("change",{bubbles:!0,cancelable:!0})),n.dispatchEvent(new CustomEvent("limited-selection:too-many",{bubbles:!0,cancelable:!0,detail:{target:n}})),this.hasErrorTarget&&(this.errorTarget.innerHTML=this.messageValue)):(n.dispatchEvent(new CustomEvent("limited-selection:selection",{bubbles:!0,cancelable:!0,detail:{target:n}})),this.hasErrorTarget&&(this.errorTarget.innerHTML=""))},t}(u);J.targets=["input","error"],J.values={max:Number,message:String};var Y=function(e){function t(){return e.apply(this,arguments)||this}o(t,e);var n=t.prototype;return n.connect=function(){this.checkStructure()},n.add=function(e){e&&e.preventDefault();var t=this.templateTarget.innerHTML.replace(/NEW_RECORD/g,this.generateID());this.targetTarget.insertAdjacentHTML(this.insertMode,t)},n.remove=function(e){e.preventDefault();var t=e.target.closest(this.wrapperClass);if(null==t)throw new Error("#remove was clicked from outside of a child record. Could not find an ancestor with class "+this.wrapperClass);if("true"===t.dataset.newRecord)t.remove();else{t.style.display="none";var n=t.querySelector("input[name*='_destroy']");if(null==n)throw new Error("Could not find a hidden input with name '_destroy'. NestedForm cannot remove an already persisted record without it.");n.value="1"}},n.generateID=function(){return(new Date).getTime().toString()+Math.random()},n.checkStructure=function(){if(this.templateTarget.innerHTML.indexOf("NEW_RECORD"))throw new Error("Could not find 'NEW_RECORD' in the provided template. Please make sure you've passed `child_index: 'NEW_RECORD'` to `fields_for`")},r(t,[{key:"wrapperClass",get:function(){return this.hasWrapperSelectorValue?this.wrapperClassValue:"nested-fields"}},{key:"insertMode",get:function(){return this.hasInsertModeValue?this.insertModeValue:"beforeend"}}]),t}(u);Y.targets=["target","template"],Y.values={insertMode:String,wrapperClass:String};var G=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).boundCheckPasswordsMatch=t.checkPasswordsMatch.bind(a(t)),t}o(t,e);var n=t.prototype;return n.connect=function(){var e=this;this.passwordTargets.forEach(function(t){return t.addEventListener("change",e.boundCheckPasswordsMatch)})},n.disconnect=function(){var e=this;this.passwordTargets.forEach(function(t){return t.removeEventListener("change",e.boundCheckPasswordsMatch)})},n.allPasswordsMatch=function(){var e=new Set(this.passwordTargets.map(function(e){return e.value}));return e.has("")||1==e.size},n.checkPasswordsMatch=function(){var e=this;this.allPasswordsMatch()?(this.element.dispatchEvent(new CustomEvent("password-confirm:match")),this.hasErrorClass&&this.passwordTargets.forEach(function(t){return t.classList.remove(e.errorClass)})):(this.element.dispatchEvent(new CustomEvent("password-confirm:no-match")),this.hasErrorClass&&this.passwordTargets.forEach(function(t){return t.classList.add(e.errorClass)}))},t}(u);G.targets=["password"],G.classes=["error"];var K=function(e){function t(){return e.apply(this,arguments)||this}o(t,e);var n=t.prototype;return n.peak=function(e){e&&e.preventDefault(),this.passwordTarget.type="text"},n.hide=function(e){e&&e.preventDefault(),this.passwordTarget.type="password"},n.toggle=function(e){e&&e.preventDefault(),"password"===this.passwordTarget.type?this.peak():this.hide()},t}(u);K.targets=["password"];var Q=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).boundMessageReceived=t.messageReceived.bind(a(t)),t}o(t,e);var n=t.prototype;return n.connect=function(){window.addEventListener("message",this.boundMessageReceived)},n.disconnect=function(){window.removeEventListener("message",this.boundMessageReceived)},n.messageReceived=function(e){var t=e.data;t.hasOwnProperty("name")&&"iframe-body"===t.name&&t.hasOwnProperty("height")&&this.resize(t.height)},n.resize=function(e){this.element.style.height=e+"px"},t}(u),X=function(e){function t(){return e.apply(this,arguments)||this}o(t,e);var n=t.prototype;return n.connect=function(){var e,t,n;window.self!==window.top&&(V(this),t={},null===(n=(e=this).constructor.debounces)||void 0===n||n.forEach(n=>{if("string"==typeof n&&(e[n]=T(e[n],null==t?void 0:t.wait)),"object"==typeof n){const{name:i,wait:r}=n;if(!i)return;e[i]=T(e[i],r||(null==t?void 0:t.wait))}}),this.postUpdate())},n.windowResize=function(e){this.postUpdate()},n.postUpdate=function(){var e={name:"iframe-body",height:this.getHeight()};window.parent.postMessage(e,"*")},n.getHeight=function(){var e=document.body,t=document.documentElement;return Math.max(e.scrollHeight,e.offsetHeight,t.clientHeight,t.scrollHeight,t.offsetHeight)},t}(u);X.debounces=["postUpdate"];var Z=function(e){function t(){return e.apply(this,arguments)||this}o(t,e);var i=t.prototype;return i.cleanupSelf=function(){this.cleanup(this.element)},i.cleanup=function(e){var t,i,r,s=this;e.dataset.controller=(null==(t=e.dataset.controller)?void 0:t.replaceAll(new RegExp("(s|^)"+this.identifier+"(s|$)","g"),""))||"",""==e.dataset.controller&&delete e.dataset.controller;var o=new RegExp("(s|^)"+this.identifier+"\\..+?(s|$)","g");e.dataset.target=(null==(i=e.dataset.target)?void 0:i.replaceAll(o,""))||"",delete e.dataset[n(this.identifier+"-target")],""==e.dataset.target&&delete e.dataset.target,e.dataset.action=(null==(r=e.dataset.target)?void 0:r.replaceAll(o,""))||"",delete e.dataset[n(this.identifier+"-action")],""==e.dataset.action&&delete e.dataset.action;var a=this.constructor.values;a&&Object.keys(a).forEach(function(t){return delete e.dataset[n(s.identifier+"-"+t+"-value")]});var l=this.constructor.classes;l&&Object.keys(l).forEach(function(t){return delete e.dataset[n(s.identifier+"-"+t+"-class")]})},t}(u),ee=function(e){function t(){return e.apply(this,arguments)||this}return o(t,e),t.prototype.connect=function(){var e=this;requestAnimationFrame(function(){q(e.element,{behavior:e.hasBehaviorValue?e.behaviorValue:"smooth",block:e.hasBlockValue?e.blockValue:"center",inline:e.hasInlineValue?e.inlineValue:"center"}).catch(function(){return e.element.scrollIntoView()}),e.cleanupSelf()})},t}(Z);ee.values={behavior:String,block:String,inline:String};var te=function(e){function t(){return e.apply(this,arguments)||this}return o(t,e),t.prototype.scroll=function(e){var t;e&&e.preventDefault(),null!=(t="document"==(this.hasModeValue?this.modeValue:"document")?document.body:$(this.element))&&q(t,{behavior:"smooth",block:"end"}).catch(function(){return t.scrollIntoView(!1)})},t}(u);te.values={mode:String};var ne=function(e){function t(){return e.apply(this,arguments)||this}return o(t,e),t.prototype.scroll=function(){var e=document.querySelector(this.selectorValue);e?q(e,{behavior:this.hasBehaviorValue?this.behaviorValue:"smooth",block:this.hasBlockValue?this.blockValue:"center",inline:this.hasInlineValue?this.inlineValue:"center"}).catch(function(){return e.scrollIntoView()}):console.warn("Could not find target for '"+this.selectorValue+"'")},t}(u);ne.values={selector:String,behavior:String,block:String,inline:String};var ie=function(e){function t(){return e.apply(this,arguments)||this}return o(t,e),t.prototype.scroll=function(e){var t;e&&e.preventDefault(),null!=(t="document"==(this.hasModeValue?this.modeValue:"document")?document.body:$(this.element))&&q(t,{behavior:"smooth",block:"start"}).catch(function(){return t.scrollIntoView(!1)})},t}(u);ie.values={mode:String};var re=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).timeout=null,t}o(t,e);var n=t.prototype;return n.connect=function(){var e=this;requestAnimationFrame(function(){e.timeout=setTimeout(function(){return e.element.remove()},1e3*e.secondsValue)})},n.disconnect=function(){this.timeout&&clearTimeout(this.timeout)},t}(u);re.values={seconds:Number};var se=function(e){function t(){return e.apply(this,arguments)||this}o(t,e);var n=t.prototype;return n.connect=function(){var e=this;if(!this.hasInsertValue)throw new Error("`insert` value was not specified");requestAnimationFrame(function(){e.hasImmediateValue&&e.immediateValue&&e.execute()})},n.execute=function(e){e&&e.preventDefault();var t=document.querySelector(this.targetValue);if(null!=t){var n=this.element.cloneNode(!0);switch(this.cleanup(n),this.insertValue){case"beforebegin":case"beforeend":case"afterend":case"afterbegin":t.insertAdjacentHTML(this.insertValue,n.outerHTML);break;case"replaceOuter":t.outerHTML=n.outerHTML;break;case"replaceInner":t.innerHTML=n.outerHTML;break;case"prepend":t.insertAdjacentHTML("afterbegin",n.outerHTML);break;case"append":t.insertAdjacentHTML("beforeend",n.outerHTML);break;default:throw new Error("`insert` value was not specified")}this.element.remove()}else this.element.dispatchEvent(new CustomEvent("teleport:error",{bubbles:!0,cancelable:!0}))},t}(Z);se.values={target:String,insert:String,immediate:Boolean};var oe=function(e){function t(){return e.apply(this,arguments)||this}o(t,e);var n=t.prototype;return n.connect=function(){var e=this;if(!this.hasClassValue)throw new Error("data-toggle-class-class-value must not be empty");(this.hasMouseEnterValue||this.hasMouseLeaveValue)&&((e,t={})=>{new E(this,t)})(),this.hasClickAwayValue&&this.clickAwayValue&&((e,t={})=>{const{onlyVisible:n,dispatchEvent:i,events:r,eventPrefix:s}=Object.assign({},g,t),o=r=>{const o=(null==t?void 0:t.element)||e.element;if(!(o.contains(r.target)||!function(e){const t=e.getBoundingClientRect(),n=window.innerHeight||document.documentElement.clientHeight,i=window.innerWidth||document.documentElement.clientWidth;return t.top<=n&&t.top+t.height>=0&&t.left<=i&&t.left+t.width>=0}(o)&&n)&&(e.clickOutside&&e.clickOutside(r),i)){const t=p("click:outside",e,s),n=m(t,r,{controller:e});o.dispatchEvent(n)}},a=e.disconnect.bind(e);Object.assign(e,{disconnect(){null==r||r.forEach(e=>{window.removeEventListener(e,o,!1)}),a()}}),null==r||r.forEach(e=>{window.addEventListener(e,o,!1)})})(this),requestAnimationFrame(function(){e.hasInitialValue&&e.toggleTargets.forEach("on"===e.initialValue?function(t){return e.elementOn(t)}:function(t){return e.elementOff(t)})})},n.clickOutside=function(){var e=this;this.toggleTargets.forEach(function(t){e.elementWasToggled(t)&&(e.elementToggleStatus(t),e.elementToggle(t))})},n.mouseEnter=function(){if(this.hasMouseEnterValue)switch(this.mouseEnterValue){case"on":this.on();break;case"off":this.off();break;case"toggle":this.toggle()}return{}},n.mouseLeave=function(){if(this.hasMouseLeaveValue)switch(this.mouseLeaveValue){case"on":this.on();break;case"off":this.off();break;case"toggle":this.toggle()}return{}},n.on=function(e){var t=this;this.toggleTargets.forEach(function(e){t.elementToggleStatus(e),t.elementOn(e)})},n.off=function(e){var t=this;this.toggleTargets.forEach(function(e){t.elementToggleStatus(e),t.elementOff(e)})},n.toggle=function(e){var t=this;this.toggleTargets.forEach(function(e){t.elementToggleStatus(e),t.elementToggle(e)})},n.elementWasToggled=function(e){return"true"==e.dataset.toggled},n.elementToggleStatus=function(e){this.elementWasToggled(e)?delete e.dataset.toggled:e.dataset.toggled="true"},n.elementToggle=function(e){this.classValue.split(" ").forEach(function(t){return e.classList.toggle(t)})},n.elementOn=function(e){this.classValue.split(" ").forEach(function(t){return e.classList.toggle(t,!0)})},n.elementOff=function(e){this.classValue.split(" ").forEach(function(t){return e.classList.toggle(t,!1)})},t}(u);oe.targets=["toggle"],oe.values={class:String,mouseEnter:String,mouseLeave:String,clickAway:Boolean,initial:String};var ae=function(e){function t(){return e.apply(this,arguments)||this}o(t,e);var n=t.prototype;return n.toggle=function(e){e&&e.preventDefault();var t=this.getFrame().src;null==t||t!==this.getSrc()?this.setSrc():this.clear()},n.setSrc=function(e){e&&e.preventDefault();var t=this.getFrame();this.hasLoadingMessageValue&&(t.innerHTML=this.loadingMessageValue),t.src=this.getSrc()},n.clear=function(e){e&&e.preventDefault();var t=this.getFrame();t.src="",t.innerHTML=""},n.getFrame=function(){var e=document.getElementById(""+this.frameIdValue);if(null==e)throw new Error("Could not find frame with ID '"+this.frameIdValue+"'");if("TURBO-FRAME"!=e.nodeName)throw new Error("Element targeted by ID '"+this.frameIdValue+"'");return e},n.getSrc=function(){var e=this.element;if(this.hasSrcValue)return this.srcValue;if(I(e))return e.href;throw new Error("No link given to drive frame to")},t}(u);ae.values={frameId:String,src:String,loadingMessage:String};var le=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).boundHandler=t.updateWordCount.bind(a(t)),t}o(t,e);var n=t.prototype;return n.connect=function(){this.updateWordCount(),this.inputTarget.addEventListener("input",this.boundHandler)},n.disconnect=function(){this.inputTarget.removeEventListener("input",this.boundHandler)},n.updateWordCount=function(){var e=0,t=this.inputTarget.value.match(/\S+/g);this.outputTarget.innerText=(e=t&&t.length||0).toString(),this.hasErrorClass&&(this.isValidCount(e)?this.outputTarget.classList.remove(this.errorClass):this.outputTarget.classList.add(this.errorClass))},n.isValidCount=function(e){var t=0,n=99999;return this.hasMinValue&&(t=this.minValue),this.hasMaxValue&&(n=this.maxValue),e>=t&&e<=n},t}(u);le.targets=["input","output"],le.values={min:Number,max:Number},le.classes=["error"];export{h as AsyncBlockController,d as AutoSubmitFormController,k as AutosizeController,C as CharCountController,S as CheckboxSelectAllController,L as ClipboardController,x as ConfirmController,O as ConfirmNavigationController,A as DebugController,D as DetectDirtyController,_ as DisableInputsController,N as DismissableController,P as EmptyDomController,j as EnableInputsController,R as FallbackImageController,z as FormSaveController,B as LazyBlockController,U as LightboxImageController,J as LimitedSelectionCheckboxesController,Y as NestedFormController,G as PasswordConfirmController,K as PasswordPeekController,X as ResponsiveIframeBodyController,Q as ResponsiveIframeWrapperController,ee as ScrollIntoFocusController,te as ScrollToBottomController,ne as ScrollToController,ie as ScrollToTopController,re as SelfDestructController,se as TeleportController,oe as ToggleClassController,ae as TurboFrameRCController,le as WordCountController};
//# sourceMappingURL=stimulus-library.module.js.map
