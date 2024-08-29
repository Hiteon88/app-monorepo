"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[18410],{918410:(e,n,l)=>{l.r(n),l.d(n,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var t=l(490343),i=l(654004),s=l(831085);const __WEBPACK_DEFAULT_EXPORT__=function(){return(0,s.jsx)(i.P,{description:"..",suggestions:["..."],boundaryConditions:["..."],elements:[{title:"Sizes",element:(0,s.jsxs)(t.Stack,{gap:"$4",children:[(0,s.jsx)(t.Input,{size:"small",placeholder:"Placeholder"}),(0,s.jsx)(t.Input,{size:"medium",placeholder:"Placeholder"}),(0,s.jsx)(t.Input,{size:"large",placeholder:"Placeholder"})]})},{title:"Input with icon",element:(0,s.jsxs)(t.Stack,{gap:"$4",children:[(0,s.jsx)(t.Input,{size:"small",placeholder:"Placeholder",leftIconName:"SearchOutline"}),(0,s.jsx)(t.Input,{size:"medium",placeholder:"Placeholder",leftIconName:"SearchOutline"}),(0,s.jsx)(t.Input,{size:"large",placeholder:"Placeholder",leftIconName:"SearchOutline"})]})},{title:"Input with actions",element:(0,s.jsxs)(t.Stack,{gap:"$4",children:[(0,s.jsx)(t.Input,{size:"small",placeholder:"Placeholder",addOns:[{iconName:"EyeOutline",onPress:function(){}},{iconName:"TouchIdOutline",onPress:function(){}}]}),(0,s.jsx)(t.Input,{size:"medium",placeholder:"Placeholder",addOns:[{iconName:"EyeOutline",onPress:function(){}},{iconName:"TouchIdOutline",onPress:function(){}}]}),(0,s.jsx)(t.Input,{size:"large",disabled:!0,placeholder:"Placeholder",addOns:[{iconName:"EyeOutline",onPress:function(){},loading:!0}]}),(0,s.jsx)(t.Input,{size:"large",readonly:!0,placeholder:"Placeholder",addOns:[{iconName:"EyeOutline",onPress:function(){},loading:!0}]}),(0,s.jsx)(t.Input,{size:"large",placeholder:"Placeholder",addOns:[{iconName:"EyeOutline",onPress:function(){}},{iconName:"ArrowRightOutline",onPress:function(){}}]}),(0,s.jsx)(t.Input,{size:"small",placeholder:"Placeholder",addOns:[{label:"Paste",onPress:function(){}}]}),(0,s.jsx)(t.Input,{size:"medium",placeholder:"Placeholder",addOns:[{label:"Paste",onPress:function(){}}]}),(0,s.jsx)(t.Input,{size:"large",placeholder:"Placeholder",addOns:[{label:"Paste",onPress:function(){}}]})]})},{title:"States",element:(0,s.jsxs)(t.Stack,{gap:"$4",children:[(0,s.jsx)(t.Input,{size:"medium",value:"Disabled",disabled:!0,placeholder:"Placeholder",leftIconName:"SearchOutline",addOns:[{iconName:"XCircleOutline",onPress:function(){}}]}),(0,s.jsx)(t.Input,{size:"medium",value:"Readonly",editable:!1,placeholder:"Placeholder",leftIconName:"SearchOutline",addOns:[{iconName:"XCircleOutline",onPress:function(){}}]}),(0,s.jsx)(t.Input,{size:"medium",value:"Error",error:!0,placeholder:"Placeholder",leftIconName:"SearchOutline",addOns:[{iconName:"XCircleOutline",onPress:function(){}}]})]})}]})}},654004:(e,n,l)=>{l.d(n,{P:()=>Layout});var t=l(586330),i=l(654266),s=l(490343),a=l(989375),c=l(222007),r=l(498356),o=l(338117),d=l(831085),FormattedText=function({text:e}){return"string"==typeof e?(0,d.jsx)(s.Stack,{children:(0,d.jsxs)(s.SizableText,{children:[e,"。 "]})}):Array.isArray(e)&&0===e.length?null:(0,d.jsx)(s.Stack,{children:(0,d.jsx)(s.Stack,{gap:"$1",children:e.map((function(n,l){return(0,d.jsx)(s.Stack,{children:(0,d.jsxs)(s.SizableText,{children:[l+1,". ",n,l===e.length-1?"。":"；"]})},l.toString())}))})})};function Layout({description:e="",suggestions:n=[],boundaryConditions:l=[],elements:h=[],scrollEnabled:u=!0,contentInsetAdjustmentBehavior:x="never",skipLoading:p=!1,children:m}){var j=(0,a.U6)(),g=(0,r.A)();return(0,d.jsx)(s.Page,{skipLoading:p,children:(0,d.jsx)(s.ScrollView,{maxWidth:"100%",scrollEnabled:u,flex:1,marginBottom:j,paddingHorizontal:"$5",contentContainerStyle:{paddingTop:20,paddingBottom:280},keyboardDismissMode:"on-drag",contentInsetAdjustmentBehavior:x,children:(0,d.jsxs)(s.Stack,{marginHorizontal:"auto",maxWidth:"100%",width:576,gap:"$6",children:[(0,d.jsxs)(s.XStack,{children:[(0,d.jsx)(s.IconButton,{icon:"HomeLineOutline",onPress:function(){g.dispatch(i.y9.replace(o.WP.Main,{screen:o.V4.Developer,params:{screen:o.f$.TabDeveloper}}))}}),(0,d.jsx)(s.Button,{ml:"$4",onPress:(0,t.A)((function*(){yield c.A.serviceSetting.setTheme("light")})),children:"Light Theme"}),(0,d.jsx)(s.Button,{ml:"$4",variant:"primary",onPress:(0,t.A)((function*(){yield c.A.serviceSetting.setTheme("dark")})),children:"Dark Theme"})]}),e?(0,d.jsxs)(s.Stack,{gap:"$2",children:[(0,d.jsx)(s.Stack,{children:(0,d.jsx)(s.SizableText,{size:"$headingXl",children:"使用说明"})}),(0,d.jsx)(s.Stack,{children:(0,d.jsx)(FormattedText,{text:e})})]}):null,n?(0,d.jsxs)(s.Stack,{gap:"$2",children:[(0,d.jsx)(s.Stack,{children:(0,d.jsx)(s.SizableText,{size:"$headingXl",children:"使用建议"})}),(0,d.jsx)(FormattedText,{text:n})]}):null,l?.length>0?(0,d.jsxs)(s.Stack,{gap:"$2",children:[(0,d.jsx)(s.Stack,{children:(0,d.jsx)(s.SizableText,{size:"$headingXl",children:"注意事项"})}),(0,d.jsx)(FormattedText,{text:l})]}):null,(0,d.jsxs)(s.Stack,{gap:"$2",children:[(0,d.jsx)(s.Stack,{children:(0,d.jsx)(s.SizableText,{size:"$headingXl",children:"组件案例"})}),(0,d.jsx)(s.Stack,{children:h?.map((function(e,n){return(0,d.jsxs)(s.Stack,{gap:"$2",pb:"$8",mb:"$8",borderBottomWidth:"$px",borderBottomColor:"$borderSubdued",children:[(0,d.jsxs)(s.Stack,{flexDirection:"column",children:[(0,d.jsx)(s.SizableText,{size:"$headingLg",children:e.title}),e.description?(0,d.jsx)(s.Stack,{paddingTop:1,children:(0,d.jsxs)(s.SizableText,{children:[e.description,"。"]})}):null]}),(0,d.jsx)(s.Stack,{children:"function"==typeof e.element?(0,d.jsx)(e.element,{}):e.element})]},`elements-${n}`)}))}),(0,d.jsx)(s.Stack,{children:m?(0,d.jsx)(s.Stack,{gap:"$3",children:m}):null})]})]})})})}}}]);