!function(a,b){"use strict";"function"==typeof define&&define.amd?define(b):"object"==typeof exports?module.exports=b():a.returnExports=b()}(this,function(){function a(a){var b=+a;return b!==b?b=0:0!==b&&b!==1/0&&b!==-(1/0)&&(b=(b>0||-1)*Math.floor(Math.abs(b))),b}function b(a){var b=typeof a;return null===a||"undefined"===b||"boolean"===b||"number"===b||"string"===b}function c(a){var c,d,e;if(b(a))return a;if(d=a.valueOf,o(d)&&(c=d.call(a),b(c)))return c;if(e=a.toString,o(e)&&(c=e.call(a),b(c)))return c;throw new TypeError}var d=Array.prototype,e=Object.prototype,f=Function.prototype,g=String.prototype,h=Number.prototype,i=d.slice,j=d.splice,k=d.push,l=d.unshift,m=f.call,n=e.toString,o=function(a){return"[object Function]"===n.call(a)},p=function(a){return"[object RegExp]"===n.call(a)},q=function(a){return"[object Array]"===n.call(a)},r=function(a){return"[object String]"===n.call(a)},s=function(a){var b=n.call(a),c="[object Arguments]"===b;return c||(c=!q(a)&&null!==a&&"object"==typeof a&&"number"==typeof a.length&&a.length>=0&&o(a.callee)),c},t=function(a){var b,c=Object.defineProperty&&function(){try{return Object.defineProperty({},"x",{}),!0}catch(a){return!1}}();return b=c?function(a,b,c,d){!d&&b in a||Object.defineProperty(a,b,{configurable:!0,enumerable:!1,writable:!0,value:c})}:function(a,b,c,d){!d&&b in a||(a[b]=c)},function(c,d,e){for(var f in d)a.call(d,f)&&b(c,f,d[f],e)}}(e.hasOwnProperty),u={ToObject:function(a){if(null==a)throw new TypeError("can't convert "+a+" to object");return Object(a)},ToUint32:function(a){return a>>>0}},v=function(){};t(f,{bind:function(a){var b=this;if(!o(b))throw new TypeError("Function.prototype.bind called on incompatible "+b);for(var c,d=i.call(arguments,1),e=function(){if(this instanceof c){var e=b.apply(this,d.concat(i.call(arguments)));return Object(e)===e?e:this}return b.apply(a,d.concat(i.call(arguments)))},f=Math.max(0,b.length-d.length),g=[],h=0;f>h;h++)g.push("$"+h);return c=Function("binder","return function ("+g.join(",")+"){ return binder.apply(this, arguments); }")(e),b.prototype&&(v.prototype=b.prototype,c.prototype=new v,v.prototype=null),c}});var w=m.bind(e.hasOwnProperty),x=function(){var a=[1,2],b=a.splice();return 2===a.length&&q(b)&&0===b.length}();t(d,{splice:function(){return 0===arguments.length?[]:j.apply(this,arguments)}},!x);var y=function(){var a={};return d.splice.call(a,0,0,1),1===a.length}();t(d,{splice:function(b,c){if(0===arguments.length)return[];var d=arguments;return this.length=Math.max(a(this.length),0),arguments.length>0&&"number"!=typeof c&&(d=i.call(arguments),d.length<2?d.push(this.length-b):d[1]=a(c)),j.apply(this,d)}},!y);var z=1!==[].unshift(0);t(d,{unshift:function(){return l.apply(this,arguments),this.length}},z),t(Array,{isArray:q});var A=Object("a"),B="a"!==A[0]||!(0 in A),C=function(a){var b=!0,c=!0;return a&&(a.call("foo",function(a,c,d){"object"!=typeof d&&(b=!1)}),a.call([1],function(){"use strict";c="string"==typeof this},"x")),!!a&&b&&c};t(d,{forEach:function(a){var b=u.ToObject(this),c=B&&r(this)?this.split(""):b,d=arguments[1],e=-1,f=c.length>>>0;if(!o(a))throw new TypeError;for(;++e<f;)e in c&&a.call(d,c[e],e,b)}},!C(d.forEach)),t(d,{map:function(a){var b=u.ToObject(this),c=B&&r(this)?this.split(""):b,d=c.length>>>0,e=Array(d),f=arguments[1];if(!o(a))throw new TypeError(a+" is not a function");for(var g=0;d>g;g++)g in c&&(e[g]=a.call(f,c[g],g,b));return e}},!C(d.map)),t(d,{filter:function(a){var b,c=u.ToObject(this),d=B&&r(this)?this.split(""):c,e=d.length>>>0,f=[],g=arguments[1];if(!o(a))throw new TypeError(a+" is not a function");for(var h=0;e>h;h++)h in d&&(b=d[h],a.call(g,b,h,c)&&f.push(b));return f}},!C(d.filter)),t(d,{every:function(a){var b=u.ToObject(this),c=B&&r(this)?this.split(""):b,d=c.length>>>0,e=arguments[1];if(!o(a))throw new TypeError(a+" is not a function");for(var f=0;d>f;f++)if(f in c&&!a.call(e,c[f],f,b))return!1;return!0}},!C(d.every)),t(d,{some:function(a){var b=u.ToObject(this),c=B&&r(this)?this.split(""):b,d=c.length>>>0,e=arguments[1];if(!o(a))throw new TypeError(a+" is not a function");for(var f=0;d>f;f++)if(f in c&&a.call(e,c[f],f,b))return!0;return!1}},!C(d.some));var D=!1;d.reduce&&(D="object"==typeof d.reduce.call("es5",function(a,b,c,d){return d})),t(d,{reduce:function(a){var b=u.ToObject(this),c=B&&r(this)?this.split(""):b,d=c.length>>>0;if(!o(a))throw new TypeError(a+" is not a function");if(!d&&1===arguments.length)throw new TypeError("reduce of empty array with no initial value");var e,f=0;if(arguments.length>=2)e=arguments[1];else for(;;){if(f in c){e=c[f++];break}if(++f>=d)throw new TypeError("reduce of empty array with no initial value")}for(;d>f;f++)f in c&&(e=a.call(void 0,e,c[f],f,b));return e}},!D);var E=!1;d.reduceRight&&(E="object"==typeof d.reduceRight.call("es5",function(a,b,c,d){return d})),t(d,{reduceRight:function(a){var b=u.ToObject(this),c=B&&r(this)?this.split(""):b,d=c.length>>>0;if(!o(a))throw new TypeError(a+" is not a function");if(!d&&1===arguments.length)throw new TypeError("reduceRight of empty array with no initial value");var e,f=d-1;if(arguments.length>=2)e=arguments[1];else for(;;){if(f in c){e=c[f--];break}if(--f<0)throw new TypeError("reduceRight of empty array with no initial value")}if(0>f)return e;do f in c&&(e=a.call(void 0,e,c[f],f,b));while(f--);return e}},!E);var F=Array.prototype.indexOf&&-1!==[0,1].indexOf(1,2);t(d,{indexOf:function(b){var c=B&&r(this)?this.split(""):u.ToObject(this),d=c.length>>>0;if(!d)return-1;var e=0;for(arguments.length>1&&(e=a(arguments[1])),e=e>=0?e:Math.max(0,d+e);d>e;e++)if(e in c&&c[e]===b)return e;return-1}},F);var G=Array.prototype.lastIndexOf&&-1!==[0,1].lastIndexOf(0,-3);t(d,{lastIndexOf:function(b){var c=B&&r(this)?this.split(""):u.ToObject(this),d=c.length>>>0;if(!d)return-1;var e=d-1;for(arguments.length>1&&(e=Math.min(e,a(arguments[1]))),e=e>=0?e:d-Math.abs(e);e>=0;e--)if(e in c&&b===c[e])return e;return-1}},G);var H=!{toString:null}.propertyIsEnumerable("toString"),I=function(){}.propertyIsEnumerable("prototype"),J=!w("x","0"),K=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],L=K.length;t(Object,{keys:function(a){var b=o(a),c=s(a),d=null!==a&&"object"==typeof a,e=d&&r(a);if(!d&&!b&&!c)throw new TypeError("Object.keys called on a non-object");var f=[],g=I&&b;if(e&&J||c)for(var h=0;h<a.length;++h)f.push(String(h));if(!c)for(var i in a)g&&"prototype"===i||!w(a,i)||f.push(String(i));if(H)for(var j=a.constructor,k=j&&j.prototype===a,l=0;L>l;l++){var m=K[l];k&&"constructor"===m||!w(a,m)||f.push(m)}return f}});var M=Object.keys&&function(){return 2===Object.keys(arguments).length}(1,2),N=Object.keys;t(Object,{keys:function(a){return N(s(a)?d.slice.call(a):a)}},!M);var O=-621987552e5,P="-000001",Q=Date.prototype.toISOString&&-1===new Date(O).toISOString().indexOf(P);t(Date.prototype,{toISOString:function(){var a,b,c,d,e;if(!isFinite(this))throw new RangeError("Date.prototype.toISOString called on non-finite value.");for(d=this.getUTCFullYear(),e=this.getUTCMonth(),d+=Math.floor(e/12),e=(e%12+12)%12,a=[e+1,this.getUTCDate(),this.getUTCHours(),this.getUTCMinutes(),this.getUTCSeconds()],d=(0>d?"-":d>9999?"+":"")+("00000"+Math.abs(d)).slice(d>=0&&9999>=d?-4:-6),b=a.length;b--;)c=a[b],10>c&&(a[b]="0"+c);return d+"-"+a.slice(0,2).join("-")+"T"+a.slice(2).join(":")+"."+("000"+this.getUTCMilliseconds()).slice(-3)+"Z"}},Q);var R=!1;try{R=Date.prototype.toJSON&&null===new Date(0/0).toJSON()&&-1!==new Date(O).toJSON().indexOf(P)&&Date.prototype.toJSON.call({toISOString:function(){return!0}})}catch(S){}R||(Date.prototype.toJSON=function(){var a,b=Object(this),d=c(b);if("number"==typeof d&&!isFinite(d))return null;if(a=b.toISOString,"function"!=typeof a)throw new TypeError("toISOString property is not callable");return a.call(b)});var T=1e15===Date.parse("+033658-09-27T01:46:40.000Z"),U=!isNaN(Date.parse("2012-04-04T24:00:00.500Z"))||!isNaN(Date.parse("2012-11-31T23:59:59.000Z")),V=isNaN(Date.parse("2000-01-01T00:00:00.000Z"));(!Date.parse||V||U||!T)&&(Date=function(a){function b(c,d,e,f,g,h,i){var j=arguments.length;if(this instanceof a){var k=1===j&&String(c)===c?new a(b.parse(c)):j>=7?new a(c,d,e,f,g,h,i):j>=6?new a(c,d,e,f,g,h):j>=5?new a(c,d,e,f,g):j>=4?new a(c,d,e,f):j>=3?new a(c,d,e):j>=2?new a(c,d):j>=1?new a(c):new a;return k.constructor=b,k}return a.apply(this,arguments)}function c(a,b){var c=b>1?1:0;return f[b]+Math.floor((a-1969+c)/4)-Math.floor((a-1901+c)/100)+Math.floor((a-1601+c)/400)+365*(a-1970)}function d(b){return Number(new a(1970,0,1,0,0,0,b))}var e=new RegExp("^(\\d{4}|[+-]\\d{6})(?:-(\\d{2})(?:-(\\d{2})(?:T(\\d{2}):(\\d{2})(?::(\\d{2})(?:(\\.\\d{1,}))?)?(Z|(?:([-+])(\\d{2}):(\\d{2})))?)?)?)?$"),f=[0,31,59,90,120,151,181,212,243,273,304,334,365];for(var g in a)b[g]=a[g];return b.now=a.now,b.UTC=a.UTC,b.prototype=a.prototype,b.prototype.constructor=b,b.parse=function(b){var f=e.exec(b);if(f){var g,h=Number(f[1]),i=Number(f[2]||1)-1,j=Number(f[3]||1)-1,k=Number(f[4]||0),l=Number(f[5]||0),m=Number(f[6]||0),n=Math.floor(1e3*Number(f[7]||0)),o=Boolean(f[4]&&!f[8]),p="-"===f[9]?1:-1,q=Number(f[10]||0),r=Number(f[11]||0);return(l>0||m>0||n>0?24:25)>k&&60>l&&60>m&&1e3>n&&i>-1&&12>i&&24>q&&60>r&&j>-1&&j<c(h,i+1)-c(h,i)&&(g=60*(24*(c(h,i)+j)+k+q*p),g=1e3*(60*(g+l+r*p)+m)+n,o&&(g=d(g)),g>=-864e13&&864e13>=g)?g:0/0}return a.parse.apply(this,arguments)},b}(Date)),Date.now||(Date.now=function(){return(new Date).getTime()});var W=h.toFixed&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==0xde0b6b3a7640080.toFixed(0)),X={base:1e7,size:6,data:[0,0,0,0,0,0],multiply:function(a,b){for(var c=-1;++c<X.size;)b+=a*X.data[c],X.data[c]=b%X.base,b=Math.floor(b/X.base)},divide:function(a){for(var b=X.size,c=0;--b>=0;)c+=X.data[b],X.data[b]=Math.floor(c/a),c=c%a*X.base},numToString:function(){for(var a=X.size,b="";--a>=0;)if(""!==b||0===a||0!==X.data[a]){var c=String(X.data[a]);""===b?b=c:b+="0000000".slice(0,7-c.length)+c}return b},pow:function hb(a,b,c){return 0===b?c:b%2===1?hb(a,b-1,c*a):hb(a*a,b/2,c)},log:function(a){for(var b=0;a>=4096;)b+=12,a/=4096;for(;a>=2;)b+=1,a/=2;return b}};t(h,{toFixed:function(a){var b,c,d,e,f,g,h,i;if(b=Number(a),b=b!==b?0:Math.floor(b),0>b||b>20)throw new RangeError("Number.toFixed called with invalid number of decimals");if(c=Number(this),c!==c)return"NaN";if(-1e21>=c||c>=1e21)return String(c);if(d="",0>c&&(d="-",c=-c),e="0",c>1e-21)if(f=X.log(c*X.pow(2,69,1))-69,g=0>f?c*X.pow(2,-f,1):c/X.pow(2,f,1),g*=4503599627370496,f=52-f,f>0){for(X.multiply(0,g),h=b;h>=7;)X.multiply(1e7,0),h-=7;for(X.multiply(X.pow(10,h,1),0),h=f-1;h>=23;)X.divide(1<<23),h-=23;X.divide(1<<h),X.multiply(1,1),X.divide(2),e=X.numToString()}else X.multiply(0,g),X.multiply(1<<-f,0),e=X.numToString()+"0.00000000000000000000".slice(2,2+b);return b>0?(i=e.length,e=b>=i?d+"0.0000000000000000000".slice(0,b-i+2)+e:d+e.slice(0,i-b)+"."+e.slice(i-b)):e=d+e,e}},W);var Y=g.split;2!=="ab".split(/(?:ab)*/).length||4!==".".split(/(.?)(.?)/).length||"t"==="tesst".split(/(s)*/)[1]||4!=="test".split(/(?:)/,-1).length||"".split(/.?/).length||".".split(/()()/).length>1?!function(){var a="undefined"==typeof/()??/.exec("")[1];g.split=function(b,c){var d=this;if("undefined"==typeof b&&0===c)return[];if("[object RegExp]"!==n.call(b))return Y.call(this,b,c);var e,f,g,h,i=[],j=(b.ignoreCase?"i":"")+(b.multiline?"m":"")+(b.extended?"x":"")+(b.sticky?"y":""),l=0;for(b=new RegExp(b.source,j+"g"),d+="",a||(e=new RegExp("^"+b.source+"$(?!\\s)",j)),c="undefined"==typeof c?-1>>>0:u.ToUint32(c),f=b.exec(d);f&&(g=f.index+f[0].length,!(g>l&&(i.push(d.slice(l,f.index)),!a&&f.length>1&&f[0].replace(e,function(){for(var a=1;a<arguments.length-2;a++)"undefined"==typeof arguments[a]&&(f[a]=void 0)}),f.length>1&&f.index<d.length&&k.apply(i,f.slice(1)),h=f[0].length,l=g,i.length>=c)));)b.lastIndex===f.index&&b.lastIndex++,f=b.exec(d);return l===d.length?(h||!b.test(""))&&i.push(""):i.push(d.slice(l)),i.length>c?i.slice(0,c):i}}():"0".split(void 0,0).length&&(g.split=function(a,b){return"undefined"==typeof a&&0===b?[]:Y.call(this,a,b)});var Z=g.replace,$=function(){var a=[];return"x".replace(/x(.)?/g,function(b,c){a.push(c)}),1===a.length&&"undefined"==typeof a[0]}();$||(g.replace=function(a,b){var c=o(b),d=p(a)&&/\)[*?]/.test(a.source);if(c&&d){var e=function(c){var d=arguments.length,e=a.lastIndex;a.lastIndex=0;var f=a.exec(c)||[];return a.lastIndex=e,f.push(arguments[d-2],arguments[d-1]),b.apply(this,f)};return Z.call(this,a,e)}return Z.call(this,a,b)});var _=g.substr,ab="".substr&&"b"!=="0b".substr(-1);t(g,{substr:function(a,b){return _.call(this,0>a&&(a=this.length+a)<0?0:a,b)}},ab);var bb="	\n\f\r   ᠎             　\u2028\u2029﻿",cb="​",db="["+bb+"]",eb=new RegExp("^"+db+db+"*"),fb=new RegExp(db+db+"*$"),gb=g.trim&&(bb.trim()||!cb.trim());t(g,{trim:function(){if("undefined"==typeof this||null===this)throw new TypeError("can't convert "+this+" to object");return String(this).replace(eb,"").replace(fb,"")}},gb),(8!==parseInt(bb+"08")||22!==parseInt(bb+"0x16"))&&(parseInt=function(a){var b=/^0[xX]/;return function(c,d){return c=String(c).trim(),Number(d)||(d=b.test(c)?16:10),a(c,d)}}(parseInt))});