"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[80144,15882],{880144:(e,n,t)=>{t.r(n),t.d(n,{default:()=>i});var r=t(324586),a=t(404727),c=t(928557),d=t(215882);function ownKeys(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function _objectSpread(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ownKeys(Object(t),!0).forEach((function(n){(0,r.A)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var o={default:{namePrefix:"BCH",label:"Legacy",template:`m/44'/${c.ul}'/${c.h2}'/0/0`,coinType:c.ul,coinName:c.P1,addressEncoding:a.EAddressEncodings.P2PKH,desc:"BIP44, P2PKH, Base58."}},s=_objectSpread(_objectSpread({},d.default),{},{accountDeriveInfo:o,impl:c.N,coinTypeDefault:c.ul,minTransferAmount:"0.00000546",hasFrozenBalance:!1,showAddressType:!1,dappInteractionEnabled:!1,mergeDeriveAssetsEnabled:!1,qrAccountEnabled:!1});const i=Object.freeze(s)},215882:(e,n,t)=>{t.r(n),t.d(n,{default:()=>i});var r=t(404727),a=t(928557),c=t(254491),d=t(746661),o={default:{namePrefix:"BTC Nested SegWit",label:"Nested SegWit",template:`m/49'/${a.$t}'/${a.h2}'/0/0`,coinType:a.$t,coinName:a.Ly,addressEncoding:r.EAddressEncodings.P2SH_P2WPKH,descI18n:{id:c.ETranslations.p2wpkh_desc,data:{}}},BIP86:{namePrefix:"BTC Taproot",label:"Taproot",template:`m/86'/${a.$t}'/${a.h2}'/0/0`,coinType:a.$t,coinName:a.Ly,addressEncoding:r.EAddressEncodings.P2TR,descI18n:{id:c.ETranslations.p2tr_desc,data:{}}},BIP84:{namePrefix:"BTC Native SegWit",label:"Native SegWit",template:`m/84'/${a.$t}'/${a.h2}'/0/0`,coinType:a.$t,coinName:a.Ly,addressEncoding:r.EAddressEncodings.P2WPKH,descI18n:{id:c.ETranslations.p2sh_p2wpkh_desc,data:{}}},BIP44:{namePrefix:"BTC Legacy",label:"Legacy",template:`m/44'/${a.$t}'/${a.h2}'/0/0`,coinType:a.$t,coinName:a.Ly,addressEncoding:r.EAddressEncodings.P2PKH,descI18n:{id:c.ETranslations.p2pkh_desc,data:{}}}},s={impl:a.PA,coinTypeDefault:a.$t,accountType:d.rX.UTXO,importedAccountEnabled:!0,hardwareAccountEnabled:!0,externalAccountEnabled:!1,watchingAccountEnabled:!0,qrAccountEnabled:!0,publicKeyExportEnabled:!0,supportExportedSecretKeys:[r.ECoreApiExportedSecretKeyType.xprvt,r.ECoreApiExportedSecretKeyType.xpub],isUtxo:!0,isSingleToken:!0,NFTEnabled:!1,nonceRequired:!1,feeUTXORequired:!0,editFeeEnabled:!0,replaceTxEnabled:!1,estimatedFeePollingInterval:120,minTransferAmount:"0.00000546",defaultFeePresetIndex:1,accountDeriveInfo:o,networkInfo:{default:{curve:"secp256k1",addressPrefix:""}},hasFrozenBalance:!0,showAddressType:!0,dappInteractionEnabled:!0,customRpcEnabled:!0,mergeDeriveAssetsEnabled:!0,preCheckDappTxFeeInfoRequired:!0};const i=Object.freeze(s)}}]);