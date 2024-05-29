"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4042,5053],{64042:function(e,t,r){r.r(t),r.d(t,{Catch401:function(){return g},QueryProviderWith401Catch:function(){return b}});var a=r(8529),n=r(60131),o=r(95053),i=r(33419),s=r(5632),l=r(2784),c=r(62202),d=r(82066),u=r(53615),p=r(8162),f=r(52322),m=new d.QueryCache({}),h=new d.MutationCache({}),g=function(){var e=(0,i.KO)(u.authenticationAtom),t=(0,a.Z)(e,1)[0].isAuthenticated,r=(0,p.v)().logout,d=(0,s.useRouter)(),g=(0,l.useCallback)((function(){(t?r():Promise.resolve()).then((function(){d.push("/"),c.ZP.custom((function(e){return(0,f.jsx)(o.ToastAuth,{title:"Connexion requise",description:"Bonjour, il semblerait que vous n'avez pas les droits pour acc\xe9der \xe0 cette page. Nous vous redirigeons vers ver la page d'accueil",type:n.E.ALERT,onClick:function(){return c.ZP.remove(e.id)}})}))}))}),[t,d,r]);return(0,l.useEffect)((function(){return m.subscribe((function(e){var t,r,a=null===e||void 0===e?void 0:e.action;"error"===(null===a||void 0===a?void 0:a.type)&&null!==a&&void 0!==a&&null!==(t=a.error)&&void 0!==t&&null!==(r=t.message)&&void 0!==r&&r.includes("code 401")&&g()}))}),[t,g]),(0,l.useEffect)((function(){return h.subscribe((function(e){var t,r,a=null===e||void 0===e?void 0:e.state;"error"===(null===a||void 0===a?void 0:a.status)&&null!==a&&void 0!==a&&null!==(t=a.error)&&void 0!==t&&null!==(r=t.message)&&void 0!==r&&r.includes("code 401")&&g()}))}),[t,g]),null},b=function(e){var t=e.children,r=l.useState((function(){return new d.QueryClient({defaultOptions:{queries:{refetchOnWindowFocus:!1,cacheTime:1/0,staleTime:1/0,refetchOnMount:!1,refetchOnReconnect:!1}},queryCache:m,mutationCache:h})})),n=(0,a.Z)(r,1)[0];return(0,f.jsx)(d.QueryClientProvider,{client:n,children:t})}},97758:function(e,t,r){r.d(t,{E:function(){return a},Z:function(){return f}});var a,n=r(95235),o=r(22280),i=r.n(o),s=r(2784),l=r(91394),c=r(33655),d=r(52322);!function(e){e.INFO="INFO",e.SUCCESS="SUCCESS",e.ALERT="ALERT",e.ERROR="ERROR"}(a||(a={}));var u=function(e,t,r,n,o){return i()("\n  rounded\n  border\n  p-10\n  md:p-16\n  ".concat(e===a.INFO&&"border-info bg-background-light dark:bg-background-dark","\n  ").concat(e===a.ALERT&&"border-orange bg-background-light dark:bg-background-dark","\n  ").concat(e===a.ERROR&&"border-error-light bg-background-light dark:border-error-dark dark:bg-background-dark","\n  ").concat(e===a.SUCCESS&&"border-success bg-background-light dark:bg-background-dark","\n  ").concat((0,l.i1)(t,r,n,o),"\n"))},p=function(e){return i()("\n    rounded-full\n    p-4\n    ".concat(e===a.INFO&&"bg-info","\n    ").concat(e===a.ERROR&&"bg-error-light dark:bg-error-dark","\n    ").concat(e===a.SUCCESS&&"bg-success","\n  "))},f=function(e){var t,r=e.type,o=void 0===r?a.INFO:r,l=e.children,f=e.toaster,m=void 0!==f&&f,h=e.marginBottom,g=e.marginLeft,b=e.marginRight,y=e.marginTop,v=(0,s.useId)(),x="error-summary-title-".concat(v),w=(t={},(0,n.Z)(t,a.INFO,"ExclamationMarkIcon"),(0,n.Z)(t,a.ERROR,"XIcon"),(0,n.Z)(t,a.SUCCESS,"CheckIcon"),t)[o]||"InformationCircleIcon";return(0,d.jsx)("div",{"aria-labelledby":x,role:"alert",tabIndex:-1,className:"".concat(u(o,y,b,h,g)," ").concat(m&&"lg:min-w-[500px]"),children:(0,d.jsxs)("div",{className:"flex items-center space-x-16",children:[(0,d.jsx)("div",{className:"shrink-0",children:(0,d.jsx)("div",{className:p(o),children:(0,d.jsx)("div",{className:i()("\n    h-24\n    w-24\n    rounded-full\n    border-2\n    border-white\n    p-4\n  "),children:(0,d.jsx)(c.JO,{ariaLabel:"Icone pour le r\xe9sum\xe9 d'erreur",iconName:w,className:"h-12 w-12 filter-white","aria-hidden":"true"})})})}),(0,d.jsx)("div",{className:"grow",children:(0,d.jsx)("div",{className:"w-full text-14 leading-tight text-content-800 font-normal dark:text-content-200",children:(0,d.jsx)("div",{className:"list-inside list-disc space-y-2",children:l})})})]})})}},60131:function(e,t,r){r.d(t,{E:function(){return a.E},Z:function(){return a.Z}});var a=r(97758)},95053:function(e,t,r){r.r(t),r.d(t,{Toast:function(){return o},ToastAuth:function(){return l}});r(2784);var a=r(62202),n=r(52322),o=function(){return(0,n.jsx)(a.x7,{containerStyle:{top:110},toastOptions:{duration:3e3}})},i=r(97758),s=r(33655),l=function(e){var t=e.type,r=e.title,a=e.description,o=e.onClick;return(0,n.jsx)(i.Z,{type:t,toaster:!0,children:(0,n.jsxs)("div",{className:"relative flex flex-col",children:[(0,n.jsx)("p",{className:"mb-2 font-bold",children:r}),(0,n.jsx)("p",{children:a}),(0,n.jsxs)("button",{onClick:o,className:"absolute top-0 right-0",children:[(0,n.jsx)("span",{className:"sr-only",children:"Fermer l'alerte"}),(0,n.jsx)(s.JO,{iconName:"XIcon",className:"h-20 w-20 dark:filter-white"})]})]})})}},62202:function(e,t,r){r.d(t,{x7:function(){return re},ZP:function(){return ae}});var a=r(2784);let n={data:""},o=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||n,i=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,s=/\/\*[^]*?\*\/|  +/g,l=/\n+/g,c=(e,t)=>{let r="",a="",n="";for(let o in e){let i=e[o];"@"==o[0]?"i"==o[1]?r=o+" "+i+";":a+="f"==o[1]?c(i,o):o+"{"+c(i,"k"==o[1]?"":t)+"}":"object"==typeof i?a+=c(i,t?t.replace(/([^,])+/g,(e=>o.replace(/(^:.*)|([^,])+/g,(t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)))):o):null!=i&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),n+=c.p?c.p(o,i):o+":"+i+";")}return r+(t&&n?t+"{"+n+"}":n)+a},d={},u=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+u(e[r]);return t}return e},p=(e,t,r,a,n)=>{let o=u(e),p=d[o]||(d[o]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(o));if(!d[p]){let t=o!==e?e:(e=>{let t,r,a=[{}];for(;t=i.exec(e.replace(s,""));)t[4]?a.shift():t[3]?(r=t[3].replace(l," ").trim(),a.unshift(a[0][r]=a[0][r]||{})):a[0][t[1]]=t[2].replace(l," ").trim();return a[0]})(e);d[p]=c(n?{["@keyframes "+p]:t}:t,r?"":"."+p)}let f=r&&d.g?d.g:null;return r&&(d.g=d[p]),((e,t,r,a)=>{a?t.data=t.data.replace(a,e):-1===t.data.indexOf(e)&&(t.data=r?e+t.data:t.data+e)})(d[p],t,a,f),p},f=(e,t,r)=>e.reduce(((e,a,n)=>{let o=t[n];if(o&&o.call){let e=o(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;o=t?"."+t:e&&"object"==typeof e?e.props?"":c(e,""):!1===e?"":e}return e+a+(null==o?"":o)}),"");function m(e){let t=this||{},r=e.call?e(t.p):e;return p(r.unshift?r.raw?f(r,[].slice.call(arguments,1),t.p):r.reduce(((e,r)=>Object.assign(e,r&&r.call?r(t.p):r)),{}):r,o(t.target),t.g,t.o,t.k)}m.bind({g:1});let h,g,b,y=m.bind({k:1});function v(e,t){let r=this||{};return function(){let a=arguments;function n(o,i){let s=Object.assign({},o),l=s.className||n.className;r.p=Object.assign({theme:g&&g()},s),r.o=/ *go\d+/.test(l),s.className=m.apply(r,a)+(l?" "+l:""),t&&(s.ref=i);let c=e;return e[0]&&(c=s.as||e,delete s.as),b&&c[0]&&b(s),h(c,s)}return t?t(n):n}}var x=(e,t)=>(e=>"function"==typeof e)(e)?e(t):e,w=(()=>{let e=0;return()=>(++e).toString()})(),k=(()=>{let e;return()=>{if(void 0===e&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),E=new Map,C=e=>{if(E.has(e))return;let t=setTimeout((()=>{E.delete(e),I({type:4,toastId:e})}),1e3);E.set(e,t)},N=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&(e=>{let t=E.get(e);t&&clearTimeout(t)})(t.toast.id),{...e,toasts:e.toasts.map((e=>e.id===t.toast.id?{...e,...t.toast}:e))};case 2:let{toast:r}=t;return e.toasts.find((e=>e.id===r.id))?N(e,{type:1,toast:r}):N(e,{type:0,toast:r});case 3:let{toastId:a}=t;return a?C(a):e.toasts.forEach((e=>{C(e.id)})),{...e,toasts:e.toasts.map((e=>e.id===a||void 0===a?{...e,visible:!1}:e))};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter((e=>e.id!==t.toastId))};case 5:return{...e,pausedAt:t.time};case 6:let n=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map((e=>({...e,pauseDuration:e.pauseDuration+n})))}}},j=[],O={toasts:[],pausedAt:void 0},I=e=>{O=N(O,e),j.forEach((e=>{e(O)}))},R={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},S=e=>(t,r)=>{let a=((e,t="blank",r)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||w()}))(t,e,r);return I({type:2,toast:a}),a.id},$=(e,t)=>S("blank")(e,t);$.error=S("error"),$.success=S("success"),$.loading=S("loading"),$.custom=S("custom"),$.dismiss=e=>{I({type:3,toastId:e})},$.remove=e=>I({type:4,toastId:e}),$.promise=(e,t,r)=>{let a=$.loading(t.loading,{...r,...null==r?void 0:r.loading});return e.then((e=>($.success(x(t.success,e),{id:a,...r,...null==r?void 0:r.success}),e))).catch((e=>{$.error(x(t.error,e),{id:a,...r,...null==r?void 0:r.error})})),e};var A=(e,t)=>{I({type:1,toast:{id:e,height:t}})},T=()=>{I({type:5,time:Date.now()})},P=e=>{let{toasts:t,pausedAt:r}=((e={})=>{let[t,r]=(0,a.useState)(O);(0,a.useEffect)((()=>(j.push(r),()=>{let e=j.indexOf(r);e>-1&&j.splice(e,1)})),[t]);let n=t.toasts.map((t=>{var r,a;return{...e,...e[t.type],...t,duration:t.duration||(null==(r=e[t.type])?void 0:r.duration)||(null==e?void 0:e.duration)||R[t.type],style:{...e.style,...null==(a=e[t.type])?void 0:a.style,...t.style}}}));return{...t,toasts:n}})(e);(0,a.useEffect)((()=>{if(r)return;let e=Date.now(),a=t.map((t=>{if(t.duration===1/0)return;let r=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(!(r<0))return setTimeout((()=>$.dismiss(t.id)),r);t.visible&&$.dismiss(t.id)}));return()=>{a.forEach((e=>e&&clearTimeout(e)))}}),[t,r]);let n=(0,a.useCallback)((()=>{r&&I({type:6,time:Date.now()})}),[r]),o=(0,a.useCallback)(((e,r)=>{let{reverseOrder:a=!1,gutter:n=8,defaultPosition:o}=r||{},i=t.filter((t=>(t.position||o)===(e.position||o)&&t.height)),s=i.findIndex((t=>t.id===e.id)),l=i.filter(((e,t)=>t<s&&e.visible)).length;return i.filter((e=>e.visible)).slice(...a?[l+1]:[0,l]).reduce(((e,t)=>e+(t.height||0)+n),0)}),[t]);return{toasts:t,handlers:{updateHeight:A,startPause:T,endPause:n,calculateOffset:o}}},F=y`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,Z=y`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,z=y`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,L=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${F} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Z} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${z} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,D=y`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,M=v("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${D} 1s linear infinite;
`,U=y`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,_=y`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,q=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${U} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${_} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,H=v("div")`
  position: absolute;
