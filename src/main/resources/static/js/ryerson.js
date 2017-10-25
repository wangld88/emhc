/*! jQuery v1.7.1 jquery.com | jquery.org/license */
(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1
}function cv(a){if(!ck[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");
d.remove();
if(e==="none"||e===""){cl||(cl=c.createElement("iframe"),cl.frameBorder=cl.width=cl.height=0),b.appendChild(cl);
if(!cm||!cl.createElement){cm=(cl.contentWindow||cl.contentDocument).document,cm.write((c.compatMode==="CSS1Compat"?"<!doctype html>":"")+"<html><body>"),cm.close()
}d=cm.createElement(a),cm.body.appendChild(d),e=f.css(d,"display"),b.removeChild(cl)
}ck[a]=e
}return ck[a]
}function cu(a,b){var c={};
f.each(cq.concat.apply([],cq.slice(0,b)),function(){c[this]=a
});
return c
}function ct(){cr=b
}function cs(){setTimeout(ct,0);
return cr=f.now()
}function cj(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")
}catch(b){}}function ci(){try{return new a.XMLHttpRequest
}catch(b){}}function cc(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));
var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;
for(g=1;
g<i;
g++){if(g===1){for(h in a.converters){typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h])
}}l=k,k=d[g];
if(k==="*"){k=l
}else{if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];
if(!n){p=b;
for(o in e){j=o.split(" ");
if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];
if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);
break
}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))
}}}return c
}function cb(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;
for(i in g){i in d&&(c[g[i]]=d[i])
}while(f[0]==="*"){f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"))
}if(h){for(i in e){if(e[i]&&e[i].test(h)){f.unshift(i);
break
}}}if(f[0] in d){j=f[0]
}else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;
break
}k||(k=i)
}j=j||k
}if(j){j!==f[0]&&f.unshift(j);
return d[j]
}}function ca(a,b,c,d){if(f.isArray(b)){f.each(b,function(b,e){c||bE.test(a)?d(a,e):ca(a+"["+(typeof e=="object"||f.isArray(e)?b:"")+"]",e,c,d)
})
}else{if(!c&&b!=null&&typeof b=="object"){for(var e in b){ca(a+"["+e+"]",b[e],c,d)
}}else{d(a,b)
}}}function b_(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};
for(d in c){c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d])
}e&&f.extend(!0,a,e)
}function b$(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;
var h=a[f],i=0,j=h?h.length:0,k=a===bT,l;
for(;
i<j&&(k||!l);
i++){l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=b$(a,c,d,e,l,g)))
}(k||!l)&&!g["*"]&&(l=b$(a,c,d,e,"*",g));
return l
}function bZ(a){return function(b,c){typeof b!="string"&&(c=b,b="*");
if(f.isFunction(c)){var d=b.toLowerCase().split(bP),e=0,g=d.length,h,i,j;
for(;
e<g;
e++){h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)
}}}
}function bC(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?bx:by,g=0,h=e.length;
if(d>0){if(c!=="border"){for(;
g<h;
g++){c||(d-=parseFloat(f.css(a,"padding"+e[g]))||0),c==="margin"?d+=parseFloat(f.css(a,c+e[g]))||0:d-=parseFloat(f.css(a,"border"+e[g]+"Width"))||0
}}return d+"px"
}d=bz(a,b,b);
if(d<0||d==null){d=a.style[b]||0
}d=parseFloat(d)||0;
if(c){for(;
g<h;
g++){d+=parseFloat(f.css(a,"padding"+e[g]))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+e[g]+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+e[g]))||0)
}}return d+"px"
}function bp(a,b){b.src?f.ajax({url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)
}function bo(a){var b=c.createElement("div");
bh.appendChild(b),b.innerHTML=a.outerHTML;
return b.firstChild
}function bn(a){var b=(a.nodeName||"").toLowerCase();
b==="input"?bm(a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),bm)
}function bm(a){if(a.type==="checkbox"||a.type==="radio"){a.defaultChecked=a.checked
}}function bl(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]
}function bk(a,b){var c;
if(b.nodeType===1){b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase();
if(c==="object"){b.outerHTML=a.outerHTML
}else{if(c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){if(c==="option"){b.selected=a.defaultSelected
}else{if(c==="input"||c==="textarea"){b.defaultValue=a.defaultValue
}}}else{a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value)
}}b.removeAttribute(f.expando)
}}function bj(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;
if(i){delete h.handle,h.events={};
for(c in i){for(d=0,e=i[c].length;
d<e;
d++){f.event.add(b,c+(i[c][d].namespace?".":"")+i[c][d].namespace,i[c][d],i[c][d].data)
}}}h.data&&(h.data=f.extend({},h.data))
}}function bi(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a
}function U(a){var b=V.split("|"),c=a.createDocumentFragment();
if(c.createElement){while(b.length){c.createElement(b.pop())
}}return c
}function T(a,b,c){b=b||0;
if(f.isFunction(b)){return f.grep(a,function(a,d){var e=!!b.call(a,d,a);
return e===c
})
}if(b.nodeType){return f.grep(a,function(a,d){return a===b===c
})
}if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1
});
if(O.test(b)){return f.filter(b,d,!c)
}b=f.filter(b,d)
}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c
})
}function S(a){return !a||!a.parentNode||a.parentNode.nodeType===11
}function K(){return !0
}function J(){return !1
}function n(a,b,c){var d=b+"defer",e=b+"queue",g=b+"mark",h=f._data(a,d);
h&&(c==="queue"||!f._data(a,e))&&(c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data(a,g)&&(f.removeData(a,d,!0),h.fire())
},0)
}function m(a){for(var b in a){if(b==="data"&&f.isEmptyObject(a[b])){continue
}if(b!=="toJSON"){return !1
}}return !0
}function l(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(k,"-$1").toLowerCase();
d=a.getAttribute(e);
if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNumeric(d)?parseFloat(d):j.test(d)?f.parseJSON(d):d
}catch(g){}f.data(a,c,d)
}else{d=b
}}return d
}function h(a){var b=g[a]={},c,d;
a=a.split(/\s+/);
for(c=0,d=a.length;
c<d;
c++){b[a[c]]=!0
}return b
}var c=a.document,d=a.navigator,e=a.location,f=function(){function J(){if(!e.isReady){try{c.documentElement.doScroll("left")
}catch(a){setTimeout(J,1);
return
}e.ready()
}}var e=function(a,b){return new e.fn.init(a,b,h)
},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/,x=function(a,b){return(b+"").toUpperCase()
},y=d.userAgent,z,A,B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,G=String.prototype.trim,H=Array.prototype.indexOf,I={};
e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;
if(!a){return this
}if(a.nodeType){this.context=this[0]=a,this.length=1;
return this
}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;
return this
}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];
if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=m.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);
return e.merge(this,a)
}h=c.getElementById(g[2]);
if(h&&h.parentNode){if(h.id!==g[2]){return f.find(a)
}this.length=1,this[0]=h
}this.context=c,this.selector=a;
return this
}return !d||d.jquery?(d||f).find(a):this.constructor(d).find(a)
}if(e.isFunction(a)){return f.ready(a)
}a.selector!==b&&(this.selector=a.selector,this.context=a.context);
return e.makeArray(a,this)
},selector:"",jquery:"1.7.1",length:0,size:function(){return this.length
},toArray:function(){return F.call(this,0)
},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]
},pushStack:function(a,b,c){var d=this.constructor();
e.isArray(a)?E.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");
return d
},each:function(a,b){return e.each(this,a,b)
},ready:function(a){e.bindReady(),A.add(a);
return this
},eq:function(a){a=+a;
return a===-1?this.slice(a):this.slice(a,a+1)
},first:function(){return this.eq(0)
},last:function(){return this.eq(-1)
},slice:function(){return this.pushStack(F.apply(this,arguments),"slice",F.call(arguments).join(","))
},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)
}))
},end:function(){return this.prevObject||this.constructor(null)
},push:E,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;
typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);
for(;
j<k;
j++){if((a=arguments[j])!=null){for(c in a){d=i[c],f=a[c];
if(i===f){continue
}l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)
}}}return i
},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);
return e
},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)
},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body){return setTimeout(e.ready,1)
}e.isReady=!0;
if(a!==!0&&--e.readyWait>0){return
}A.fireWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").off("ready")
}},bindReady:function(){if(!A){A=e.Callbacks("once memory");
if(c.readyState==="complete"){return setTimeout(e.ready,1)
}if(c.addEventListener){c.addEventListener("DOMContentLoaded",B,!1),a.addEventListener("load",e.ready,!1)
}else{if(c.attachEvent){c.attachEvent("onreadystatechange",B),a.attachEvent("onload",e.ready);
var b=!1;
try{b=a.frameElement==null
}catch(d){}c.documentElement.doScroll&&b&&J()
}}}},isFunction:function(a){return e.type(a)==="function"
},isArray:Array.isArray||function(a){return e.type(a)==="array"
},isWindow:function(a){return a&&typeof a=="object"&&"setInterval" in a
},isNumeric:function(a){return !isNaN(parseFloat(a))&&isFinite(a)
},type:function(a){return a==null?String(a):I[C.call(a)]||"object"
},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a)){return !1
}try{if(a.constructor&&!D.call(a,"constructor")&&!D.call(a.constructor.prototype,"isPrototypeOf")){return !1
}}catch(c){return !1
}var d;
for(d in a){}return d===b||D.call(a,d)
},isEmptyObject:function(a){for(var b in a){return !1
}return !0
},error:function(a){throw new Error(a)
},parseJSON:function(b){if(typeof b!="string"||!b){return null
}b=e.trim(b);
if(a.JSON&&a.JSON.parse){return a.JSON.parse(b)
}if(n.test(b.replace(o,"@").replace(p,"]").replace(q,""))){return(new Function("return "+b))()
}e.error("Invalid JSON: "+b)
},parseXML:function(c){var d,f;
try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))
}catch(g){d=b
}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);
return d
},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)
})(b)
},camelCase:function(a){return a.replace(w,"ms-").replace(v,x)
},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()
},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);
if(d){if(i){for(f in a){if(c.apply(a[f],d)===!1){break
}}}else{for(;
g<h;
){if(c.apply(a[g++],d)===!1){break
}}}}else{if(i){for(f in a){if(c.call(a[f],f,a[f])===!1){break
}}}else{for(;
g<h;
){if(c.call(a[g],g,a[g++])===!1){break
}}}}return a
},trim:G?function(a){return a==null?"":G.call(a)
}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")
},makeArray:function(a,b){var c=b||[];
if(a!=null){var d=e.type(a);
a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?E.call(c,a):e.merge(c,a)
}return c
},inArray:function(a,b,c){var d;
if(b){if(H){return H.call(b,a,c)
}d=b.length,c=c?c<0?Math.max(0,d+c):c:0;
for(;
c<d;
c++){if(c in b&&b[c]===a){return c
}}}return -1
},merge:function(a,c){var d=a.length,e=0;
if(typeof c.length=="number"){for(var f=c.length;
e<f;
e++){a[d++]=c[e]
}}else{while(c[e]!==b){a[d++]=c[e++]
}}a.length=d;
return a
},grep:function(a,b,c){var d=[],e;
c=!!c;
for(var f=0,g=a.length;
f<g;
f++){e=!!b(a[f],f),c!==e&&d.push(a[f])
}return d
},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));
if(k){for(;
i<j;
i++){f=c(a[i],i,d),f!=null&&(h[h.length]=f)
}}else{for(g in a){f=c(a[g],g,d),f!=null&&(h[h.length]=f)
}}return h.concat.apply([],h)
},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];
c=a,a=d
}if(!e.isFunction(a)){return b
}var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments)))
};
g.guid=a.guid=a.guid||g.guid||e.guid++;
return g
},access:function(a,c,d,f,g,h){var i=a.length;
if(typeof c=="object"){for(var j in c){e.access(a,j,c[j],f,g,d)
}return a
}if(d!==b){f=!h&&f&&e.isFunction(d);
for(var k=0;
k<i;
k++){g(a[k],c,f?d.call(a[k],k,g(a[k],c)):d,h)
}return a
}return i?g(a[0],c):b
},now:function(){return(new Date).getTime()
},uaMatch:function(a){a=a.toLowerCase();
var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];
return{browser:b[1]||"",version:b[2]||"0"}
},sub:function(){function a(b,c){return new a.fn.init(b,c)
}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));
return e.fn.init.call(this,d,f,b)
},a.fn.init.prototype=a.fn;
var b=a(c);
return a
},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){I["[object "+b+"]"]=b.toLowerCase()
}),z=e.uaMatch(y),z.browser&&(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser.webkit&&(e.browser.safari=!0),j.test("Ã‚ ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?B=function(){c.removeEventListener("DOMContentLoaded",B,!1),e.ready()
}:c.attachEvent&&(B=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",B),e.ready())
});
return e
}(),g={};
f.Callbacks=function(a){a=a?g[a]||h(a):{};
var c=[],d=[],e,i,j,k,l,m=function(b){var d,e,g,h,i;
for(d=0,e=b.length;
d<e;
d++){g=b[d],h=f.type(g),h==="array"?m(g):h==="function"&&(!a.unique||!o.has(g))&&c.push(g)
}},n=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,l=j||0,j=0,k=c.length;
for(;
c&&l<k;
l++){if(c[l].apply(b,f)===!1&&a.stopOnFalse){e=!0;
break
}}i=!1,c&&(a.once?e===!0?o.disable():c=[]:d&&d.length&&(e=d.shift(),o.fireWith(e[0],e[1])))
},o={add:function(){if(c){var a=c.length;
m(arguments),i?k=c.length:e&&e!==!0&&(j=a,n(e[0],e[1]))
}return this
},remove:function(){if(c){var b=arguments,d=0,e=b.length;
for(;
d<e;
d++){for(var f=0;
f<c.length;
f++){if(b[d]===c[f]){i&&f<=k&&(k--,f<=l&&l--),c.splice(f--,1);
if(a.unique){break
}}}}}return this
},has:function(a){if(c){var b=0,d=c.length;
for(;
b<d;
b++){if(a===c[b]){return !0
}}}return !1
},empty:function(){c=[];
return this
},disable:function(){c=d=e=b;
return this
},disabled:function(){return !c
},lock:function(){d=b,(!e||e===!0)&&o.disable();
return this
},locked:function(){return !d
},fireWith:function(b,c){d&&(i?a.once||d.push([b,c]):(!a.once||!e)&&n(b,c));
return this
},fire:function(){o.fireWith(this,arguments);
return this
},fired:function(){return !!e
}};
return o
};
var i=[].slice;
f.extend({Deferred:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e
},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);
return this
},always:function(){i.done.apply(i,arguments).fail.apply(i,arguments);
return this
},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],e=b[1],g;
f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+"With"](this===i?d:this,[g])
}):i[a](d[e])
})
}).promise()
},promise:function(a){if(a==null){a=h
}else{for(var b in h){a[b]=h[b]
}}return a
}},i=h.promise({}),j;
for(j in g){i[j]=g[j].fire,i[j+"With"]=g[j].fireWith
}i.done(function(){e="resolved"
},c.disable,d.lock).fail(function(){e="rejected"
},b.disable,d.lock),a&&a.call(i,i);
return i
},when:function(a){function m(a){return function(b){e[a]=arguments.length>1?i.call(arguments,0):b,j.notifyWith(k,e)
}
}function l(a){return function(c){b[a]=arguments.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)
}
}var b=i.call(arguments,0),c=0,d=b.length,e=Array(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();
if(d>1){for(;
c<d;
c++){b[c]&&b[c].promise&&f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g
}g||j.resolveWith(j,b)
}else{j!==a&&j.resolveWith(j,d?[a]:[])
}return k
}}),f.support=function(){var b,d,e,g,h,i,j,k,l,m,n,o,p,q=c.createElement("div"),r=c.documentElement;
q.setAttribute("className","t"),q.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=q.getElementsByTagName("*"),e=q.getElementsByTagName("a")[0];
if(!d||!d.length||!e){return{}
}g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=q.getElementsByTagName("input")[0],b={leadingWhitespace:q.firstChild.nodeType===3,tbody:!q.getElementsByTagName("tbody").length,htmlSerialize:!!q.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:q.className!=="t",enctype:!!c.createElement("form").enctype,html5Clone:c.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0},i.checked=!0,b.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,b.optDisabled=!h.disabled;
try{delete q.test
}catch(s){b.deleteExpando=!1
}!q.addEventListener&&q.attachEvent&&q.fireEvent&&(q.attachEvent("onclick",function(){b.noCloneEvent=!1
}),q.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),b.radioValue=i.value==="t",i.setAttribute("checked","checked"),q.appendChild(i),k=c.createDocumentFragment(),k.appendChild(q.lastChild),b.checkClone=k.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=i.checked,k.removeChild(i),k.appendChild(q),q.innerHTML="",a.getComputedStyle&&(j=c.createElement("div"),j.style.width="0",j.style.marginRight="0",q.style.width="2px",q.appendChild(j),b.reliableMarginRight=(parseInt((a.getComputedStyle(j,null)||{marginRight:0}).marginRight,10)||0)===0);
if(q.attachEvent){for(o in {submit:1,change:1,focusin:1}){n="on"+o,p=n in q,p||(q.setAttribute(n,"return;"),p=typeof q[n]=="function"),b[o+"Bubbles"]=p
}}k.removeChild(q),k=g=h=j=q=i=null,f(function(){var a,d,e,g,h,i,j,k,m,n,o,r=c.getElementsByTagName("body")[0];
!r||(j=1,k="position:absolute;top:0;left:0;width:1px;height:1px;margin:0;",m="visibility:hidden;border:0;",n="style='"+k+"border:5px solid #000;padding:0;'",o="<div "+n+"><div></div></div><table "+n+" cellpadding='0' cellspacing='0'><tr><td></td></tr></table>",a=c.createElement("div"),a.style.cssText=m+"width:0;height:0;position:static;top:0;margin-top:"+j+"px",r.insertBefore(a,r.firstChild),q=c.createElement("div"),a.appendChild(q),q.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>",l=q.getElementsByTagName("td"),p=l[0].offsetHeight===0,l[0].style.display="",l[1].style.display="none",b.reliableHiddenOffsets=p&&l[0].offsetHeight===0,q.innerHTML="",q.style.width=q.style.paddingLeft="1px",f.boxModel=b.boxModel=q.offsetWidth===2,typeof q.style.zoom!="undefined"&&(q.style.display="inline",q.style.zoom=1,b.inlineBlockNeedsLayout=q.offsetWidth===2,q.style.display="",q.innerHTML="<div style='width:4px;'></div>",b.shrinkWrapBlocks=q.offsetWidth!==2),q.style.cssText=k+m,q.innerHTML=o,d=q.firstChild,e=d.firstChild,h=d.nextSibling.firstChild.firstChild,i={doesNotAddBorder:e.offsetTop!==5,doesAddBorderForTableAndCells:h.offsetTop===5},e.style.position="fixed",e.style.top="20px",i.fixedPosition=e.offsetTop===20||e.offsetTop===15,e.style.position=e.style.top="",d.style.overflow="hidden",d.style.position="relative",i.subtractsBorderForOverflowNotVisible=e.offsetTop===-5,i.doesNotIncludeMarginInBodyOffset=r.offsetTop!==j,r.removeChild(a),q=a=null,f.extend(b,i))
});
return b
}();
var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;
f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];
return !!a&&!m(a)
},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i,j=f.expando,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?a[j]:a[j]&&j,o=c==="events";
if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b){return
}n||(l?a[j]=n=++f.uuid:n=j),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));
if(typeof c=="object"||typeof c=="function"){e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c)
}g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&&(h[f.camelCase(c)]=d);
if(o&&!h[c]){return g.events
}k?(i=h[c],i==null&&(i=h[f.camelCase(c)])):i=h;
return i
}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[h]:h;
if(!j[k]){return
}if(b){d=c?j[k]:j[k].data;
if(d){f.isArray(b)||(b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(" ")));
for(e=0,g=b.length;
e<g;
e++){delete d[b[e]]
}if(!(c?m:f.isEmptyObject)(d)){return
}}}if(!c){delete j[k].data;
if(!m(j[k])){return
}}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&&(f.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)
}},_data:function(a,b,c){return f.data(a,b,c,!0)
},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];
if(b){return b!==!0&&a.getAttribute("classid")===b
}}return !0
}}),f.fn.extend({data:function(a,c){var d,e,g,h=null;
if(typeof a=="undefined"){if(this.length){h=f.data(this[0]);
if(this[0].nodeType===1&&!f._data(this[0],"parsedAttrs")){e=this[0].attributes;
for(var i=0,j=e.length;
i<j;
i++){g=e[i].name,g.indexOf("data-")===0&&(g=f.camelCase(g.substring(5)),l(this[0],g,h[g]))
}f._data(this[0],"parsedAttrs",!0)
}}return h
}if(typeof a=="object"){return this.each(function(){f.data(this,a)
})
}d=a.split("."),d[1]=d[1]?"."+d[1]:"";
if(c===b){h=this.triggerHandler("getData"+d[1]+"!",[d[0]]),h===b&&this.length&&(h=f.data(this[0],a),h=l(this[0],a,h));
return h===b&&d[1]?this.data(d[0]):h
}return this.each(function(){var b=f(this),e=[d[0],c];
b.triggerHandler("setData"+d[1]+"!",e),f.data(this,a,c),b.triggerHandler("changeData"+d[1]+"!",e)
})
},removeData:function(a){return this.each(function(){f.removeData(this,a)
})
}}),f.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",f._data(a,b,(f._data(a,b)||0)+1))
},_unmark:function(a,b,c){a!==!0&&(c=b,b=a,a=!1);
if(b){c=c||"fx";
var d=c+"mark",e=a?0:(f._data(b,d)||1)-1;
e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,"mark"))
}},queue:function(a,b,c){var d;
if(a){b=(b||"fx")+"queue",d=f._data(a,b),c&&(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c));
return d||[]
}},dequeue:function(a,b){b=b||"fx";
var c=f.queue(a,b),d=c.shift(),e={};
d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data(a,b+".run",e),d.call(a,function(){f.dequeue(a,b)
},e)),c.length||(f.removeData(a,b+"queue "+b+".run",!0),n(a,b,"queue"))
}}),f.fn.extend({queue:function(a,c){typeof a!="string"&&(c=a,a="fx");
if(c===b){return f.queue(this[0],a)
}return this.each(function(){var b=f.queue(this,a,c);
a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)
})
},dequeue:function(a){return this.each(function(){f.dequeue(this,a)
})
},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";
return this.queue(b,function(b,c){var d=setTimeout(b,a);
c.stop=function(){clearTimeout(d)
}
})
},clearQueue:function(a){return this.queue(a||"fx",[])
},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])
}typeof a!="string"&&(c=a,a=b),a=a||"fx";
var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;
while(g--){if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f.Callbacks("once memory"),!0)){h++,l.add(m)
}}m();
return d.promise()
}});
var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;
f.fn.extend({attr:function(a,b){return f.access(this,a,b,!0,f.attr)
},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)
})
},prop:function(a,b){return f.access(this,a,b,!0,f.prop)
},removeProp:function(a){a=f.propFix[a]||a;
return this.each(function(){try{this[a]=b,delete this[a]
}catch(c){}})
},addClass:function(a){var b,c,d,e,g,h,i;
if(f.isFunction(a)){return this.each(function(b){f(this).addClass(a.call(this,b,this.className))
})
}if(a&&typeof a=="string"){b=a.split(p);
for(c=0,d=this.length;
c<d;
c++){e=this[c];
if(e.nodeType===1){if(!e.className&&b.length===1){e.className=a
}else{g=" "+e.className+" ";
for(h=0,i=b.length;
h<i;
h++){~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ")
}e.className=f.trim(g)
}}}}return this
},removeClass:function(a){var c,d,e,g,h,i,j;
if(f.isFunction(a)){return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))
})
}if(a&&typeof a=="string"||a===b){c=(a||"").split(p);
for(d=0,e=this.length;
d<e;
d++){g=this[d];
if(g.nodeType===1&&g.className){if(a){h=(" "+g.className+" ").replace(o," ");
for(i=0,j=c.length;
i<j;
i++){h=h.replace(" "+c[i]+" "," ")
}g.className=f.trim(h)
}else{g.className=""
}}}}return this
},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";
if(f.isFunction(a)){return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)
})
}return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(p);
while(e=j[g++]){i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)
}}else{if(c==="undefined"||c==="boolean"){this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""
}}})
},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;
for(;
c<d;
c++){if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(o," ").indexOf(b)>-1){return !0
}}return !1
},val:function(a){var c,d,e,g=this[0];
if(!!arguments.length){e=f.isFunction(a);
return this.each(function(d){var g=f(this),h;
if(this.nodeType===1){e?h=a.call(this,d,g.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""
})),c=f.valHooks[this.nodeName.toLowerCase()]||f.valHooks[this.type];
if(!c||!("set" in c)||c.set(this,h,"value")===b){this.value=h
}}})
}if(g){c=f.valHooks[g.nodeName.toLowerCase()]||f.valHooks[g.type];
if(c&&"get" in c&&(d=c.get(g,"value"))!==b){return d
}d=g.value;
return typeof d=="string"?d.replace(q,""):d==null?"":d
}}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;
return !b||b.specified?a.value:a.text
}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one";
if(g<0){return null
}c=j?g:0,d=j?g+1:i.length;
for(;
c<d;
c++){e=i[c];
if(e.selected&&(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val();
if(j){return b
}h.push(b)
}}if(j&&!h.length&&i.length){return f(i[g]).val()
}return h
},set:function(a,b){var c=f.makeArray(b);
f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0
}),c.length||(a.selectedIndex=-1);
return c
}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;
if(!!a&&j!==3&&j!==8&&j!==2){if(e&&c in f.attrFn){return f(a)[c](d)
}if(typeof a.getAttribute=="undefined"){return f.prop(a,c,d)
}i=j!==1||!f.isXMLDoc(a),i&&(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));
if(d!==b){if(d===null){f.removeAttr(a,c);
return
}if(h&&"set" in h&&i&&(g=h.set(a,d,c))!==b){return g
}a.setAttribute(c,""+d);
return d
}if(h&&"get" in h&&i&&(g=h.get(a,c))!==null){return g
}g=a.getAttribute(c);
return g===null?b:g
}},removeAttr:function(a,b){var c,d,e,g,h=0;
if(b&&a.nodeType===1){d=b.toLowerCase().split(p),g=d.length;
for(;
h<g;
h++){e=d[h],e&&(c=f.propFix[e]||e,f.attr(a,e,""),a.removeAttribute(v?e:c),u.test(e)&&c in a&&(a[c]=!1))
}}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&&a.parentNode){f.error("type property can't be changed")
}else{if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;
a.setAttribute("type",b),c&&(a.value=c);
return b
}}}},value:{get:function(a,b){if(w&&f.nodeName(a,"button")){return w.get(a,b)
}return b in a?a.value:null
},set:function(a,b,c){if(w&&f.nodeName(a,"button")){return w.set(a,b,c)
}a.value=b
}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,g,h,i=a.nodeType;
if(!!a&&i!==3&&i!==8&&i!==2){h=i!==1||!f.isXMLDoc(a),h&&(c=f.propFix[c]||c,g=f.propHooks[c]);
return d!==b?g&&"set" in g&&(e=g.set(a,d,c))!==b?e:a[c]=d:g&&"get" in g&&(e=g.get(a,c))!==null?e:a[c]
}},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");
return c&&c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b
}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);
return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b
},set:function(a,b,c){var d;
b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));
return c
}},v||(y={name:!0,id:!0},w=f.valHooks.button={get:function(a,c){var d;
d=a.getAttributeNode(c);
return d&&(y[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b
},set:function(a,b,d){var e=a.getAttributeNode(d);
e||(e=c.createAttribute(d),a.setAttributeNode(e));
return e.nodeValue=b+""
}},f.attrHooks.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");
return c
}}})
}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false"),w.set(a,b,c)
}}),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);
return d===null?b:d
}})
}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b
},set:function(a,b){return a.style.cssText=""+b
}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;
b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);
return null
}})),f.support.enctype||(f.propFix.enctype="encoding"),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value
}}
}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b)){return a.checked=f.inArray(f(a).val(),b)>=0
}}})
});
var z=/^(?:textarea|input|select)$/i,A=/^([^\.]*)?(?:\.(.+))?$/,B=/\bhover(\.\S+)?\b/,C=/^key/,D=/^(?:mouse|contextmenu)|click/,E=/^(?:focusinfocus|focusoutblur)$/,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G=function(a){var b=F.exec(a);
b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)"));
return b
},H=function(a,b){var c=a.attributes||{};
return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3]||b[3].test((c["class"]||{}).value))
},I=function(a){return f.event.special.hover?a:a.replace(B,"mouseenter$1 mouseleave$1")
};
f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;
if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&&(p=d,d=p.handler),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b
},i.elem=a),c=f.trim(I(c)).split(" ");
for(k=0;
k<c.length;
k++){l=A.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,quick:G(g),namespace:n.join(".")},p),r=j[m];
if(!r){r=j[m]=[],r.delegateCount=0;
if(!s.setup||s.setup.call(a,e,n,i)===!1){a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)
}}s.add&&(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0
}a=null
}},global:{},remove:function(a,b,c,d,e){var g=f.hasData(a)&&f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;
if(!!g&&!!(o=g.events)){b=f.trim(I(b||"")).split(" ");
for(h=0;
h<b.length;
h++){i=A.exec(b[h])||[],j=k=i[1],l=i[2];
if(!j){for(j in o){f.event.remove(a,j+b[h],c,d,!0)
}continue
}p=f.event.special[j]||{},j=(d?p.delegateType:p.bindType)||j,r=o[j]||[],m=r.length,l=l?new RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;
for(n=0;
n<r.length;
n++){s=r[n],(e||k===s.origType)&&(!c||c.guid===s.guid)&&(!l||l.test(s.namespace))&&(!d||d===s.selector||d==="**"&&s.selector)&&(r.splice(n--,1),s.selector&&r.delegateCount--,p.remove&&p.remove.call(a,s))
}r.length===0&&m!==r.length&&((!p.teardown||p.teardown.call(a,l)===!1)&&f.removeEvent(a,j,g.handle),delete o[j])
}f.isEmptyObject(o)&&(q=g.handle,q&&(q.elem=null),f.removeData(a,["events","handle"],!0))
}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;
if(E.test(h+f.event.triggered)){return
}h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());
if((!e||f.event.customEvent[h])&&!f.event.global[h]){return
}c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+h:"";
if(!e){j=f.cache;
for(l in j){j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0)
}return
}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};
if(p.trigger&&p.trigger.apply(e,d)===!1){return
}r=[[e,p.bindType||h]];
if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,m=E.test(s+h)?e:e.parentNode,n=null;
for(;
m;
m=m.parentNode){r.push([m,s]),n=m
}n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||a,s])
}for(l=0;
l<r.length&&!c.isPropagationStopped();
l++){m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d)===!1&&c.preventDefault()
}c.type=h,!g&&!c.isDefaultPrevented()&&(!p._default||p._default.apply(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n));
return c.result
}},dispatch:function(c){c=f.event.fix(c||a.event);
var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!c.namespace,i=[],j,k,l,m,n,o,p,q,r,s,t;
g[0]=c,c.delegateTarget=this;
if(e&&!c.target.disabled&&(!c.button||c.type!=="click")){m=f(this),m.context=this.ownerDocument||this;
for(l=c.target;
l!=this;
l=l.parentNode||this){o={},q=[],m[0]=l;
for(j=0;
j<e;
j++){r=d[j],s=r.selector,o[s]===b&&(o[s]=r.quick?H(l,r.quick):m.is(s)),o[s]&&q.push(r)
}q.length&&i.push({elem:l,matches:q})
}}d.length>e&&i.push({elem:this,matches:d.slice(e)});
for(j=0;
j<i.length&&!c.isPropagationStopped();
j++){p=i[j],c.currentTarget=p.elem;
for(k=0;
k<p.matches.length&&!c.isImmediatePropagationStopped();
k++){r=p.matches[k];
if(h||!c.namespace&&!r.namespace||c.namespace_re&&c.namespace_re.test(r.namespace)){c.data=r.data,c.handleObj=r,n=((f.event.special[r.origType]||{}).handle||r.handler).apply(p.elem,g),n!==b&&(c.result=n,n===!1&&(c.preventDefault(),c.stopPropagation()))
}}}return c.result
},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode);
return a
}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;
a.pageX==null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?d.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0);
return a
}},fix:function(a){if(a[f.expando]){return a
}var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;
a=f.Event(g);
for(d=i.length;
d;
){e=i[--d],a[e]=g[e]
}a.target||(a.target=g.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey);
return h.filter?h.filter(a,g):a
},special:{ready:{setup:f.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)
},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)
}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});
d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()
}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)
}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)
},f.Event=function(a,b){if(!(this instanceof f.Event)){return new f.Event(a,b)
}a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?K:J):this.type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this[f.expando]=!0
},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=K;
var a=this.originalEvent;
!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)
},stopPropagation:function(){this.isPropagationStopped=K;
var a=this.originalEvent;
!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)
},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=K,this.stopPropagation()
},isDefaultPrevented:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c=this,d=a.relatedTarget,e=a.handleObj,g=e.selector,h;
if(!d||d!==c&&!f.contains(c,d)){a.type=e.origType,h=e.handler.apply(this,arguments),a.type=b
}return h
}}
}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,"form")){return !1
}f.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form:b;
d&&!d._submit_attached&&(f.event.add(d,"submit._submit",function(a){this.parentNode&&!a.isTrigger&&f.event.simulate("submit",this.parentNode,a,!0)
}),d._submit_attached=!0)
})
},teardown:function(){if(f.nodeName(this,"form")){return !1
}f.event.remove(this,"._submit")
}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio"){f.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)
}),f.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1,f.event.simulate("change",this,a,!0))
})
}return !1
}f.event.add(this,"beforeactivate._change",function(a){var b=a.target;
z.test(b.nodeName)&&!b._change_attached&&(f.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&f.event.simulate("change",this.parentNode,a,!0)
}),b._change_attached=!0)
})
},handle:function(a){var b=a.target;
if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox"){return a.handleObj.handler.apply(this,arguments)
}},teardown:function(){f.event.remove(this,"._change");
return z.test(this.nodeName)
}}),f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)
};
f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)
},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)
}}
}),f.fn.extend({on:function(a,c,d,e,g){var h,i;
if(typeof a=="object"){typeof c!="string"&&(d=c,c=b);
for(i in a){this.on(i,c,d,a[i],g)
}return this
}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));
if(e===!1){e=J
}else{if(!e){return this
}}g===1&&(h=e,e=function(a){f().off(a);
return h.apply(this,arguments)
},e.guid=h.guid||(h.guid=f.guid++));
return this.each(function(){f.event.add(this,a,e,d,c)
})
},one:function(a,b,c,d){return this.on.call(this,a,b,c,d,1)
},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;
f(a.delegateTarget).off(e.namespace?e.type+"."+e.namespace:e.type,e.selector,e.handler);
return this
}if(typeof a=="object"){for(var g in a){this.off(g,c,a[g])
}return this
}if(c===!1||typeof c=="function"){d=c,c=b
}d===!1&&(d=J);
return this.each(function(){f.event.remove(this,a,d,c)
})
},bind:function(a,b,c){return this.on(a,null,b,c)
},unbind:function(a,b){return this.off(a,null,b)
},live:function(a,b,c){f(this.context).on(a,this.selector,b,c);
return this
},die:function(a,b){f(this.context).off(a,this.selector||"**",b);
return this
},delegate:function(a,b,c,d){return this.on(b,a,c,d)
},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)
},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)
})
},triggerHandler:function(a,b){if(this[0]){return f.event.trigger(a,b,this[0],!0)
}},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,"lastToggle"+a.guid)||0)%d;
f._data(this,"lastToggle"+a.guid,e+1),c.preventDefault();
return b[e].apply(this,arguments)||!1
};
e.guid=c;
while(d<b.length){b[d++].guid=c
}return this.click(e)
},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)
}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);
return arguments.length>0?this.on(b,null,a,c):this.trigger(b)
},f.attrFn&&(f.attrFn[b]=!0),C.test(b)&&(f.event.fixHooks[b]=f.event.keyHooks),D.test(b)&&(f.event.fixHooks[b]=f.event.mouseHooks)
}),function(){function x(a,b,c,e,f,g){for(var h=0,i=e.length;
h<i;
h++){var j=e[h];
if(j){var k=!1;
j=j[a];
while(j){if(j[d]===c){k=e[j.sizset];
break
}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);
if(typeof b!="string"){if(j===b){k=!0;
break
}}else{if(m.filter(b,[j]).length>0){k=j;
break
}}}j=j[a]
}e[h]=k
}}}function w(a,b,c,e,f,g){for(var h=0,i=e.length;
h<i;
h++){var j=e[h];
if(j){var k=!1;
j=j[a];
while(j){if(j[d]===c){k=e[j.sizset];
break
}j.nodeType===1&&!g&&(j[d]=c,j.sizset=h);
if(j.nodeName.toLowerCase()===b){k=j;
break
}j=j[a]
}e[h]=k
}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;
[0,0].sort(function(){i=!1;
return 0
});
var m=function(b,d,e,f){e=e||[],d=d||c;
var h=d;
if(d.nodeType!==1&&d.nodeType!==9){return[]
}if(!b||typeof b!="string"){return e
}var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;
do{a.exec(""),i=a.exec(x);
if(i){x=i[3],w.push(i[1]);
if(i[2]){l=i[3];
break
}}}while(i);
if(w.length>1&&p.exec(b)){if(w.length===2&&o.relative[w[0]]){j=y(w[0]+w[1],d,f)
}else{j=o.relative[w[0]]?[d]:m(w.shift(),d);
while(w.length){b=w.shift(),o.relative[b]&&(b+=w.shift()),j=y(b,j,f)
}}}else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match.ID.test(w[w.length-1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);
if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length===1&&(w[0]==="~"||w[0]==="+")&&d.parentNode?d.parentNode:d,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length>0?k=s(j):u=!1;
while(w.length){q=w.pop(),r=q,o.relative[q]?r=w.pop():q="",r==null&&(r=d),o.relative[q](k,r,v)
}}else{k=w=[]
}}k||(k=j),k||m.error(q||b);
if(g.call(k)==="[object Array]"){if(!u){e.push.apply(e,k)
}else{if(d&&d.nodeType===1){for(t=0;
k[t]!=null;
t++){k[t]&&(k[t]===!0||k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j[t])
}}else{for(t=0;
k[t]!=null;
t++){k[t]&&k[t].nodeType===1&&e.push(j[t])
}}}}else{s(k,e)
}l&&(m(l,h,e,f),m.uniqueSort(e));
return e
};
m.uniqueSort=function(a){if(u){h=i,a.sort(u);
if(h){for(var b=1;
b<a.length;
b++){a[b]===a[b-1]&&a.splice(b--,1)
}}}return a
},m.matches=function(a,b){return m(a,null,null,b)
},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0
},m.find=function(a,b,c){var d,e,f,g,h,i;
if(!a){return[]
}for(e=0,f=o.order.length;
e<f;
e++){h=o.order[e];
if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);
if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c);
if(d!=null){a=a.replace(o.match[h],"");
break
}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);
return{set:d,expr:a}
},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);
while(a&&c.length){for(h in o.filter){if((f=o.leftMatch[h].exec(a))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);
if(l.substr(l.length-1)==="\\"){continue
}s===r&&(r=[]);
if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);
if(!f){g=i=!0
}else{if(f===!0){continue
}}}if(f){for(n=0;
(j=s[n])!=null;
n++){j&&(i=k(j,f,n,s),p=e^i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0))
}}if(i!==b){d||(s=r),a=a.replace(o.match[h],"");
if(!g){return[]
}break
}}}if(a===q){if(g==null){m.error(a)
}else{break
}}q=a
}return s
},m.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)
};
var n=m.getText=function(a){var b,c,d=a.nodeType,e="";
if(d){if(d===1||d===9){if(typeof a.textContent=="string"){return a.textContent
}if(typeof a.innerText=="string"){return a.innerText.replace(k,"")
}for(a=a.firstChild;
a;
a=a.nextSibling){e+=n(a)
}}else{if(d===3||d===4){return a.nodeValue
}}}else{for(b=0;
c=a[b];
b++){c.nodeType!==8&&(e+=n(c))
}}return e
},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")
},type:function(a){return a.getAttribute("type")
}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;
d&&(b=b.toLowerCase());
for(var f=0,g=a.length,h;
f<g;
f++){if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1){}a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b
}}e&&m.filter(b,a,!0)
},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;
if(d&&!l.test(b)){b=b.toLowerCase();
for(;
e<f;
e++){c=a[e];
if(c){var g=c.parentNode;
a[e]=g.nodeName.toLowerCase()===b?g:!1
}}}else{for(;
e<f;
e++){c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b)
}d&&m.filter(b,a,!0)
}},"":function(a,b,c){var d,f=e++,g=x;
typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)
},"~":function(a,b,c){var d,f=e++,g=x;
typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("previousSibling",b,f,a,d,c)
}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);
return d&&d.parentNode?[d]:[]
}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);
for(var e=0,f=d.length;
e<f;
e++){d[e].getAttribute("name")===a[1]&&c.push(d[e])
}return c.length===0?null:c
}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined"){return b.getElementsByTagName(a[1])
}}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(j,"")+" ";
if(f){return a
}for(var g=0,h;
(h=b[g])!=null;
g++){h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1))
}return !1
},ID:function(a){return a[1].replace(j,"")
},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()
},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");
var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);
a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0
}else{a[2]&&m.error(a[0])
}a[0]=e++;
return a
},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");
!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");
return a
},PSEUDO:function(b,c,d,e,f){if(b[1]==="not"){if((a.exec(b[3])||"").length>1||/^\w/.test(b[3])){b[3]=m(b[3],null,null,c)
}else{var g=m.filter(b[3],c,d,!0^f);
d||e.push.apply(e,g);
return !1
}}else{if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0])){return !0
}}return b
},POS:function(a){a.unshift(!0);
return a
}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"
},disabled:function(a){return a.disabled===!0
},checked:function(a){return a.checked===!0
},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;
return a.selected===!0
},parent:function(a){return !!a.firstChild
},empty:function(a){return !a.firstChild
},has:function(a,b,c){return !!m(c[3],a).length
},header:function(a){return/h\d/i.test(a.nodeName)
},text:function(a){var b=a.getAttribute("type"),c=a.type;
return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)
},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type
},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type
},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type
},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type
},submit:function(a){var b=a.nodeName.toLowerCase();
return(b==="input"||b==="button")&&"submit"===a.type
},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type
},reset:function(a){var b=a.nodeName.toLowerCase();
return(b==="input"||b==="button")&&"reset"===a.type
},button:function(a){var b=a.nodeName.toLowerCase();
return b==="input"&&"button"===a.type||b==="button"
},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)
},focus:function(a){return a===a.ownerDocument.activeElement
}},setFilters:{first:function(a,b){return b===0
},last:function(a,b,c,d){return b===d.length-1
},even:function(a,b){return b%2===0
},odd:function(a,b){return b%2===1
},lt:function(a,b,c){return b<c[3]-0
},gt:function(a,b,c){return b>c[3]-0
},nth:function(a,b,c){return c[3]-0===b
},eq:function(a,b,c){return c[3]-0===b
}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];
if(f){return f(a,c,b,d)
}if(e==="contains"){return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0
}if(e==="not"){var g=b[3];
for(var h=0,i=g.length;
h<i;
h++){if(g[h]===a){return !1
}}return !0
}m.error(e)
},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;
switch(k){case"only":case"first":while(l=l.previousSibling){if(l.nodeType===1){return !1
}}if(k==="first"){return !0
}l=a;
case"last":while(l=l.nextSibling){if(l.nodeType===1){return !1
}}return !0;
case"nth":c=b[2],e=b[3];
if(c===1&&e===0){return !0
}f=b[0],g=a.parentNode;
if(g&&(g[d]!==f||!a.nodeIndex)){i=0;
for(l=g.firstChild;
l;
l=l.nextSibling){l.nodeType===1&&(l.nodeIndex=++i)
}g[d]=f
}j=a.nodeIndex-e;
return c===0?j===0:j%c===0&&j/c>=0
}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b
},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b
},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1
},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];
return d==null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1
},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];
if(f){return f(a,c,b,d)
}}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)
};
for(var r in o.match){o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q))
}var s=function(a,b){a=Array.prototype.slice.call(a,0);
if(b){b.push.apply(b,a);
return b
}return a
};
try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType
}catch(t){s=function(a,b){var c=0,d=b||[];
if(g.call(a)==="[object Array]"){Array.prototype.push.apply(d,a)
}else{if(typeof a.length=="number"){for(var e=a.length;
c<e;
c++){d.push(a[c])
}}else{for(;
a[c];
c++){d.push(a[c])
}}}return d
}
}var u,v;
c.documentElement.compareDocumentPosition?u=function(a,b){if(a===b){h=!0;
return 0
}if(!a.compareDocumentPosition||!b.compareDocumentPosition){return a.compareDocumentPosition?-1:1
}return a.compareDocumentPosition(b)&4?-1:1
}:(u=function(a,b){if(a===b){h=!0;
return 0
}if(a.sourceIndex&&b.sourceIndex){return a.sourceIndex-b.sourceIndex
}var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;
if(g===i){return v(a,b)
}if(!g){return -1
}if(!i){return 1
}while(j){e.unshift(j),j=j.parentNode
}j=i;
while(j){f.unshift(j),j=j.parentNode
}c=e.length,d=f.length;
for(var k=0;
k<c&&k<d;
k++){if(e[k]!==f[k]){return v(e[k],f[k])
}}return k===c?v(a,f[k],-1):v(e[k],b,1)
},v=function(a,b,c){if(a===b){return c
}var d=a.nextSibling;
while(d){if(d===b){return -1
}d=d.nextSibling
}return 1
}),function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;
a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);
return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]
}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");
return a.nodeType===1&&c&&c.nodeValue===b
}),e.removeChild(a),e=a=null
}(),function(){var a=c.createElement("div");
a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);
if(a[1]==="*"){var d=[];
for(var e=0;
c[e];
e++){c[e].nodeType===1&&d.push(c[e])
}c=d
}return c
}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)
}),a=null
}(),c.querySelectorAll&&function(){var a=m,b=c.createElement("div"),d="__sizzle__";
b.innerHTML="<p class='TEST'></p>";
if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){m=function(b,e,f,g){e=e||c;
if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1]){return s(e.getElementsByTagName(b),f)
}if(h[2]&&o.find.CLASS&&e.getElementsByClassName){return s(e.getElementsByClassName(h[2]),f)
}}if(e.nodeType===9){if(b==="body"&&e.body){return s([e.body],f)
}if(h&&h[3]){var i=e.getElementById(h[3]);
if(!i||!i.parentNode){return s([],f)
}if(i.id===h[3]){return s([i],f)
}}try{return s(e.querySelectorAll(b),f)
}catch(j){}}else{if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var k=e,l=e.getAttribute("id"),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);
l?n=n.replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=e.parentNode);
try{if(!q||p){return s(e.querySelectorAll("[id='"+n+"'] "+b),f)
}}catch(r){}finally{l||k.removeAttribute("id")
}}}}return a(b,e,f,g)
};
for(var e in a){m[e]=a[e]
}b=null
}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;
if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;
try{b.call(c.documentElement,"[test!='']:sizzle")
}catch(f){e=!0
}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");
if(!m.isXML(a)){try{if(e||!o.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);
if(f||!d||a.document&&a.document.nodeType!==11){return f
}}}catch(g){}}return m(c,null,null,[a]).length>0
}
}}(),function(){var a=c.createElement("div");
a.innerHTML="<div class='test e'></div><div class='test'></div>";
if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";
if(a.getElementsByClassName("e").length===1){return
}o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c){return b.getElementsByClassName(a[1])
}},a=null
}}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)
}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return !!(a.compareDocumentPosition(b)&16)
}:m.contains=function(){return !1
},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;
return b?b.nodeName!=="HTML":!1
};
var y=function(a,b,c){var d,e=[],f="",g=b.nodeType?[b]:b;
while(d=o.match.PSEUDO.exec(a)){f+=d[0],a=a.replace(o.match.PSEUDO,"")
}a=o.relative[a]?a+"*":a;
for(var h=0,i=g.length;
h<i;
h++){m(a,g[h],e,c)
}return m.filter(f,e)
};
m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains
}();
var L=/Until$/,M=/^(?:parents|prevUntil|prevAll)/,N=/,/,O=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,Q=f.expr.match.POS,R={children:!0,contents:!0,next:!0,prev:!0};
f.fn.extend({find:function(a){var b=this,c,d;
if(typeof a!="string"){return f(a).filter(function(){for(c=0,d=b.length;
c<d;
c++){if(f.contains(b[c],this)){return !0
}}})
}var e=this.pushStack("","find",a),g,h,i;
for(c=0,d=this.length;
c<d;
c++){g=e.length,f.find(a,this[c],e);
if(c>0){for(h=g;
h<e.length;
h++){for(i=0;
i<g;
i++){if(e[i]===e[h]){e.splice(h--,1);
break
}}}}}return e
},has:function(a){var b=f(a);
return this.filter(function(){for(var a=0,c=b.length;
a<c;
a++){if(f.contains(this,b[a])){return !0
}}})
},not:function(a){return this.pushStack(T(this,a,!1),"not",a)
},filter:function(a){return this.pushStack(T(this,a,!0),"filter",a)
},is:function(a){return !!a&&(typeof a=="string"?Q.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this.filter(a).length>0)
},closest:function(a,b){var c=[],d,e,g=this[0];
if(f.isArray(a)){var h=1;
while(g&&g.ownerDocument&&g!==b){for(d=0;
d<a.length;
d++){f(g).is(a[d])&&c.push({selector:a[d],elem:g,level:h})
}g=g.parentNode,h++
}return c
}var i=Q.test(a)||typeof a!="string"?f(a,b||this.context):0;
for(d=0,e=this.length;
d<e;
d++){g=this[d];
while(g){if(i?i.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);
break
}g=g.parentNode;
if(!g||!g.ownerDocument||g===b||g.nodeType===11){break
}}}c=c.length>1?f.unique(c):c;
return this.pushStack(c,"closest",a)
},index:function(a){if(!a){return this[0]&&this[0].parentNode?this.prevAll().length:-1
}if(typeof a=="string"){return f.inArray(this[0],f(a))
}return f.inArray(a.jquery?a[0]:a,this)
},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);
return this.pushStack(S(c[0])||S(d[0])?d:f.unique(d))
},andSelf:function(){return this.add(this.prevObject)
}}),f.each({parent:function(a){var b=a.parentNode;
return b&&b.nodeType!==11?b:null
},parents:function(a){return f.dir(a,"parentNode")
},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)
},next:function(a){return f.nth(a,2,"nextSibling")
},prev:function(a){return f.nth(a,2,"previousSibling")
},nextAll:function(a){return f.dir(a,"nextSibling")
},prevAll:function(a){return f.dir(a,"previousSibling")
},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)
},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)
},siblings:function(a){return f.sibling(a.parentNode.firstChild,a)
},children:function(a){return f.sibling(a.firstChild)
},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)
}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c);
L.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!R[a]?f.unique(e):e,(this.length>1||N.test(d))&&M.test(a)&&(e=e.reverse());
return this.pushStack(e,a,P.call(arguments).join(","))
}
}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");
return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)
},dir:function(a,c,d){var e=[],g=a[c];
while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d))){g.nodeType===1&&e.push(g),g=g[c]
}return e
},nth:function(a,b,c,d){b=b||1;
var e=0;
for(;
a;
a=a[c]){if(a.nodeType===1&&++e===b){break
}}return a
},sibling:function(a,b){var c=[];
for(;
a;
a=a.nextSibling){a.nodeType===1&&a!==b&&c.push(a)
}return c
}});
var V="abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|style)/i,bb=/<(?:script|object|embed|option|style)/i,bc=new RegExp("<(?:"+V+")","i"),bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bh=U(c);
bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){if(f.isFunction(a)){return this.each(function(b){var c=f(this);
c.text(a.call(this,b,c.text()))
})
}if(typeof a!="object"&&a!==b){return this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a))
}return f.text(this)
},wrapAll:function(a){if(f.isFunction(a)){return this.each(function(b){f(this).wrapAll(a.call(this,b))
})
}if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);
this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;
while(a.firstChild&&a.firstChild.nodeType===1){a=a.firstChild
}return a
}).append(this)
}return this
},wrapInner:function(a){if(f.isFunction(a)){return this.each(function(b){f(this).wrapInner(a.call(this,b))
})
}return this.each(function(){var b=f(this),c=b.contents();
c.length?c.wrapAll(a):b.append(a)
})
},wrap:function(a){var b=f.isFunction(a);
return this.each(function(c){f(this).wrapAll(b?a.call(this,c):a)
})
},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)
}).end()
},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)
})
},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)
})
},before:function(){if(this[0]&&this[0].parentNode){return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)
})
}if(arguments.length){var a=f.clean(arguments);
a.push.apply(a,this.toArray());
return this.pushStack(a,"before",arguments)
}},after:function(){if(this[0]&&this[0].parentNode){return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)
})
}if(arguments.length){var a=this.pushStack(this,"after",arguments);
a.push.apply(a,f.clean(arguments));
return a
}},remove:function(a,b){for(var c=0,d;
(d=this[c])!=null;
c++){if(!a||f.filter(a,[d]).length){!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d)
}}return this
},empty:function(){for(var a=0,b;
(b=this[a])!=null;
a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));
while(b.firstChild){b.removeChild(b.firstChild)
}}return this
},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;
return this.map(function(){return f.clone(this,a,b)
})
},html:function(a){if(a===b){return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(W,""):null
}if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!bg[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");
try{for(var c=0,d=this.length;
c<d;
c++){this[c].nodeType===1&&(f.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML=a)
}}catch(e){this.empty().append(a)
}}else{f.isFunction(a)?this.each(function(b){var c=f(this);
c.html(a.call(this,b,c.html()))
}):this.empty().append(a)
}return this
},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a)){return this.each(function(b){var c=f(this),d=c.html();
c.replaceWith(a.call(this,b,d))
})
}typeof a!="string"&&(a=f(a).detach());
return this.each(function(){var b=this.nextSibling,c=this.parentNode;
f(this).remove(),b?f(b).before(a):f(c).append(a)
})
}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this
},detach:function(a){return this.remove(a,!0)
},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];
if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j)){return this.each(function(){f(this).domManip(a,c,d,!0)
})
}if(f.isFunction(j)){return this.each(function(e){var g=f(this);
a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)
})
}if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;
if(g){c=c&&f.nodeName(g,"tr");
for(var l=0,m=this.length,n=m-1;
l<m;
l++){d.call(c?bi(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)
}}k.length&&f.each(k,bp)
}return this
}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];
b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!bb.test(j)&&(f.support.checkClone||!bd.test(j))&&(f.support.html5Clone||!bc.test(j))&&(g=!0,h=f.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1);
return{fragment:e,cacheable:g}
},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;
if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);
return this
}for(var h=0,i=e.length;
h<i;
h++){var j=(h>0?this.clone(!0):this).get();
f(e[h])[b](j),d=d.concat(j)
}return this.pushStack(d,a,e.selector)
}
}),f.extend({clone:function(a,b,c){var d,e,g,h=f.support.html5Clone||!bc.test("<"+a.nodeName)?a.cloneNode(!0):bo(a);
if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bk(a,h),d=bl(a),e=bl(h);
for(g=0;
d[g];
++g){e[g]&&bk(d[g],e[g])
}}if(b){bj(a,h);
if(c){d=bl(a),e=bl(h);
for(g=0;
d[g];
++g){bj(d[g],e[g])
}}}d=e=null;
return h
},clean:function(a,b,d,e){var g;
b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);
var h=[],i;
for(var j=0,k;
(k=a[j])!=null;
j++){typeof k=="number"&&(k+="");
if(!k){continue
}if(typeof k=="string"){if(!_.test(k)){k=b.createTextNode(k)
}else{k=k.replace(Y,"<$1></$2>");
var l=(Z.exec(k)||["",""])[1].toLowerCase(),m=bg[l]||bg._default,n=m[0],o=b.createElement("div");
b===c?bh.appendChild(o):U(b).appendChild(o),o.innerHTML=m[1]+k+m[2];
while(n--){o=o.lastChild
}if(!f.support.tbody){var p=$.test(k),q=l==="table"&&!p?o.firstChild&&o.firstChild.childNodes:m[1]==="<table>"&&!p?o.childNodes:[];
for(i=q.length-1;
i>=0;
--i){f.nodeName(q[i],"tbody")&&!q[i].childNodes.length&&q[i].parentNode.removeChild(q[i])
}}!f.support.leadingWhitespace&&X.test(k)&&o.insertBefore(b.createTextNode(X.exec(k)[0]),o.firstChild),k=o.childNodes
}}var r;
if(!f.support.appendChecked){if(k[0]&&typeof(r=k.length)=="number"){for(i=0;
i<r;
i++){bn(k[i])
}}else{bn(k)
}}k.nodeType?h.push(k):h=f.merge(h,k)
}if(d){g=function(a){return !a.type||be.test(a.type)
};
for(j=0;
h[j];
j++){if(e&&f.nodeName(h[j],"script")&&(!h[j].type||h[j].type.toLowerCase()==="text/javascript")){e.push(h[j].parentNode?h[j].parentNode.removeChild(h[j]):h[j])
}else{if(h[j].nodeType===1){var s=f.grep(h[j].getElementsByTagName("script"),g);
h.splice.apply(h,[j+1,0].concat(s))
}d.appendChild(h[j])
}}}return h
},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;
for(var h=0,i;
(i=a[h])!=null;
h++){if(i.nodeName&&f.noData[i.nodeName.toLowerCase()]){continue
}c=i[f.expando];
if(c){b=d[c];
if(b&&b.events){for(var j in b.events){e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle)
}b.handle&&(b.handle.elem=null)
}g?delete i[f.expando]:i.removeAttribute&&i.removeAttribute(f.expando),delete d[c]
}}}});
var bq=/alpha\([^)]*\)/i,br=/opacity=([^)]*)/,bs=/([A-Z]|^ms)/g,bt=/^-?\d+(?:px)?$/i,bu=/^-?\d/,bv=/^([\-+])=([\-+.\de]+)/,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Left","Right"],by=["Top","Bottom"],bz,bA,bB;
f.fn.css=function(a,c){if(arguments.length===2&&c===b){return this
}return f.access(this,a,c,!0,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)
})
},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bz(a,"opacity","opacity");
return c===""?"1":c
}return a.style.opacity
}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];
c=f.cssProps[i]||i;
if(d===b){if(k&&"get" in k&&(g=k.get(a,!1,e))!==b){return g
}return j[c]
}h=typeof d,h==="string"&&(g=bv.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");
if(d==null||h==="number"&&isNaN(d)){return
}h==="number"&&!f.cssNumber[i]&&(d+="px");
if(!k||!("set" in k)||(d=k.set(a,d))!==b){try{j[c]=d
}catch(l){}}}},css:function(a,c,d){var e,g;
c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");
if(g&&"get" in g&&(e=g.get(a,!0,d))!==b){return e
}if(bz){return bz(a,c)
}},swap:function(a,b,c){var d={};
for(var e in b){d[e]=a.style[e],a.style[e]=b[e]
}c.call(a);
for(e in b){a.style[e]=d[e]
}}}),f.curCSS=f.css,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){var e;
if(c){if(a.offsetWidth!==0){return bC(a,b,d)
}f.swap(a,bw,function(){e=bC(a,b,d)
});
return e
}},set:function(a,b){if(!bt.test(b)){return b
}b=parseFloat(b);
if(b>=0){return b+"px"
}}}
}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return br.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""
},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=d&&d.filter||c.filter||"";
c.zoom=1;
if(b>=1&&f.trim(g.replace(bq,""))===""){c.removeAttribute("filter");
if(d&&!d.filter){return
}}c.filter=bq.test(g)?g.replace(bq,e):g+" "+e
}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){var c;
f.swap(a,{display:"inline-block"},function(){b?c=bz(a,"margin-right","marginRight"):c=a.style.marginRight
});
return c
}})
}),c.defaultView&&c.defaultView.getComputedStyle&&(bA=function(a,b){var c,d,e;
b=b.replace(bs,"-$1").toLowerCase(),(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,null))&&(c=e.getPropertyValue(b),c===""&&!f.contains(a.ownerDocument.documentElement,a)&&(c=f.style(a,b)));
return c
}),c.documentElement.currentStyle&&(bB=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;
f===null&&g&&(e=g[b])&&(f=e),!bt.test(f)&&bu.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left=b==="fontSize"?"1em":f||0,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d));
return f===""?"auto":f
}),bz=bA||bB,f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;
return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style&&a.style.display||f.css(a,"display"))==="none"
},f.expr.filters.visible=function(a){return !f.expr.filters.hidden(a)
});
var bD=/%20/g,bE=/\[\]$/,bF=/\r?\n/g,bG=/#.*$/,bH=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bI=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bJ=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bK=/^(?:GET|HEAD)$/,bL=/^\/\//,bM=/\?/,bN=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bO=/^(?:select|textarea)/i,bP=/\s+/,bQ=/([?&])_=[^&]*/,bR=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bS=f.fn.load,bT={},bU={},bV,bW,bX=["*/"]+["*"];
try{bV=e.href
}catch(bY){bV=c.createElement("a"),bV.href="",bV=bV.href
}bW=bR.exec(bV.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bS){return bS.apply(this,arguments)
}if(!this.length){return this
}var e=a.indexOf(" ");
if(e>=0){var g=a.slice(e,a.length);
a=a.slice(0,e)
}var h="GET";
c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));
var i=this;
f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a
}),i.html(g?f("<div>").append(c.replace(bN,"")).find(g):c)),d&&i.each(d,[c,b,a])
}});
return this
},serialize:function(){return f.param(this.serializeArray())
},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this
}).filter(function(){return this.name&&!this.disabled&&(this.checked||bO.test(this.nodeName)||bI.test(this.type))
}).map(function(a,b){var c=f(this).val();
return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bF,"\r\n")}
}):{name:b.name,value:c.replace(bF,"\r\n")}
}).get()
}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.on(b,a)
}
}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);
return f.ajax({type:c,url:a,data:d,success:e,dataType:g})
}
}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")
},getJSON:function(a,b,c){return f.get(a,b,c,"json")
},ajaxSetup:function(a,b){b?b_(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),b_(a,b);
return a
},ajaxSettings:{url:bV,isLocal:bJ.test(bW[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bX},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bZ(bT),ajaxTransport:bZ(bU),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;
var o,r,u,w=c,x=l?cb(d,v,l):b,y,z;
if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified")){f.lastModified[k]=y
}if(z=v.getResponseHeader("Etag")){f.etag[k]=z
}}if(a===304){w="notmodified",o=!0
}else{try{r=cc(d,x),w="success",o=!0
}catch(A){w="parsererror",u=A
}}}else{u=w;
if(!w||a){w="error",a<0&&(a=0)
}}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))
}}typeof a=="object"&&(c=a,a=b),c=c||{};
var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks("once memory"),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();
a=m[c]=m[c]||a,l[a]=b
}return this
},getAllResponseHeaders:function(){return s===2?n:null
},getResponseHeader:function(a){var c;
if(s===2){if(!o){o={};
while(c=bH.exec(n)){o[c[1].toLowerCase()]=c[2]
}}c=o[a.toLowerCase()]
}return c===b?null:c
},overrideMimeType:function(a){s||(d.mimeType=a);
return this
},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);
return this
}};
h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=function(a){if(a){var b;
if(s<2){for(b in a){j[b]=[j[b],a[b]]
}}else{b=a[v.status],v.then(b,b)
}}return this
},d.url=((a||d.url)+"").replace(bG,"").replace(bL,bW[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bP),d.crossDomain==null&&(r=bR.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bW[1]&&r[2]==bW[2]&&(r[3]||(r[1]==="http:"?80:443))==(bW[3]||(bW[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),b$(bT,d,c,v);
if(s===2){return !1
}t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bK.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");
if(!d.hasContent){d.data&&(d.url+=(bM.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;
if(d.cache===!1){var x=f.now(),y=d.url.replace(bQ,"$1_="+x);
d.url=y+(y===d.url?(bM.test(d.url)?"&":"?")+"_="+x:"")
}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bX+"; q=0.01":""):d.accepts["*"]);
for(u in d.headers){v.setRequestHeader(u,d.headers[u])
}if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();
return !1
}for(u in {success:1,error:1,complete:1}){v[u](d[u])
}p=b$(bU,d,c,v);
if(!p){w(-1,"No Transport")
}else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")
},d.timeout));
try{s=1,p.send(l,w)
}catch(z){if(s<2){w(-1,z)
}else{throw z
}}}return v
},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)
};
c===b&&(c=f.ajaxSettings.traditional);
if(f.isArray(a)||a.jquery&&!f.isPlainObject(a)){f.each(a,function(){e(this.name,this.value)
})
}else{for(var g in a){ca(g,a[g],c,e)
}}return d.join("&").replace(bD,"+")
}}),f.extend({active:0,lastModified:{},etag:{}});
var cd=f.now(),ce=/(\=)\?(&|$)|\?\?/i;
f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cd++
}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=b.contentType==="application/x-www-form-urlencoded"&&typeof b.data=="string";
if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(ce.test(b.url)||e&&ce.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";
b.jsonp!==!1&&(j=j.replace(ce,l),b.url===j&&(e&&(k=k.replace(ce,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]
},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])
}),b.converters["script json"]=function(){g||f.error(h+" was not called");
return g[0]
},b.dataTypes[0]="json";
return"script"
}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);
return a
}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)
}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;
return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState)){d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")
}},e.insertBefore(d,e.firstChild)
},abort:function(){d&&d.onload(0,1)
}}
}});
var cf=a.ActiveXObject?function(){for(var a in ch){ch[a](0,1)
}}:!1,cg=0,ch;
f.ajaxSettings.xhr=a.ActiveXObject?function(){return !this.isLocal&&ci()||cj()
}:ci,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials" in a})
}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;
return{send:function(e,g){var h=c.xhr(),i,j;
c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);
if(c.xhrFields){for(j in c.xhrFields){h[j]=c.xhrFields[j]
}}c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");
try{for(j in e){h.setRequestHeader(j,e[j])
}}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;
try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,cf&&delete ch[i]);
if(e){h.readyState!==4&&h.abort()
}else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n),m.text=h.responseText;
try{k=h.statusText
}catch(o){k=""
}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)
}}}catch(p){e||g(-1,p)
}m&&g(j,k,m,l)
},!c.async||h.readyState===4?d():(i=++cg,cf&&(ch||(ch={},f(a).unload(cf)),ch[i]=d),h.onreadystatechange=d)
},abort:function(){d&&d(0,1)
}}
}});
var ck={},cl,cm,cn=/^(?:toggle|show|hide)$/,co=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,cp,cq=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cr;
f.fn.extend({show:function(a,b,c){var d,e;
if(a||a===0){return this.animate(cu("show",3),a,b,c)
}for(var g=0,h=this.length;
g<h;
g++){d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),e===""&&f.css(d,"display")==="none"&&f._data(d,"olddisplay",cv(d.nodeName)))
}for(g=0;
g<h;
g++){d=this[g];
if(d.style){e=d.style.display;
if(e===""||e==="none"){d.style.display=f._data(d,"olddisplay")||""
}}}return this
},hide:function(a,b,c){if(a||a===0){return this.animate(cu("hide",3),a,b,c)
}var d,e,g=0,h=this.length;
for(;
g<h;
g++){d=this[g],d.style&&(e=f.css(d,"display"),e!=="none"&&!f._data(d,"olddisplay")&&f._data(d,"olddisplay",e))
}for(g=0;
g<h;
g++){this[g].style&&(this[g].style.display="none")
}return this
},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";
f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");
f(this)[b?"show":"hide"]()
}):this.animate(cu("toggle",3),a,b,c);
return this
},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)
},animate:function(a,b,c,d){function g(){e.queue===!1&&f._mark(this);
var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o;
b.animatedProperties={};
for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]),h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";
if(h==="hide"&&d||h==="show"&&!d){return b.complete.call(this)
}c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(!f.support.inlineBlockNeedsLayout||cv(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))
}b.overflow!=null&&(this.style.overflow="hidden");
for(i in a){j=new f.fx(this,b,i),h=a[i],cn.test(h)?(o=f._data(this,"toggle"+i)||(h==="toggle"?d?"show":"hide":0),o?(f._data(this,"toggle"+i,o==="show"?"hide":"show"),j[o]()):j[h]()):(k=co.exec(h),l=j.cur(),k?(m=parseFloat(k[2]),n=k[3]||(f.cssNumber[i]?"":"px"),n!=="px"&&(f.style(this,i,(m||1)+n),l=(m||1)/j.cur()*l,f.style(this,i,l+n)),k[1]&&(m=(k[1]==="-="?-1:1)*m+l),j.custom(l,m,n)):j.custom(l,h,""))
}return !0
}var e=f.speed(b,c,d);
if(f.isEmptyObject(a)){return this.each(e.complete,[!1])
}a=f.extend({},a);
return e.queue===!1?this.each(g):this.queue(e.queue,g)
},stop:function(a,c,d){typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]);
return this.each(function(){function h(a,b,c){var e=b[c];
f.removeData(a,c,!0),e.stop(d)
}var b,c=!1,e=f.timers,g=f._data(this);
d||f._unmark(!0,this);
if(a==null){for(b in g){g[b]&&g[b].stop&&b.indexOf(".run")===b.length-4&&h(this,g,b)
}}else{g[b=a+".run"]&&g[b].stop&&h(this,g,b)
}for(b=e.length;
b--;
){e[b].elem===this&&(a==null||e[b].queue===a)&&(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1))
}(!d||!c)&&f.dequeue(this,a)
})
}}),f.each({slideDown:cu("show",1),slideUp:cu("hide",1),slideToggle:cu("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)
}
}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};
d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;
if(d.queue==null||d.queue===!0){d.queue="fx"
}d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&&f._unmark(this)
};
return d
},easing:{linear:function(a,b,c,d){return c+d*a
},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+0.5)*d+c
}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}
}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)
},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null)){return this.elem[this.prop]
}var a,b=f.css(this.elem,this.prop);
return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a
},custom:function(a,c,d){function h(a){return e.step(a)
}var e=this,g=f.fx;
this.startTime=cr||cs(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(f.cssNumber[this.prop]?"":"px"),h.queue=this.options.queue,h.elem=this.elem,h.saveState=function(){e.options.hide&&f._data(e.elem,"fxshow"+e.prop)===b&&f._data(e.elem,"fxshow"+e.prop,e.start)
},h()&&f.timers.push(h)&&!cp&&(cp=setInterval(g.tick,g.interval))
},show:function(){var a=f._data(this.elem,"fxshow"+this.prop);
this.options.orig[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()
},hide:function(){this.options.orig[this.prop]=f._data(this.elem,"fxshow"+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)
},step:function(a){var b,c,d,e=cr||cs(),g=!0,h=this.elem,i=this.options;
if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;
for(b in i.animatedProperties){i.animatedProperties[b]!==!0&&(g=!1)
}if(g){i.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]
}),i.hide&&f(h).hide();
if(i.hide||i.show){for(b in i.animatedProperties){f.style(h,b,i.orig[b]),f.removeData(h,"fxshow"+b,!0),f.removeData(h,"toggle"+b,!0)
}}d=i.complete,d&&(i.complete=!1,d.call(h))
}return !1
}i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();
return !0
}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;
for(;
c<b.length;
c++){a=b[c],!a()&&b[c]===a&&b.splice(c--,1)
}b.length||f.fx.stop()
},interval:13,stop:function(){clearInterval(cp),cp=null
},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)
},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now
}}}),f.each(["width","height"],function(a,b){f.fx.step[b]=function(a){f.style(a.elem,b,Math.max(0,a.now)+a.unit)
}
}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem
}).length
});
var cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;
"getBoundingClientRect" in c.documentElement?f.fn.offset=function(a){var b=this[0],c;
if(a){return this.each(function(b){f.offset.setOffset(this,a,b)
})
}if(!b||!b.ownerDocument){return null
}if(b===b.ownerDocument.body){return f.offset.bodyOffset(b)
}try{c=b.getBoundingClientRect()
}catch(d){}var e=b.ownerDocument,g=e.documentElement;
if(!c||!f.contains(g,b)){return c?{top:c.top,left:c.left}:{top:0,left:0}
}var h=e.body,i=cy(e),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||f.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||f.support.boxModel&&g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;
return{top:n,left:o}
}:f.fn.offset=function(a){var b=this[0];
if(a){return this.each(function(b){f.offset.setOffset(this,a,b)
})
}if(!b||!b.ownerDocument){return null
}if(b===b.ownerDocument.body){return f.offset.bodyOffset(b)
}var c,d=b.offsetParent,e=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;
while((b=b.parentNode)&&b!==i&&b!==h){if(f.support.fixedPosition&&k.position==="fixed"){break
}c=j?j.getComputedStyle(b,null):b.currentStyle,l-=b.scrollTop,m-=b.scrollLeft,b===d&&(l+=b.offsetTop,m+=b.offsetLeft,f.support.doesNotAddBorder&&(!f.support.doesAddBorderForTableAndCells||!cw.test(b.nodeName))&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),e=d,d=b.offsetParent),f.support.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),k=c
}if(k.position==="relative"||k.position==="static"){l+=i.offsetTop,m+=i.offsetLeft
}f.support.fixedPosition&&k.position==="fixed"&&(l+=Math.max(h.scrollTop,i.scrollTop),m+=Math.max(h.scrollLeft,i.scrollLeft));
return{top:l,left:m}
},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;
f.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);
return{top:b,left:c}
},setOffset:function(a,b,c){var d=f.css(a,"position");
d==="static"&&(a.style.position="relative");
var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;
j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using" in b?b.using.call(a,k):e.css(k)
}},f.fn.extend({position:function(){if(!this[0]){return null
}var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();
c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;
return{top:c.top-d.top,left:c.left-d.left}
},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;
while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static"){a=a.offsetParent
}return a
})
}}),f.each(["Left","Top"],function(a,c){var d="scroll"+c;
f.fn[d]=function(c){var e,g;
if(c===b){e=this[0];
if(!e){return null
}g=cy(e);
return g?"pageXOffset" in g?g[a?"pageYOffset":"pageXOffset"]:f.support.boxModel&&g.document.documentElement[d]||g.document.body[d]:e[d]
}return this.each(function(){g=cy(this),g?g.scrollTo(a?f(g).scrollLeft():c,a?c:f(g).scrollTop()):this[d]=c
})
}
}),f.each(["Height","Width"],function(a,c){var d=c.toLowerCase();
f.fn["inner"+c]=function(){var a=this[0];
return a?a.style?parseFloat(f.css(a,d,"padding")):this[d]():null
},f.fn["outer"+c]=function(a){var b=this[0];
return b?b.style?parseFloat(f.css(b,d,a?"margin":"border")):this[d]():null
},f.fn[d]=function(a){var e=this[0];
if(!e){return a==null?null:this
}if(f.isFunction(a)){return this.each(function(b){var c=f(this);
c[d](a.call(this,b,c[d]()))
})
}if(f.isWindow(e)){var g=e.document.documentElement["client"+c],h=e.document.body;
return e.document.compatMode==="CSS1Compat"&&g||h&&h["client"+c]||g
}if(e.nodeType===9){return Math.max(e.documentElement["client"+c],e.body["scroll"+c],e.documentElement["scroll"+c],e.body["offset"+c],e.documentElement["offset"+c])
}if(a===b){var i=f.css(e,d),j=parseFloat(i);
return f.isNumeric(j)?j:i
}return this.css(d,typeof a=="string"?a:a+"px")
}
}),a.jQuery=a.$=f,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return f
})
})(window);
(function(n,p,v){var x=n([]),s=n.resize=n.extend(n.resize,{}),o,l="setTimeout",m="resize",u=m+"-special-event",w="delay",r="throttleWindow";
s[w]=250;
s[r]=true;
n.event.special[m]={setup:function(){if(!s[r]&&this[l]){return false
}var a=n(this);
x=x.add(a);
n.data(this,u,{w:a.width(),h:a.height()});
if(x.length===1){q()
}},teardown:function(){if(!s[r]&&this[l]){return false
}var a=n(this);
x=x.not(a);
a.removeData(u);
if(!x.length){clearTimeout(o)
}},add:function(b){if(!s[r]&&this[l]){return false
}var c;
function a(d,h,g){var f=n(this),e=n.data(this,u);
e.w=h!==v?h:f.width();
e.h=g!==v?g:f.height();
c.apply(this,arguments)
}if(n.isFunction(b)){c=b;
return a
}else{c=b.handler;
b.handler=a
}}};
function q(){o=p[l](function(){x.each(function(){var d=n(this),a=d.width(),b=d.height(),c=n.data(this,u);
if(a!==c.w||b!==c.h){d.trigger(m,[c.w=a,c.h=b])
}});
q()
},s[w])
}})(jQuery,this);
var updateMenuJSON=false;
var updateWayfinderJSON=false;
var fireCheckEvent=false;
function assembleTree(a,b){var d;
for(d=0;
d<b.length;
d++){newNode=a.appendChild({text:b[d].text,expandable:true,expanded:true,leaf:true,isMegaTitle:b[d].isMegaTitle});
if(b[d].children.length>0){assembleTree(newNode,b[d].children)
}}}function getJson(e){e.expandChildNodes();
var c={};
var a=e.attributes;
for(var d in a){if(d=="src"||d=="text"||d=="isMegaTitle"){c[d]=a[d]
}}c.children=[];
if(e.childNodes.length>0){for(var b=0;
b<e.childNodes.length;
b++){c.children.push(getJson(e.childNodes[b]))
}}return c
}function getMenuStyle(c,a){var b;
if(c!="undefined"&&(typeof c.currentStyle!="undefined")){b=c.currentStyle
}else{b=document.defaultView.getComputedStyle(c,null)
}return b[a]
}var jqtabs=jQuery.noConflict();
var jqcal=jQuery.noConflict();
var jqslideshow=jQuery.noConflict();
var jqgal=jQuery.noConflict();
jQuery(document).ready(function(){jQuery("#skip_to_content").click(function(a){if(!jQuery("#skip_to_content_inner").length){jQuery(".mt_mainContent").eq(0).prepend('<a href="" id="skip_to_content_inner" alt="You are now in the main content area" style="position:absolute;left:-10000px;top:auto;width:1px;height:1px;overflow:hidden;">You are now in the main content area</a>');
jQuery("#skip_to_content_inner").click(function(b){b.preventDefault()
})
}jQuery("#skip_to_content_inner").focus();
a.preventDefault()
});
setInterval(function(){jQuery(".cq-editrollover-insert-message").each(function(a,c){var b=jQuery(c).parent().width();
if(b<=45){jQuery(c).css("font-size","0px")
}else{if(b<=50){jQuery(c).css("font-size","6px")
}else{if(b<=55){jQuery(c).css("font-size","7px")
}else{if(b<=70){jQuery(c).css("font-size","8px")
}else{if(b<=85){jQuery(c).css("font-size","10px")
}else{if(b<=105){jQuery(c).css("font-size","12px")
}else{if(b<=125){jQuery(c).css("font-size","13px")
}else{jQuery(c).css("font-size","16px")
}}}}}}}})
},1500)
});
/*!
 * jQuery UI 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI
 */
(function(e,d){function b(f,c){var g=f.nodeName.toLowerCase();
if("area"===g){c=f.parentNode;
g=c.name;
if(!f.href||!g||c.nodeName.toLowerCase()!=="map"){return false
}f=e("img[usemap=#"+g+"]")[0];
return !!f&&a(f)
}return(/input|select|textarea|button|object/.test(g)?!f.disabled:"a"==g?f.href||c:c)&&a(f)
}function a(c){return !e(c).parents().andSelf().filter(function(){return e.curCSS(this,"visibility")==="hidden"||e.expr.filters.hidden(this)
}).length
}e.ui=e.ui||{};
if(!e.ui.version){e.extend(e.ui,{version:"1.8.16",keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}});
e.fn.extend({propAttr:e.fn.prop||e.fn.attr,_focus:e.fn.focus,focus:function(f,c){return typeof f==="number"?this.each(function(){var g=this;
setTimeout(function(){e(g).focus();
c&&c.call(g)
},f)
}):this._focus.apply(this,arguments)
},scrollParent:function(){var c;
c=e.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.curCSS(this,"position",1))&&/(auto|scroll)/.test(e.curCSS(this,"overflow",1)+e.curCSS(this,"overflow-y",1)+e.curCSS(this,"overflow-x",1))
}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(e.curCSS(this,"overflow",1)+e.curCSS(this,"overflow-y",1)+e.curCSS(this,"overflow-x",1))
}).eq(0);
return/fixed/.test(this.css("position"))||!c.length?e(document):c
},zIndex:function(f){if(f!==d){return this.css("zIndex",f)
}if(this.length){f=e(this[0]);
for(var c;
f.length&&f[0]!==document;
){c=f.css("position");
if(c==="absolute"||c==="relative"||c==="fixed"){c=parseInt(f.css("zIndex"),10);
if(!isNaN(c)&&c!==0){return c
}}f=f.parent()
}}return 0
},disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(c){c.preventDefault()
})
},enableSelection:function(){return this.unbind(".ui-disableSelection")
}});
e.each(["Width","Height"],function(f,c){function l(p,o,h,q){e.each(k,function(){o-=parseFloat(e.curCSS(p,"padding"+this,true))||0;
if(h){o-=parseFloat(e.curCSS(p,"border"+this+"Width",true))||0
}if(q){o-=parseFloat(e.curCSS(p,"margin"+this,true))||0
}});
return o
}var k=c==="Width"?["Left","Right"]:["Top","Bottom"],j=c.toLowerCase(),g={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};
e.fn["inner"+c]=function(h){if(h===d){return g["inner"+c].call(this)
}return this.each(function(){e(this).css(j,l(this,h)+"px")
})
};
e.fn["outer"+c]=function(m,h){if(typeof m!=="number"){return g["outer"+c].call(this,m)
}return this.each(function(){e(this).css(j,l(this,m,true,h)+"px")
})
}
});
e.extend(e.expr[":"],{data:function(f,c,g){return !!e.data(f,g[3])
},focusable:function(c){return b(c,!isNaN(e.attr(c,"tabindex")))
},tabbable:function(f){var c=e.attr(f,"tabindex"),g=isNaN(c);
return(g||c>=0)&&b(f,!g)
}});
e(function(){var f=document.body,c=f.appendChild(c=document.createElement("div"));
e.extend(c.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0});
e.support.minHeight=c.offsetHeight===100;
e.support.selectstart="onselectstart" in c;
f.removeChild(c).style.display="none"
});
e.extend(e.ui,{plugin:{add:function(f,c,h){f=e.ui[f].prototype;
for(var g in h){f.plugins[g]=f.plugins[g]||[];
f.plugins[g].push([c,h[g]])
}},call:function(f,c,h){if((c=f.plugins[c])&&f.element[0].parentNode){for(var g=0;
g<c.length;
g++){f.options[c[g][0]]&&c[g][1].apply(f.element,h)
}}}},contains:function(f,c){return document.compareDocumentPosition?f.compareDocumentPosition(c)&16:f!==c&&f.contains(c)
},hasScroll:function(f,c){if(e(f).css("overflow")==="hidden"){return false
}c=c&&c==="left"?"scrollLeft":"scrollTop";
var g=false;
if(f[c]>0){return true
}f[c]=1;
g=f[c]>0;
f[c]=0;
return g
},isOverAxis:function(f,c,g){return f>c&&f<c+g
},isOver:function(f,c,l,k,j,g){return e.ui.isOverAxis(f,l,j)&&e.ui.isOverAxis(c,k,g)
}})
}})(jQuery);
/*!
 * jQuery UI Widget 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Widget
 */
(function(a,e){if(a.cleanData){var d=a.cleanData;
a.cleanData=function(b){for(var h=0,g;
(g=b[h])!=null;
h++){try{a(g).triggerHandler("remove")
}catch(f){}}d(b)
}
}else{var c=a.fn.remove;
a.fn.remove=function(b,f){return this.each(function(){if(!f){if(!b||a.filter(b,[this]).length){a("*",this).add([this]).each(function(){try{a(this).triggerHandler("remove")
}catch(g){}})
}}return c.call(a(this),b,f)
})
}
}a.widget=function(b,k,j){var h=b.split(".")[0],g;
b=b.split(".")[1];
g=h+"-"+b;
if(!j){j=k;
k=a.Widget
}a.expr[":"][g]=function(f){return !!a.data(f,b)
};
a[h]=a[h]||{};
a[h][b]=function(f,l){arguments.length&&this._createWidget(f,l)
};
k=new k;
k.options=a.extend(true,{},k.options);
a[h][b].prototype=a.extend(true,k,{namespace:h,widgetName:b,widgetEventPrefix:a[h][b].prototype.widgetEventPrefix||b,widgetBaseClass:g},j);
a.widget.bridge(b,a[h][b])
};
a.widget.bridge=function(b,f){a.fn[b]=function(l){var k=typeof l==="string",j=Array.prototype.slice.call(arguments,1),g=this;
l=!k&&j.length?a.extend.apply(null,[true,l].concat(j)):l;
if(k&&l.charAt(0)==="_"){return g
}k?this.each(function(){var m=a.data(this,b),h=m&&a.isFunction(m[l])?m[l].apply(m,j):m;
if(h!==m&&h!==e){g=h;
return false
}}):this.each(function(){var h=a.data(this,b);
h?h.option(l||{})._init():a.data(this,b,new f(l,this))
});
return g
}
};
a.Widget=function(b,f){arguments.length&&this._createWidget(b,f)
};
a.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:false},_createWidget:function(b,g){a.data(g,this.widgetName,this);
this.element=a(g);
this.options=a.extend(true,{},this.options,this._getCreateOptions(),b);
var f=this;
this.element.bind("remove."+this.widgetName,function(){f.destroy()
});
this._create();
this._trigger("create");
this._init()
},_getCreateOptions:function(){return a.metadata&&a.metadata.get(this.element[0])[this.widgetName]
},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName);
this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled ui-state-disabled")
},widget:function(){return this.element
},option:function(b,g){var f=b;
if(arguments.length===0){return a.extend({},this.options)
}if(typeof b==="string"){if(g===e){return this.options[b]
}f={};
f[b]=g
}this._setOptions(f);
return this
},_setOptions:function(b){var f=this;
a.each(b,function(h,g){f._setOption(h,g)
});
return this
},_setOption:function(b,f){this.options[b]=f;
if(b==="disabled"){this.widget()[f?"addClass":"removeClass"](this.widgetBaseClass+"-disabled ui-state-disabled").attr("aria-disabled",f)
}return this
},enable:function(){return this._setOption("disabled",false)
},disable:function(){return this._setOption("disabled",true)
},_trigger:function(b,k,j){var h=this.options[b];
k=a.Event(k);
k.type=(b===this.widgetEventPrefix?b:this.widgetEventPrefix+b).toLowerCase();
j=j||{};
if(k.originalEvent){b=a.event.props.length;
for(var g;
b;
){g=a.event.props[--b];
k[g]=k.originalEvent[g]
}}this.element.trigger(k,j);
return !(a.isFunction(h)&&h.call(this.element[0],k,j)===false||k.isDefaultPrevented())
}}
})(jQuery);
/*!
 * jQuery UI Mouse 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Mouse
 *
 * Depends:
 *	jquery.ui.widget.js
 */
(function(a){var c=false;
a(document).mouseup(function(){c=false
});
a.widget("ui.mouse",{options:{cancel:":input,option",distance:1,delay:0},_mouseInit:function(){var b=this;
this.element.bind("mousedown."+this.widgetName,function(d){return b._mouseDown(d)
}).bind("click."+this.widgetName,function(d){if(true===a.data(d.target,b.widgetName+".preventClickEvent")){a.removeData(d.target,b.widgetName+".preventClickEvent");
d.stopImmediatePropagation();
return false
}});
this.started=false
},_mouseDestroy:function(){this.element.unbind("."+this.widgetName)
},_mouseDown:function(b){if(!c){this._mouseStarted&&this._mouseUp(b);
this._mouseDownEvent=b;
var h=this,e=b.which==1,d=typeof this.options.cancel=="string"&&b.target.nodeName?a(b.target).closest(this.options.cancel).length:false;
if(!e||d||!this._mouseCapture(b)){return true
}this.mouseDelayMet=!this.options.delay;
if(!this.mouseDelayMet){this._mouseDelayTimer=setTimeout(function(){h.mouseDelayMet=true
},this.options.delay)
}if(this._mouseDistanceMet(b)&&this._mouseDelayMet(b)){this._mouseStarted=this._mouseStart(b)!==false;
if(!this._mouseStarted){b.preventDefault();
return true
}}true===a.data(b.target,this.widgetName+".preventClickEvent")&&a.removeData(b.target,this.widgetName+".preventClickEvent");
this._mouseMoveDelegate=function(f){return h._mouseMove(f)
};
this._mouseUpDelegate=function(f){return h._mouseUp(f)
};
a(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);
b.preventDefault();
return c=true
}},_mouseMove:function(b){if(a.browser.msie&&!(document.documentMode>=9)&&!b.button){return this._mouseUp(b)
}if(this._mouseStarted){this._mouseDrag(b);
return b.preventDefault()
}if(this._mouseDistanceMet(b)&&this._mouseDelayMet(b)){(this._mouseStarted=this._mouseStart(this._mouseDownEvent,b)!==false)?this._mouseDrag(b):this._mouseUp(b)
}return !this._mouseStarted
},_mouseUp:function(b){a(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);
if(this._mouseStarted){this._mouseStarted=false;
b.target==this._mouseDownEvent.target&&a.data(b.target,this.widgetName+".preventClickEvent",true);
this._mouseStop(b)
}return false
},_mouseDistanceMet:function(b){return Math.max(Math.abs(this._mouseDownEvent.pageX-b.pageX),Math.abs(this._mouseDownEvent.pageY-b.pageY))>=this.options.distance
},_mouseDelayMet:function(){return this.mouseDelayMet
},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return true
}})
})(jQuery);
(function(f){f.ui=f.ui||{};
var e=/left|center|right/,d=/top|center|bottom/,b=f.fn.position,a=f.fn.offset;
f.fn.position=function(c){if(!c||!c.of){return b.apply(this,arguments)
}c=f.extend({},c);
var l=f(c.of),r=l[0],p=(c.collision||"flip").split(" "),q=c.offset?c.offset.split(" "):[0,0],o,m,n;
if(r.nodeType===9){o=l.width();
m=l.height();
n={top:0,left:0}
}else{if(r.setTimeout){o=l.width();
m=l.height();
n={top:l.scrollTop(),left:l.scrollLeft()}
}else{if(r.preventDefault){c.at="left top";
o=m=0;
n={top:c.of.pageY,left:c.of.pageX}
}else{o=l.outerWidth();
m=l.outerHeight();
n=l.offset()
}}}f.each(["my","at"],function(){var g=(c[this]||"").split(" ");
if(g.length===1){g=e.test(g[0])?g.concat(["center"]):d.test(g[0])?["center"].concat(g):["center","center"]
}g[0]=e.test(g[0])?g[0]:"center";
g[1]=d.test(g[1])?g[1]:"center";
c[this]=g
});
if(p.length===1){p[1]=p[0]
}q[0]=parseInt(q[0],10)||0;
if(q.length===1){q[1]=q[0]
}q[1]=parseInt(q[1],10)||0;
if(c.at[0]==="right"){n.left+=o
}else{if(c.at[0]==="center"){n.left+=o/2
}}if(c.at[1]==="bottom"){n.top+=m
}else{if(c.at[1]==="center"){n.top+=m/2
}}n.left+=q[0];
n.top+=q[1];
return this.each(function(){var x=f(this),s=x.outerWidth(),k=x.outerHeight(),j=parseInt(f.curCSS(this,"marginLeft",true))||0,h=parseInt(f.curCSS(this,"marginTop",true))||0,z=s+j+(parseInt(f.curCSS(this,"marginRight",true))||0),y=k+h+(parseInt(f.curCSS(this,"marginBottom",true))||0),u=f.extend({},n),g;
if(c.my[0]==="right"){u.left-=s
}else{if(c.my[0]==="center"){u.left-=s/2
}}if(c.my[1]==="bottom"){u.top-=k
}else{if(c.my[1]==="center"){u.top-=k/2
}}u.left=Math.round(u.left);
u.top=Math.round(u.top);
g={left:u.left-j,top:u.top-h};
f.each(["left","top"],function(w,v){f.ui.position[p[w]]&&f.ui.position[p[w]][v](u,{targetWidth:o,targetHeight:m,elemWidth:s,elemHeight:k,collisionPosition:g,collisionWidth:z,collisionHeight:y,offset:q,my:c.my,at:c.at})
});
f.fn.bgiframe&&x.bgiframe();
x.offset(f.extend(u,{using:c.using}))
})
};
f.ui.position={fit:{left:function(c,g){var h=f(window);
h=g.collisionPosition.left+g.collisionWidth-h.width()-h.scrollLeft();
c.left=h>0?c.left-h:Math.max(c.left-g.collisionPosition.left,c.left)
},top:function(c,g){var h=f(window);
h=g.collisionPosition.top+g.collisionHeight-h.height()-h.scrollTop();
c.top=h>0?c.top-h:Math.max(c.top-g.collisionPosition.top,c.top)
}},flip:{left:function(c,j){if(j.at[0]!=="center"){var n=f(window);
n=j.collisionPosition.left+j.collisionWidth-n.width()-n.scrollLeft();
var l=j.my[0]==="left"?-j.elemWidth:j.my[0]==="right"?j.elemWidth:0,m=j.at[0]==="left"?j.targetWidth:-j.targetWidth,k=-2*j.offset[0];
c.left+=j.collisionPosition.left<0?l+m+k:n>0?l+m+k:0
}},top:function(c,j){if(j.at[1]!=="center"){var n=f(window);
n=j.collisionPosition.top+j.collisionHeight-n.height()-n.scrollTop();
var l=j.my[1]==="top"?-j.elemHeight:j.my[1]==="bottom"?j.elemHeight:0,m=j.at[1]==="top"?j.targetHeight:-j.targetHeight,k=-2*j.offset[1];
c.top+=j.collisionPosition.top<0?l+m+k:n>0?l+m+k:0
}}}};
if(!f.offset.setOffset){f.offset.setOffset=function(c,j){if(/static/.test(f.curCSS(c,"position"))){c.style.position="relative"
}var n=f(c),l=n.offset(),m=parseInt(f.curCSS(c,"top",true),10)||0,k=parseInt(f.curCSS(c,"left",true),10)||0;
l={top:j.top-l.top+m,left:j.left-l.left+k};
"using" in j?j.using.call(c,l):n.css(l)
};
f.fn.offset=function(c){var g=this[0];
if(!g||!g.ownerDocument){return null
}if(c){return this.each(function(){f.offset.setOffset(this,c)
})
}return a.call(this)
}
}})(jQuery);
(function(a){a.widget("ui.draggable",a.ui.mouse,{widgetEventPrefix:"drag",options:{addClasses:true,appendTo:"parent",axis:false,connectToSortable:false,containment:false,cursor:"auto",cursorAt:false,grid:false,handle:false,helper:"original",iframeFix:false,opacity:false,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:false},_create:function(){if(this.options.helper=="original"&&!/^(?:r|a|f)/.test(this.element.css("position"))){this.element[0].style.position="relative"
}this.options.addClasses&&this.element.addClass("ui-draggable");
this.options.disabled&&this.element.addClass("ui-draggable-disabled");
this._mouseInit()
},destroy:function(){if(this.element.data("draggable")){this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");
this._mouseDestroy();
return this
}},_mouseCapture:function(d){var c=this.options;
if(this.helper||c.disabled||a(d.target).is(".ui-resizable-handle")){return false
}this.handle=this._getHandle(d);
if(!this.handle){return false
}if(c.iframeFix){a(c.iframeFix===true?"iframe":c.iframeFix).each(function(){a('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1000}).css(a(this).offset()).appendTo("body")
})
}return true
},_mouseStart:function(d){var c=this.options;
this.helper=this._createHelper(d);
this._cacheHelperProportions();
if(a.ui.ddmanager){a.ui.ddmanager.current=this
}this._cacheMargins();
this.cssPosition=this.helper.css("position");
this.scrollParent=this.helper.scrollParent();
this.offset=this.positionAbs=this.element.offset();
this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};
a.extend(this.offset,{click:{left:d.pageX-this.offset.left,top:d.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});
this.originalPosition=this.position=this._generatePosition(d);
this.originalPageX=d.pageX;
this.originalPageY=d.pageY;
c.cursorAt&&this._adjustOffsetFromHelper(c.cursorAt);
c.containment&&this._setContainment();
if(this._trigger("start",d)===false){this._clear();
return false
}this._cacheHelperProportions();
a.ui.ddmanager&&!c.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,d);
this.helper.addClass("ui-draggable-dragging");
this._mouseDrag(d,true);
a.ui.ddmanager&&a.ui.ddmanager.dragStart(this,d);
return true
},_mouseDrag:function(d,c){this.position=this._generatePosition(d);
this.positionAbs=this._convertPositionTo("absolute");
if(!c){c=this._uiHash();
if(this._trigger("drag",d,c)===false){this._mouseUp({});
return false
}this.position=c.position
}if(!this.options.axis||this.options.axis!="y"){this.helper[0].style.left=this.position.left+"px"
}if(!this.options.axis||this.options.axis!="x"){this.helper[0].style.top=this.position.top+"px"
}a.ui.ddmanager&&a.ui.ddmanager.drag(this,d);
return false
},_mouseStop:function(e){var d=false;
if(a.ui.ddmanager&&!this.options.dropBehaviour){d=a.ui.ddmanager.drop(this,e)
}if(this.dropped){d=this.dropped;
this.dropped=false
}if((!this.element[0]||!this.element[0].parentNode)&&this.options.helper=="original"){return false
}if(this.options.revert=="invalid"&&!d||this.options.revert=="valid"&&d||this.options.revert===true||a.isFunction(this.options.revert)&&this.options.revert.call(this.element,d)){var f=this;
a(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){f._trigger("stop",e)!==false&&f._clear()
})
}else{this._trigger("stop",e)!==false&&this._clear()
}return false
},_mouseUp:function(b){this.options.iframeFix===true&&a("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)
});
a.ui.ddmanager&&a.ui.ddmanager.dragStop(this,b);
return a.ui.mouse.prototype._mouseUp.call(this,b)
},cancel:function(){this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear();
return this
},_getHandle:function(d){var c=!this.options.handle||!a(this.options.handle,this.element).length?true:false;
a(this.options.handle,this.element).find("*").andSelf().each(function(){if(this==d.target){c=true
}});
return c
},_createHelper:function(d){var c=this.options;
d=a.isFunction(c.helper)?a(c.helper.apply(this.element[0],[d])):c.helper=="clone"?this.element.clone().removeAttr("id"):this.element;
d.parents("body").length||d.appendTo(c.appendTo=="parent"?this.element[0].parentNode:c.appendTo);
d[0]!=this.element[0]&&!/(fixed|absolute)/.test(d.css("position"))&&d.css("position","absolute");
return d
},_adjustOffsetFromHelper:function(b){if(typeof b=="string"){b=b.split(" ")
}if(a.isArray(b)){b={left:+b[0],top:+b[1]||0}
}if("left" in b){this.offset.click.left=b.left+this.margins.left
}if("right" in b){this.offset.click.left=this.helperProportions.width-b.right+this.margins.left
}if("top" in b){this.offset.click.top=b.top+this.margins.top
}if("bottom" in b){this.offset.click.top=this.helperProportions.height-b.bottom+this.margins.top
}},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();
var b=this.offsetParent.offset();
if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0])){b.left+=this.scrollParent.scrollLeft();
b.top+=this.scrollParent.scrollTop()
}if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&a.browser.msie){b={top:0,left:0}
}return{top:b.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:b.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}
},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var b=this.element.position();
return{top:b.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:b.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}
}else{return{top:0,left:0}
}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}
},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}
},_setContainment:function(){var e=this.options;
if(e.containment=="parent"){e.containment=this.helper[0].parentNode
}if(e.containment=="document"||e.containment=="window"){this.containment=[e.containment=="document"?0:a(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,e.containment=="document"?0:a(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,(e.containment=="document"?0:a(window).scrollLeft())+a(e.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(e.containment=="document"?0:a(window).scrollTop())+(a(e.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]
}if(!/^(document|window|parent)$/.test(e.containment)&&e.containment.constructor!=Array){e=a(e.containment);
var d=e[0];
if(d){e.offset();
var f=a(d).css("overflow")!="hidden";
this.containment=[(parseInt(a(d).css("borderLeftWidth"),10)||0)+(parseInt(a(d).css("paddingLeft"),10)||0),(parseInt(a(d).css("borderTopWidth"),10)||0)+(parseInt(a(d).css("paddingTop"),10)||0),(f?Math.max(d.scrollWidth,d.offsetWidth):d.offsetWidth)-(parseInt(a(d).css("borderLeftWidth"),10)||0)-(parseInt(a(d).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(f?Math.max(d.scrollHeight,d.offsetHeight):d.offsetHeight)-(parseInt(a(d).css("borderTopWidth"),10)||0)-(parseInt(a(d).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom];
this.relative_container=e
}}else{if(e.containment.constructor==Array){this.containment=e.containment
}}},_convertPositionTo:function(e,d){if(!d){d=this.position
}e=e=="absolute"?1:-1;
var h=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,g=/(html|body)/i.test(h[0].tagName);
return{top:d.top+this.offset.relative.top*e+this.offset.parent.top*e-(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():g?0:h.scrollTop())*e),left:d.left+this.offset.relative.left*e+this.offset.parent.left*e-(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():g?0:h.scrollLeft())*e)}
},_generatePosition:function(j){var d=this.options,o=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,m=/(html|body)/i.test(o[0].tagName),n=j.pageX,k=j.pageY;
if(this.originalPosition){var l;
if(this.containment){if(this.relative_container){l=this.relative_container.offset();
l=[this.containment[0]+l.left,this.containment[1]+l.top,this.containment[2]+l.left,this.containment[3]+l.top]
}else{l=this.containment
}if(j.pageX-this.offset.click.left<l[0]){n=l[0]+this.offset.click.left
}if(j.pageY-this.offset.click.top<l[1]){k=l[1]+this.offset.click.top
}if(j.pageX-this.offset.click.left>l[2]){n=l[2]+this.offset.click.left
}if(j.pageY-this.offset.click.top>l[3]){k=l[3]+this.offset.click.top
}}if(d.grid){k=d.grid[1]?this.originalPageY+Math.round((k-this.originalPageY)/d.grid[1])*d.grid[1]:this.originalPageY;
k=l?!(k-this.offset.click.top<l[1]||k-this.offset.click.top>l[3])?k:!(k-this.offset.click.top<l[1])?k-d.grid[1]:k+d.grid[1]:k;
n=d.grid[0]?this.originalPageX+Math.round((n-this.originalPageX)/d.grid[0])*d.grid[0]:this.originalPageX;
n=l?!(n-this.offset.click.left<l[0]||n-this.offset.click.left>l[2])?n:!(n-this.offset.click.left<l[0])?n-d.grid[0]:n+d.grid[0]:n
}}return{top:k-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollTop():m?0:o.scrollTop()),left:n-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():m?0:o.scrollLeft())}
},_clear:function(){this.helper.removeClass("ui-draggable-dragging");
this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval&&this.helper.remove();
this.helper=null;
this.cancelHelperRemoval=false
},_trigger:function(e,d,f){f=f||this._uiHash();
a.ui.plugin.call(this,e,[d,f]);
if(e=="drag"){this.positionAbs=this._convertPositionTo("absolute")
}return a.Widget.prototype._trigger.call(this,e,d,f)
},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}
}});
a.extend(a.ui.draggable,{version:"1.8.16"});
a.ui.plugin.add("draggable","connectToSortable",{start:function(g,d){var k=a(this).data("draggable"),h=k.options,j=a.extend({},d,{item:k.element});
k.sortables=[];
a(h.connectToSortable).each(function(){var b=a.data(this,"sortable");
if(b&&!b.options.disabled){k.sortables.push({instance:b,shouldRevert:b.options.revert});
b.refreshPositions();
b._trigger("activate",g,j)
}})
},stop:function(e,d){var h=a(this).data("draggable"),g=a.extend({},d,{item:h.element});
a.each(h.sortables,function(){if(this.instance.isOver){this.instance.isOver=0;
h.cancelHelperRemoval=true;
this.instance.cancelHelperRemoval=false;
if(this.shouldRevert){this.instance.options.revert=true
}this.instance._mouseStop(e);
this.instance.options.helper=this.instance.options._helper;
h.options.helper=="original"&&this.instance.currentItem.css({top:"auto",left:"auto"})
}else{this.instance.cancelHelperRemoval=false;
this.instance._trigger("deactivate",e,g)
}})
},drag:function(e,d){var h=a(this).data("draggable"),g=this;
a.each(h.sortables,function(){this.instance.positionAbs=h.positionAbs;
this.instance.helperProportions=h.helperProportions;
this.instance.offset.click=h.offset.click;
if(this.instance._intersectsWith(this.instance.containerCache)){if(!this.instance.isOver){this.instance.isOver=1;
this.instance.currentItem=a(g).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item",true);
this.instance.options._helper=this.instance.options.helper;
this.instance.options.helper=function(){return d.helper[0]
};
e.target=this.instance.currentItem[0];
this.instance._mouseCapture(e,true);
this.instance._mouseStart(e,true,true);
this.instance.offset.click.top=h.offset.click.top;
this.instance.offset.click.left=h.offset.click.left;
this.instance.offset.parent.left-=h.offset.parent.left-this.instance.offset.parent.left;
this.instance.offset.parent.top-=h.offset.parent.top-this.instance.offset.parent.top;
h._trigger("toSortable",e);
h.dropped=this.instance.element;
h.currentItem=h.element;
this.instance.fromOutside=h
}this.instance.currentItem&&this.instance._mouseDrag(e)
}else{if(this.instance.isOver){this.instance.isOver=0;
this.instance.cancelHelperRemoval=true;
this.instance.options.revert=false;
this.instance._trigger("out",e,this.instance._uiHash(this.instance));
this.instance._mouseStop(e,true);
this.instance.options.helper=this.instance.options._helper;
this.instance.currentItem.remove();
this.instance.placeholder&&this.instance.placeholder.remove();
h._trigger("fromSortable",e);
h.dropped=false
}}})
}});
a.ui.plugin.add("draggable","cursor",{start:function(){var d=a("body"),c=a(this).data("draggable").options;
if(d.css("cursor")){c._cursor=d.css("cursor")
}d.css("cursor",c.cursor)
},stop:function(){var b=a(this).data("draggable").options;
b._cursor&&a("body").css("cursor",b._cursor)
}});
a.ui.plugin.add("draggable","opacity",{start:function(d,c){d=a(c.helper);
c=a(this).data("draggable").options;
if(d.css("opacity")){c._opacity=d.css("opacity")
}d.css("opacity",c.opacity)
},stop:function(d,c){d=a(this).data("draggable").options;
d._opacity&&a(c.helper).css("opacity",d._opacity)
}});
a.ui.plugin.add("draggable","scroll",{start:function(){var b=a(this).data("draggable");
if(b.scrollParent[0]!=document&&b.scrollParent[0].tagName!="HTML"){b.overflowOffset=b.scrollParent.offset()
}},drag:function(e){var d=a(this).data("draggable"),h=d.options,g=false;
if(d.scrollParent[0]!=document&&d.scrollParent[0].tagName!="HTML"){if(!h.axis||h.axis!="x"){if(d.overflowOffset.top+d.scrollParent[0].offsetHeight-e.pageY<h.scrollSensitivity){d.scrollParent[0].scrollTop=g=d.scrollParent[0].scrollTop+h.scrollSpeed
}else{if(e.pageY-d.overflowOffset.top<h.scrollSensitivity){d.scrollParent[0].scrollTop=g=d.scrollParent[0].scrollTop-h.scrollSpeed
}}}if(!h.axis||h.axis!="y"){if(d.overflowOffset.left+d.scrollParent[0].offsetWidth-e.pageX<h.scrollSensitivity){d.scrollParent[0].scrollLeft=g=d.scrollParent[0].scrollLeft+h.scrollSpeed
}else{if(e.pageX-d.overflowOffset.left<h.scrollSensitivity){d.scrollParent[0].scrollLeft=g=d.scrollParent[0].scrollLeft-h.scrollSpeed
}}}}else{if(!h.axis||h.axis!="x"){if(e.pageY-a(document).scrollTop()<h.scrollSensitivity){g=a(document).scrollTop(a(document).scrollTop()-h.scrollSpeed)
}else{if(a(window).height()-(e.pageY-a(document).scrollTop())<h.scrollSensitivity){g=a(document).scrollTop(a(document).scrollTop()+h.scrollSpeed)
}}}if(!h.axis||h.axis!="y"){if(e.pageX-a(document).scrollLeft()<h.scrollSensitivity){g=a(document).scrollLeft(a(document).scrollLeft()-h.scrollSpeed)
}else{if(a(window).width()-(e.pageX-a(document).scrollLeft())<h.scrollSensitivity){g=a(document).scrollLeft(a(document).scrollLeft()+h.scrollSpeed)
}}}}g!==false&&a.ui.ddmanager&&!h.dropBehaviour&&a.ui.ddmanager.prepareOffsets(d,e)
}});
a.ui.plugin.add("draggable","snap",{start:function(){var d=a(this).data("draggable"),c=d.options;
d.snapElements=[];
a(c.snap.constructor!=String?c.snap.items||":data(draggable)":c.snap).each(function(){var e=a(this),b=e.offset();
this!=d.element[0]&&d.snapElements.push({item:this,width:e.outerWidth(),height:e.outerHeight(),top:b.top,left:b.left})
})
},drag:function(L,K){for(var J=a(this).data("draggable"),H=J.options,I=H.snapTolerance,F=K.offset.left,G=F+J.helperProportions.width,z=K.offset.top,y=z+J.helperProportions.height,E=J.snapElements.length-1;
E>=0;
E--){var D=J.snapElements[E].left,B=D+J.snapElements[E].width,C=J.snapElements[E].top,A=C+J.snapElements[E].height;
if(D-I<F&&F<B+I&&C-I<z&&z<A+I||D-I<F&&F<B+I&&C-I<y&&y<A+I||D-I<G&&G<B+I&&C-I<z&&z<A+I||D-I<G&&G<B+I&&C-I<y&&y<A+I){if(H.snapMode!="inner"){var x=Math.abs(C-y)<=I,w=Math.abs(A-z)<=I,v=Math.abs(D-G)<=I,u=Math.abs(B-F)<=I;
if(x){K.position.top=J._convertPositionTo("relative",{top:C-J.helperProportions.height,left:0}).top-J.margins.top
}if(w){K.position.top=J._convertPositionTo("relative",{top:A,left:0}).top-J.margins.top
}if(v){K.position.left=J._convertPositionTo("relative",{top:0,left:D-J.helperProportions.width}).left-J.margins.left
}if(u){K.position.left=J._convertPositionTo("relative",{top:0,left:B}).left-J.margins.left
}}var d=x||w||v||u;
if(H.snapMode!="outer"){x=Math.abs(C-z)<=I;
w=Math.abs(A-y)<=I;
v=Math.abs(D-F)<=I;
u=Math.abs(B-G)<=I;
if(x){K.position.top=J._convertPositionTo("relative",{top:C,left:0}).top-J.margins.top
}if(w){K.position.top=J._convertPositionTo("relative",{top:A-J.helperProportions.height,left:0}).top-J.margins.top
}if(v){K.position.left=J._convertPositionTo("relative",{top:0,left:D}).left-J.margins.left
}if(u){K.position.left=J._convertPositionTo("relative",{top:0,left:B-J.helperProportions.width}).left-J.margins.left
}}if(!J.snapElements[E].snapping&&(x||w||v||u||d)){J.options.snap.snap&&J.options.snap.snap.call(J.element,L,a.extend(J._uiHash(),{snapItem:J.snapElements[E].item}))
}J.snapElements[E].snapping=x||w||v||u||d
}else{J.snapElements[E].snapping&&J.options.snap.release&&J.options.snap.release.call(J.element,L,a.extend(J._uiHash(),{snapItem:J.snapElements[E].item}));
J.snapElements[E].snapping=false
}}}});
a.ui.plugin.add("draggable","stack",{start:function(){var d=a(this).data("draggable").options;
d=a.makeArray(a(d.stack)).sort(function(e,b){return(parseInt(a(e).css("zIndex"),10)||0)-(parseInt(a(b).css("zIndex"),10)||0)
});
if(d.length){var c=parseInt(d[0].style.zIndex)||0;
a(d).each(function(b){this.style.zIndex=c+b
});
this[0].style.zIndex=c+d.length
}}});
a.ui.plugin.add("draggable","zIndex",{start:function(d,c){d=a(c.helper);
c=a(this).data("draggable").options;
if(d.css("zIndex")){c._zIndex=d.css("zIndex")
}d.css("zIndex",c.zIndex)
},stop:function(d,c){d=a(this).data("draggable").options;
d._zIndex&&a(c.helper).css("zIndex",d._zIndex)
}})
})(jQuery);
(function(a){a.widget("ui.droppable",{widgetEventPrefix:"drop",options:{accept:"*",activeClass:false,addClasses:true,greedy:false,hoverClass:false,scope:"default",tolerance:"intersect"},_create:function(){var d=this.options,c=d.accept;
this.isover=0;
this.isout=1;
this.accept=a.isFunction(c)?c:function(b){return b.is(c)
};
this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight};
a.ui.ddmanager.droppables[d.scope]=a.ui.ddmanager.droppables[d.scope]||[];
a.ui.ddmanager.droppables[d.scope].push(this);
d.addClasses&&this.element.addClass("ui-droppable")
},destroy:function(){for(var d=a.ui.ddmanager.droppables[this.options.scope],c=0;
c<d.length;
c++){d[c]==this&&d.splice(c,1)
}this.element.removeClass("ui-droppable ui-droppable-disabled").removeData("droppable").unbind(".droppable");
return this
},_setOption:function(d,c){if(d=="accept"){this.accept=a.isFunction(c)?c:function(b){return b.is(c)
}
}a.Widget.prototype._setOption.apply(this,arguments)
},_activate:function(d){var c=a.ui.ddmanager.current;
this.options.activeClass&&this.element.addClass(this.options.activeClass);
c&&this._trigger("activate",d,this.ui(c))
},_deactivate:function(d){var c=a.ui.ddmanager.current;
this.options.activeClass&&this.element.removeClass(this.options.activeClass);
c&&this._trigger("deactivate",d,this.ui(c))
},_over:function(d){var c=a.ui.ddmanager.current;
if(!(!c||(c.currentItem||c.element)[0]==this.element[0])){if(this.accept.call(this.element[0],c.currentItem||c.element)){this.options.hoverClass&&this.element.addClass(this.options.hoverClass);
this._trigger("over",d,this.ui(c))
}}},_out:function(d){var c=a.ui.ddmanager.current;
if(!(!c||(c.currentItem||c.element)[0]==this.element[0])){if(this.accept.call(this.element[0],c.currentItem||c.element)){this.options.hoverClass&&this.element.removeClass(this.options.hoverClass);
this._trigger("out",d,this.ui(c))
}}},_drop:function(f,d){var h=d||a.ui.ddmanager.current;
if(!h||(h.currentItem||h.element)[0]==this.element[0]){return false
}var g=false;
this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function(){var b=a.data(this,"droppable");
if(b.options.greedy&&!b.options.disabled&&b.options.scope==h.options.scope&&b.accept.call(b.element[0],h.currentItem||h.element)&&a.ui.intersect(h,a.extend(b,{offset:b.element.offset()}),b.options.tolerance)){g=true;
return false
}});
if(g){return false
}if(this.accept.call(this.element[0],h.currentItem||h.element)){this.options.activeClass&&this.element.removeClass(this.options.activeClass);
this.options.hoverClass&&this.element.removeClass(this.options.hoverClass);
this._trigger("drop",f,this.ui(h));
return this.element
}return false
},ui:function(b){return{draggable:b.currentItem||b.element,helper:b.helper,position:b.position,offset:b.positionAbs}
}});
a.extend(a.ui.droppable,{version:"1.8.16"});
a.ui.intersect=function(w,v,u){if(!v.offset){return false
}var s=(w.positionAbs||w.position.absolute).left,q=s+w.helperProportions.width,r=(w.positionAbs||w.position.absolute).top,p=r+w.helperProportions.height,o=v.offset.left,m=o+v.proportions.width,n=v.offset.top,d=n+v.proportions.height;
switch(u){case"fit":return o<=s&&q<=m&&n<=r&&p<=d;
case"intersect":return o<s+w.helperProportions.width/2&&q-w.helperProportions.width/2<m&&n<r+w.helperProportions.height/2&&p-w.helperProportions.height/2<d;
case"pointer":return a.ui.isOver((w.positionAbs||w.position.absolute).top+(w.clickOffset||w.offset.click).top,(w.positionAbs||w.position.absolute).left+(w.clickOffset||w.offset.click).left,n,o,v.proportions.height,v.proportions.width);
case"touch":return(r>=n&&r<=d||p>=n&&p<=d||r<n&&p>d)&&(s>=o&&s<=m||q>=o&&q<=m||s<o&&q>m);
default:return false
}};
a.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(j,d){var o=a.ui.ddmanager.droppables[j.options.scope]||[],n=d?d.type:null,l=(j.currentItem||j.element).find(":data(droppable)").andSelf(),m=0;
j:for(;
m<o.length;
m++){if(!(o[m].options.disabled||j&&!o[m].accept.call(o[m].element[0],j.currentItem||j.element))){for(var k=0;
k<l.length;
k++){if(l[k]==o[m].element[0]){o[m].proportions.height=0;
continue j
}}o[m].visible=o[m].element.css("display")!="none";
if(o[m].visible){n=="mousedown"&&o[m]._activate.call(o[m],d);
o[m].offset=o[m].element.offset();
o[m].proportions={width:o[m].element[0].offsetWidth,height:o[m].element[0].offsetHeight}
}}}},drop:function(e,d){var f=false;
a.each(a.ui.ddmanager.droppables[e.options.scope]||[],function(){if(this.options){if(!this.options.disabled&&this.visible&&a.ui.intersect(e,this,this.options.tolerance)){f=f||this._drop.call(this,d)
}if(!this.options.disabled&&this.visible&&this.accept.call(this.element[0],e.currentItem||e.element)){this.isout=1;
this.isover=0;
this._deactivate.call(this,d)
}}});
return f
},dragStart:function(d,c){d.element.parents(":not(body,html)").bind("scroll.droppable",function(){d.options.refreshPositions||a.ui.ddmanager.prepareOffsets(d,c)
})
},drag:function(d,c){d.options.refreshPositions&&a.ui.ddmanager.prepareOffsets(d,c);
a.each(a.ui.ddmanager.droppables[d.options.scope]||[],function(){if(!(this.options.disabled||this.greedyChild||!this.visible)){var h=a.ui.intersect(d,this,this.options.tolerance);
if(h=!h&&this.isover==1?"isout":h&&this.isover==0?"isover":null){var f;
if(this.options.greedy){var b=this.element.parents(":data(droppable):eq(0)");
if(b.length){f=a.data(b[0],"droppable");
f.greedyChild=h=="isover"?1:0
}}if(f&&h=="isover"){f.isover=0;
f.isout=1;
f._out.call(f,c)
}this[h]=1;
this[h=="isout"?"isover":"isout"]=0;
this[h=="isover"?"_over":"_out"].call(this,c);
if(f&&h=="isout"){f.isout=0;
f.isover=1;
f._over.call(f,c)
}}}})
},dragStop:function(d,c){d.element.parents(":not(body,html)").unbind("scroll.droppable");
d.options.refreshPositions||a.ui.ddmanager.prepareOffsets(d,c)
}}
})(jQuery);
(function(c){c.widget("ui.resizable",c.ui.mouse,{widgetEventPrefix:"resize",options:{alsoResize:false,animate:false,animateDuration:"slow",animateEasing:"swing",aspectRatio:false,autoHide:false,containment:false,ghost:false,grid:false,handles:"e,s,se",helper:false,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:1000},_create:function(){var e=this,h=this.options;
this.element.addClass("ui-resizable");
c.extend(this,{_aspectRatio:!!h.aspectRatio,aspectRatio:h.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:h.helper||h.ghost||h.animate?h.helper||"ui-resizable-helper":null});
if(this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)){/relative/.test(this.element.css("position"))&&c.browser.opera&&this.element.css({position:"relative",top:"auto",left:"auto"});
this.element.wrap(c('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")}));
this.element=this.element.parent().data("resizable",this.element.data("resizable"));
this.elementIsWrapper=true;
this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")});
this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0});
this.originalResizeStyle=this.originalElement.css("resize");
this.originalElement.css("resize","none");
this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"}));
this.originalElement.css({margin:this.originalElement.css("margin")});
this._proportionallyResize()
}this.handles=h.handles||(!c(".ui-resizable-handle",this.element).length?"e,s,se":{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"});
if(this.handles.constructor==String){if(this.handles=="all"){this.handles="n,e,s,w,se,sw,ne,nw"
}var m=this.handles.split(",");
this.handles={};
for(var l=0;
l<m.length;
l++){var k=c.trim(m[l]),j=c('<div class="ui-resizable-handle '+("ui-resizable-"+k)+'"></div>');
/sw|se|ne|nw/.test(k)&&j.css({zIndex:++h.zIndex});
"se"==k&&j.addClass("ui-icon ui-icon-gripsmall-diagonal-se");
this.handles[k]=".ui-resizable-"+k;
this.element.append(j)
}}this._renderAxis=function(n){n=n||this.element;
for(var g in this.handles){if(this.handles[g].constructor==String){this.handles[g]=c(this.handles[g],this.element).show()
}if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)){var f=c(this.handles[g],this.element),d=0;
d=/sw|ne|nw|se|n|s/.test(g)?f.outerHeight():f.outerWidth();
f=["padding",/ne|nw|n/.test(g)?"Top":/se|sw|s/.test(g)?"Bottom":/^e$/.test(g)?"Right":"Left"].join("");
n.css(f,d);
this._proportionallyResize()
}c(this.handles[g])
}};
this._renderAxis(this.element);
this._handles=c(".ui-resizable-handle",this.element).disableSelection();
this._handles.mouseover(function(){if(!e.resizing){if(this.className){var d=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)
}e.axis=d&&d[1]?d[1]:"se"
}});
if(h.autoHide){this._handles.hide();
c(this.element).addClass("ui-resizable-autohide").hover(function(){if(!h.disabled){c(this).removeClass("ui-resizable-autohide");
e._handles.show()
}},function(){if(!h.disabled){if(!e.resizing){c(this).addClass("ui-resizable-autohide");
e._handles.hide()
}}})
}this._mouseInit()
},destroy:function(){this._mouseDestroy();
var d=function(f){c(f).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
};
if(this.elementIsWrapper){d(this.element);
var e=this.element;
e.after(this.originalElement.css({position:e.css("position"),width:e.outerWidth(),height:e.outerHeight(),top:e.css("top"),left:e.css("left")})).remove()
}this.originalElement.css("resize",this.originalResizeStyle);
d(this.originalElement);
return this
},_mouseCapture:function(d){var e=false;
for(var f in this.handles){if(c(this.handles[f])[0]==d.target){e=true
}}return !this.options.disabled&&e
},_mouseStart:function(e){var g=this.options,k=this.element.position(),j=this.element;
this.resizing=true;
this.documentScroll={top:c(document).scrollTop(),left:c(document).scrollLeft()};
if(j.is(".ui-draggable")||/absolute/.test(j.css("position"))){j.css({position:"absolute",top:k.top,left:k.left})
}c.browser.opera&&/relative/.test(j.css("position"))&&j.css({position:"relative",top:"auto",left:"auto"});
this._renderProxy();
k=a(this.helper.css("left"));
var h=a(this.helper.css("top"));
if(g.containment){k+=c(g.containment).scrollLeft()||0;
h+=c(g.containment).scrollTop()||0
}this.offset=this.helper.offset();
this.position={left:k,top:h};
this.size=this._helper?{width:j.outerWidth(),height:j.outerHeight()}:{width:j.width(),height:j.height()};
this.originalSize=this._helper?{width:j.outerWidth(),height:j.outerHeight()}:{width:j.width(),height:j.height()};
this.originalPosition={left:k,top:h};
this.sizeDiff={width:j.outerWidth()-j.width(),height:j.outerHeight()-j.height()};
this.originalMousePosition={left:e.pageX,top:e.pageY};
this.aspectRatio=typeof g.aspectRatio=="number"?g.aspectRatio:this.originalSize.width/this.originalSize.height||1;
g=c(".ui-resizable-"+this.axis).css("cursor");
c("body").css("cursor",g=="auto"?this.axis+"-resize":g);
j.addClass("ui-resizable-resizing");
this._propagate("start",e);
return true
},_mouseDrag:function(e){var f=this.helper,h=this.originalMousePosition,g=this._change[this.axis];
if(!g){return false
}h=g.apply(this,[e,e.pageX-h.left||0,e.pageY-h.top||0]);
this._updateVirtualBoundaries(e.shiftKey);
if(this._aspectRatio||e.shiftKey){h=this._updateRatio(h,e)
}h=this._respectSize(h,e);
this._propagate("resize",e);
f.css({top:this.position.top+"px",left:this.position.left+"px",width:this.size.width+"px",height:this.size.height+"px"});
!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize();
this._updateCache(h);
this._trigger("resize",e,this.ui());
return false
},_mouseStop:function(e){this.resizing=false;
var h=this.options,m=this;
if(this._helper){var l=this._proportionallyResizeElements,k=l.length&&/textarea/i.test(l[0].nodeName);
l=k&&c.ui.hasScroll(l[0],"left")?0:m.sizeDiff.height;
k=k?0:m.sizeDiff.width;
k={width:m.helper.width()-k,height:m.helper.height()-l};
l=parseInt(m.element.css("left"),10)+(m.position.left-m.originalPosition.left)||null;
var j=parseInt(m.element.css("top"),10)+(m.position.top-m.originalPosition.top)||null;
h.animate||this.element.css(c.extend(k,{top:j,left:l}));
m.helper.height(m.size.height);
m.helper.width(m.size.width);
this._helper&&!h.animate&&this._proportionallyResize()
}c("body").css("cursor","auto");
this.element.removeClass("ui-resizable-resizing");
this._propagate("stop",e);
this._helper&&this.helper.remove();
return false
},_updateVirtualBoundaries:function(e){var g=this.options,k,j,h;
g={minWidth:b(g.minWidth)?g.minWidth:0,maxWidth:b(g.maxWidth)?g.maxWidth:Infinity,minHeight:b(g.minHeight)?g.minHeight:0,maxHeight:b(g.maxHeight)?g.maxHeight:Infinity};
if(this._aspectRatio||e){e=g.minHeight*this.aspectRatio;
j=g.minWidth/this.aspectRatio;
k=g.maxHeight*this.aspectRatio;
h=g.maxWidth/this.aspectRatio;
if(e>g.minWidth){g.minWidth=e
}if(j>g.minHeight){g.minHeight=j
}if(k<g.maxWidth){g.maxWidth=k
}if(h<g.maxHeight){g.maxHeight=h
}}this._vBoundaries=g
},_updateCache:function(d){this.offset=this.helper.offset();
if(b(d.left)){this.position.left=d.left
}if(b(d.top)){this.position.top=d.top
}if(b(d.height)){this.size.height=d.height
}if(b(d.width)){this.size.width=d.width
}},_updateRatio:function(e){var f=this.position,h=this.size,g=this.axis;
if(b(e.height)){e.width=e.height*this.aspectRatio
}else{if(b(e.width)){e.height=e.width/this.aspectRatio
}}if(g=="sw"){e.left=f.left+(h.width-e.width);
e.top=null
}if(g=="nw"){e.top=f.top+(h.height-e.height);
e.left=f.left+(h.width-e.width)
}return e
},_respectSize:function(s){var u=this._vBoundaries,r=this.axis,q=b(s.width)&&u.maxWidth&&u.maxWidth<s.width,p=b(s.height)&&u.maxHeight&&u.maxHeight<s.height,o=b(s.width)&&u.minWidth&&u.minWidth>s.width,n=b(s.height)&&u.minHeight&&u.minHeight>s.height;
if(o){s.width=u.minWidth
}if(n){s.height=u.minHeight
}if(q){s.width=u.maxWidth
}if(p){s.height=u.maxHeight
}var m=this.originalPosition.left+this.originalSize.width,k=this.position.top+this.size.height,e=/sw|nw|w/.test(r);
r=/nw|ne|n/.test(r);
if(o&&e){s.left=m-u.minWidth
}if(q&&e){s.left=m-u.maxWidth
}if(n&&r){s.top=k-u.minHeight
}if(p&&r){s.top=k-u.maxHeight
}if((u=!s.width&&!s.height)&&!s.left&&s.top){s.top=null
}else{if(u&&!s.top&&s.left){s.left=null
}}return s
},_proportionallyResize:function(){if(this._proportionallyResizeElements.length){for(var e=this.helper||this.element,g=0;
g<this._proportionallyResizeElements.length;
g++){var k=this._proportionallyResizeElements[g];
if(!this.borderDif){var j=[k.css("borderTopWidth"),k.css("borderRightWidth"),k.css("borderBottomWidth"),k.css("borderLeftWidth")],h=[k.css("paddingTop"),k.css("paddingRight"),k.css("paddingBottom"),k.css("paddingLeft")];
this.borderDif=c.map(j,function(f,d){f=parseInt(f,10)||0;
d=parseInt(h[d],10)||0;
return f+d
})
}c.browser.msie&&(c(e).is(":hidden")||c(e).parents(":hidden").length)||k.css({height:e.height()-this.borderDif[0]-this.borderDif[2]||0,width:e.width()-this.borderDif[1]-this.borderDif[3]||0})
}}},_renderProxy:function(){var d=this.options;
this.elementOffset=this.element.offset();
if(this._helper){this.helper=this.helper||c('<div style="overflow:hidden;"></div>');
var e=c.browser.msie&&c.browser.version<7,f=e?1:0;
e=e?2:-1;
this.helper.addClass(this._helper).css({width:this.element.outerWidth()+e,height:this.element.outerHeight()+e,position:"absolute",left:this.elementOffset.left-f+"px",top:this.elementOffset.top-f+"px",zIndex:++d.zIndex});
this.helper.appendTo("body").disableSelection()
}else{this.helper=this.element
}},_change:{e:function(d,e){return{width:this.originalSize.width+e}
},w:function(d,e){return{left:this.originalPosition.left+e,width:this.originalSize.width-e}
},n:function(d,e,f){return{top:this.originalPosition.top+f,height:this.originalSize.height-f}
},s:function(d,e,f){return{height:this.originalSize.height+f}
},se:function(d,e,f){return c.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[d,e,f]))
},sw:function(d,e,f){return c.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[d,e,f]))
},ne:function(d,e,f){return c.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[d,e,f]))
},nw:function(d,e,f){return c.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[d,e,f]))
}},_propagate:function(d,e){c.ui.plugin.call(this,d,[e,this.ui()]);
d!="resize"&&this._trigger(d,e,this.ui())
},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}
}});
c.extend(c.ui.resizable,{version:"1.8.16"});
c.ui.plugin.add("resizable","alsoResize",{start:function(){var d=c(this).data("resizable").options,e=function(f){c(f).each(function(){var g=c(this);
g.data("resizable-alsoresize",{width:parseInt(g.width(),10),height:parseInt(g.height(),10),left:parseInt(g.css("left"),10),top:parseInt(g.css("top"),10),position:g.css("position")})
})
};
if(typeof d.alsoResize=="object"&&!d.alsoResize.parentNode){if(d.alsoResize.length){d.alsoResize=d.alsoResize[0];
e(d.alsoResize)
}else{c.each(d.alsoResize,function(f){e(f)
})
}}else{e(d.alsoResize)
}},resize:function(e,j){var o=c(this).data("resizable");
e=o.options;
var n=o.originalSize,m=o.originalPosition,l={height:o.size.height-n.height||0,width:o.size.width-n.width||0,top:o.position.top-m.top||0,left:o.position.left-m.left||0},k=function(f,d){c(f).each(function(){var g=c(this),s=c(this).data("resizable-alsoresize"),u={},h=d&&d.length?d:g.parents(j.originalElement[0]).length?["width","height"]:["width","height","top","left"];
c.each(h,function(q,p){if((q=(s[p]||0)+(l[p]||0))&&q>=0){u[p]=q||null
}});
if(c.browser.opera&&/relative/.test(g.css("position"))){o._revertToRelativePosition=true;
g.css({position:"absolute",top:"auto",left:"auto"})
}g.css(u)
})
};
typeof e.alsoResize=="object"&&!e.alsoResize.nodeType?c.each(e.alsoResize,function(f,d){k(f,d)
}):k(e.alsoResize)
},stop:function(){var d=c(this).data("resizable"),e=d.options,f=function(g){c(g).each(function(){var h=c(this);
h.css({position:h.data("resizable-alsoresize").position})
})
};
if(d._revertToRelativePosition){d._revertToRelativePosition=false;
typeof e.alsoResize=="object"&&!e.alsoResize.nodeType?c.each(e.alsoResize,function(g){f(g)
}):f(e.alsoResize)
}c(this).removeData("resizable-alsoresize")
}});
c.ui.plugin.add("resizable","animate",{stop:function(e){var j=c(this).data("resizable"),o=j.options,n=j._proportionallyResizeElements,m=n.length&&/textarea/i.test(n[0].nodeName),l=m&&c.ui.hasScroll(n[0],"left")?0:j.sizeDiff.height;
m={width:j.size.width-(m?0:j.sizeDiff.width),height:j.size.height-l};
l=parseInt(j.element.css("left"),10)+(j.position.left-j.originalPosition.left)||null;
var k=parseInt(j.element.css("top"),10)+(j.position.top-j.originalPosition.top)||null;
j.element.animate(c.extend(m,k&&l?{top:k,left:l}:{}),{duration:o.animateDuration,easing:o.animateEasing,step:function(){var d={width:parseInt(j.element.css("width"),10),height:parseInt(j.element.css("height"),10),top:parseInt(j.element.css("top"),10),left:parseInt(j.element.css("left"),10)};
n&&n.length&&c(n[0]).css({width:d.width,height:d.height});
j._updateCache(d);
j._propagate("resize",e)
}})
}});
c.ui.plugin.add("resizable","containment",{start:function(){var e=c(this).data("resizable"),j=e.element,o=e.options.containment;
if(j=o instanceof c?o.get(0):/parent/.test(o)?j.parent().get(0):o){e.containerElement=c(j);
if(/document/.test(o)||o==document){e.containerOffset={left:0,top:0};
e.containerPosition={left:0,top:0};
e.parentData={element:c(document),left:0,top:0,width:c(document).width(),height:c(document).height()||document.body.parentNode.scrollHeight}
}else{var n=c(j),m=[];
c(["Top","Right","Left","Bottom"]).each(function(f,d){m[f]=a(n.css("padding"+d))
});
e.containerOffset=n.offset();
e.containerPosition=n.position();
e.containerSize={height:n.innerHeight()-m[3],width:n.innerWidth()-m[1]};
o=e.containerOffset;
var l=e.containerSize.height,k=e.containerSize.width;
k=c.ui.hasScroll(j,"left")?j.scrollWidth:k;
l=c.ui.hasScroll(j)?j.scrollHeight:l;
e.parentData={element:j,left:o.left,top:o.top,width:k,height:l}
}}},resize:function(e){var j=c(this).data("resizable"),o=j.options,n=j.containerOffset,m=j.position;
e=j._aspectRatio||e.shiftKey;
var l={top:0,left:0},k=j.containerElement;
if(k[0]!=document&&/static/.test(k.css("position"))){l=n
}if(m.left<(j._helper?n.left:0)){j.size.width+=j._helper?j.position.left-n.left:j.position.left-l.left;
if(e){j.size.height=j.size.width/o.aspectRatio
}j.position.left=o.helper?n.left:0
}if(m.top<(j._helper?n.top:0)){j.size.height+=j._helper?j.position.top-n.top:j.position.top;
if(e){j.size.width=j.size.height*o.aspectRatio
}j.position.top=j._helper?n.top:0
}j.offset.left=j.parentData.left+j.position.left;
j.offset.top=j.parentData.top+j.position.top;
o=Math.abs((j._helper?j.offset.left-l.left:j.offset.left-l.left)+j.sizeDiff.width);
n=Math.abs((j._helper?j.offset.top-l.top:j.offset.top-n.top)+j.sizeDiff.height);
m=j.containerElement.get(0)==j.element.parent().get(0);
l=/relative|absolute/.test(j.containerElement.css("position"));
if(m&&l){o-=j.parentData.left
}if(o+j.size.width>=j.parentData.width){j.size.width=j.parentData.width-o;
if(e){j.size.height=j.size.width/j.aspectRatio
}}if(n+j.size.height>=j.parentData.height){j.size.height=j.parentData.height-n;
if(e){j.size.width=j.size.height*j.aspectRatio
}}},stop:function(){var e=c(this).data("resizable"),j=e.options,p=e.containerOffset,o=e.containerPosition,n=e.containerElement,m=c(e.helper),l=m.offset(),k=m.outerWidth()-e.sizeDiff.width;
m=m.outerHeight()-e.sizeDiff.height;
e._helper&&!j.animate&&/relative/.test(n.css("position"))&&c(this).css({left:l.left-o.left-p.left,width:k,height:m});
e._helper&&!j.animate&&/static/.test(n.css("position"))&&c(this).css({left:l.left-o.left-p.left,width:k,height:m})
}});
c.ui.plugin.add("resizable","ghost",{start:function(){var d=c(this).data("resizable"),e=d.options,f=d.size;
d.ghost=d.originalElement.clone();
d.ghost.css({opacity:0.25,display:"block",position:"relative",height:f.height,width:f.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof e.ghost=="string"?e.ghost:"");
d.ghost.appendTo(d.helper)
},resize:function(){var d=c(this).data("resizable");
d.ghost&&d.ghost.css({position:"relative",height:d.size.height,width:d.size.width})
},stop:function(){var d=c(this).data("resizable");
d.ghost&&d.helper&&d.helper.get(0).removeChild(d.ghost.get(0))
}});
c.ui.plugin.add("resizable","grid",{resize:function(){var e=c(this).data("resizable"),j=e.options,o=e.size,n=e.originalSize,m=e.originalPosition,l=e.axis;
j.grid=typeof j.grid=="number"?[j.grid,j.grid]:j.grid;
var k=Math.round((o.width-n.width)/(j.grid[0]||1))*(j.grid[0]||1);
j=Math.round((o.height-n.height)/(j.grid[1]||1))*(j.grid[1]||1);
if(/^(se|s|e)$/.test(l)){e.size.width=n.width+k;
e.size.height=n.height+j
}else{if(/^(ne)$/.test(l)){e.size.width=n.width+k;
e.size.height=n.height+j;
e.position.top=m.top-j
}else{if(/^(sw)$/.test(l)){e.size.width=n.width+k;
e.size.height=n.height+j
}else{e.size.width=n.width+k;
e.size.height=n.height+j;
e.position.top=m.top-j
}e.position.left=m.left-k
}}}});
var a=function(d){return parseInt(d,10)||0
},b=function(d){return !isNaN(parseInt(d,10))
}
})(jQuery);
(function(a){a.widget("ui.selectable",a.ui.mouse,{options:{appendTo:"body",autoRefresh:true,distance:0,filter:"*",tolerance:"touch"},_create:function(){var d=this;
this.element.addClass("ui-selectable");
this.dragged=false;
var b;
this.refresh=function(){b=a(d.options.filter,d.element[0]);
b.each(function(){var e=a(this),c=e.offset();
a.data(this,"selectable-item",{element:this,$element:e,left:c.left,top:c.top,right:c.left+e.outerWidth(),bottom:c.top+e.outerHeight(),startselected:false,selected:e.hasClass("ui-selected"),selecting:e.hasClass("ui-selecting"),unselecting:e.hasClass("ui-unselecting")})
})
};
this.refresh();
this.selectees=b.addClass("ui-selectee");
this._mouseInit();
this.helper=a("<div class='ui-selectable-helper'></div>")
},destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item");
this.element.removeClass("ui-selectable ui-selectable-disabled").removeData("selectable").unbind(".selectable");
this._mouseDestroy();
return this
},_mouseStart:function(g){var b=this;
this.opos=[g.pageX,g.pageY];
if(!this.options.disabled){var e=this.options;
this.selectees=a(e.filter,this.element[0]);
this._trigger("start",g);
a(e.appendTo).append(this.helper);
this.helper.css({left:g.clientX,top:g.clientY,width:0,height:0});
e.autoRefresh&&this.refresh();
this.selectees.filter(".ui-selected").each(function(){var c=a.data(this,"selectable-item");
c.startselected=true;
if(!g.metaKey){c.$element.removeClass("ui-selected");
c.selected=false;
c.$element.addClass("ui-unselecting");
c.unselecting=true;
b._trigger("unselecting",g,{unselecting:c.element})
}});
a(g.target).parents().andSelf().each(function(){var c=a.data(this,"selectable-item");
if(c){var d=!g.metaKey||!c.$element.hasClass("ui-selected");
c.$element.removeClass(d?"ui-unselecting":"ui-selected").addClass(d?"ui-selecting":"ui-unselecting");
c.unselecting=!d;
c.selecting=d;
(c.selected=d)?b._trigger("selecting",g,{selecting:c.element}):b._trigger("unselecting",g,{unselecting:c.element});
return false
}})
}},_mouseDrag:function(q){var o=this;
this.dragged=true;
if(!this.options.disabled){var p=this.options,e=this.opos[0],n=this.opos[1],m=q.pageX,l=q.pageY;
if(e>m){var k=m;
m=e;
e=k
}if(n>l){k=l;
l=n;
n=k
}this.helper.css({left:e,top:n,width:m-e,height:l-n});
this.selectees.each(function(){var b=a.data(this,"selectable-item");
if(!(!b||b.element==o.element[0])){var c=false;
if(p.tolerance=="touch"){c=!(b.left>m||b.right<e||b.top>l||b.bottom<n)
}else{if(p.tolerance=="fit"){c=b.left>e&&b.right<m&&b.top>n&&b.bottom<l
}}if(c){if(b.selected){b.$element.removeClass("ui-selected");
b.selected=false
}if(b.unselecting){b.$element.removeClass("ui-unselecting");
b.unselecting=false
}if(!b.selecting){b.$element.addClass("ui-selecting");
b.selecting=true;
o._trigger("selecting",q,{selecting:b.element})
}}else{if(b.selecting){if(q.metaKey&&b.startselected){b.$element.removeClass("ui-selecting");
b.selecting=false;
b.$element.addClass("ui-selected");
b.selected=true
}else{b.$element.removeClass("ui-selecting");
b.selecting=false;
if(b.startselected){b.$element.addClass("ui-unselecting");
b.unselecting=true
}o._trigger("unselecting",q,{unselecting:b.element})
}}if(b.selected){if(!q.metaKey&&!b.startselected){b.$element.removeClass("ui-selected");
b.selected=false;
b.$element.addClass("ui-unselecting");
b.unselecting=true;
o._trigger("unselecting",q,{unselecting:b.element})
}}}}});
return false
}},_mouseStop:function(d){var b=this;
this.dragged=false;
a(".ui-unselecting",this.element[0]).each(function(){var c=a.data(this,"selectable-item");
c.$element.removeClass("ui-unselecting");
c.unselecting=false;
c.startselected=false;
b._trigger("unselected",d,{unselected:c.element})
});
a(".ui-selecting",this.element[0]).each(function(){var c=a.data(this,"selectable-item");
c.$element.removeClass("ui-selecting").addClass("ui-selected");
c.selecting=false;
c.selected=true;
c.startselected=true;
b._trigger("selected",d,{selected:c.element})
});
this._trigger("stop",d);
this.helper.remove();
return false
}});
a.extend(a.ui.selectable,{version:"1.8.16"})
})(jQuery);
(function(a){a.widget("ui.sortable",a.ui.mouse,{widgetEventPrefix:"sort",options:{appendTo:"parent",axis:false,connectWith:false,containment:false,cursor:"auto",cursorAt:false,dropOnEmpty:true,forcePlaceholderSize:false,forceHelperSize:false,grid:false,handle:false,helper:"original",items:"> *",opacity:false,placeholder:false,revert:false,scroll:true,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1000},_create:function(){var b=this.options;
this.containerCache={};
this.element.addClass("ui-sortable");
this.refresh();
this.floating=this.items.length?b.axis==="x"||/left|right/.test(this.items[0].item.css("float"))||/inline|table-cell/.test(this.items[0].item.css("display")):false;
this.offset=this.element.offset();
this._mouseInit()
},destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled").removeData("sortable").unbind(".sortable");
this._mouseDestroy();
for(var b=this.items.length-1;
b>=0;
b--){this.items[b].item.removeData("sortable-item")
}return this
},_setOption:function(d,c){if(d==="disabled"){this.options[d]=c;
this.widget()[c?"addClass":"removeClass"]("ui-sortable-disabled")
}else{a.Widget.prototype._setOption.apply(this,arguments)
}},_mouseCapture:function(g,d){if(this.reverting){return false
}if(this.options.disabled||this.options.type=="static"){return false
}this._refreshItems(g);
var k=null,j=this;
a(g.target).parents().each(function(){if(a.data(this,"sortable-item")==j){k=a(this);
return false
}});
if(a.data(g.target,"sortable-item")==j){k=a(g.target)
}if(!k){return false
}if(this.options.handle&&!d){var h=false;
a(this.options.handle,k).find("*").andSelf().each(function(){if(this==g.target){h=true
}});
if(!h){return false
}}this.currentItem=k;
this._removeCurrentsFromItems();
return true
},_mouseStart:function(f,d,h){d=this.options;
var g=this;
this.currentContainer=this;
this.refreshPositions();
this.helper=this._createHelper(f);
this._cacheHelperProportions();
this._cacheMargins();
this.scrollParent=this.helper.scrollParent();
this.offset=this.currentItem.offset();
this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};
this.helper.css("position","absolute");
this.cssPosition=this.helper.css("position");
a.extend(this.offset,{click:{left:f.pageX-this.offset.left,top:f.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});
this.originalPosition=this._generatePosition(f);
this.originalPageX=f.pageX;
this.originalPageY=f.pageY;
d.cursorAt&&this._adjustOffsetFromHelper(d.cursorAt);
this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]};
this.helper[0]!=this.currentItem[0]&&this.currentItem.hide();
this._createPlaceholder();
d.containment&&this._setContainment();
if(d.cursor){if(a("body").css("cursor")){this._storedCursor=a("body").css("cursor")
}a("body").css("cursor",d.cursor)
}if(d.opacity){if(this.helper.css("opacity")){this._storedOpacity=this.helper.css("opacity")
}this.helper.css("opacity",d.opacity)
}if(d.zIndex){if(this.helper.css("zIndex")){this._storedZIndex=this.helper.css("zIndex")
}this.helper.css("zIndex",d.zIndex)
}if(this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"){this.overflowOffset=this.scrollParent.offset()
}this._trigger("start",f,this._uiHash());
this._preserveHelperProportions||this._cacheHelperProportions();
if(!h){for(h=this.containers.length-1;
h>=0;
h--){this.containers[h]._trigger("activate",f,g._uiHash(this))
}}if(a.ui.ddmanager){a.ui.ddmanager.current=this
}a.ui.ddmanager&&!d.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,f);
this.dragging=true;
this.helper.addClass("ui-sortable-helper");
this._mouseDrag(f);
return true
},_mouseDrag:function(g){this.position=this._generatePosition(g);
this.positionAbs=this._convertPositionTo("absolute");
if(!this.lastPositionAbs){this.lastPositionAbs=this.positionAbs
}if(this.options.scroll){var d=this.options,k=false;
if(this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"){if(this.overflowOffset.top+this.scrollParent[0].offsetHeight-g.pageY<d.scrollSensitivity){this.scrollParent[0].scrollTop=k=this.scrollParent[0].scrollTop+d.scrollSpeed
}else{if(g.pageY-this.overflowOffset.top<d.scrollSensitivity){this.scrollParent[0].scrollTop=k=this.scrollParent[0].scrollTop-d.scrollSpeed
}}if(this.overflowOffset.left+this.scrollParent[0].offsetWidth-g.pageX<d.scrollSensitivity){this.scrollParent[0].scrollLeft=k=this.scrollParent[0].scrollLeft+d.scrollSpeed
}else{if(g.pageX-this.overflowOffset.left<d.scrollSensitivity){this.scrollParent[0].scrollLeft=k=this.scrollParent[0].scrollLeft-d.scrollSpeed
}}}else{if(g.pageY-a(document).scrollTop()<d.scrollSensitivity){k=a(document).scrollTop(a(document).scrollTop()-d.scrollSpeed)
}else{if(a(window).height()-(g.pageY-a(document).scrollTop())<d.scrollSensitivity){k=a(document).scrollTop(a(document).scrollTop()+d.scrollSpeed)
}}if(g.pageX-a(document).scrollLeft()<d.scrollSensitivity){k=a(document).scrollLeft(a(document).scrollLeft()-d.scrollSpeed)
}else{if(a(window).width()-(g.pageX-a(document).scrollLeft())<d.scrollSensitivity){k=a(document).scrollLeft(a(document).scrollLeft()+d.scrollSpeed)
}}}k!==false&&a.ui.ddmanager&&!d.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,g)
}this.positionAbs=this._convertPositionTo("absolute");
if(!this.options.axis||this.options.axis!="y"){this.helper[0].style.left=this.position.left+"px"
}if(!this.options.axis||this.options.axis!="x"){this.helper[0].style.top=this.position.top+"px"
}for(d=this.items.length-1;
d>=0;
d--){k=this.items[d];
var j=k.item[0],h=this._intersectsWithPointer(k);
if(h){if(j!=this.currentItem[0]&&this.placeholder[h==1?"next":"prev"]()[0]!=j&&!a.ui.contains(this.placeholder[0],j)&&(this.options.type=="semi-dynamic"?!a.ui.contains(this.element[0],j):true)){this.direction=h==1?"down":"up";
if(this.options.tolerance=="pointer"||this._intersectsWithSides(k)){this._rearrange(g,k)
}else{break
}this._trigger("change",g,this._uiHash());
break
}}}this._contactContainers(g);
a.ui.ddmanager&&a.ui.ddmanager.drag(this,g);
this._trigger("sort",g,this._uiHash());
this.lastPositionAbs=this.positionAbs;
return false
},_mouseStop:function(e,d){if(e){a.ui.ddmanager&&!this.options.dropBehaviour&&a.ui.ddmanager.drop(this,e);
if(this.options.revert){var f=this;
d=f.placeholder.offset();
f.reverting=true;
a(this.helper).animate({left:d.left-this.offset.parent.left-f.margins.left+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollLeft),top:d.top-this.offset.parent.top-f.margins.top+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollTop)},parseInt(this.options.revert,10)||500,function(){f._clear(e)
})
}else{this._clear(e,d)
}return false
}},cancel:function(){var d=this;
if(this.dragging){this._mouseUp({target:null});
this.options.helper=="original"?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show();
for(var c=this.containers.length-1;
c>=0;
c--){this.containers[c]._trigger("deactivate",null,d._uiHash(this));
if(this.containers[c].containerCache.over){this.containers[c]._trigger("out",null,d._uiHash(this));
this.containers[c].containerCache.over=0
}}}if(this.placeholder){this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
this.options.helper!="original"&&this.helper&&this.helper[0].parentNode&&this.helper.remove();
a.extend(this,{helper:null,dragging:false,reverting:false,_noFinalSort:null});
this.domPosition.prev?a(this.domPosition.prev).after(this.currentItem):a(this.domPosition.parent).prepend(this.currentItem)
}return this
},serialize:function(e){var d=this._getItemsAsjQuery(e&&e.connected),f=[];
e=e||{};
a(d).each(function(){var b=(a(e.item||this).attr(e.attribute||"id")||"").match(e.expression||/(.+)[-=_](.+)/);
if(b){f.push((e.key||b[1]+"[]")+"="+(e.key&&e.expression?b[1]:b[2]))
}});
!f.length&&e.key&&f.push(e.key+"=");
return f.join("&")
},toArray:function(e){var d=this._getItemsAsjQuery(e&&e.connected),f=[];
e=e||{};
d.each(function(){f.push(a(e.item||this).attr(e.attribute||"id")||"")
});
return f
},_intersectsWith:function(w){var v=this.positionAbs.left,u=v+this.helperProportions.width,s=this.positionAbs.top,r=s+this.helperProportions.height,q=w.left,p=q+w.width,o=w.top,m=o+w.height,n=this.offset.click.top,d=this.offset.click.left;
n=s+n>o&&s+n<m&&v+d>q&&v+d<p;
return this.options.tolerance=="pointer"||this.options.forcePointerForContainers||this.options.tolerance!="pointer"&&this.helperProportions[this.floating?"width":"height"]>w[this.floating?"width":"height"]?n:q<v+this.helperProportions.width/2&&u-this.helperProportions.width/2<p&&o<s+this.helperProportions.height/2&&r-this.helperProportions.height/2<m
},_intersectsWithPointer:function(e){var d=a.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,e.top,e.height);
e=a.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,e.left,e.width);
d=d&&e;
e=this._getDragVerticalDirection();
var f=this._getDragHorizontalDirection();
if(!d){return false
}return this.floating?f&&f=="right"||e=="down"?2:1:e&&(e=="down"?2:1)
},_intersectsWithSides:function(f){var d=a.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,f.top+f.height/2,f.height);
f=a.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,f.left+f.width/2,f.width);
var h=this._getDragVerticalDirection(),g=this._getDragHorizontalDirection();
return this.floating&&g?g=="right"&&f||g=="left"&&!f:h&&(h=="down"&&d||h=="up"&&!d)
},_getDragVerticalDirection:function(){var b=this.positionAbs.top-this.lastPositionAbs.top;
return b!=0&&(b>0?"down":"up")
},_getDragHorizontalDirection:function(){var b=this.positionAbs.left-this.lastPositionAbs.left;
return b!=0&&(b>0?"right":"left")
},refresh:function(b){this._refreshItems(b);
this.refreshPositions();
return this
},_connectWith:function(){var b=this.options;
return b.connectWith.constructor==String?[b.connectWith]:b.connectWith
},_getItemsAsjQuery:function(j){var d=[],o=[],n=this._connectWith();
if(n&&j){for(j=n.length-1;
j>=0;
j--){for(var m=a(n[j]),l=m.length-1;
l>=0;
l--){var k=a.data(m[l],"sortable");
if(k&&k!=this&&!k.options.disabled){o.push([a.isFunction(k.options.items)?k.options.items.call(k.element):a(k.options.items,k.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),k])
}}}}o.push([a.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):a(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]);
for(j=o.length-1;
j>=0;
j--){o[j][0].each(function(){d.push(this)
})
}return a(d)
},_removeCurrentsFromItems:function(){for(var e=this.currentItem.find(":data(sortable-item)"),d=0;
d<this.items.length;
d++){for(var f=0;
f<e.length;
f++){e[f]==this.items[d].item[0]&&this.items.splice(d,1)
}}},_refreshItems:function(j){this.items=[];
this.containers=[this];
var d=this.items,p=[[a.isFunction(this.options.items)?this.options.items.call(this.element[0],j,{item:this.currentItem}):a(this.options.items,this.element),this]],o=this._connectWith();
if(o){for(var n=o.length-1;
n>=0;
n--){for(var m=a(o[n]),l=m.length-1;
l>=0;
l--){var k=a.data(m[l],"sortable");
if(k&&k!=this&&!k.options.disabled){p.push([a.isFunction(k.options.items)?k.options.items.call(k.element[0],j,{item:this.currentItem}):a(k.options.items,k.element),k]);
this.containers.push(k)
}}}}for(n=p.length-1;
n>=0;
n--){j=p[n][1];
o=p[n][0];
l=0;
for(m=o.length;
l<m;
l++){k=a(o[l]);
k.data("sortable-item",j);
d.push({item:k,instance:j,width:0,height:0,left:0,top:0})
}}},refreshPositions:function(f){if(this.offsetParent&&this.helper){this.offset.parent=this._getParentOffset()
}for(var d=this.items.length-1;
d>=0;
d--){var h=this.items[d];
if(!(h.instance!=this.currentContainer&&this.currentContainer&&h.item[0]!=this.currentItem[0])){var g=this.options.toleranceElement?a(this.options.toleranceElement,h.item):h.item;
if(!f){h.width=g.outerWidth();
h.height=g.outerHeight()
}g=g.offset();
h.left=g.left;
h.top=g.top
}}if(this.options.custom&&this.options.custom.refreshContainers){this.options.custom.refreshContainers.call(this)
}else{for(d=this.containers.length-1;
d>=0;
d--){g=this.containers[d].element.offset();
this.containers[d].containerCache.left=g.left;
this.containers[d].containerCache.top=g.top;
this.containers[d].containerCache.width=this.containers[d].element.outerWidth();
this.containers[d].containerCache.height=this.containers[d].element.outerHeight()
}}return this
},_createPlaceholder:function(f){var d=f||this,h=d.options;
if(!h.placeholder||h.placeholder.constructor==String){var g=h.placeholder;
h.placeholder={element:function(){var b=a(document.createElement(d.currentItem[0].nodeName)).addClass(g||d.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];
if(!g){b.style.visibility="hidden"
}return b
},update:function(c,b){if(!(g&&!h.forcePlaceholderSize)){b.height()||b.height(d.currentItem.innerHeight()-parseInt(d.currentItem.css("paddingTop")||0,10)-parseInt(d.currentItem.css("paddingBottom")||0,10));
b.width()||b.width(d.currentItem.innerWidth()-parseInt(d.currentItem.css("paddingLeft")||0,10)-parseInt(d.currentItem.css("paddingRight")||0,10))
}}}
}d.placeholder=a(h.placeholder.element.call(d.element,d.currentItem));
d.currentItem.after(d.placeholder);
h.placeholder.update(d,d.placeholder)
},_contactContainers:function(j){for(var d=null,o=null,n=this.containers.length-1;
n>=0;
n--){if(!a.ui.contains(this.currentItem[0],this.containers[n].element[0])){if(this._intersectsWith(this.containers[n].containerCache)){if(!(d&&a.ui.contains(this.containers[n].element[0],d.element[0]))){d=this.containers[n];
o=n
}}else{if(this.containers[n].containerCache.over){this.containers[n]._trigger("out",j,this._uiHash(this));
this.containers[n].containerCache.over=0
}}}}if(d){if(this.containers.length===1){this.containers[o]._trigger("over",j,this._uiHash(this));
this.containers[o].containerCache.over=1
}else{if(this.currentContainer!=this.containers[o]){d=10000;
n=null;
for(var m=this.positionAbs[this.containers[o].floating?"left":"top"],l=this.items.length-1;
l>=0;
l--){if(a.ui.contains(this.containers[o].element[0],this.items[l].item[0])){var k=this.items[l][this.containers[o].floating?"left":"top"];
if(Math.abs(k-m)<d){d=Math.abs(k-m);
n=this.items[l]
}}}if(n||this.options.dropOnEmpty){this.currentContainer=this.containers[o];
n?this._rearrange(j,n,null,true):this._rearrange(j,null,this.containers[o].element,true);
this._trigger("change",j,this._uiHash());
this.containers[o]._trigger("change",j,this._uiHash(this));
this.options.placeholder.update(this.currentContainer,this.placeholder);
this.containers[o]._trigger("over",j,this._uiHash(this));
this.containers[o].containerCache.over=1
}}}}},_createHelper:function(d){var c=this.options;
d=a.isFunction(c.helper)?a(c.helper.apply(this.element[0],[d,this.currentItem])):c.helper=="clone"?this.currentItem.clone():this.currentItem;
d.parents("body").length||a(c.appendTo!="parent"?c.appendTo:this.currentItem[0].parentNode)[0].appendChild(d[0]);
if(d[0]==this.currentItem[0]){this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}
}if(d[0].style.width==""||c.forceHelperSize){d.width(this.currentItem.width())
}if(d[0].style.height==""||c.forceHelperSize){d.height(this.currentItem.height())
}return d
},_adjustOffsetFromHelper:function(b){if(typeof b=="string"){b=b.split(" ")
}if(a.isArray(b)){b={left:+b[0],top:+b[1]||0}
}if("left" in b){this.offset.click.left=b.left+this.margins.left
}if("right" in b){this.offset.click.left=this.helperProportions.width-b.right+this.margins.left
}if("top" in b){this.offset.click.top=b.top+this.margins.top
}if("bottom" in b){this.offset.click.top=this.helperProportions.height-b.bottom+this.margins.top
}},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();
var b=this.offsetParent.offset();
if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0])){b.left+=this.scrollParent.scrollLeft();
b.top+=this.scrollParent.scrollTop()
}if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&a.browser.msie){b={top:0,left:0}
}return{top:b.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:b.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}
},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var b=this.currentItem.position();
return{top:b.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:b.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}
}else{return{top:0,left:0}
}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}
},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}
},_setContainment:function(){var e=this.options;
if(e.containment=="parent"){e.containment=this.helper[0].parentNode
}if(e.containment=="document"||e.containment=="window"){this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,a(e.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(a(e.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]
}if(!/^(document|window|parent)$/.test(e.containment)){var d=a(e.containment)[0];
e=a(e.containment).offset();
var f=a(d).css("overflow")!="hidden";
this.containment=[e.left+(parseInt(a(d).css("borderLeftWidth"),10)||0)+(parseInt(a(d).css("paddingLeft"),10)||0)-this.margins.left,e.top+(parseInt(a(d).css("borderTopWidth"),10)||0)+(parseInt(a(d).css("paddingTop"),10)||0)-this.margins.top,e.left+(f?Math.max(d.scrollWidth,d.offsetWidth):d.offsetWidth)-(parseInt(a(d).css("borderLeftWidth"),10)||0)-(parseInt(a(d).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,e.top+(f?Math.max(d.scrollHeight,d.offsetHeight):d.offsetHeight)-(parseInt(a(d).css("borderTopWidth"),10)||0)-(parseInt(a(d).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]
}},_convertPositionTo:function(f,d){if(!d){d=this.position
}f=f=="absolute"?1:-1;
var h=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,g=/(html|body)/i.test(h[0].tagName);
return{top:d.top+this.offset.relative.top*f+this.offset.parent.top*f-(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():g?0:h.scrollTop())*f),left:d.left+this.offset.relative.left*f+this.offset.parent.left*f-(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():g?0:h.scrollLeft())*f)}
},_generatePosition:function(h){var d=this.options,m=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,l=/(html|body)/i.test(m[0].tagName);
if(this.cssPosition=="relative"&&!(this.scrollParent[0]!=document&&this.scrollParent[0]!=this.offsetParent[0])){this.offset.relative=this._getRelativeOffset()
}var k=h.pageX,j=h.pageY;
if(this.originalPosition){if(this.containment){if(h.pageX-this.offset.click.left<this.containment[0]){k=this.containment[0]+this.offset.click.left
}if(h.pageY-this.offset.click.top<this.containment[1]){j=this.containment[1]+this.offset.click.top
}if(h.pageX-this.offset.click.left>this.containment[2]){k=this.containment[2]+this.offset.click.left
}if(h.pageY-this.offset.click.top>this.containment[3]){j=this.containment[3]+this.offset.click.top
}}if(d.grid){j=this.originalPageY+Math.round((j-this.originalPageY)/d.grid[1])*d.grid[1];
j=this.containment?!(j-this.offset.click.top<this.containment[1]||j-this.offset.click.top>this.containment[3])?j:!(j-this.offset.click.top<this.containment[1])?j-d.grid[1]:j+d.grid[1]:j;
k=this.originalPageX+Math.round((k-this.originalPageX)/d.grid[0])*d.grid[0];
k=this.containment?!(k-this.offset.click.left<this.containment[0]||k-this.offset.click.left>this.containment[2])?k:!(k-this.offset.click.left<this.containment[0])?k-d.grid[0]:k+d.grid[0]:k
}}return{top:j-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(a.browser.safari&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollTop():l?0:m.scrollTop()),left:k-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(a.browser.safari&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():l?0:m.scrollLeft())}
},_rearrange:function(h,d,m,l){m?m[0].appendChild(this.placeholder[0]):d.item[0].parentNode.insertBefore(this.placeholder[0],this.direction=="down"?d.item[0]:d.item[0].nextSibling);
this.counter=this.counter?++this.counter:1;
var k=this,j=this.counter;
window.setTimeout(function(){j==k.counter&&k.refreshPositions(!l)
},0)
},_clear:function(f,d){this.reverting=false;
var h=[];
!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem);
this._noFinalSort=null;
if(this.helper[0]==this.currentItem[0]){for(var g in this._storedCSS){if(this._storedCSS[g]=="auto"||this._storedCSS[g]=="static"){this._storedCSS[g]=""
}}this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
}else{this.currentItem.show()
}this.fromOutside&&!d&&h.push(function(b){this._trigger("receive",b,this._uiHash(this.fromOutside))
});
if((this.fromOutside||this.domPosition.prev!=this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!=this.currentItem.parent()[0])&&!d){h.push(function(b){this._trigger("update",b,this._uiHash())
})
}if(!a.ui.contains(this.element[0],this.currentItem[0])){d||h.push(function(b){this._trigger("remove",b,this._uiHash())
});
for(g=this.containers.length-1;
g>=0;
g--){if(a.ui.contains(this.containers[g].element[0],this.currentItem[0])&&!d){h.push(function(b){return function(c){b._trigger("receive",c,this._uiHash(this))
}
}.call(this,this.containers[g]));
h.push(function(b){return function(c){b._trigger("update",c,this._uiHash(this))
}
}.call(this,this.containers[g]))
}}}for(g=this.containers.length-1;
g>=0;
g--){d||h.push(function(b){return function(c){b._trigger("deactivate",c,this._uiHash(this))
}
}.call(this,this.containers[g]));
if(this.containers[g].containerCache.over){h.push(function(b){return function(c){b._trigger("out",c,this._uiHash(this))
}
}.call(this,this.containers[g]));
this.containers[g].containerCache.over=0
}}this._storedCursor&&a("body").css("cursor",this._storedCursor);
this._storedOpacity&&this.helper.css("opacity",this._storedOpacity);
if(this._storedZIndex){this.helper.css("zIndex",this._storedZIndex=="auto"?"":this._storedZIndex)
}this.dragging=false;
if(this.cancelHelperRemoval){if(!d){this._trigger("beforeStop",f,this._uiHash());
for(g=0;
g<h.length;
g++){h[g].call(this,f)
}this._trigger("stop",f,this._uiHash())
}return false
}d||this._trigger("beforeStop",f,this._uiHash());
this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
this.helper[0]!=this.currentItem[0]&&this.helper.remove();
this.helper=null;
if(!d){for(g=0;
g<h.length;
g++){h[g].call(this,f)
}this._trigger("stop",f,this._uiHash())
}this.fromOutside=false;
return true
},_trigger:function(){a.Widget.prototype._trigger.apply(this,arguments)===false&&this.cancel()
},_uiHash:function(d){var c=d||this;
return{helper:c.helper,placeholder:c.placeholder||a([]),position:c.position,originalPosition:c.originalPosition,offset:c.positionAbs,item:c.currentItem,sender:d?d.element:null}
}});
a.extend(a.ui.sortable,{version:"1.8.16"})
})(jQuery);
(function(a){a.widget("ui.accordion",{options:{active:0,animated:"slide",autoHeight:true,clearStyle:false,collapsible:false,event:"click",fillSpace:false,header:"> li > :first-child,> :not(li):even",icons:{header:"ui-icon-triangle-1-e",headerSelected:"ui-icon-triangle-1-s"},navigation:false,navigationFilter:function(){return this.href.toLowerCase()===location.href.toLowerCase()
}},_create:function(){var e=this,c=e.options;
e.running=0;
e.element.addClass("ui-accordion ui-widget ui-helper-reset").children("li").addClass("ui-accordion-li-fix");
e.headers=e.element.find(c.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all").bind("mouseenter.accordion",function(){c.disabled||a(this).addClass("ui-state-hover")
}).bind("mouseleave.accordion",function(){c.disabled||a(this).removeClass("ui-state-hover")
}).bind("focus.accordion",function(){c.disabled||a(this).addClass("ui-state-focus")
}).bind("blur.accordion",function(){c.disabled||a(this).removeClass("ui-state-focus")
});
e.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom");
if(c.navigation){var g=e.element.find("a").filter(c.navigationFilter).eq(0);
if(g.length){var f=g.closest(".ui-accordion-header");
e.active=f.length?f:g.closest(".ui-accordion-content").prev()
}}e.active=e._findActive(e.active||c.active).addClass("ui-state-default ui-state-active").toggleClass("ui-corner-all").toggleClass("ui-corner-top");
e.active.next().addClass("ui-accordion-content-active");
e._createIcons();
e.resize();
e.element.attr("role","tablist");
e.headers.attr("role","tab").bind("keydown.accordion",function(b){return e._keydown(b)
}).next().attr("role","tabpanel");
e.headers.not(e.active||"").attr({"aria-expanded":"false","aria-selected":"false",tabIndex:-1}).next().hide();
e.active.length?e.active.attr({"aria-expanded":"true","aria-selected":"true",tabIndex:0}):e.headers.eq(0).attr("tabIndex",0);
a.browser.safari||e.headers.find("a").attr("tabIndex",-1);
c.event&&e.headers.bind(c.event.split(" ").join(".accordion ")+".accordion",function(b){e._clickHandler.call(e,b,this);
b.preventDefault()
})
},_createIcons:function(){var b=this.options;
if(b.icons){a("<span></span>").addClass("ui-icon "+b.icons.header).prependTo(this.headers);
this.active.children(".ui-icon").toggleClass(b.icons.header).toggleClass(b.icons.headerSelected);
this.element.addClass("ui-accordion-icons")
}},_destroyIcons:function(){this.headers.children(".ui-icon").remove();
this.element.removeClass("ui-accordion-icons")
},destroy:function(){var d=this.options;
this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role");
this.headers.unbind(".accordion").removeClass("ui-accordion-header ui-accordion-disabled ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("tabIndex");
this.headers.find("a").removeAttr("tabIndex");
this._destroyIcons();
var c=this.headers.next().css("display","").removeAttr("role").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-accordion-disabled ui-state-disabled");
if(d.autoHeight||d.fillHeight){c.css("height","")
}return a.Widget.prototype.destroy.call(this)
},_setOption:function(d,c){a.Widget.prototype._setOption.apply(this,arguments);
d=="active"&&this.activate(c);
if(d=="icons"){this._destroyIcons();
c&&this._createIcons()
}if(d=="disabled"){this.headers.add(this.headers.next())[c?"addClass":"removeClass"]("ui-accordion-disabled ui-state-disabled")
}},_keydown:function(e){if(!(this.options.disabled||e.altKey||e.ctrlKey)){var c=a.ui.keyCode,k=this.headers.length,g=this.headers.index(e.target),j=false;
switch(e.keyCode){case c.RIGHT:case c.DOWN:j=this.headers[(g+1)%k];
break;
case c.LEFT:case c.UP:j=this.headers[(g-1+k)%k];
break;
case c.SPACE:case c.ENTER:this._clickHandler({target:e.target},e.target);
e.preventDefault()
}if(j){a(e.target).attr("tabIndex",-1);
a(j).attr("tabIndex",0);
j.focus();
return false
}return true
}},resize:function(){var e=this.options,c;
if(e.fillSpace){if(a.browser.msie){var f=this.element.parent().css("overflow");
this.element.parent().css("overflow","hidden")
}c=this.element.parent().height();
a.browser.msie&&this.element.parent().css("overflow",f);
this.headers.each(function(){c-=a(this).outerHeight(true)
});
this.headers.next().each(function(){a(this).height(Math.max(0,c-a(this).innerHeight()+a(this).height()))
}).css("overflow","auto")
}else{if(e.autoHeight){c=0;
this.headers.next().each(function(){c=Math.max(c,a(this).height("").height())
}).height(c)
}}return this
},activate:function(b){this.options.active=b;
b=this._findActive(b)[0];
this._clickHandler({target:b},b);
return this
},_findActive:function(b){return b?typeof b==="number"?this.headers.filter(":eq("+b+")"):this.headers.not(this.headers.not(b)):b===false?a([]):this.headers.filter(":eq(0)")
},_clickHandler:function(k,c){var q=this.options;
if(!q.disabled){if(k.target){k=a(k.currentTarget||c);
c=k[0]===this.active[0];
q.active=q.collapsible&&c?false:this.headers.index(k);
if(!(this.running||!q.collapsible&&c)){var m=this.active;
l=k.next();
n=this.active.next();
p={options:q,newHeader:c&&q.collapsible?a([]):k,oldHeader:this.active,newContent:c&&q.collapsible?a([]):l,oldContent:n};
var o=this.headers.index(this.active[0])>this.headers.index(k[0]);
this.active=c?a([]):k;
this._toggle(l,n,p,c,o);
m.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(q.icons.headerSelected).addClass(q.icons.header);
if(!c){k.removeClass("ui-state-default ui-corner-all").addClass("ui-state-active ui-corner-top").children(".ui-icon").removeClass(q.icons.header).addClass(q.icons.headerSelected);
k.next().addClass("ui-accordion-content-active")
}}}else{if(q.collapsible){this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(q.icons.headerSelected).addClass(q.icons.header);
this.active.next().addClass("ui-accordion-content-active");
var n=this.active.next(),p={options:q,newHeader:a([]),oldHeader:q.active,newContent:a([]),oldContent:n},l=this.active=a([]);
this._toggle(l,n,p)
}}}},_toggle:function(u,s,r,n,p){var o=this,q=o.options;
o.toShow=u;
o.toHide=s;
o.data=r;
var l=function(){if(o){return o._completed.apply(o,arguments)
}};
o._trigger("changestart",null,o.data);
o.running=s.size()===0?u.size():s.size();
if(q.animated){r={};
r=q.collapsible&&n?{toShow:a([]),toHide:s,complete:l,down:p,autoHeight:q.autoHeight||q.fillSpace}:{toShow:u,toHide:s,complete:l,down:p,autoHeight:q.autoHeight||q.fillSpace};
if(!q.proxied){q.proxied=q.animated
}if(!q.proxiedDuration){q.proxiedDuration=q.duration
}q.animated=a.isFunction(q.proxied)?q.proxied(r):q.proxied;
q.duration=a.isFunction(q.proxiedDuration)?q.proxiedDuration(r):q.proxiedDuration;
n=a.ui.accordion.animations;
var m=q.duration,c=q.animated;
if(c&&!n[c]&&!a.easing[c]){c="slide"
}n[c]||(n[c]=function(b){this.slide(b,{easing:c,duration:m||700})
});
n[c](r)
}else{if(q.collapsible&&n){u.toggle()
}else{s.hide();
u.show()
}l(true)
}s.prev().attr({"aria-expanded":"false","aria-selected":"false",tabIndex:-1}).blur();
u.prev().attr({"aria-expanded":"true","aria-selected":"true",tabIndex:0}).focus()
},_completed:function(b){this.running=b?0:--this.running;
if(!this.running){this.options.clearStyle&&this.toShow.add(this.toHide).css({height:"",overflow:""});
this.toHide.removeClass("ui-accordion-content-active");
if(this.toHide.length){this.toHide.parent()[0].className=this.toHide.parent()[0].className
}this._trigger("change",null,this.data)
}}});
a.extend(a.ui.accordion,{version:"1.8.16",animations:{slide:function(j,c){j=a.extend({easing:"swing",duration:300},j,c);
if(j.toHide.size()){if(j.toShow.size()){var o=j.toShow.css("overflow"),k=0,m={},l={},n;
c=j.toShow;
n=c[0].style.width;
c.width(parseInt(c.parent().width(),10)-parseInt(c.css("paddingLeft"),10)-parseInt(c.css("paddingRight"),10)-(parseInt(c.css("borderLeftWidth"),10)||0)-(parseInt(c.css("borderRightWidth"),10)||0));
a.each(["height","paddingTop","paddingBottom"],function(b,d){l[d]="hide";
b=(""+a.css(j.toShow[0],d)).match(/^([\d+-.]+)(.*)$/);
m[d]={value:b[1],unit:b[2]||"px"}
});
j.toShow.css({height:0,overflow:"hidden"}).show();
j.toHide.filter(":hidden").each(j.complete).end().filter(":visible").animate(l,{step:function(b,d){if(d.prop=="height"){k=d.end-d.start===0?0:(d.now-d.start)/(d.end-d.start)
}j.toShow[0].style[d.prop]=k*m[d.prop].value+m[d.prop].unit
},duration:j.duration,easing:j.easing,complete:function(){j.autoHeight||j.toShow.css("height","");
j.toShow.css({width:n,overflow:o});
j.complete()
}})
}else{j.toHide.animate({height:"hide",paddingTop:"hide",paddingBottom:"hide"},j)
}}else{j.toShow.animate({height:"show",paddingTop:"show",paddingBottom:"show"},j)
}},bounceslide:function(b){this.slide(b,{easing:b.down?"easeOutBounce":"swing",duration:b.down?1000:200})
}}})
})(jQuery);
(function(b){var a=0;
b.widget("ui.autocomplete",{options:{appendTo:"body",autoFocus:false,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null},pending:0,_create:function(){var d=this,c=this.element[0].ownerDocument,e;
this.element.addClass("ui-autocomplete-input").attr("autocomplete","off").attr({role:"textbox","aria-autocomplete":"list","aria-haspopup":"true"}).bind("keydown.autocomplete",function(h){if(!(d.options.disabled||d.element.propAttr("readOnly"))){e=false;
var g=b.ui.keyCode;
switch(h.keyCode){case g.PAGE_UP:d._move("previousPage",h);
break;
case g.PAGE_DOWN:d._move("nextPage",h);
break;
case g.UP:d._move("previous",h);
h.preventDefault();
break;
case g.DOWN:d._move("next",h);
h.preventDefault();
break;
case g.ENTER:case g.NUMPAD_ENTER:if(d.menu.active){e=true;
h.preventDefault()
}case g.TAB:if(!d.menu.active){return
}d.menu.select(h);
break;
case g.ESCAPE:d.element.val(d.term);
d.close(h);
break;
default:clearTimeout(d.searching);
d.searching=setTimeout(function(){if(d.term!=d.element.val()){d.selectedItem=null;
d.search(null,h)
}},d.options.delay);
break
}}}).bind("keypress.autocomplete",function(f){if(e){e=false;
f.preventDefault()
}}).bind("focus.autocomplete",function(){if(!d.options.disabled){d.selectedItem=null;
d.previous=d.element.val()
}}).bind("blur.autocomplete",function(f){if(!d.options.disabled){clearTimeout(d.searching);
d.closing=setTimeout(function(){d.close(f);
d._change(f)
},150)
}});
this._initSource();
this.response=function(){return d._response.apply(d,arguments)
};
this.menu=b("<ul></ul>").addClass("ui-autocomplete").appendTo(b(this.options.appendTo||"body",c)[0]).mousedown(function(h){var g=d.menu.element[0];
b(h.target).closest(".ui-menu-item").length||setTimeout(function(){b(document).one("mousedown",function(f){f.target!==d.element[0]&&f.target!==g&&!b.ui.contains(g,f.target)&&d.close()
})
},1);
setTimeout(function(){clearTimeout(d.closing)
},13)
}).menu({focus:function(h,g){g=g.item.data("item.autocomplete");
false!==d._trigger("focus",h,{item:g})&&/^key/.test(h.originalEvent.type)&&d.element.val(g.value)
},selected:function(l,k){var j=k.item.data("item.autocomplete"),g=d.previous;
if(d.element[0]!==c.activeElement){d.element.focus();
d.previous=g;
setTimeout(function(){d.previous=g;
d.selectedItem=j
},1)
}false!==d._trigger("select",l,{item:j})&&d.element.val(j.value);
d.term=d.element.val();
d.close(l);
d.selectedItem=j
},blur:function(){d.menu.element.is(":visible")&&d.element.val()!==d.term&&d.element.val(d.term)
}}).zIndex(this.element.zIndex()+1).css({top:0,left:0}).hide().data("menu");
b.fn.bgiframe&&this.menu.element.bgiframe()
},destroy:function(){this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup");
this.menu.element.remove();
b.Widget.prototype.destroy.call(this)
},_setOption:function(d,c){b.Widget.prototype._setOption.apply(this,arguments);
d==="source"&&this._initSource();
if(d==="appendTo"){this.menu.element.appendTo(b(c||"body",this.element[0].ownerDocument)[0])
}d==="disabled"&&c&&this.xhr&&this.xhr.abort()
},_initSource:function(){var d=this,c,e;
if(b.isArray(this.options.source)){c=this.options.source;
this.source=function(h,g){g(b.ui.autocomplete.filter(c,h.term))
}
}else{if(typeof this.options.source==="string"){e=this.options.source;
this.source=function(h,g){d.xhr&&d.xhr.abort();
d.xhr=b.ajax({url:e,data:h,dataType:"json",autocompleteRequest:++a,success:function(f){this.autocompleteRequest===a&&g(f)
},error:function(){this.autocompleteRequest===a&&g([])
}})
}
}else{this.source=this.options.source
}}},search:function(d,c){d=d!=null?d:this.element.val();
this.term=this.element.val();
if(d.length<this.options.minLength){return this.close(c)
}clearTimeout(this.closing);
if(this._trigger("search",c)!==false){return this._search(d)
}},_search:function(c){this.pending++;
this.element.addClass("ui-autocomplete-loading");
this.source({term:c},this.response)
},_response:function(c){if(!this.options.disabled&&c&&c.length){c=this._normalize(c);
this._suggest(c);
this._trigger("open")
}else{this.close()
}this.pending--;
this.pending||this.element.removeClass("ui-autocomplete-loading")
},close:function(c){clearTimeout(this.closing);
if(this.menu.element.is(":visible")){this.menu.element.hide();
this.menu.deactivate();
this._trigger("close",c)
}},_change:function(c){this.previous!==this.element.val()&&this._trigger("change",c,{item:this.selectedItem})
},_normalize:function(c){if(c.length&&c[0].label&&c[0].value){return c
}return b.map(c,function(d){if(typeof d==="string"){return{label:d,value:d}
}return b.extend({label:d.label||d.value,value:d.value||d.label},d)
})
},_suggest:function(d){var c=this.menu.element.empty().zIndex(this.element.zIndex()+1);
this._renderMenu(c,d);
this.menu.deactivate();
this.menu.refresh();
c.show();
this._resizeMenu();
c.position(b.extend({of:this.element},this.options.position));
this.options.autoFocus&&this.menu.next(new b.Event("mouseover"))
},_resizeMenu:function(){var c=this.menu.element;
c.outerWidth(Math.max(c.width("").outerWidth(),this.element.outerWidth()))
},_renderMenu:function(d,c){var e=this;
b.each(c,function(h,g){e._renderItem(d,g)
})
},_renderItem:function(d,c){return b("<li></li>").data("item.autocomplete",c).append(b("<a></a>").text(c.label)).appendTo(d)
},_move:function(d,c){if(this.menu.element.is(":visible")){if(this.menu.first()&&/^previous/.test(d)||this.menu.last()&&/^next/.test(d)){this.element.val(this.term);
this.menu.deactivate()
}else{this.menu[d](c)
}}else{this.search(null,c)
}},widget:function(){return this.menu.element
}});
b.extend(b.ui.autocomplete,{escapeRegex:function(c){return c.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")
},filter:function(d,c){var e=new RegExp(b.ui.autocomplete.escapeRegex(c),"i");
return b.grep(d,function(f){return e.test(f.label||f.value||f)
})
}})
})(jQuery);
(function(a){a.widget("ui.menu",{_create:function(){var b=this;
this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({role:"listbox","aria-activedescendant":"ui-active-menuitem"}).click(function(c){if(a(c.target).closest(".ui-menu-item a").length){c.preventDefault();
b.select(c)
}});
this.refresh()
},refresh:function(){var b=this;
this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","menuitem").children("a").addClass("ui-corner-all").attr("tabindex",-1).mouseenter(function(c){b.activate(c,a(this).parent())
}).mouseleave(function(){b.deactivate()
})
},activate:function(j,f){this.deactivate();
if(this.hasScroll()){var d=f.offset().top-this.element.offset().top,h=this.element.scrollTop(),k=this.element.height();
if(d<0){this.element.scrollTop(h+d)
}else{d>=k&&this.element.scrollTop(h+d-k+f.height())
}}this.active=f.eq(0).children("a").addClass("ui-state-hover").attr("id","ui-active-menuitem").end();
this._trigger("focus",j,{item:f})
},deactivate:function(){if(this.active){this.active.children("a").removeClass("ui-state-hover").removeAttr("id");
this._trigger("blur");
this.active=null
}},next:function(b){this.move("next",".ui-menu-item:first",b)
},previous:function(b){this.move("prev",".ui-menu-item:last",b)
},first:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length
},last:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length
},move:function(f,d,c){if(this.active){f=this.active[f+"All"](".ui-menu-item").eq(0);
f.length?this.activate(c,f):this.activate(c,this.element.children(d))
}else{this.activate(c,this.element.children(d))
}},nextPage:function(h){if(this.hasScroll()){if(!this.active||this.last()){this.activate(h,this.element.children(".ui-menu-item:first"))
}else{var d=this.active.offset().top,c=this.element.height(),f=this.element.children(".ui-menu-item").filter(function(){var b=a(this).offset().top-d-c+a(this).height();
return b<10&&b>-10
});
f.length||(f=this.element.children(".ui-menu-item:last"));
this.activate(h,f)
}}else{this.activate(h,this.element.children(".ui-menu-item").filter(!this.active||this.last()?":first":":last"))
}},previousPage:function(f){if(this.hasScroll()){if(!this.active||this.first()){this.activate(f,this.element.children(".ui-menu-item:last"))
}else{var d=this.active.offset().top,c=this.element.height();
result=this.element.children(".ui-menu-item").filter(function(){var b=a(this).offset().top-d+c-a(this).height();
return b<10&&b>-10
});
result.length||(result=this.element.children(".ui-menu-item:first"));
this.activate(f,result)
}}else{this.activate(f,this.element.children(".ui-menu-item").filter(!this.active||this.first()?":last":":first"))
}},hasScroll:function(){return this.element.height()<this.element[a.fn.prop?"prop":"attr"]("scrollHeight")
},select:function(b){this._trigger("selected",b,{item:this.active})
}})
})(jQuery);
(function(a){var m,f,e,n,c=function(){var b=a(this).find(":ui-button");
setTimeout(function(){b.button("refresh")
},1)
},d=function(b){var j=b.name,h=b.form,g=a([]);
if(j){g=h?a(h).find("[name='"+j+"']"):a("[name='"+j+"']",b.ownerDocument).filter(function(){return !this.form
})
}return g
};
a.widget("ui.button",{options:{disabled:null,text:true,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset.button").bind("reset.button",c);
if(typeof this.options.disabled!=="boolean"){this.options.disabled=this.element.propAttr("disabled")
}this._determineButtonType();
this.hasTitle=!!this.buttonElement.attr("title");
var b=this,j=this.options,h=this.type==="checkbox"||this.type==="radio",g="ui-state-hover"+(!h?" ui-state-active":"");
if(j.label===null){j.label=this.buttonElement.html()
}if(this.element.is(":disabled")){j.disabled=true
}this.buttonElement.addClass("ui-button ui-widget ui-state-default ui-corner-all").attr("role","button").bind("mouseenter.button",function(){if(!j.disabled){a(this).addClass("ui-state-hover");
this===m&&a(this).addClass("ui-state-active")
}}).bind("mouseleave.button",function(){j.disabled||a(this).removeClass(g)
}).bind("click.button",function(k){if(j.disabled){k.preventDefault();
k.stopImmediatePropagation()
}});
this.element.bind("focus.button",function(){b.buttonElement.addClass("ui-state-focus")
}).bind("blur.button",function(){b.buttonElement.removeClass("ui-state-focus")
});
if(h){this.element.bind("change.button",function(){n||b.refresh()
});
this.buttonElement.bind("mousedown.button",function(k){if(!j.disabled){n=false;
f=k.pageX;
e=k.pageY
}}).bind("mouseup.button",function(k){if(!j.disabled){if(f!==k.pageX||e!==k.pageY){n=true
}}})
}if(this.type==="checkbox"){this.buttonElement.bind("click.button",function(){if(j.disabled||n){return false
}a(this).toggleClass("ui-state-active");
b.buttonElement.attr("aria-pressed",b.element[0].checked)
})
}else{if(this.type==="radio"){this.buttonElement.bind("click.button",function(){if(j.disabled||n){return false
}a(this).addClass("ui-state-active");
b.buttonElement.attr("aria-pressed","true");
var k=b.element[0];
d(k).not(k).map(function(){return a(this).button("widget")[0]
}).removeClass("ui-state-active").attr("aria-pressed","false")
})
}else{this.buttonElement.bind("mousedown.button",function(){if(j.disabled){return false
}a(this).addClass("ui-state-active");
m=this;
a(document).one("mouseup",function(){m=null
})
}).bind("mouseup.button",function(){if(j.disabled){return false
}a(this).removeClass("ui-state-active")
}).bind("keydown.button",function(k){if(j.disabled){return false
}if(k.keyCode==a.ui.keyCode.SPACE||k.keyCode==a.ui.keyCode.ENTER){a(this).addClass("ui-state-active")
}}).bind("keyup.button",function(){a(this).removeClass("ui-state-active")
});
this.buttonElement.is("a")&&this.buttonElement.keyup(function(k){k.keyCode===a.ui.keyCode.SPACE&&a(this).click()
})
}}this._setOption("disabled",j.disabled);
this._resetButton()
},_determineButtonType:function(){this.type=this.element.is(":checkbox")?"checkbox":this.element.is(":radio")?"radio":this.element.is("input")?"input":"button";
if(this.type==="checkbox"||this.type==="radio"){var b=this.element.parents().filter(":last"),g="label[for='"+this.element.attr("id")+"']";
this.buttonElement=b.find(g);
if(!this.buttonElement.length){b=b.length?b.siblings():this.element.siblings();
this.buttonElement=b.filter(g);
if(!this.buttonElement.length){this.buttonElement=b.find(g)
}}this.element.addClass("ui-helper-hidden-accessible");
(b=this.element.is(":checked"))&&this.buttonElement.addClass("ui-state-active");
this.buttonElement.attr("aria-pressed",b)
}else{this.buttonElement=this.element
}},widget:function(){return this.buttonElement
},destroy:function(){this.element.removeClass("ui-helper-hidden-accessible");
this.buttonElement.removeClass("ui-button ui-widget ui-state-default ui-corner-all ui-state-hover ui-state-active  ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only").removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());
this.hasTitle||this.buttonElement.removeAttr("title");
a.Widget.prototype.destroy.call(this)
},_setOption:function(b,g){a.Widget.prototype._setOption.apply(this,arguments);
if(b==="disabled"){g?this.element.propAttr("disabled",true):this.element.propAttr("disabled",false)
}else{this._resetButton()
}},refresh:function(){var b=this.element.is(":disabled");
b!==this.options.disabled&&this._setOption("disabled",b);
if(this.type==="radio"){d(this.element[0]).each(function(){a(this).is(":checked")?a(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true"):a(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")
})
}else{if(this.type==="checkbox"){this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true"):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false")
}}},_resetButton:function(){if(this.type==="input"){this.options.label&&this.element.val(this.options.label)
}else{var b=this.buttonElement.removeClass("ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only"),k=a("<span></span>").addClass("ui-button-text").html(this.options.label).appendTo(b.empty()).text(),h=this.options.icons,g=h.primary&&h.secondary,j=[];
if(h.primary||h.secondary){if(this.options.text){j.push("ui-button-text-icon"+(g?"s":h.primary?"-primary":"-secondary"))
}h.primary&&b.prepend("<span class='ui-button-icon-primary ui-icon "+h.primary+"'></span>");
h.secondary&&b.append("<span class='ui-button-icon-secondary ui-icon "+h.secondary+"'></span>");
if(!this.options.text){j.push(g?"ui-button-icons-only":"ui-button-icon-only");
this.hasTitle||b.attr("title",k)
}}else{j.push("ui-button-text-only")
}b.addClass(j.join(" "))
}}});
a.widget("ui.buttonset",{options:{items:":button, :submit, :reset, :checkbox, :radio, a, :data(button)"},_create:function(){this.element.addClass("ui-buttonset")
},_init:function(){this.refresh()
},_setOption:function(b,g){b==="disabled"&&this.buttons.button("option",b,g);
a.Widget.prototype._setOption.apply(this,arguments)
},refresh:function(){var b=this.element.css("direction")==="ltr";
this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return a(this).button("widget")[0]
}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(b?"ui-corner-left":"ui-corner-right").end().filter(":last").addClass(b?"ui-corner-right":"ui-corner-left").end().end()
},destroy:function(){this.element.removeClass("ui-buttonset");
this.buttons.map(function(){return a(this).button("widget")[0]
}).removeClass("ui-corner-left ui-corner-right").end().button("destroy");
a.Widget.prototype.destroy.call(this)
}})
})(jQuery);
(function(f,b){var a={buttons:true,height:true,maxHeight:true,maxWidth:true,minHeight:true,minWidth:true,width:true},e={maxHeight:true,maxWidth:true,minHeight:true,minWidth:true},d=f.attrFn||{val:true,css:true,html:true,text:true,data:true,width:true,height:true,offset:true,click:true};
f.widget("ui.dialog",{options:{autoOpen:true,buttons:{},closeOnEscape:true,closeText:"close",dialogClass:"",draggable:true,hide:null,height:"auto",maxHeight:false,maxWidth:false,minHeight:150,minWidth:150,modal:false,position:{my:"center",at:"center",collision:"fit",using:function(g){var c=f(this).css(g).offset().top;
c<0&&f(this).css("top",g.top-c)
}},resizable:true,show:null,stack:true,title:"",width:300,zIndex:1000},_create:function(){this.originalTitle=this.element.attr("title");
if(typeof this.originalTitle!=="string"){this.originalTitle=""
}this.options.title=this.options.title||this.originalTitle;
var j=this,c=j.options,o=c.title||"&#160;",n=f.ui.dialog.getTitleId(j.element),l=(j.uiDialog=f("<div></div>")).appendTo(document.body).hide().addClass("ui-dialog ui-widget ui-widget-content ui-corner-all "+c.dialogClass).css({zIndex:c.zIndex}).attr("tabIndex",-1).css("outline",0).keydown(function(g){if(c.closeOnEscape&&!g.isDefaultPrevented()&&g.keyCode&&g.keyCode===f.ui.keyCode.ESCAPE){j.close(g);
g.preventDefault()
}}).attr({role:"dialog","aria-labelledby":n}).mousedown(function(g){j.moveToTop(false,g)
});
j.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(l);
var m=(j.uiDialogTitlebar=f("<div></div>")).addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(l),k=f('<a href="#"></a>').addClass("ui-dialog-titlebar-close ui-corner-all").attr("role","button").hover(function(){k.addClass("ui-state-hover")
},function(){k.removeClass("ui-state-hover")
}).focus(function(){k.addClass("ui-state-focus")
}).blur(function(){k.removeClass("ui-state-focus")
}).click(function(g){j.close(g);
return false
}).appendTo(m);
(j.uiDialogTitlebarCloseText=f("<span></span>")).addClass("ui-icon ui-icon-closethick").text(c.closeText).appendTo(k);
f("<span></span>").addClass("ui-dialog-title").attr("id",n).html(o).prependTo(m);
if(f.isFunction(c.beforeclose)&&!f.isFunction(c.beforeClose)){c.beforeClose=c.beforeclose
}m.find("*").add(m).disableSelection();
c.draggable&&f.fn.draggable&&j._makeDraggable();
c.resizable&&f.fn.resizable&&j._makeResizable();
j._createButtons(c.buttons);
j._isOpen=false;
f.fn.bgiframe&&l.bgiframe()
},_init:function(){this.options.autoOpen&&this.open()
},destroy:function(){var c=this;
c.overlay&&c.overlay.destroy();
c.uiDialog.hide();
c.element.unbind(".dialog").removeData("dialog").removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body");
c.uiDialog.remove();
c.originalTitle&&c.element.attr("title",c.originalTitle);
return c
},widget:function(){return this.uiDialog
},close:function(g){var c=this,j,h;
if(false!==c._trigger("beforeClose",g)){c.overlay&&c.overlay.destroy();
c.uiDialog.unbind("keypress.ui-dialog");
c._isOpen=false;
if(c.options.hide){c.uiDialog.hide(c.options.hide,function(){c._trigger("close",g)
})
}else{c.uiDialog.hide();
c._trigger("close",g)
}f.ui.dialog.overlay.resize();
if(c.options.modal){j=0;
f(".ui-dialog").each(function(){if(this!==c.uiDialog[0]){h=f(this).css("z-index");
isNaN(h)||(j=Math.max(j,h))
}});
f.ui.dialog.maxZ=j
}return c
}},isOpen:function(){return this._isOpen
},moveToTop:function(g,c){var j=this,h=j.options;
if(h.modal&&!g||!h.stack&&!h.modal){return j._trigger("focus",c)
}if(h.zIndex>f.ui.dialog.maxZ){f.ui.dialog.maxZ=h.zIndex
}if(j.overlay){f.ui.dialog.maxZ+=1;
j.overlay.$el.css("z-index",f.ui.dialog.overlay.maxZ=f.ui.dialog.maxZ)
}g={scrollTop:j.element.scrollTop(),scrollLeft:j.element.scrollLeft()};
f.ui.dialog.maxZ+=1;
j.uiDialog.css("z-index",f.ui.dialog.maxZ);
j.element.attr(g);
j._trigger("focus",c);
return j
},open:function(){if(!this._isOpen){var g=this,c=g.options,h=g.uiDialog;
g.overlay=c.modal?new f.ui.dialog.overlay(g):null;
g._size();
g._position(c.position);
h.show(c.show);
g.moveToTop(true);
c.modal&&h.bind("keypress.ui-dialog",function(l){if(l.keyCode===f.ui.keyCode.TAB){var j=f(":tabbable",this),k=j.filter(":first");
j=j.filter(":last");
if(l.target===j[0]&&!l.shiftKey){k.focus(1);
return false
}else{if(l.target===k[0]&&l.shiftKey){j.focus(1);
return false
}}}});
f(g.element.find(":tabbable").get().concat(h.find(".ui-dialog-buttonpane :tabbable").get().concat(h.get()))).eq(0).focus();
g._isOpen=true;
g._trigger("open");
return g
}},_createButtons:function(h){var c=this,l=false,k=f("<div></div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),j=f("<div></div>").addClass("ui-dialog-buttonset").appendTo(k);
c.uiDialog.find(".ui-dialog-buttonpane").remove();
typeof h==="object"&&h!==null&&f.each(h,function(){return !(l=true)
});
if(l){f.each(h,function(n,m){m=f.isFunction(m)?{click:m,text:n}:m;
var g=f('<button type="button"></button>').click(function(){m.click.apply(c.element[0],arguments)
}).appendTo(j);
f.each(m,function(p,o){if(p!=="click"){p in d?g[p](o):g.attr(p,o)
}});
f.fn.button&&g.button()
});
k.appendTo(c.uiDialog)
}},_makeDraggable:function(){function h(g){return{position:g.position,offset:g.offset}
}var c=this,l=c.options,k=f(document),j;
c.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(m,g){j=l.height==="auto"?"auto":f(this).height();
f(this).height(f(this).height()).addClass("ui-dialog-dragging");
c._trigger("dragStart",m,h(g))
},drag:function(m,g){c._trigger("drag",m,h(g))
},stop:function(m,g){l.position=[g.position.left-k.scrollLeft(),g.position.top-k.scrollTop()];
f(this).removeClass("ui-dialog-dragging").height(j);
c._trigger("dragStop",m,h(g));
f.ui.dialog.overlay.resize()
}})
},_makeResizable:function(h){function c(g){return{originalPosition:g.originalPosition,originalSize:g.originalSize,position:g.position,size:g.size}
}h=h===b?this.options.resizable:h;
var l=this,k=l.options,j=l.uiDialog.css("position");
h=typeof h==="string"?h:"n,e,s,w,se,sw,ne,nw";
l.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:l.element,maxWidth:k.maxWidth,maxHeight:k.maxHeight,minWidth:k.minWidth,minHeight:l._minHeight(),handles:h,start:function(m,g){f(this).addClass("ui-dialog-resizing");
l._trigger("resizeStart",m,c(g))
},resize:function(m,g){l._trigger("resize",m,c(g))
},stop:function(m,g){f(this).removeClass("ui-dialog-resizing");
k.height=f(this).height();
k.width=f(this).width();
l._trigger("resizeStop",m,c(g));
f.ui.dialog.overlay.resize()
}}).css("position",j).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")
},_minHeight:function(){var c=this.options;
return c.height==="auto"?c.minHeight:Math.min(c.minHeight,c.height)
},_position:function(g){var c=[],j=[0,0],h;
if(g){if(typeof g==="string"||typeof g==="object"&&"0" in g){c=g.split?g.split(" "):[g[0],g[1]];
if(c.length===1){c[1]=c[0]
}f.each(["left","top"],function(k,l){if(+c[k]===c[k]){j[k]=c[k];
c[k]=l
}});
g={my:c.join(" "),at:c.join(" "),offset:j.join(" ")}
}g=f.extend({},f.ui.dialog.prototype.options.position,g)
}else{g=f.ui.dialog.prototype.options.position
}(h=this.uiDialog.is(":visible"))||this.uiDialog.show();
this.uiDialog.css({top:0,left:0}).position(f.extend({of:window},g));
h||this.uiDialog.hide()
},_setOptions:function(g){var c=this,j={},h=false;
f.each(g,function(k,l){c._setOption(k,l);
if(k in a){h=true
}if(k in e){j[k]=l
}});
h&&this._size();
this.uiDialog.is(":data(resizable)")&&this.uiDialog.resizable("option",j)
},_setOption:function(h,c){var l=this,k=l.uiDialog;
switch(h){case"beforeclose":h="beforeClose";
break;
case"buttons":l._createButtons(c);
break;
case"closeText":l.uiDialogTitlebarCloseText.text(""+c);
break;
case"dialogClass":k.removeClass(l.options.dialogClass).addClass("ui-dialog ui-widget ui-widget-content ui-corner-all "+c);
break;
case"disabled":c?k.addClass("ui-dialog-disabled"):k.removeClass("ui-dialog-disabled");
break;
case"draggable":var j=k.is(":data(draggable)");
j&&!c&&k.draggable("destroy");
!j&&c&&l._makeDraggable();
break;
case"position":l._position(c);
break;
case"resizable":(j=k.is(":data(resizable)"))&&!c&&k.resizable("destroy");
j&&typeof c==="string"&&k.resizable("option","handles",c);
!j&&c!==false&&l._makeResizable(c);
break;
case"title":f(".ui-dialog-title",l.uiDialogTitlebar).html(""+(c||"&#160;"));
break
}f.Widget.prototype._setOption.apply(l,arguments)
},_size:function(){var g=this.options,c,j,h=this.uiDialog.is(":visible");
this.element.show().css({width:"auto",minHeight:0,height:0});
if(g.minWidth>g.width){g.width=g.minWidth
}c=this.uiDialog.css({height:"auto",width:g.width}).height();
j=Math.max(0,g.minHeight-c);
if(g.height==="auto"){if(f.support.minHeight){this.element.css({minHeight:j,height:"auto"})
}else{this.uiDialog.show();
g=this.element.css("height","auto").height();
h||this.uiDialog.hide();
this.element.height(Math.max(g,j))
}}else{this.element.height(Math.max(g.height-c,0))
}this.uiDialog.is(":data(resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())
}});
f.extend(f.ui.dialog,{version:"1.8.16",uuid:0,maxZ:0,getTitleId:function(c){c=c.attr("id");
if(!c){this.uuid+=1;
c=this.uuid
}return"ui-dialog-title-"+c
},overlay:function(c){this.$el=f.ui.dialog.overlay.create(c)
}});
f.extend(f.ui.dialog.overlay,{instances:[],oldInstances:[],maxZ:0,events:f.map("focus,mousedown,mouseup,keydown,keypress,click".split(","),function(c){return c+".dialog-overlay"
}).join(" "),create:function(g){if(this.instances.length===0){setTimeout(function(){f.ui.dialog.overlay.instances.length&&f(document).bind(f.ui.dialog.overlay.events,function(h){if(f(h.target).zIndex()<f.ui.dialog.overlay.maxZ){return false
}})
},1);
f(document).bind("keydown.dialog-overlay",function(h){if(g.options.closeOnEscape&&!h.isDefaultPrevented()&&h.keyCode&&h.keyCode===f.ui.keyCode.ESCAPE){g.close(h);
h.preventDefault()
}});
f(window).bind("resize.dialog-overlay",f.ui.dialog.overlay.resize)
}var c=(this.oldInstances.pop()||f("<div></div>").addClass("ui-widget-overlay")).appendTo(document.body).css({width:this.width(),height:this.height()});
f.fn.bgiframe&&c.bgiframe();
this.instances.push(c);
return c
},destroy:function(g){var c=f.inArray(g,this.instances);
c!=-1&&this.oldInstances.push(this.instances.splice(c,1)[0]);
this.instances.length===0&&f([document,window]).unbind(".dialog-overlay");
g.remove();
var h=0;
f.each(this.instances,function(){h=Math.max(h,this.css("z-index"))
});
this.maxZ=h
},height:function(){var g,c;
if(f.browser.msie&&f.browser.version<7){g=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight);
c=Math.max(document.documentElement.offsetHeight,document.body.offsetHeight);
return g<c?f(window).height()+"px":g+"px"
}else{return f(document).height()+"px"
}},width:function(){var g,c;
if(f.browser.msie){g=Math.max(document.documentElement.scrollWidth,document.body.scrollWidth);
c=Math.max(document.documentElement.offsetWidth,document.body.offsetWidth);
return g<c?f(window).width()+"px":g+"px"
}else{return f(document).width()+"px"
}},resize:function(){var c=f([]);
f.each(f.ui.dialog.overlay.instances,function(){c=c.add(this)
});
c.css({width:0,height:0}).css({width:f.ui.dialog.overlay.width(),height:f.ui.dialog.overlay.height()})
}});
f.extend(f.ui.dialog.overlay.prototype,{destroy:function(){f.ui.dialog.overlay.destroy(this.$el)
}})
})(jQuery);
(function(a){a.widget("ui.slider",a.ui.mouse,{widgetEventPrefix:"slide",options:{animate:false,distance:0,max:100,min:0,orientation:"horizontal",range:false,step:1,value:0,values:null},_create:function(){var g=this,d=this.options,m=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),k=d.values&&d.values.length||1,l=[];
this._mouseSliding=this._keySliding=false;
this._animateOff=true;
this._handleIndex=null;
this._detectOrientation();
this._mouseInit();
this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget ui-widget-content ui-corner-all"+(d.disabled?" ui-slider-disabled ui-disabled":""));
this.range=a([]);
if(d.range){if(d.range===true){if(!d.values){d.values=[this._valueMin(),this._valueMin()]
}if(d.values.length&&d.values.length!==2){d.values=[d.values[0],d.values[0]]
}}this.range=a("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header"+(d.range==="min"||d.range==="max"?" ui-slider-range-"+d.range:""))
}for(var h=m.length;
h<k;
h+=1){l.push("<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>")
}this.handles=m.add(a(l.join("")).appendTo(g.element));
this.handle=this.handles.eq(0);
this.handles.add(this.range).filter("a").click(function(b){b.preventDefault()
}).hover(function(){d.disabled||a(this).addClass("ui-state-hover")
},function(){a(this).removeClass("ui-state-hover")
}).focus(function(){if(d.disabled){a(this).blur()
}else{a(".ui-slider .ui-state-focus").removeClass("ui-state-focus");
a(this).addClass("ui-state-focus")
}}).blur(function(){a(this).removeClass("ui-state-focus")
});
this.handles.each(function(b){a(this).data("index.ui-slider-handle",b)
});
this.handles.keydown(function(n){var e=true,c=a(this).data("index.ui-slider-handle"),f,j,b;
if(!g.options.disabled){switch(n.keyCode){case a.ui.keyCode.HOME:case a.ui.keyCode.END:case a.ui.keyCode.PAGE_UP:case a.ui.keyCode.PAGE_DOWN:case a.ui.keyCode.UP:case a.ui.keyCode.RIGHT:case a.ui.keyCode.DOWN:case a.ui.keyCode.LEFT:e=false;
if(!g._keySliding){g._keySliding=true;
a(this).addClass("ui-state-active");
f=g._start(n,c);
if(f===false){return
}}break
}b=g.options.step;
f=g.options.values&&g.options.values.length?(j=g.values(c)):(j=g.value());
switch(n.keyCode){case a.ui.keyCode.HOME:j=g._valueMin();
break;
case a.ui.keyCode.END:j=g._valueMax();
break;
case a.ui.keyCode.PAGE_UP:j=g._trimAlignValue(f+(g._valueMax()-g._valueMin())/5);
break;
case a.ui.keyCode.PAGE_DOWN:j=g._trimAlignValue(f-(g._valueMax()-g._valueMin())/5);
break;
case a.ui.keyCode.UP:case a.ui.keyCode.RIGHT:if(f===g._valueMax()){return
}j=g._trimAlignValue(f+b);
break;
case a.ui.keyCode.DOWN:case a.ui.keyCode.LEFT:if(f===g._valueMin()){return
}j=g._trimAlignValue(f-b);
break
}g._slide(n,c,j);
return e
}}).keyup(function(c){var b=a(this).data("index.ui-slider-handle");
if(g._keySliding){g._keySliding=false;
g._stop(c,b);
g._change(c,b);
a(this).removeClass("ui-state-active")
}});
this._refreshValue();
this._animateOff=false
},destroy:function(){this.handles.remove();
this.range.remove();
this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider");
this._mouseDestroy();
return this
},_mouseCapture:function(h){var d=this.options,o,m,n,k,l;
if(d.disabled){return false
}this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()};
this.elementOffset=this.element.offset();
o=this._normValueFromMouse({x:h.pageX,y:h.pageY});
m=this._valueMax()-this._valueMin()+1;
k=this;
this.handles.each(function(c){var b=Math.abs(o-k.values(c));
if(m>b){m=b;
n=a(this);
l=c
}});
if(d.range===true&&this.values(1)===d.min){l+=1;
n=a(this.handles[l])
}if(this._start(h,l)===false){return false
}this._mouseSliding=true;
k._handleIndex=l;
n.addClass("ui-state-active").focus();
d=n.offset();
this._clickOffset=!a(h.target).parents().andSelf().is(".ui-slider-handle")?{left:0,top:0}:{left:h.pageX-d.left-n.width()/2,top:h.pageY-d.top-n.height()/2-(parseInt(n.css("borderTopWidth"),10)||0)-(parseInt(n.css("borderBottomWidth"),10)||0)+(parseInt(n.css("marginTop"),10)||0)};
this.handles.hasClass("ui-state-hover")||this._slide(h,l,o);
return this._animateOff=true
},_mouseStart:function(){return true
},_mouseDrag:function(d){var c=this._normValueFromMouse({x:d.pageX,y:d.pageY});
this._slide(d,this._handleIndex,c);
return false
},_mouseStop:function(b){this.handles.removeClass("ui-state-active");
this._mouseSliding=false;
this._stop(b,this._handleIndex);
this._change(b,this._handleIndex);
this._clickOffset=this._handleIndex=null;
return this._animateOff=false
},_detectOrientation:function(){this.orientation=this.options.orientation==="vertical"?"vertical":"horizontal"
},_normValueFromMouse:function(d){var c;
if(this.orientation==="horizontal"){c=this.elementSize.width;
d=d.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)
}else{c=this.elementSize.height;
d=d.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)
}c=d/c;
if(c>1){c=1
}if(c<0){c=0
}if(this.orientation==="vertical"){c=1-c
}d=this._valueMax()-this._valueMin();
return this._trimAlignValue(this._valueMin()+c*d)
},_start:function(e,d){var f={handle:this.handles[d],value:this.value()};
if(this.options.values&&this.options.values.length){f.value=this.values(d);
f.values=this.values()
}return this._trigger("start",e,f)
},_slide:function(e,d,h){var g;
if(this.options.values&&this.options.values.length){g=this.values(d?0:1);
if(this.options.values.length===2&&this.options.range===true&&(d===0&&h>g||d===1&&h<g)){h=g
}if(h!==this.values(d)){g=this.values();
g[d]=h;
e=this._trigger("slide",e,{handle:this.handles[d],value:h,values:g});
this.values(d?0:1);
e!==false&&this.values(d,h,true)
}}else{if(h!==this.value()){e=this._trigger("slide",e,{handle:this.handles[d],value:h});
e!==false&&this.value(h)
}}},_stop:function(e,d){var f={handle:this.handles[d],value:this.value()};
if(this.options.values&&this.options.values.length){f.value=this.values(d);
f.values=this.values()
}this._trigger("stop",e,f)
},_change:function(e,d){if(!this._keySliding&&!this._mouseSliding){var f={handle:this.handles[d],value:this.value()};
if(this.options.values&&this.options.values.length){f.value=this.values(d);
f.values=this.values()
}this._trigger("change",e,f)
}},value:function(b){if(arguments.length){this.options.value=this._trimAlignValue(b);
this._refreshValue();
this._change(null,0)
}else{return this._value()
}},values:function(g,d){var k,h,j;
if(arguments.length>1){this.options.values[g]=this._trimAlignValue(d);
this._refreshValue();
this._change(null,g)
}else{if(arguments.length){if(a.isArray(arguments[0])){k=this.options.values;
h=arguments[0];
for(j=0;
j<k.length;
j+=1){k[j]=this._trimAlignValue(h[j]);
this._change(null,j)
}this._refreshValue()
}else{return this.options.values&&this.options.values.length?this._values(g):this.value()
}}else{return this._values()
}}},_setOption:function(e,d){var h,g=0;
if(a.isArray(this.options.values)){g=this.options.values.length
}a.Widget.prototype._setOption.apply(this,arguments);
switch(e){case"disabled":if(d){this.handles.filter(".ui-state-focus").blur();
this.handles.removeClass("ui-state-hover");
this.handles.propAttr("disabled",true);
this.element.addClass("ui-disabled")
}else{this.handles.propAttr("disabled",false);
this.element.removeClass("ui-disabled")
}break;
case"orientation":this._detectOrientation();
this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation);
this._refreshValue();
break;
case"value":this._animateOff=true;
this._refreshValue();
this._change(null,0);
this._animateOff=false;
break;
case"values":this._animateOff=true;
this._refreshValue();
for(h=0;
h<g;
h+=1){this._change(null,h)
}this._animateOff=false;
break
}},_value:function(){var b=this.options.value;
return b=this._trimAlignValue(b)
},_values:function(e){var d,f;
if(arguments.length){d=this.options.values[e];
return d=this._trimAlignValue(d)
}else{d=this.options.values.slice();
for(f=0;
f<d.length;
f+=1){d[f]=this._trimAlignValue(d[f])
}return d
}},_trimAlignValue:function(e){if(e<=this._valueMin()){return this._valueMin()
}if(e>=this._valueMax()){return this._valueMax()
}var d=this.options.step>0?this.options.step:1,f=(e-this._valueMin())%d;
e=e-f;
if(Math.abs(f)*2>=d){e+=f>0?d:-d
}return parseFloat(e.toFixed(5))
},_valueMin:function(){return this.options.min
},_valueMax:function(){return this.options.max
},_refreshValue:function(){var u=this.options.range,s=this.options,r=this,p=!this._animateOff?s.animate:false,q,m={},o,h,d,n;
if(this.options.values&&this.options.values.length){this.handles.each(function(b){q=(r.values(b)-r._valueMin())/(r._valueMax()-r._valueMin())*100;
m[r.orientation==="horizontal"?"left":"bottom"]=q+"%";
a(this).stop(1,1)[p?"animate":"css"](m,s.animate);
if(r.options.range===true){if(r.orientation==="horizontal"){if(b===0){r.range.stop(1,1)[p?"animate":"css"]({left:q+"%"},s.animate)
}if(b===1){r.range[p?"animate":"css"]({width:q-o+"%"},{queue:false,duration:s.animate})
}}else{if(b===0){r.range.stop(1,1)[p?"animate":"css"]({bottom:q+"%"},s.animate)
}if(b===1){r.range[p?"animate":"css"]({height:q-o+"%"},{queue:false,duration:s.animate})
}}}o=q
})
}else{h=this.value();
d=this._valueMin();
n=this._valueMax();
q=n!==d?(h-d)/(n-d)*100:0;
m[r.orientation==="horizontal"?"left":"bottom"]=q+"%";
this.handle.stop(1,1)[p?"animate":"css"](m,s.animate);
if(u==="min"&&this.orientation==="horizontal"){this.range.stop(1,1)[p?"animate":"css"]({width:q+"%"},s.animate)
}if(u==="max"&&this.orientation==="horizontal"){this.range[p?"animate":"css"]({width:100-q+"%"},{queue:false,duration:s.animate})
}if(u==="min"&&this.orientation==="vertical"){this.range.stop(1,1)[p?"animate":"css"]({height:q+"%"},s.animate)
}if(u==="max"&&this.orientation==="vertical"){this.range[p?"animate":"css"]({height:100-q+"%"},{queue:false,duration:s.animate})
}}}});
a.extend(a.ui.slider,{version:"1.8.16"})
})(jQuery);
(function(g,f){function e(){return ++c
}function b(){return ++a
}var c=0,a=0;
g.widget("ui.tabs",{options:{add:null,ajaxOptions:null,cache:false,cookie:null,collapsible:false,disable:null,disabled:[],enable:null,event:"click",fx:null,idPrefix:"ui-tabs-",load:null,panelTemplate:"<div></div>",remove:null,select:null,show:null,spinner:"<em>Loading&#8230;</em>",tabTemplate:"<li><a href='#{href}'><span>#{label}</span></a></li>"},_create:function(){this._tabify(true)
},_setOption:function(d,h){if(d=="selected"){this.options.collapsible&&h==this.options.selected||this.select(h)
}else{this.options[d]=h;
this._tabify()
}},_tabId:function(d){return d.title&&d.title.replace(/\s/g,"_").replace(/[^\w\u00c0-\uFFFF-]/g,"")||this.options.idPrefix+e()
},_sanitizeSelector:function(d){return d.replace(/:/g,"\\:")
},_cookie:function(){var d=this.cookie||(this.cookie=this.options.cookie.name||"ui-tabs-"+b());
return g.cookie.apply(null,[d].concat(g.makeArray(arguments)))
},_ui:function(d,h){return{tab:d,panel:h,index:this.anchors.index(d)}
},_cleanup:function(){this.lis.filter(".ui-state-processing").removeClass("ui-state-processing").find("span:data(label.tabs)").each(function(){var d=g(this);
d.html(d.data("label.tabs")).removeData("label.tabs")
})
},_tabify:function(z){function x(h,j){h.css("display","");
!g.support.opacity&&j.opacity&&h[0].style.removeAttribute("filter")
}var A=this,y=this.options,w=/^#.+/;
this.list=this.element.find("ol,ul").eq(0);
this.lis=g(" > li:has(a[href])",this.list);
this.anchors=this.lis.map(function(){return g("a",this)[0]
});
this.panels=g([]);
this.anchors.each(function(k,n){var j=g(n).attr("href"),h=j.split("#")[0],m;
if(h&&(h===location.toString().split("#")[0]||(m=g("base")[0])&&h===m.href)){j=n.hash;
n.href=j
}if(w.test(j)){A.panels=A.panels.add(A.element.find(A._sanitizeSelector(j)))
}else{if(j&&j!=="#"){g.data(n,"href.tabs",j);
g.data(n,"load.tabs",j.replace(/#.*$/,""));
j=A._tabId(n);
n.href="#"+j;
n=A.element.find("#"+j);
if(!n.length){n=g(y.panelTemplate).attr("id",j).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").insertAfter(A.panels[k-1]||A.list);
n.data("destroy.tabs",true)
}A.panels=A.panels.add(n)
}else{y.disabled.push(k)
}}});
if(z){this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all");
this.list.addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");
this.lis.addClass("ui-state-default ui-corner-top");
this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom");
if(y.selected===f){location.hash&&this.anchors.each(function(h,j){if(j.hash==location.hash){y.selected=h;
return false
}});
if(typeof y.selected!=="number"&&y.cookie){y.selected=parseInt(A._cookie(),10)
}if(typeof y.selected!=="number"&&this.lis.filter(".ui-tabs-selected").length){y.selected=this.lis.index(this.lis.filter(".ui-tabs-selected"))
}y.selected=y.selected||(this.lis.length?0:-1)
}else{if(y.selected===null){y.selected=-1
}}y.selected=y.selected>=0&&this.anchors[y.selected]||y.selected<0?y.selected:0;
y.disabled=g.unique(y.disabled.concat(g.map(this.lis.filter(".ui-state-disabled"),function(h){return A.lis.index(h)
}))).sort();
g.inArray(y.selected,y.disabled)!=-1&&y.disabled.splice(g.inArray(y.selected,y.disabled),1);
this.panels.addClass("ui-tabs-hide");
this.lis.removeClass("ui-tabs-selected ui-state-active");
if(y.selected>=0&&this.anchors.length){A.element.find(A._sanitizeSelector(A.anchors[y.selected].hash)).removeClass("ui-tabs-hide");
this.lis.eq(y.selected).addClass("ui-tabs-selected ui-state-active");
A.element.queue("tabs",function(){A._trigger("show",null,A._ui(A.anchors[y.selected],A.element.find(A._sanitizeSelector(A.anchors[y.selected].hash))[0]))
});
this.load(y.selected)
}g(window).bind("unload",function(){A.lis.add(A.anchors).unbind(".tabs");
A.lis=A.anchors=A.panels=null
})
}else{y.selected=this.lis.index(this.lis.filter(".ui-tabs-selected"))
}this.element[y.collapsible?"addClass":"removeClass"]("ui-tabs-collapsible");
y.cookie&&this._cookie(y.selected,y.cookie);
z=0;
for(var v;
v=this.lis[z];
z++){g(v)[g.inArray(z,y.disabled)!=-1&&!g(v).hasClass("ui-tabs-selected")?"addClass":"removeClass"]("ui-state-disabled")
}y.cache===false&&this.anchors.removeData("cache.tabs");
this.lis.add(this.anchors).unbind(".tabs");
if(y.event!=="mouseover"){var u=function(h,j){j.is(":not(.ui-state-disabled)")&&j.addClass("ui-state-"+h)
},p=function(h,j){j.removeClass("ui-state-"+h)
};
this.lis.bind("mouseover.tabs",function(){u("hover",g(this))
});
this.lis.bind("mouseout.tabs",function(){p("hover",g(this))
});
this.anchors.bind("focus.tabs",function(){u("focus",g(this).closest("li"))
});
this.anchors.bind("blur.tabs",function(){p("focus",g(this).closest("li"))
})
}var q,l;
if(y.fx){if(g.isArray(y.fx)){q=y.fx[0];
l=y.fx[1]
}else{q=l=y.fx
}}var d=l?function(h,j){g(h).closest("li").addClass("ui-tabs-selected ui-state-active");
j.hide().removeClass("ui-tabs-hide").animate(l,l.duration||"normal",function(){x(j,l);
A._trigger("show",null,A._ui(h,j[0]))
})
}:function(h,j){g(h).closest("li").addClass("ui-tabs-selected ui-state-active");
j.removeClass("ui-tabs-hide");
A._trigger("show",null,A._ui(h,j[0]))
},B=q?function(h,j){j.animate(q,q.duration||"normal",function(){A.lis.removeClass("ui-tabs-selected ui-state-active");
j.addClass("ui-tabs-hide");
x(j,q);
A.element.dequeue("tabs")
})
}:function(h,j){A.lis.removeClass("ui-tabs-selected ui-state-active");
j.addClass("ui-tabs-hide");
A.element.dequeue("tabs")
};
this.anchors.bind(y.event+".tabs",function(){var k=this,m=g(k).closest("li"),j=A.panels.filter(":not(.ui-tabs-hide)"),h=A.element.find(A._sanitizeSelector(k.hash));
if(m.hasClass("ui-tabs-selected")&&!y.collapsible||m.hasClass("ui-state-disabled")||m.hasClass("ui-state-processing")||A.panels.filter(":animated").length||A._trigger("select",null,A._ui(this,h[0]))===false){this.blur();
return false
}y.selected=A.anchors.index(this);
A.abort();
if(y.collapsible){if(m.hasClass("ui-tabs-selected")){y.selected=-1;
y.cookie&&A._cookie(y.selected,y.cookie);
A.element.queue("tabs",function(){B(k,j)
}).dequeue("tabs");
this.blur();
return false
}else{if(!j.length){y.cookie&&A._cookie(y.selected,y.cookie);
A.element.queue("tabs",function(){d(k,h)
});
A.load(A.anchors.index(this));
this.blur();
return false
}}}y.cookie&&A._cookie(y.selected,y.cookie);
if(h.length){j.length&&A.element.queue("tabs",function(){B(k,j)
});
A.element.queue("tabs",function(){d(k,h)
});
A.load(A.anchors.index(this))
}else{throw"jQuery UI Tabs: Mismatching fragment identifier."
}g.browser.msie&&this.blur()
});
this.anchors.bind("click.tabs",function(){return false
})
},_getIndex:function(d){if(typeof d=="string"){d=this.anchors.index(this.anchors.filter("[href$="+d+"]"))
}return d
},destroy:function(){var d=this.options;
this.abort();
this.element.unbind(".tabs").removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible").removeData("tabs");
this.list.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");
this.anchors.each(function(){var j=g.data(this,"href.tabs");
if(j){this.href=j
}var h=g(this).unbind(".tabs");
g.each(["href","load","cache"],function(l,k){h.removeData(k+".tabs")
})
});
this.lis.unbind(".tabs").add(this.panels).each(function(){g.data(this,"destroy.tabs")?g(this).remove():g(this).removeClass("ui-state-default ui-corner-top ui-tabs-selected ui-state-active ui-state-hover ui-state-focus ui-state-disabled ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide")
});
d.cookie&&this._cookie(null,d.cookie);
return this
},add:function(d,n,k){if(k===f){k=this.anchors.length
}var o=this,m=this.options;
n=g(m.tabTemplate.replace(/#\{href\}/g,d).replace(/#\{label\}/g,n));
d=!d.indexOf("#")?d.replace("#",""):this._tabId(g("a",n)[0]);
n.addClass("ui-state-default ui-corner-top").data("destroy.tabs",true);
var l=o.element.find("#"+d);
l.length||(l=g(m.panelTemplate).attr("id",d).data("destroy.tabs",true));
l.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide");
if(k>=this.lis.length){n.appendTo(this.list);
l.appendTo(this.list[0].parentNode)
}else{n.insertBefore(this.lis[k]);
l.insertBefore(this.panels[k])
}m.disabled=g.map(m.disabled,function(h){return h>=k?++h:h
});
this._tabify();
if(this.anchors.length==1){m.selected=0;
n.addClass("ui-tabs-selected ui-state-active");
l.removeClass("ui-tabs-hide");
this.element.queue("tabs",function(){o._trigger("show",null,o._ui(o.anchors[0],o.panels[0]))
});
this.load(0)
}this._trigger("add",null,this._ui(this.anchors[k],this.panels[k]));
return this
},remove:function(d){d=this._getIndex(d);
var j=this.options,h=this.lis.eq(d).remove(),k=this.panels.eq(d).remove();
if(h.hasClass("ui-tabs-selected")&&this.anchors.length>1){this.select(d+(d+1<this.anchors.length?1:-1))
}j.disabled=g.map(g.grep(j.disabled,function(l){return l!=d
}),function(l){return l>=d?--l:l
});
this._tabify();
this._trigger("remove",null,this._ui(h.find("a")[0],k[0]));
return this
},enable:function(d){d=this._getIndex(d);
var h=this.options;
if(g.inArray(d,h.disabled)!=-1){this.lis.eq(d).removeClass("ui-state-disabled");
h.disabled=g.grep(h.disabled,function(j){return j!=d
});
this._trigger("enable",null,this._ui(this.anchors[d],this.panels[d]));
return this
}},disable:function(d){d=this._getIndex(d);
var h=this.options;
if(d!=h.selected){this.lis.eq(d).addClass("ui-state-disabled");
h.disabled.push(d);
h.disabled.sort();
this._trigger("disable",null,this._ui(this.anchors[d],this.panels[d]))
}return this
},select:function(d){d=this._getIndex(d);
if(d==-1){if(this.options.collapsible&&this.options.selected!=-1){d=this.options.selected
}else{return this
}}this.anchors.eq(d).trigger(this.options.event+".tabs");
return this
},load:function(d){d=this._getIndex(d);
var n=this,k=this.options,o=this.anchors.eq(d)[0],m=g.data(o,"load.tabs");
this.abort();
if(!m||this.element.queue("tabs").length!==0&&g.data(o,"cache.tabs")){this.element.dequeue("tabs")
}else{this.lis.eq(d).addClass("ui-state-processing");
if(k.spinner){var l=g("span",o);
l.data("label.tabs",l.html()).html(k.spinner)
}this.xhr=g.ajax(g.extend({},k.ajaxOptions,{url:m,success:function(j,p){n.element.find(n._sanitizeSelector(o.hash)).html(j);
n._cleanup();
k.cache&&g.data(o,"cache.tabs",true);
n._trigger("load",null,n._ui(n.anchors[d],n.panels[d]));
try{k.ajaxOptions.success(j,p)
}catch(h){}},error:function(j,p){n._cleanup();
n._trigger("load",null,n._ui(n.anchors[d],n.panels[d]));
try{k.ajaxOptions.error(j,p,d,o)
}catch(h){}}}));
n.element.dequeue("tabs");
return this
}},abort:function(){this.element.queue([]);
this.panels.stop(false,true);
this.element.queue("tabs",this.element.queue("tabs").splice(-2,2));
if(this.xhr){this.xhr.abort();
delete this.xhr
}this._cleanup();
return this
},url:function(d,h){this.anchors.eq(d).removeData("cache.tabs").data("load.tabs",h);
return this
},length:function(){return this.anchors.length
}});
g.extend(g.ui.tabs,{version:"1.8.16"});
g.extend(g.ui.tabs.prototype,{rotation:null,rotate:function(d,l){var j=this,m=this.options,k=j._rotate||(j._rotate=function(h){clearTimeout(j.rotation);
j.rotation=setTimeout(function(){var n=m.selected;
j.select(++n<j.anchors.length?n:0)
},d);
h&&h.stopPropagation()
});
l=j._unrotate||(j._unrotate=!l?function(h){h.clientX&&j.rotate(null)
}:function(){t=m.selected;
k()
});
if(d){this.element.bind("tabsshow",k);
this.anchors.bind(m.event+".tabs",l);
k()
}else{clearTimeout(j.rotation);
this.element.unbind("tabsshow",k);
this.anchors.unbind(m.event+".tabs",l);
delete this._rotate;
delete this._unrotate
}return this
}})
})(jQuery);
(function(d,C){function M(){this.debug=false;
this._curInst=null;
this._keyEvent=false;
this._disabledInputs=[];
this._inDialog=this._datepickerShowing=false;
this._mainDivId="ui-datepicker-div";
this._inlineClass="ui-datepicker-inline";
this._appendClass="ui-datepicker-append";
this._triggerClass="ui-datepicker-trigger";
this._dialogClass="ui-datepicker-dialog";
this._disableClass="ui-datepicker-disabled";
this._unselectableClass="ui-datepicker-unselectable";
this._currentClass="ui-datepicker-current-day";
this._dayOverClass="ui-datepicker-days-cell-over";
this.regional=[];
this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:false,showMonthAfterYear:false,yearSuffix:""};
this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:false,hideIfNoPrevNext:false,navigationAsDateFormat:false,gotoCurrent:false,changeMonth:false,changeYear:false,yearRange:"c-10:c+10",showOtherMonths:false,selectOtherMonths:false,showWeek:false,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:true,showButtonPanel:false,autoSize:false,disabled:false};
d.extend(this._defaults,this.regional[""]);
this.dpDiv=N(d('<div id="'+this._mainDivId+'" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))
}function N(a){return a.bind("mouseout",function(b){b=d(b.target).closest("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a");
b.length&&b.removeClass("ui-state-hover ui-datepicker-prev-hover ui-datepicker-next-hover")
}).bind("mouseover",function(b){b=d(b.target).closest("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a");
if(!(d.datepicker._isDisabledDatepicker(J.inline?a.parent()[0]:J.input[0])||!b.length)){b.parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");
b.addClass("ui-state-hover");
b.hasClass("ui-datepicker-prev")&&b.addClass("ui-datepicker-prev-hover");
b.hasClass("ui-datepicker-next")&&b.addClass("ui-datepicker-next-hover")
}})
}function H(a,b){d.extend(a,b);
for(var c in b){if(b[c]==null||b[c]==C){a[c]=b[c]
}}return a
}d.extend(d.ui,{datepicker:{version:"1.8.16"}});
var B=(new Date).getTime(),J;
d.extend(M.prototype,{markerClassName:"hasDatepicker",maxRows:4,log:function(){this.debug&&console.log.apply("",arguments)
},_widgetDatepicker:function(){return this.dpDiv
},setDefaults:function(a){H(this._defaults,a||{});
return this
},_attachDatepicker:function(a,b){var c=null;
for(var e in this._defaults){var f=a.getAttribute("date:"+e);
if(f){c=c||{};
try{c[e]=eval(f)
}catch(h){c[e]=f
}}}e=a.nodeName.toLowerCase();
f=e=="div"||e=="span";
if(!a.id){this.uuid+=1;
a.id="dp"+this.uuid
}var i=this._newInst(d(a),f);
i.settings=d.extend({},b||{},c||{});
if(e=="input"){this._connectDatepicker(a,i)
}else{f&&this._inlineDatepicker(a,i)
}},_newInst:function(a,b){return{id:a[0].id.replace(/([^A-Za-z0-9_-])/g,"\\\\$1"),input:a,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:b,dpDiv:!b?this.dpDiv:N(d('<div class="'+this._inlineClass+' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))}
},_connectDatepicker:function(a,b){var c=d(a);
b.append=d([]);
b.trigger=d([]);
if(!c.hasClass(this.markerClassName)){this._attachments(c,b);
c.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker",function(e,f,h){b.settings[f]=h
}).bind("getData.datepicker",function(e,f){return this._get(b,f)
});
this._autoSize(b);
d.data(a,"datepicker",b);
b.settings.disabled&&this._disableDatepicker(a)
}},_attachments:function(a,b){var c=this._get(b,"appendText"),e=this._get(b,"isRTL");
b.append&&b.append.remove();
if(c){b.append=d('<span class="'+this._appendClass+'">'+c+"</span>");
a[e?"before":"after"](b.append)
}a.unbind("focus",this._showDatepicker);
b.trigger&&b.trigger.remove();
c=this._get(b,"showOn");
if(c=="focus"||c=="both"){a.focus(this._showDatepicker)
}if(c=="button"||c=="both"){c=this._get(b,"buttonText");
var f=this._get(b,"buttonImage");
b.trigger=d(this._get(b,"buttonImageOnly")?d("<img/>").addClass(this._triggerClass).attr({src:f,alt:c,title:c}):d('<button type="button"></button>').addClass(this._triggerClass).html(f==""?c:d("<img/>").attr({src:f,alt:c,title:c})));
a[e?"before":"after"](b.trigger);
b.trigger.click(function(){d.datepicker._datepickerShowing&&d.datepicker._lastInput==a[0]?d.datepicker._hideDatepicker():d.datepicker._showDatepicker(a[0]);
return false
})
}},_autoSize:function(a){if(this._get(a,"autoSize")&&!a.inline){var b=new Date(2009,11,20),c=this._get(a,"dateFormat");
if(c.match(/[DM]/)){var e=function(f){for(var h=0,i=0,g=0;
g<f.length;
g++){if(f[g].length>h){h=f[g].length;
i=g
}}return i
};
b.setMonth(e(this._get(a,c.match(/MM/)?"monthNames":"monthNamesShort")));
b.setDate(e(this._get(a,c.match(/DD/)?"dayNames":"dayNamesShort"))+20-b.getDay())
}a.input.attr("size",this._formatDate(a,b).length)
}},_inlineDatepicker:function(a,b){var c=d(a);
if(!c.hasClass(this.markerClassName)){c.addClass(this.markerClassName).append(b.dpDiv).bind("setData.datepicker",function(e,f,h){b.settings[f]=h
}).bind("getData.datepicker",function(e,f){return this._get(b,f)
});
d.data(a,"datepicker",b);
this._setDate(b,this._getDefaultDate(b),true);
this._updateDatepicker(b);
this._updateAlternate(b);
b.settings.disabled&&this._disableDatepicker(a);
b.dpDiv.css("display","block")
}},_dialogDatepicker:function(a,b,c,e,f){a=this._dialogInst;
if(!a){this.uuid+=1;
this._dialogInput=d('<input type="text" id="'+("dp"+this.uuid)+'" style="position: absolute; top: -100px; width: 0px; z-index: -10;"/>');
this._dialogInput.keydown(this._doKeyDown);
d("body").append(this._dialogInput);
a=this._dialogInst=this._newInst(this._dialogInput,false);
a.settings={};
d.data(this._dialogInput[0],"datepicker",a)
}H(a.settings,e||{});
b=b&&b.constructor==Date?this._formatDate(a,b):b;
this._dialogInput.val(b);
this._pos=f?f.length?f:[f.pageX,f.pageY]:null;
if(!this._pos){this._pos=[document.documentElement.clientWidth/2-100+(document.documentElement.scrollLeft||document.body.scrollLeft),document.documentElement.clientHeight/2-150+(document.documentElement.scrollTop||document.body.scrollTop)]
}this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px");
a.settings.onSelect=c;
this._inDialog=true;
this.dpDiv.addClass(this._dialogClass);
this._showDatepicker(this._dialogInput[0]);
d.blockUI&&d.blockUI(this.dpDiv);
d.data(this._dialogInput[0],"datepicker",a);
return this
},_destroyDatepicker:function(a){var b=d(a),c=d.data(a,"datepicker");
if(b.hasClass(this.markerClassName)){var e=a.nodeName.toLowerCase();
d.removeData(a,"datepicker");
if(e=="input"){c.append.remove();
c.trigger.remove();
b.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)
}else{if(e=="div"||e=="span"){b.removeClass(this.markerClassName).empty()
}}}},_enableDatepicker:function(a){var b=d(a),c=d.data(a,"datepicker");
if(b.hasClass(this.markerClassName)){var e=a.nodeName.toLowerCase();
if(e=="input"){a.disabled=false;
c.trigger.filter("button").each(function(){this.disabled=false
}).end().filter("img").css({opacity:"1.0",cursor:""})
}else{if(e=="div"||e=="span"){b=b.children("."+this._inlineClass);
b.children().removeClass("ui-state-disabled");
b.find("select.ui-datepicker-month, select.ui-datepicker-year").removeAttr("disabled")
}}this._disabledInputs=d.map(this._disabledInputs,function(f){return f==a?null:f
})
}},_disableDatepicker:function(a){var b=d(a),c=d.data(a,"datepicker");
if(b.hasClass(this.markerClassName)){var e=a.nodeName.toLowerCase();
if(e=="input"){a.disabled=true;
c.trigger.filter("button").each(function(){this.disabled=true
}).end().filter("img").css({opacity:"0.5",cursor:"default"})
}else{if(e=="div"||e=="span"){b=b.children("."+this._inlineClass);
b.children().addClass("ui-state-disabled");
b.find("select.ui-datepicker-month, select.ui-datepicker-year").attr("disabled","disabled")
}}this._disabledInputs=d.map(this._disabledInputs,function(f){return f==a?null:f
});
this._disabledInputs[this._disabledInputs.length]=a
}},_isDisabledDatepicker:function(a){if(!a){return false
}for(var b=0;
b<this._disabledInputs.length;
b++){if(this._disabledInputs[b]==a){return true
}}return false
},_getInst:function(a){try{return d.data(a,"datepicker")
}catch(b){throw"Missing instance data for this datepicker"
}},_optionDatepicker:function(a,b,c){var e=this._getInst(a);
if(arguments.length==2&&typeof b=="string"){return b=="defaults"?d.extend({},d.datepicker._defaults):e?b=="all"?d.extend({},e.settings):this._get(e,b):null
}var f=b||{};
if(typeof b=="string"){f={};
f[b]=c
}if(e){this._curInst==e&&this._hideDatepicker();
var h=this._getDateDatepicker(a,true),i=this._getMinMaxDate(e,"min"),g=this._getMinMaxDate(e,"max");
H(e.settings,f);
if(i!==null&&f.dateFormat!==C&&f.minDate===C){e.settings.minDate=this._formatDate(e,i)
}if(g!==null&&f.dateFormat!==C&&f.maxDate===C){e.settings.maxDate=this._formatDate(e,g)
}this._attachments(d(a),e);
this._autoSize(e);
this._setDate(e,h);
this._updateAlternate(e);
this._updateDatepicker(e)
}},_changeDatepicker:function(a,b,c){this._optionDatepicker(a,b,c)
},_refreshDatepicker:function(a){(a=this._getInst(a))&&this._updateDatepicker(a)
},_setDateDatepicker:function(a,b){if(a=this._getInst(a)){this._setDate(a,b);
this._updateDatepicker(a);
this._updateAlternate(a)
}},_getDateDatepicker:function(a,b){(a=this._getInst(a))&&!a.inline&&this._setDateFromField(a,b);
return a?this._getDate(a):null
},_doKeyDown:function(a){var b=d.datepicker._getInst(a.target),c=true,e=b.dpDiv.is(".ui-datepicker-rtl");
b._keyEvent=true;
if(d.datepicker._datepickerShowing){switch(a.keyCode){case 9:d.datepicker._hideDatepicker();
c=false;
break;
case 13:c=d("td."+d.datepicker._dayOverClass+":not(."+d.datepicker._currentClass+")",b.dpDiv);
c[0]&&d.datepicker._selectDay(a.target,b.selectedMonth,b.selectedYear,c[0]);
if(a=d.datepicker._get(b,"onSelect")){c=d.datepicker._formatDate(b);
a.apply(b.input?b.input[0]:null,[c,b])
}else{d.datepicker._hideDatepicker()
}return false;
case 27:d.datepicker._hideDatepicker();
break;
case 33:d.datepicker._adjustDate(a.target,a.ctrlKey?-d.datepicker._get(b,"stepBigMonths"):-d.datepicker._get(b,"stepMonths"),"M");
break;
case 34:d.datepicker._adjustDate(a.target,a.ctrlKey?+d.datepicker._get(b,"stepBigMonths"):+d.datepicker._get(b,"stepMonths"),"M");
break;
case 35:if(a.ctrlKey||a.metaKey){d.datepicker._clearDate(a.target)
}c=a.ctrlKey||a.metaKey;
break;
case 36:if(a.ctrlKey||a.metaKey){d.datepicker._gotoToday(a.target)
}c=a.ctrlKey||a.metaKey;
break;
case 37:if(a.ctrlKey||a.metaKey){d.datepicker._adjustDate(a.target,e?+1:-1,"D")
}c=a.ctrlKey||a.metaKey;
if(a.originalEvent.altKey){d.datepicker._adjustDate(a.target,a.ctrlKey?-d.datepicker._get(b,"stepBigMonths"):-d.datepicker._get(b,"stepMonths"),"M")
}break;
case 38:if(a.ctrlKey||a.metaKey){d.datepicker._adjustDate(a.target,-7,"D")
}c=a.ctrlKey||a.metaKey;
break;
case 39:if(a.ctrlKey||a.metaKey){d.datepicker._adjustDate(a.target,e?-1:+1,"D")
}c=a.ctrlKey||a.metaKey;
if(a.originalEvent.altKey){d.datepicker._adjustDate(a.target,a.ctrlKey?+d.datepicker._get(b,"stepBigMonths"):+d.datepicker._get(b,"stepMonths"),"M")
}break;
case 40:if(a.ctrlKey||a.metaKey){d.datepicker._adjustDate(a.target,+7,"D")
}c=a.ctrlKey||a.metaKey;
break;
default:c=false
}}else{if(a.keyCode==36&&a.ctrlKey){d.datepicker._showDatepicker(this)
}else{c=false
}}if(c){a.preventDefault();
a.stopPropagation()
}},_doKeyPress:function(a){var b=d.datepicker._getInst(a.target);
if(d.datepicker._get(b,"constrainInput")){b=d.datepicker._possibleChars(d.datepicker._get(b,"dateFormat"));
var c=String.fromCharCode(a.charCode==C?a.keyCode:a.charCode);
return a.ctrlKey||a.metaKey||c<" "||!b||b.indexOf(c)>-1
}},_doKeyUp:function(a){a=d.datepicker._getInst(a.target);
if(a.input.val()!=a.lastVal){try{if(d.datepicker.parseDate(d.datepicker._get(a,"dateFormat"),a.input?a.input.val():null,d.datepicker._getFormatConfig(a))){d.datepicker._setDateFromField(a);
d.datepicker._updateAlternate(a);
d.datepicker._updateDatepicker(a)
}}catch(b){d.datepicker.log(b)
}}return true
},_showDatepicker:function(a){a=a.target||a;
if(a.nodeName.toLowerCase()!="input"){a=d("input",a.parentNode)[0]
}if(!(d.datepicker._isDisabledDatepicker(a)||d.datepicker._lastInput==a)){var b=d.datepicker._getInst(a);
if(d.datepicker._curInst&&d.datepicker._curInst!=b){d.datepicker._datepickerShowing&&d.datepicker._triggerOnClose(d.datepicker._curInst);
d.datepicker._curInst.dpDiv.stop(true,true)
}var c=d.datepicker._get(b,"beforeShow");
c=c?c.apply(a,[a,b]):{};
if(c!==false){H(b.settings,c);
b.lastVal=null;
d.datepicker._lastInput=a;
d.datepicker._setDateFromField(b);
if(d.datepicker._inDialog){a.value=""
}if(!d.datepicker._pos){d.datepicker._pos=d.datepicker._findPos(a);
d.datepicker._pos[1]+=a.offsetHeight
}var e=false;
d(a).parents().each(function(){e|=d(this).css("position")=="fixed";
return !e
});
if(e&&d.browser.opera){d.datepicker._pos[0]-=document.documentElement.scrollLeft;
d.datepicker._pos[1]-=document.documentElement.scrollTop
}c={left:d.datepicker._pos[0],top:d.datepicker._pos[1]};
d.datepicker._pos=null;
b.dpDiv.empty();
b.dpDiv.css({position:"absolute",display:"block",top:"-1000px"});
d.datepicker._updateDatepicker(b);
c=d.datepicker._checkOffset(b,c,e);
b.dpDiv.css({position:d.datepicker._inDialog&&d.blockUI?"static":e?"fixed":"absolute",display:"none",left:c.left+"px",top:c.top+"px"});
if(!b.inline){c=d.datepicker._get(b,"showAnim");
var f=d.datepicker._get(b,"duration"),h=function(){var i=b.dpDiv.find("iframe.ui-datepicker-cover");
if(i.length){var g=d.datepicker._getBorders(b.dpDiv);
i.css({left:-g[0],top:-g[1],width:b.dpDiv.outerWidth(),height:b.dpDiv.outerHeight()})
}};
b.dpDiv.zIndex(d(a).zIndex()+1);
d.datepicker._datepickerShowing=true;
d.effects&&d.effects[c]?b.dpDiv.show(c,d.datepicker._get(b,"showOptions"),f,h):b.dpDiv[c||"show"](c?f:null,h);
if(!c||!f){h()
}b.input.is(":visible")&&!b.input.is(":disabled")&&b.input.focus();
d.datepicker._curInst=b
}}}},_updateDatepicker:function(a){this.maxRows=4;
var b=d.datepicker._getBorders(a.dpDiv);
J=a;
a.dpDiv.empty().append(this._generateHTML(a));
var c=a.dpDiv.find("iframe.ui-datepicker-cover");
c.length&&c.css({left:-b[0],top:-b[1],width:a.dpDiv.outerWidth(),height:a.dpDiv.outerHeight()});
a.dpDiv.find("."+this._dayOverClass+" a").mouseover();
b=this._getNumberOfMonths(a);
c=b[1];
a.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
c>1&&a.dpDiv.addClass("ui-datepicker-multi-"+c).css("width",17*c+"em");
a.dpDiv[(b[0]!=1||b[1]!=1?"add":"remove")+"Class"]("ui-datepicker-multi");
a.dpDiv[(this._get(a,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl");
a==d.datepicker._curInst&&d.datepicker._datepickerShowing&&a.input&&a.input.is(":visible")&&!a.input.is(":disabled")&&a.input[0]!=document.activeElement&&a.input.focus();
if(a.yearshtml){var e=a.yearshtml;
setTimeout(function(){e===a.yearshtml&&a.yearshtml&&a.dpDiv.find("select.ui-datepicker-year:first").replaceWith(a.yearshtml);
e=a.yearshtml=null
},0)
}},_getBorders:function(a){var b=function(c){return{thin:1,medium:2,thick:3}[c]||c
};
return[parseFloat(b(a.css("border-left-width"))),parseFloat(b(a.css("border-top-width")))]
},_checkOffset:function(a,b,c){var e=a.dpDiv.outerWidth(),f=a.dpDiv.outerHeight(),h=a.input?a.input.outerWidth():0,i=a.input?a.input.outerHeight():0,g=document.documentElement.clientWidth+d(document).scrollLeft(),j=document.documentElement.clientHeight+d(document).scrollTop();
b.left-=this._get(a,"isRTL")?e-h:0;
b.left-=c&&b.left==a.input.offset().left?d(document).scrollLeft():0;
b.top-=c&&b.top==a.input.offset().top+i?d(document).scrollTop():0;
b.left-=Math.min(b.left,b.left+e>g&&g>e?Math.abs(b.left+e-g):0);
b.top-=Math.min(b.top,b.top+f>j&&j>f?Math.abs(f+i):0);
return b
},_findPos:function(a){for(var b=this._get(this._getInst(a),"isRTL");
a&&(a.type=="hidden"||a.nodeType!=1||d.expr.filters.hidden(a));
){a=a[b?"previousSibling":"nextSibling"]
}a=d(a).offset();
return[a.left,a.top]
},_triggerOnClose:function(a){var b=this._get(a,"onClose");
if(b){b.apply(a.input?a.input[0]:null,[a.input?a.input.val():"",a])
}},_hideDatepicker:function(a){var b=this._curInst;
if(!(!b||a&&b!=d.data(a,"datepicker"))){if(this._datepickerShowing){a=this._get(b,"showAnim");
var c=this._get(b,"duration"),e=function(){d.datepicker._tidyDialog(b);
this._curInst=null
};
d.effects&&d.effects[a]?b.dpDiv.hide(a,d.datepicker._get(b,"showOptions"),c,e):b.dpDiv[a=="slideDown"?"slideUp":a=="fadeIn"?"fadeOut":"hide"](a?c:null,e);
a||e();
d.datepicker._triggerOnClose(b);
this._datepickerShowing=false;
this._lastInput=null;
if(this._inDialog){this._dialogInput.css({position:"absolute",left:"0",top:"-100px"});
if(d.blockUI){d.unblockUI();
d("body").append(this.dpDiv)
}}this._inDialog=false
}}},_tidyDialog:function(a){a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
},_checkExternalClick:function(a){if(d.datepicker._curInst){a=d(a.target);
a[0].id!=d.datepicker._mainDivId&&a.parents("#"+d.datepicker._mainDivId).length==0&&!a.hasClass(d.datepicker.markerClassName)&&!a.hasClass(d.datepicker._triggerClass)&&d.datepicker._datepickerShowing&&!(d.datepicker._inDialog&&d.blockUI)&&d.datepicker._hideDatepicker()
}},_adjustDate:function(a,b,c){a=d(a);
var e=this._getInst(a[0]);
if(!this._isDisabledDatepicker(a[0])){this._adjustInstDate(e,b+(c=="M"?this._get(e,"showCurrentAtPos"):0),c);
this._updateDatepicker(e)
}},_gotoToday:function(a){a=d(a);
var b=this._getInst(a[0]);
if(this._get(b,"gotoCurrent")&&b.currentDay){b.selectedDay=b.currentDay;
b.drawMonth=b.selectedMonth=b.currentMonth;
b.drawYear=b.selectedYear=b.currentYear
}else{var c=new Date;
b.selectedDay=c.getDate();
b.drawMonth=b.selectedMonth=c.getMonth();
b.drawYear=b.selectedYear=c.getFullYear()
}this._notifyChange(b);
this._adjustDate(a)
},_selectMonthYear:function(a,b,c){a=d(a);
var e=this._getInst(a[0]);
e["selected"+(c=="M"?"Month":"Year")]=e["draw"+(c=="M"?"Month":"Year")]=parseInt(b.options[b.selectedIndex].value,10);
this._notifyChange(e);
this._adjustDate(a)
},_selectDay:function(a,b,c,e){var f=d(a);
if(!(d(e).hasClass(this._unselectableClass)||this._isDisabledDatepicker(f[0]))){f=this._getInst(f[0]);
f.selectedDay=f.currentDay=d("a",e).html();
f.selectedMonth=f.currentMonth=b;
f.selectedYear=f.currentYear=c;
this._selectDate(a,this._formatDate(f,f.currentDay,f.currentMonth,f.currentYear))
}},_clearDate:function(a){a=d(a);
this._getInst(a[0]);
this._selectDate(a,"")
},_selectDate:function(a,b){a=this._getInst(d(a)[0]);
b=b!=null?b:this._formatDate(a);
a.input&&a.input.val(b);
this._updateAlternate(a);
var c=this._get(a,"onSelect");
if(c){c.apply(a.input?a.input[0]:null,[b,a])
}else{a.input&&a.input.trigger("change")
}if(a.inline){this._updateDatepicker(a)
}else{this._hideDatepicker();
this._lastInput=a.input[0];
typeof a.input[0]!="object"&&a.input.focus();
this._lastInput=null
}},_updateAlternate:function(a){var b=this._get(a,"altField");
if(b){var c=this._get(a,"altFormat")||this._get(a,"dateFormat"),e=this._getDate(a),f=this.formatDate(c,e,this._getFormatConfig(a));
d(b).each(function(){d(this).val(f)
})
}},noWeekends:function(a){a=a.getDay();
return[a>0&&a<6,""]
},iso8601Week:function(a){a=new Date(a.getTime());
a.setDate(a.getDate()+4-(a.getDay()||7));
var b=a.getTime();
a.setMonth(0);
a.setDate(1);
return Math.floor(Math.round((b-a)/86400000)/7)+1
},parseDate:function(a,b,c){if(a==null||b==null){throw"Invalid arguments"
}b=typeof b=="object"?b.toString():b+"";
if(b==""){return null
}var e=(c?c.shortYearCutoff:null)||this._defaults.shortYearCutoff;
e=typeof e!="string"?e:(new Date).getFullYear()%100+parseInt(e,10);
for(var f=(c?c.dayNamesShort:null)||this._defaults.dayNamesShort,h=(c?c.dayNames:null)||this._defaults.dayNames,i=(c?c.monthNamesShort:null)||this._defaults.monthNamesShort,g=(c?c.monthNames:null)||this._defaults.monthNames,j=c=-1,l=-1,u=-1,k=false,o=function(p){(p=A+1<a.length&&a.charAt(A+1)==p)&&A++;
return p
},m=function(p){var D=o(p);
p=new RegExp("^\\d{1,"+(p=="@"?14:p=="!"?20:p=="y"&&D?4:p=="o"?3:2)+"}");
p=b.substring(q).match(p);
if(!p){throw"Missing number at position "+q
}q+=p[0].length;
return parseInt(p[0],10)
},n=function(p,D,K){p=d.map(o(p)?K:D,function(w,x){return[[x,w]]
}).sort(function(w,x){return -(w[1].length-x[1].length)
});
var E=-1;
d.each(p,function(w,x){w=x[1];
if(b.substr(q,w.length).toLowerCase()==w.toLowerCase()){E=x[0];
q+=w.length;
return false
}});
if(E!=-1){return E+1
}else{throw"Unknown name at position "+q
}},s=function(){if(b.charAt(q)!=a.charAt(A)){throw"Unexpected literal at position "+q
}q++
},q=0,A=0;
A<a.length;
A++){if(k){if(a.charAt(A)=="'"&&!o("'")){k=false
}else{s()
}}else{switch(a.charAt(A)){case"d":l=m("d");
break;
case"D":n("D",f,h);
break;
case"o":u=m("o");
break;
case"m":j=m("m");
break;
case"M":j=n("M",i,g);
break;
case"y":c=m("y");
break;
case"@":var v=new Date(m("@"));
c=v.getFullYear();
j=v.getMonth()+1;
l=v.getDate();
break;
case"!":v=new Date((m("!")-this._ticksTo1970)/10000);
c=v.getFullYear();
j=v.getMonth()+1;
l=v.getDate();
break;
case"'":if(o("'")){s()
}else{k=true
}break;
default:s()
}}}if(q<b.length){throw"Extra/unparsed characters found in date: "+b.substring(q)
}if(c==-1){c=(new Date).getFullYear()
}else{if(c<100){c+=(new Date).getFullYear()-(new Date).getFullYear()%100+(c<=e?0:-100)
}}if(u>-1){j=1;
l=u;
do{e=this._getDaysInMonth(c,j-1);
if(l<=e){break
}j++;
l-=e
}while(1)
}v=this._daylightSavingAdjust(new Date(c,j-1,l));
if(v.getFullYear()!=c||v.getMonth()+1!=j||v.getDate()!=l){throw"Invalid date"
}return v
},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925))*24*60*60*10000000,formatDate:function(a,b,c){if(!b){return""
}var e=(c?c.dayNamesShort:null)||this._defaults.dayNamesShort,f=(c?c.dayNames:null)||this._defaults.dayNames,h=(c?c.monthNamesShort:null)||this._defaults.monthNamesShort;
c=(c?c.monthNames:null)||this._defaults.monthNames;
var i=function(o){(o=k+1<a.length&&a.charAt(k+1)==o)&&k++;
return o
},g=function(o,m,n){m=""+m;
if(i(o)){for(;
m.length<n;
){m="0"+m
}}return m
},j=function(o,m,n,s){return i(o)?s[m]:n[m]
},l="",u=false;
if(b){for(var k=0;
k<a.length;
k++){if(u){if(a.charAt(k)=="'"&&!i("'")){u=false
}else{l+=a.charAt(k)
}}else{switch(a.charAt(k)){case"d":l+=g("d",b.getDate(),2);
break;
case"D":l+=j("D",b.getDay(),e,f);
break;
case"o":l+=g("o",Math.round(((new Date(b.getFullYear(),b.getMonth(),b.getDate())).getTime()-(new Date(b.getFullYear(),0,0)).getTime())/86400000),3);
break;
case"m":l+=g("m",b.getMonth()+1,2);
break;
case"M":l+=j("M",b.getMonth(),h,c);
break;
case"y":l+=i("y")?b.getFullYear():(b.getYear()%100<10?"0":"")+b.getYear()%100;
break;
case"@":l+=b.getTime();
break;
case"!":l+=b.getTime()*10000+this._ticksTo1970;
break;
case"'":if(i("'")){l+="'"
}else{u=true
}break;
default:l+=a.charAt(k)
}}}}return l
},_possibleChars:function(a){for(var b="",c=false,e=function(h){(h=f+1<a.length&&a.charAt(f+1)==h)&&f++;
return h
},f=0;
f<a.length;
f++){if(c){if(a.charAt(f)=="'"&&!e("'")){c=false
}else{b+=a.charAt(f)
}}else{switch(a.charAt(f)){case"d":case"m":case"y":case"@":b+="0123456789";
break;
case"D":case"M":return null;
case"'":if(e("'")){b+="'"
}else{c=true
}break;
default:b+=a.charAt(f)
}}}return b
},_get:function(a,b){return a.settings[b]!==C?a.settings[b]:this._defaults[b]
},_setDateFromField:function(a,b){if(a.input.val()!=a.lastVal){var c=this._get(a,"dateFormat"),e=a.lastVal=a.input?a.input.val():null,f,h;
f=h=this._getDefaultDate(a);
var i=this._getFormatConfig(a);
try{f=this.parseDate(c,e,i)||h
}catch(g){this.log(g);
e=b?"":e
}a.selectedDay=f.getDate();
a.drawMonth=a.selectedMonth=f.getMonth();
a.drawYear=a.selectedYear=f.getFullYear();
a.currentDay=e?f.getDate():0;
a.currentMonth=e?f.getMonth():0;
a.currentYear=e?f.getFullYear():0;
this._adjustInstDate(a)
}},_getDefaultDate:function(a){return this._restrictMinMax(a,this._determineDate(a,this._get(a,"defaultDate"),new Date))
},_determineDate:function(a,b,c){var e=function(h){var i=new Date;
i.setDate(i.getDate()+h);
return i
},f=function(h){try{return d.datepicker.parseDate(d.datepicker._get(a,"dateFormat"),h,d.datepicker._getFormatConfig(a))
}catch(i){}var g=(h.toLowerCase().match(/^c/)?d.datepicker._getDate(a):null)||new Date,j=g.getFullYear(),l=g.getMonth();
g=g.getDate();
for(var u=/([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,k=u.exec(h);
k;
){switch(k[2]||"d"){case"d":case"D":g+=parseInt(k[1],10);
break;
case"w":case"W":g+=parseInt(k[1],10)*7;
break;
case"m":case"M":l+=parseInt(k[1],10);
g=Math.min(g,d.datepicker._getDaysInMonth(j,l));
break;
case"y":case"Y":j+=parseInt(k[1],10);
g=Math.min(g,d.datepicker._getDaysInMonth(j,l));
break
}k=u.exec(h)
}return new Date(j,l,g)
};
if(b=(b=b==null||b===""?c:typeof b=="string"?f(b):typeof b=="number"?isNaN(b)?c:e(b):new Date(b.getTime()))&&b.toString()=="Invalid Date"?c:b){b.setHours(0);
b.setMinutes(0);
b.setSeconds(0);
b.setMilliseconds(0)
}return this._daylightSavingAdjust(b)
},_daylightSavingAdjust:function(a){if(!a){return null
}a.setHours(a.getHours()>12?a.getHours()+2:0);
return a
},_setDate:function(a,b,c){var e=!b,f=a.selectedMonth,h=a.selectedYear;
b=this._restrictMinMax(a,this._determineDate(a,b,new Date));
a.selectedDay=a.currentDay=b.getDate();
a.drawMonth=a.selectedMonth=a.currentMonth=b.getMonth();
a.drawYear=a.selectedYear=a.currentYear=b.getFullYear();
if((f!=a.selectedMonth||h!=a.selectedYear)&&!c){this._notifyChange(a)
}this._adjustInstDate(a);
if(a.input){a.input.val(e?"":this._formatDate(a))
}},_getDate:function(a){return !a.currentYear||a.input&&a.input.val()==""?null:this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay))
},_generateHTML:function(a){var b=new Date;
b=this._daylightSavingAdjust(new Date(b.getFullYear(),b.getMonth(),b.getDate()));
var c=this._get(a,"isRTL"),e=this._get(a,"showButtonPanel"),f=this._get(a,"hideIfNoPrevNext"),h=this._get(a,"navigationAsDateFormat"),i=this._getNumberOfMonths(a),g=this._get(a,"showCurrentAtPos"),j=this._get(a,"stepMonths"),l=i[0]!=1||i[1]!=1,u=this._daylightSavingAdjust(!a.currentDay?new Date(9999,9,9):new Date(a.currentYear,a.currentMonth,a.currentDay)),k=this._getMinMaxDate(a,"min"),o=this._getMinMaxDate(a,"max");
g=a.drawMonth-g;
var m=a.drawYear;
if(g<0){g+=12;
m--
}if(o){var n=this._daylightSavingAdjust(new Date(o.getFullYear(),o.getMonth()-i[0]*i[1]+1,o.getDate()));
for(n=k&&n<k?k:n;
this._daylightSavingAdjust(new Date(m,g,1))>n;
){g--;
if(g<0){g=11;
m--
}}}a.drawMonth=g;
a.drawYear=m;
n=this._get(a,"prevText");
n=!h?n:this.formatDate(n,this._daylightSavingAdjust(new Date(m,g-j,1)),this._getFormatConfig(a));
n=this._canAdjustMonth(a,-1,m,g)?'<a class="ui-datepicker-prev ui-corner-all" onclick="DP_jQuery_'+B+".datepicker._adjustDate('#"+a.id+"', -"+j+", 'M');\" title=\""+n+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"e":"w")+'">'+n+"</span></a>":f?"":'<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="'+n+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"e":"w")+'">'+n+"</span></a>";
var s=this._get(a,"nextText");
s=!h?s:this.formatDate(s,this._daylightSavingAdjust(new Date(m,g+j,1)),this._getFormatConfig(a));
f=this._canAdjustMonth(a,+1,m,g)?'<a class="ui-datepicker-next ui-corner-all" onclick="DP_jQuery_'+B+".datepicker._adjustDate('#"+a.id+"', +"+j+", 'M');\" title=\""+s+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"w":"e")+'">'+s+"</span></a>":f?"":'<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="'+s+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"w":"e")+'">'+s+"</span></a>";
j=this._get(a,"currentText");
s=this._get(a,"gotoCurrent")&&a.currentDay?u:b;
j=!h?j:this.formatDate(j,s,this._getFormatConfig(a));
h=!a.inline?'<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" onclick="DP_jQuery_'+B+'.datepicker._hideDatepicker();">'+this._get(a,"closeText")+"</button>":"";
e=e?'<div class="ui-datepicker-buttonpane ui-widget-content">'+(c?h:"")+(this._isInRange(a,s)?'<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" onclick="DP_jQuery_'+B+".datepicker._gotoToday('#"+a.id+"');\">"+j+"</button>":"")+(c?"":h)+"</div>":"";
h=parseInt(this._get(a,"firstDay"),10);
h=isNaN(h)?0:h;
j=this._get(a,"showWeek");
s=this._get(a,"dayNames");
this._get(a,"dayNamesShort");
var q=this._get(a,"dayNamesMin"),A=this._get(a,"monthNames"),v=this._get(a,"monthNamesShort"),p=this._get(a,"beforeShowDay"),D=this._get(a,"showOtherMonths"),K=this._get(a,"selectOtherMonths");
this._get(a,"calculateWeek");
for(var E=this._getDefaultDate(a),w="",x=0;
x<i[0];
x++){var O="";
this.maxRows=4;
for(var G=0;
G<i[1];
G++){var P=this._daylightSavingAdjust(new Date(m,g,a.selectedDay)),t=" ui-corner-all",y="";
if(l){y+='<div class="ui-datepicker-group';
if(i[1]>1){switch(G){case 0:y+=" ui-datepicker-group-first";
t=" ui-corner-"+(c?"right":"left");
break;
case i[1]-1:y+=" ui-datepicker-group-last";
t=" ui-corner-"+(c?"left":"right");
break;
default:y+=" ui-datepicker-group-middle";
t="";
break
}}y+='">'
}y+='<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix'+t+'">'+(/all|left/.test(t)&&x==0?c?f:n:"")+(/all|right/.test(t)&&x==0?c?n:f:"")+this._generateMonthYearHeader(a,g,m,k,o,x>0||G>0,A,v)+'</div><table class="ui-datepicker-calendar"><thead><tr>';
var z=j?'<th class="ui-datepicker-week-col">'+this._get(a,"weekHeader")+"</th>":"";
for(t=0;
t<7;
t++){var r=(t+h)%7;
z+="<th"+((t+h+6)%7>=5?' class="ui-datepicker-week-end"':"")+'><span title="'+s[r]+'">'+q[r]+"</span></th>"
}y+=z+"</tr></thead><tbody>";
z=this._getDaysInMonth(m,g);
if(m==a.selectedYear&&g==a.selectedMonth){a.selectedDay=Math.min(a.selectedDay,z)
}t=(this._getFirstDayOfMonth(m,g)-h+7)%7;
z=Math.ceil((t+z)/7);
this.maxRows=z=l?this.maxRows>z?this.maxRows:z:z;
r=this._daylightSavingAdjust(new Date(m,g,1-t));
for(var Q=0;
Q<z;
Q++){y+="<tr>";
var R=!j?"":'<td class="ui-datepicker-week-col">'+this._get(a,"calculateWeek")(r)+"</td>";
for(t=0;
t<7;
t++){var I=p?p.apply(a.input?a.input[0]:null,[r]):[true,""],F=r.getMonth()!=g,L=F&&!K||!I[0]||k&&r<k||o&&r>o;
R+='<td class="'+((t+h+6)%7>=5?" ui-datepicker-week-end":"")+(F?" ui-datepicker-other-month":"")+(r.getTime()==P.getTime()&&g==a.selectedMonth&&a._keyEvent||E.getTime()==r.getTime()&&E.getTime()==P.getTime()?" "+this._dayOverClass:"")+(L?" "+this._unselectableClass+" ui-state-disabled":"")+(F&&!D?"":" "+I[1]+(r.getTime()==u.getTime()?" "+this._currentClass:"")+(r.getTime()==b.getTime()?" ui-datepicker-today":""))+'"'+((!F||D)&&I[2]?' title="'+I[2]+'"':"")+(L?"":' onclick="DP_jQuery_'+B+".datepicker._selectDay('#"+a.id+"',"+r.getMonth()+","+r.getFullYear()+', this);return false;"')+">"+(F&&!D?"&#xa0;":L?'<span class="ui-state-default">'+r.getDate()+"</span>":'<a class="ui-state-default'+(r.getTime()==b.getTime()?" ui-state-highlight":"")+(r.getTime()==u.getTime()?" ui-state-active":"")+(F?" ui-priority-secondary":"")+'" href="#">'+r.getDate()+"</a>")+"</td>";
r.setDate(r.getDate()+1);
r=this._daylightSavingAdjust(r)
}y+=R+"</tr>"
}g++;
if(g>11){g=0;
m++
}y+="</tbody></table>"+(l?"</div>"+(i[0]>0&&G==i[1]-1?'<div class="ui-datepicker-row-break"></div>':""):"");
O+=y
}w+=O
}w+=e+(d.browser.msie&&parseInt(d.browser.version,10)<7&&!a.inline?'<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>':"");
a._keyEvent=false;
return w
},_generateMonthYearHeader:function(a,b,c,e,f,h,i,g){var j=this._get(a,"changeMonth"),l=this._get(a,"changeYear"),u=this._get(a,"showMonthAfterYear"),k='<div class="ui-datepicker-title">',o="";
if(h||!j){o+='<span class="ui-datepicker-month">'+i[b]+"</span>"
}else{i=e&&e.getFullYear()==c;
var m=f&&f.getFullYear()==c;
o+='<select class="ui-datepicker-month" onchange="DP_jQuery_'+B+".datepicker._selectMonthYear('#"+a.id+"', this, 'M');\" >";
for(var n=0;
n<12;
n++){if((!i||n>=e.getMonth())&&(!m||n<=f.getMonth())){o+='<option value="'+n+'"'+(n==b?' selected="selected"':"")+">"+g[n]+"</option>"
}}o+="</select>"
}u||(k+=o+(h||!(j&&l)?"&#xa0;":""));
if(!a.yearshtml){a.yearshtml="";
if(h||!l){k+='<span class="ui-datepicker-year">'+c+"</span>"
}else{g=this._get(a,"yearRange").split(":");
var s=(new Date).getFullYear();
i=function(q){q=q.match(/c[+-].*/)?c+parseInt(q.substring(1),10):q.match(/[+-].*/)?s+parseInt(q,10):parseInt(q,10);
return isNaN(q)?s:q
};
b=i(g[0]);
g=Math.max(b,i(g[1]||""));
b=e?Math.max(b,e.getFullYear()):b;
g=f?Math.min(g,f.getFullYear()):g;
for(a.yearshtml+='<select class="ui-datepicker-year" onchange="DP_jQuery_'+B+".datepicker._selectMonthYear('#"+a.id+"', this, 'Y');\" >";
b<=g;
b++){a.yearshtml+='<option value="'+b+'"'+(b==c?' selected="selected"':"")+">"+b+"</option>"
}a.yearshtml+="</select>";
k+=a.yearshtml;
a.yearshtml=null
}}k+=this._get(a,"yearSuffix");
if(u){k+=(h||!(j&&l)?"&#xa0;":"")+o
}k+="</div>";
return k
},_adjustInstDate:function(a,b,c){var e=a.drawYear+(c=="Y"?b:0),f=a.drawMonth+(c=="M"?b:0);
b=Math.min(a.selectedDay,this._getDaysInMonth(e,f))+(c=="D"?b:0);
e=this._restrictMinMax(a,this._daylightSavingAdjust(new Date(e,f,b)));
a.selectedDay=e.getDate();
a.drawMonth=a.selectedMonth=e.getMonth();
a.drawYear=a.selectedYear=e.getFullYear();
if(c=="M"||c=="Y"){this._notifyChange(a)
}},_restrictMinMax:function(a,b){var c=this._getMinMaxDate(a,"min");
a=this._getMinMaxDate(a,"max");
b=c&&b<c?c:b;
return b=a&&b>a?a:b
},_notifyChange:function(a){var b=this._get(a,"onChangeMonthYear");
if(b){b.apply(a.input?a.input[0]:null,[a.selectedYear,a.selectedMonth+1,a])
}},_getNumberOfMonths:function(a){a=this._get(a,"numberOfMonths");
return a==null?[1,1]:typeof a=="number"?[1,a]:a
},_getMinMaxDate:function(a,b){return this._determineDate(a,this._get(a,b+"Date"),null)
},_getDaysInMonth:function(a,b){return 32-this._daylightSavingAdjust(new Date(a,b,32)).getDate()
},_getFirstDayOfMonth:function(a,b){return(new Date(a,b,1)).getDay()
},_canAdjustMonth:function(a,b,c,e){var f=this._getNumberOfMonths(a);
c=this._daylightSavingAdjust(new Date(c,e+(b<0?b:f[0]*f[1]),1));
b<0&&c.setDate(this._getDaysInMonth(c.getFullYear(),c.getMonth()));
return this._isInRange(a,c)
},_isInRange:function(a,b){var c=this._getMinMaxDate(a,"min");
a=this._getMinMaxDate(a,"max");
return(!c||b.getTime()>=c.getTime())&&(!a||b.getTime()<=a.getTime())
},_getFormatConfig:function(a){var b=this._get(a,"shortYearCutoff");
b=typeof b!="string"?b:(new Date).getFullYear()%100+parseInt(b,10);
return{shortYearCutoff:b,dayNamesShort:this._get(a,"dayNamesShort"),dayNames:this._get(a,"dayNames"),monthNamesShort:this._get(a,"monthNamesShort"),monthNames:this._get(a,"monthNames")}
},_formatDate:function(a,b,c,e){if(!b){a.currentDay=a.selectedDay;
a.currentMonth=a.selectedMonth;
a.currentYear=a.selectedYear
}b=b?typeof b=="object"?b:this._daylightSavingAdjust(new Date(e,c,b)):this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay));
return this.formatDate(this._get(a,"dateFormat"),b,this._getFormatConfig(a))
}});
d.fn.datepicker=function(a){if(!this.length){return this
}if(!d.datepicker.initialized){d(document).mousedown(d.datepicker._checkExternalClick).find("body").append(d.datepicker.dpDiv);
d.datepicker.initialized=true
}var b=Array.prototype.slice.call(arguments,1);
if(typeof a=="string"&&(a=="isDisabled"||a=="getDate"||a=="widget")){return d.datepicker["_"+a+"Datepicker"].apply(d.datepicker,[this[0]].concat(b))
}if(a=="option"&&arguments.length==2&&typeof arguments[1]=="string"){return d.datepicker["_"+a+"Datepicker"].apply(d.datepicker,[this[0]].concat(b))
}return this.each(function(){typeof a=="string"?d.datepicker["_"+a+"Datepicker"].apply(d.datepicker,[this].concat(b)):d.datepicker._attachDatepicker(this,a)
})
};
d.datepicker=new M;
d.datepicker.initialized=false;
d.datepicker.uuid=(new Date).getTime();
d.datepicker.version="1.8.16";
window["DP_jQuery_"+B]=d
})(jQuery);
(function(a,c){a.widget("ui.progressbar",{options:{value:0,max:100},min:0,_create:function(){this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min,"aria-valuemax":this.options.max,"aria-valuenow":this._value()});
this.valueDiv=a("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element);
this.oldValue=this._value();
this._refreshValue()
},destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
this.valueDiv.remove();
a.Widget.prototype.destroy.apply(this,arguments)
},value:function(b){if(b===c){return this._value()
}this._setOption("value",b);
return this
},_setOption:function(b,d){if(b==="value"){this.options.value=d;
this._refreshValue();
this._value()===this.options.max&&this._trigger("complete")
}a.Widget.prototype._setOption.apply(this,arguments)
},_value:function(){var b=this.options.value;
if(typeof b!=="number"){b=0
}return Math.min(this.options.max,Math.max(this.min,b))
},_percentage:function(){return 100*this._value()/this.options.max
},_refreshValue:function(){var b=this.value(),d=this._percentage();
if(this.oldValue!==b){this.oldValue=b;
this._trigger("change")
}this.valueDiv.toggle(b>this.min).toggleClass("ui-corner-right",b===this.options.max).width(d.toFixed(0)+"%");
this.element.attr("aria-valuenow",b)
}});
a.extend(a.ui.progressbar,{version:"1.8.16"})
})(jQuery);
jQuery.effects||function(v,r){function e(j){var f;
if(j&&j.constructor==Array&&j.length==3){return j
}if(f=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(j)){return[parseInt(f[1],10),parseInt(f[2],10),parseInt(f[3],10)]
}if(f=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(j)){return[parseFloat(f[1])*2.55,parseFloat(f[2])*2.55,parseFloat(f[3])*2.55]
}if(f=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(j)){return[parseInt(f[1],16),parseInt(f[2],16),parseInt(f[3],16)]
}if(f=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(j)){return[parseInt(f[1]+f[1],16),parseInt(f[2]+f[2],16),parseInt(f[3]+f[3],16)]
}if(/rgba\(0, 0, 0, 0\)/.exec(j)){return d.transparent
}return d[v.trim(j).toLowerCase()]
}function y(k,j){var f;
do{f=v.curCSS(k,j);
if(f!=""&&f!="transparent"||v.nodeName(k,"body")){break
}j="backgroundColor"
}while(k=k.parentNode);
return e(f)
}function c(){var m=document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle,j={},f,l;
if(m&&m.length&&m[0]&&m[m[0]]){for(var k=m.length;
k--;
){f=m[k];
if(typeof m[f]=="string"){l=f.replace(/\-(\w)/g,function(o,n){return n.toUpperCase()
});
j[l]=m[f]
}}}else{for(f in m){if(typeof m[f]==="string"){j[f]=m[f]
}}}return j
}function b(k){var j,f;
for(j in k){f=k[j];
if(f==null||v.isFunction(f)||j in x||/scrollbar/.test(j)||!/color/i.test(j)&&isNaN(parseFloat(f))){delete k[j]
}}return k
}function w(l,j){var f={_:0},k;
for(k in j){if(l[k]!=j[k]){f[k]=j[k]
}}return f
}function h(l,j,f,k){if(typeof l=="object"){k=j;
f=null;
j=l;
l=j.effect
}if(v.isFunction(j)){k=j;
f=null;
j={}
}if(typeof j=="number"||v.fx.speeds[j]){k=f;
f=j;
j={}
}if(v.isFunction(f)){k=f;
f=null
}j=j||{};
f=f||j.duration;
f=v.fx.off?0:typeof f=="number"?f:f in v.fx.speeds?v.fx.speeds[f]:v.fx.speeds._default;
k=k||j.complete;
return[l,j,f,k]
}function g(f){if(!f||typeof f==="number"||v.fx.speeds[f]){return true
}if(typeof f==="string"&&!v.effects[f]){return true
}return false
}v.effects={};
v.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor","borderTopColor","borderColor","color","outlineColor"],function(j,f){v.fx.step[f]=function(k){if(!k.colorInit){k.start=y(k.elem,f);
k.end=e(k.end);
k.colorInit=true
}k.elem.style[f]="rgb("+Math.max(Math.min(parseInt(k.pos*(k.end[0]-k.start[0])+k.start[0],10),255),0)+","+Math.max(Math.min(parseInt(k.pos*(k.end[1]-k.start[1])+k.start[1],10),255),0)+","+Math.max(Math.min(parseInt(k.pos*(k.end[2]-k.start[2])+k.start[2],10),255),0)+")"
}
});
var d={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]},a=["add","remove","toggle"],x={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};
v.effects.animateClass=function(l,j,f,k){if(v.isFunction(f)){k=f;
f=null
}return this.queue(function(){var q=v(this),p=q.attr("style")||" ",n=b(c.call(this)),o,m=q.attr("class");
v.each(a,function(s,u){l[u]&&q[u+"Class"](l[u])
});
o=b(c.call(this));
q.attr("class",m);
q.animate(w(n,o),{queue:false,duration:j,easing:f,complete:function(){v.each(a,function(s,u){l[u]&&q[u+"Class"](l[u])
});
if(typeof q.attr("style")=="object"){q.attr("style").cssText="";
q.attr("style").cssText=p
}else{q.attr("style",p)
}k&&k.apply(this,arguments);
v.dequeue(this)
}})
})
};
v.fn.extend({_addClass:v.fn.addClass,addClass:function(l,j,f,k){return j?v.effects.animateClass.apply(this,[{add:l},j,f,k]):this._addClass(l)
},_removeClass:v.fn.removeClass,removeClass:function(l,j,f,k){return j?v.effects.animateClass.apply(this,[{remove:l},j,f,k]):this._removeClass(l)
},_toggleClass:v.fn.toggleClass,toggleClass:function(m,j,f,l,k){return typeof j=="boolean"||j===r?f?v.effects.animateClass.apply(this,[j?{add:m}:{remove:m},f,l,k]):this._toggleClass(m,j):v.effects.animateClass.apply(this,[{toggle:m},j,f,l])
},switchClass:function(m,j,f,l,k){return v.effects.animateClass.apply(this,[{add:j,remove:m},f,l,k])
}});
v.extend(v.effects,{version:"1.8.16",save:function(k,j){for(var f=0;
f<j.length;
f++){j[f]!==null&&k.data("ec.storage."+j[f],k[0].style[j[f]])
}},restore:function(k,j){for(var f=0;
f<j.length;
f++){j[f]!==null&&k.css(j[f],k.data("ec.storage."+j[f]))
}},setMode:function(j,f){if(f=="toggle"){f=j.is(":hidden")?"show":"hide"
}return f
},getBaseline:function(k,j){var f;
switch(k[0]){case"top":f=0;
break;
case"middle":f=0.5;
break;
case"bottom":f=1;
break;
default:f=k[0]/j.height
}switch(k[1]){case"left":k=0;
break;
case"center":k=0.5;
break;
case"right":k=1;
break;
default:k=k[1]/j.width
}return{x:k,y:f}
},createWrapper:function(l){if(l.parent().is(".ui-effects-wrapper")){return l.parent()
}var j={width:l.outerWidth(true),height:l.outerHeight(true),"float":l.css("float")},f=v("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),k=document.activeElement;
l.wrap(f);
if(l[0]===k||v.contains(l[0],k)){v(k).focus()
}f=l.parent();
if(l.css("position")=="static"){f.css({position:"relative"});
l.css({position:"relative"})
}else{v.extend(j,{position:l.css("position"),zIndex:l.css("z-index")});
v.each(["top","left","bottom","right"],function(n,m){j[m]=l.css(m);
if(isNaN(parseInt(j[m],10))){j[m]="auto"
}});
l.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})
}return f.css(j).show()
},removeWrapper:function(k){var j,f=document.activeElement;
if(k.parent().is(".ui-effects-wrapper")){j=k.parent().replaceWith(k);
if(k[0]===f||v.contains(k[0],f)){v(f).focus()
}return j
}return k
},setTransition:function(l,j,f,k){k=k||{};
v.each(j,function(n,m){unit=l.cssUnit(m);
if(unit[0]>0){k[m]=unit[0]*f+unit[1]
}});
return k
}});
v.fn.extend({effect:function(l){var j=h.apply(this,arguments),f={options:j[1],duration:j[2],callback:j[3]};
j=f.options.mode;
var k=v.effects[l];
if(v.fx.off||!k){return j?this[j](f.duration,f.callback):this.each(function(){f.callback&&f.callback.call(this)
})
}return k.call(this,f)
},_show:v.fn.show,show:function(j){if(g(j)){return this._show.apply(this,arguments)
}else{var f=h.apply(this,arguments);
f[1].mode="show";
return this.effect.apply(this,f)
}},_hide:v.fn.hide,hide:function(j){if(g(j)){return this._hide.apply(this,arguments)
}else{var f=h.apply(this,arguments);
f[1].mode="hide";
return this.effect.apply(this,f)
}},__toggle:v.fn.toggle,toggle:function(j){if(g(j)||typeof j==="boolean"||v.isFunction(j)){return this.__toggle.apply(this,arguments)
}else{var f=h.apply(this,arguments);
f[1].mode="toggle";
return this.effect.apply(this,f)
}},cssUnit:function(k){var j=this.css(k),f=[];
v.each(["em","px","%","pt"],function(m,l){if(j.indexOf(l)>0){f=[parseFloat(j),l]
}});
return f
}});
v.easing.jswing=v.easing.swing;
v.extend(v.easing,{def:"easeOutQuad",swing:function(m,j,f,l,k){return v.easing[v.easing.def](m,j,f,l,k)
},easeInQuad:function(m,j,f,l,k){return l*(j/=k)*j+f
},easeOutQuad:function(m,j,f,l,k){return -l*(j/=k)*(j-2)+f
},easeInOutQuad:function(m,j,f,l,k){if((j/=k/2)<1){return l/2*j*j+f
}return -l/2*(--j*(j-2)-1)+f
},easeInCubic:function(m,j,f,l,k){return l*(j/=k)*j*j+f
},easeOutCubic:function(m,j,f,l,k){return l*((j=j/k-1)*j*j+1)+f
},easeInOutCubic:function(m,j,f,l,k){if((j/=k/2)<1){return l/2*j*j*j+f
}return l/2*((j-=2)*j*j+2)+f
},easeInQuart:function(m,j,f,l,k){return l*(j/=k)*j*j*j+f
},easeOutQuart:function(m,j,f,l,k){return -l*((j=j/k-1)*j*j*j-1)+f
},easeInOutQuart:function(m,j,f,l,k){if((j/=k/2)<1){return l/2*j*j*j*j+f
}return -l/2*((j-=2)*j*j*j-2)+f
},easeInQuint:function(m,j,f,l,k){return l*(j/=k)*j*j*j*j+f
},easeOutQuint:function(m,j,f,l,k){return l*((j=j/k-1)*j*j*j*j+1)+f
},easeInOutQuint:function(m,j,f,l,k){if((j/=k/2)<1){return l/2*j*j*j*j*j+f
}return l/2*((j-=2)*j*j*j*j+2)+f
},easeInSine:function(m,j,f,l,k){return -l*Math.cos(j/k*(Math.PI/2))+l+f
},easeOutSine:function(m,j,f,l,k){return l*Math.sin(j/k*(Math.PI/2))+f
},easeInOutSine:function(m,j,f,l,k){return -l/2*(Math.cos(Math.PI*j/k)-1)+f
},easeInExpo:function(m,j,f,l,k){return j==0?f:l*Math.pow(2,10*(j/k-1))+f
},easeOutExpo:function(m,j,f,l,k){return j==k?f+l:l*(-Math.pow(2,-10*j/k)+1)+f
},easeInOutExpo:function(m,j,f,l,k){if(j==0){return f
}if(j==k){return f+l
}if((j/=k/2)<1){return l/2*Math.pow(2,10*(j-1))+f
}return l/2*(-Math.pow(2,-10*--j)+2)+f
},easeInCirc:function(m,j,f,l,k){return -l*(Math.sqrt(1-(j/=k)*j)-1)+f
},easeOutCirc:function(m,j,f,l,k){return l*Math.sqrt(1-(j=j/k-1)*j)+f
},easeInOutCirc:function(m,j,f,l,k){if((j/=k/2)<1){return -l/2*(Math.sqrt(1-j*j)-1)+f
}return l/2*(Math.sqrt(1-(j-=2)*j)+1)+f
},easeInElastic:function(o,j,f,n,m){o=1.70158;
var l=0,k=n;
if(j==0){return f
}if((j/=m)==1){return f+n
}l||(l=m*0.3);
if(k<Math.abs(n)){k=n;
o=l/4
}else{o=l/(2*Math.PI)*Math.asin(n/k)
}return -(k*Math.pow(2,10*(j-=1))*Math.sin((j*m-o)*2*Math.PI/l))+f
},easeOutElastic:function(o,j,f,n,m){o=1.70158;
var l=0,k=n;
if(j==0){return f
}if((j/=m)==1){return f+n
}l||(l=m*0.3);
if(k<Math.abs(n)){k=n;
o=l/4
}else{o=l/(2*Math.PI)*Math.asin(n/k)
}return k*Math.pow(2,-10*j)*Math.sin((j*m-o)*2*Math.PI/l)+n+f
},easeInOutElastic:function(o,j,f,n,m){o=1.70158;
var l=0,k=n;
if(j==0){return f
}if((j/=m/2)==2){return f+n
}l||(l=m*0.3*1.5);
if(k<Math.abs(n)){k=n;
o=l/4
}else{o=l/(2*Math.PI)*Math.asin(n/k)
}if(j<1){return -0.5*k*Math.pow(2,10*(j-=1))*Math.sin((j*m-o)*2*Math.PI/l)+f
}return k*Math.pow(2,-10*(j-=1))*Math.sin((j*m-o)*2*Math.PI/l)*0.5+n+f
},easeInBack:function(n,j,f,m,l,k){if(k==r){k=1.70158
}return m*(j/=l)*j*((k+1)*j-k)+f
},easeOutBack:function(n,j,f,m,l,k){if(k==r){k=1.70158
}return m*((j=j/l-1)*j*((k+1)*j+k)+1)+f
},easeInOutBack:function(n,j,f,m,l,k){if(k==r){k=1.70158
}if((j/=l/2)<1){return m/2*j*j*(((k*=1.525)+1)*j-k)+f
}return m/2*((j-=2)*j*(((k*=1.525)+1)*j+k)+2)+f
},easeInBounce:function(m,j,f,l,k){return l-v.easing.easeOutBounce(m,k-j,0,l,k)+f
},easeOutBounce:function(m,j,f,l,k){return(j/=k)<1/2.75?l*7.5625*j*j+f:j<2/2.75?l*(7.5625*(j-=1.5/2.75)*j+0.75)+f:j<2.5/2.75?l*(7.5625*(j-=2.25/2.75)*j+0.9375)+f:l*(7.5625*(j-=2.625/2.75)*j+0.984375)+f
},easeInOutBounce:function(m,j,f,l,k){if(j<k/2){return v.easing.easeInBounce(m,j*2,0,l,k)*0.5+f
}return v.easing.easeOutBounce(m,j*2-k,0,l,k)*0.5+l*0.5+f
}})
}(jQuery);
(function(a){a.effects.blind=function(b){return this.queue(function(){var c=a(this),l=["position","top","bottom","left","right"],m=a.effects.setMode(c,b.options.mode||"hide"),o=b.options.direction||"vertical";
a.effects.save(c,l);
c.show();
var n=a.effects.createWrapper(c).css({overflow:"hidden"}),k=o=="vertical"?"height":"width";
o=o=="vertical"?n.height():n.width();
m=="show"&&n.css(k,0);
var j={};
j[k]=m=="show"?o:0;
n.animate(j,b.duration,b.options.easing,function(){m=="hide"&&c.hide();
a.effects.restore(c,l);
a.effects.removeWrapper(c);
b.callback&&b.callback.apply(c[0],arguments);
c.dequeue()
})
})
}
})(jQuery);
(function(a){a.effects.bounce=function(c){return this.queue(function(){var w=a(this),e=["position","top","bottom","left","right"],q=a.effects.setMode(w,c.options.mode||"effect"),u=c.options.direction||"up",v=c.options.distance||20,b=c.options.times||5,p=c.duration||250;
/show|hide/.test(q)&&e.push("opacity");
a.effects.save(w,e);
w.show();
a.effects.createWrapper(w);
var s=u=="up"||u=="down"?"top":"left";
u=u=="up"||u=="left"?"pos":"neg";
v=c.options.distance||(s=="top"?w.outerHeight({margin:true})/3:w.outerWidth({margin:true})/3);
if(q=="show"){w.css("opacity",0).css(s,u=="pos"?-v:v)
}if(q=="hide"){v/=b*2
}q!="hide"&&b--;
if(q=="show"){var r={opacity:1};
r[s]=(u=="pos"?"+=":"-=")+v;
w.animate(r,p/2,c.options.easing);
v/=2;
b--
}for(r=0;
r<b;
r++){var o={},n={};
o[s]=(u=="pos"?"-=":"+=")+v;
n[s]=(u=="pos"?"+=":"-=")+v;
w.animate(o,p/2,c.options.easing).animate(n,p/2,c.options.easing);
v=q=="hide"?v*2:v/2
}if(q=="hide"){r={opacity:0};
r[s]=(u=="pos"?"-=":"+=")+v;
w.animate(r,p/2,c.options.easing,function(){w.hide();
a.effects.restore(w,e);
a.effects.removeWrapper(w);
c.callback&&c.callback.apply(this,arguments)
})
}else{o={};
n={};
o[s]=(u=="pos"?"-=":"+=")+v;
n[s]=(u=="pos"?"+=":"-=")+v;
w.animate(o,p/2,c.options.easing).animate(n,p/2,c.options.easing,function(){a.effects.restore(w,e);
a.effects.removeWrapper(w);
c.callback&&c.callback.apply(this,arguments)
})
}w.queue("fx",function(){w.dequeue()
});
w.dequeue()
})
}
})(jQuery);
(function(a){a.effects.clip=function(b){return this.queue(function(){var e=a(this),j=["position","top","bottom","left","right","height","width"],m=a.effects.setMode(e,b.options.mode||"hide"),o=b.options.direction||"vertical";
a.effects.save(e,j);
e.show();
var n=a.effects.createWrapper(e).css({overflow:"hidden"});
n=e[0].tagName=="IMG"?n:e;
var l={size:o=="vertical"?"height":"width",position:o=="vertical"?"top":"left"};
o=o=="vertical"?n.height():n.width();
if(m=="show"){n.css(l.size,0);
n.css(l.position,o/2)
}var k={};
k[l.size]=m=="show"?o:0;
k[l.position]=m=="show"?0:o/2;
n.animate(k,{queue:false,duration:b.duration,easing:b.options.easing,complete:function(){m=="hide"&&e.hide();
a.effects.restore(e,j);
a.effects.removeWrapper(e);
b.callback&&b.callback.apply(e[0],arguments);
e.dequeue()
}})
})
}
})(jQuery);
(function(a){a.effects.drop=function(b){return this.queue(function(){var d=a(this),k=["position","top","bottom","left","right","opacity"],n=a.effects.setMode(d,b.options.mode||"hide"),c=b.options.direction||"left";
a.effects.save(d,k);
d.show();
a.effects.createWrapper(d);
var m=c=="up"||c=="down"?"top":"left";
c=c=="up"||c=="left"?"pos":"neg";
var l=b.options.distance||(m=="top"?d.outerHeight({margin:true})/2:d.outerWidth({margin:true})/2);
if(n=="show"){d.css("opacity",0).css(m,c=="pos"?-l:l)
}var j={opacity:n=="show"?1:0};
j[m]=(n=="show"?c=="pos"?"+=":"-=":c=="pos"?"-=":"+=")+l;
d.animate(j,{queue:false,duration:b.duration,easing:b.options.easing,complete:function(){n=="hide"&&d.hide();
a.effects.restore(d,k);
a.effects.removeWrapper(d);
b.callback&&b.callback.apply(this,arguments);
d.dequeue()
}})
})
}
})(jQuery);
(function(a){a.effects.explode=function(b){return this.queue(function(){var q=b.options.pieces?Math.round(Math.sqrt(b.options.pieces)):3,p=b.options.pieces?Math.round(Math.sqrt(b.options.pieces)):3;
b.options.mode=b.options.mode=="toggle"?a(this).is(":visible")?"hide":"show":b.options.mode;
var j=a(this).show().css("visibility","hidden"),m=j.offset();
m.top-=parseInt(j.css("marginTop"),10)||0;
m.left-=parseInt(j.css("marginLeft"),10)||0;
for(var l=j.outerWidth(true),k=j.outerHeight(true),o=0;
o<q;
o++){for(var n=0;
n<p;
n++){j.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-n*(l/p),top:-o*(k/q)}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:l/p,height:k/q,left:m.left+n*(l/p)+(b.options.mode=="show"?(n-Math.floor(p/2))*(l/p):0),top:m.top+o*(k/q)+(b.options.mode=="show"?(o-Math.floor(q/2))*(k/q):0),opacity:b.options.mode=="show"?0:1}).animate({left:m.left+n*(l/p)+(b.options.mode=="show"?0:(n-Math.floor(p/2))*(l/p)),top:m.top+o*(k/q)+(b.options.mode=="show"?0:(o-Math.floor(q/2))*(k/q)),opacity:b.options.mode=="show"?1:0},b.duration||500)
}}setTimeout(function(){b.options.mode=="show"?j.css({visibility:"visible"}):j.css({visibility:"visible"}).hide();
b.callback&&b.callback.apply(j[0]);
j.dequeue();
a("div.ui-effects-explode").remove()
},b.duration||500)
})
}
})(jQuery);
(function(a){a.effects.fade=function(b){return this.queue(function(){var f=a(this),e=a.effects.setMode(f,b.options.mode||"hide");
f.animate({opacity:e},{queue:false,duration:b.duration,easing:b.options.easing,complete:function(){b.callback&&b.callback.apply(this,arguments);
f.dequeue()
}})
})
}
})(jQuery);
(function(a){a.effects.fold=function(b){return this.queue(function(){var v=a(this),n=["position","top","bottom","left","right"],u=a.effects.setMode(v,b.options.mode||"hide"),q=b.options.size||15,p=!!b.options.horizFirst,m=b.duration?b.duration/2:a.fx.speeds._default/2;
a.effects.save(v,n);
v.show();
var s=a.effects.createWrapper(v).css({overflow:"hidden"}),r=u=="show"!=p,c=r?["width","height"]:["height","width"];
r=r?[s.width(),s.height()]:[s.height(),s.width()];
var o=/([0-9]+)%/.exec(q);
if(o){q=parseInt(o[1],10)/100*r[u=="hide"?0:1]
}if(u=="show"){s.css(p?{height:0,width:q}:{height:q,width:0})
}p={};
o={};
p[c[0]]=u=="show"?r[0]:q;
o[c[1]]=u=="show"?r[1]:0;
s.animate(p,m,b.options.easing).animate(o,m,b.options.easing,function(){u=="hide"&&v.hide();
a.effects.restore(v,n);
a.effects.removeWrapper(v);
b.callback&&b.callback.apply(v[0],arguments);
v.dequeue()
})
})
}
})(jQuery);
(function(a){a.effects.highlight=function(b){return this.queue(function(){var c=a(this),h=["backgroundImage","backgroundColor","opacity"],j=a.effects.setMode(c,b.options.mode||"show"),g={backgroundColor:c.css("backgroundColor")};
if(j=="hide"){g.opacity=0
}a.effects.save(c,h);
c.show().css({backgroundImage:"none",backgroundColor:b.options.color||"#ffff99"}).animate(g,{queue:false,duration:b.duration,easing:b.options.easing,complete:function(){j=="hide"&&c.hide();
a.effects.restore(c,h);
j=="show"&&!a.support.opacity&&this.style.removeAttribute("filter");
b.callback&&b.callback.apply(this,arguments);
c.dequeue()
}})
})
}
})(jQuery);
(function(a){a.effects.pulsate=function(b){return this.queue(function(){var d=a(this),e=a.effects.setMode(d,b.options.mode||"show");
times=(b.options.times||5)*2-1;
duration=b.duration?b.duration/2:a.fx.speeds._default/2;
isVisible=d.is(":visible");
animateTo=0;
if(!isVisible){d.css("opacity",0).show();
animateTo=1
}if(e=="hide"&&isVisible||e=="show"&&!isVisible){times--
}for(e=0;
e<times;
e++){d.animate({opacity:animateTo},duration,b.options.easing);
animateTo=(animateTo+1)%2
}d.animate({opacity:animateTo},duration,b.options.easing,function(){animateTo==0&&d.hide();
b.callback&&b.callback.apply(this,arguments)
});
d.queue("fx",function(){d.dequeue()
}).dequeue()
})
}
})(jQuery);
(function(a){a.effects.puff=function(c){return this.queue(function(){var b=a(this),k=a.effects.setMode(b,c.options.mode||"hide"),j=parseInt(c.options.percent,10)||150,f=j/100,d={height:b.height(),width:b.width()};
a.extend(c.options,{fade:true,mode:k,percent:k=="hide"?j:100,from:k=="hide"?d:{height:d.height*f,width:d.width*f}});
b.effect("scale",c.options,c.duration,c.callback);
b.dequeue()
})
};
a.effects.scale=function(c){return this.queue(function(){var b=a(this),m=a.extend(true,{},c.options),k=a.effects.setMode(b,c.options.mode||"effect"),j=parseInt(c.options.percent,10)||(parseInt(c.options.percent,10)==0?0:k=="hide"?0:100),d=c.options.direction||"both",l=c.options.origin;
if(k!="effect"){m.origin=l||["middle","center"];
m.restore=true
}l={height:b.height(),width:b.width()};
b.from=c.options.from||(k=="show"?{height:0,width:0}:l);
j={y:d!="horizontal"?j/100:1,x:d!="vertical"?j/100:1};
b.to={height:l.height*j.y,width:l.width*j.x};
if(c.options.fade){if(k=="show"){b.from.opacity=0;
b.to.opacity=1
}if(k=="hide"){b.from.opacity=1;
b.to.opacity=0
}}m.from=b.from;
m.to=b.to;
m.mode=k;
b.effect("size",m,c.duration,c.callback);
b.dequeue()
})
};
a.effects.size=function(c){return this.queue(function(){var B=a(this),z=["position","top","bottom","left","right","width","height","overflow","opacity"],x=["position","top","bottom","left","right","overflow","opacity"],w=["width","height","overflow"],v=["fontSize"],y=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],s=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],b=a.effects.setMode(B,c.options.mode||"effect"),o=c.options.restore||false,q=c.options.scale||"both",r=c.options.origin,u={height:B.height(),width:B.width()};
B.from=c.options.from||u;
B.to=c.options.to||u;
if(r){r=a.effects.getBaseline(r,u);
B.from.top=(u.height-B.from.height)*r.y;
B.from.left=(u.width-B.from.width)*r.x;
B.to.top=(u.height-B.to.height)*r.y;
B.to.left=(u.width-B.to.width)*r.x
}var A={from:{y:B.from.height/u.height,x:B.from.width/u.width},to:{y:B.to.height/u.height,x:B.to.width/u.width}};
if(q=="box"||q=="both"){if(A.from.y!=A.to.y){z=z.concat(y);
B.from=a.effects.setTransition(B,y,A.from.y,B.from);
B.to=a.effects.setTransition(B,y,A.to.y,B.to)
}if(A.from.x!=A.to.x){z=z.concat(s);
B.from=a.effects.setTransition(B,s,A.from.x,B.from);
B.to=a.effects.setTransition(B,s,A.to.x,B.to)
}}if(q=="content"||q=="both"){if(A.from.y!=A.to.y){z=z.concat(v);
B.from=a.effects.setTransition(B,v,A.from.y,B.from);
B.to=a.effects.setTransition(B,v,A.to.y,B.to)
}}a.effects.save(B,o?z:x);
B.show();
a.effects.createWrapper(B);
B.css("overflow","hidden").css(B.from);
if(q=="content"||q=="both"){y=y.concat(["marginTop","marginBottom"]).concat(v);
s=s.concat(["marginLeft","marginRight"]);
w=z.concat(y).concat(s);
B.find("*[width]").each(function(){child=a(this);
o&&a.effects.save(child,w);
var d={height:child.height(),width:child.width()};
child.from={height:d.height*A.from.y,width:d.width*A.from.x};
child.to={height:d.height*A.to.y,width:d.width*A.to.x};
if(A.from.y!=A.to.y){child.from=a.effects.setTransition(child,y,A.from.y,child.from);
child.to=a.effects.setTransition(child,y,A.to.y,child.to)
}if(A.from.x!=A.to.x){child.from=a.effects.setTransition(child,s,A.from.x,child.from);
child.to=a.effects.setTransition(child,s,A.to.x,child.to)
}child.css(child.from);
child.animate(child.to,c.duration,c.options.easing,function(){o&&a.effects.restore(child,w)
})
})
}B.animate(B.to,{queue:false,duration:c.duration,easing:c.options.easing,complete:function(){B.to.opacity===0&&B.css("opacity",B.from.opacity);
b=="hide"&&B.hide();
a.effects.restore(B,o?z:x);
a.effects.removeWrapper(B);
c.callback&&c.callback.apply(this,arguments);
B.dequeue()
}})
})
}
})(jQuery);
(function(a){a.effects.shake=function(b){return this.queue(function(){var v=a(this),n=["position","top","bottom","left","right"];
a.effects.setMode(v,b.options.mode||"effect");
var u=b.options.direction||"left",s=b.options.distance||20,d=b.options.times||3,r=b.duration||b.options.duration||140;
a.effects.save(v,n);
v.show();
a.effects.createWrapper(v);
var q=u=="up"||u=="down"?"top":"left",p=u=="up"||u=="left"?"pos":"neg";
u={};
var o={},m={};
u[q]=(p=="pos"?"-=":"+=")+s;
o[q]=(p=="pos"?"+=":"-=")+s*2;
m[q]=(p=="pos"?"-=":"+=")+s*2;
v.animate(u,r,b.options.easing);
for(s=1;
s<d;
s++){v.animate(o,r,b.options.easing).animate(m,r,b.options.easing)
}v.animate(o,r,b.options.easing).animate(u,r/2,b.options.easing,function(){a.effects.restore(v,n);
a.effects.removeWrapper(v);
b.callback&&b.callback.apply(this,arguments)
});
v.queue("fx",function(){v.dequeue()
});
v.dequeue()
})
}
})(jQuery);
(function(a){a.effects.slide=function(b){return this.queue(function(){var d=a(this),k=["position","top","bottom","left","right"],m=a.effects.setMode(d,b.options.mode||"show"),c=b.options.direction||"left";
a.effects.save(d,k);
d.show();
a.effects.createWrapper(d).css({overflow:"hidden"});
var l=c=="up"||c=="down"?"top":"left";
c=c=="up"||c=="left"?"pos":"neg";
var n=b.options.distance||(l=="top"?d.outerHeight({margin:true}):d.outerWidth({margin:true}));
if(m=="show"){d.css(l,c=="pos"?isNaN(n)?"-"+n:-n:n)
}var j={};
j[l]=(m=="show"?c=="pos"?"+=":"-=":c=="pos"?"-=":"+=")+n;
d.animate(j,{queue:false,duration:b.duration,easing:b.options.easing,complete:function(){m=="hide"&&d.hide();
a.effects.restore(d,k);
a.effects.removeWrapper(d);
b.callback&&b.callback.apply(this,arguments);
d.dequeue()
}})
})
}
})(jQuery);
(function(a){a.effects.transfer=function(b){return this.queue(function(){var e=a(this),j=a(b.options.to),h=j.offset();
j={top:h.top,left:h.left,height:j.innerHeight(),width:j.innerWidth()};
h=e.offset();
var g=a('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(b.options.className).css({top:h.top,left:h.left,height:e.innerHeight(),width:e.innerWidth(),position:"absolute"}).animate(j,b.duration,b.options.easing,function(){g.remove();
b.callback&&b.callback.apply(e[0],arguments);
e.dequeue()
})
})
}
})(jQuery);
/*!
 * jQuery Tools v1.2.7 - The missing UI library for the Web
 * 
 * overlay/overlay.js
 * scrollable/scrollable.js
 * tabs/tabs.js
 * tooltip/tooltip.js
 * 
 * NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE.
 * 
 * http://flowplayer.org/tools/
 * 
 */
(function(f){f.tools=f.tools||{version:"v1.2.7"},f.tools.overlay={addEffect:function(j,c,k){h[j]=[c,k]
},conf:{close:null,closeOnClick:!0,closeOnEsc:!0,closeSpeed:"fast",effect:"default",fixed:!f.browser.msie||f.browser.version>6,left:"center",load:!1,mask:null,oneInstance:!0,speed:"normal",target:null,top:"10%"}};
var e=[],h={};
f.tools.overlay.addEffect("default",function(a,l){var k=this.getConf(),j=f(window);
k.fixed||(a.top+=j.scrollTop(),a.left+=j.scrollLeft()),a.position=k.fixed?"fixed":"absolute",this.getOverlay().css(a).fadeIn(k.speed,l)
},function(b){this.getOverlay().fadeOut(this.getConf().closeSpeed,b)
});
function g(w,v){var u=this,s=w.add(u),r=f(window),q,p,o,c=f.tools.expose&&(v.mask||v.expose),b=Math.random().toString().slice(10);
c&&(typeof c=="string"&&(c={color:c}),c.closeOnClick=c.closeOnEsc=!1);
var a=v.target||w.attr("rel");
p=a?f(a):null||w;
if(!p.length){throw"Could not find Overlay: "+a
}w&&w.index(p)==-1&&w.click(function(d){u.load(d);
return d.preventDefault()
}),f.extend(u,{load:function(x){if(u.isOpened()){return u
}var j=h[v.effect];
if(!j){throw'Overlay: cannot find effect : "'+v.effect+'"'
}v.oneInstance&&f.each(e,function(){this.close(x)
}),x=x||f.Event(),x.type="onBeforeLoad",s.trigger(x);
if(x.isDefaultPrevented()){return u
}o=!0,c&&f(p).expose(c);
var y=v.top,m=v.left,l=p.outerWidth({margin:!0}),k=p.outerHeight({margin:!0});
typeof y=="string"&&(y=y=="center"?Math.max((r.height()-k)/2,0):parseInt(y,10)/100*r.height()),m=="center"&&(m=Math.max((r.width()-l)/2,0)),j[0].call(u,{top:y,left:m},function(){o&&(x.type="onLoad",s.trigger(x))
}),c&&v.closeOnClick&&f.mask.getMask().one("click",u.close),v.closeOnClick&&f(document).on("click."+b,function(d){f(d.target).parents(p).length||u.close(d)
}),v.closeOnEsc&&f(document).on("keydown."+b,function(d){d.keyCode==27&&u.close(d)
});
return u
},close:function(d){if(!u.isOpened()){return u
}d=d||f.Event(),d.type="onBeforeClose",s.trigger(d);
if(!d.isDefaultPrevented()){o=!1,h[v.effect][1].call(u,function(){d.type="onClose",s.trigger(d)
}),f(document).off("click."+b+" keydown."+b),c&&f.mask.close();
return u
}},getOverlay:function(){return p
},getTrigger:function(){return w
},getClosers:function(){return q
},isOpened:function(){return o
},getConf:function(){return v
}}),f.each("onBeforeLoad,onStart,onLoad,onBeforeClose,onClose".split(","),function(d,j){f.isFunction(v[j])&&f(u).on(j,v[j]),u[j]=function(k){k&&f(u).on(j,k);
return u
}
}),q=p.find(v.close||".close"),!q.length&&!v.close&&(q=f('<a class="close"></a>'),p.prepend(q)),q.click(function(d){u.close(d)
}),v.load&&u.load()
}f.fn.overlay=function(b){var a=this.data("overlay");
if(a){return a
}f.isFunction(b)&&(b={onBeforeLoad:b}),b=f.extend(!0,{},f.tools.overlay.conf,b),this.each(function(){a=new g(f(this),b),e.push(a),f(this).data("overlay",a)
});
return b.api?a:this
}
})(jQuery);
(function(g){g.tools=g.tools||{version:"v1.2.7"},g.tools.scrollable={conf:{activeClass:"active",circular:!1,clonedClass:"cloned",disabledClass:"disabled",easing:"swing",initialIndex:0,item:"> *",items:".items",keyboard:!0,mousewheel:!1,next:".next",prev:".prev",size:1,speed:400,vertical:!1,touch:!0,wheelSpeed:0}};
function f(l,e){var n=parseInt(l.css(e),10);
if(n){return n
}var m=l[0].currentStyle;
return m&&m.width&&parseInt(m.width,10)
}function k(a,l){var e=g(l);
return e.length<2?e:a.parent().find(l)
}var j;
function h(A,z){var y=this,x=A.add(y),w=A.children(),v=0,u=z.vertical;
j||(j=y),w.length>1&&(w=g(z.items,A)),z.size>1&&(z.circular=!1),g.extend(y,{getConf:function(){return z
},getIndex:function(){return v
},getSize:function(){return y.getItems().size()
},getNaviButtons:function(){return d.add(c)
},getRoot:function(){return A
},getItemWrap:function(){return w
},getItems:function(){return w.find(z.item).not("."+z.clonedClass)
},move:function(l,e){return y.seekTo(v+l,e)
},next:function(b){return y.move(z.size,b)
},prev:function(b){return y.move(-z.size,b)
},begin:function(b){return y.seekTo(0,b)
},end:function(b){return y.seekTo(y.getSize()-1,b)
},focus:function(){j=y;
return y
},addItem:function(e){e=g(e),z.circular?(w.children().last().before(e),w.children().first().replaceWith(e.clone().addClass(z.clonedClass))):(w.append(e),c.removeClass("disabled")),x.trigger("onAddItem",[e]);
return y
},seekTo:function(o,D,B){o.jquery||(o*=1);
if(z.circular&&o===0&&v==-1&&D!==0){return y
}if(!z.circular&&o<0||o>y.getSize()||o<-1){return y
}var p=o;
o.jquery?o=y.getItems().index(o):p=y.getItems().eq(o);
var e=g.Event("onBeforeSeek");
if(!B){x.trigger(e,[o,D]);
if(e.isDefaultPrevented()||!p.length){return y
}}var C=u?{top:-p.position().top}:{left:-p.position().left};
v=o,j=y,D===undefined&&(D=z.speed),w.animate(C,D,z.easing,B||function(){x.trigger("onSeek",[o])
});
return y
}}),g.each(["onBeforeSeek","onSeek","onAddItem"],function(e,l){g.isFunction(z[l])&&g(y).on(l,z[l]),y[l]=function(m){m&&g(y).on(l,m);
return y
}
});
if(z.circular){var s=y.getItems().slice(-1).clone().prependTo(w),r=y.getItems().eq(1).clone().appendTo(w);
s.add(r).addClass(z.clonedClass),y.onBeforeSeek(function(l,e,m){if(!l.isDefaultPrevented()){if(e==-1){y.seekTo(s,m,function(){y.end(0)
});
return l.preventDefault()
}e==y.getSize()&&y.seekTo(r,m,function(){y.begin(0)
})
}});
var q=A.parents().add(A).filter(function(){if(g(this).css("display")==="none"){return !0
}});
q.length?(q.show(),y.seekTo(0,0,function(){}),q.hide()):y.seekTo(0,0,function(){})
}var d=k(A,z.prev).click(function(b){b.stopPropagation(),y.prev()
}),c=k(A,z.next).click(function(b){b.stopPropagation(),y.next()
});
z.circular||(y.onBeforeSeek(function(l,e){setTimeout(function(){l.isDefaultPrevented()||(d.toggleClass(z.disabledClass,e<=0),c.toggleClass(z.disabledClass,e>=y.getSize()-1))
},1)
}),z.initialIndex||d.addClass(z.disabledClass)),y.getSize()<2&&d.add(c).addClass(z.disabledClass),z.mousewheel&&g.fn.mousewheel&&A.mousewheel(function(l,e){if(z.mousewheel){y.move(e<0?1:-1,z.wheelSpeed||50);
return !1
}});
if(z.touch){var a={};
w[0].ontouchstart=function(l){var e=l.touches[0];
a.x=e.clientX,a.y=e.clientY
},w[0].ontouchmove=function(l){if(l.touches.length==1&&!w.is(":animated")){var e=l.touches[0],n=a.x-e.clientX,m=a.y-e.clientY;
y[u&&m>0||!u&&n>0?"next":"prev"](),l.preventDefault()
}}
}z.keyboard&&g(document).on("keydown.scrollable",function(e){if(!(!z.keyboard||e.altKey||e.ctrlKey||e.metaKey||g(e.target).is(":input"))){if(z.keyboard!="static"&&j!=y){return
}var l=e.keyCode;
if(u&&(l==38||l==40)){y.move(l==38?-1:1);
return e.preventDefault()
}if(!u&&(l==37||l==39)){y.move(l==37?-1:1);
return e.preventDefault()
}}}),z.initialIndex&&y.seekTo(z.initialIndex,0,function(){})
}g.fn.scrollable=function(a){var d=this.data("scrollable");
if(d){return d
}a=g.extend({},g.tools.scrollable.conf,a),this.each(function(){d=new h(g(this),a),g(this).data("scrollable",d)
});
return a.api?d:this
}
})(jQuery);
(function(g){g.tools=g.tools||{version:"v1.2.7"},g.tools.tabs={conf:{tabs:"a",current:"current",onBeforeClick:null,onClick:null,effect:"default",initialEffect:!1,initialIndex:0,event:"click",rotate:!1,slideUpSpeed:400,slideDownSpeed:400,history:!1},addEffect:function(b,d){f[b]=d
}};
var f={"default":function(d,c){this.getPanes().hide().eq(d).show(),c.call()
},fade:function(m,l){var p=this.getConf(),o=p.fadeOutSpeed,n=this.getPanes();
o?n.fadeOut(o):n.hide(),n.eq(m).fadeIn(p.fadeInSpeed,l)
},slide:function(e,d){var l=this.getConf();
this.getPanes().slideUp(l.slideUpSpeed),this.getPanes().eq(e).slideDown(l.slideDownSpeed,d)
},ajax:function(d,c){this.getPanes().eq(0).load(this.getTabs().eq(d).attr("href"),c)
}},k,j;
g.tools.tabs.addEffect("horizontal",function(a,l){if(!k){var d=this.getPanes().eq(a),c=this.getCurrentPane();
j||(j=this.getPanes().eq(0).width()),k=!0,d.show(),c.animate({width:0},{step:function(b){d.css("width",j-b)
},complete:function(){g(this).hide(),l.call(),k=!1
}}),c.length||(l.call(),k=!1)
}});
function h(q,p,o){var n=this,m=q.add(this),l=q.find(o.tabs),b=p.jquery?p:q.children(p),a;
l.length||(l=q.children()),b.length||(b=q.parent().find(p)),b.length||(b=g(p)),g.extend(this,{click:function(u,s){var r=l.eq(u),e=!q.data("tabs");
typeof u=="string"&&u.replace("#","")&&(r=l.filter('[href*="'+u.replace("#","")+'"]'),u=Math.max(l.index(r),0));
if(o.rotate){var c=l.length-1;
if(u<0){return n.click(c,s)
}if(u>c){return n.click(0,s)
}}if(!r.length){if(a>=0){return n
}u=o.initialIndex,r=l.eq(u)
}if(u===a){return n
}s=s||g.Event(),s.type="onBeforeClick",m.trigger(s,[u]);
if(!s.isDefaultPrevented()){var v=e?o.initialEffect&&o.effect||"default":o.effect;
f[v].call(n,u,function(){a=u,s.type="onClick",m.trigger(s,[u])
}),l.removeClass(o.current),r.addClass(o.current);
return n
}},getConf:function(){return o
},getTabs:function(){return l
},getPanes:function(){return b
},getCurrentPane:function(){return b.eq(a)
},getCurrentTab:function(){return l.eq(a)
},getIndex:function(){return a
},next:function(){return n.click(a+1)
},prev:function(){return n.click(a-1)
},destroy:function(){l.off(o.event).removeClass(o.current),b.find('a[href^="#"]').off("click.T");
return n
}}),g.each("onBeforeClick,onClick".split(","),function(d,e){g.isFunction(o[e])&&g(n).on(e,o[e]),n[e]=function(c){c&&g(n).on(e,c);
return n
}
}),o.history&&g.fn.history&&(g.tools.history.init(l),o.event="history"),l.each(function(c){g(this).on(o.event,function(d){n.click(c,d);
return d.preventDefault()
})
}),b.find('a[href^="#"]').on("click.T",function(c){n.click(g(this).attr("href"),c)
}),location.hash&&o.tabs=="a"&&q.find('[href="'+location.hash+'"]').length?n.click(location.hash):(o.initialIndex===0||o.initialIndex>0)&&n.click(o.initialIndex)
}g.fn.tabs=function(a,l){var e=this.data("tabs");
e&&(e.destroy(),this.removeData("tabs")),g.isFunction(l)&&(l={onBeforeClick:l}),l=g.extend({},g.tools.tabs.conf,l),this.each(function(){e=new h(g(this),a,l),g(this).data("tabs",e)
});
return l.api?e:this
}
})(jQuery);
(function(f){f.tools=f.tools||{version:"v1.2.7"},f.tools.tooltip={conf:{effect:"toggle",fadeOutSpeed:"fast",predelay:0,delay:30,opacity:1,tip:0,fadeIE:!1,position:["top","center"],offset:[0,0],relative:!1,cancelDefault:!0,events:{def:"mouseenter,mouseleave",input:"focus,blur",widget:"focus mouseenter,blur mouseleave",tooltip:"mouseenter,mouseleave"},layout:"<div/>",tipClass:"tooltip"},addEffect:function(b,k,j){e[b]=[k,j]
}};
var e={toggle:[function(k){var j=this.getConf(),m=this.getTip(),l=j.opacity;
l<1&&m.css({opacity:l}),m.show(),k.call()
},function(b){this.getTip().hide(),b.call()
}],fade:[function(a){var d=this.getConf();
!f.browser.msie||d.fadeIE?this.getTip().fadeTo(d.fadeInSpeed,d.opacity,a):(this.getTip().show(),a())
},function(a){var d=this.getConf();
!f.browser.msie||d.fadeIE?this.getTip().fadeOut(d.fadeOutSpeed,a):(this.getTip().hide(),a())
}]};
function h(a,p,o){var n=o.relative?a.position().top:a.offset().top,m=o.relative?a.position().left:a.offset().left,l=o.position[0];
n-=p.outerHeight()-o.offset[0],m+=a.outerWidth()+o.offset[1],/iPad/i.test(navigator.userAgent)&&(n-=f(window).scrollTop());
var k=p.outerHeight()+a.outerHeight();
l=="center"&&(n+=k/2),l=="bottom"&&(n+=k),l=o.position[1];
var j=p.outerWidth()+a.outerWidth();
l=="center"&&(m-=j/2),l=="left"&&(m-=j);
return{top:n,left:m}
}function g(E,D){var C=this,B=E.add(C),A,z=0,y=0,x=E.attr("title"),w=E.attr("data-tooltip"),v=e[D.effect],u,s=E.is(":input"),c=s&&E.is(":checkbox, :radio, select, :button, :submit"),b=E.attr("type"),a=D.events[b]||D.events[s?c?"widget":"input":"def"];
if(!v){throw'Nonexistent effect "'+D.effect+'"'
}a=a.split(/,\s*/);
if(a.length!=2){throw"Tooltip: bad events configuration for "+b
}E.on(a[0],function(d){clearTimeout(z),D.predelay?y=setTimeout(function(){C.show(d)
},D.predelay):C.show(d)
}).on(a[1],function(d){clearTimeout(y),D.delay?z=setTimeout(function(){C.hide(d)
},D.delay):C.hide(d)
}),x&&D.cancelDefault&&(E.removeAttr("title"),E.data("title",x)),f.extend(C,{show:function(d){if(!A){w?A=f(w):D.tip?A=f(D.tip).eq(0):x?A=f(D.layout).addClass(D.tipClass).appendTo(document.body).hide().append(x):(A=E.next(),A.length||(A=E.parent().next()));
if(!A.length){throw"Cannot find tooltip for "+E
}}if(C.isShown()){return C
}A.stop(!0,!0);
var k=h(E,A,D);
D.tip&&A.html(E.data("title")),d=f.Event(),d.type="onBeforeShow",B.trigger(d,[k]);
if(d.isDefaultPrevented()){return C
}k=h(E,A,D),A.css({position:"absolute",top:k.top,left:k.left}),u=!0,v[0].call(C,function(){d.type="onShow",u="full",B.trigger(d)
});
var j=D.events.tooltip.split(/,\s*/);
A.data("__set")||(A.off(j[0]).on(j[0],function(){clearTimeout(z),clearTimeout(y)
}),j[1]&&!E.is("input:not(:checkbox, :radio), textarea")&&A.off(j[1]).on(j[1],function(l){l.relatedTarget!=E[0]&&E.trigger(a[1].split(" ")[0])
}),D.tip||A.data("__set",!0));
return C
},hide:function(d){if(!A||!C.isShown()){return C
}d=f.Event(),d.type="onBeforeHide",B.trigger(d);
if(!d.isDefaultPrevented()){u=!1,e[D.effect][1].call(C,function(){d.type="onHide",B.trigger(d)
});
return C
}},isShown:function(d){return d?u=="full":u
},getConf:function(){return D
},getTip:function(){return A
},getTrigger:function(){return E
}}),f.each("onHide,onBeforeShow,onShow,onBeforeHide".split(","),function(d,j){f.isFunction(D[j])&&f(C).on(j,D[j]),C[j]=function(k){k&&f(C).on(j,k);
return C
}
})
}f.fn.tooltip=function(a){var d=this.data("tooltip");
if(d){return d
}a=f.extend(!0,{},f.tools.tooltip.conf,a),typeof a.position=="string"&&(a.position=a.position.split(/,?\s/)),this.each(function(){d=new g(f(this),a),f(this).data("tooltip",d)
});
return a.api?d:this
}
})(jQuery);
(function(b){var a=function(m,s){var j=b.extend({},b.fn.nivoSlider.defaults,s);
var o={currentSlide:0,currentImage:"",totalSlides:0,running:false,paused:false,stop:false,controlNavEl:false};
var d=b(m);
d.data("nivo:vars",o).addClass("nivoSlider");
var e=d.children();
e.each(function(){var x=b(this);
var w="";
if(!x.is("img")){if(x.is("a")){x.addClass("nivo-imageLink");
w=x
}x=x.find("img:first")
}var v=(v===0)?x.attr("width"):x.width(),u=(u===0)?x.attr("height"):x.height();
if(w!==""){w.css("display","none")
}x.css("display","none");
o.totalSlides++
});
if(j.randomStart){j.startSlide=Math.floor(Math.random()*o.totalSlides)
}if(j.startSlide>0){if(j.startSlide>=o.totalSlides){j.startSlide=o.totalSlides-1
}o.currentSlide=j.startSlide
}if(b(e[o.currentSlide]).is("img")){o.currentImage=b(e[o.currentSlide])
}else{o.currentImage=b(e[o.currentSlide]).find("img:first")
}if(b(e[o.currentSlide]).is("a")){b(e[o.currentSlide]).css("display","block")
}var r=b('<img class="nivo-main-image" src="#" />');
r.attr("src",o.currentImage.attr("src")).show();
d.append(r);
b(window).resize(function(){d.children("img").width(d.width());
r.attr("src",o.currentImage.attr("src"));
r.stop().height("auto");
b(".nivo-slice").remove();
b(".nivo-box").remove()
});
d.append(b('<div class="nivo-caption"></div>'));
var p=function(u){var w=b(".nivo-caption",d);
if(o.currentImage.attr("title")!=""&&o.currentImage.attr("title")!=undefined){var v=o.currentImage.attr("title");
if(v.substr(0,1)=="#"){v=b(v).html()
}if(w.css("display")=="block"){setTimeout(function(){w.html(v)
},u.animSpeed)
}else{w.html(v);
w.stop().fadeIn(u.animSpeed)
}}else{w.stop().fadeOut(u.animSpeed)
}};
p(j);
var c=0;
if(!j.manualAdvance&&e.length>1){c=setInterval(function(){q(d,e,j,false)
},j.pauseTime)
}if(j.directionNav){d.append('<div class="nivo-directionNav"><a class="nivo-prevNav">'+j.prevText+'</a><a class="nivo-nextNav">'+j.nextText+"</a></div>");
b("a.nivo-prevNav",d).live("click",function(){if(o.running){return false
}clearInterval(c);
c="";
o.currentSlide-=2;
q(d,e,j,"prev")
});
b("a.nivo-nextNav",d).live("click",function(){if(o.running){return false
}clearInterval(c);
c="";
q(d,e,j,"next")
})
}if(j.controlNav){o.controlNavEl=b('<div class="nivo-controlNav"></div>');
d.after(o.controlNavEl);
for(var l=0;
l<e.length;
l++){if(j.controlNavThumbs){o.controlNavEl.addClass("nivo-thumbs-enabled");
var f=e.eq(l);
if(!f.is("img")){f=f.find("img:first")
}if(f.attr("data-thumb")){o.controlNavEl.append('<a class="nivo-control" rel="'+l+'"><img src="'+f.attr("data-thumb")+'" alt="" /></a>')
}}else{o.controlNavEl.append('<a class="nivo-control" rel="'+l+'">'+(l+1)+"</a>")
}}b("a:eq("+o.currentSlide+")",o.controlNavEl).addClass("active");
b("a",o.controlNavEl).bind("click",function(){if(o.running){return false
}if(b(this).hasClass("active")){return false
}clearInterval(c);
c="";
r.attr("src",o.currentImage.attr("src"));
o.currentSlide=b(this).attr("rel")-1;
q(d,e,j,"control")
})
}if(j.pauseOnHover){d.hover(function(){o.paused=true;
clearInterval(c);
c=""
},function(){o.paused=false;
if(c===""&&!j.manualAdvance){c=setInterval(function(){q(d,e,j,false)
},j.pauseTime)
}})
}d.bind("nivo:animFinished",function(){r.attr("src",o.currentImage.attr("src"));
o.running=false;
b(e).each(function(){if(b(this).is("a")){b(this).css("display","none")
}});
if(b(e[o.currentSlide]).is("a")){b(e[o.currentSlide]).css("display","block")
}if(c===""&&!o.paused&&!j.manualAdvance){c=setInterval(function(){q(d,e,j,false)
},j.pauseTime)
}j.afterChange.call(this)
});
var g=function(w,v,z){if(b(z.currentImage).parent().is("a")){b(z.currentImage).parent().css("display","block")
}b('img[src="'+z.currentImage.attr("src")+'"]',w).not(".nivo-main-image,.nivo-control img").width(w.width()).css("visibility","hidden").show();
var x=(b('img[src="'+z.currentImage.attr("src")+'"]',w).not(".nivo-main-image,.nivo-control img").parent().is("a"))?b('img[src="'+z.currentImage.attr("src")+'"]',w).not(".nivo-main-image,.nivo-control img").parent().height():b('img[src="'+z.currentImage.attr("src")+'"]',w).not(".nivo-main-image,.nivo-control img").height();
for(var u=0;
u<v.slices;
u++){var y=Math.round(w.width()/v.slices);
if(u===v.slices-1){w.append(b('<div class="nivo-slice" name="'+u+'"><img src="'+z.currentImage.attr("src")+'" style="position:absolute; width:'+w.width()+"px; height:auto; display:block !important; top:0; left:-"+((y+(u*y))-y)+'px;" /></div>').css({left:(y*u)+"px",width:(w.width()-(y*u))+"px",height:x+"px",opacity:"0",overflow:"hidden"}))
}else{w.append(b('<div class="nivo-slice" name="'+u+'"><img src="'+z.currentImage.attr("src")+'" style="position:absolute; width:'+w.width()+"px; height:auto; display:block !important; top:0; left:-"+((y+(u*y))-y)+'px;" /></div>').css({left:(y*u)+"px",width:y+"px",height:x+"px",opacity:"0",overflow:"hidden"}))
}}b(".nivo-slice",w).height(x);
r.stop().animate({height:b(z.currentImage).height()},v.animSpeed)
};
var h=function(w,u,z){if(b(z.currentImage).parent().is("a")){b(z.currentImage).parent().css("display","block")
}b('img[src="'+z.currentImage.attr("src")+'"]',w).not(".nivo-main-image,.nivo-control img").width(w.width()).css("visibility","hidden").show();
var v=Math.round(w.width()/u.boxCols),A=Math.round(b('img[src="'+z.currentImage.attr("src")+'"]',w).not(".nivo-main-image,.nivo-control img").height()/u.boxRows);
for(var x=0;
x<u.boxRows;
x++){for(var y=0;
y<u.boxCols;
y++){if(y===u.boxCols-1){w.append(b('<div class="nivo-box" name="'+y+'" rel="'+x+'"><img src="'+z.currentImage.attr("src")+'" style="position:absolute; width:'+w.width()+"px; height:auto; display:block; top:-"+(A*x)+"px; left:-"+(v*y)+'px;" /></div>').css({opacity:0,left:(v*y)+"px",top:(A*x)+"px",width:(w.width()-(v*y))+"px"}));
b('.nivo-box[name="'+y+'"]',w).height(b('.nivo-box[name="'+y+'"] img',w).height()+"px")
}else{w.append(b('<div class="nivo-box" name="'+y+'" rel="'+x+'"><img src="'+z.currentImage.attr("src")+'" style="position:absolute; width:'+w.width()+"px; height:auto; display:block; top:-"+(A*x)+"px; left:-"+(v*y)+'px;" /></div>').css({opacity:0,left:(v*y)+"px",top:(A*x)+"px",width:v+"px"}));
b('.nivo-box[name="'+y+'"]',w).height(b('.nivo-box[name="'+y+'"] img',w).height()+"px")
}}}r.stop().animate({height:b(z.currentImage).height()},u.animSpeed)
};
var q=function(J,I,M,F){var H=J.data("nivo:vars");
if(H&&(H.currentSlide===H.totalSlides-1)){M.lastSlide.call(this)
}if((!H||H.stop)&&!F){return false
}M.beforeChange.call(this);
if(!F){r.attr("src",H.currentImage.attr("src"))
}else{if(F==="prev"){r.attr("src",H.currentImage.attr("src"))
}if(F==="next"){r.attr("src",H.currentImage.attr("src"))
}}H.currentSlide++;
if(H.currentSlide===H.totalSlides){H.currentSlide=0;
M.slideshowEnd.call(this)
}if(H.currentSlide<0){H.currentSlide=(H.totalSlides-1)
}if(b(I[H.currentSlide]).is("img")){H.currentImage=b(I[H.currentSlide])
}else{H.currentImage=b(I[H.currentSlide]).find("img:first")
}if(M.controlNav){b("a",H.controlNavEl).removeClass("active");
b("a:eq("+H.currentSlide+")",H.controlNavEl).addClass("active")
}p(M);
b(".nivo-slice",J).remove();
b(".nivo-box",J).remove();
var w=M.effect,O="";
if(M.effect==="random"){O=new Array("sliceDownRight","sliceDownLeft","sliceUpRight","sliceUpLeft","sliceUpDown","sliceUpDownLeft","fold","fade","boxRandom","boxRain","boxRainReverse","boxRainGrow","boxRainGrowReverse");
w=O[Math.floor(Math.random()*(O.length+1))];
if(w===undefined){w="fade"
}}if(M.effect.indexOf(",")!==-1){O=M.effect.split(",");
w=O[Math.floor(Math.random()*(O.length))];
if(w===undefined){w="fade"
}}if(H.currentImage.attr("data-transition")){w=H.currentImage.attr("data-transition")
}H.running=true;
var N=0,K=0,u="",B="",L="",y="";
if(w==="sliceDown"||w==="sliceDownRight"||w==="sliceDownLeft"){g(J,M,H);
N=0;
K=0;
u=b(".nivo-slice",J);
if(w==="sliceDownLeft"){u=b(".nivo-slice",J)._reverse()
}u.each(function(){var v=b(this);
v.css({top:"0px"});
if(K===M.slices-1){setTimeout(function(){v.animate({opacity:"1.0"},M.animSpeed,"",function(){J.trigger("nivo:animFinished")
})
},(100+N))
}else{setTimeout(function(){v.animate({opacity:"1.0"},M.animSpeed)
},(100+N))
}N+=50;
K++
})
}else{if(w==="sliceUp"||w==="sliceUpRight"||w==="sliceUpLeft"){g(J,M,H);
N=0;
K=0;
u=b(".nivo-slice",J);
if(w==="sliceUpLeft"){u=b(".nivo-slice",J)._reverse()
}u.each(function(){var v=b(this);
v.css({bottom:"0px"});
if(K===M.slices-1){setTimeout(function(){v.animate({opacity:"1.0"},M.animSpeed,"",function(){J.trigger("nivo:animFinished")
})
},(100+N))
}else{setTimeout(function(){v.animate({opacity:"1.0"},M.animSpeed)
},(100+N))
}N+=50;
K++
})
}else{if(w==="sliceUpDown"||w==="sliceUpDownRight"||w==="sliceUpDownLeft"){g(J,M,H);
N=0;
K=0;
var D=0;
u=b(".nivo-slice",J);
if(w==="sliceUpDownLeft"){u=b(".nivo-slice",J)._reverse()
}u.each(function(){var v=b(this);
if(K===0){v.css("top","0px");
K++
}else{v.css("bottom","0px");
K=0
}if(D===M.slices-1){setTimeout(function(){v.animate({opacity:"1.0"},M.animSpeed,"",function(){J.trigger("nivo:animFinished")
})
},(100+N))
}else{setTimeout(function(){v.animate({opacity:"1.0"},M.animSpeed)
},(100+N))
}N+=50;
D++
})
}else{if(w==="fold"){g(J,M,H);
N=0;
K=0;
b(".nivo-slice",J).each(function(){var v=b(this);
var P=v.width();
v.css({top:"0px",width:"0px"});
if(K===M.slices-1){setTimeout(function(){v.animate({width:P,opacity:"1.0"},M.animSpeed,"",function(){J.trigger("nivo:animFinished")
})
},(100+N))
}else{setTimeout(function(){v.animate({width:P,opacity:"1.0"},M.animSpeed)
},(100+N))
}N+=50;
K++
})
}else{if(w==="fade"){g(J,M,H);
B=b(".nivo-slice:first",J);
B.css({width:J.width()+"px"});
B.animate({opacity:"1.0"},(M.animSpeed*2),"",function(){J.trigger("nivo:animFinished")
})
}else{if(w==="slideInRight"){g(J,M,H);
B=b(".nivo-slice:first",J);
B.css({width:"0px",opacity:"1"});
B.animate({width:J.width()+"px"},(M.animSpeed*2),"",function(){J.trigger("nivo:animFinished")
})
}else{if(w==="slideInLeft"){g(J,M,H);
B=b(".nivo-slice:first",J);
B.css({width:"0px",opacity:"1",left:"",right:"0px"});
B.animate({width:J.width()+"px"},(M.animSpeed*2),"",function(){B.css({left:"0px",right:""});
J.trigger("nivo:animFinished")
})
}else{if(w==="boxRandom"){h(J,M,H);
L=M.boxCols*M.boxRows;
K=0;
N=0;
y=n(b(".nivo-box",J));
y.each(function(){var v=b(this);
if(K===L-1){setTimeout(function(){v.animate({opacity:"1"},M.animSpeed,"",function(){J.trigger("nivo:animFinished")
})
},(100+N))
}else{setTimeout(function(){v.animate({opacity:"1"},M.animSpeed)
},(100+N))
}N+=20;
K++
})
}else{if(w==="boxRain"||w==="boxRainReverse"||w==="boxRainGrow"||w==="boxRainGrowReverse"){h(J,M,H);
L=M.boxCols*M.boxRows;
K=0;
N=0;
var A=0;
var G=0;
var E=[];
E[A]=[];
y=b(".nivo-box",J);
if(w==="boxRainReverse"||w==="boxRainGrowReverse"){y=b(".nivo-box",J)._reverse()
}y.each(function(){E[A][G]=b(this);
G++;
if(G===M.boxCols){A++;
G=0;
E[A]=[]
}});
for(var C=0;
C<(M.boxCols*2);
C++){var x=C;
for(var z=0;
z<M.boxRows;
z++){if(x>=0&&x<M.boxCols){(function(U,P,T,Q,V){var S=b(E[U][P]);
var v=S.width();
var R=S.height();
if(w==="boxRainGrow"||w==="boxRainGrowReverse"){S.width(0).height(0)
}if(Q===V-1){setTimeout(function(){S.animate({opacity:"1",width:v,height:R},M.animSpeed/1.3,"",function(){J.trigger("nivo:animFinished")
})
},(100+T))
}else{setTimeout(function(){S.animate({opacity:"1",width:v,height:R},M.animSpeed/1.3)
},(100+T))
}})(z,x,N,K,L);
K++
}x--
}N+=100
}}}}}}}}}}};
var n=function(v){for(var w,u,y=v.length;
y;
w=parseInt(Math.random()*y,10),u=v[--y],v[y]=v[w],v[w]=u){}return v
};
var k=function(u){if(this.console&&typeof console.log!=="undefined"){console.log(u)
}};
this.stop=function(){if(!b(m).data("nivo:vars").stop){b(m).data("nivo:vars").stop=true;
k("Stop Slider")
}};
this.start=function(){if(b(m).data("nivo:vars").stop){b(m).data("nivo:vars").stop=false;
k("Start Slider")
}};
j.afterLoad.call(this);
return this
};
b.fn.nivoSlider=function(c){return this.each(function(e,g){var d=b(this);
if(d.data("nivoslider")){return d.data("nivoslider")
}var f=new a(this,c);
d.data("nivoslider",f)
})
};
b.fn.nivoSlider.defaults={effect:"random",slices:15,boxCols:8,boxRows:4,animSpeed:500,pauseTime:3000,startSlide:0,directionNav:true,controlNav:true,controlNavThumbs:false,pauseOnHover:true,manualAdvance:false,prevText:"Prev",nextText:"Next",randomStart:false,beforeChange:function(){},afterChange:function(){},slideshowEnd:function(){},lastSlide:function(){},afterLoad:function(){}};
b.fn._reverse=[].reverse
})(jQuery);
(function(b){b.fn.superfish=function(l){var g=b.fn.superfish,k=g.c,f=b(['<span class="',k.arrowClass,'"></span>'].join("")),j=function(){var c=b(this),m=d(c);
clearTimeout(m.sfTimer);
c.showSuperfishUl().siblings().hideSuperfishUl()
},e=function(){var c=b(this),n=d(c),m=g.op;
clearTimeout(n.sfTimer);
n.sfTimer=setTimeout(function(){m.retainPath=(b.inArray(c[0],m.$path)>-1);
c.hideSuperfishUl();
if(m.$path.length&&c.parents(["li.",m.hoverClass].join("")).length<1){j.call(m.$path)
}},m.delay)
},d=function(c){var m=c.parents(["ul.",k.menuClass,":first"].join(""))[0];
g.op=g.o[m.serial];
return m
},h=function(c){c.addClass(k.anchorClass).append(f.clone())
};
return this.each(function(){var c=this.serial=g.o.length;
var n=b.extend({},g.defaults,l);
n.$path=b("li."+n.pathClass,this).slice(0,n.pathLevels).each(function(){b(this).addClass([n.hoverClass,k.bcClass].join(" ")).filter("li:has(ul)").removeClass(n.pathClass)
});
g.o[c]=g.op=n;
b("li:has(ul)",this)[(b.fn.hoverIntent&&!n.disableHI)?"hoverIntent":"hover"](j,e).each(function(){if(n.autoArrows){h(b(">a:first-child",this))
}}).not("."+k.bcClass).hideSuperfishUl();
var m=b("a",this);
m.each(function(o){var p=m.eq(o).parents("li");
m.eq(o).focus(function(){j.call(p)
}).blur(function(){e.call(p)
})
});
n.onInit.call(this)
}).each(function(){var c=[k.menuClass];
if(g.op.dropShadows&&!(b.browser.msie&&b.browser.version<7)){c.push(k.shadowClass)
}b(this).addClass(c.join(" "))
})
};
var a=b.fn.superfish;
a.o=[];
a.op={};
a.IE7fix=function(){var c=a.op;
if(b.browser.msie&&b.browser.version>6&&c.dropShadows&&c.animation.opacity!=undefined){this.toggleClass(a.c.shadowClass+"-off")
}};
a.c={bcClass:"sf-breadcrumb",menuClass:"sf-js-enabled",anchorClass:"sf-with-ul",arrowClass:"sf-sub-indicator",shadowClass:"sf-shadow"};
a.defaults={hoverClass:"sfHover",pathClass:"overideThisToUse",pathLevels:1,delay:800,animation:{opacity:"show"},speed:"normal",autoArrows:true,dropShadows:true,disableHI:false,onInit:function(){},onBeforeShow:function(){},onShow:function(){},onHide:function(){}};
b.fn.extend({hideSuperfishUl:function(){var e=a.op,d=(e.retainPath===true)?e.$path:"";
e.retainPath=false;
var c=b(["li.",e.hoverClass].join(""),this).add(this).not(d).removeClass(e.hoverClass).find(">ul").hide().css("visibility","hidden");
e.onHide.call(c);
return this
},showSuperfishUl:function(){var e=a.op,d=a.c.shadowClass+"-off",c=this.addClass(e.hoverClass).find(">ul:hidden").css("visibility","visible");
a.IE7fix.call(c);
e.onBeforeShow.call(c);
c.animate(e.animation,e.speed,function(){a.IE7fix.call(c);
e.onShow.call(c)
});
return this
}})
})(jQuery);
(function(a){a.fn.hoverIntent=function(n,d,h){var k={interval:100,sensitivity:7,timeout:0};
if(typeof n==="object"){k=a.extend(k,n)
}else{if(a.isFunction(d)){k=a.extend(k,{over:n,out:d,selector:h})
}else{k=a.extend(k,{over:n,out:n,selector:d})
}}var m,l,g,f;
var e=function(o){m=o.pageX;
l=o.pageY
};
var c=function(p,o){o.hoverIntent_t=clearTimeout(o.hoverIntent_t);
if((Math.abs(g-m)+Math.abs(f-l))<k.sensitivity){a(o).off("mousemove.hoverIntent",e);
o.hoverIntent_s=1;
return k.over.apply(o,[p])
}else{g=m;
f=l;
o.hoverIntent_t=setTimeout(function(){c(p,o)
},k.interval)
}};
var j=function(p,o){o.hoverIntent_t=clearTimeout(o.hoverIntent_t);
o.hoverIntent_s=0;
return k.out.apply(o,[p])
};
var b=function(q){var p=jQuery.extend({},q);
var o=this;
if(o.hoverIntent_t){o.hoverIntent_t=clearTimeout(o.hoverIntent_t)
}if(q.type=="mouseenter"){g=p.pageX;
f=p.pageY;
a(o).on("mousemove.hoverIntent",e);
if(o.hoverIntent_s!=1){o.hoverIntent_t=setTimeout(function(){c(p,o)
},k.interval)
}}else{a(o).off("mousemove.hoverIntent",e);
if(o.hoverIntent_s==1){o.hoverIntent_t=setTimeout(function(){j(p,o)
},k.timeout)
}}};
return this.on({"mouseenter.hoverIntent":b,"mouseleave.hoverIntent":b},k.selector)
}
})(jQuery);
(function(a){a.fn.supersubs=function(b){var c=a.extend({},a.fn.supersubs.defaults,b);
return this.each(function(){var d=a(this);
var f=a.meta?a.extend({},c,d.data()):c;
var e=d.find("ul").show();
var g=a('<li id="menu-fontsize">&#8212;</li>').css({padding:0,position:"absolute",top:"-999em",width:"auto"}).appendTo(d)[0].clientWidth;
a("#menu-fontsize").remove();
e.each(function(m){var l=a(this);
var k=l.children();
var h=k.children("a");
var n=k.css("white-space","nowrap").css("float");
l.add(k).add(h).css({"float":"none",width:"auto"});
var j=l[0].clientWidth/g;
j+=f.extraWidth;
if(j>f.maxWidth){j=f.maxWidth
}else{if(j<f.minWidth){j=f.minWidth
}}j+="em";
l.css("width",j);
k.css({"float":n,width:"100%","white-space":"normal"}).each(function(){var p=a(this).children("ul");
var o=p.css("left")!==undefined?"left":"right";
p.css(o,"100%")
})
}).hide()
})
};
a.fn.supersubs.defaults={minWidth:9,maxWidth:25,extraWidth:0}
})(jQuery);
(function(a){a.fn.mmTouchscreen=function(){return this.each(function(){a(this).children("a").each(function(){var b=a(this);
b.click(function(c){if(b.hasClass("mm-clicked")){var d=b.attr("href");
window.location=d
}else{c.preventDefault();
b.addClass("mm-clicked")
}}).closest("li").mouseleave(function(){b.removeClass("mm-clicked")
})
})
})
}
})(jQuery);
(function(a){a.fn.sftouchscreen=function(){return this.each(function(){a(this).find("li > ul").closest("li").children("a").each(function(){var b=a(this);
b.click(function(c){if(b.hasClass("sf-clicked")){var d=b.attr("href");
window.location=d
}else{c.preventDefault();
b.addClass("sf-clicked")
}}).closest("li").mouseleave(function(){b.removeClass("sf-clicked")
})
})
})
}
})(jQuery);
(function(){var a,e,f;
a=jQuery;
f=(function(){function c(){this.fadeDuration=500;
this.fitImagesInViewport=true;
this.resizeDuration=700;
this.showImageNumberLabel=true;
this.wrapAround=false
}c.prototype.albumLabel=function(d,g){return"Image "+d+" of "+g
};
return c
})();
e=(function(){function b(c){this.options=c;
this.album=[];
this.currentImageIndex=void 0;
this.init()
}b.prototype.init=function(){this.enable();
return this.build()
};
b.prototype.enable=function(){var d=this;
return a("body").on("click","a[rel^=lightbox], area[rel^=lightbox], a[data-lightbox], area[data-lightbox]",function(c){d.start(a(c.currentTarget));
return false
})
};
b.prototype.build=function(){var d=this;
a("<div id='lightboxOverlay' class='lightboxOverlay'></div><div id='lightbox' class='lightbox'><div class='lb-outerContainer'><div class='lb-container'><img class='lb-image' src='' /><div class='lb-nav'><a class='lb-prev' href='' ></a><a class='lb-next' href='' ></a></div><div class='lb-loader'><a class='lb-cancel'></a></div></div></div><div class='lb-dataContainer'><div class='lb-data'><div class='lb-details'><span class='lb-caption'></span><span class='lb-number'></span></div><div class='lb-closeContainer'><a class='lb-close'></a></div></div></div></div>").appendTo(a("body"));
this.$lightbox=a("#lightbox");
this.$overlay=a("#lightboxOverlay");
this.$outerContainer=this.$lightbox.find(".lb-outerContainer");
this.$container=this.$lightbox.find(".lb-container");
this.containerTopPadding=parseInt(this.$container.css("padding-top"),10);
this.containerRightPadding=parseInt(this.$container.css("padding-right"),10);
this.containerBottomPadding=parseInt(this.$container.css("padding-bottom"),10);
this.containerLeftPadding=parseInt(this.$container.css("padding-left"),10);
this.$overlay.hide().on("click",function(){d.end();
return false
});
this.$lightbox.hide().on("click",function(c){if(a(c.target).attr("id")==="lightbox"){d.end()
}return false
});
this.$outerContainer.on("click",function(c){if(a(c.target).attr("id")==="lightbox"){d.end()
}return false
});
this.$lightbox.find(".lb-prev").on("click",function(){if(d.currentImageIndex===0){d.changeImage(d.album.length-1)
}else{d.changeImage(d.currentImageIndex-1)
}return false
});
this.$lightbox.find(".lb-next").on("click",function(){if(d.currentImageIndex===d.album.length-1){d.changeImage(0)
}else{d.changeImage(d.currentImageIndex+1)
}return false
});
return this.$lightbox.find(".lb-loader, .lb-close").on("click",function(){d.end();
return false
})
};
b.prototype.start=function(E){var B,C,x,D,A,s,r,w,v,u,q,z,y;
a(window).on("resize",this.sizeOverlay);
a("select, object, embed").css({visibility:"hidden"});
this.$overlay.width(a(document).width()).height(a(document).height()).fadeIn(this.options.fadeDuration);
this.album=[];
A=0;
x=E.attr("data-lightbox");
if(x){z=a(E.prop("tagName")+'[data-lightbox="'+x+'"]');
for(D=w=0,u=z.length;
w<u;
D=++w){C=z[D];
this.album.push({link:a(C).attr("href"),title:a(C).attr("caption")});
if(a(C).attr("href")===E.attr("href")){A=D
}}}else{if(E.attr("rel")==="lightbox"){this.album.push({link:E.attr("href"),title:E.attr("caption")})
}else{y=a(E.prop("tagName")+'[rel="'+E.attr("rel")+'"]');
for(D=v=0,q=y.length;
v<q;
D=++v){C=y[D];
this.album.push({link:a(C).attr("href"),title:a(C).attr("caption")});
if(a(C).attr("href")===E.attr("href")){A=D
}}}}B=a(window);
r=B.scrollTop()+B.height()/10;
s=B.scrollLeft();
this.$lightbox.css({top:r+"px",left:s+"px"}).fadeIn(this.options.fadeDuration);
this.changeImage(A)
};
b.prototype.changeImage=function(g){var j,k,h=this;
this.disableKeyboardNav();
j=this.$lightbox.find(".lb-image");
this.sizeOverlay();
this.$overlay.fadeIn(this.options.fadeDuration);
a(".lb-loader").fadeIn("slow");
this.$lightbox.find(".lb-image, .lb-nav, .lb-prev, .lb-next, .lb-dataContainer, .lb-numbers, .lb-caption").hide();
this.$outerContainer.addClass("animating");
k=new Image();
k.onload=function(){var c,r,q,p,o,n,d;
j.attr("src",h.album[g].link);
c=a(k);
j.width(k.width);
j.height(k.height);
if(h.options.fitImagesInViewport){d=a(window).width();
n=a(window).height();
o=d-h.containerLeftPadding-h.containerRightPadding-20;
p=n-h.containerTopPadding-h.containerBottomPadding-110;
if((k.width>o)||(k.height>p)){if((k.width/o)>(k.height/p)){q=o;
r=parseInt(k.height/(k.width/q),10);
j.width(q);
j.height(r)
}else{r=p;
q=parseInt(k.width/(k.height/r),10);
j.width(q);
j.height(r)
}}}return h.sizeContainer(j.width(),j.height())
};
k.src=this.album[g].link;
this.currentImageIndex=g
};
b.prototype.sizeOverlay=function(){return a("#lightboxOverlay").width(a(document).width()).height(a(document).height())
};
b.prototype.sizeContainer=function(m,l){var j,o,n,k,p=this;
k=this.$outerContainer.outerWidth();
n=this.$outerContainer.outerHeight();
o=m+this.containerLeftPadding+this.containerRightPadding;
j=l+this.containerTopPadding+this.containerBottomPadding;
this.$outerContainer.animate({width:o,height:j},this.options.resizeDuration,"swing");
setTimeout(function(){p.$lightbox.find(".lb-dataContainer").width(o);
p.$lightbox.find(".lb-prevLink").height(j);
p.$lightbox.find(".lb-nextLink").height(j);
p.showImage()
},this.options.resizeDuration)
};
b.prototype.showImage=function(){this.$lightbox.find(".lb-loader").hide();
this.$lightbox.find(".lb-image").fadeIn("slow");
this.updateNav();
this.updateDetails();
this.preloadNeighboringImages();
this.enableKeyboardNav()
};
b.prototype.updateNav=function(){this.$lightbox.find(".lb-nav").show();
if(this.album.length>1){if(this.options.wrapAround){this.$lightbox.find(".lb-prev, .lb-next").show()
}else{if(this.currentImageIndex>0){this.$lightbox.find(".lb-prev").show()
}if(this.currentImageIndex<this.album.length-1){this.$lightbox.find(".lb-next").show()
}}}};
b.prototype.updateDetails=function(){var c=this;
if(typeof this.album[this.currentImageIndex].title!=="undefined"&&this.album[this.currentImageIndex].title!==""){this.$lightbox.find(".lb-caption").html(this.album[this.currentImageIndex].title).fadeIn("fast")
}if(this.album.length>1&&this.options.showImageNumberLabel){this.$lightbox.find(".lb-number").text(this.options.albumLabel(this.currentImageIndex+1,this.album.length)).fadeIn("fast")
}else{this.$lightbox.find(".lb-number").hide()
}this.$outerContainer.removeClass("animating");
this.$lightbox.find(".lb-dataContainer").fadeIn(this.resizeDuration,function(){return c.sizeOverlay()
})
};
b.prototype.preloadNeighboringImages=function(){var g,d;
if(this.album.length>this.currentImageIndex+1){g=new Image();
g.src=this.album[this.currentImageIndex+1].link
}if(this.currentImageIndex>0){d=new Image();
d.src=this.album[this.currentImageIndex-1].link
}};
b.prototype.enableKeyboardNav=function(){a(document).on("keyup.keyboard",a.proxy(this.keyboardAction,this))
};
b.prototype.disableKeyboardNav=function(){a(document).off(".keyboard")
};
b.prototype.keyboardAction=function(j){var m,l,k,n,h;
m=27;
l=37;
k=39;
h=j.keyCode;
n=String.fromCharCode(h).toLowerCase();
if(h===m||n.match(/x|o|c/)){this.end()
}else{if(n==="p"||h===l){if(this.currentImageIndex!==0){this.changeImage(this.currentImageIndex-1)
}}else{if(n==="n"||h===k){if(this.currentImageIndex!==this.album.length-1){this.changeImage(this.currentImageIndex+1)
}}}}};
b.prototype.end=function(){this.disableKeyboardNav();
a(window).off("resize",this.sizeOverlay);
this.$lightbox.fadeOut(this.options.fadeDuration);
this.$overlay.fadeOut(this.options.fadeDuration);
return a("select, object, embed").css({visibility:"visible"})
};
return b
})();
a(function(){var d,c;
c=new f();
return d=new e(c)
})
}).call(this);
/*! DataTables 1.10.2
 * Ã‚Â©2008-2014 SpryMedia Ltd - datatables.net/license
 */
(function(b,a,c){(function(d){if(typeof define==="function"&&define.amd){define("datatables",["jquery"],d)
}else{if(typeof exports==="object"){d(require("jquery"))
}else{if(jQuery&&!jQuery.fn.dataTable){d(jQuery)
}}}}(function(bF){var O;
var J;
var K;
var bk;
var aB;
var a7={};
var X=/[\r\n]/g;
var aV=/<.*?>/g;
var am=/^[\w\+\-]/;
var bv=/[\w\+\-]$/;
var aD=new RegExp("(\\"+["/",".","*","+","?","|","(",")","[","]","{","}","\\","$","^","-"].join("|\\")+")","g");
var bG=/[',$Ã‚Â£Ã¢â€šÂ¬Ã‚Â¥%\u2009\u202F]/g;
var bB=function(bR){return !bR||bR===true||bR==="-"?true:false
};
var G=function(bS){var bR=parseInt(bS,10);
return !isNaN(bR)&&isFinite(bS)?bR:null
};
var bD=function(bS,bR){if(!a7[bR]){a7[bR]=new RegExp(n(bR),"g")
}return typeof bS==="string"?bS.replace(/\./g,"").replace(a7[bR],"."):bS
};
var aj=function(bU,bR,bT){var bS=typeof bU==="string";
if(bR&&bS){bU=bD(bU,bR)
}if(bT&&bS){bU=bU.replace(bG,"")
}return bB(bU)||(!isNaN(parseFloat(bU))&&isFinite(bU))
};
var bM=function(bR){return bB(bR)||typeof bR==="string"
};
var k=function(bU,bR,bT){if(bB(bU)){return true
}var bS=bM(bU);
return !bS?null:aj(E(bU),bR,bT)?true:null
};
var au=function(bS,bW,bV){var bT=[];
var bU=0,bR=bS.length;
if(bV!==c){for(;
bU<bR;
bU++){if(bS[bU]&&bS[bU][bW]){bT.push(bS[bU][bW][bV])
}}}else{for(;
bU<bR;
bU++){if(bS[bU]){bT.push(bS[bU][bW])
}}}return bT
};
var v=function(bT,bR,bX,bW){var bU=[];
var bV=0,bS=bR.length;
if(bW!==c){for(;
bV<bS;
bV++){bU.push(bT[bR[bV]][bX][bW])
}}else{for(;
bV<bS;
bV++){bU.push(bT[bR[bV]][bX])
}}return bU
};
var bg=function(bR,bV){var bT=[];
var bS;
if(bV===c){bV=0;
bS=bR
}else{bS=bV;
bV=bR
}for(var bU=bV;
bU<bS;
bU++){bT.push(bU)
}return bT
};
var E=function(bR){return bR.replace(aV,"")
};
var aH=function(bX){var bU=[],bW,bV,bR=bX.length,bT,bS=0;
again:for(bV=0;
bV<bR;
bV++){bW=bX[bV];
for(bT=0;
bT<bS;
bT++){if(bU[bT]===bW){continue again
}}bU.push(bW);
bS++
}return bU
};
function U(bV){var bU="a aa ai ao as b fn i m o s ",bR,bT,bS={};
bF.each(bV,function(bW,bX){bR=bW.match(/^([^A-Z]+?)([A-Z])/);
if(bR&&bU.indexOf(bR[1]+" ")!==-1){bT=bW.replace(bR[0],bR[2].toLowerCase());
bS[bT]=bW;
if(bR[1]==="o"){U(bV[bW])
}}});
bV._hungarianMap=bS
}function ab(bU,bR,bT){if(!bU._hungarianMap){U(bU)
}var bS;
bF.each(bR,function(bV,bW){bS=bU._hungarianMap[bV];
if(bS!==c&&(bT||bR[bS]===c)){if(bS.charAt(0)==="o"){if(!bR[bS]){bR[bS]={}
}bF.extend(true,bR[bS],bR[bV]);
ab(bU[bS],bR[bS],bT)
}else{bR[bS]=bR[bV]
}}})
}function aT(bU){var bT=O.defaults.oLanguage;
var bS=bU.sZeroRecords;
if(!bU.sEmptyTable&&bS&&bT.sEmptyTable==="No data available in table"){S(bU,bU,"sZeroRecords","sEmptyTable")
}if(!bU.sLoadingRecords&&bS&&bT.sLoadingRecords==="Loading..."){S(bU,bU,"sZeroRecords","sLoadingRecords")
}if(bU.sInfoThousands){bU.sThousands=bU.sInfoThousands
}var bR=bU.sDecimal;
if(bR){br(bR)
}}var aN=function(bT,bS,bR){if(bT[bS]!==c){bT[bR]=bT[bS]
}};
function a4(bU){aN(bU,"ordering","bSort");
aN(bU,"orderMulti","bSortMulti");
aN(bU,"orderClasses","bSortClasses");
aN(bU,"orderCellsTop","bSortCellsTop");
aN(bU,"order","aaSorting");
aN(bU,"orderFixed","aaSortingFixed");
aN(bU,"paging","bPaginate");
aN(bU,"pagingType","sPaginationType");
aN(bU,"pageLength","iDisplayLength");
aN(bU,"searching","bFilter");
var bT=bU.aoSearchCols;
if(bT){for(var bS=0,bR=bT.length;
bS<bR;
bS++){if(bT[bS]){ab(O.models.oSearch,bT[bS])
}}}}function Y(bR){aN(bR,"orderable","bSortable");
aN(bR,"orderData","aDataSort");
aN(bR,"orderSequence","asSorting");
aN(bR,"orderDataType","sortDataType")
}function be(bS){var bR=bS.oBrowser;
var bU=bF("<div/>").css({position:"absolute",top:0,left:0,height:1,width:1,overflow:"hidden"}).append(bF("<div/>").css({position:"absolute",top:1,left:1,width:100,overflow:"scroll"}).append(bF('<div class="test"/>').css({width:"100%",height:10}))).appendTo("body");
var bT=bU.find(".test");
bR.bScrollOversize=bT[0].offsetWidth===100;
bR.bScrollbarLeft=bT.offset().left!==1;
bU.remove()
}function aW(bV,bX,bZ,bR,bT,bS){var bU=bR,bY,bW=false;
if(bZ!==c){bY=bZ;
bW=true
}while(bU!==bT){if(!bV.hasOwnProperty(bU)){continue
}bY=bW?bX(bY,bV[bU],bU,bV):bV[bU];
bW=true;
bU+=bS
}return bY
}function P(bV,bU){var bW=O.defaults.column;
var bR=bV.aoColumns.length;
var bT=bF.extend({},O.models.oColumn,bW,{nTh:bU?bU:a.createElement("th"),sTitle:bW.sTitle?bW.sTitle:bU?bU.innerHTML:"",aDataSort:bW.aDataSort?bW.aDataSort:[bR],mData:bW.mData?bW.mData:bR,idx:bR});
bV.aoColumns.push(bT);
var bS=bV.aoPreSearchCols;
bS[bR]=bF.extend({},O.models.oSearch,bS[bR]);
a2(bV,bR,null)
}function a2(bT,b2,b1){var bX=bT.aoColumns[b2];
var bR=bT.oClasses;
var bS=bF(bX.nTh);
if(!bX.sWidthOrig){bX.sWidthOrig=bS.attr("width")||null;
var b3=(bS.attr("style")||"").match(/width:\s*(\d+[pxem%]+)/);
if(b3){bX.sWidthOrig=b3[1]
}}if(b1!==c&&b1!==null){Y(b1);
ab(O.defaults.column,b1);
if(b1.mDataProp!==c&&!b1.mData){b1.mData=b1.mDataProp
}if(b1.sType){bX._sManualType=b1.sType
}if(b1.className&&!b1.sClass){b1.sClass=b1.className
}bF.extend(bX,b1);
S(bX,b1,"sWidth","sWidthOrig");
if(typeof b1.iDataSort==="number"){bX.aDataSort=[b1.iDataSort]
}S(bX,b1,"aDataSort")
}var b0=bX.mData;
var bW=ao(b0);
var bZ=bX.mRender?ao(bX.mRender):null;
var bV=function(b4){return typeof b4==="string"&&b4.indexOf("@")!==-1
};
bX._bAttrSrc=bF.isPlainObject(b0)&&(bV(b0.sort)||bV(b0.type)||bV(b0.filter));
bX.fnGetData=function(b6,b5,b7){var b4=bW(b6,b5,c,b7);
return bZ&&b5?bZ(b4,b5,b6,b7):b4
};
bX.fnSetData=function(b4,b6,b5){return ax(b0)(b4,b6,b5)
};
if(!bT.oFeatures.bSort){bX.bSortable=false;
bS.addClass(bR.sSortableNone)
}var bU=bF.inArray("asc",bX.asSorting)!==-1;
var bY=bF.inArray("desc",bX.asSorting)!==-1;
if(!bX.bSortable||(!bU&&!bY)){bX.sSortingClass=bR.sSortableNone;
bX.sSortingClassJUI=""
}else{if(bU&&!bY){bX.sSortingClass=bR.sSortableAsc;
bX.sSortingClassJUI=bR.sSortJUIAscAllowed
}else{if(!bU&&bY){bX.sSortingClass=bR.sSortableDesc;
bX.sSortingClassJUI=bR.sSortJUIDescAllowed
}else{bX.sSortingClass=bR.sSortable;
bX.sSortingClassJUI=bR.sSortJUI
}}}}function aK(bV){if(bV.oFeatures.bAutoWidth!==false){var bU=bV.aoColumns;
bw(bV);
for(var bT=0,bS=bU.length;
bT<bS;
bT++){bU[bT].nTh.style.width=bU[bT].sWidth
}}var bR=bV.oScroll;
if(bR.sY!==""||bR.sX!==""){m(bV)
}M(bV,null,"column-sizing",[bV])
}function s(bT,bR){var bS=q(bT,"bVisible");
return typeof bS[bR]==="number"?bS[bR]:null
}function bJ(bT,bR){var bS=q(bT,"bVisible");
var bU=bF.inArray(bR,bS);
return bU!==-1?bU:null
}function aR(bR){return q(bR,"bVisible").length
}function q(bT,bS){var bR=[];
bF.map(bT.aoColumns,function(bV,bU){if(bV[bS]){bR.push(bU)
}});
return bR
}function x(bU){var bV=bU.aoColumns;
var bZ=bU.aoData;
var b1=O.ext.type.detect;
var b0,b4,bY,bS,bX,bW;
var bT,b2,b3,bR;
for(b0=0,b4=bV.length;
b0<b4;
b0++){bT=bV[b0];
bR=[];
if(!bT.sType&&bT._sManualType){bT.sType=bT._sManualType
}else{if(!bT.sType){for(bY=0,bS=b1.length;
bY<bS;
bY++){for(bX=0,bW=bZ.length;
bX<bW;
bX++){if(bR[bX]===c){bR[bX]=bu(bU,bX,b0,"type")
}b3=b1[bY](bR[bX],bU);
if(!b3||b3==="html"){break
}}if(b3){bT.sType=b3;
break
}}if(!bT.sType){bT.sType="string"
}}}}}function l(bS,b2,bT,b1){var bY,bU,bX,b3,bW,b0,bR;
var bV=bS.aoColumns;
if(b2){for(bY=b2.length-1;
bY>=0;
bY--){bR=b2[bY];
var bZ=bR.targets!==c?bR.targets:bR.aTargets;
if(!bF.isArray(bZ)){bZ=[bZ]
}for(bX=0,b3=bZ.length;
bX<b3;
bX++){if(typeof bZ[bX]==="number"&&bZ[bX]>=0){while(bV.length<=bZ[bX]){P(bS)
}b1(bZ[bX],bR)
}else{if(typeof bZ[bX]==="number"&&bZ[bX]<0){b1(bV.length+bZ[bX],bR)
}else{if(typeof bZ[bX]==="string"){for(bW=0,b0=bV.length;
bW<b0;
bW++){if(bZ[bX]=="_all"||bF(bV[bW].nTh).hasClass(bZ[bX])){b1(bW,bR)
}}}}}}}}if(bT){for(bY=0,bU=bT.length;
bY<bU;
bY++){b1(bY,bT[bY])
}}}function aP(bS,b1,b0,bX){var bZ=bS.aoData.length;
var bR=bF.extend(true,{},O.models.oRow,{src:b0?"dom":"data"});
bR._aData=b1;
bS.aoData.push(bR);
var bW,bU;
var bV=bS.aoColumns;
for(var bY=0,bT=bV.length;
bY<bT;
bY++){if(b0){bm(bS,bZ,bY,bu(bS,bZ,bY))
}bV[bY].sType=null
}bS.aiDisplayMaster.push(bZ);
if(b0||!bS.oFeatures.bDeferRender){Q(bS,bZ,b0,bX)
}return bZ
}function bQ(bS,bR){var bT;
if(!(bR instanceof bF)){bR=bF(bR)
}return bR.map(function(bU,bV){bT=bf(bS,bV);
return aP(bS,bT.data,bV,bT.cells)
})
}function bs(bR,bS){return(bS._DT_RowIndex!==c)?bS._DT_RowIndex:null
}function a0(bR,bS,bT){return bF.inArray(bT,bR.aoData[bS].anCells)
}function bu(bU,bR,bV,bX){var bY=bU.iDraw;
var bS=bU.aoColumns[bV];
var bT=bU.aoData[bR]._aData;
var bZ=bS.sDefaultContent;
var bW=bS.fnGetData(bT,bX,{settings:bU,row:bR,col:bV});
if(bW===c){if(bU.iDrawError!=bY&&bZ===null){aO(bU,0,"Requested unknown parameter "+(typeof bS.mData=="function"?"{function}":"'"+bS.mData+"'")+" for row "+bR,4);
bU.iDrawError=bY
}return bZ
}if((bW===bT||bW===null)&&bZ!==null){bW=bZ
}else{if(typeof bW==="function"){return bW.call(bT)
}}if(bW===null&&bX=="display"){return""
}return bW
}function bm(bS,bT,bW,bV){var bR=bS.aoColumns[bW];
var bU=bS.aoData[bT]._aData;
bR.fnSetData(bU,bV,{settings:bS,row:bT,col:bW})
}var L=/\[.*?\]$/;
var f=/\(\)$/;
function ak(bR){return bF.map(bR.match(/(\\.|[^\.])+/g),function(bS){return bS.replace(/\\./g,".")
})
}function ao(bS){if(bF.isPlainObject(bS)){var bT={};
bF.each(bS,function(bU,bV){if(bV){bT[bU]=ao(bV)
}});
return function(bW,bV,bY,bX){var bU=bT[bV]||bT._;
return bU!==c?bU(bW,bV,bY,bX):bW
}
}else{if(bS===null){return function(bU){return bU
}
}else{if(typeof bS==="function"){return function(bV,bU,bX,bW){return bS(bV,bU,bX,bW)
}
}else{if(typeof bS==="string"&&(bS.indexOf(".")!==-1||bS.indexOf("[")!==-1||bS.indexOf("(")!==-1)){var bR=function(b2,b3,bU){var b5,bY,b0,bX;
if(bU!==""){var b4=ak(bU);
for(var b1=0,bW=b4.length;
b1<bW;
b1++){b5=b4[b1].match(L);
bY=b4[b1].match(f);
if(b5){b4[b1]=b4[b1].replace(L,"");
if(b4[b1]!==""){b2=b2[b4[b1]]
}b0=[];
b4.splice(0,b1+1);
bX=b4.join(".");
for(var bZ=0,b6=b2.length;
bZ<b6;
bZ++){b0.push(bR(b2[bZ],b3,bX))
}var bV=b5[0].substring(1,b5[0].length-1);
b2=(bV==="")?b0:b0.join(bV);
break
}else{if(bY){b4[b1]=b4[b1].replace(f,"");
b2=b2[b4[b1]]();
continue
}}if(b2===null||b2[b4[b1]]===c){return c
}b2=b2[b4[b1]]
}}return b2
};
return function(bV,bU){return bR(bV,bU,bS)
}
}else{return function(bV,bU){return bV[bS]
}
}}}}}function ax(bS){if(bF.isPlainObject(bS)){return ax(bS._)
}else{if(bS===null){return function(){}
}else{if(typeof bS==="function"){return function(bT,bV,bU){bS(bT,"set",bV,bU)
}
}else{if(typeof bS==="string"&&(bS.indexOf(".")!==-1||bS.indexOf("[")!==-1||bS.indexOf("(")!==-1)){var bR=function(b1,bX,bT){var b4=ak(bT),b2;
var b3=b4[b4.length-1];
var b5,bY,bU,bW;
for(var b0=0,bV=b4.length-1;
b0<bV;
b0++){b5=b4[b0].match(L);
bY=b4[b0].match(f);
if(b5){b4[b0]=b4[b0].replace(L,"");
b1[b4[b0]]=[];
b2=b4.slice();
b2.splice(0,b0+1);
bW=b2.join(".");
for(var bZ=0,b6=bX.length;
bZ<b6;
bZ++){bU={};
bR(bU,bX[bZ],bW);
b1[b4[b0]].push(bU)
}return
}else{if(bY){b4[b0]=b4[b0].replace(f,"");
b1=b1[b4[b0]](bX)
}}if(b1[b4[b0]]===null||b1[b4[b0]]===c){b1[b4[b0]]={}
}b1=b1[b4[b0]]
}if(b3.match(f)){b1=b1[b3.replace(f,"")](bX)
}else{b1[b3.replace(L,"")]=bX
}};
return function(bT,bU){return bR(bT,bU,bS)
}
}else{return function(bT,bU){bT[bS]=bU
}
}}}}}function bH(bR){return au(bR.aoData,"_aData")
}function bi(bR){bR.aoData.length=0;
bR.aiDisplayMaster.length=0;
bR.aiDisplay.length=0
}function a5(bS,bU,bW){var bV=-1;
for(var bT=0,bR=bS.length;
bT<bR;
bT++){if(bS[bT]==bU){bV=bT
}else{if(bS[bT]>bU){bS[bT]--
}}}if(bV!=-1&&bW===c){bS.splice(bV,1)
}}function aI(bT,bS,bR,bU){var b0=bT.aoData[bS];
var bV,bY;
if(bR==="dom"||((!bR||bR==="auto")&&b0.src==="dom")){b0._aData=bf(bT,b0).data
}else{var bZ=b0.anCells;
var bX;
if(bZ){for(bV=0,bY=bZ.length;
bV<bY;
bV++){bX=bZ[bV];
while(bX.childNodes.length){bX.removeChild(bX.firstChild)
}bZ[bV].innerHTML=bu(bT,bS,bV,"display")
}}}b0._aSortData=null;
b0._aFilterData=null;
var bW=bT.aoColumns;
if(bU!==c){bW[bU].sType=null
}else{for(bV=0,bY=bW.length;
bV<bY;
bV++){bW[bV].sType=null
}}ad(b0)
}function bf(bY,b5){var b3=[],b1=[],bX=b5.firstChild,bR,bU,bT,b0=0,bV,bW=bY.aoColumns;
var b2=function(b9,b7,ca){if(typeof b9==="string"){var b6=b9.indexOf("@");
if(b6!==-1){var b8=b9.substring(b6+1);
bT["@"+b8]=ca.getAttribute(b8)
}}};
var b4=function(b6){bU=bW[b0];
bV=bF.trim(b6.innerHTML);
if(bU&&bU._bAttrSrc){bT={display:bV};
b2(bU.mData.sort,bT,b6);
b2(bU.mData.type,bT,b6);
b2(bU.mData.filter,bT,b6);
b3.push(bT)
}else{b3.push(bV)
}b0++
};
if(bX){while(bX){bR=bX.nodeName.toUpperCase();
if(bR=="TD"||bR=="TH"){b4(bX);
b1.push(bX)
}bX=bX.nextSibling
}}else{b1=b5.anCells;
for(var bZ=0,bS=b1.length;
bZ<bS;
bZ++){b4(b1[bZ])
}}return{data:b3,cells:b1}
}function Q(bS,bZ,bR,bX){var b2=bS.aoData[bZ],bV=b2._aData,b1=[],b0,bW,bU,bY,bT;
if(b2.nTr===null){b0=bR||a.createElement("tr");
b2.nTr=b0;
b2.anCells=b1;
b0._DT_RowIndex=bZ;
ad(b2);
for(bY=0,bT=bS.aoColumns.length;
bY<bT;
bY++){bU=bS.aoColumns[bY];
bW=bR?bX[bY]:a.createElement(bU.sCellType);
b1.push(bW);
if(!bR||bU.mRender||bU.mData!==bY){bW.innerHTML=bu(bS,bZ,bY,"display")
}if(bU.sClass){bW.className+=" "+bU.sClass
}if(bU.bVisible&&!bR){b0.appendChild(bW)
}else{if(!bU.bVisible&&bR){bW.parentNode.removeChild(bW)
}}if(bU.fnCreatedCell){bU.fnCreatedCell.call(bS.oInstance,bW,bu(bS,bZ,bY),bV,bZ,bY)
}}M(bS,"aoRowCreatedCallback",null,[b0,bV,bZ])
}b2.nTr.setAttribute("role","row")
}function ad(bU){var bT=bU.nTr;
var bS=bU._aData;
if(bT){if(bS.DT_RowId){bT.id=bS.DT_RowId
}if(bS.DT_RowClass){var bR=bS.DT_RowClass.split(" ");
bU.__rowc=bU.__rowc?aH(bU.__rowc.concat(bR)):bR;
bF(bT).removeClass(bU.__rowc.join(" ")).addClass(bS.DT_RowClass)
}if(bS.DT_RowData){bF(bT).data(bS.DT_RowData)
}}}function aM(bR){var bV,b0,bZ,b2,bU;
var bW=bR.nTHead;
var bX=bR.nTFoot;
var bY=bF("th, td",bW).length===0;
var bT=bR.oClasses;
var bS=bR.aoColumns;
if(bY){b2=bF("<tr/>").appendTo(bW)
}for(bV=0,b0=bS.length;
bV<b0;
bV++){bU=bS[bV];
bZ=bF(bU.nTh).addClass(bU.sClass);
if(bY){bZ.appendTo(b2)
}if(bR.oFeatures.bSort){bZ.addClass(bU.sSortingClass);
if(bU.bSortable!==false){bZ.attr("tabindex",bR.iTabIndex).attr("aria-controls",bR.sTableId);
D(bR,bU.nTh,bV)
}}if(bU.sTitle!=bZ.html()){bZ.html(bU.sTitle)
}T(bR,"header")(bR,bZ,bU,bT)
}if(bY){aw(bR.aoHeader,bW)
}bF(bW).find(">tr").attr("role","row");
bF(bW).find(">tr>th, >tr>td").addClass(bT.sHeaderTH);
bF(bX).find(">tr>th, >tr>td").addClass(bT.sFooterTH);
if(bX!==null){var b1=bR.aoFooter[0];
for(bV=0,b0=b1.length;
bV<b0;
bV++){bU=bS[bV];
bU.nTf=b1[bV].cell;
if(bU.sClass){bF(bU.nTf).addClass(bU.sClass)
}}}}function a6(bU,b3,b6){var bZ,bW,bY,b2,bX,b0,bV,b5;
var bT=[];
var b1=[];
var bR=bU.aoColumns.length;
var bS,b4;
if(!b3){return
}if(b6===c){b6=false
}for(bZ=0,bW=b3.length;
bZ<bW;
bZ++){bT[bZ]=b3[bZ].slice();
bT[bZ].nTr=b3[bZ].nTr;
for(bY=bR-1;
bY>=0;
bY--){if(!bU.aoColumns[bY].bVisible&&!b6){bT[bZ].splice(bY,1)
}}b1.push([])
}for(bZ=0,bW=bT.length;
bZ<bW;
bZ++){b5=bT[bZ].nTr;
if(b5){while((bV=b5.firstChild)){b5.removeChild(bV)
}}for(bY=0,b2=bT[bZ].length;
bY<b2;
bY++){bS=1;
b4=1;
if(b1[bZ][bY]===c){b5.appendChild(bT[bZ][bY].cell);
b1[bZ][bY]=1;
while(bT[bZ+bS]!==c&&bT[bZ][bY].cell==bT[bZ+bS][bY].cell){b1[bZ+bS][bY]=1;
bS++
}while(bT[bZ][bY+b4]!==c&&bT[bZ][bY].cell==bT[bZ][bY+b4].cell){for(bX=0;
bX<bS;
bX++){b1[bZ+bX][bY+b4]=1
}b4++
}bF(bT[bZ][bY].cell).attr("rowspan",bS).attr("colspan",b4)
}}}}function a3(bT){var cd=M(bT,"aoPreDrawCallback","preDraw",[bT]);
if(bF.inArray(false,cd)!==-1){y(bT,false);
return
}var cc,b8,b4;
var bX=[];
var cf=0;
var b1=bT.asStripeClasses;
var b6=b1.length;
var b2=bT.aoOpenRows.length;
var b7=bT.oLanguage;
var b3=bT.iInitDisplayStart;
var cb=A(bT)=="ssp";
var bW=bT.aiDisplay;
bT.bDrawing=true;
if(b3!==c&&b3!==-1){bT._iDisplayStart=cb?b3:b3>=bT.fnRecordsDisplay()?0:b3;
bT.iInitDisplayStart=-1
}var bS=bT._iDisplayStart;
var bU=bT.fnDisplayEnd();
if(bT.bDeferLoading){bT.bDeferLoading=false;
bT.iDraw++;
y(bT,false)
}else{if(!cb){bT.iDraw++
}else{if(!bT.bDestroying&&!af(bT)){return
}}}if(bW.length!==0){var bV=cb?0:bS;
var bR=cb?bT.aoData.length:bU;
for(var b9=bV;
b9<bR;
b9++){var bZ=bW[b9];
var b0=bT.aoData[bZ];
if(b0.nTr===null){Q(bT,bZ)
}var ce=b0.nTr;
if(b6!==0){var ca=b1[cf%b6];
if(b0._sRowStripe!=ca){bF(ce).removeClass(b0._sRowStripe).addClass(ca);
b0._sRowStripe=ca
}}M(bT,"aoRowCallback",null,[ce,b0._aData,cf,b9]);
bX.push(ce);
cf++
}}else{var b5=b7.sZeroRecords;
if(bT.iDraw==1&&A(bT)=="ajax"){b5=b7.sLoadingRecords
}else{if(b7.sEmptyTable&&bT.fnRecordsTotal()===0){b5=b7.sEmptyTable
}}bX[0]=bF("<tr/>",{"class":b6?b1[0]:""}).append(bF("<td />",{valign:"top",colSpan:aR(bT),"class":bT.oClasses.sRowEmpty}).html(b5))[0]
}M(bT,"aoHeaderCallback","header",[bF(bT.nTHead).children("tr")[0],bH(bT),bS,bU,bW]);
M(bT,"aoFooterCallback","footer",[bF(bT.nTFoot).children("tr")[0],bH(bT),bS,bU,bW]);
var bY=bF(bT.nTBody);
bY.children().detach();
bY.append(bF(bX));
M(bT,"aoDrawCallback","draw",[bT]);
bT.bSorted=false;
bT.bFiltered=false;
bT.bDrawing=false
}function ai(bV,bS){var bU=bV.oFeatures,bR=bU.bSort,bT=bU.bFilter;
if(bR){z(bV)
}if(bT){w(bV,bV.oPreviousSearch)
}else{bV.aiDisplay=bV.aiDisplayMaster.slice()
}if(bS!==true){bV._iDisplayStart=0
}bV._drawHold=bS;
a3(bV);
bV._drawHold=false
}function j(bV){var b8=bV.oClasses;
var b5=bF(bV.nTable);
var bX=bF("<div/>").insertBefore(b5);
var bW=bV.oFeatures;
var bS=bF("<div/>",{id:bV.sTableId+"_wrapper","class":b8.sWrapper+(bV.nTFoot?"":" "+b8.sNoFooter)});
bV.nHolding=bX[0];
bV.nTableWrapper=bS[0];
bV.nTableReinsertBefore=bV.nTable.nextSibling;
var bY=bV.sDom.split("");
var b3,bZ,bU,b9,b7,b1;
for(var b4=0;
b4<bY.length;
b4++){b3=null;
bZ=bY[b4];
if(bZ=="<"){bU=bF("<div/>")[0];
b9=bY[b4+1];
if(b9=="'"||b9=='"'){b7="";
b1=2;
while(bY[b4+b1]!=b9){b7+=bY[b4+b1];
b1++
}if(b7=="H"){b7=b8.sJUIHeader
}else{if(b7=="F"){b7=b8.sJUIFooter
}}if(b7.indexOf(".")!=-1){var b2=b7.split(".");
bU.id=b2[0].substr(1,b2[0].length-1);
bU.className=b2[1]
}else{if(b7.charAt(0)=="#"){bU.id=b7.substr(1,b7.length-1)
}else{bU.className=b7
}}b4+=b1
}bS.append(bU);
bS=bF(bU)
}else{if(bZ==">"){bS=bS.parent()
}else{if(bZ=="l"&&bW.bPaginate&&bW.bLengthChange){b3=aS(bV)
}else{if(bZ=="f"&&bW.bFilter){b3=r(bV)
}else{if(bZ=="r"&&bW.bProcessing){b3=bA(bV)
}else{if(bZ=="t"){b3=bz(bV)
}else{if(bZ=="i"&&bW.bInfo){b3=g(bV)
}else{if(bZ=="p"&&bW.bPaginate){b3=aA(bV)
}else{if(O.ext.feature.length!==0){var b6=O.ext.feature;
for(var b0=0,bR=b6.length;
b0<bR;
b0++){if(bZ==b6[b0].cFeature){b3=b6[b0].fnInit(bV);
break
}}}}}}}}}}}if(b3){var bT=bV.aanFeatures;
if(!bT[bZ]){bT[bZ]=[]
}bT[bZ].push(b3);
bS.append(b3)
}}bX.replaceWith(bS)
}function aw(bX,bS){var b4=bF(bS).children("tr");
var b3,b1;
var bZ,bW,bV,bT,b5,b0,bY,b6,bR;
var b2;
var bU=function(b7,ca,b9){var b8=b7[ca];
while(b8[b9]){b9++
}return b9
};
bX.splice(0,bX.length);
for(bZ=0,bT=b4.length;
bZ<bT;
bZ++){bX.push([])
}for(bZ=0,bT=b4.length;
bZ<bT;
bZ++){b3=b4[bZ];
bY=0;
b1=b3.firstChild;
while(b1){if(b1.nodeName.toUpperCase()=="TD"||b1.nodeName.toUpperCase()=="TH"){b6=b1.getAttribute("colspan")*1;
bR=b1.getAttribute("rowspan")*1;
b6=(!b6||b6===0||b6===1)?1:b6;
bR=(!bR||bR===0||bR===1)?1:bR;
b0=bU(bX,bZ,bY);
b2=b6===1?true:false;
for(bV=0;
bV<b6;
bV++){for(bW=0;
bW<bR;
bW++){bX[bZ+bW][b0+bV]={cell:b1,unique:b2};
bX[bZ+bW].nTr=b3
}}}b1=b1.nextSibling
}}}function bh(bY,bS,bW){var bT=[];
if(!bW){bW=bY.aoHeader;
if(bS){bW=[];
aw(bW,bS)
}}for(var bV=0,bR=bW.length;
bV<bR;
bV++){for(var bU=0,bX=bW[bV].length;
bU<bX;
bU++){if(bW[bV][bU].unique&&(!bT[bU]||!bY.bSortCellsTop)){bT[bU]=bW[bV][bU].cell
}}}return bT
}function av(bS,bT,bX){M(bS,"aoServerParams","serverParams",[bT]);
if(bT&&bF.isArray(bT)){var bU={};
var bV=/(.*?)\[\]$/;
bF.each(bT,function(b3,b4){var b2=b4.name.match(bV);
if(b2){var b1=b2[0];
if(!bU[b1]){bU[b1]=[]
}bU[b1].push(b4.value)
}else{bU[b4.name]=b4.value
}});
bT=bU
}var bR;
var bY=bS.ajax;
var bZ=bS.oInstance;
if(bF.isPlainObject(bY)&&bY.data){bR=bY.data;
var b0=bF.isFunction(bR)?bR(bT):bR;
bT=bF.isFunction(bR)&&b0?b0:bF.extend(true,bT,b0);
delete bY.data
}var bW={data:bT,success:function(b2){var b1=b2.error||b2.sError;
if(b1){bS.oApi._fnLog(bS,0,b1)
}bS.json=b2;
M(bS,null,"xhr",[bS,b2]);
bX(b2)
},dataType:"json",cache:false,type:bS.sServerMethod,error:function(b4,b1,b3){var b2=bS.oApi._fnLog;
if(b1=="parsererror"){b2(bS,0,"Invalid JSON response",1)
}else{if(b4.readyState===4){b2(bS,0,"Ajax error",7)
}}y(bS,false)
}};
bS.oAjaxData=bT;
M(bS,null,"preXhr",[bS,bT]);
if(bS.fnServerData){bS.fnServerData.call(bZ,bS.sAjaxSource,bF.map(bT,function(b2,b1){return{name:b1,value:b2}
}),bX,bS)
}else{if(bS.sAjaxSource||typeof bY==="string"){bS.jqXHR=bF.ajax(bF.extend(bW,{url:bY||bS.sAjaxSource}))
}else{if(bF.isFunction(bY)){bS.jqXHR=bY.call(bZ,bT,bX,bS)
}else{bS.jqXHR=bF.ajax(bF.extend(bW,bY));
bY.data=bR
}}}}function af(bR){if(bR.bAjaxDataGet){bR.iDraw++;
y(bR,true);
av(bR,bL(bR),function(bS){W(bR,bS)
});
return false
}return true
}function bL(bW){var bX=bW.aoColumns,b3=bX.length,bT=bW.oFeatures,bR=bW.oPreviousSearch,b2=bW.aoPreSearchCols,b0,bZ=[],bS,bV,b5,bY=aJ(bW),b7=bW._iDisplayStart,b1=bT.bPaginate!==false?bW._iDisplayLength:-1;
var bU=function(b8,b9){bZ.push({name:b8,value:b9})
};
bU("sEcho",bW.iDraw);
bU("iColumns",b3);
bU("sColumns",au(bX,"sName").join(","));
bU("iDisplayStart",b7);
bU("iDisplayLength",b1);
var b4={draw:bW.iDraw,columns:[],order:[],start:b7,length:b1,search:{value:bR.sSearch,regex:bR.bRegex}};
for(b0=0;
b0<b3;
b0++){bV=bX[b0];
b5=b2[b0];
bS=typeof bV.mData=="function"?"function":bV.mData;
b4.columns.push({data:bS,name:bV.sName,searchable:bV.bSearchable,orderable:bV.bSortable,search:{value:b5.sSearch,regex:b5.bRegex}});
bU("mDataProp_"+b0,bS);
if(bT.bFilter){bU("sSearch_"+b0,b5.sSearch);
bU("bRegex_"+b0,b5.bRegex);
bU("bSearchable_"+b0,bV.bSearchable)
}if(bT.bSort){bU("bSortable_"+b0,bV.bSortable)
}}if(bT.bFilter){bU("sSearch",bR.sSearch);
bU("bRegex",bR.bRegex)
}if(bT.bSort){bF.each(bY,function(b8,b9){b4.order.push({column:b9.col,dir:b9.dir});
bU("iSortCol_"+b8,b9.col);
bU("sSortDir_"+b8,b9.dir)
});
bU("iSortingCols",bY.length)
}var b6=O.ext.legacy.ajax;
if(b6===null){return bW.sAjaxSource?bZ:b4
}return b6?bZ:b4
}function W(bS,bZ){var bX=function(b0,b1){return bZ[b0]!==c?bZ[b0]:bZ[b1]
};
var bV=bX("sEcho","draw");
var bW=bX("iTotalRecords","recordsTotal");
var bR=bX("iTotalDisplayRecords","recordsFiltered");
if(bV){if(bV*1<bS.iDraw){return
}bS.iDraw=bV*1
}bi(bS);
bS._iRecordsTotal=parseInt(bW,10);
bS._iRecordsDisplay=parseInt(bR,10);
var bT=bt(bS,bZ);
for(var bU=0,bY=bT.length;
bU<bY;
bU++){aP(bS,bT[bU])
}bS.aiDisplay=bS.aiDisplayMaster.slice();
bS.bAjaxDataGet=false;
a3(bS);
if(!bS._bInitComplete){aC(bS,bZ)
}bS.bAjaxDataGet=true;
y(bS,false)
}function bt(bT,bS){var bR=bF.isPlainObject(bT.ajax)&&bT.ajax.dataSrc!==c?bT.ajax.dataSrc:bT.sAjaxDataProp;
if(bR==="data"){return bS.aaData||bS[bR]
}return bR!==""?ao(bR)(bS):bS
}function r(bU){var bV=bU.oClasses;
var bT=bU.sTableId;
var bX=bU.oLanguage;
var bW=bU.oPreviousSearch;
var bS=bU.aanFeatures;
var b1='<input type="search" class="'+bV.sFilterInput+'"/>';
var b0=bX.sSearch;
b0=b0.match(/_INPUT_/)?b0.replace("_INPUT_",b1):b0+b1;
var bR=bF("<div/>",{id:!bS.f?bT+"_filter":null,"class":bV.sFilter}).append(bF("<label/>").append(b0));
var bZ=function(){var b3=bS.f;
var b2=!this.value?"":this.value;
if(b2!=bW.sSearch){w(bU,{sSearch:b2,bRegex:bW.bRegex,bSmart:bW.bSmart,bCaseInsensitive:bW.bCaseInsensitive});
bU._iDisplayStart=0;
a3(bU)
}};
var bY=bF("input",bR).val(bW.sSearch).attr("placeholder",bX.sSearchPlaceholder).bind("keyup.DT search.DT input.DT paste.DT cut.DT",A(bU)==="ssp"?al(bZ,400):bZ).bind("keypress.DT",function(b2){if(b2.keyCode==13){return false
}}).attr("aria-controls",bT);
bF(bU.nTable).on("search.dt.DT",function(b3,b2){if(bU===b2){try{if(bY[0]!==a.activeElement){bY.val(bW.sSearch)
}}catch(b4){}}});
return bR[0]
}function w(bU,bY,bX){var bT=bU.oPreviousSearch;
var bW=bU.aoPreSearchCols;
var bV=function(bZ){bT.sSearch=bZ.sSearch;
bT.bRegex=bZ.bRegex;
bT.bSmart=bZ.bSmart;
bT.bCaseInsensitive=bZ.bCaseInsensitive
};
var bS=function(bZ){return bZ.bEscapeRegex!==c?!bZ.bEscapeRegex:bZ.bRegex
};
x(bU);
if(A(bU)!="ssp"){ay(bU,bY.sSearch,bX,bS(bY),bY.bSmart,bY.bCaseInsensitive);
bV(bY);
for(var bR=0;
bR<bW.length;
bR++){Z(bU,bW[bR].sSearch,bR,bS(bW[bR]),bW[bR].bSmart,bW[bR].bCaseInsensitive)
}ar(bU)
}else{bV(bY)
}bU.bFiltered=true;
M(bU,null,"search",[bU])
}function ar(bU){var bT=O.ext.search;
var bX=bU.aiDisplay;
var bZ,bS;
for(var bW=0,bY=bT.length;
bW<bY;
bW++){var b0=[];
for(var bV=0,bR=bX.length;
bV<bR;
bV++){bS=bX[bV];
bZ=bU.aoData[bS];
if(bT[bW](bU,bZ._aFilterData,bS,bZ._aData,bV)){b0.push(bS)
}}bX.length=0;
bX.push.apply(bX,b0)
}}function Z(bS,bR,bW,bZ,b0,bU){if(bR===""){return
}var bX;
var bY=bS.aiDisplay;
var bT=aX(bR,bZ,b0,bU);
for(var bV=bY.length-1;
bV>=0;
bV--){bX=bS.aoData[bY[bV]]._aFilterData[bW];
if(!bT.test(bX)){bY.splice(bV,1)
}}}function ay(bS,b0,bR,bZ,b2,bV){var bU=aX(b0,bZ,b2,bV);
var bT=bS.oPreviousSearch.sSearch;
var bX=bS.aiDisplayMaster;
var bY,b1,bW;
if(O.ext.search.length!==0){bR=true
}b1=aE(bS);
if(b0.length<=0){bS.aiDisplay=bX.slice()
}else{if(b1||bR||bT.length>b0.length||b0.indexOf(bT)!==0||bS.bSorted){bS.aiDisplay=bX.slice()
}bY=bS.aiDisplay;
for(bW=bY.length-1;
bW>=0;
bW--){if(!bU.test(bS.aoData[bY[bW]]._sFilterRow)){bY.splice(bW,1)
}}}}function aX(bT,bU,bV,bR){bT=bU?bT:n(bT);
if(bV){var bS=bF.map(bT.match(/"[^"]+"|[^ ]+/g)||"",function(bW){return bW.charAt(0)==='"'?bW.match(/^"(.*)"$/)[1]:bW
});
bT="^(?=.*?"+bS.join(")(?=.*?")+").*$"
}return new RegExp(bT,bR?"i":"")
}function n(bR){return bR.replace(aD,"\\$1")
}var e=bF("<div>")[0];
var aq=e.textContent!==c;
function aE(bS){var bU=bS.aoColumns;
var bT;
var bW,bV,b0,bR,bZ,bX,b2;
var b1=O.ext.type.search;
var bY=false;
for(bW=0,b0=bS.aoData.length;
bW<b0;
bW++){b2=bS.aoData[bW];
if(!b2._aFilterData){bZ=[];
for(bV=0,bR=bU.length;
bV<bR;
bV++){bT=bU[bV];
if(bT.bSearchable){bX=bu(bS,bW,bV,"filter");
if(b1[bT.sType]){bX=b1[bT.sType](bX)
}if(bX===null){bX=""
}if(typeof bX!=="string"&&bX.toString){bX=bX.toString()
}}else{bX=""
}if(bX.indexOf&&bX.indexOf("&")!==-1){e.innerHTML=bX;
bX=aq?e.textContent:e.innerText
}if(bX.replace){bX=bX.replace(/[\r\n]/g,"")
}bZ.push(bX)
}b2._aFilterData=bZ;
b2._sFilterRow=bZ.join("  ");
bY=true
}}return bY
}function by(bR){return{search:bR.sSearch,smart:bR.bSmart,regex:bR.bRegex,caseInsensitive:bR.bCaseInsensitive}
}function aF(bR){return{sSearch:bR.search,bSmart:bR.smart,bRegex:bR.regex,bCaseInsensitive:bR.caseInsensitive}
}function g(bS){var bT=bS.sTableId,bR=bS.aanFeatures.i,bU=bF("<div/>",{"class":bS.oClasses.sInfo,id:!bR?bT+"_info":null});
if(!bR){bS.aoDrawCallback.push({fn:at,sName:"information"});
bU.attr("role","status").attr("aria-live","polite");
bF(bS.nTable).attr("aria-describedby",bT+"_info")
}return bU[0]
}function at(bU){var bR=bU.aanFeatures.i;
if(bR.length===0){return
}var bT=bU.oLanguage,bS=bU._iDisplayStart+1,bV=bU.fnDisplayEnd(),bY=bU.fnRecordsTotal(),bX=bU.fnRecordsDisplay(),bW=bX?bT.sInfo:bT.sInfoEmpty;
if(bX!==bY){bW+=" "+bT.sInfoFiltered
}bW+=bT.sInfoPostFix;
bW=bp(bU,bW);
var bZ=bT.fnInfoCallback;
if(bZ!==null){bW=bZ.call(bU.oInstance,bU,bS,bV,bY,bX,bW)
}bF(bR).html(bW)
}function bp(bU,bW){var bS=bU.fnFormatNumber,bX=bU._iDisplayStart+1,bR=bU._iDisplayLength,bV=bU.fnRecordsDisplay(),bT=bR===-1;
return bW.replace(/_START_/g,bS.call(bU,bX)).replace(/_END_/g,bS.call(bU,bU.fnDisplayEnd())).replace(/_MAX_/g,bS.call(bU,bU.fnRecordsTotal())).replace(/_TOTAL_/g,bS.call(bU,bV)).replace(/_PAGE_/g,bS.call(bU,bT?1:Math.ceil(bX/bR))).replace(/_PAGES_/g,bS.call(bU,bT?1:Math.ceil(bV/bR)))
}function h(bX){var bU,bR,bY=bX.iInitDisplayStart;
var bT=bX.aoColumns,bW;
var bV=bX.oFeatures;
if(!bX.bInitialised){setTimeout(function(){h(bX)
},200);
return
}j(bX);
aM(bX);
a6(bX,bX.aoHeader);
a6(bX,bX.aoFooter);
y(bX,true);
if(bV.bAutoWidth){bw(bX)
}for(bU=0,bR=bT.length;
bU<bR;
bU++){bW=bT[bU];
if(bW.sWidth){bW.nTh.style.width=bK(bW.sWidth)
}}ai(bX);
var bS=A(bX);
if(bS!="ssp"){if(bS=="ajax"){av(bX,[],function(b0){var bZ=bt(bX,b0);
for(bU=0;
bU<bZ.length;
bU++){aP(bX,bZ[bU])
}bX.iInitDisplayStart=bY;
ai(bX);
y(bX,false);
aC(bX,b0)
},bX)
}else{y(bX,false);
aC(bX)
}}}function aC(bS,bR){bS._bInitComplete=true;
if(bR){aK(bS)
}M(bS,"aoInitComplete","init",[bS,bR])
}function aU(bS,bT){var bR=parseInt(bT,10);
bS._iDisplayLength=bR;
bl(bS);
M(bS,null,"length",[bS,bR])
}function aS(bW){var bX=bW.oClasses,bU=bW.sTableId,bT=bW.aLengthMenu,bR=bF.isArray(bT[0]),bV=bR?bT[0]:bT,bZ=bR?bT[1]:bT;
var b0=bF("<select/>",{name:bU+"_length","aria-controls":bU,"class":bX.sLengthSelect});
for(var bY=0,b1=bV.length;
bY<b1;
bY++){b0[0][bY]=new Option(bZ[bY],bV[bY])
}var bS=bF("<div><label/></div>").addClass(bX.sLength);
if(!bW.aanFeatures.l){bS[0].id=bU+"_length"
}bS.children().append(bW.oLanguage.sLengthMenu.replace("_MENU_",b0[0].outerHTML));
bF("select",bS).val(bW._iDisplayLength).bind("change.DT",function(b2){aU(bW,bF(this).val());
a3(bW)
});
bF(bW.nTable).bind("length.dt.DT",function(b4,b3,b2){if(bW===b3){bF("select",bS).val(b2)
}});
return bS[0]
}function aA(bU){var bT=bU.sPaginationType,bW=O.ext.pager[bT],bS=typeof bW==="function",bX=function(bY){a3(bY)
},bV=bF("<div/>").addClass(bU.oClasses.sPaging+bT)[0],bR=bU.aanFeatures;
if(!bS){bW.fnInit(bU,bV,bX)
}if(!bR.p){bV.id=bU.sTableId+"_paginate";
bU.aoDrawCallback.push({fn:function(b1){if(bS){var bY=b1._iDisplayStart,b3=b1._iDisplayLength,bZ=b1.fnRecordsDisplay(),b6=b3===-1,b4=b6?0:Math.ceil(bY/b3),b0=b6?1:Math.ceil(bZ/b3),b5=bW(b4,b0),b2,b7;
for(b2=0,b7=bR.p.length;
b2<b7;
b2++){T(b1,"pageButton")(b1,bR.p[b2],b2,b5,b4,b0)
}}else{bW.fnUpdate(b1,bX)
}},sName:"pagination"})
}return bV
}function aG(bT,bU,bX){var bW=bT._iDisplayStart,bR=bT._iDisplayLength,bS=bT.fnRecordsDisplay();
if(bS===0||bR===-1){bW=0
}else{if(typeof bU==="number"){bW=bU*bR;
if(bW>bS){bW=0
}}else{if(bU=="first"){bW=0
}else{if(bU=="previous"){bW=bR>=0?bW-bR:0;
if(bW<0){bW=0
}}else{if(bU=="next"){if(bW+bR<bS){bW+=bR
}}else{if(bU=="last"){bW=Math.floor((bS-1)/bR)*bR
}else{aO(bT,0,"Unknown paging action: "+bU,5)
}}}}}}var bV=bT._iDisplayStart!==bW;
bT._iDisplayStart=bW;
if(bV){M(bT,null,"page",[bT]);
if(bX){a3(bT)
}}return bV
}function bA(bR){return bF("<div/>",{id:!bR.aanFeatures.r?bR.sTableId+"_processing":null,"class":bR.oClasses.sProcessing}).html(bR.oLanguage.sProcessing).insertBefore(bR.nTable)[0]
}function y(bS,bR){if(bS.oFeatures.bProcessing){bF(bS.aanFeatures.r).css("display",bR?"block":"none")
}M(bS,null,"processing",[bS,bR])
}function bz(b5){var b4=bF(b5.nTable);
b4.attr("role","grid");
var bR=b5.oScroll;
if(bR.sX===""&&bR.sY===""){return b5.nTable
}var bZ=bR.sX;
var bY=bR.sY;
var b6=b5.oClasses;
var b3=b4.children("caption");
var bS=b3.length?b3[0]._captionSide:null;
var bV=bF(b4[0].cloneNode(false));
var b8=bF(b4[0].cloneNode(false));
var bX=b4.children("tfoot");
var b0="<div/>";
var bW=function(b9){return !b9?null:bK(b9)
};
if(bR.sX&&b4.attr("width")==="100%"){b4.removeAttr("width")
}if(!bX.length){bX=null
}var b2=bF(b0,{"class":b6.sScrollWrapper}).append(bF(b0,{"class":b6.sScrollHead}).css({overflow:"hidden",position:"relative",border:0,width:bZ?bW(bZ):"100%"}).append(bF(b0,{"class":b6.sScrollHeadInner}).css({"box-sizing":"content-box",width:bR.sXInner||"100%"}).append(bV.removeAttr("id").css("margin-left",0).append(b4.children("thead")))).append(bS==="top"?b3:null)).append(bF(b0,{"class":b6.sScrollBody}).css({overflow:"auto",height:bW(bY),width:bW(bZ)}).append(b4));
if(bX){b2.append(bF(b0,{"class":b6.sScrollFoot}).css({overflow:"hidden",border:0,width:bZ?bW(bZ):"100%"}).append(bF(b0,{"class":b6.sScrollFootInner}).append(b8.removeAttr("id").css("margin-left",0).append(b4.children("tfoot")))).append(bS==="bottom"?b3:null))
}var bT=b2.children();
var b1=bT[0];
var b7=bT[1];
var bU=bX?bT[2]:null;
if(bZ){bF(b7).scroll(function(b9){var ca=this.scrollLeft;
b1.scrollLeft=ca;
if(bX){bU.scrollLeft=ca
}})
}b5.nScrollHead=b1;
b5.nScrollBody=b7;
b5.nScrollFoot=bU;
b5.aoDrawCallback.push({fn:m,sName:"scrolling"});
return b2[0]
}function m(cr){var cm=cr.oScroll,bW=cm.sX,ch=cm.sXInner,bT=cm.sY,cf=cm.iBarWidth,ck=bF(cr.nScrollHead),b9=ck[0].style,bV=ck.children("div"),bS=bV[0].style,cu=bV.children("table"),b2=cr.nScrollBody,cd=bF(b2),b8=b2.style,cn=bF(cr.nScrollFoot),cc=cn.children("div"),ca=cc.children("table"),b0=bF(cr.nTHead),cb=bF(cr.nTable),ce=cb[0],bY=ce.style,b7=cr.nTFoot?bF(cr.nTFoot):null,bZ=cr.oBrowser,b4=bZ.bScrollOversize,bU,bX,cp,cs,b5,b3,cj=[],cl=[],cg=[],ct,b1,cv,b6=function(cw){var cx=cw.style;
cx.paddingTop="0";
cx.paddingBottom="0";
cx.borderTopWidth="0";
cx.borderBottomWidth="0";
cx.height=0
};
cb.children("thead, tfoot").remove();
b5=b0.clone().prependTo(cb);
bU=b0.find("tr");
cp=b5.find("tr");
b5.find("th, td").removeAttr("tabindex");
if(b7){b3=b7.clone().prependTo(cb);
bX=b7.find("tr");
cs=b3.find("tr")
}if(!bW){b8.width="100%";
ck[0].style.width="100%"
}bF.each(bh(cr,b5),function(cw,cx){ct=s(cr,cw);
cx.style.width=cr.aoColumns[ct].sWidth
});
if(b7){a8(function(cw){cw.style.width=""
},cs)
}if(cm.bCollapse&&bT!==""){b8.height=(cd[0].offsetHeight+b0[0].offsetHeight)+"px"
}cv=cb.outerWidth();
if(bW===""){bY.width="100%";
if(b4&&(cb.find("tbody").height()>b2.offsetHeight||cd.css("overflow-y")=="scroll")){bY.width=bK(cb.outerWidth()-cf)
}}else{if(ch!==""){bY.width=bK(ch)
}else{if(cv==cd.width()&&cd.height()<cb.height()){bY.width=bK(cv-cf);
if(cb.outerWidth()>cv-cf){bY.width=bK(cv)
}}else{bY.width=bK(cv)
}}}cv=cb.outerWidth();
a8(b6,cp);
a8(function(cw){cg.push(cw.innerHTML);
cj.push(bK(bF(cw).css("width")))
},cp);
a8(function(cx,cw){cx.style.width=cj[cw]
},bU);
bF(cp).height(0);
if(b7){a8(b6,cs);
a8(function(cw){cl.push(bK(bF(cw).css("width")))
},cs);
a8(function(cx,cw){cx.style.width=cl[cw]
},bX);
bF(cs).height(0)
}a8(function(cx,cw){cx.innerHTML='<div class="dataTables_sizing" style="height:0;overflow:hidden;">'+cg[cw]+"</div>";
cx.style.width=cj[cw]
},cp);
if(b7){a8(function(cx,cw){cx.innerHTML="";
cx.style.width=cl[cw]
},cs)
}if(cb.outerWidth()<cv){b1=((b2.scrollHeight>b2.offsetHeight||cd.css("overflow-y")=="scroll"))?cv+cf:cv;
if(b4&&(b2.scrollHeight>b2.offsetHeight||cd.css("overflow-y")=="scroll")){bY.width=bK(b1-cf)
}if(bW===""||ch!==""){aO(cr,1,"Possible column misalignment",6)
}}else{b1="100%"
}b8.width=bK(b1);
b9.width=bK(b1);
if(b7){cr.nScrollFoot.style.width=bK(b1)
}if(!bT){if(b4){b8.height=bK(ce.offsetHeight+cf)
}}if(bT&&cm.bCollapse){b8.height=bK(bT);
var cq=(bW&&ce.offsetWidth>b2.offsetWidth)?cf:0;
if(ce.offsetHeight<b2.offsetHeight){b8.height=bK(ce.offsetHeight+cq)
}}var bR=cb.outerWidth();
cu[0].style.width=bK(bR);
bS.width=bK(bR);
var ci=cb.height()>b2.clientHeight||cd.css("overflow-y")=="scroll";
var co="padding"+(bZ.bScrollbarLeft?"Left":"Right");
bS[co]=ci?cf+"px":"0px";
if(b7){ca[0].style.width=bK(bR);
cc[0].style.width=bK(bR);
cc[0].style[co]=ci?cf+"px":"0px"
}cd.scroll();
if((cr.bSorted||cr.bFiltered)&&!cr._drawHold){b2.scrollTop=0
}}function a8(bW,bT,bS){var bU=0,bV=0,bR=bT.length;
var bY,bX;
while(bV<bR){bY=bT[bV].firstChild;
bX=bS?bS[bV].firstChild:null;
while(bY){if(bY.nodeType===1){if(bS){bW(bY,bX,bU)
}else{bW(bY,bU)
}bU++
}bY=bY.nextSibling;
bX=bS?bX.nextSibling:null
}bV++
}}var a1=/<.*?>/g;
function bw(bX){var b5=bX.nTable,bU=bX.aoColumns,bT=bX.oScroll,b2=bT.sY,b3=bT.sX,bW=bT.sXInner,b9=bU.length,b7=q(bX,"bVisible"),b6=bF("th",bX.nTHead),b0=b5.getAttribute("width"),bZ=b5.parentNode,b8=false,b4,bV,ca,b1,bR;
for(b4=0;
b4<b7.length;
b4++){bV=bU[b7[b4]];
if(bV.sWidth!==null){bV.sWidth=ag(bV.sWidthOrig,bZ);
b8=true
}}if(!b8&&!b3&&!b2&&b9==aR(bX)&&b9==b6.length){for(b4=0;
b4<b9;
b4++){bU[b4].sWidth=bK(b6.eq(b4).width())
}}else{var bY=bF(b5).clone().empty().css("visibility","hidden").removeAttr("id").append(bF(bX.nTHead).clone(false)).append(bF(bX.nTFoot).clone(false)).append(bF("<tbody><tr/></tbody>"));
bY.find("tfoot th, tfoot td").css("width","");
var bS=bY.find("tbody tr");
b6=bh(bX,bY.find("thead")[0]);
for(b4=0;
b4<b7.length;
b4++){bV=bU[b7[b4]];
b6[b4].style.width=bV.sWidthOrig!==null&&bV.sWidthOrig!==""?bK(bV.sWidthOrig):""
}if(bX.aoData.length){for(b4=0;
b4<b7.length;
b4++){ca=b7[b4];
bV=bU[ca];
bF(aL(bX,ca)).clone(false).append(bV.sContentPadding).appendTo(bS)
}}bY.appendTo(bZ);
if(b3&&bW){bY.width(bW)
}else{if(b3){bY.css("width","auto");
if(bY.width()<bZ.offsetWidth){bY.width(bZ.offsetWidth)
}}else{if(b2){bY.width(bZ.offsetWidth)
}else{if(b0){bY.width(b0)
}}}}az(bX,bY[0]);
if(b3){var cb=0;
for(b4=0;
b4<b7.length;
b4++){bV=bU[b7[b4]];
bR=bF(b6[b4]).outerWidth();
cb+=bV.sWidthOrig===null?bR:parseInt(bV.sWidth,10)+bR-bF(b6[b4]).width()
}bY.width(bK(cb));
b5.style.width=bK(cb)
}for(b4=0;
b4<b7.length;
b4++){bV=bU[b7[b4]];
b1=bF(b6[b4]).width();
if(b1){bV.sWidth=bK(b1)
}}b5.style.width=bK(bY.css("width"));
bY.remove()
}if(b0){b5.style.width=bK(b0)
}if((b0||b3)&&!bX._reszEvt){bF(b).bind("resize.DT-"+bX.sInstance,al(function(){aK(bX)
}));
bX._reszEvt=true
}}function al(bR,bU){var bT=bU||200,bS,bV;
return function(){var bY=this,bX=+new Date(),bW=arguments;
if(bS&&bX<bS+bT){clearTimeout(bV);
bV=setTimeout(function(){bS=c;
bR.apply(bY,bW)
},bT)
}else{if(bS){bS=bX;
bR.apply(bY,bW)
}else{bS=bX
}}}
}function ag(bS,bR){if(!bS){return 0
}var bU=bF("<div/>").css("width",bK(bS)).appendTo(bR||a.body);
var bT=bU[0].offsetWidth;
bU.remove();
return bT
}function az(bT,bU){var bR=bT.oScroll;
if(bR.sX||bR.sY){var bS=!bR.sX?bR.iBarWidth:0;
bU.style.width=bK(bF(bU).outerWidth()-bS)
}}function aL(bS,bU){var bR=ac(bS,bU);
if(bR<0){return null
}var bT=bS.aoData[bR];
return !bT.nTr?bF("<td/>").html(bu(bS,bR,bU,"display"))[0]:bT.anCells[bU]
}function ac(bW,bX){var bV,bR=-1,bT=-1;
for(var bU=0,bS=bW.aoData.length;
bU<bS;
bU++){bV=bu(bW,bU,bX,"display")+"";
bV=bV.replace(a1,"");
if(bV.length>bR){bR=bV.length;
bT=bU
}}return bT
}function bK(bR){if(bR===null){return"0px"
}if(typeof bR=="number"){return bR<0?"0px":bR+"px"
}return bR.match(/\d$/)?bR+"px":bR
}function bb(){if(!O.__scrollbarWidth){var bT=bF("<p/>").css({width:"100%",height:200,padding:0})[0];
var bU=bF("<div/>").css({position:"absolute",top:0,left:0,width:200,height:150,padding:0,overflow:"hidden",visibility:"hidden"}).append(bT).appendTo("body");
var bS=bT.offsetWidth;
bU.css("overflow","scroll");
var bR=bT.offsetWidth;
if(bS===bR){bR=bU[0].clientWidth
}bU.remove();
O.__scrollbarWidth=bS-bR
}return O.__scrollbarWidth
}function aJ(bU){var bZ,bT,bW,b0,bX=[],b2=[],b4=bU.aoColumns,bY,b3,bR,b1,bV=bU.aaSortingFixed,b6=bF.isPlainObject(bV),bS=[],b5=function(b7){if(b7.length&&!bF.isArray(b7[0])){bS.push(b7)
}else{bS.push.apply(bS,b7)
}};
if(bF.isArray(bV)){b5(bV)
}if(b6&&bV.pre){b5(bV.pre)
}b5(bU.aaSorting);
if(b6&&bV.post){b5(bV.post)
}for(bZ=0;
bZ<bS.length;
bZ++){b1=bS[bZ][0];
bY=b4[b1].aDataSort;
for(bW=0,b0=bY.length;
bW<b0;
bW++){b3=bY[bW];
bR=b4[b3].sType||"string";
bX.push({src:b1,col:b3,dir:bS[bZ][1],index:bS[bZ][2],type:bR,formatter:O.ext.type.order[bR+"-pre"]})
}}return bX
}function z(bW){var b8,bU,b5,b7,b9,b4,bR,b1,bX,cd=[],b0=O.ext.type.order,b2=bW.aoData,b6=bW.aoColumns,bS,cc,bV,bZ,b3,ca=0,bY,bT=bW.aiDisplayMaster,cb;
x(bW);
cb=aJ(bW);
for(b8=0,bU=cb.length;
b8<bU;
b8++){bY=cb[b8];
if(bY.formatter){ca++
}H(bW,bY.col)
}if(A(bW)!="ssp"&&cb.length!==0){for(b8=0,b5=bT.length;
b8<b5;
b8++){cd[bT[b8]]=b8
}if(ca===cb.length){bT.sort(function(cm,cl){var cn,ck,ce,cj,cf,cg=cb.length,ci=b2[cm]._aSortData,ch=b2[cl]._aSortData;
for(ce=0;
ce<cg;
ce++){cf=cb[ce];
cn=ci[cf.col];
ck=ch[cf.col];
cj=cn<ck?-1:cn>ck?1:0;
if(cj!==0){return cf.dir==="asc"?cj:-cj
}}cn=cd[cm];
ck=cd[cl];
return cn<ck?-1:cn>ck?1:0
})
}else{bT.sort(function(co,cn){var cp,cm,cf,ce,ck,cg,cl,ch=cb.length,cj=b2[co]._aSortData,ci=b2[cn]._aSortData;
for(cf=0;
cf<ch;
cf++){cg=cb[cf];
cp=cj[cg.col];
cm=ci[cg.col];
cl=b0[cg.type+"-"+cg.dir]||b0["string-"+cg.dir];
ck=cl(cp,cm);
if(ck!==0){return ck
}}cp=cd[co];
cm=cd[cn];
return cp<cm?-1:cp>cm?1:0
})
}}bW.bSorted=true
}function bd(bV){var b1;
var b0;
var bW=bV.aoColumns;
var bX=aJ(bV);
var bY=bV.oLanguage.oAria;
for(var bZ=0,bT=bW.length;
bZ<bT;
bZ++){var bS=bW[bZ];
var bU=bS.asSorting;
var b2=bS.sTitle.replace(/<.*?>/g,"");
var bR=bS.nTh;
bR.removeAttribute("aria-sort");
if(bS.bSortable){if(bX.length>0&&bX[0].col==bZ){bR.setAttribute("aria-sort",bX[0].dir=="asc"?"ascending":"descending");
b0=bU[bX[0].index+1]||bU[0]
}else{b0=bU[0]
}b1=b2+(b0==="asc"?bY.sSortAscending:bY.sSortDescending)
}else{b1=b2
}bR.setAttribute("aria-label",b1)
}}function bj(bU,bW,bR,b0){var bS=bU.aoColumns[bW];
var bY=bU.aaSorting;
var bV=bS.asSorting;
var bZ;
var bX=function(b2){var b1=b2._idx;
if(b1===c){b1=bF.inArray(b2[1],bV)
}return b1+1>=bV.length?0:b1+1
};
if(typeof bY[0]==="number"){bY=bU.aaSorting=[bY]
}if(bR&&bU.oFeatures.bSortMulti){var bT=bF.inArray(bW,au(bY,"0"));
if(bT!==-1){bZ=bX(bY[bT]);
bY[bT][1]=bV[bZ];
bY[bT]._idx=bZ
}else{bY.push([bW,bV[0],0]);
bY[bY.length-1]._idx=0
}}else{if(bY.length&&bY[0][0]==bW){bZ=bX(bY[0]);
bY.length=1;
bY[0][1]=bV[bZ];
bY[0]._idx=bZ
}else{bY.length=0;
bY.push([bW,bV[0]]);
bY[0]._idx=0
}}ai(bU);
if(typeof b0=="function"){b0(bU)
}}function D(bT,bS,bV,bU){var bR=bT.aoColumns[bV];
bc(bS,{},function(bW){if(bR.bSortable===false){return
}if(bT.oFeatures.bProcessing){y(bT,true);
setTimeout(function(){bj(bT,bV,bW.shiftKey,bU);
if(A(bT)!=="ssp"){y(bT,false)
}},0)
}else{bj(bT,bV,bW.shiftKey,bU)
}})
}function ae(bW){var bX=bW.aLastSort;
var bS=bW.oClasses.sSortColumn;
var bU=aJ(bW);
var bV=bW.oFeatures;
var bT,bR,bY;
if(bV.bSort&&bV.bSortClasses){for(bT=0,bR=bX.length;
bT<bR;
bT++){bY=bX[bT].src;
bF(au(bW.aoData,"anCells",bY)).removeClass(bS+(bT<2?bT+1:3))
}for(bT=0,bR=bU.length;
bT<bR;
bT++){bY=bU[bT].src;
bF(au(bW.aoData,"anCells",bY)).addClass(bS+(bT<2?bT+1:3))
}}bW.aLastSort=bU
}function H(bR,bW){var bS=bR.aoColumns[bW];
var b0=O.ext.order[bS.sSortDataType];
var bY;
if(b0){bY=b0.call(bR.oInstance,bR,bW,bJ(bR,bW))
}var bZ,bU;
var bV=O.ext.type.order[bS.sType+"-pre"];
for(var bT=0,bX=bR.aoData.length;
bT<bX;
bT++){bZ=bR.aoData[bT];
if(!bZ._aSortData){bZ._aSortData=[]
}if(!bZ._aSortData[bW]||b0){bU=b0?bY[bT]:bu(bR,bT,bW,"sort");
bZ._aSortData[bW]=bV?bV(bU):bU
}}}function bo(bR){if(!bR.oFeatures.bStateSave||bR.bDestroying){return
}var bS={time:+new Date(),start:bR._iDisplayStart,length:bR._iDisplayLength,order:bF.extend(true,[],bR.aaSorting),search:by(bR.oPreviousSearch),columns:bF.map(bR.aoColumns,function(bT,bU){return{visible:bT.bVisible,search:by(bR.aoPreSearchCols[bU])}
})};
M(bR,"aoStateSaveParams","stateSaveParams",[bR,bS]);
bR.oSavedState=bS;
bR.fnStateSaveCallback.call(bR.oInstance,bR,bS)
}function bO(bT,bY){var bW,bZ;
var bU=bT.aoColumns;
if(!bT.oFeatures.bStateSave){return
}var bR=bT.fnStateLoadCallback.call(bT.oInstance,bT);
if(!bR||!bR.time){return
}var bX=M(bT,"aoStateLoadParams","stateLoadParams",[bT,bR]);
if(bF.inArray(false,bX)!==-1){return
}var bV=bT.iStateDuration;
if(bV>0&&bR.time<+new Date()-(bV*1000)){return
}if(bU.length!==bR.columns.length){return
}bT.oLoadedState=bF.extend(true,{},bR);
bT._iDisplayStart=bR.start;
bT.iInitDisplayStart=bR.start;
bT._iDisplayLength=bR.length;
bT.aaSorting=[];
bF.each(bR.order,function(b1,b0){bT.aaSorting.push(b0[0]>=bU.length?[0,b0[1]]:b0)
});
bF.extend(bT.oPreviousSearch,aF(bR.search));
for(bW=0,bZ=bR.columns.length;
bW<bZ;
bW++){var bS=bR.columns[bW];
bU[bW].bVisible=bS.visible;
bF.extend(bT.aoPreSearchCols[bW],aF(bS.search))
}M(bT,"aoStateLoaded","stateLoaded",[bT,bR])
}function an(bT){var bS=O.settings;
var bR=bF.inArray(bT,au(bS,"nTable"));
return bR!==-1?bS[bR]:null
}function aO(bU,bW,bV,bR){bV="DataTables warning: "+(bU!==null?"table id="+bU.sTableId+" - ":"")+bV;
if(bR){bV+=". For more information about this error, please see http://datatables.net/tn/"+bR
}if(!bW){var bT=O.ext;
var bS=bT.sErrMode||bT.errMode;
if(bS=="alert"){alert(bV)
}else{throw new Error(bV)
}}else{if(b.console&&console.log){console.log(bV)
}}}function S(bS,bU,bR,bT){if(bF.isArray(bR)){bF.each(bR,function(bV,bW){if(bF.isArray(bW)){S(bS,bU,bW[0],bW[1])
}else{S(bS,bU,bW)
}});
return
}if(bT===c){bT=bR
}if(bU[bR]!==c){bS[bT]=bU[bR]
}}function aY(bR,bT,bS){var bU;
for(var bV in bT){if(bT.hasOwnProperty(bV)){bU=bT[bV];
if(bF.isPlainObject(bU)){if(!bF.isPlainObject(bR[bV])){bR[bV]={}
}bF.extend(true,bR[bV],bU)
}else{if(bS&&bV!=="data"&&bV!=="aaData"&&bF.isArray(bU)){bR[bV]=bU.slice()
}else{bR[bV]=bU
}}}}return bR
}function bc(bT,bS,bR){bF(bT).bind("click.DT",bS,function(bU){bT.blur();
bR(bU)
}).bind("keypress.DT",bS,function(bU){if(bU.which===13){bU.preventDefault();
bR(bU)
}}).bind("selectstart.DT",function(){return false
})
}function bN(bU,bS,bR,bT){if(bR){bU[bS].push({fn:bR,sName:bT})
}}function M(bT,bU,bV,bS){var bR=[];
if(bU){bR=bF.map(bT[bU].slice().reverse(),function(bX,bW){return bX.fn.apply(bT.oInstance,bS)
})
}if(bV!==null){bF(bT.nTable).trigger(bV+".dt",bS)
}return bR
}function bl(bT){var bU=bT._iDisplayStart,bS=bT.fnDisplayEnd(),bR=bT._iDisplayLength;
if(bS===bT.fnRecordsDisplay()){bU=bS-bR
}if(bR===-1||bU<0){bU=0
}bT._iDisplayStart=bU
}function T(bS,bR){var bU=bS.renderer;
var bT=O.ext.renderer[bR];
if(bF.isPlainObject(bU)&&bU[bR]){return bT[bU[bR]]||bT._
}else{if(typeof bU==="string"){return bT[bU]||bT._
}}return bT._
}function A(bR){if(bR.oFeatures.bServerSide){return"ssp"
}else{if(bR.ajax||bR.sAjaxSource){return"ajax"
}}return"dom"
}O=function(bT){this.$=function(bX,bW){return this.api(true).$(bX,bW)
};
this._=function(bX,bW){return this.api(true).rows(bX,bW).data()
};
this.api=function(bW){return bW?new K(an(this[J.iApiIndex])):new K(this)
};
this.fnAddData=function(bY,bZ){var bW=this.api(true);
var bX=bF.isArray(bY)&&(bF.isArray(bY[0])||bF.isPlainObject(bY[0]))?bW.rows.add(bY):bW.row.add(bY);
if(bZ===c||bZ){bW.draw()
}return bX.flatten().toArray()
};
this.fnAdjustColumnSizing=function(bZ){var bY=this.api(true).columns.adjust();
var bX=bY.settings()[0];
var bW=bX.oScroll;
if(bZ===c||bZ){bY.draw(false)
}else{if(bW.sX!==""||bW.sY!==""){m(bX)
}}};
this.fnClearTable=function(bX){var bW=this.api(true).clear();
if(bX===c||bX){bW.draw()
}};
this.fnClose=function(bW){this.api(true).row(bW).child.hide()
};
this.fnDeleteRow=function(b0,b2,b1){var bX=this.api(true);
var bZ=bX.rows(b0);
var bW=bZ.settings()[0];
var bY=bW.aoData[bZ[0][0]];
bZ.remove();
if(b2){b2.call(this,bW,bY)
}if(b1===c||b1){bX.draw()
}return bY
};
this.fnDestroy=function(bW){this.api(true).destroy(bW)
};
this.fnDraw=function(bW){this.api(true).draw(!bW)
};
this.fnFilter=function(b0,bX,bY,b2,b1,bW){var bZ=this.api(true);
if(bX===null||bX===c){bZ.search(b0,bY,b2,bW)
}else{bZ.column(bX).search(b0,bY,b2,bW)
}bZ.draw()
};
this.fnGetData=function(bZ,bW){var bY=this.api(true);
if(bZ!==c){var bX=bZ.nodeName?bZ.nodeName.toLowerCase():"";
return bW!==c||bX=="td"||bX=="th"?bY.cell(bZ,bW).data():bY.row(bZ).data()||null
}return bY.data().toArray()
};
this.fnGetNodes=function(bX){var bW=this.api(true);
return bX!==c?bW.row(bX).node():bW.rows().nodes().flatten().toArray()
};
this.fnGetPosition=function(bY){var bX=this.api(true);
var bZ=bY.nodeName.toUpperCase();
if(bZ=="TR"){return bX.row(bY).index()
}else{if(bZ=="TD"||bZ=="TH"){var bW=bX.cell(bY).index();
return[bW.row,bW.columnVisible,bW.column]
}}return null
};
this.fnIsOpen=function(bW){return this.api(true).row(bW).child.isShown()
};
this.fnOpen=function(bX,bW,bY){return this.api(true).row(bX).child(bW,bY).show().child()[0]
};
this.fnPageChange=function(bW,bY){var bX=this.api(true).page(bW);
if(bY===c||bY){bX.draw(false)
}};
this.fnSetColumnVis=function(bX,bW,bZ){var bY=this.api(true).column(bX).visible(bW);
if(bZ===c||bZ){bY.columns.adjust().draw()
}};
this.fnSettings=function(){return an(this[J.iApiIndex])
};
this.fnSort=function(bW){this.api(true).order(bW).draw()
};
this.fnSortListener=function(bX,bW,bY){this.api(true).order.listener(bX,bW,bY)
};
this.fnUpdate=function(b0,bZ,bW,b1,bY){var bX=this.api(true);
if(bW===c||bW===null){bX.row(bZ).data(b0)
}else{bX.cell(bZ,bW).data(b0)
}if(bY===c||bY){bX.columns.adjust()
}if(b1===c||b1){bX.draw()
}return 0
};
this.fnVersionCheck=J.fnVersionCheck;
var bU=this;
var bS=bT===c;
var bR=this.length;
if(bS){bT={}
}this.oApi=this.internal=J.internal;
for(var bV in O.ext.internal){if(bV){this[bV]=ah(bV)
}}this.each(function(){var cd={};
var cb=bR>1?aY(cd,bT,true):bT;
var cj=0,ch,ci,cm,cg,bW;
var b6=this.getAttribute("id");
var b5=false;
var b9=O.defaults;
if(this.nodeName.toLowerCase()!="table"){aO(null,0,"Non-table node initialisation ("+this.nodeName+")",2);
return
}a4(b9);
Y(b9.column);
ab(b9,b9,true);
ab(b9.column,b9.column,true);
ab(b9,cb);
var b2=O.settings;
for(cj=0,ch=b2.length;
cj<ch;
cj++){if(b2[cj].nTable==this){var cf=cb.bRetrieve!==c?cb.bRetrieve:b9.bRetrieve;
var b8=cb.bDestroy!==c?cb.bDestroy:b9.bDestroy;
if(bS||cf){return b2[cj].oInstance
}else{if(b8){b2[cj].oInstance.fnDestroy();
break
}else{aO(b2[cj],0,"Cannot reinitialise DataTable",3);
return
}}}if(b2[cj].sTableId==this.id){b2.splice(cj,1);
break
}}if(b6===null||b6===""){b6="DataTables_Table_"+(O.ext._unique++);
this.id=b6
}var b3=bF.extend(true,{},O.models.oSettings,{nTable:this,oApi:bU.internal,oInit:cb,sDestroyWidth:bF(this)[0].style.width,sInstance:b6,sTableId:b6});
b2.push(b3);
b3.oInstance=(bU.length===1)?bU:bF(this).dataTable();
a4(cb);
if(cb.oLanguage){aT(cb.oLanguage)
}if(cb.aLengthMenu&&!cb.iDisplayLength){cb.iDisplayLength=bF.isArray(cb.aLengthMenu[0])?cb.aLengthMenu[0][0]:cb.aLengthMenu[0]
}cb=aY(bF.extend(true,{},b9),cb);
S(b3.oFeatures,cb,["bPaginate","bLengthChange","bFilter","bSort","bSortMulti","bInfo","bProcessing","bAutoWidth","bSortClasses","bServerSide","bDeferRender"]);
S(b3,cb,["asStripeClasses","ajax","fnServerData","fnFormatNumber","sServerMethod","aaSorting","aaSortingFixed","aLengthMenu","sPaginationType","sAjaxSource","sAjaxDataProp","iStateDuration","sDom","bSortCellsTop","iTabIndex","fnStateLoadCallback","fnStateSaveCallback","renderer",["iCookieDuration","iStateDuration"],["oSearch","oPreviousSearch"],["aoSearchCols","aoPreSearchCols"],["iDisplayLength","_iDisplayLength"],["bJQueryUI","bJUI"]]);
S(b3.oScroll,cb,[["sScrollX","sX"],["sScrollXInner","sXInner"],["sScrollY","sY"],["bScrollCollapse","bCollapse"]]);
S(b3.oLanguage,cb,"fnInfoCallback");
bN(b3,"aoDrawCallback",cb.fnDrawCallback,"user");
bN(b3,"aoServerParams",cb.fnServerParams,"user");
bN(b3,"aoStateSaveParams",cb.fnStateSaveParams,"user");
bN(b3,"aoStateLoadParams",cb.fnStateLoadParams,"user");
bN(b3,"aoStateLoaded",cb.fnStateLoaded,"user");
bN(b3,"aoRowCallback",cb.fnRowCallback,"user");
bN(b3,"aoRowCreatedCallback",cb.fnCreatedRow,"user");
bN(b3,"aoHeaderCallback",cb.fnHeaderCallback,"user");
bN(b3,"aoFooterCallback",cb.fnFooterCallback,"user");
bN(b3,"aoInitComplete",cb.fnInitComplete,"user");
bN(b3,"aoPreDrawCallback",cb.fnPreDrawCallback,"user");
var b7=b3.oClasses;
if(cb.bJQueryUI){bF.extend(b7,O.ext.oJUIClasses,cb.oClasses);
if(cb.sDom===b9.sDom&&b9.sDom==="lfrtip"){b3.sDom='<"H"lfr>t<"F"ip>'
}if(!b3.renderer){b3.renderer="jqueryui"
}else{if(bF.isPlainObject(b3.renderer)&&!b3.renderer.header){b3.renderer.header="jqueryui"
}}}else{bF.extend(b7,O.ext.classes,cb.oClasses)
}bF(this).addClass(b7.sTable);
if(b3.oScroll.sX!==""||b3.oScroll.sY!==""){b3.oScroll.iBarWidth=bb()
}if(b3.oScroll.sX===true){b3.oScroll.sX="100%"
}if(b3.iInitDisplayStart===c){b3.iInitDisplayStart=cb.iDisplayStart;
b3._iDisplayStart=cb.iDisplayStart
}if(cb.iDeferLoading!==null){b3.bDeferLoading=true;
var cn=bF.isArray(cb.iDeferLoading);
b3._iRecordsDisplay=cn?cb.iDeferLoading[0]:cb.iDeferLoading;
b3._iRecordsTotal=cn?cb.iDeferLoading[1]:cb.iDeferLoading
}if(cb.oLanguage.sUrl!==""){b3.oLanguage.sUrl=cb.oLanguage.sUrl;
bF.getJSON(b3.oLanguage.sUrl,null,function(cp){aT(cp);
ab(b9.oLanguage,cp);
bF.extend(true,b3.oLanguage,cb.oLanguage,cp);
h(b3)
});
b5=true
}else{bF.extend(true,b3.oLanguage,cb.oLanguage)
}if(cb.asStripeClasses===null){b3.asStripeClasses=[b7.sStripeOdd,b7.sStripeEven]
}var ck=b3.asStripeClasses;
var b1=bF("tbody tr:eq(0)",this);
if(bF.inArray(true,bF.map(ck,function(cq,cp){return b1.hasClass(cq)
}))!==-1){bF("tbody tr",this).removeClass(ck.join(" "));
b3.asDestroyStripes=ck.slice()
}var ce=[];
var b0;
var cc=this.getElementsByTagName("thead");
if(cc.length!==0){aw(b3.aoHeader,cc[0]);
ce=bh(b3)
}if(cb.aoColumns===null){b0=[];
for(cj=0,ch=ce.length;
cj<ch;
cj++){b0.push(null)
}}else{b0=cb.aoColumns
}for(cj=0,ch=b0.length;
cj<ch;
cj++){P(b3,ce?ce[cj]:null)
}l(b3,cb.aoColumnDefs,b0,function(cq,cp){a2(b3,cq,cp)
});
if(b1.length){var co=function(cp,cq){return cp.getAttribute("data-"+cq)?cq:null
};
bF.each(bf(b3,b1[0]).cells,function(cs,cp){var cq=b3.aoColumns[cs];
if(cq.mData===cs){var cr=co(cp,"sort")||co(cp,"order");
var ct=co(cp,"filter")||co(cp,"search");
if(cr!==null||ct!==null){cq.mData={_:cs+".display",sort:cr!==null?cs+".@data-"+cr:c,type:cr!==null?cs+".@data-"+cr:c,filter:ct!==null?cs+".@data-"+ct:c};
a2(b3,cs)
}}})
}var b4=b3.oFeatures;
if(cb.bStateSave){b4.bStateSave=true;
bO(b3,cb);
bN(b3,"aoDrawCallback",bo,"state_save")
}if(cb.aaSorting===c){var bZ=b3.aaSorting;
for(cj=0,ch=bZ.length;
cj<ch;
cj++){bZ[cj][1]=b3.aoColumns[cj].asSorting[0]
}}ae(b3);
if(b4.bSort){bN(b3,"aoDrawCallback",function(){if(b3.bSorted){var cp=aJ(b3);
var cq={};
bF.each(cp,function(cr,cs){cq[cs.src]=cs.dir
});
M(b3,null,"order",[b3,cp,cq]);
bd(b3)
}})
}bN(b3,"aoDrawCallback",function(){if(b3.bSorted||A(b3)==="ssp"||b4.bDeferRender){ae(b3)
}},"sc");
be(b3);
var bY=bF(this).children("caption").each(function(){this._captionSide=bF(this).css("caption-side")
});
var cl=bF(this).children("thead");
if(cl.length===0){cl=bF("<thead/>").appendTo(this)
}b3.nTHead=cl[0];
var bX=bF(this).children("tbody");
if(bX.length===0){bX=bF("<tbody/>").appendTo(this)
}b3.nTBody=bX[0];
var ca=bF(this).children("tfoot");
if(ca.length===0&&bY.length>0&&(b3.oScroll.sX!==""||b3.oScroll.sY!=="")){ca=bF("<tfoot/>").appendTo(this)
}if(ca.length===0||ca.children().length===0){bF(this).addClass(b7.sNoFooter)
}else{if(ca.length>0){b3.nTFoot=ca[0];
aw(b3.aoFooter,b3.nTFoot)
}}if(cb.aaData){for(cj=0;
cj<cb.aaData.length;
cj++){aP(b3,cb.aaData[cj])
}}else{if(b3.bDeferLoading||A(b3)=="dom"){bQ(b3,bF(b3.nTBody).children("tr"))
}}b3.aiDisplay=b3.aiDisplayMaster.slice();
b3.bInitialised=true;
if(b5===false){h(b3)
}});
bU=null;
return this
};
var V=[];
var p=Array.prototype;
var bP=function(bT){var bR,bV;
var bU=O.settings;
var bS=bF.map(bU,function(bX,bW){return bX.nTable
});
if(!bT){return[]
}else{if(bT.nTable&&bT.oApi){return[bT]
}else{if(bT.nodeName&&bT.nodeName.toLowerCase()==="table"){bR=bF.inArray(bT,bS);
return bR!==-1?[bU[bR]]:null
}else{if(bT&&typeof bT.settings==="function"){return bT.settings().toArray()
}else{if(typeof bT==="string"){bV=bF(bT)
}else{if(bT instanceof bF){bV=bT
}}}}}}if(bV){return bV.map(function(bW){bR=bF.inArray(this,bS);
return bR!==-1?bU[bR]:null
}).toArray()
}};
K=function(bT,bV){if(!this instanceof K){throw"DT API must be constructed as a new object"
}var bU=[];
var bW=function(bY){var bX=bP(bY);
if(bX){bU.push.apply(bU,bX)
}};
if(bF.isArray(bT)){for(var bS=0,bR=bT.length;
bS<bR;
bS++){bW(bT[bS])
}}else{bW(bT)
}this.context=aH(bU);
if(bV){this.push.apply(this,bV.toArray?bV.toArray():bV)
}this.selector={rows:null,cols:null,opts:null};
K.extend(this,this,V)
};
O.Api=K;
K.prototype={concat:p.concat,context:[],each:function(bT){for(var bS=0,bR=this.length;
bS<bR;
bS++){bT.call(this,this[bS],bS,this)
}return this
},eq:function(bR){var bS=this.context;
return bS.length>bR?new K(bS[bR],this[bR]):null
},filter:function(bU){var bS=[];
if(p.filter){bS=p.filter.call(this,bU,this)
}else{for(var bT=0,bR=this.length;
bT<bR;
bT++){if(bU.call(this,this[bT],bT,this)){bS.push(this[bT])
}}}return new K(this.context,bS)
},flatten:function(){var bR=[];
return new K(this.context,bR.concat.apply(bR,this.toArray()))
},join:p.join,indexOf:p.indexOf||function(bT,bU){for(var bS=(bU||0),bR=this.length;
bS<bR;
bS++){if(this[bS]===bT){return bS
}}return -1
},iterator:function(bS,b1,b2){var b3=[],bZ,bX,b4,bW,bU,bT=this.context,b6,b0,b5,bV=this.selector;
if(typeof bS==="string"){b2=b1;
b1=bS;
bS=false
}for(bX=0,b4=bT.length;
bX<b4;
bX++){if(b1==="table"){bZ=b2(bT[bX],bX);
if(bZ!==c){b3.push(bZ)
}}else{if(b1==="columns"||b1==="rows"){bZ=b2(bT[bX],this[bX],bX);
if(bZ!==c){b3.push(bZ)
}}else{if(b1==="column"||b1==="column-rows"||b1==="row"||b1==="cell"){b0=this[bX];
if(b1==="column-rows"){b6=aQ(bT[bX],bV.opts)
}for(bW=0,bU=b0.length;
bW<bU;
bW++){b5=b0[bW];
if(b1==="cell"){bZ=b2(bT[bX],b5.row,b5.column,bX,bW)
}else{bZ=b2(bT[bX],b5,bX,bW,b6)
}if(bZ!==c){b3.push(bZ)
}}}}}}if(b3.length){var bY=new K(bT,bS?b3.concat.apply([],b3):b3);
var bR=bY.selector;
bR.rows=bV.rows;
bR.cols=bV.cols;
bR.opts=bV.opts;
return bY
}return this
},lastIndexOf:p.lastIndexOf||function(bR,bS){return this.indexOf.apply(this.toArray.reverse(),arguments)
},length:0,map:function(bU){var bS=[];
if(p.map){bS=p.map.call(this,bU,this)
}else{for(var bT=0,bR=this.length;
bT<bR;
bT++){bS.push(bU.call(this,this[bT],bT))
}}return new K(this.context,bS)
},pluck:function(bR){return this.map(function(bS){return bS[bR]
})
},pop:p.pop,push:p.push,reduce:p.reduce||function(bR,bS){return aW(this,bR,bS,0,this.length,1)
},reduceRight:p.reduceRight||function(bR,bS){return aW(this,bR,bS,this.length-1,-1,-1)
},reverse:p.reverse,selector:null,shift:p.shift,sort:p.sort,splice:p.splice,toArray:function(){return p.slice.call(this)
},to$:function(){return bF(this)
},toJQuery:function(){return bF(this)
},unique:function(){return new K(this.context,aH(this))
},unshift:p.unshift};
K.extend=function(bZ,bV,bS){if(!bV||(!(bV instanceof K)&&!bV.__dt_wrapper)){return
}var bW,bY,bU,bR,bT,b0,bX=function(b2,b1,b3){return function(){var b4=b1.apply(b2,arguments);
K.extend(b4,b4,b3.methodExt);
return b4
}
};
for(bW=0,bY=bS.length;
bW<bY;
bW++){bT=bS[bW];
bV[bT.name]=typeof bT.val==="function"?bX(bZ,bT.val,bT):bF.isPlainObject(bT.val)?{}:bT.val;
bV[bT.name].__dt_wrapper=true;
K.extend(bZ,bV[bT.name],bT.propExt)
}};
K.register=bk=function(bT,bV){if(bF.isArray(bT)){for(var bY=0,bU=bT.length;
bY<bU;
bY++){K.register(bT[bY],bV)
}return
}var bZ,b2,bW=bT.split("."),bX=V,b1,bS;
var b0=function(b6,b4){for(var b5=0,b3=b6.length;
b5<b3;
b5++){if(b6[b5].name===b4){return b6[b5]
}}return null
};
for(bZ=0,b2=bW.length;
bZ<b2;
bZ++){bS=bW[bZ].indexOf("()")!==-1;
b1=bS?bW[bZ].replace("()",""):bW[bZ];
var bR=b0(bX,b1);
if(!bR){bR={name:b1,val:{},methodExt:[],propExt:[]};
bX.push(bR)
}if(bZ===b2-1){bR.val=bV
}else{bX=bS?bR.methodExt:bR.propExt
}}};
K.registerPlural=aB=function(bR,bT,bS){K.register(bR,bS);
K.register(bT,function(){var bU=bS.apply(this,arguments);
if(bU===this){return this
}else{if(bU instanceof K){return bU.length?bF.isArray(bU[0])?new K(bU.context,bU[0]):bU[0]:c
}}return bU
})
};
var d=function(bR,bS){if(typeof bR==="number"){return[bS[bR]]
}var bT=bF.map(bS,function(bV,bU){return bV.nTable
});
return bF(bT).filter(bR).map(function(bV){var bU=bF.inArray(this,bT);
return bS[bU]
}).toArray()
};
bk("tables()",function(bR){return bR?new K(d(bR,this.context)):this
});
bk("table()",function(bR){var bT=this.tables(bR);
var bS=bT.context;
return bS.length?new K(bS[0]):bT
});
aB("tables().nodes()","table().node()",function(){return this.iterator("table",function(bR){return bR.nTable
})
});
aB("tables().body()","table().body()",function(){return this.iterator("table",function(bR){return bR.nTBody
})
});
aB("tables().header()","table().header()",function(){return this.iterator("table",function(bR){return bR.nTHead
})
});
aB("tables().footer()","table().footer()",function(){return this.iterator("table",function(bR){return bR.nTFoot
})
});
aB("tables().containers()","table().container()",function(){return this.iterator("table",function(bR){return bR.nTableWrapper
})
});
bk("draw()",function(bR){return this.iterator("table",function(bS){ai(bS,bR===false)
})
});
bk("page()",function(bR){if(bR===c){return this.page.info().page
}return this.iterator("table",function(bS){aG(bS,bR)
})
});
bk("page.info()",function(bV){if(this.context.length===0){return c
}var bU=this.context[0],bW=bU._iDisplayStart,bR=bU._iDisplayLength,bS=bU.fnRecordsDisplay(),bT=bR===-1;
return{page:bT?0:Math.floor(bW/bR),pages:bT?1:Math.ceil(bS/bR),start:bW,end:bU.fnDisplayEnd(),length:bR,recordsTotal:bU.fnRecordsTotal(),recordsDisplay:bS}
});
bk("page.len()",function(bR){if(bR===c){return this.context.length!==0?this.context[0]._iDisplayLength:c
}return this.iterator("table",function(bS){aU(bS,bR)
})
});
var I=function(bT,bR,bU){if(A(bT)=="ssp"){ai(bT,bR)
}else{y(bT,true);
av(bT,[],function(bX){bi(bT);
var bY=bt(bT,bX);
for(var bW=0,bV=bY.length;
bW<bV;
bW++){aP(bT,bY[bW])
}ai(bT,bR);
y(bT,false)
})
}if(bU){var bS=new K(bT);
bS.one("draw",function(){bU(bS.ajax.json())
})
}};
bk("ajax.json()",function(){var bR=this.context;
if(bR.length>0){return bR[0].json
}});
bk("ajax.params()",function(){var bR=this.context;
if(bR.length>0){return bR[0].oAjaxData
}});
bk("ajax.reload()",function(bS,bR){return this.iterator("table",function(bT){I(bT,bR===false,bS)
})
});
bk("ajax.url()",function(bS){var bR=this.context;
if(bS===c){if(bR.length===0){return c
}bR=bR[0];
return bR.ajax?bF.isPlainObject(bR.ajax)?bR.ajax.url:bR.ajax:bR.sAjaxSource
}return this.iterator("table",function(bT){if(bF.isPlainObject(bT.ajax)){bT.ajax.url=bS
}else{bT.ajax=bS
}})
});
bk("ajax.url().load()",function(bS,bR){return this.iterator("table",function(bT){I(bT,bR===false,bS)
})
});
var ap=function(bS,bY){var bT=[],bW,bX,bV,bZ,bU,bR;
if(!bS||typeof bS==="string"||bS.length===c){bS=[bS]
}for(bV=0,bZ=bS.length;
bV<bZ;
bV++){bX=bS[bV]&&bS[bV].split?bS[bV].split(","):[bS[bV]];
for(bU=0,bR=bX.length;
bU<bR;
bU++){bW=bY(typeof bX[bU]==="string"?bF.trim(bX[bU]):bX[bU]);
if(bW&&bW.length){bT.push.apply(bT,bW)
}}}return bT
};
var bE=function(bR){if(!bR){bR={}
}if(bR.filter&&!bR.search){bR.search=bR.filter
}return{search:bR.search||"none",order:bR.order||"current",page:bR.page||"all"}
};
var B=function(bT){for(var bS=0,bR=bT.length;
bS<bR;
bS++){if(bT[bS].length>0){bT[0]=bT[bS];
bT.length=1;
bT.context=[bT.context[bS]];
return bT
}}bT.length=0;
return bT
};
var aQ=function(bT,bR){var bU,b0,bV,bY=[],bZ=bT.aiDisplay,bW=bT.aiDisplayMaster;
var b1=bR.search,bS=bR.order,bX=bR.page;
if(A(bT)=="ssp"){return b1==="removed"?[]:bg(0,bW.length)
}else{if(bX=="current"){for(bU=bT._iDisplayStart,b0=bT.fnDisplayEnd();
bU<b0;
bU++){bY.push(bZ[bU])
}}else{if(bS=="current"||bS=="applied"){bY=b1=="none"?bW.slice():b1=="applied"?bZ.slice():bF.map(bW,function(b3,b2){return bF.inArray(b3,bZ)===-1?b3:null
})
}else{if(bS=="index"||bS=="original"){for(bU=0,b0=bT.aoData.length;
bU<b0;
bU++){if(b1=="none"){bY.push(bU)
}else{bV=bF.inArray(bU,bZ);
if((bV===-1&&b1=="removed")||(bV>=0&&b1=="applied")){bY.push(bU)
}}}}}}}return bY
};
var F=function(bS,bR,bT){return ap(bR,function(bZ){var bW=G(bZ);
if(bW!==null&&!bT){return[bW]
}var bY=aQ(bS,bT);
if(bW!==null&&bF.inArray(bW,bY)!==-1){return[bW]
}else{if(!bZ){return bY
}}var bV=[];
for(var bX=0,bU=bY.length;
bX<bU;
bX++){bV.push(bS.aoData[bY[bX]].nTr)
}if(bZ.nodeName){if(bF.inArray(bZ,bV)!==-1){return[bZ._DT_RowIndex]
}}return bF(bV).filter(bZ).map(function(){return this._DT_RowIndex
}).toArray()
})
};
bk("rows()",function(bR,bS){if(bR===c){bR=""
}else{if(bF.isPlainObject(bR)){bS=bR;
bR=""
}}bS=bE(bS);
var bT=this.iterator("table",function(bU){return F(bU,bR,bS)
});
bT.selector.rows=bR;
bT.selector.opts=bS;
return bT
});
bk("rows().nodes()",function(){return this.iterator("row",function(bR,bS){return bR.aoData[bS].nTr||c
})
});
bk("rows().data()",function(){return this.iterator(true,"rows",function(bR,bS){return v(bR.aoData,bS,"_aData")
})
});
aB("rows().cache()","row().cache()",function(bR){return this.iterator("row",function(bS,bU){var bT=bS.aoData[bU];
return bR==="search"?bT._aFilterData:bT._aSortData
})
});
aB("rows().invalidate()","row().invalidate()",function(bR){return this.iterator("row",function(bS,bT){aI(bS,bT,bR)
})
});
aB("rows().indexes()","row().index()",function(){return this.iterator("row",function(bR,bS){return bS
})
});
aB("rows().remove()","row().remove()",function(){var bR=this;
return this.iterator("row",function(bW,bY,bV){var bX=bW.aoData;
bX.splice(bY,1);
for(var bU=0,bT=bX.length;
bU<bT;
bU++){if(bX[bU].nTr!==null){bX[bU].nTr._DT_RowIndex=bU
}}var bS=bF.inArray(bY,bW.aiDisplay);
a5(bW.aiDisplayMaster,bY);
a5(bW.aiDisplay,bY);
a5(bR[bV],bY,false);
bl(bW)
})
});
bk("rows.add()",function(bT){var bS=this.iterator("table",function(bX){var bY,bW,bU;
var bV=[];
for(bW=0,bU=bT.length;
bW<bU;
bW++){bY=bT[bW];
if(bY.nodeName&&bY.nodeName.toUpperCase()==="TR"){bV.push(bQ(bX,bY)[0])
}else{bV.push(aP(bX,bY))
}}return bV
});
var bR=this.rows(-1);
bR.pop();
bR.push.apply(bR,bS.toArray());
return bR
});
bk("row()",function(bR,bS){return B(this.rows(bR,bS))
});
bk("row().data()",function(bS){var bR=this.context;
if(bS===c){return bR.length&&this.length?bR[0].aoData[this[0]]._aData:c
}bR[0].aoData[this[0]]._aData=bS;
aI(bR[0],this[0],"data");
return this
});
bk("row().node()",function(){var bR=this.context;
return bR.length&&this.length?bR[0].aoData[this[0]].nTr||null:null
});
bk("row.add()",function(bS){if(bS instanceof bF&&bS.length){bS=bS[0]
}var bR=this.iterator("table",function(bT){if(bS.nodeName&&bS.nodeName.toUpperCase()==="TR"){return bQ(bT,bS)[0]
}return aP(bT,bS)
});
return this.row(bR[0])
});
var aa=function(bU,bY,bX,bR){var bW=[];
var bT=function(b0,bZ){if(b0.nodeName&&b0.nodeName.toLowerCase()==="tr"){bW.push(b0)
}else{var b1=bF("<tr><td/></tr>").addClass(bZ);
bF("td",b1).addClass(bZ).html(b0)[0].colSpan=aR(bU);
bW.push(b1[0])
}};
if(bF.isArray(bX)||bX instanceof bF){for(var bV=0,bS=bX.length;
bV<bS;
bV++){bT(bX[bV],bR)
}}else{bT(bX,bR)
}if(bY._details){bY._details.remove()
}bY._details=bF(bW);
if(bY._detailsShow){bY._details.insertAfter(bY.nTr)
}};
var C=function(bS){var bR=bS.context;
if(bR.length&&bS.length){var bT=bR[0].aoData[bS[0]];
if(bT._details){bT._details.remove();
bT._detailsShow=c;
bT._details=c
}}};
var ba=function(bT,bS){var bR=bT.context;
if(bR.length&&bT.length){var bU=bR[0].aoData[bT[0]];
if(bU._details){bU._detailsShow=bS;
if(bS){bU._details.insertAfter(bU.nTr)
}else{bU._details.detach()
}bx(bR[0])
}}};
var bx=function(bW){var bV=new K(bW);
var bU=".dt.DT_details";
var bT="draw"+bU;
var bR="column-visibility"+bU;
var bS="destroy"+bU;
var bX=bW.aoData;
bV.off(bT+" "+bR+" "+bS);
if(au(bX,"_details").length>0){bV.on(bT,function(bZ,bY){if(bW!==bY){return
}bV.rows({page:"current"}).eq(0).each(function(b0){var b1=bX[b0];
if(b1._detailsShow){b1._details.insertAfter(b1.nTr)
}})
});
bV.on(bR,function(b3,b0,bY,b2){if(bW!==b0){return
}var b5,b4=aR(b0);
for(var b1=0,bZ=bX.length;
b1<bZ;
b1++){b5=bX[b1];
if(b5._details){b5._details.children("td[colspan]").attr("colspan",b4)
}}});
bV.on(bS,function(b1,bZ){if(bW!==bZ){return
}for(var b0=0,bY=bX.length;
b0<bY;
b0++){if(bX[b0]._details){C(bX[b0])
}}})
}};
var o="";
var u=o+"row().child";
var aZ=u+"()";
bk(aZ,function(bT,bR){var bS=this.context;
if(bT===c){return bS.length&&this.length?bS[0].aoData[this[0]]._details:c
}else{if(bT===true){this.child.show()
}else{if(bT===false){C(this)
}else{if(bS.length&&this.length){aa(bS[0],bS[0].aoData[this[0]],bT,bR)
}}}}return this
});
bk([u+".show()",aZ+".show()"],function(bR){ba(this,true);
return this
});
bk([u+".hide()",aZ+".hide()"],function(){ba(this,false);
return this
});
bk([u+".remove()",aZ+".remove()"],function(){C(this);
return this
});
bk(u+".isShown()",function(){var bR=this.context;
if(bR.length&&this.length){return bR[0].aoData[this[0]]._detailsShow||false
}return false
});
var a9=/^(.+):(name|visIdx|visible)$/;
var bC=function(bU,bR,bV){var bT=bU.aoColumns,bW=au(bT,"sName"),bS=au(bT,"nTh");
return ap(bR,function(b1){var bY=G(b1);
if(b1===""){return bg(bT.length)
}else{if(bY!==null){return[bY>=0?bY:bT.length+bY]
}else{var bZ=typeof b1==="string"?b1.match(a9):"";
if(bZ){switch(bZ[2]){case"visIdx":case"visible":var bX=parseInt(bZ[1],10);
if(bX<0){var b0=bF.map(bT,function(b2,b3){return b2.bVisible?b3:null
});
return[b0[b0.length+bX]]
}return[s(bU,bX)];
case"name":return bF.map(bW,function(b2,b3){return b2===bZ[1]?b3:null
})
}}else{return bF(bS).filter(b1).map(function(){return bF.inArray(this,bS)
}).toArray()
}}}})
};
var N=function(bT,bU,bR,bY){var b0=bT.aoColumns,bS=b0[bU],bW=bT.aoData,b3,b2,bV,b1,bZ;
if(bR===c){return bS.bVisible
}if(bS.bVisible===bR){return
}if(bR){var bX=bF.inArray(true,au(b0,"bVisible"),bU+1);
for(bV=0,b1=bW.length;
bV<b1;
bV++){bZ=bW[bV].nTr;
b2=bW[bV].anCells;
if(bZ){bZ.insertBefore(b2[bU],b2[bX]||null)
}}}else{bF(au(bT.aoData,"anCells",bU)).detach()
}bS.bVisible=bR;
a6(bT,bT.aoHeader);
a6(bT,bT.aoFooter);
if(bY===c||bY){aK(bT);
if(bT.oScroll.sX||bT.oScroll.sY){m(bT)
}}M(bT,null,"column-visibility",[bT,bU,bR]);
bo(bT)
};
bk("columns()",function(bR,bS){if(bR===c){bR=""
}else{if(bF.isPlainObject(bR)){bS=bR;
bR=""
}}bS=bE(bS);
var bT=this.iterator("table",function(bU){return bC(bU,bR,bS)
});
bT.selector.cols=bR;
bT.selector.opts=bS;
return bT
});
aB("columns().header()","column().header()",function(bR,bS){return this.iterator("column",function(bU,bT){return bU.aoColumns[bT].nTh
})
});
aB("columns().footer()","column().footer()",function(bR,bS){return this.iterator("column",function(bU,bT){return bU.aoColumns[bT].nTf
})
});
aB("columns().data()","column().data()",function(){return this.iterator("column-rows",function(bW,bV,bU,bT,bX){var bS=[];
for(var bY=0,bR=bX.length;
bY<bR;
bY++){bS.push(bu(bW,bX[bY],bV,""))
}return bS
})
});
aB("columns().cache()","column().cache()",function(bR){return this.iterator("column-rows",function(bV,bU,bT,bS,bW){return v(bV.aoData,bW,bR==="search"?"_aFilterData":"_aSortData",bU)
})
});
aB("columns().nodes()","column().nodes()",function(){return this.iterator("column-rows",function(bU,bT,bS,bR,bV){return v(bU.aoData,bV,"anCells",bT)
})
});
aB("columns().visible()","column().visible()",function(bS,bR){return this.iterator("column",function(bU,bT){return bS===c?bU.aoColumns[bT].bVisible:N(bU,bT,bS,bR)
})
});
aB("columns().indexes()","column().index()",function(bR){return this.iterator("column",function(bT,bS){return bR==="visible"?bJ(bT,bS):bS
})
});
bk("columns.adjust()",function(){return this.iterator("table",function(bR){aK(bR)
})
});
bk("column.index()",function(bT,bR){if(this.context.length!==0){var bS=this.context[0];
if(bT==="fromVisible"||bT==="toData"){return s(bS,bR)
}else{if(bT==="fromData"||bT==="toVisible"){return bJ(bS,bR)
}}}});
bk("column()",function(bR,bS){return B(this.columns(bR,bS))
});
var bq=function(bT,bU,bR){var bX=bT.aoData;
var b3=aQ(bT,bR);
var b1=v(bX,b3,"anCells");
var b0=bF([].concat.apply([],b1));
var b2;
var bS=bT.aoColumns.length;
var bY,bW,bZ,bV;
return ap(bU,function(b4){if(b4===null||b4===c){bY=[];
for(bW=0,bZ=b3.length;
bW<bZ;
bW++){b2=b3[bW];
for(bV=0;
bV<bS;
bV++){bY.push({row:b2,column:bV})
}}return bY
}else{if(bF.isPlainObject(b4)){return[b4]
}}return b0.filter(b4).map(function(b5,b6){b2=b6.parentNode._DT_RowIndex;
return{row:b2,column:bF.inArray(b6,bX[b2].anCells)}
}).toArray()
})
};
bk("cells()",function(bU,bR,bS){if(bF.isPlainObject(bU)){if(typeof bU.row!==c){bS=bR;
bR=null
}else{bS=bU;
bU=null
}}if(bF.isPlainObject(bR)){bS=bR;
bR=null
}if(bR===null||bR===c){return this.iterator("table",function(b2){return bq(b2,bU,bE(bS))
})
}var bV=this.columns(bR,bS);
var b1=this.rows(bU,bS);
var bY,bX,bZ,bW,bT;
var b0=this.iterator("table",function(b3,b2){bY=[];
for(bX=0,bZ=b1[b2].length;
bX<bZ;
bX++){for(bW=0,bT=bV[b2].length;
bW<bT;
bW++){bY.push({row:b1[b2][bX],column:bV[b2][bW]})
}}return bY
});
bF.extend(b0.selector,{cols:bR,rows:bU,opts:bS});
return b0
});
aB("cells().nodes()","cell().node()",function(){return this.iterator("cell",function(bS,bT,bR){return bS.aoData[bT].anCells[bR]
})
});
bk("cells().data()",function(){return this.iterator("cell",function(bS,bT,bR){return bu(bS,bT,bR)
})
});
aB("cells().cache()","cell().cache()",function(bR){bR=bR==="search"?"_aFilterData":"_aSortData";
return this.iterator("cell",function(bT,bU,bS){return bT.aoData[bU][bR][bS]
})
});
aB("cells().indexes()","cell().index()",function(){return this.iterator("cell",function(bS,bT,bR){return{row:bT,column:bR,columnVisible:bJ(bS,bR)}
})
});
bk(["cells().invalidate()","cell().invalidate()"],function(bS){var bR=this.selector;
this.rows(bR.rows,bR.opts).invalidate(bS);
return this
});
bk("cell()",function(bR,bT,bS){return B(this.cells(bR,bT,bS))
});
bk("cell().data()",function(bT){var bS=this.context;
var bR=this[0];
if(bT===c){return bS.length&&bR.length?bu(bS[0],bR[0].row,bR[0].column):c
}bm(bS[0],bR[0].row,bR[0].column,bT);
aI(bS[0],bR[0].row,"data",bR[0].column);
return this
});
bk("order()",function(bR,bT){var bS=this.context;
if(bR===c){return bS.length!==0?bS[0].aaSorting:c
}if(typeof bR==="number"){bR=[[bR,bT]]
}else{if(!bF.isArray(bR[0])){bR=Array.prototype.slice.call(arguments)
}}return this.iterator("table",function(bU){bU.aaSorting=bR.slice()
})
});
bk("order.listener()",function(bS,bR,bT){return this.iterator("table",function(bU){D(bU,bS,bR,bT)
})
});
bk(["columns().order()","column().order()"],function(bR){var bS=this;
return this.iterator("table",function(bV,bU){var bT=[];
bF.each(bS[bU],function(bX,bW){bT.push([bW,bR])
});
bV.aaSorting=bT
})
});
bk("search()",function(bS,bU,bV,bT){var bR=this.context;
if(bS===c){return bR.length!==0?bR[0].oPreviousSearch.sSearch:c
}return this.iterator("table",function(bW){if(!bW.oFeatures.bFilter){return
}w(bW,bF.extend({},bW.oPreviousSearch,{sSearch:bS+"",bRegex:bU===null?false:bU,bSmart:bV===null?true:bV,bCaseInsensitive:bT===null?true:bT}),1)
})
});
aB("columns().search()","column().search()",function(bR,bT,bU,bS){return this.iterator("column",function(bX,bW){var bV=bX.aoPreSearchCols;
if(bR===c){return bV[bW].sSearch
}if(!bX.oFeatures.bFilter){return
}bF.extend(bV[bW],{sSearch:bR+"",bRegex:bT===null?false:bT,bSmart:bU===null?true:bU,bCaseInsensitive:bS===null?true:bS});
w(bX,bX.oPreviousSearch,1)
})
});
bk("state()",function(){return this.context.length?this.context[0].oSavedState:null
});
bk("state.clear()",function(){return this.iterator("table",function(bR){bR.fnStateSaveCallback.call(bR.oInstance,bR,{})
})
});
bk("state.loaded()",function(){return this.context.length?this.context[0].oLoadedState:null
});
bk("state.save()",function(){return this.iterator("table",function(bR){bo(bR)
})
});
O.versionCheck=O.fnVersionCheck=function(bT){var bX=O.version.split(".");
var bU=bT.split(".");
var bS,bW;
for(var bV=0,bR=bU.length;
bV<bR;
bV++){bS=parseInt(bX[bV],10)||0;
bW=parseInt(bU[bV],10)||0;
if(bS===bW){continue
}return bS>bW
}return true
};
O.isDataTable=O.fnIsDataTable=function(bT){var bR=bF(bT).get(0);
var bS=false;
bF.each(O.settings,function(bU,bV){if(bV.nTable===bR||bV.nScrollHead===bR||bV.nScrollFoot===bR){bS=true
}});
return bS
};
O.tables=O.fnTables=function(bR){return jQuery.map(O.settings,function(bS){if(!bR||(bR&&bF(bS.nTable).is(":visible"))){return bS.nTable
}})
};
O.camelToHungarian=ab;
bk("$()",function(bR,bT){var bU=this.rows(bT).nodes(),bS=bF(bU);
return bF([].concat(bS.filter(bR).toArray(),bS.find(bR).toArray()))
});
bF.each(["on","one","off"],function(bS,bR){bk(bR+"()",function(){var bT=Array.prototype.slice.call(arguments);
if(!bT[0].match(/\.dt\b/)){bT[0]+=".dt"
}var bU=bF(this.tables().nodes());
bU[bR].apply(bU,bT);
return this
})
});
bk("clear()",function(){return this.iterator("table",function(bR){bi(bR)
})
});
bk("settings()",function(){return new K(this.context,this.context)
});
bk("data()",function(){return this.iterator("table",function(bR){return au(bR.aoData,"_aData")
}).flatten()
});
bk("destroy()",function(bR){bR=bR||false;
return this.iterator("table",function(bS){var b1=bS.nTableWrapper.parentNode;
var bT=bS.oClasses;
var b3=bS.nTable;
var bW=bS.nTBody;
var bY=bS.nTHead;
var bZ=bS.nTFoot;
var b4=bF(b3);
var bV=bF(bW);
var bX=bF(bS.nTableWrapper);
var b5=bF.map(bS.aoData,function(b6){return b6.nTr
});
var bU,b2;
bS.bDestroying=true;
M(bS,"aoDestroyCallback","destroy",[bS]);
if(!bR){new K(bS).columns().visible(true)
}bX.unbind(".DT").find(":not(tbody *)").unbind(".DT");
bF(b).unbind(".DT-"+bS.sInstance);
if(b3!=bY.parentNode){b4.children("thead").detach();
b4.append(bY)
}if(bZ&&b3!=bZ.parentNode){b4.children("tfoot").detach();
b4.append(bZ)
}b4.detach();
bX.detach();
bS.aaSorting=[];
bS.aaSortingFixed=[];
ae(bS);
bF(b5).removeClass(bS.asStripeClasses.join(" "));
bF("th, td",bY).removeClass(bT.sSortable+" "+bT.sSortableAsc+" "+bT.sSortableDesc+" "+bT.sSortableNone);
if(bS.bJUI){bF("th span."+bT.sSortIcon+", td span."+bT.sSortIcon,bY).detach();
bF("th, td",bY).each(function(){var b6=bF("div."+bT.sSortJUIWrapper,this);
bF(this).append(b6.contents());
b6.detach()
})
}if(!bR&&b1){b1.insertBefore(b3,bS.nTableReinsertBefore)
}bV.children().detach();
bV.append(b5);
b4.css("width",bS.sDestroyWidth).removeClass(bT.sTable);
b2=bS.asDestroyStripes.length;
if(b2){bV.children().each(function(b6){bF(this).addClass(bS.asDestroyStripes[b6%b2])
})
}var b0=bF.inArray(bS,O.settings);
if(b0!==-1){O.settings.splice(b0,1)
}})
});
O.version="1.10.2";
O.settings=[];
O.models={};
O.models.oSearch={bCaseInsensitive:true,sSearch:"",bRegex:false,bSmart:true};
O.models.oRow={nTr:null,anCells:null,_aData:[],_aSortData:null,_aFilterData:null,_sFilterRow:null,_sRowStripe:"",src:null};
O.models.oColumn={idx:null,aDataSort:null,asSorting:null,bSearchable:null,bSortable:null,bVisible:null,_sManualType:null,_bAttrSrc:false,fnCreatedCell:null,fnGetData:null,fnSetData:null,mData:null,mRender:null,nTh:null,nTf:null,sClass:null,sContentPadding:null,sDefaultContent:null,sName:null,sSortDataType:"std",sSortingClass:null,sSortingClassJUI:null,sTitle:null,sType:null,sWidth:null,sWidthOrig:null};
O.defaults={aaData:null,aaSorting:[[0,"asc"]],aaSortingFixed:[],ajax:null,aLengthMenu:[10,25,50,100],aoColumns:null,aoColumnDefs:null,aoSearchCols:[],asStripeClasses:null,bAutoWidth:true,bDeferRender:false,bDestroy:false,bFilter:true,bInfo:true,bJQueryUI:false,bLengthChange:true,bPaginate:true,bProcessing:false,bRetrieve:false,bScrollCollapse:false,bServerSide:false,bSort:true,bSortMulti:true,bSortCellsTop:false,bSortClasses:true,bStateSave:false,fnCreatedRow:null,fnDrawCallback:null,fnFooterCallback:null,fnFormatNumber:function(bR){return bR.toString().replace(/\B(?=(\d{3})+(?!\d))/g,this.oLanguage.sThousands)
},fnHeaderCallback:null,fnInfoCallback:null,fnInitComplete:null,fnPreDrawCallback:null,fnRowCallback:null,fnServerData:null,fnServerParams:null,fnStateLoadCallback:function(bR){try{return JSON.parse((bR.iStateDuration===-1?sessionStorage:localStorage).getItem("DataTables_"+bR.sInstance+"_"+location.pathname))
}catch(bS){}},fnStateLoadParams:null,fnStateLoaded:null,fnStateSaveCallback:function(bR,bS){try{(bR.iStateDuration===-1?sessionStorage:localStorage).setItem("DataTables_"+bR.sInstance+"_"+location.pathname,JSON.stringify(bS))
}catch(bT){}},fnStateSaveParams:null,iStateDuration:7200,iDeferLoading:null,iDisplayLength:10,iDisplayStart:0,iTabIndex:0,oClasses:{},oLanguage:{oAria:{sSortAscending:": activate to sort column ascending",sSortDescending:": activate to sort column descending"},oPaginate:{sFirst:"First",sLast:"Last",sNext:"Next",sPrevious:"Previous"},sEmptyTable:"No data available in table",sInfo:"Showing _START_ to _END_ of _TOTAL_ entries",sInfoEmpty:"Showing 0 to 0 of 0 entries",sInfoFiltered:"(filtered from _MAX_ total entries)",sInfoPostFix:"",sDecimal:"",sThousands:",",sLengthMenu:"Show _MENU_ entries",sLoadingRecords:"Loading...",sProcessing:"Processing...",sSearch:"Search:",sSearchPlaceholder:"",sUrl:"",sZeroRecords:"No matching records found"},oSearch:bF.extend({},O.models.oSearch),sAjaxDataProp:"data",sAjaxSource:null,sDom:"lfrtip",sPaginationType:"simple_numbers",sScrollX:"",sScrollXInner:"",sScrollY:"",sServerMethod:"GET",renderer:null};
U(O.defaults);
O.defaults.column={aDataSort:null,iDataSort:-1,asSorting:["asc","desc"],bSearchable:true,bSortable:true,bVisible:true,fnCreatedCell:null,mData:null,mRender:null,sCellType:"td",sClass:"",sContentPadding:"",sDefaultContent:null,sName:"",sSortDataType:"std",sTitle:null,sType:null,sWidth:null};
U(O.defaults.column);
O.models.oSettings={oFeatures:{bAutoWidth:null,bDeferRender:null,bFilter:null,bInfo:null,bLengthChange:null,bPaginate:null,bProcessing:null,bServerSide:null,bSort:null,bSortMulti:null,bSortClasses:null,bStateSave:null},oScroll:{bCollapse:null,iBarWidth:0,sX:null,sXInner:null,sY:null},oLanguage:{fnInfoCallback:null},oBrowser:{bScrollOversize:false,bScrollbarLeft:false},ajax:null,aanFeatures:[],aoData:[],aiDisplay:[],aiDisplayMaster:[],aoColumns:[],aoHeader:[],aoFooter:[],oPreviousSearch:{},aoPreSearchCols:[],aaSorting:null,aaSortingFixed:[],asStripeClasses:null,asDestroyStripes:[],sDestroyWidth:0,aoRowCallback:[],aoHeaderCallback:[],aoFooterCallback:[],aoDrawCallback:[],aoRowCreatedCallback:[],aoPreDrawCallback:[],aoInitComplete:[],aoStateSaveParams:[],aoStateLoadParams:[],aoStateLoaded:[],sTableId:"",nTable:null,nTHead:null,nTFoot:null,nTBody:null,nTableWrapper:null,bDeferLoading:false,bInitialised:false,aoOpenRows:[],sDom:null,sPaginationType:"two_button",iStateDuration:0,aoStateSave:[],aoStateLoad:[],oSavedState:null,oLoadedState:null,sAjaxSource:null,sAjaxDataProp:null,bAjaxDataGet:true,jqXHR:null,json:c,oAjaxData:c,fnServerData:null,aoServerParams:[],sServerMethod:null,fnFormatNumber:null,aLengthMenu:null,iDraw:0,bDrawing:false,iDrawError:-1,_iDisplayLength:10,_iDisplayStart:0,_iRecordsTotal:0,_iRecordsDisplay:0,bJUI:null,oClasses:{},bFiltered:false,bSorted:false,bSortCellsTop:null,oInit:null,aoDestroyCallback:[],fnRecordsTotal:function(){return A(this)=="ssp"?this._iRecordsTotal*1:this.aiDisplayMaster.length
},fnRecordsDisplay:function(){return A(this)=="ssp"?this._iRecordsDisplay*1:this.aiDisplay.length
},fnDisplayEnd:function(){var bR=this._iDisplayLength,bW=this._iDisplayStart,bT=bW+bR,bS=this.aiDisplay.length,bU=this.oFeatures,bV=bU.bPaginate;
if(bU.bServerSide){return bV===false||bR===-1?bW+bS:Math.min(bW+bR,this._iRecordsDisplay)
}else{return !bV||bT>bS||bR===-1?bS:bT
}},oInstance:null,sInstance:null,iTabIndex:0,nScrollHead:null,nScrollFoot:null,aLastSort:[],oPlugins:{}};
O.ext=J={classes:{},errMode:"alert",feature:[],search:[],internal:{},legacy:{ajax:null},pager:{},renderer:{pageButton:{},header:{}},order:{},type:{detect:[],search:{},order:{}},_unique:0,fnVersionCheck:O.fnVersionCheck,iApiIndex:0,oJUIClasses:{},sVersion:O.version};
bF.extend(J,{afnFiltering:J.search,aTypes:J.type.detect,ofnSearch:J.type.search,oSort:J.type.order,afnSortData:J.order,aoFeatures:J.feature,oApi:J.internal,oStdClasses:J.classes,oPagination:J.pager});
bF.extend(O.ext.classes,{sTable:"dataTable",sNoFooter:"no-footer",sPageButton:"paginate_button",sPageButtonActive:"current",sPageButtonDisabled:"disabled",sStripeOdd:"odd",sStripeEven:"even",sRowEmpty:"dataTables_empty",sWrapper:"dataTables_wrapper",sFilter:"dataTables_filter",sInfo:"dataTables_info",sPaging:"dataTables_paginate paging_",sLength:"dataTables_length",sProcessing:"dataTables_processing",sSortAsc:"sorting_asc",sSortDesc:"sorting_desc",sSortable:"sorting",sSortableAsc:"sorting_asc_disabled",sSortableDesc:"sorting_desc_disabled",sSortableNone:"sorting_disabled",sSortColumn:"sorting_",sFilterInput:"",sLengthSelect:"",sScrollWrapper:"dataTables_scroll",sScrollHead:"dataTables_scrollHead",sScrollHeadInner:"dataTables_scrollHeadInner",sScrollBody:"dataTables_scrollBody",sScrollFoot:"dataTables_scrollFoot",sScrollFootInner:"dataTables_scrollFootInner",sHeaderTH:"",sFooterTH:"",sSortJUIAsc:"",sSortJUIDesc:"",sSortJUI:"",sSortJUIAscAllowed:"",sSortJUIDescAllowed:"",sSortJUIWrapper:"",sSortIcon:"",sJUIHeader:"",sJUIFooter:""});
(function(){var bS="";
bS="";
var bT=bS+"ui-state-default";
var bU=bS+"css_right ui-icon ui-icon-";
var bR=bS+"fg-toolbar ui-toolbar ui-widget-header ui-helper-clearfix";
bF.extend(O.ext.oJUIClasses,O.ext.classes,{sPageButton:"fg-button ui-button "+bT,sPageButtonActive:"ui-state-disabled",sPageButtonDisabled:"ui-state-disabled",sPaging:"dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi ui-buttonset-multi paging_",sSortAsc:bT+" sorting_asc",sSortDesc:bT+" sorting_desc",sSortable:bT+" sorting",sSortableAsc:bT+" sorting_asc_disabled",sSortableDesc:bT+" sorting_desc_disabled",sSortableNone:bT+" sorting_disabled",sSortJUIAsc:bU+"triangle-1-n",sSortJUIDesc:bU+"triangle-1-s",sSortJUI:bU+"carat-2-n-s",sSortJUIAscAllowed:bU+"carat-1-n",sSortJUIDescAllowed:bU+"carat-1-s",sSortJUIWrapper:"DataTables_sort_wrapper",sSortIcon:"DataTables_sort_icon",sScrollHead:"dataTables_scrollHead "+bT,sScrollFoot:"dataTables_scrollFoot "+bT,sHeaderTH:bT,sFooterTH:bT,sJUIHeader:bR+" ui-corner-tl ui-corner-tr",sJUIFooter:bR+" ui-corner-bl ui-corner-br"})
}());
var bI=O.ext.pager;
function bn(bW,bR){var bS=[],bU=bI.numbers_length,bV=Math.floor(bU/2),bT=1;
if(bR<=bU){bS=bg(0,bR)
}else{if(bW<=bV){bS=bg(0,bU-2);
bS.push("ellipsis");
bS.push(bR-1)
}else{if(bW>=bR-1-bV){bS=bg(bR-(bU-2),bR);
bS.splice(0,0,"ellipsis");
bS.splice(0,0,0)
}else{bS=bg(bW-1,bW+2);
bS.push("ellipsis");
bS.push(bR-1);
bS.splice(0,0,"ellipsis");
bS.splice(0,0,0)
}}}bS.DT_el="span";
return bS
}bF.extend(bI,{simple:function(bS,bR){return["previous","next"]
},full:function(bS,bR){return["first","previous","next","last"]
},simple_numbers:function(bS,bR){return["previous",bn(bS,bR),"next"]
},full_numbers:function(bS,bR){return["first","previous",bn(bS,bR),"next","last"]
},_numbers:bn,numbers_length:7});
bF.extend(true,O.ext.renderer,{pageButton:{_:function(bX,b4,b3,b2,b1,bV){var bY=bX.oClasses;
var bU=bX.oLanguage.oPaginate;
var bT,bS,bR=0;
var bZ=function(b6,cb){var b9,b5,ca,b8;
var cc=function(cd){aG(bX,cd.data.action,true)
};
for(b9=0,b5=cb.length;
b9<b5;
b9++){b8=cb[b9];
if(bF.isArray(b8)){var b7=bF("<"+(b8.DT_el||"div")+"/>").appendTo(b6);
bZ(b7,b8)
}else{bT="";
bS="";
switch(b8){case"ellipsis":b6.append("<span>&hellip;</span>");
break;
case"first":bT=bU.sFirst;
bS=b8+(b1>0?"":" "+bY.sPageButtonDisabled);
break;
case"previous":bT=bU.sPrevious;
bS=b8+(b1>0?"":" "+bY.sPageButtonDisabled);
break;
case"next":bT=bU.sNext;
bS=b8+(b1<bV-1?"":" "+bY.sPageButtonDisabled);
break;
case"last":bT=bU.sLast;
bS=b8+(b1<bV-1?"":" "+bY.sPageButtonDisabled);
break;
default:bT=b8+1;
bS=b1===b8?bY.sPageButtonActive:"";
break
}if(bT){ca=bF("<a>",{"class":bY.sPageButton+" "+bS,"aria-controls":bX.sTableId,"data-dt-idx":bR,tabindex:bX.iTabIndex,id:b3===0&&typeof b8==="string"?bX.sTableId+"_"+b8:null}).html(bT).appendTo(b6);
bc(ca,{action:b8},cc);
bR++
}}}};
try{var bW=bF(a.activeElement).data("dt-idx");
bZ(bF(b4).empty(),b2);
if(bW!==null){bF(b4).find("[data-dt-idx="+bW+"]").focus()
}}catch(b0){}}}});
var R=function(bU,bR,bT,bS){if(!bU||bU==="-"){return -Infinity
}if(bR){bU=bD(bU,bR)
}if(bU.replace){if(bT){bU=bU.replace(bT,"")
}if(bS){bU=bU.replace(bS,"")
}}return bU*1
};
function br(bR){bF.each({num:function(bS){return R(bS,bR)
},"num-fmt":function(bS){return R(bS,bR,bG)
},"html-num":function(bS){return R(bS,bR,aV)
},"html-num-fmt":function(bS){return R(bS,bR,aV,bG)
}},function(bS,bT){J.type.order[bS+bR+"-pre"]=bT
})
}bF.extend(J.type.order,{"date-pre":function(bR){return Date.parse(bR)||0
},"html-pre":function(bR){return bB(bR)?"":bR.replace?bR.replace(/<.*?>/g,"").toLowerCase():bR+""
},"string-pre":function(bR){return bB(bR)?"":typeof bR==="string"?bR.toLowerCase():!bR.toString?"":bR.toString()
},"string-asc":function(bR,bS){return((bR<bS)?-1:((bR>bS)?1:0))
},"string-desc":function(bR,bS){return((bR<bS)?1:((bR>bS)?-1:0))
}});
br("");
bF.extend(O.ext.type.detect,[function(bT,bS){var bR=bS.oLanguage.sDecimal;
return aj(bT,bR)?"num"+bR:null
},function(bT,bS){if(bT&&(!am.test(bT)||!bv.test(bT))){return null
}var bR=Date.parse(bT);
return(bR!==null&&!isNaN(bR))||bB(bT)?"date":null
},function(bT,bS){var bR=bS.oLanguage.sDecimal;
return aj(bT,bR,true)?"num-fmt"+bR:null
},function(bT,bS){var bR=bS.oLanguage.sDecimal;
return k(bT,bR)?"html-num"+bR:null
},function(bT,bS){var bR=bS.oLanguage.sDecimal;
return k(bT,bR,true)?"html-num-fmt"+bR:null
},function(bS,bR){return bB(bS)||(typeof bS==="string"&&bS.indexOf("<")!==-1)?"html":null
}]);
bF.extend(O.ext.type.search,{html:function(bR){return bB(bR)?bR:typeof bR==="string"?bR.replace(X," ").replace(aV,""):""
},string:function(bR){return bB(bR)?bR:typeof bR==="string"?bR.replace(X," "):bR
}});
bF.extend(true,O.ext.renderer,{header:{_:function(bU,bR,bT,bS){bF(bU.nTable).on("order.dt.DT",function(bY,bV,bX,bW){if(bU!==bV){return
}var bZ=bT.idx;
bR.removeClass(bT.sSortingClass+" "+bS.sSortAsc+" "+bS.sSortDesc).addClass(bW[bZ]=="asc"?bS.sSortAsc:bW[bZ]=="desc"?bS.sSortDesc:bT.sSortingClass)
})
},jqueryui:function(bU,bR,bT,bS){var bV=bT.idx;
bF("<div/>").addClass(bS.sSortJUIWrapper).append(bR.contents()).append(bF("<span/>").addClass(bS.sSortIcon+" "+bT.sSortingClassJUI)).appendTo(bR);
bF(bU.nTable).on("order.dt.DT",function(bZ,bW,bY,bX){if(bU!==bW){return
}bR.removeClass(bS.sSortAsc+" "+bS.sSortDesc).addClass(bX[bV]=="asc"?bS.sSortAsc:bX[bV]=="desc"?bS.sSortDesc:bT.sSortingClass);
bR.find("span."+bS.sSortIcon).removeClass(bS.sSortJUIAsc+" "+bS.sSortJUIDesc+" "+bS.sSortJUI+" "+bS.sSortJUIAscAllowed+" "+bS.sSortJUIDescAllowed).addClass(bX[bV]=="asc"?bS.sSortJUIAsc:bX[bV]=="desc"?bS.sSortJUIDesc:bT.sSortingClassJUI)
})
}}});
O.render={number:function(bT,bS,bR,bU){return{display:function(bY){var bW=bY<0?"-":"";
bY=Math.abs(parseFloat(bY));
var bX=parseInt(bY,10);
var bV=bR?bS+(bY-bX).toFixed(bR).substring(2):"";
return bW+(bU||"")+bX.toString().replace(/\B(?=(\d{3})+(?!\d))/g,bT)+bV
}}
}};
function ah(bR){return function(){var bS=[an(this[O.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));
return O.ext.internal[bR].apply(this,bS)
}
}bF.extend(O.ext.internal,{_fnExternApiFunc:ah,_fnBuildAjax:av,_fnAjaxUpdate:af,_fnAjaxParameters:bL,_fnAjaxUpdateDraw:W,_fnAjaxDataSrc:bt,_fnAddColumn:P,_fnColumnOptions:a2,_fnAdjustColumnSizing:aK,_fnVisibleToColumnIndex:s,_fnColumnIndexToVisible:bJ,_fnVisbleColumns:aR,_fnGetColumns:q,_fnColumnTypes:x,_fnApplyColumnDefs:l,_fnHungarianMap:U,_fnCamelToHungarian:ab,_fnLanguageCompat:aT,_fnBrowserDetect:be,_fnAddData:aP,_fnAddTr:bQ,_fnNodeToDataIndex:bs,_fnNodeToColumnIndex:a0,_fnGetCellData:bu,_fnSetCellData:bm,_fnSplitObjNotation:ak,_fnGetObjectDataFn:ao,_fnSetObjectDataFn:ax,_fnGetDataMaster:bH,_fnClearTable:bi,_fnDeleteIndex:a5,_fnInvalidateRow:aI,_fnGetRowElements:bf,_fnCreateTr:Q,_fnBuildHead:aM,_fnDrawHead:a6,_fnDraw:a3,_fnReDraw:ai,_fnAddOptionsHtml:j,_fnDetectHeader:aw,_fnGetUniqueThs:bh,_fnFeatureHtmlFilter:r,_fnFilterComplete:w,_fnFilterCustom:ar,_fnFilterColumn:Z,_fnFilter:ay,_fnFilterCreateSearch:aX,_fnEscapeRegex:n,_fnFilterData:aE,_fnFeatureHtmlInfo:g,_fnUpdateInfo:at,_fnInfoMacros:bp,_fnInitialise:h,_fnInitComplete:aC,_fnLengthChange:aU,_fnFeatureHtmlLength:aS,_fnFeatureHtmlPaginate:aA,_fnPageChange:aG,_fnFeatureHtmlProcessing:bA,_fnProcessingDisplay:y,_fnFeatureHtmlTable:bz,_fnScrollDraw:m,_fnApplyToChildren:a8,_fnCalculateColumnWidths:bw,_fnThrottle:al,_fnConvertToWidth:ag,_fnScrollingWidthAdjust:az,_fnGetWidestNode:aL,_fnGetMaxLenString:ac,_fnStringToCss:bK,_fnScrollBarWidth:bb,_fnSortFlatten:aJ,_fnSort:z,_fnSortAria:bd,_fnSortListener:bj,_fnSortAttachListener:D,_fnSortingClasses:ae,_fnSortData:H,_fnSaveState:bo,_fnLoadState:bO,_fnSettingsFromNode:an,_fnLog:aO,_fnMap:S,_fnBindAction:bc,_fnCallbackReg:bN,_fnCallbackFire:M,_fnLengthOverflow:bl,_fnRenderer:T,_fnDataSource:A,_fnRowAttributes:ad,_fnCalculateEnd:function(){}});
bF.fn.dataTable=O;
bF.fn.dataTableSettings=O.settings;
bF.fn.dataTableExt=O.ext;
bF.fn.DataTable=function(bR){return bF(this).dataTable(bR).api()
};
bF.each(O,function(bS,bR){bF.fn.DataTable[bS]=bR
});
return bF.fn.dataTable
}))
}(window,document));
(function(j){function d(c,f){this.element=c;
this.options=j.extend({},b,f);
j(this.element).data("max-height",this.options.maxHeight);
j(this.element).data("height-margin",this.options.heightMargin);
delete this.options.maxHeight;
if(this.options.embedCSS&&!a){var h=".readmore-js-toggle, .readmore-js-section { "+this.options.sectionCSS+" } .readmore-js-section { overflow: hidden; }",g=document.createElement("style");
g.type="text/css";
g.styleSheet?g.styleSheet.cssText=h:g.appendChild(document.createTextNode(h));
document.getElementsByTagName("head")[0].appendChild(g);
a=!0
}this._defaults=b;
this._name=e;
this.init()
}var e="readmore",b={speed:100,maxHeight:200,heightMargin:16,moreLink:'<a href="#">Read More</a>',lessLink:'<a href="#">Close</a>',embedCSS:!0,sectionCSS:"display: block; width: 100%;",startOpen:!1,expandedClass:"readmore-js-expanded",collapsedClass:"readmore-js-collapsed",beforeToggle:function(){},afterToggle:function(){}},a=!1;
d.prototype={init:function(){var c=this;
j(this.element).each(function(){var f=j(this),h=f.css("max-height").replace(/[^-\d\.]/g,"")>f.data("max-height")?f.css("max-height").replace(/[^-\d\.]/g,""):f.data("max-height"),g=f.data("height-margin");
"none"!=f.css("max-height")&&f.css("max-height","none");
c.setBoxHeight(f);
if(f.outerHeight(!0)<=h+g){return !0
}f.addClass("readmore-js-section "+c.options.collapsedClass).data("collapsedHeight",h);
f.after(j(c.options.startOpen?c.options.lessLink:c.options.moreLink).on("click",function(k){c.toggleSlider(this,f,k)
}).addClass("readmore-js-toggle"));
c.options.startOpen||f.css({height:h})
});
j(window).on("resize",function(f){c.resizeBoxes()
})
},toggleSlider:function(c,g,l){l.preventDefault();
var k=this;
l=newLink=sectionClass="";
var h=!1;
l=j(g).data("collapsedHeight");
j(g).height()<=l?(l=j(g).data("expandedHeight")+"px",newLink="lessLink",h=!0,sectionClass=k.options.expandedClass):(newLink="moreLink",sectionClass=k.options.collapsedClass);
k.options.beforeToggle(c,g,h);
j(g).animate({height:l},{duration:k.options.speed,complete:function(){k.options.afterToggle(c,g,h);
j(c).replaceWith(j(k.options[newLink]).on("click",function(f){k.toggleSlider(this,g,f)
}).addClass("readmore-js-toggle"));
j(this).removeClass(k.options.collapsedClass+" "+k.options.expandedClass).addClass(sectionClass)
}})
},setBoxHeight:function(f){var g=f.clone().css({height:"auto",width:f.width(),overflow:"hidden"}).insertAfter(f),h=g.outerHeight(!0);
g.remove();
f.data("expandedHeight",h)
},resizeBoxes:function(){var c=this;
j(".readmore-js-section").each(function(){var f=j(this);
c.setBoxHeight(f);
(f.height()>f.data("expandedHeight")||f.hasClass(c.options.expandedClass)&&f.height()<f.data("expandedHeight"))&&f.css("height",f.data("expandedHeight"))
})
},destroy:function(){var c=this;
j(this.element).each(function(){var f=j(this);
f.removeClass("readmore-js-section "+c.options.collapsedClass+" "+c.options.expandedClass).css({"max-height":"",height:"auto"}).next(".readmore-js-toggle").remove();
f.removeData()
})
}};
j.fn[e]=function(c){var f=arguments;
if(void 0===c||"object"===typeof c){return this.each(function(){if(j.data(this,"plugin_"+e)){var g=j.data(this,"plugin_"+e);
g.destroy.apply(g)
}j.data(this,"plugin_"+e,new d(this,c))
})
}if("string"===typeof c&&"_"!==c[0]&&"init"!==c){return this.each(function(){var g=j.data(this,"plugin_"+e);
g instanceof d&&"function"===typeof g[c]&&g[c].apply(g,Array.prototype.slice.call(f,1))
})
}}
})(jQuery);
(function(g){g.fn.adGallery=function(k){var m={loader_image:"/content/dam/images/home/loader.gif",start_at_index:0,description_wrapper:false,thumb_opacity:0.7,animate_first_image:false,animation_speed:400,width:false,height:false,display_next_and_prev:true,display_back_and_forward:true,scroll_jump:0,slideshow:{enable:true,autostart:true,speed:8000,start_label:"Start",stop_label:"Stop",stop_on_scroll:true,countdown_prefix:"(",countdown_sufix:")",onStart:false,onStop:false},effect:"slide-hori",enable_keyboard_move:true,cycle:true,callbacks:{init:false,afterImageVisible:false,beforeImageVisible:false}};
var l=g.extend(false,m,k);
if(k&&k.slideshow){l.slideshow=g.extend(false,m.slideshow,k.slideshow)
}if(!l.slideshow.enable){l.slideshow.autostart=false
}var j=[];
g(this).each(function(){var n=new c(this,l);
j[j.length]=n
});
return j
};
function f(k,l,m){var n=parseInt(k.css("top"),10);
if(l=="left"){var j="-"+this.image_wrapper_height+"px";
k.css("top",this.image_wrapper_height+"px")
}else{var j=this.image_wrapper_height+"px";
k.css("top","-"+this.image_wrapper_height+"px")
}if(m){m.css("bottom","-"+m[0].offsetHeight+"px");
m.animate({bottom:0},this.settings.animation_speed*2)
}if(this.current_description){this.current_description.animate({bottom:"-"+this.current_description[0].offsetHeight+"px"},this.settings.animation_speed*2)
}return{old_image:{top:j},new_image:{top:n}}
}function e(k,l,n){var m=parseInt(k.css("left"),10);
if(l=="left"){var j="-"+this.image_wrapper_width+"px";
k.css("left",this.image_wrapper_width+"px")
}else{var j=this.image_wrapper_width+"px";
k.css("left","-"+this.image_wrapper_width+"px")
}if(n){n.css("bottom","-"+n[0].offsetHeight+"px");
n.animate({bottom:0},this.settings.animation_speed*2)
}if(this.current_description){this.current_description.animate({bottom:"-"+this.current_description[0].offsetHeight+"px"},this.settings.animation_speed*2)
}return{old_image:{left:j},new_image:{left:m}}
}function d(l,m,o){var k=l.width();
var j=l.height();
var n=parseInt(l.css("left"),10);
var p=parseInt(l.css("top"),10);
l.css({width:0,height:0,top:this.image_wrapper_height/2,left:this.image_wrapper_width/2});
return{old_image:{width:0,height:0,top:this.image_wrapper_height/2,left:this.image_wrapper_width/2},new_image:{width:k,height:j,top:p,left:n}}
}function b(j,k,l){j.css("opacity",0);
return{old_image:{opacity:0},new_image:{opacity:1}}
}function h(j,k,l){j.css("opacity",0);
return{old_image:{opacity:0},new_image:{opacity:1},speed:0}
}function c(k,j){this.init(k,j)
}c.prototype={wrapper:false,image_wrapper:false,gallery_info:false,nav:false,loader:false,preloads:false,thumbs_wrapper:false,scroll_back:false,scroll_forward:false,next_link:false,prev_link:false,slideshow:false,image_wrapper_width:0,image_wrapper_height:0,current_index:0,current_image:false,current_description:false,nav_display_width:0,settings:false,images:false,in_transition:false,animations:false,init:function(n,m){var l=this;
this.wrapper=g(n);
this.settings=m;
this.setupElements();
this.setupAnimations();
if(this.settings.width){this.image_wrapper_width=this.settings.width;
this.image_wrapper.width(this.settings.width);
this.wrapper.width(this.settings.width)
}else{this.image_wrapper_width=this.image_wrapper.width()
}if(this.settings.height){this.image_wrapper_height=this.settings.height;
this.image_wrapper.height(this.settings.height)
}else{this.image_wrapper_height=this.image_wrapper.height()
}this.nav_display_width=this.nav.width();
this.current_index=0;
this.current_image=false;
this.current_description=false;
this.in_transition=false;
this.findImages();
if(this.settings.display_next_and_prev){this.initNextAndPrev()
}var j=function(o){return l.nextImage(o)
};
this.slideshow=new a(j,this.settings.slideshow);
this.controls.append(this.slideshow.create());
if(this.settings.slideshow.enable){this.slideshow.enable()
}else{this.slideshow.disable()
}if(this.settings.display_back_and_forward){this.initBackAndForward()
}if(this.settings.enable_keyboard_move){this.initKeyEvents()
}var k=parseInt(this.settings.start_at_index,10);
if(window.location.hash&&window.location.hash.indexOf("#ad-image")===0){k=window.location.hash.replace(/[^0-9]+/g,"");
if((k*1)!=k){k=this.settings.start_at_index
}}this.loading(true);
this.showImage(k,function(){if(l.settings.slideshow.autostart){l.preloadImage(k+1);
l.slideshow.start()
}});
this.fireCallback(this.settings.callbacks.init)
},setupAnimations:function(){this.animations={"slide-vert":f,"slide-hori":e,resize:d,fade:b,none:h}
},setupElements:function(){this.controls=this.wrapper.find(".ad-controls");
this.gallery_info=g('<p class="ad-info"></p>');
this.controls.append(this.gallery_info);
this.image_wrapper=this.wrapper.find(".ad-image-wrapper");
this.image_wrapper.empty();
this.nav=this.wrapper.find(".ad-nav");
this.thumbs_wrapper=this.nav.find(".ad-thumbs");
this.preloads=g('<div class="ad-preloads"></div>');
this.loader=g('<img class="ad-loader" src="'+this.settings.loader_image+'">');
this.image_wrapper.append(this.loader);
this.loader.hide();
g(document.body).append(this.preloads)
},loading:function(j){if(j){this.loader.show()
}else{this.loader.hide()
}},addAnimation:function(j,k){if(g.isFunction(k)){this.animations[j]=k
}},findImages:function(){var o=this;
this.images=[];
var n=0;
var m=0;
var l=this.thumbs_wrapper.find("a");
var k=l.length;
if(this.settings.thumb_opacity<1){l.find("img").css("opacity",this.settings.thumb_opacity)
}l.each(function(q){var s=g(this);
var r=s.attr("href");
var w=s.attr("target");
var p=s.find("img");
if(!o.isImageLoaded(p[0])){p.load(function(){n+=this.parentNode.parentNode.offsetWidth;
m++
})
}else{n+=p[0].parentNode.parentNode.offsetWidth;
m++
}s.addClass("ad-thumb"+q);
s.click(function(){o.showImage(q);
o.slideshow.stop();
return false
}).hover(function(){if(!g(this).is(".ad-active")&&o.settings.thumb_opacity<1){g(this).find("img").fadeTo(300,1)
}o.preloadImage(q)
},function(){if(!g(this).is(".ad-active")&&o.settings.thumb_opacity<1){g(this).find("img").fadeTo(300,o.settings.thumb_opacity)
}});
var s=false;
if(p.data("ad-link")){s=p.data("ad-link")
}else{if(p.attr("longdesc")&&p.attr("longdesc").length){s=p.attr("longdesc")
}}var v=false;
if(p.data("ad-desc")){v=p.data("ad-desc")
}else{if(p.attr("alt")&&p.attr("alt").length){v=p.attr("alt")
}}var u=false;
if(p.data("ad-title")){u=p.data("ad-title")
}else{if(p.attr("title")&&p.attr("title").length){u=p.attr("title")
}}o.images[q]={thumb:p.attr("src"),image:r,error:false,preloaded:false,desc:v,title:u,size:false,link:s,target:w}
});
var j=setInterval(function(){if(k==m){n-=100;
var r=o.nav.find(".ad-thumb-list");
r.css("width",n+"px");
var q=1;
var p=r.height();
while(q<201){r.css("width",(n+q)+"px");
if(p!=r.height()){break
}p=r.height();
q++
}clearInterval(j)
}},100)
},initKeyEvents:function(){var j=this;
g(document).keydown(function(k){if(k.keyCode==39){j.nextImage();
j.slideshow.stop()
}else{if(k.keyCode==37){j.prevImage();
j.slideshow.stop()
}}})
},initNextAndPrev:function(){this.next_link=g('<div class="ad-next"><div class="ad-next-image"></div></div>');
this.prev_link=g('<div class="ad-prev"><div class="ad-prev-image"></div></div>');
this.image_wrapper.append(this.next_link);
this.image_wrapper.append(this.prev_link);
var j=this;
this.prev_link.add(this.next_link).mouseover(function(k){g(this).css("height",j.image_wrapper_height);
g(this).find("div").show()
}).mouseout(function(k){g(this).find("div").hide()
}).click(function(){if(g(this).is(".ad-next")){j.nextImage();
j.slideshow.stop()
}else{j.prevImage();
j.slideshow.stop()
}}).find("div").css("opacity",0.7)
},initBackAndForward:function(){var l=this;
this.scroll_forward=g('<div class="ad-forward"></div>');
this.scroll_back=g('<div class="ad-back"></div>');
this.nav.append(this.scroll_forward);
this.nav.prepend(this.scroll_back);
var k=0;
var j=false;
g(this.scroll_back).add(this.scroll_forward).click(function(){var m=l.nav_display_width-50;
if(l.settings.scroll_jump>0){var m=l.settings.scroll_jump
}if(g(this).is(".ad-forward")){var n=l.thumbs_wrapper.scrollLeft()+m
}else{var n=l.thumbs_wrapper.scrollLeft()-m
}if(l.settings.slideshow.stop_on_scroll){l.slideshow.stop()
}l.thumbs_wrapper.animate({scrollLeft:n+"px"});
return false
}).css("opacity",0.6).hover(function(){var m="left";
if(g(this).is(".ad-forward")){m="right"
}j=setInterval(function(){k++;
if(k>30&&l.settings.slideshow.stop_on_scroll){l.slideshow.stop()
}var n=l.thumbs_wrapper.scrollLeft()+1;
if(m=="left"){n=l.thumbs_wrapper.scrollLeft()-1
}l.thumbs_wrapper.scrollLeft(n)
},10);
g(this).css("opacity",1)
},function(){k=0;
clearInterval(j);
g(this).css("opacity",0.6)
})
},_afterShow:function(){this.gallery_info.html((this.current_index+1)+" / "+this.images.length);
if(!this.settings.cycle){this.prev_link.show().css("height",this.image_wrapper_height);
this.next_link.show().css("height",this.image_wrapper_height);
if(this.current_index==(this.images.length-1)){this.next_link.hide()
}if(this.current_index==0){this.prev_link.hide()
}}this.fireCallback(this.settings.callbacks.afterImageVisible)
},_getContainedImageSize:function(k,j){if(j>this.image_wrapper_height){var l=k/j;
j=this.image_wrapper_height;
k=this.image_wrapper_height*l
}if(k>this.image_wrapper_width){var l=j/k;
k=this.image_wrapper_width;
j=this.image_wrapper_width*l
}return{width:k,height:j}
},_centerImage:function(m,k,j){m.css("top","0px");
if(j<this.image_wrapper_height){var l=this.image_wrapper_height-j;
m.css("top",(l/2)+"px")
}m.css("left","0px");
if(k<this.image_wrapper_width){var l=this.image_wrapper_width-k;
m.css("left",(l/2)+"px")
}},_getDescription:function(j){var l=false;
if(j.desc.length||j.title.length){var k="";
if(j.title.length){k='<strong class="ad-description-title">'+j.title+"</strong>"
}var l="";
if(j.desc.length){l="<span>"+j.desc+"</span>"
}l=g('<p class="ad-image-description">'+k+l+"</p>")
}return l
},showImage:function(j,m){if(this.images[j]&&!this.in_transition){var k=this;
var l=this.images[j];
this.in_transition=true;
if(!l.preloaded){this.loading(true);
this.preloadImage(j,function(){k.loading(false);
k._showWhenLoaded(j,m)
})
}else{this._showWhenLoaded(j,m)
}}},_showWhenLoaded:function(r,y){if(this.images[r]){var k=this;
var m=this.images[r];
var n=g(document.createElement("div")).addClass("ad-image");
var p=g(new Image()).attr("src",m.image);
if(m.desc!=false&&m.desc!="false"){p.attr("alt",m.desc)
}if(m.link){var v=g('<a href="'+m.link+'" target="'+m.target+'"></a>');
v.append(p);
n.append(v)
}else{n.append(p)
}this.image_wrapper.prepend(n);
var z=this._getContainedImageSize(m.size.width,m.size.height);
p.attr("width",z.width);
p.attr("height",z.height);
n.css({width:z.width+"px",height:z.height+"px"});
this._centerImage(n,z.width,z.height);
var q=this._getDescription(m,n);
if(q){if(!this.settings.description_wrapper){n.append(q);
var j=z.width-parseInt(q.css("padding-left"),10)-parseInt(q.css("padding-right"),10);
q.css("width",j+"px")
}else{this.settings.description_wrapper.append(q)
}}this.highLightThumb(this.nav.find(".ad-thumb"+r));
var w="right";
if(this.current_index<r){w="left"
}this.fireCallback(this.settings.callbacks.beforeImageVisible);
if(this.current_image||this.settings.animate_first_image){var x=this.settings.animation_speed;
var u="swing";
var o=this.animations[this.settings.effect].call(this,n,w,q);
if(typeof o.speed!="undefined"){x=o.speed
}if(typeof o.easing!="undefined"){u=o.easing
}if(this.current_image){var l=this.current_image;
var s=this.current_description;
l.animate(o.old_image,x,u,function(){l.remove();
if(s){s.remove()
}})
}n.animate(o.new_image,x,u,function(){k.current_index=r;
k.current_image=n;
k.current_description=q;
k.in_transition=false;
k._afterShow();
k.fireCallback(y)
})
}else{this.current_index=r;
this.current_image=n;
k.current_description=q;
this.in_transition=false;
k._afterShow();
this.fireCallback(y)
}}},nextIndex:function(){if(this.current_index==(this.images.length-1)){if(!this.settings.cycle){return false
}var j=0
}else{var j=this.current_index+1
}return j
},nextImage:function(k){var j=this.nextIndex();
if(j===false){return false
}this.preloadImage(j+1);
this.showImage(j,k);
return true
},prevIndex:function(){if(this.current_index==0){if(!this.settings.cycle){return false
}var j=this.images.length-1
}else{var j=this.current_index-1
}return j
},prevImage:function(k){var j=this.prevIndex();
if(j===false){return false
}this.preloadImage(j-1);
this.showImage(j,k);
return true
},preloadAll:function(){var k=this;
var j=0;
function l(){if(j<k.images.length){j++;
k.preloadImage(j,l)
}}k.preloadImage(j,l)
},preloadImage:function(k,n){if(this.images[k]){var m=this.images[k];
if(!this.images[k].preloaded){var j=g(new Image());
j.attr("src",m.image);
if(!this.isImageLoaded(j[0])){this.preloads.append(j);
var l=this;
j.load(function(){m.preloaded=true;
m.size={width:this.width,height:this.height};
l.fireCallback(n)
}).error(function(){m.error=true;
m.preloaded=false;
m.size=false
})
}else{m.preloaded=true;
m.size={width:j[0].width,height:j[0].height};
this.fireCallback(n)
}}else{this.fireCallback(n)
}}},isImageLoaded:function(j){if(typeof j.complete!="undefined"&&!j.complete){return false
}if(typeof j.naturalWidth!="undefined"&&j.naturalWidth==0){return false
}return true
},highLightThumb:function(j){this.thumbs_wrapper.find(".ad-active").removeClass("ad-active");
j.addClass("ad-active");
if(this.settings.thumb_opacity<1){this.thumbs_wrapper.find("a:not(.ad-active) img").fadeTo(300,this.settings.thumb_opacity);
j.find("img").fadeTo(300,1)
}var k=j[0].parentNode.offsetLeft;
k-=(this.nav_display_width/2)-(j[0].offsetWidth/2);
this.thumbs_wrapper.animate({scrollLeft:k+"px"})
},fireCallback:function(j){if(g.isFunction(j)){j.call(this)
}}};
function a(j,k){this.init(j,k)
}a.prototype={start_link:false,stop_link:false,countdown:false,controls:false,settings:false,nextimage_callback:false,enabled:false,running:false,countdown_interval:false,init:function(j,l){var k=this;
this.nextimage_callback=j;
this.settings=l
},create:function(){this.start_link=g('<span class="ad-slideshow-start">'+this.settings.start_label+"</span>");
this.stop_link=g('<span class="ad-slideshow-stop">'+this.settings.stop_label+"</span>");
this.countdown=g('<span class="ad-slideshow-countdown"></span>');
this.controls=g('<div class="ad-slideshow-controls"></div>');
this.controls.append(this.start_link).append(this.stop_link).append(this.countdown);
this.countdown.hide();
var j=this;
this.start_link.click(function(){j.start()
});
this.stop_link.click(function(){j.stop()
});
g(document).keydown(function(k){if(k.keyCode==83){if(j.running){j.stop()
}else{j.start()
}}});
return this.controls
},disable:function(){this.enabled=false;
this.stop();
this.controls.hide()
},enable:function(){this.enabled=true;
this.controls.show()
},toggle:function(){if(this.enabled){this.disable()
}else{this.enable()
}},start:function(){if(this.running||!this.enabled){return false
}var j=this;
this.running=true;
this.controls.addClass("ad-slideshow-running");
this._next();
this.fireCallback(this.settings.onStart);
return true
},stop:function(){if(!this.running){return false
}this.running=false;
this.countdown.hide();
this.controls.removeClass("ad-slideshow-running");
clearInterval(this.countdown_interval);
this.fireCallback(this.settings.onStop);
return true
},_next:function(){var l=this;
var m=this.settings.countdown_prefix;
var k=this.settings.countdown_sufix;
clearInterval(l.countdown_interval);
this.countdown.show().html(m+(this.settings.speed/1000)+k);
var j=0;
this.countdown_interval=setInterval(function(){j+=1000;
if(j>=l.settings.speed){var o=function(){if(l.running){l._next()
}j=0
};
if(!l.nextimage_callback(o)){l.stop()
}j=0
}var n=parseInt(l.countdown.text().replace(/[^0-9]/g,""),10);
n--;
if(n>0){l.countdown.html(m+n+k)
}},1000)
},fireCallback:function(j){if(g.isFunction(j)){j.call(this)
}}}
})(jQuery);
function setCalendarListMessage(d,c,a){if(a==""){jqcal(d+" .noEventsMessage").html("")
}else{if(a=="no event"){var b=jQuery(c).datepicker("getDate");
jqcal(d+" .noEventsMessage").html('<img style="position:relative;top:6px;left:10px;margin-bottom:3px;" src="/content/dam/uiResources/jQuery/css/custom-theme/get_info.png" alt="" /><div class="smallCalendarNoEvent" style="">There are currently no items scheduled for '+b.toDateString()+"</div>")
}}}function setCalendarListLoadingMessage(b,a){if(a){clearCalendarListListEvent(b,true,true);
jqcal(b+" .loadingMessage").html('<div class="" style=""><img style="width:15%;margin-left:auto;margin-right:auto;opacity:0.6;display:block;margin-top:45px;" src="/content/dam/uiResources/uiwCalendarList/loadingGif.gif"/></div>');
jQuery(b+" .smallCalendarEventHolder .events").css("display","none");
jQuery(b+" .smallCalendarEventHolder .sigDates").css("display","none")
}else{jqcal(b+" .loadingMessage").html("");
jQuery(b+" .smallCalendarEventHolder .events").css("display","block");
jQuery(b+" .smallCalendarEventHolder .sigDates").css("display","block")
}}function clearCalendarListListEvent(c,b,a){if(b){jQuery(c+" .smallCalendarEventHolder .events").html("")
}if(a){jQuery(c+" .smallCalendarEventHolder .sigDates").html("")
}}function cacheCalendarListEvents(c,e,d){console.log("caching");
var b=new Date(c,e,1,0,0,0,0);
var a=new Date(c,e,1,23,59,59,999);
a.setMonth(a.getMonth()+1);
a.setDate(a.getDate()-1);
if(d.cacheStatus[c+" "+e]!==undefined&&(d.cacheStatus[c+" "+e].events==false||d.cacheStatus[c+" "+e].sigDates==false)){}else{if(d.cacheStatus[c+" "+e]===undefined){d.cacheStatus[c+" "+e]=new Object();
d.cacheStatus[c+" "+e].events=false;
d.cacheStatus[c+" "+e].sigDates=false;
setCalendarListLoadingMessage(d.selectorComponent,true);
jQuery.ajax({url:"/bin/querybuilder.json",type:"POST",data:"property=jcr:primaryType&property.value=cq:CalendarEvent&3_group.2_daterange.lowerBound="+b.getTime()+"&3_group.2_daterange.property=end&3_group.2_daterange.upperBound="+a.getTime()+"&3_group.1_daterange.lowerBound="+b.getTime()+"&3_group.1_daterange.property=start&3_group.1_daterange.upperBound="+a.getTime()+"&3_group.p.or=true&p.limit=250&p.nodedepth=1&p.hits=full&"+d.data.paths+"&"+d.data.tags,async:true,success:function(h){for(var f=0;
f<h.hits.length;
f++){var g=new Date(Date.parse(h.hits[f].start));
if(h.hits[f].isDate==true){g=adjustDate(g);
h.hits[f].start=adjustDate(new Date(Date.parse(h.hits[f].start)));
h.hits[f].end=adjustDate(new Date(Date.parse(h.hits[f].end)));
h.hits[f].isDate==false
}var j=g.getFullYear()+" "+g.getMonth();
if((""+g.getDate()).length==1){j+=" 0"+g.getDate()
}else{j+=" "+g.getDate()
}if(d.cache.events[j]===undefined){d.cache.events[j]=new Array()
}d.cache.events[j].push(h.hits[f])
}d.cacheStatus[c+" "+e].events=true;
if(d.cacheStatus[c+" "+e].sigDates){var k=jQuery(d.selectorCalendar).datepicker("getDate");
setCalendarListLoadingMessage(d.selectorComponent,false);
jQuery(d.selectorCalendar).datepicker("refresh");
if(d.visibleDate.year==k.getFullYear()&&d.visibleDate.month==k.getMonth()&&d.visibleDate.year==c&&d.visibleDate.month==e){selectCalendarListDate(d)
}}console.log(d.cache)
}});
jQuery.ajax({url:"/bin/querybuilder.json",type:"POST",data:"property=sling:resourceType&property.value=ryerson/components/content/uiwSignificantDate&3_group.2_daterange.lowerBound="+b.getTime()+"&3_group.2_daterange.property=toDate&3_group.2_daterange.upperBound="+a.getTime()+"&3_group.1_daterange.lowerBound="+b.getTime()+"&3_group.1_daterange.property=fromDate&3_group.1_daterange.upperBound="+a.getTime()+"&3_group.p.or=true&p.limit=250&p.nodedepth=1&p.hits=full&"+d.data.pathsSig+"&"+d.data.tagsSig,async:true,success:function(h){for(var f=0;
f<h.hits.length;
f++){var g=new Date(Date.parse(h.hits[f].fromDate));
var j=g.getFullYear()+" "+g.getMonth();
if((""+g.getDate()).length==1){j+=" 0"+g.getDate()
}else{j+=" "+g.getDate()
}if(d.cache.sigDates[j]===undefined){d.cache.sigDates[j]=new Array()
}d.cache.sigDates[j].push(h.hits[f])
}d.cacheStatus[c+" "+e].sigDates=true;
if(d.cacheStatus[c+" "+e].events){var k=jQuery(d.selectorCalendar).datepicker("getDate");
setCalendarListLoadingMessage(d.selectorComponent,false);
jQuery(d.selectorCalendar).datepicker("refresh");
if(d.visibleDate.year==k.getFullYear()&&d.visibleDate.month==k.getMonth()&&d.visibleDate.year==c&&d.visibleDate.month==e){selectCalendarListDate(d)
}}}})
}}}function hasMinNumberOfEvents(b,c,e){var a=0;
for(i=0;
i<b.length;
i++){var d=b[i].substring(0,4);
var f=b[i].substring(5,6);
var g=b[i].substring(7,9);
var h=new Date(d,f,g,0,0,0,0);
if(h>c){a++
}}if(a>=e){return true
}else{return false
}}function adjustDate(a){var b=new Date(a.getUTCFullYear(),a.getUTCMonth(),a.getUTCDate(),a.getUTCHours(),a.getUTCMinutes(),a.getUTCSeconds());
console.log(a);
console.log(b);
return b
}function populateFutureCalendarListEvents(b,a,e){setCalendarListLoadingMessage(e.selectorComponent,true);
var c=b;
var f=false;
var d=false;
if(a=="Events Only"){d=true
}else{if(a=="Significant Dates Only"){f=true
}}if(a=="Events Only"||a=="Events and Significant Dates"){jQuery.ajax({url:"/bin/querybuilder.json",type:"POST",data:"property=jcr:primaryType&property.value=cq:CalendarEvent&3_group.1_daterange.lowerBound="+c.getTime()+"&3_group.1_daterange.property=@start&3_group.p.or=true&orderby=@start&orderby.sort=asc&p.limit=3&p.nodedepth=1&p.hits=full&"+e.data.paths+"&"+e.data.tags,async:true,success:function(j){var h=e.calendar.datepicker("getDate");
if(b.getDate()==h.getDate()&&b.getMonth()==h.getMonth()&&b.getFullYear()==h.getFullYear()&&b.getMonth()==e.visibleDate.month&&b.getFullYear()==e.visibleDate.year){clearCalendarListListEvent(e.selectorComponent,true,false);
for(var g=0;
g<j.hits.length;
g++){if(j.hits[g].isDate==true){j.hits[g].start=adjustDate(new Date(Date.parse(j.hits[g].start)));
j.hits[g].end=adjustDate(new Date(Date.parse(j.hits[g].end)));
j.hits[g].isDate==false
}addCalendarListEvent(j.hits[g],"event",e.selectorComponent)
}f=true;
if(f&&d){setCalendarListMessage(e.selectorComponent,e.selectorCalendar,"no event");
setCalendarListLoadingMessage(e.selectorComponent,false)
}}}})
}if(a=="Significant Dates Only"||a=="Events and Significant Dates"){jQuery.ajax({url:"/bin/querybuilder.json",type:"POST",data:"property=sling:resourceType&property.value=ryerson/components/content/uiwSignificantDate&3_group.1_daterange.lowerBound="+c.getTime()+"&3_group.1_daterange.property=fromDate&3_group.p.or=true&orderby=@fromDate&orderby.sort=asc&p.limit=2&p.nodedepth=1&p.hits=full&"+e.data.pathsSig+"&"+e.data.tagsSig,async:true,success:function(j){var h=e.calendar.datepicker("getDate");
if(b.getDate()==h.getDate()&&b.getMonth()==h.getMonth()&&b.getFullYear()==h.getFullYear()&&b.getMonth()==e.visibleDate.month&&b.getFullYear()==e.visibleDate.year){clearCalendarListListEvent(e.selectorComponent,false,true);
for(var g=0;
g<j.hits.length;
g++){addCalendarListEvent(j.hits[g],"sigDate",e.selectorComponent)
}d=true;
if(f&&d&&b.getDate()==h.getDate()&&b.getMonth()==h.getMonth()&&b.getFullYear()==h.getFullYear()){setCalendarListMessage(e.selectorComponent,e.selectorCalendar,"no event");
setCalendarListLoadingMessage(e.selectorComponent,false)
}}}})
}}function selectCalendarListDate(e){setCalendarListMessage(e.selectorComponent,e.selectorCalendar,"");
var a=jQuery(e.selectorComponent+" .calendarEventOptionsPanel .checkListOn").text();
var c=jqcal(e.selectorCalendar).datepicker("getDate").getTime();
var b=new Date(c);
var g=b.getFullYear()+" "+b.getMonth();
if((""+b.getDate()).length==1){g+=" 0"+b.getDate()
}else{g+=" "+b.getDate()
}if(e.cacheStatus[b.getFullYear()+" "+b.getMonth()].events&&e.cacheStatus[b.getFullYear()+" "+b.getMonth()].sigDates){clearCalendarListListEvent(e.selectorComponent,true,true);
setCalendarListLoadingMessage(e.selectorComponent,false);
var f=true;
if(a=="Events Only"){if(g in e.cache.events){f=false;
for(var d=0;
d<e.cache.events[g].length;
d++){addCalendarListEvent(e.cache.events[g][d],"event",e.selectorComponent)
}}}else{if(a=="Significant Dates Only"){if(g in e.cache.sigDates){f=false;
for(var d=0;
d<e.cache.sigDates[g].length;
d++){addCalendarListEvent(e.cache.sigDates[g][d],"sigDate",e.selectorComponent)
}}}else{if(g in e.cache.events){f=false;
for(var d=0;
d<e.cache.events[g].length;
d++){addCalendarListEvent(e.cache.events[g][d],"event",e.selectorComponent)
}}if(g in e.cache.sigDates){f=false;
for(var d=0;
d<e.cache.sigDates[g].length;
d++){addCalendarListEvent(e.cache.sigDates[g][d],"sigDate",e.selectorComponent)
}}}}if(f){if(!(e.cacheStatus[b.getFullYear()+" "+b.getMonth()]!==undefined&&(e.cacheStatus[b.getFullYear()+" "+b.getMonth()].events==false||e.cacheStatus[b.getFullYear()+" "+b.getMonth()].sigDates==false))){populateFutureCalendarListEvents(b,a,e)
}}}}function addCalendarListEvent(a,e,g){var c=(new Date()).getTime();
if(e=="event"){var f=a.linkname;
var b=new Date(a.start);
var d=new Date(a.end);
var j=a["jcr:path"];
j=j.substring(0,j.indexOf("/jcr:content"))+".html";
var h=b.toDateString();
if(b.toDateString()!=d.toDateString()){h+=" - "+d.toDateString()
}if(f===undefined||f.length==0){f=a["jcr:title"]
}jQuery(g+" .smallCalendarEventHolder .events").append('<div class="smallCalendarEvent eventListItem animClass'+c+'" style="opacity:0;"><div class="smallCalendarDate">'+h+'</div><div class="smallCalendarTitle"><a href="'+j+'">'+f+"</a></div></div>");
jQuery(g+" .smallCalendarEventHolder .events .animClass"+c+"").animate({opacity:1},500)
}else{if(e=="sigDate"){var b=new Date(a.fromDate);
var d=new Date(a.toDate);
var h="";
var j=a["jcr:path"];
j=j.substring(0,j.indexOf("/jcr:content"))+".html";
if(a.fromDate!=undefined){h+=b.toDateString()
}if(b.toDateString()!=d.toDateString()){h+=" - "+d.toDateString()
}jQuery(g+" .smallCalendarEventHolder .sigDates").append('<div class="smallCalendarEvent sigEventListItem animClass'+c+'" style="opacity:0;"><div class="smallCalendarDate">'+h+'</div><div class="smallCalendarTitle"><a href="'+j+'">'+a.title+"</a></div></div>");
jQuery(g+" .smallCalendarEventHolder .sigDates .animClass"+c+"").animate({opacity:1},500)
}}}function addParameter(a,h,d,b){replaceDuplicates=true;
if(a.indexOf("#")>0){var j=a.indexOf("#");
urlhash=a.substring(a.indexOf("#"),a.length)
}else{urlhash="";
j=a.length
}sourceUrl=a.substring(0,j);
var c=sourceUrl.split("?");
var f="";
if(c.length>1){var k=c[1].split("&");
for(var e=0;
(e<k.length);
e++){var g=k[e].split("=");
if(!(replaceDuplicates&&g[0]==h)){if(f==""){f="?"
}else{f+="&"
}f+=g[0]+"="+(g[1]?g[1]:"")
}}}if(f==""){f="?"
}if(b){f="?"+h+"="+d+(f.length>1?"&"+f.substring(1):"")
}else{if(f!==""&&f!="?"){f+="&"
}f+=h+"="+(d?d:"")
}return c[0]+f+urlhash
}function setCalendarBasicLoadingMessage(b,a){if(a){var c=jqcal(b.selectorComponent+" .smallCalendar").height();
b.state="loading"
}else{}}function cacheCalendarBasicEvents(c,e,d){var b=new Date(c,e,1,0,0,0,0);
var a=new Date(c,e,1,23,59,59,999);
a.setMonth(a.getMonth()+1);
a.setDate(a.getDate()-1);
if(d.cacheStatus[c+" "+e]!==undefined&&(d.cacheStatus[c+" "+e].events==false||d.cacheStatus[c+" "+e].sigDates==false)){}else{if(d.cacheStatus[c+" "+e]===undefined){d.cacheStatus[c+" "+e]=new Object();
d.cacheStatus[c+" "+e].events=false;
setCalendarBasicLoadingMessage(d,true);
jQuery.ajax({url:"/bin/querybuilder.json",type:"POST",data:"property=jcr:primaryType&property.value=cq:CalendarEvent&3_group.2_daterange.lowerBound="+b.getTime()+"&3_group.2_daterange.property=end&3_group.2_daterange.upperBound="+a.getTime()+"&3_group.1_daterange.lowerBound="+b.getTime()+"&3_group.1_daterange.property=start&3_group.1_daterange.upperBound="+a.getTime()+"&3_group.p.or=true&p.limit=250&p.nodedepth=1&p.hits=full&"+d.data.paths+"&"+d.data.tags,async:true,success:function(h){for(var f=0;
f<h.hits.length;
f++){var g=new Date(Date.parse(h.hits[f].start));
if(h.hits[f].isDate==true){g=adjustDate(g);
h.hits[f].start=adjustDate(new Date(Date.parse(h.hits[f].start)));
h.hits[f].end=adjustDate(new Date(Date.parse(h.hits[f].end)));
h.hits[f].isDate==false
}var j=g.getFullYear()+" "+g.getMonth();
if((""+g.getDate()).length==1){j+=" 0"+g.getDate()
}else{j+=" "+g.getDate()
}if(d.cache.events[j]===undefined){d.cache.events[j]=new Array()
}d.cache.events[j].push(h.hits[f])
}d.cacheStatus[c+" "+e].events=true;
setCalendarBasicLoadingMessage(d,false);
jQuery(d.selectorCalendar).datepicker("refresh")
}})
}}}function selectCalendarBasicDate(d){var a=jQuery(d.selectorComponent+" .calendarEventOptionsPanel .checkListOn").text();
var c=jqcal(d.selectorCalendar).datepicker("getDate").getTime();
var b=new Date(c);
var f=b.getFullYear()+" "+b.getMonth();
if((""+b.getDate()).length==1){f+=" 0"+b.getDate()
}else{f+=" "+b.getDate()
}if(d.cacheStatus[b.getFullYear()+" "+b.getMonth()].events){setCalendarBasicLoadingMessage(d,false);
if(f in d.cache.events){if(d.cache.events[f].length==1){var e=d.cache.events[f][0]["jcr:path"];
e=e.substring(0,e.indexOf("/jcr:content"))+".html";
window.location=e
}else{var e=addParameter(d.eventListPath+".html","compPath",d.calendarPath,false);
e=addParameter(e,"eventDate",b.getFullYear()+"-"+b.getMonth()+"-"+b.getDate(),false);
window.location=e
}}}}(function(b,a,c){(function(d){if(typeof define==="function"&&define.amd){define(["jquery"],d)
}else{if(jQuery&&!jQuery.fn.qtip){d(jQuery)
}}}(function(ax){var U=true,J=false,ai=null,ad="x",ac="y",O="width",aC="height",p="top",d="left",ay="bottom",m="right",L="center",w="flip",ab="flipinvert",q="shift",B,aE,ao,j,aL={},r="qtip",H="data-hasqtip",af="data-qtip-id",an=["ui-widget","ui-tooltip"],A="."+r,ag="click dblclick mousedown mouseup mousemove mouseleave mouseenter".split(" "),F=r+"-fixed",S=r+"-default",Q=r+"-focus",aK=r+"-hover",Z=r+"-disabled",aJ="_replacedByqTip",I="oldtitle",aI,u={ie:(function(){for(var C=4,X=a.createElement("div");
(X.innerHTML="<!--[if gt IE "+C+"]><i></i><![endif]-->")&&X.getElementsByTagName("i")[0];
C+=1){}return C>4?C:NaN
}()),iOS:parseFloat((""+(/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent)||[0,""])[1]).replace("undefined","3_2").replace("_",".").replace("_",""))||J};
function aA(Y,X,aM,C){this.id=aM;
this.target=Y;
this.tooltip=ai;
this.elements={target:Y};
this._id=r+"-"+aM;
this.timers={img:{}};
this.options=X;
this.plugins={};
this.cache={event:{},target:ax(),disabled:J,attr:C,onTooltip:J,lastClass:""};
this.rendered=this.destroyed=this.disabled=this.waiting=this.hiddenDuringWait=this.positioning=this.triggering=J
}aE=aA.prototype;
aE._when=function(C){return ax.when.apply(ax,C)
};
aE.render=function(aO){if(this.rendered||this.destroyed){return this
}var aR=this,aU=this.options,X=this.cache,C=this.elements,aQ=aU.content.text,aN=aU.content.title,aM=aU.content.button,aP=aU.position,Y="."+this._id+" ",aT=[],aS;
ax.attr(this.target[0],"aria-describedby",this._id);
X.posClass=this._createPosClass((this.position={my:aP.my,at:aP.at}).my);
this.tooltip=C.tooltip=aS=ax("<div/>",{id:this._id,"class":[r,S,aU.style.classes,X.posClass].join(" "),width:aU.style.width||"",height:aU.style.height||"",tracking:aP.target==="mouse"&&aP.adjust.mouse,role:"alert","aria-live":"polite","aria-atomic":J,"aria-describedby":this._id+"-content","aria-hidden":U}).toggleClass(Z,this.disabled).attr(af,this.id).data(r,this).appendTo(aP.container).append(C.content=ax("<div />",{"class":r+"-content",id:this._id+"-content","aria-atomic":U}));
this.rendered=-1;
this.positioning=U;
if(aN){this._createTitle();
if(!ax.isFunction(aN)){aT.push(this._updateTitle(aN,J))
}}if(aM){this._createButton()
}if(!ax.isFunction(aQ)){aT.push(this._updateContent(aQ,J))
}this.rendered=U;
this._setWidget();
ax.each(aL,function(aW){var aV;
if(this.initialize==="render"&&(aV=this(aR))){aR.plugins[aW]=aV
}});
this._unassignEvents();
this._assignEvents();
this._when(aT).then(function(){aR._trigger("render");
aR.positioning=J;
if(!aR.hiddenDuringWait&&(aU.show.ready||aO)){aR.toggle(U,X.event,J)
}aR.hiddenDuringWait=J
});
B.api[this.id]=this;
return this
};
aE.destroy=function(C){if(this.destroyed){return this.target
}function X(){if(this.destroyed){return
}this.destroyed=U;
var Y=this.target,aM=Y.attr(I),aN;
if(this.rendered){this.tooltip.stop(1,0).find("*").remove().end().remove()
}ax.each(this.plugins,function(aO){this.destroy&&this.destroy()
});
for(aN in this.timers){clearTimeout(this.timers[aN])
}Y.removeData(r).removeAttr(af).removeAttr(H).removeAttr("aria-describedby");
if(this.options.suppress&&aM){Y.attr("title",aM).removeAttr(I)
}this._unassignEvents();
this.options=this.elements=this.cache=this.timers=this.plugins=this.mouse=ai;
delete B.api[this.id]
}if((C!==U||this.triggering==="hide")&&this.rendered){this.tooltip.one("tooltiphidden",ax.proxy(X,this));
!this.triggering&&this.hide()
}else{X.call(this)
}return this.target
};
function D(C){return C===ai||ax.type(C)!=="object"
}function T(C){return !(ax.isFunction(C)||(C&&C.attr)||C.length||(ax.type(C)==="object"&&(C.jquery||C.then)))
}function x(Y){var X,aN,aM,C;
if(D(Y)){return J
}if(D(Y.metadata)){Y.metadata={type:Y.metadata}
}if("content" in Y){X=Y.content;
if(D(X)||X.jquery||X.done){X=Y.content={text:(aN=T(X)?J:X)}
}else{aN=X.text
}if("ajax" in X){aM=X.ajax;
C=aM&&aM.once!==J;
delete X.ajax;
X.text=function(aQ,aP){var aR=aN||ax(this).attr(aP.options.content.attr)||"Loading...",aO=ax.ajax(ax.extend({},aM,{context:aP})).then(aM.success,ai,aM.error).then(function(aS){if(aS&&C){aP.set("content.text",aS)
}return aS
},function(aU,aS,aT){if(aP.destroyed||aU.status===0){return
}aP.set("content.text",aS+": "+aT)
});
return !C?(aP.set("content.text",aR),aO):aR
}
}if("title" in X){if(ax.isPlainObject(X.title)){X.button=X.title.button;
X.title=X.title.text
}if(T(X.title||J)){X.title=J
}}}if("position" in Y&&D(Y.position)){Y.position={my:Y.position,at:Y.position}
}if("show" in Y&&D(Y.show)){Y.show=Y.show.jquery?{target:Y.show}:Y.show===U?{ready:U}:{event:Y.show}
}if("hide" in Y&&D(Y.hide)){Y.hide=Y.hide.jquery?{target:Y.hide}:{event:Y.hide}
}if("style" in Y&&D(Y.style)){Y.style={classes:Y.style}
}ax.each(aL,function(){this.sanitize&&this.sanitize(Y)
});
return Y
}j=aE.checks={builtin:{"^id$":function(aM,aN,X,Y){var aO=X===U?B.nextid:X,C=r+"-"+aO;
if(aO!==J&&aO.length>0&&!ax("#"+C).length){this._id=C;
if(this.rendered){this.tooltip[0].id=this._id;
this.elements.content[0].id=this._id+"-content";
this.elements.title[0].id=this._id+"-title"
}}else{aM[aN]=Y
}},"^prerender":function(X,Y,C){C&&!this.rendered&&this.render(this.options.show.ready)
},"^content.text$":function(X,Y,C){this._updateContent(C)
},"^content.attr$":function(Y,aM,C,X){if(this.options.content.text===this.target.attr(X)){this._updateContent(this.target.attr(C))
}},"^content.title$":function(X,Y,C){if(!C){return this._removeTitle()
}C&&!this.elements.title&&this._createTitle();
this._updateTitle(C)
},"^content.button$":function(X,Y,C){this._updateButton(C)
},"^content.title.(text|button)$":function(X,Y,C){this.set("content."+Y,C)
},"^position.(my|at)$":function(X,Y,C){"string"===typeof C&&(this.position[Y]=X[Y]=new ao(C,Y==="at"))
},"^position.container$":function(X,Y,C){this.rendered&&this.tooltip.appendTo(C)
},"^show.ready$":function(X,Y,C){C&&(!this.rendered&&this.render(U)||this.toggle(U))
},"^style.classes$":function(Y,aM,C,X){this.rendered&&this.tooltip.removeClass(X).addClass(C)
},"^style.(width|height)":function(X,Y,C){this.rendered&&this.tooltip.css(Y,C)
},"^style.widget|content.title":function(){this.rendered&&this._setWidget()
},"^style.def":function(X,Y,C){this.rendered&&this.tooltip.toggleClass(S,!!C)
},"^events.(render|show|move|hide|focus|blur)$":function(X,Y,C){this.rendered&&this.tooltip[(ax.isFunction(C)?"":"un")+"bind"]("tooltip"+Y,C)
},"^(show|hide|position).(event|target|fixed|inactive|leave|distance|viewport|adjust)":function(){if(!this.rendered){return
}var C=this.options.position;
this.tooltip.attr("tracking",C.target==="mouse"&&C.adjust.mouse);
this._unassignEvents();
this._assignEvents()
}}};
function aq(C,aM){var X=0,aO,Y=C,aN=aM.split(".");
while(Y=Y[aN[X++]]){if(X<aN.length){aO=Y
}}return[aO||C,aN.pop()]
}aE.get=function(X){if(this.destroyed){return this
}var Y=aq(this.options,X.toLowerCase()),C=Y[0][Y[1]];
return C.precedance?C.string():C
};
function ae(aM,X){var Y,aN,C;
for(Y in this.checks){for(aN in this.checks[Y]){if(C=(new RegExp(aN,"i")).exec(aM)){X.push(C);
if(Y==="builtin"||this.plugins[Y]){this.checks[Y][aN].apply(this.plugins[Y]||this,X)
}}}}}var z=/^position\.(my|at|adjust|target|container|viewport)|style|content|show\.ready/i,s=/^prerender|show\.ready/i;
aE.set=function(aN,aO){if(this.destroyed){return this
}var aP=this.rendered,C=J,aM=this.options,Y=this.checks,X;
if("string"===typeof aN){X=aN;
aN={};
aN[X]=aO
}else{aN=ax.extend({},aN)
}ax.each(aN,function(aR,aS){if(aP&&s.test(aR)){delete aN[aR];
return
}var aT=aq(aM,aR.toLowerCase()),aQ;
aQ=aT[0][aT[1]];
aT[0][aT[1]]=aS&&aS.nodeType?ax(aS):aS;
C=z.test(aR)||C;
aN[aR]=[aT[0],aT[1],aS,aQ]
});
x(aM);
this.positioning=U;
ax.each(aN,ax.proxy(ae,this));
this.positioning=J;
if(this.rendered&&this.tooltip[0].offsetWidth>0&&C){this.reposition(aM.position.target==="mouse"?ai:this.cache.event)
}return this
};
aE._update=function(aN,aM,C){var Y=this,X=this.cache;
if(!this.rendered||!aN){return J
}if(ax.isFunction(aN)){aN=aN.call(this.elements.target,X.event,this)||""
}if(ax.isFunction(aN.then)){X.waiting=U;
return aN.then(function(aO){X.waiting=J;
return Y._update(aO,aM)
},ai,function(aO){return Y._update(aO,aM)
})
}if(aN===J||(!aN&&aN!=="")){return J
}if(aN.jquery&&aN.length>0){aM.empty().append(aN.css({display:"block",visibility:"visible"}))
}else{aM.html(aN)
}return this._waitForContent(aM).then(function(aO){if(Y.rendered&&Y.tooltip[0].offsetWidth>0){Y.reposition(X.event,!aO.length)
}})
};
aE._waitForContent=function(X){var C=this.cache;
C.waiting=U;
return(ax.fn.imagesLoaded?X.imagesLoaded():ax.Deferred().resolve([])).done(function(){C.waiting=J
}).promise()
};
aE._updateContent=function(X,C){this._update(X,this.elements.content,C)
};
aE._updateTitle=function(X,C){if(this._update(X,this.elements.title,C)===J){this._removeTitle(J)
}};
aE._createTitle=function(){var C=this.elements,X=this._id+"-title";
if(C.titlebar){this._removeTitle()
}C.titlebar=ax("<div />",{"class":r+"-titlebar "+(this.options.style.widget?aG("header"):"")}).append(C.title=ax("<div />",{id:X,"class":r+"-title","aria-atomic":U})).insertBefore(C.content).delegate(".qtip-close","mousedown keydown mouseup keyup mouseout",function(Y){ax(this).toggleClass("ui-state-active ui-state-focus",Y.type.substr(-4)==="down")
}).delegate(".qtip-close","mouseover mouseout",function(Y){ax(this).toggleClass("ui-state-hover",Y.type==="mouseover")
});
if(this.options.content.button){this._createButton()
}};
aE._removeTitle=function(C){var X=this.elements;
if(X.title){X.titlebar.remove();
X.titlebar=X.title=X.button=ai;
if(C!==J){this.reposition()
}}};
aE._createPosClass=function(C){return r+"-pos-"+(C||this.options.position.my).abbrev()
};
aE.reposition=function(a3,a0){if(!this.rendered||this.positioning||this.destroyed){return this
}this.positioning=U;
var aZ=this.cache,aO=this.tooltip,a6=this.options.position,a8=a6.target,aX=a6.my,aY=a6.at,a5=a6.viewport,aV=a6.container,a2=a6.adjust,X=a2.method.split(" "),a4=aO.outerWidth(J),a1=aO.outerHeight(J),aQ=0,aR=0,Y=aO.css("position"),a7={left:0,top:0},C=aO[0].offsetWidth>0,aW=a3&&a3.type==="scroll",aN=ax(b),a9=aV[0].ownerDocument,aU=this.mouse,aT,aP,aM,aS;
if(ax.isArray(a8)&&a8.length===2){aY={x:d,y:p};
a7={left:a8[0],top:a8[1]}
}else{if(a8==="mouse"){aY={x:d,y:p};
if((!a2.mouse||this.options.hide.distance)&&aZ.origin&&aZ.origin.pageX){a3=aZ.origin
}else{if(!a3||(a3&&(a3.type==="resize"||a3.type==="scroll"))){a3=aZ.event
}else{if(aU&&aU.pageX){a3=aU
}}}if(Y!=="static"){a7=aV.offset()
}if(a9.body.offsetWidth!==(b.innerWidth||a9.documentElement.clientWidth)){aP=ax(a.body).offset()
}a7={left:a3.pageX-a7.left+(aP&&aP.left||0),top:a3.pageY-a7.top+(aP&&aP.top||0)};
if(a2.mouse&&aW&&aU){a7.left-=(aU.scrollX||0)-aN.scrollLeft();
a7.top-=(aU.scrollY||0)-aN.scrollTop()
}}else{if(a8==="event"){if(a3&&a3.target&&a3.type!=="scroll"&&a3.type!=="resize"){aZ.target=ax(a3.target)
}else{if(!a3.target){aZ.target=this.elements.target
}}}else{if(a8!=="event"){aZ.target=ax(a8.jquery?a8:this.elements.target)
}}a8=aZ.target;
a8=ax(a8).eq(0);
if(a8.length===0){return this
}else{if(a8[0]===a||a8[0]===b){aQ=u.iOS?b.innerWidth:a8.width();
aR=u.iOS?b.innerHeight:a8.height();
if(a8[0]===b){a7={top:(a5||a8).scrollTop(),left:(a5||a8).scrollLeft()}
}}else{if(aL.imagemap&&a8.is("area")){aT=aL.imagemap(this,a8,aY,aL.viewport?X:J)
}else{if(aL.svg&&a8&&a8[0].ownerSVGElement){aT=aL.svg(this,a8,aY,aL.viewport?X:J)
}else{aQ=a8.outerWidth(J);
aR=a8.outerHeight(J);
a7=a8.offset()
}}}}if(aT){aQ=aT.width;
aR=aT.height;
aP=aT.offset;
a7=aT.position
}a7=this.reposition.offset(a8,a7,aV);
if((u.iOS>3.1&&u.iOS<4.1)||(u.iOS>=4.3&&u.iOS<4.33)||(!u.iOS&&Y==="fixed")){a7.left-=aN.scrollLeft();
a7.top-=aN.scrollTop()
}if(!aT||(aT&&aT.adjustable!==J)){a7.left+=aY.x===m?aQ:aY.x===L?aQ/2:0;
a7.top+=aY.y===ay?aR:aY.y===L?aR/2:0
}}}a7.left+=a2.x+(aX.x===m?-a4:aX.x===L?-a4/2:0);
a7.top+=a2.y+(aX.y===ay?-a1:aX.y===L?-a1/2:0);
if(aL.viewport){aM=a7.adjusted=aL.viewport(this,a7,a6,aQ,aR,a4,a1);
if(aP&&aM.left){a7.left+=aP.left
}if(aP&&aM.top){a7.top+=aP.top
}if(aM.my){this.position.my=aM.my
}}else{a7.adjusted={left:0,top:0}
}if(aZ.posClass!==(aS=this._createPosClass(this.position.my))){aO.removeClass(aZ.posClass).addClass((aZ.posClass=aS))
}if(!this._trigger("move",[a7,a5.elem||a5],a3)){return this
}delete a7.adjusted;
if(a0===J||!C||isNaN(a7.left)||isNaN(a7.top)||a8==="mouse"||!ax.isFunction(a6.effect)){aO.css(a7)
}else{if(ax.isFunction(a6.effect)){a6.effect.call(aO,this,ax.extend({},a7));
aO.queue(function(ba){ax(this).css({opacity:"",height:""});
if(u.ie){this.style.removeAttribute("filter")
}ba()
})
}}this.positioning=J;
return this
};
aE.reposition.offset=function(aM,aQ,X){if(!X[0]){return aQ
}var aT=ax(aM[0].ownerDocument),aP=!!u.ie&&a.compatMode!=="CSS1Compat",aS=X[0],Y,aO,C,aN;
function aR(aV,aU){aQ.left+=aU*aV.scrollLeft();
aQ.top+=aU*aV.scrollTop()
}do{if((aO=ax.css(aS,"position"))!=="static"){if(aO==="fixed"){C=aS.getBoundingClientRect();
aR(aT,-1)
}else{C=ax(aS).position();
C.left+=(parseFloat(ax.css(aS,"borderLeftWidth"))||0);
C.top+=(parseFloat(ax.css(aS,"borderTopWidth"))||0)
}aQ.left-=C.left+(parseFloat(ax.css(aS,"marginLeft"))||0);
aQ.top-=C.top+(parseFloat(ax.css(aS,"marginTop"))||0);
if(!Y&&(aN=ax.css(aS,"overflow"))!=="hidden"&&aN!=="visible"){Y=ax(aS)
}}}while((aS=aS.offsetParent));
if(Y&&(Y[0]!==aT[0]||aP)){aR(Y,1)
}return aQ
};
var ak=(ao=aE.reposition.Corner=function(X,C){X=(""+X).replace(/([A-Z])/," $1").replace(/middle/gi,L).toLowerCase();
this.x=(X.match(/left|right/i)||X.match(/center/)||["inherit"])[0].toLowerCase();
this.y=(X.match(/top|bottom|center/i)||["inherit"])[0].toLowerCase();
this.forceY=!!C;
var Y=X.charAt(0);
this.precedance=(Y==="t"||Y==="b"?ac:ad)
}).prototype;
ak.invert=function(X,C){this[X]=this[X]===d?m:this[X]===m?d:C||this[X]
};
ak.string=function(Y){var X=this.x,aM=this.y;
var C=X!==aM?(X==="center"||aM!=="center"&&(this.precedance===ac||this.forceY)?[aM,X]:[X,aM]):[X];
return Y!==false?C.join(" "):C
};
ak.abbrev=function(){var C=this.string(false);
return C[0].charAt(0)+(C[1]&&C[1].charAt(0)||"")
};
ak.clone=function(){return new ao(this.string(),this.forceY)
};
aE.toggle=function(aP,aX){var aV=this.cache,Y=this.options,aO=this.tooltip;
if(aX){if((/over|enter/).test(aX.type)&&aV.event&&(/out|leave/).test(aV.event.type)&&Y.show.target.add(aX.target).length===Y.show.target.length&&aO.has(aX.relatedTarget).length){return this
}aV.event=ax.event.fix(aX)
}this.waiting&&!aP&&(this.hiddenDuringWait=U);
if(!this.rendered){return aP?this.render(1):this
}else{if(this.destroyed||this.disabled){return this
}}var aN=aP?"show":"hide",aU=this.options[aN],aT=this.options[!aP?"show":"hide"],aZ=this.options.position,aR=this.options.content,aW=this.tooltip.css("width"),C=this.tooltip.is(":visible"),aQ=aP||aU.target.length===1,aS=!aX||aU.target.length<2||aV.target[0]===aX.target,aY,a1,aM,a0,X;
if((typeof aP).search("boolean|number")){aP=!C
}aY=!aO.is(":animated")&&C===aP&&aS;
a1=!aY?!!this._trigger(aN,[90]):ai;
if(this.destroyed){return this
}if(a1!==J&&aP){this.focus(aX)
}if(!a1||aY){return this
}ax.attr(aO[0],"aria-hidden",!!!aP);
if(aP){this.mouse&&(aV.origin=ax.event.fix(this.mouse));
if(ax.isFunction(aR.text)){this._updateContent(aR.text,J)
}if(ax.isFunction(aR.title)){this._updateTitle(aR.title,J)
}if(!aI&&aZ.target==="mouse"&&aZ.adjust.mouse){ax(a).bind("mousemove."+r,this._storeMouse);
aI=U
}if(!aW){aO.css("width",aO.outerWidth(J))
}this.reposition(aX,arguments[2]);
if(!aW){aO.css("width","")
}if(!!aU.solo){(typeof aU.solo==="string"?ax(aU.solo):ax(A,aU.solo)).not(aO).not(aU.target).qtip("hide",ax.Event("tooltipsolo"))
}}else{clearTimeout(this.timers.show);
delete aV.origin;
if(aI&&!ax(A+'[tracking="true"]:visible',aU.solo).not(aO).length){ax(a).unbind("mousemove."+r);
aI=J
}this.blur(aX)
}X=ax.proxy(function(){if(aP){if(u.ie){aO[0].style.removeAttribute("filter")
}aO.css("overflow","");
if("string"===typeof aU.autofocus){ax(this.options.show.autofocus,aO).focus()
}this.options.show.target.trigger("qtip-"+this.id+"-inactive")
}else{aO.css({display:"",visibility:"",opacity:"",left:"",top:""})
}this._trigger(aP?"visible":"hidden")
},this);
if(aU.effect===J||aQ===J){aO[aN]();
X()
}else{if(ax.isFunction(aU.effect)){aO.stop(1,1);
aU.effect.call(aO,this);
aO.queue("fx",function(a2){X();
a2()
})
}else{aO.fadeTo(90,aP?1:0,X)
}}if(aP){aU.target.trigger("qtip-"+this.id+"-inactive")
}return this
};
aE.show=function(C){return this.toggle(U,C)
};
aE.hide=function(C){return this.toggle(J,C)
};
aE.focus=function(aM){if(!this.rendered||this.destroyed){return this
}var aO=ax(A),aN=this.tooltip,Y=parseInt(aN[0].style.zIndex,10),X=B.zindex+aO.length,C;
if(!aN.hasClass(Q)){if(this._trigger("focus",[X],aM)){if(Y!==X){aO.each(function(){if(this.style.zIndex>Y){this.style.zIndex=this.style.zIndex-1
}});
aO.filter("."+Q).qtip("blur",aM)
}aN.addClass(Q)[0].style.zIndex=X
}}return this
};
aE.blur=function(C){if(!this.rendered||this.destroyed){return this
}this.tooltip.removeClass(Q);
this._trigger("blur",[this.tooltip.css("zIndex")],C);
return this
};
aE.disable=function(C){if(this.destroyed){return this
}if(C==="toggle"){C=!(this.rendered?this.tooltip.hasClass(Z):this.disabled)
}else{if("boolean"!==typeof C){C=U
}}if(this.rendered){this.tooltip.toggleClass(Z,C).attr("aria-disabled",C)
}this.disabled=!!C;
return this
};
aE.enable=function(){return this.disable(J)
};
aE._createButton=function(){var X=this,aN=this.elements,aM=aN.tooltip,Y=this.options.content.button,C=typeof Y==="string",aO=C?Y:"Close tooltip";
if(aN.button){aN.button.remove()
}if(Y.jquery){aN.button=Y
}else{aN.button=ax("<a />",{"class":"qtip-close "+(this.options.style.widget?"":r+"-icon"),title:aO,"aria-label":aO}).prepend(ax("<span />",{"class":"ui-icon ui-icon-close",html:"&times;"}))
}aN.button.appendTo(aN.titlebar||aM).attr("role","button").click(function(aP){if(!aM.hasClass(Z)){X.hide(aP)
}return J
})
};
aE._updateButton=function(C){if(!this.rendered){return J
}var X=this.elements.button;
if(C){this._createButton()
}else{X.remove()
}};
function aG(C){return an.concat("").join(C?"-"+C+" ":" ")
}aE._setWidget=function(){var C=this.options.style.widget,aM=this.elements,Y=aM.tooltip,X=Y.hasClass(Z);
Y.removeClass(Z);
Z=C?"ui-state-disabled":"qtip-disabled";
Y.toggleClass(Z,X);
Y.toggleClass("ui-helper-reset "+aG(),C).toggleClass(S,this.options.style.def&&!C);
if(aM.content){aM.content.toggleClass(aG("content"),C)
}if(aM.titlebar){aM.titlebar.toggleClass(aG("header"),C)
}if(aM.button){aM.button.toggleClass(r+"-icon",!C)
}};
function e(X,C){if(C>0){return setTimeout(ax.proxy(X,this),C)
}else{X.call(this)
}}function N(C){if(this.tooltip.hasClass(Z)){return
}clearTimeout(this.timers.show);
clearTimeout(this.timers.hide);
this.timers.show=e.call(this,function(){this.toggle(U,C)
},this.options.show.delay)
}function h(aM){if(this.tooltip.hasClass(Z)||this.destroyed){return
}var X=ax(aM.relatedTarget),C=X.closest(A)[0]===this.tooltip[0],Y=X[0]===this.options.show.target[0];
clearTimeout(this.timers.show);
clearTimeout(this.timers.hide);
if(this!==X[0]&&(this.options.position.target==="mouse"&&C)||(this.options.hide.fixed&&((/mouse(out|leave|move)/).test(aM.type)&&(C||Y)))){try{aM.preventDefault();
aM.stopImmediatePropagation()
}catch(aN){}return
}this.timers.hide=e.call(this,function(){this.toggle(J,aM)
},this.options.hide.delay,this)
}function k(C){if(this.tooltip.hasClass(Z)||!this.options.hide.inactive){return
}clearTimeout(this.timers.inactive);
this.timers.inactive=e.call(this,function(){this.hide(C)
},this.options.hide.inactive)
}function al(C){if(this.rendered&&this.tooltip[0].offsetWidth>0){this.reposition(C)
}}aE._storeMouse=function(C){(this.mouse=ax.event.fix(C)).type="mousemove";
return this
};
aE._bind=function(C,Y,aO,aN,X){if(!C||!aO||!Y.length){return
}var aM="."+this._id+(aN?"-"+aN:"");
ax(C).bind((Y.split?Y:Y.join(aM+" "))+aM,ax.proxy(aO,X||this));
return this
};
aE._unbind=function(C,X){C&&ax(C).unbind("."+this._id+(X?"-"+X:""));
return this
};
function au(C,X,Y){ax(a.body).delegate(C,(X.split?X:X.join("."+r+" "))+"."+r,function(){var aM=B.api[ax.attr(this,af)];
aM&&!aM.disabled&&Y.apply(aM,arguments)
})
}aE._trigger=function(X,C,Y){var aM=ax.Event("tooltip"+X);
aM.originalEvent=(Y&&ax.extend({},Y))||this.cache.event||ai;
this.triggering=X;
this.tooltip.trigger(aM,[this].concat(C||[]));
this.triggering=J;
return !aM.isDefaultPrevented()
};
aE._bindEvents=function(C,aQ,X,Y,aN,aM){var aP=X.filter(Y).add(Y.filter(X)),aO=[];
if(aP.length){ax.each(aQ,function(aS,aT){var aR=ax.inArray(aT,C);
aR>-1&&aO.push(C.splice(aR,1)[0])
});
if(aO.length){this._bind(aP,aO,function(aR){var aS=this.rendered?this.tooltip[0].offsetWidth>0:false;
(aS?aM:aN).call(this,aR)
});
X=X.not(aP);
Y=Y.not(aP)
}}this._bind(X,C,aN);
this._bind(Y,aQ,aM)
};
aE._assignInitialEvents=function(aN){var X=this.options,aM=X.show.target,Y=X.hide.target,C=X.show.event?ax.trim(""+X.show.event).split(" "):[],aP=X.hide.event?ax.trim(""+X.hide.event).split(" "):[];
this._bind(this.elements.target,["remove","removeqtip"],function(aQ){this.destroy(true)
},"destroy");
if(/mouse(over|enter)/i.test(X.show.event)&&!/mouse(out|leave)/i.test(X.hide.event)){aP.push("mouseleave")
}this._bind(aM,"mousemove",function(aQ){this._storeMouse(aQ);
this.cache.onTarget=U
});
function aO(aQ){if(this.disabled||this.destroyed){return J
}this.cache.event=aQ&&ax.event.fix(aQ);
this.cache.target=aQ&&ax(aQ.target);
clearTimeout(this.timers.show);
this.timers.show=e.call(this,function(){this.render(typeof aQ==="object"||X.show.ready)
},X.prerender?0:X.show.delay)
}this._bindEvents(C,aP,aM,Y,aO,function(){if(!this.timers){return J
}clearTimeout(this.timers.show)
});
if(X.show.ready||X.prerender){aO.call(this,aN)
}};
aE._assignEvents=function(){var aT=this,aV=this.options,aR=aV.position,aU=this.tooltip,aN=aV.show.target,aQ=aV.hide.target,aO=aR.container,X=aR.viewport,aM=ax(a),Y=ax(a.body),aP=ax(b),C=aV.show.event?ax.trim(""+aV.show.event).split(" "):[],aS=aV.hide.event?ax.trim(""+aV.hide.event).split(" "):[];
ax.each(aV.events,function(aW,aX){aT._bind(aU,aW==="toggle"?["tooltipshow","tooltiphide"]:["tooltip"+aW],aX,null,aU)
});
if(/mouse(out|leave)/i.test(aV.hide.event)&&aV.hide.leave==="window"){this._bind(aM,["mouseout","blur"],function(aW){if(!/select|option/.test(aW.target.nodeName)&&!aW.relatedTarget){this.hide(aW)
}})
}if(aV.hide.fixed){aQ=aQ.add(aU.addClass(F))
}else{if(/mouse(over|enter)/i.test(aV.show.event)){this._bind(aQ,"mouseleave",function(){clearTimeout(this.timers.show)
})
}}if((""+aV.hide.event).indexOf("unfocus")>-1){this._bind(aO.closest("html"),["mousedown","touchstart"],function(aZ){var aY=ax(aZ.target),aX=this.rendered&&!this.tooltip.hasClass(Z)&&this.tooltip[0].offsetWidth>0,aW=aY.parents(A).filter(this.tooltip[0]).length>0;
if(aY[0]!==this.target[0]&&aY[0]!==this.tooltip[0]&&!aW&&!this.target.has(aY[0]).length&&aX){this.hide(aZ)
}})
}if("number"===typeof aV.hide.inactive){this._bind(aN,"qtip-"+this.id+"-inactive",k,"inactive");
this._bind(aQ.add(aU),B.inactiveEvents,k)
}this._bindEvents(C,aS,aN,aQ,N,h);
this._bind(aN.add(aU),"mousemove",function(aZ){if("number"===typeof aV.hide.distance){var aY=this.cache.origin||{},aX=this.options.hide.distance,aW=Math.abs;
if(aW(aZ.pageX-aY.pageX)>=aX||aW(aZ.pageY-aY.pageY)>=aX){this.hide(aZ)
}}this._storeMouse(aZ)
});
if(aR.target==="mouse"){if(aR.adjust.mouse){if(aV.hide.event){this._bind(aN,["mouseenter","mouseleave"],function(aW){if(!this.cache){return J
}this.cache.onTarget=aW.type==="mouseenter"
})
}this._bind(aM,"mousemove",function(aW){if(this.rendered&&this.cache.onTarget&&!this.tooltip.hasClass(Z)&&this.tooltip[0].offsetWidth>0){this.reposition(aW)
}})
}}if(aR.adjust.resize||X.length){this._bind(ax.event.special.resize?X:aP,"resize",al)
}if(aR.adjust.scroll){this._bind(aP.add(aR.container),"scroll",al)
}};
aE._unassignEvents=function(){var X=this.options,Y=X.show.target,aM=X.hide.target,C=ax.grep([this.elements.target[0],this.rendered&&this.tooltip[0],X.position.container[0],X.position.viewport[0],X.position.container.closest("html")[0],b,a],function(aN){return typeof aN==="object"
});
if(Y&&Y.toArray){C=C.concat(Y.toArray())
}if(aM&&aM.toArray){C=C.concat(aM.toArray())
}this._unbind(C)._unbind(C,"destroy")._unbind(C,"inactive")
};
ax(function(){au(A,["mouseenter","mouseleave"],function(X){var aM=X.type==="mouseenter",Y=ax(X.currentTarget),aN=ax(X.relatedTarget||X.target),C=this.options;
if(aM){this.focus(X);
Y.hasClass(F)&&!Y.hasClass(Z)&&clearTimeout(this.timers.hide)
}else{if(C.position.target==="mouse"&&C.position.adjust.mouse&&C.hide.event&&C.show.target&&!aN.closest(C.show.target[0]).length){this.hide(X)
}}Y.toggleClass(aK,aM)
});
au("["+af+"]",ag,k)
});
function aj(aM,X,C){var aN,aW,aR,Y,aU,aO=ax(a.body),aT=aM[0]===a?aO:aM,aS=(aM.metadata)?aM.metadata(C.metadata):ai,aV=C.metadata.type==="html5"&&aS?aS[C.metadata.name]:ai,aP=aM.data(C.metadata.name||"qtipopts");
try{aP=typeof aP==="string"?ax.parseJSON(aP):aP
}catch(aQ){}Y=ax.extend(U,{},B.defaults,C,typeof aP==="object"?x(aP):ai,x(aV||aS));
aW=Y.position;
Y.id=X;
if("boolean"===typeof Y.content.text){aR=aM.attr(Y.content.attr);
if(Y.content.attr!==J&&aR){Y.content.text=aR
}else{return J
}}if(!aW.container.length){aW.container=aO
}if(aW.target===J){aW.target=aT
}if(Y.show.target===J){Y.show.target=aT
}if(Y.show.solo===U){Y.show.solo=aW.container.closest("body")
}if(Y.hide.target===J){Y.hide.target=aT
}if(Y.position.viewport===U){Y.position.viewport=aW.container
}aW.container=aW.container.eq(0);
aW.at=new ao(aW.at,U);
aW.my=new ao(aW.my);
if(aM.data(r)){if(Y.overwrite){aM.qtip("destroy",true)
}else{if(Y.overwrite===J){return J
}}}aM.attr(H,X);
if(Y.suppress&&(aU=aM.attr("title"))){aM.removeAttr("title").attr(I,aU).attr("title","")
}aN=new aA(aM,Y,X,!!aR);
aM.data(r,aN);
return aN
}B=ax.fn.qtip=function(X,aO,aP){var aQ=(""+X).toLowerCase(),aN=ai,C=ax.makeArray(arguments).slice(1),aM=C[C.length-1],Y=this[0]?ax.data(this[0],r):ai;
if((!arguments.length&&Y)||aQ==="api"){return Y
}else{if("string"===typeof X){this.each(function(){var aR=ax.data(this,r);
if(!aR){return U
}if(aM&&aM.timeStamp){aR.cache.event=aM
}if(aO&&(aQ==="option"||aQ==="options")){if(aP!==c||ax.isPlainObject(aO)){aR.set(aO,aP)
}else{aN=aR.get(aO);
return J
}}else{if(aR[aQ]){aR[aQ].apply(aR,C)
}}});
return aN!==ai?aN:this
}else{if("object"===typeof X||!arguments.length){Y=x(ax.extend(U,{},X));
return this.each(function(aR){var aS,aT;
aT=ax.isArray(Y.id)?Y.id[aR]:Y.id;
aT=!aT||aT===J||aT.length<1||B.api[aT]?B.nextid++:aT;
aS=aj(ax(this),aT,Y);
if(aS===J){return U
}else{B.api[aT]=aS
}ax.each(aL,function(){if(this.initialize==="initialize"){this(aS)
}});
aS._assignInitialEvents(aM)
})
}}}};
ax.qtip=aA;
B.api={};
ax.each({attr:function(C,aN){if(this.length){var X=this[0],aM="title",Y=ax.data(X,"qtip");
if(C===aM&&Y&&"object"===typeof Y&&Y.options.suppress){if(arguments.length<2){return ax.attr(X,I)
}if(Y&&Y.options.content.attr===aM&&Y.cache.attr){Y.set("content.text",aN)
}return this.attr(I,aN)
}}return ax.fn["attr"+aJ].apply(this,arguments)
},clone:function(X){var aM=ax([]),Y="title",C=ax.fn["clone"+aJ].apply(this,arguments);
if(!X){C.filter("["+I+"]").attr("title",function(){return ax.attr(this,I)
}).removeAttr(I)
}return C
}},function(X,Y){if(!Y||ax.fn[X+aJ]){return U
}var C=ax.fn[X+aJ]=ax.fn[X];
ax.fn[X]=function(){return Y.apply(this,arguments)||C.apply(this,arguments)
}
});
if(!ax.ui){ax["cleanData"+aJ]=ax.cleanData;
ax.cleanData=function(C){for(var X=0,Y;
(Y=ax(C[X])).length;
X++){if(Y.attr(H)){try{Y.triggerHandler("removeqtip")
}catch(aM){}}}ax["cleanData"+aJ].apply(this,arguments)
}
}B.version="2.2.1";
B.nextid=0;
B.inactiveEvents=ag;
B.zindex=15000;
B.defaults={prerender:J,id:J,overwrite:U,suppress:U,content:{text:U,attr:"title",title:J,button:J},position:{my:"top left",at:"bottom right",target:J,container:J,viewport:J,adjust:{x:0,y:0,mouse:U,scroll:U,resize:U,method:"flipinvert flipinvert"},effect:function(X,Y,C){ax(this).animate(Y,{duration:200,queue:J})
}},show:{target:J,event:"mouseenter",effect:U,delay:90,solo:J,ready:J,autofocus:J},hide:{target:J,event:"mouseleave",effect:U,delay:0,fixed:J,inactive:J,leave:"window",distance:J},style:{classes:"",widget:J,width:J,height:J,def:U},events:{render:ai,move:ai,show:ai,hide:ai,toggle:ai,visible:ai,hidden:ai,focus:ai,blur:ai}};
var l,W=".qtip-tip",R="margin",aB="border",aw="color",ar="background-color",am="transparent",av=" !important",az=!!a.createElement("canvas").getContext,f=/rgba?\(0, 0, 0(, 0)?\)|transparent|#123456/i;
function aa(C){return C.charAt(0).toUpperCase()+C.slice(1)
}var G={},K=["Webkit","O","Moz","ms"];
function o(aM,aP){var C=aP.charAt(0).toUpperCase()+aP.slice(1),Y=(aP+" "+K.join(C+" ")+C).split(" "),aO,aN,X=0;
if(G[aP]){return aM.css(G[aP])
}while((aO=Y[X++])){if((aN=aM.css(aO))!==c){return G[aP]=aO,aN
}}}function M(C,X){return Math.ceil(parseFloat(o(C,X)))
}if(!az){var aD=function(C,Y,X){return"<qtipvml:"+C+' xmlns="urn:schemas-microsoft.com:vml" class="qtip-vml" '+(Y||"")+' style="behavior: url(#default#VML); '+(X||"")+'" />'
}
}else{var y=b.devicePixelRatio||1,aF=(function(){var C=a.createElement("canvas").getContext("2d");
return C.backingStorePixelRatio||C.webkitBackingStorePixelRatio||C.mozBackingStorePixelRatio||C.msBackingStorePixelRatio||C.oBackingStorePixelRatio||1
}()),P=y/aF
}function at(X,C){this._ns="tip";
this.options=C;
this.offset=C.offset;
this.size=[C.width,C.height];
this.init((this.qtip=X))
}ax.extend(at.prototype,{init:function(Y){var C,X;
X=this.element=Y.elements.tip=ax("<div />",{"class":r+"-tip"}).prependTo(Y.tooltip);
if(az){C=ax("<canvas />").appendTo(this.element)[0].getContext("2d");
C.lineJoin="miter";
C.miterLimit=100000;
C.save()
}else{C=aD("shape",'coordorigin="0,0"',"position:absolute;");
this.element.html(C+C);
Y._bind(ax("*",X).add(X),["click","mousedown"],function(aM){aM.stopPropagation()
},this._ns)
}Y._bind(Y.tooltip,"tooltipmove",this.reposition,this._ns,this);
this.create()
},_swapDimensions:function(){this.size[0]=this.options.height;
this.size[1]=this.options.width
},_resetDimensions:function(){this.size[0]=this.options.width;
this.size[1]=this.options.height
},_useTitle:function(C){var X=this.qtip.elements.titlebar;
return X&&(C.y===p||(C.y===L&&this.element.position().top+(this.size[1]/2)+this.options.offset<X.outerHeight(U)))
},_parseCorner:function(C){var X=this.qtip.options.position.my;
if(C===J||X===J){C=J
}else{if(C===U){C=new ao(X.string())
}else{if(!C.string){C=new ao(C);
C.fixed=U
}}}return C
},_parseWidth:function(Y,X,C){var aM=this.qtip.elements,aN=aB+aa(X)+"Width";
return(C?M(C,aN):(M(aM.content,aN)||M(this._useTitle(Y)&&aM.titlebar||aM.content,aN)||M(aM.tooltip,aN)))||0
},_parseRadius:function(C){var X=this.qtip.elements,Y=aB+aa(C.y)+aa(C.x)+"Radius";
return u.ie<9?0:M(this._useTitle(C)&&X.titlebar||X.content,Y)||M(X.tooltip,Y)||0
},_invalidColour:function(C,aM,X){var Y=C.css(aM);
return !Y||(X&&Y===C.css(X))||f.test(Y)?J:Y
},_parseColours:function(aN){var aP=this.qtip.elements,aO=this.element.css("cssText",""),aM=aB+aa(aN[aN.precedance])+aa(aw),X=this._useTitle(aN)&&aP.titlebar||aP.content,Y=this._invalidColour,C=[];
C[0]=Y(aO,ar)||Y(X,ar)||Y(aP.content,ar)||Y(aP.tooltip,ar)||aO.css(ar);
C[1]=Y(aO,aM,aw)||Y(X,aM,aw)||Y(aP.content,aM,aw)||Y(aP.tooltip,aM,aw)||aP.tooltip.css(aM);
ax("*",aO).add(aO).css("cssText",ar+":"+am+av+";"+aB+":0"+av+";");
return C
},_calculateSize:function(aS){var aQ=aS.precedance===ac,X=this.options.width,aT=this.options.height,aP=aS.abbrev()==="c",C=(aQ?X:aT)*(aP?0.5:1),aM=Math.pow,aU=Math.round,aR,aO,aV,Y=Math.sqrt(aM(C,2)+aM(aT,2)),aN=[(this.border/C)*Y,(this.border/aT)*Y];
aN[2]=Math.sqrt(aM(aN[0],2)-aM(this.border,2));
aN[3]=Math.sqrt(aM(aN[1],2)-aM(this.border,2));
aR=Y+aN[2]+aN[3]+(aP?0:aN[0]);
aO=aR/Y;
aV=[aU(aO*X),aU(aO*aT)];
return aQ?aV:aV.reverse()
},_calculateTip:function(aP,Y,aQ){aQ=aQ||1;
Y=Y||this.size;
var aN=Y[0]*aQ,X=Y[1]*aQ,aM=Math.ceil(aN/2),aO=Math.ceil(X/2),C={br:[0,0,aN,X,aN,0],bl:[0,0,aN,0,0,X],tr:[0,X,aN,0,aN,X],tl:[0,0,0,X,aN,X],tc:[0,X,aM,0,aN,X],bc:[0,0,aN,0,aM,X],rc:[0,0,aN,aO,0,X],lc:[aN,0,aN,X,0,aO]};
C.lt=C.br;
C.rt=C.bl;
C.lb=C.tr;
C.rb=C.tl;
return C[aP.abbrev()]
},_drawCoords:function(C,X){C.beginPath();
C.moveTo(X[0],X[1]);
C.lineTo(X[2],X[3]);
C.lineTo(X[4],X[5]);
C.closePath()
},create:function(){var C=this.corner=(az||u.ie)&&this._parseCorner(this.options.corner);
if((this.enabled=!!this.corner&&this.corner.abbrev()!=="c")){this.qtip.cache.corner=C.clone();
this.update()
}this.element.toggle(this.enabled);
return this.corner
},update:function(aM,a0){if(!this.enabled){return this
}var aP=this.qtip.elements,aO=this.element,aZ=aO.children(),Y=this.options,aS=this.size,aX=Y.mimic,aY=Math.round,aU,aQ,X,aW,aR,aN,C,aT,aV;
if(!aM){aM=this.qtip.cache.corner||this.corner
}if(aX===J){aX=aM
}else{aX=new ao(aX);
aX.precedance=aM.precedance;
if(aX.x==="inherit"){aX.x=aM.x
}else{if(aX.y==="inherit"){aX.y=aM.y
}else{if(aX.x===aX.y){aX[aM.precedance]=aM[aM.precedance]
}}}}aQ=aX.precedance;
if(aM.precedance===ad){this._swapDimensions()
}else{this._resetDimensions()
}aU=this.color=this._parseColours(aM);
if(aU[1]!==am){aT=this.border=this._parseWidth(aM,aM[aM.precedance]);
if(Y.border&&aT<1&&!f.test(aU[1])){aU[0]=aU[1]
}this.border=aT=Y.border!==U?Y.border:aT
}else{this.border=aT=0
}C=this.size=this._calculateSize(aM);
aO.css({width:C[0],height:C[1],lineHeight:C[1]+"px"});
if(aM.precedance===ac){aN=[aY(aX.x===d?aT:aX.x===m?C[0]-aS[0]-aT:(C[0]-aS[0])/2),aY(aX.y===p?C[1]-aS[1]:0)]
}else{aN=[aY(aX.x===d?C[0]-aS[0]:0),aY(aX.y===p?aT:aX.y===ay?C[1]-aS[1]-aT:(C[1]-aS[1])/2)]
}if(az){X=aZ[0].getContext("2d");
X.restore();
X.save();
X.clearRect(0,0,6000,6000);
aW=this._calculateTip(aX,aS,P);
aR=this._calculateTip(aX,this.size,P);
aZ.attr(O,C[0]*P).attr(aC,C[1]*P);
aZ.css(O,C[0]).css(aC,C[1]);
this._drawCoords(X,aR);
X.fillStyle=aU[1];
X.fill();
X.translate(aN[0]*P,aN[1]*P);
this._drawCoords(X,aW);
X.fillStyle=aU[0];
X.fill()
}else{aW=this._calculateTip(aX);
aW="m"+aW[0]+","+aW[1]+" l"+aW[2]+","+aW[3]+" "+aW[4]+","+aW[5]+" xe";
aN[2]=aT&&/^(r|b)/i.test(aM.string())?u.ie===8?2:1:0;
aZ.css({coordsize:(C[0]+aT)+" "+(C[1]+aT),antialias:""+(aX.string().indexOf(L)>-1),left:aN[0]-(aN[2]*Number(aQ===ad)),top:aN[1]-(aN[2]*Number(aQ===ac)),width:C[0]+aT,height:C[1]+aT}).each(function(a1){var a2=ax(this);
a2[a2.prop?"prop":"attr"]({coordsize:(C[0]+aT)+" "+(C[1]+aT),path:aW,fillcolor:aU[0],filled:!!a1,stroked:!a1}).toggle(!!(aT||a1));
!a1&&a2.html(aD("stroke",'weight="'+(aT*2)+'px" color="'+aU[1]+'" miterlimit="1000" joinstyle="miter"'))
})
}b.opera&&setTimeout(function(){aP.tip.css({display:"inline-block",visibility:"visible"})
},1);
if(a0!==J){this.calculate(aM,C)
}},calculate:function(aQ,aS){if(!this.enabled){return J
}var aR=this,C=this.qtip.elements,aP=this.element,X=this.options.offset,aM=C.tooltip.hasClass("ui-widget"),aO={},Y,aN;
aQ=aQ||this.corner;
Y=aQ.precedance;
aS=aS||this._calculateSize(aQ);
aN=[aQ.x,aQ.y];
if(Y===ad){aN.reverse()
}ax.each(aN,function(aW,aV){var aT,aX,aU;
if(aV===L){aT=Y===ac?d:p;
aO[aT]="50%";
aO[R+"-"+aT]=-Math.round(aS[Y===ac?0:1]/2)+X
}else{aT=aR._parseWidth(aQ,aV,C.tooltip);
aX=aR._parseWidth(aQ,aV,C.content);
aU=aR._parseRadius(aQ);
aO[aV]=Math.max(-aR.border,aW?aX:(X+(aU>aT?aU:-aT)))
}});
aO[aQ[Y]]-=aS[Y===ad?0:1];
aP.css({margin:"",top:"",bottom:"",left:"",right:""}).css(aO);
return aO
},reposition:function(aM,aS,aW,aT){if(!this.enabled){return
}var X=aS.cache,aY=this.corner.clone(),aX=aW.adjusted,C=aS.options.position.adjust.method.split(" "),Y=C[0],aO=C[1]||C[0],aN={left:J,top:J,x:0,y:0},aQ,aR={},aU;
function aV(a2,aZ,a3,a0,a1){if(a2===q&&aY.precedance===aZ&&aX[a0]&&aY[a3]!==L){aY.precedance=aY.precedance===ad?ac:ad
}else{if(a2!==q&&aX[a0]){aY[aZ]=aY[aZ]===L?(aX[a0]>0?a0:a1):(aY[aZ]===a0?a1:a0)
}}}function aP(a1,aZ,a0){if(aY[a1]===L){aR[R+"-"+aZ]=aN[a1]=aQ[R+"-"+aZ]-aX[aZ]
}else{aU=aQ[a0]!==c?[aX[aZ],-aQ[aZ]]:[-aX[aZ],aQ[aZ]];
if((aN[a1]=Math.max(aU[0],aU[1]))>aU[0]){aW[aZ]-=aX[aZ];
aN[aZ]=J
}aR[aQ[a0]!==c?a0:aZ]=aN[a1]
}}if(this.corner.fixed!==U){aV(Y,ad,ac,d,m);
aV(aO,ac,ad,p,ay);
if(aY.string()!==X.corner.string()||X.cornerTop!==aX.top||X.cornerLeft!==aX.left){this.update(aY,J)
}}aQ=this.calculate(aY);
if(aQ.right!==c){aQ.left=-aQ.right
}if(aQ.bottom!==c){aQ.top=-aQ.bottom
}aQ.user=this.offset;
if(aN.left=(Y===q&&!!aX.left)){aP(ad,d,m)
}if(aN.top=(aO===q&&!!aX.top)){aP(ac,p,ay)
}this.element.css(aR).toggle(!((aN.x&&aN.y)||(aY.x===L&&aN.y)||(aY.y===L&&aN.x)));
aW.left-=aQ.left.charAt?aQ.user:Y!==q||aN.top||!aN.left&&!aN.top?aQ.left+this.border:0;
aW.top-=aQ.top.charAt?aQ.user:aO!==q||aN.left||!aN.left&&!aN.top?aQ.top+this.border:0;
X.cornerLeft=aX.left;
X.cornerTop=aX.top;
X.corner=aY.clone()
},destroy:function(){this.qtip._unbind(this.qtip.tooltip,this._ns);
if(this.qtip.elements.tip){this.qtip.elements.tip.find("*").remove().end().remove()
}}});
l=aL.tip=function(C){return new at(C,C.options.style.tip)
};
l.initialize="render";
l.sanitize=function(C){if(C.style&&"tip" in C.style){var X=C.style.tip;
if(typeof X!=="object"){X=C.style.tip={corner:X}
}if(!(/string|boolean/i).test(typeof X.corner)){X.corner=U
}}};
j.tip={"^position.my|style.tip.(corner|mimic|border)$":function(){this.create();
this.qtip.reposition()
},"^style.tip.(height|width)$":function(C){this.size=[C.width,C.height];
this.update();
this.qtip.reposition()
},"^content.title|style.(classes|widget)$":function(){this.update()
}};
ax.extend(U,B.defaults,{style:{tip:{corner:U,mimic:J,width:6,height:6,border:U,offset:0}}});
var V,n,v="qtip-modal",ap="."+v;
n=function(){var aR=this,aP={},X,Y,aO,C;
function aN(aU){if(ax.expr[":"].focusable){return ax.expr[":"].focusable
}var aS=!isNaN(ax.attr(aU,"tabindex")),aX=aU.nodeName&&aU.nodeName.toLowerCase(),aW,aV,aT;
if("area"===aX){aW=aU.parentNode;
aV=aW.name;
if(!aU.href||!aV||aW.nodeName.toLowerCase()!=="map"){return false
}aT=ax("img[usemap=#"+aV+"]")[0];
return !!aT&&aT.is(":visible")
}return(/input|select|textarea|button|object/.test(aX)?!aU.disabled:"a"===aX?aU.href||aS:aS)
}function aM(aS){if(aP.length<1&&aS.length){aS.not("body").blur()
}else{aP.first().focus()
}}function aQ(aT){if(!C.is(":visible")){return
}var aV=ax(aT.target),aU=X.tooltip,aS=aV.closest(A),aW;
aW=aS.length<1?J:(parseInt(aS[0].style.zIndex,10)>parseInt(aU[0].style.zIndex,10));
if(!aW&&aV.closest(A)[0]!==aU[0]){aM(aV)
}Y=aT.target===aP[aP.length-1]
}ax.extend(aR,{init:function(){C=aR.elem=ax("<div />",{id:"qtip-overlay",html:"<div></div>",mousedown:function(){return J
}}).hide();
ax(a.body).bind("focusin"+ap,aQ);
ax(a).bind("keydown"+ap,function(aS){if(X&&X.options.show.modal.escape&&aS.keyCode===27){X.hide(aS)
}});
C.bind("click"+ap,function(aS){if(X&&X.options.show.modal.blur){X.hide(aS)
}});
return aR
},update:function(aS){X=aS;
if(aS.options.show.modal.stealfocus!==J){aP=aS.tooltip.find("*").filter(function(){return aN(this)
})
}else{aP=[]
}},toggle:function(aX,aS,aU){var aW=ax(a.body),a0=aX.tooltip,a2=aX.options.show.modal,a1=a2.effect,aY=aS?"show":"hide",aT=C.is(":visible"),aV=ax(ap).filter(":visible:not(:animated)").not(a0),aZ;
aR.update(aX);
if(aS&&a2.stealfocus!==J){aM(ax(":focus"))
}C.toggleClass("blurs",a2.blur);
if(aS){C.appendTo(a.body)
}if((C.is(":animated")&&aT===aS&&aO!==J)||(!aS&&aV.length)){return aR
}C.stop(U,J);
if(ax.isFunction(a1)){a1.call(C,aS)
}else{if(a1===J){C[aY]()
}else{C.fadeTo(parseInt(aU,10)||90,aS?1:0,function(){if(!aS){C.hide()
}})
}}if(!aS){C.queue(function(a3){C.css({left:"",top:""});
if(!ax(ap).length){C.detach()
}a3()
})
}aO=aS;
if(X.destroyed){X=ai
}return aR
}});
aR.init()
};
n=new n();
function aH(X,C){this.options=C;
this._ns="-modal";
this.init((this.qtip=X))
}ax.extend(aH.prototype,{init:function(X){var C=X.tooltip;
if(!this.options.on){return this
}X.elements.overlay=n.elem;
C.addClass(v).css("z-index",B.modal_zindex+ax(ap).length);
X._bind(C,["tooltipshow","tooltiphide"],function(aN,aM,aP){var Y=aN.originalEvent;
if(aN.target===C[0]){if(Y&&aN.type==="tooltiphide"&&/mouse(leave|enter)/.test(Y.type)&&ax(Y.relatedTarget).closest(n.elem[0]).length){try{aN.preventDefault()
}catch(aO){}}else{if(!Y||(Y&&Y.type!=="tooltipsolo")){this.toggle(aN,aN.type==="tooltipshow",aP)
}}}},this._ns,this);
X._bind(C,"tooltipfocus",function(aO,aN){if(aO.isDefaultPrevented()||aO.target!==C[0]){return
}var aP=ax(ap),aM=B.modal_zindex+aP.length,Y=parseInt(C[0].style.zIndex,10);
n.elem[0].style.zIndex=aM-1;
aP.each(function(){if(this.style.zIndex>Y){this.style.zIndex-=1
}});
aP.filter("."+Q).qtip("blur",aO.originalEvent);
C.addClass(Q)[0].style.zIndex=aM;
n.update(aN);
try{aO.preventDefault()
}catch(aQ){}},this._ns,this);
X._bind(C,"tooltiphide",function(Y){if(Y.target===C[0]){ax(ap).filter(":visible").not(C).last().qtip("focus",Y)
}},this._ns,this)
},toggle:function(C,X,Y){if(C&&C.isDefaultPrevented()){return this
}n.toggle(this.qtip,!!X,Y)
},destroy:function(){this.qtip.tooltip.removeClass(v);
this.qtip._unbind(this.qtip.tooltip,this._ns);
n.toggle(this.qtip,J);
delete this.qtip.elements.overlay
}});
V=aL.modal=function(C){return new aH(C,C.options.show.modal)
};
V.sanitize=function(C){if(C.show){if(typeof C.show.modal!=="object"){C.show.modal={on:!!C.show.modal}
}else{if(typeof C.show.modal.on==="undefined"){C.show.modal.on=U
}}}};
B.modal_zindex=B.zindex-200;
V.initialize="render";
j.modal={"^show.modal.(on|blur)$":function(){this.destroy();
this.init();
this.qtip.elems.overlay.toggle(this.qtip.tooltip[0].offsetWidth>0)
}};
ax.extend(U,B.defaults,{show:{modal:{on:J,effect:U,blur:U,stealfocus:U,escape:U}}});
aL.viewport=function(aY,ba,a7,aP,aQ,a4,a3){var a9=a7.target,aN=aY.elements.tooltip,aW=a7.my,aZ=a7.at,a2=a7.adjust,X=a2.method.split(" "),aU=X[0],aS=X[1]||X[0],a6=a7.viewport,aV=a7.container,aX=aY.cache,aM={left:0,top:0},Y,aR,aO,a8,a1,C,a0,a5;
if(!a6.jquery||a9[0]===b||a9[0]===a.body||a2.method==="none"){return aM
}aO=aV.offset()||aM;
a8=aV.css("position")==="static";
Y=aN.css("position")==="fixed";
a1=a6[0]===b?a6.width():a6.outerWidth(J);
C=a6[0]===b?a6.height():a6.outerHeight(J);
a0={left:Y?0:a6.scrollLeft(),top:Y?0:a6.scrollTop()};
a5=a6.offset()||aM;
function aT(bc,bb,be,bq,bj,bh,bp,bs,bl){var bf=ba[bj],bm=aW[bc],br=aZ[bc],bt=be===q,bi=bm===bj?bl:bm===bh?-bl:-bl/2,bn=br===bj?bs:br===bh?-bs:-bs/2,bo=a0[bj]+a5[bj]-(a8?0:aO[bj]),bg=bo-bf,bd=bf+bl-(bp===O?a1:C)-bo,bk=bi-(aW.precedance===bc||bm===aW[bb]?bn:0)-(br===L?bs/2:0);
if(bt){bk=(bm===bj?1:-1)*bi;
ba[bj]+=bg>0?bg:bd>0?-bd:0;
ba[bj]=Math.max(-aO[bj]+a5[bj],bf-bk,Math.min(Math.max(-aO[bj]+a5[bj]+(bp===O?a1:C),bf+bk),ba[bj],bm==="center"?bf-bi:1000000000))
}else{bq*=(be===ab?2:0);
if(bg>0&&(bm!==bj||bd>0)){ba[bj]-=bk+bq;
aR.invert(bc,bj)
}else{if(bd>0&&(bm!==bh||bg>0)){ba[bj]-=(bm===L?-bk:bk)+bq;
aR.invert(bc,bh)
}}if(ba[bj]<a0&&-ba[bj]>bd){ba[bj]=bf;
aR=aW.clone()
}}return ba[bj]-bf
}if(aU!=="shift"||aS!=="shift"){aR=aW.clone()
}aM={left:aU!=="none"?aT(ad,ac,aU,a2.x,d,m,O,aP,a4):0,top:aS!=="none"?aT(ac,ad,aS,a2.y,p,ay,aC,aQ,a3):0,my:aR};
return aM
};
aL.polys={polygon:function(X,aT){var aU={width:0,height:0,position:{top:10000000000,right:0,bottom:0,left:10000000000},adjustable:J},aO=0,aP,aS=[],aR=1,aQ=1,aN=0,Y=0,aM,C;
aO=X.length;
while(aO--){aP=[parseInt(X[--aO],10),parseInt(X[aO+1],10)];
if(aP[0]>aU.position.right){aU.position.right=aP[0]
}if(aP[0]<aU.position.left){aU.position.left=aP[0]
}if(aP[1]>aU.position.bottom){aU.position.bottom=aP[1]
}if(aP[1]<aU.position.top){aU.position.top=aP[1]
}aS.push(aP)
}aM=aU.width=Math.abs(aU.position.right-aU.position.left);
C=aU.height=Math.abs(aU.position.bottom-aU.position.top);
if(aT.abbrev()==="c"){aU.position={left:aU.position.left+(aU.width/2),top:aU.position.top+(aU.height/2)}
}else{while(aM>0&&C>0&&aR>0&&aQ>0){aM=Math.floor(aM/2);
C=Math.floor(C/2);
if(aT.x===d){aR=aM
}else{if(aT.x===m){aR=aU.width-aM
}else{aR+=Math.floor(aM/2)
}}if(aT.y===p){aQ=C
}else{if(aT.y===ay){aQ=aU.height-C
}else{aQ+=Math.floor(C/2)
}}aO=aS.length;
while(aO--){if(aS.length<2){break
}aN=aS[aO][0]-aU.position.left;
Y=aS[aO][1]-aU.position.top;
if((aT.x===d&&aN>=aR)||(aT.x===m&&aN<=aR)||(aT.x===L&&(aN<aR||aN>(aU.width-aR)))||(aT.y===p&&Y>=aQ)||(aT.y===ay&&Y<=aQ)||(aT.y===L&&(Y<aQ||Y>(aU.height-aQ)))){aS.splice(aO,1)
}}}aU.position={left:aS[0][0],top:aS[0][1]}
}return aU
},rect:function(X,C,aM,Y){return{width:Math.abs(aM-X),height:Math.abs(Y-C),position:{left:Math.min(X,aM),top:Math.min(C,Y)}}
},_angles:{tc:3/2,tr:7/4,tl:5/4,bc:1/2,br:1/4,bl:3/4,rc:2,lc:1,c:0},ellipse:function(X,aQ,aO,aN,aM){var aP=aL.polys._angles[aM.abbrev()],Y=aP===0?0:aO*Math.cos(aP*Math.PI),C=aN*Math.sin(aP*Math.PI);
return{width:(aO*2)-Math.abs(Y),height:(aN*2)-Math.abs(C),position:{left:X+Y,top:aQ+C},adjustable:J}
},circle:function(C,aM,Y,X){return aL.polys.ellipse(C,aM,Y,Y,X)
}};
aL.svg=function(aQ,aR,aN){var a1=ax(a),aX=aR[0],aT=ax(aX.ownerSVGElement),aZ=aX.ownerDocument,X=(parseInt(aR.css("stroke-width"),10)||0)/2,C,Y,a0,aP,aW,aS,aV,aU,aO,aY,aM;
while(!aX.getBBox){aX=aX.parentNode
}if(!aX.getBBox||!aX.parentNode){return J
}switch(aX.nodeName){case"ellipse":case"circle":aO=aL.polys.ellipse(aX.cx.baseVal.value,aX.cy.baseVal.value,(aX.rx||aX.r).baseVal.value+X,(aX.ry||aX.r).baseVal.value+X,aN);
break;
case"line":case"polygon":case"polyline":aU=aX.points||[{x:aX.x1.baseVal.value,y:aX.y1.baseVal.value},{x:aX.x2.baseVal.value,y:aX.y2.baseVal.value}];
for(aO=[],aV=-1,aW=aU.numberOfItems||aU.length;
++aV<aW;
){aS=aU.getItem?aU.getItem(aV):aU[aV];
aO.push.apply(aO,[aS.x,aS.y])
}aO=aL.polys.polygon(aO,aN);
break;
default:aO=aX.getBBox();
aO={width:aO.width,height:aO.height,position:{left:aO.x,top:aO.y}};
break
}aY=aO.position;
aT=aT[0];
if(aT.createSVGPoint){Y=aX.getScreenCTM();
aU=aT.createSVGPoint();
aU.x=aY.left;
aU.y=aY.top;
a0=aU.matrixTransform(Y);
aY.left=a0.x;
aY.top=a0.y
}if(aZ!==a&&aQ.position.target!=="mouse"){C=ax((aZ.defaultView||aZ.parentWindow).frameElement).offset();
if(C){aY.left+=C.left;
aY.top+=C.top
}}aZ=ax(aZ);
aY.left+=aZ.scrollLeft();
aY.top+=aZ.scrollTop();
return aO
};
aL.imagemap=function(aQ,X,aU,aM){if(!X.jquery){X=ax(X)
}var aS=(X.attr("shape")||"rect").toLowerCase().replace("poly","polygon"),Y=ax('img[usemap="#'+X.parent("map").attr("name")+'"]'),aR=ax.trim(X.attr("coords")),C=aR.replace(/,$/,"").split(","),aW,aT,aN,aO,aV,aP;
if(!Y.length){return J
}if(aS==="polygon"){aV=aL.polys.polygon(C,aU)
}else{if(aL.polys[aS]){for(aN=-1,aP=C.length,aT=[];
++aN<aP;
){aT.push(parseInt(C[aN],10))
}aV=aL.polys[aS].apply(this,aT.concat(aU))
}else{return J
}}aW=Y.offset();
aW.left+=Math.ceil((Y.outerWidth(J)-Y.width())/2);
aW.top+=Math.ceil((Y.outerHeight(J)-Y.height())/2);
aV.position.left+=aW.left;
aV.position.top+=aW.top;
return aV
};
var E,ah='<iframe class="qtip-bgiframe" frameborder="0" tabindex="-1" src="javascript:\'\';"  style="display:block; position:absolute; z-index:-1; filter:alpha(opacity=0); -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";"></iframe>';
function g(C,X){this._ns="ie6";
this.init((this.qtip=C))
}ax.extend(g.prototype,{_scroll:function(){var C=this.qtip.elements.overlay;
C&&(C[0].style.top=ax(b).scrollTop()+"px")
},init:function(Y){var X=Y.tooltip,C;
if(ax("select, object").length<1){this.bgiframe=Y.elements.bgiframe=ax(ah).appendTo(X);
Y._bind(X,"tooltipmove",this.adjustBGIFrame,this._ns,this)
}this.redrawContainer=ax("<div/>",{id:r+"-rcontainer"}).appendTo(a.body);
if(Y.elements.overlay&&Y.elements.overlay.addClass("qtipmodal-ie6fix")){Y._bind(b,["scroll","resize"],this._scroll,this._ns,this);
Y._bind(X,["tooltipshow"],this._scroll,this._ns,this)
}this.redraw()
},adjustBGIFrame:function(){var aN=this.qtip.tooltip,Y={height:aN.outerHeight(J),width:aN.outerWidth(J)},X=this.qtip.plugins.tip,aM=this.qtip.elements.tip,C,aO;
aO=parseInt(aN.css("borderLeftWidth"),10)||0;
aO={left:-aO,top:-aO};
if(X&&aM){C=(X.corner.precedance==="x")?[O,d]:[aC,p];
aO[C[1]]-=aM[C[0]]()
}this.bgiframe.css(aO).css(Y)
},redraw:function(){if(this.qtip.rendered<1||this.drawing){return this
}var aP=this.qtip.tooltip,aO=this.qtip.options.style,X=this.qtip.options.position.container,aM,aN,C,Y;
this.qtip.drawing=1;
if(aO.height){aP.css(aC,aO.height)
}if(aO.width){aP.css(O,aO.width)
}else{aP.css(O,"").appendTo(this.redrawContainer);
aN=aP.width();
if(aN%2<1){aN+=1
}C=aP.css("maxWidth")||"";
Y=aP.css("minWidth")||"";
aM=(C+Y).indexOf("%")>-1?X.width()/100:0;
C=((C.indexOf("%")>-1?aM:1)*parseInt(C,10))||aN;
Y=((Y.indexOf("%")>-1?aM:1)*parseInt(Y,10))||0;
aN=C+Y?Math.min(Math.max(aN,Y),C):aN;
aP.css(O,Math.round(aN)).appendTo(X)
}this.drawing=0;
return this
},destroy:function(){this.bgiframe&&this.bgiframe.remove();
this.qtip._unbind([b,this.qtip.tooltip],this._ns)
}});
E=aL.ie6=function(C){return u.ie===6?new g(C):J
};
E.initialize="render";
j.ie6={"^content|style$":function(){this.redraw()
}}
}))
}(window,document));
jQuery(document).ready(function(){jQuery(".mt_leftNav .qTipCourse, #leftFeatureContainer .qTipCourse").qtip({content:{text:function(c,b){jQuery.ajax({url:jQuery(c.currentTarget).attr("data-url"),dataType:"json"}).done(function(d){b.set("content.text",a(d))
}).fail(function(){b.set("content.text","Not Found")
});
return""
}},style:{classes:"qtip-shadow qtip-rounded qtip-ryerson qtip"},position:{my:"left center",at:"right center",viewport:jQuery(window),effect:false}});
jQuery(".mt_rightFeature .qTipCourse, #rightfeature .qTipCourse").qtip({content:{text:function(c,b){jQuery.ajax({url:jQuery(c.currentTarget).attr("data-url"),dataType:"json"}).done(function(d){b.set("content.text",a(d))
}).fail(function(){b.set("content.text","Not Found")
});
return""
}},style:{classes:"qtip-shadow qtip-rounded qtip-ryerson qtip"},position:{my:"right center",at:"left center",viewport:jQuery(window),effect:false}});
jQuery(".mt_mainContent .qTipCourse, #main_content_panel .qTipCourse").qtip({content:{text:function(c,b){jQuery.ajax({url:jQuery(c.currentTarget).attr("data-url"),dataType:"json"}).done(function(d){b.set("content.text",a(d))
}).fail(function(){b.set("content.text","Not Found")
});
return""
}},style:{classes:"qtip-shadow qtip-rounded qtip-ryerson qtip"},position:{my:"top left",at:"bottom right",viewport:jQuery(window),effect:false}});
var a=function(c){var b="<div class='qtipCourseCode'>"+c.courseCode+"</div>";
b+="<div class='qtipCourseTitle'>"+c.longTitle+"</div>";
b+="<div class='qtipCourseDescription'>"+c.courseDescription+"</div>";
return b
}
});