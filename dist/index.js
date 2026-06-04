"use strict";var o=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var i=o(function(q,a){
var t;function l(){var r="";return r+="try {",r+="return this === self;",r+="} catch ( err ) {",r+="return false;",r+="}",new Function(r)()}t=l();a.exports=t
});var s=o(function(S,n){
var u=require('@stdlib/utils-global/dist'),f=require('@stdlib/assert-is-node/dist'),c=require('@stdlib/assert-is-plain-object/dist'),p=i(),v=u();function b(){return f===!1&&typeof WorkerGlobalScope=="object"&&c(WorkerNavigator)&&navigator instanceof WorkerNavigator&&c(WorkerLocation)&&location instanceof WorkerLocation&&typeof self=="object"&&self===v&&p===!0&&typeof importScripts=="function"}n.exports=b
});var W=s(),g=W();module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
