"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[19179],{519179:(e,t,r)=>{r.r(t),r.d(t,{default:()=>y});var n=r(324586),o=r(586330),s=r(514041),i=r(908867),a=r(578104),c=r(490343),u=r(222007),l=r(791088),d=r(880590),p=r(562428),m=r(911998),f=r(885127),k=r(254491),b=r(796151),w=r(831085);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){(0,n.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var g=function(e){return e.Fast="Fast",e.Normal="Normal",e.NotAvailable="NotAvailable",e}(g||{});function ListHeaderComponent(){var e=(0,i.A)();return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(c.SizableText,{px:"$5",size:"$bodyLg",color:"$textSubdued",children:e.formatMessage({id:k.ETranslations.custom_rpc_desc})}),(0,w.jsx)(c.Divider,{my:"$5"})]})}function ListEmptyComponent({onAddCustomRpc:e}){var t=(0,i.A)();return(0,w.jsx)(c.Empty,{mt:"$24",icon:"BezierNodesOutline",title:t.formatMessage({id:k.ETranslations.custom_rpc_empty_title}),buttonProps:{onPress:function(){return e()},children:t.formatMessage({id:k.ETranslations.custom_rpc_cta_label})}})}function DialogContent({network:e,rpcInfo:t,onConfirm:r}){var n,a=(0,c.useForm)({defaultValues:{rpc:t?.rpc||""}}),l=(0,s.useRef)(!0),[p,m]=(0,s.useState)(!1),f=(0,i.A)();return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(c.Dialog.Header,{children:[(0,w.jsx)(c.Stack,{mb:"$5",children:(0,w.jsx)(d.um,{networkId:e.id,size:"$12"})}),(0,w.jsx)(c.Dialog.Title,{children:f.formatMessage({id:k.ETranslations.custom_rpc_edit_dialog_title},{network:e.name})})]}),(0,w.jsx)(c.Form,{form:a,children:(0,w.jsx)(c.Form.Field,{label:"RPC URL",name:"rpc",rules:{required:{value:!0,message:f.formatMessage({id:k.ETranslations.form_custom_rpc_error_invalid})},validate:function(e){if(!b.Ay.parseUrl(e)||!l.current)return f.formatMessage({id:k.ETranslations.form_custom_rpc_error_invalid})}},children:(0,w.jsx)(c.Input,{autoFocus:!0,flex:1})})}),(0,w.jsx)(c.Dialog.Footer,{onConfirm:(n=(0,o.A)((function*({preventClose:n,close:o}){var{serviceCustomRpc:s}=u.A;m(!0);var i=a.getValues("rpc"),c=e.id;try{var d;l.current=!0,yield s.measureRpcStatus({rpcUrl:i,networkId:c}),yield s.addCustomRpc({rpc:i,networkId:c,enabled:null==(d=t?.enabled)||d})}catch(e){return l.current=!1,a.trigger("rpc"),void n()}finally{m(!1)}yield o(),r()})),function(e){return n.apply(this,arguments)}),confirmButtonProps:{loading:p}})]})}const y=function CustomRPC(){var e,t,r=(0,i.A)(),{result:n,run:d}=(0,m.yk)((0,o.A)((function*(){var{serviceNetwork:e,serviceCustomRpc:t}=u.A;return{supportNetworks:yield e.getCustomRpcEnabledNetworks(),customRpcNetworks:yield t.getAllCustomRpc()}})),[]),[b,y]=(0,s.useState)({}),j=(0,s.useRef)(),v=(0,s.useCallback)((e=(0,o.A)((function*(e){try{var{responseTime:t}=yield u.A.serviceCustomRpc.measureRpcStatus({rpcUrl:e.rpc,networkId:e.networkId});return{responseTime:t,status:t<800?g.Fast:g.Normal,loading:!1}}catch(e){return{responseTime:-1,status:g.NotAvailable,loading:!1}}})),function(t){return e.apply(this,arguments)}),[]),x=(0,a.YQ)((t=(0,o.A)((function*({currentRpcInfos:e,previousRpcInfos:t}){var r=e.filter((function(e){var r=t?.find((function(t){return t.networkId===e.networkId}));return!r||r.rpc!==e.rpc}));y((function(e){var t=_objectSpread({},e);return r.forEach((function(e){t[e.networkId]=_objectSpread(_objectSpread({},t[e.networkId]),{},{loading:!0})})),t}));var n,s=r.map((n=(0,o.A)((function*(e){var t=yield v(e);!function(e,t){y((function(r){return _objectSpread(_objectSpread({},r),{},{[e]:t})}))}(e.networkId,t)})),function(e){return n.apply(this,arguments)}));yield Promise.all(s)})),function(e){return t.apply(this,arguments)}),300);(0,s.useEffect)((function(){if(n?.customRpcNetworks){var e=n.customRpcNetworks,t=j.current||[];x({currentRpcInfos:e,previousRpcInfos:t}),j.current=e}}),[n?.customRpcNetworks,x]);var h,C,I=(0,s.useCallback)((function({network:e,rpcInfo:t}){c.Dialog.show({renderContent:(0,w.jsx)(DialogContent,{network:e,rpcInfo:t,onConfirm:d})})}),[d]),_=(0,f.A)(),R=(0,s.useCallback)((function(e){_({networkIds:n?.supportNetworks?.map((function(e){return e.id})),onSelect:function(t){I({network:t,rpcInfo:e?.rpcInfo})}})}),[_,n?.supportNetworks,I]),A=(0,s.useCallback)((function(){R()}),[R]),S=(0,s.useCallback)((h=(0,o.A)((function*(e){yield u.A.serviceCustomRpc.deleteCustomRpc(e.networkId),setTimeout((function(){d()}),200)})),function(e){return h.apply(this,arguments)}),[d]),T=(0,s.useCallback)((C=(0,o.A)((function*(e){yield u.A.serviceCustomRpc.addCustomRpc({rpc:e.rpc,networkId:e.networkId,enabled:!e.enabled}),setTimeout((function(){d()}),200)})),function(e){return C.apply(this,arguments)}),[d]),N=(0,s.useCallback)((function(e){if(!b[e.networkId]||b[e.networkId].loading)return(0,w.jsx)(c.Skeleton,{w:42,h:"$5"});var t="success";switch(b[e.networkId].status){case g.Fast:t="success";break;case g.Normal:t="warning";break;case g.NotAvailable:t="critical"}var n=b[e.networkId].status===g.NotAvailable?r.formatMessage({id:k.ETranslations.global_not_available}):`${b[e.networkId].responseTime}ms`;return(0,w.jsx)(c.Badge,{badgeType:t,badgeSize:"sm",children:n})}),[r,b]),O=(0,s.useCallback)((function(){return Array.isArray(n?.customRpcNetworks)&&n.customRpcNetworks.length>0?(0,w.jsx)(c.IconButton,{title:r.formatMessage({id:k.ETranslations.custom_rpc_cta_label}),variant:"tertiary",icon:"PlusLargeOutline",onPress:function(){A()}}):null}),[n?.customRpcNetworks,r,A]);return n?.customRpcNetworks?(0,w.jsxs)(c.Page,{children:[(0,w.jsx)(c.Page.Header,{title:r.formatMessage({id:k.ETranslations.custom_rpc_title}),headerRight:O}),(0,w.jsx)(c.Page.Body,{children:(0,w.jsx)(c.ListView,{data:n.customRpcNetworks,estimatedItemSize:60,keyExtractor:function(e){return e.networkId},renderItem:function({item:e}){return(0,w.jsxs)(l.c,{testID:"CustomRpcItemContainer",children:[(0,w.jsx)(c.Switch,{size:c.ESwitchSize.small,value:e.enabled,onChange:function(){return T(e)}}),(0,w.jsx)(p.G,{icon:e.network.logoURI,networkId:e.networkId}),(0,w.jsx)(l.c.Text,{flex:1,primary:(0,w.jsxs)(c.XStack,{alignItems:"center",gap:"$2",children:[(0,w.jsx)(c.SizableText,{flexShrink:1,numberOfLines:1,size:"$bodyLgMedium",color:"$text",children:e.network.name}),N(e)]}),secondary:e.rpc,secondaryTextProps:{numberOfLines:1}}),(0,w.jsx)(c.ActionList,{title:r.formatMessage({id:k.ETranslations.global_more}),renderTrigger:(0,w.jsx)(c.IconButton,{icon:"DotHorOutline",variant:"tertiary"}),items:[{label:r.formatMessage({id:k.ETranslations.global_edit}),icon:"PencilOutline",onPress:function(){return I({network:e.network,rpcInfo:e})}},{label:r.formatMessage({id:k.ETranslations.global_delete}),destructive:!0,icon:"DeleteOutline",onPress:(t=(0,o.A)((function*(){return S(e)})),function onPress(){return t.apply(this,arguments)})}]})]});var t},ListHeaderComponent:(0,w.jsx)(ListHeaderComponent,{}),ListEmptyComponent:(0,w.jsx)(ListEmptyComponent,{onAddCustomRpc:function(){return R()}})})})]}):(0,w.jsx)(c.YStack,{flex:1,alignItems:"center",justifyContent:"center",children:(0,w.jsx)(c.Spinner,{})})}}}]);