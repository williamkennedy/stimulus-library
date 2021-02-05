!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("stimulus"),require("dialog-polyfill"),require("lodash/camelCase")):"function"==typeof define&&define.amd?define(["exports","stimulus","dialog-polyfill","lodash/camelCase"],t):t((e||self).stimulusLibrary={},e.stimulus,e.dialogPolyfill,e.camelCase)}(this,function(e,t,n,r){function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=i(n),s=i(r);function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function f(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}var p=function(e){function t(t){var n;return n=e.call(this,t)||this,new Proxy(h(n),{get:function(e,t){var r=Reflect.get(e,t),i=h(n);if(function(e){switch(e){case"application":case"element":case"constructor":case"initialize":case"log":case"data":case"valueDescriptorMap":case"identifier":return!1}return!(/^_.*?$/.test(e)||/^.*?Target(s)?$/.test(e)||/^.*?Value$/.test(e)||/^.*?ValueChanged$/.test(e)||/^.*?Class$/.test(e))}(t.toString())){if("function"==typeof r)return new Proxy(r,{apply:function(e,n,r){return i.log(t.toString(),{args:r}),Reflect.apply(e,n,r)}});n.log(t.toString())}return r}})||h(n)}u(t,e);var n=t.prototype;return n.dispatch=function(e,t,n){void 0===n&&(n={bubbles:!0,cancelable:!0,detail:{target:e}});var r=new CustomEvent(t,n);e.dispatchEvent(r)},n.log=function(e,t){if(void 0===t&&(t={}),this.application.debug){var n=console;n.groupCollapsed("%c"+this.identifier+" %c#"+e,"color: #3B82F6","color: unset"),n.log(c({element:this.element},t)),n.groupEnd()}},t}(t.Controller),m=function(e){function t(){return e.apply(this,arguments)||this}u(t,e);var n=t.prototype;return n.connect=function(){this.loadContent()},n.loadContent=function(){var e=this.hasReplaceTarget?this.replaceTarget:this.element;fetch(this.endpointValue).then(function(e){return e.text()}).then(function(t){var n=document.createElement("div");n.innerHTML=t,e.replaceWith(n);var r=new CustomEvent("ajax:success",{detail:""});e.dispatchEvent(r)}).catch(function(t){e.replaceWith("Sorry, this content failed to load");var n=new CustomEvent("ajax:error",{detail:""});e.dispatchEvent(n)}).finally(function(){var t=new CustomEvent("ajax:complete",{detail:""});e.dispatchEvent(t)})},t}(p);m.targets=["replace"],m.values={endpoint:String};var g=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).boundHandler=t.handler.bind(h(t)),t}u(t,e);var n=t.prototype;return n.connect=function(){var e=this;this.element.querySelectorAll("input, select, textarea").forEach(function(t){return t.addEventListener("change",e.boundHandler)})},n.disconnect=function(){var e=this;this.element.querySelectorAll("input, select, textarea").forEach(function(t){return t.removeEventListener("change",e.boundHandler)})},n.handler=function(e){this.element.dispatchEvent(new CustomEvent("submit",{bubbles:!0,cancelable:!0}))},t}(p);const v=(e,t)=>{const n=e[t];return"function"==typeof n?n:(...e)=>{}},b=(e,t,n)=>{let r=e;return!0===n?r=`${t.identifier}:${e}`:"string"==typeof n&&(r=`${n}:${e}`),r},y=(e,t,n)=>{const{bubbles:r,cancelable:i,composed:o}=t||{bubbles:!0,cancelable:!0,composed:!0};return t&&Object.assign(n,{originalEvent:t}),new CustomEvent(e,{bubbles:r,cancelable:i,composed:o,detail:n})},E={dispatchEvent:!0,eventPrefix:!0},w={events:["click","touchend"],onlyVisible:!0,dispatchEvent:!0,eventPrefix:!0},C={debug:!1,logger:console};class T{constructor(e,t={}){var n,r,i;this.log=(e,t)=>{this.debug&&(this.logger.groupCollapsed(`%c${this.controller.identifier} %c#${e}`,"color: #3B82F6","color: unset"),this.logger.log(Object.assign({controllerId:this.controllerId},t)),this.logger.groupEnd())},this.debug=null!==(r=null!==(n=null==t?void 0:t.debug)&&void 0!==n?n:e.application.stimulusUseDebug)&&void 0!==r?r:C.debug,this.logger=null!==(i=null==t?void 0:t.logger)&&void 0!==i?i:C.logger,this.controller=e,this.controllerId=e.element.id||e.element.dataset.id,this.controllerInitialize=e.initialize.bind(e),this.controllerConnect=e.connect.bind(e),this.controllerDisconnect=e.disconnect.bind(e)}}class k extends T{constructor(e,t={}){super(e,t),this.observe=()=>{this.targetElement.addEventListener("mouseenter",this.onEnter),this.targetElement.addEventListener("mouseleave",this.onLeave)},this.unobserve=()=>{this.targetElement.removeEventListener("mouseenter",this.onEnter),this.targetElement.removeEventListener("mouseleave",this.onLeave)},this.onEnter=()=>{v(this.controller,"mouseEnter").call(this.controller),this.log("mouseEnter",{hover:!0})},this.onLeave=()=>{v(this.controller,"mouseLeave").call(this.controller),this.log("mouseLeave",{hover:!1})},this.targetElement=(null==t?void 0:t.element)||e.element,this.controller=e,this.enhanceController(),this.observe()}enhanceController(){const e=this.controller.disconnect.bind(this.controller);Object.assign(this.controller,{disconnect:()=>{this.unobserve(),e()}})}}class V extends T{constructor(e,t={}){super(e,t),this.observe=()=>{try{this.observer.observe(this.targetElement,this.options)}catch(e){this.controller.application.handleError(e,"At a minimum, one of childList, attributes, and/or characterData must be true",{})}},this.unobserve=()=>{this.observer.disconnect()},this.mutation=e=>{v(this.controller,"mutate").call(this.controller,e),this.log("mutate",{entries:e})},this.targetElement=(null==t?void 0:t.element)||e.element,this.controller=e,this.options=t,this.observer=new MutationObserver(this.mutation),this.enhanceController(),this.observe()}enhanceController(){const e=this.controller.disconnect.bind(this.controller);Object.assign(this.controller,{disconnect:()=>{this.unobserve(),e()}})}}const S=e=>{const t=t=>{const{innerWidth:n,innerHeight:r}=window,i={height:r||Infinity,width:n||Infinity,event:t};v(e,"windowResize").call(e,i)},n=e.disconnect.bind(e),r=()=>{window.addEventListener("resize",t),t()},i=()=>{window.removeEventListener("resize",t)};return Object.assign(e,{disconnect(){i(),n()}}),r(),[r,i]},L=(e,t=200)=>{let n=null;return function(){const r=arguments,i=this,o=()=>e.apply(i,r);n&&clearTimeout(n),n=setTimeout(o,t)}};var I=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).boundHandler=t.handler.bind(h(t)),t}u(t,e);var n=t.prototype;return n.connect=function(){var e=this.element;e.style.resize="none",e.style.boxSizing="border-box",e.addEventListener("input",this.boundHandler),e.addEventListener("focus",this.boundHandler),S(this),requestAnimationFrame(this.boundHandler)},n.windowResize=function(){this.handler()},n.handler=function(){this.autosize(this.element)},n.autosize=function(e){var t=e.offsetHeight-e.clientHeight;e.style.height="auto",e.style.height=e.scrollHeight+t+"px"},t}(p),x=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).boundHandler=t.updateCharCount.bind(h(t)),t}u(t,e);var n=t.prototype;return n.connect=function(){this.updateCharCount(),this.inputTarget.addEventListener("input",this.boundHandler)},n.disconnect=function(){this.inputTarget.removeEventListener("input",this.boundHandler)},n.updateCharCount=function(){var e=this.inputTarget.value.length;this.outputTarget.innerText=e.toString(),this.hasErrorClass&&(this.isValidCount(e)?this.outputTarget.classList.remove(this.errorClass):this.outputTarget.classList.add(this.errorClass))},n.isValidCount=function(e){var t=0,n=99999;return this.hasMinValue&&(t=this.minValue),this.hasMaxValue&&(n=this.maxValue),e>=t&&e<=n},t}(p);x.targets=["input","output"],x.values={min:Number,max:Number},x.classes=["error"];var M=function(e){function t(){return e.apply(this,arguments)||this}u(t,e);var n=t.prototype;return n.initialize=function(){this.toggle=this.toggle.bind(this),this.refresh=this.refresh.bind(this)},n.connect=function(){var e=this;requestAnimationFrame(function(){e.hasCheckboxAllTarget&&(e.selectAllTarget.addEventListener("change",e.toggle),e.checkboxTargets.forEach(function(t){return t.addEventListener("change",e.refresh)}),e.refresh())})},n.disconnect=function(){var e=this;this.hasCheckboxAllTarget&&(this.selectAllTarget.removeEventListener("change",this.toggle),this.checkboxTargets.forEach(function(t){return t.removeEventListener("change",e.refresh)}))},n.toggle=function(e){e.preventDefault();var t=e.target;this.checkboxTargets.forEach(function(e){return e.checked=t.checked})},n.refresh=function(){var e=this.checkboxTargets.length,t=this.checked.length;this.selectAllTarget.checked=t>0,this.selectAllTarget.indeterminate=t>0&&t<e},l(t,[{key:"checked",get:function(){return this.checkboxTargets.filter(function(e){return e.checked})}},{key:"unchecked",get:function(){return this.checkboxTargets.filter(function(e){return!e.checked})}}]),t}(p);M.targets=["selectAll","checkbox"];var H=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).supported=!1,t}u(t,e);var n=t.prototype;return n.connect=function(){this.supported=document.queryCommandSupported("copy"),this.hasRemoveUnusedValue&&this.removeUnusedValue&&(this.supported&&this.hasFallbackTarget?this.fallbackTarget.remove():this.hasCopyTarget&&this.copyTarget.remove())},n.select=function(e){e&&e.preventDefault(),this.sourceTarget.select()},n.copy=function(e){e&&e.preventDefault(),this.sourceTarget.select(),this.supported&&document.execCommand("copy")},t}(p);function O(e){return"A"==e.nodeName}function D(e){return"FORM"==e.nodeName}function A(e){return"INPUT"==e.nodeName}H.targets=["button","copy","fallback"],H.values={removeUnused:Boolean};var _=function(e){function t(){return e.apply(this,arguments)||this}u(t,e);var n=t.prototype;return n.initialize=function(){this.confirm=this.confirm.bind(this)},n.connect=function(){var e=this;requestAnimationFrame(function(){var t=e.element;if(D(t))t.addEventListener("submit",e.confirm);else{if(!O(t))throw new Error("Can't handle confirmation on attached element");t.addEventListener("click",e.confirm)}})},n.confirm=function(e){window.confirm(this.message)||(e.preventDefault(),this.dispatch(this.element,"confirm:cancelled"))},l(t,[{key:"message",get:function(){return this.hasMessageValue?this.messageValue:"Are you sure?"}}]),t}(p);_.values={message:String};var P=function(e){function t(){return e.apply(this,arguments)||this}u(t,e);var n=t.prototype;return n.connect=function(){var e=this,t=this.messageValue;window.onbeforeunload=function(){return null==t||t},window.addEventListener("popstate",this.handlePopstate),window.addEventListener("submit",function(){window.removeEventListener("popstate",e.handlePopstate),window.onbeforeunload=null})},n.handlePopstate=function(e){return!1},t}(p);P.values={message:String};var N=function(e){function t(){return e.apply(this,arguments)||this}return u(t,e),t.prototype.connect=function(){console.log("Debug Controller",this,this.testTargets)},t}(p);N.targets=["test"];var R=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).initialValue=null,t.boundHandler=t.handler.bind(h(t)),t}u(t,e);var n=t.prototype;return n.connect=function(){var e=this.element;this.initialValue=this.isInputElement(e)&&this.isCheckable(e)?e.checked:e.value,e.addEventListener("input",this.boundHandler),e.addEventListener("change",this.boundHandler)},n.disconnect=function(){var e=this.element;e.removeEventListener("input",this.boundHandler),e.removeEventListener("change",this.boundHandler)},n.restore=function(){var e=this.element;this.isInputElement(e)&&this.isCheckable(e)?e.checked=this.initialValue:e.value=this.initialValue},n.handler=function(e){var t=this.element;this.initialValue!==t.value?t.setAttribute("data-dirty","true"):t.removeAttribute("data-dirty")},n.isCheckable=function(e){return"radio"===e.type||"checkbox"===e.type},n.isInputElement=function(e){return"INPUT"===e.tagName},t}(p),j=function(e){function t(){return e.apply(this,arguments)||this}u(t,e);var n=t.prototype;return n.connect=function(){this.toggle()},n.toggle=function(){this.hasDisablerTarget&&this.disablerTarget.checked?this.disableInputs():this.enableInputs()},n.disableInputs=function(){var e=this.hasClearValue&&this.clearValue;this.disableTargets.forEach(function(t,n){e&&(t.value=""),t.disabled=!0})},n.enableInputs=function(){this.disableTargets.forEach(function(e,t){e.disabled=!1})},t}(p);j.targets=["disabler","disable"],j.values={clear:Boolean};var z=function(e){function t(){return e.apply(this,arguments)||this}return u(t,e),t.prototype.dismiss=function(){this.element.remove()},t}(p),F=function(e){function t(){return e.apply(this,arguments)||this}u(t,e);var n=t.prototype;return n.connect=function(){((e,t={})=>{new V(this,t)})(0,{element:this.element,childList:!0}),this.checkEmpty()},n.mutate=function(e){this.checkEmpty()},n.checkEmpty=function(){var e,t=this;0===(e=this.hasScopeSelectorValue?this.element.querySelectorAll(this.scopeSelectorValue):this.element.children).length?(this.hasNotEmptyClass&&this.notEmptyClass.split(" ").forEach(function(e){return t.element.classList.remove(e)}),this.hasEmptyClass&&this.emptyClass.split(" ").forEach(function(e){return t.element.classList.add(e)}),this.element.dispatchEvent(new CustomEvent("dom:empty",{bubbles:!0,cancelable:!0}))):(this.hasNotEmptyClass&&this.notEmptyClass.split(" ").forEach(function(e){return t.element.classList.add(e)}),this.hasEmptyClass&&this.emptyClass.split(" ").forEach(function(e){return t.element.classList.remove(e)}),this.element.dispatchEvent(new CustomEvent("dom:not-empty",{bubbles:!0,cancelable:!0,detail:{count:e.length}})))},t}(p);F.classes=["empty","notEmpty"],F.values={scopeSelector:String};var B=function(e){function t(){return e.apply(this,arguments)||this}u(t,e);var n=t.prototype;return n.connect=function(){this.toggle()},n.toggle=function(){this.hasEnablerTarget&&this.enablerTarget.checked?this.enableInputs():this.disableInputs()},n.disableInputs=function(){var e=this.hasClearValue&&this.clearValue;this.enableTargets.forEach(function(t,n){e&&(t.value=""),t.disabled=!0})},n.enableInputs=function(){this.enableTargets.forEach(function(e,t){e.disabled=!1})},t}(p);B.targets=["enabler","enable"],B.values={clear:Boolean};var q=function(e){function t(){return e.apply(this,arguments)||this}return u(t,e),t.prototype.connect=function(){var e=this,t=this.element;t.onerror=function(){e.hasPlaceholderValue?t.src=e.placeholderValue:t.style.display="none"}},t}(p);q.values={placeholder:String};var W=function(e){function t(){return e.apply(this,arguments)||this}u(t,e);var n=t.prototype;return n.initialize=function(){this._clear=this._clear.bind(this)},n.connect=function(){var e=this;requestAnimationFrame(function(){if(!D(e.element))throw new Error("Expected controller to be mounted on a form element.");e.restoreOnLoad&&e.restore(),e.clearOnSubmit&&e.element.addEventListener("submit",e._clear)})},n.disconnect=function(){this.clearOnSubmit&&this.element.removeEventListener("submit",this._clear)},n._clear=function(){localStorage.removeItem(this.formIdentifier),this.dispatch(this.element,"form-save:cleared")},n.clear=function(e){e&&e.preventDefault(),this._clear()},n.save=function(e){e.preventDefault(),localStorage.setItem(this.formIdentifier,JSON.stringify(this.formData[this.formIdentifier])),this.dispatch(this.element,"form-save:save:success")},n.restore=function(e){if(e&&e.preventDefault(),localStorage.getItem(this.formIdentifier)){for(var t,n=JSON.parse(localStorage.getItem(this.formIdentifier)),r=f(this.formElements);!(t=r()).done;){var i=t.value;i.name in n&&(A(i)&&"checkbox"==i.type?i.checked=n[i.name]:A(i)&&"radio"==i.type?i.value==n[i.name]&&(i.checked=!0):i.value=n[i.name])}this.dispatch(this.element,"form-save:restore:success")}else this.dispatch(this.element,"form-save:restore:empty")},l(t,[{key:"formID",get:function(){if(this.hasIdValue)return this.idValue;var e=this.element.id;if(""!==e)return e;throw new Error("No ID value to uniquely identify this form. Please either specify data-"+this.identifier+"-id-value or give this form an 'id' attribute. ")}},{key:"formIdentifier",get:function(){return location.href+" "+this.formID}},{key:"formElements",get:function(){return this.element.elements}},{key:"formData",get:function(){for(var e,t,n=((e={})[this.formIdentifier]={},e),r=f(this.formElements);!(t=r()).done;){var i=t.value;i.name.length>0&&(A(i)&&"checkbox"==i.type?n[this.formIdentifier][i.name]=i.checked:A(i)&&"radio"==i.type?i.checked&&(n[this.formIdentifier][i.name]=i.value):n[this.formIdentifier][i.name]=i.value)}return n}},{key:"restoreOnLoad",get:function(){return!this.hasRestoreOnLoadValue||this.restoreOnLoadValue}},{key:"clearOnSubmit",get:function(){return!this.hasClearOnSubmitValue||this.clearOnSubmitValue}}]),t}(p);W.values={id:String,restoreOnLoad:Boolean,clearOnSubmit:Boolean};var $,U=function(e,t){var n=void 0===t?{}:t,r=n.behavior,i=void 0===r?"smooth":r,o=n.block,s=void 0===o?"start":o,a=n.inline,l=void 0===a?"nearest":a;try{var c=function(){e.scrollIntoView({behavior:i,block:s,inline:l})},u=function(){if("smooth"==i&&!J)return Promise.resolve(function(){try{return Promise.resolve(import("smoothscroll-polyfill")).then(function(e){$||($=!0,(0,e.polyfill)())})}catch(e){return Promise.reject(e)}}()).then(function(){})}();return Promise.resolve(u&&u.then?u.then(c):c())}catch(e){return Promise.reject(e)}},J="scrollBehavior"in document.documentElement.style;function Y(e){if(!e)return null;var t=getComputedStyle(e).overflowY;return"visible"!==t&&"hidden"!==t&&e.scrollHeight>=e.clientHeight?e:Y(e.parentElement)||document.body}var G=function(e){function t(){var t;return(t=e.apply(this,arguments)||this)._dialog=null,t}u(t,e);var n=t.prototype;return n.initialize=function(){this.open=this.open.bind(this),this.close=this.close.bind(this)},n.connect=function(){},n.open=function(){var e=this,t=this.element;if(!this._dialog){this._dialog=document.createElement("dialog");var n=document.createElement("img");n.className=this.imageClassName,n.src=this.src,n.srcset=this.srcSet,n.sizes=this.sizes,this._dialog.appendChild(n),t.insertAdjacentElement("afterend",this._dialog),o.default.registerDialog(this._dialog),this._dialog.className=this.modalClassName,this._dialog.showModal(),U(this._dialog,{behavior:"smooth",block:"end"}).catch(function(){return e._dialog.scrollIntoView(!1)}),this._dialog.addEventListener("click",this.close),this._dialog.addEventListener("cancel",this.close),this._dialog.addEventListener("close",this.close)}},n.close=function(){var e=this;this._dialog&&(this._dialog.close(),this._dialog.remove(),this._dialog=null,U(this.element,{behavior:"smooth",block:"end"}).catch(function(){return e.element.scrollIntoView(!1)}))},l(t,[{key:"src",get:function(){return this.hasSrcValue?this.srcValue:this.element.src}},{key:"srcSet",get:function(){return this.hasSrcSetValue?this.srcSetValue:this.element.srcset}},{key:"sizes",get:function(){return this.hasSizesValue?this.sizesValue:this.element.sizes}},{key:"modalClassName",get:function(){return this.hasModalClass?this.modalClass:"image-lightbox-dialog"}},{key:"imageClassName",get:function(){return this.hasImageClass?this.imageClass:"image-lightbox-image"}}]),t}(p);G.values={src:String,srcSet:String,sizes:String},G.classes=["modal","image"];var K=function(e){function t(){return e.apply(this,arguments)||this}u(t,e);var n=t.prototype;return n.connect=function(){if(this.options={element:this.element,threshold:.3},"IntersectionObserver"in window){var e=((e,t={})=>{const{dispatchEvent:n,eventPrefix:r}=Object.assign({},E,t),i=(null==t?void 0:t.element)||e.element,o=e.disconnect.bind(e),s=new IntersectionObserver(t=>{const[o]=t;o.isIntersecting?(t=>{if(e.isVisible=!0,v(e,"appear").call(e,t),n){const n=b("appear",e,r),o=y(n,null,{controller:e,entry:t});i.dispatchEvent(o)}})(o):e.isVisible&&(t=>{if(e.isVisible=!1,v(e,"disappear").call(e,t),n){const n=b("disappear",e,r),o=y(n,null,{controller:e,entry:t});i.dispatchEvent(o)}})(o)},t),a=()=>{s.observe(i)},l=()=>{s.unobserve(i)};return Object.assign(e,{isVisible:!1,disconnect(){l(),o()}}),a(),[a,l]})(this,this.options);this.observe=e[0],this.unobserve=e[1]}else this.loadContent()},n.appear=function(e){var t=this.element;""===t.src&&e.target===t&&e.isIntersecting&&(this.loadContent(),this.unobserve&&this.unobserve())},t}(m),Q=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).maxSelections=0,t.boundHandleInputs=t.handleInputs.bind(h(t)),t}u(t,e);var n=t.prototype;return n.connect=function(){var e=this;this.inputTargets.forEach(function(t){return t.addEventListener("change",e.boundHandleInputs)})},n.disconnect=function(){var e=this;this.inputTargets.forEach(function(t){return t.removeEventListener("change",e.boundHandleInputs)})},n.handleInputs=function(e){var t=this.inputTargets.reduce(function(e,t){return t.checked?e+1:e},0),n=e.target;t>this.maxSelections?(e.preventDefault(),n.checked=!1,n.dispatchEvent(new CustomEvent("change",{bubbles:!0,cancelable:!0})),n.dispatchEvent(new CustomEvent("limited-selection:too-many",{bubbles:!0,cancelable:!0,detail:{target:n}})),this.hasErrorTarget&&(this.errorTarget.innerHTML=this.messageValue)):(n.dispatchEvent(new CustomEvent("limited-selection:selection",{bubbles:!0,cancelable:!0,detail:{target:n}})),this.hasErrorTarget&&(this.errorTarget.innerHTML=""))},t}(p);Q.targets=["input","error"],Q.values={max:Number,message:String};var X=function(e){function t(){return e.apply(this,arguments)||this}u(t,e);var n=t.prototype;return n.connect=function(){this.checkStructure()},n.add=function(e){e&&e.preventDefault();var t=this.templateTarget.innerHTML.replace(/NEW_RECORD/g,this.generateID());this.targetTarget.insertAdjacentHTML(this.insertMode,t)},n.remove=function(e){e.preventDefault();var t=e.target.closest(this.wrapperClass);if(null==t)throw new Error("#remove was clicked from outside of a child record. Could not find an ancestor with class "+this.wrapperClass);if("true"===t.dataset.newRecord)t.remove();else{t.style.display="none";var n=t.querySelector("input[name*='_destroy']");if(null==n)throw new Error("Could not find a hidden input with name '_destroy'. NestedForm cannot remove an already persisted record without it.");n.value="1"}},n.generateID=function(){return(new Date).getTime().toString()+Math.random()},n.checkStructure=function(){if(this.templateTarget.innerHTML.indexOf("NEW_RECORD"))throw new Error("Could not find 'NEW_RECORD' in the provided template. Please make sure you've passed `child_index: 'NEW_RECORD'` to `fields_for`")},l(t,[{key:"wrapperClass",get:function(){return this.hasWrapperSelectorValue?this.wrapperClassValue:"nested-fields"}},{key:"insertMode",get:function(){return this.hasInsertModeValue?this.insertModeValue:"beforeend"}}]),t}(p);X.targets=["target","template"],X.values={insertMode:String,wrapperClass:String};var Z=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).boundCheckPasswordsMatch=t.checkPasswordsMatch.bind(h(t)),t}u(t,e);var n=t.prototype;return n.connect=function(){var e=this;this.passwordTargets.forEach(function(t){return t.addEventListener("change",e.boundCheckPasswordsMatch)})},n.disconnect=function(){var e=this;this.passwordTargets.forEach(function(t){return t.removeEventListener("change",e.boundCheckPasswordsMatch)})},n.allPasswordsMatch=function(){var e=new Set(this.passwordTargets.map(function(e){return e.value}));return e.has("")||1==e.size},n.checkPasswordsMatch=function(){var e=this;this.allPasswordsMatch()?(this.element.dispatchEvent(new CustomEvent("password-confirm:match")),this.hasErrorClass&&this.passwordTargets.forEach(function(t){return t.classList.remove(e.errorClass)})):(this.element.dispatchEvent(new CustomEvent("password-confirm:no-match")),this.hasErrorClass&&this.passwordTargets.forEach(function(t){return t.classList.add(e.errorClass)}))},t}(p);Z.targets=["password"],Z.classes=["error"];var ee=function(e){function t(){return e.apply(this,arguments)||this}u(t,e);var n=t.prototype;return n.peak=function(e){e&&e.preventDefault(),this.passwordTarget.type="text"},n.hide=function(e){e&&e.preventDefault(),this.passwordTarget.type="password"},n.toggle=function(e){e&&e.preventDefault(),"password"===this.passwordTarget.type?this.peak():this.hide()},t}(p);ee.targets=["password"];var te=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).boundMessageReceived=t.messageReceived.bind(h(t)),t}u(t,e);var n=t.prototype;return n.connect=function(){window.addEventListener("message",this.boundMessageReceived)},n.disconnect=function(){window.removeEventListener("message",this.boundMessageReceived)},n.messageReceived=function(e){var t=e.data;t.hasOwnProperty("name")&&"iframe-body"===t.name&&t.hasOwnProperty("height")&&this.resize(t.height)},n.resize=function(e){this.element.style.height=e+"px"},t}(p),ne=function(e){function t(){return e.apply(this,arguments)||this}u(t,e);var n=t.prototype;return n.connect=function(){var e,t,n;window.self!==window.top&&(S(this),t={},null===(n=(e=this).constructor.debounces)||void 0===n||n.forEach(n=>{if("string"==typeof n&&(e[n]=L(e[n],null==t?void 0:t.wait)),"object"==typeof n){const{name:r,wait:i}=n;if(!r)return;e[r]=L(e[r],i||(null==t?void 0:t.wait))}}),this.postUpdate())},n.windowResize=function(e){this.postUpdate()},n.postUpdate=function(){var e={name:"iframe-body",height:this.getHeight()};window.parent.postMessage(e,"*")},n.getHeight=function(){var e=document.body,t=document.documentElement;return Math.max(e.scrollHeight,e.offsetHeight,t.clientHeight,t.scrollHeight,t.offsetHeight)},t}(p);ne.debounces=["postUpdate"];var re=function(e){function t(){return e.apply(this,arguments)||this}u(t,e);var n=t.prototype;return n.cleanupSelf=function(){this.cleanup(this.element)},n.cleanup=function(e){var t,n,r,i=this;e.dataset.controller=(null==(t=e.dataset.controller)?void 0:t.replaceAll(new RegExp("(s|^)"+this.identifier+"(s|$)","g"),""))||"",""==e.dataset.controller&&delete e.dataset.controller;var o=new RegExp("(s|^)"+this.identifier+"\\..+?(s|$)","g");e.dataset.target=(null==(n=e.dataset.target)?void 0:n.replaceAll(o,""))||"",delete e.dataset[s.default(this.identifier+"-target")],""==e.dataset.target&&delete e.dataset.target,e.dataset.action=(null==(r=e.dataset.target)?void 0:r.replaceAll(o,""))||"",delete e.dataset[s.default(this.identifier+"-action")],""==e.dataset.action&&delete e.dataset.action;var a=this.constructor.values;a&&Object.keys(a).forEach(function(t){return delete e.dataset[s.default(i.identifier+"-"+t+"-value")]});var l=this.constructor.classes;l&&Object.keys(l).forEach(function(t){return delete e.dataset[s.default(i.identifier+"-"+t+"-class")]})},t}(p),ie=function(e){function t(){return e.apply(this,arguments)||this}return u(t,e),t.prototype.connect=function(){var e=this;requestAnimationFrame(function(){U(e.element,{behavior:e.hasBehaviorValue?e.behaviorValue:"smooth",block:e.hasBlockValue?e.blockValue:"center",inline:e.hasInlineValue?e.inlineValue:"center"}).catch(function(){return e.element.scrollIntoView()}),e.cleanupSelf()})},t}(re);ie.values={behavior:String,block:String,inline:String};var oe=function(e){function t(){return e.apply(this,arguments)||this}return u(t,e),t.prototype.scroll=function(e){var t;e&&e.preventDefault(),null!=(t="document"==(this.hasModeValue?this.modeValue:"document")?document.body:Y(this.element))&&U(t,{behavior:"smooth",block:"end"}).catch(function(){return t.scrollIntoView(!1)})},t}(p);oe.values={mode:String};var se=function(e){function t(){return e.apply(this,arguments)||this}return u(t,e),t.prototype.scroll=function(){var e=document.querySelector(this.selectorValue);e?U(e,{behavior:this.hasBehaviorValue?this.behaviorValue:"smooth",block:this.hasBlockValue?this.blockValue:"center",inline:this.hasInlineValue?this.inlineValue:"center"}).catch(function(){return e.scrollIntoView()}):console.warn("Could not find target for '"+this.selectorValue+"'")},t}(p);se.values={selector:String,behavior:String,block:String,inline:String};var ae=function(e){function t(){return e.apply(this,arguments)||this}return u(t,e),t.prototype.scroll=function(e){var t;e&&e.preventDefault(),null!=(t="document"==(this.hasModeValue?this.modeValue:"document")?document.body:Y(this.element))&&U(t,{behavior:"smooth",block:"start"}).catch(function(){return t.scrollIntoView(!1)})},t}(p);ae.values={mode:String};var le=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).timeout=null,t}u(t,e);var n=t.prototype;return n.connect=function(){var e=this;requestAnimationFrame(function(){e.timeout=setTimeout(function(){return e.element.remove()},1e3*e.secondsValue)})},n.disconnect=function(){this.timeout&&clearTimeout(this.timeout)},t}(p);le.values={seconds:Number};var ce=function(e){function t(){return e.apply(this,arguments)||this}u(t,e);var n=t.prototype;return n.connect=function(){var e=this;if(!this.hasInsertValue)throw new Error("`insert` value was not specified");requestAnimationFrame(function(){e.hasImmediateValue&&e.immediateValue&&e.execute()})},n.execute=function(e){e&&e.preventDefault();var t=document.querySelector(this.targetValue);if(null!=t){var n=this.element.cloneNode(!0);switch(this.cleanup(n),this.insertValue){case"beforebegin":case"beforeend":case"afterend":case"afterbegin":t.insertAdjacentHTML(this.insertValue,n.outerHTML);break;case"replaceOuter":t.outerHTML=n.outerHTML;break;case"replaceInner":t.innerHTML=n.outerHTML;break;case"prepend":t.insertAdjacentHTML("afterbegin",n.outerHTML);break;case"append":t.insertAdjacentHTML("beforeend",n.outerHTML);break;default:throw new Error("`insert` value was not specified")}this.element.remove()}else this.element.dispatchEvent(new CustomEvent("teleport:error",{bubbles:!0,cancelable:!0}))},t}(re);ce.values={target:String,insert:String,immediate:Boolean};var ue=function(e){function t(){return e.apply(this,arguments)||this}u(t,e);var n=t.prototype;return n.connect=function(){var e=this;if(!this.hasClassValue)throw new Error("data-toggle-class-class-value must not be empty");(this.hasMouseEnterValue||this.hasMouseLeaveValue)&&((e,t={})=>{new k(this,t)})(),this.hasClickAwayValue&&this.clickAwayValue&&((e,t={})=>{const{onlyVisible:n,dispatchEvent:r,events:i,eventPrefix:o}=Object.assign({},w,t),s=i=>{const s=(null==t?void 0:t.element)||e.element;if(!(s.contains(i.target)||!function(e){const t=e.getBoundingClientRect(),n=window.innerHeight||document.documentElement.clientHeight,r=window.innerWidth||document.documentElement.clientWidth;return t.top<=n&&t.top+t.height>=0&&t.left<=r&&t.left+t.width>=0}(s)&&n)&&(e.clickOutside&&e.clickOutside(i),r)){const t=b("click:outside",e,o),n=y(t,i,{controller:e});s.dispatchEvent(n)}},a=e.disconnect.bind(e);Object.assign(e,{disconnect(){null==i||i.forEach(e=>{window.removeEventListener(e,s,!1)}),a()}}),null==i||i.forEach(e=>{window.addEventListener(e,s,!1)})})(this),requestAnimationFrame(function(){e.hasInitialValue&&e.toggleTargets.forEach("on"===e.initialValue?function(t){return e.elementOn(t)}:function(t){return e.elementOff(t)})})},n.clickOutside=function(){var e=this;this.toggleTargets.forEach(function(t){e.elementWasToggled(t)&&(e.elementToggleStatus(t),e.elementToggle(t))})},n.mouseEnter=function(){if(this.hasMouseEnterValue)switch(this.mouseEnterValue){case"on":this.on();break;case"off":this.off();break;case"toggle":this.toggle()}return{}},n.mouseLeave=function(){if(this.hasMouseLeaveValue)switch(this.mouseLeaveValue){case"on":this.on();break;case"off":this.off();break;case"toggle":this.toggle()}return{}},n.on=function(e){var t=this;this.toggleTargets.forEach(function(e){t.elementToggleStatus(e),t.elementOn(e)})},n.off=function(e){var t=this;this.toggleTargets.forEach(function(e){t.elementToggleStatus(e),t.elementOff(e)})},n.toggle=function(e){var t=this;this.toggleTargets.forEach(function(e){t.elementToggleStatus(e),t.elementToggle(e)})},n.elementWasToggled=function(e){return"true"==e.dataset.toggled},n.elementToggleStatus=function(e){this.elementWasToggled(e)?delete e.dataset.toggled:e.dataset.toggled="true"},n.elementToggle=function(e){this.classValue.split(" ").forEach(function(t){return e.classList.toggle(t)})},n.elementOn=function(e){this.classValue.split(" ").forEach(function(t){return e.classList.toggle(t,!0)})},n.elementOff=function(e){this.classValue.split(" ").forEach(function(t){return e.classList.toggle(t,!1)})},t}(p);ue.targets=["toggle"],ue.values={class:String,mouseEnter:String,mouseLeave:String,clickAway:Boolean,initial:String};var he=function(e){function t(){return e.apply(this,arguments)||this}u(t,e);var n=t.prototype;return n.toggle=function(e){e&&e.preventDefault();var t=this.getFrame().src;null==t||t!==this.getSrc()?this.setSrc():this.clear()},n.setSrc=function(e){e&&e.preventDefault();var t=this.getFrame();this.hasLoadingMessageValue&&(t.innerHTML=this.loadingMessageValue),t.src=this.getSrc()},n.clear=function(e){e&&e.preventDefault();var t=this.getFrame();t.src="",t.innerHTML=""},n.getFrame=function(){var e=document.getElementById(""+this.frameIdValue);if(null==e)throw new Error("Could not find frame with ID '"+this.frameIdValue+"'");if("TURBO-FRAME"!=e.nodeName)throw new Error("Element targeted by ID '"+this.frameIdValue+"'");return e},n.getSrc=function(){var e=this.element;if(this.hasSrcValue)return this.srcValue;if(O(e))return e.href;throw new Error("No link given to drive frame to")},t}(p);he.values={frameId:String,src:String,loadingMessage:String};var de=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).boundHandler=t.updateWordCount.bind(h(t)),t}u(t,e);var n=t.prototype;return n.connect=function(){this.updateWordCount(),this.inputTarget.addEventListener("input",this.boundHandler)},n.disconnect=function(){this.inputTarget.removeEventListener("input",this.boundHandler)},n.updateWordCount=function(){var e=0,t=this.inputTarget.value.match(/\S+/g);this.outputTarget.innerText=(e=t&&t.length||0).toString(),this.hasErrorClass&&(this.isValidCount(e)?this.outputTarget.classList.remove(this.errorClass):this.outputTarget.classList.add(this.errorClass))},n.isValidCount=function(e){var t=0,n=99999;return this.hasMinValue&&(t=this.minValue),this.hasMaxValue&&(n=this.maxValue),e>=t&&e<=n},t}(p);de.targets=["input","output"],de.values={min:Number,max:Number},de.classes=["error"],e.AsyncBlockController=m,e.AutoSubmitFormController=g,e.AutosizeController=I,e.CharCountController=x,e.CheckboxSelectAllController=M,e.ClipboardController=H,e.ConfirmController=_,e.ConfirmNavigationController=P,e.DebugController=N,e.DetectDirtyController=R,e.DisableInputsController=j,e.DismissableController=z,e.EmptyDomController=F,e.EnableInputsController=B,e.FallbackImageController=q,e.FormSaveController=W,e.LazyBlockController=K,e.LightboxImageController=G,e.LimitedSelectionCheckboxesController=Q,e.NestedFormController=X,e.PasswordConfirmController=Z,e.PasswordPeekController=ee,e.ResponsiveIframeBodyController=ne,e.ResponsiveIframeWrapperController=te,e.ScrollIntoFocusController=ie,e.ScrollToBottomController=oe,e.ScrollToController=se,e.ScrollToTopController=ae,e.SelfDestructController=le,e.TeleportController=ce,e.ToggleClassController=ue,e.TurboFrameRCController=he,e.WordCountController=de});
//# sourceMappingURL=stimulus-library.umd.js.map
