(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9860],{73952:function(e,n,t){"use strict";t.d(n,{v:function(){return s}});var r=t(2784),i=t(13980),o=t.n(i),s=function(e){var n=e.apiKey,t=void 0===n?null:n,i=e.iabVersion,o=void 0===i?2:i,s=e.noticeId,c=void 0===s?null:s,a=e.config,u=void 0===a?{}:a,l=e.gdprAppliesGlobally,d=void 0===l||l,f=e.onReady,p=e.onConsentChanged,v=e.onNoticeShown,m=e.onNoticeHidden,w=e.onNoticeBackdropclick,h=e.onNoticeClickAgree,g=e.onNoticeClickMoreInfo,b=e.onPreferencesClickAgreeToAll,y=e.onPreferencesClickDisagreeToAll,E=e.onPreferencesClickPurposeAgree,C=e.onPreferencesClickPurposeDisagree,k=e.onPreferencesClickViewVendors,_=e.onPreferencesClickSaveChoices,T=e.onPreferencesClickVendorAgree,P=e.onPreferencesClickVendorDisagree,L=e.onPreferencesClickVendorSaveChoices,O=e.sdkPath,R=void 0===O?"https://sdk.privacy-center.org/":O,S=e.embedTCFStub,N=void 0===S||S,F=function(){var e=void 0,n=function(){var e=void 0;return u.app&&u.app.apiKey&&(e=u.app.apiKey),t||e}(),r=!1!==d;window.didomiConfig=u||{},window.didomiConfig.sdkPath=R,window.gdprAppliesGlobally=r,e=c?"target_type=notice&target="+c:"target="+document.location.hostname,N&&(2===o?(!function(e,n,t,r,i){function o(e,t,r,o){if("function"===typeof r){window[n]||(window[n]=[]);var s=!1;i&&(s=i(e,t,r)),s||window[n].push({command:e,parameter:t,callback:r,version:o})}}function s(n){if(window[e]&&!0===window[e].stub&&n.data){var i,o="string"===typeof n.data;try{i=o?JSON.parse(n.data):n.data}catch(s){return}if(i[t]){var c=i[t];window[e](c.command,c.parameter,(function(e,t){var i={};i[r]={returnValue:e,success:t,callId:c.callId},n.source.postMessage(o?JSON.stringify(i):i,"*")}),c.version)}}}o.stub=!0,"function"!==typeof window[e]&&(window[e]=o,window.addEventListener?window.addEventListener("message",s,!1):window.attachEvent("onmessage",s))}("__tcfapi","__tcfapiBuffer","__tcfapiCall","__tcfapiReturn"),function e(n){if(!window.frames[n])if(document.body&&document.body.firstChild){var t=document.body,r=document.createElement("iframe");r.style.display="none",r.name=n,r.title=n,t.insertBefore(r,t.firstChild)}else setTimeout((function(){e(n)}),5)}("__tcfapiLocator")):function(){function e(e,n,t){"function"===typeof t&&(window.__cmpBuffer||(window.__cmpBuffer=[]),"ping"===e?t({gdprAppliesGlobally:window.gdprAppliesGlobally,cmpLoaded:!1},!0):window.__cmpBuffer.push({command:e,parameter:n,callback:t}))}function n(e){if(window.__cmp&&!0===window.__cmp.stub&&e.data){var t,r="string"===typeof e.data;try{t=r?JSON.parse(e.data):e.data}catch(n){return}if(t.__cmpCall){var i=t.__cmpCall;window.__cmp(i.command,i.parameter,(function(n,t){var o={__cmpReturn:{returnValue:n,success:t,callId:i.callId}};e.source.postMessage(r?JSON.stringify(o):o,"*")}))}}}e.stub=!0,"function"!==typeof window.__cmp&&(window.__cmp=e,window.addEventListener?window.addEventListener("message",n,!1):window.attachEvent("onmessage",n)),function e(){if(!window.frames.__cmpLocator)if(document.body&&document.body.firstChild){var n=document.body,t=document.createElement("iframe");t.style.display="none",t.name="__cmpLocator",t.title="cmpLocator",n.insertBefore(t,n.firstChild)}else setTimeout(e,5)}()}());var i="spcloader";if(document.getElementById(i))return null;var s=document.createElement("script");s.id=i,s.type="text/javascript",s.async=!0,s.src=R+n+"/loader.js?"+e,s.charset="utf-8";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(s,a)};return r.useEffect((function(){f&&(window.didomiOnReady=window.didomiOnReady||[],window.didomiOnReady.push(f)),window.didomiEventListeners=window.didomiEventListeners||[],p&&window.didomiEventListeners.push({event:"consent.changed",listener:function(e){p(e.consentToken)}}),v&&window.didomiEventListeners.push({event:"notice.shown",listener:function(){return v()}}),m&&window.didomiEventListeners.push({event:"notice.hidden",listener:function(){return m()}}),w&&window.didomiEventListeners.push({event:"notice.backdropclick",listener:function(){return w()}}),h&&window.didomiEventListeners.push({event:"notice.clickagree",listener:function(){return h()}}),g&&window.didomiEventListeners.push({event:"notice.clickmoreinfo",listener:function(){return g()}}),b&&window.didomiEventListeners.push({event:"preferences.clickagreetoall",listener:function(){return b()}}),y&&window.didomiEventListeners.push({event:"preferences.clickdisagreetoall",listener:function(){return y()}}),E&&window.didomiEventListeners.push({event:"preferences.clickpurposeagree",listener:function(){return E()}}),C&&window.didomiEventListeners.push({event:"preferences.clickpurposedisagree",listener:function(){return C()}}),k&&window.didomiEventListeners.push({event:"preferences.clickviewvendors",listener:function(){return k()}}),_&&window.didomiEventListeners.push({event:"preferences.clicksavechoices",listener:function(){return _()}}),T&&window.didomiEventListeners.push({event:"preferences.clickvendoragree",listener:function(){return T()}}),P&&window.didomiEventListeners.push({event:"preferences.clickvendordisagree",listener:function(){return P()}}),L&&window.didomiEventListeners.push({event:"preferences.clickvendorsavechoices",listener:function(){return L()}}),F()}),[]),null};s.propTypes={apiKey:o().string,iabVersion:o().number,noticeId:o().string,config:o().object,gdprAppliesGlobally:o().bool,onReady:o().func,onConsentChanged:o().func,onNoticeShown:o().func,onNoticeHidden:o().func,onNoticeBackdropclick:o().func,onNoticeClickAgree:o().func,onNoticeClickMoreInfo:o().func,onPreferencesClickAgreeToAll:o().func,onPreferencesClickDisagreeToAll:o().func,onPreferencesClickPurposeAgree:o().func,onPreferencesClickPurposeDisagree:o().func,onPreferencesClickViewVendors:o().func,onPreferencesClickSaveChoices:o().func,onPreferencesClickVendorAgree:o().func,onPreferencesClickVendorDisagree:o().func,onPreferencesClickVendorSaveChoices:o().func,sdkPath:o().string,embedTCFStub:o().bool}},68262:function(e,n,t){"use strict";var r=t(23586);function i(){}function o(){}o.resetWarningCache=i,e.exports=function(){function e(e,n,t,i,o,s){if(s!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function n(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:o,resetWarningCache:i};return t.PropTypes=t,t}},13980:function(e,n,t){e.exports=t(68262)()},23586:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},49442:function(e,n,t){"use strict";t.d(n,{u:function(){return A}});var r=t(2784),i=t(58314),o=t(55559),s=t(81061);var c=t(88064),a=t(61742),u=t(76460),l=t(33401),d=t(6173),f=t(3703);function p(e,...n){e&&n.length>0&&e.classList.add(...n)}function v(e,...n){e&&n.length>0&&e.classList.remove(...n)}function m(e,n,t,r){let i=t?"enter":"leave",o=(0,d.k)(),s=void 0!==r?function(e){let n={called:!1};return(...t)=>{if(!n.called)return n.called=!0,e(...t)}}(r):()=>{};"enter"===i&&(e.removeAttribute("hidden"),e.style.display="");let c=(0,f.E)(i,{enter:()=>n.enter,leave:()=>n.leave}),a=(0,f.E)(i,{enter:()=>n.enterTo,leave:()=>n.leaveTo}),u=(0,f.E)(i,{enter:()=>n.enterFrom,leave:()=>n.leaveFrom});return v(e,...n.base,...n.enter,...n.enterTo,...n.enterFrom,...n.leave,...n.leaveFrom,...n.leaveTo,...n.entered),p(e,...n.base,...c,...u),o.nextFrame((()=>{v(e,...n.base,...c,...u),p(e,...n.base,...c,...a),function(e,n){let t=(0,d.k)();if(!e)return t.dispose;let{transitionDuration:r,transitionDelay:i}=getComputedStyle(e),[o,s]=[r,i].map((e=>{let[n=0]=e.split(",").filter(Boolean).map((e=>e.includes("ms")?parseFloat(e):1e3*parseFloat(e))).sort(((e,n)=>n-e));return n})),c=o+s;if(0!==c){t.group((t=>{t.setTimeout((()=>{n(),t.dispose()}),c),t.addEventListener(e,"transitionrun",(e=>{e.target===e.currentTarget&&t.dispose()}))}));let r=t.addEventListener(e,"transitionend",(e=>{e.target===e.currentTarget&&(n(),r())}))}else n();t.add((()=>n())),t.dispose}(e,(()=>(v(e,...n.base,...c),p(e,...n.base,...n.entered),s())))})),o.dispose}var w=t(47215),h=t(94020),g=t(90544);function b(e=""){return e.split(/\s+/).filter((e=>e.length>1))}let y=(0,r.createContext)(null);y.displayName="TransitionContext";var E,C=((E=C||{}).Visible="visible",E.Hidden="hidden",E);let k=(0,r.createContext)(null);function _(e){return"children"in e?_(e.children):e.current.filter((({el:e})=>null!==e.current)).filter((({state:e})=>"visible"===e)).length>0}function T(e,n){let t=(0,a.E)(e),c=(0,r.useRef)([]),u=(0,s.t)(),l=(0,i.G)(),d=(0,o.z)(((e,n=g.l4.Hidden)=>{let r=c.current.findIndex((({el:n})=>n===e));-1!==r&&((0,f.E)(n,{[g.l4.Unmount](){c.current.splice(r,1)},[g.l4.Hidden](){c.current[r].state="hidden"}}),l.microTask((()=>{var e;!_(c)&&u.current&&(null==(e=t.current)||e.call(t))})))})),p=(0,o.z)((e=>{let n=c.current.find((({el:n})=>n===e));return n?"visible"!==n.state&&(n.state="visible"):c.current.push({el:e,state:"visible"}),()=>d(e,g.l4.Unmount)})),v=(0,r.useRef)([]),m=(0,r.useRef)(Promise.resolve()),w=(0,r.useRef)({enter:[],leave:[],idle:[]}),h=(0,o.z)(((e,t,r)=>{v.current.splice(0),n&&(n.chains.current[t]=n.chains.current[t].filter((([n])=>n!==e))),null==n||n.chains.current[t].push([e,new Promise((e=>{v.current.push(e)}))]),null==n||n.chains.current[t].push([e,new Promise((e=>{Promise.all(w.current[t].map((([e,n])=>n))).then((()=>e()))}))]),"enter"===t?m.current=m.current.then((()=>null==n?void 0:n.wait.current)).then((()=>r(t))):r(t)})),b=(0,o.z)(((e,n,t)=>{Promise.all(w.current[n].splice(0).map((([e,n])=>n))).then((()=>{var e;null==(e=v.current.shift())||e()})).then((()=>t(n)))}));return(0,r.useMemo)((()=>({children:c,register:p,unregister:d,onStart:h,onStop:b,wait:m,chains:w})),[p,d,c,h,b,w,m])}function P(){}k.displayName="NestingContext";let L=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function O(e){var n;let t={};for(let r of L)t[r]=null!=(n=e[r])?n:P;return t}let R=g.AN.RenderStrategy;let S=(0,g.yV)((function(e,n){let{show:t,appear:i=!1,unmount:s=!0,...a}=e,d=(0,r.useRef)(null),f=(0,l.T)(d,n);(0,u.H)();let p=(0,w.oJ)();if(void 0===t&&null!==p&&(t=(p&w.ZM.Open)===w.ZM.Open),![!0,!1].includes(t))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[v,m]=(0,r.useState)(t?"visible":"hidden"),h=T((()=>{m("hidden")})),[b,E]=(0,r.useState)(!0),C=(0,r.useRef)([t]);(0,c.e)((()=>{!1!==b&&C.current[C.current.length-1]!==t&&(C.current.push(t),E(!1))}),[C,t]);let P=(0,r.useMemo)((()=>({show:t,appear:i,initial:b})),[t,i,b]);(0,r.useEffect)((()=>{if(t)m("visible");else if(_(h)){let e=d.current;if(!e)return;let n=e.getBoundingClientRect();0===n.x&&0===n.y&&0===n.width&&0===n.height&&m("hidden")}else m("hidden")}),[t,h]);let L={unmount:s},O=(0,o.z)((()=>{var n;b&&E(!1),null==(n=e.beforeEnter)||n.call(e)})),S=(0,o.z)((()=>{var n;b&&E(!1),null==(n=e.beforeLeave)||n.call(e)}));return r.createElement(k.Provider,{value:h},r.createElement(y.Provider,{value:P},(0,g.sY)({ourProps:{...L,as:r.Fragment,children:r.createElement(N,{ref:f,...L,...a,beforeEnter:O,beforeLeave:S})},theirProps:{},defaultTag:r.Fragment,features:R,visible:"visible"===v,name:"Transition"})))})),N=(0,g.yV)((function(e,n){var t,p;let{beforeEnter:v,afterEnter:E,beforeLeave:C,afterLeave:P,enter:L,enterFrom:S,enterTo:N,entered:F,leave:A,leaveFrom:V,leaveTo:x,...B}=e,M=(0,r.useRef)(null),Z=(0,l.T)(M,n),I=null==(t=B.unmount)||t?g.l4.Unmount:g.l4.Hidden,{show:j,appear:D,initial:H}=function(){let e=(0,r.useContext)(y);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),[z,G]=(0,r.useState)(j?"visible":"hidden"),J=function(){let e=(0,r.useContext)(k);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),{register:U,unregister:K}=J;(0,r.useEffect)((()=>U(M)),[U,M]),(0,r.useEffect)((()=>{if(I===g.l4.Hidden&&M.current)return j&&"visible"!==z?void G("visible"):(0,f.E)(z,{hidden:()=>K(M),visible:()=>U(M)})}),[z,M,U,K,j,I]);let W=(0,a.E)({base:b(B.className),enter:b(L),enterFrom:b(S),enterTo:b(N),entered:b(F),leave:b(A),leaveFrom:b(V),leaveTo:b(x)}),Y=function(e){let n=(0,r.useRef)(O(e));return(0,r.useEffect)((()=>{n.current=O(e)}),[e]),n}({beforeEnter:v,afterEnter:E,beforeLeave:C,afterLeave:P}),q=(0,u.H)();(0,r.useEffect)((()=>{if(q&&"visible"===z&&null===M.current)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}),[M,z,q]);let Q=D&&j&&H,X=!q||H&&!D?"idle":j?"enter":"leave",$=function(e=0){let[n,t]=(0,r.useState)(e),i=(0,s.t)(),o=(0,r.useCallback)((e=>{i.current&&t((n=>n|e))}),[n,i]),c=(0,r.useCallback)((e=>Boolean(n&e)),[n]),a=(0,r.useCallback)((e=>{i.current&&t((n=>n&~e))}),[t,i]),u=(0,r.useCallback)((e=>{i.current&&t((n=>n^e))}),[t]);return{flags:n,addFlag:o,hasFlag:c,removeFlag:a,toggleFlag:u}}(0),ee=(0,o.z)((e=>(0,f.E)(e,{enter:()=>{$.addFlag(w.ZM.Opening),Y.current.beforeEnter()},leave:()=>{$.addFlag(w.ZM.Closing),Y.current.beforeLeave()},idle:()=>{}}))),ne=(0,o.z)((e=>(0,f.E)(e,{enter:()=>{$.removeFlag(w.ZM.Opening),Y.current.afterEnter()},leave:()=>{$.removeFlag(w.ZM.Closing),Y.current.afterLeave()},idle:()=>{}}))),te=T((()=>{G("hidden"),K(M)}),J),re=(0,r.useRef)(!1);!function({immediate:e,container:n,direction:t,classes:r,onStart:o,onStop:u}){let l=(0,s.t)(),f=(0,i.G)(),p=(0,a.E)(t);(0,c.e)((()=>{e&&(p.current="enter")}),[e]),(0,c.e)((()=>{let e=(0,d.k)();f.add(e.dispose);let t=n.current;if(t&&"idle"!==p.current&&l.current)return e.dispose(),o.current(p.current),e.add(m(t,r.current,"enter"===p.current,(()=>{e.dispose(),u.current(p.current)}))),e.dispose}),[t])}({immediate:Q,container:M,classes:W,direction:X,onStart:(0,a.E)((e=>{re.current=!0,te.onStart(M,e,ee)})),onStop:(0,a.E)((e=>{re.current=!1,te.onStop(M,e,ne),"leave"===e&&!_(te)&&(G("hidden"),K(M))}))});let ie=B,oe={ref:Z};return Q?ie={...ie,className:(0,h.A)(B.className,...W.current.enter,...W.current.enterFrom)}:re.current&&(ie.className=(0,h.A)(B.className,null==(p=M.current)?void 0:p.className),""===ie.className&&delete ie.className),r.createElement(k.Provider,{value:te},r.createElement(w.up,{value:(0,f.E)(z,{visible:w.ZM.Open,hidden:w.ZM.Closed})|$.flags},(0,g.sY)({ourProps:oe,theirProps:ie,defaultTag:"div",features:R,visible:"visible"===z,name:"Transition.Child"})))})),F=(0,g.yV)((function(e,n){let t=null!==(0,r.useContext)(y),i=null!==(0,w.oJ)();return r.createElement(r.Fragment,null,!t&&i?r.createElement(S,{ref:n,...e}):r.createElement(N,{ref:n,...e}))})),A=Object.assign(S,{Child:F,Root:S})},96412:function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}t.d(n,{Z:function(){return r}})},13089:function(e,n,t){"use strict";function r(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,n,t){return n&&r(e.prototype,n),t&&r(e,t),e}t.d(n,{Z:function(){return i}})},48200:function(e,n,t){"use strict";function r(e){return r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(e)}t.d(n,{Z:function(){return r}})},94214:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(34280);function i(e,n){if(n&&("object"===r(n)||"function"===typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}},3907:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var r=t(48200),i=t(303);function o(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function s(e,n,t){return s=o()?Reflect.construct:function(e,n,t){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(e,r));return t&&(0,i.Z)(o,t.prototype),o},s.apply(null,arguments)}function c(e){var n="function"===typeof Map?new Map:void 0;return c=function(e){if(null===e||(t=e,-1===Function.toString.call(t).indexOf("[native code]")))return e;var t;if("function"!==typeof e)throw new TypeError("Super expression must either be null or a function");if("undefined"!==typeof n){if(n.has(e))return n.get(e);n.set(e,o)}function o(){return s(e,arguments,(0,r.Z)(this).constructor)}return o.prototype=Object.create(e.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),(0,i.Z)(o,e)},c(e)}}}]);