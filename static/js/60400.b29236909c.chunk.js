(self.webpackChunkweb=self.webpackChunkweb||[]).push([[60400],{186069:(e,t,n)=>{"use strict";n.d(t,{Y:()=>useCopyAccountAddress});var r=n(586330),o=n(514041),c=n(490343),a=n(338117),d=n(491180),s=n(222007),i=n(498356),useCopyAccountAddress=function(){var e,t=(0,i.A)(),{copyText:n}=(0,c.useClipboard)();return(0,o.useCallback)((e=(0,r.A)((function*({accountId:e,networkId:r}){if(d.A.isHwAccount({accountId:e})||d.A.isQrAccount({accountId:e})){var o=d.A.getWalletIdFromAccountId({accountId:e});t.pushModal(a.ry.ReceiveModal,{screen:a.MD.ReceiveToken,params:{networkId:r,accountId:e,walletId:o}})}else{var c=yield s.A.serviceAccount.getAccount({accountId:e,networkId:r});n(c.address)}})),function(t){return e.apply(this,arguments)}),[t,n])}},960400:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>DeriveTypesAddressPage});var r=n(586330),o=n(781936),c=n.n(o),a=n(514041),d=n(908867),s=n(490343),i=n(222007),u=n(325809),l=n(353203),I=n(791088),f=n(880590),p=n(186069),v=n(911998),x=n(471169),m=n(254491),A=n(491180),y=n(714191),k=n(359395),b=n(831085),w=(0,a.createContext)({indexedAccountId:"",actionType:k.rI.Copy,tokenMap:{}}),DeriveTypesAddressItem=function({item:e}){var t,n,o,i,u=(0,d.A)(),v=(0,p.Y)(),[y,g]=(0,a.useState)(!1),{network:h,refreshLocalData:T,indexedAccountId:j,actionType:S,onSelected:M,token:C,tokenMap:P}=(0,a.useContext)(w),{createAddress:D}=(0,l.m)(),[_]=(0,x.useSettingsPersistAtom)();P&&(i=c()(P,(function(t,n){return!(!e.account?.xpub||!n.includes(e.account?.xpub))})));var z=e.account?A.A.shortenAddress({address:e.account.address}):u.formatMessage({id:m.ETranslations.wallet_no_address}),L=(0,a.useCallback)((0,r.A)((function*(){if(!h)throw new Error("network is empty");if(e.account)S===k.rI.Copy?yield v({accountId:e.account.id,networkId:h.id}):S===k.rI.Select&&M?.({account:e.account,deriveInfo:e.deriveInfo,deriveType:e.deriveType});else try{g(!0);var t=A.A.getWalletIdFromAccountId({accountId:j});yield D({selectAfterCreate:!1,num:0,account:{walletId:t,indexedAccountId:j,deriveType:e.deriveType,networkId:h.id}}),s.Toast.success({title:u.formatMessage({id:m.ETranslations.swap_page_toast_address_generated})}),T?.()}finally{g(!1)}})),[e.account,e.deriveType,e.deriveInfo,h,S,v,M,j,u,T,D]);return(0,b.jsxs)(I.c,{title:e.deriveInfo.label,subtitle:z,renderAvatar:(0,b.jsx)(f.vD,{logoURI:null!=(t=h?.logoURI)?t:"",size:"$10"}),onPress:L,disabled:y,children:[y?(0,b.jsx)(s.Stack,{p:"$0.5",children:(0,b.jsx)(s.Spinner,{})}):null,y||S!==k.rI.Copy?null:(0,b.jsx)(s.Icon,{name:e.account?"Copy3Outline":"PlusLargeOutline",color:"$iconSubdued"}),!y&&S===k.rI.Select&&e.account?(0,b.jsxs)(s.YStack,{children:[(0,b.jsx)(s.NumberSizeableText,{formatter:"balance",formatterOptions:{tokenSymbol:C?.symbol},numberOfLines:1,textAlign:"right",size:"$bodyLgMedium",children:null!=(n=i?.balanceParsed)?n:0}),(0,b.jsx)(s.NumberSizeableText,{formatter:"value",formatterOptions:{currency:_.currencyInfo.symbol},size:"$bodyMd",color:"$textSubdued",textAlign:"right",children:null!=(o=i?.fiatValue)?o:0})]}):null]})},DeriveTypesAddress=function({items:e}){var t=(0,a.useCallback)((function({item:e}){return(0,b.jsx)(DeriveTypesAddressItem,{item:e})}),[]);return(0,b.jsx)(s.Stack,{flex:1,children:(0,b.jsx)(s.ListView,{data:e,estimatedItemSize:60,renderItem:t})})};function DeriveTypesAddressPage({route:e}){var t,n=(0,d.A)(),{indexedAccountId:r,networkId:o,actionType:c,onUnmounted:l,onSelected:I,token:f,tokenMap:p}=e.params,{result:x,run:A}=(0,v.yk)((function(){return i.A.serviceAccount.getNetworkAccountsInSameIndexedAccountIdWithDeriveTypes({networkId:o,indexedAccountId:r})}),[o,r]),k=(0,a.useMemo)((function(){return{network:x?.network,refreshLocalData:A,indexedAccountId:r,actionType:c,onSelected:I,tokenMap:p,token:f}}),[x?.network,A,r,c,I,p,f]);return(0,b.jsx)(u.b8,{config:{sceneName:y.Zs.home,sceneUrl:""},enabledNum:[0],children:(0,b.jsx)(w.Provider,{value:k,children:(0,b.jsxs)(s.Page,{onUnmounted:l,children:[(0,b.jsx)(s.Page.Header,{title:n.formatMessage({id:m.ETranslations.address_type})}),(0,b.jsx)(s.Page.Body,{children:(0,b.jsx)(DeriveTypesAddress,{items:null!=(t=x?.networkAccounts)?t:[]})})]})})})}},277317:(e,t,n)=>{var r=n(103334),o=n(736529),c=n(781211);e.exports=function createFind(e){return function(t,n,a){var d=Object(t);if(!o(t)){var s=r(n,3);t=c(t),n=function(e){return s(d[e],e,d)}}var i=e(t,n,a);return i>-1?d[s?t[i]:i]:void 0}}},781936:(e,t,n)=>{var r=n(277317)(n(392154));e.exports=r},392154:(e,t,n)=>{var r=n(837250),o=n(103334),c=n(667642),a=Math.max;e.exports=function findIndex(e,t,n){var d=null==e?0:e.length;if(!d)return-1;var s=null==n?0:c(n);return s<0&&(s=a(d+s,0)),r(e,o(t,3),s)}}}]);