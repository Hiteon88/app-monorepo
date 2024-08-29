"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[21732],{82506:(e,n,t)=>{t.d(n,{d:()=>useDebounce});var r=t(578104);function useDebounce(e,n,t){var[o]=(0,r.d7)(e,n,t);return o}},278484:(e,n,t)=>{t.d(n,{wI:()=>DAppAccountListItem,ZY:()=>DAppAccountListStandAloneItem,X1:()=>DAppAccountListStandAloneItemForHomeScene,VV:()=>WalletConnectAccountTriggerList});var r=t(460986),o=t.n(r),c=t(324586),s=t(586330),a=t(514041),i=t(908867),u=t(17617),l=t(490343),d=t(222007),p=t(325809),m=t(237532),g=t(24284),f=t(911998),A=t(162616),S=t(226952),h=t(254491),_=(t(663522),t(584186)),y=t(714191),b=t(82506);var x=t(831085);function ownKeys(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function _objectSpread(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ownKeys(Object(t),!0).forEach((function(n){(0,c.A)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function DAppAccountListInitFromHome({num:e,shouldSyncFromHome:n}){var[,t]=(0,A.K7)(),r=(0,A.z$)();return(0,a.useEffect)((function(){return(0,s.A)((function*(){try{t((function(n){return _objectSpread(_objectSpread({},n),{},{[e]:{isLoading:!0}})})),yield _.A.wait(600),n&&(yield r.current.syncFromScene({from:{sceneName:y.Zs.home,sceneNum:0},num:e}))}finally{n&&(yield _.A.wait(300)),t((function(n){return _objectSpread(_objectSpread({},n),{},{[e]:{isLoading:!1}})}))}}))(),function(){t((function(n){return _objectSpread(_objectSpread({},n),{},{[e]:{isLoading:!1}})}))}}),[r,e,t,n]),null}function DAppAccountListItem({num:e,handleAccountChanged:n,readonly:t,networkReadonly:r,compressionUiMode:o,initFromHome:c,beforeShowTrigger:s,skeletonRenderDuration:i}){!function useHandleDiscoveryAccountChanged({num:e,handleAccountChanged:n}){var{activeAccount:t}=(0,A.LH)({num:e}),{selectedAccount:r}=(0,A.wz)({num:e}),o=(0,b.d)(t,200),c=(0,b.d)(r,200),s=(0,a.useRef)(t),i=(0,a.useRef)(r);(0,a.useEffect)((function(){s.current=t,i.current=r}),[t,r]),(0,a.useEffect)((function(){n&&(o.isOthersWallet&&o.account?.id===c.othersWalletAccountId||o.indexedAccount?.id===c.indexedAccountId)&&n({activeAccount:s.current,selectedAccount:i.current},e)}),[o,c,n,e])}({num:e,handleAccountChanged:n});var d=Boolean(c&&!t);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(l.YGroup,{bg:"$bg",borderRadius:"$3",borderColor:"$borderSubdued",borderWidth:u.A.hairlineWidth,separator:(0,x.jsx)(l.Divider,{}),disabled:t,children:[(0,x.jsx)(l.YGroup.Item,{children:(0,x.jsx)(p.jY,{num:e,beforeShowTrigger:s,disabled:r||t,loadingDuration:0})}),(0,x.jsx)(l.YGroup.Item,{children:(0,x.jsx)(m.U,{num:e,compressionUiMode:o,beforeShowTrigger:s,loadingDuration:0})})]}),(0,x.jsx)(DAppAccountListInitFromHome,{num:e,shouldSyncFromHome:d})]})}function DAppAccountListStandAloneItem({readonly:e,handleAccountChanged:n,onConnectedAccountInfoChanged:t}){var r=(0,i.A)(),{serviceDApp:c,serviceNetwork:u}=d.A,{$sourceInfo:m}=(0,g.A)(),{result:A}=(0,f.yk)((0,s.A)((function*(){var e,n;if(!m?.origin||!m.scope)return{accountSelectorNum:null,networkIds:null};var t=(0,S.zg)(m.scope),r=t?(yield u.getNetworkIdsByImpls({impls:t})).networkIds:null,o=yield c.getConnectedAccountsInfo({origin:m.origin,scope:null!=(e=m.scope)?e:"",isWalletConnectRequest:m.isWalletConnectRequest});return Array.isArray(o)&&o.length>0&&"number"==typeof o[0]?.num?{accountSelectorNum:o[0].num,networkIds:r,existConnectedAccount:!0}:{accountSelectorNum:yield c.getAccountSelectorNum({origin:m.origin,scope:null!=(n=m.scope)?n:"",isWalletConnectRequest:m.isWalletConnectRequest}),networkIds:r,existConnectedAccount:!1}})),[m?.origin,m?.scope,m?.isWalletConnectRequest,c,u]);return(0,a.useEffect)((function(){o()(A?.accountSelectorNum)&&t&&t({num:A.accountSelectorNum,existConnectedAccount:A.existConnectedAccount})}),[A?.accountSelectorNum,A?.existConnectedAccount,t]),(0,x.jsxs)(l.YStack,{gap:"$2",testID:"DAppAccountListStandAloneItem",children:[(0,x.jsx)(l.SizableText,{size:"$headingMd",color:"$text",children:r.formatMessage({id:h.ETranslations.global_accounts})}),"number"==typeof A?.accountSelectorNum&&Array.isArray(A?.networkIds)?(0,x.jsx)(p.b8,{config:{sceneName:y.Zs.discover,sceneUrl:m?.origin},enabledNum:[A.accountSelectorNum],availableNetworksMap:{[A.accountSelectorNum]:{networkIds:A.networkIds}},children:(0,x.jsx)(DAppAccountListItem,{initFromHome:!A?.existConnectedAccount,num:A?.accountSelectorNum,handleAccountChanged:n,readonly:e})}):null]})}function DAppAccountListStandAloneItemForHomeScene(){var e=(0,i.A)();return(0,x.jsxs)(l.YStack,{gap:"$2",testID:"DAppAccountListStandAloneItem",children:[(0,x.jsx)(l.SizableText,{size:"$headingMd",color:"$text",children:e.formatMessage({id:h.ETranslations.global_accounts})}),(0,x.jsx)(p.b8,{config:{sceneName:y.Zs.home},enabledNum:[0],children:(0,x.jsx)(DAppAccountListItem,{initFromHome:!1,num:0,readonly:!0})})]})}function WalletConnectAccountTriggerList({sceneUrl:e,sessionAccountsInfo:n,handleAccountChanged:t}){var r=n.map((function(e){return e.accountSelectorNum})),o=n.reduce((function(e,n){var t=n.networkIds.filter(Boolean);return e[n.accountSelectorNum]={networkIds:t,defaultNetworkId:t[0]},e}),{});return(0,x.jsxs)(l.YStack,{gap:"$2",children:[(0,x.jsx)(l.SizableText,{size:"$headingMd",color:"$text",children:"Accounts"}),Array.isArray(n)&&n.length?(0,x.jsx)(p.b8,{config:{sceneName:y.Zs.discover,sceneUrl:e},enabledNum:r,availableNetworksMap:o,children:(0,x.jsx)(l.YStack,{gap:"$2",children:n.map((function(e){return(0,x.jsx)(l.Stack,{children:(0,x.jsx)(DAppAccountListItem,{initFromHome:!0,num:e.accountSelectorNum,handleAccountChanged:t})},e.accountSelectorNum)}))})}):null]})}},701378:(e,n,t)=>{t.d(n,{_:()=>DAppRequestedPermissionContent,N:()=>DAppSignMessageContent});var r=t(908867),o=t(17617),c=t(490343),s=t(254491),a=t(831085);function DAppRequestedPermissionContent({requestPermissions:e}){var n=(0,r.A)();return(0,a.jsxs)(c.YStack,{gap:"$2",children:[(0,a.jsx)(c.SizableText,{color:"$text",size:"$headingMd",children:n.formatMessage({id:s.ETranslations.dapp_connect_requested_permissions})}),(0,a.jsx)(c.YStack,{py:"$2.5",px:"$3",gap:"$3",minHeight:"$8",bg:"$bg",borderRadius:"$3",borderWidth:o.A.hairlineWidth,borderColor:"$borderSubdued",borderCurve:"continuous",children:(null!=e?e:[n.formatMessage({id:s.ETranslations.dapp_connect_view_your_balance_and_activity}),n.formatMessage({id:s.ETranslations.dapp_connect_send_approval_requests})]).map((function(e){return(0,a.jsxs)(c.XStack,{gap:"$3",children:[(0,a.jsx)(c.Icon,{name:"CheckLargeOutline",color:"$icon",size:"$5"}),(0,a.jsx)(c.SizableText,{color:"$text",size:"$bodyMd",children:e})]},e)}))})]})}var i=t(514041),u=t(903454),l=t(161024),d=t(901048).Buffer;function DAppSignMessageContent({unsignedMessage:e}){var n=(0,r.A)(),[t,o]=(0,i.useState)(!1),p=(0,i.useMemo)((function(){var{message:n,type:t,payload:r}=e;switch(t){case l.nc.ECDSA:case l.nc.BIP322_SIMPLE:case l.$.ETH_SIGN:case l.nZ.SIMPLE_SIGN:return n;case l.$.PERSONAL_SIGN:case l.nZ.SIGN_MESSAGE:try{return u.toBuffer(n).toString("utf8")}catch(e){return n}case l.nZ.HEX_MESSAGE:return d.from(n,"hex").toString("utf8");case l.nF.SIGN_MESSAGE:var o;return null!=(o=r?.message)?o:n;case l.$.TYPED_DATA_V1:var c,s,a=null!=(c=JSON.parse(n))?c:{};if(a=null!=(s=a.message)?s:a,Array.isArray(a))a=a.reduce((function(e,n){return e[n.name]=n.value,e}),{});return JSON.stringify(a,null,2);case l.$.TYPED_DATA_V3:case l.$.TYPED_DATA_V4:try{var i,p,m=JSON.parse(n);return m=null!=(i=m?.message)?i:m,JSON.stringify("string"==typeof m?null!=(p=JSON.parse(m))?p:{}:m,null,2)}catch{return n}default:return n}}),[e]),m=(0,i.useCallback)((function(){var{message:r,type:i}=e;if(i===l.nc.ECDSA||i===l.nc.BIP322_SIMPLE||i===l.$.ETH_SIGN||i===l.nZ.SIMPLE_SIGN)return null;var u=r;if(i===l.$.TYPED_DATA_V1||i===l.$.TYPED_DATA_V3||i===l.$.TYPED_DATA_V4){try{u=JSON.parse(u)}catch(e){}u=JSON.stringify(u,null,2)}return(0,a.jsxs)(c.YStack,{gap:"$2",children:[(0,a.jsx)(c.Button,{variant:"secondary",onPress:function(){return o(!t)},children:t?n.formatMessage({id:s.ETranslations.dapp_connect_hide_full_message}):n.formatMessage({id:s.ETranslations.dapp_connect_view_full_message})}),t?(0,a.jsx)(c.TextArea,{editable:!1,numberOfLines:11,value:u}):null]})}),[n,e,t]);return(0,a.jsxs)(c.YStack,{justifyContent:"center",children:[(0,a.jsx)(c.SizableText,{color:"$text",size:"$headingMd",mb:"$2",children:n.formatMessage({id:s.ETranslations.dapp_connect_message})}),(0,a.jsxs)(c.YStack,{gap:"$2",children:[(0,a.jsx)(c.TextArea,{value:p,editable:!1,numberOfLines:11}),m()]})]})}},980342:(e,n,t)=>{t.d(n,{A:()=>s});var r=t(490343),o=t(42484),c=t(831085);const s=function DappOpenModalPage({children:e,onClose:n,dappApprove:t}){return(0,c.jsxs)(r.Page,{scrollEnabled:!0,onClose:function(e){e?.flag!==o.n.Confirmed&&t.reject(),"function"==typeof n&&n(e)},children:[(0,c.jsx)(r.Page.Header,{headerShown:!1}),e]})}},321732:(e,n,t)=>{t.r(n),t.d(n,{default:()=>I});var r=t(586330),o=t(514041),c=t(908867),s=t(490343),a=t(254491),i=t(47412),u=t(184251),l=t(714191),d=t(42484),p=t(352325),m=t(161024),g=t(222007),f=t(796895),A=t(24284),S=t(911998),h=t(278484),_=t(701378),y=t(864961),b=t(905710),x=t(980342),j=t(831085);const I=function SignMessageModal(){var e,n,t,I,v=(0,c.A)(),[N,w]=(0,o.useState)(!1),{$sourceInfo:D,unsignedMessage:C,accountId:$,networkId:k,sceneName:T}=(0,A.A)(),E=(0,f.A)({id:null!=(e=D?.id)?e:"",closeWindowAfterResolved:!0}),{result:M}=(0,S.yk)((function(){return g.A.serviceNetwork.getNetwork({networkId:k})}),[k]),O=C.type===m.$.ETH_SIGN,P=(0,o.useMemo)((function(){return M?.name?v.formatMessage({id:a.ETranslations.dapp_connect_allow_to_access_your_chain_message_signature},{chain:M.name}):""}),[v,M]),{showContinueOperate:L,continueOperate:Y,setContinueOperate:H,riskLevel:R,urlSecurityInfo:z}=(0,b.q)({origin:null!=(n=D?.origin)?n:"",isRiskSignMethod:O}),F=(0,o.useCallback)((I=(0,r.A)((function*(e){w(!0);try{C.type!==m.$.ETH_SIGN&&C.type!==m.$.PERSONAL_SIGN||(0,i.Xf)(C,M?.impl),C.type===m.$.TYPED_DATA_V1&&(0,i.cM)(C,M?.impl),C.type!==m.$.TYPED_DATA_V3&&C.type!==m.$.TYPED_DATA_V4||(0,i.a3)(C,u.A.getNetworkChainId({networkId:k}),M?.impl)}catch(n){return w(!1),E?.reject({error:n}),void e?.()}try{var n=yield g.A.serviceSend.signMessage({unsignedMessage:C,networkId:k,accountId:$});E.resolve({result:n});try{yield g.A.serviceSignature.addItemFromSignMessage({networkId:k,accountId:$,message:C.message,sourceInfo:D})}catch{}e?.({flag:d.n.Confirmed})}finally{w(!1)}})),function(e){return I.apply(this,arguments)}),[C,M?.impl,k,E,$,D]);return(0,j.jsx)(x.A,{dappApprove:E,children:(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(s.Page.Header,{headerShown:!1}),(0,j.jsx)(s.Page.Body,{children:(0,j.jsxs)(y.HJ,{title:v.formatMessage({id:a.ETranslations.dapp_connect_initiate_message_signature_request}),subtitle:P,origin:null!=(t=D?.origin)?t:"",urlSecurityInfo:z,isRiskSignMethod:O,children:[T===l.Zs.home?(0,j.jsx)(h.X1,{}):(0,j.jsx)(h.ZY,{readonly:!0}),(0,j.jsx)(_.N,{unsignedMessage:C})]})}),(0,j.jsx)(s.Page.Footer,{children:(0,j.jsx)(y.OS,{confirmText:v.formatMessage({id:a.ETranslations.dapp_connect_confirm}),continueOperate:Y,setContinueOperate:function(e){H(!!e)},onConfirm:function(e){return F(e)},onCancel:function(){return E.reject()},confirmButtonProps:{loading:N,disabled:!Y},showContinueOperateCheckbox:L,riskLevel:O?p._.High:R})})]})})}}}]);