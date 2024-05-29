"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1441],{21485:function(n,e,t){t.r(e),t.d(e,{ConsentRoot:function(){return E},useConsentRoot:function(){return L}});var r=t(8529),o=t(95235),c=t(73952),a=t(35741),s=t(33419),i=t(68715),u=t(25237),l=t.n(u),d=t(2784),f=t(68707),p=t(9826),g=t(52322),b=function(){return(0,g.jsx)(p.Z,{src:"/js/elastic/elastic-apm-rum.js",strategy:"lazyOnload",onLoad:function(){elasticApm.init({serviceName:"oaos-website-react",environment:"p1",serverUrl:"https://96a7143aea0149a08fd7582b73c7be9d.apm.europe-west1.gcp.cloud.es.io:443",serverUrlPrefix:"/intake/v2/rum/events",serviceVersion:"1.0.0",active:!0,instrument:!0,disableInstrumentations:[],logLevel:"warn",apiVersion:2,breakdownMetrics:!1,flushInterval:500,distributedTracing:!0,distributedTracingOrigins:[],propagateTracestate:!1,eventsLimit:80,transactionSampleRate:.1,centralConfig:!0,ignoreTransactions:[],monitorLongtasks:!0,apmRequest:null,sendCredentials:!1})}})},m=t(45847),v=t.n(m),y=function(){return(0,g.jsx)(v(),{id:"FbBusinessManagerScripts",dangerouslySetInnerHTML:{__html:"\n!function(f,b,e,v,n,t,s)\n{if(f.fbq)return;n=f.fbq=function(){n.callMethod?\nn.callMethod.apply(n,arguments):n.queue.push(arguments)};\nif(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';\nn.queue=[];t=b.createElement(e);t.async=!0;\nt.src=v;s=b.getElementsByTagName(e)[0];\ns.parentNode.insertBefore(t,s)}(window, document,'script',\n'https://connect.facebook.net/en_US/fbevents.js');\nfbq('init', '774289892684822');\nfbq('track', 'PageView');\n"}})},w="G-XQ6LWJBT9C",h=("\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n  gtag('config', '".concat(w,"' ").concat("",");\n  // Google ads\n  gtag('config', 'AW-752027090');\n\n"),function(){return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(p.Z,{src:"https://www.googletagmanager.com/gtag/js?id=".concat(w),strategy:"lazyOnload"})})}),j=t(48975),O=t(81951);function x(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function P(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?x(Object(t),!0).forEach((function(e){(0,o.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):x(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var D=l()((function(){return Promise.all([t.e(267),t.e(5897)]).then(t.bind(t,267)).then((function(n){return n.SmartAdserverRoot}))}),{ssr:!1,loadableGenerated:{webpack:function(){return[267]}}});var C=(0,i.w0)({},(function(n,e){if("setWebsiteConsent"===e.type)return P(P({},n),e.payload);throw new Error("Unhandled action type: ".concat(e.type))})),k=(0,s.cn)(!1),N=function(n){if(void 0===(null===n||void 0===n?void 0:n.consents))return!1;var e=Object.values(n.consents);if(!e||!e.length)return!1;var t=!1,r=window.Didomi.getPurposes();return(r=Object.entries(r)).forEach((function(n){window.Didomi.getUserConsentStatusForPurpose(n[0])&&(t=!0)})),t},T=function(){var n=window.Didomi.getUserConsentToken(),e=window.Didomi.getUserStatus();return P(P({},n),{},{consent_string:e.consent_string,consent:N(n)})},E=function(){var n=(0,s.KO)(C),e=(0,r.Z)(n,2),t=e[0],o=e[1],i=(0,s.KO)(k),u=(0,r.Z)(i,2)[1],l=(0,O.useAppRoot)(),p=S(l.isWebview,t);return(0,d.useEffect)((function(){l.isWebview()&&o({type:"setWebsiteConsent",payload:{consent:l.getConsent(),consent_string:l.getConsent()}})}),[l.getConsent()]),(0,d.useEffect)((function(){(0,a.analyticsSetConsent)({hasFullConsent:p,snowplow:!0})}),[p]),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(c.v,{apiKey:"f7bf9c90-0b89-4d05-8ba9-5bad72f1c4d7",iabVersion:2,noticeId:"DpBY6DT4",gdprAppliesGlobally:!0,sdkPath:"https://sdk.privacy-center.org/",embedTCFStub:!0,onReady:function(n){if(!(0,j.bG)()){u(!0);var e=T();o({type:"setWebsiteConsent",payload:P({},e)}),window.getEbuConsent=function(){return e.consent}}},onConsentChanged:function(n){var e=T();o({type:"setWebsiteConsent",payload:P({},e)}),window.getEbuConsent=function(){return e.consent}}}),(0,g.jsx)(b,{}),t.consent&&!l.isWebview()?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(f.T,{}),(0,g.jsx)(h,{}),(0,g.jsx)(y,{})]}):null,t.consent&&l.isWebview()?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(h,{}),(0,g.jsx)(y,{})]}):null,t.consents&&t.consents.length>0?(0,g.jsx)(D,{}):null]})};function S(n,e){return!(!n()||0===Object.keys(e).length)||N(e)}function L(){var n=(0,s.KO)(C),e=(0,r.Z)(n,1)[0],t=(0,s.KO)(k),o=(0,r.Z)(t,1)[0],c=(0,O.useAppRoot)();return{websiteHasFullConsent:function(){return S(c.isWebview,e)},consentReady:function(){return o},consentString:(null===e||void 0===e?void 0:e.consent_string)||"",showBanner:function(){"undefined"!==typeof window.Didomi&&window.__tcfapi&&window.Didomi.preferences.show()}}}},27247:function(n,e,t){t.d(e,{X:function(){return d}});var r=t(95235),o=t(5632),c=t(55351),a=(t(2784),t(4459)),s=t(267),i=t(52322);function u(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function l(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?u(Object(t),!0).forEach((function(e){(0,r.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var d=function(n){var e,t=n.seo,r=n.smartAd,u=n.newsArticleJsonLd,d=n.articleJsonLd,f=n.chartbeat,p=(0,o.useRouter)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c.PB,l({},t)),d?(0,i.jsx)(c.dX,l({},d)):null," ",u?(0,i.jsx)(c.TE,l({},u)):null,(0,i.jsx)(s.SmartAdPageConfig,{config:{siteId:null===r||void 0===r?void 0:r.siteId,pageId:null===r||void 0===r?void 0:r.pageId,categoryList:(null===r||void 0===r?void 0:r.categoryList)||[]}}),(0,i.jsx)(a.x,{_sections:null===f||void 0===f?void 0:f.sections,_authors:null===f||void 0===f?void 0:f.authors}),(0,i.jsx)(s.OnePlusXPageConfig,{title:null===t||void 0===t?void 0:t.title,categories:null===r||void 0===r||null===(e=r.categoryList)||void 0===e?void 0:e.join(","),path:p.asPath})]})}},29193:function(n,e,t){t.d(e,{T3:function(){return W},W2:function(){return A},X2:function(){return Z},sh:function(){return r}});var r,o=t(95235),c=t(82269),a=t(22280),s=t.n(a),i=t(35741),u=t(2784),l=t(52322),d=["children","className","as","spacing","padding","wrapper"],f=["children","className","as","spacing","padding","maxWidth"],p=["children","className","as","spacing","padding","small","full","separator"];function g(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function b(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?g(Object(t),!0).forEach((function(e){(0,o.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}!function(n){n.DIV="div",n.SECTION="section",n.NAV="nav",n.LIST="ul",n.LIST_ELEMENT="li"}(r||(r={}));var m=s()("gap-y-6"),v=s()("sm:gap-y-8"),y=s()("md:gap-y-12"),w=s()("py-6"),h=s()("sm:py-8"),j=s()("md:py-12"),O=s()("mx-6"),x=s()("sm:mx-8"),P=s()("md:mx-12"),D=s()("py-6"),C=s()("sm:py-8"),k=s()("md:py-12"),N=s()("gap-y-6"),T=s()("sm:gap-y-8"),E=s()("md:gap-y-12"),S=s()("py-10 px-6"),L=s()("sm:p-8"),_=s()("md:p-12"),I=s()("flex w-full items-center border-y border-blue-100 py-16 dark:border-purple-500 md:py-32"),W=(0,u.forwardRef)((function(n,e){var t=n.children,o=n.className,a=n.as,u=void 0===a?r.DIV:a,f=n.spacing,p=void 0!==f&&f,g=n.padding,O=void 0!==g&&g,x=n.wrapper,P=void 0!==x&&x,D=(0,c.Z)(n,d),C=u,k=null===o||void 0===o?void 0:o.includes("bg-");return(0,l.jsx)(C,b(b(b({ref:e,className:s()("\n          flex\n          w-full\n          flex-col\n          items-center\n          ".concat(o,"\n          ").concat(O&&"".concat(w," ").concat(h," ").concat(j),"\n          ").concat(p&&"".concat(m," ").concat(v," ").concat(y),"\n          ").concat(P?"flex-wrap":"","\n          relative\n          max-w-[100vw]\n          ").concat(!k&&"bg-navy-blue-100 dark:bg-black","\n        "))},D),(0,i.getOnlyDataAttributeFromProps)(D)),{},{children:t}))})),Z=(0,u.forwardRef)((function(n,e){var t=n.children,o=n.className,a=void 0===o?"":o,u=n.as,d=void 0===u?r.DIV:u,p=n.spacing,g=void 0!==p&&p,m=n.padding,v=void 0!==m&&m,y=n.maxWidth,w=void 0===y||y,h=(0,c.Z)(n,f),j=d,N=a.includes("bg-");return(0,l.jsx)(j,b(b(b({ref:e,className:s()("\n          box-border\n          flex\n          w-full\n          flex-wrap\n          justify-center\n          ".concat(!N&&"bg-background-light dark:bg-background-dark","\n          ").concat(v&&"".concat(D," ").concat(C," ").concat(k),"\n          ").concat(g&&"".concat(O," ").concat(x," ").concat(P),"\n          ").concat(w&&"max-w-row","\n          ").concat(a,"\n        "))},h),(0,i.getOnlyDataAttributeFromProps)(h)),{},{children:t}))})),A=(0,u.forwardRef)((function(n,e){var t=n.children,o=n.className,a=n.as,u=void 0===a?r.DIV:a,d=n.spacing,f=void 0!==d&&d,g=n.padding,m=void 0!==g&&g,v=n.small,y=void 0!==v&&v,w=n.full,h=void 0!==w&&w,j=n.separator,O=void 0!==j&&j,x=(0,c.Z)(n,p),P=u;return(0,l.jsx)(P,b(b(b({ref:e,className:s()("\n          container\n          box-border\n          ".concat(y?"max-w-[720px]":h?"":"max-w-container","\n          ").concat(m&&"".concat(S," ").concat(L," ").concat(_),"\n          ").concat(f&&"".concat(N," ").concat(T," ").concat(E),"\n          ").concat(o,"\n        "))},x),(0,i.getOnlyDataAttributeFromProps)(x)),{},{children:O?(0,l.jsx)("div",{className:I,children:t}):t}))}))},81124:function(n,e,t){t.d(e,{T3:function(){return r.T3},W2:function(){return r.W2},X2:function(){return r.X2},sh:function(){return r.sh}});var r=t(29193)},55689:function(n,e,t){t.d(e,{n:function(){return u}});var r=t(22280),o=t.n(r),c=t(32270),a=t(59813),s=(t(2784),t(33655)),i=t(52322),u=function(n){var e=n.className,t=n.iconAriaLabel,r=void 0===t?"Temps de lecture":t,u=n.iconClass,l=n.iconName,d=void 0===l?"ClockIcon":l,f=n.seconds,p={hours:Math.floor(f/3600),minutes:Math.floor(f%3600/60),seconds:f%60},g=(0,c.Z)(p).replace("P0Y0M0DT","PT"),b=f<60?60:f%60>=30?f+(60-f%60):f-f%60,m={hours:Math.floor(b/3600),minutes:Math.floor(b%3600/60)},v={xMinutes:"{{count}} min",xHours:"{{count}} h"},y={format:["hours","minutes"],locale:{formatDistance:function(n,e){return v[n].replace("{{count}}",e)}}},w=(0,a.Z)(m,y);return(0,i.jsxs)("span",{className:e,children:[(0,i.jsx)(s.ZP,{iconName:d,className:o()("mr-4 inline-block h-16 w-16 ".concat(u)),ariaLabel:r}),(0,i.jsx)("time",{dateTime:g,children:w})]})}}}]);