// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).IS_WEB_WORKER=e()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,r=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,c=n.__lookupGetter__,f=n.__lookupSetter__;e=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,e,r){var a,l,s,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((l="value"in r)&&(c.call(t,e)||f.call(t,e)?(a=t.__proto__,t.__proto__=n,delete t[e],t[e]=r.value,t.__proto__=a):t[e]=r.value),s="get"in r,p="set"in r,l&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&i&&i.call(t,e,r.get),p&&u&&u.call(t,e,r.set),t};var a=e;function l(t,e,r){a(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function s(t){return"boolean"==typeof t}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return p&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;function d(t,e){return null!=t&&v.call(t,e)}var m="function"==typeof Symbol?Symbol.toStringTag:"";var h=y()?function(t){var e,r,n;if(null==t)return b.call(t);r=t[m],e=d(t,m);try{t[m]=void 0}catch(e){return b.call(t)}return n=b.call(t),e?t[m]=r:delete t[m],n}:function(t){return b.call(t)},g=Boolean.prototype.toString;var w=y();function j(t){return"object"==typeof t&&(t instanceof Boolean||(w?function(t){try{return g.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===h(t)))}function _(t){return s(t)||j(t)}function T(){return new Function("return this;")()}l(_,"isPrimitive",s),l(_,"isObject",j);var O="object"==typeof self?self:null,S="object"==typeof window?window:null,E="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},P="object"==typeof E?E:null;function k(t){if(arguments.length){if(!s(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return T()}if(O)return O;if(S)return S;if(P)return P;throw new Error("unexpected error. Unable to resolve global object.")}function A(){throw new Error("setTimeout has not been defined")}function B(){throw new Error("clearTimeout has not been defined")}var L=A,N=B;function W(t){if(L===setTimeout)return setTimeout(t,0);if((L===A||!L)&&setTimeout)return L=setTimeout,setTimeout(t,0);try{return L(t,0)}catch(e){try{return L.call(null,t,0)}catch(e){return L.call(this,t,0)}}}"function"==typeof E.setTimeout&&(L=setTimeout),"function"==typeof E.clearTimeout&&(N=clearTimeout);var x,F=[],G=!1,M=-1;function V(){G&&x&&(G=!1,x.length?F=x.concat(F):M=-1,F.length&&C())}function C(){if(!G){var t=W(V);G=!0;for(var e=F.length;e;){for(x=F,F=[];++M<e;)x&&x[M].run();M=-1,e=F.length}x=null,G=!1,function(t){if(N===clearTimeout)return clearTimeout(t);if((N===B||!N)&&clearTimeout)return N=clearTimeout,clearTimeout(t);try{N(t)}catch(e){try{return N.call(null,t)}catch(e){return N.call(this,t)}}}(t)}}function D(t,e){this.fun=t,this.array=e}D.prototype.run=function(){this.fun.apply(null,this.array)};function R(){}var I=R,q=R,z=R,K=R,U=R,X=R,H=R;var J=E.performance||{},Q=J.now||J.mozNow||J.msNow||J.oNow||J.webkitNow||function(){return(new Date).getTime()};var Y=new Date;var Z,$={nextTick:function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];F.push(new D(t,e)),1!==F.length||G||W(C)},title:"browser",browser:!0,env:{},argv:[],version:"",versions:{},on:I,addListener:q,once:z,off:K,removeListener:U,removeAllListeners:X,emit:H,binding:function(t){throw new Error("process.binding is not supported")},cwd:function(){return"/"},chdir:function(t){throw new Error("process.chdir is not supported")},umask:function(){return 0},hrtime:function(t){var e=.001*Q.call(J),r=Math.floor(e),n=Math.floor(e%1*1e9);return t&&(r-=t[0],(n-=t[1])<0&&(r--,n+=1e9)),[r,n]},platform:"browser",release:{},config:{},uptime:function(){return(new Date-Y)/1e3}};Z=Array.isArray?Array.isArray:function(t){return"[object Array]"===h(t)};var tt=Z;var et=/./,rt=k(),nt=rt.document&&rt.document.childNodes,ot=Int8Array;function it(){return/^\s*function\s*([^(]*)/i}var ut=/^\s*function\s*([^(]*)/i;function ct(t){return null!==t&&"object"==typeof t}l(it,"REGEXP",ut);var ft=function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!tt(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(ct);function at(t){var e,r,n,o;if(("Object"===(r=h(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=ut.exec(n.toString()))return e[1]}return ct(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}l(ct,"isObjectLikeArray",ft);var lt="function"==typeof et||"object"==typeof ot||"function"==typeof nt?function(t){return at(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?at(t).toLowerCase():e};function st(t){return"function"===lt(t)}var pt,yt=Object.getPrototypeOf;pt=st(Object.getPrototypeOf)?yt:function(t){var e=function(t){return t.__proto__}(t);return e||null===e?e:"[object Function]"===h(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var bt=pt;var vt=Object.prototype;function dt(t){var e;return!!function(t){return"object"==typeof t&&null!==t&&!tt(t)}(t)&&(e=function(t){return null==t?null:(t=Object(t),bt(t))}(t),!e||!d(t,"constructor")&&d(e,"constructor")&&st(e.constructor)&&"[object Function]"===h(e.constructor)&&d(e,"isPrototypeOf")&&st(e.isPrototypeOf)&&(e===vt||function(t){var e;for(e in t)if(!d(t,e))return!1;return!0}(t)))}function mt(t){return"string"==typeof t}var ht=String.prototype.valueOf;var gt=y();function wt(t){return"object"==typeof t&&(t instanceof String||(gt?function(t){try{return ht.call(t),!0}catch(t){return!1}}(t):"[object String]"===h(t)))}function jt(t){return mt(t)||wt(t)}l(jt,"isPrimitive",mt),l(jt,"isObject",wt);var _t=Object.prototype.toString;var Tt=new Function("try {return this === global;} catch ( err ) {return false;}")(),Ot=k(),St=/node|io\.js/;var Et,Pt="object"==typeof E&&E===Ot&&Ot===Ot.global&&("[object global]"===h(Ot)||"[object Object]"===h(Ot))&&!0===Tt&&"function"==typeof require&&"object"==typeof $&&"[object process]"===(Et=$,_t.call(Et))&&dt($.versions)&&mt($.versions.node)&&(void 0===$.release||dt($.release)&&mt($.release.name)&&St.test($.release.name));var kt=new Function("try {return this === self;} catch ( err ) {return false;}")(),At=k();return!1===Pt&&"object"==typeof WorkerGlobalScope&&dt(WorkerNavigator)&&navigator instanceof WorkerNavigator&&dt(WorkerLocation)&&location instanceof WorkerLocation&&"object"==typeof self&&self===At&&!0===kt&&"function"==typeof importScripts}));
//# sourceMappingURL=browser.js.map
