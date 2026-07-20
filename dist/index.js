"use strict";var o=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(l){throw (e=0, l)}};};var i=o(function(S,a){
var t;function u(){var r="";return r+="try {",r+="return this === self;",r+="} catch ( err ) {",r+="return false;",r+="}",new Function(r)()}t=u();a.exports=t
});var s=o(function(y,n){
var f=require('@stdlib/utils-global/dist'),p=require('@stdlib/assert-is-node/dist'),c=require('@stdlib/assert-is-plain-object/dist'),v=i(),b=f();function W(){return p===!1&&typeof WorkerGlobalScope=="object"&&c(WorkerNavigator)&&navigator instanceof WorkerNavigator&&c(WorkerLocation)&&location instanceof WorkerLocation&&typeof self=="object"&&self===b&&v===!0&&typeof importScripts=="function"}n.exports=W
});var g=s(),k=g();module.exports=k;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