`,Q=v("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,B=y`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,J=v("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${B} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,W=({toast:e})=>{let{icon:t,type:r,iconTheme:n}=e;return void 0!==t?"string"==typeof t?a.createElement(J,null,t):t:"blank"===r?null:a.createElement(Q,null,a.createElement(M,{...n}),"loading"!==r&&a.createElement(H,null,"error"===r?a.createElement(L,{...n}):a.createElement(q,{...n})))},X=e=>`\n0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n`,K=e=>`\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}\n`,Y=v("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,G=v("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,V=a.memo((({toast:e,position:t,style:r,children:n})=>{let o=e.height?((e,t)=>{let r=e.includes("top")?1:-1,[a,n]=k()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[X(r),K(r)];return{animation:t?`${y(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${y(n)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(e.position||t||"top-center",e.visible):{opacity:0},i=a.createElement(W,{toast:e}),s=a.createElement(G,{...e.ariaProps},x(e.message,e));return a.createElement(Y,{className:e.className,style:{...o,...r,...e.style}},"function"==typeof n?n({icon:i,message:s}):a.createElement(a.Fragment,null,i,s))}));!function(e,t,r,a){c.p=t,h=e,g=r,b=a}(a.createElement);var ee=({id:e,className:t,style:r,onHeightUpdate:n,children:o})=>{let i=a.useCallback((t=>{if(t){let r=()=>{let r=t.getBoundingClientRect().height;n(e,r)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}}),[e,n]);return a.createElement("div",{ref:i,className:t,style:r},o)},te=m`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,re=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:n,children:o,containerStyle:i,containerClassName:s})=>{let{toasts:l,handlers:c}=P(r);return a.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...i},className:s,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map((r=>{let i=r.position||t,s=((e,t)=>{let r=e.includes("top"),a=r?{top:0}:{bottom:0},n=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:k()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...a,...n}})(i,c.calculateOffset(r,{reverseOrder:e,gutter:n,defaultPosition:t}));return a.createElement(ee,{id:r.id,key:r.id,onHeightUpdate:c.updateHeight,className:r.visible?te:"",style:s},"custom"===r.type?x(r.message,r):o?o(r):a.createElement(V,{toast:r,position:i}))})))},ae=$}}]);