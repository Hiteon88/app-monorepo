"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[10184],{110184:(e,n,t)=>{t.r(n),t.d(n,{default:()=>Logger});var r=t(514041),i=t(490343),o=t(460627),c=t(558726),l=t(324586),s=t(586330),a=t(579071),d=t.n(a),u=t(578104),g=t(373119),h=t(584186),j=t(831085);function ownKeys(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function _objectSpread(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ownKeys(Object(t),!0).forEach((function(n){(0,l.A)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}const LoggerConfigGallery=function(){d()(c.U.account.getName());var[e,n]=(0,r.useState)(""),t=(0,r.useRef)(e);t.current=e;var[o,l]=(0,r.useState)({}),a=(0,r.useRef)(o);a.current=o;var[x,f]=(0,r.useState)({highlightDurationGt:"",enabled:{}}),b=(0,r.useRef)(x);b.current=x,(0,r.useEffect)((function(){(0,s.A)((function*(){var e=yield g.C.getSavedLoggerConfig();f(e),l(e.enabled),n(e.highlightDurationGt||"")}))()}),[]);var p=(0,u.YQ)((0,s.A)((function*(){yield h.A.wait(0),g.C.saveLoggerConfig(_objectSpread(_objectSpread({},b.current),{},{highlightDurationGt:t.current,enabled:a.current}))})),300,{leading:!1,trailing:!0}),handleChange=function(e,n){for(var t=_objectSpread({},o),r=t,i=0;i<e.length-1;i+=1)r=r[e[i]];r[e[e.length-1]]=n,l(t),p()},isGroupChecked=function(e){return Object.values(e).every((function(e){return"object"==typeof e?isGroupChecked(e):e}))},renderCheckBoxes=function(e,n=[]){return Object.entries(e).map((function([e,t]){var r=[...n,e];if("object"==typeof t){var o=isGroupChecked(t);return(0,j.jsxs)(i.YStack,{ml:"$2",children:[(0,j.jsx)(i.XStack,{alignItems:"center",children:(0,j.jsx)(i.Checkbox,{value:o,onChange:function(e){var n=_objectSpread({},t);Object.keys(n).forEach((function(t){"object"==typeof n[t]?Object.keys(n[t]).forEach((function(r){n[t][r]=e})):n[t]=e})),handleChange(r,n)},label:e,labelProps:{fontSize:"$heading3xl"}})}),renderCheckBoxes(t,r)]},e)}return(0,j.jsx)(i.XStack,{ml:"$8",alignItems:"center",children:(0,j.jsx)(i.Checkbox,{value:t,onChange:function(e){return handleChange(r,!!e)},label:e})},e)}))};return(0,j.jsxs)(i.Stack,{children:[(0,j.jsxs)(i.SizableText,{children:["Highlight Duration Greater Than (",x.highlightDurationGt,"ms)"]}),x.highlightDurationGt?(0,j.jsx)(i.Input,{value:e,onBlur:function(){p()},onChangeText:function(e){n(e)}}):null,(0,j.jsxs)(i.Stack,{py:"$4",flexDirection:"row",alignItems:"center",gap:"$2",children:[(0,j.jsx)(i.Switch,{value:x.colorfulLog,onChange:function(e){f((function(n){return _objectSpread(_objectSpread({},n),{},{colorfulLog:e})})),p()}}),(0,j.jsx)(i.SizableText,{children:"Colorful log original message objects"})]}),(0,j.jsx)(i.XStack,{alignItems:"center",mb:"$4",children:(0,j.jsx)(i.Checkbox,{value:isGroupChecked(o),onChange:function(e){var n=_objectSpread({},o);Object.keys(n).forEach((function(t){"object"==typeof n[t]&&null!==n[t]?Object.keys(n[t]).forEach((function(r){n[t][r]=!!e})):n[t]=!!e})),handleChange([],n)},label:"Select All",labelProps:{fontSize:"$heading2xl",fontWeight:"bold"}})}),renderCheckBoxes(o)]})};var x=t(654004),LoggerDemo=function(){var e=(0,r.useCallback)((function(){(0,o.u)("onekey_logs")}),[]);return(0,j.jsx)(i.Stack,{gap:"$2",children:(0,j.jsxs)(i.Accordion,{type:"multiple",defaultValue:["logging-config","logging-demo"],children:[(0,j.jsxs)(i.Accordion.Item,{value:"logging-config",children:[(0,j.jsx)(i.Accordion.Trigger,{children:(0,j.jsx)(i.SizableText,{children:"LoggingConfig"})}),(0,j.jsx)(i.Accordion.Content,{children:(0,j.jsx)(LoggerConfigGallery,{})})]}),(0,j.jsxs)(i.Accordion.Item,{value:"logging-demo",children:[(0,j.jsx)(i.Accordion.Trigger,{children:(0,j.jsx)(i.SizableText,{children:"LoggingDemo"})}),(0,j.jsxs)(i.Accordion.Content,{children:[(0,j.jsx)(i.Button,{onPress:function(){return c.U.demo.math.sum(1,2)},children:"Log #1"}),(0,j.jsx)(i.Button,{onPress:function(){return c.U.demo.math.obj(1,2)},children:"Log #2"}),(0,j.jsx)(i.Button,{onPress:function(){return c.U.demo.math.arr(1,2)},children:"Log #3"}),(0,j.jsx)(i.Button,{onPress:function(){return c.U.demo.math.logSensitiveMessage(1,2)},children:"Log #4"}),(0,j.jsx)(i.Button,{onPress:function(){return c.U.discovery.browser.tabsData([{id:"1",url:"1",title:"Tab 1"}])},children:"Log Browser Tabs"}),(0,j.jsx)(i.Button,{onPress:e,children:"Download Log"})]})]})]})})};const Logger=function(){return(0,j.jsx)(x.P,{description:"",suggestions:[],boundaryConditions:[],elements:[{title:"Logger",element:(0,j.jsx)(i.Stack,{gap:"$1",children:(0,j.jsx)(LoggerDemo,{})})}]})}},654004:(e,n,t)=>{t.d(n,{P:()=>Layout});var r=t(586330),i=t(654266),o=t(490343),c=t(989375),l=t(222007),s=t(498356),a=t(338117),d=t(831085),FormattedText=function({text:e}){return"string"==typeof e?(0,d.jsx)(o.Stack,{children:(0,d.jsxs)(o.SizableText,{children:[e,"。 "]})}):Array.isArray(e)&&0===e.length?null:(0,d.jsx)(o.Stack,{children:(0,d.jsx)(o.Stack,{gap:"$1",children:e.map((function(n,t){return(0,d.jsx)(o.Stack,{children:(0,d.jsxs)(o.SizableText,{children:[t+1,". ",n,t===e.length-1?"。":"；"]})},t.toString())}))})})};function Layout({description:e="",suggestions:n=[],boundaryConditions:t=[],elements:u=[],scrollEnabled:g=!0,contentInsetAdjustmentBehavior:h="never",skipLoading:j=!1,children:x}){var f=(0,c.U6)(),b=(0,s.A)();return(0,d.jsx)(o.Page,{skipLoading:j,children:(0,d.jsx)(o.ScrollView,{maxWidth:"100%",scrollEnabled:g,flex:1,marginBottom:f,paddingHorizontal:"$5",contentContainerStyle:{paddingTop:20,paddingBottom:280},keyboardDismissMode:"on-drag",contentInsetAdjustmentBehavior:h,children:(0,d.jsxs)(o.Stack,{marginHorizontal:"auto",maxWidth:"100%",width:576,gap:"$6",children:[(0,d.jsxs)(o.XStack,{children:[(0,d.jsx)(o.IconButton,{icon:"HomeLineOutline",onPress:function(){b.dispatch(i.y9.replace(a.WP.Main,{screen:a.V4.Developer,params:{screen:a.f$.TabDeveloper}}))}}),(0,d.jsx)(o.Button,{ml:"$4",onPress:(0,r.A)((function*(){yield l.A.serviceSetting.setTheme("light")})),children:"Light Theme"}),(0,d.jsx)(o.Button,{ml:"$4",variant:"primary",onPress:(0,r.A)((function*(){yield l.A.serviceSetting.setTheme("dark")})),children:"Dark Theme"})]}),e?(0,d.jsxs)(o.Stack,{gap:"$2",children:[(0,d.jsx)(o.Stack,{children:(0,d.jsx)(o.SizableText,{size:"$headingXl",children:"使用说明"})}),(0,d.jsx)(o.Stack,{children:(0,d.jsx)(FormattedText,{text:e})})]}):null,n?(0,d.jsxs)(o.Stack,{gap:"$2",children:[(0,d.jsx)(o.Stack,{children:(0,d.jsx)(o.SizableText,{size:"$headingXl",children:"使用建议"})}),(0,d.jsx)(FormattedText,{text:n})]}):null,t?.length>0?(0,d.jsxs)(o.Stack,{gap:"$2",children:[(0,d.jsx)(o.Stack,{children:(0,d.jsx)(o.SizableText,{size:"$headingXl",children:"注意事项"})}),(0,d.jsx)(FormattedText,{text:t})]}):null,(0,d.jsxs)(o.Stack,{gap:"$2",children:[(0,d.jsx)(o.Stack,{children:(0,d.jsx)(o.SizableText,{size:"$headingXl",children:"组件案例"})}),(0,d.jsx)(o.Stack,{children:u?.map((function(e,n){return(0,d.jsxs)(o.Stack,{gap:"$2",pb:"$8",mb:"$8",borderBottomWidth:"$px",borderBottomColor:"$borderSubdued",children:[(0,d.jsxs)(o.Stack,{flexDirection:"column",children:[(0,d.jsx)(o.SizableText,{size:"$headingLg",children:e.title}),e.description?(0,d.jsx)(o.Stack,{paddingTop:1,children:(0,d.jsxs)(o.SizableText,{children:[e.description,"。"]})}):null]}),(0,d.jsx)(o.Stack,{children:"function"==typeof e.element?(0,d.jsx)(e.element,{}):e.element})]},`elements-${n}`)}))}),(0,d.jsx)(o.Stack,{children:x?(0,d.jsx)(o.Stack,{gap:"$3",children:x}):null})]})]})})})}},460627:(e,n,t)=>{t.d(n,{u:()=>s});var r,i=t(586330),o=t(222007),c=t(558726),l=t(520202),s=(r=(0,i.A)((function*(e){var n=`${e}.txt`;c.U.setting.device.logDeviceInfo(),yield(0,l.of)(1e3);var t=yield o.A.serviceLogger.getAllMsg(),r=document.createElement("a"),i=new Blob(t,{type:"text/plain",endings:"native"});r.href=URL.createObjectURL(i),r.download=n,document.body.appendChild(r),r.click()})),function exportLogs(e){return r.apply(this,arguments)})}}]);