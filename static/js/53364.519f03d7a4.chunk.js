"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[53364,15882],{215882:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var r=n(404727),a=n(928557),c=n(254491),d=n(746661),o={default:{namePrefix:"BTC Nested SegWit",label:"Nested SegWit",template:`m/49'/${a.$t}'/${a.h2}'/0/0`,coinType:a.$t,coinName:a.Ly,addressEncoding:r.EAddressEncodings.P2SH_P2WPKH,descI18n:{id:c.ETranslations.p2wpkh_desc,data:{}}},BIP86:{namePrefix:"BTC Taproot",label:"Taproot",template:`m/86'/${a.$t}'/${a.h2}'/0/0`,coinType:a.$t,coinName:a.Ly,addressEncoding:r.EAddressEncodings.P2TR,descI18n:{id:c.ETranslations.p2tr_desc,data:{}}},BIP84:{namePrefix:"BTC Native SegWit",label:"Native SegWit",template:`m/84'/${a.$t}'/${a.h2}'/0/0`,coinType:a.$t,coinName:a.Ly,addressEncoding:r.EAddressEncodings.P2WPKH,descI18n:{id:c.ETranslations.p2sh_p2wpkh_desc,data:{}}},BIP44:{namePrefix:"BTC Legacy",label:"Legacy",template:`m/44'/${a.$t}'/${a.h2}'/0/0`,coinType:a.$t,coinName:a.Ly,addressEncoding:r.EAddressEncodings.P2PKH,descI18n:{id:c.ETranslations.p2pkh_desc,data:{}}}},s={impl:a.PA,coinTypeDefault:a.$t,accountType:d.rX.UTXO,importedAccountEnabled:!0,hardwareAccountEnabled:!0,externalAccountEnabled:!1,watchingAccountEnabled:!0,qrAccountEnabled:!0,publicKeyExportEnabled:!0,supportExportedSecretKeys:[r.ECoreApiExportedSecretKeyType.xprvt,r.ECoreApiExportedSecretKeyType.xpub],isUtxo:!0,isSingleToken:!0,NFTEnabled:!1,nonceRequired:!1,feeUTXORequired:!0,editFeeEnabled:!0,replaceTxEnabled:!1,estimatedFeePollingInterval:120,minTransferAmount:"0.00000546",defaultFeePresetIndex:1,accountDeriveInfo:o,networkInfo:{default:{curve:"secp256k1",addressPrefix:""}},hasFrozenBalance:!0,showAddressType:!0,dappInteractionEnabled:!0,customRpcEnabled:!0,mergeDeriveAssetsEnabled:!0,preCheckDappTxFeeInfoRequired:!0};const i=Object.freeze(s)},53364:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var r=n(324586),a=n(404727),c=n(928557),d=n(215882);function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach((function(t){(0,r.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var o={default:{namePrefix:"DOGE",label:"Legacy",template:`m/44'/${c.GW}'/${c.h2}'/0/0`,coinType:c.GW,coinName:c.xe,addressEncoding:a.EAddressEncodings.P2PKH,desc:"BIP44, P2PKH, Base58."}},s=_objectSpread(_objectSpread({},d.default),{},{accountDeriveInfo:o,impl:c.FG,coinTypeDefault:c.GW,minTransferAmount:"0.01",utxoDustAmount:"0.0099999",hasFrozenBalance:!1,showAddressType:!1,estimatedFeePollingInterval:60,dappInteractionEnabled:!1,mergeDeriveAssetsEnabled:!1,qrAccountEnabled:!1});const i=Object.freeze(s)}}]);