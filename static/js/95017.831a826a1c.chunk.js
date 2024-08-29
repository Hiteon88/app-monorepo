"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[95017],{57140:(e,r,n)=>{n.d(r,{S:()=>d});var t=n(324586),c=n(839850),i=n(514041),s=n(241440),u=n(490343),o=n(471169),l=n(831085),a=["sourceCurrency","targetCurrency","children"];function ownKeys(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(n),!0).forEach((function(r){(0,t.A)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var d=(0,i.memo)((function BasicCurrency(e){var{sourceCurrency:r,targetCurrency:n,children:t}=e,d=(0,c.A)(e,a),[{currencyItems:h}]=(0,o.useCurrencyPersistAtom)(),[{currencyInfo:j}]=(0,o.useSettingsPersistAtom)(),x=(0,i.useMemo)((function(){return h.find((function(e){return e.id===r}))}),[h,r]),y=(0,i.useMemo)((function(){var e=null!=n?n:j.id;return h.find((function(r){return r.id===e}))}),[j.id,h,n]),g=(0,i.useMemo)((function(){return x&&y?new s.A(String(t)).div(new s.A(x.value)).times(new s.A(y.value)).toFixed():t}),[t,x,y]);return(0,l.jsx)(u.NumberSizeableText,_objectSpread(_objectSpread({formatter:"price",formatterOptions:{currency:y?.unit}},d),{},{children:g}))}))},695017:(e,r,n)=>{n.r(r),n.d(r,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var t=n(490343),c=n(57140),i=n(654004),s=n(831085);const __WEBPACK_DEFAULT_EXPORT__=function(){return(0,s.jsx)(i.P,{description:"..",suggestions:["..."],boundaryConditions:["..."],elements:[{title:"default targetCurrency",element:(0,s.jsxs)(t.Stack,{gap:"$4",children:[(0,s.jsx)(c.S,{sourceCurrency:"btc",children:"1"}),(0,s.jsx)(c.S,{sourceCurrency:"usd",children:"1"}),(0,s.jsx)(c.S,{sourceCurrency:"eur",children:"1"}),(0,s.jsx)(c.S,{sourceCurrency:"gbp",children:"1"}),(0,s.jsx)(c.S,{sourceCurrency:"jpy",children:"1"}),(0,s.jsx)(c.S,{sourceCurrency:"hkd",children:"1"}),(0,s.jsx)(c.S,{sourceCurrency:"cny",children:"1"})]})},{title:"targetCurrency",element:(0,s.jsxs)(t.Stack,{gap:"$4",children:[(0,s.jsx)(c.S,{sourceCurrency:"btc",targetCurrency:"btc",children:"1"}),(0,s.jsx)(c.S,{sourceCurrency:"btc",targetCurrency:"usd",children:"1"}),(0,s.jsx)(c.S,{sourceCurrency:"usd",targetCurrency:"btc",children:"1"}),(0,s.jsx)(c.S,{sourceCurrency:"btc",targetCurrency:"eur",children:"1"}),(0,s.jsx)(c.S,{sourceCurrency:"btc",targetCurrency:"gbp",children:"1"}),(0,s.jsx)(c.S,{sourceCurrency:"btc",targetCurrency:"cny",children:"1"}),(0,s.jsx)(c.S,{sourceCurrency:"btc",targetCurrency:"hkd",children:"1"}),(0,s.jsx)(c.S,{sourceCurrency:"btc",targetCurrency:"jpy",children:"1"}),(0,s.jsx)(c.S,{sourceCurrency:"jpy",targetCurrency:"btc",children:"1"}),(0,s.jsx)(c.S,{sourceCurrency:"btc",targetCurrency:"eth",children:"1"}),(0,s.jsx)(c.S,{sourceCurrency:"btc",targetCurrency:"aud",children:"1"})]})}]})}},654004:(e,r,n)=>{n.d(r,{P:()=>Layout});var t=n(586330),c=n(654266),i=n(490343),s=n(989375),u=n(222007),o=n(498356),l=n(338117),a=n(831085),FormattedText=function({text:e}){return"string"==typeof e?(0,a.jsx)(i.Stack,{children:(0,a.jsxs)(i.SizableText,{children:[e,"。 "]})}):Array.isArray(e)&&0===e.length?null:(0,a.jsx)(i.Stack,{children:(0,a.jsx)(i.Stack,{gap:"$1",children:e.map((function(r,n){return(0,a.jsx)(i.Stack,{children:(0,a.jsxs)(i.SizableText,{children:[n+1,". ",r,n===e.length-1?"。":"；"]})},n.toString())}))})})};function Layout({description:e="",suggestions:r=[],boundaryConditions:n=[],elements:d=[],scrollEnabled:h=!0,contentInsetAdjustmentBehavior:j="never",skipLoading:x=!1,children:y}){var g=(0,s.U6)(),S=(0,o.A)();return(0,a.jsx)(i.Page,{skipLoading:x,children:(0,a.jsx)(i.ScrollView,{maxWidth:"100%",scrollEnabled:h,flex:1,marginBottom:g,paddingHorizontal:"$5",contentContainerStyle:{paddingTop:20,paddingBottom:280},keyboardDismissMode:"on-drag",contentInsetAdjustmentBehavior:j,children:(0,a.jsxs)(i.Stack,{marginHorizontal:"auto",maxWidth:"100%",width:576,gap:"$6",children:[(0,a.jsxs)(i.XStack,{children:[(0,a.jsx)(i.IconButton,{icon:"HomeLineOutline",onPress:function(){S.dispatch(c.y9.replace(l.WP.Main,{screen:l.V4.Developer,params:{screen:l.f$.TabDeveloper}}))}}),(0,a.jsx)(i.Button,{ml:"$4",onPress:(0,t.A)((function*(){yield u.A.serviceSetting.setTheme("light")})),children:"Light Theme"}),(0,a.jsx)(i.Button,{ml:"$4",variant:"primary",onPress:(0,t.A)((function*(){yield u.A.serviceSetting.setTheme("dark")})),children:"Dark Theme"})]}),e?(0,a.jsxs)(i.Stack,{gap:"$2",children:[(0,a.jsx)(i.Stack,{children:(0,a.jsx)(i.SizableText,{size:"$headingXl",children:"使用说明"})}),(0,a.jsx)(i.Stack,{children:(0,a.jsx)(FormattedText,{text:e})})]}):null,r?(0,a.jsxs)(i.Stack,{gap:"$2",children:[(0,a.jsx)(i.Stack,{children:(0,a.jsx)(i.SizableText,{size:"$headingXl",children:"使用建议"})}),(0,a.jsx)(FormattedText,{text:r})]}):null,n?.length>0?(0,a.jsxs)(i.Stack,{gap:"$2",children:[(0,a.jsx)(i.Stack,{children:(0,a.jsx)(i.SizableText,{size:"$headingXl",children:"注意事项"})}),(0,a.jsx)(FormattedText,{text:n})]}):null,(0,a.jsxs)(i.Stack,{gap:"$2",children:[(0,a.jsx)(i.Stack,{children:(0,a.jsx)(i.SizableText,{size:"$headingXl",children:"组件案例"})}),(0,a.jsx)(i.Stack,{children:d?.map((function(e,r){return(0,a.jsxs)(i.Stack,{gap:"$2",pb:"$8",mb:"$8",borderBottomWidth:"$px",borderBottomColor:"$borderSubdued",children:[(0,a.jsxs)(i.Stack,{flexDirection:"column",children:[(0,a.jsx)(i.SizableText,{size:"$headingLg",children:e.title}),e.description?(0,a.jsx)(i.Stack,{paddingTop:1,children:(0,a.jsxs)(i.SizableText,{children:[e.description,"。"]})}):null]}),(0,a.jsx)(i.Stack,{children:"function"==typeof e.element?(0,a.jsx)(e.element,{}):e.element})]},`elements-${r}`)}))}),(0,a.jsx)(i.Stack,{children:y?(0,a.jsx)(i.Stack,{gap:"$3",children:y}):null})]})]})})})}}}]);