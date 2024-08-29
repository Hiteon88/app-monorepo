"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[72300],{272300:(e,t,n)=>{n.r(t),n.d(t,{V4MigrationDone:()=>V4MigrationDone,default:()=>b});var r=n(586330),o=n(514041),i=n(908867),a=n(490343),s=n(222007),c=n(498356),u=n(254491),l=n(338117),d=n(584186),f=n(774614),p=n(883085),g=n(60406),v=n(831085);function V4MigrationDone({route:e}){var t=(0,c.A)(),n=(0,i.A)(),[b,A]=(0,o.useState)(!0);return(0,v.jsxs)(p.l,{scrollEnabled:!1,exitPreventMode:b?g.yN.always:g.yN.disabled,children:[(0,v.jsx)(a.Page.Header,{headerShown:!1}),(0,v.jsxs)(a.Page.Body,{flex:1,justifyContent:"center",alignItems:"center",gap:"$5",p:"$5",children:[(0,v.jsx)(f.U,{children:(0,v.jsx)(a.Icon,{name:"CheckRadioSolid",size:"$24",$gtMd:{size:"$20"},color:"$iconSuccess"})}),(0,v.jsx)(a.SizableText,{textAlign:"center",size:"$heading2xl",children:n.formatMessage({id:u.ETranslations.v4_migration_completed_title})}),(0,v.jsx)(a.SizableText,{textAlign:"center",color:"$textSubdued",children:n.formatMessage({id:u.ETranslations.v4_migration_completed_desc})}),(0,v.jsx)(a.Button,{size:"large",$gtMd:{size:"medium"},variant:"primary",onPress:(0,r.A)((function*(){A(!1),yield d.A.wait(300),t.popStack(),yield d.A.wait(300),t.navigate(l.WP.Main,{screen:l.V4.Home}),setTimeout((function(){s.A.serviceCloudBackup.requestAutoBackup()}),3e3)})),children:n.formatMessage({id:u.ETranslations.global_explore_now})})]})]})}const b=V4MigrationDone},774614:(e,t,n)=>{n.d(t,{U:()=>V4MigrationLogCopy,h:()=>V4MigrationLogCopyHeaderRight});var r=n(324586),o=n(839850),i=n(490343),a=n(518736),s=(n(663522),n(621591)),c=n(831085),u=["children"];function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach((function(t){(0,r.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function V4MigrationLogCopy(e){var{children:t}=e,n=(0,o.A)(e,u),r=(0,s.D)();return(0,c.jsx)(a.P,_objectSpread(_objectSpread({},n),{},{onPress:function(){r.copyV4MigrationLogs()},children:t}))}function V4MigrationLogCopyHeaderRight(){return(0,c.jsx)(V4MigrationLogCopy,{children:(0,c.jsx)(i.Stack,{w:"$8",h:"$8",backgroundColor:void 0})})}},883085:(e,t,n)=>{n.d(t,{l:()=>V4MigrationModalPage});var r=n(324586),o=n(586330),i=n(839850),a=n(514041),s=n(490343),c=n(153763),u=n(471169),l=n(60406),d=n(831085),f=["children","onMounted","exitPreventMode","isAutoStartOnMount"];function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach((function(t){(0,r.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function V4MigrationModalPage(e){var{children:t,onMounted:n,exitPreventMode:r=l.yN.confirm,isAutoStartOnMount:p}=e,g=(0,i.A)(e,f),v=(0,a.useRef)(null),b=(0,c.E)();return(0,l.ek)({exitPreventMode:r,isAutoStartOnMount:p}),(0,a.useEffect)((function(){b&&clearTimeout(v.current)}),[b]),(0,d.jsx)(s.Page,_objectSpread(_objectSpread({scrollEnabled:!0,onMounted:(0,o.A)((function*(){yield u.v4migrationAtom.set((function(e){return _objectSpread(_objectSpread({},e),{},{isMigrationModalOpen:!0})})),n?.()})),onUnmounted:function(){},onClose:function(){}},g),{},{children:t}))}},60406:(e,t,n)=>{n.d(t,{EE:()=>useIsV4MigrationAutoStartFirstTime,ek:()=>useV4MigrationExitPrevent,yN:()=>y});var r=n(324586),o=n(514041),i=n(334025),a=n(908867),s=n(355931),c=n(493360),u=n(490343),l=n(498356),d=n(153763),f=n(471169),p=n(254491),g=n(663522),v=n(621591),b=n(831085);function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach((function(t){(0,r.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var A=!1,y=function(e){return e.always="always",e.confirm="confirm",e.disabled="disabled",e}({});function ModalExitPreventDialogContent({message:e,onCancelText:t,onConfirmText:n,preventRemoveData:r,isAutoStartOnMount:i}){var s=(0,a.A)(),c=(0,l.A)(),[d,g]=(0,f.useV4migrationPersistAtom)(),[v,A]=(0,o.useState)(!1);return(0,b.jsxs)(u.Stack,{children:[(0,b.jsx)(u.SizableText,{children:e}),i&&(d?.v4migrationAutoStartCount||0)>=3?(0,b.jsx)(u.Stack,{children:(0,b.jsx)(u.Checkbox,{value:v,onChange:function(){return A(!v)},label:s.formatMessage({id:p.ETranslations.v4_migration_exit_migration_checkbox_label})})}):null,(0,b.jsx)(u.Dialog.Footer,{onConfirmText:n,onConfirm:function(){c.dispatch(r.action),v&&g((function(e){return _objectSpread(_objectSpread({},e),{},{v4migrationAutoStartDisabled:!0})}))},onCancelText:t})]})}function useIsV4MigrationAutoStartFirstTime(){var[e]=(0,f.useV4migrationPersistAtom)();return!e.v4migrationAutoStartDisabled&&(!e?.v4migrationAutoStartCount||e?.v4migrationAutoStartCount<=1)}function useV4MigrationExitPrevent({exitPreventMode:e,isAutoStartOnMount:t}){var n=(0,a.A)(),r=n.formatMessage({id:p.ETranslations.confirm_exit_dialog_title}),l=n.formatMessage({id:p.ETranslations.confirm_exit_dialog_desc}),f=n.formatMessage({id:p.ETranslations.global_exit}),m=n.formatMessage({id:p.ETranslations.global_cancel}),w=useIsV4MigrationAutoStartFirstTime();(0,i.Wg)(),function useModalExitPrevent({exitPreventMode:e,isAutoStartOnMount:t,title:n,message:r,onConfirmText:i,onCancelText:a}){var s=(0,d.E)(),c=(0,o.useCallback)((function({data:e}){A||(A=!0,u.Dialog.show({title:n,renderContent:(0,b.jsx)(ModalExitPreventDialogContent,{onCancelText:a,onConfirmText:i,preventRemoveData:e,message:r,isAutoStartOnMount:t}),onClose:function(){A=!1}}))}),[t,r,a,i,n]),l=e!==y.disabled&&s,f=e===y.confirm?c:function(){return null};(0,u.usePreventRemove)(l,f)}({exitPreventMode:w&&e===y.confirm?y.always:e,isAutoStartOnMount:t,title:r,message:l,onConfirmText:f,onCancelText:m}),function useAppExitPrevent({message:e,title:t}){var n=(0,a.A)();(0,o.useEffect)((function(){if(g.Ay.isRuntimeBrowser&&!g.Ay.isExtensionUiPopup){var fn=function(t){return t.preventDefault(),t.returnValue=!0,e};return window.addEventListener("beforeunload",fn),function(){window.removeEventListener("beforeunload",fn)}}}),[e]),(0,o.useEffect)((function(){var r=c.A.addEventListener("hardwareBackPress",(function(){return s.A.alert(t,e,[{text:n.formatMessage({id:p.ETranslations.global_cancel}),onPress:function(){},style:"cancel"},{text:n.formatMessage({id:p.ETranslations.global_quit}),onPress:function(){return c.A.exitApp()}}],{cancelable:!1}),!0}));return function(){return r.remove()}}),[e,t,n])}({title:r,message:l}),function useExtensionV4MigrationFromExpandTab(){var e=(0,v.D)();(0,o.useEffect)((function(){g.Ay.isExtensionUiPopup&&(e.openV4MigrationOfExtension(),window.close())}),[e])}()}},334025:(e,t,n)=>{n.d(t,{Wg:()=>useKeepAwake});var r,o=n(586330),i=n(72631),a=n(514041),s=n(683180),c=n(34546);!function(e){e.RELEASE="release"}(r||(r={}));var u={};const l={isAvailableAsync:()=>(0,o.A)((function*(){return!!s.A.isDOMAvailable&&"wakeLock"in navigator}))(),activate:e=>(0,o.A)((function*(){if(s.A.isDOMAvailable){var t=yield navigator.wakeLock.request("screen");u[e]=t}}))(),deactivate:e=>(0,o.A)((function*(){if(s.A.isDOMAvailable){if(!u[e])throw new c.A("ERR_KEEP_AWAKE_TAG_INVALID",`The wake lock with tag ${e} has not activated yet`);u[e].release?.(),delete u[e]}}))(),addListenerForTag(e,t){var eventListener=function(){t({state:r.RELEASE})},n=u[e];return n&&("addEventListener"in n?n.addEventListener?.("release",eventListener):n.onrelease=eventListener),{remove:function(){var t=u[e];t&&(t.removeEventListener?t.removeEventListener("release",eventListener):t.onrelease=null)}}}};var d="ExpoKeepAwakeDefaultTag";function useKeepAwake(e=d,t){(0,a.useEffect)((function(){var n=!0;return activateKeepAwakeAsync(e).then((function(){n&&l.addListenerForTag&&t?.listener&&function addListener(e,t){if(!l.addListenerForTag)throw new i.V("ExpoKeepAwake","addListenerForTag");var n="string"==typeof e?e:d,r="function"==typeof e?e:t;return l.addListenerForTag(n,r)}(e,t.listener)})),function(){n=!1,t?.suppressDeactivateWarnings?deactivateKeepAwake(e).catch((function(){})):deactivateKeepAwake(e)}}),[e])}function activateKeepAwakeAsync(){return _activateKeepAwakeAsync.apply(this,arguments)}function _activateKeepAwakeAsync(){return(_activateKeepAwakeAsync=(0,o.A)((function*(e=d){yield l.activate?.(e)}))).apply(this,arguments)}function deactivateKeepAwake(){return _deactivateKeepAwake.apply(this,arguments)}function _deactivateKeepAwake(){return(_deactivateKeepAwake=(0,o.A)((function*(e=d){yield l.deactivate?.(e)}))).apply(this,arguments)}}}]);