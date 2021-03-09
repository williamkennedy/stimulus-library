import{Controller as e}from"stimulus";import t from"dialog-polyfill";import s from"camelcase";function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i])}return e}).apply(this,arguments)}class a extends e{constructor(e){return super(e),new Proxy(this,{get:(e,t)=>{let s=Reflect.get(e,t),i=this;if(function(e){switch(e){case"application":case"el":case"element":case"constructor":case"initialize":case"log":case"data":case"valueDescriptorMap":case"identifier":return!1}return!(/^_.*?$/.test(e)||/^.*?Target(s)?$/.test(e)||/^.*?Value$/.test(e)||/^.*?ValueChanged$/.test(e)||/^.*?Class$/.test(e))}(t.toString())){if("function"==typeof s)return new Proxy(s,{apply:(e,s,a)=>(i.log(t.toString(),{args:a}),Reflect.apply(e,s,a))});this.log(t.toString())}return s}})}get el(){return this.element}dispatch(e,t,s={}){let i=Object.assign({},{bubbles:!0,cancelable:!0,detail:{target:e}},s);i.detail.target&&(i.detail.target=e);let a=new CustomEvent(t,i);e.dispatchEvent(a)}log(e,t={}){if(!this.application.debug)return;let s=console;s.groupCollapsed(`%c${this.identifier} %c#${e}`,"color: #3B82F6","color: unset"),s.log(i({element:this.element},t)),s.groupEnd()}}class n extends a{initialize(){this._handleVisibility=this._handleVisibility.bind(this)}connect(){window.addEventListener("focus",this._handleVisibility),window.addEventListener("blur",this._handleVisibility),document.addEventListener("visibilitychange",this._handleVisibility),this._handleVisibility()}disconnect(){window.removeEventListener("focus",this._handleVisibility),window.removeEventListener("blur",this._handleVisibility),document.removeEventListener("visibilitychange",this._handleVisibility)}appear(){this.dispatch(this.el,"appearance:appear")}away(){this.dispatch(this.el,"appearance:away")}_handleVisibility(){this._documentIsActive()?this.appear():this.away()}_documentIsActive(){return"visible"==document.visibilityState&&document.hasFocus()}}class r extends a{get _errorMessage(){return this.hasErrorMessageValue?this.errorMessageValue:"This content failed to load"}connect(){this.loadContent()}loadContent(){let e=this,t=this.hasReplaceTarget?this.replaceTarget:this.el;fetch(this.endpointValue).then(e=>e.text()).then(s=>{let i=document.createElement("div");if(i.innerHTML=s,this.hasSelectorValue){let e=i.querySelectorAll(this.selectorValue);t.replaceWith(...e)}else t.replaceWith(...i.children);e.dispatch(t,"ajax:success")}).catch(s=>{t.replaceWith(this._errorMessage),e.dispatch(t,"ajax:error")}).finally(()=>{e.dispatch(t,"ajax:complete")})}}r.targets=["replace"],r.values={endpoint:String,errorMessage:String,selector:String};class l extends a{initialize(){this.handler=this.handler.bind(this)}connect(){this.el.querySelectorAll("input, select, textarea").forEach(e=>e.addEventListener("change",this.handler))}disconnect(){this.el.querySelectorAll("input, select, textarea").forEach(e=>e.removeEventListener("change",this.handler))}handler(e){this.dispatch(this.el,"submit")}}const o=(e,t)=>{const s=e[t];return"function"==typeof s?s:(...e)=>{}},h=(e,t,s)=>{let i=e;return!0===s?i=`${t.identifier}:${e}`:"string"==typeof s&&(i=`${s}:${e}`),i},c=(e,t,s)=>{const{bubbles:i,cancelable:a,composed:n}=t||{bubbles:!0,cancelable:!0,composed:!0};return t&&Object.assign(s,{originalEvent:t}),new CustomEvent(e,{bubbles:i,cancelable:a,composed:n,detail:s})},d={dispatchEvent:!0,eventPrefix:!0},u=(e,t={})=>{const{dispatchEvent:s,eventPrefix:i}=Object.assign({},d,t),a=(null==t?void 0:t.element)||e.element,n=e.disconnect.bind(e),r=new IntersectionObserver(t=>{const[n]=t;n.isIntersecting?(t=>{if(e.isVisible=!0,o(e,"appear").call(e,t),s){const s=h("appear",e,i),n=c(s,null,{controller:e,entry:t});a.dispatchEvent(n)}})(n):e.isVisible&&(t=>{if(e.isVisible=!1,o(e,"disappear").call(e,t),s){const s=h("disappear",e,i),n=c(s,null,{controller:e,entry:t});a.dispatchEvent(n)}})(n)},t),l=()=>{r.observe(a)},u=()=>{r.unobserve(a)};return Object.assign(e,{isVisible:!1,disconnect(){u(),n()}}),l(),[l,u]},g={events:["click","touchend"],onlyVisible:!0,dispatchEvent:!0,eventPrefix:!0},m={debug:!1,logger:console};class p{constructor(e,t={}){var s,i,a;this.log=(e,t)=>{this.debug&&(this.logger.groupCollapsed(`%c${this.controller.identifier} %c#${e}`,"color: #3B82F6","color: unset"),this.logger.log(Object.assign({controllerId:this.controllerId},t)),this.logger.groupEnd())},this.debug=null!==(i=null!==(s=null==t?void 0:t.debug)&&void 0!==s?s:e.application.stimulusUseDebug)&&void 0!==i?i:m.debug,this.logger=null!==(a=null==t?void 0:t.logger)&&void 0!==a?a:m.logger,this.controller=e,this.controllerId=e.element.id||e.element.dataset.id,this.controllerInitialize=e.initialize.bind(e),this.controllerConnect=e.connect.bind(e),this.controllerDisconnect=e.disconnect.bind(e)}}class f extends p{constructor(e,t={}){super(e,t),this.observe=()=>{this.targetElement.addEventListener("mouseenter",this.onEnter),this.targetElement.addEventListener("mouseleave",this.onLeave)},this.unobserve=()=>{this.targetElement.removeEventListener("mouseenter",this.onEnter),this.targetElement.removeEventListener("mouseleave",this.onLeave)},this.onEnter=()=>{o(this.controller,"mouseEnter").call(this.controller),this.log("mouseEnter",{hover:!0})},this.onLeave=()=>{o(this.controller,"mouseLeave").call(this.controller),this.log("mouseLeave",{hover:!1})},this.targetElement=(null==t?void 0:t.element)||e.element,this.controller=e,this.enhanceController(),this.observe()}enhanceController(){const e=this.controller.disconnect.bind(this.controller);Object.assign(this.controller,{disconnect:()=>{this.unobserve(),e()}})}}class v extends p{constructor(e,t={}){super(e,t),this.observe=()=>{try{this.observer.observe(this.targetElement,this.options)}catch(e){this.controller.application.handleError(e,"At a minimum, one of childList, attributes, and/or characterData must be true",{})}},this.unobserve=()=>{this.observer.disconnect()},this.mutation=e=>{o(this.controller,"mutate").call(this.controller,e),this.log("mutate",{entries:e})},this.targetElement=(null==t?void 0:t.element)||e.element,this.controller=e,this.options=t,this.observer=new MutationObserver(this.mutation),this.enhanceController(),this.observe()}enhanceController(){const e=this.controller.disconnect.bind(this.controller);Object.assign(this.controller,{disconnect:()=>{this.unobserve(),e()}})}}const b=e=>{const t=t=>{const{innerWidth:s,innerHeight:i}=window,a={height:i||Infinity,width:s||Infinity,event:t};o(e,"windowResize").call(e,a)},s=e.disconnect.bind(e),i=()=>{window.addEventListener("resize",t),t()},a=()=>{window.removeEventListener("resize",t)};return Object.assign(e,{disconnect(){a(),s()}}),i(),[i,a]},E=(e,t=200)=>{let s=null;return function(){const i=arguments,a=this,n=()=>e.apply(a,i);s&&clearTimeout(s),s=setTimeout(n,t)}};class w extends a{initialize(){this._handler=this._handler.bind(this)}connect(){let e=this.el;e.style.resize="none",e.style.boxSizing="border-box",e.addEventListener("input",this._handler),e.addEventListener("focus",this._handler),b(this),requestAnimationFrame(this._handler)}windowResize(){this._handler()}_handler(){this.autosize(this.el)}autosize(e){let t=e.offsetHeight-e.clientHeight;e.style.height="auto",e.style.height=e.scrollHeight+t+"px"}}class y extends a{initialize(){this._updateCharCount=this._updateCharCount.bind(this)}connect(){this._updateCharCount(),this.inputTarget.addEventListener("input",this._updateCharCount)}disconnect(){this.inputTarget.removeEventListener("input",this._updateCharCount)}_updateCharCount(){let e=this.inputTarget.value.length;this.outputTarget.innerText=e.toString(),this.hasErrorClass&&(this._isValidCount(e)?this.outputTarget.classList.remove(this.errorClass):this.outputTarget.classList.add(this.errorClass))}_isValidCount(e){let t=0,s=99999;return this.hasMinValue&&(t=this.minValue),this.hasMaxValue&&(s=this.maxValue),e>=t&&e<=s}}y.targets=["input","output"],y.values={min:Number,max:Number},y.classes=["error"];class V extends a{get checked(){return this.checkboxTargets.filter(e=>e.checked)}get unchecked(){return this.checkboxTargets.filter(e=>!e.checked)}initialize(){this.toggle=this.toggle.bind(this),this.refresh=this.refresh.bind(this)}connect(){requestAnimationFrame(()=>{this.hasSelectAllTarget&&(this.selectAllTarget.addEventListener("change",this.toggle),this.checkboxTargets.forEach(e=>e.addEventListener("change",this.refresh)),this.refresh())})}disconnect(){this.hasSelectAllTarget&&(this.selectAllTarget.removeEventListener("change",this.toggle),this.checkboxTargets.forEach(e=>e.removeEventListener("change",this.refresh)))}toggle(e){e.preventDefault();let t=e.target;this.checkboxTargets.forEach(e=>e.checked=t.checked)}refresh(){const e=this.checkboxTargets.length,t=this.checked.length;this.selectAllTarget.checked=t>0,this.selectAllTarget.indeterminate=t>0&&t<e}}V.targets=["selectAll","checkbox"];class T extends a{constructor(){super(...arguments),this.supported=!1}connect(){this.supported=document.queryCommandSupported("copy"),this.hasRemoveUnusedValue&&this.removeUnusedValue&&(this.supported&&this.hasFallbackTarget?this.fallbackTarget.remove():this.hasCopyTarget&&this.copyTarget.remove())}select(e){e&&e.preventDefault(),this.sourceTarget.select()}copy(e){e&&e.preventDefault(),this.sourceTarget.select(),this.supported&&document.execCommand("copy")}}function _(e){return"A"==e.nodeName}function C(e){return"FORM"==e.nodeName}function S(e){return"INPUT"==e.nodeName}function x(e){return"BUTTON"==e.nodeName}function k(e){return"SELECT"==e.nodeName}function L(e){return S(e)&&("radio"===e.type||"checkbox"===e.type)}T.targets=["button","copy","fallback"],T.values={removeUnused:Boolean};class I extends a{get message(){return this.hasMessageValue?this.messageValue:"Are you sure?"}initialize(){this.confirm=this.confirm.bind(this)}connect(){requestAnimationFrame(()=>{let e=this.el;if(C(e))e.addEventListener("submit",this.confirm);else{if(!_(e))throw new Error("Can't handle confirmation on attached element");e.addEventListener("click",this.confirm)}})}confirm(e){window.confirm(this.message)||(e.preventDefault(),this.dispatch(this.el,"confirm:cancelled"))}}I.values={message:String};class M extends a{get _message(){return this.hasMessageValue?this._messageValue:"Do you want to leave this page? Changes you made may not be saved"}initialize(){this.handlePopstate=this.handlePopstate.bind(this),this.handleTurboNavigation=this.handleTurboNavigation.bind(this)}connect(){window.onbeforeunload=()=>this._message,window.addEventListener("popstate",this.handlePopstate),window.addEventListener("submit",()=>{window.removeEventListener("popstate",this.handlePopstate),window.onbeforeunload=null}),window.addEventListener("turbolinks:before-visit",this.handleTurboNavigation),window.addEventListener("turbo:before-visit",this.handleTurboNavigation)}handlePopstate(e){return!1}handleTurboNavigation(e){confirm(this._message)||e.preventDefault()}}M.values={_message:String};class D extends a{connect(){console.log("Debug Controller",this,this.testTargets)}}D.targets=["test"];class O extends a{constructor(){super(...arguments),this.loadValue=null}initialize(){this.checkDirty=this.checkDirty.bind(this)}connect(){let e=this.el;this.loadValue=L(e)?e.checked:e.value,this.checkDirty(),e.addEventListener("input",this.checkDirty),e.addEventListener("change",this.checkDirty)}disconnect(){let e=this.el;e.removeEventListener("input",this.checkDirty),e.removeEventListener("change",this.checkDirty)}restore(){let e=this.el;if(L(e))e.checked=e.defaultChecked;else if(k(e)){let t=Array.from(e.options);t.every(e=>!e.defaultSelected)?t.forEach(e=>{e.selected=e.value==this.loadValue}):t.forEach(e=>e.selected=e.defaultSelected),Array.from(e.options).forEach(e=>e.selected=e.defaultSelected)}else e.value=e.defaultValue}checkDirty(e){let t,s=this.el;if(L(s))t=s.checked!=s.defaultChecked;else if(k(s)){let e=Array.from(s.options);t=e.every(e=>!e.defaultSelected)?s.value!=this.loadValue:e.some(e=>e.selected!=e.defaultSelected)}else t=s.value!=s.defaultValue;t?s.setAttribute("data-dirty","true"):s.removeAttribute("data-dirty")}}class A extends a{connect(){this.toggle()}toggle(){this.hasDisablerTarget&&this.disablerTarget.checked?this.disableInputs():this.enableInputs()}disableInputs(){let e=this.hasClearValue&&this.clearValue;this.disableTargets.forEach((t,s)=>{e&&(t.value=""),t.disabled=!0})}enableInputs(){this.disableTargets.forEach((e,t)=>{e.disabled=!1})}}A.targets=["disabler","disable"],A.values={clear:Boolean};class N extends a{get _message(){return this.hasMessageValue?this.messageValue:"Submitting..."}get _timeout(){return this.hasTimeoutValue?this.timeoutValue:1e3}initialize(){this.enable=this.enable.bind(this),this.disable=this.disable.bind(this)}connect(){requestAnimationFrame(()=>{this.el.addEventListener("click",this.disable)})}disconnect(){this._timeoutHandle&&clearTimeout(this._timeoutHandle)}disable(e){let t=this.el;this._isDisabled(t)?(null==e||e.preventDefault(),null==e||e.stopImmediatePropagation()):(this._cacheText=this._getElText(t),this._setElText(t,this._message),this._disable(t),setTimeout(this.enable,this._timeout))}enable(e){null==e||e.preventDefault();let t=this.el;this._isDisabled(t)&&(this._setElText(t,this._cacheText),this._enable(t))}_isDisabled(e){return S(e)&&"submit"==e.type||x(e)?e.disabled:"true"==e.dataset.disabled}_getElText(e){return S(e)&&"submit"==e.type?e.value:e.innerText}_setElText(e,t){S(e)&&"submit"==e.type?e.value=t:(x(e)||_(e))&&(e.innerText=t)}_disable(e){S(e)&&"submit"==e.type||x(e)?e.disabled=!0:e.dataset.disabled="true"}_enable(e){S(e)&&"submit"==e.type||x(e)?e.disabled=!1:e.dataset.disabled=void 0}}N.values={message:String,timeout:Number};class H extends a{dismiss(){this.el.remove()}}class z extends a{get emptyClasses(){return this.emptyClass.split(" ")}get notEmptyClasses(){return this.notEmptyClass.split(" ")}get children(){let e=this.el;return Array.from(this.hasScopeSelectorValue?e.querySelectorAll(this.scopeSelectorValue):e.children)}connect(){((e,t={})=>{new v(this,t)})(0,{element:this.el,childList:!0}),this.checkEmpty()}mutate(e){this.checkEmpty()}checkEmpty(){let e=this.el,t=this.children;0===t.length?(this._removeNotEmptyClasses(),this._addEmptyClasses(),this.dispatch(e,"dom:empty")):(this._addNotEmptyClasses(),this._removeEmptyClasses(),this.dispatch(e,"dom:not-empty",{detail:{count:t.length}}))}_removeEmptyClasses(){this.hasEmptyClass&&this.el.classList.remove(...this.emptyClasses)}_addNotEmptyClasses(){this.hasNotEmptyClass&&this.el.classList.add(...this.notEmptyClasses)}_addEmptyClasses(){this.hasEmptyClass&&this.el.classList.add(...this.emptyClasses)}_removeNotEmptyClasses(){this.hasNotEmptyClass&&this.el.classList.remove(...this.notEmptyClasses)}}z.classes=["empty","notEmpty"],z.values={scopeSelector:String};class $ extends a{connect(){this.toggle()}toggle(){this.hasEnablerTarget&&this.enablerTarget.checked?this.enableInputs():this.disableInputs()}disableInputs(){let e=this.hasClearValue&&this.clearValue;this.enableTargets.forEach((t,s)=>{e&&(t.value=""),t.disabled=!0})}enableInputs(){this.enableTargets.forEach((e,t)=>{e.disabled=!1})}}$.targets=["enabler","enable"],$.values={clear:Boolean};class R extends a{connect(){let e=this.el;e.onerror=()=>{this.hasPlaceholderValue?e.src=this.placeholderValue:e.style.display="none"}}}R.values={placeholder:String};class P extends a{get formID(){if(this.hasIdValue)return this.idValue;let e=this.el.id;if(""!==e)return e;throw new Error(`No ID value to uniquely identify this form. Please either specify data-${this.identifier}-id-value or give this form an 'id' attribute. `)}get formIdentifier(){return`${location.href} ${this.formID}`}get formElements(){return this.el.elements}get formData(){let e={[this.formIdentifier]:{}};for(const t of this.formElements){let s=t;s.name.length>0&&(S(s)&&"checkbox"==s.type?e[this.formIdentifier][s.name]=s.checked:S(s)&&"radio"==s.type?s.checked&&(e[this.formIdentifier][s.name]=s.value):e[this.formIdentifier][s.name]=s.value)}return e}get restoreOnLoad(){return!this.hasRestoreOnLoadValue||this.restoreOnLoadValue}get clearOnSubmit(){return!this.hasClearOnSubmitValue||this.clearOnSubmitValue}initialize(){this._clear=this._clear.bind(this)}connect(){requestAnimationFrame(()=>{if(!C(this.el))throw new Error("Expected controller to be mounted on a form element.");this.restoreOnLoad&&this.restore(),this.clearOnSubmit&&this.el.addEventListener("submit",this._clear)})}disconnect(){this.clearOnSubmit&&this.el.removeEventListener("submit",this._clear)}_clear(){localStorage.removeItem(this.formIdentifier),this.dispatch(this.el,"form-save:cleared")}clear(e){null==e||e.preventDefault(),this._clear()}save(e){e.preventDefault(),localStorage.setItem(this.formIdentifier,JSON.stringify(this.formData[this.formIdentifier])),this.dispatch(this.el,"form-save:save:success")}restore(e){if(null==e||e.preventDefault(),localStorage.getItem(this.formIdentifier)){const e=JSON.parse(localStorage.getItem(this.formIdentifier));for(const t of this.formElements){let s=t;s.name in e&&(S(s)&&"checkbox"==s.type?s.checked=e[s.name]:S(s)&&"radio"==s.type?s.value==e[s.name]&&(s.checked=!0):s.value=e[s.name])}this.dispatch(this.el,"form-save:restore:success")}else this.dispatch(this.el,"form-save:restore:empty")}}P.values={id:String,restoreOnLoad:Boolean,clearOnSubmit:Boolean};class j extends a{get threshold(){return this.hasThresholdValue?this.thresholdValue.split(",").map(e=>Number.parseFloat(e.trim())).filter(e=>e>=0&&e<=1):[0,1]}connect(){u(this,{threshold:this.threshold,element:this.el})}appear(e){this.dispatch(this.el,"intersection:appear",{detail:{element:this.el}})}disappear(e){this.dispatch(this.el,"intersection:disappear",{detail:{element:this.el}})}}j.values={threshold:String};class F extends r{connect(){let e=this.el;"IntersectionObserver"in window?[this.observe,this.unobserve]=u(this,{element:e,threshold:.3}):this.loadContent()}appear(e){e.target===this.el&&e.isIntersecting&&(this.loadContent(),this.unobserve&&this.unobserve())}}const q="scrollBehavior"in document.documentElement.style;let W;async function B(e,{behavior:t="smooth",block:s="start",inline:i="nearest"}={}){"smooth"!=t||q||await async function(){const{polyfill:e}=await import("smoothscroll-polyfill");W||(W=!0,e())}(),e.scrollIntoView({behavior:t,block:s,inline:i})}function U(e){if(!e)return null;const t=getComputedStyle(e).overflowY;return"visible"!==t&&"hidden"!==t&&e.scrollHeight>=e.clientHeight?e:U(e.parentElement)||document.body}class J extends a{constructor(){super(...arguments),this._dialog=null}get src(){return this.hasSrcValue?this.srcValue:this.el.src}get srcSet(){return this.hasSrcSetValue?this.srcSetValue:this.el.srcset}get sizes(){return this.hasSizesValue?this.sizesValue:this.el.sizes}get modalClassName(){return this.hasModalClass?this.modalClass:"image-lightbox-dialog"}get imageClassName(){return this.hasImageClass?this.imageClass:"image-lightbox-image"}initialize(){this.open=this.open.bind(this),this.close=this.close.bind(this)}connect(){}open(){let e=this.el;if(this._dialog)return;this._dialog=document.createElement("dialog");let s=document.createElement("img");s.className=this.imageClassName,s.src=this.src,s.srcset=this.srcSet,s.sizes=this.sizes,this._dialog.appendChild(s),e.insertAdjacentElement("afterend",this._dialog),t.registerDialog(this._dialog),this._dialog.className=this.modalClassName,this._dialog.showModal(),B(this._dialog,{behavior:"smooth",block:"end"}).catch(()=>this._dialog.scrollIntoView(!1)),this._dialog.addEventListener("click",this.close),this._dialog.addEventListener("cancel",this.close),this._dialog.addEventListener("close",this.close)}close(){this._dialog&&(this._dialog.close(),this._dialog.remove(),this._dialog=null,B(this.el,{behavior:"smooth",block:"end"}).catch(()=>this.el.scrollIntoView(!1)))}}J.values={src:String,srcSet:String,sizes:String},J.classes=["modal","image"];class Y extends a{initialize(){this.handleInputs=this.handleInputs.bind(this)}connect(){this.inputTargets.forEach(e=>e.addEventListener("change",this.handleInputs))}disconnect(){this.inputTargets.forEach(e=>e.removeEventListener("change",this.handleInputs))}handleInputs(e){let t=this.inputTargets.reduce((e,t)=>t.checked?e+1:e,0),s=e.target;t>this.maxValue?(e.preventDefault(),s.checked=!1,this.dispatch(s,"change"),this.dispatch(s,"limited-selection:too-many"),this.hasErrorTarget&&(this.errorTarget.innerHTML=this.messageValue)):(this.dispatch(s,"limited-selection:selection"),this.hasErrorTarget&&(this.errorTarget.innerHTML=""))}}Y.targets=["input","error"],Y.values={max:Number,message:String};class G extends a{get wrapperClass(){return this.hasWrapperSelectorValue?this.wrapperClassValue:"nested-fields"}get insertMode(){return this.hasInsertModeValue?this.insertModeValue:"beforeend"}connect(){this.checkStructure()}add(e){null==e||e.preventDefault();const t=this.templateTarget.innerHTML.replace(/NEW_RECORD/g,this.generateID());this.targetTarget.insertAdjacentHTML(this.insertMode,t)}remove(e){e.preventDefault();const t=e.target.closest(`.${this.wrapperClass}`);if(null==t)throw new Error(`#remove was clicked from outside of a child record. Could not find an ancestor with class .${this.wrapperClass}`);if("true"===t.dataset.newRecord)t.remove();else{t.style.display="none";let e=t.querySelector("input[name*='_destroy']");if(null==e)throw new Error("Could not find a hidden input with name '_destroy'. NestedForm cannot remove an already persisted record without it.");e.value="1"}}generateID(){return(new Date).getTime().toString()+Math.random().toString().slice(2)}checkStructure(){if(this.templateTarget.innerHTML.indexOf("NEW_RECORD"))throw new Error("Could not find 'NEW_RECORD' in the provided template. Please make sure you've passed `child_index: 'NEW_RECORD'` to `fields_for`")}}G.targets=["target","template"],G.values={insertMode:String,wrapperClass:String};class K extends a{initialize(){this.checkPasswordsMatch=this.checkPasswordsMatch.bind(this)}connect(){this.passwordTargets.forEach(e=>e.addEventListener("change",this.checkPasswordsMatch))}disconnect(){this.passwordTargets.forEach(e=>e.removeEventListener("change",this.checkPasswordsMatch))}allPasswordsMatch(){let e=new Set(this.passwordTargets.map(e=>e.value));return e.has("")||1==e.size}checkPasswordsMatch(){let e=this.el;this.allPasswordsMatch()?(this.dispatch(e,"password-confirm:match"),this.hasErrorClass&&this.passwordTargets.forEach(e=>e.classList.remove(this.errorClass))):(this.dispatch(e,"password-confirm:no-match"),this.hasErrorClass&&this.passwordTargets.forEach(e=>e.classList.add(this.errorClass)))}}K.targets=["password"],K.classes=["error"];class Q extends a{peak(e){null==e||e.preventDefault(),this.passwordTarget.type="text"}hide(e){null==e||e.preventDefault(),this.passwordTarget.type="password"}toggle(e){null==e||e.preventDefault(),"password"===this.passwordTarget.type?this.peak():this.hide()}}Q.targets=["password"];class X extends a{get selector(){return this.hasSelectorValue?this.selectorValue:`[data-controller~="${this.identifier}"]`}replace(e){const[t,s,i]=e.detail;if(t instanceof Node){let e=t.querySelector(this.selector);if(null==e)throw new Error(`expected new form DOM with [data-controller="${this.identifier}"] to be present in returned payload`);let s=this.el.parentNode;if(null==s)throw new Error("expected form to have a DOM parent, could not execute replaceChild");s.replaceChild(e,this.el)}else console.log("Unknown",t)}}X.targets=[],X.values={selector:String};class Z extends a{initialize(){this.messageReceived=this.messageReceived.bind(this)}connect(){window.addEventListener("message",this.messageReceived)}disconnect(){window.removeEventListener("message",this.messageReceived)}messageReceived(e){let t=e.data;t.hasOwnProperty("name")&&"iframe-body"===t.name&&t.hasOwnProperty("height")&&this.resize(t.height)}resize(e){this.el.style.height=`${e}px`}}class ee extends a{connect(){var e,t,s;window.self!==window.top&&(b(this),t={},null===(s=(e=this).constructor.debounces)||void 0===s||s.forEach(s=>{if("string"==typeof s&&(e[s]=E(e[s],null==t?void 0:t.wait)),"object"==typeof s){const{name:i,wait:a}=s;if(!i)return;e[i]=E(e[i],a||(null==t?void 0:t.wait))}}),this.postUpdate())}windowResize(e){this.postUpdate()}postUpdate(){let e={name:"iframe-body",height:this.getHeight()};window.parent.postMessage(e,"*")}getHeight(){const e=document.body,t=document.documentElement;return Math.max(e.scrollHeight,e.offsetHeight,t.clientHeight,t.scrollHeight,t.offsetHeight)}}ee.debounces=["postUpdate"];class te extends a{_cleanupSelf(){this.cleanup(this.el)}cleanup(e){var t,i,a;e.dataset.controller=(null==(t=e.dataset.controller)?void 0:t.replaceAll(new RegExp(`(s|^)${this.identifier}(s|$)`,"g"),""))||"",""==e.dataset.controller&&delete e.dataset.controller;let n=new RegExp(`(s|^)${this.identifier}\\..+?(s|$)`,"g");e.dataset.target=(null==(i=e.dataset.target)?void 0:i.replaceAll(n,""))||"",delete e.dataset[s(`${this.identifier}-target`)],""==e.dataset.target&&delete e.dataset.target,e.dataset.action=(null==(a=e.dataset.target)?void 0:a.replaceAll(n,""))||"",delete e.dataset[s(`${this.identifier}-action`)],""==e.dataset.action&&delete e.dataset.action;let r=this.constructor.values;r&&Object.keys(r).forEach(t=>delete e.dataset[s(`${this.identifier}-${t}-value`)]);let l=this.constructor.classes;l&&Object.keys(l).forEach(t=>delete e.dataset[s(`${this.identifier}-${t}-class`)])}}class se extends te{connect(){requestAnimationFrame(()=>{B(this.el,{behavior:this.hasBehaviorValue?this.behaviorValue:"smooth",block:this.hasBlockValue?this.blockValue:"center",inline:this.hasInlineValue?this.inlineValue:"center"}).catch(()=>this.el.scrollIntoView()),this._cleanupSelf()})}}se.values={behavior:String,block:String,inline:String};class ie extends a{scroll(e){let t;null==e||e.preventDefault(),t="document"==(this.hasModeValue?this.modeValue:"document")?document.body:U(this.el),null!=t&&B(t,{behavior:"smooth",block:"end"}).catch(()=>t.scrollIntoView(!1))}}ie.values={mode:String};class ae extends a{scroll(){let e=document.querySelector(this.selectorValue);e?B(e,{behavior:this.hasBehaviorValue?this.behaviorValue:"smooth",block:this.hasBlockValue?this.blockValue:"center",inline:this.hasInlineValue?this.inlineValue:"center"}).catch(()=>e.scrollIntoView()):console.warn(`Could not find target for '${this.selectorValue}'`)}}ae.values={selector:String,behavior:String,block:String,inline:String};class ne extends a{scroll(e){let t;null==e||e.preventDefault(),t="document"==(this.hasModeValue?this.modeValue:"document")?document.body:U(this.el),null!=t&&B(t,{behavior:"smooth",block:"start"}).catch(()=>t.scrollIntoView(!1))}}ne.values={mode:String};class re extends a{constructor(){super(...arguments),this.timeout=null}connect(){requestAnimationFrame(()=>{this.timeout=setTimeout(()=>this.el.remove(),1e3*this.secondsValue)})}disconnect(){this.timeout&&clearTimeout(this.timeout)}}re.values={seconds:Number};class le extends a{constructor(){super(...arguments),this._magicElement=null}get _mode(){return this.hasModeValue?this.modeValue:"top"}createMagicElement(){if(null===this._magicElement)switch(this._magicElement=document.createElement("div"),this._mode){case"top":this.el.insertAdjacentElement("beforebegin",this._magicElement);break;case"bottom":this.el.insertAdjacentElement("afterend",this._magicElement)}}connect(){let e=this.el;this.createMagicElement(),new IntersectionObserver(t=>{t.forEach(t=>{t.target===this._magicElement&&(0===t.intersectionRatio?e.classList.add(this.hasStuckClass?this.stuckClass:"stuck"):1===t.intersectionRatio&&e.classList.remove(this.hasStuckClass?this.stuckClass:"stuck"))})},{threshold:[0,1]}).observe(this._magicElement)}}le.classes=["stuck"],le.values={mode:String};class oe extends te{connect(){if(!this.hasInsertValue)throw new Error("`insert` value was not specified");requestAnimationFrame(()=>{this.hasImmediateValue&&this.immediateValue&&this.execute()})}execute(e){null==e||e.preventDefault();let t=this.el,s=document.querySelector(this.targetValue);if(null==s)return void this.dispatch(t,"teleport:error");let i=t.cloneNode(!0);switch(this.cleanup(i),this.insertValue){case"beforebegin":case"beforeend":case"afterend":case"afterbegin":s.insertAdjacentHTML(this.insertValue,i.outerHTML);break;case"replaceOuter":s.outerHTML=i.outerHTML;break;case"replaceInner":s.innerHTML=i.outerHTML;break;case"prepend":s.insertAdjacentHTML("afterbegin",i.outerHTML);break;case"append":s.insertAdjacentHTML("beforeend",i.outerHTML);break;default:throw new Error("`insert` value was not specified")}t.remove()}}oe.values={target:String,insert:String,immediate:Boolean};class he extends a{connect(){if(!this.hasClassValue)throw new Error("data-toggle-class-class-value must not be empty");(this.hasMouseEnterValue||this.hasMouseLeaveValue)&&((e,t={})=>{new f(this,t)})(),this.hasClickAwayValue&&this.clickAwayValue&&((e,t={})=>{const{onlyVisible:s,dispatchEvent:i,events:a,eventPrefix:n}=Object.assign({},g,t),r=a=>{const r=(null==t?void 0:t.element)||e.element;if(!(r.contains(a.target)||!function(e){const t=e.getBoundingClientRect(),s=window.innerHeight||document.documentElement.clientHeight,i=window.innerWidth||document.documentElement.clientWidth;return t.top<=s&&t.top+t.height>=0&&t.left<=i&&t.left+t.width>=0}(r)&&s)&&(e.clickOutside&&e.clickOutside(a),i)){const t=h("click:outside",e,n),s=c(t,a,{controller:e});r.dispatchEvent(s)}},l=e.disconnect.bind(e);Object.assign(e,{disconnect(){null==a||a.forEach(e=>{window.removeEventListener(e,r,!1)}),l()}}),null==a||a.forEach(e=>{window.addEventListener(e,r,!1)})})(this),requestAnimationFrame(()=>{this.hasInitialValue&&this.toggleTargets.forEach("on"===this.initialValue?e=>this.elementOn(e):e=>this.elementOff(e))})}clickOutside(){this.toggleTargets.forEach(e=>{this.elementWasToggled(e)&&(this.elementToggleStatus(e),this.elementToggle(e))})}mouseEnter(){if(this.hasMouseEnterValue)switch(this.mouseEnterValue){case"on":this.on();break;case"off":this.off();break;case"toggle":this.toggle()}return{}}mouseLeave(){if(this.hasMouseLeaveValue)switch(this.mouseLeaveValue){case"on":this.on();break;case"off":this.off();break;case"toggle":this.toggle()}return{}}on(e){this.toggleTargets.forEach(e=>{this.elementToggleStatus(e),this.elementOn(e)})}off(e){this.toggleTargets.forEach(e=>{this.elementToggleStatus(e),this.elementOff(e)})}toggle(e){this.toggleTargets.forEach(e=>{this.elementToggleStatus(e),this.elementToggle(e)})}elementWasToggled(e){return"true"==e.dataset.toggled}elementToggleStatus(e){this.elementWasToggled(e)?delete e.dataset.toggled:e.dataset.toggled="true"}elementToggle(e){this.classValue.split(" ").forEach(t=>e.classList.toggle(t))}elementOn(e){this.classValue.split(" ").forEach(t=>e.classList.toggle(t,!0))}elementOff(e){this.classValue.split(" ").forEach(t=>e.classList.toggle(t,!1))}}function ce(e){return"TURBO-FRAME"==e.nodeName}he.targets=["toggle"],he.values={class:String,mouseEnter:String,mouseLeave:String,clickAway:Boolean,initial:String};class de extends a{toggle(e){null==e||e.preventDefault();let t=this._getFrame().src;null==t||t!==this._getSrc()?this._setSrc():this._clear()}setSrc(e){null==e||e.preventDefault(),this._setSrc()}clear(e){null==e||e.preventDefault(),this._clear()}_setSrc(){let e=this._getFrame();this.hasLoadingMessageValue&&(e.innerHTML=this.loadingMessageValue),e.src=this._getSrc()}_clear(){let e=this._getFrame();e.src="",e.innerHTML=""}_getFrame(){let e=document.getElementById(`${this.frameIdValue}`);if(null==e)throw new Error(`Could not find frame with ID '${this.frameIdValue}'`);if(ce(e))return e;throw new Error(`Element targeted by ID '${this.frameIdValue}'`)}_getSrc(){let e=this.el;if(this.hasSrcValue)return this.srcValue;if(_(e))return e.href;throw new Error("No link given to drive frame to")}}de.values={frameId:String,src:String,loadingMessage:String};class ue extends a{constructor(){super(...arguments),this._timeoutHandle=null}get poll(){return!!this.hasPollValue&&this.pollValue}initialize(){this.refresh=this.refresh.bind(this)}connect(){let e=this.el;if(!ce(e))throw new Error("Expected controller to be mounted on a <turbo-frame> element.");if(e.src)throw new Error("The provided <turbo-frame> element has no `src` attribute.");this.poll&&requestAnimationFrame(()=>this._timeoutHandle=setTimeout(()=>this.refresh(),this.intervalValue))}disconnect(){this._timeoutHandle&&clearTimeout(this._timeoutHandle)}refresh(e){null==e||e.preventDefault();let t=this.el;t.src=t.src}}ue.values={interval:Number,poll:Boolean};class ge extends a{initialize(){this.updateWordCount=this.updateWordCount.bind(this)}connect(){this.updateWordCount(),this.inputTarget.addEventListener("input",this.updateWordCount)}disconnect(){this.inputTarget.removeEventListener("input",this.updateWordCount)}updateWordCount(){let e=0,t=this.inputTarget.value.match(/\S+/g);e=t&&t.length||0,this.outputTarget.innerText=e.toString(),this.hasErrorClass&&(this.isValidCount(e)?this.outputTarget.classList.remove(this.errorClass):this.outputTarget.classList.add(this.errorClass))}isValidCount(e){let t=0,s=99999;return this.hasMinValue&&(t=this.minValue),this.hasMaxValue&&(s=this.maxValue),e>=t&&e<=s}}ge.targets=["input","output"],ge.values={min:Number,max:Number},ge.classes=["error"];export{n as AppearanceController,r as AsyncBlockController,l as AutoSubmitFormController,w as AutosizeController,y as CharCountController,V as CheckboxSelectAllController,T as ClipboardController,I as ConfirmController,M as ConfirmNavigationController,D as DebugController,O as DetectDirtyController,A as DisableInputsController,N as DisableWithController,H as DismissableController,z as EmptyDomController,$ as EnableInputsController,R as FallbackImageController,P as FormSaveController,j as IntersectionController,F as LazyBlockController,J as LightboxImageController,Y as LimitedSelectionCheckboxesController,G as NestedFormController,K as PasswordConfirmController,Q as PasswordPeekController,X as RemoteFormController,ee as ResponsiveIframeBodyController,Z as ResponsiveIframeWrapperController,se as ScrollIntoFocusController,ie as ScrollToBottomController,ae as ScrollToController,ne as ScrollToTopController,re as SelfDestructController,le as StickyController,oe as TeleportController,he as ToggleClassController,de as TurboFrameRCController,ue as TurboFrameRefreshController,ge as WordCountController};
//# sourceMappingURL=stimulus-library.modern.js.map
