"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[60801],{5679:(e,n,t)=>{t.d(n,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var r=t(324586),o=t(514041);function ownKeys(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var i="undefined"!=typeof window&&"undefined"!=typeof document;var setCookie=function(e,n,t){if(i){var o=function _objectSpread(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ownKeys(Object(t),!0).forEach((function(n){(0,r.A)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({days:7,path:"/"},t),a=new Date(Date.now()+864e5*o.days).toUTCString();document.cookie=`${e}=${encodeURIComponent(n)}; expires=${a}${function stringifyOptions(e){return Object.keys(e).reduce((function(n,t){return"days"===t||!1===e[t]?n:!0===e[t]?`${n}; ${t}`:`${n}; ${t}=${String(e[t])}`}),"")}(o)}`}},getCookie=function(e,n=""){return i&&document.cookie.split("; ").reduce((function(n,t){var r=t.split("=");return r[0]===e?decodeURIComponent(r[1]):n}),"")||n};function __WEBPACK_DEFAULT_EXPORT__(e,n){var[t,r]=(0,o.useState)((function(){return getCookie(e,n)}));return[t,function(n,t){r(n),setCookie(e,n,t)}]}},860801:(e,n,t)=>{t.r(n),t.d(n,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var r=t(586330),o=t(514041),i=t(17617),a=t(490343),c=t(663522),s=t(338117),l=t(524690),d=(t(586908),t(714191)),u=t(222007),p=t(325809),h=t(498356),f=t(5679),j=t(162616),x=t(415902),b=t(831085),m=f.A;function PartContainer({title:e,children:n}){return(0,b.jsxs)(a.YStack,{children:[(0,b.jsx)(a.Stack,{paddingTop:"$5",paddingBottom:"$2.5",children:(0,b.jsx)(a.SizableText,{size:"$headingMd",children:e})}),(0,b.jsx)(a.YStack,{padding:"$2.5",gap:"$5",borderColor:"$border",borderWidth:i.A.hairlineWidth,borderRadius:"$2",children:n})]})}function StartTimePanelContainer(){return(0,b.jsx)(PartContainer,{title:"Startup Time(ms)",children:(0,b.jsx)(x._,{})})}function ConnectWalletConnectDapp(){var[e,n]=(0,o.useState)("");return(0,b.jsxs)(PartContainer,{title:"WalletConnect connect to Dapp",children:[(0,b.jsx)(a.TextArea,{placeholder:"walletconnect dapp qrcode uri",value:e,onChangeText:n}),(0,b.jsx)(a.Button,{onPress:(0,r.A)((function*(){e&&(yield u.A.walletConnect.connectToDapp(e),n(""))})),children:"Connect"})]})}var g=(0,o.memo)((function TestRefreshCmp(){var{activeAccount:{accountName:e}}=(0,j.LH)({num:0});return(0,b.jsxs)(a.Button,{children:["TestRefresh: ",e]})}));const __WEBPACK_DEFAULT_EXPORT__=function(){var e=(0,h.A)(),[n,o]=m(l.YH.rrt);return(0,b.jsx)(p.b8,{config:{sceneName:d.Zs.home},enabledNum:[0],children:(0,b.jsx)(a.Page,{children:(0,b.jsx)(a.Page.Body,{children:(0,b.jsxs)(a.ScrollView,{flex:1,width:"100%",paddingHorizontal:"$5",contentContainerStyle:{paddingBottom:"$5"},gap:"$5",children:[(0,b.jsx)(PartContainer,{title:"Components",children:(0,b.jsx)(a.Button,{onPress:function(){e.push(s.f$.ComponentsGallery)},children:"Gallery"})}),(0,b.jsx)(PartContainer,{title:"Debug Router & Tabs & List",children:(0,b.jsx)(a.Button,{onPress:function(){e.push(s.f$.DevHome)},children:"DevHome Page"})}),(0,b.jsx)(PartContainer,{title:"Debugger Signature Records",children:(0,b.jsx)(a.Button,{onPress:function(){e.push(s.f$.SignatureRecord)},children:"Signature Records"})}),(0,b.jsx)(PartContainer,{title:"Debug Tools",children:(0,b.jsx)(a.Button,{onPress:function(){var e="1"===n?"0":"1";o(e),c.Ay.isRuntimeBrowser&&("0"===e?localStorage.removeItem("$$OnekeyReactRenderTrackerEnabled"):localStorage.setItem("$$OnekeyReactRenderTrackerEnabled","true")),window.location.reload()},children:(0,b.jsx)(b.Fragment,{children:"1"===n?"Disabled react-render-tracker":"Enabled react-render-tracker"})})}),null,(0,b.jsx)(PartContainer,{title:"Async Import Test",children:(0,b.jsx)(a.Button,{onPress:(0,r.A)((function*(){var{test:e}=yield t.e(79931).then(t.bind(t,479931));e()})),children:"Async Import Test"})}),(0,b.jsx)(StartTimePanelContainer,{}),(0,b.jsx)(ConnectWalletConnectDapp,{}),(0,b.jsx)(g,{})]})})})})}},415902:(e,n,t)=>{t.d(n,{_:()=>StartTimePanel});var r=t(490343),o=t(318003),i=t(831085);function StartTimePanel(){var{jsBundleLoadedTime:e,fpTime:n}=(0,o.useMeasureTime)();return(0,i.jsxs)(r.YStack,{children:[(0,i.jsxs)(r.SizableText,{children:["JS Bundle 加载执行时长: ",e]}),(0,i.jsxs)(r.SizableText,{children:["界面渲染时长: ",n-e]}),(0,i.jsxs)(r.SizableText,{children:["启动总时长: ",n]})]})}}}]);