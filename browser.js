// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).IS_WEB_WORKER=r()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function o(e,r,t){var o=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(o=!0,e=e.substr(1)),e=t?e+n(i):n(i)+e,o&&(e="-"+e)),e}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(e){var r,n,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(n=(-c).toString(r),e.precision&&(n=o(n,e.precision,e.padRight)),n="-"+n):(n=c.toString(r),c||e.precision?e.precision&&(n=o(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):i.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var u=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,f=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,y=/\.0$/,b=/\.0*e/,v=/(\..*[^0])0*e/;function w(e){var r,n,o=parseFloat(e.arg);if(!isFinite(o)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);o=e.arg}switch(e.specifier){case"e":case"E":n=o.toExponential(e.precision);break;case"f":case"F":n=o.toFixed(e.precision);break;case"g":case"G":u(o)<1e-4?((r=e.precision)>0&&(r-=1),n=o.toExponential(r)):n=o.toPrecision(e.precision),e.alternate||(n=f.call(n,v,"$1e"),n=f.call(n,b,"e"),n=f.call(n,y,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=f.call(n,p,"e+0$1"),n=f.call(n,g,"e-0$1"),e.alternate&&(n=f.call(n,d,"$1."),n=f.call(n,h,"$1.e")),o>=0&&e.sign&&(n=e.sign+n),n=e.specifier===l.call(e.specifier)?l.call(n):s.call(n)}function m(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var j=String.fromCharCode,_=isNaN,T=Array.isArray;function O(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function E(e){var r,t,n,i,a,u,s,l,f,p,g,d,h;if(!T(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(u="",s=1,l=0;l<e.length;l++)if(n=e[l],"string"==typeof n)u+=n;else{if(r=void 0!==n.precision,!(n=O(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,_(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!_(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,d=n.padRight,h=void 0,(h=g-p.length)<0?p:p=d?p+m(h):m(h)+p)),u+=n.arg||"",s+=1}return u}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function S(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function x(e){var r,t,n,o;for(t=[],o=0,n=k.exec(e);n;)(r=e.slice(o,k.lastIndex-n[0].length)).length&&t.push(r),t.push(S(n)),o=k.lastIndex,n=k.exec(e);return(r=e.slice(o)).length&&t.push(r),t}function A(e){var r,t;if("string"!=typeof e)throw new TypeError(A("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[x(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return E.apply(null,r)}var P,F=Object.prototype,L=F.toString,V=F.__defineGetter__,W=F.__defineSetter__,I=F.__lookupGetter__,R=F.__lookupSetter__;P=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,o,i,a;if("object"!=typeof e||null===e||"[object Array]"===L.call(e))throw new TypeError(A("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===L.call(t))throw new TypeError(A("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(I.call(e,r)||R.call(e,r)?(n=e.__proto__,e.__proto__=F,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&V&&V.call(e,r,t.get),a&&W&&W.call(e,r,t.set),e};var $=P;function C(e,r,t){$(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function N(e){return"boolean"==typeof e}var B="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function M(){return B&&"symbol"==typeof Symbol.toStringTag}var G=Object.prototype.toString;var Z=Object.prototype.hasOwnProperty;function D(e,r){return null!=e&&Z.call(e,r)}var z="function"==typeof Symbol?Symbol:void 0,U="function"==typeof z?z.toStringTag:"";var X=M()?function(e){var r,t,n;if(null==e)return G.call(e);t=e[U],r=D(e,U);try{e[U]=void 0}catch(r){return G.call(e)}return n=G.call(e),r?e[U]=t:delete e[U],n}:function(e){return G.call(e)},K=Boolean,q=Boolean.prototype.toString;var H=M();function J(e){return"object"==typeof e&&(e instanceof K||(H?function(e){try{return q.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===X(e)))}function Q(e){return N(e)||J(e)}C(Q,"isPrimitive",N),C(Q,"isObject",J);var Y="object"==typeof self?self:null,ee="object"==typeof window?window:null,re="object"==typeof globalThis?globalThis:null;function te(e){if(arguments.length){if(!N(e))throw new TypeError(A("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return new Function("return this;")()}if(re)return re;if(Y)return Y;if(ee)return ee;throw new Error("unexpected error. Unable to resolve global object.")}function ne(e){if(e.__esModule)return e;var r=e.default;if("function"==typeof r){var t=function e(){return this instanceof e?Reflect.construct(r,arguments,this.constructor):r.apply(this,arguments)};t.prototype=r.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach((function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})})),t}var oe="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function ie(){throw new Error("setTimeout has not been defined")}function ae(){throw new Error("clearTimeout has not been defined")}var ce=ie,ue=ae;function se(e){if(ce===setTimeout)return setTimeout(e,0);if((ce===ie||!ce)&&setTimeout)return ce=setTimeout,setTimeout(e,0);try{return ce(e,0)}catch(r){try{return ce.call(null,e,0)}catch(r){return ce.call(this,e,0)}}}"function"==typeof oe.setTimeout&&(ce=setTimeout),"function"==typeof oe.clearTimeout&&(ue=clearTimeout);var le,fe=[],pe=!1,ge=-1;function de(){pe&&le&&(pe=!1,le.length?fe=le.concat(fe):ge=-1,fe.length&&he())}function he(){if(!pe){var e=se(de);pe=!0;for(var r=fe.length;r;){for(le=fe,fe=[];++ge<r;)le&&le[ge].run();ge=-1,r=fe.length}le=null,pe=!1,function(e){if(ue===clearTimeout)return clearTimeout(e);if((ue===ae||!ue)&&clearTimeout)return ue=clearTimeout,clearTimeout(e);try{return ue(e)}catch(r){try{return ue.call(null,e)}catch(r){return ue.call(this,e)}}}(e)}}function ye(e){var r=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)r[t-1]=arguments[t];fe.push(new be(e,r)),1!==fe.length||pe||se(he)}function be(e,r){this.fun=e,this.array=r}be.prototype.run=function(){this.fun.apply(null,this.array)};var ve="browser",we="browser",me={},je=[],_e={},Te={},Oe={};function Ee(){}var ke=Ee,Se=Ee,xe=Ee,Ae=Ee,Pe=Ee,Fe=Ee,Le=Ee;function Ve(e){throw new Error("process.binding is not supported")}function We(){return"/"}function Ie(e){throw new Error("process.chdir is not supported")}function Re(){return 0}var $e=oe.performance||{},Ce=$e.now||$e.mozNow||$e.msNow||$e.oNow||$e.webkitNow||function(){return(new Date).getTime()};function Ne(e){var r=.001*Ce.call($e),t=Math.floor(r),n=Math.floor(r%1*1e9);return e&&(t-=e[0],(n-=e[1])<0&&(t--,n+=1e9)),[t,n]}var Be=new Date;function Me(){return(new Date-Be)/1e3}var Ge,Ze={nextTick:ye,title:ve,browser:true,env:me,argv:je,version:"",versions:_e,on:ke,addListener:Se,once:xe,off:Ae,removeListener:Pe,removeAllListeners:Fe,emit:Le,binding:Ve,cwd:We,chdir:Ie,umask:Re,hrtime:Ne,platform:we,release:Te,config:Oe,uptime:Me},De=ne(Object.freeze({__proto__:null,addListener:Se,argv:je,binding:Ve,browser:true,chdir:Ie,config:Oe,cwd:We,default:Ze,emit:Le,env:me,hrtime:Ne,nextTick:ye,off:Ae,on:ke,once:xe,platform:we,release:Te,removeAllListeners:Fe,removeListener:Pe,title:ve,umask:Re,uptime:Me,version:"",versions:_e}));Ge=Array.isArray?Array.isArray:function(e){return"[object Array]"===X(e)};var ze=Ge;var Ue=/./,Xe=te(),Ke=Xe.document&&Xe.document.childNodes,qe=Int8Array;function He(){return/^\s*function\s*([^(]*)/i}var Je=/^\s*function\s*([^(]*)/i;function Qe(e){return null!==e&&"object"==typeof e}C(He,"REGEXP",Je);var Ye=function(e){if("function"!=typeof e)throw new TypeError(A("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!ze(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(Qe);function er(e){var r,t,n,o;if(("Object"===(t=X(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=Je.exec(n.toString()))return r[1]}return Qe(o=e)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}C(Qe,"isObjectLikeArray",Ye);var rr="function"==typeof Ue||"object"==typeof qe||"function"==typeof Ke?function(e){return er(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?er(e).toLowerCase():r};function tr(e){return"function"===rr(e)}var nr,or=Object,ir=Object.getPrototypeOf;nr=tr(Object.getPrototypeOf)?ir:function(e){var r=function(e){return e.__proto__}(e);return r||null===r?r:"[object Function]"===X(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var ar=nr;var cr=Object.prototype;function ur(e){var r;return!!function(e){return"object"==typeof e&&null!==e&&!ze(e)}(e)&&(r=function(e){return null==e?null:(e=or(e),ar(e))}(e),!r||!D(e,"constructor")&&D(r,"constructor")&&tr(r.constructor)&&"[object Function]"===X(r.constructor)&&D(r,"isPrototypeOf")&&tr(r.isPrototypeOf)&&(r===cr||function(e){var r;for(r in e)if(!D(e,r))return!1;return!0}(e)))}function sr(e){return"string"==typeof e}var lr=String.prototype.valueOf;var fr=M();function pr(e){return"object"==typeof e&&(e instanceof String||(fr?function(e){try{return lr.call(e),!0}catch(e){return!1}}(e):"[object String]"===X(e)))}function gr(e){return sr(e)||pr(e)}C(gr,"isPrimitive",sr),C(gr,"isObject",pr);var dr=Object.prototype.toString;var hr=new Function("try {return this === global;} catch ( err ) {return false;}")(),yr=De,br=te(),vr=/node|io\.js/;var wr,mr="object"==typeof oe&&oe===br&&br===br.global&&("[object global]"===X(br)||"[object Object]"===X(br))&&!0===hr&&"object"==typeof yr&&"[object process]"===(wr=yr,dr.call(wr))&&ur(yr.versions)&&sr(yr.versions.node)&&(void 0===yr.release||ur(yr.release)&&sr(yr.release.name)&&vr.test(yr.release.name));var jr=new Function("try {return this === self;} catch ( err ) {return false;}")(),_r=te();return!1===mr&&"object"==typeof WorkerGlobalScope&&ur(WorkerNavigator)&&navigator instanceof WorkerNavigator&&ur(WorkerLocation)&&location instanceof WorkerLocation&&"object"==typeof self&&self===_r&&!0===jr&&"function"==typeof importScripts}));
//# sourceMappingURL=browser.js.map