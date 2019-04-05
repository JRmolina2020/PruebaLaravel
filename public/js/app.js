/*! jQuery v3.3.1 -ajax,-ajax/jsonp,-ajax/load,-ajax/parseXML,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-event/ajax,-effects,-effects/Tween,-effects/animatedSelector | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";var n=[],r=e.document,i=Object.getPrototypeOf,o=n.slice,a=n.concat,u=n.push,s=n.indexOf,l={},c=l.toString,f=l.hasOwnProperty,d=f.toString,p=d.call(Object),h={},g=function e(t){return"function"==typeof t&&"number"!=typeof t.nodeType},v=function e(t){return null!=t&&t===t.window},y={type:!0,src:!0,noModule:!0};function m(e,t,n){var i,o=(t=t||r).createElement("script");if(o.text=e,n)for(i in y)n[i]&&(o[i]=n[i]);t.head.appendChild(o).parentNode.removeChild(o)}function b(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[c.call(e)]||"object":typeof e}var x="3.3.1 -ajax,-ajax/jsonp,-ajax/load,-ajax/parseXML,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-event/ajax,-effects,-effects/Tween,-effects/animatedSelector",w=function(e,t){return new w.fn.init(e,t)},C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn=w.prototype={jquery:x,constructor:w,length:0,toArray:function(){return o.call(this)},get:function(e){return null==e?o.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=w.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return w.each(this,e)},map:function(e){return this.pushStack(w.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:n.sort,splice:n.splice},w.extend=w.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},u=1,s=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[u]||{},u++),"object"==typeof a||g(a)||(a={}),u===s&&(a=this,u--);u<s;u++)if(null!=(e=arguments[u]))for(t in e)n=a[t],a!==(r=e[t])&&(l&&r&&(w.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&w.isPlainObject(n)?n:{},a[t]=w.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},w.extend({expando:"jQuery"+(x+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==c.call(e))&&(!(t=i(e))||"function"==typeof(n=f.call(t,"constructor")&&t.constructor)&&d.call(n)===p)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){m(e)},each:function(e,t){var n,r=0;if(T(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(C,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(T(Object(e))?w.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:s.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,u=!n;o<a;o++)(r=!t(e[o],o))!==u&&i.push(e[o]);return i},map:function(e,t,n){var r,i,o=0,u=[];if(T(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&u.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&u.push(i);return a.apply([],u)},guid:1,support:h}),"function"==typeof Symbol&&(w.fn[Symbol.iterator]=n[Symbol.iterator]),w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function T(e){var t=!!e&&"length"in e&&e.length,n=b(e);return!g(e)&&!v(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}var E=function(e){var t,n,r,i,o,a,u,s,l,c,f,d,p,h,g,v,y,m,b,x="sizzle"+1*new Date,w=e.document,C=0,T=0,E=ae(),N=ae(),k=ae(),A=function(e,t){return e===t&&(f=!0),0},D={}.hasOwnProperty,S=[],L=S.pop,j=S.push,q=S.push,O=S.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},H="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",I="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",B="\\["+I+"*("+R+")(?:"+I+"*([*^$|!~]?=)"+I+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+I+"*\\]",M=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+B+")*)|.*)\\)|)",W=new RegExp(I+"+","g"),$=new RegExp("^"+I+"+|((?:^|[^\\\\])(?:\\\\.)*)"+I+"+$","g"),F=new RegExp("^"+I+"*,"+I+"*"),z=new RegExp("^"+I+"*([>+~]|"+I+")"+I+"*"),_=new RegExp("="+I+"*([^\\]'\"]*?)"+I+"*\\]","g"),U=new RegExp(M),V=new RegExp("^"+R+"$"),X={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+B),PSEUDO:new RegExp("^"+M),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+I+"*(even|odd|(([+-]|)(\\d*)n|)"+I+"*(?:([+-]|)"+I+"*(\\d+)|))"+I+"*\\)|)","i"),bool:new RegExp("^(?:"+H+")$","i"),needsContext:new RegExp("^"+I+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+I+"*((?:-\\d)?\\d*)"+I+"*\\)|)(?=[^-]|$)","i")},Q=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,G=/^[^{]+\{\s*\[native \w/,K=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,J=/[+~]/,Z=new RegExp("\\\\([\\da-f]{1,6}"+I+"?|("+I+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},re=function(){d()},ie=me(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{q.apply(S=O.call(w.childNodes),w.childNodes),S[w.childNodes.length].nodeType}catch(e){q={apply:S.length?function(e,t){j.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function oe(e,t,r,i){var o,u,l,c,f,h,y,m=t&&t.ownerDocument,C=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==C&&9!==C&&11!==C)return r;if(!i&&((t?t.ownerDocument||t:w)!==p&&d(t),t=t||p,g)){if(11!==C&&(f=K.exec(e)))if(o=f[1]){if(9===C){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r}else if(m&&(l=m.getElementById(o))&&b(t,l)&&l.id===o)return r.push(l),r}else{if(f[2])return q.apply(r,t.getElementsByTagName(e)),r;if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return q.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!k[e+" "]&&(!v||!v.test(e))){if(1!==C)m=t,y=e;else if("object"!==t.nodeName.toLowerCase()){(c=t.getAttribute("id"))?c=c.replace(te,ne):t.setAttribute("id",c=x),u=(h=a(e)).length;while(u--)h[u]="#"+c+" "+ye(h[u]);y=h.join(","),m=J.test(e)&&ge(t.parentNode)||t}if(y)try{return q.apply(r,m.querySelectorAll(y)),r}catch(e){}finally{c===x&&t.removeAttribute("id")}}}return s(e.replace($,"$1"),t,r,i)}function ae(){var e=[];function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}return t}function ue(e){return e[x]=!0,e}function se(e){var t=p.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function le(e,t){var n=e.split("|"),i=n.length;while(i--)r.attrHandle[n[i]]=t}function ce(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function de(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function pe(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function he(e){return ue(function(t){return t=+t,ue(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function ge(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},d=oe.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==p&&9===a.nodeType&&a.documentElement?(p=a,h=p.documentElement,g=!o(p),w!==p&&(i=p.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attachEvent("onunload",re)),n.attributes=se(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=se(function(e){return e.appendChild(p.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=G.test(p.getElementsByClassName),n.getById=se(function(e){return h.appendChild(e).id=x,!p.getElementsByName||!p.getElementsByName(x).length}),n.getById?(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&g)return t.getElementsByClassName(e)},y=[],v=[],(n.qsa=G.test(p.querySelectorAll))&&(se(function(e){h.appendChild(e).innerHTML="<a id='"+x+"'></a><select id='"+x+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+I+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+I+"*(?:value|"+H+")"),e.querySelectorAll("[id~="+x+"-]").length||v.push("~="),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+x+"+*").length||v.push(".#.+[+~]")}),se(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=p.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+I+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(n.matchesSelector=G.test(m=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&se(function(e){n.disconnectedMatch=m.call(e,"*"),m.call(e,"[s!='']:x"),y.push("!=",M)}),v=v.length&&new RegExp(v.join("|")),y=y.length&&new RegExp(y.join("|")),t=G.test(h.compareDocumentPosition),b=t||G.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},A=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===p||e.ownerDocument===w&&b(w,e)?-1:t===p||t.ownerDocument===w&&b(w,t)?1:c?P(c,e)-P(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],u=[t];if(!i||!o)return e===p?-1:t===p?1:i?-1:o?1:c?P(c,e)-P(c,t):0;if(i===o)return ce(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)u.unshift(n);while(a[r]===u[r])r++;return r?ce(a[r],u[r]):a[r]===w?-1:u[r]===w?1:0},p):p},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&d(e),t=t.replace(_,"='$1']"),n.matchesSelector&&g&&!k[t+" "]&&(!y||!y.test(t))&&(!v||!v.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return oe(t,p,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==p&&d(e),b(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==p&&d(e);var i=r.attrHandle[t.toLowerCase()],o=i&&D.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(A),f){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return c=null,e},i=oe.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else while(t=e[r++])n+=i(t);return n},(r=oe.selectors={cacheLength:50,createPseudo:ue,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return X.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&U.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=new RegExp("(^|"+I+")"+e+"("+I+"|$)"))&&E(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=oe.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace(W," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),u="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,s){var l,c,f,d,p,h,g=o!==a?"nextSibling":"previousSibling",v=t.parentNode,y=u&&t.nodeName.toLowerCase(),m=!s&&!u,b=!1;if(v){if(o){while(g){d=t;while(d=d[g])if(u?d.nodeName.toLowerCase()===y:1===d.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?v.firstChild:v.lastChild],a&&m){b=(p=(l=(c=(f=(d=v)[x]||(d[x]={}))[d.uniqueID]||(f[d.uniqueID]={}))[e]||[])[0]===C&&l[1])&&l[2],d=p&&v.childNodes[p];while(d=++p&&d&&d[g]||(b=p=0)||h.pop())if(1===d.nodeType&&++b&&d===t){c[e]=[C,p,b];break}}else if(m&&(b=p=(l=(c=(f=(d=t)[x]||(d[x]={}))[d.uniqueID]||(f[d.uniqueID]={}))[e]||[])[0]===C&&l[1]),!1===b)while(d=++p&&d&&d[g]||(b=p=0)||h.pop())if((u?d.nodeName.toLowerCase()===y:1===d.nodeType)&&++b&&(m&&((c=(f=d[x]||(d[x]={}))[d.uniqueID]||(f[d.uniqueID]={}))[e]=[C,b]),d===t))break;return(b-=i)===r||b%r==0&&b/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return i[x]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?ue(function(e,n){var r,o=i(e,t),a=o.length;while(a--)e[r=P(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:ue(function(e){var t=[],n=[],r=u(e.replace($,"$1"));return r[x]?ue(function(e,t,n,i){var o,a=r(e,null,i,[]),u=e.length;while(u--)(o=a[u])&&(e[u]=!(t[u]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:ue(function(e){return function(t){return oe(e,t).length>0}}),contains:ue(function(e){return e=e.replace(Z,ee),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:ue(function(e){return V.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(Z,ee).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:pe(!1),disabled:pe(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=de(t);function ve(){}ve.prototype=r.filters=r.pseudos,r.setFilters=new ve,a=oe.tokenize=function(e,t){var n,i,o,a,u,s,l,c=N[e+" "];if(c)return t?0:c.slice(0);u=e,s=[],l=r.preFilter;while(u){n&&!(i=F.exec(u))||(i&&(u=u.slice(i[0].length)||u),s.push(o=[])),n=!1,(i=z.exec(u))&&(n=i.shift(),o.push({value:n,type:i[0].replace($," ")}),u=u.slice(n.length));for(a in r.filter)!(i=X[a].exec(u))||l[a]&&!(i=l[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),u=u.slice(n.length));if(!n)break}return t?u.length:u?oe.error(e):N(e,s).slice(0)};function ye(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function me(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,u=T++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,s){var l,c,f,d=[C,u];if(s){while(t=t[r])if((1===t.nodeType||a)&&e(t,n,s))return!0}else while(t=t[r])if(1===t.nodeType||a)if(f=t[x]||(t[x]={}),c=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===C&&l[1]===u)return d[2]=l[2];if(c[o]=d,d[2]=e(t,n,s))return!0}return!1}}function be(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xe(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n);return n}function we(e,t,n,r,i){for(var o,a=[],u=0,s=e.length,l=null!=t;u<s;u++)(o=e[u])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(u)));return a}function Ce(e,t,n,r,i,o){return r&&!r[x]&&(r=Ce(r)),i&&!i[x]&&(i=Ce(i,o)),ue(function(o,a,u,s){var l,c,f,d=[],p=[],h=a.length,g=o||xe(t||"*",u.nodeType?[u]:u,[]),v=!e||!o&&t?g:we(g,d,e,u,s),y=n?i||(o?e:h||r)?[]:a:v;if(n&&n(v,y,u,s),r){l=we(y,p),r(l,[],u,s),c=l.length;while(c--)(f=l[c])&&(y[p[c]]=!(v[p[c]]=f))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(f=y[c])&&l.push(v[c]=f);i(null,y=[],l,s)}c=y.length;while(c--)(f=y[c])&&(l=i?P(o,f):d[c])>-1&&(o[l]=!(a[l]=f))}}else y=we(y===a?y.splice(h,y.length):y),i?i(null,a,y,s):q.apply(a,y)})}function Te(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],u=a||r.relative[" "],s=a?1:0,c=me(function(e){return e===t},u,!0),f=me(function(e){return P(t,e)>-1},u,!0),d=[function(e,n,r){var i=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,i}];s<o;s++)if(n=r.relative[e[s].type])d=[me(be(d),n)];else{if((n=r.filter[e[s].type].apply(null,e[s].matches))[x]){for(i=++s;i<o;i++)if(r.relative[e[i].type])break;return Ce(s>1&&be(d),s>1&&ye(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),n,s<i&&Te(e.slice(s,i)),i<o&&Te(e=e.slice(i)),i<o&&ye(e))}d.push(n)}return be(d)}function Ee(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,u,s,c){var f,h,v,y=0,m="0",b=o&&[],x=[],w=l,T=o||i&&r.find.TAG("*",c),E=C+=null==w?1:Math.random()||.1,N=T.length;for(c&&(l=a===p||a||c);m!==N&&null!=(f=T[m]);m++){if(i&&f){h=0,a||f.ownerDocument===p||(d(f),u=!g);while(v=e[h++])if(v(f,a||p,u)){s.push(f);break}c&&(C=E)}n&&((f=!v&&f)&&y--,o&&b.push(f))}if(y+=m,n&&m!==y){h=0;while(v=t[h++])v(b,x,a,u);if(o){if(y>0)while(m--)b[m]||x[m]||(x[m]=L.call(s));x=we(x)}q.apply(s,x),c&&!o&&x.length>0&&y+t.length>1&&oe.uniqueSort(s)}return c&&(C=E,l=w),b};return n?ue(o):o}return u=oe.compile=function(e,t){var n,r=[],i=[],o=k[e+" "];if(!o){t||(t=a(e)),n=t.length;while(n--)(o=Te(t[n]))[x]?r.push(o):i.push(o);(o=k(e,Ee(i,r))).selector=e}return o},s=oe.select=function(e,t,n,i){var o,s,l,c,f,d="function"==typeof e&&e,p=!i&&a(e=d.selector||e);if(n=n||[],1===p.length){if((s=p[0]=p[0].slice(0)).length>2&&"ID"===(l=s[0]).type&&9===t.nodeType&&g&&r.relative[s[1].type]){if(!(t=(r.find.ID(l.matches[0].replace(Z,ee),t)||[])[0]))return n;d&&(t=t.parentNode),e=e.slice(s.shift().value.length)}o=X.needsContext.test(e)?0:s.length;while(o--){if(l=s[o],r.relative[c=l.type])break;if((f=r.find[c])&&(i=f(l.matches[0].replace(Z,ee),J.test(s[0].type)&&ge(t.parentNode)||t))){if(s.splice(o,1),!(e=i.length&&ye(s)))return q.apply(n,i),n;break}}}return(d||u(e,p))(i,t,!g,n,!t||J.test(e)&&ge(t.parentNode)||t),n},n.sortStable=x.split("").sort(A).join("")===x,n.detectDuplicates=!!f,d(),n.sortDetached=se(function(e){return 1&e.compareDocumentPosition(p.createElement("fieldset"))}),se(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||le("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&se(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||le("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),se(function(e){return null==e.getAttribute("disabled")})||le(H,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(e);w.find=E,w.expr=E.selectors,w.expr[":"]=w.expr.pseudos,w.uniqueSort=w.unique=E.uniqueSort,w.text=E.getText,w.isXMLDoc=E.isXML,w.contains=E.contains,w.escapeSelector=E.escape;var N=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&w(e).is(n))break;r.push(e)}return r},k=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},A=w.expr.match.needsContext;function D(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var S=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function L(e,t,n){return g(t)?w.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?w.grep(e,function(e){return e===t!==n}):"string"!=typeof t?w.grep(e,function(e){return s.call(t,e)>-1!==n}):w.filter(t,e,n)}w.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?w.find.matchesSelector(r,e)?[r]:[]:w.find.matches(e,w.grep(t,function(e){return 1===e.nodeType}))},w.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(w(e).filter(function(){for(t=0;t<r;t++)if(w.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)w.find(e,i[t],n);return r>1?w.uniqueSort(n):n},filter:function(e){return this.pushStack(L(this,e||[],!1))},not:function(e){return this.pushStack(L(this,e||[],!0))},is:function(e){return!!L(this,"string"==typeof e&&A.test(e)?w(e):e||[],!1).length}});var j,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||j,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:q.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof w?t[0]:t,w.merge(this,w.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:r,!0)),S.test(i[1])&&w.isPlainObject(t))for(i in t)g(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(o=r.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e):e(w):w.makeArray(e,this)}).prototype=w.fn,j=w(r);var O=/^(?:parents|prev(?:Until|All))/,P={children:!0,contents:!0,next:!0,prev:!0};w.fn.extend({has:function(e){var t=w(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(w.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&w(e);if(!A.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&w.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?w.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?s.call(w(e),this[0]):s.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(w.uniqueSort(w.merge(this.get(),w(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function H(e,t){while((e=e[t])&&1!==e.nodeType);return e}w.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return N(e,"parentNode")},parentsUntil:function(e,t,n){return N(e,"parentNode",n)},next:function(e){return H(e,"nextSibling")},prev:function(e){return H(e,"previousSibling")},nextAll:function(e){return N(e,"nextSibling")},prevAll:function(e){return N(e,"previousSibling")},nextUntil:function(e,t,n){return N(e,"nextSibling",n)},prevUntil:function(e,t,n){return N(e,"previousSibling",n)},siblings:function(e){return k((e.parentNode||{}).firstChild,e)},children:function(e){return k(e.firstChild)},contents:function(e){return D(e,"iframe")?e.contentDocument:(D(e,"template")&&(e=e.content||e),w.merge([],e.childNodes))}},function(e,t){w.fn[e]=function(n,r){var i=w.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=w.filter(r,i)),this.length>1&&(P[e]||w.uniqueSort(i),O.test(e)&&i.reverse()),this.pushStack(i)}});var I=/[^\x20\t\r\n\f]+/g;function R(e){var t={};return w.each(e.match(I)||[],function(e,n){t[n]=!0}),t}w.Callbacks=function(e){e="string"==typeof e?R(e):w.extend({},e);var t,n,r,i,o=[],a=[],u=-1,s=function(){for(i=i||e.once,r=t=!0;a.length;u=-1){n=a.shift();while(++u<o.length)!1===o[u].apply(n[0],n[1])&&e.stopOnFalse&&(u=o.length,n=!1)}e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(u=o.length-1,a.push(n)),function t(n){w.each(n,function(n,r){g(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==b(r)&&t(r)})}(arguments),n&&!t&&s()),this},remove:function(){return w.each(arguments,function(e,t){var n;while((n=w.inArray(t,o,n))>-1)o.splice(n,1),n<=u&&u--}),this},has:function(e){return e?w.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=a=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||s()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l};function B(e){return e}function M(e){throw e}function W(e,t,n,r){var i;try{e&&g(i=e.promise)?i.call(e).done(t).fail(n):e&&g(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}w.extend({Deferred:function(t){var n=[["notify","progress",w.Callbacks("memory"),w.Callbacks("memory"),2],["resolve","done",w.Callbacks("once memory"),w.Callbacks("once memory"),0,"resolved"],["reject","fail",w.Callbacks("once memory"),w.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},"catch":function(e){return i.then(null,e)},pipe:function(){var e=arguments;return w.Deferred(function(t){w.each(n,function(n,r){var i=g(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&g(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){var o=0;function a(t,n,r,i){return function(){var u=this,s=arguments,l=function(){var e,l;if(!(t<o)){if((e=r.apply(u,s))===n.promise())throw new TypeError("Thenable self-resolution");l=e&&("object"==typeof e||"function"==typeof e)&&e.then,g(l)?i?l.call(e,a(o,n,B,i),a(o,n,M,i)):(o++,l.call(e,a(o,n,B,i),a(o,n,M,i),a(o,n,B,n.notifyWith))):(r!==B&&(u=void 0,s=[e]),(i||n.resolveWith)(u,s))}},c=i?l:function(){try{l()}catch(e){w.Deferred.exceptionHook&&w.Deferred.exceptionHook(e,c.stackTrace),t+1>=o&&(r!==M&&(u=void 0,s=[e]),n.rejectWith(u,s))}};t?c():(w.Deferred.getStackHook&&(c.stackTrace=w.Deferred.getStackHook()),e.setTimeout(c))}}return w.Deferred(function(e){n[0][3].add(a(0,e,g(i)?i:B,e.notifyWith)),n[1][3].add(a(0,e,g(t)?t:B)),n[2][3].add(a(0,e,g(r)?r:M))}).promise()},promise:function(e){return null!=e?w.extend(e,i):i}},o={};return w.each(n,function(e,t){var a=t[2],u=t[5];i[t[1]]=a.add,u&&a.add(function(){r=u},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=o.call(arguments),a=w.Deferred(),u=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?o.call(arguments):n,--t||a.resolveWith(r,i)}};if(t<=1&&(W(e,a.done(u(n)).resolve,a.reject,!t),"pending"===a.state()||g(i[n]&&i[n].then)))return a.then();while(n--)W(i[n],u(n),a.reject);return a.promise()}});var $=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&$.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},w.readyException=function(t){e.setTimeout(function(){throw t})};var F=w.Deferred();w.fn.ready=function(e){return F.then(e)["catch"](function(e){w.readyException(e)}),this},w.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--w.readyWait:w.isReady)||(w.isReady=!0,!0!==e&&--w.readyWait>0||F.resolveWith(r,[w]))}}),w.ready.then=F.then;function z(){r.removeEventListener("DOMContentLoaded",z),e.removeEventListener("load",z),w.ready()}"complete"===r.readyState||"loading"!==r.readyState&&!r.documentElement.doScroll?e.setTimeout(w.ready):(r.addEventListener("DOMContentLoaded",z),e.addEventListener("load",z));var _=function(e,t,n,r,i,o,a){var u=0,s=e.length,l=null==n;if("object"===b(n)){i=!0;for(u in n)_(e,t,u,n[u],!0,o,a)}else if(void 0!==r&&(i=!0,g(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(w(e),n)})),t))for(;u<s;u++)t(e[u],n,a?r:r.call(e[u],u,t(e[u],n)));return i?e:l?t.call(e):s?t(e[0],n):o},U=/^-ms-/,V=/-([a-z])/g;function X(e,t){return t.toUpperCase()}function Q(e){return e.replace(U,"ms-").replace(V,X)}var Y=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=w.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Y(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[Q(t)]=n;else for(r in t)i[Q(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][Q(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(Q):(t=Q(t))in r?[t]:t.match(I)||[]).length;while(n--)delete r[t[n]]}(void 0===t||w.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!w.isEmptyObject(t)}};var K=new G,J=new G,Z=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ee=/[A-Z]/g;function te(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Z.test(e)?JSON.parse(e):e)}function ne(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ee,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=te(n)}catch(e){}J.set(e,t,n)}else n=void 0;return n}w.extend({hasData:function(e){return J.hasData(e)||K.hasData(e)},data:function(e,t,n){return J.access(e,t,n)},removeData:function(e,t){J.remove(e,t)},_data:function(e,t,n){return K.access(e,t,n)},_removeData:function(e,t){K.remove(e,t)}}),w.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=J.get(o),1===o.nodeType&&!K.get(o,"hasDataAttrs"))){n=a.length;while(n--)a[n]&&0===(r=a[n].name).indexOf("data-")&&(r=Q(r.slice(5)),ne(o,r,i[r]));K.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){J.set(this,e)}):_(this,function(t){var n;if(o&&void 0===t){if(void 0!==(n=J.get(o,e)))return n;if(void 0!==(n=ne(o,e)))return n}else this.each(function(){J.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){J.remove(this,e)})}}),w.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=K.get(e,t),n&&(!r||Array.isArray(n)?r=K.access(e,t,w.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=w.queue(e,t),r=n.length,i=n.shift(),o=w._queueHooks(e,t),a=function(){w.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return K.get(e,n)||K.access(e,n,{empty:w.Callbacks("once memory").add(function(){K.remove(e,[t+"queue",n])})})}}),w.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?w.queue(this[0],e):void 0===t?this:this.each(function(){var n=w.queue(this,e,t);w._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&w.dequeue(this,e)})},dequeue:function(e){return this.each(function(){w.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=w.Deferred(),o=this,a=this.length,u=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=K.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(u));return u(),i.promise(t)}});var re=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ie=new RegExp("^(?:([+-])=|)("+re+")([a-z%]*)$","i"),oe=["Top","Right","Bottom","Left"],ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&w.contains(e.ownerDocument,e)&&"none"===w.css(e,"display")},ue=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i};function se(e,t,n,r){var i,o,a=20,u=r?function(){return r.cur()}:function(){return w.css(e,t,"")},s=u(),l=n&&n[3]||(w.cssNumber[t]?"":"px"),c=(w.cssNumber[t]||"px"!==l&&+s)&&ie.exec(w.css(e,t));if(c&&c[3]!==l){s/=2,l=l||c[3],c=+s||1;while(a--)w.style(e,t,c+l),(1-o)*(1-(o=u()/s||.5))<=0&&(a=0),c/=o;c*=2,w.style(e,t,c+l),n=n||[]}return n&&(c=+c||+s||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var le={};function ce(e){var t,n=e.ownerDocument,r=e.nodeName,i=le[r];return i||(t=n.body.appendChild(n.createElement(r)),i=w.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),le[r]=i,i)}function fe(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=K.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&ae(r)&&(i[o]=ce(r))):"none"!==n&&(i[o]="none",K.set(r,"display",n)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}w.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?w(this).show():w(this).hide()})}});var de=/^(?:checkbox|radio)$/i,pe=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&D(e,t)?w.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)K.set(e[n],"globalEval",!t||K.get(t[n],"globalEval"))}var me=/<|&#?\w+;/;function be(e,t,n,r,i){for(var o,a,u,s,l,c,f=t.createDocumentFragment(),d=[],p=0,h=e.length;p<h;p++)if((o=e[p])||0===o)if("object"===b(o))w.merge(d,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),u=(pe.exec(o)||["",""])[1].toLowerCase(),s=ge[u]||ge._default,a.innerHTML=s[1]+w.htmlPrefilter(o)+s[2],c=s[0];while(c--)a=a.lastChild;w.merge(d,a.childNodes),(a=f.firstChild).textContent=""}else d.push(t.createTextNode(o));f.textContent="",p=0;while(o=d[p++])if(r&&w.inArray(o,r)>-1)i&&i.push(o);else if(l=w.contains(o.ownerDocument,o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}!function(){var e=r.createDocumentFragment().appendChild(r.createElement("div")),t=r.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),h.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var xe=r.documentElement,we=/^key/,Ce=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Te=/^([^.]*)(?:\.(.+)|)/;function Ee(){return!0}function Ne(){return!1}function ke(){try{return r.activeElement}catch(e){}}function Ae(e,t,n,r,i,o){var a,u;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0);for(u in t)Ae(e,u,n,r,t[u],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Ne;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return w().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=w.guid++)),e.each(function(){w.event.add(this,t,i,r,n)})}w.event={global:{},add:function(e,t,n,r,i){var o,a,u,s,l,c,f,d,p,h,g,v=K.get(e);if(v){n.handler&&(n=(o=n).handler,i=o.selector),i&&w.find.matchesSelector(xe,i),n.guid||(n.guid=w.guid++),(s=v.events)||(s=v.events={}),(a=v.handle)||(a=v.handle=function(t){return"undefined"!=typeof w&&w.event.triggered!==t.type?w.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(I)||[""]).length;while(l--)p=g=(u=Te.exec(t[l])||[])[1],h=(u[2]||"").split(".").sort(),p&&(f=w.event.special[p]||{},p=(i?f.delegateType:f.bindType)||p,f=w.event.special[p]||{},c=w.extend({type:p,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&w.expr.match.needsContext.test(i),namespace:h.join(".")},o),(d=s[p])||((d=s[p]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(p,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?d.splice(d.delegateCount++,0,c):d.push(c),w.event.global[p]=!0)}},remove:function(e,t,n,r,i){var o,a,u,s,l,c,f,d,p,h,g,v=K.hasData(e)&&K.get(e);if(v&&(s=v.events)){l=(t=(t||"").match(I)||[""]).length;while(l--)if(u=Te.exec(t[l])||[],p=g=u[1],h=(u[2]||"").split(".").sort(),p){f=w.event.special[p]||{},d=s[p=(r?f.delegateType:f.bindType)||p]||[],u=u[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=d.length;while(o--)c=d[o],!i&&g!==c.origType||n&&n.guid!==c.guid||u&&!u.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(d.splice(o,1),c.selector&&d.delegateCount--,f.remove&&f.remove.call(e,c));a&&!d.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||w.removeEvent(e,p,v.handle),delete s[p])}else for(p in s)w.event.remove(e,p+t[l],n,r,!0);w.isEmptyObject(s)&&K.remove(e,"handle events")}},dispatch:function(e){var t=w.event.fix(e),n,r,i,o,a,u,s=new Array(arguments.length),l=(K.get(this,"events")||{})[t.type]||[],c=w.event.special[t.type]||{};for(s[0]=t,n=1;n<arguments.length;n++)s[n]=arguments[n];if(t.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,t)){u=w.event.handlers.call(this,t,l),n=0;while((o=u[n++])&&!t.isPropagationStopped()){t.currentTarget=o.elem,r=0;while((a=o.handlers[r++])&&!t.isImmediatePropagationStopped())t.rnamespace&&!t.rnamespace.test(a.namespace)||(t.handleObj=a,t.data=a.data,void 0!==(i=((w.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,s))&&!1===(t.result=i)&&(t.preventDefault(),t.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,t),t.result}},handlers:function(e,t){var n,r,i,o,a,u=[],s=t.delegateCount,l=e.target;if(s&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<s;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?w(i,this).index(l)>-1:w.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&u.push({elem:l,handlers:o})}return l=this,s<t.length&&u.push({elem:l,handlers:t.slice(s)}),u},addProp:function(e,t){Object.defineProperty(w.Event.prototype,e,{enumerable:!0,configurable:!0,get:g(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[w.expando]?e:new w.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ke()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===ke()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&D(this,"input"))return this.click(),!1},_default:function(e){return D(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},w.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},w.Event=function(e,t){if(!(this instanceof w.Event))return new w.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ee:Ne,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&w.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[w.expando]=!0},w.Event.prototype={constructor:w.Event,isDefaultPrevented:Ne,isPropagationStopped:Ne,isImmediatePropagationStopped:Ne,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ee,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ee,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ee,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},w.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&we.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Ce.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},w.event.addProp),w.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){w.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||w.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),w.fn.extend({on:function(e,t,n,r){return Ae(this,e,t,n,r)},one:function(e,t,n,r){return Ae(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,w(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Ne),this.each(function(){w.event.remove(this,e,n,t)})}});var De=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Se=/<script|<style|<link/i,Le=/checked\s*(?:[^=]|=\s*.checked.)/i,je=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function qe(e,t){return D(e,"table")&&D(11!==t.nodeType?t:t.firstChild,"tr")?w(e).children("tbody")[0]||e:e}function Oe(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Pe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function He(e,t){var n,r,i,o,a,u,s,l;if(1===t.nodeType){if(K.hasData(e)&&(o=K.access(e),a=K.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)w.event.add(t,i,l[i][n])}J.hasData(e)&&(u=J.access(e),s=w.extend({},u),J.set(t,s))}}function Ie(e,t){var n=t.nodeName.toLowerCase();"input"===n&&de.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Re(e,t,n,r){t=a.apply([],t);var i,o,u,s,l,c,f=0,d=e.length,p=d-1,v=t[0],y=g(v);if(y||d>1&&"string"==typeof v&&!h.checkClone&&Le.test(v))return e.each(function(i){var o=e.eq(i);y&&(t[0]=v.call(this,i,o.html())),Re(o,t,n,r)});if(d&&(i=be(t,e[0].ownerDocument,!1,e,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){for(s=(u=w.map(ve(i,"script"),Oe)).length;f<d;f++)l=i,f!==p&&(l=w.clone(l,!0,!0),s&&w.merge(u,ve(l,"script"))),n.call(e[f],l,f);if(s)for(c=u[u.length-1].ownerDocument,w.map(u,Pe),f=0;f<s;f++)l=u[f],he.test(l.type||"")&&!K.access(l,"globalEval")&&w.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?w._evalUrl&&w._evalUrl(l.src):m(l.textContent.replace(je,""),c,l))}return e}function Be(e,t,n){for(var r,i=t?w.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||w.cleanData(ve(r)),r.parentNode&&(n&&w.contains(r.ownerDocument,r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}w.extend({htmlPrefilter:function(e){return e.replace(De,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,u=e.cloneNode(!0),s=w.contains(e.ownerDocument,e);if(!(h.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||w.isXMLDoc(e)))for(a=ve(u),r=0,i=(o=ve(e)).length;r<i;r++)Ie(o[r],a[r]);if(t)if(n)for(o=o||ve(e),a=a||ve(u),r=0,i=o.length;r<i;r++)He(o[r],a[r]);else He(e,u);return(a=ve(u,"script")).length>0&&ye(a,!s&&ve(e,"script")),u},cleanData:function(e){for(var t,n,r,i=w.event.special,o=0;void 0!==(n=e[o]);o++)if(Y(n)){if(t=n[K.expando]){if(t.events)for(r in t.events)i[r]?w.event.remove(n,r):w.removeEvent(n,r,t.handle);n[K.expando]=void 0}n[J.expando]&&(n[J.expando]=void 0)}}}),w.fn.extend({detach:function(e){return Be(this,e,!0)},remove:function(e){return Be(this,e)},text:function(e){return _(this,function(e){return void 0===e?w.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Re(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||qe(this,e).appendChild(e)})},prepend:function(){return Re(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=qe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(w.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return w.clone(this,e,t)})},html:function(e){return _(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Se.test(e)&&!ge[(pe.exec(e)||["",""])[1].toLowerCase()]){e=w.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(w.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return Re(this,arguments,function(t){var n=this.parentNode;w.inArray(this,e)<0&&(w.cleanData(ve(this)),n&&n.replaceChild(t,this))},e)}}),w.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){w.fn[e]=function(e){for(var n,r=[],i=w(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),w(i[a])[t](n),u.apply(r,n.get());return this.pushStack(r)}});var Me=new RegExp("^("+re+")(?!px)[a-z%]+$","i"),We=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},$e=new RegExp(oe.join("|"),"i");!function(){function t(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",xe.appendChild(l).appendChild(c);var t=e.getComputedStyle(c);i="1%"!==t.top,s=12===n(t.marginLeft),c.style.right="60%",u=36===n(t.right),o=36===n(t.width),c.style.position="absolute",a=36===c.offsetWidth||"absolute",xe.removeChild(l),c=null}}function n(e){return Math.round(parseFloat(e))}var i,o,a,u,s,l=r.createElement("div"),c=r.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===c.style.backgroundClip,w.extend(h,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),u},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),s},scrollboxSize:function(){return t(),a}}))}();function Fe(e,t,n){var r,i,o,a,u=e.style;return(n=n||We(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||w.contains(e.ownerDocument,e)||(a=w.style(e,t)),!h.pixelBoxStyles()&&Me.test(a)&&$e.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=n.width,u.width=r,u.minWidth=i,u.maxWidth=o)),void 0!==a?a+"":a}function ze(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}var _e=/^(none|table(?!-c[ea]).+)/,Ue=/^--/,Ve={position:"absolute",visibility:"hidden",display:"block"},Xe={letterSpacing:"0",fontWeight:"400"},Qe=["Webkit","Moz","ms"],Ye=r.createElement("div").style;function Ge(e){if(e in Ye)return e;var t=e[0].toUpperCase()+e.slice(1),n=Qe.length;while(n--)if((e=Qe[n]+t)in Ye)return e}function Ke(e){var t=w.cssProps[e];return t||(t=w.cssProps[e]=Ge(e)||e),t}function Je(e,t,n){var r=ie.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ze(e,t,n,r,i,o){var a="width"===t?1:0,u=0,s=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(s+=w.css(e,n+oe[a],!0,i)),r?("content"===n&&(s-=w.css(e,"padding"+oe[a],!0,i)),"margin"!==n&&(s-=w.css(e,"border"+oe[a]+"Width",!0,i))):(s+=w.css(e,"padding"+oe[a],!0,i),"padding"!==n?s+=w.css(e,"border"+oe[a]+"Width",!0,i):u+=w.css(e,"border"+oe[a]+"Width",!0,i));return!r&&o>=0&&(s+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-s-u-.5))),s}function et(e,t,n){var r=We(e),i=Fe(e,t,r),o="border-box"===w.css(e,"boxSizing",!1,r),a=o;if(Me.test(i)){if(!n)return i;i="auto"}return a=a&&(h.boxSizingReliable()||i===e.style[t]),("auto"===i||!parseFloat(i)&&"inline"===w.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],a=!0),(i=parseFloat(i)||0)+Ze(e,t,n||(o?"border":"content"),a,r,i)+"px"}w.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Fe(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,u=Q(t),s=Ue.test(t),l=e.style;if(s||(t=Ke(u)),a=w.cssHooks[t]||w.cssHooks[u],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"==(o=typeof n)&&(i=ie.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(w.cssNumber[u]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(s?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,u=Q(t);return Ue.test(t)||(t=Ke(u)),(a=w.cssHooks[t]||w.cssHooks[u])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Fe(e,t,r)),"normal"===i&&t in Xe&&(i=Xe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),w.each(["height","width"],function(e,t){w.cssHooks[t]={get:function(e,n,r){if(n)return!_e.test(w.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?et(e,t,r):ue(e,Ve,function(){return et(e,t,r)})},set:function(e,n,r){var i,o=We(e),a="border-box"===w.css(e,"boxSizing",!1,o),u=r&&Ze(e,t,r,a,o);return a&&h.scrollboxSize()===o.position&&(u-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-Ze(e,t,"border",!1,o)-.5)),u&&(i=ie.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=w.css(e,t)),Je(e,n,u)}}}),w.cssHooks.marginLeft=ze(h.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Fe(e,"marginLeft"))||e.getBoundingClientRect().left-ue(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),w.each({margin:"",padding:"",border:"Width"},function(e,t){w.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+oe[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(w.cssHooks[e+t].set=Je)}),w.fn.extend({css:function(e,t){return _(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=We(e),i=t.length;a<i;a++)o[t[a]]=w.css(e,t[a],!1,r);return o}return void 0!==n?w.style(e,t,n):w.css(e,t)},e,t,arguments.length>1)}}),w.fn.delay=function(t,n){return t=w.fx?w.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e=r.createElement("input"),t=r.createElement("select").appendChild(r.createElement("option"));e.type="checkbox",h.checkOn=""!==e.value,h.optSelected=t.selected,(e=r.createElement("input")).value="t",e.type="radio",h.radioValue="t"===e.value}();var tt,nt=w.expr.attrHandle;w.fn.extend({attr:function(e,t){return _(this,w.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){w.removeAttr(this,e)})}}),w.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?w.prop(e,t,n):(1===o&&w.isXMLDoc(e)||(i=w.attrHooks[t.toLowerCase()]||(w.expr.match.bool.test(t)?tt:void 0)),void 0!==n?null===n?void w.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=w.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&"radio"===t&&D(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(I);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),tt={set:function(e,t,n){return!1===t?w.removeAttr(e,n):e.setAttribute(n,n),n}},w.each(w.expr.match.bool.source.match(/\w+/g),function(e,t){var n=nt[t]||w.find.attr;nt[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=nt[a],nt[a]=i,i=null!=n(e,t,r)?a:null,nt[a]=o),i}});var rt=/^(?:input|select|textarea|button)$/i,it=/^(?:a|area)$/i;w.fn.extend({prop:function(e,t){return _(this,w.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[w.propFix[e]||e]})}}),w.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&w.isXMLDoc(e)||(t=w.propFix[t]||t,i=w.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=w.find.attr(e,"tabindex");return t?parseInt(t,10):rt.test(e.nodeName)||it.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),h.optSelected||(w.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),w.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){w.propFix[this.toLowerCase()]=this});function ot(e){return(e.match(I)||[]).join(" ")}function at(e){return e.getAttribute&&e.getAttribute("class")||""}function ut(e){return Array.isArray(e)?e:"string"==typeof e?e.match(I)||[]:[]}w.fn.extend({addClass:function(e){var t,n,r,i,o,a,u,s=0;if(g(e))return this.each(function(t){w(this).addClass(e.call(this,t,at(this)))});if((t=ut(e)).length)while(n=this[s++])if(i=at(n),r=1===n.nodeType&&" "+ot(i)+" "){a=0;while(o=t[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(u=ot(r))&&n.setAttribute("class",u)}return this},removeClass:function(e){var t,n,r,i,o,a,u,s=0;if(g(e))return this.each(function(t){w(this).removeClass(e.call(this,t,at(this)))});if(!arguments.length)return this.attr("class","");if((t=ut(e)).length)while(n=this[s++])if(i=at(n),r=1===n.nodeType&&" "+ot(i)+" "){a=0;while(o=t[a++])while(r.indexOf(" "+o+" ")>-1)r=r.replace(" "+o+" "," ");i!==(u=ot(r))&&n.setAttribute("class",u)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):g(e)?this.each(function(n){w(this).toggleClass(e.call(this,n,at(this),t),t)}):this.each(function(){var t,i,o,a;if(r){i=0,o=w(this),a=ut(e);while(t=a[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else void 0!==e&&"boolean"!==n||((t=at(this))&&K.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":K.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&(" "+ot(at(n))+" ").indexOf(t)>-1)return!0;return!1}});var st=/\r/g;w.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=g(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,w(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=w.map(i,function(e){return null==e?"":e+""})),(t=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return(t=w.valHooks[i.type]||w.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(st,""):null==n?"":n}}}),w.extend({valHooks:{option:{get:function(e){var t=w.find.attr(e,"value");return null!=t?t:ot(w.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,u=a?null:[],s=a?o+1:i.length;for(r=o<0?s:a?o:0;r<s;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!D(n.parentNode,"optgroup"))){if(t=w(n).val(),a)return t;u.push(t)}return u},set:function(e,t){var n,r,i=e.options,o=w.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=w.inArray(w.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),w.each(["radio","checkbox"],function(){w.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=w.inArray(w(e).val(),t)>-1}},h.checkOn||(w.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),h.focusin="onfocusin"in e;var lt=/^(?:focusinfocus|focusoutblur)$/,ct=function(e){e.stopPropagation()};w.extend(w.event,{trigger:function(t,n,i,o){var a,u,s,l,c,d,p,h,y=[i||r],m=f.call(t,"type")?t.type:t,b=f.call(t,"namespace")?t.namespace.split("."):[];if(u=h=s=i=i||r,3!==i.nodeType&&8!==i.nodeType&&!lt.test(m+w.event.triggered)&&(m.indexOf(".")>-1&&(m=(b=m.split(".")).shift(),b.sort()),c=m.indexOf(":")<0&&"on"+m,t=t[w.expando]?t:new w.Event(m,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=b.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+b.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:w.makeArray(n,[t]),p=w.event.special[m]||{},o||!p.trigger||!1!==p.trigger.apply(i,n))){if(!o&&!p.noBubble&&!v(i)){for(l=p.delegateType||m,lt.test(l+m)||(u=u.parentNode);u;u=u.parentNode)y.push(u),s=u;s===(i.ownerDocument||r)&&y.push(s.defaultView||s.parentWindow||e)}a=0;while((u=y[a++])&&!t.isPropagationStopped())h=u,t.type=a>1?l:p.bindType||m,(d=(K.get(u,"events")||{})[t.type]&&K.get(u,"handle"))&&d.apply(u,n),(d=c&&u[c])&&d.apply&&Y(u)&&(t.result=d.apply(u,n),!1===t.result&&t.preventDefault());return t.type=m,o||t.isDefaultPrevented()||p._default&&!1!==p._default.apply(y.pop(),n)||!Y(i)||c&&g(i[m])&&!v(i)&&((s=i[c])&&(i[c]=null),w.event.triggered=m,t.isPropagationStopped()&&h.addEventListener(m,ct),i[m](),t.isPropagationStopped()&&h.removeEventListener(m,ct),w.event.triggered=void 0,s&&(i[c]=s)),t.result}},simulate:function(e,t,n){var r=w.extend(new w.Event,n,{type:e,isSimulated:!0});w.event.trigger(r,null,t)}}),w.fn.extend({trigger:function(e,t){return this.each(function(){w.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return w.event.trigger(e,t,n,!0)}}),h.focusin||w.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){w.event.simulate(t,e.target,w.event.fix(e))};w.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=K.access(r,t);i||r.addEventListener(e,n,!0),K.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=K.access(r,t)-1;i?K.access(r,t,i):(r.removeEventListener(e,n,!0),K.remove(r,t))}}});var ft=/\[\]$/,dt=/\r?\n/g,pt=/^(?:submit|button|image|reset|file)$/i,ht=/^(?:input|select|textarea|keygen)/i;function gt(e,t,n,r){var i;if(Array.isArray(t))w.each(t,function(t,i){n||ft.test(e)?r(e,i):gt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==b(t))r(e,t);else for(i in t)gt(e+"["+i+"]",t[i],n,r)}w.param=function(e,t){var n,r=[],i=function(e,t){var n=g(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!w.isPlainObject(e))w.each(e,function(){i(this.name,this.value)});else for(n in e)gt(n,e[n],t,i);return r.join("&")},w.fn.extend({serialize:function(){return w.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=w.prop(this,"elements");return e?w.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!w(this).is(":disabled")&&ht.test(this.nodeName)&&!pt.test(e)&&(this.checked||!de.test(e))}).map(function(e,t){var n=w(this).val();return null==n?null:Array.isArray(n)?w.map(n,function(e){return{name:t.name,value:e.replace(dt,"\r\n")}}):{name:t.name,value:n.replace(dt,"\r\n")}}).get()}}),w.fn.extend({wrapAll:function(e){var t;return this[0]&&(g(e)&&(e=e.call(this[0])),t=w(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return g(e)?this.each(function(t){w(this).wrapInner(e.call(this,t))}):this.each(function(){var t=w(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=g(e);return this.each(function(n){w(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){w(this).replaceWith(this.childNodes)}),this}}),w.expr.pseudos.hidden=function(e){return!w.expr.pseudos.visible(e)},w.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},h.createHTMLDocument=function(){var e=r.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),w.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var i,o,a;return t||(h.createHTMLDocument?((i=(t=r.implementation.createHTMLDocument("")).createElement("base")).href=r.location.href,t.head.appendChild(i)):t=r),o=S.exec(e),a=!n&&[],o?[t.createElement(o[1])]:(o=be([e],t,a),a&&a.length&&w(a).remove(),w.merge([],o.childNodes))},w.offset={setOffset:function(e,t,n){var r,i,o,a,u,s,l,c=w.css(e,"position"),f=w(e),d={};"static"===c&&(e.style.position="relative"),u=f.offset(),o=w.css(e,"top"),s=w.css(e,"left"),(l=("absolute"===c||"fixed"===c)&&(o+s).indexOf("auto")>-1)?(a=(r=f.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(s)||0),g(t)&&(t=t.call(e,n,w.extend({},u))),null!=t.top&&(d.top=t.top-u.top+a),null!=t.left&&(d.left=t.left-u.left+i),"using"in t?t.using.call(e,d):f.css(d)}},w.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){w.offset.setOffset(this,e,t)});var t,n,r=this[0];if(r)return r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===w.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===w.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=w(e).offset()).top+=w.css(e,"borderTopWidth",!0),i.left+=w.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-w.css(r,"marginTop",!0),left:t.left-i.left-w.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===w.css(e,"position"))e=e.offsetParent;return e||xe})}}),w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;w.fn[e]=function(r){return _(this,function(e,r,i){var o;if(v(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),w.each(["top","left"],function(e,t){w.cssHooks[t]=ze(h.pixelPosition,function(e,n){if(n)return n=Fe(e,t),Me.test(n)?w(e).position()[t]+"px":n})}),w.each({Height:"height",Width:"width"},function(e,t){w.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){w.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),u=n||(!0===i||!0===o?"margin":"border");return _(this,function(t,n,i){var o;return v(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?w.css(t,n,u):w.style(t,n,i,u)},t,a?i:void 0,a)}})}),w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){w.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),w.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),w.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),w.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),g(e))return r=o.call(arguments,2),i=function(){return e.apply(t||this,r.concat(o.call(arguments)))},i.guid=e.guid=e.guid||w.guid++,i},w.holdReady=function(e){e?w.readyWait++:w.ready(!0)},w.isArray=Array.isArray,w.parseJSON=JSON.parse,w.nodeName=D,w.isFunction=g,w.isWindow=v,w.camelCase=Q,w.type=b,w.now=Date.now,w.isNumeric=function(e){var t=w.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return w});var vt=e.jQuery,yt=e.$;return w.noConflict=function(t){return e.$===w&&(e.$=yt),t&&e.jQuery===w&&(e.jQuery=vt),w},t||(e.jQuery=e.$=w),w});
/*!
  * Bootstrap v4.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
 !function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery"),require("popper.js")):"function"==typeof define&&define.amd?define(["exports","jquery","popper.js"],e):e((t=t||self).bootstrap={},t.jQuery,t.Popper)}(this,function(t,g,u){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function l(o){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},e=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.forEach(function(t){var e,n,i;e=o,i=r[n=t],n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i})}return o}g=g&&g.hasOwnProperty("default")?g.default:g,u=u&&u.hasOwnProperty("default")?u.default:u;var e="transitionend";function n(t){var e=this,n=!1;return g(this).one(_.TRANSITION_END,function(){n=!0}),setTimeout(function(){n||_.triggerTransitionEnd(e)},t),this}var _={TRANSITION_END:"bsTransitionEnd",getUID:function(t){for(;t+=~~(1e6*Math.random()),document.getElementById(t););return t},getSelectorFromElement:function(t){var e=t.getAttribute("data-target");if(!e||"#"===e){var n=t.getAttribute("href");e=n&&"#"!==n?n.trim():""}try{return document.querySelector(e)?e:null}catch(t){return null}},getTransitionDurationFromElement:function(t){if(!t)return 0;var e=g(t).css("transition-duration"),n=g(t).css("transition-delay"),i=parseFloat(e),o=parseFloat(n);return i||o?(e=e.split(",")[0],n=n.split(",")[0],1e3*(parseFloat(e)+parseFloat(n))):0},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(t){g(t).trigger(e)},supportsTransitionEnd:function(){return Boolean(e)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var o=n[i],r=e[i],s=r&&_.isElement(r)?"element":(a=r,{}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());if(!new RegExp(o).test(s))throw new Error(t.toUpperCase()+': Option "'+i+'" provided type "'+s+'" but expected type "'+o+'".')}var a},findShadowRoot:function(t){if(!document.documentElement.attachShadow)return null;if("function"!=typeof t.getRootNode)return t instanceof ShadowRoot?t:t.parentNode?_.findShadowRoot(t.parentNode):null;var e=t.getRootNode();return e instanceof ShadowRoot?e:null}};g.fn.emulateTransitionEnd=n,g.event.special[_.TRANSITION_END]={bindType:e,delegateType:e,handle:function(t){if(g(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}};var o="alert",r="bs.alert",a="."+r,c=g.fn[o],h={CLOSE:"close"+a,CLOSED:"closed"+a,CLICK_DATA_API:"click"+a+".data-api"},f="alert",d="fade",m="show",p=function(){function i(t){this._element=t}var t=i.prototype;return t.close=function(t){var e=this._element;t&&(e=this._getRootElement(t)),this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},t.dispose=function(){g.removeData(this._element,r),this._element=null},t._getRootElement=function(t){var e=_.getSelectorFromElement(t),n=!1;return e&&(n=document.querySelector(e)),n||(n=g(t).closest("."+f)[0]),n},t._triggerCloseEvent=function(t){var e=g.Event(h.CLOSE);return g(t).trigger(e),e},t._removeElement=function(e){var n=this;if(g(e).removeClass(m),g(e).hasClass(d)){var t=_.getTransitionDurationFromElement(e);g(e).one(_.TRANSITION_END,function(t){return n._destroyElement(e,t)}).emulateTransitionEnd(t)}else this._destroyElement(e)},t._destroyElement=function(t){g(t).detach().trigger(h.CLOSED).remove()},i._jQueryInterface=function(n){return this.each(function(){var t=g(this),e=t.data(r);e||(e=new i(this),t.data(r,e)),"close"===n&&e[n](this)})},i._handleDismiss=function(e){return function(t){t&&t.preventDefault(),e.close(this)}},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}}]),i}();g(document).on(h.CLICK_DATA_API,'[data-dismiss="alert"]',p._handleDismiss(new p)),g.fn[o]=p._jQueryInterface,g.fn[o].Constructor=p,g.fn[o].noConflict=function(){return g.fn[o]=c,p._jQueryInterface};var v="button",y="bs.button",E="."+y,C=".data-api",T=g.fn[v],S="active",b="btn",I="focus",D='[data-toggle^="button"]',w='[data-toggle="buttons"]',A='input:not([type="hidden"])',N=".active",O=".btn",k={CLICK_DATA_API:"click"+E+C,FOCUS_BLUR_DATA_API:"focus"+E+C+" blur"+E+C},P=function(){function n(t){this._element=t}var t=n.prototype;return t.toggle=function(){var t=!0,e=!0,n=g(this._element).closest(w)[0];if(n){var i=this._element.querySelector(A);if(i){if("radio"===i.type)if(i.checked&&this._element.classList.contains(S))t=!1;else{var o=n.querySelector(N);o&&g(o).removeClass(S)}if(t){if(i.hasAttribute("disabled")||n.hasAttribute("disabled")||i.classList.contains("disabled")||n.classList.contains("disabled"))return;i.checked=!this._element.classList.contains(S),g(i).trigger("change")}i.focus(),e=!1}}e&&this._element.setAttribute("aria-pressed",!this._element.classList.contains(S)),t&&g(this._element).toggleClass(S)},t.dispose=function(){g.removeData(this._element,y),this._element=null},n._jQueryInterface=function(e){return this.each(function(){var t=g(this).data(y);t||(t=new n(this),g(this).data(y,t)),"toggle"===e&&t[e]()})},s(n,null,[{key:"VERSION",get:function(){return"4.3.1"}}]),n}();g(document).on(k.CLICK_DATA_API,D,function(t){t.preventDefault();var e=t.target;g(e).hasClass(b)||(e=g(e).closest(O)),P._jQueryInterface.call(g(e),"toggle")}).on(k.FOCUS_BLUR_DATA_API,D,function(t){var e=g(t.target).closest(O)[0];g(e).toggleClass(I,/^focus(in)?$/.test(t.type))}),g.fn[v]=P._jQueryInterface,g.fn[v].Constructor=P,g.fn[v].noConflict=function(){return g.fn[v]=T,P._jQueryInterface};var L="carousel",j="bs.carousel",H="."+j,R=".data-api",x=g.fn[L],F={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},U={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},W="next",q="prev",M="left",K="right",Q={SLIDE:"slide"+H,SLID:"slid"+H,KEYDOWN:"keydown"+H,MOUSEENTER:"mouseenter"+H,MOUSELEAVE:"mouseleave"+H,TOUCHSTART:"touchstart"+H,TOUCHMOVE:"touchmove"+H,TOUCHEND:"touchend"+H,POINTERDOWN:"pointerdown"+H,POINTERUP:"pointerup"+H,DRAG_START:"dragstart"+H,LOAD_DATA_API:"load"+H+R,CLICK_DATA_API:"click"+H+R},B="carousel",V="active",Y="slide",z="carousel-item-right",X="carousel-item-left",$="carousel-item-next",G="carousel-item-prev",J="pointer-event",Z=".active",tt=".active.carousel-item",et=".carousel-item",nt=".carousel-item img",it=".carousel-item-next, .carousel-item-prev",ot=".carousel-indicators",rt="[data-slide], [data-slide-to]",st='[data-ride="carousel"]',at={TOUCH:"touch",PEN:"pen"},lt=function(){function r(t,e){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(e),this._element=t,this._indicatorsElement=this._element.querySelector(ot),this._touchSupported="ontouchstart"in document.documentElement||0<navigator.maxTouchPoints,this._pointerEvent=Boolean(window.PointerEvent||window.MSPointerEvent),this._addEventListeners()}var t=r.prototype;return t.next=function(){this._isSliding||this._slide(W)},t.nextWhenVisible=function(){!document.hidden&&g(this._element).is(":visible")&&"hidden"!==g(this._element).css("visibility")&&this.next()},t.prev=function(){this._isSliding||this._slide(q)},t.pause=function(t){t||(this._isPaused=!0),this._element.querySelector(it)&&(_.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},t.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},t.to=function(t){var e=this;this._activeElement=this._element.querySelector(tt);var n=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0))if(this._isSliding)g(this._element).one(Q.SLID,function(){return e.to(t)});else{if(n===t)return this.pause(),void this.cycle();var i=n<t?W:q;this._slide(i,this._items[t])}},t.dispose=function(){g(this._element).off(H),g.removeData(this._element,j),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},t._getConfig=function(t){return t=l({},F,t),_.typeCheckConfig(L,t,U),t},t._handleSwipe=function(){var t=Math.abs(this.touchDeltaX);if(!(t<=40)){var e=t/this.touchDeltaX;0<e&&this.prev(),e<0&&this.next()}},t._addEventListeners=function(){var e=this;this._config.keyboard&&g(this._element).on(Q.KEYDOWN,function(t){return e._keydown(t)}),"hover"===this._config.pause&&g(this._element).on(Q.MOUSEENTER,function(t){return e.pause(t)}).on(Q.MOUSELEAVE,function(t){return e.cycle(t)}),this._config.touch&&this._addTouchEventListeners()},t._addTouchEventListeners=function(){var n=this;if(this._touchSupported){var e=function(t){n._pointerEvent&&at[t.originalEvent.pointerType.toUpperCase()]?n.touchStartX=t.originalEvent.clientX:n._pointerEvent||(n.touchStartX=t.originalEvent.touches[0].clientX)},i=function(t){n._pointerEvent&&at[t.originalEvent.pointerType.toUpperCase()]&&(n.touchDeltaX=t.originalEvent.clientX-n.touchStartX),n._handleSwipe(),"hover"===n._config.pause&&(n.pause(),n.touchTimeout&&clearTimeout(n.touchTimeout),n.touchTimeout=setTimeout(function(t){return n.cycle(t)},500+n._config.interval))};g(this._element.querySelectorAll(nt)).on(Q.DRAG_START,function(t){return t.preventDefault()}),this._pointerEvent?(g(this._element).on(Q.POINTERDOWN,function(t){return e(t)}),g(this._element).on(Q.POINTERUP,function(t){return i(t)}),this._element.classList.add(J)):(g(this._element).on(Q.TOUCHSTART,function(t){return e(t)}),g(this._element).on(Q.TOUCHMOVE,function(t){var e;(e=t).originalEvent.touches&&1<e.originalEvent.touches.length?n.touchDeltaX=0:n.touchDeltaX=e.originalEvent.touches[0].clientX-n.touchStartX}),g(this._element).on(Q.TOUCHEND,function(t){return i(t)}))}},t._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}},t._getItemIndex=function(t){return this._items=t&&t.parentNode?[].slice.call(t.parentNode.querySelectorAll(et)):[],this._items.indexOf(t)},t._getItemByDirection=function(t,e){var n=t===W,i=t===q,o=this._getItemIndex(e),r=this._items.length-1;if((i&&0===o||n&&o===r)&&!this._config.wrap)return e;var s=(o+(t===q?-1:1))%this._items.length;return-1===s?this._items[this._items.length-1]:this._items[s]},t._triggerSlideEvent=function(t,e){var n=this._getItemIndex(t),i=this._getItemIndex(this._element.querySelector(tt)),o=g.Event(Q.SLIDE,{relatedTarget:t,direction:e,from:i,to:n});return g(this._element).trigger(o),o},t._setActiveIndicatorElement=function(t){if(this._indicatorsElement){var e=[].slice.call(this._indicatorsElement.querySelectorAll(Z));g(e).removeClass(V);var n=this._indicatorsElement.children[this._getItemIndex(t)];n&&g(n).addClass(V)}},t._slide=function(t,e){var n,i,o,r=this,s=this._element.querySelector(tt),a=this._getItemIndex(s),l=e||s&&this._getItemByDirection(t,s),c=this._getItemIndex(l),h=Boolean(this._interval);if(o=t===W?(n=X,i=$,M):(n=z,i=G,K),l&&g(l).hasClass(V))this._isSliding=!1;else if(!this._triggerSlideEvent(l,o).isDefaultPrevented()&&s&&l){this._isSliding=!0,h&&this.pause(),this._setActiveIndicatorElement(l);var u=g.Event(Q.SLID,{relatedTarget:l,direction:o,from:a,to:c});if(g(this._element).hasClass(Y)){g(l).addClass(i),_.reflow(l),g(s).addClass(n),g(l).addClass(n);var f=parseInt(l.getAttribute("data-interval"),10);this._config.interval=f?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,f):this._config.defaultInterval||this._config.interval;var d=_.getTransitionDurationFromElement(s);g(s).one(_.TRANSITION_END,function(){g(l).removeClass(n+" "+i).addClass(V),g(s).removeClass(V+" "+i+" "+n),r._isSliding=!1,setTimeout(function(){return g(r._element).trigger(u)},0)}).emulateTransitionEnd(d)}else g(s).removeClass(V),g(l).addClass(V),this._isSliding=!1,g(this._element).trigger(u);h&&this.cycle()}},r._jQueryInterface=function(i){return this.each(function(){var t=g(this).data(j),e=l({},F,g(this).data());"object"==typeof i&&(e=l({},e,i));var n="string"==typeof i?i:e.slide;if(t||(t=new r(this,e),g(this).data(j,t)),"number"==typeof i)t.to(i);else if("string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}else e.interval&&e.ride&&(t.pause(),t.cycle())})},r._dataApiClickHandler=function(t){var e=_.getSelectorFromElement(this);if(e){var n=g(e)[0];if(n&&g(n).hasClass(B)){var i=l({},g(n).data(),g(this).data()),o=this.getAttribute("data-slide-to");o&&(i.interval=!1),r._jQueryInterface.call(g(n),i),o&&g(n).data(j).to(o),t.preventDefault()}}},s(r,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return F}}]),r}();g(document).on(Q.CLICK_DATA_API,rt,lt._dataApiClickHandler),g(window).on(Q.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(st)),e=0,n=t.length;e<n;e++){var i=g(t[e]);lt._jQueryInterface.call(i,i.data())}}),g.fn[L]=lt._jQueryInterface,g.fn[L].Constructor=lt,g.fn[L].noConflict=function(){return g.fn[L]=x,lt._jQueryInterface};var ct="collapse",ht="bs.collapse",ut="."+ht,ft=g.fn[ct],dt={toggle:!0,parent:""},gt={toggle:"boolean",parent:"(string|element)"},_t={SHOW:"show"+ut,SHOWN:"shown"+ut,HIDE:"hide"+ut,HIDDEN:"hidden"+ut,CLICK_DATA_API:"click"+ut+".data-api"},mt="show",pt="collapse",vt="collapsing",yt="collapsed",Et="width",Ct="height",Tt=".show, .collapsing",St='[data-toggle="collapse"]',bt=function(){function a(e,t){this._isTransitioning=!1,this._element=e,this._config=this._getConfig(t),this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'));for(var n=[].slice.call(document.querySelectorAll(St)),i=0,o=n.length;i<o;i++){var r=n[i],s=_.getSelectorFromElement(r),a=[].slice.call(document.querySelectorAll(s)).filter(function(t){return t===e});null!==s&&0<a.length&&(this._selector=s,this._triggerArray.push(r))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var t=a.prototype;return t.toggle=function(){g(this._element).hasClass(mt)?this.hide():this.show()},t.show=function(){var t,e,n=this;if(!this._isTransitioning&&!g(this._element).hasClass(mt)&&(this._parent&&0===(t=[].slice.call(this._parent.querySelectorAll(Tt)).filter(function(t){return"string"==typeof n._config.parent?t.getAttribute("data-parent")===n._config.parent:t.classList.contains(pt)})).length&&(t=null),!(t&&(e=g(t).not(this._selector).data(ht))&&e._isTransitioning))){var i=g.Event(_t.SHOW);if(g(this._element).trigger(i),!i.isDefaultPrevented()){t&&(a._jQueryInterface.call(g(t).not(this._selector),"hide"),e||g(t).data(ht,null));var o=this._getDimension();g(this._element).removeClass(pt).addClass(vt),this._element.style[o]=0,this._triggerArray.length&&g(this._triggerArray).removeClass(yt).attr("aria-expanded",!0),this.setTransitioning(!0);var r="scroll"+(o[0].toUpperCase()+o.slice(1)),s=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(){g(n._element).removeClass(vt).addClass(pt).addClass(mt),n._element.style[o]="",n.setTransitioning(!1),g(n._element).trigger(_t.SHOWN)}).emulateTransitionEnd(s),this._element.style[o]=this._element[r]+"px"}}},t.hide=function(){var t=this;if(!this._isTransitioning&&g(this._element).hasClass(mt)){var e=g.Event(_t.HIDE);if(g(this._element).trigger(e),!e.isDefaultPrevented()){var n=this._getDimension();this._element.style[n]=this._element.getBoundingClientRect()[n]+"px",_.reflow(this._element),g(this._element).addClass(vt).removeClass(pt).removeClass(mt);var i=this._triggerArray.length;if(0<i)for(var o=0;o<i;o++){var r=this._triggerArray[o],s=_.getSelectorFromElement(r);if(null!==s)g([].slice.call(document.querySelectorAll(s))).hasClass(mt)||g(r).addClass(yt).attr("aria-expanded",!1)}this.setTransitioning(!0);this._element.style[n]="";var a=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(){t.setTransitioning(!1),g(t._element).removeClass(vt).addClass(pt).trigger(_t.HIDDEN)}).emulateTransitionEnd(a)}}},t.setTransitioning=function(t){this._isTransitioning=t},t.dispose=function(){g.removeData(this._element,ht),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},t._getConfig=function(t){return(t=l({},dt,t)).toggle=Boolean(t.toggle),_.typeCheckConfig(ct,t,gt),t},t._getDimension=function(){return g(this._element).hasClass(Et)?Et:Ct},t._getParent=function(){var t,n=this;_.isElement(this._config.parent)?(t=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(t=this._config.parent[0])):t=document.querySelector(this._config.parent);var e='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',i=[].slice.call(t.querySelectorAll(e));return g(i).each(function(t,e){n._addAriaAndCollapsedClass(a._getTargetFromElement(e),[e])}),t},t._addAriaAndCollapsedClass=function(t,e){var n=g(t).hasClass(mt);e.length&&g(e).toggleClass(yt,!n).attr("aria-expanded",n)},a._getTargetFromElement=function(t){var e=_.getSelectorFromElement(t);return e?document.querySelector(e):null},a._jQueryInterface=function(i){return this.each(function(){var t=g(this),e=t.data(ht),n=l({},dt,t.data(),"object"==typeof i&&i?i:{});if(!e&&n.toggle&&/show|hide/.test(i)&&(n.toggle=!1),e||(e=new a(this,n),t.data(ht,e)),"string"==typeof i){if("undefined"==typeof e[i])throw new TypeError('No method named "'+i+'"');e[i]()}})},s(a,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return dt}}]),a}();g(document).on(_t.CLICK_DATA_API,St,function(t){"A"===t.currentTarget.tagName&&t.preventDefault();var n=g(this),e=_.getSelectorFromElement(this),i=[].slice.call(document.querySelectorAll(e));g(i).each(function(){var t=g(this),e=t.data(ht)?"toggle":n.data();bt._jQueryInterface.call(t,e)})}),g.fn[ct]=bt._jQueryInterface,g.fn[ct].Constructor=bt,g.fn[ct].noConflict=function(){return g.fn[ct]=ft,bt._jQueryInterface};var It="dropdown",Dt="bs.dropdown",wt="."+Dt,At=".data-api",Nt=g.fn[It],Ot=new RegExp("38|40|27"),kt={HIDE:"hide"+wt,HIDDEN:"hidden"+wt,SHOW:"show"+wt,SHOWN:"shown"+wt,CLICK:"click"+wt,CLICK_DATA_API:"click"+wt+At,KEYDOWN_DATA_API:"keydown"+wt+At,KEYUP_DATA_API:"keyup"+wt+At},Pt="disabled",Lt="show",jt="dropup",Ht="dropright",Rt="dropleft",xt="dropdown-menu-right",Ft="position-static",Ut='[data-toggle="dropdown"]',Wt=".dropdown form",qt=".dropdown-menu",Mt=".navbar-nav",Kt=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Qt="top-start",Bt="top-end",Vt="bottom-start",Yt="bottom-end",zt="right-start",Xt="left-start",$t={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic"},Gt={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string"},Jt=function(){function c(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var t=c.prototype;return t.toggle=function(){if(!this._element.disabled&&!g(this._element).hasClass(Pt)){var t=c._getParentFromElement(this._element),e=g(this._menu).hasClass(Lt);if(c._clearMenus(),!e){var n={relatedTarget:this._element},i=g.Event(kt.SHOW,n);if(g(t).trigger(i),!i.isDefaultPrevented()){if(!this._inNavbar){if("undefined"==typeof u)throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");var o=this._element;"parent"===this._config.reference?o=t:_.isElement(this._config.reference)&&(o=this._config.reference,"undefined"!=typeof this._config.reference.jquery&&(o=this._config.reference[0])),"scrollParent"!==this._config.boundary&&g(t).addClass(Ft),this._popper=new u(o,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===g(t).closest(Mt).length&&g(document.body).children().on("mouseover",null,g.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),g(this._menu).toggleClass(Lt),g(t).toggleClass(Lt).trigger(g.Event(kt.SHOWN,n))}}}},t.show=function(){if(!(this._element.disabled||g(this._element).hasClass(Pt)||g(this._menu).hasClass(Lt))){var t={relatedTarget:this._element},e=g.Event(kt.SHOW,t),n=c._getParentFromElement(this._element);g(n).trigger(e),e.isDefaultPrevented()||(g(this._menu).toggleClass(Lt),g(n).toggleClass(Lt).trigger(g.Event(kt.SHOWN,t)))}},t.hide=function(){if(!this._element.disabled&&!g(this._element).hasClass(Pt)&&g(this._menu).hasClass(Lt)){var t={relatedTarget:this._element},e=g.Event(kt.HIDE,t),n=c._getParentFromElement(this._element);g(n).trigger(e),e.isDefaultPrevented()||(g(this._menu).toggleClass(Lt),g(n).toggleClass(Lt).trigger(g.Event(kt.HIDDEN,t)))}},t.dispose=function(){g.removeData(this._element,Dt),g(this._element).off(wt),this._element=null,(this._menu=null)!==this._popper&&(this._popper.destroy(),this._popper=null)},t.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},t._addEventListeners=function(){var e=this;g(this._element).on(kt.CLICK,function(t){t.preventDefault(),t.stopPropagation(),e.toggle()})},t._getConfig=function(t){return t=l({},this.constructor.Default,g(this._element).data(),t),_.typeCheckConfig(It,t,this.constructor.DefaultType),t},t._getMenuElement=function(){if(!this._menu){var t=c._getParentFromElement(this._element);t&&(this._menu=t.querySelector(qt))}return this._menu},t._getPlacement=function(){var t=g(this._element.parentNode),e=Vt;return t.hasClass(jt)?(e=Qt,g(this._menu).hasClass(xt)&&(e=Bt)):t.hasClass(Ht)?e=zt:t.hasClass(Rt)?e=Xt:g(this._menu).hasClass(xt)&&(e=Yt),e},t._detectNavbar=function(){return 0<g(this._element).closest(".navbar").length},t._getOffset=function(){var e=this,t={};return"function"==typeof this._config.offset?t.fn=function(t){return t.offsets=l({},t.offsets,e._config.offset(t.offsets,e._element)||{}),t}:t.offset=this._config.offset,t},t._getPopperConfig=function(){var t={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(t.modifiers.applyStyle={enabled:!1}),t},c._jQueryInterface=function(e){return this.each(function(){var t=g(this).data(Dt);if(t||(t=new c(this,"object"==typeof e?e:null),g(this).data(Dt,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},c._clearMenus=function(t){if(!t||3!==t.which&&("keyup"!==t.type||9===t.which))for(var e=[].slice.call(document.querySelectorAll(Ut)),n=0,i=e.length;n<i;n++){var o=c._getParentFromElement(e[n]),r=g(e[n]).data(Dt),s={relatedTarget:e[n]};if(t&&"click"===t.type&&(s.clickEvent=t),r){var a=r._menu;if(g(o).hasClass(Lt)&&!(t&&("click"===t.type&&/input|textarea/i.test(t.target.tagName)||"keyup"===t.type&&9===t.which)&&g.contains(o,t.target))){var l=g.Event(kt.HIDE,s);g(o).trigger(l),l.isDefaultPrevented()||("ontouchstart"in document.documentElement&&g(document.body).children().off("mouseover",null,g.noop),e[n].setAttribute("aria-expanded","false"),g(a).removeClass(Lt),g(o).removeClass(Lt).trigger(g.Event(kt.HIDDEN,s)))}}}},c._getParentFromElement=function(t){var e,n=_.getSelectorFromElement(t);return n&&(e=document.querySelector(n)),e||t.parentNode},c._dataApiKeydownHandler=function(t){if((/input|textarea/i.test(t.target.tagName)?!(32===t.which||27!==t.which&&(40!==t.which&&38!==t.which||g(t.target).closest(qt).length)):Ot.test(t.which))&&(t.preventDefault(),t.stopPropagation(),!this.disabled&&!g(this).hasClass(Pt))){var e=c._getParentFromElement(this),n=g(e).hasClass(Lt);if(n&&(!n||27!==t.which&&32!==t.which)){var i=[].slice.call(e.querySelectorAll(Kt));if(0!==i.length){var o=i.indexOf(t.target);38===t.which&&0<o&&o--,40===t.which&&o<i.length-1&&o++,o<0&&(o=0),i[o].focus()}}else{if(27===t.which){var r=e.querySelector(Ut);g(r).trigger("focus")}g(this).trigger("click")}}},s(c,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return $t}},{key:"DefaultType",get:function(){return Gt}}]),c}();g(document).on(kt.KEYDOWN_DATA_API,Ut,Jt._dataApiKeydownHandler).on(kt.KEYDOWN_DATA_API,qt,Jt._dataApiKeydownHandler).on(kt.CLICK_DATA_API+" "+kt.KEYUP_DATA_API,Jt._clearMenus).on(kt.CLICK_DATA_API,Ut,function(t){t.preventDefault(),t.stopPropagation(),Jt._jQueryInterface.call(g(this),"toggle")}).on(kt.CLICK_DATA_API,Wt,function(t){t.stopPropagation()}),g.fn[It]=Jt._jQueryInterface,g.fn[It].Constructor=Jt,g.fn[It].noConflict=function(){return g.fn[It]=Nt,Jt._jQueryInterface};var Zt="modal",te="bs.modal",ee="."+te,ne=g.fn[Zt],ie={backdrop:!0,keyboard:!0,focus:!0,show:!0},oe={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},re={HIDE:"hide"+ee,HIDDEN:"hidden"+ee,SHOW:"show"+ee,SHOWN:"shown"+ee,FOCUSIN:"focusin"+ee,RESIZE:"resize"+ee,CLICK_DISMISS:"click.dismiss"+ee,KEYDOWN_DISMISS:"keydown.dismiss"+ee,MOUSEUP_DISMISS:"mouseup.dismiss"+ee,MOUSEDOWN_DISMISS:"mousedown.dismiss"+ee,CLICK_DATA_API:"click"+ee+".data-api"},se="modal-dialog-scrollable",ae="modal-scrollbar-measure",le="modal-backdrop",ce="modal-open",he="fade",ue="show",fe=".modal-dialog",de=".modal-body",ge='[data-toggle="modal"]',_e='[data-dismiss="modal"]',me=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",pe=".sticky-top",ve=function(){function o(t,e){this._config=this._getConfig(e),this._element=t,this._dialog=t.querySelector(fe),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0}var t=o.prototype;return t.toggle=function(t){return this._isShown?this.hide():this.show(t)},t.show=function(t){var e=this;if(!this._isShown&&!this._isTransitioning){g(this._element).hasClass(he)&&(this._isTransitioning=!0);var n=g.Event(re.SHOW,{relatedTarget:t});g(this._element).trigger(n),this._isShown||n.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),g(this._element).on(re.CLICK_DISMISS,_e,function(t){return e.hide(t)}),g(this._dialog).on(re.MOUSEDOWN_DISMISS,function(){g(e._element).one(re.MOUSEUP_DISMISS,function(t){g(t.target).is(e._element)&&(e._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return e._showElement(t)}))}},t.hide=function(t){var e=this;if(t&&t.preventDefault(),this._isShown&&!this._isTransitioning){var n=g.Event(re.HIDE);if(g(this._element).trigger(n),this._isShown&&!n.isDefaultPrevented()){this._isShown=!1;var i=g(this._element).hasClass(he);if(i&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),g(document).off(re.FOCUSIN),g(this._element).removeClass(ue),g(this._element).off(re.CLICK_DISMISS),g(this._dialog).off(re.MOUSEDOWN_DISMISS),i){var o=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(t){return e._hideModal(t)}).emulateTransitionEnd(o)}else this._hideModal()}}},t.dispose=function(){[window,this._element,this._dialog].forEach(function(t){return g(t).off(ee)}),g(document).off(re.FOCUSIN),g.removeData(this._element,te),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null},t.handleUpdate=function(){this._adjustDialog()},t._getConfig=function(t){return t=l({},ie,t),_.typeCheckConfig(Zt,t,oe),t},t._showElement=function(t){var e=this,n=g(this._element).hasClass(he);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),g(this._dialog).hasClass(se)?this._dialog.querySelector(de).scrollTop=0:this._element.scrollTop=0,n&&_.reflow(this._element),g(this._element).addClass(ue),this._config.focus&&this._enforceFocus();var i=g.Event(re.SHOWN,{relatedTarget:t}),o=function(){e._config.focus&&e._element.focus(),e._isTransitioning=!1,g(e._element).trigger(i)};if(n){var r=_.getTransitionDurationFromElement(this._dialog);g(this._dialog).one(_.TRANSITION_END,o).emulateTransitionEnd(r)}else o()},t._enforceFocus=function(){var e=this;g(document).off(re.FOCUSIN).on(re.FOCUSIN,function(t){document!==t.target&&e._element!==t.target&&0===g(e._element).has(t.target).length&&e._element.focus()})},t._setEscapeEvent=function(){var e=this;this._isShown&&this._config.keyboard?g(this._element).on(re.KEYDOWN_DISMISS,function(t){27===t.which&&(t.preventDefault(),e.hide())}):this._isShown||g(this._element).off(re.KEYDOWN_DISMISS)},t._setResizeEvent=function(){var e=this;this._isShown?g(window).on(re.RESIZE,function(t){return e.handleUpdate(t)}):g(window).off(re.RESIZE)},t._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._isTransitioning=!1,this._showBackdrop(function(){g(document.body).removeClass(ce),t._resetAdjustments(),t._resetScrollbar(),g(t._element).trigger(re.HIDDEN)})},t._removeBackdrop=function(){this._backdrop&&(g(this._backdrop).remove(),this._backdrop=null)},t._showBackdrop=function(t){var e=this,n=g(this._element).hasClass(he)?he:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className=le,n&&this._backdrop.classList.add(n),g(this._backdrop).appendTo(document.body),g(this._element).on(re.CLICK_DISMISS,function(t){e._ignoreBackdropClick?e._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===e._config.backdrop?e._element.focus():e.hide())}),n&&_.reflow(this._backdrop),g(this._backdrop).addClass(ue),!t)return;if(!n)return void t();var i=_.getTransitionDurationFromElement(this._backdrop);g(this._backdrop).one(_.TRANSITION_END,t).emulateTransitionEnd(i)}else if(!this._isShown&&this._backdrop){g(this._backdrop).removeClass(ue);var o=function(){e._removeBackdrop(),t&&t()};if(g(this._element).hasClass(he)){var r=_.getTransitionDurationFromElement(this._backdrop);g(this._backdrop).one(_.TRANSITION_END,o).emulateTransitionEnd(r)}else o()}else t&&t()},t._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},t._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},t._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=t.left+t.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},t._setScrollbar=function(){var o=this;if(this._isBodyOverflowing){var t=[].slice.call(document.querySelectorAll(me)),e=[].slice.call(document.querySelectorAll(pe));g(t).each(function(t,e){var n=e.style.paddingRight,i=g(e).css("padding-right");g(e).data("padding-right",n).css("padding-right",parseFloat(i)+o._scrollbarWidth+"px")}),g(e).each(function(t,e){var n=e.style.marginRight,i=g(e).css("margin-right");g(e).data("margin-right",n).css("margin-right",parseFloat(i)-o._scrollbarWidth+"px")});var n=document.body.style.paddingRight,i=g(document.body).css("padding-right");g(document.body).data("padding-right",n).css("padding-right",parseFloat(i)+this._scrollbarWidth+"px")}g(document.body).addClass(ce)},t._resetScrollbar=function(){var t=[].slice.call(document.querySelectorAll(me));g(t).each(function(t,e){var n=g(e).data("padding-right");g(e).removeData("padding-right"),e.style.paddingRight=n||""});var e=[].slice.call(document.querySelectorAll(""+pe));g(e).each(function(t,e){var n=g(e).data("margin-right");"undefined"!=typeof n&&g(e).css("margin-right",n).removeData("margin-right")});var n=g(document.body).data("padding-right");g(document.body).removeData("padding-right"),document.body.style.paddingRight=n||""},t._getScrollbarWidth=function(){var t=document.createElement("div");t.className=ae,document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},o._jQueryInterface=function(n,i){return this.each(function(){var t=g(this).data(te),e=l({},ie,g(this).data(),"object"==typeof n&&n?n:{});if(t||(t=new o(this,e),g(this).data(te,t)),"string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n](i)}else e.show&&t.show(i)})},s(o,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return ie}}]),o}();g(document).on(re.CLICK_DATA_API,ge,function(t){var e,n=this,i=_.getSelectorFromElement(this);i&&(e=document.querySelector(i));var o=g(e).data(te)?"toggle":l({},g(e).data(),g(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var r=g(e).one(re.SHOW,function(t){t.isDefaultPrevented()||r.one(re.HIDDEN,function(){g(n).is(":visible")&&n.focus()})});ve._jQueryInterface.call(g(e),o,this)}),g.fn[Zt]=ve._jQueryInterface,g.fn[Zt].Constructor=ve,g.fn[Zt].noConflict=function(){return g.fn[Zt]=ne,ve._jQueryInterface};var ye=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],Ee={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Ce=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,Te=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;function Se(t,s,e){if(0===t.length)return t;if(e&&"function"==typeof e)return e(t);for(var n=(new window.DOMParser).parseFromString(t,"text/html"),a=Object.keys(s),l=[].slice.call(n.body.querySelectorAll("*")),i=function(t,e){var n=l[t],i=n.nodeName.toLowerCase();if(-1===a.indexOf(n.nodeName.toLowerCase()))return n.parentNode.removeChild(n),"continue";var o=[].slice.call(n.attributes),r=[].concat(s["*"]||[],s[i]||[]);o.forEach(function(t){(function(t,e){var n=t.nodeName.toLowerCase();if(-1!==e.indexOf(n))return-1===ye.indexOf(n)||Boolean(t.nodeValue.match(Ce)||t.nodeValue.match(Te));for(var i=e.filter(function(t){return t instanceof RegExp}),o=0,r=i.length;o<r;o++)if(n.match(i[o]))return!0;return!1})(t,r)||n.removeAttribute(t.nodeName)})},o=0,r=l.length;o<r;o++)i(o);return n.body.innerHTML}var be="tooltip",Ie="bs.tooltip",De="."+Ie,we=g.fn[be],Ae="bs-tooltip",Ne=new RegExp("(^|\\s)"+Ae+"\\S+","g"),Oe=["sanitize","whiteList","sanitizeFn"],ke={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string|function)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)",sanitize:"boolean",sanitizeFn:"(null|function)",whiteList:"object"},Pe={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},Le={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent",sanitize:!0,sanitizeFn:null,whiteList:Ee},je="show",He="out",Re={HIDE:"hide"+De,HIDDEN:"hidden"+De,SHOW:"show"+De,SHOWN:"shown"+De,INSERTED:"inserted"+De,CLICK:"click"+De,FOCUSIN:"focusin"+De,FOCUSOUT:"focusout"+De,MOUSEENTER:"mouseenter"+De,MOUSELEAVE:"mouseleave"+De},xe="fade",Fe="show",Ue=".tooltip-inner",We=".arrow",qe="hover",Me="focus",Ke="click",Qe="manual",Be=function(){function i(t,e){if("undefined"==typeof u)throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var t=i.prototype;return t.enable=function(){this._isEnabled=!0},t.disable=function(){this._isEnabled=!1},t.toggleEnabled=function(){this._isEnabled=!this._isEnabled},t.toggle=function(t){if(this._isEnabled)if(t){var e=this.constructor.DATA_KEY,n=g(t.currentTarget).data(e);n||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),g(t.currentTarget).data(e,n)),n._activeTrigger.click=!n._activeTrigger.click,n._isWithActiveTrigger()?n._enter(null,n):n._leave(null,n)}else{if(g(this.getTipElement()).hasClass(Fe))return void this._leave(null,this);this._enter(null,this)}},t.dispose=function(){clearTimeout(this._timeout),g.removeData(this.element,this.constructor.DATA_KEY),g(this.element).off(this.constructor.EVENT_KEY),g(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&g(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,(this._activeTrigger=null)!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},t.show=function(){var e=this;if("none"===g(this.element).css("display"))throw new Error("Please use show on visible elements");var t=g.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){g(this.element).trigger(t);var n=_.findShadowRoot(this.element),i=g.contains(null!==n?n:this.element.ownerDocument.documentElement,this.element);if(t.isDefaultPrevented()||!i)return;var o=this.getTipElement(),r=_.getUID(this.constructor.NAME);o.setAttribute("id",r),this.element.setAttribute("aria-describedby",r),this.setContent(),this.config.animation&&g(o).addClass(xe);var s="function"==typeof this.config.placement?this.config.placement.call(this,o,this.element):this.config.placement,a=this._getAttachment(s);this.addAttachmentClass(a);var l=this._getContainer();g(o).data(this.constructor.DATA_KEY,this),g.contains(this.element.ownerDocument.documentElement,this.tip)||g(o).appendTo(l),g(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new u(this.element,o,{placement:a,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement},arrow:{element:We},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){return e._handlePopperPlacementChange(t)}}),g(o).addClass(Fe),"ontouchstart"in document.documentElement&&g(document.body).children().on("mouseover",null,g.noop);var c=function(){e.config.animation&&e._fixTransition();var t=e._hoverState;e._hoverState=null,g(e.element).trigger(e.constructor.Event.SHOWN),t===He&&e._leave(null,e)};if(g(this.tip).hasClass(xe)){var h=_.getTransitionDurationFromElement(this.tip);g(this.tip).one(_.TRANSITION_END,c).emulateTransitionEnd(h)}else c()}},t.hide=function(t){var e=this,n=this.getTipElement(),i=g.Event(this.constructor.Event.HIDE),o=function(){e._hoverState!==je&&n.parentNode&&n.parentNode.removeChild(n),e._cleanTipClass(),e.element.removeAttribute("aria-describedby"),g(e.element).trigger(e.constructor.Event.HIDDEN),null!==e._popper&&e._popper.destroy(),t&&t()};if(g(this.element).trigger(i),!i.isDefaultPrevented()){if(g(n).removeClass(Fe),"ontouchstart"in document.documentElement&&g(document.body).children().off("mouseover",null,g.noop),this._activeTrigger[Ke]=!1,this._activeTrigger[Me]=!1,this._activeTrigger[qe]=!1,g(this.tip).hasClass(xe)){var r=_.getTransitionDurationFromElement(n);g(n).one(_.TRANSITION_END,o).emulateTransitionEnd(r)}else o();this._hoverState=""}},t.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},t.isWithContent=function(){return Boolean(this.getTitle())},t.addAttachmentClass=function(t){g(this.getTipElement()).addClass(Ae+"-"+t)},t.getTipElement=function(){return this.tip=this.tip||g(this.config.template)[0],this.tip},t.setContent=function(){var t=this.getTipElement();this.setElementContent(g(t.querySelectorAll(Ue)),this.getTitle()),g(t).removeClass(xe+" "+Fe)},t.setElementContent=function(t,e){"object"!=typeof e||!e.nodeType&&!e.jquery?this.config.html?(this.config.sanitize&&(e=Se(e,this.config.whiteList,this.config.sanitizeFn)),t.html(e)):t.text(e):this.config.html?g(e).parent().is(t)||t.empty().append(e):t.text(g(e).text())},t.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},t._getOffset=function(){var e=this,t={};return"function"==typeof this.config.offset?t.fn=function(t){return t.offsets=l({},t.offsets,e.config.offset(t.offsets,e.element)||{}),t}:t.offset=this.config.offset,t},t._getContainer=function(){return!1===this.config.container?document.body:_.isElement(this.config.container)?g(this.config.container):g(document).find(this.config.container)},t._getAttachment=function(t){return Pe[t.toUpperCase()]},t._setListeners=function(){var i=this;this.config.trigger.split(" ").forEach(function(t){if("click"===t)g(i.element).on(i.constructor.Event.CLICK,i.config.selector,function(t){return i.toggle(t)});else if(t!==Qe){var e=t===qe?i.constructor.Event.MOUSEENTER:i.constructor.Event.FOCUSIN,n=t===qe?i.constructor.Event.MOUSELEAVE:i.constructor.Event.FOCUSOUT;g(i.element).on(e,i.config.selector,function(t){return i._enter(t)}).on(n,i.config.selector,function(t){return i._leave(t)})}}),g(this.element).closest(".modal").on("hide.bs.modal",function(){i.element&&i.hide()}),this.config.selector?this.config=l({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},t._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},t._enter=function(t,e){var n=this.constructor.DATA_KEY;(e=e||g(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),g(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusin"===t.type?Me:qe]=!0),g(e.getTipElement()).hasClass(Fe)||e._hoverState===je?e._hoverState=je:(clearTimeout(e._timeout),e._hoverState=je,e.config.delay&&e.config.delay.show?e._timeout=setTimeout(function(){e._hoverState===je&&e.show()},e.config.delay.show):e.show())},t._leave=function(t,e){var n=this.constructor.DATA_KEY;(e=e||g(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),g(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusout"===t.type?Me:qe]=!1),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState=He,e.config.delay&&e.config.delay.hide?e._timeout=setTimeout(function(){e._hoverState===He&&e.hide()},e.config.delay.hide):e.hide())},t._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},t._getConfig=function(t){var e=g(this.element).data();return Object.keys(e).forEach(function(t){-1!==Oe.indexOf(t)&&delete e[t]}),"number"==typeof(t=l({},this.constructor.Default,e,"object"==typeof t&&t?t:{})).delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),_.typeCheckConfig(be,t,this.constructor.DefaultType),t.sanitize&&(t.template=Se(t.template,t.whiteList,t.sanitizeFn)),t},t._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},t._cleanTipClass=function(){var t=g(this.getTipElement()),e=t.attr("class").match(Ne);null!==e&&e.length&&t.removeClass(e.join(""))},t._handlePopperPlacementChange=function(t){var e=t.instance;this.tip=e.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},t._fixTransition=function(){var t=this.getTipElement(),e=this.config.animation;null===t.getAttribute("x-placement")&&(g(t).removeClass(xe),this.config.animation=!1,this.hide(),this.show(),this.config.animation=e)},i._jQueryInterface=function(n){return this.each(function(){var t=g(this).data(Ie),e="object"==typeof n&&n;if((t||!/dispose|hide/.test(n))&&(t||(t=new i(this,e),g(this).data(Ie,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return Le}},{key:"NAME",get:function(){return be}},{key:"DATA_KEY",get:function(){return Ie}},{key:"Event",get:function(){return Re}},{key:"EVENT_KEY",get:function(){return De}},{key:"DefaultType",get:function(){return ke}}]),i}();g.fn[be]=Be._jQueryInterface,g.fn[be].Constructor=Be,g.fn[be].noConflict=function(){return g.fn[be]=we,Be._jQueryInterface};var Ve="popover",Ye="bs.popover",ze="."+Ye,Xe=g.fn[Ve],$e="bs-popover",Ge=new RegExp("(^|\\s)"+$e+"\\S+","g"),Je=l({},Be.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),Ze=l({},Be.DefaultType,{content:"(string|element|function)"}),tn="fade",en="show",nn=".popover-header",on=".popover-body",rn={HIDE:"hide"+ze,HIDDEN:"hidden"+ze,SHOW:"show"+ze,SHOWN:"shown"+ze,INSERTED:"inserted"+ze,CLICK:"click"+ze,FOCUSIN:"focusin"+ze,FOCUSOUT:"focusout"+ze,MOUSEENTER:"mouseenter"+ze,MOUSELEAVE:"mouseleave"+ze},sn=function(t){var e,n;function i(){return t.apply(this,arguments)||this}n=t,(e=i).prototype=Object.create(n.prototype),(e.prototype.constructor=e).__proto__=n;var o=i.prototype;return o.isWithContent=function(){return this.getTitle()||this._getContent()},o.addAttachmentClass=function(t){g(this.getTipElement()).addClass($e+"-"+t)},o.getTipElement=function(){return this.tip=this.tip||g(this.config.template)[0],this.tip},o.setContent=function(){var t=g(this.getTipElement());this.setElementContent(t.find(nn),this.getTitle());var e=this._getContent();"function"==typeof e&&(e=e.call(this.element)),this.setElementContent(t.find(on),e),t.removeClass(tn+" "+en)},o._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},o._cleanTipClass=function(){var t=g(this.getTipElement()),e=t.attr("class").match(Ge);null!==e&&0<e.length&&t.removeClass(e.join(""))},i._jQueryInterface=function(n){return this.each(function(){var t=g(this).data(Ye),e="object"==typeof n?n:null;if((t||!/dispose|hide/.test(n))&&(t||(t=new i(this,e),g(this).data(Ye,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return Je}},{key:"NAME",get:function(){return Ve}},{key:"DATA_KEY",get:function(){return Ye}},{key:"Event",get:function(){return rn}},{key:"EVENT_KEY",get:function(){return ze}},{key:"DefaultType",get:function(){return Ze}}]),i}(Be);g.fn[Ve]=sn._jQueryInterface,g.fn[Ve].Constructor=sn,g.fn[Ve].noConflict=function(){return g.fn[Ve]=Xe,sn._jQueryInterface};var an="scrollspy",ln="bs.scrollspy",cn="."+ln,hn=g.fn[an],un={offset:10,method:"auto",target:""},fn={offset:"number",method:"string",target:"(string|element)"},dn={ACTIVATE:"activate"+cn,SCROLL:"scroll"+cn,LOAD_DATA_API:"load"+cn+".data-api"},gn="dropdown-item",_n="active",mn='[data-spy="scroll"]',pn=".nav, .list-group",vn=".nav-link",yn=".nav-item",En=".list-group-item",Cn=".dropdown",Tn=".dropdown-item",Sn=".dropdown-toggle",bn="offset",In="position",Dn=function(){function n(t,e){var n=this;this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(e),this._selector=this._config.target+" "+vn+","+this._config.target+" "+En+","+this._config.target+" "+Tn,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,g(this._scrollElement).on(dn.SCROLL,function(t){return n._process(t)}),this.refresh(),this._process()}var t=n.prototype;return t.refresh=function(){var e=this,t=this._scrollElement===this._scrollElement.window?bn:In,o="auto"===this._config.method?t:this._config.method,r=o===In?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),[].slice.call(document.querySelectorAll(this._selector)).map(function(t){var e,n=_.getSelectorFromElement(t);if(n&&(e=document.querySelector(n)),e){var i=e.getBoundingClientRect();if(i.width||i.height)return[g(e)[o]().top+r,n]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(t){e._offsets.push(t[0]),e._targets.push(t[1])})},t.dispose=function(){g.removeData(this._element,ln),g(this._scrollElement).off(cn),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},t._getConfig=function(t){if("string"!=typeof(t=l({},un,"object"==typeof t&&t?t:{})).target){var e=g(t.target).attr("id");e||(e=_.getUID(an),g(t.target).attr("id",e)),t.target="#"+e}return _.typeCheckConfig(an,t,fn),t},t._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},t._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},t._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},t._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),n<=t){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&0<this._offsets[0])return this._activeTarget=null,void this._clear();for(var o=this._offsets.length;o--;){this._activeTarget!==this._targets[o]&&t>=this._offsets[o]&&("undefined"==typeof this._offsets[o+1]||t<this._offsets[o+1])&&this._activate(this._targets[o])}}},t._activate=function(e){this._activeTarget=e,this._clear();var t=this._selector.split(",").map(function(t){return t+'[data-target="'+e+'"],'+t+'[href="'+e+'"]'}),n=g([].slice.call(document.querySelectorAll(t.join(","))));n.hasClass(gn)?(n.closest(Cn).find(Sn).addClass(_n),n.addClass(_n)):(n.addClass(_n),n.parents(pn).prev(vn+", "+En).addClass(_n),n.parents(pn).prev(yn).children(vn).addClass(_n)),g(this._scrollElement).trigger(dn.ACTIVATE,{relatedTarget:e})},t._clear=function(){[].slice.call(document.querySelectorAll(this._selector)).filter(function(t){return t.classList.contains(_n)}).forEach(function(t){return t.classList.remove(_n)})},n._jQueryInterface=function(e){return this.each(function(){var t=g(this).data(ln);if(t||(t=new n(this,"object"==typeof e&&e),g(this).data(ln,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},s(n,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return un}}]),n}();g(window).on(dn.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(mn)),e=t.length;e--;){var n=g(t[e]);Dn._jQueryInterface.call(n,n.data())}}),g.fn[an]=Dn._jQueryInterface,g.fn[an].Constructor=Dn,g.fn[an].noConflict=function(){return g.fn[an]=hn,Dn._jQueryInterface};var wn="bs.tab",An="."+wn,Nn=g.fn.tab,On={HIDE:"hide"+An,HIDDEN:"hidden"+An,SHOW:"show"+An,SHOWN:"shown"+An,CLICK_DATA_API:"click"+An+".data-api"},kn="dropdown-menu",Pn="active",Ln="disabled",jn="fade",Hn="show",Rn=".dropdown",xn=".nav, .list-group",Fn=".active",Un="> li > .active",Wn='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',qn=".dropdown-toggle",Mn="> .dropdown-menu .active",Kn=function(){function i(t){this._element=t}var t=i.prototype;return t.show=function(){var n=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&g(this._element).hasClass(Pn)||g(this._element).hasClass(Ln))){var t,i,e=g(this._element).closest(xn)[0],o=_.getSelectorFromElement(this._element);if(e){var r="UL"===e.nodeName||"OL"===e.nodeName?Un:Fn;i=(i=g.makeArray(g(e).find(r)))[i.length-1]}var s=g.Event(On.HIDE,{relatedTarget:this._element}),a=g.Event(On.SHOW,{relatedTarget:i});if(i&&g(i).trigger(s),g(this._element).trigger(a),!a.isDefaultPrevented()&&!s.isDefaultPrevented()){o&&(t=document.querySelector(o)),this._activate(this._element,e);var l=function(){var t=g.Event(On.HIDDEN,{relatedTarget:n._element}),e=g.Event(On.SHOWN,{relatedTarget:i});g(i).trigger(t),g(n._element).trigger(e)};t?this._activate(t,t.parentNode,l):l()}}},t.dispose=function(){g.removeData(this._element,wn),this._element=null},t._activate=function(t,e,n){var i=this,o=(!e||"UL"!==e.nodeName&&"OL"!==e.nodeName?g(e).children(Fn):g(e).find(Un))[0],r=n&&o&&g(o).hasClass(jn),s=function(){return i._transitionComplete(t,o,n)};if(o&&r){var a=_.getTransitionDurationFromElement(o);g(o).removeClass(Hn).one(_.TRANSITION_END,s).emulateTransitionEnd(a)}else s()},t._transitionComplete=function(t,e,n){if(e){g(e).removeClass(Pn);var i=g(e.parentNode).find(Mn)[0];i&&g(i).removeClass(Pn),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!1)}if(g(t).addClass(Pn),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),_.reflow(t),t.classList.contains(jn)&&t.classList.add(Hn),t.parentNode&&g(t.parentNode).hasClass(kn)){var o=g(t).closest(Rn)[0];if(o){var r=[].slice.call(o.querySelectorAll(qn));g(r).addClass(Pn)}t.setAttribute("aria-expanded",!0)}n&&n()},i._jQueryInterface=function(n){return this.each(function(){var t=g(this),e=t.data(wn);if(e||(e=new i(this),t.data(wn,e)),"string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}}]),i}();g(document).on(On.CLICK_DATA_API,Wn,function(t){t.preventDefault(),Kn._jQueryInterface.call(g(this),"show")}),g.fn.tab=Kn._jQueryInterface,g.fn.tab.Constructor=Kn,g.fn.tab.noConflict=function(){return g.fn.tab=Nn,Kn._jQueryInterface};var Qn="toast",Bn="bs.toast",Vn="."+Bn,Yn=g.fn[Qn],zn={CLICK_DISMISS:"click.dismiss"+Vn,HIDE:"hide"+Vn,HIDDEN:"hidden"+Vn,SHOW:"show"+Vn,SHOWN:"shown"+Vn},Xn="fade",$n="hide",Gn="show",Jn="showing",Zn={animation:"boolean",autohide:"boolean",delay:"number"},ti={animation:!0,autohide:!0,delay:500},ei='[data-dismiss="toast"]',ni=function(){function i(t,e){this._element=t,this._config=this._getConfig(e),this._timeout=null,this._setListeners()}var t=i.prototype;return t.show=function(){var t=this;g(this._element).trigger(zn.SHOW),this._config.animation&&this._element.classList.add(Xn);var e=function(){t._element.classList.remove(Jn),t._element.classList.add(Gn),g(t._element).trigger(zn.SHOWN),t._config.autohide&&t.hide()};if(this._element.classList.remove($n),this._element.classList.add(Jn),this._config.animation){var n=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,e).emulateTransitionEnd(n)}else e()},t.hide=function(t){var e=this;this._element.classList.contains(Gn)&&(g(this._element).trigger(zn.HIDE),t?this._close():this._timeout=setTimeout(function(){e._close()},this._config.delay))},t.dispose=function(){clearTimeout(this._timeout),this._timeout=null,this._element.classList.contains(Gn)&&this._element.classList.remove(Gn),g(this._element).off(zn.CLICK_DISMISS),g.removeData(this._element,Bn),this._element=null,this._config=null},t._getConfig=function(t){return t=l({},ti,g(this._element).data(),"object"==typeof t&&t?t:{}),_.typeCheckConfig(Qn,t,this.constructor.DefaultType),t},t._setListeners=function(){var t=this;g(this._element).on(zn.CLICK_DISMISS,ei,function(){return t.hide(!0)})},t._close=function(){var t=this,e=function(){t._element.classList.add($n),g(t._element).trigger(zn.HIDDEN)};if(this._element.classList.remove(Gn),this._config.animation){var n=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,e).emulateTransitionEnd(n)}else e()},i._jQueryInterface=function(n){return this.each(function(){var t=g(this),e=t.data(Bn);if(e||(e=new i(this,"object"==typeof n&&n),t.data(Bn,e)),"string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n](this)}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"DefaultType",get:function(){return Zn}},{key:"Default",get:function(){return ti}}]),i}();g.fn[Qn]=ni._jQueryInterface,g.fn[Qn].Constructor=ni,g.fn[Qn].noConflict=function(){return g.fn[Qn]=Yn,ni._jQueryInterface},function(){if("undefined"==typeof g)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var t=g.fn.jquery.split(" ")[0].split(".");if(t[0]<2&&t[1]<9||1===t[0]&&9===t[1]&&t[2]<1||4<=t[0])throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(),t.Util=_,t.Alert=p,t.Button=P,t.Carousel=lt,t.Collapse=bt,t.Dropdown=Jt,t.Modal=ve,t.Popover=sn,t.Scrollspy=Dn,t.Tab=Kn,t.Toast=ni,t.Tooltip=Be,Object.defineProperty(t,"__esModule",{value:!0})});
 //# sourceMappingURL=bootstrap.min.js.map
/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.Vue = factory());
  }(this, function () { 'use strict';
  
    /*  */
  
    var emptyObject = Object.freeze({});
  
    // These helpers produce better VM code in JS engines due to their
    // explicitness and function inlining.
    function isUndef (v) {
      return v === undefined || v === null
    }
  
    function isDef (v) {
      return v !== undefined && v !== null
    }
  
    function isTrue (v) {
      return v === true
    }
  
    function isFalse (v) {
      return v === false
    }
  
    /**
     * Check if value is primitive.
     */
    function isPrimitive (value) {
      return (
        typeof value === 'string' ||
        typeof value === 'number' ||
        // $flow-disable-line
        typeof value === 'symbol' ||
        typeof value === 'boolean'
      )
    }
  
    /**
     * Quick object check - this is primarily used to tell
     * Objects from primitive values when we know the value
     * is a JSON-compliant type.
     */
    function isObject (obj) {
      return obj !== null && typeof obj === 'object'
    }
  
    /**
     * Get the raw type string of a value, e.g., [object Object].
     */
    var _toString = Object.prototype.toString;
  
    function toRawType (value) {
      return _toString.call(value).slice(8, -1)
    }
  
    /**
     * Strict object type check. Only returns true
     * for plain JavaScript objects.
     */
    function isPlainObject (obj) {
      return _toString.call(obj) === '[object Object]'
    }
  
    function isRegExp (v) {
      return _toString.call(v) === '[object RegExp]'
    }
  
    /**
     * Check if val is a valid array index.
     */
    function isValidArrayIndex (val) {
      var n = parseFloat(String(val));
      return n >= 0 && Math.floor(n) === n && isFinite(val)
    }
  
    function isPromise (val) {
      return (
        isDef(val) &&
        typeof val.then === 'function' &&
        typeof val.catch === 'function'
      )
    }
  
    /**
     * Convert a value to a string that is actually rendered.
     */
    function toString (val) {
      return val == null
        ? ''
        : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
          ? JSON.stringify(val, null, 2)
          : String(val)
    }
  
    /**
     * Convert an input value to a number for persistence.
     * If the conversion fails, return original string.
     */
    function toNumber (val) {
      var n = parseFloat(val);
      return isNaN(n) ? val : n
    }
  
    /**
     * Make a map and return a function for checking if a key
     * is in that map.
     */
    function makeMap (
      str,
      expectsLowerCase
    ) {
      var map = Object.create(null);
      var list = str.split(',');
      for (var i = 0; i < list.length; i++) {
        map[list[i]] = true;
      }
      return expectsLowerCase
        ? function (val) { return map[val.toLowerCase()]; }
        : function (val) { return map[val]; }
    }
  
    /**
     * Check if a tag is a built-in tag.
     */
    var isBuiltInTag = makeMap('slot,component', true);
  
    /**
     * Check if an attribute is a reserved attribute.
     */
    var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');
  
    /**
     * Remove an item from an array.
     */
    function remove (arr, item) {
      if (arr.length) {
        var index = arr.indexOf(item);
        if (index > -1) {
          return arr.splice(index, 1)
        }
      }
    }
  
    /**
     * Check whether an object has the property.
     */
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    function hasOwn (obj, key) {
      return hasOwnProperty.call(obj, key)
    }
  
    /**
     * Create a cached version of a pure function.
     */
    function cached (fn) {
      var cache = Object.create(null);
      return (function cachedFn (str) {
        var hit = cache[str];
        return hit || (cache[str] = fn(str))
      })
    }
  
    /**
     * Camelize a hyphen-delimited string.
     */
    var camelizeRE = /-(\w)/g;
    var camelize = cached(function (str) {
      return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
    });
  
    /**
     * Capitalize a string.
     */
    var capitalize = cached(function (str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    });
  
    /**
     * Hyphenate a camelCase string.
     */
    var hyphenateRE = /\B([A-Z])/g;
    var hyphenate = cached(function (str) {
      return str.replace(hyphenateRE, '-$1').toLowerCase()
    });
  
    /**
     * Simple bind polyfill for environments that do not support it,
     * e.g., PhantomJS 1.x. Technically, we don't need this anymore
     * since native bind is now performant enough in most browsers.
     * But removing it would mean breaking code that was able to run in
     * PhantomJS 1.x, so this must be kept for backward compatibility.
     */
  
    /* istanbul ignore next */
    function polyfillBind (fn, ctx) {
      function boundFn (a) {
        var l = arguments.length;
        return l
          ? l > 1
            ? fn.apply(ctx, arguments)
            : fn.call(ctx, a)
          : fn.call(ctx)
      }
  
      boundFn._length = fn.length;
      return boundFn
    }
  
    function nativeBind (fn, ctx) {
      return fn.bind(ctx)
    }
  
    var bind = Function.prototype.bind
      ? nativeBind
      : polyfillBind;
  
    /**
     * Convert an Array-like object to a real Array.
     */
    function toArray (list, start) {
      start = start || 0;
      var i = list.length - start;
      var ret = new Array(i);
      while (i--) {
        ret[i] = list[i + start];
      }
      return ret
    }
  
    /**
     * Mix properties into target object.
     */
    function extend (to, _from) {
      for (var key in _from) {
        to[key] = _from[key];
      }
      return to
    }
  
    /**
     * Merge an Array of Objects into a single Object.
     */
    function toObject (arr) {
      var res = {};
      for (var i = 0; i < arr.length; i++) {
        if (arr[i]) {
          extend(res, arr[i]);
        }
      }
      return res
    }
  
    /* eslint-disable no-unused-vars */
  
    /**
     * Perform no operation.
     * Stubbing args to make Flow happy without leaving useless transpiled code
     * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
     */
    function noop (a, b, c) {}
  
    /**
     * Always return false.
     */
    var no = function (a, b, c) { return false; };
  
    /* eslint-enable no-unused-vars */
  
    /**
     * Return the same value.
     */
    var identity = function (_) { return _; };
  
    /**
     * Generate a string containing static keys from compiler modules.
     */
    function genStaticKeys (modules) {
      return modules.reduce(function (keys, m) {
        return keys.concat(m.staticKeys || [])
      }, []).join(',')
    }
  
    /**
     * Check if two values are loosely equal - that is,
     * if they are plain objects, do they have the same shape?
     */
    function looseEqual (a, b) {
      if (a === b) { return true }
      var isObjectA = isObject(a);
      var isObjectB = isObject(b);
      if (isObjectA && isObjectB) {
        try {
          var isArrayA = Array.isArray(a);
          var isArrayB = Array.isArray(b);
          if (isArrayA && isArrayB) {
            return a.length === b.length && a.every(function (e, i) {
              return looseEqual(e, b[i])
            })
          } else if (a instanceof Date && b instanceof Date) {
            return a.getTime() === b.getTime()
          } else if (!isArrayA && !isArrayB) {
            var keysA = Object.keys(a);
            var keysB = Object.keys(b);
            return keysA.length === keysB.length && keysA.every(function (key) {
              return looseEqual(a[key], b[key])
            })
          } else {
            /* istanbul ignore next */
            return false
          }
        } catch (e) {
          /* istanbul ignore next */
          return false
        }
      } else if (!isObjectA && !isObjectB) {
        return String(a) === String(b)
      } else {
        return false
      }
    }
  
    /**
     * Return the first index at which a loosely equal value can be
     * found in the array (if value is a plain object, the array must
     * contain an object of the same shape), or -1 if it is not present.
     */
    function looseIndexOf (arr, val) {
      for (var i = 0; i < arr.length; i++) {
        if (looseEqual(arr[i], val)) { return i }
      }
      return -1
    }
  
    /**
     * Ensure a function is called only once.
     */
    function once (fn) {
      var called = false;
      return function () {
        if (!called) {
          called = true;
          fn.apply(this, arguments);
        }
      }
    }
  
    var SSR_ATTR = 'data-server-rendered';
  
    var ASSET_TYPES = [
      'component',
      'directive',
      'filter'
    ];
  
    var LIFECYCLE_HOOKS = [
      'beforeCreate',
      'created',
      'beforeMount',
      'mounted',
      'beforeUpdate',
      'updated',
      'beforeDestroy',
      'destroyed',
      'activated',
      'deactivated',
      'errorCaptured',
      'serverPrefetch'
    ];
  
    /*  */
  
  
  
    var config = ({
      /**
       * Option merge strategies (used in core/util/options)
       */
      // $flow-disable-line
      optionMergeStrategies: Object.create(null),
  
      /**
       * Whether to suppress warnings.
       */
      silent: false,
  
      /**
       * Show production mode tip message on boot?
       */
      productionTip: "development" !== 'production',
  
      /**
       * Whether to enable devtools
       */
      devtools: "development" !== 'production',
  
      /**
       * Whether to record perf
       */
      performance: false,
  
      /**
       * Error handler for watcher errors
       */
      errorHandler: null,
  
      /**
       * Warn handler for watcher warns
       */
      warnHandler: null,
  
      /**
       * Ignore certain custom elements
       */
      ignoredElements: [],
  
      /**
       * Custom user key aliases for v-on
       */
      // $flow-disable-line
      keyCodes: Object.create(null),
  
      /**
       * Check if a tag is reserved so that it cannot be registered as a
       * component. This is platform-dependent and may be overwritten.
       */
      isReservedTag: no,
  
      /**
       * Check if an attribute is reserved so that it cannot be used as a component
       * prop. This is platform-dependent and may be overwritten.
       */
      isReservedAttr: no,
  
      /**
       * Check if a tag is an unknown element.
       * Platform-dependent.
       */
      isUnknownElement: no,
  
      /**
       * Get the namespace of an element
       */
      getTagNamespace: noop,
  
      /**
       * Parse the real tag name for the specific platform.
       */
      parsePlatformTagName: identity,
  
      /**
       * Check if an attribute must be bound using property, e.g. value
       * Platform-dependent.
       */
      mustUseProp: no,
  
      /**
       * Perform updates asynchronously. Intended to be used by Vue Test Utils
       * This will significantly reduce performance if set to false.
       */
      async: true,
  
      /**
       * Exposed for legacy reasons
       */
      _lifecycleHooks: LIFECYCLE_HOOKS
    });
  
    /*  */
  
    /**
     * unicode letters used for parsing html tags, component names and property paths.
     * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
     * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
     */
    var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;
  
    /**
     * Check if a string starts with $ or _
     */
    function isReserved (str) {
      var c = (str + '').charCodeAt(0);
      return c === 0x24 || c === 0x5F
    }
  
    /**
     * Define a property.
     */
    function def (obj, key, val, enumerable) {
      Object.defineProperty(obj, key, {
        value: val,
        enumerable: !!enumerable,
        writable: true,
        configurable: true
      });
    }
  
    /**
     * Parse simple path.
     */
    var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
    function parsePath (path) {
      if (bailRE.test(path)) {
        return
      }
      var segments = path.split('.');
      return function (obj) {
        for (var i = 0; i < segments.length; i++) {
          if (!obj) { return }
          obj = obj[segments[i]];
        }
        return obj
      }
    }
  
    /*  */
  
    // can we use __proto__?
    var hasProto = '__proto__' in {};
  
    // Browser environment sniffing
    var inBrowser = typeof window !== 'undefined';
    var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
    var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
    var UA = inBrowser && window.navigator.userAgent.toLowerCase();
    var isIE = UA && /msie|trident/.test(UA);
    var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
    var isEdge = UA && UA.indexOf('edge/') > 0;
    var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
    var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
    var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
    var isPhantomJS = UA && /phantomjs/.test(UA);
    var isFF = UA && UA.match(/firefox\/(\d+)/);
  
    // Firefox has a "watch" function on Object.prototype...
    var nativeWatch = ({}).watch;
  
    var supportsPassive = false;
    if (inBrowser) {
      try {
        var opts = {};
        Object.defineProperty(opts, 'passive', ({
          get: function get () {
            /* istanbul ignore next */
            supportsPassive = true;
          }
        })); // https://github.com/facebook/flow/issues/285
        window.addEventListener('test-passive', null, opts);
      } catch (e) {}
    }
  
    // this needs to be lazy-evaled because vue may be required before
    // vue-server-renderer can set VUE_ENV
    var _isServer;
    var isServerRendering = function () {
      if (_isServer === undefined) {
        /* istanbul ignore if */
        if (!inBrowser && !inWeex && typeof global !== 'undefined') {
          // detect presence of vue-server-renderer and avoid
          // Webpack shimming the process
          _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
        } else {
          _isServer = false;
        }
      }
      return _isServer
    };
  
    // detect devtools
    var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
  
    /* istanbul ignore next */
    function isNative (Ctor) {
      return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
    }
  
    var hasSymbol =
      typeof Symbol !== 'undefined' && isNative(Symbol) &&
      typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);
  
    var _Set;
    /* istanbul ignore if */ // $flow-disable-line
    if (typeof Set !== 'undefined' && isNative(Set)) {
      // use native Set when available.
      _Set = Set;
    } else {
      // a non-standard Set polyfill that only works with primitive keys.
      _Set = /*@__PURE__*/(function () {
        function Set () {
          this.set = Object.create(null);
        }
        Set.prototype.has = function has (key) {
          return this.set[key] === true
        };
        Set.prototype.add = function add (key) {
          this.set[key] = true;
        };
        Set.prototype.clear = function clear () {
          this.set = Object.create(null);
        };
  
        return Set;
      }());
    }
  
    /*  */
  
    var warn = noop;
    var tip = noop;
    var generateComponentTrace = (noop); // work around flow check
    var formatComponentName = (noop);
  
    {
      var hasConsole = typeof console !== 'undefined';
      var classifyRE = /(?:^|[-_])(\w)/g;
      var classify = function (str) { return str
        .replace(classifyRE, function (c) { return c.toUpperCase(); })
        .replace(/[-_]/g, ''); };
  
      warn = function (msg, vm) {
        var trace = vm ? generateComponentTrace(vm) : '';
  
        if (config.warnHandler) {
          config.warnHandler.call(null, msg, vm, trace);
        } else if (hasConsole && (!config.silent)) {
          console.error(("[Vue warn]: " + msg + trace));
        }
      };
  
      tip = function (msg, vm) {
        if (hasConsole && (!config.silent)) {
          console.warn("[Vue tip]: " + msg + (
            vm ? generateComponentTrace(vm) : ''
          ));
        }
      };
  
      formatComponentName = function (vm, includeFile) {
        if (vm.$root === vm) {
          return '<Root>'
        }
        var options = typeof vm === 'function' && vm.cid != null
          ? vm.options
          : vm._isVue
            ? vm.$options || vm.constructor.options
            : vm;
        var name = options.name || options._componentTag;
        var file = options.__file;
        if (!name && file) {
          var match = file.match(/([^/\\]+)\.vue$/);
          name = match && match[1];
        }
  
        return (
          (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
          (file && includeFile !== false ? (" at " + file) : '')
        )
      };
  
      var repeat = function (str, n) {
        var res = '';
        while (n) {
          if (n % 2 === 1) { res += str; }
          if (n > 1) { str += str; }
          n >>= 1;
        }
        return res
      };
  
      generateComponentTrace = function (vm) {
        if (vm._isVue && vm.$parent) {
          var tree = [];
          var currentRecursiveSequence = 0;
          while (vm) {
            if (tree.length > 0) {
              var last = tree[tree.length - 1];
              if (last.constructor === vm.constructor) {
                currentRecursiveSequence++;
                vm = vm.$parent;
                continue
              } else if (currentRecursiveSequence > 0) {
                tree[tree.length - 1] = [last, currentRecursiveSequence];
                currentRecursiveSequence = 0;
              }
            }
            tree.push(vm);
            vm = vm.$parent;
          }
          return '\n\nfound in\n\n' + tree
            .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
                ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
                : formatComponentName(vm))); })
            .join('\n')
        } else {
          return ("\n\n(found in " + (formatComponentName(vm)) + ")")
        }
      };
    }
  
    /*  */
  
    var uid = 0;
  
    /**
     * A dep is an observable that can have multiple
     * directives subscribing to it.
     */
    var Dep = function Dep () {
      this.id = uid++;
      this.subs = [];
    };
  
    Dep.prototype.addSub = function addSub (sub) {
      this.subs.push(sub);
    };
  
    Dep.prototype.removeSub = function removeSub (sub) {
      remove(this.subs, sub);
    };
  
    Dep.prototype.depend = function depend () {
      if (Dep.target) {
        Dep.target.addDep(this);
      }
    };
  
    Dep.prototype.notify = function notify () {
      // stabilize the subscriber list first
      var subs = this.subs.slice();
      if (!config.async) {
        // subs aren't sorted in scheduler if not running async
        // we need to sort them now to make sure they fire in correct
        // order
        subs.sort(function (a, b) { return a.id - b.id; });
      }
      for (var i = 0, l = subs.length; i < l; i++) {
        subs[i].update();
      }
    };
  
    // The current target watcher being evaluated.
    // This is globally unique because only one watcher
    // can be evaluated at a time.
    Dep.target = null;
    var targetStack = [];
  
    function pushTarget (target) {
      targetStack.push(target);
      Dep.target = target;
    }
  
    function popTarget () {
      targetStack.pop();
      Dep.target = targetStack[targetStack.length - 1];
    }
  
    /*  */
  
    var VNode = function VNode (
      tag,
      data,
      children,
      text,
      elm,
      context,
      componentOptions,
      asyncFactory
    ) {
      this.tag = tag;
      this.data = data;
      this.children = children;
      this.text = text;
      this.elm = elm;
      this.ns = undefined;
      this.context = context;
      this.fnContext = undefined;
      this.fnOptions = undefined;
      this.fnScopeId = undefined;
      this.key = data && data.key;
      this.componentOptions = componentOptions;
      this.componentInstance = undefined;
      this.parent = undefined;
      this.raw = false;
      this.isStatic = false;
      this.isRootInsert = true;
      this.isComment = false;
      this.isCloned = false;
      this.isOnce = false;
      this.asyncFactory = asyncFactory;
      this.asyncMeta = undefined;
      this.isAsyncPlaceholder = false;
    };
  
    var prototypeAccessors = { child: { configurable: true } };
  
    // DEPRECATED: alias for componentInstance for backwards compat.
    /* istanbul ignore next */
    prototypeAccessors.child.get = function () {
      return this.componentInstance
    };
  
    Object.defineProperties( VNode.prototype, prototypeAccessors );
  
    var createEmptyVNode = function (text) {
      if ( text === void 0 ) text = '';
  
      var node = new VNode();
      node.text = text;
      node.isComment = true;
      return node
    };
  
    function createTextVNode (val) {
      return new VNode(undefined, undefined, undefined, String(val))
    }
  
    // optimized shallow clone
    // used for static nodes and slot nodes because they may be reused across
    // multiple renders, cloning them avoids errors when DOM manipulations rely
    // on their elm reference.
    function cloneVNode (vnode) {
      var cloned = new VNode(
        vnode.tag,
        vnode.data,
        // #7975
        // clone children array to avoid mutating original in case of cloning
        // a child.
        vnode.children && vnode.children.slice(),
        vnode.text,
        vnode.elm,
        vnode.context,
        vnode.componentOptions,
        vnode.asyncFactory
      );
      cloned.ns = vnode.ns;
      cloned.isStatic = vnode.isStatic;
      cloned.key = vnode.key;
      cloned.isComment = vnode.isComment;
      cloned.fnContext = vnode.fnContext;
      cloned.fnOptions = vnode.fnOptions;
      cloned.fnScopeId = vnode.fnScopeId;
      cloned.asyncMeta = vnode.asyncMeta;
      cloned.isCloned = true;
      return cloned
    }
  
    /*
     * not type checking this file because flow doesn't play well with
     * dynamically accessing methods on Array prototype
     */
  
    var arrayProto = Array.prototype;
    var arrayMethods = Object.create(arrayProto);
  
    var methodsToPatch = [
      'push',
      'pop',
      'shift',
      'unshift',
      'splice',
      'sort',
      'reverse'
    ];
  
    /**
     * Intercept mutating methods and emit events
     */
    methodsToPatch.forEach(function (method) {
      // cache original method
      var original = arrayProto[method];
      def(arrayMethods, method, function mutator () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];
  
        var result = original.apply(this, args);
        var ob = this.__ob__;
        var inserted;
        switch (method) {
          case 'push':
          case 'unshift':
            inserted = args;
            break
          case 'splice':
            inserted = args.slice(2);
            break
        }
        if (inserted) { ob.observeArray(inserted); }
        // notify change
        ob.dep.notify();
        return result
      });
    });
  
    /*  */
  
    var arrayKeys = Object.getOwnPropertyNames(arrayMethods);
  
    /**
     * In some cases we may want to disable observation inside a component's
     * update computation.
     */
    var shouldObserve = true;
  
    function toggleObserving (value) {
      shouldObserve = value;
    }
  
    /**
     * Observer class that is attached to each observed
     * object. Once attached, the observer converts the target
     * object's property keys into getter/setters that
     * collect dependencies and dispatch updates.
     */
    var Observer = function Observer (value) {
      this.value = value;
      this.dep = new Dep();
      this.vmCount = 0;
      def(value, '__ob__', this);
      if (Array.isArray(value)) {
        if (hasProto) {
          protoAugment(value, arrayMethods);
        } else {
          copyAugment(value, arrayMethods, arrayKeys);
        }
        this.observeArray(value);
      } else {
        this.walk(value);
      }
    };
  
    /**
     * Walk through all properties and convert them into
     * getter/setters. This method should only be called when
     * value type is Object.
     */
    Observer.prototype.walk = function walk (obj) {
      var keys = Object.keys(obj);
      for (var i = 0; i < keys.length; i++) {
        defineReactive$$1(obj, keys[i]);
      }
    };
  
    /**
     * Observe a list of Array items.
     */
    Observer.prototype.observeArray = function observeArray (items) {
      for (var i = 0, l = items.length; i < l; i++) {
        observe(items[i]);
      }
    };
  
    // helpers
  
    /**
     * Augment a target Object or Array by intercepting
     * the prototype chain using __proto__
     */
    function protoAugment (target, src) {
      /* eslint-disable no-proto */
      target.__proto__ = src;
      /* eslint-enable no-proto */
    }
  
    /**
     * Augment a target Object or Array by defining
     * hidden properties.
     */
    /* istanbul ignore next */
    function copyAugment (target, src, keys) {
      for (var i = 0, l = keys.length; i < l; i++) {
        var key = keys[i];
        def(target, key, src[key]);
      }
    }
  
    /**
     * Attempt to create an observer instance for a value,
     * returns the new observer if successfully observed,
     * or the existing observer if the value already has one.
     */
    function observe (value, asRootData) {
      if (!isObject(value) || value instanceof VNode) {
        return
      }
      var ob;
      if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
        ob = value.__ob__;
      } else if (
        shouldObserve &&
        !isServerRendering() &&
        (Array.isArray(value) || isPlainObject(value)) &&
        Object.isExtensible(value) &&
        !value._isVue
      ) {
        ob = new Observer(value);
      }
      if (asRootData && ob) {
        ob.vmCount++;
      }
      return ob
    }
  
    /**
     * Define a reactive property on an Object.
     */
    function defineReactive$$1 (
      obj,
      key,
      val,
      customSetter,
      shallow
    ) {
      var dep = new Dep();
  
      var property = Object.getOwnPropertyDescriptor(obj, key);
      if (property && property.configurable === false) {
        return
      }
  
      // cater for pre-defined getter/setters
      var getter = property && property.get;
      var setter = property && property.set;
      if ((!getter || setter) && arguments.length === 2) {
        val = obj[key];
      }
  
      var childOb = !shallow && observe(val);
      Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: function reactiveGetter () {
          var value = getter ? getter.call(obj) : val;
          if (Dep.target) {
            dep.depend();
            if (childOb) {
              childOb.dep.depend();
              if (Array.isArray(value)) {
                dependArray(value);
              }
            }
          }
          return value
        },
        set: function reactiveSetter (newVal) {
          var value = getter ? getter.call(obj) : val;
          /* eslint-disable no-self-compare */
          if (newVal === value || (newVal !== newVal && value !== value)) {
            return
          }
          /* eslint-enable no-self-compare */
          if (customSetter) {
            customSetter();
          }
          // #7981: for accessor properties without setter
          if (getter && !setter) { return }
          if (setter) {
            setter.call(obj, newVal);
          } else {
            val = newVal;
          }
          childOb = !shallow && observe(newVal);
          dep.notify();
        }
      });
    }
  
    /**
     * Set a property on an object. Adds the new property and
     * triggers change notification if the property doesn't
     * already exist.
     */
    function set (target, key, val) {
      if (isUndef(target) || isPrimitive(target)
      ) {
        warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
      }
      if (Array.isArray(target) && isValidArrayIndex(key)) {
        target.length = Math.max(target.length, key);
        target.splice(key, 1, val);
        return val
      }
      if (key in target && !(key in Object.prototype)) {
        target[key] = val;
        return val
      }
      var ob = (target).__ob__;
      if (target._isVue || (ob && ob.vmCount)) {
        warn(
          'Avoid adding reactive properties to a Vue instance or its root $data ' +
          'at runtime - declare it upfront in the data option.'
        );
        return val
      }
      if (!ob) {
        target[key] = val;
        return val
      }
      defineReactive$$1(ob.value, key, val);
      ob.dep.notify();
      return val
    }
  
    /**
     * Delete a property and trigger change if necessary.
     */
    function del (target, key) {
      if (isUndef(target) || isPrimitive(target)
      ) {
        warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
      }
      if (Array.isArray(target) && isValidArrayIndex(key)) {
        target.splice(key, 1);
        return
      }
      var ob = (target).__ob__;
      if (target._isVue || (ob && ob.vmCount)) {
        warn(
          'Avoid deleting properties on a Vue instance or its root $data ' +
          '- just set it to null.'
        );
        return
      }
      if (!hasOwn(target, key)) {
        return
      }
      delete target[key];
      if (!ob) {
        return
      }
      ob.dep.notify();
    }
  
    /**
     * Collect dependencies on array elements when the array is touched, since
     * we cannot intercept array element access like property getters.
     */
    function dependArray (value) {
      for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
        e = value[i];
        e && e.__ob__ && e.__ob__.dep.depend();
        if (Array.isArray(e)) {
          dependArray(e);
        }
      }
    }
  
    /*  */
  
    /**
     * Option overwriting strategies are functions that handle
     * how to merge a parent option value and a child option
     * value into the final value.
     */
    var strats = config.optionMergeStrategies;
  
    /**
     * Options with restrictions
     */
    {
      strats.el = strats.propsData = function (parent, child, vm, key) {
        if (!vm) {
          warn(
            "option \"" + key + "\" can only be used during instance " +
            'creation with the `new` keyword.'
          );
        }
        return defaultStrat(parent, child)
      };
    }
  
    /**
     * Helper that recursively merges two data objects together.
     */
    function mergeData (to, from) {
      if (!from) { return to }
      var key, toVal, fromVal;
  
      var keys = hasSymbol
        ? Reflect.ownKeys(from)
        : Object.keys(from);
  
      for (var i = 0; i < keys.length; i++) {
        key = keys[i];
        // in case the object is already observed...
        if (key === '__ob__') { continue }
        toVal = to[key];
        fromVal = from[key];
        if (!hasOwn(to, key)) {
          set(to, key, fromVal);
        } else if (
          toVal !== fromVal &&
          isPlainObject(toVal) &&
          isPlainObject(fromVal)
        ) {
          mergeData(toVal, fromVal);
        }
      }
      return to
    }
  
    /**
     * Data
     */
    function mergeDataOrFn (
      parentVal,
      childVal,
      vm
    ) {
      if (!vm) {
        // in a Vue.extend merge, both should be functions
        if (!childVal) {
          return parentVal
        }
        if (!parentVal) {
          return childVal
        }
        // when parentVal & childVal are both present,
        // we need to return a function that returns the
        // merged result of both functions... no need to
        // check if parentVal is a function here because
        // it has to be a function to pass previous merges.
        return function mergedDataFn () {
          return mergeData(
            typeof childVal === 'function' ? childVal.call(this, this) : childVal,
            typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
          )
        }
      } else {
        return function mergedInstanceDataFn () {
          // instance merge
          var instanceData = typeof childVal === 'function'
            ? childVal.call(vm, vm)
            : childVal;
          var defaultData = typeof parentVal === 'function'
            ? parentVal.call(vm, vm)
            : parentVal;
          if (instanceData) {
            return mergeData(instanceData, defaultData)
          } else {
            return defaultData
          }
        }
      }
    }
  
    strats.data = function (
      parentVal,
      childVal,
      vm
    ) {
      if (!vm) {
        if (childVal && typeof childVal !== 'function') {
          warn(
            'The "data" option should be a function ' +
            'that returns a per-instance value in component ' +
            'definitions.',
            vm
          );
  
          return parentVal
        }
        return mergeDataOrFn(parentVal, childVal)
      }
  
      return mergeDataOrFn(parentVal, childVal, vm)
    };
  
    /**
     * Hooks and props are merged as arrays.
     */
    function mergeHook (
      parentVal,
      childVal
    ) {
      var res = childVal
        ? parentVal
          ? parentVal.concat(childVal)
          : Array.isArray(childVal)
            ? childVal
            : [childVal]
        : parentVal;
      return res
        ? dedupeHooks(res)
        : res
    }
  
    function dedupeHooks (hooks) {
      var res = [];
      for (var i = 0; i < hooks.length; i++) {
        if (res.indexOf(hooks[i]) === -1) {
          res.push(hooks[i]);
        }
      }
      return res
    }
  
    LIFECYCLE_HOOKS.forEach(function (hook) {
      strats[hook] = mergeHook;
    });
  
    /**
     * Assets
     *
     * When a vm is present (instance creation), we need to do
     * a three-way merge between constructor options, instance
     * options and parent options.
     */
    function mergeAssets (
      parentVal,
      childVal,
      vm,
      key
    ) {
      var res = Object.create(parentVal || null);
      if (childVal) {
        assertObjectType(key, childVal, vm);
        return extend(res, childVal)
      } else {
        return res
      }
    }
  
    ASSET_TYPES.forEach(function (type) {
      strats[type + 's'] = mergeAssets;
    });
  
    /**
     * Watchers.
     *
     * Watchers hashes should not overwrite one
     * another, so we merge them as arrays.
     */
    strats.watch = function (
      parentVal,
      childVal,
      vm,
      key
    ) {
      // work around Firefox's Object.prototype.watch...
      if (parentVal === nativeWatch) { parentVal = undefined; }
      if (childVal === nativeWatch) { childVal = undefined; }
      /* istanbul ignore if */
      if (!childVal) { return Object.create(parentVal || null) }
      {
        assertObjectType(key, childVal, vm);
      }
      if (!parentVal) { return childVal }
      var ret = {};
      extend(ret, parentVal);
      for (var key$1 in childVal) {
        var parent = ret[key$1];
        var child = childVal[key$1];
        if (parent && !Array.isArray(parent)) {
          parent = [parent];
        }
        ret[key$1] = parent
          ? parent.concat(child)
          : Array.isArray(child) ? child : [child];
      }
      return ret
    };
  
    /**
     * Other object hashes.
     */
    strats.props =
    strats.methods =
    strats.inject =
    strats.computed = function (
      parentVal,
      childVal,
      vm,
      key
    ) {
      if (childVal && "development" !== 'production') {
        assertObjectType(key, childVal, vm);
      }
      if (!parentVal) { return childVal }
      var ret = Object.create(null);
      extend(ret, parentVal);
      if (childVal) { extend(ret, childVal); }
      return ret
    };
    strats.provide = mergeDataOrFn;
  
    /**
     * Default strategy.
     */
    var defaultStrat = function (parentVal, childVal) {
      return childVal === undefined
        ? parentVal
        : childVal
    };
  
    /**
     * Validate component names
     */
    function checkComponents (options) {
      for (var key in options.components) {
        validateComponentName(key);
      }
    }
  
    function validateComponentName (name) {
      if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
        warn(
          'Invalid component name: "' + name + '". Component names ' +
          'should conform to valid custom element name in html5 specification.'
        );
      }
      if (isBuiltInTag(name) || config.isReservedTag(name)) {
        warn(
          'Do not use built-in or reserved HTML elements as component ' +
          'id: ' + name
        );
      }
    }
  
    /**
     * Ensure all props option syntax are normalized into the
     * Object-based format.
     */
    function normalizeProps (options, vm) {
      var props = options.props;
      if (!props) { return }
      var res = {};
      var i, val, name;
      if (Array.isArray(props)) {
        i = props.length;
        while (i--) {
          val = props[i];
          if (typeof val === 'string') {
            name = camelize(val);
            res[name] = { type: null };
          } else {
            warn('props must be strings when using array syntax.');
          }
        }
      } else if (isPlainObject(props)) {
        for (var key in props) {
          val = props[key];
          name = camelize(key);
          res[name] = isPlainObject(val)
            ? val
            : { type: val };
        }
      } else {
        warn(
          "Invalid value for option \"props\": expected an Array or an Object, " +
          "but got " + (toRawType(props)) + ".",
          vm
        );
      }
      options.props = res;
    }
  
    /**
     * Normalize all injections into Object-based format
     */
    function normalizeInject (options, vm) {
      var inject = options.inject;
      if (!inject) { return }
      var normalized = options.inject = {};
      if (Array.isArray(inject)) {
        for (var i = 0; i < inject.length; i++) {
          normalized[inject[i]] = { from: inject[i] };
        }
      } else if (isPlainObject(inject)) {
        for (var key in inject) {
          var val = inject[key];
          normalized[key] = isPlainObject(val)
            ? extend({ from: key }, val)
            : { from: val };
        }
      } else {
        warn(
          "Invalid value for option \"inject\": expected an Array or an Object, " +
          "but got " + (toRawType(inject)) + ".",
          vm
        );
      }
    }
  
    /**
     * Normalize raw function directives into object format.
     */
    function normalizeDirectives (options) {
      var dirs = options.directives;
      if (dirs) {
        for (var key in dirs) {
          var def$$1 = dirs[key];
          if (typeof def$$1 === 'function') {
            dirs[key] = { bind: def$$1, update: def$$1 };
          }
        }
      }
    }
  
    function assertObjectType (name, value, vm) {
      if (!isPlainObject(value)) {
        warn(
          "Invalid value for option \"" + name + "\": expected an Object, " +
          "but got " + (toRawType(value)) + ".",
          vm
        );
      }
    }
  
    /**
     * Merge two option objects into a new one.
     * Core utility used in both instantiation and inheritance.
     */
    function mergeOptions (
      parent,
      child,
      vm
    ) {
      {
        checkComponents(child);
      }
  
      if (typeof child === 'function') {
        child = child.options;
      }
  
      normalizeProps(child, vm);
      normalizeInject(child, vm);
      normalizeDirectives(child);
  
      // Apply extends and mixins on the child options,
      // but only if it is a raw options object that isn't
      // the result of another mergeOptions call.
      // Only merged options has the _base property.
      if (!child._base) {
        if (child.extends) {
          parent = mergeOptions(parent, child.extends, vm);
        }
        if (child.mixins) {
          for (var i = 0, l = child.mixins.length; i < l; i++) {
            parent = mergeOptions(parent, child.mixins[i], vm);
          }
        }
      }
  
      var options = {};
      var key;
      for (key in parent) {
        mergeField(key);
      }
      for (key in child) {
        if (!hasOwn(parent, key)) {
          mergeField(key);
        }
      }
      function mergeField (key) {
        var strat = strats[key] || defaultStrat;
        options[key] = strat(parent[key], child[key], vm, key);
      }
      return options
    }
  
    /**
     * Resolve an asset.
     * This function is used because child instances need access
     * to assets defined in its ancestor chain.
     */
    function resolveAsset (
      options,
      type,
      id,
      warnMissing
    ) {
      /* istanbul ignore if */
      if (typeof id !== 'string') {
        return
      }
      var assets = options[type];
      // check local registration variations first
      if (hasOwn(assets, id)) { return assets[id] }
      var camelizedId = camelize(id);
      if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
      var PascalCaseId = capitalize(camelizedId);
      if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
      // fallback to prototype chain
      var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
      if (warnMissing && !res) {
        warn(
          'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
          options
        );
      }
      return res
    }
  
    /*  */
  
  
  
    function validateProp (
      key,
      propOptions,
      propsData,
      vm
    ) {
      var prop = propOptions[key];
      var absent = !hasOwn(propsData, key);
      var value = propsData[key];
      // boolean casting
      var booleanIndex = getTypeIndex(Boolean, prop.type);
      if (booleanIndex > -1) {
        if (absent && !hasOwn(prop, 'default')) {
          value = false;
        } else if (value === '' || value === hyphenate(key)) {
          // only cast empty string / same name to boolean if
          // boolean has higher priority
          var stringIndex = getTypeIndex(String, prop.type);
          if (stringIndex < 0 || booleanIndex < stringIndex) {
            value = true;
          }
        }
      }
      // check default value
      if (value === undefined) {
        value = getPropDefaultValue(vm, prop, key);
        // since the default value is a fresh copy,
        // make sure to observe it.
        var prevShouldObserve = shouldObserve;
        toggleObserving(true);
        observe(value);
        toggleObserving(prevShouldObserve);
      }
      {
        assertProp(prop, key, value, vm, absent);
      }
      return value
    }
  
    /**
     * Get the default value of a prop.
     */
    function getPropDefaultValue (vm, prop, key) {
      // no default, return undefined
      if (!hasOwn(prop, 'default')) {
        return undefined
      }
      var def = prop.default;
      // warn against non-factory defaults for Object & Array
      if (isObject(def)) {
        warn(
          'Invalid default value for prop "' + key + '": ' +
          'Props with type Object/Array must use a factory function ' +
          'to return the default value.',
          vm
        );
      }
      // the raw prop value was also undefined from previous render,
      // return previous default value to avoid unnecessary watcher trigger
      if (vm && vm.$options.propsData &&
        vm.$options.propsData[key] === undefined &&
        vm._props[key] !== undefined
      ) {
        return vm._props[key]
      }
      // call factory function for non-Function types
      // a value is Function if its prototype is function even across different execution context
      return typeof def === 'function' && getType(prop.type) !== 'Function'
        ? def.call(vm)
        : def
    }
  
    /**
     * Assert whether a prop is valid.
     */
    function assertProp (
      prop,
      name,
      value,
      vm,
      absent
    ) {
      if (prop.required && absent) {
        warn(
          'Missing required prop: "' + name + '"',
          vm
        );
        return
      }
      if (value == null && !prop.required) {
        return
      }
      var type = prop.type;
      var valid = !type || type === true;
      var expectedTypes = [];
      if (type) {
        if (!Array.isArray(type)) {
          type = [type];
        }
        for (var i = 0; i < type.length && !valid; i++) {
          var assertedType = assertType(value, type[i]);
          expectedTypes.push(assertedType.expectedType || '');
          valid = assertedType.valid;
        }
      }
  
      if (!valid) {
        warn(
          getInvalidTypeMessage(name, value, expectedTypes),
          vm
        );
        return
      }
      var validator = prop.validator;
      if (validator) {
        if (!validator(value)) {
          warn(
            'Invalid prop: custom validator check failed for prop "' + name + '".',
            vm
          );
        }
      }
    }
  
    var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;
  
    function assertType (value, type) {
      var valid;
      var expectedType = getType(type);
      if (simpleCheckRE.test(expectedType)) {
        var t = typeof value;
        valid = t === expectedType.toLowerCase();
        // for primitive wrapper objects
        if (!valid && t === 'object') {
          valid = value instanceof type;
        }
      } else if (expectedType === 'Object') {
        valid = isPlainObject(value);
      } else if (expectedType === 'Array') {
        valid = Array.isArray(value);
      } else {
        valid = value instanceof type;
      }
      return {
        valid: valid,
        expectedType: expectedType
      }
    }
  
    /**
     * Use function string name to check built-in types,
     * because a simple equality check will fail when running
     * across different vms / iframes.
     */
    function getType (fn) {
      var match = fn && fn.toString().match(/^\s*function (\w+)/);
      return match ? match[1] : ''
    }
  
    function isSameType (a, b) {
      return getType(a) === getType(b)
    }
  
    function getTypeIndex (type, expectedTypes) {
      if (!Array.isArray(expectedTypes)) {
        return isSameType(expectedTypes, type) ? 0 : -1
      }
      for (var i = 0, len = expectedTypes.length; i < len; i++) {
        if (isSameType(expectedTypes[i], type)) {
          return i
        }
      }
      return -1
    }
  
    function getInvalidTypeMessage (name, value, expectedTypes) {
      var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
        " Expected " + (expectedTypes.map(capitalize).join(', '));
      var expectedType = expectedTypes[0];
      var receivedType = toRawType(value);
      var expectedValue = styleValue(value, expectedType);
      var receivedValue = styleValue(value, receivedType);
      // check if we need to specify expected value
      if (expectedTypes.length === 1 &&
          isExplicable(expectedType) &&
          !isBoolean(expectedType, receivedType)) {
        message += " with value " + expectedValue;
      }
      message += ", got " + receivedType + " ";
      // check if we need to specify received value
      if (isExplicable(receivedType)) {
        message += "with value " + receivedValue + ".";
      }
      return message
    }
  
    function styleValue (value, type) {
      if (type === 'String') {
        return ("\"" + value + "\"")
      } else if (type === 'Number') {
        return ("" + (Number(value)))
      } else {
        return ("" + value)
      }
    }
  
    function isExplicable (value) {
      var explicitTypes = ['string', 'number', 'boolean'];
      return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
    }
  
    function isBoolean () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];
  
      return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
    }
  
    /*  */
  
    function handleError (err, vm, info) {
      // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
      // See: https://github.com/vuejs/vuex/issues/1505
      pushTarget();
      try {
        if (vm) {
          var cur = vm;
          while ((cur = cur.$parent)) {
            var hooks = cur.$options.errorCaptured;
            if (hooks) {
              for (var i = 0; i < hooks.length; i++) {
                try {
                  var capture = hooks[i].call(cur, err, vm, info) === false;
                  if (capture) { return }
                } catch (e) {
                  globalHandleError(e, cur, 'errorCaptured hook');
                }
              }
            }
          }
        }
        globalHandleError(err, vm, info);
      } finally {
        popTarget();
      }
    }
  
    function invokeWithErrorHandling (
      handler,
      context,
      args,
      vm,
      info
    ) {
      var res;
      try {
        res = args ? handler.apply(context, args) : handler.call(context);
        if (res && !res._isVue && isPromise(res) && !res._handled) {
          res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
          // issue #9511
          // avoid catch triggering multiple times when nested calls
          res._handled = true;
        }
      } catch (e) {
        handleError(e, vm, info);
      }
      return res
    }
  
    function globalHandleError (err, vm, info) {
      if (config.errorHandler) {
        try {
          return config.errorHandler.call(null, err, vm, info)
        } catch (e) {
          // if the user intentionally throws the original error in the handler,
          // do not log it twice
          if (e !== err) {
            logError(e, null, 'config.errorHandler');
          }
        }
      }
      logError(err, vm, info);
    }
  
    function logError (err, vm, info) {
      {
        warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
      }
      /* istanbul ignore else */
      if ((inBrowser || inWeex) && typeof console !== 'undefined') {
        console.error(err);
      } else {
        throw err
      }
    }
  
    /*  */
  
    var isUsingMicroTask = false;
  
    var callbacks = [];
    var pending = false;
  
    function flushCallbacks () {
      pending = false;
      var copies = callbacks.slice(0);
      callbacks.length = 0;
      for (var i = 0; i < copies.length; i++) {
        copies[i]();
      }
    }
  
    // Here we have async deferring wrappers using microtasks.
    // In 2.5 we used (macro) tasks (in combination with microtasks).
    // However, it has subtle problems when state is changed right before repaint
    // (e.g. #6813, out-in transitions).
    // Also, using (macro) tasks in event handler would cause some weird behaviors
    // that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
    // So we now use microtasks everywhere, again.
    // A major drawback of this tradeoff is that there are some scenarios
    // where microtasks have too high a priority and fire in between supposedly
    // sequential events (e.g. #4521, #6690, which have workarounds)
    // or even between bubbling of the same event (#6566).
    var timerFunc;
  
    // The nextTick behavior leverages the microtask queue, which can be accessed
    // via either native Promise.then or MutationObserver.
    // MutationObserver has wider support, however it is seriously bugged in
    // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
    // completely stops working after triggering a few times... so, if native
    // Promise is available, we will use it:
    /* istanbul ignore next, $flow-disable-line */
    if (typeof Promise !== 'undefined' && isNative(Promise)) {
      var p = Promise.resolve();
      timerFunc = function () {
        p.then(flushCallbacks);
        // In problematic UIWebViews, Promise.then doesn't completely break, but
        // it can get stuck in a weird state where callbacks are pushed into the
        // microtask queue but the queue isn't being flushed, until the browser
        // needs to do some other work, e.g. handle a timer. Therefore we can
        // "force" the microtask queue to be flushed by adding an empty timer.
        if (isIOS) { setTimeout(noop); }
      };
      isUsingMicroTask = true;
    } else if (!isIE && typeof MutationObserver !== 'undefined' && (
      isNative(MutationObserver) ||
      // PhantomJS and iOS 7.x
      MutationObserver.toString() === '[object MutationObserverConstructor]'
    )) {
      // Use MutationObserver where native Promise is not available,
      // e.g. PhantomJS, iOS7, Android 4.4
      // (#6466 MutationObserver is unreliable in IE11)
      var counter = 1;
      var observer = new MutationObserver(flushCallbacks);
      var textNode = document.createTextNode(String(counter));
      observer.observe(textNode, {
        characterData: true
      });
      timerFunc = function () {
        counter = (counter + 1) % 2;
        textNode.data = String(counter);
      };
      isUsingMicroTask = true;
    } else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
      // Fallback to setImmediate.
      // Techinically it leverages the (macro) task queue,
      // but it is still a better choice than setTimeout.
      timerFunc = function () {
        setImmediate(flushCallbacks);
      };
    } else {
      // Fallback to setTimeout.
      timerFunc = function () {
        setTimeout(flushCallbacks, 0);
      };
    }
  
    function nextTick (cb, ctx) {
      var _resolve;
      callbacks.push(function () {
        if (cb) {
          try {
            cb.call(ctx);
          } catch (e) {
            handleError(e, ctx, 'nextTick');
          }
        } else if (_resolve) {
          _resolve(ctx);
        }
      });
      if (!pending) {
        pending = true;
        timerFunc();
      }
      // $flow-disable-line
      if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
          _resolve = resolve;
        })
      }
    }
  
    /*  */
  
    var mark;
    var measure;
  
    {
      var perf = inBrowser && window.performance;
      /* istanbul ignore if */
      if (
        perf &&
        perf.mark &&
        perf.measure &&
        perf.clearMarks &&
        perf.clearMeasures
      ) {
        mark = function (tag) { return perf.mark(tag); };
        measure = function (name, startTag, endTag) {
          perf.measure(name, startTag, endTag);
          perf.clearMarks(startTag);
          perf.clearMarks(endTag);
          // perf.clearMeasures(name)
        };
      }
    }
  
    /* not type checking this file because flow doesn't play well with Proxy */
  
    var initProxy;
  
    {
      var allowedGlobals = makeMap(
        'Infinity,undefined,NaN,isFinite,isNaN,' +
        'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
        'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
        'require' // for Webpack/Browserify
      );
  
      var warnNonPresent = function (target, key) {
        warn(
          "Property or method \"" + key + "\" is not defined on the instance but " +
          'referenced during render. Make sure that this property is reactive, ' +
          'either in the data option, or for class-based components, by ' +
          'initializing the property. ' +
          'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
          target
        );
      };
  
      var warnReservedPrefix = function (target, key) {
        warn(
          "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
          'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
          'prevent conflicts with Vue internals' +
          'See: https://vuejs.org/v2/api/#data',
          target
        );
      };
  
      var hasProxy =
        typeof Proxy !== 'undefined' && isNative(Proxy);
  
      if (hasProxy) {
        var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
        config.keyCodes = new Proxy(config.keyCodes, {
          set: function set (target, key, value) {
            if (isBuiltInModifier(key)) {
              warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
              return false
            } else {
              target[key] = value;
              return true
            }
          }
        });
      }
  
      var hasHandler = {
        has: function has (target, key) {
          var has = key in target;
          var isAllowed = allowedGlobals(key) ||
            (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
          if (!has && !isAllowed) {
            if (key in target.$data) { warnReservedPrefix(target, key); }
            else { warnNonPresent(target, key); }
          }
          return has || !isAllowed
        }
      };
  
      var getHandler = {
        get: function get (target, key) {
          if (typeof key === 'string' && !(key in target)) {
            if (key in target.$data) { warnReservedPrefix(target, key); }
            else { warnNonPresent(target, key); }
          }
          return target[key]
        }
      };
  
      initProxy = function initProxy (vm) {
        if (hasProxy) {
          // determine which proxy handler to use
          var options = vm.$options;
          var handlers = options.render && options.render._withStripped
            ? getHandler
            : hasHandler;
          vm._renderProxy = new Proxy(vm, handlers);
        } else {
          vm._renderProxy = vm;
        }
      };
    }
  
    /*  */
  
    var seenObjects = new _Set();
  
    /**
     * Recursively traverse an object to evoke all converted
     * getters, so that every nested property inside the object
     * is collected as a "deep" dependency.
     */
    function traverse (val) {
      _traverse(val, seenObjects);
      seenObjects.clear();
    }
  
    function _traverse (val, seen) {
      var i, keys;
      var isA = Array.isArray(val);
      if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
        return
      }
      if (val.__ob__) {
        var depId = val.__ob__.dep.id;
        if (seen.has(depId)) {
          return
        }
        seen.add(depId);
      }
      if (isA) {
        i = val.length;
        while (i--) { _traverse(val[i], seen); }
      } else {
        keys = Object.keys(val);
        i = keys.length;
        while (i--) { _traverse(val[keys[i]], seen); }
      }
    }
  
    /*  */
  
    var normalizeEvent = cached(function (name) {
      var passive = name.charAt(0) === '&';
      name = passive ? name.slice(1) : name;
      var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
      name = once$$1 ? name.slice(1) : name;
      var capture = name.charAt(0) === '!';
      name = capture ? name.slice(1) : name;
      return {
        name: name,
        once: once$$1,
        capture: capture,
        passive: passive
      }
    });
  
    function createFnInvoker (fns, vm) {
      function invoker () {
        var arguments$1 = arguments;
  
        var fns = invoker.fns;
        if (Array.isArray(fns)) {
          var cloned = fns.slice();
          for (var i = 0; i < cloned.length; i++) {
            invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
          }
        } else {
          // return handler return value for single handlers
          return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
        }
      }
      invoker.fns = fns;
      return invoker
    }
  
    function updateListeners (
      on,
      oldOn,
      add,
      remove$$1,
      createOnceHandler,
      vm
    ) {
      var name, def$$1, cur, old, event;
      for (name in on) {
        def$$1 = cur = on[name];
        old = oldOn[name];
        event = normalizeEvent(name);
        if (isUndef(cur)) {
          warn(
            "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
            vm
          );
        } else if (isUndef(old)) {
          if (isUndef(cur.fns)) {
            cur = on[name] = createFnInvoker(cur, vm);
          }
          if (isTrue(event.once)) {
            cur = on[name] = createOnceHandler(event.name, cur, event.capture);
          }
          add(event.name, cur, event.capture, event.passive, event.params);
        } else if (cur !== old) {
          old.fns = cur;
          on[name] = old;
        }
      }
      for (name in oldOn) {
        if (isUndef(on[name])) {
          event = normalizeEvent(name);
          remove$$1(event.name, oldOn[name], event.capture);
        }
      }
    }
  
    /*  */
  
    function mergeVNodeHook (def, hookKey, hook) {
      if (def instanceof VNode) {
        def = def.data.hook || (def.data.hook = {});
      }
      var invoker;
      var oldHook = def[hookKey];
  
      function wrappedHook () {
        hook.apply(this, arguments);
        // important: remove merged hook to ensure it's called only once
        // and prevent memory leak
        remove(invoker.fns, wrappedHook);
      }
  
      if (isUndef(oldHook)) {
        // no existing hook
        invoker = createFnInvoker([wrappedHook]);
      } else {
        /* istanbul ignore if */
        if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
          // already a merged invoker
          invoker = oldHook;
          invoker.fns.push(wrappedHook);
        } else {
          // existing plain hook
          invoker = createFnInvoker([oldHook, wrappedHook]);
        }
      }
  
      invoker.merged = true;
      def[hookKey] = invoker;
    }
  
    /*  */
  
    function extractPropsFromVNodeData (
      data,
      Ctor,
      tag
    ) {
      // we are only extracting raw values here.
      // validation and default values are handled in the child
      // component itself.
      var propOptions = Ctor.options.props;
      if (isUndef(propOptions)) {
        return
      }
      var res = {};
      var attrs = data.attrs;
      var props = data.props;
      if (isDef(attrs) || isDef(props)) {
        for (var key in propOptions) {
          var altKey = hyphenate(key);
          {
            var keyInLowerCase = key.toLowerCase();
            if (
              key !== keyInLowerCase &&
              attrs && hasOwn(attrs, keyInLowerCase)
            ) {
              tip(
                "Prop \"" + keyInLowerCase + "\" is passed to component " +
                (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
                " \"" + key + "\". " +
                "Note that HTML attributes are case-insensitive and camelCased " +
                "props need to use their kebab-case equivalents when using in-DOM " +
                "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
              );
            }
          }
          checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
        }
      }
      return res
    }
  
    function checkProp (
      res,
      hash,
      key,
      altKey,
      preserve
    ) {
      if (isDef(hash)) {
        if (hasOwn(hash, key)) {
          res[key] = hash[key];
          if (!preserve) {
            delete hash[key];
          }
          return true
        } else if (hasOwn(hash, altKey)) {
          res[key] = hash[altKey];
          if (!preserve) {
            delete hash[altKey];
          }
          return true
        }
      }
      return false
    }
  
    /*  */
  
    // The template compiler attempts to minimize the need for normalization by
    // statically analyzing the template at compile time.
    //
    // For plain HTML markup, normalization can be completely skipped because the
    // generated render function is guaranteed to return Array<VNode>. There are
    // two cases where extra normalization is needed:
  
    // 1. When the children contains components - because a functional component
    // may return an Array instead of a single root. In this case, just a simple
    // normalization is needed - if any child is an Array, we flatten the whole
    // thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
    // because functional components already normalize their own children.
    function simpleNormalizeChildren (children) {
      for (var i = 0; i < children.length; i++) {
        if (Array.isArray(children[i])) {
          return Array.prototype.concat.apply([], children)
        }
      }
      return children
    }
  
    // 2. When the children contains constructs that always generated nested Arrays,
    // e.g. <template>, <slot>, v-for, or when the children is provided by user
    // with hand-written render functions / JSX. In such cases a full normalization
    // is needed to cater to all possible types of children values.
    function normalizeChildren (children) {
      return isPrimitive(children)
        ? [createTextVNode(children)]
        : Array.isArray(children)
          ? normalizeArrayChildren(children)
          : undefined
    }
  
    function isTextNode (node) {
      return isDef(node) && isDef(node.text) && isFalse(node.isComment)
    }
  
    function normalizeArrayChildren (children, nestedIndex) {
      var res = [];
      var i, c, lastIndex, last;
      for (i = 0; i < children.length; i++) {
        c = children[i];
        if (isUndef(c) || typeof c === 'boolean') { continue }
        lastIndex = res.length - 1;
        last = res[lastIndex];
        //  nested
        if (Array.isArray(c)) {
          if (c.length > 0) {
            c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
            // merge adjacent text nodes
            if (isTextNode(c[0]) && isTextNode(last)) {
              res[lastIndex] = createTextVNode(last.text + (c[0]).text);
              c.shift();
            }
            res.push.apply(res, c);
          }
        } else if (isPrimitive(c)) {
          if (isTextNode(last)) {
            // merge adjacent text nodes
            // this is necessary for SSR hydration because text nodes are
            // essentially merged when rendered to HTML strings
            res[lastIndex] = createTextVNode(last.text + c);
          } else if (c !== '') {
            // convert primitive to vnode
            res.push(createTextVNode(c));
          }
        } else {
          if (isTextNode(c) && isTextNode(last)) {
            // merge adjacent text nodes
            res[lastIndex] = createTextVNode(last.text + c.text);
          } else {
            // default key for nested array children (likely generated by v-for)
            if (isTrue(children._isVList) &&
              isDef(c.tag) &&
              isUndef(c.key) &&
              isDef(nestedIndex)) {
              c.key = "__vlist" + nestedIndex + "_" + i + "__";
            }
            res.push(c);
          }
        }
      }
      return res
    }
  
    /*  */
  
    function initProvide (vm) {
      var provide = vm.$options.provide;
      if (provide) {
        vm._provided = typeof provide === 'function'
          ? provide.call(vm)
          : provide;
      }
    }
  
    function initInjections (vm) {
      var result = resolveInject(vm.$options.inject, vm);
      if (result) {
        toggleObserving(false);
        Object.keys(result).forEach(function (key) {
          /* istanbul ignore else */
          {
            defineReactive$$1(vm, key, result[key], function () {
              warn(
                "Avoid mutating an injected value directly since the changes will be " +
                "overwritten whenever the provided component re-renders. " +
                "injection being mutated: \"" + key + "\"",
                vm
              );
            });
          }
        });
        toggleObserving(true);
      }
    }
  
    function resolveInject (inject, vm) {
      if (inject) {
        // inject is :any because flow is not smart enough to figure out cached
        var result = Object.create(null);
        var keys = hasSymbol
          ? Reflect.ownKeys(inject)
          : Object.keys(inject);
  
        for (var i = 0; i < keys.length; i++) {
          var key = keys[i];
          // #6574 in case the inject object is observed...
          if (key === '__ob__') { continue }
          var provideKey = inject[key].from;
          var source = vm;
          while (source) {
            if (source._provided && hasOwn(source._provided, provideKey)) {
              result[key] = source._provided[provideKey];
              break
            }
            source = source.$parent;
          }
          if (!source) {
            if ('default' in inject[key]) {
              var provideDefault = inject[key].default;
              result[key] = typeof provideDefault === 'function'
                ? provideDefault.call(vm)
                : provideDefault;
            } else {
              warn(("Injection \"" + key + "\" not found"), vm);
            }
          }
        }
        return result
      }
    }
  
    /*  */
  
  
  
    /**
     * Runtime helper for resolving raw children VNodes into a slot object.
     */
    function resolveSlots (
      children,
      context
    ) {
      if (!children || !children.length) {
        return {}
      }
      var slots = {};
      for (var i = 0, l = children.length; i < l; i++) {
        var child = children[i];
        var data = child.data;
        // remove slot attribute if the node is resolved as a Vue slot node
        if (data && data.attrs && data.attrs.slot) {
          delete data.attrs.slot;
        }
        // named slots should only be respected if the vnode was rendered in the
        // same context.
        if ((child.context === context || child.fnContext === context) &&
          data && data.slot != null
        ) {
          var name = data.slot;
          var slot = (slots[name] || (slots[name] = []));
          if (child.tag === 'template') {
            slot.push.apply(slot, child.children || []);
          } else {
            slot.push(child);
          }
        } else {
          (slots.default || (slots.default = [])).push(child);
        }
      }
      // ignore slots that contains only whitespace
      for (var name$1 in slots) {
        if (slots[name$1].every(isWhitespace)) {
          delete slots[name$1];
        }
      }
      return slots
    }
  
    function isWhitespace (node) {
      return (node.isComment && !node.asyncFactory) || node.text === ' '
    }
  
    /*  */
  
    function normalizeScopedSlots (
      slots,
      normalSlots,
      prevSlots
    ) {
      var res;
      var hasNormalSlots = Object.keys(normalSlots).length > 0;
      var isStable = slots ? !!slots.$stable : !hasNormalSlots;
      var key = slots && slots.$key;
      if (!slots) {
        res = {};
      } else if (slots._normalized) {
        // fast path 1: child component re-render only, parent did not change
        return slots._normalized
      } else if (
        isStable &&
        prevSlots &&
        prevSlots !== emptyObject &&
        key === prevSlots.$key &&
        !hasNormalSlots &&
        !prevSlots.$hasNormal
      ) {
        // fast path 2: stable scoped slots w/ no normal slots to proxy,
        // only need to normalize once
        return prevSlots
      } else {
        res = {};
        for (var key$1 in slots) {
          if (slots[key$1] && key$1[0] !== '$') {
            res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
          }
        }
      }
      // expose normal slots on scopedSlots
      for (var key$2 in normalSlots) {
        if (!(key$2 in res)) {
          res[key$2] = proxyNormalSlot(normalSlots, key$2);
        }
      }
      // avoriaz seems to mock a non-extensible $scopedSlots object
      // and when that is passed down this would cause an error
      if (slots && Object.isExtensible(slots)) {
        (slots)._normalized = res;
      }
      def(res, '$stable', isStable);
      def(res, '$key', key);
      def(res, '$hasNormal', hasNormalSlots);
      return res
    }
  
    function normalizeScopedSlot(normalSlots, key, fn) {
      var normalized = function () {
        var res = arguments.length ? fn.apply(null, arguments) : fn({});
        res = res && typeof res === 'object' && !Array.isArray(res)
          ? [res] // single vnode
          : normalizeChildren(res);
        return res && (
          res.length === 0 ||
          (res.length === 1 && res[0].isComment) // #9658
        ) ? undefined
          : res
      };
      // this is a slot using the new v-slot syntax without scope. although it is
      // compiled as a scoped slot, render fn users would expect it to be present
      // on this.$slots because the usage is semantically a normal slot.
      if (fn.proxy) {
        Object.defineProperty(normalSlots, key, {
          get: normalized,
          enumerable: true,
          configurable: true
        });
      }
      return normalized
    }
  
    function proxyNormalSlot(slots, key) {
      return function () { return slots[key]; }
    }
  
    /*  */
  
    /**
     * Runtime helper for rendering v-for lists.
     */
    function renderList (
      val,
      render
    ) {
      var ret, i, l, keys, key;
      if (Array.isArray(val) || typeof val === 'string') {
        ret = new Array(val.length);
        for (i = 0, l = val.length; i < l; i++) {
          ret[i] = render(val[i], i);
        }
      } else if (typeof val === 'number') {
        ret = new Array(val);
        for (i = 0; i < val; i++) {
          ret[i] = render(i + 1, i);
        }
      } else if (isObject(val)) {
        if (hasSymbol && val[Symbol.iterator]) {
          ret = [];
          var iterator = val[Symbol.iterator]();
          var result = iterator.next();
          while (!result.done) {
            ret.push(render(result.value, ret.length));
            result = iterator.next();
          }
        } else {
          keys = Object.keys(val);
          ret = new Array(keys.length);
          for (i = 0, l = keys.length; i < l; i++) {
            key = keys[i];
            ret[i] = render(val[key], key, i);
          }
        }
      }
      if (!isDef(ret)) {
        ret = [];
      }
      (ret)._isVList = true;
      return ret
    }
  
    /*  */
  
    /**
     * Runtime helper for rendering <slot>
     */
    function renderSlot (
      name,
      fallback,
      props,
      bindObject
    ) {
      var scopedSlotFn = this.$scopedSlots[name];
      var nodes;
      if (scopedSlotFn) { // scoped slot
        props = props || {};
        if (bindObject) {
          if (!isObject(bindObject)) {
            warn(
              'slot v-bind without argument expects an Object',
              this
            );
          }
          props = extend(extend({}, bindObject), props);
        }
        nodes = scopedSlotFn(props) || fallback;
      } else {
        nodes = this.$slots[name] || fallback;
      }
  
      var target = props && props.slot;
      if (target) {
        return this.$createElement('template', { slot: target }, nodes)
      } else {
        return nodes
      }
    }
  
    /*  */
  
    /**
     * Runtime helper for resolving filters
     */
    function resolveFilter (id) {
      return resolveAsset(this.$options, 'filters', id, true) || identity
    }
  
    /*  */
  
    function isKeyNotMatch (expect, actual) {
      if (Array.isArray(expect)) {
        return expect.indexOf(actual) === -1
      } else {
        return expect !== actual
      }
    }
  
    /**
     * Runtime helper for checking keyCodes from config.
     * exposed as Vue.prototype._k
     * passing in eventKeyName as last argument separately for backwards compat
     */
    function checkKeyCodes (
      eventKeyCode,
      key,
      builtInKeyCode,
      eventKeyName,
      builtInKeyName
    ) {
      var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
      if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
        return isKeyNotMatch(builtInKeyName, eventKeyName)
      } else if (mappedKeyCode) {
        return isKeyNotMatch(mappedKeyCode, eventKeyCode)
      } else if (eventKeyName) {
        return hyphenate(eventKeyName) !== key
      }
    }
  
    /*  */
  
    /**
     * Runtime helper for merging v-bind="object" into a VNode's data.
     */
    function bindObjectProps (
      data,
      tag,
      value,
      asProp,
      isSync
    ) {
      if (value) {
        if (!isObject(value)) {
          warn(
            'v-bind without argument expects an Object or Array value',
            this
          );
        } else {
          if (Array.isArray(value)) {
            value = toObject(value);
          }
          var hash;
          var loop = function ( key ) {
            if (
              key === 'class' ||
              key === 'style' ||
              isReservedAttribute(key)
            ) {
              hash = data;
            } else {
              var type = data.attrs && data.attrs.type;
              hash = asProp || config.mustUseProp(tag, type, key)
                ? data.domProps || (data.domProps = {})
                : data.attrs || (data.attrs = {});
            }
            var camelizedKey = camelize(key);
            var hyphenatedKey = hyphenate(key);
            if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
              hash[key] = value[key];
  
              if (isSync) {
                var on = data.on || (data.on = {});
                on[("update:" + key)] = function ($event) {
                  value[key] = $event;
                };
              }
            }
          };
  
          for (var key in value) loop( key );
        }
      }
      return data
    }
  
    /*  */
  
    /**
     * Runtime helper for rendering static trees.
     */
    function renderStatic (
      index,
      isInFor
    ) {
      var cached = this._staticTrees || (this._staticTrees = []);
      var tree = cached[index];
      // if has already-rendered static tree and not inside v-for,
      // we can reuse the same tree.
      if (tree && !isInFor) {
        return tree
      }
      // otherwise, render a fresh tree.
      tree = cached[index] = this.$options.staticRenderFns[index].call(
        this._renderProxy,
        null,
        this // for render fns generated for functional component templates
      );
      markStatic(tree, ("__static__" + index), false);
      return tree
    }
  
    /**
     * Runtime helper for v-once.
     * Effectively it means marking the node as static with a unique key.
     */
    function markOnce (
      tree,
      index,
      key
    ) {
      markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
      return tree
    }
  
    function markStatic (
      tree,
      key,
      isOnce
    ) {
      if (Array.isArray(tree)) {
        for (var i = 0; i < tree.length; i++) {
          if (tree[i] && typeof tree[i] !== 'string') {
            markStaticNode(tree[i], (key + "_" + i), isOnce);
          }
        }
      } else {
        markStaticNode(tree, key, isOnce);
      }
    }
  
    function markStaticNode (node, key, isOnce) {
      node.isStatic = true;
      node.key = key;
      node.isOnce = isOnce;
    }
  
    /*  */
  
    function bindObjectListeners (data, value) {
      if (value) {
        if (!isPlainObject(value)) {
          warn(
            'v-on without argument expects an Object value',
            this
          );
        } else {
          var on = data.on = data.on ? extend({}, data.on) : {};
          for (var key in value) {
            var existing = on[key];
            var ours = value[key];
            on[key] = existing ? [].concat(existing, ours) : ours;
          }
        }
      }
      return data
    }
  
    /*  */
  
    function resolveScopedSlots (
      fns, // see flow/vnode
      res,
      // the following are added in 2.6
      hasDynamicKeys,
      contentHashKey
    ) {
      res = res || { $stable: !hasDynamicKeys };
      for (var i = 0; i < fns.length; i++) {
        var slot = fns[i];
        if (Array.isArray(slot)) {
          resolveScopedSlots(slot, res, hasDynamicKeys);
        } else if (slot) {
          // marker for reverse proxying v-slot without scope on this.$slots
          if (slot.proxy) {
            slot.fn.proxy = true;
          }
          res[slot.key] = slot.fn;
        }
      }
      if (contentHashKey) {
        (res).$key = contentHashKey;
      }
      return res
    }
  
    /*  */
  
    function bindDynamicKeys (baseObj, values) {
      for (var i = 0; i < values.length; i += 2) {
        var key = values[i];
        if (typeof key === 'string' && key) {
          baseObj[values[i]] = values[i + 1];
        } else if (key !== '' && key !== null) {
          // null is a speical value for explicitly removing a binding
          warn(
            ("Invalid value for dynamic directive argument (expected string or null): " + key),
            this
          );
        }
      }
      return baseObj
    }
  
    // helper to dynamically append modifier runtime markers to event names.
    // ensure only append when value is already string, otherwise it will be cast
    // to string and cause the type check to miss.
    function prependModifier (value, symbol) {
      return typeof value === 'string' ? symbol + value : value
    }
  
    /*  */
  
    function installRenderHelpers (target) {
      target._o = markOnce;
      target._n = toNumber;
      target._s = toString;
      target._l = renderList;
      target._t = renderSlot;
      target._q = looseEqual;
      target._i = looseIndexOf;
      target._m = renderStatic;
      target._f = resolveFilter;
      target._k = checkKeyCodes;
      target._b = bindObjectProps;
      target._v = createTextVNode;
      target._e = createEmptyVNode;
      target._u = resolveScopedSlots;
      target._g = bindObjectListeners;
      target._d = bindDynamicKeys;
      target._p = prependModifier;
    }
  
    /*  */
  
    function FunctionalRenderContext (
      data,
      props,
      children,
      parent,
      Ctor
    ) {
      var this$1 = this;
  
      var options = Ctor.options;
      // ensure the createElement function in functional components
      // gets a unique context - this is necessary for correct named slot check
      var contextVm;
      if (hasOwn(parent, '_uid')) {
        contextVm = Object.create(parent);
        // $flow-disable-line
        contextVm._original = parent;
      } else {
        // the context vm passed in is a functional context as well.
        // in this case we want to make sure we are able to get a hold to the
        // real context instance.
        contextVm = parent;
        // $flow-disable-line
        parent = parent._original;
      }
      var isCompiled = isTrue(options._compiled);
      var needNormalization = !isCompiled;
  
      this.data = data;
      this.props = props;
      this.children = children;
      this.parent = parent;
      this.listeners = data.on || emptyObject;
      this.injections = resolveInject(options.inject, parent);
      this.slots = function () {
        if (!this$1.$slots) {
          normalizeScopedSlots(
            data.scopedSlots,
            this$1.$slots = resolveSlots(children, parent)
          );
        }
        return this$1.$slots
      };
  
      Object.defineProperty(this, 'scopedSlots', ({
        enumerable: true,
        get: function get () {
          return normalizeScopedSlots(data.scopedSlots, this.slots())
        }
      }));
  
      // support for compiled functional template
      if (isCompiled) {
        // exposing $options for renderStatic()
        this.$options = options;
        // pre-resolve slots for renderSlot()
        this.$slots = this.slots();
        this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
      }
  
      if (options._scopeId) {
        this._c = function (a, b, c, d) {
          var vnode = createElement(contextVm, a, b, c, d, needNormalization);
          if (vnode && !Array.isArray(vnode)) {
            vnode.fnScopeId = options._scopeId;
            vnode.fnContext = parent;
          }
          return vnode
        };
      } else {
        this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
      }
    }
  
    installRenderHelpers(FunctionalRenderContext.prototype);
  
    function createFunctionalComponent (
      Ctor,
      propsData,
      data,
      contextVm,
      children
    ) {
      var options = Ctor.options;
      var props = {};
      var propOptions = options.props;
      if (isDef(propOptions)) {
        for (var key in propOptions) {
          props[key] = validateProp(key, propOptions, propsData || emptyObject);
        }
      } else {
        if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
        if (isDef(data.props)) { mergeProps(props, data.props); }
      }
  
      var renderContext = new FunctionalRenderContext(
        data,
        props,
        children,
        contextVm,
        Ctor
      );
  
      var vnode = options.render.call(null, renderContext._c, renderContext);
  
      if (vnode instanceof VNode) {
        return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
      } else if (Array.isArray(vnode)) {
        var vnodes = normalizeChildren(vnode) || [];
        var res = new Array(vnodes.length);
        for (var i = 0; i < vnodes.length; i++) {
          res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
        }
        return res
      }
    }
  
    function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
      // #7817 clone node before setting fnContext, otherwise if the node is reused
      // (e.g. it was from a cached normal slot) the fnContext causes named slots
      // that should not be matched to match.
      var clone = cloneVNode(vnode);
      clone.fnContext = contextVm;
      clone.fnOptions = options;
      {
        (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
      }
      if (data.slot) {
        (clone.data || (clone.data = {})).slot = data.slot;
      }
      return clone
    }
  
    function mergeProps (to, from) {
      for (var key in from) {
        to[camelize(key)] = from[key];
      }
    }
  
    /*  */
  
    /*  */
  
    /*  */
  
    /*  */
  
    // inline hooks to be invoked on component VNodes during patch
    var componentVNodeHooks = {
      init: function init (vnode, hydrating) {
        if (
          vnode.componentInstance &&
          !vnode.componentInstance._isDestroyed &&
          vnode.data.keepAlive
        ) {
          // kept-alive components, treat as a patch
          var mountedNode = vnode; // work around flow
          componentVNodeHooks.prepatch(mountedNode, mountedNode);
        } else {
          var child = vnode.componentInstance = createComponentInstanceForVnode(
            vnode,
            activeInstance
          );
          child.$mount(hydrating ? vnode.elm : undefined, hydrating);
        }
      },
  
      prepatch: function prepatch (oldVnode, vnode) {
        var options = vnode.componentOptions;
        var child = vnode.componentInstance = oldVnode.componentInstance;
        updateChildComponent(
          child,
          options.propsData, // updated props
          options.listeners, // updated listeners
          vnode, // new parent vnode
          options.children // new children
        );
      },
  
      insert: function insert (vnode) {
        var context = vnode.context;
        var componentInstance = vnode.componentInstance;
        if (!componentInstance._isMounted) {
          componentInstance._isMounted = true;
          callHook(componentInstance, 'mounted');
        }
        if (vnode.data.keepAlive) {
          if (context._isMounted) {
            // vue-router#1212
            // During updates, a kept-alive component's child components may
            // change, so directly walking the tree here may call activated hooks
            // on incorrect children. Instead we push them into a queue which will
            // be processed after the whole patch process ended.
            queueActivatedComponent(componentInstance);
          } else {
            activateChildComponent(componentInstance, true /* direct */);
          }
        }
      },
  
      destroy: function destroy (vnode) {
        var componentInstance = vnode.componentInstance;
        if (!componentInstance._isDestroyed) {
          if (!vnode.data.keepAlive) {
            componentInstance.$destroy();
          } else {
            deactivateChildComponent(componentInstance, true /* direct */);
          }
        }
      }
    };
  
    var hooksToMerge = Object.keys(componentVNodeHooks);
  
    function createComponent (
      Ctor,
      data,
      context,
      children,
      tag
    ) {
      if (isUndef(Ctor)) {
        return
      }
  
      var baseCtor = context.$options._base;
  
      // plain options object: turn it into a constructor
      if (isObject(Ctor)) {
        Ctor = baseCtor.extend(Ctor);
      }
  
      // if at this stage it's not a constructor or an async component factory,
      // reject.
      if (typeof Ctor !== 'function') {
        {
          warn(("Invalid Component definition: " + (String(Ctor))), context);
        }
        return
      }
  
      // async component
      var asyncFactory;
      if (isUndef(Ctor.cid)) {
        asyncFactory = Ctor;
        Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
        if (Ctor === undefined) {
          // return a placeholder node for async component, which is rendered
          // as a comment node but preserves all the raw information for the node.
          // the information will be used for async server-rendering and hydration.
          return createAsyncPlaceholder(
            asyncFactory,
            data,
            context,
            children,
            tag
          )
        }
      }
  
      data = data || {};
  
      // resolve constructor options in case global mixins are applied after
      // component constructor creation
      resolveConstructorOptions(Ctor);
  
      // transform component v-model data into props & events
      if (isDef(data.model)) {
        transformModel(Ctor.options, data);
      }
  
      // extract props
      var propsData = extractPropsFromVNodeData(data, Ctor, tag);
  
      // functional component
      if (isTrue(Ctor.options.functional)) {
        return createFunctionalComponent(Ctor, propsData, data, context, children)
      }
  
      // extract listeners, since these needs to be treated as
      // child component listeners instead of DOM listeners
      var listeners = data.on;
      // replace with listeners with .native modifier
      // so it gets processed during parent component patch.
      data.on = data.nativeOn;
  
      if (isTrue(Ctor.options.abstract)) {
        // abstract components do not keep anything
        // other than props & listeners & slot
  
        // work around flow
        var slot = data.slot;
        data = {};
        if (slot) {
          data.slot = slot;
        }
      }
  
      // install component management hooks onto the placeholder node
      installComponentHooks(data);
  
      // return a placeholder vnode
      var name = Ctor.options.name || tag;
      var vnode = new VNode(
        ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
        data, undefined, undefined, undefined, context,
        { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
        asyncFactory
      );
  
      return vnode
    }
  
    function createComponentInstanceForVnode (
      vnode, // we know it's MountedComponentVNode but flow doesn't
      parent // activeInstance in lifecycle state
    ) {
      var options = {
        _isComponent: true,
        _parentVnode: vnode,
        parent: parent
      };
      // check inline-template render functions
      var inlineTemplate = vnode.data.inlineTemplate;
      if (isDef(inlineTemplate)) {
        options.render = inlineTemplate.render;
        options.staticRenderFns = inlineTemplate.staticRenderFns;
      }
      return new vnode.componentOptions.Ctor(options)
    }
  
    function installComponentHooks (data) {
      var hooks = data.hook || (data.hook = {});
      for (var i = 0; i < hooksToMerge.length; i++) {
        var key = hooksToMerge[i];
        var existing = hooks[key];
        var toMerge = componentVNodeHooks[key];
        if (existing !== toMerge && !(existing && existing._merged)) {
          hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
        }
      }
    }
  
    function mergeHook$1 (f1, f2) {
      var merged = function (a, b) {
        // flow complains about extra args which is why we use any
        f1(a, b);
        f2(a, b);
      };
      merged._merged = true;
      return merged
    }
  
    // transform component v-model info (value and callback) into
    // prop and event handler respectively.
    function transformModel (options, data) {
      var prop = (options.model && options.model.prop) || 'value';
      var event = (options.model && options.model.event) || 'input'
      ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
      var on = data.on || (data.on = {});
      var existing = on[event];
      var callback = data.model.callback;
      if (isDef(existing)) {
        if (
          Array.isArray(existing)
            ? existing.indexOf(callback) === -1
            : existing !== callback
        ) {
          on[event] = [callback].concat(existing);
        }
      } else {
        on[event] = callback;
      }
    }
  
    /*  */
  
    var SIMPLE_NORMALIZE = 1;
    var ALWAYS_NORMALIZE = 2;
  
    // wrapper function for providing a more flexible interface
    // without getting yelled at by flow
    function createElement (
      context,
      tag,
      data,
      children,
      normalizationType,
      alwaysNormalize
    ) {
      if (Array.isArray(data) || isPrimitive(data)) {
        normalizationType = children;
        children = data;
        data = undefined;
      }
      if (isTrue(alwaysNormalize)) {
        normalizationType = ALWAYS_NORMALIZE;
      }
      return _createElement(context, tag, data, children, normalizationType)
    }
  
    function _createElement (
      context,
      tag,
      data,
      children,
      normalizationType
    ) {
      if (isDef(data) && isDef((data).__ob__)) {
        warn(
          "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
          'Always create fresh vnode data objects in each render!',
          context
        );
        return createEmptyVNode()
      }
      // object syntax in v-bind
      if (isDef(data) && isDef(data.is)) {
        tag = data.is;
      }
      if (!tag) {
        // in case of component :is set to falsy value
        return createEmptyVNode()
      }
      // warn against non-primitive key
      if (isDef(data) && isDef(data.key) && !isPrimitive(data.key)
      ) {
        {
          warn(
            'Avoid using non-primitive value as key, ' +
            'use string/number value instead.',
            context
          );
        }
      }
      // support single function children as default scoped slot
      if (Array.isArray(children) &&
        typeof children[0] === 'function'
      ) {
        data = data || {};
        data.scopedSlots = { default: children[0] };
        children.length = 0;
      }
      if (normalizationType === ALWAYS_NORMALIZE) {
        children = normalizeChildren(children);
      } else if (normalizationType === SIMPLE_NORMALIZE) {
        children = simpleNormalizeChildren(children);
      }
      var vnode, ns;
      if (typeof tag === 'string') {
        var Ctor;
        ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
        if (config.isReservedTag(tag)) {
          // platform built-in elements
          vnode = new VNode(
            config.parsePlatformTagName(tag), data, children,
            undefined, undefined, context
          );
        } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
          // component
          vnode = createComponent(Ctor, data, context, children, tag);
        } else {
          // unknown or unlisted namespaced elements
          // check at runtime because it may get assigned a namespace when its
          // parent normalizes children
          vnode = new VNode(
            tag, data, children,
            undefined, undefined, context
          );
        }
      } else {
        // direct component options / constructor
        vnode = createComponent(tag, data, context, children);
      }
      if (Array.isArray(vnode)) {
        return vnode
      } else if (isDef(vnode)) {
        if (isDef(ns)) { applyNS(vnode, ns); }
        if (isDef(data)) { registerDeepBindings(data); }
        return vnode
      } else {
        return createEmptyVNode()
      }
    }
  
    function applyNS (vnode, ns, force) {
      vnode.ns = ns;
      if (vnode.tag === 'foreignObject') {
        // use default namespace inside foreignObject
        ns = undefined;
        force = true;
      }
      if (isDef(vnode.children)) {
        for (var i = 0, l = vnode.children.length; i < l; i++) {
          var child = vnode.children[i];
          if (isDef(child.tag) && (
            isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
            applyNS(child, ns, force);
          }
        }
      }
    }
  
    // ref #5318
    // necessary to ensure parent re-render when deep bindings like :style and
    // :class are used on slot nodes
    function registerDeepBindings (data) {
      if (isObject(data.style)) {
        traverse(data.style);
      }
      if (isObject(data.class)) {
        traverse(data.class);
      }
    }
  
    /*  */
  
    function initRender (vm) {
      vm._vnode = null; // the root of the child tree
      vm._staticTrees = null; // v-once cached trees
      var options = vm.$options;
      var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
      var renderContext = parentVnode && parentVnode.context;
      vm.$slots = resolveSlots(options._renderChildren, renderContext);
      vm.$scopedSlots = emptyObject;
      // bind the createElement fn to this instance
      // so that we get proper render context inside it.
      // args order: tag, data, children, normalizationType, alwaysNormalize
      // internal version is used by render functions compiled from templates
      vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
      // normalization is always applied for the public version, used in
      // user-written render functions.
      vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };
  
      // $attrs & $listeners are exposed for easier HOC creation.
      // they need to be reactive so that HOCs using them are always updated
      var parentData = parentVnode && parentVnode.data;
  
      /* istanbul ignore else */
      {
        defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
          !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
        }, true);
        defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
          !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
        }, true);
      }
    }
  
    var currentRenderingInstance = null;
  
    function renderMixin (Vue) {
      // install runtime convenience helpers
      installRenderHelpers(Vue.prototype);
  
      Vue.prototype.$nextTick = function (fn) {
        return nextTick(fn, this)
      };
  
      Vue.prototype._render = function () {
        var vm = this;
        var ref = vm.$options;
        var render = ref.render;
        var _parentVnode = ref._parentVnode;
  
        if (_parentVnode) {
          vm.$scopedSlots = normalizeScopedSlots(
            _parentVnode.data.scopedSlots,
            vm.$slots,
            vm.$scopedSlots
          );
        }
  
        // set parent vnode. this allows render functions to have access
        // to the data on the placeholder node.
        vm.$vnode = _parentVnode;
        // render self
        var vnode;
        try {
          // There's no need to maintain a stack becaues all render fns are called
          // separately from one another. Nested component's render fns are called
          // when parent component is patched.
          currentRenderingInstance = vm;
          vnode = render.call(vm._renderProxy, vm.$createElement);
        } catch (e) {
          handleError(e, vm, "render");
          // return error render result,
          // or previous vnode to prevent render error causing blank component
          /* istanbul ignore else */
          if (vm.$options.renderError) {
            try {
              vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
            } catch (e) {
              handleError(e, vm, "renderError");
              vnode = vm._vnode;
            }
          } else {
            vnode = vm._vnode;
          }
        } finally {
          currentRenderingInstance = null;
        }
        // if the returned array contains only a single node, allow it
        if (Array.isArray(vnode) && vnode.length === 1) {
          vnode = vnode[0];
        }
        // return empty vnode in case the render function errored out
        if (!(vnode instanceof VNode)) {
          if (Array.isArray(vnode)) {
            warn(
              'Multiple root nodes returned from render function. Render function ' +
              'should return a single root node.',
              vm
            );
          }
          vnode = createEmptyVNode();
        }
        // set parent
        vnode.parent = _parentVnode;
        return vnode
      };
    }
  
    /*  */
  
    function ensureCtor (comp, base) {
      if (
        comp.__esModule ||
        (hasSymbol && comp[Symbol.toStringTag] === 'Module')
      ) {
        comp = comp.default;
      }
      return isObject(comp)
        ? base.extend(comp)
        : comp
    }
  
    function createAsyncPlaceholder (
      factory,
      data,
      context,
      children,
      tag
    ) {
      var node = createEmptyVNode();
      node.asyncFactory = factory;
      node.asyncMeta = { data: data, context: context, children: children, tag: tag };
      return node
    }
  
    function resolveAsyncComponent (
      factory,
      baseCtor
    ) {
      if (isTrue(factory.error) && isDef(factory.errorComp)) {
        return factory.errorComp
      }
  
      if (isDef(factory.resolved)) {
        return factory.resolved
      }
  
      var owner = currentRenderingInstance;
      if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
        // already pending
        factory.owners.push(owner);
      }
  
      if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
        return factory.loadingComp
      }
  
      if (owner && !isDef(factory.owners)) {
        var owners = factory.owners = [owner];
        var sync = true;
        var timerLoading = null;
        var timerTimeout = null
  
        ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });
  
        var forceRender = function (renderCompleted) {
          for (var i = 0, l = owners.length; i < l; i++) {
            (owners[i]).$forceUpdate();
          }
  
          if (renderCompleted) {
            owners.length = 0;
            if (timerLoading !== null) {
              clearTimeout(timerLoading);
              timerLoading = null;
            }
            if (timerTimeout !== null) {
              clearTimeout(timerTimeout);
              timerTimeout = null;
            }
          }
        };
  
        var resolve = once(function (res) {
          // cache resolved
          factory.resolved = ensureCtor(res, baseCtor);
          // invoke callbacks only if this is not a synchronous resolve
          // (async resolves are shimmed as synchronous during SSR)
          if (!sync) {
            forceRender(true);
          } else {
            owners.length = 0;
          }
        });
  
        var reject = once(function (reason) {
          warn(
            "Failed to resolve async component: " + (String(factory)) +
            (reason ? ("\nReason: " + reason) : '')
          );
          if (isDef(factory.errorComp)) {
            factory.error = true;
            forceRender(true);
          }
        });
  
        var res = factory(resolve, reject);
  
        if (isObject(res)) {
          if (isPromise(res)) {
            // () => Promise
            if (isUndef(factory.resolved)) {
              res.then(resolve, reject);
            }
          } else if (isPromise(res.component)) {
            res.component.then(resolve, reject);
  
            if (isDef(res.error)) {
              factory.errorComp = ensureCtor(res.error, baseCtor);
            }
  
            if (isDef(res.loading)) {
              factory.loadingComp = ensureCtor(res.loading, baseCtor);
              if (res.delay === 0) {
                factory.loading = true;
              } else {
                timerLoading = setTimeout(function () {
                  timerLoading = null;
                  if (isUndef(factory.resolved) && isUndef(factory.error)) {
                    factory.loading = true;
                    forceRender(false);
                  }
                }, res.delay || 200);
              }
            }
  
            if (isDef(res.timeout)) {
              timerTimeout = setTimeout(function () {
                timerTimeout = null;
                if (isUndef(factory.resolved)) {
                  reject(
                    "timeout (" + (res.timeout) + "ms)"
                  );
                }
              }, res.timeout);
            }
          }
        }
  
        sync = false;
        // return in case resolved synchronously
        return factory.loading
          ? factory.loadingComp
          : factory.resolved
      }
    }
  
    /*  */
  
    function isAsyncPlaceholder (node) {
      return node.isComment && node.asyncFactory
    }
  
    /*  */
  
    function getFirstComponentChild (children) {
      if (Array.isArray(children)) {
        for (var i = 0; i < children.length; i++) {
          var c = children[i];
          if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
            return c
          }
        }
      }
    }
  
    /*  */
  
    /*  */
  
    function initEvents (vm) {
      vm._events = Object.create(null);
      vm._hasHookEvent = false;
      // init parent attached events
      var listeners = vm.$options._parentListeners;
      if (listeners) {
        updateComponentListeners(vm, listeners);
      }
    }
  
    var target;
  
    function add (event, fn) {
      target.$on(event, fn);
    }
  
    function remove$1 (event, fn) {
      target.$off(event, fn);
    }
  
    function createOnceHandler (event, fn) {
      var _target = target;
      return function onceHandler () {
        var res = fn.apply(null, arguments);
        if (res !== null) {
          _target.$off(event, onceHandler);
        }
      }
    }
  
    function updateComponentListeners (
      vm,
      listeners,
      oldListeners
    ) {
      target = vm;
      updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
      target = undefined;
    }
  
    function eventsMixin (Vue) {
      var hookRE = /^hook:/;
      Vue.prototype.$on = function (event, fn) {
        var vm = this;
        if (Array.isArray(event)) {
          for (var i = 0, l = event.length; i < l; i++) {
            vm.$on(event[i], fn);
          }
        } else {
          (vm._events[event] || (vm._events[event] = [])).push(fn);
          // optimize hook:event cost by using a boolean flag marked at registration
          // instead of a hash lookup
          if (hookRE.test(event)) {
            vm._hasHookEvent = true;
          }
        }
        return vm
      };
  
      Vue.prototype.$once = function (event, fn) {
        var vm = this;
        function on () {
          vm.$off(event, on);
          fn.apply(vm, arguments);
        }
        on.fn = fn;
        vm.$on(event, on);
        return vm
      };
  
      Vue.prototype.$off = function (event, fn) {
        var vm = this;
        // all
        if (!arguments.length) {
          vm._events = Object.create(null);
          return vm
        }
        // array of events
        if (Array.isArray(event)) {
          for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
            vm.$off(event[i$1], fn);
          }
          return vm
        }
        // specific event
        var cbs = vm._events[event];
        if (!cbs) {
          return vm
        }
        if (!fn) {
          vm._events[event] = null;
          return vm
        }
        // specific handler
        var cb;
        var i = cbs.length;
        while (i--) {
          cb = cbs[i];
          if (cb === fn || cb.fn === fn) {
            cbs.splice(i, 1);
            break
          }
        }
        return vm
      };
  
      Vue.prototype.$emit = function (event) {
        var vm = this;
        {
          var lowerCaseEvent = event.toLowerCase();
          if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
            tip(
              "Event \"" + lowerCaseEvent + "\" is emitted in component " +
              (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
              "Note that HTML attributes are case-insensitive and you cannot use " +
              "v-on to listen to camelCase events when using in-DOM templates. " +
              "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
            );
          }
        }
        var cbs = vm._events[event];
        if (cbs) {
          cbs = cbs.length > 1 ? toArray(cbs) : cbs;
          var args = toArray(arguments, 1);
          var info = "event handler for \"" + event + "\"";
          for (var i = 0, l = cbs.length; i < l; i++) {
            invokeWithErrorHandling(cbs[i], vm, args, vm, info);
          }
        }
        return vm
      };
    }
  
    /*  */
  
    var activeInstance = null;
    var isUpdatingChildComponent = false;
  
    function setActiveInstance(vm) {
      var prevActiveInstance = activeInstance;
      activeInstance = vm;
      return function () {
        activeInstance = prevActiveInstance;
      }
    }
  
    function initLifecycle (vm) {
      var options = vm.$options;
  
      // locate first non-abstract parent
      var parent = options.parent;
      if (parent && !options.abstract) {
        while (parent.$options.abstract && parent.$parent) {
          parent = parent.$parent;
        }
        parent.$children.push(vm);
      }
  
      vm.$parent = parent;
      vm.$root = parent ? parent.$root : vm;
  
      vm.$children = [];
      vm.$refs = {};
  
      vm._watcher = null;
      vm._inactive = null;
      vm._directInactive = false;
      vm._isMounted = false;
      vm._isDestroyed = false;
      vm._isBeingDestroyed = false;
    }
  
    function lifecycleMixin (Vue) {
      Vue.prototype._update = function (vnode, hydrating) {
        var vm = this;
        var prevEl = vm.$el;
        var prevVnode = vm._vnode;
        var restoreActiveInstance = setActiveInstance(vm);
        vm._vnode = vnode;
        // Vue.prototype.__patch__ is injected in entry points
        // based on the rendering backend used.
        if (!prevVnode) {
          // initial render
          vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
        } else {
          // updates
          vm.$el = vm.__patch__(prevVnode, vnode);
        }
        restoreActiveInstance();
        // update __vue__ reference
        if (prevEl) {
          prevEl.__vue__ = null;
        }
        if (vm.$el) {
          vm.$el.__vue__ = vm;
        }
        // if parent is an HOC, update its $el as well
        if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
          vm.$parent.$el = vm.$el;
        }
        // updated hook is called by the scheduler to ensure that children are
        // updated in a parent's updated hook.
      };
  
      Vue.prototype.$forceUpdate = function () {
        var vm = this;
        if (vm._watcher) {
          vm._watcher.update();
        }
      };
  
      Vue.prototype.$destroy = function () {
        var vm = this;
        if (vm._isBeingDestroyed) {
          return
        }
        callHook(vm, 'beforeDestroy');
        vm._isBeingDestroyed = true;
        // remove self from parent
        var parent = vm.$parent;
        if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
          remove(parent.$children, vm);
        }
        // teardown watchers
        if (vm._watcher) {
          vm._watcher.teardown();
        }
        var i = vm._watchers.length;
        while (i--) {
          vm._watchers[i].teardown();
        }
        // remove reference from data ob
        // frozen object may not have observer.
        if (vm._data.__ob__) {
          vm._data.__ob__.vmCount--;
        }
        // call the last hook...
        vm._isDestroyed = true;
        // invoke destroy hooks on current rendered tree
        vm.__patch__(vm._vnode, null);
        // fire destroyed hook
        callHook(vm, 'destroyed');
        // turn off all instance listeners.
        vm.$off();
        // remove __vue__ reference
        if (vm.$el) {
          vm.$el.__vue__ = null;
        }
        // release circular reference (#6759)
        if (vm.$vnode) {
          vm.$vnode.parent = null;
        }
      };
    }
  
    function mountComponent (
      vm,
      el,
      hydrating
    ) {
      vm.$el = el;
      if (!vm.$options.render) {
        vm.$options.render = createEmptyVNode;
        {
          /* istanbul ignore if */
          if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
            vm.$options.el || el) {
            warn(
              'You are using the runtime-only build of Vue where the template ' +
              'compiler is not available. Either pre-compile the templates into ' +
              'render functions, or use the compiler-included build.',
              vm
            );
          } else {
            warn(
              'Failed to mount component: template or render function not defined.',
              vm
            );
          }
        }
      }
      callHook(vm, 'beforeMount');
  
      var updateComponent;
      /* istanbul ignore if */
      if (config.performance && mark) {
        updateComponent = function () {
          var name = vm._name;
          var id = vm._uid;
          var startTag = "vue-perf-start:" + id;
          var endTag = "vue-perf-end:" + id;
  
          mark(startTag);
          var vnode = vm._render();
          mark(endTag);
          measure(("vue " + name + " render"), startTag, endTag);
  
          mark(startTag);
          vm._update(vnode, hydrating);
          mark(endTag);
          measure(("vue " + name + " patch"), startTag, endTag);
        };
      } else {
        updateComponent = function () {
          vm._update(vm._render(), hydrating);
        };
      }
  
      // we set this to vm._watcher inside the watcher's constructor
      // since the watcher's initial patch may call $forceUpdate (e.g. inside child
      // component's mounted hook), which relies on vm._watcher being already defined
      new Watcher(vm, updateComponent, noop, {
        before: function before () {
          if (vm._isMounted && !vm._isDestroyed) {
            callHook(vm, 'beforeUpdate');
          }
        }
      }, true /* isRenderWatcher */);
      hydrating = false;
  
      // manually mounted instance, call mounted on self
      // mounted is called for render-created child components in its inserted hook
      if (vm.$vnode == null) {
        vm._isMounted = true;
        callHook(vm, 'mounted');
      }
      return vm
    }
  
    function updateChildComponent (
      vm,
      propsData,
      listeners,
      parentVnode,
      renderChildren
    ) {
      {
        isUpdatingChildComponent = true;
      }
  
      // determine whether component has slot children
      // we need to do this before overwriting $options._renderChildren.
  
      // check if there are dynamic scopedSlots (hand-written or compiled but with
      // dynamic slot names). Static scoped slots compiled from template has the
      // "$stable" marker.
      var newScopedSlots = parentVnode.data.scopedSlots;
      var oldScopedSlots = vm.$scopedSlots;
      var hasDynamicScopedSlot = !!(
        (newScopedSlots && !newScopedSlots.$stable) ||
        (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
        (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
      );
  
      // Any static slot children from the parent may have changed during parent's
      // update. Dynamic scoped slots may also have changed. In such cases, a forced
      // update is necessary to ensure correctness.
      var needsForceUpdate = !!(
        renderChildren ||               // has new static slots
        vm.$options._renderChildren ||  // has old static slots
        hasDynamicScopedSlot
      );
  
      vm.$options._parentVnode = parentVnode;
      vm.$vnode = parentVnode; // update vm's placeholder node without re-render
  
      if (vm._vnode) { // update child tree's parent
        vm._vnode.parent = parentVnode;
      }
      vm.$options._renderChildren = renderChildren;
  
      // update $attrs and $listeners hash
      // these are also reactive so they may trigger child update if the child
      // used them during render
      vm.$attrs = parentVnode.data.attrs || emptyObject;
      vm.$listeners = listeners || emptyObject;
  
      // update props
      if (propsData && vm.$options.props) {
        toggleObserving(false);
        var props = vm._props;
        var propKeys = vm.$options._propKeys || [];
        for (var i = 0; i < propKeys.length; i++) {
          var key = propKeys[i];
          var propOptions = vm.$options.props; // wtf flow?
          props[key] = validateProp(key, propOptions, propsData, vm);
        }
        toggleObserving(true);
        // keep a copy of raw propsData
        vm.$options.propsData = propsData;
      }
  
      // update listeners
      listeners = listeners || emptyObject;
      var oldListeners = vm.$options._parentListeners;
      vm.$options._parentListeners = listeners;
      updateComponentListeners(vm, listeners, oldListeners);
  
      // resolve slots + force update if has children
      if (needsForceUpdate) {
        vm.$slots = resolveSlots(renderChildren, parentVnode.context);
        vm.$forceUpdate();
      }
  
      {
        isUpdatingChildComponent = false;
      }
    }
  
    function isInInactiveTree (vm) {
      while (vm && (vm = vm.$parent)) {
        if (vm._inactive) { return true }
      }
      return false
    }
  
    function activateChildComponent (vm, direct) {
      if (direct) {
        vm._directInactive = false;
        if (isInInactiveTree(vm)) {
          return
        }
      } else if (vm._directInactive) {
        return
      }
      if (vm._inactive || vm._inactive === null) {
        vm._inactive = false;
        for (var i = 0; i < vm.$children.length; i++) {
          activateChildComponent(vm.$children[i]);
        }
        callHook(vm, 'activated');
      }
    }
  
    function deactivateChildComponent (vm, direct) {
      if (direct) {
        vm._directInactive = true;
        if (isInInactiveTree(vm)) {
          return
        }
      }
      if (!vm._inactive) {
        vm._inactive = true;
        for (var i = 0; i < vm.$children.length; i++) {
          deactivateChildComponent(vm.$children[i]);
        }
        callHook(vm, 'deactivated');
      }
    }
  
    function callHook (vm, hook) {
      // #7573 disable dep collection when invoking lifecycle hooks
      pushTarget();
      var handlers = vm.$options[hook];
      var info = hook + " hook";
      if (handlers) {
        for (var i = 0, j = handlers.length; i < j; i++) {
          invokeWithErrorHandling(handlers[i], vm, null, vm, info);
        }
      }
      if (vm._hasHookEvent) {
        vm.$emit('hook:' + hook);
      }
      popTarget();
    }
  
    /*  */
  
    var MAX_UPDATE_COUNT = 100;
  
    var queue = [];
    var activatedChildren = [];
    var has = {};
    var circular = {};
    var waiting = false;
    var flushing = false;
    var index = 0;
  
    /**
     * Reset the scheduler's state.
     */
    function resetSchedulerState () {
      index = queue.length = activatedChildren.length = 0;
      has = {};
      {
        circular = {};
      }
      waiting = flushing = false;
    }
  
    // Async edge case #6566 requires saving the timestamp when event listeners are
    // attached. However, calling performance.now() has a perf overhead especially
    // if the page has thousands of event listeners. Instead, we take a timestamp
    // every time the scheduler flushes and use that for all event listeners
    // attached during that flush.
    var currentFlushTimestamp = 0;
  
    // Async edge case fix requires storing an event listener's attach timestamp.
    var getNow = Date.now;
  
    // Determine what event timestamp the browser is using. Annoyingly, the
    // timestamp can either be hi-res (relative to page load) or low-res
    // (relative to UNIX epoch), so in order to compare time we have to use the
    // same timestamp type when saving the flush timestamp.
    // All IE versions use low-res event timestamps, and have problematic clock
    // implementations (#9632)
    if (inBrowser && !isIE) {
      var performance = window.performance;
      if (
        performance &&
        typeof performance.now === 'function' &&
        getNow() > document.createEvent('Event').timeStamp
      ) {
        // if the event timestamp, although evaluated AFTER the Date.now(), is
        // smaller than it, it means the event is using a hi-res timestamp,
        // and we need to use the hi-res version for event listener timestamps as
        // well.
        getNow = function () { return performance.now(); };
      }
    }
  
    /**
     * Flush both queues and run the watchers.
     */
    function flushSchedulerQueue () {
      currentFlushTimestamp = getNow();
      flushing = true;
      var watcher, id;
  
      // Sort queue before flush.
      // This ensures that:
      // 1. Components are updated from parent to child. (because parent is always
      //    created before the child)
      // 2. A component's user watchers are run before its render watcher (because
      //    user watchers are created before the render watcher)
      // 3. If a component is destroyed during a parent component's watcher run,
      //    its watchers can be skipped.
      queue.sort(function (a, b) { return a.id - b.id; });
  
      // do not cache length because more watchers might be pushed
      // as we run existing watchers
      for (index = 0; index < queue.length; index++) {
        watcher = queue[index];
        if (watcher.before) {
          watcher.before();
        }
        id = watcher.id;
        has[id] = null;
        watcher.run();
        // in dev build, check and stop circular updates.
        if (has[id] != null) {
          circular[id] = (circular[id] || 0) + 1;
          if (circular[id] > MAX_UPDATE_COUNT) {
            warn(
              'You may have an infinite update loop ' + (
                watcher.user
                  ? ("in watcher with expression \"" + (watcher.expression) + "\"")
                  : "in a component render function."
              ),
              watcher.vm
            );
            break
          }
        }
      }
  
      // keep copies of post queues before resetting state
      var activatedQueue = activatedChildren.slice();
      var updatedQueue = queue.slice();
  
      resetSchedulerState();
  
      // call component updated and activated hooks
      callActivatedHooks(activatedQueue);
      callUpdatedHooks(updatedQueue);
  
      // devtool hook
      /* istanbul ignore if */
      if (devtools && config.devtools) {
        devtools.emit('flush');
      }
    }
  
    function callUpdatedHooks (queue) {
      var i = queue.length;
      while (i--) {
        var watcher = queue[i];
        var vm = watcher.vm;
        if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
          callHook(vm, 'updated');
        }
      }
    }
  
    /**
     * Queue a kept-alive component that was activated during patch.
     * The queue will be processed after the entire tree has been patched.
     */
    function queueActivatedComponent (vm) {
      // setting _inactive to false here so that a render function can
      // rely on checking whether it's in an inactive tree (e.g. router-view)
      vm._inactive = false;
      activatedChildren.push(vm);
    }
  
    function callActivatedHooks (queue) {
      for (var i = 0; i < queue.length; i++) {
        queue[i]._inactive = true;
        activateChildComponent(queue[i], true /* true */);
      }
    }
  
    /**
     * Push a watcher into the watcher queue.
     * Jobs with duplicate IDs will be skipped unless it's
     * pushed when the queue is being flushed.
     */
    function queueWatcher (watcher) {
      var id = watcher.id;
      if (has[id] == null) {
        has[id] = true;
        if (!flushing) {
          queue.push(watcher);
        } else {
          // if already flushing, splice the watcher based on its id
          // if already past its id, it will be run next immediately.
          var i = queue.length - 1;
          while (i > index && queue[i].id > watcher.id) {
            i--;
          }
          queue.splice(i + 1, 0, watcher);
        }
        // queue the flush
        if (!waiting) {
          waiting = true;
  
          if (!config.async) {
            flushSchedulerQueue();
            return
          }
          nextTick(flushSchedulerQueue);
        }
      }
    }
  
    /*  */
  
  
  
    var uid$2 = 0;
  
    /**
     * A watcher parses an expression, collects dependencies,
     * and fires callback when the expression value changes.
     * This is used for both the $watch() api and directives.
     */
    var Watcher = function Watcher (
      vm,
      expOrFn,
      cb,
      options,
      isRenderWatcher
    ) {
      this.vm = vm;
      if (isRenderWatcher) {
        vm._watcher = this;
      }
      vm._watchers.push(this);
      // options
      if (options) {
        this.deep = !!options.deep;
        this.user = !!options.user;
        this.lazy = !!options.lazy;
        this.sync = !!options.sync;
        this.before = options.before;
      } else {
        this.deep = this.user = this.lazy = this.sync = false;
      }
      this.cb = cb;
      this.id = ++uid$2; // uid for batching
      this.active = true;
      this.dirty = this.lazy; // for lazy watchers
      this.deps = [];
      this.newDeps = [];
      this.depIds = new _Set();
      this.newDepIds = new _Set();
      this.expression = expOrFn.toString();
      // parse expression for getter
      if (typeof expOrFn === 'function') {
        this.getter = expOrFn;
      } else {
        this.getter = parsePath(expOrFn);
        if (!this.getter) {
          this.getter = noop;
          warn(
            "Failed watching path: \"" + expOrFn + "\" " +
            'Watcher only accepts simple dot-delimited paths. ' +
            'For full control, use a function instead.',
            vm
          );
        }
      }
      this.value = this.lazy
        ? undefined
        : this.get();
    };
  
    /**
     * Evaluate the getter, and re-collect dependencies.
     */
    Watcher.prototype.get = function get () {
      pushTarget(this);
      var value;
      var vm = this.vm;
      try {
        value = this.getter.call(vm, vm);
      } catch (e) {
        if (this.user) {
          handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
        } else {
          throw e
        }
      } finally {
        // "touch" every property so they are all tracked as
        // dependencies for deep watching
        if (this.deep) {
          traverse(value);
        }
        popTarget();
        this.cleanupDeps();
      }
      return value
    };
  
    /**
     * Add a dependency to this directive.
     */
    Watcher.prototype.addDep = function addDep (dep) {
      var id = dep.id;
      if (!this.newDepIds.has(id)) {
        this.newDepIds.add(id);
        this.newDeps.push(dep);
        if (!this.depIds.has(id)) {
          dep.addSub(this);
        }
      }
    };
  
    /**
     * Clean up for dependency collection.
     */
    Watcher.prototype.cleanupDeps = function cleanupDeps () {
      var i = this.deps.length;
      while (i--) {
        var dep = this.deps[i];
        if (!this.newDepIds.has(dep.id)) {
          dep.removeSub(this);
        }
      }
      var tmp = this.depIds;
      this.depIds = this.newDepIds;
      this.newDepIds = tmp;
      this.newDepIds.clear();
      tmp = this.deps;
      this.deps = this.newDeps;
      this.newDeps = tmp;
      this.newDeps.length = 0;
    };
  
    /**
     * Subscriber interface.
     * Will be called when a dependency changes.
     */
    Watcher.prototype.update = function update () {
      /* istanbul ignore else */
      if (this.lazy) {
        this.dirty = true;
      } else if (this.sync) {
        this.run();
      } else {
        queueWatcher(this);
      }
    };
  
    /**
     * Scheduler job interface.
     * Will be called by the scheduler.
     */
    Watcher.prototype.run = function run () {
      if (this.active) {
        var value = this.get();
        if (
          value !== this.value ||
          // Deep watchers and watchers on Object/Arrays should fire even
          // when the value is the same, because the value may
          // have mutated.
          isObject(value) ||
          this.deep
        ) {
          // set new value
          var oldValue = this.value;
          this.value = value;
          if (this.user) {
            try {
              this.cb.call(this.vm, value, oldValue);
            } catch (e) {
              handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
            }
          } else {
            this.cb.call(this.vm, value, oldValue);
          }
        }
      }
    };
  
    /**
     * Evaluate the value of the watcher.
     * This only gets called for lazy watchers.
     */
    Watcher.prototype.evaluate = function evaluate () {
      this.value = this.get();
      this.dirty = false;
    };
  
    /**
     * Depend on all deps collected by this watcher.
     */
    Watcher.prototype.depend = function depend () {
      var i = this.deps.length;
      while (i--) {
        this.deps[i].depend();
      }
    };
  
    /**
     * Remove self from all dependencies' subscriber list.
     */
    Watcher.prototype.teardown = function teardown () {
      if (this.active) {
        // remove self from vm's watcher list
        // this is a somewhat expensive operation so we skip it
        // if the vm is being destroyed.
        if (!this.vm._isBeingDestroyed) {
          remove(this.vm._watchers, this);
        }
        var i = this.deps.length;
        while (i--) {
          this.deps[i].removeSub(this);
        }
        this.active = false;
      }
    };
  
    /*  */
  
    var sharedPropertyDefinition = {
      enumerable: true,
      configurable: true,
      get: noop,
      set: noop
    };
  
    function proxy (target, sourceKey, key) {
      sharedPropertyDefinition.get = function proxyGetter () {
        return this[sourceKey][key]
      };
      sharedPropertyDefinition.set = function proxySetter (val) {
        this[sourceKey][key] = val;
      };
      Object.defineProperty(target, key, sharedPropertyDefinition);
    }
  
    function initState (vm) {
      vm._watchers = [];
      var opts = vm.$options;
      if (opts.props) { initProps(vm, opts.props); }
      if (opts.methods) { initMethods(vm, opts.methods); }
      if (opts.data) {
        initData(vm);
      } else {
        observe(vm._data = {}, true /* asRootData */);
      }
      if (opts.computed) { initComputed(vm, opts.computed); }
      if (opts.watch && opts.watch !== nativeWatch) {
        initWatch(vm, opts.watch);
      }
    }
  
    function initProps (vm, propsOptions) {
      var propsData = vm.$options.propsData || {};
      var props = vm._props = {};
      // cache prop keys so that future props updates can iterate using Array
      // instead of dynamic object key enumeration.
      var keys = vm.$options._propKeys = [];
      var isRoot = !vm.$parent;
      // root instance props should be converted
      if (!isRoot) {
        toggleObserving(false);
      }
      var loop = function ( key ) {
        keys.push(key);
        var value = validateProp(key, propsOptions, propsData, vm);
        /* istanbul ignore else */
        {
          var hyphenatedKey = hyphenate(key);
          if (isReservedAttribute(hyphenatedKey) ||
              config.isReservedAttr(hyphenatedKey)) {
            warn(
              ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
              vm
            );
          }
          defineReactive$$1(props, key, value, function () {
            if (!isRoot && !isUpdatingChildComponent) {
              warn(
                "Avoid mutating a prop directly since the value will be " +
                "overwritten whenever the parent component re-renders. " +
                "Instead, use a data or computed property based on the prop's " +
                "value. Prop being mutated: \"" + key + "\"",
                vm
              );
            }
          });
        }
        // static props are already proxied on the component's prototype
        // during Vue.extend(). We only need to proxy props defined at
        // instantiation here.
        if (!(key in vm)) {
          proxy(vm, "_props", key);
        }
      };
  
      for (var key in propsOptions) loop( key );
      toggleObserving(true);
    }
  
    function initData (vm) {
      var data = vm.$options.data;
      data = vm._data = typeof data === 'function'
        ? getData(data, vm)
        : data || {};
      if (!isPlainObject(data)) {
        data = {};
        warn(
          'data functions should return an object:\n' +
          'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
          vm
        );
      }
      // proxy data on instance
      var keys = Object.keys(data);
      var props = vm.$options.props;
      var methods = vm.$options.methods;
      var i = keys.length;
      while (i--) {
        var key = keys[i];
        {
          if (methods && hasOwn(methods, key)) {
            warn(
              ("Method \"" + key + "\" has already been defined as a data property."),
              vm
            );
          }
        }
        if (props && hasOwn(props, key)) {
          warn(
            "The data property \"" + key + "\" is already declared as a prop. " +
            "Use prop default value instead.",
            vm
          );
        } else if (!isReserved(key)) {
          proxy(vm, "_data", key);
        }
      }
      // observe data
      observe(data, true /* asRootData */);
    }
  
    function getData (data, vm) {
      // #7573 disable dep collection when invoking data getters
      pushTarget();
      try {
        return data.call(vm, vm)
      } catch (e) {
        handleError(e, vm, "data()");
        return {}
      } finally {
        popTarget();
      }
    }
  
    var computedWatcherOptions = { lazy: true };
  
    function initComputed (vm, computed) {
      // $flow-disable-line
      var watchers = vm._computedWatchers = Object.create(null);
      // computed properties are just getters during SSR
      var isSSR = isServerRendering();
  
      for (var key in computed) {
        var userDef = computed[key];
        var getter = typeof userDef === 'function' ? userDef : userDef.get;
        if (getter == null) {
          warn(
            ("Getter is missing for computed property \"" + key + "\"."),
            vm
          );
        }
  
        if (!isSSR) {
          // create internal watcher for the computed property.
          watchers[key] = new Watcher(
            vm,
            getter || noop,
            noop,
            computedWatcherOptions
          );
        }
  
        // component-defined computed properties are already defined on the
        // component prototype. We only need to define computed properties defined
        // at instantiation here.
        if (!(key in vm)) {
          defineComputed(vm, key, userDef);
        } else {
          if (key in vm.$data) {
            warn(("The computed property \"" + key + "\" is already defined in data."), vm);
          } else if (vm.$options.props && key in vm.$options.props) {
            warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
          }
        }
      }
    }
  
    function defineComputed (
      target,
      key,
      userDef
    ) {
      var shouldCache = !isServerRendering();
      if (typeof userDef === 'function') {
        sharedPropertyDefinition.get = shouldCache
          ? createComputedGetter(key)
          : createGetterInvoker(userDef);
        sharedPropertyDefinition.set = noop;
      } else {
        sharedPropertyDefinition.get = userDef.get
          ? shouldCache && userDef.cache !== false
            ? createComputedGetter(key)
            : createGetterInvoker(userDef.get)
          : noop;
        sharedPropertyDefinition.set = userDef.set || noop;
      }
      if (sharedPropertyDefinition.set === noop) {
        sharedPropertyDefinition.set = function () {
          warn(
            ("Computed property \"" + key + "\" was assigned to but it has no setter."),
            this
          );
        };
      }
      Object.defineProperty(target, key, sharedPropertyDefinition);
    }
  
    function createComputedGetter (key) {
      return function computedGetter () {
        var watcher = this._computedWatchers && this._computedWatchers[key];
        if (watcher) {
          if (watcher.dirty) {
            watcher.evaluate();
          }
          if (Dep.target) {
            watcher.depend();
          }
          return watcher.value
        }
      }
    }
  
    function createGetterInvoker(fn) {
      return function computedGetter () {
        return fn.call(this, this)
      }
    }
  
    function initMethods (vm, methods) {
      var props = vm.$options.props;
      for (var key in methods) {
        {
          if (typeof methods[key] !== 'function') {
            warn(
              "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
              "Did you reference the function correctly?",
              vm
            );
          }
          if (props && hasOwn(props, key)) {
            warn(
              ("Method \"" + key + "\" has already been defined as a prop."),
              vm
            );
          }
          if ((key in vm) && isReserved(key)) {
            warn(
              "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
              "Avoid defining component methods that start with _ or $."
            );
          }
        }
        vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
      }
    }
  
    function initWatch (vm, watch) {
      for (var key in watch) {
        var handler = watch[key];
        if (Array.isArray(handler)) {
          for (var i = 0; i < handler.length; i++) {
            createWatcher(vm, key, handler[i]);
          }
        } else {
          createWatcher(vm, key, handler);
        }
      }
    }
  
    function createWatcher (
      vm,
      expOrFn,
      handler,
      options
    ) {
      if (isPlainObject(handler)) {
        options = handler;
        handler = handler.handler;
      }
      if (typeof handler === 'string') {
        handler = vm[handler];
      }
      return vm.$watch(expOrFn, handler, options)
    }
  
    function stateMixin (Vue) {
      // flow somehow has problems with directly declared definition object
      // when using Object.defineProperty, so we have to procedurally build up
      // the object here.
      var dataDef = {};
      dataDef.get = function () { return this._data };
      var propsDef = {};
      propsDef.get = function () { return this._props };
      {
        dataDef.set = function () {
          warn(
            'Avoid replacing instance root $data. ' +
            'Use nested data properties instead.',
            this
          );
        };
        propsDef.set = function () {
          warn("$props is readonly.", this);
        };
      }
      Object.defineProperty(Vue.prototype, '$data', dataDef);
      Object.defineProperty(Vue.prototype, '$props', propsDef);
  
      Vue.prototype.$set = set;
      Vue.prototype.$delete = del;
  
      Vue.prototype.$watch = function (
        expOrFn,
        cb,
        options
      ) {
        var vm = this;
        if (isPlainObject(cb)) {
          return createWatcher(vm, expOrFn, cb, options)
        }
        options = options || {};
        options.user = true;
        var watcher = new Watcher(vm, expOrFn, cb, options);
        if (options.immediate) {
          try {
            cb.call(vm, watcher.value);
          } catch (error) {
            handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
          }
        }
        return function unwatchFn () {
          watcher.teardown();
        }
      };
    }
  
    /*  */
  
    var uid$3 = 0;
  
    function initMixin (Vue) {
      Vue.prototype._init = function (options) {
        var vm = this;
        // a uid
        vm._uid = uid$3++;
  
        var startTag, endTag;
        /* istanbul ignore if */
        if (config.performance && mark) {
          startTag = "vue-perf-start:" + (vm._uid);
          endTag = "vue-perf-end:" + (vm._uid);
          mark(startTag);
        }
  
        // a flag to avoid this being observed
        vm._isVue = true;
        // merge options
        if (options && options._isComponent) {
          // optimize internal component instantiation
          // since dynamic options merging is pretty slow, and none of the
          // internal component options needs special treatment.
          initInternalComponent(vm, options);
        } else {
          vm.$options = mergeOptions(
            resolveConstructorOptions(vm.constructor),
            options || {},
            vm
          );
        }
        /* istanbul ignore else */
        {
          initProxy(vm);
        }
        // expose real self
        vm._self = vm;
        initLifecycle(vm);
        initEvents(vm);
        initRender(vm);
        callHook(vm, 'beforeCreate');
        initInjections(vm); // resolve injections before data/props
        initState(vm);
        initProvide(vm); // resolve provide after data/props
        callHook(vm, 'created');
  
        /* istanbul ignore if */
        if (config.performance && mark) {
          vm._name = formatComponentName(vm, false);
          mark(endTag);
          measure(("vue " + (vm._name) + " init"), startTag, endTag);
        }
  
        if (vm.$options.el) {
          vm.$mount(vm.$options.el);
        }
      };
    }
  
    function initInternalComponent (vm, options) {
      var opts = vm.$options = Object.create(vm.constructor.options);
      // doing this because it's faster than dynamic enumeration.
      var parentVnode = options._parentVnode;
      opts.parent = options.parent;
      opts._parentVnode = parentVnode;
  
      var vnodeComponentOptions = parentVnode.componentOptions;
      opts.propsData = vnodeComponentOptions.propsData;
      opts._parentListeners = vnodeComponentOptions.listeners;
      opts._renderChildren = vnodeComponentOptions.children;
      opts._componentTag = vnodeComponentOptions.tag;
  
      if (options.render) {
        opts.render = options.render;
        opts.staticRenderFns = options.staticRenderFns;
      }
    }
  
    function resolveConstructorOptions (Ctor) {
      var options = Ctor.options;
      if (Ctor.super) {
        var superOptions = resolveConstructorOptions(Ctor.super);
        var cachedSuperOptions = Ctor.superOptions;
        if (superOptions !== cachedSuperOptions) {
          // super option changed,
          // need to resolve new options.
          Ctor.superOptions = superOptions;
          // check if there are any late-modified/attached options (#4976)
          var modifiedOptions = resolveModifiedOptions(Ctor);
          // update base extend options
          if (modifiedOptions) {
            extend(Ctor.extendOptions, modifiedOptions);
          }
          options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
          if (options.name) {
            options.components[options.name] = Ctor;
          }
        }
      }
      return options
    }
  
    function resolveModifiedOptions (Ctor) {
      var modified;
      var latest = Ctor.options;
      var sealed = Ctor.sealedOptions;
      for (var key in latest) {
        if (latest[key] !== sealed[key]) {
          if (!modified) { modified = {}; }
          modified[key] = latest[key];
        }
      }
      return modified
    }
  
    function Vue (options) {
      if (!(this instanceof Vue)
      ) {
        warn('Vue is a constructor and should be called with the `new` keyword');
      }
      this._init(options);
    }
  
    initMixin(Vue);
    stateMixin(Vue);
    eventsMixin(Vue);
    lifecycleMixin(Vue);
    renderMixin(Vue);
  
    /*  */
  
    function initUse (Vue) {
      Vue.use = function (plugin) {
        var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
        if (installedPlugins.indexOf(plugin) > -1) {
          return this
        }
  
        // additional parameters
        var args = toArray(arguments, 1);
        args.unshift(this);
        if (typeof plugin.install === 'function') {
          plugin.install.apply(plugin, args);
        } else if (typeof plugin === 'function') {
          plugin.apply(null, args);
        }
        installedPlugins.push(plugin);
        return this
      };
    }
  
    /*  */
  
    function initMixin$1 (Vue) {
      Vue.mixin = function (mixin) {
        this.options = mergeOptions(this.options, mixin);
        return this
      };
    }
  
    /*  */
  
    function initExtend (Vue) {
      /**
       * Each instance constructor, including Vue, has a unique
       * cid. This enables us to create wrapped "child
       * constructors" for prototypal inheritance and cache them.
       */
      Vue.cid = 0;
      var cid = 1;
  
      /**
       * Class inheritance
       */
      Vue.extend = function (extendOptions) {
        extendOptions = extendOptions || {};
        var Super = this;
        var SuperId = Super.cid;
        var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
        if (cachedCtors[SuperId]) {
          return cachedCtors[SuperId]
        }
  
        var name = extendOptions.name || Super.options.name;
        if (name) {
          validateComponentName(name);
        }
  
        var Sub = function VueComponent (options) {
          this._init(options);
        };
        Sub.prototype = Object.create(Super.prototype);
        Sub.prototype.constructor = Sub;
        Sub.cid = cid++;
        Sub.options = mergeOptions(
          Super.options,
          extendOptions
        );
        Sub['super'] = Super;
  
        // For props and computed properties, we define the proxy getters on
        // the Vue instances at extension time, on the extended prototype. This
        // avoids Object.defineProperty calls for each instance created.
        if (Sub.options.props) {
          initProps$1(Sub);
        }
        if (Sub.options.computed) {
          initComputed$1(Sub);
        }
  
        // allow further extension/mixin/plugin usage
        Sub.extend = Super.extend;
        Sub.mixin = Super.mixin;
        Sub.use = Super.use;
  
        // create asset registers, so extended classes
        // can have their private assets too.
        ASSET_TYPES.forEach(function (type) {
          Sub[type] = Super[type];
        });
        // enable recursive self-lookup
        if (name) {
          Sub.options.components[name] = Sub;
        }
  
        // keep a reference to the super options at extension time.
        // later at instantiation we can check if Super's options have
        // been updated.
        Sub.superOptions = Super.options;
        Sub.extendOptions = extendOptions;
        Sub.sealedOptions = extend({}, Sub.options);
  
        // cache constructor
        cachedCtors[SuperId] = Sub;
        return Sub
      };
    }
  
    function initProps$1 (Comp) {
      var props = Comp.options.props;
      for (var key in props) {
        proxy(Comp.prototype, "_props", key);
      }
    }
  
    function initComputed$1 (Comp) {
      var computed = Comp.options.computed;
      for (var key in computed) {
        defineComputed(Comp.prototype, key, computed[key]);
      }
    }
  
    /*  */
  
    function initAssetRegisters (Vue) {
      /**
       * Create asset registration methods.
       */
      ASSET_TYPES.forEach(function (type) {
        Vue[type] = function (
          id,
          definition
        ) {
          if (!definition) {
            return this.options[type + 's'][id]
          } else {
            /* istanbul ignore if */
            if (type === 'component') {
              validateComponentName(id);
            }
            if (type === 'component' && isPlainObject(definition)) {
              definition.name = definition.name || id;
              definition = this.options._base.extend(definition);
            }
            if (type === 'directive' && typeof definition === 'function') {
              definition = { bind: definition, update: definition };
            }
            this.options[type + 's'][id] = definition;
            return definition
          }
        };
      });
    }
  
    /*  */
  
  
  
    function getComponentName (opts) {
      return opts && (opts.Ctor.options.name || opts.tag)
    }
  
    function matches (pattern, name) {
      if (Array.isArray(pattern)) {
        return pattern.indexOf(name) > -1
      } else if (typeof pattern === 'string') {
        return pattern.split(',').indexOf(name) > -1
      } else if (isRegExp(pattern)) {
        return pattern.test(name)
      }
      /* istanbul ignore next */
      return false
    }
  
    function pruneCache (keepAliveInstance, filter) {
      var cache = keepAliveInstance.cache;
      var keys = keepAliveInstance.keys;
      var _vnode = keepAliveInstance._vnode;
      for (var key in cache) {
        var cachedNode = cache[key];
        if (cachedNode) {
          var name = getComponentName(cachedNode.componentOptions);
          if (name && !filter(name)) {
            pruneCacheEntry(cache, key, keys, _vnode);
          }
        }
      }
    }
  
    function pruneCacheEntry (
      cache,
      key,
      keys,
      current
    ) {
      var cached$$1 = cache[key];
      if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
        cached$$1.componentInstance.$destroy();
      }
      cache[key] = null;
      remove(keys, key);
    }
  
    var patternTypes = [String, RegExp, Array];
  
    var KeepAlive = {
      name: 'keep-alive',
      abstract: true,
  
      props: {
        include: patternTypes,
        exclude: patternTypes,
        max: [String, Number]
      },
  
      created: function created () {
        this.cache = Object.create(null);
        this.keys = [];
      },
  
      destroyed: function destroyed () {
        for (var key in this.cache) {
          pruneCacheEntry(this.cache, key, this.keys);
        }
      },
  
      mounted: function mounted () {
        var this$1 = this;
  
        this.$watch('include', function (val) {
          pruneCache(this$1, function (name) { return matches(val, name); });
        });
        this.$watch('exclude', function (val) {
          pruneCache(this$1, function (name) { return !matches(val, name); });
        });
      },
  
      render: function render () {
        var slot = this.$slots.default;
        var vnode = getFirstComponentChild(slot);
        var componentOptions = vnode && vnode.componentOptions;
        if (componentOptions) {
          // check pattern
          var name = getComponentName(componentOptions);
          var ref = this;
          var include = ref.include;
          var exclude = ref.exclude;
          if (
            // not included
            (include && (!name || !matches(include, name))) ||
            // excluded
            (exclude && name && matches(exclude, name))
          ) {
            return vnode
          }
  
          var ref$1 = this;
          var cache = ref$1.cache;
          var keys = ref$1.keys;
          var key = vnode.key == null
            // same constructor may get registered as different local components
            // so cid alone is not enough (#3269)
            ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
            : vnode.key;
          if (cache[key]) {
            vnode.componentInstance = cache[key].componentInstance;
            // make current key freshest
            remove(keys, key);
            keys.push(key);
          } else {
            cache[key] = vnode;
            keys.push(key);
            // prune oldest entry
            if (this.max && keys.length > parseInt(this.max)) {
              pruneCacheEntry(cache, keys[0], keys, this._vnode);
            }
          }
  
          vnode.data.keepAlive = true;
        }
        return vnode || (slot && slot[0])
      }
    };
  
    var builtInComponents = {
      KeepAlive: KeepAlive
    };
  
    /*  */
  
    function initGlobalAPI (Vue) {
      // config
      var configDef = {};
      configDef.get = function () { return config; };
      {
        configDef.set = function () {
          warn(
            'Do not replace the Vue.config object, set individual fields instead.'
          );
        };
      }
      Object.defineProperty(Vue, 'config', configDef);
  
      // exposed util methods.
      // NOTE: these are not considered part of the public API - avoid relying on
      // them unless you are aware of the risk.
      Vue.util = {
        warn: warn,
        extend: extend,
        mergeOptions: mergeOptions,
        defineReactive: defineReactive$$1
      };
  
      Vue.set = set;
      Vue.delete = del;
      Vue.nextTick = nextTick;
  
      // 2.6 explicit observable API
      Vue.observable = function (obj) {
        observe(obj);
        return obj
      };
  
      Vue.options = Object.create(null);
      ASSET_TYPES.forEach(function (type) {
        Vue.options[type + 's'] = Object.create(null);
      });
  
      // this is used to identify the "base" constructor to extend all plain-object
      // components with in Weex's multi-instance scenarios.
      Vue.options._base = Vue;
  
      extend(Vue.options.components, builtInComponents);
  
      initUse(Vue);
      initMixin$1(Vue);
      initExtend(Vue);
      initAssetRegisters(Vue);
    }
  
    initGlobalAPI(Vue);
  
    Object.defineProperty(Vue.prototype, '$isServer', {
      get: isServerRendering
    });
  
    Object.defineProperty(Vue.prototype, '$ssrContext', {
      get: function get () {
        /* istanbul ignore next */
        return this.$vnode && this.$vnode.ssrContext
      }
    });
  
    // expose FunctionalRenderContext for ssr runtime helper installation
    Object.defineProperty(Vue, 'FunctionalRenderContext', {
      value: FunctionalRenderContext
    });
  
    Vue.version = '2.6.10';
  
    /*  */
  
    // these are reserved for web because they are directly compiled away
    // during template compilation
    var isReservedAttr = makeMap('style,class');
  
    // attributes that should be using props for binding
    var acceptValue = makeMap('input,textarea,option,select,progress');
    var mustUseProp = function (tag, type, attr) {
      return (
        (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
        (attr === 'selected' && tag === 'option') ||
        (attr === 'checked' && tag === 'input') ||
        (attr === 'muted' && tag === 'video')
      )
    };
  
    var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');
  
    var isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only');
  
    var convertEnumeratedValue = function (key, value) {
      return isFalsyAttrValue(value) || value === 'false'
        ? 'false'
        // allow arbitrary string value for contenteditable
        : key === 'contenteditable' && isValidContentEditableValue(value)
          ? value
          : 'true'
    };
  
    var isBooleanAttr = makeMap(
      'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
      'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
      'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
      'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
      'required,reversed,scoped,seamless,selected,sortable,translate,' +
      'truespeed,typemustmatch,visible'
    );
  
    var xlinkNS = 'http://www.w3.org/1999/xlink';
  
    var isXlink = function (name) {
      return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
    };
  
    var getXlinkProp = function (name) {
      return isXlink(name) ? name.slice(6, name.length) : ''
    };
  
    var isFalsyAttrValue = function (val) {
      return val == null || val === false
    };
  
    /*  */
  
    function genClassForVnode (vnode) {
      var data = vnode.data;
      var parentNode = vnode;
      var childNode = vnode;
      while (isDef(childNode.componentInstance)) {
        childNode = childNode.componentInstance._vnode;
        if (childNode && childNode.data) {
          data = mergeClassData(childNode.data, data);
        }
      }
      while (isDef(parentNode = parentNode.parent)) {
        if (parentNode && parentNode.data) {
          data = mergeClassData(data, parentNode.data);
        }
      }
      return renderClass(data.staticClass, data.class)
    }
  
    function mergeClassData (child, parent) {
      return {
        staticClass: concat(child.staticClass, parent.staticClass),
        class: isDef(child.class)
          ? [child.class, parent.class]
          : parent.class
      }
    }
  
    function renderClass (
      staticClass,
      dynamicClass
    ) {
      if (isDef(staticClass) || isDef(dynamicClass)) {
        return concat(staticClass, stringifyClass(dynamicClass))
      }
      /* istanbul ignore next */
      return ''
    }
  
    function concat (a, b) {
      return a ? b ? (a + ' ' + b) : a : (b || '')
    }
  
    function stringifyClass (value) {
      if (Array.isArray(value)) {
        return stringifyArray(value)
      }
      if (isObject(value)) {
        return stringifyObject(value)
      }
      if (typeof value === 'string') {
        return value
      }
      /* istanbul ignore next */
      return ''
    }
  
    function stringifyArray (value) {
      var res = '';
      var stringified;
      for (var i = 0, l = value.length; i < l; i++) {
        if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
          if (res) { res += ' '; }
          res += stringified;
        }
      }
      return res
    }
  
    function stringifyObject (value) {
      var res = '';
      for (var key in value) {
        if (value[key]) {
          if (res) { res += ' '; }
          res += key;
        }
      }
      return res
    }
  
    /*  */
  
    var namespaceMap = {
      svg: 'http://www.w3.org/2000/svg',
      math: 'http://www.w3.org/1998/Math/MathML'
    };
  
    var isHTMLTag = makeMap(
      'html,body,base,head,link,meta,style,title,' +
      'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
      'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
      'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
      's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
      'embed,object,param,source,canvas,script,noscript,del,ins,' +
      'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
      'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
      'output,progress,select,textarea,' +
      'details,dialog,menu,menuitem,summary,' +
      'content,element,shadow,template,blockquote,iframe,tfoot'
    );
  
    // this map is intentionally selective, only covering SVG elements that may
    // contain child elements.
    var isSVG = makeMap(
      'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
      'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
      'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
      true
    );
  
    var isPreTag = function (tag) { return tag === 'pre'; };
  
    var isReservedTag = function (tag) {
      return isHTMLTag(tag) || isSVG(tag)
    };
  
    function getTagNamespace (tag) {
      if (isSVG(tag)) {
        return 'svg'
      }
      // basic support for MathML
      // note it doesn't support other MathML elements being component roots
      if (tag === 'math') {
        return 'math'
      }
    }
  
    var unknownElementCache = Object.create(null);
    function isUnknownElement (tag) {
      /* istanbul ignore if */
      if (!inBrowser) {
        return true
      }
      if (isReservedTag(tag)) {
        return false
      }
      tag = tag.toLowerCase();
      /* istanbul ignore if */
      if (unknownElementCache[tag] != null) {
        return unknownElementCache[tag]
      }
      var el = document.createElement(tag);
      if (tag.indexOf('-') > -1) {
        // http://stackoverflow.com/a/28210364/1070244
        return (unknownElementCache[tag] = (
          el.constructor === window.HTMLUnknownElement ||
          el.constructor === window.HTMLElement
        ))
      } else {
        return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
      }
    }
  
    var isTextInputType = makeMap('text,number,password,search,email,tel,url');
  
    /*  */
  
    /**
     * Query an element selector if it's not an element already.
     */
    function query (el) {
      if (typeof el === 'string') {
        var selected = document.querySelector(el);
        if (!selected) {
          warn(
            'Cannot find element: ' + el
          );
          return document.createElement('div')
        }
        return selected
      } else {
        return el
      }
    }
  
    /*  */
  
    function createElement$1 (tagName, vnode) {
      var elm = document.createElement(tagName);
      if (tagName !== 'select') {
        return elm
      }
      // false or null will remove the attribute but undefined will not
      if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
        elm.setAttribute('multiple', 'multiple');
      }
      return elm
    }
  
    function createElementNS (namespace, tagName) {
      return document.createElementNS(namespaceMap[namespace], tagName)
    }
  
    function createTextNode (text) {
      return document.createTextNode(text)
    }
  
    function createComment (text) {
      return document.createComment(text)
    }
  
    function insertBefore (parentNode, newNode, referenceNode) {
      parentNode.insertBefore(newNode, referenceNode);
    }
  
    function removeChild (node, child) {
      node.removeChild(child);
    }
  
    function appendChild (node, child) {
      node.appendChild(child);
    }
  
    function parentNode (node) {
      return node.parentNode
    }
  
    function nextSibling (node) {
      return node.nextSibling
    }
  
    function tagName (node) {
      return node.tagName
    }
  
    function setTextContent (node, text) {
      node.textContent = text;
    }
  
    function setStyleScope (node, scopeId) {
      node.setAttribute(scopeId, '');
    }
  
    var nodeOps = /*#__PURE__*/Object.freeze({
      createElement: createElement$1,
      createElementNS: createElementNS,
      createTextNode: createTextNode,
      createComment: createComment,
      insertBefore: insertBefore,
      removeChild: removeChild,
      appendChild: appendChild,
      parentNode: parentNode,
      nextSibling: nextSibling,
      tagName: tagName,
      setTextContent: setTextContent,
      setStyleScope: setStyleScope
    });
  
    /*  */
  
    var ref = {
      create: function create (_, vnode) {
        registerRef(vnode);
      },
      update: function update (oldVnode, vnode) {
        if (oldVnode.data.ref !== vnode.data.ref) {
          registerRef(oldVnode, true);
          registerRef(vnode);
        }
      },
      destroy: function destroy (vnode) {
        registerRef(vnode, true);
      }
    };
  
    function registerRef (vnode, isRemoval) {
      var key = vnode.data.ref;
      if (!isDef(key)) { return }
  
      var vm = vnode.context;
      var ref = vnode.componentInstance || vnode.elm;
      var refs = vm.$refs;
      if (isRemoval) {
        if (Array.isArray(refs[key])) {
          remove(refs[key], ref);
        } else if (refs[key] === ref) {
          refs[key] = undefined;
        }
      } else {
        if (vnode.data.refInFor) {
          if (!Array.isArray(refs[key])) {
            refs[key] = [ref];
          } else if (refs[key].indexOf(ref) < 0) {
            // $flow-disable-line
            refs[key].push(ref);
          }
        } else {
          refs[key] = ref;
        }
      }
    }
  
    /**
     * Virtual DOM patching algorithm based on Snabbdom by
     * Simon Friis Vindum (@paldepind)
     * Licensed under the MIT License
     * https://github.com/paldepind/snabbdom/blob/master/LICENSE
     *
     * modified by Evan You (@yyx990803)
     *
     * Not type-checking this because this file is perf-critical and the cost
     * of making flow understand it is not worth it.
     */
  
    var emptyNode = new VNode('', {}, []);
  
    var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];
  
    function sameVnode (a, b) {
      return (
        a.key === b.key && (
          (
            a.tag === b.tag &&
            a.isComment === b.isComment &&
            isDef(a.data) === isDef(b.data) &&
            sameInputType(a, b)
          ) || (
            isTrue(a.isAsyncPlaceholder) &&
            a.asyncFactory === b.asyncFactory &&
            isUndef(b.asyncFactory.error)
          )
        )
      )
    }
  
    function sameInputType (a, b) {
      if (a.tag !== 'input') { return true }
      var i;
      var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
      var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
      return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
    }
  
    function createKeyToOldIdx (children, beginIdx, endIdx) {
      var i, key;
      var map = {};
      for (i = beginIdx; i <= endIdx; ++i) {
        key = children[i].key;
        if (isDef(key)) { map[key] = i; }
      }
      return map
    }
  
    function createPatchFunction (backend) {
      var i, j;
      var cbs = {};
  
      var modules = backend.modules;
      var nodeOps = backend.nodeOps;
  
      for (i = 0; i < hooks.length; ++i) {
        cbs[hooks[i]] = [];
        for (j = 0; j < modules.length; ++j) {
          if (isDef(modules[j][hooks[i]])) {
            cbs[hooks[i]].push(modules[j][hooks[i]]);
          }
        }
      }
  
      function emptyNodeAt (elm) {
        return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
      }
  
      function createRmCb (childElm, listeners) {
        function remove$$1 () {
          if (--remove$$1.listeners === 0) {
            removeNode(childElm);
          }
        }
        remove$$1.listeners = listeners;
        return remove$$1
      }
  
      function removeNode (el) {
        var parent = nodeOps.parentNode(el);
        // element may have already been removed due to v-html / v-text
        if (isDef(parent)) {
          nodeOps.removeChild(parent, el);
        }
      }
  
      function isUnknownElement$$1 (vnode, inVPre) {
        return (
          !inVPre &&
          !vnode.ns &&
          !(
            config.ignoredElements.length &&
            config.ignoredElements.some(function (ignore) {
              return isRegExp(ignore)
                ? ignore.test(vnode.tag)
                : ignore === vnode.tag
            })
          ) &&
          config.isUnknownElement(vnode.tag)
        )
      }
  
      var creatingElmInVPre = 0;
  
      function createElm (
        vnode,
        insertedVnodeQueue,
        parentElm,
        refElm,
        nested,
        ownerArray,
        index
      ) {
        if (isDef(vnode.elm) && isDef(ownerArray)) {
          // This vnode was used in a previous render!
          // now it's used as a new node, overwriting its elm would cause
          // potential patch errors down the road when it's used as an insertion
          // reference node. Instead, we clone the node on-demand before creating
          // associated DOM element for it.
          vnode = ownerArray[index] = cloneVNode(vnode);
        }
  
        vnode.isRootInsert = !nested; // for transition enter check
        if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
          return
        }
  
        var data = vnode.data;
        var children = vnode.children;
        var tag = vnode.tag;
        if (isDef(tag)) {
          {
            if (data && data.pre) {
              creatingElmInVPre++;
            }
            if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
              warn(
                'Unknown custom element: <' + tag + '> - did you ' +
                'register the component correctly? For recursive components, ' +
                'make sure to provide the "name" option.',
                vnode.context
              );
            }
          }
  
          vnode.elm = vnode.ns
            ? nodeOps.createElementNS(vnode.ns, tag)
            : nodeOps.createElement(tag, vnode);
          setScope(vnode);
  
          /* istanbul ignore if */
          {
            createChildren(vnode, children, insertedVnodeQueue);
            if (isDef(data)) {
              invokeCreateHooks(vnode, insertedVnodeQueue);
            }
            insert(parentElm, vnode.elm, refElm);
          }
  
          if (data && data.pre) {
            creatingElmInVPre--;
          }
        } else if (isTrue(vnode.isComment)) {
          vnode.elm = nodeOps.createComment(vnode.text);
          insert(parentElm, vnode.elm, refElm);
        } else {
          vnode.elm = nodeOps.createTextNode(vnode.text);
          insert(parentElm, vnode.elm, refElm);
        }
      }
  
      function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
        var i = vnode.data;
        if (isDef(i)) {
          var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
          if (isDef(i = i.hook) && isDef(i = i.init)) {
            i(vnode, false /* hydrating */);
          }
          // after calling the init hook, if the vnode is a child component
          // it should've created a child instance and mounted it. the child
          // component also has set the placeholder vnode's elm.
          // in that case we can just return the element and be done.
          if (isDef(vnode.componentInstance)) {
            initComponent(vnode, insertedVnodeQueue);
            insert(parentElm, vnode.elm, refElm);
            if (isTrue(isReactivated)) {
              reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
            }
            return true
          }
        }
      }
  
      function initComponent (vnode, insertedVnodeQueue) {
        if (isDef(vnode.data.pendingInsert)) {
          insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
          vnode.data.pendingInsert = null;
        }
        vnode.elm = vnode.componentInstance.$el;
        if (isPatchable(vnode)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
          setScope(vnode);
        } else {
          // empty component root.
          // skip all element-related modules except for ref (#3455)
          registerRef(vnode);
          // make sure to invoke the insert hook
          insertedVnodeQueue.push(vnode);
        }
      }
  
      function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
        var i;
        // hack for #4339: a reactivated component with inner transition
        // does not trigger because the inner node's created hooks are not called
        // again. It's not ideal to involve module-specific logic in here but
        // there doesn't seem to be a better way to do it.
        var innerNode = vnode;
        while (innerNode.componentInstance) {
          innerNode = innerNode.componentInstance._vnode;
          if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
            for (i = 0; i < cbs.activate.length; ++i) {
              cbs.activate[i](emptyNode, innerNode);
            }
            insertedVnodeQueue.push(innerNode);
            break
          }
        }
        // unlike a newly created component,
        // a reactivated keep-alive component doesn't insert itself
        insert(parentElm, vnode.elm, refElm);
      }
  
      function insert (parent, elm, ref$$1) {
        if (isDef(parent)) {
          if (isDef(ref$$1)) {
            if (nodeOps.parentNode(ref$$1) === parent) {
              nodeOps.insertBefore(parent, elm, ref$$1);
            }
          } else {
            nodeOps.appendChild(parent, elm);
          }
        }
      }
  
      function createChildren (vnode, children, insertedVnodeQueue) {
        if (Array.isArray(children)) {
          {
            checkDuplicateKeys(children);
          }
          for (var i = 0; i < children.length; ++i) {
            createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
          }
        } else if (isPrimitive(vnode.text)) {
          nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
        }
      }
  
      function isPatchable (vnode) {
        while (vnode.componentInstance) {
          vnode = vnode.componentInstance._vnode;
        }
        return isDef(vnode.tag)
      }
  
      function invokeCreateHooks (vnode, insertedVnodeQueue) {
        for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
          cbs.create[i$1](emptyNode, vnode);
        }
        i = vnode.data.hook; // Reuse variable
        if (isDef(i)) {
          if (isDef(i.create)) { i.create(emptyNode, vnode); }
          if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
        }
      }
  
      // set scope id attribute for scoped CSS.
      // this is implemented as a special case to avoid the overhead
      // of going through the normal attribute patching process.
      function setScope (vnode) {
        var i;
        if (isDef(i = vnode.fnScopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        } else {
          var ancestor = vnode;
          while (ancestor) {
            if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
              nodeOps.setStyleScope(vnode.elm, i);
            }
            ancestor = ancestor.parent;
          }
        }
        // for slot content they should also get the scopeId from the host instance.
        if (isDef(i = activeInstance) &&
          i !== vnode.context &&
          i !== vnode.fnContext &&
          isDef(i = i.$options._scopeId)
        ) {
          nodeOps.setStyleScope(vnode.elm, i);
        }
      }
  
      function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
        for (; startIdx <= endIdx; ++startIdx) {
          createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
        }
      }
  
      function invokeDestroyHook (vnode) {
        var i, j;
        var data = vnode.data;
        if (isDef(data)) {
          if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
          for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
        }
        if (isDef(i = vnode.children)) {
          for (j = 0; j < vnode.children.length; ++j) {
            invokeDestroyHook(vnode.children[j]);
          }
        }
      }
  
      function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
        for (; startIdx <= endIdx; ++startIdx) {
          var ch = vnodes[startIdx];
          if (isDef(ch)) {
            if (isDef(ch.tag)) {
              removeAndInvokeRemoveHook(ch);
              invokeDestroyHook(ch);
            } else { // Text node
              removeNode(ch.elm);
            }
          }
        }
      }
  
      function removeAndInvokeRemoveHook (vnode, rm) {
        if (isDef(rm) || isDef(vnode.data)) {
          var i;
          var listeners = cbs.remove.length + 1;
          if (isDef(rm)) {
            // we have a recursively passed down rm callback
            // increase the listeners count
            rm.listeners += listeners;
          } else {
            // directly removing
            rm = createRmCb(vnode.elm, listeners);
          }
          // recursively invoke hooks on child component root node
          if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
            removeAndInvokeRemoveHook(i, rm);
          }
          for (i = 0; i < cbs.remove.length; ++i) {
            cbs.remove[i](vnode, rm);
          }
          if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
            i(vnode, rm);
          } else {
            rm();
          }
        } else {
          removeNode(vnode.elm);
        }
      }
  
      function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
        var oldStartIdx = 0;
        var newStartIdx = 0;
        var oldEndIdx = oldCh.length - 1;
        var oldStartVnode = oldCh[0];
        var oldEndVnode = oldCh[oldEndIdx];
        var newEndIdx = newCh.length - 1;
        var newStartVnode = newCh[0];
        var newEndVnode = newCh[newEndIdx];
        var oldKeyToIdx, idxInOld, vnodeToMove, refElm;
  
        // removeOnly is a special flag used only by <transition-group>
        // to ensure removed elements stay in correct relative positions
        // during leaving transitions
        var canMove = !removeOnly;
  
        {
          checkDuplicateKeys(newCh);
        }
  
        while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
          if (isUndef(oldStartVnode)) {
            oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
          } else if (isUndef(oldEndVnode)) {
            oldEndVnode = oldCh[--oldEndIdx];
          } else if (sameVnode(oldStartVnode, newStartVnode)) {
            patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
            oldStartVnode = oldCh[++oldStartIdx];
            newStartVnode = newCh[++newStartIdx];
          } else if (sameVnode(oldEndVnode, newEndVnode)) {
            patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
            oldEndVnode = oldCh[--oldEndIdx];
            newEndVnode = newCh[--newEndIdx];
          } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
            patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
            canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
            oldStartVnode = oldCh[++oldStartIdx];
            newEndVnode = newCh[--newEndIdx];
          } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
            patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
            canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
            oldEndVnode = oldCh[--oldEndIdx];
            newStartVnode = newCh[++newStartIdx];
          } else {
            if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
            idxInOld = isDef(newStartVnode.key)
              ? oldKeyToIdx[newStartVnode.key]
              : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
            if (isUndef(idxInOld)) { // New element
              createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
            } else {
              vnodeToMove = oldCh[idxInOld];
              if (sameVnode(vnodeToMove, newStartVnode)) {
                patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
                oldCh[idxInOld] = undefined;
                canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
              } else {
                // same key but different element. treat as new element
                createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
              }
            }
            newStartVnode = newCh[++newStartIdx];
          }
        }
        if (oldStartIdx > oldEndIdx) {
          refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
          addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
        } else if (newStartIdx > newEndIdx) {
          removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
        }
      }
  
      function checkDuplicateKeys (children) {
        var seenKeys = {};
        for (var i = 0; i < children.length; i++) {
          var vnode = children[i];
          var key = vnode.key;
          if (isDef(key)) {
            if (seenKeys[key]) {
              warn(
                ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
                vnode.context
              );
            } else {
              seenKeys[key] = true;
            }
          }
        }
      }
  
      function findIdxInOld (node, oldCh, start, end) {
        for (var i = start; i < end; i++) {
          var c = oldCh[i];
          if (isDef(c) && sameVnode(node, c)) { return i }
        }
      }
  
      function patchVnode (
        oldVnode,
        vnode,
        insertedVnodeQueue,
        ownerArray,
        index,
        removeOnly
      ) {
        if (oldVnode === vnode) {
          return
        }
  
        if (isDef(vnode.elm) && isDef(ownerArray)) {
          // clone reused vnode
          vnode = ownerArray[index] = cloneVNode(vnode);
        }
  
        var elm = vnode.elm = oldVnode.elm;
  
        if (isTrue(oldVnode.isAsyncPlaceholder)) {
          if (isDef(vnode.asyncFactory.resolved)) {
            hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
          } else {
            vnode.isAsyncPlaceholder = true;
          }
          return
        }
  
        // reuse element for static trees.
        // note we only do this if the vnode is cloned -
        // if the new node is not cloned it means the render functions have been
        // reset by the hot-reload-api and we need to do a proper re-render.
        if (isTrue(vnode.isStatic) &&
          isTrue(oldVnode.isStatic) &&
          vnode.key === oldVnode.key &&
          (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
        ) {
          vnode.componentInstance = oldVnode.componentInstance;
          return
        }
  
        var i;
        var data = vnode.data;
        if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
          i(oldVnode, vnode);
        }
  
        var oldCh = oldVnode.children;
        var ch = vnode.children;
        if (isDef(data) && isPatchable(vnode)) {
          for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
          if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
        }
        if (isUndef(vnode.text)) {
          if (isDef(oldCh) && isDef(ch)) {
            if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
          } else if (isDef(ch)) {
            {
              checkDuplicateKeys(ch);
            }
            if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
            addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
          } else if (isDef(oldCh)) {
            removeVnodes(elm, oldCh, 0, oldCh.length - 1);
          } else if (isDef(oldVnode.text)) {
            nodeOps.setTextContent(elm, '');
          }
        } else if (oldVnode.text !== vnode.text) {
          nodeOps.setTextContent(elm, vnode.text);
        }
        if (isDef(data)) {
          if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
        }
      }
  
      function invokeInsertHook (vnode, queue, initial) {
        // delay insert hooks for component root nodes, invoke them after the
        // element is really inserted
        if (isTrue(initial) && isDef(vnode.parent)) {
          vnode.parent.data.pendingInsert = queue;
        } else {
          for (var i = 0; i < queue.length; ++i) {
            queue[i].data.hook.insert(queue[i]);
          }
        }
      }
  
      var hydrationBailed = false;
      // list of modules that can skip create hook during hydration because they
      // are already rendered on the client or has no need for initialization
      // Note: style is excluded because it relies on initial clone for future
      // deep updates (#7063).
      var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');
  
      // Note: this is a browser-only function so we can assume elms are DOM nodes.
      function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
        var i;
        var tag = vnode.tag;
        var data = vnode.data;
        var children = vnode.children;
        inVPre = inVPre || (data && data.pre);
        vnode.elm = elm;
  
        if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
          vnode.isAsyncPlaceholder = true;
          return true
        }
        // assert node match
        {
          if (!assertNodeMatch(elm, vnode, inVPre)) {
            return false
          }
        }
        if (isDef(data)) {
          if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
          if (isDef(i = vnode.componentInstance)) {
            // child component. it should have hydrated its own tree.
            initComponent(vnode, insertedVnodeQueue);
            return true
          }
        }
        if (isDef(tag)) {
          if (isDef(children)) {
            // empty element, allow client to pick up and populate children
            if (!elm.hasChildNodes()) {
              createChildren(vnode, children, insertedVnodeQueue);
            } else {
              // v-html and domProps: innerHTML
              if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
                if (i !== elm.innerHTML) {
                  /* istanbul ignore if */
                  if (typeof console !== 'undefined' &&
                    !hydrationBailed
                  ) {
                    hydrationBailed = true;
                    console.warn('Parent: ', elm);
                    console.warn('server innerHTML: ', i);
                    console.warn('client innerHTML: ', elm.innerHTML);
                  }
                  return false
                }
              } else {
                // iterate and compare children lists
                var childrenMatch = true;
                var childNode = elm.firstChild;
                for (var i$1 = 0; i$1 < children.length; i$1++) {
                  if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                    childrenMatch = false;
                    break
                  }
                  childNode = childNode.nextSibling;
                }
                // if childNode is not null, it means the actual childNodes list is
                // longer than the virtual children list.
                if (!childrenMatch || childNode) {
                  /* istanbul ignore if */
                  if (typeof console !== 'undefined' &&
                    !hydrationBailed
                  ) {
                    hydrationBailed = true;
                    console.warn('Parent: ', elm);
                    console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
                  }
                  return false
                }
              }
            }
          }
          if (isDef(data)) {
            var fullInvoke = false;
            for (var key in data) {
              if (!isRenderedModule(key)) {
                fullInvoke = true;
                invokeCreateHooks(vnode, insertedVnodeQueue);
                break
              }
            }
            if (!fullInvoke && data['class']) {
              // ensure collecting deps for deep class bindings for future updates
              traverse(data['class']);
            }
          }
        } else if (elm.data !== vnode.text) {
          elm.data = vnode.text;
        }
        return true
      }
  
      function assertNodeMatch (node, vnode, inVPre) {
        if (isDef(vnode.tag)) {
          return vnode.tag.indexOf('vue-component') === 0 || (
            !isUnknownElement$$1(vnode, inVPre) &&
            vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
          )
        } else {
          return node.nodeType === (vnode.isComment ? 8 : 3)
        }
      }
  
      return function patch (oldVnode, vnode, hydrating, removeOnly) {
        if (isUndef(vnode)) {
          if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
          return
        }
  
        var isInitialPatch = false;
        var insertedVnodeQueue = [];
  
        if (isUndef(oldVnode)) {
          // empty mount (likely as component), create new root element
          isInitialPatch = true;
          createElm(vnode, insertedVnodeQueue);
        } else {
          var isRealElement = isDef(oldVnode.nodeType);
          if (!isRealElement && sameVnode(oldVnode, vnode)) {
            // patch existing root node
            patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
          } else {
            if (isRealElement) {
              // mounting to a real element
              // check if this is server-rendered content and if we can perform
              // a successful hydration.
              if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
                oldVnode.removeAttribute(SSR_ATTR);
                hydrating = true;
              }
              if (isTrue(hydrating)) {
                if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
                  invokeInsertHook(vnode, insertedVnodeQueue, true);
                  return oldVnode
                } else {
                  warn(
                    'The client-side rendered virtual DOM tree is not matching ' +
                    'server-rendered content. This is likely caused by incorrect ' +
                    'HTML markup, for example nesting block-level elements inside ' +
                    '<p>, or missing <tbody>. Bailing hydration and performing ' +
                    'full client-side render.'
                  );
                }
              }
              // either not server-rendered, or hydration failed.
              // create an empty node and replace it
              oldVnode = emptyNodeAt(oldVnode);
            }
  
            // replacing existing element
            var oldElm = oldVnode.elm;
            var parentElm = nodeOps.parentNode(oldElm);
  
            // create new node
            createElm(
              vnode,
              insertedVnodeQueue,
              // extremely rare edge case: do not insert if old element is in a
              // leaving transition. Only happens when combining transition +
              // keep-alive + HOCs. (#4590)
              oldElm._leaveCb ? null : parentElm,
              nodeOps.nextSibling(oldElm)
            );
  
            // update parent placeholder node element, recursively
            if (isDef(vnode.parent)) {
              var ancestor = vnode.parent;
              var patchable = isPatchable(vnode);
              while (ancestor) {
                for (var i = 0; i < cbs.destroy.length; ++i) {
                  cbs.destroy[i](ancestor);
                }
                ancestor.elm = vnode.elm;
                if (patchable) {
                  for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                    cbs.create[i$1](emptyNode, ancestor);
                  }
                  // #6513
                  // invoke insert hooks that may have been merged by create hooks.
                  // e.g. for directives that uses the "inserted" hook.
                  var insert = ancestor.data.hook.insert;
                  if (insert.merged) {
                    // start at index 1 to avoid re-invoking component mounted hook
                    for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                      insert.fns[i$2]();
                    }
                  }
                } else {
                  registerRef(ancestor);
                }
                ancestor = ancestor.parent;
              }
            }
  
            // destroy old node
            if (isDef(parentElm)) {
              removeVnodes(parentElm, [oldVnode], 0, 0);
            } else if (isDef(oldVnode.tag)) {
              invokeDestroyHook(oldVnode);
            }
          }
        }
  
        invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
        return vnode.elm
      }
    }
  
    /*  */
  
    var directives = {
      create: updateDirectives,
      update: updateDirectives,
      destroy: function unbindDirectives (vnode) {
        updateDirectives(vnode, emptyNode);
      }
    };
  
    function updateDirectives (oldVnode, vnode) {
      if (oldVnode.data.directives || vnode.data.directives) {
        _update(oldVnode, vnode);
      }
    }
  
    function _update (oldVnode, vnode) {
      var isCreate = oldVnode === emptyNode;
      var isDestroy = vnode === emptyNode;
      var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
      var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);
  
      var dirsWithInsert = [];
      var dirsWithPostpatch = [];
  
      var key, oldDir, dir;
      for (key in newDirs) {
        oldDir = oldDirs[key];
        dir = newDirs[key];
        if (!oldDir) {
          // new directive, bind
          callHook$1(dir, 'bind', vnode, oldVnode);
          if (dir.def && dir.def.inserted) {
            dirsWithInsert.push(dir);
          }
        } else {
          // existing directive, update
          dir.oldValue = oldDir.value;
          dir.oldArg = oldDir.arg;
          callHook$1(dir, 'update', vnode, oldVnode);
          if (dir.def && dir.def.componentUpdated) {
            dirsWithPostpatch.push(dir);
          }
        }
      }
  
      if (dirsWithInsert.length) {
        var callInsert = function () {
          for (var i = 0; i < dirsWithInsert.length; i++) {
            callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
          }
        };
        if (isCreate) {
          mergeVNodeHook(vnode, 'insert', callInsert);
        } else {
          callInsert();
        }
      }
  
      if (dirsWithPostpatch.length) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          for (var i = 0; i < dirsWithPostpatch.length; i++) {
            callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
          }
        });
      }
  
      if (!isCreate) {
        for (key in oldDirs) {
          if (!newDirs[key]) {
            // no longer present, unbind
            callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
          }
        }
      }
    }
  
    var emptyModifiers = Object.create(null);
  
    function normalizeDirectives$1 (
      dirs,
      vm
    ) {
      var res = Object.create(null);
      if (!dirs) {
        // $flow-disable-line
        return res
      }
      var i, dir;
      for (i = 0; i < dirs.length; i++) {
        dir = dirs[i];
        if (!dir.modifiers) {
          // $flow-disable-line
          dir.modifiers = emptyModifiers;
        }
        res[getRawDirName(dir)] = dir;
        dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
      }
      // $flow-disable-line
      return res
    }
  
    function getRawDirName (dir) {
      return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
    }
  
    function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
      var fn = dir.def && dir.def[hook];
      if (fn) {
        try {
          fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
        } catch (e) {
          handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
        }
      }
    }
  
    var baseModules = [
      ref,
      directives
    ];
  
    /*  */
  
    function updateAttrs (oldVnode, vnode) {
      var opts = vnode.componentOptions;
      if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
        return
      }
      if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
        return
      }
      var key, cur, old;
      var elm = vnode.elm;
      var oldAttrs = oldVnode.data.attrs || {};
      var attrs = vnode.data.attrs || {};
      // clone observed objects, as the user probably wants to mutate it
      if (isDef(attrs.__ob__)) {
        attrs = vnode.data.attrs = extend({}, attrs);
      }
  
      for (key in attrs) {
        cur = attrs[key];
        old = oldAttrs[key];
        if (old !== cur) {
          setAttr(elm, key, cur);
        }
      }
      // #4391: in IE9, setting type can reset value for input[type=radio]
      // #6666: IE/Edge forces progress value down to 1 before setting a max
      /* istanbul ignore if */
      if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
        setAttr(elm, 'value', attrs.value);
      }
      for (key in oldAttrs) {
        if (isUndef(attrs[key])) {
          if (isXlink(key)) {
            elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
          } else if (!isEnumeratedAttr(key)) {
            elm.removeAttribute(key);
          }
        }
      }
    }
  
    function setAttr (el, key, value) {
      if (el.tagName.indexOf('-') > -1) {
        baseSetAttr(el, key, value);
      } else if (isBooleanAttr(key)) {
        // set attribute for blank value
        // e.g. <option disabled>Select one</option>
        if (isFalsyAttrValue(value)) {
          el.removeAttribute(key);
        } else {
          // technically allowfullscreen is a boolean attribute for <iframe>,
          // but Flash expects a value of "true" when used on <embed> tag
          value = key === 'allowfullscreen' && el.tagName === 'EMBED'
            ? 'true'
            : key;
          el.setAttribute(key, value);
        }
      } else if (isEnumeratedAttr(key)) {
        el.setAttribute(key, convertEnumeratedValue(key, value));
      } else if (isXlink(key)) {
        if (isFalsyAttrValue(value)) {
          el.removeAttributeNS(xlinkNS, getXlinkProp(key));
        } else {
          el.setAttributeNS(xlinkNS, key, value);
        }
      } else {
        baseSetAttr(el, key, value);
      }
    }
  
    function baseSetAttr (el, key, value) {
      if (isFalsyAttrValue(value)) {
        el.removeAttribute(key);
      } else {
        // #7138: IE10 & 11 fires input event when setting placeholder on
        // <textarea>... block the first input event and remove the blocker
        // immediately.
        /* istanbul ignore if */
        if (
          isIE && !isIE9 &&
          el.tagName === 'TEXTAREA' &&
          key === 'placeholder' && value !== '' && !el.__ieph
        ) {
          var blocker = function (e) {
            e.stopImmediatePropagation();
            el.removeEventListener('input', blocker);
          };
          el.addEventListener('input', blocker);
          // $flow-disable-line
          el.__ieph = true; /* IE placeholder patched */
        }
        el.setAttribute(key, value);
      }
    }
  
    var attrs = {
      create: updateAttrs,
      update: updateAttrs
    };
  
    /*  */
  
    function updateClass (oldVnode, vnode) {
      var el = vnode.elm;
      var data = vnode.data;
      var oldData = oldVnode.data;
      if (
        isUndef(data.staticClass) &&
        isUndef(data.class) && (
          isUndef(oldData) || (
            isUndef(oldData.staticClass) &&
            isUndef(oldData.class)
          )
        )
      ) {
        return
      }
  
      var cls = genClassForVnode(vnode);
  
      // handle transition classes
      var transitionClass = el._transitionClasses;
      if (isDef(transitionClass)) {
        cls = concat(cls, stringifyClass(transitionClass));
      }
  
      // set the class
      if (cls !== el._prevClass) {
        el.setAttribute('class', cls);
        el._prevClass = cls;
      }
    }
  
    var klass = {
      create: updateClass,
      update: updateClass
    };
  
    /*  */
  
    var validDivisionCharRE = /[\w).+\-_$\]]/;
  
    function parseFilters (exp) {
      var inSingle = false;
      var inDouble = false;
      var inTemplateString = false;
      var inRegex = false;
      var curly = 0;
      var square = 0;
      var paren = 0;
      var lastFilterIndex = 0;
      var c, prev, i, expression, filters;
  
      for (i = 0; i < exp.length; i++) {
        prev = c;
        c = exp.charCodeAt(i);
        if (inSingle) {
          if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
        } else if (inDouble) {
          if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
        } else if (inTemplateString) {
          if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
        } else if (inRegex) {
          if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
        } else if (
          c === 0x7C && // pipe
          exp.charCodeAt(i + 1) !== 0x7C &&
          exp.charCodeAt(i - 1) !== 0x7C &&
          !curly && !square && !paren
        ) {
          if (expression === undefined) {
            // first filter, end of expression
            lastFilterIndex = i + 1;
            expression = exp.slice(0, i).trim();
          } else {
            pushFilter();
          }
        } else {
          switch (c) {
            case 0x22: inDouble = true; break         // "
            case 0x27: inSingle = true; break         // '
            case 0x60: inTemplateString = true; break // `
            case 0x28: paren++; break                 // (
            case 0x29: paren--; break                 // )
            case 0x5B: square++; break                // [
            case 0x5D: square--; break                // ]
            case 0x7B: curly++; break                 // {
            case 0x7D: curly--; break                 // }
          }
          if (c === 0x2f) { // /
            var j = i - 1;
            var p = (void 0);
            // find first non-whitespace prev char
            for (; j >= 0; j--) {
              p = exp.charAt(j);
              if (p !== ' ') { break }
            }
            if (!p || !validDivisionCharRE.test(p)) {
              inRegex = true;
            }
          }
        }
      }
  
      if (expression === undefined) {
        expression = exp.slice(0, i).trim();
      } else if (lastFilterIndex !== 0) {
        pushFilter();
      }
  
      function pushFilter () {
        (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
        lastFilterIndex = i + 1;
      }
  
      if (filters) {
        for (i = 0; i < filters.length; i++) {
          expression = wrapFilter(expression, filters[i]);
        }
      }
  
      return expression
    }
  
    function wrapFilter (exp, filter) {
      var i = filter.indexOf('(');
      if (i < 0) {
        // _f: resolveFilter
        return ("_f(\"" + filter + "\")(" + exp + ")")
      } else {
        var name = filter.slice(0, i);
        var args = filter.slice(i + 1);
        return ("_f(\"" + name + "\")(" + exp + (args !== ')' ? ',' + args : args))
      }
    }
  
    /*  */
  
  
  
    /* eslint-disable no-unused-vars */
    function baseWarn (msg, range) {
      console.error(("[Vue compiler]: " + msg));
    }
    /* eslint-enable no-unused-vars */
  
    function pluckModuleFunction (
      modules,
      key
    ) {
      return modules
        ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
        : []
    }
  
    function addProp (el, name, value, range, dynamic) {
      (el.props || (el.props = [])).push(rangeSetItem({ name: name, value: value, dynamic: dynamic }, range));
      el.plain = false;
    }
  
    function addAttr (el, name, value, range, dynamic) {
      var attrs = dynamic
        ? (el.dynamicAttrs || (el.dynamicAttrs = []))
        : (el.attrs || (el.attrs = []));
      attrs.push(rangeSetItem({ name: name, value: value, dynamic: dynamic }, range));
      el.plain = false;
    }
  
    // add a raw attr (use this in preTransforms)
    function addRawAttr (el, name, value, range) {
      el.attrsMap[name] = value;
      el.attrsList.push(rangeSetItem({ name: name, value: value }, range));
    }
  
    function addDirective (
      el,
      name,
      rawName,
      value,
      arg,
      isDynamicArg,
      modifiers,
      range
    ) {
      (el.directives || (el.directives = [])).push(rangeSetItem({
        name: name,
        rawName: rawName,
        value: value,
        arg: arg,
        isDynamicArg: isDynamicArg,
        modifiers: modifiers
      }, range));
      el.plain = false;
    }
  
    function prependModifierMarker (symbol, name, dynamic) {
      return dynamic
        ? ("_p(" + name + ",\"" + symbol + "\")")
        : symbol + name // mark the event as captured
    }
  
    function addHandler (
      el,
      name,
      value,
      modifiers,
      important,
      warn,
      range,
      dynamic
    ) {
      modifiers = modifiers || emptyObject;
      // warn prevent and passive modifier
      /* istanbul ignore if */
      if (
        warn &&
        modifiers.prevent && modifiers.passive
      ) {
        warn(
          'passive and prevent can\'t be used together. ' +
          'Passive handler can\'t prevent default event.',
          range
        );
      }
  
      // normalize click.right and click.middle since they don't actually fire
      // this is technically browser-specific, but at least for now browsers are
      // the only target envs that have right/middle clicks.
      if (modifiers.right) {
        if (dynamic) {
          name = "(" + name + ")==='click'?'contextmenu':(" + name + ")";
        } else if (name === 'click') {
          name = 'contextmenu';
          delete modifiers.right;
        }
      } else if (modifiers.middle) {
        if (dynamic) {
          name = "(" + name + ")==='click'?'mouseup':(" + name + ")";
        } else if (name === 'click') {
          name = 'mouseup';
        }
      }
  
      // check capture modifier
      if (modifiers.capture) {
        delete modifiers.capture;
        name = prependModifierMarker('!', name, dynamic);
      }
      if (modifiers.once) {
        delete modifiers.once;
        name = prependModifierMarker('~', name, dynamic);
      }
      /* istanbul ignore if */
      if (modifiers.passive) {
        delete modifiers.passive;
        name = prependModifierMarker('&', name, dynamic);
      }
  
      var events;
      if (modifiers.native) {
        delete modifiers.native;
        events = el.nativeEvents || (el.nativeEvents = {});
      } else {
        events = el.events || (el.events = {});
      }
  
      var newHandler = rangeSetItem({ value: value.trim(), dynamic: dynamic }, range);
      if (modifiers !== emptyObject) {
        newHandler.modifiers = modifiers;
      }
  
      var handlers = events[name];
      /* istanbul ignore if */
      if (Array.isArray(handlers)) {
        important ? handlers.unshift(newHandler) : handlers.push(newHandler);
      } else if (handlers) {
        events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
      } else {
        events[name] = newHandler;
      }
  
      el.plain = false;
    }
  
    function getRawBindingAttr (
      el,
      name
    ) {
      return el.rawAttrsMap[':' + name] ||
        el.rawAttrsMap['v-bind:' + name] ||
        el.rawAttrsMap[name]
    }
  
    function getBindingAttr (
      el,
      name,
      getStatic
    ) {
      var dynamicValue =
        getAndRemoveAttr(el, ':' + name) ||
        getAndRemoveAttr(el, 'v-bind:' + name);
      if (dynamicValue != null) {
        return parseFilters(dynamicValue)
      } else if (getStatic !== false) {
        var staticValue = getAndRemoveAttr(el, name);
        if (staticValue != null) {
          return JSON.stringify(staticValue)
        }
      }
    }
  
    // note: this only removes the attr from the Array (attrsList) so that it
    // doesn't get processed by processAttrs.
    // By default it does NOT remove it from the map (attrsMap) because the map is
    // needed during codegen.
    function getAndRemoveAttr (
      el,
      name,
      removeFromMap
    ) {
      var val;
      if ((val = el.attrsMap[name]) != null) {
        var list = el.attrsList;
        for (var i = 0, l = list.length; i < l; i++) {
          if (list[i].name === name) {
            list.splice(i, 1);
            break
          }
        }
      }
      if (removeFromMap) {
        delete el.attrsMap[name];
      }
      return val
    }
  
    function getAndRemoveAttrByRegex (
      el,
      name
    ) {
      var list = el.attrsList;
      for (var i = 0, l = list.length; i < l; i++) {
        var attr = list[i];
        if (name.test(attr.name)) {
          list.splice(i, 1);
          return attr
        }
      }
    }
  
    function rangeSetItem (
      item,
      range
    ) {
      if (range) {
        if (range.start != null) {
          item.start = range.start;
        }
        if (range.end != null) {
          item.end = range.end;
        }
      }
      return item
    }
  
    /*  */
  
    /**
     * Cross-platform code generation for component v-model
     */
    function genComponentModel (
      el,
      value,
      modifiers
    ) {
      var ref = modifiers || {};
      var number = ref.number;
      var trim = ref.trim;
  
      var baseValueExpression = '$$v';
      var valueExpression = baseValueExpression;
      if (trim) {
        valueExpression =
          "(typeof " + baseValueExpression + " === 'string'" +
          "? " + baseValueExpression + ".trim()" +
          ": " + baseValueExpression + ")";
      }
      if (number) {
        valueExpression = "_n(" + valueExpression + ")";
      }
      var assignment = genAssignmentCode(value, valueExpression);
  
      el.model = {
        value: ("(" + value + ")"),
        expression: JSON.stringify(value),
        callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
      };
    }
  
    /**
     * Cross-platform codegen helper for generating v-model value assignment code.
     */
    function genAssignmentCode (
      value,
      assignment
    ) {
      var res = parseModel(value);
      if (res.key === null) {
        return (value + "=" + assignment)
      } else {
        return ("$set(" + (res.exp) + ", " + (res.key) + ", " + assignment + ")")
      }
    }
  
    /**
     * Parse a v-model expression into a base path and a final key segment.
     * Handles both dot-path and possible square brackets.
     *
     * Possible cases:
     *
     * - test
     * - test[key]
     * - test[test1[key]]
     * - test["a"][key]
     * - xxx.test[a[a].test1[key]]
     * - test.xxx.a["asa"][test1[key]]
     *
     */
  
    var len, str, chr, index$1, expressionPos, expressionEndPos;
  
  
  
    function parseModel (val) {
      // Fix https://github.com/vuejs/vue/pull/7730
      // allow v-model="obj.val " (trailing whitespace)
      val = val.trim();
      len = val.length;
  
      if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
        index$1 = val.lastIndexOf('.');
        if (index$1 > -1) {
          return {
            exp: val.slice(0, index$1),
            key: '"' + val.slice(index$1 + 1) + '"'
          }
        } else {
          return {
            exp: val,
            key: null
          }
        }
      }
  
      str = val;
      index$1 = expressionPos = expressionEndPos = 0;
  
      while (!eof()) {
        chr = next();
        /* istanbul ignore if */
        if (isStringStart(chr)) {
          parseString(chr);
        } else if (chr === 0x5B) {
          parseBracket(chr);
        }
      }
  
      return {
        exp: val.slice(0, expressionPos),
        key: val.slice(expressionPos + 1, expressionEndPos)
      }
    }
  
    function next () {
      return str.charCodeAt(++index$1)
    }
  
    function eof () {
      return index$1 >= len
    }
  
    function isStringStart (chr) {
      return chr === 0x22 || chr === 0x27
    }
  
    function parseBracket (chr) {
      var inBracket = 1;
      expressionPos = index$1;
      while (!eof()) {
        chr = next();
        if (isStringStart(chr)) {
          parseString(chr);
          continue
        }
        if (chr === 0x5B) { inBracket++; }
        if (chr === 0x5D) { inBracket--; }
        if (inBracket === 0) {
          expressionEndPos = index$1;
          break
        }
      }
    }
  
    function parseString (chr) {
      var stringQuote = chr;
      while (!eof()) {
        chr = next();
        if (chr === stringQuote) {
          break
        }
      }
    }
  
    /*  */
  
    var warn$1;
  
    // in some cases, the event used has to be determined at runtime
    // so we used some reserved tokens during compile.
    var RANGE_TOKEN = '__r';
    var CHECKBOX_RADIO_TOKEN = '__c';
  
    function model (
      el,
      dir,
      _warn
    ) {
      warn$1 = _warn;
      var value = dir.value;
      var modifiers = dir.modifiers;
      var tag = el.tag;
      var type = el.attrsMap.type;
  
      {
        // inputs with type="file" are read only and setting the input's
        // value will throw an error.
        if (tag === 'input' && type === 'file') {
          warn$1(
            "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
            "File inputs are read only. Use a v-on:change listener instead.",
            el.rawAttrsMap['v-model']
          );
        }
      }
  
      if (el.component) {
        genComponentModel(el, value, modifiers);
        // component v-model doesn't need extra runtime
        return false
      } else if (tag === 'select') {
        genSelect(el, value, modifiers);
      } else if (tag === 'input' && type === 'checkbox') {
        genCheckboxModel(el, value, modifiers);
      } else if (tag === 'input' && type === 'radio') {
        genRadioModel(el, value, modifiers);
      } else if (tag === 'input' || tag === 'textarea') {
        genDefaultModel(el, value, modifiers);
      } else if (!config.isReservedTag(tag)) {
        genComponentModel(el, value, modifiers);
        // component v-model doesn't need extra runtime
        return false
      } else {
        warn$1(
          "<" + (el.tag) + " v-model=\"" + value + "\">: " +
          "v-model is not supported on this element type. " +
          'If you are working with contenteditable, it\'s recommended to ' +
          'wrap a library dedicated for that purpose inside a custom component.',
          el.rawAttrsMap['v-model']
        );
      }
  
      // ensure runtime directive metadata
      return true
    }
  
    function genCheckboxModel (
      el,
      value,
      modifiers
    ) {
      var number = modifiers && modifiers.number;
      var valueBinding = getBindingAttr(el, 'value') || 'null';
      var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
      var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
      addProp(el, 'checked',
        "Array.isArray(" + value + ")" +
        "?_i(" + value + "," + valueBinding + ")>-1" + (
          trueValueBinding === 'true'
            ? (":(" + value + ")")
            : (":_q(" + value + "," + trueValueBinding + ")")
        )
      );
      addHandler(el, 'change',
        "var $$a=" + value + "," +
            '$$el=$event.target,' +
            "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
        'if(Array.isArray($$a)){' +
          "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
              '$$i=_i($$a,$$v);' +
          "if($$el.checked){$$i<0&&(" + (genAssignmentCode(value, '$$a.concat([$$v])')) + ")}" +
          "else{$$i>-1&&(" + (genAssignmentCode(value, '$$a.slice(0,$$i).concat($$a.slice($$i+1))')) + ")}" +
        "}else{" + (genAssignmentCode(value, '$$c')) + "}",
        null, true
      );
    }
  
    function genRadioModel (
      el,
      value,
      modifiers
    ) {
      var number = modifiers && modifiers.number;
      var valueBinding = getBindingAttr(el, 'value') || 'null';
      valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
      addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
      addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
    }
  
    function genSelect (
      el,
      value,
      modifiers
    ) {
      var number = modifiers && modifiers.number;
      var selectedVal = "Array.prototype.filter" +
        ".call($event.target.options,function(o){return o.selected})" +
        ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
        "return " + (number ? '_n(val)' : 'val') + "})";
  
      var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
      var code = "var $$selectedVal = " + selectedVal + ";";
      code = code + " " + (genAssignmentCode(value, assignment));
      addHandler(el, 'change', code, null, true);
    }
  
    function genDefaultModel (
      el,
      value,
      modifiers
    ) {
      var type = el.attrsMap.type;
  
      // warn if v-bind:value conflicts with v-model
      // except for inputs with v-bind:type
      {
        var value$1 = el.attrsMap['v-bind:value'] || el.attrsMap[':value'];
        var typeBinding = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
        if (value$1 && !typeBinding) {
          var binding = el.attrsMap['v-bind:value'] ? 'v-bind:value' : ':value';
          warn$1(
            binding + "=\"" + value$1 + "\" conflicts with v-model on the same element " +
            'because the latter already expands to a value binding internally',
            el.rawAttrsMap[binding]
          );
        }
      }
  
      var ref = modifiers || {};
      var lazy = ref.lazy;
      var number = ref.number;
      var trim = ref.trim;
      var needCompositionGuard = !lazy && type !== 'range';
      var event = lazy
        ? 'change'
        : type === 'range'
          ? RANGE_TOKEN
          : 'input';
  
      var valueExpression = '$event.target.value';
      if (trim) {
        valueExpression = "$event.target.value.trim()";
      }
      if (number) {
        valueExpression = "_n(" + valueExpression + ")";
      }
  
      var code = genAssignmentCode(value, valueExpression);
      if (needCompositionGuard) {
        code = "if($event.target.composing)return;" + code;
      }
  
      addProp(el, 'value', ("(" + value + ")"));
      addHandler(el, event, code, null, true);
      if (trim || number) {
        addHandler(el, 'blur', '$forceUpdate()');
      }
    }
  
    /*  */
  
    // normalize v-model event tokens that can only be determined at runtime.
    // it's important to place the event as the first in the array because
    // the whole point is ensuring the v-model callback gets called before
    // user-attached handlers.
    function normalizeEvents (on) {
      /* istanbul ignore if */
      if (isDef(on[RANGE_TOKEN])) {
        // IE input[type=range] only supports `change` event
        var event = isIE ? 'change' : 'input';
        on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
        delete on[RANGE_TOKEN];
      }
      // This was originally intended to fix #4521 but no longer necessary
      // after 2.5. Keeping it for backwards compat with generated code from < 2.4
      /* istanbul ignore if */
      if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
        on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
        delete on[CHECKBOX_RADIO_TOKEN];
      }
    }
  
    var target$1;
  
    function createOnceHandler$1 (event, handler, capture) {
      var _target = target$1; // save current target element in closure
      return function onceHandler () {
        var res = handler.apply(null, arguments);
        if (res !== null) {
          remove$2(event, onceHandler, capture, _target);
        }
      }
    }
  
    // #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
    // implementation and does not fire microtasks in between event propagation, so
    // safe to exclude.
    var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);
  
    function add$1 (
      name,
      handler,
      capture,
      passive
    ) {
      // async edge case #6566: inner click event triggers patch, event handler
      // attached to outer element during patch, and triggered again. This
      // happens because browsers fire microtask ticks between event propagation.
      // the solution is simple: we save the timestamp when a handler is attached,
      // and the handler would only fire if the event passed to it was fired
      // AFTER it was attached.
      if (useMicrotaskFix) {
        var attachedTimestamp = currentFlushTimestamp;
        var original = handler;
        handler = original._wrapper = function (e) {
          if (
            // no bubbling, should always fire.
            // this is just a safety net in case event.timeStamp is unreliable in
            // certain weird environments...
            e.target === e.currentTarget ||
            // event is fired after handler attachment
            e.timeStamp >= attachedTimestamp ||
            // bail for environments that have buggy event.timeStamp implementations
            // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
            // #9681 QtWebEngine event.timeStamp is negative value
            e.timeStamp <= 0 ||
            // #9448 bail if event is fired in another document in a multi-page
            // electron/nw.js app, since event.timeStamp will be using a different
            // starting reference
            e.target.ownerDocument !== document
          ) {
            return original.apply(this, arguments)
          }
        };
      }
      target$1.addEventListener(
        name,
        handler,
        supportsPassive
          ? { capture: capture, passive: passive }
          : capture
      );
    }
  
    function remove$2 (
      name,
      handler,
      capture,
      _target
    ) {
      (_target || target$1).removeEventListener(
        name,
        handler._wrapper || handler,
        capture
      );
    }
  
    function updateDOMListeners (oldVnode, vnode) {
      if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
        return
      }
      var on = vnode.data.on || {};
      var oldOn = oldVnode.data.on || {};
      target$1 = vnode.elm;
      normalizeEvents(on);
      updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
      target$1 = undefined;
    }
  
    var events = {
      create: updateDOMListeners,
      update: updateDOMListeners
    };
  
    /*  */
  
    var svgContainer;
  
    function updateDOMProps (oldVnode, vnode) {
      if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
        return
      }
      var key, cur;
      var elm = vnode.elm;
      var oldProps = oldVnode.data.domProps || {};
      var props = vnode.data.domProps || {};
      // clone observed objects, as the user probably wants to mutate it
      if (isDef(props.__ob__)) {
        props = vnode.data.domProps = extend({}, props);
      }
  
      for (key in oldProps) {
        if (!(key in props)) {
          elm[key] = '';
        }
      }
  
      for (key in props) {
        cur = props[key];
        // ignore children if the node has textContent or innerHTML,
        // as these will throw away existing DOM nodes and cause removal errors
        // on subsequent patches (#3360)
        if (key === 'textContent' || key === 'innerHTML') {
          if (vnode.children) { vnode.children.length = 0; }
          if (cur === oldProps[key]) { continue }
          // #6601 work around Chrome version <= 55 bug where single textNode
          // replaced by innerHTML/textContent retains its parentNode property
          if (elm.childNodes.length === 1) {
            elm.removeChild(elm.childNodes[0]);
          }
        }
  
        if (key === 'value' && elm.tagName !== 'PROGRESS') {
          // store value as _value as well since
          // non-string values will be stringified
          elm._value = cur;
          // avoid resetting cursor position when value is the same
          var strCur = isUndef(cur) ? '' : String(cur);
          if (shouldUpdateValue(elm, strCur)) {
            elm.value = strCur;
          }
        } else if (key === 'innerHTML' && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
          // IE doesn't support innerHTML for SVG elements
          svgContainer = svgContainer || document.createElement('div');
          svgContainer.innerHTML = "<svg>" + cur + "</svg>";
          var svg = svgContainer.firstChild;
          while (elm.firstChild) {
            elm.removeChild(elm.firstChild);
          }
          while (svg.firstChild) {
            elm.appendChild(svg.firstChild);
          }
        } else if (
          // skip the update if old and new VDOM state is the same.
          // `value` is handled separately because the DOM value may be temporarily
          // out of sync with VDOM state due to focus, composition and modifiers.
          // This  #4521 by skipping the unnecesarry `checked` update.
          cur !== oldProps[key]
        ) {
          // some property updates can throw
          // e.g. `value` on <progress> w/ non-finite value
          try {
            elm[key] = cur;
          } catch (e) {}
        }
      }
    }
  
    // check platforms/web/util/attrs.js acceptValue
  
  
    function shouldUpdateValue (elm, checkVal) {
      return (!elm.composing && (
        elm.tagName === 'OPTION' ||
        isNotInFocusAndDirty(elm, checkVal) ||
        isDirtyWithModifiers(elm, checkVal)
      ))
    }
  
    function isNotInFocusAndDirty (elm, checkVal) {
      // return true when textbox (.number and .trim) loses focus and its value is
      // not equal to the updated value
      var notInFocus = true;
      // #6157
      // work around IE bug when accessing document.activeElement in an iframe
      try { notInFocus = document.activeElement !== elm; } catch (e) {}
      return notInFocus && elm.value !== checkVal
    }
  
    function isDirtyWithModifiers (elm, newVal) {
      var value = elm.value;
      var modifiers = elm._vModifiers; // injected by v-model runtime
      if (isDef(modifiers)) {
        if (modifiers.number) {
          return toNumber(value) !== toNumber(newVal)
        }
        if (modifiers.trim) {
          return value.trim() !== newVal.trim()
        }
      }
      return value !== newVal
    }
  
    var domProps = {
      create: updateDOMProps,
      update: updateDOMProps
    };
  
    /*  */
  
    var parseStyleText = cached(function (cssText) {
      var res = {};
      var listDelimiter = /;(?![^(]*\))/g;
      var propertyDelimiter = /:(.+)/;
      cssText.split(listDelimiter).forEach(function (item) {
        if (item) {
          var tmp = item.split(propertyDelimiter);
          tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
        }
      });
      return res
    });
  
    // merge static and dynamic style data on the same vnode
    function normalizeStyleData (data) {
      var style = normalizeStyleBinding(data.style);
      // static style is pre-processed into an object during compilation
      // and is always a fresh object, so it's safe to merge into it
      return data.staticStyle
        ? extend(data.staticStyle, style)
        : style
    }
  
    // normalize possible array / string values into Object
    function normalizeStyleBinding (bindingStyle) {
      if (Array.isArray(bindingStyle)) {
        return toObject(bindingStyle)
      }
      if (typeof bindingStyle === 'string') {
        return parseStyleText(bindingStyle)
      }
      return bindingStyle
    }
  
    /**
     * parent component style should be after child's
     * so that parent component's style could override it
     */
    function getStyle (vnode, checkChild) {
      var res = {};
      var styleData;
  
      if (checkChild) {
        var childNode = vnode;
        while (childNode.componentInstance) {
          childNode = childNode.componentInstance._vnode;
          if (
            childNode && childNode.data &&
            (styleData = normalizeStyleData(childNode.data))
          ) {
            extend(res, styleData);
          }
        }
      }
  
      if ((styleData = normalizeStyleData(vnode.data))) {
        extend(res, styleData);
      }
  
      var parentNode = vnode;
      while ((parentNode = parentNode.parent)) {
        if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
          extend(res, styleData);
        }
      }
      return res
    }
  
    /*  */
  
    var cssVarRE = /^--/;
    var importantRE = /\s*!important$/;
    var setProp = function (el, name, val) {
      /* istanbul ignore if */
      if (cssVarRE.test(name)) {
        el.style.setProperty(name, val);
      } else if (importantRE.test(val)) {
        el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important');
      } else {
        var normalizedName = normalize(name);
        if (Array.isArray(val)) {
          // Support values array created by autoprefixer, e.g.
          // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
          // Set them one by one, and the browser will only set those it can recognize
          for (var i = 0, len = val.length; i < len; i++) {
            el.style[normalizedName] = val[i];
          }
        } else {
          el.style[normalizedName] = val;
        }
      }
    };
  
    var vendorNames = ['Webkit', 'Moz', 'ms'];
  
    var emptyStyle;
    var normalize = cached(function (prop) {
      emptyStyle = emptyStyle || document.createElement('div').style;
      prop = camelize(prop);
      if (prop !== 'filter' && (prop in emptyStyle)) {
        return prop
      }
      var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
      for (var i = 0; i < vendorNames.length; i++) {
        var name = vendorNames[i] + capName;
        if (name in emptyStyle) {
          return name
        }
      }
    });
  
    function updateStyle (oldVnode, vnode) {
      var data = vnode.data;
      var oldData = oldVnode.data;
  
      if (isUndef(data.staticStyle) && isUndef(data.style) &&
        isUndef(oldData.staticStyle) && isUndef(oldData.style)
      ) {
        return
      }
  
      var cur, name;
      var el = vnode.elm;
      var oldStaticStyle = oldData.staticStyle;
      var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};
  
      // if static style exists, stylebinding already merged into it when doing normalizeStyleData
      var oldStyle = oldStaticStyle || oldStyleBinding;
  
      var style = normalizeStyleBinding(vnode.data.style) || {};
  
      // store normalized style under a different key for next diff
      // make sure to clone it if it's reactive, since the user likely wants
      // to mutate it.
      vnode.data.normalizedStyle = isDef(style.__ob__)
        ? extend({}, style)
        : style;
  
      var newStyle = getStyle(vnode, true);
  
      for (name in oldStyle) {
        if (isUndef(newStyle[name])) {
          setProp(el, name, '');
        }
      }
      for (name in newStyle) {
        cur = newStyle[name];
        if (cur !== oldStyle[name]) {
          // ie9 setting to null has no effect, must use empty string
          setProp(el, name, cur == null ? '' : cur);
        }
      }
    }
  
    var style = {
      create: updateStyle,
      update: updateStyle
    };
  
    /*  */
  
    var whitespaceRE = /\s+/;
  
    /**
     * Add class with compatibility for SVG since classList is not supported on
     * SVG elements in IE
     */
    function addClass (el, cls) {
      /* istanbul ignore if */
      if (!cls || !(cls = cls.trim())) {
        return
      }
  
      /* istanbul ignore else */
      if (el.classList) {
        if (cls.indexOf(' ') > -1) {
          cls.split(whitespaceRE).forEach(function (c) { return el.classList.add(c); });
        } else {
          el.classList.add(cls);
        }
      } else {
        var cur = " " + (el.getAttribute('class') || '') + " ";
        if (cur.indexOf(' ' + cls + ' ') < 0) {
          el.setAttribute('class', (cur + cls).trim());
        }
      }
    }
  
    /**
     * Remove class with compatibility for SVG since classList is not supported on
     * SVG elements in IE
     */
    function removeClass (el, cls) {
      /* istanbul ignore if */
      if (!cls || !(cls = cls.trim())) {
        return
      }
  
      /* istanbul ignore else */
      if (el.classList) {
        if (cls.indexOf(' ') > -1) {
          cls.split(whitespaceRE).forEach(function (c) { return el.classList.remove(c); });
        } else {
          el.classList.remove(cls);
        }
        if (!el.classList.length) {
          el.removeAttribute('class');
        }
      } else {
        var cur = " " + (el.getAttribute('class') || '') + " ";
        var tar = ' ' + cls + ' ';
        while (cur.indexOf(tar) >= 0) {
          cur = cur.replace(tar, ' ');
        }
        cur = cur.trim();
        if (cur) {
          el.setAttribute('class', cur);
        } else {
          el.removeAttribute('class');
        }
      }
    }
  
    /*  */
  
    function resolveTransition (def$$1) {
      if (!def$$1) {
        return
      }
      /* istanbul ignore else */
      if (typeof def$$1 === 'object') {
        var res = {};
        if (def$$1.css !== false) {
          extend(res, autoCssTransition(def$$1.name || 'v'));
        }
        extend(res, def$$1);
        return res
      } else if (typeof def$$1 === 'string') {
        return autoCssTransition(def$$1)
      }
    }
  
    var autoCssTransition = cached(function (name) {
      return {
        enterClass: (name + "-enter"),
        enterToClass: (name + "-enter-to"),
        enterActiveClass: (name + "-enter-active"),
        leaveClass: (name + "-leave"),
        leaveToClass: (name + "-leave-to"),
        leaveActiveClass: (name + "-leave-active")
      }
    });
  
    var hasTransition = inBrowser && !isIE9;
    var TRANSITION = 'transition';
    var ANIMATION = 'animation';
  
    // Transition property/event sniffing
    var transitionProp = 'transition';
    var transitionEndEvent = 'transitionend';
    var animationProp = 'animation';
    var animationEndEvent = 'animationend';
    if (hasTransition) {
      /* istanbul ignore if */
      if (window.ontransitionend === undefined &&
        window.onwebkittransitionend !== undefined
      ) {
        transitionProp = 'WebkitTransition';
        transitionEndEvent = 'webkitTransitionEnd';
      }
      if (window.onanimationend === undefined &&
        window.onwebkitanimationend !== undefined
      ) {
        animationProp = 'WebkitAnimation';
        animationEndEvent = 'webkitAnimationEnd';
      }
    }
  
    // binding to window is necessary to make hot reload work in IE in strict mode
    var raf = inBrowser
      ? window.requestAnimationFrame
        ? window.requestAnimationFrame.bind(window)
        : setTimeout
      : /* istanbul ignore next */ function (fn) { return fn(); };
  
    function nextFrame (fn) {
      raf(function () {
        raf(fn);
      });
    }
  
    function addTransitionClass (el, cls) {
      var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
      if (transitionClasses.indexOf(cls) < 0) {
        transitionClasses.push(cls);
        addClass(el, cls);
      }
    }
  
    function removeTransitionClass (el, cls) {
      if (el._transitionClasses) {
        remove(el._transitionClasses, cls);
      }
      removeClass(el, cls);
    }
  
    function whenTransitionEnds (
      el,
      expectedType,
      cb
    ) {
      var ref = getTransitionInfo(el, expectedType);
      var type = ref.type;
      var timeout = ref.timeout;
      var propCount = ref.propCount;
      if (!type) { return cb() }
      var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
      var ended = 0;
      var end = function () {
        el.removeEventListener(event, onEnd);
        cb();
      };
      var onEnd = function (e) {
        if (e.target === el) {
          if (++ended >= propCount) {
            end();
          }
        }
      };
      setTimeout(function () {
        if (ended < propCount) {
          end();
        }
      }, timeout + 1);
      el.addEventListener(event, onEnd);
    }
  
    var transformRE = /\b(transform|all)(,|$)/;
  
    function getTransitionInfo (el, expectedType) {
      var styles = window.getComputedStyle(el);
      // JSDOM may return undefined for transition properties
      var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
      var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
      var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
      var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
      var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
      var animationTimeout = getTimeout(animationDelays, animationDurations);
  
      var type;
      var timeout = 0;
      var propCount = 0;
      /* istanbul ignore if */
      if (expectedType === TRANSITION) {
        if (transitionTimeout > 0) {
          type = TRANSITION;
          timeout = transitionTimeout;
          propCount = transitionDurations.length;
        }
      } else if (expectedType === ANIMATION) {
        if (animationTimeout > 0) {
          type = ANIMATION;
          timeout = animationTimeout;
          propCount = animationDurations.length;
        }
      } else {
        timeout = Math.max(transitionTimeout, animationTimeout);
        type = timeout > 0
          ? transitionTimeout > animationTimeout
            ? TRANSITION
            : ANIMATION
          : null;
        propCount = type
          ? type === TRANSITION
            ? transitionDurations.length
            : animationDurations.length
          : 0;
      }
      var hasTransform =
        type === TRANSITION &&
        transformRE.test(styles[transitionProp + 'Property']);
      return {
        type: type,
        timeout: timeout,
        propCount: propCount,
        hasTransform: hasTransform
      }
    }
  
    function getTimeout (delays, durations) {
      /* istanbul ignore next */
      while (delays.length < durations.length) {
        delays = delays.concat(delays);
      }
  
      return Math.max.apply(null, durations.map(function (d, i) {
        return toMs(d) + toMs(delays[i])
      }))
    }
  
    // Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
    // in a locale-dependent way, using a comma instead of a dot.
    // If comma is not replaced with a dot, the input will be rounded down (i.e. acting
    // as a floor function) causing unexpected behaviors
    function toMs (s) {
      return Number(s.slice(0, -1).replace(',', '.')) * 1000
    }
  
    /*  */
  
    function enter (vnode, toggleDisplay) {
      var el = vnode.elm;
  
      // call leave callback now
      if (isDef(el._leaveCb)) {
        el._leaveCb.cancelled = true;
        el._leaveCb();
      }
  
      var data = resolveTransition(vnode.data.transition);
      if (isUndef(data)) {
        return
      }
  
      /* istanbul ignore if */
      if (isDef(el._enterCb) || el.nodeType !== 1) {
        return
      }
  
      var css = data.css;
      var type = data.type;
      var enterClass = data.enterClass;
      var enterToClass = data.enterToClass;
      var enterActiveClass = data.enterActiveClass;
      var appearClass = data.appearClass;
      var appearToClass = data.appearToClass;
      var appearActiveClass = data.appearActiveClass;
      var beforeEnter = data.beforeEnter;
      var enter = data.enter;
      var afterEnter = data.afterEnter;
      var enterCancelled = data.enterCancelled;
      var beforeAppear = data.beforeAppear;
      var appear = data.appear;
      var afterAppear = data.afterAppear;
      var appearCancelled = data.appearCancelled;
      var duration = data.duration;
  
      // activeInstance will always be the <transition> component managing this
      // transition. One edge case to check is when the <transition> is placed
      // as the root node of a child component. In that case we need to check
      // <transition>'s parent for appear check.
      var context = activeInstance;
      var transitionNode = activeInstance.$vnode;
      while (transitionNode && transitionNode.parent) {
        context = transitionNode.context;
        transitionNode = transitionNode.parent;
      }
  
      var isAppear = !context._isMounted || !vnode.isRootInsert;
  
      if (isAppear && !appear && appear !== '') {
        return
      }
  
      var startClass = isAppear && appearClass
        ? appearClass
        : enterClass;
      var activeClass = isAppear && appearActiveClass
        ? appearActiveClass
        : enterActiveClass;
      var toClass = isAppear && appearToClass
        ? appearToClass
        : enterToClass;
  
      var beforeEnterHook = isAppear
        ? (beforeAppear || beforeEnter)
        : beforeEnter;
      var enterHook = isAppear
        ? (typeof appear === 'function' ? appear : enter)
        : enter;
      var afterEnterHook = isAppear
        ? (afterAppear || afterEnter)
        : afterEnter;
      var enterCancelledHook = isAppear
        ? (appearCancelled || enterCancelled)
        : enterCancelled;
  
      var explicitEnterDuration = toNumber(
        isObject(duration)
          ? duration.enter
          : duration
      );
  
      if (explicitEnterDuration != null) {
        checkDuration(explicitEnterDuration, 'enter', vnode);
      }
  
      var expectsCSS = css !== false && !isIE9;
      var userWantsControl = getHookArgumentsLength(enterHook);
  
      var cb = el._enterCb = once(function () {
        if (expectsCSS) {
          removeTransitionClass(el, toClass);
          removeTransitionClass(el, activeClass);
        }
        if (cb.cancelled) {
          if (expectsCSS) {
            removeTransitionClass(el, startClass);
          }
          enterCancelledHook && enterCancelledHook(el);
        } else {
          afterEnterHook && afterEnterHook(el);
        }
        el._enterCb = null;
      });
  
      if (!vnode.data.show) {
        // remove pending leave element on enter by injecting an insert hook
        mergeVNodeHook(vnode, 'insert', function () {
          var parent = el.parentNode;
          var pendingNode = parent && parent._pending && parent._pending[vnode.key];
          if (pendingNode &&
            pendingNode.tag === vnode.tag &&
            pendingNode.elm._leaveCb
          ) {
            pendingNode.elm._leaveCb();
          }
          enterHook && enterHook(el, cb);
        });
      }
  
      // start enter transition
      beforeEnterHook && beforeEnterHook(el);
      if (expectsCSS) {
        addTransitionClass(el, startClass);
        addTransitionClass(el, activeClass);
        nextFrame(function () {
          removeTransitionClass(el, startClass);
          if (!cb.cancelled) {
            addTransitionClass(el, toClass);
            if (!userWantsControl) {
              if (isValidDuration(explicitEnterDuration)) {
                setTimeout(cb, explicitEnterDuration);
              } else {
                whenTransitionEnds(el, type, cb);
              }
            }
          }
        });
      }
  
      if (vnode.data.show) {
        toggleDisplay && toggleDisplay();
        enterHook && enterHook(el, cb);
      }
  
      if (!expectsCSS && !userWantsControl) {
        cb();
      }
    }
  
    function leave (vnode, rm) {
      var el = vnode.elm;
  
      // call enter callback now
      if (isDef(el._enterCb)) {
        el._enterCb.cancelled = true;
        el._enterCb();
      }
  
      var data = resolveTransition(vnode.data.transition);
      if (isUndef(data) || el.nodeType !== 1) {
        return rm()
      }
  
      /* istanbul ignore if */
      if (isDef(el._leaveCb)) {
        return
      }
  
      var css = data.css;
      var type = data.type;
      var leaveClass = data.leaveClass;
      var leaveToClass = data.leaveToClass;
      var leaveActiveClass = data.leaveActiveClass;
      var beforeLeave = data.beforeLeave;
      var leave = data.leave;
      var afterLeave = data.afterLeave;
      var leaveCancelled = data.leaveCancelled;
      var delayLeave = data.delayLeave;
      var duration = data.duration;
  
      var expectsCSS = css !== false && !isIE9;
      var userWantsControl = getHookArgumentsLength(leave);
  
      var explicitLeaveDuration = toNumber(
        isObject(duration)
          ? duration.leave
          : duration
      );
  
      if (isDef(explicitLeaveDuration)) {
        checkDuration(explicitLeaveDuration, 'leave', vnode);
      }
  
      var cb = el._leaveCb = once(function () {
        if (el.parentNode && el.parentNode._pending) {
          el.parentNode._pending[vnode.key] = null;
        }
        if (expectsCSS) {
          removeTransitionClass(el, leaveToClass);
          removeTransitionClass(el, leaveActiveClass);
        }
        if (cb.cancelled) {
          if (expectsCSS) {
            removeTransitionClass(el, leaveClass);
          }
          leaveCancelled && leaveCancelled(el);
        } else {
          rm();
          afterLeave && afterLeave(el);
        }
        el._leaveCb = null;
      });
  
      if (delayLeave) {
        delayLeave(performLeave);
      } else {
        performLeave();
      }
  
      function performLeave () {
        // the delayed leave may have already been cancelled
        if (cb.cancelled) {
          return
        }
        // record leaving element
        if (!vnode.data.show && el.parentNode) {
          (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
        }
        beforeLeave && beforeLeave(el);
        if (expectsCSS) {
          addTransitionClass(el, leaveClass);
          addTransitionClass(el, leaveActiveClass);
          nextFrame(function () {
            removeTransitionClass(el, leaveClass);
            if (!cb.cancelled) {
              addTransitionClass(el, leaveToClass);
              if (!userWantsControl) {
                if (isValidDuration(explicitLeaveDuration)) {
                  setTimeout(cb, explicitLeaveDuration);
                } else {
                  whenTransitionEnds(el, type, cb);
                }
              }
            }
          });
        }
        leave && leave(el, cb);
        if (!expectsCSS && !userWantsControl) {
          cb();
        }
      }
    }
  
    // only used in dev mode
    function checkDuration (val, name, vnode) {
      if (typeof val !== 'number') {
        warn(
          "<transition> explicit " + name + " duration is not a valid number - " +
          "got " + (JSON.stringify(val)) + ".",
          vnode.context
        );
      } else if (isNaN(val)) {
        warn(
          "<transition> explicit " + name + " duration is NaN - " +
          'the duration expression might be incorrect.',
          vnode.context
        );
      }
    }
  
    function isValidDuration (val) {
      return typeof val === 'number' && !isNaN(val)
    }
  
    /**
     * Normalize a transition hook's argument length. The hook may be:
     * - a merged hook (invoker) with the original in .fns
     * - a wrapped component method (check ._length)
     * - a plain function (.length)
     */
    function getHookArgumentsLength (fn) {
      if (isUndef(fn)) {
        return false
      }
      var invokerFns = fn.fns;
      if (isDef(invokerFns)) {
        // invoker
        return getHookArgumentsLength(
          Array.isArray(invokerFns)
            ? invokerFns[0]
            : invokerFns
        )
      } else {
        return (fn._length || fn.length) > 1
      }
    }
  
    function _enter (_, vnode) {
      if (vnode.data.show !== true) {
        enter(vnode);
      }
    }
  
    var transition = inBrowser ? {
      create: _enter,
      activate: _enter,
      remove: function remove$$1 (vnode, rm) {
        /* istanbul ignore else */
        if (vnode.data.show !== true) {
          leave(vnode, rm);
        } else {
          rm();
        }
      }
    } : {};
  
    var platformModules = [
      attrs,
      klass,
      events,
      domProps,
      style,
      transition
    ];
  
    /*  */
  
    // the directive module should be applied last, after all
    // built-in modules have been applied.
    var modules = platformModules.concat(baseModules);
  
    var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });
  
    /**
     * Not type checking this file because flow doesn't like attaching
     * properties to Elements.
     */
  
    /* istanbul ignore if */
    if (isIE9) {
      // http://www.matts411.com/post/internet-explorer-9-oninput/
      document.addEventListener('selectionchange', function () {
        var el = document.activeElement;
        if (el && el.vmodel) {
          trigger(el, 'input');
        }
      });
    }
  
    var directive = {
      inserted: function inserted (el, binding, vnode, oldVnode) {
        if (vnode.tag === 'select') {
          // #6903
          if (oldVnode.elm && !oldVnode.elm._vOptions) {
            mergeVNodeHook(vnode, 'postpatch', function () {
              directive.componentUpdated(el, binding, vnode);
            });
          } else {
            setSelected(el, binding, vnode.context);
          }
          el._vOptions = [].map.call(el.options, getValue);
        } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
          el._vModifiers = binding.modifiers;
          if (!binding.modifiers.lazy) {
            el.addEventListener('compositionstart', onCompositionStart);
            el.addEventListener('compositionend', onCompositionEnd);
            // Safari < 10.2 & UIWebView doesn't fire compositionend when
            // switching focus before confirming composition choice
            // this also fixes the issue where some browsers e.g. iOS Chrome
            // fires "change" instead of "input" on autocomplete.
            el.addEventListener('change', onCompositionEnd);
            /* istanbul ignore if */
            if (isIE9) {
              el.vmodel = true;
            }
          }
        }
      },
  
      componentUpdated: function componentUpdated (el, binding, vnode) {
        if (vnode.tag === 'select') {
          setSelected(el, binding, vnode.context);
          // in case the options rendered by v-for have changed,
          // it's possible that the value is out-of-sync with the rendered options.
          // detect such cases and filter out values that no longer has a matching
          // option in the DOM.
          var prevOptions = el._vOptions;
          var curOptions = el._vOptions = [].map.call(el.options, getValue);
          if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
            // trigger change event if
            // no matching option found for at least one value
            var needReset = el.multiple
              ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
              : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
            if (needReset) {
              trigger(el, 'change');
            }
          }
        }
      }
    };
  
    function setSelected (el, binding, vm) {
      actuallySetSelected(el, binding, vm);
      /* istanbul ignore if */
      if (isIE || isEdge) {
        setTimeout(function () {
          actuallySetSelected(el, binding, vm);
        }, 0);
      }
    }
  
    function actuallySetSelected (el, binding, vm) {
      var value = binding.value;
      var isMultiple = el.multiple;
      if (isMultiple && !Array.isArray(value)) {
        warn(
          "<select multiple v-model=\"" + (binding.expression) + "\"> " +
          "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
          vm
        );
        return
      }
      var selected, option;
      for (var i = 0, l = el.options.length; i < l; i++) {
        option = el.options[i];
        if (isMultiple) {
          selected = looseIndexOf(value, getValue(option)) > -1;
          if (option.selected !== selected) {
            option.selected = selected;
          }
        } else {
          if (looseEqual(getValue(option), value)) {
            if (el.selectedIndex !== i) {
              el.selectedIndex = i;
            }
            return
          }
        }
      }
      if (!isMultiple) {
        el.selectedIndex = -1;
      }
    }
  
    function hasNoMatchingOption (value, options) {
      return options.every(function (o) { return !looseEqual(o, value); })
    }
  
    function getValue (option) {
      return '_value' in option
        ? option._value
        : option.value
    }
  
    function onCompositionStart (e) {
      e.target.composing = true;
    }
  
    function onCompositionEnd (e) {
      // prevent triggering an input event for no reason
      if (!e.target.composing) { return }
      e.target.composing = false;
      trigger(e.target, 'input');
    }
  
    function trigger (el, type) {
      var e = document.createEvent('HTMLEvents');
      e.initEvent(type, true, true);
      el.dispatchEvent(e);
    }
  
    /*  */
  
    // recursively search for possible transition defined inside the component root
    function locateNode (vnode) {
      return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
        ? locateNode(vnode.componentInstance._vnode)
        : vnode
    }
  
    var show = {
      bind: function bind (el, ref, vnode) {
        var value = ref.value;
  
        vnode = locateNode(vnode);
        var transition$$1 = vnode.data && vnode.data.transition;
        var originalDisplay = el.__vOriginalDisplay =
          el.style.display === 'none' ? '' : el.style.display;
        if (value && transition$$1) {
          vnode.data.show = true;
          enter(vnode, function () {
            el.style.display = originalDisplay;
          });
        } else {
          el.style.display = value ? originalDisplay : 'none';
        }
      },
  
      update: function update (el, ref, vnode) {
        var value = ref.value;
        var oldValue = ref.oldValue;
  
        /* istanbul ignore if */
        if (!value === !oldValue) { return }
        vnode = locateNode(vnode);
        var transition$$1 = vnode.data && vnode.data.transition;
        if (transition$$1) {
          vnode.data.show = true;
          if (value) {
            enter(vnode, function () {
              el.style.display = el.__vOriginalDisplay;
            });
          } else {
            leave(vnode, function () {
              el.style.display = 'none';
            });
          }
        } else {
          el.style.display = value ? el.__vOriginalDisplay : 'none';
        }
      },
  
      unbind: function unbind (
        el,
        binding,
        vnode,
        oldVnode,
        isDestroy
      ) {
        if (!isDestroy) {
          el.style.display = el.__vOriginalDisplay;
        }
      }
    };
  
    var platformDirectives = {
      model: directive,
      show: show
    };
  
    /*  */
  
    var transitionProps = {
      name: String,
      appear: Boolean,
      css: Boolean,
      mode: String,
      type: String,
      enterClass: String,
      leaveClass: String,
      enterToClass: String,
      leaveToClass: String,
      enterActiveClass: String,
      leaveActiveClass: String,
      appearClass: String,
      appearActiveClass: String,
      appearToClass: String,
      duration: [Number, String, Object]
    };
  
    // in case the child is also an abstract component, e.g. <keep-alive>
    // we want to recursively retrieve the real component to be rendered
    function getRealChild (vnode) {
      var compOptions = vnode && vnode.componentOptions;
      if (compOptions && compOptions.Ctor.options.abstract) {
        return getRealChild(getFirstComponentChild(compOptions.children))
      } else {
        return vnode
      }
    }
  
    function extractTransitionData (comp) {
      var data = {};
      var options = comp.$options;
      // props
      for (var key in options.propsData) {
        data[key] = comp[key];
      }
      // events.
      // extract listeners and pass them directly to the transition methods
      var listeners = options._parentListeners;
      for (var key$1 in listeners) {
        data[camelize(key$1)] = listeners[key$1];
      }
      return data
    }
  
    function placeholder (h, rawChild) {
      if (/\d-keep-alive$/.test(rawChild.tag)) {
        return h('keep-alive', {
          props: rawChild.componentOptions.propsData
        })
      }
    }
  
    function hasParentTransition (vnode) {
      while ((vnode = vnode.parent)) {
        if (vnode.data.transition) {
          return true
        }
      }
    }
  
    function isSameChild (child, oldChild) {
      return oldChild.key === child.key && oldChild.tag === child.tag
    }
  
    var isNotTextNode = function (c) { return c.tag || isAsyncPlaceholder(c); };
  
    var isVShowDirective = function (d) { return d.name === 'show'; };
  
    var Transition = {
      name: 'transition',
      props: transitionProps,
      abstract: true,
  
      render: function render (h) {
        var this$1 = this;
  
        var children = this.$slots.default;
        if (!children) {
          return
        }
  
        // filter out text nodes (possible whitespaces)
        children = children.filter(isNotTextNode);
        /* istanbul ignore if */
        if (!children.length) {
          return
        }
  
        // warn multiple elements
        if (children.length > 1) {
          warn(
            '<transition> can only be used on a single element. Use ' +
            '<transition-group> for lists.',
            this.$parent
          );
        }
  
        var mode = this.mode;
  
        // warn invalid mode
        if (mode && mode !== 'in-out' && mode !== 'out-in'
        ) {
          warn(
            'invalid <transition> mode: ' + mode,
            this.$parent
          );
        }
  
        var rawChild = children[0];
  
        // if this is a component root node and the component's
        // parent container node also has transition, skip.
        if (hasParentTransition(this.$vnode)) {
          return rawChild
        }
  
        // apply transition data to child
        // use getRealChild() to ignore abstract components e.g. keep-alive
        var child = getRealChild(rawChild);
        /* istanbul ignore if */
        if (!child) {
          return rawChild
        }
  
        if (this._leaving) {
          return placeholder(h, rawChild)
        }
  
        // ensure a key that is unique to the vnode type and to this transition
        // component instance. This key will be used to remove pending leaving nodes
        // during entering.
        var id = "__transition-" + (this._uid) + "-";
        child.key = child.key == null
          ? child.isComment
            ? id + 'comment'
            : id + child.tag
          : isPrimitive(child.key)
            ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
            : child.key;
  
        var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
        var oldRawChild = this._vnode;
        var oldChild = getRealChild(oldRawChild);
  
        // mark v-show
        // so that the transition module can hand over the control to the directive
        if (child.data.directives && child.data.directives.some(isVShowDirective)) {
          child.data.show = true;
        }
  
        if (
          oldChild &&
          oldChild.data &&
          !isSameChild(child, oldChild) &&
          !isAsyncPlaceholder(oldChild) &&
          // #6687 component root is a comment node
          !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
        ) {
          // replace old child transition data with fresh one
          // important for dynamic transitions!
          var oldData = oldChild.data.transition = extend({}, data);
          // handle transition mode
          if (mode === 'out-in') {
            // return placeholder node and queue update when leave finishes
            this._leaving = true;
            mergeVNodeHook(oldData, 'afterLeave', function () {
              this$1._leaving = false;
              this$1.$forceUpdate();
            });
            return placeholder(h, rawChild)
          } else if (mode === 'in-out') {
            if (isAsyncPlaceholder(child)) {
              return oldRawChild
            }
            var delayedLeave;
            var performLeave = function () { delayedLeave(); };
            mergeVNodeHook(data, 'afterEnter', performLeave);
            mergeVNodeHook(data, 'enterCancelled', performLeave);
            mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
          }
        }
  
        return rawChild
      }
    };
  
    /*  */
  
    var props = extend({
      tag: String,
      moveClass: String
    }, transitionProps);
  
    delete props.mode;
  
    var TransitionGroup = {
      props: props,
  
      beforeMount: function beforeMount () {
        var this$1 = this;
  
        var update = this._update;
        this._update = function (vnode, hydrating) {
          var restoreActiveInstance = setActiveInstance(this$1);
          // force removing pass
          this$1.__patch__(
            this$1._vnode,
            this$1.kept,
            false, // hydrating
            true // removeOnly (!important, avoids unnecessary moves)
          );
          this$1._vnode = this$1.kept;
          restoreActiveInstance();
          update.call(this$1, vnode, hydrating);
        };
      },
  
      render: function render (h) {
        var tag = this.tag || this.$vnode.data.tag || 'span';
        var map = Object.create(null);
        var prevChildren = this.prevChildren = this.children;
        var rawChildren = this.$slots.default || [];
        var children = this.children = [];
        var transitionData = extractTransitionData(this);
  
        for (var i = 0; i < rawChildren.length; i++) {
          var c = rawChildren[i];
          if (c.tag) {
            if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
              children.push(c);
              map[c.key] = c
              ;(c.data || (c.data = {})).transition = transitionData;
            } else {
              var opts = c.componentOptions;
              var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
              warn(("<transition-group> children must be keyed: <" + name + ">"));
            }
          }
        }
  
        if (prevChildren) {
          var kept = [];
          var removed = [];
          for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
            var c$1 = prevChildren[i$1];
            c$1.data.transition = transitionData;
            c$1.data.pos = c$1.elm.getBoundingClientRect();
            if (map[c$1.key]) {
              kept.push(c$1);
            } else {
              removed.push(c$1);
            }
          }
          this.kept = h(tag, null, kept);
          this.removed = removed;
        }
  
        return h(tag, null, children)
      },
  
      updated: function updated () {
        var children = this.prevChildren;
        var moveClass = this.moveClass || ((this.name || 'v') + '-move');
        if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
          return
        }
  
        // we divide the work into three loops to avoid mixing DOM reads and writes
        // in each iteration - which helps prevent layout thrashing.
        children.forEach(callPendingCbs);
        children.forEach(recordPosition);
        children.forEach(applyTranslation);
  
        // force reflow to put everything in position
        // assign to this to avoid being removed in tree-shaking
        // $flow-disable-line
        this._reflow = document.body.offsetHeight;
  
        children.forEach(function (c) {
          if (c.data.moved) {
            var el = c.elm;
            var s = el.style;
            addTransitionClass(el, moveClass);
            s.transform = s.WebkitTransform = s.transitionDuration = '';
            el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
              if (e && e.target !== el) {
                return
              }
              if (!e || /transform$/.test(e.propertyName)) {
                el.removeEventListener(transitionEndEvent, cb);
                el._moveCb = null;
                removeTransitionClass(el, moveClass);
              }
            });
          }
        });
      },
  
      methods: {
        hasMove: function hasMove (el, moveClass) {
          /* istanbul ignore if */
          if (!hasTransition) {
            return false
          }
          /* istanbul ignore if */
          if (this._hasMove) {
            return this._hasMove
          }
          // Detect whether an element with the move class applied has
          // CSS transitions. Since the element may be inside an entering
          // transition at this very moment, we make a clone of it and remove
          // all other transition classes applied to ensure only the move class
          // is applied.
          var clone = el.cloneNode();
          if (el._transitionClasses) {
            el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
          }
          addClass(clone, moveClass);
          clone.style.display = 'none';
          this.$el.appendChild(clone);
          var info = getTransitionInfo(clone);
          this.$el.removeChild(clone);
          return (this._hasMove = info.hasTransform)
        }
      }
    };
  
    function callPendingCbs (c) {
      /* istanbul ignore if */
      if (c.elm._moveCb) {
        c.elm._moveCb();
      }
      /* istanbul ignore if */
      if (c.elm._enterCb) {
        c.elm._enterCb();
      }
    }
  
    function recordPosition (c) {
      c.data.newPos = c.elm.getBoundingClientRect();
    }
  
    function applyTranslation (c) {
      var oldPos = c.data.pos;
      var newPos = c.data.newPos;
      var dx = oldPos.left - newPos.left;
      var dy = oldPos.top - newPos.top;
      if (dx || dy) {
        c.data.moved = true;
        var s = c.elm.style;
        s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
        s.transitionDuration = '0s';
      }
    }
  
    var platformComponents = {
      Transition: Transition,
      TransitionGroup: TransitionGroup
    };
  
    /*  */
  
    // install platform specific utils
    Vue.config.mustUseProp = mustUseProp;
    Vue.config.isReservedTag = isReservedTag;
    Vue.config.isReservedAttr = isReservedAttr;
    Vue.config.getTagNamespace = getTagNamespace;
    Vue.config.isUnknownElement = isUnknownElement;
  
    // install platform runtime directives & components
    extend(Vue.options.directives, platformDirectives);
    extend(Vue.options.components, platformComponents);
  
    // install platform patch function
    Vue.prototype.__patch__ = inBrowser ? patch : noop;
  
    // public mount method
    Vue.prototype.$mount = function (
      el,
      hydrating
    ) {
      el = el && inBrowser ? query(el) : undefined;
      return mountComponent(this, el, hydrating)
    };
  
    // devtools global hook
    /* istanbul ignore next */
    if (inBrowser) {
      setTimeout(function () {
        if (config.devtools) {
          if (devtools) {
            devtools.emit('init', Vue);
          } else {
            console[console.info ? 'info' : 'log'](
              'Download the Vue Devtools extension for a better development experience:\n' +
              'https://github.com/vuejs/vue-devtools'
            );
          }
        }
        if (config.productionTip !== false &&
          typeof console !== 'undefined'
        ) {
          console[console.info ? 'info' : 'log'](
            "You are running Vue in development mode.\n" +
            "Make sure to turn on production mode when deploying for production.\n" +
            "See more tips at https://vuejs.org/guide/deployment.html"
          );
        }
      }, 0);
    }
  
    /*  */
  
    var defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g;
    var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
  
    var buildRegex = cached(function (delimiters) {
      var open = delimiters[0].replace(regexEscapeRE, '\\$&');
      var close = delimiters[1].replace(regexEscapeRE, '\\$&');
      return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
    });
  
  
  
    function parseText (
      text,
      delimiters
    ) {
      var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
      if (!tagRE.test(text)) {
        return
      }
      var tokens = [];
      var rawTokens = [];
      var lastIndex = tagRE.lastIndex = 0;
      var match, index, tokenValue;
      while ((match = tagRE.exec(text))) {
        index = match.index;
        // push text token
        if (index > lastIndex) {
          rawTokens.push(tokenValue = text.slice(lastIndex, index));
          tokens.push(JSON.stringify(tokenValue));
        }
        // tag token
        var exp = parseFilters(match[1].trim());
        tokens.push(("_s(" + exp + ")"));
        rawTokens.push({ '@binding': exp });
        lastIndex = index + match[0].length;
      }
      if (lastIndex < text.length) {
        rawTokens.push(tokenValue = text.slice(lastIndex));
        tokens.push(JSON.stringify(tokenValue));
      }
      return {
        expression: tokens.join('+'),
        tokens: rawTokens
      }
    }
  
    /*  */
  
    function transformNode (el, options) {
      var warn = options.warn || baseWarn;
      var staticClass = getAndRemoveAttr(el, 'class');
      if (staticClass) {
        var res = parseText(staticClass, options.delimiters);
        if (res) {
          warn(
            "class=\"" + staticClass + "\": " +
            'Interpolation inside attributes has been removed. ' +
            'Use v-bind or the colon shorthand instead. For example, ' +
            'instead of <div class="{{ val }}">, use <div :class="val">.',
            el.rawAttrsMap['class']
          );
        }
      }
      if (staticClass) {
        el.staticClass = JSON.stringify(staticClass);
      }
      var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
      if (classBinding) {
        el.classBinding = classBinding;
      }
    }
  
    function genData (el) {
      var data = '';
      if (el.staticClass) {
        data += "staticClass:" + (el.staticClass) + ",";
      }
      if (el.classBinding) {
        data += "class:" + (el.classBinding) + ",";
      }
      return data
    }
  
    var klass$1 = {
      staticKeys: ['staticClass'],
      transformNode: transformNode,
      genData: genData
    };
  
    /*  */
  
    function transformNode$1 (el, options) {
      var warn = options.warn || baseWarn;
      var staticStyle = getAndRemoveAttr(el, 'style');
      if (staticStyle) {
        /* istanbul ignore if */
        {
          var res = parseText(staticStyle, options.delimiters);
          if (res) {
            warn(
              "style=\"" + staticStyle + "\": " +
              'Interpolation inside attributes has been removed. ' +
              'Use v-bind or the colon shorthand instead. For example, ' +
              'instead of <div style="{{ val }}">, use <div :style="val">.',
              el.rawAttrsMap['style']
            );
          }
        }
        el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
      }
  
      var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
      if (styleBinding) {
        el.styleBinding = styleBinding;
      }
    }
  
    function genData$1 (el) {
      var data = '';
      if (el.staticStyle) {
        data += "staticStyle:" + (el.staticStyle) + ",";
      }
      if (el.styleBinding) {
        data += "style:(" + (el.styleBinding) + "),";
      }
      return data
    }
  
    var style$1 = {
      staticKeys: ['staticStyle'],
      transformNode: transformNode$1,
      genData: genData$1
    };
  
    /*  */
  
    var decoder;
  
    var he = {
      decode: function decode (html) {
        decoder = decoder || document.createElement('div');
        decoder.innerHTML = html;
        return decoder.textContent
      }
    };
  
    /*  */
  
    var isUnaryTag = makeMap(
      'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
      'link,meta,param,source,track,wbr'
    );
  
    // Elements that you can, intentionally, leave open
    // (and which close themselves)
    var canBeLeftOpenTag = makeMap(
      'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
    );
  
    // HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
    // Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
    var isNonPhrasingTag = makeMap(
      'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
      'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
      'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
      'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
      'title,tr,track'
    );
  
    /**
     * Not type-checking this file because it's mostly vendor code.
     */
  
    // Regular Expressions for parsing tags and attributes
    var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
    var dynamicArgAttribute = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
    var ncname = "[a-zA-Z_][\\-\\.0-9_a-zA-Z" + (unicodeRegExp.source) + "]*";
    var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
    var startTagOpen = new RegExp(("^<" + qnameCapture));
    var startTagClose = /^\s*(\/?)>/;
    var endTag = new RegExp(("^<\\/" + qnameCapture + "[^>]*>"));
    var doctype = /^<!DOCTYPE [^>]+>/i;
    // #7298: escape - to avoid being pased as HTML comment when inlined in page
    var comment = /^<!\--/;
    var conditionalComment = /^<!\[/;
  
    // Special Elements (can contain anything)
    var isPlainTextElement = makeMap('script,style,textarea', true);
    var reCache = {};
  
    var decodingMap = {
      '&lt;': '<',
      '&gt;': '>',
      '&quot;': '"',
      '&amp;': '&',
      '&#10;': '\n',
      '&#9;': '\t',
      '&#39;': "'"
    };
    var encodedAttr = /&(?:lt|gt|quot|amp|#39);/g;
    var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#39|#10|#9);/g;
  
    // #5992
    var isIgnoreNewlineTag = makeMap('pre,textarea', true);
    var shouldIgnoreFirstNewline = function (tag, html) { return tag && isIgnoreNewlineTag(tag) && html[0] === '\n'; };
  
    function decodeAttr (value, shouldDecodeNewlines) {
      var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
      return value.replace(re, function (match) { return decodingMap[match]; })
    }
  
    function parseHTML (html, options) {
      var stack = [];
      var expectHTML = options.expectHTML;
      var isUnaryTag$$1 = options.isUnaryTag || no;
      var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
      var index = 0;
      var last, lastTag;
      while (html) {
        last = html;
        // Make sure we're not in a plaintext content element like script/style
        if (!lastTag || !isPlainTextElement(lastTag)) {
          var textEnd = html.indexOf('<');
          if (textEnd === 0) {
            // Comment:
            if (comment.test(html)) {
              var commentEnd = html.indexOf('-->');
  
              if (commentEnd >= 0) {
                if (options.shouldKeepComment) {
                  options.comment(html.substring(4, commentEnd), index, index + commentEnd + 3);
                }
                advance(commentEnd + 3);
                continue
              }
            }
  
            // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
            if (conditionalComment.test(html)) {
              var conditionalEnd = html.indexOf(']>');
  
              if (conditionalEnd >= 0) {
                advance(conditionalEnd + 2);
                continue
              }
            }
  
            // Doctype:
            var doctypeMatch = html.match(doctype);
            if (doctypeMatch) {
              advance(doctypeMatch[0].length);
              continue
            }
  
            // End tag:
            var endTagMatch = html.match(endTag);
            if (endTagMatch) {
              var curIndex = index;
              advance(endTagMatch[0].length);
              parseEndTag(endTagMatch[1], curIndex, index);
              continue
            }
  
            // Start tag:
            var startTagMatch = parseStartTag();
            if (startTagMatch) {
              handleStartTag(startTagMatch);
              if (shouldIgnoreFirstNewline(startTagMatch.tagName, html)) {
                advance(1);
              }
              continue
            }
          }
  
          var text = (void 0), rest = (void 0), next = (void 0);
          if (textEnd >= 0) {
            rest = html.slice(textEnd);
            while (
              !endTag.test(rest) &&
              !startTagOpen.test(rest) &&
              !comment.test(rest) &&
              !conditionalComment.test(rest)
            ) {
              // < in plain text, be forgiving and treat it as text
              next = rest.indexOf('<', 1);
              if (next < 0) { break }
              textEnd += next;
              rest = html.slice(textEnd);
            }
            text = html.substring(0, textEnd);
          }
  
          if (textEnd < 0) {
            text = html;
          }
  
          if (text) {
            advance(text.length);
          }
  
          if (options.chars && text) {
            options.chars(text, index - text.length, index);
          }
        } else {
          var endTagLength = 0;
          var stackedTag = lastTag.toLowerCase();
          var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
          var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
            endTagLength = endTag.length;
            if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
              text = text
                .replace(/<!\--([\s\S]*?)-->/g, '$1') // #7298
                .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
            }
            if (shouldIgnoreFirstNewline(stackedTag, text)) {
              text = text.slice(1);
            }
            if (options.chars) {
              options.chars(text);
            }
            return ''
          });
          index += html.length - rest$1.length;
          html = rest$1;
          parseEndTag(stackedTag, index - endTagLength, index);
        }
  
        if (html === last) {
          options.chars && options.chars(html);
          if (!stack.length && options.warn) {
            options.warn(("Mal-formatted tag at end of template: \"" + html + "\""), { start: index + html.length });
          }
          break
        }
      }
  
      // Clean up any remaining tags
      parseEndTag();
  
      function advance (n) {
        index += n;
        html = html.substring(n);
      }
  
      function parseStartTag () {
        var start = html.match(startTagOpen);
        if (start) {
          var match = {
            tagName: start[1],
            attrs: [],
            start: index
          };
          advance(start[0].length);
          var end, attr;
          while (!(end = html.match(startTagClose)) && (attr = html.match(dynamicArgAttribute) || html.match(attribute))) {
            attr.start = index;
            advance(attr[0].length);
            attr.end = index;
            match.attrs.push(attr);
          }
          if (end) {
            match.unarySlash = end[1];
            advance(end[0].length);
            match.end = index;
            return match
          }
        }
      }
  
      function handleStartTag (match) {
        var tagName = match.tagName;
        var unarySlash = match.unarySlash;
  
        if (expectHTML) {
          if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
            parseEndTag(lastTag);
          }
          if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
            parseEndTag(tagName);
          }
        }
  
        var unary = isUnaryTag$$1(tagName) || !!unarySlash;
  
        var l = match.attrs.length;
        var attrs = new Array(l);
        for (var i = 0; i < l; i++) {
          var args = match.attrs[i];
          var value = args[3] || args[4] || args[5] || '';
          var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href'
            ? options.shouldDecodeNewlinesForHref
            : options.shouldDecodeNewlines;
          attrs[i] = {
            name: args[1],
            value: decodeAttr(value, shouldDecodeNewlines)
          };
          if (options.outputSourceRange) {
            attrs[i].start = args.start + args[0].match(/^\s*/).length;
            attrs[i].end = args.end;
          }
        }
  
        if (!unary) {
          stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs, start: match.start, end: match.end });
          lastTag = tagName;
        }
  
        if (options.start) {
          options.start(tagName, attrs, unary, match.start, match.end);
        }
      }
  
      function parseEndTag (tagName, start, end) {
        var pos, lowerCasedTagName;
        if (start == null) { start = index; }
        if (end == null) { end = index; }
  
        // Find the closest opened tag of the same type
        if (tagName) {
          lowerCasedTagName = tagName.toLowerCase();
          for (pos = stack.length - 1; pos >= 0; pos--) {
            if (stack[pos].lowerCasedTag === lowerCasedTagName) {
              break
            }
          }
        } else {
          // If no tag name is provided, clean shop
          pos = 0;
        }
  
        if (pos >= 0) {
          // Close all the open elements, up the stack
          for (var i = stack.length - 1; i >= pos; i--) {
            if (i > pos || !tagName &&
              options.warn
            ) {
              options.warn(
                ("tag <" + (stack[i].tag) + "> has no matching end tag."),
                { start: stack[i].start, end: stack[i].end }
              );
            }
            if (options.end) {
              options.end(stack[i].tag, start, end);
            }
          }
  
          // Remove the open elements from the stack
          stack.length = pos;
          lastTag = pos && stack[pos - 1].tag;
        } else if (lowerCasedTagName === 'br') {
          if (options.start) {
            options.start(tagName, [], true, start, end);
          }
        } else if (lowerCasedTagName === 'p') {
          if (options.start) {
            options.start(tagName, [], false, start, end);
          }
          if (options.end) {
            options.end(tagName, start, end);
          }
        }
      }
    }
  
    /*  */
  
    var onRE = /^@|^v-on:/;
    var dirRE = /^v-|^@|^:/;
    var forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
    var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
    var stripParensRE = /^\(|\)$/g;
    var dynamicArgRE = /^\[.*\]$/;
  
    var argRE = /:(.*)$/;
    var bindRE = /^:|^\.|^v-bind:/;
    var modifierRE = /\.[^.\]]+(?=[^\]]*$)/g;
  
    var slotRE = /^v-slot(:|$)|^#/;
  
    var lineBreakRE = /[\r\n]/;
    var whitespaceRE$1 = /\s+/g;
  
    var invalidAttributeRE = /[\s"'<>\/=]/;
  
    var decodeHTMLCached = cached(he.decode);
  
    var emptySlotScopeToken = "_empty_";
  
    // configurable state
    var warn$2;
    var delimiters;
    var transforms;
    var preTransforms;
    var postTransforms;
    var platformIsPreTag;
    var platformMustUseProp;
    var platformGetTagNamespace;
    var maybeComponent;
  
    function createASTElement (
      tag,
      attrs,
      parent
    ) {
      return {
        type: 1,
        tag: tag,
        attrsList: attrs,
        attrsMap: makeAttrsMap(attrs),
        rawAttrsMap: {},
        parent: parent,
        children: []
      }
    }
  
    /**
     * Convert HTML string to AST.
     */
    function parse (
      template,
      options
    ) {
      warn$2 = options.warn || baseWarn;
  
      platformIsPreTag = options.isPreTag || no;
      platformMustUseProp = options.mustUseProp || no;
      platformGetTagNamespace = options.getTagNamespace || no;
      var isReservedTag = options.isReservedTag || no;
      maybeComponent = function (el) { return !!el.component || !isReservedTag(el.tag); };
  
      transforms = pluckModuleFunction(options.modules, 'transformNode');
      preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
      postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');
  
      delimiters = options.delimiters;
  
      var stack = [];
      var preserveWhitespace = options.preserveWhitespace !== false;
      var whitespaceOption = options.whitespace;
      var root;
      var currentParent;
      var inVPre = false;
      var inPre = false;
      var warned = false;
  
      function warnOnce (msg, range) {
        if (!warned) {
          warned = true;
          warn$2(msg, range);
        }
      }
  
      function closeElement (element) {
        trimEndingWhitespace(element);
        if (!inVPre && !element.processed) {
          element = processElement(element, options);
        }
        // tree management
        if (!stack.length && element !== root) {
          // allow root elements with v-if, v-else-if and v-else
          if (root.if && (element.elseif || element.else)) {
            {
              checkRootConstraints(element);
            }
            addIfCondition(root, {
              exp: element.elseif,
              block: element
            });
          } else {
            warnOnce(
              "Component template should contain exactly one root element. " +
              "If you are using v-if on multiple elements, " +
              "use v-else-if to chain them instead.",
              { start: element.start }
            );
          }
        }
        if (currentParent && !element.forbidden) {
          if (element.elseif || element.else) {
            processIfConditions(element, currentParent);
          } else {
            if (element.slotScope) {
              // scoped slot
              // keep it in the children list so that v-else(-if) conditions can
              // find it as the prev node.
              var name = element.slotTarget || '"default"'
              ;(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
            }
            currentParent.children.push(element);
            element.parent = currentParent;
          }
        }
  
        // final children cleanup
        // filter out scoped slots
        element.children = element.children.filter(function (c) { return !(c).slotScope; });
        // remove trailing whitespace node again
        trimEndingWhitespace(element);
  
        // check pre state
        if (element.pre) {
          inVPre = false;
        }
        if (platformIsPreTag(element.tag)) {
          inPre = false;
        }
        // apply post-transforms
        for (var i = 0; i < postTransforms.length; i++) {
          postTransforms[i](element, options);
        }
      }
  
      function trimEndingWhitespace (el) {
        // remove trailing whitespace node
        if (!inPre) {
          var lastNode;
          while (
            (lastNode = el.children[el.children.length - 1]) &&
            lastNode.type === 3 &&
            lastNode.text === ' '
          ) {
            el.children.pop();
          }
        }
      }
  
      function checkRootConstraints (el) {
        if (el.tag === 'slot' || el.tag === 'template') {
          warnOnce(
            "Cannot use <" + (el.tag) + "> as component root element because it may " +
            'contain multiple nodes.',
            { start: el.start }
          );
        }
        if (el.attrsMap.hasOwnProperty('v-for')) {
          warnOnce(
            'Cannot use v-for on stateful component root element because ' +
            'it renders multiple elements.',
            el.rawAttrsMap['v-for']
          );
        }
      }
  
      parseHTML(template, {
        warn: warn$2,
        expectHTML: options.expectHTML,
        isUnaryTag: options.isUnaryTag,
        canBeLeftOpenTag: options.canBeLeftOpenTag,
        shouldDecodeNewlines: options.shouldDecodeNewlines,
        shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
        shouldKeepComment: options.comments,
        outputSourceRange: options.outputSourceRange,
        start: function start (tag, attrs, unary, start$1, end) {
          // check namespace.
          // inherit parent ns if there is one
          var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);
  
          // handle IE svg bug
          /* istanbul ignore if */
          if (isIE && ns === 'svg') {
            attrs = guardIESVGBug(attrs);
          }
  
          var element = createASTElement(tag, attrs, currentParent);
          if (ns) {
            element.ns = ns;
          }
  
          {
            if (options.outputSourceRange) {
              element.start = start$1;
              element.end = end;
              element.rawAttrsMap = element.attrsList.reduce(function (cumulated, attr) {
                cumulated[attr.name] = attr;
                return cumulated
              }, {});
            }
            attrs.forEach(function (attr) {
              if (invalidAttributeRE.test(attr.name)) {
                warn$2(
                  "Invalid dynamic argument expression: attribute names cannot contain " +
                  "spaces, quotes, <, >, / or =.",
                  {
                    start: attr.start + attr.name.indexOf("["),
                    end: attr.start + attr.name.length
                  }
                );
              }
            });
          }
  
          if (isForbiddenTag(element) && !isServerRendering()) {
            element.forbidden = true;
            warn$2(
              'Templates should only be responsible for mapping the state to the ' +
              'UI. Avoid placing tags with side-effects in your templates, such as ' +
              "<" + tag + ">" + ', as they will not be parsed.',
              { start: element.start }
            );
          }
  
          // apply pre-transforms
          for (var i = 0; i < preTransforms.length; i++) {
            element = preTransforms[i](element, options) || element;
          }
  
          if (!inVPre) {
            processPre(element);
            if (element.pre) {
              inVPre = true;
            }
          }
          if (platformIsPreTag(element.tag)) {
            inPre = true;
          }
          if (inVPre) {
            processRawAttrs(element);
          } else if (!element.processed) {
            // structural directives
            processFor(element);
            processIf(element);
            processOnce(element);
          }
  
          if (!root) {
            root = element;
            {
              checkRootConstraints(root);
            }
          }
  
          if (!unary) {
            currentParent = element;
            stack.push(element);
          } else {
            closeElement(element);
          }
        },
  
        end: function end (tag, start, end$1) {
          var element = stack[stack.length - 1];
          // pop stack
          stack.length -= 1;
          currentParent = stack[stack.length - 1];
          if (options.outputSourceRange) {
            element.end = end$1;
          }
          closeElement(element);
        },
  
        chars: function chars (text, start, end) {
          if (!currentParent) {
            {
              if (text === template) {
                warnOnce(
                  'Component template requires a root element, rather than just text.',
                  { start: start }
                );
              } else if ((text = text.trim())) {
                warnOnce(
                  ("text \"" + text + "\" outside root element will be ignored."),
                  { start: start }
                );
              }
            }
            return
          }
          // IE textarea placeholder bug
          /* istanbul ignore if */
          if (isIE &&
            currentParent.tag === 'textarea' &&
            currentParent.attrsMap.placeholder === text
          ) {
            return
          }
          var children = currentParent.children;
          if (inPre || text.trim()) {
            text = isTextTag(currentParent) ? text : decodeHTMLCached(text);
          } else if (!children.length) {
            // remove the whitespace-only node right after an opening tag
            text = '';
          } else if (whitespaceOption) {
            if (whitespaceOption === 'condense') {
              // in condense mode, remove the whitespace node if it contains
              // line break, otherwise condense to a single space
              text = lineBreakRE.test(text) ? '' : ' ';
            } else {
              text = ' ';
            }
          } else {
            text = preserveWhitespace ? ' ' : '';
          }
          if (text) {
            if (!inPre && whitespaceOption === 'condense') {
              // condense consecutive whitespaces into single space
              text = text.replace(whitespaceRE$1, ' ');
            }
            var res;
            var child;
            if (!inVPre && text !== ' ' && (res = parseText(text, delimiters))) {
              child = {
                type: 2,
                expression: res.expression,
                tokens: res.tokens,
                text: text
              };
            } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
              child = {
                type: 3,
                text: text
              };
            }
            if (child) {
              if (options.outputSourceRange) {
                child.start = start;
                child.end = end;
              }
              children.push(child);
            }
          }
        },
        comment: function comment (text, start, end) {
          // adding anyting as a sibling to the root node is forbidden
          // comments should still be allowed, but ignored
          if (currentParent) {
            var child = {
              type: 3,
              text: text,
              isComment: true
            };
            if (options.outputSourceRange) {
              child.start = start;
              child.end = end;
            }
            currentParent.children.push(child);
          }
        }
      });
      return root
    }
  
    function processPre (el) {
      if (getAndRemoveAttr(el, 'v-pre') != null) {
        el.pre = true;
      }
    }
  
    function processRawAttrs (el) {
      var list = el.attrsList;
      var len = list.length;
      if (len) {
        var attrs = el.attrs = new Array(len);
        for (var i = 0; i < len; i++) {
          attrs[i] = {
            name: list[i].name,
            value: JSON.stringify(list[i].value)
          };
          if (list[i].start != null) {
            attrs[i].start = list[i].start;
            attrs[i].end = list[i].end;
          }
        }
      } else if (!el.pre) {
        // non root node in pre blocks with no attributes
        el.plain = true;
      }
    }
  
    function processElement (
      element,
      options
    ) {
      processKey(element);
  
      // determine whether this is a plain element after
      // removing structural attributes
      element.plain = (
        !element.key &&
        !element.scopedSlots &&
        !element.attrsList.length
      );
  
      processRef(element);
      processSlotContent(element);
      processSlotOutlet(element);
      processComponent(element);
      for (var i = 0; i < transforms.length; i++) {
        element = transforms[i](element, options) || element;
      }
      processAttrs(element);
      return element
    }
  
    function processKey (el) {
      var exp = getBindingAttr(el, 'key');
      if (exp) {
        {
          if (el.tag === 'template') {
            warn$2(
              "<template> cannot be keyed. Place the key on real elements instead.",
              getRawBindingAttr(el, 'key')
            );
          }
          if (el.for) {
            var iterator = el.iterator2 || el.iterator1;
            var parent = el.parent;
            if (iterator && iterator === exp && parent && parent.tag === 'transition-group') {
              warn$2(
                "Do not use v-for index as key on <transition-group> children, " +
                "this is the same as not using keys.",
                getRawBindingAttr(el, 'key'),
                true /* tip */
              );
            }
          }
        }
        el.key = exp;
      }
    }
  
    function processRef (el) {
      var ref = getBindingAttr(el, 'ref');
      if (ref) {
        el.ref = ref;
        el.refInFor = checkInFor(el);
      }
    }
  
    function processFor (el) {
      var exp;
      if ((exp = getAndRemoveAttr(el, 'v-for'))) {
        var res = parseFor(exp);
        if (res) {
          extend(el, res);
        } else {
          warn$2(
            ("Invalid v-for expression: " + exp),
            el.rawAttrsMap['v-for']
          );
        }
      }
    }
  
  
  
    function parseFor (exp) {
      var inMatch = exp.match(forAliasRE);
      if (!inMatch) { return }
      var res = {};
      res.for = inMatch[2].trim();
      var alias = inMatch[1].trim().replace(stripParensRE, '');
      var iteratorMatch = alias.match(forIteratorRE);
      if (iteratorMatch) {
        res.alias = alias.replace(forIteratorRE, '').trim();
        res.iterator1 = iteratorMatch[1].trim();
        if (iteratorMatch[2]) {
          res.iterator2 = iteratorMatch[2].trim();
        }
      } else {
        res.alias = alias;
      }
      return res
    }
  
    function processIf (el) {
      var exp = getAndRemoveAttr(el, 'v-if');
      if (exp) {
        el.if = exp;
        addIfCondition(el, {
          exp: exp,
          block: el
        });
      } else {
        if (getAndRemoveAttr(el, 'v-else') != null) {
          el.else = true;
        }
        var elseif = getAndRemoveAttr(el, 'v-else-if');
        if (elseif) {
          el.elseif = elseif;
        }
      }
    }
  
    function processIfConditions (el, parent) {
      var prev = findPrevElement(parent.children);
      if (prev && prev.if) {
        addIfCondition(prev, {
          exp: el.elseif,
          block: el
        });
      } else {
        warn$2(
          "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
          "used on element <" + (el.tag) + "> without corresponding v-if.",
          el.rawAttrsMap[el.elseif ? 'v-else-if' : 'v-else']
        );
      }
    }
  
    function findPrevElement (children) {
      var i = children.length;
      while (i--) {
        if (children[i].type === 1) {
          return children[i]
        } else {
          if (children[i].text !== ' ') {
            warn$2(
              "text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
              "will be ignored.",
              children[i]
            );
          }
          children.pop();
        }
      }
    }
  
    function addIfCondition (el, condition) {
      if (!el.ifConditions) {
        el.ifConditions = [];
      }
      el.ifConditions.push(condition);
    }
  
    function processOnce (el) {
      var once$$1 = getAndRemoveAttr(el, 'v-once');
      if (once$$1 != null) {
        el.once = true;
      }
    }
  
    // handle content being passed to a component as slot,
    // e.g. <template slot="xxx">, <div slot-scope="xxx">
    function processSlotContent (el) {
      var slotScope;
      if (el.tag === 'template') {
        slotScope = getAndRemoveAttr(el, 'scope');
        /* istanbul ignore if */
        if (slotScope) {
          warn$2(
            "the \"scope\" attribute for scoped slots have been deprecated and " +
            "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " +
            "can also be used on plain elements in addition to <template> to " +
            "denote scoped slots.",
            el.rawAttrsMap['scope'],
            true
          );
        }
        el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
      } else if ((slotScope = getAndRemoveAttr(el, 'slot-scope'))) {
        /* istanbul ignore if */
        if (el.attrsMap['v-for']) {
          warn$2(
            "Ambiguous combined usage of slot-scope and v-for on <" + (el.tag) + "> " +
            "(v-for takes higher priority). Use a wrapper <template> for the " +
            "scoped slot to make it clearer.",
            el.rawAttrsMap['slot-scope'],
            true
          );
        }
        el.slotScope = slotScope;
      }
  
      // slot="xxx"
      var slotTarget = getBindingAttr(el, 'slot');
      if (slotTarget) {
        el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
        el.slotTargetDynamic = !!(el.attrsMap[':slot'] || el.attrsMap['v-bind:slot']);
        // preserve slot as an attribute for native shadow DOM compat
        // only for non-scoped slots.
        if (el.tag !== 'template' && !el.slotScope) {
          addAttr(el, 'slot', slotTarget, getRawBindingAttr(el, 'slot'));
        }
      }
  
      // 2.6 v-slot syntax
      {
        if (el.tag === 'template') {
          // v-slot on <template>
          var slotBinding = getAndRemoveAttrByRegex(el, slotRE);
          if (slotBinding) {
            {
              if (el.slotTarget || el.slotScope) {
                warn$2(
                  "Unexpected mixed usage of different slot syntaxes.",
                  el
                );
              }
              if (el.parent && !maybeComponent(el.parent)) {
                warn$2(
                  "<template v-slot> can only appear at the root level inside " +
                  "the receiving the component",
                  el
                );
              }
            }
            var ref = getSlotName(slotBinding);
            var name = ref.name;
            var dynamic = ref.dynamic;
            el.slotTarget = name;
            el.slotTargetDynamic = dynamic;
            el.slotScope = slotBinding.value || emptySlotScopeToken; // force it into a scoped slot for perf
          }
        } else {
          // v-slot on component, denotes default slot
          var slotBinding$1 = getAndRemoveAttrByRegex(el, slotRE);
          if (slotBinding$1) {
            {
              if (!maybeComponent(el)) {
                warn$2(
                  "v-slot can only be used on components or <template>.",
                  slotBinding$1
                );
              }
              if (el.slotScope || el.slotTarget) {
                warn$2(
                  "Unexpected mixed usage of different slot syntaxes.",
                  el
                );
              }
              if (el.scopedSlots) {
                warn$2(
                  "To avoid scope ambiguity, the default slot should also use " +
                  "<template> syntax when there are other named slots.",
                  slotBinding$1
                );
              }
            }
            // add the component's children to its default slot
            var slots = el.scopedSlots || (el.scopedSlots = {});
            var ref$1 = getSlotName(slotBinding$1);
            var name$1 = ref$1.name;
            var dynamic$1 = ref$1.dynamic;
            var slotContainer = slots[name$1] = createASTElement('template', [], el);
            slotContainer.slotTarget = name$1;
            slotContainer.slotTargetDynamic = dynamic$1;
            slotContainer.children = el.children.filter(function (c) {
              if (!c.slotScope) {
                c.parent = slotContainer;
                return true
              }
            });
            slotContainer.slotScope = slotBinding$1.value || emptySlotScopeToken;
            // remove children as they are returned from scopedSlots now
            el.children = [];
            // mark el non-plain so data gets generated
            el.plain = false;
          }
        }
      }
    }
  
    function getSlotName (binding) {
      var name = binding.name.replace(slotRE, '');
      if (!name) {
        if (binding.name[0] !== '#') {
          name = 'default';
        } else {
          warn$2(
            "v-slot shorthand syntax requires a slot name.",
            binding
          );
        }
      }
      return dynamicArgRE.test(name)
        // dynamic [name]
        ? { name: name.slice(1, -1), dynamic: true }
        // static name
        : { name: ("\"" + name + "\""), dynamic: false }
    }
  
    // handle <slot/> outlets
    function processSlotOutlet (el) {
      if (el.tag === 'slot') {
        el.slotName = getBindingAttr(el, 'name');
        if (el.key) {
          warn$2(
            "`key` does not work on <slot> because slots are abstract outlets " +
            "and can possibly expand into multiple elements. " +
            "Use the key on a wrapping element instead.",
            getRawBindingAttr(el, 'key')
          );
        }
      }
    }
  
    function processComponent (el) {
      var binding;
      if ((binding = getBindingAttr(el, 'is'))) {
        el.component = binding;
      }
      if (getAndRemoveAttr(el, 'inline-template') != null) {
        el.inlineTemplate = true;
      }
    }
  
    function processAttrs (el) {
      var list = el.attrsList;
      var i, l, name, rawName, value, modifiers, syncGen, isDynamic;
      for (i = 0, l = list.length; i < l; i++) {
        name = rawName = list[i].name;
        value = list[i].value;
        if (dirRE.test(name)) {
          // mark element as dynamic
          el.hasBindings = true;
          // modifiers
          modifiers = parseModifiers(name.replace(dirRE, ''));
          // support .foo shorthand syntax for the .prop modifier
          if (modifiers) {
            name = name.replace(modifierRE, '');
          }
          if (bindRE.test(name)) { // v-bind
            name = name.replace(bindRE, '');
            value = parseFilters(value);
            isDynamic = dynamicArgRE.test(name);
            if (isDynamic) {
              name = name.slice(1, -1);
            }
            if (
              value.trim().length === 0
            ) {
              warn$2(
                ("The value for a v-bind expression cannot be empty. Found in \"v-bind:" + name + "\"")
              );
            }
            if (modifiers) {
              if (modifiers.prop && !isDynamic) {
                name = camelize(name);
                if (name === 'innerHtml') { name = 'innerHTML'; }
              }
              if (modifiers.camel && !isDynamic) {
                name = camelize(name);
              }
              if (modifiers.sync) {
                syncGen = genAssignmentCode(value, "$event");
                if (!isDynamic) {
                  addHandler(
                    el,
                    ("update:" + (camelize(name))),
                    syncGen,
                    null,
                    false,
                    warn$2,
                    list[i]
                  );
                  if (hyphenate(name) !== camelize(name)) {
                    addHandler(
                      el,
                      ("update:" + (hyphenate(name))),
                      syncGen,
                      null,
                      false,
                      warn$2,
                      list[i]
                    );
                  }
                } else {
                  // handler w/ dynamic event name
                  addHandler(
                    el,
                    ("\"update:\"+(" + name + ")"),
                    syncGen,
                    null,
                    false,
                    warn$2,
                    list[i],
                    true // dynamic
                  );
                }
              }
            }
            if ((modifiers && modifiers.prop) || (
              !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)
            )) {
              addProp(el, name, value, list[i], isDynamic);
            } else {
              addAttr(el, name, value, list[i], isDynamic);
            }
          } else if (onRE.test(name)) { // v-on
            name = name.replace(onRE, '');
            isDynamic = dynamicArgRE.test(name);
            if (isDynamic) {
              name = name.slice(1, -1);
            }
            addHandler(el, name, value, modifiers, false, warn$2, list[i], isDynamic);
          } else { // normal directives
            name = name.replace(dirRE, '');
            // parse arg
            var argMatch = name.match(argRE);
            var arg = argMatch && argMatch[1];
            isDynamic = false;
            if (arg) {
              name = name.slice(0, -(arg.length + 1));
              if (dynamicArgRE.test(arg)) {
                arg = arg.slice(1, -1);
                isDynamic = true;
              }
            }
            addDirective(el, name, rawName, value, arg, isDynamic, modifiers, list[i]);
            if (name === 'model') {
              checkForAliasModel(el, value);
            }
          }
        } else {
          // literal attribute
          {
            var res = parseText(value, delimiters);
            if (res) {
              warn$2(
                name + "=\"" + value + "\": " +
                'Interpolation inside attributes has been removed. ' +
                'Use v-bind or the colon shorthand instead. For example, ' +
                'instead of <div id="{{ val }}">, use <div :id="val">.',
                list[i]
              );
            }
          }
          addAttr(el, name, JSON.stringify(value), list[i]);
          // #6887 firefox doesn't update muted state if set via attribute
          // even immediately after element creation
          if (!el.component &&
              name === 'muted' &&
              platformMustUseProp(el.tag, el.attrsMap.type, name)) {
            addProp(el, name, 'true', list[i]);
          }
        }
      }
    }
  
    function checkInFor (el) {
      var parent = el;
      while (parent) {
        if (parent.for !== undefined) {
          return true
        }
        parent = parent.parent;
      }
      return false
    }
  
    function parseModifiers (name) {
      var match = name.match(modifierRE);
      if (match) {
        var ret = {};
        match.forEach(function (m) { ret[m.slice(1)] = true; });
        return ret
      }
    }
  
    function makeAttrsMap (attrs) {
      var map = {};
      for (var i = 0, l = attrs.length; i < l; i++) {
        if (
          map[attrs[i].name] && !isIE && !isEdge
        ) {
          warn$2('duplicate attribute: ' + attrs[i].name, attrs[i]);
        }
        map[attrs[i].name] = attrs[i].value;
      }
      return map
    }
  
    // for script (e.g. type="x/template") or style, do not decode content
    function isTextTag (el) {
      return el.tag === 'script' || el.tag === 'style'
    }
  
    function isForbiddenTag (el) {
      return (
        el.tag === 'style' ||
        (el.tag === 'script' && (
          !el.attrsMap.type ||
          el.attrsMap.type === 'text/javascript'
        ))
      )
    }
  
    var ieNSBug = /^xmlns:NS\d+/;
    var ieNSPrefix = /^NS\d+:/;
  
    /* istanbul ignore next */
    function guardIESVGBug (attrs) {
      var res = [];
      for (var i = 0; i < attrs.length; i++) {
        var attr = attrs[i];
        if (!ieNSBug.test(attr.name)) {
          attr.name = attr.name.replace(ieNSPrefix, '');
          res.push(attr);
        }
      }
      return res
    }
  
    function checkForAliasModel (el, value) {
      var _el = el;
      while (_el) {
        if (_el.for && _el.alias === value) {
          warn$2(
            "<" + (el.tag) + " v-model=\"" + value + "\">: " +
            "You are binding v-model directly to a v-for iteration alias. " +
            "This will not be able to modify the v-for source array because " +
            "writing to the alias is like modifying a function local variable. " +
            "Consider using an array of objects and use v-model on an object property instead.",
            el.rawAttrsMap['v-model']
          );
        }
        _el = _el.parent;
      }
    }
  
    /*  */
  
    function preTransformNode (el, options) {
      if (el.tag === 'input') {
        var map = el.attrsMap;
        if (!map['v-model']) {
          return
        }
  
        var typeBinding;
        if (map[':type'] || map['v-bind:type']) {
          typeBinding = getBindingAttr(el, 'type');
        }
        if (!map.type && !typeBinding && map['v-bind']) {
          typeBinding = "(" + (map['v-bind']) + ").type";
        }
  
        if (typeBinding) {
          var ifCondition = getAndRemoveAttr(el, 'v-if', true);
          var ifConditionExtra = ifCondition ? ("&&(" + ifCondition + ")") : "";
          var hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
          var elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true);
          // 1. checkbox
          var branch0 = cloneASTElement(el);
          // process for on the main node
          processFor(branch0);
          addRawAttr(branch0, 'type', 'checkbox');
          processElement(branch0, options);
          branch0.processed = true; // prevent it from double-processed
          branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
          addIfCondition(branch0, {
            exp: branch0.if,
            block: branch0
          });
          // 2. add radio else-if condition
          var branch1 = cloneASTElement(el);
          getAndRemoveAttr(branch1, 'v-for', true);
          addRawAttr(branch1, 'type', 'radio');
          processElement(branch1, options);
          addIfCondition(branch0, {
            exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
            block: branch1
          });
          // 3. other
          var branch2 = cloneASTElement(el);
          getAndRemoveAttr(branch2, 'v-for', true);
          addRawAttr(branch2, ':type', typeBinding);
          processElement(branch2, options);
          addIfCondition(branch0, {
            exp: ifCondition,
            block: branch2
          });
  
          if (hasElse) {
            branch0.else = true;
          } else if (elseIfCondition) {
            branch0.elseif = elseIfCondition;
          }
  
          return branch0
        }
      }
    }
  
    function cloneASTElement (el) {
      return createASTElement(el.tag, el.attrsList.slice(), el.parent)
    }
  
    var model$1 = {
      preTransformNode: preTransformNode
    };
  
    var modules$1 = [
      klass$1,
      style$1,
      model$1
    ];
  
    /*  */
  
    function text (el, dir) {
      if (dir.value) {
        addProp(el, 'textContent', ("_s(" + (dir.value) + ")"), dir);
      }
    }
  
    /*  */
  
    function html (el, dir) {
      if (dir.value) {
        addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"), dir);
      }
    }
  
    var directives$1 = {
      model: model,
      text: text,
      html: html
    };
  
    /*  */
  
    var baseOptions = {
      expectHTML: true,
      modules: modules$1,
      directives: directives$1,
      isPreTag: isPreTag,
      isUnaryTag: isUnaryTag,
      mustUseProp: mustUseProp,
      canBeLeftOpenTag: canBeLeftOpenTag,
      isReservedTag: isReservedTag,
      getTagNamespace: getTagNamespace,
      staticKeys: genStaticKeys(modules$1)
    };
  
    /*  */
  
    var isStaticKey;
    var isPlatformReservedTag;
  
    var genStaticKeysCached = cached(genStaticKeys$1);
  
    /**
     * Goal of the optimizer: walk the generated template AST tree
     * and detect sub-trees that are purely static, i.e. parts of
     * the DOM that never needs to change.
     *
     * Once we detect these sub-trees, we can:
     *
     * 1. Hoist them into constants, so that we no longer need to
     *    create fresh nodes for them on each re-render;
     * 2. Completely skip them in the patching process.
     */
    function optimize (root, options) {
      if (!root) { return }
      isStaticKey = genStaticKeysCached(options.staticKeys || '');
      isPlatformReservedTag = options.isReservedTag || no;
      // first pass: mark all non-static nodes.
      markStatic$1(root);
      // second pass: mark static roots.
      markStaticRoots(root, false);
    }
  
    function genStaticKeys$1 (keys) {
      return makeMap(
        'type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap' +
        (keys ? ',' + keys : '')
      )
    }
  
    function markStatic$1 (node) {
      node.static = isStatic(node);
      if (node.type === 1) {
        // do not make component slot content static. this avoids
        // 1. components not able to mutate slot nodes
        // 2. static slot content fails for hot-reloading
        if (
          !isPlatformReservedTag(node.tag) &&
          node.tag !== 'slot' &&
          node.attrsMap['inline-template'] == null
        ) {
          return
        }
        for (var i = 0, l = node.children.length; i < l; i++) {
          var child = node.children[i];
          markStatic$1(child);
          if (!child.static) {
            node.static = false;
          }
        }
        if (node.ifConditions) {
          for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
            var block = node.ifConditions[i$1].block;
            markStatic$1(block);
            if (!block.static) {
              node.static = false;
            }
          }
        }
      }
    }
  
    function markStaticRoots (node, isInFor) {
      if (node.type === 1) {
        if (node.static || node.once) {
          node.staticInFor = isInFor;
        }
        // For a node to qualify as a static root, it should have children that
        // are not just static text. Otherwise the cost of hoisting out will
        // outweigh the benefits and it's better off to just always render it fresh.
        if (node.static && node.children.length && !(
          node.children.length === 1 &&
          node.children[0].type === 3
        )) {
          node.staticRoot = true;
          return
        } else {
          node.staticRoot = false;
        }
        if (node.children) {
          for (var i = 0, l = node.children.length; i < l; i++) {
            markStaticRoots(node.children[i], isInFor || !!node.for);
          }
        }
        if (node.ifConditions) {
          for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
            markStaticRoots(node.ifConditions[i$1].block, isInFor);
          }
        }
      }
    }
  
    function isStatic (node) {
      if (node.type === 2) { // expression
        return false
      }
      if (node.type === 3) { // text
        return true
      }
      return !!(node.pre || (
        !node.hasBindings && // no dynamic bindings
        !node.if && !node.for && // not v-if or v-for or v-else
        !isBuiltInTag(node.tag) && // not a built-in
        isPlatformReservedTag(node.tag) && // not a component
        !isDirectChildOfTemplateFor(node) &&
        Object.keys(node).every(isStaticKey)
      ))
    }
  
    function isDirectChildOfTemplateFor (node) {
      while (node.parent) {
        node = node.parent;
        if (node.tag !== 'template') {
          return false
        }
        if (node.for) {
          return true
        }
      }
      return false
    }
  
    /*  */
  
    var fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function\s*(?:[\w$]+)?\s*\(/;
    var fnInvokeRE = /\([^)]*?\);*$/;
    var simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/;
  
    // KeyboardEvent.keyCode aliases
    var keyCodes = {
      esc: 27,
      tab: 9,
      enter: 13,
      space: 32,
      up: 38,
      left: 37,
      right: 39,
      down: 40,
      'delete': [8, 46]
    };
  
    // KeyboardEvent.key aliases
    var keyNames = {
      // #7880: IE11 and Edge use `Esc` for Escape key name.
      esc: ['Esc', 'Escape'],
      tab: 'Tab',
      enter: 'Enter',
      // #9112: IE11 uses `Spacebar` for Space key name.
      space: [' ', 'Spacebar'],
      // #7806: IE11 uses key names without `Arrow` prefix for arrow keys.
      up: ['Up', 'ArrowUp'],
      left: ['Left', 'ArrowLeft'],
      right: ['Right', 'ArrowRight'],
      down: ['Down', 'ArrowDown'],
      // #9112: IE11 uses `Del` for Delete key name.
      'delete': ['Backspace', 'Delete', 'Del']
    };
  
    // #4868: modifiers that prevent the execution of the listener
    // need to explicitly return null so that we can determine whether to remove
    // the listener for .once
    var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };
  
    var modifierCode = {
      stop: '$event.stopPropagation();',
      prevent: '$event.preventDefault();',
      self: genGuard("$event.target !== $event.currentTarget"),
      ctrl: genGuard("!$event.ctrlKey"),
      shift: genGuard("!$event.shiftKey"),
      alt: genGuard("!$event.altKey"),
      meta: genGuard("!$event.metaKey"),
      left: genGuard("'button' in $event && $event.button !== 0"),
      middle: genGuard("'button' in $event && $event.button !== 1"),
      right: genGuard("'button' in $event && $event.button !== 2")
    };
  
    function genHandlers (
      events,
      isNative
    ) {
      var prefix = isNative ? 'nativeOn:' : 'on:';
      var staticHandlers = "";
      var dynamicHandlers = "";
      for (var name in events) {
        var handlerCode = genHandler(events[name]);
        if (events[name] && events[name].dynamic) {
          dynamicHandlers += name + "," + handlerCode + ",";
        } else {
          staticHandlers += "\"" + name + "\":" + handlerCode + ",";
        }
      }
      staticHandlers = "{" + (staticHandlers.slice(0, -1)) + "}";
      if (dynamicHandlers) {
        return prefix + "_d(" + staticHandlers + ",[" + (dynamicHandlers.slice(0, -1)) + "])"
      } else {
        return prefix + staticHandlers
      }
    }
  
    function genHandler (handler) {
      if (!handler) {
        return 'function(){}'
      }
  
      if (Array.isArray(handler)) {
        return ("[" + (handler.map(function (handler) { return genHandler(handler); }).join(',')) + "]")
      }
  
      var isMethodPath = simplePathRE.test(handler.value);
      var isFunctionExpression = fnExpRE.test(handler.value);
      var isFunctionInvocation = simplePathRE.test(handler.value.replace(fnInvokeRE, ''));
  
      if (!handler.modifiers) {
        if (isMethodPath || isFunctionExpression) {
          return handler.value
        }
        return ("function($event){" + (isFunctionInvocation ? ("return " + (handler.value)) : handler.value) + "}") // inline statement
      } else {
        var code = '';
        var genModifierCode = '';
        var keys = [];
        for (var key in handler.modifiers) {
          if (modifierCode[key]) {
            genModifierCode += modifierCode[key];
            // left/right
            if (keyCodes[key]) {
              keys.push(key);
            }
          } else if (key === 'exact') {
            var modifiers = (handler.modifiers);
            genModifierCode += genGuard(
              ['ctrl', 'shift', 'alt', 'meta']
                .filter(function (keyModifier) { return !modifiers[keyModifier]; })
                .map(function (keyModifier) { return ("$event." + keyModifier + "Key"); })
                .join('||')
            );
          } else {
            keys.push(key);
          }
        }
        if (keys.length) {
          code += genKeyFilter(keys);
        }
        // Make sure modifiers like prevent and stop get executed after key filtering
        if (genModifierCode) {
          code += genModifierCode;
        }
        var handlerCode = isMethodPath
          ? ("return " + (handler.value) + "($event)")
          : isFunctionExpression
            ? ("return (" + (handler.value) + ")($event)")
            : isFunctionInvocation
              ? ("return " + (handler.value))
              : handler.value;
        return ("function($event){" + code + handlerCode + "}")
      }
    }
  
    function genKeyFilter (keys) {
      return (
        // make sure the key filters only apply to KeyboardEvents
        // #9441: can't use 'keyCode' in $event because Chrome autofill fires fake
        // key events that do not have keyCode property...
        "if(!$event.type.indexOf('key')&&" +
        (keys.map(genFilterCode).join('&&')) + ")return null;"
      )
    }
  
    function genFilterCode (key) {
      var keyVal = parseInt(key, 10);
      if (keyVal) {
        return ("$event.keyCode!==" + keyVal)
      }
      var keyCode = keyCodes[key];
      var keyName = keyNames[key];
      return (
        "_k($event.keyCode," +
        (JSON.stringify(key)) + "," +
        (JSON.stringify(keyCode)) + "," +
        "$event.key," +
        "" + (JSON.stringify(keyName)) +
        ")"
      )
    }
  
    /*  */
  
    function on (el, dir) {
      if (dir.modifiers) {
        warn("v-on without argument does not support modifiers.");
      }
      el.wrapListeners = function (code) { return ("_g(" + code + "," + (dir.value) + ")"); };
    }
  
    /*  */
  
    function bind$1 (el, dir) {
      el.wrapData = function (code) {
        return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")")
      };
    }
  
    /*  */
  
    var baseDirectives = {
      on: on,
      bind: bind$1,
      cloak: noop
    };
  
    /*  */
  
  
  
  
  
    var CodegenState = function CodegenState (options) {
      this.options = options;
      this.warn = options.warn || baseWarn;
      this.transforms = pluckModuleFunction(options.modules, 'transformCode');
      this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
      this.directives = extend(extend({}, baseDirectives), options.directives);
      var isReservedTag = options.isReservedTag || no;
      this.maybeComponent = function (el) { return !!el.component || !isReservedTag(el.tag); };
      this.onceId = 0;
      this.staticRenderFns = [];
      this.pre = false;
    };
  
  
  
    function generate (
      ast,
      options
    ) {
      var state = new CodegenState(options);
      var code = ast ? genElement(ast, state) : '_c("div")';
      return {
        render: ("with(this){return " + code + "}"),
        staticRenderFns: state.staticRenderFns
      }
    }
  
    function genElement (el, state) {
      if (el.parent) {
        el.pre = el.pre || el.parent.pre;
      }
  
      if (el.staticRoot && !el.staticProcessed) {
        return genStatic(el, state)
      } else if (el.once && !el.onceProcessed) {
        return genOnce(el, state)
      } else if (el.for && !el.forProcessed) {
        return genFor(el, state)
      } else if (el.if && !el.ifProcessed) {
        return genIf(el, state)
      } else if (el.tag === 'template' && !el.slotTarget && !state.pre) {
        return genChildren(el, state) || 'void 0'
      } else if (el.tag === 'slot') {
        return genSlot(el, state)
      } else {
        // component or element
        var code;
        if (el.component) {
          code = genComponent(el.component, el, state);
        } else {
          var data;
          if (!el.plain || (el.pre && state.maybeComponent(el))) {
            data = genData$2(el, state);
          }
  
          var children = el.inlineTemplate ? null : genChildren(el, state, true);
          code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
        }
        // module transforms
        for (var i = 0; i < state.transforms.length; i++) {
          code = state.transforms[i](el, code);
        }
        return code
      }
    }
  
    // hoist static sub-trees out
    function genStatic (el, state) {
      el.staticProcessed = true;
      // Some elements (templates) need to behave differently inside of a v-pre
      // node.  All pre nodes are static roots, so we can use this as a location to
      // wrap a state change and reset it upon exiting the pre node.
      var originalPreState = state.pre;
      if (el.pre) {
        state.pre = el.pre;
      }
      state.staticRenderFns.push(("with(this){return " + (genElement(el, state)) + "}"));
      state.pre = originalPreState;
      return ("_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
    }
  
    // v-once
    function genOnce (el, state) {
      el.onceProcessed = true;
      if (el.if && !el.ifProcessed) {
        return genIf(el, state)
      } else if (el.staticInFor) {
        var key = '';
        var parent = el.parent;
        while (parent) {
          if (parent.for) {
            key = parent.key;
            break
          }
          parent = parent.parent;
        }
        if (!key) {
          state.warn(
            "v-once can only be used inside v-for that is keyed. ",
            el.rawAttrsMap['v-once']
          );
          return genElement(el, state)
        }
        return ("_o(" + (genElement(el, state)) + "," + (state.onceId++) + "," + key + ")")
      } else {
        return genStatic(el, state)
      }
    }
  
    function genIf (
      el,
      state,
      altGen,
      altEmpty
    ) {
      el.ifProcessed = true; // avoid recursion
      return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty)
    }
  
    function genIfConditions (
      conditions,
      state,
      altGen,
      altEmpty
    ) {
      if (!conditions.length) {
        return altEmpty || '_e()'
      }
  
      var condition = conditions.shift();
      if (condition.exp) {
        return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions, state, altGen, altEmpty)))
      } else {
        return ("" + (genTernaryExp(condition.block)))
      }
  
      // v-if with v-once should generate code like (a)?_m(0):_m(1)
      function genTernaryExp (el) {
        return altGen
          ? altGen(el, state)
          : el.once
            ? genOnce(el, state)
            : genElement(el, state)
      }
    }
  
    function genFor (
      el,
      state,
      altGen,
      altHelper
    ) {
      var exp = el.for;
      var alias = el.alias;
      var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
      var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';
  
      if (state.maybeComponent(el) &&
        el.tag !== 'slot' &&
        el.tag !== 'template' &&
        !el.key
      ) {
        state.warn(
          "<" + (el.tag) + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " +
          "v-for should have explicit keys. " +
          "See https://vuejs.org/guide/list.html#key for more info.",
          el.rawAttrsMap['v-for'],
          true /* tip */
        );
      }
  
      el.forProcessed = true; // avoid recursion
      return (altHelper || '_l') + "((" + exp + ")," +
        "function(" + alias + iterator1 + iterator2 + "){" +
          "return " + ((altGen || genElement)(el, state)) +
        '})'
    }
  
    function genData$2 (el, state) {
      var data = '{';
  
      // directives first.
      // directives may mutate the el's other properties before they are generated.
      var dirs = genDirectives(el, state);
      if (dirs) { data += dirs + ','; }
  
      // key
      if (el.key) {
        data += "key:" + (el.key) + ",";
      }
      // ref
      if (el.ref) {
        data += "ref:" + (el.ref) + ",";
      }
      if (el.refInFor) {
        data += "refInFor:true,";
      }
      // pre
      if (el.pre) {
        data += "pre:true,";
      }
      // record original tag name for components using "is" attribute
      if (el.component) {
        data += "tag:\"" + (el.tag) + "\",";
      }
      // module data generation functions
      for (var i = 0; i < state.dataGenFns.length; i++) {
        data += state.dataGenFns[i](el);
      }
      // attributes
      if (el.attrs) {
        data += "attrs:" + (genProps(el.attrs)) + ",";
      }
      // DOM props
      if (el.props) {
        data += "domProps:" + (genProps(el.props)) + ",";
      }
      // event handlers
      if (el.events) {
        data += (genHandlers(el.events, false)) + ",";
      }
      if (el.nativeEvents) {
        data += (genHandlers(el.nativeEvents, true)) + ",";
      }
      // slot target
      // only for non-scoped slots
      if (el.slotTarget && !el.slotScope) {
        data += "slot:" + (el.slotTarget) + ",";
      }
      // scoped slots
      if (el.scopedSlots) {
        data += (genScopedSlots(el, el.scopedSlots, state)) + ",";
      }
      // component v-model
      if (el.model) {
        data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
      }
      // inline-template
      if (el.inlineTemplate) {
        var inlineTemplate = genInlineTemplate(el, state);
        if (inlineTemplate) {
          data += inlineTemplate + ",";
        }
      }
      data = data.replace(/,$/, '') + '}';
      // v-bind dynamic argument wrap
      // v-bind with dynamic arguments must be applied using the same v-bind object
      // merge helper so that class/style/mustUseProp attrs are handled correctly.
      if (el.dynamicAttrs) {
        data = "_b(" + data + ",\"" + (el.tag) + "\"," + (genProps(el.dynamicAttrs)) + ")";
      }
      // v-bind data wrap
      if (el.wrapData) {
        data = el.wrapData(data);
      }
      // v-on data wrap
      if (el.wrapListeners) {
        data = el.wrapListeners(data);
      }
      return data
    }
  
    function genDirectives (el, state) {
      var dirs = el.directives;
      if (!dirs) { return }
      var res = 'directives:[';
      var hasRuntime = false;
      var i, l, dir, needRuntime;
      for (i = 0, l = dirs.length; i < l; i++) {
        dir = dirs[i];
        needRuntime = true;
        var gen = state.directives[dir.name];
        if (gen) {
          // compile-time directive that manipulates AST.
          // returns true if it also needs a runtime counterpart.
          needRuntime = !!gen(el, dir, state.warn);
        }
        if (needRuntime) {
          hasRuntime = true;
          res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:" + (dir.isDynamicArg ? dir.arg : ("\"" + (dir.arg) + "\""))) : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
        }
      }
      if (hasRuntime) {
        return res.slice(0, -1) + ']'
      }
    }
  
    function genInlineTemplate (el, state) {
      var ast = el.children[0];
      if (el.children.length !== 1 || ast.type !== 1) {
        state.warn(
          'Inline-template components must have exactly one child element.',
          { start: el.start }
        );
      }
      if (ast && ast.type === 1) {
        var inlineRenderFns = generate(ast, state.options);
        return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
      }
    }
  
    function genScopedSlots (
      el,
      slots,
      state
    ) {
      // by default scoped slots are considered "stable", this allows child
      // components with only scoped slots to skip forced updates from parent.
      // but in some cases we have to bail-out of this optimization
      // for example if the slot contains dynamic names, has v-if or v-for on them...
      var needsForceUpdate = el.for || Object.keys(slots).some(function (key) {
        var slot = slots[key];
        return (
          slot.slotTargetDynamic ||
          slot.if ||
          slot.for ||
          containsSlotChild(slot) // is passing down slot from parent which may be dynamic
        )
      });
  
      // #9534: if a component with scoped slots is inside a conditional branch,
      // it's possible for the same component to be reused but with different
      // compiled slot content. To avoid that, we generate a unique key based on
      // the generated code of all the slot contents.
      var needsKey = !!el.if;
  
      // OR when it is inside another scoped slot or v-for (the reactivity may be
      // disconnected due to the intermediate scope variable)
      // #9438, #9506
      // TODO: this can be further optimized by properly analyzing in-scope bindings
      // and skip force updating ones that do not actually use scope variables.
      if (!needsForceUpdate) {
        var parent = el.parent;
        while (parent) {
          if (
            (parent.slotScope && parent.slotScope !== emptySlotScopeToken) ||
            parent.for
          ) {
            needsForceUpdate = true;
            break
          }
          if (parent.if) {
            needsKey = true;
          }
          parent = parent.parent;
        }
      }
  
      var generatedSlots = Object.keys(slots)
        .map(function (key) { return genScopedSlot(slots[key], state); })
        .join(',');
  
      return ("scopedSlots:_u([" + generatedSlots + "]" + (needsForceUpdate ? ",null,true" : "") + (!needsForceUpdate && needsKey ? (",null,false," + (hash(generatedSlots))) : "") + ")")
    }
  
    function hash(str) {
      var hash = 5381;
      var i = str.length;
      while(i) {
        hash = (hash * 33) ^ str.charCodeAt(--i);
      }
      return hash >>> 0
    }
  
    function containsSlotChild (el) {
      if (el.type === 1) {
        if (el.tag === 'slot') {
          return true
        }
        return el.children.some(containsSlotChild)
      }
      return false
    }
  
    function genScopedSlot (
      el,
      state
    ) {
      var isLegacySyntax = el.attrsMap['slot-scope'];
      if (el.if && !el.ifProcessed && !isLegacySyntax) {
        return genIf(el, state, genScopedSlot, "null")
      }
      if (el.for && !el.forProcessed) {
        return genFor(el, state, genScopedSlot)
      }
      var slotScope = el.slotScope === emptySlotScopeToken
        ? ""
        : String(el.slotScope);
      var fn = "function(" + slotScope + "){" +
        "return " + (el.tag === 'template'
          ? el.if && isLegacySyntax
            ? ("(" + (el.if) + ")?" + (genChildren(el, state) || 'undefined') + ":undefined")
            : genChildren(el, state) || 'undefined'
          : genElement(el, state)) + "}";
      // reverse proxy v-slot without scope on this.$slots
      var reverseProxy = slotScope ? "" : ",proxy:true";
      return ("{key:" + (el.slotTarget || "\"default\"") + ",fn:" + fn + reverseProxy + "}")
    }
  
    function genChildren (
      el,
      state,
      checkSkip,
      altGenElement,
      altGenNode
    ) {
      var children = el.children;
      if (children.length) {
        var el$1 = children[0];
        // optimize single v-for
        if (children.length === 1 &&
          el$1.for &&
          el$1.tag !== 'template' &&
          el$1.tag !== 'slot'
        ) {
          var normalizationType = checkSkip
            ? state.maybeComponent(el$1) ? ",1" : ",0"
            : "";
          return ("" + ((altGenElement || genElement)(el$1, state)) + normalizationType)
        }
        var normalizationType$1 = checkSkip
          ? getNormalizationType(children, state.maybeComponent)
          : 0;
        var gen = altGenNode || genNode;
        return ("[" + (children.map(function (c) { return gen(c, state); }).join(',')) + "]" + (normalizationType$1 ? ("," + normalizationType$1) : ''))
      }
    }
  
    // determine the normalization needed for the children array.
    // 0: no normalization needed
    // 1: simple normalization needed (possible 1-level deep nested array)
    // 2: full normalization needed
    function getNormalizationType (
      children,
      maybeComponent
    ) {
      var res = 0;
      for (var i = 0; i < children.length; i++) {
        var el = children[i];
        if (el.type !== 1) {
          continue
        }
        if (needsNormalization(el) ||
            (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
          res = 2;
          break
        }
        if (maybeComponent(el) ||
            (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
          res = 1;
        }
      }
      return res
    }
  
    function needsNormalization (el) {
      return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
    }
  
    function genNode (node, state) {
      if (node.type === 1) {
        return genElement(node, state)
      } else if (node.type === 3 && node.isComment) {
        return genComment(node)
      } else {
        return genText(node)
      }
    }
  
    function genText (text) {
      return ("_v(" + (text.type === 2
        ? text.expression // no need for () because already wrapped in _s()
        : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
    }
  
    function genComment (comment) {
      return ("_e(" + (JSON.stringify(comment.text)) + ")")
    }
  
    function genSlot (el, state) {
      var slotName = el.slotName || '"default"';
      var children = genChildren(el, state);
      var res = "_t(" + slotName + (children ? ("," + children) : '');
      var attrs = el.attrs || el.dynamicAttrs
        ? genProps((el.attrs || []).concat(el.dynamicAttrs || []).map(function (attr) { return ({
            // slot props are camelized
            name: camelize(attr.name),
            value: attr.value,
            dynamic: attr.dynamic
          }); }))
        : null;
      var bind$$1 = el.attrsMap['v-bind'];
      if ((attrs || bind$$1) && !children) {
        res += ",null";
      }
      if (attrs) {
        res += "," + attrs;
      }
      if (bind$$1) {
        res += (attrs ? '' : ',null') + "," + bind$$1;
      }
      return res + ')'
    }
  
    // componentName is el.component, take it as argument to shun flow's pessimistic refinement
    function genComponent (
      componentName,
      el,
      state
    ) {
      var children = el.inlineTemplate ? null : genChildren(el, state, true);
      return ("_c(" + componentName + "," + (genData$2(el, state)) + (children ? ("," + children) : '') + ")")
    }
  
    function genProps (props) {
      var staticProps = "";
      var dynamicProps = "";
      for (var i = 0; i < props.length; i++) {
        var prop = props[i];
        var value = transformSpecialNewlines(prop.value);
        if (prop.dynamic) {
          dynamicProps += (prop.name) + "," + value + ",";
        } else {
          staticProps += "\"" + (prop.name) + "\":" + value + ",";
        }
      }
      staticProps = "{" + (staticProps.slice(0, -1)) + "}";
      if (dynamicProps) {
        return ("_d(" + staticProps + ",[" + (dynamicProps.slice(0, -1)) + "])")
      } else {
        return staticProps
      }
    }
  
    // #3895, #4268
    function transformSpecialNewlines (text) {
      return text
        .replace(/\u2028/g, '\\u2028')
        .replace(/\u2029/g, '\\u2029')
    }
  
    /*  */
  
  
  
    // these keywords should not appear inside expressions, but operators like
    // typeof, instanceof and in are allowed
    var prohibitedKeywordRE = new RegExp('\\b' + (
      'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
      'super,throw,while,yield,delete,export,import,return,switch,default,' +
      'extends,finally,continue,debugger,function,arguments'
    ).split(',').join('\\b|\\b') + '\\b');
  
    // these unary operators should not be used as property/method names
    var unaryOperatorsRE = new RegExp('\\b' + (
      'delete,typeof,void'
    ).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');
  
    // strip strings in expressions
    var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;
  
    // detect problematic expressions in a template
    function detectErrors (ast, warn) {
      if (ast) {
        checkNode(ast, warn);
      }
    }
  
    function checkNode (node, warn) {
      if (node.type === 1) {
        for (var name in node.attrsMap) {
          if (dirRE.test(name)) {
            var value = node.attrsMap[name];
            if (value) {
              var range = node.rawAttrsMap[name];
              if (name === 'v-for') {
                checkFor(node, ("v-for=\"" + value + "\""), warn, range);
              } else if (onRE.test(name)) {
                checkEvent(value, (name + "=\"" + value + "\""), warn, range);
              } else {
                checkExpression(value, (name + "=\"" + value + "\""), warn, range);
              }
            }
          }
        }
        if (node.children) {
          for (var i = 0; i < node.children.length; i++) {
            checkNode(node.children[i], warn);
          }
        }
      } else if (node.type === 2) {
        checkExpression(node.expression, node.text, warn, node);
      }
    }
  
    function checkEvent (exp, text, warn, range) {
      var stipped = exp.replace(stripStringRE, '');
      var keywordMatch = stipped.match(unaryOperatorsRE);
      if (keywordMatch && stipped.charAt(keywordMatch.index - 1) !== '$') {
        warn(
          "avoid using JavaScript unary operator as property name: " +
          "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim()),
          range
        );
      }
      checkExpression(exp, text, warn, range);
    }
  
    function checkFor (node, text, warn, range) {
      checkExpression(node.for || '', text, warn, range);
      checkIdentifier(node.alias, 'v-for alias', text, warn, range);
      checkIdentifier(node.iterator1, 'v-for iterator', text, warn, range);
      checkIdentifier(node.iterator2, 'v-for iterator', text, warn, range);
    }
  
    function checkIdentifier (
      ident,
      type,
      text,
      warn,
      range
    ) {
      if (typeof ident === 'string') {
        try {
          new Function(("var " + ident + "=_"));
        } catch (e) {
          warn(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())), range);
        }
      }
    }
  
    function checkExpression (exp, text, warn, range) {
      try {
        new Function(("return " + exp));
      } catch (e) {
        var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
        if (keywordMatch) {
          warn(
            "avoid using JavaScript keyword as property name: " +
            "\"" + (keywordMatch[0]) + "\"\n  Raw expression: " + (text.trim()),
            range
          );
        } else {
          warn(
            "invalid expression: " + (e.message) + " in\n\n" +
            "    " + exp + "\n\n" +
            "  Raw expression: " + (text.trim()) + "\n",
            range
          );
        }
      }
    }
  
    /*  */
  
    var range = 2;
  
    function generateCodeFrame (
      source,
      start,
      end
    ) {
      if ( start === void 0 ) start = 0;
      if ( end === void 0 ) end = source.length;
  
      var lines = source.split(/\r?\n/);
      var count = 0;
      var res = [];
      for (var i = 0; i < lines.length; i++) {
        count += lines[i].length + 1;
        if (count >= start) {
          for (var j = i - range; j <= i + range || end > count; j++) {
            if (j < 0 || j >= lines.length) { continue }
            res.push(("" + (j + 1) + (repeat$1(" ", 3 - String(j + 1).length)) + "|  " + (lines[j])));
            var lineLength = lines[j].length;
            if (j === i) {
              // push underline
              var pad = start - (count - lineLength) + 1;
              var length = end > count ? lineLength - pad : end - start;
              res.push("   |  " + repeat$1(" ", pad) + repeat$1("^", length));
            } else if (j > i) {
              if (end > count) {
                var length$1 = Math.min(end - count, lineLength);
                res.push("   |  " + repeat$1("^", length$1));
              }
              count += lineLength + 1;
            }
          }
          break
        }
      }
      return res.join('\n')
    }
  
    function repeat$1 (str, n) {
      var result = '';
      if (n > 0) {
        while (true) { // eslint-disable-line
          if (n & 1) { result += str; }
          n >>>= 1;
          if (n <= 0) { break }
          str += str;
        }
      }
      return result
    }
  
    /*  */
  
  
  
    function createFunction (code, errors) {
      try {
        return new Function(code)
      } catch (err) {
        errors.push({ err: err, code: code });
        return noop
      }
    }
  
    function createCompileToFunctionFn (compile) {
      var cache = Object.create(null);
  
      return function compileToFunctions (
        template,
        options,
        vm
      ) {
        options = extend({}, options);
        var warn$$1 = options.warn || warn;
        delete options.warn;
  
        /* istanbul ignore if */
        {
          // detect possible CSP restriction
          try {
            new Function('return 1');
          } catch (e) {
            if (e.toString().match(/unsafe-eval|CSP/)) {
              warn$$1(
                'It seems you are using the standalone build of Vue.js in an ' +
                'environment with Content Security Policy that prohibits unsafe-eval. ' +
                'The template compiler cannot work in this environment. Consider ' +
                'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
                'templates into render functions.'
              );
            }
          }
        }
  
        // check cache
        var key = options.delimiters
          ? String(options.delimiters) + template
          : template;
        if (cache[key]) {
          return cache[key]
        }
  
        // compile
        var compiled = compile(template, options);
  
        // check compilation errors/tips
        {
          if (compiled.errors && compiled.errors.length) {
            if (options.outputSourceRange) {
              compiled.errors.forEach(function (e) {
                warn$$1(
                  "Error compiling template:\n\n" + (e.msg) + "\n\n" +
                  generateCodeFrame(template, e.start, e.end),
                  vm
                );
              });
            } else {
              warn$$1(
                "Error compiling template:\n\n" + template + "\n\n" +
                compiled.errors.map(function (e) { return ("- " + e); }).join('\n') + '\n',
                vm
              );
            }
          }
          if (compiled.tips && compiled.tips.length) {
            if (options.outputSourceRange) {
              compiled.tips.forEach(function (e) { return tip(e.msg, vm); });
            } else {
              compiled.tips.forEach(function (msg) { return tip(msg, vm); });
            }
          }
        }
  
        // turn code into functions
        var res = {};
        var fnGenErrors = [];
        res.render = createFunction(compiled.render, fnGenErrors);
        res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
          return createFunction(code, fnGenErrors)
        });
  
        // check function generation errors.
        // this should only happen if there is a bug in the compiler itself.
        // mostly for codegen development use
        /* istanbul ignore if */
        {
          if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
            warn$$1(
              "Failed to generate render function:\n\n" +
              fnGenErrors.map(function (ref) {
                var err = ref.err;
                var code = ref.code;
  
                return ((err.toString()) + " in\n\n" + code + "\n");
            }).join('\n'),
              vm
            );
          }
        }
  
        return (cache[key] = res)
      }
    }
  
    /*  */
  
    function createCompilerCreator (baseCompile) {
      return function createCompiler (baseOptions) {
        function compile (
          template,
          options
        ) {
          var finalOptions = Object.create(baseOptions);
          var errors = [];
          var tips = [];
  
          var warn = function (msg, range, tip) {
            (tip ? tips : errors).push(msg);
          };
  
          if (options) {
            if (options.outputSourceRange) {
              // $flow-disable-line
              var leadingSpaceLength = template.match(/^\s*/)[0].length;
  
              warn = function (msg, range, tip) {
                var data = { msg: msg };
                if (range) {
                  if (range.start != null) {
                    data.start = range.start + leadingSpaceLength;
                  }
                  if (range.end != null) {
                    data.end = range.end + leadingSpaceLength;
                  }
                }
                (tip ? tips : errors).push(data);
              };
            }
            // merge custom modules
            if (options.modules) {
              finalOptions.modules =
                (baseOptions.modules || []).concat(options.modules);
            }
            // merge custom directives
            if (options.directives) {
              finalOptions.directives = extend(
                Object.create(baseOptions.directives || null),
                options.directives
              );
            }
            // copy other options
            for (var key in options) {
              if (key !== 'modules' && key !== 'directives') {
                finalOptions[key] = options[key];
              }
            }
          }
  
          finalOptions.warn = warn;
  
          var compiled = baseCompile(template.trim(), finalOptions);
          {
            detectErrors(compiled.ast, warn);
          }
          compiled.errors = errors;
          compiled.tips = tips;
          return compiled
        }
  
        return {
          compile: compile,
          compileToFunctions: createCompileToFunctionFn(compile)
        }
      }
    }
  
    /*  */
  
    // `createCompilerCreator` allows creating compilers that use alternative
    // parser/optimizer/codegen, e.g the SSR optimizing compiler.
    // Here we just export a default compiler using the default parts.
    var createCompiler = createCompilerCreator(function baseCompile (
      template,
      options
    ) {
      var ast = parse(template.trim(), options);
      if (options.optimize !== false) {
        optimize(ast, options);
      }
      var code = generate(ast, options);
      return {
        ast: ast,
        render: code.render,
        staticRenderFns: code.staticRenderFns
      }
    });
  
    /*  */
  
    var ref$1 = createCompiler(baseOptions);
    var compile = ref$1.compile;
    var compileToFunctions = ref$1.compileToFunctions;
  
    /*  */
  
    // check whether current browser encodes a char inside attribute values
    var div;
    function getShouldDecode (href) {
      div = div || document.createElement('div');
      div.innerHTML = href ? "<a href=\"\n\"/>" : "<div a=\"\n\"/>";
      return div.innerHTML.indexOf('&#10;') > 0
    }
  
    // #3663: IE encodes newlines inside attribute values while other browsers don't
    var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
    // #6828: chrome encodes content in a[href]
    var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;
  
    /*  */
  
    var idToTemplate = cached(function (id) {
      var el = query(id);
      return el && el.innerHTML
    });
  
    var mount = Vue.prototype.$mount;
    Vue.prototype.$mount = function (
      el,
      hydrating
    ) {
      el = el && query(el);
  
      /* istanbul ignore if */
      if (el === document.body || el === document.documentElement) {
        warn(
          "Do not mount Vue to <html> or <body> - mount to normal elements instead."
        );
        return this
      }
  
      var options = this.$options;
      // resolve template/el and convert to render function
      if (!options.render) {
        var template = options.template;
        if (template) {
          if (typeof template === 'string') {
            if (template.charAt(0) === '#') {
              template = idToTemplate(template);
              /* istanbul ignore if */
              if (!template) {
                warn(
                  ("Template element not found or is empty: " + (options.template)),
                  this
                );
              }
            }
          } else if (template.nodeType) {
            template = template.innerHTML;
          } else {
            {
              warn('invalid template option:' + template, this);
            }
            return this
          }
        } else if (el) {
          template = getOuterHTML(el);
        }
        if (template) {
          /* istanbul ignore if */
          if (config.performance && mark) {
            mark('compile');
          }
  
          var ref = compileToFunctions(template, {
            outputSourceRange: "development" !== 'production',
            shouldDecodeNewlines: shouldDecodeNewlines,
            shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
            delimiters: options.delimiters,
            comments: options.comments
          }, this);
          var render = ref.render;
          var staticRenderFns = ref.staticRenderFns;
          options.render = render;
          options.staticRenderFns = staticRenderFns;
  
          /* istanbul ignore if */
          if (config.performance && mark) {
            mark('compile end');
            measure(("vue " + (this._name) + " compile"), 'compile', 'compile end');
          }
        }
      }
      return mount.call(this, el, hydrating)
    };
  
    /**
     * Get outerHTML of elements, taking care
     * of SVG elements in IE as well.
     */
    function getOuterHTML (el) {
      if (el.outerHTML) {
        return el.outerHTML
      } else {
        var container = document.createElement('div');
        container.appendChild(el.cloneNode(true));
        return container.innerHTML
      }
    }
  
    Vue.compile = compileToFunctions;
  
    return Vue;
  
  }));
/* axios v0.19.0-beta.1 | (c) 2018 by Matt Zabriskie */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["axios"] = factory();
	else
		root["axios"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	var bind = __webpack_require__(3);
	var Axios = __webpack_require__(5);
	var mergeConfig = __webpack_require__(22);
	var defaults = __webpack_require__(11);
	
	/**
	 * Create an instance of Axios
	 *
	 * @param {Object} defaultConfig The default config for the instance
	 * @return {Axios} A new instance of Axios
	 */
	function createInstance(defaultConfig) {
	  var context = new Axios(defaultConfig);
	  var instance = bind(Axios.prototype.request, context);
	
	  // Copy axios.prototype to instance
	  utils.extend(instance, Axios.prototype, context);
	
	  // Copy context to instance
	  utils.extend(instance, context);
	
	  return instance;
	}
	
	// Create the default instance to be exported
	var axios = createInstance(defaults);
	
	// Expose Axios class to allow class inheritance
	axios.Axios = Axios;
	
	// Factory for creating new instances
	axios.create = function create(instanceConfig) {
	  return createInstance(mergeConfig(axios.defaults, instanceConfig));
	};
	
	// Expose Cancel & CancelToken
	axios.Cancel = __webpack_require__(23);
	axios.CancelToken = __webpack_require__(24);
	axios.isCancel = __webpack_require__(10);
	
	// Expose all/spread
	axios.all = function all(promises) {
	  return Promise.all(promises);
	};
	axios.spread = __webpack_require__(25);
	
	module.exports = axios;
	
	// Allow use of default import syntax in TypeScript
	module.exports.default = axios;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var bind = __webpack_require__(3);
	var isBuffer = __webpack_require__(4);
	
	/*global toString:true*/
	
	// utils is a library of generic helper functions non-specific to axios
	
	var toString = Object.prototype.toString;
	
	/**
	 * Determine if a value is an Array
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an Array, otherwise false
	 */
	function isArray(val) {
	  return toString.call(val) === '[object Array]';
	}
	
	/**
	 * Determine if a value is an ArrayBuffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
	 */
	function isArrayBuffer(val) {
	  return toString.call(val) === '[object ArrayBuffer]';
	}
	
	/**
	 * Determine if a value is a FormData
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an FormData, otherwise false
	 */
	function isFormData(val) {
	  return (typeof FormData !== 'undefined') && (val instanceof FormData);
	}
	
	/**
	 * Determine if a value is a view on an ArrayBuffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
	 */
	function isArrayBufferView(val) {
	  var result;
	  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
	    result = ArrayBuffer.isView(val);
	  } else {
	    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
	  }
	  return result;
	}
	
	/**
	 * Determine if a value is a String
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a String, otherwise false
	 */
	function isString(val) {
	  return typeof val === 'string';
	}
	
	/**
	 * Determine if a value is a Number
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Number, otherwise false
	 */
	function isNumber(val) {
	  return typeof val === 'number';
	}
	
	/**
	 * Determine if a value is undefined
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if the value is undefined, otherwise false
	 */
	function isUndefined(val) {
	  return typeof val === 'undefined';
	}
	
	/**
	 * Determine if a value is an Object
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an Object, otherwise false
	 */
	function isObject(val) {
	  return val !== null && typeof val === 'object';
	}
	
	/**
	 * Determine if a value is a Date
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Date, otherwise false
	 */
	function isDate(val) {
	  return toString.call(val) === '[object Date]';
	}
	
	/**
	 * Determine if a value is a File
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a File, otherwise false
	 */
	function isFile(val) {
	  return toString.call(val) === '[object File]';
	}
	
	/**
	 * Determine if a value is a Blob
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Blob, otherwise false
	 */
	function isBlob(val) {
	  return toString.call(val) === '[object Blob]';
	}
	
	/**
	 * Determine if a value is a Function
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Function, otherwise false
	 */
	function isFunction(val) {
	  return toString.call(val) === '[object Function]';
	}
	
	/**
	 * Determine if a value is a Stream
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Stream, otherwise false
	 */
	function isStream(val) {
	  return isObject(val) && isFunction(val.pipe);
	}
	
	/**
	 * Determine if a value is a URLSearchParams object
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
	 */
	function isURLSearchParams(val) {
	  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
	}
	
	/**
	 * Trim excess whitespace off the beginning and end of a string
	 *
	 * @param {String} str The String to trim
	 * @returns {String} The String freed of excess whitespace
	 */
	function trim(str) {
	  return str.replace(/^\s*/, '').replace(/\s*$/, '');
	}
	
	/**
	 * Determine if we're running in a standard browser environment
	 *
	 * This allows axios to run in a web worker, and react-native.
	 * Both environments support XMLHttpRequest, but not fully standard globals.
	 *
	 * web workers:
	 *  typeof window -> undefined
	 *  typeof document -> undefined
	 *
	 * react-native:
	 *  navigator.product -> 'ReactNative'
	 * nativescript
	 *  navigator.product -> 'NativeScript' or 'NS'
	 */
	function isStandardBrowserEnv() {
	  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
	                                           navigator.product === 'NativeScript' ||
	                                           navigator.product === 'NS')) {
	    return false;
	  }
	  return (
	    typeof window !== 'undefined' &&
	    typeof document !== 'undefined'
	  );
	}
	
	/**
	 * Iterate over an Array or an Object invoking a function for each item.
	 *
	 * If `obj` is an Array callback will be called passing
	 * the value, index, and complete array for each item.
	 *
	 * If 'obj' is an Object callback will be called passing
	 * the value, key, and complete object for each property.
	 *
	 * @param {Object|Array} obj The object to iterate
	 * @param {Function} fn The callback to invoke for each item
	 */
	function forEach(obj, fn) {
	  // Don't bother if no value provided
	  if (obj === null || typeof obj === 'undefined') {
	    return;
	  }
	
	  // Force an array if not already something iterable
	  if (typeof obj !== 'object') {
	    /*eslint no-param-reassign:0*/
	    obj = [obj];
	  }
	
	  if (isArray(obj)) {
	    // Iterate over array values
	    for (var i = 0, l = obj.length; i < l; i++) {
	      fn.call(null, obj[i], i, obj);
	    }
	  } else {
	    // Iterate over object keys
	    for (var key in obj) {
	      if (Object.prototype.hasOwnProperty.call(obj, key)) {
	        fn.call(null, obj[key], key, obj);
	      }
	    }
	  }
	}
	
	/**
	 * Accepts varargs expecting each argument to be an object, then
	 * immutably merges the properties of each object and returns result.
	 *
	 * When multiple objects contain the same key the later object in
	 * the arguments list will take precedence.
	 *
	 * Example:
	 *
	 * ```js
	 * var result = merge({foo: 123}, {foo: 456});
	 * console.log(result.foo); // outputs 456
	 * ```
	 *
	 * @param {Object} obj1 Object to merge
	 * @returns {Object} Result of all merge properties
	 */
	function merge(/* obj1, obj2, obj3, ... */) {
	  var result = {};
	  function assignValue(val, key) {
	    if (typeof result[key] === 'object' && typeof val === 'object') {
	      result[key] = merge(result[key], val);
	    } else {
	      result[key] = val;
	    }
	  }
	
	  for (var i = 0, l = arguments.length; i < l; i++) {
	    forEach(arguments[i], assignValue);
	  }
	  return result;
	}
	
	/**
	 * Function equal to merge with the difference being that no reference
	 * to original objects is kept.
	 *
	 * @see merge
	 * @param {Object} obj1 Object to merge
	 * @returns {Object} Result of all merge properties
	 */
	function deepMerge(/* obj1, obj2, obj3, ... */) {
	  var result = {};
	  function assignValue(val, key) {
	    if (typeof result[key] === 'object' && typeof val === 'object') {
	      result[key] = deepMerge(result[key], val);
	    } else if (typeof val === 'object') {
	      result[key] = deepMerge({}, val);
	    } else {
	      result[key] = val;
	    }
	  }
	
	  for (var i = 0, l = arguments.length; i < l; i++) {
	    forEach(arguments[i], assignValue);
	  }
	  return result;
	}
	
	/**
	 * Extends object a by mutably adding to it the properties of object b.
	 *
	 * @param {Object} a The object to be extended
	 * @param {Object} b The object to copy properties from
	 * @param {Object} thisArg The object to bind function to
	 * @return {Object} The resulting value of object a
	 */
	function extend(a, b, thisArg) {
	  forEach(b, function assignValue(val, key) {
	    if (thisArg && typeof val === 'function') {
	      a[key] = bind(val, thisArg);
	    } else {
	      a[key] = val;
	    }
	  });
	  return a;
	}
	
	module.exports = {
	  isArray: isArray,
	  isArrayBuffer: isArrayBuffer,
	  isBuffer: isBuffer,
	  isFormData: isFormData,
	  isArrayBufferView: isArrayBufferView,
	  isString: isString,
	  isNumber: isNumber,
	  isObject: isObject,
	  isUndefined: isUndefined,
	  isDate: isDate,
	  isFile: isFile,
	  isBlob: isBlob,
	  isFunction: isFunction,
	  isStream: isStream,
	  isURLSearchParams: isURLSearchParams,
	  isStandardBrowserEnv: isStandardBrowserEnv,
	  forEach: forEach,
	  merge: merge,
	  deepMerge: deepMerge,
	  extend: extend,
	  trim: trim
	};


/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = function bind(fn, thisArg) {
	  return function wrap() {
	    var args = new Array(arguments.length);
	    for (var i = 0; i < args.length; i++) {
	      args[i] = arguments[i];
	    }
	    return fn.apply(thisArg, args);
	  };
	};


/***/ }),
/* 4 */
/***/ (function(module, exports) {

	/*!
	 * Determine if an object is a Buffer
	 *
	 * @author   Feross Aboukhadijeh <https://feross.org>
	 * @license  MIT
	 */
	
	module.exports = function isBuffer (obj) {
	  return obj != null && obj.constructor != null &&
	    typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
	}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	var buildURL = __webpack_require__(6);
	var InterceptorManager = __webpack_require__(7);
	var dispatchRequest = __webpack_require__(8);
	var mergeConfig = __webpack_require__(22);
	
	/**
	 * Create a new instance of Axios
	 *
	 * @param {Object} instanceConfig The default config for the instance
	 */
	function Axios(instanceConfig) {
	  this.defaults = instanceConfig;
	  this.interceptors = {
	    request: new InterceptorManager(),
	    response: new InterceptorManager()
	  };
	}
	
	/**
	 * Dispatch a request
	 *
	 * @param {Object} config The config specific for this request (merged with this.defaults)
	 */
	Axios.prototype.request = function request(config) {
	  /*eslint no-param-reassign:0*/
	  // Allow for axios('example/url'[, config]) a la fetch API
	  if (typeof config === 'string') {
	    config = arguments[1] || {};
	    config.url = arguments[0];
	  } else {
	    config = config || {};
	  }
	
	  config = mergeConfig(this.defaults, config);
	  config.method = config.method ? config.method.toLowerCase() : 'get';
	
	  // Hook up interceptors middleware
	  var chain = [dispatchRequest, undefined];
	  var promise = Promise.resolve(config);
	
	  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
	    chain.unshift(interceptor.fulfilled, interceptor.rejected);
	  });
	
	  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
	    chain.push(interceptor.fulfilled, interceptor.rejected);
	  });
	
	  while (chain.length) {
	    promise = promise.then(chain.shift(), chain.shift());
	  }
	
	  return promise;
	};
	
	Axios.prototype.getUri = function getUri(config) {
	  config = mergeConfig(this.defaults, config);
	  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
	};
	
	// Provide aliases for supported request methods
	utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
	  /*eslint func-names:0*/
	  Axios.prototype[method] = function(url, config) {
	    return this.request(utils.merge(config || {}, {
	      method: method,
	      url: url
	    }));
	  };
	});
	
	utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
	  /*eslint func-names:0*/
	  Axios.prototype[method] = function(url, data, config) {
	    return this.request(utils.merge(config || {}, {
	      method: method,
	      url: url,
	      data: data
	    }));
	  };
	});
	
	module.exports = Axios;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	
	function encode(val) {
	  return encodeURIComponent(val).
	    replace(/%40/gi, '@').
	    replace(/%3A/gi, ':').
	    replace(/%24/g, '$').
	    replace(/%2C/gi, ',').
	    replace(/%20/g, '+').
	    replace(/%5B/gi, '[').
	    replace(/%5D/gi, ']');
	}
	
	/**
	 * Build a URL by appending params to the end
	 *
	 * @param {string} url The base of the url (e.g., http://www.google.com)
	 * @param {object} [params] The params to be appended
	 * @returns {string} The formatted url
	 */
	module.exports = function buildURL(url, params, paramsSerializer) {
	  /*eslint no-param-reassign:0*/
	  if (!params) {
	    return url;
	  }
	
	  var serializedParams;
	  if (paramsSerializer) {
	    serializedParams = paramsSerializer(params);
	  } else if (utils.isURLSearchParams(params)) {
	    serializedParams = params.toString();
	  } else {
	    var parts = [];
	
	    utils.forEach(params, function serialize(val, key) {
	      if (val === null || typeof val === 'undefined') {
	        return;
	      }
	
	      if (utils.isArray(val)) {
	        key = key + '[]';
	      } else {
	        val = [val];
	      }
	
	      utils.forEach(val, function parseValue(v) {
	        if (utils.isDate(v)) {
	          v = v.toISOString();
	        } else if (utils.isObject(v)) {
	          v = JSON.stringify(v);
	        }
	        parts.push(encode(key) + '=' + encode(v));
	      });
	    });
	
	    serializedParams = parts.join('&');
	  }
	
	  if (serializedParams) {
	    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
	  }
	
	  return url;
	};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	
	function InterceptorManager() {
	  this.handlers = [];
	}
	
	/**
	 * Add a new interceptor to the stack
	 *
	 * @param {Function} fulfilled The function to handle `then` for a `Promise`
	 * @param {Function} rejected The function to handle `reject` for a `Promise`
	 *
	 * @return {Number} An ID used to remove interceptor later
	 */
	InterceptorManager.prototype.use = function use(fulfilled, rejected) {
	  this.handlers.push({
	    fulfilled: fulfilled,
	    rejected: rejected
	  });
	  return this.handlers.length - 1;
	};
	
	/**
	 * Remove an interceptor from the stack
	 *
	 * @param {Number} id The ID that was returned by `use`
	 */
	InterceptorManager.prototype.eject = function eject(id) {
	  if (this.handlers[id]) {
	    this.handlers[id] = null;
	  }
	};
	
	/**
	 * Iterate over all the registered interceptors
	 *
	 * This method is particularly useful for skipping over any
	 * interceptors that may have become `null` calling `eject`.
	 *
	 * @param {Function} fn The function to call for each interceptor
	 */
	InterceptorManager.prototype.forEach = function forEach(fn) {
	  utils.forEach(this.handlers, function forEachHandler(h) {
	    if (h !== null) {
	      fn(h);
	    }
	  });
	};
	
	module.exports = InterceptorManager;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	var transformData = __webpack_require__(9);
	var isCancel = __webpack_require__(10);
	var defaults = __webpack_require__(11);
	var isAbsoluteURL = __webpack_require__(20);
	var combineURLs = __webpack_require__(21);
	
	/**
	 * Throws a `Cancel` if cancellation has been requested.
	 */
	function throwIfCancellationRequested(config) {
	  if (config.cancelToken) {
	    config.cancelToken.throwIfRequested();
	  }
	}
	
	/**
	 * Dispatch a request to the server using the configured adapter.
	 *
	 * @param {object} config The config that is to be used for the request
	 * @returns {Promise} The Promise to be fulfilled
	 */
	module.exports = function dispatchRequest(config) {
	  throwIfCancellationRequested(config);
	
	  // Support baseURL config
	  if (config.baseURL && !isAbsoluteURL(config.url)) {
	    config.url = combineURLs(config.baseURL, config.url);
	  }
	
	  // Ensure headers exist
	  config.headers = config.headers || {};
	
	  // Transform request data
	  config.data = transformData(
	    config.data,
	    config.headers,
	    config.transformRequest
	  );
	
	  // Flatten headers
	  config.headers = utils.merge(
	    config.headers.common || {},
	    config.headers[config.method] || {},
	    config.headers || {}
	  );
	
	  utils.forEach(
	    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
	    function cleanHeaderConfig(method) {
	      delete config.headers[method];
	    }
	  );
	
	  var adapter = config.adapter || defaults.adapter;
	
	  return adapter(config).then(function onAdapterResolution(response) {
	    throwIfCancellationRequested(config);
	
	    // Transform response data
	    response.data = transformData(
	      response.data,
	      response.headers,
	      config.transformResponse
	    );
	
	    return response;
	  }, function onAdapterRejection(reason) {
	    if (!isCancel(reason)) {
	      throwIfCancellationRequested(config);
	
	      // Transform response data
	      if (reason && reason.response) {
	        reason.response.data = transformData(
	          reason.response.data,
	          reason.response.headers,
	          config.transformResponse
	        );
	      }
	    }
	
	    return Promise.reject(reason);
	  });
	};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	
	/**
	 * Transform the data for a request or a response
	 *
	 * @param {Object|String} data The data to be transformed
	 * @param {Array} headers The headers for the request or response
	 * @param {Array|Function} fns A single function or Array of functions
	 * @returns {*} The resulting transformed data
	 */
	module.exports = function transformData(data, headers, fns) {
	  /*eslint no-param-reassign:0*/
	  utils.forEach(fns, function transform(fn) {
	    data = fn(data, headers);
	  });
	
	  return data;
	};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = function isCancel(value) {
	  return !!(value && value.__CANCEL__);
	};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	var normalizeHeaderName = __webpack_require__(12);
	
	var DEFAULT_CONTENT_TYPE = {
	  'Content-Type': 'application/x-www-form-urlencoded'
	};
	
	function setContentTypeIfUnset(headers, value) {
	  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
	    headers['Content-Type'] = value;
	  }
	}
	
	function getDefaultAdapter() {
	  var adapter;
	  // Only Node.JS has a process variable that is of [[Class]] process
	  if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
	    // For node use HTTP adapter
	    adapter = __webpack_require__(13);
	  } else if (typeof XMLHttpRequest !== 'undefined') {
	    // For browsers use XHR adapter
	    adapter = __webpack_require__(13);
	  }
	  return adapter;
	}
	
	var defaults = {
	  adapter: getDefaultAdapter(),
	
	  transformRequest: [function transformRequest(data, headers) {
	    normalizeHeaderName(headers, 'Accept');
	    normalizeHeaderName(headers, 'Content-Type');
	    if (utils.isFormData(data) ||
	      utils.isArrayBuffer(data) ||
	      utils.isBuffer(data) ||
	      utils.isStream(data) ||
	      utils.isFile(data) ||
	      utils.isBlob(data)
	    ) {
	      return data;
	    }
	    if (utils.isArrayBufferView(data)) {
	      return data.buffer;
	    }
	    if (utils.isURLSearchParams(data)) {
	      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
	      return data.toString();
	    }
	    if (utils.isObject(data)) {
	      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
	      return JSON.stringify(data);
	    }
	    return data;
	  }],
	
	  transformResponse: [function transformResponse(data) {
	    /*eslint no-param-reassign:0*/
	    if (typeof data === 'string') {
	      try {
	        data = JSON.parse(data);
	      } catch (e) { /* Ignore */ }
	    }
	    return data;
	  }],
	
	  /**
	   * A timeout in milliseconds to abort a request. If set to 0 (default) a
	   * timeout is not created.
	   */
	  timeout: 0,
	
	  xsrfCookieName: 'XSRF-TOKEN',
	  xsrfHeaderName: 'X-XSRF-TOKEN',
	
	  maxContentLength: -1,
	
	  validateStatus: function validateStatus(status) {
	    return status >= 200 && status < 300;
	  }
	};
	
	defaults.headers = {
	  common: {
	    'Accept': 'application/json, text/plain, */*'
	  }
	};
	
	utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
	  defaults.headers[method] = {};
	});
	
	utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
	  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
	});
	
	module.exports = defaults;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	
	module.exports = function normalizeHeaderName(headers, normalizedName) {
	  utils.forEach(headers, function processHeader(value, name) {
	    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
	      headers[normalizedName] = value;
	      delete headers[name];
	    }
	  });
	};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	var settle = __webpack_require__(14);
	var buildURL = __webpack_require__(6);
	var parseHeaders = __webpack_require__(17);
	var isURLSameOrigin = __webpack_require__(18);
	var createError = __webpack_require__(15);
	
	module.exports = function xhrAdapter(config) {
	  return new Promise(function dispatchXhrRequest(resolve, reject) {
	    var requestData = config.data;
	    var requestHeaders = config.headers;
	
	    if (utils.isFormData(requestData)) {
	      delete requestHeaders['Content-Type']; // Let the browser set it
	    }
	
	    var request = new XMLHttpRequest();
	
	    // HTTP basic authentication
	    if (config.auth) {
	      var username = config.auth.username || '';
	      var password = config.auth.password || '';
	      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
	    }
	
	    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);
	
	    // Set the request timeout in MS
	    request.timeout = config.timeout;
	
	    // Listen for ready state
	    request.onreadystatechange = function handleLoad() {
	      if (!request || request.readyState !== 4) {
	        return;
	      }
	
	      // The request errored out and we didn't get a response, this will be
	      // handled by onerror instead
	      // With one exception: request that using file: protocol, most browsers
	      // will return status as 0 even though it's a successful request
	      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
	        return;
	      }
	
	      // Prepare the response
	      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
	      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
	      var response = {
	        data: responseData,
	        status: request.status,
	        statusText: request.statusText,
	        headers: responseHeaders,
	        config: config,
	        request: request
	      };
	
	      settle(resolve, reject, response);
	
	      // Clean up request
	      request = null;
	    };
	
	    // Handle browser request cancellation (as opposed to a manual cancellation)
	    request.onabort = function handleAbort() {
	      if (!request) {
	        return;
	      }
	
	      reject(createError('Request aborted', config, 'ECONNABORTED', request));
	
	      // Clean up request
	      request = null;
	    };
	
	    // Handle low level network errors
	    request.onerror = function handleError() {
	      // Real errors are hidden from us by the browser
	      // onerror should only fire if it's a network error
	      reject(createError('Network Error', config, null, request));
	
	      // Clean up request
	      request = null;
	    };
	
	    // Handle timeout
	    request.ontimeout = function handleTimeout() {
	      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
	        request));
	
	      // Clean up request
	      request = null;
	    };
	
	    // Add xsrf header
	    // This is only done if running in a standard browser environment.
	    // Specifically not if we're in a web worker, or react-native.
	    if (utils.isStandardBrowserEnv()) {
	      var cookies = __webpack_require__(19);
	
	      // Add xsrf header
	      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
	        cookies.read(config.xsrfCookieName) :
	        undefined;
	
	      if (xsrfValue) {
	        requestHeaders[config.xsrfHeaderName] = xsrfValue;
	      }
	    }
	
	    // Add headers to the request
	    if ('setRequestHeader' in request) {
	      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
	        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
	          // Remove Content-Type if data is undefined
	          delete requestHeaders[key];
	        } else {
	          // Otherwise add header to the request
	          request.setRequestHeader(key, val);
	        }
	      });
	    }
	
	    // Add withCredentials to request if needed
	    if (config.withCredentials) {
	      request.withCredentials = true;
	    }
	
	    // Add responseType to request if needed
	    if (config.responseType) {
	      try {
	        request.responseType = config.responseType;
	      } catch (e) {
	        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
	        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
	        if (config.responseType !== 'json') {
	          throw e;
	        }
	      }
	    }
	
	    // Handle progress if needed
	    if (typeof config.onDownloadProgress === 'function') {
	      request.addEventListener('progress', config.onDownloadProgress);
	    }
	
	    // Not all browsers support upload events
	    if (typeof config.onUploadProgress === 'function' && request.upload) {
	      request.upload.addEventListener('progress', config.onUploadProgress);
	    }
	
	    if (config.cancelToken) {
	      // Handle cancellation
	      config.cancelToken.promise.then(function onCanceled(cancel) {
	        if (!request) {
	          return;
	        }
	
	        request.abort();
	        reject(cancel);
	        // Clean up request
	        request = null;
	      });
	    }
	
	    if (requestData === undefined) {
	      requestData = null;
	    }
	
	    // Send the request
	    request.send(requestData);
	  });
	};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var createError = __webpack_require__(15);
	
	/**
	 * Resolve or reject a Promise based on response status.
	 *
	 * @param {Function} resolve A function that resolves the promise.
	 * @param {Function} reject A function that rejects the promise.
	 * @param {object} response The response.
	 */
	module.exports = function settle(resolve, reject, response) {
	  var validateStatus = response.config.validateStatus;
	  if (!validateStatus || validateStatus(response.status)) {
	    resolve(response);
	  } else {
	    reject(createError(
	      'Request failed with status code ' + response.status,
	      response.config,
	      null,
	      response.request,
	      response
	    ));
	  }
	};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var enhanceError = __webpack_require__(16);
	
	/**
	 * Create an Error with the specified message, config, error code, request and response.
	 *
	 * @param {string} message The error message.
	 * @param {Object} config The config.
	 * @param {string} [code] The error code (for example, 'ECONNABORTED').
	 * @param {Object} [request] The request.
	 * @param {Object} [response] The response.
	 * @returns {Error} The created error.
	 */
	module.exports = function createError(message, config, code, request, response) {
	  var error = new Error(message);
	  return enhanceError(error, config, code, request, response);
	};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * Update an Error with the specified config, error code, and response.
	 *
	 * @param {Error} error The error to update.
	 * @param {Object} config The config.
	 * @param {string} [code] The error code (for example, 'ECONNABORTED').
	 * @param {Object} [request] The request.
	 * @param {Object} [response] The response.
	 * @returns {Error} The error.
	 */
	module.exports = function enhanceError(error, config, code, request, response) {
	  error.config = config;
	  if (code) {
	    error.code = code;
	  }
	  error.request = request;
	  error.response = response;
	  error.toJSON = function() {
	    return {
	      // Standard
	      message: this.message,
	      name: this.name,
	      // Microsoft
	      description: this.description,
	      number: this.number,
	      // Mozilla
	      fileName: this.fileName,
	      lineNumber: this.lineNumber,
	      columnNumber: this.columnNumber,
	      stack: this.stack,
	      // Axios
	      config: this.config,
	      code: this.code
	    };
	  };
	  return error;
	};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	
	// Headers whose duplicates are ignored by node
	// c.f. https://nodejs.org/api/http.html#http_message_headers
	var ignoreDuplicateOf = [
	  'age', 'authorization', 'content-length', 'content-type', 'etag',
	  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
	  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
	  'referer', 'retry-after', 'user-agent'
	];
	
	/**
	 * Parse headers into an object
	 *
	 * ```
	 * Date: Wed, 27 Aug 2014 08:58:49 GMT
	 * Content-Type: application/json
	 * Connection: keep-alive
	 * Transfer-Encoding: chunked
	 * ```
	 *
	 * @param {String} headers Headers needing to be parsed
	 * @returns {Object} Headers parsed into an object
	 */
	module.exports = function parseHeaders(headers) {
	  var parsed = {};
	  var key;
	  var val;
	  var i;
	
	  if (!headers) { return parsed; }
	
	  utils.forEach(headers.split('\n'), function parser(line) {
	    i = line.indexOf(':');
	    key = utils.trim(line.substr(0, i)).toLowerCase();
	    val = utils.trim(line.substr(i + 1));
	
	    if (key) {
	      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
	        return;
	      }
	      if (key === 'set-cookie') {
	        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
	      } else {
	        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
	      }
	    }
	  });
	
	  return parsed;
	};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	
	module.exports = (
	  utils.isStandardBrowserEnv() ?
	
	  // Standard browser envs have full support of the APIs needed to test
	  // whether the request URL is of the same origin as current location.
	    (function standardBrowserEnv() {
	      var msie = /(msie|trident)/i.test(navigator.userAgent);
	      var urlParsingNode = document.createElement('a');
	      var originURL;
	
	      /**
	    * Parse a URL to discover it's components
	    *
	    * @param {String} url The URL to be parsed
	    * @returns {Object}
	    */
	      function resolveURL(url) {
	        var href = url;
	
	        if (msie) {
	        // IE needs attribute set twice to normalize properties
	          urlParsingNode.setAttribute('href', href);
	          href = urlParsingNode.href;
	        }
	
	        urlParsingNode.setAttribute('href', href);
	
	        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
	        return {
	          href: urlParsingNode.href,
	          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
	          host: urlParsingNode.host,
	          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
	          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
	          hostname: urlParsingNode.hostname,
	          port: urlParsingNode.port,
	          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
	            urlParsingNode.pathname :
	            '/' + urlParsingNode.pathname
	        };
	      }
	
	      originURL = resolveURL(window.location.href);
	
	      /**
	    * Determine if a URL shares the same origin as the current location
	    *
	    * @param {String} requestURL The URL to test
	    * @returns {boolean} True if URL shares the same origin, otherwise false
	    */
	      return function isURLSameOrigin(requestURL) {
	        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
	        return (parsed.protocol === originURL.protocol &&
	            parsed.host === originURL.host);
	      };
	    })() :
	
	  // Non standard browser envs (web workers, react-native) lack needed support.
	    (function nonStandardBrowserEnv() {
	      return function isURLSameOrigin() {
	        return true;
	      };
	    })()
	);


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	
	module.exports = (
	  utils.isStandardBrowserEnv() ?
	
	  // Standard browser envs support document.cookie
	    (function standardBrowserEnv() {
	      return {
	        write: function write(name, value, expires, path, domain, secure) {
	          var cookie = [];
	          cookie.push(name + '=' + encodeURIComponent(value));
	
	          if (utils.isNumber(expires)) {
	            cookie.push('expires=' + new Date(expires).toGMTString());
	          }
	
	          if (utils.isString(path)) {
	            cookie.push('path=' + path);
	          }
	
	          if (utils.isString(domain)) {
	            cookie.push('domain=' + domain);
	          }
	
	          if (secure === true) {
	            cookie.push('secure');
	          }
	
	          document.cookie = cookie.join('; ');
	        },
	
	        read: function read(name) {
	          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
	          return (match ? decodeURIComponent(match[3]) : null);
	        },
	
	        remove: function remove(name) {
	          this.write(name, '', Date.now() - 86400000);
	        }
	      };
	    })() :
	
	  // Non standard browser env (web workers, react-native) lack needed support.
	    (function nonStandardBrowserEnv() {
	      return {
	        write: function write() {},
	        read: function read() { return null; },
	        remove: function remove() {}
	      };
	    })()
	);


/***/ }),
/* 20 */
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * Determines whether the specified URL is absolute
	 *
	 * @param {string} url The URL to test
	 * @returns {boolean} True if the specified URL is absolute, otherwise false
	 */
	module.exports = function isAbsoluteURL(url) {
	  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
	  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
	  // by any combination of letters, digits, plus, period, or hyphen.
	  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
	};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * Creates a new URL by combining the specified URLs
	 *
	 * @param {string} baseURL The base URL
	 * @param {string} relativeURL The relative URL
	 * @returns {string} The combined URL
	 */
	module.exports = function combineURLs(baseURL, relativeURL) {
	  return relativeURL
	    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
	    : baseURL;
	};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	
	/**
	 * Config-specific merge-function which creates a new config-object
	 * by merging two configuration objects together.
	 *
	 * @param {Object} config1
	 * @param {Object} config2
	 * @returns {Object} New object resulting from merging config2 to config1
	 */
	module.exports = function mergeConfig(config1, config2) {
	  // eslint-disable-next-line no-param-reassign
	  config2 = config2 || {};
	  var config = {};
	
	  utils.forEach(['url', 'method', 'params', 'data'], function valueFromConfig2(prop) {
	    if (typeof config2[prop] !== 'undefined') {
	      config[prop] = config2[prop];
	    }
	  });
	
	  utils.forEach(['headers', 'auth', 'proxy'], function mergeDeepProperties(prop) {
	    if (utils.isObject(config2[prop])) {
	      config[prop] = utils.deepMerge(config1[prop], config2[prop]);
	    } else if (typeof config2[prop] !== 'undefined') {
	      config[prop] = config2[prop];
	    } else if (utils.isObject(config1[prop])) {
	      config[prop] = utils.deepMerge(config1[prop]);
	    } else if (typeof config1[prop] !== 'undefined') {
	      config[prop] = config1[prop];
	    }
	  });
	
	  utils.forEach([
	    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
	    'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
	    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'maxContentLength',
	    'validateStatus', 'maxRedirects', 'httpAgent', 'httpsAgent', 'cancelToken',
	    'socketPath'
	  ], function defaultToConfig2(prop) {
	    if (typeof config2[prop] !== 'undefined') {
	      config[prop] = config2[prop];
	    } else if (typeof config1[prop] !== 'undefined') {
	      config[prop] = config1[prop];
	    }
	  });
	
	  return config;
	};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * A `Cancel` is an object that is thrown when an operation is canceled.
	 *
	 * @class
	 * @param {string=} message The message.
	 */
	function Cancel(message) {
	  this.message = message;
	}
	
	Cancel.prototype.toString = function toString() {
	  return 'Cancel' + (this.message ? ': ' + this.message : '');
	};
	
	Cancel.prototype.__CANCEL__ = true;
	
	module.exports = Cancel;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var Cancel = __webpack_require__(23);
	
	/**
	 * A `CancelToken` is an object that can be used to request cancellation of an operation.
	 *
	 * @class
	 * @param {Function} executor The executor function.
	 */
	function CancelToken(executor) {
	  if (typeof executor !== 'function') {
	    throw new TypeError('executor must be a function.');
	  }
	
	  var resolvePromise;
	  this.promise = new Promise(function promiseExecutor(resolve) {
	    resolvePromise = resolve;
	  });
	
	  var token = this;
	  executor(function cancel(message) {
	    if (token.reason) {
	      // Cancellation has already been requested
	      return;
	    }
	
	    token.reason = new Cancel(message);
	    resolvePromise(token.reason);
	  });
	}
	
	/**
	 * Throws a `Cancel` if cancellation has been requested.
	 */
	CancelToken.prototype.throwIfRequested = function throwIfRequested() {
	  if (this.reason) {
	    throw this.reason;
	  }
	};
	
	/**
	 * Returns an object that contains a new `CancelToken` and a function that, when called,
	 * cancels the `CancelToken`.
	 */
	CancelToken.source = function source() {
	  var cancel;
	  var token = new CancelToken(function executor(c) {
	    cancel = c;
	  });
	  return {
	    token: token,
	    cancel: cancel
	  };
	};
	
	module.exports = CancelToken;


/***/ }),
/* 25 */
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * Syntactic sugar for invoking a function and expanding an array for arguments.
	 *
	 * Common use case would be to use `Function.prototype.apply`.
	 *
	 *  ```js
	 *  function f(x, y, z) {}
	 *  var args = [1, 2, 3];
	 *  f.apply(null, args);
	 *  ```
	 *
	 * With `spread` this example can be re-written.
	 *
	 *  ```js
	 *  spread(function(x, y, z) {})([1, 2, 3]);
	 *  ```
	 *
	 * @param {Function} callback
	 * @returns {Function}
	 */
	module.exports = function spread(callback) {
	  return function wrap(arr) {
	    return callback.apply(null, arr);
	  };
	};


/***/ })
/******/ ])
});
;
//# sourceMappingURL=axios.map
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.vuelidate=e():t.vuelidate=e()}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=28)}({26:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.pushParams=a,e.popParams=l,e.withParams=function(t,e){if("object"===o(t)&&void 0!==e)return n=t,r=e,c(function(t){return function(){t(n);for(var e=arguments.length,o=new Array(e),i=0;i<e;i++)o[i]=arguments[i];return r.apply(this,o)}});var n,r;return c(t)},e._setTarget=e.target=void 0;var i=[],u=null;e.target=u;function a(){null!==u&&i.push(u),e.target=u={}}function l(){var t=u,n=e.target=u=i.pop()||null;return n&&(Array.isArray(n.$sub)||(n.$sub=[]),n.$sub.push(t)),t}function s(t){if("object"!==o(t)||Array.isArray(t))throw new Error("params must be an object");e.target=u=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){r(t,e,n[e])})}return t}({},u,t)}function c(t){var e=t(s);return function(){a();try{for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.apply(this,n)}finally{l()}}}e._setTarget=function(t){e.target=u=t}},27:function(t,e,n){"use strict";function r(t){return null===t||void 0===t}function o(t){return null!==t&&void 0!==t}function i(t,e){return e.tag===t.tag&&e.key===t.key}function u(t){var e=t.tag;t.vm=new e({data:t.args})}function a(t,e,n){var r,i,u={};for(r=e;r<=n;++r)o(i=t[r].key)&&(u[i]=r);return u}function l(t,e,n){for(;e<=n;++e)u(t[e])}function s(t,e,n){for(;e<=n;++e){var r=t[e];o(r)&&(r.vm.$destroy(),r.vm=null)}}function c(t,e){t!==e&&(e.vm=t.vm,function(t){for(var e=Object.keys(t.args),n=0;n<e.length;n++)e.forEach(function(e){t.vm[e]=t.args[e]})}(e))}Object.defineProperty(e,"__esModule",{value:!0}),e.patchChildren=function(t,e){o(t)&&o(e)?t!==e&&function(t,e){var n,f,d,h=0,y=0,v=t.length-1,p=t[0],m=t[v],b=e.length-1,g=e[0],M=e[b];for(;h<=v&&y<=b;)r(p)?p=t[++h]:r(m)?m=t[--v]:i(p,g)?(c(p,g),p=t[++h],g=e[++y]):i(m,M)?(c(m,M),m=t[--v],M=e[--b]):i(p,M)?(c(p,M),p=t[++h],M=e[--b]):i(m,g)?(c(m,g),m=t[--v],g=e[++y]):(r(n)&&(n=a(t,h,v)),r(f=o(g.key)?n[g.key]:null)?(u(g),g=e[++y]):i(d=t[f],g)?(c(d,g),t[f]=void 0,g=e[++y]):(u(g),g=e[++y]));h>v?l(e,y,b):y>b&&s(t,h,v)}(t,e):o(e)?l(e,0,e.length-1):o(t)&&s(t,0,t.length-1)},e.h=function(t,e,n){return{tag:t,key:e,args:n}}},28:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Vuelidate=O,Object.defineProperty(e,"withParams",{enumerable:!0,get:function(){return o.withParams}}),e.default=e.validationMixin=void 0;var r=n(27),o=n(26);function i(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){a(t,e,n[e])})}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var s=function(){return null},c=function(t,e,n){return t.reduce(function(t,r){return t[n?n(r):r]=e(r),t},{})};function f(t){return"function"==typeof t}function d(t){return null!==t&&("object"===l(t)||f(t))}var h=function(t,e,n,r){if("function"==typeof n)return n.call(t,e,r);n=Array.isArray(n)?n:n.split(".");for(var o=0;o<n.length;o++){if(!e||"object"!==l(e))return r;e=e[n[o]]}return void 0===e?r:e},y="__isVuelidateAsyncVm";var v={$invalid:function(){var t=this,e=this.proxy;return this.nestedKeys.some(function(e){return t.refProxy(e).$invalid})||this.ruleKeys.some(function(t){return!e[t]})},$dirty:function(){var t=this;return!!this.dirty||0!==this.nestedKeys.length&&this.nestedKeys.every(function(e){return t.refProxy(e).$dirty})},$anyDirty:function(){var t=this;return!!this.dirty||0!==this.nestedKeys.length&&this.nestedKeys.some(function(e){return t.refProxy(e).$anyDirty})},$error:function(){return this.$dirty&&!this.$pending&&this.$invalid},$anyError:function(){return this.$anyDirty&&!this.$pending&&this.$invalid},$pending:function(){var t=this;return this.ruleKeys.some(function(e){return t.getRef(e).$pending})||this.nestedKeys.some(function(e){return t.refProxy(e).$pending})},$params:function(){var t=this,e=this.validations;return u({},c(this.nestedKeys,function(t){return e[t]&&e[t].$params||null}),c(this.ruleKeys,function(e){return t.getRef(e).$params}))}};function p(t){this.dirty=t;var e=this.proxy,n=t?"$touch":"$reset";this.nestedKeys.forEach(function(t){e[t][n]()})}var m={$touch:function(){p.call(this,!0)},$reset:function(){p.call(this,!1)},$flattenParams:function(){var t=this.proxy,e=[];for(var n in this.$params)if(this.isNested(n)){for(var r=t[n].$flattenParams(),o=0;o<r.length;o++)r[o].path.unshift(n);e=e.concat(r)}else e.push({path:[],name:n,params:this.$params[n]});return e}},b=Object.keys(v),g=Object.keys(m),M=null,$=function(t){if(M)return M;var e=t.extend({computed:{refs:function(){var t=this._vval;this._vval=this.children,(0,r.patchChildren)(t,this._vval);var e={};return this._vval.forEach(function(t){e[t.key]=t.vm}),e}},beforeCreate:function(){this._vval=null},beforeDestroy:function(){this._vval&&((0,r.patchChildren)(this._vval),this._vval=null)},methods:{getModel:function(){return this.lazyModel?this.lazyModel(this.prop):this.model},getModelKey:function(t){var e=this.getModel();if(e)return e[t]},hasIter:function(){return!1}}}),n=e.extend({data:function(){return{rule:null,lazyModel:null,model:null,lazyParentModel:null,rootModel:null}},methods:{runRule:function(e){var n=this.getModel();(0,o.pushParams)();var r,i=this.rule.call(this.rootModel,n,e),u=d(r=i)&&f(r.then)?function(t,e){var n=new t({data:{p:!0,v:!1}});return e.then(function(t){n.p=!1,n.v=t},function(t){throw n.p=!1,n.v=!1,t}),n[y]=!0,n}(t,i):i,a=(0,o.popParams)();return{output:u,params:a&&a.$sub?a.$sub.length>1?a:a.$sub[0]:null}}},computed:{run:function(){var t=this,e=this.lazyParentModel();if(Array.isArray(e)&&e.__ob__){var n=e.__ob__.dep;n.depend();var r=n.constructor.target;if(!this._indirectWatcher){var o=r.constructor;this._indirectWatcher=new o(this,function(){return t.runRule(e)},null,{lazy:!0})}var i=this.getModel();if(!this._indirectWatcher.dirty&&this._lastModel===i)return this._indirectWatcher.depend(),r.value;this._lastModel=i,this._indirectWatcher.evaluate(),this._indirectWatcher.depend()}else this._indirectWatcher&&(this._indirectWatcher.teardown(),this._indirectWatcher=null);return this._indirectWatcher?this._indirectWatcher.value:this.runRule(e)},$params:function(){return this.run.params},proxy:function(){var t=this.run.output;return t[y]?!!t.v:!!t},$pending:function(){var t=this.run.output;return!!t[y]&&t.p}},destroyed:function(){this._indirectWatcher&&(this._indirectWatcher.teardown(),this._indirectWatcher=null)}}),a=e.extend({data:function(){return{dirty:!1,validations:null,lazyModel:null,model:null,prop:null,lazyParentModel:null,rootModel:null}},methods:u({},m,{refProxy:function(t){return this.getRef(t).proxy},getRef:function(t){return this.refs[t]},isNested:function(t){return"function"!=typeof this.validations[t]}}),computed:u({},v,{nestedKeys:function(){return this.keys.filter(this.isNested)},ruleKeys:function(){var t=this;return this.keys.filter(function(e){return!t.isNested(e)})},keys:function(){return Object.keys(this.validations).filter(function(t){return"$params"!==t})},proxy:function(){var t=this,e=c(this.keys,function(e){return{enumerable:!0,configurable:!0,get:function(){return t.refProxy(e)}}}),n=c(b,function(e){return{enumerable:!0,configurable:!0,get:function(){return t[e]}}}),r=c(g,function(e){return{enumerable:!1,configurable:!0,get:function(){return t[e]}}}),o=this.hasIter()?{$iter:{enumerable:!0,value:Object.defineProperties({},u({},e))}}:{};return Object.defineProperties({},u({},e,o,{$model:{enumerable:!0,get:function(){var e=t.lazyParentModel();return null!=e?e[t.prop]:null},set:function(e){var n=t.lazyParentModel();null!=n&&(n[t.prop]=e,t.$touch())}}},n,r))},children:function(){var t=this;return i(this.nestedKeys.map(function(e){return $(t,e)})).concat(i(this.ruleKeys.map(function(e){return _(t,e)}))).filter(Boolean)}})}),l=a.extend({methods:{isNested:function(t){return void 0!==this.validations[t]()},getRef:function(t){var e=this;return{get proxy(){return e.validations[t]()||!1}}}}}),p=a.extend({computed:{keys:function(){var t=this.getModel();return d(t)?Object.keys(t):[]},tracker:function(){var t=this,e=this.validations.$trackBy;return e?function(n){return"".concat(h(t.rootModel,t.getModelKey(n),e))}:function(t){return"".concat(t)}},getModelLazy:function(){var t=this;return function(){return t.getModel()}},children:function(){var t=this,e=this.validations,n=this.getModel(),o=u({},e);delete o.$trackBy;var i={};return this.keys.map(function(e){var u=t.tracker(e);return i.hasOwnProperty(u)?null:(i[u]=!0,(0,r.h)(a,u,{validations:o,prop:e,lazyParentModel:t.getModelLazy,model:n[e],rootModel:t.rootModel}))}).filter(Boolean)}},methods:{isNested:function(){return!0},getRef:function(t){return this.refs[this.tracker(t)]},hasIter:function(){return!0}}}),$=function(t,e){if("$each"===e)return(0,r.h)(p,e,{validations:t.validations[e],lazyParentModel:t.lazyParentModel,prop:e,lazyModel:t.getModel,rootModel:t.rootModel});var n=t.validations[e];if(Array.isArray(n)){var o=t.rootModel,i=c(n,function(t){return function(){return h(o,o.$v,t)}},function(t){return Array.isArray(t)?t.join("."):t});return(0,r.h)(l,e,{validations:i,lazyParentModel:s,prop:e,lazyModel:s,rootModel:o})}return(0,r.h)(a,e,{validations:n,lazyParentModel:t.getModel,prop:e,lazyModel:t.getModelKey,rootModel:t.rootModel})},_=function(t,e){return(0,r.h)(n,e,{rule:t.validations[e],lazyParentModel:t.lazyParentModel,lazyModel:t.getModel,rootModel:t.rootModel})};return M={VBase:e,Validation:a}},_=null;var P=function(t,e){var n=function(t){if(_)return _;for(var e=t.constructor;e.super;)e=e.super;return _=e,e}(t),o=$(n),i=o.Validation;return new(0,o.VBase)({computed:{children:function(){var n="function"==typeof e?e.call(t):e;return[(0,r.h)(i,"$v",{validations:n,lazyParentModel:s,prop:"$v",model:t,rootModel:t})]}}})},j={data:function(){var t=this.$options.validations;return t&&(this._vuelidate=P(this,t)),{}},beforeCreate:function(){var t=this.$options;t.validations&&(t.computed||(t.computed={}),t.computed.$v||(t.computed.$v=function(){return this._vuelidate?this._vuelidate.refs.$v.proxy:null}))},beforeDestroy:function(){this._vuelidate&&(this._vuelidate.$destroy(),this._vuelidate=null)}};function O(t){t.mixin(j)}e.validationMixin=j;var x=O;e.default=x}})});
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.validators=t():e.validators=t()}(window,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var u=t[n]={i:n,l:!1,exports:{}};return e[n].call(u.exports,u,u.exports,r),u.l=!0,u.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=25)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return u.default}}),t.regex=t.ref=t.len=t.req=void 0;var n,u=(n=r(23))&&n.__esModule?n:{default:n};function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var i=function(e){if(Array.isArray(e))return!!e.length;if(void 0===e||null===e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===o(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=i;t.len=function(e){return Array.isArray(e)?e.length:"object"===o(e)?Object.keys(e).length:String(e).length};t.ref=function(e,t,r){return"function"==typeof e?e.call(t,r):r[e]};t.regex=function(e,t){return(0,u.default)({type:e},function(e){return!i(e)||t.test(e)})}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(0).regex)("decimal",/^[-]?\d*(\.\d+)?$/);t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(0).regex)("integer",/^-?[0-9]*$/);t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(0);t.default=function(e){return(0,n.withParams)({type:"maxValue",max:e},function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e})}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(0);t.default=function(e){return(0,n.withParams)({type:"minValue",min:e},function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e})}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(0);t.default=function(e){return(0,n.withParams)({type:"not"},function(t,r){return!(0,n.req)(t)||!e.call(this,t,r)})}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(0);t.default=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"and"},function(){for(var e=this,r=arguments.length,n=new Array(r),u=0;u<r;u++)n[u]=arguments[u];return t.length>0&&t.reduce(function(t,r){return t&&r.apply(e,n)},!0)})}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(0);t.default=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"or"},function(){for(var e=this,r=arguments.length,n=new Array(r),u=0;u<r;u++)n[u]=arguments[u];return t.length>0&&t.reduce(function(t,r){return t||r.apply(e,n)},!1)})}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(0).regex)("url",/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i);t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(0);t.default=function(e){return(0,n.withParams)({type:"sameAs",eq:e},function(t,r){return t===(0,n.ref)(e,this,r)})}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(0);t.default=function(e){return(0,n.withParams)({type:"requiredUnless",prop:e},function(t,r){return!!(0,n.ref)(e,this,r)||(0,n.req)(t)})}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(0);t.default=function(e){return(0,n.withParams)({type:"requiredIf",prop:e},function(t,r){return!(0,n.ref)(e,this,r)||(0,n.req)(t)})}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(0),u=(0,n.withParams)({type:"required"},n.req);t.default=u},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(0);t.default=function(e){return(0,n.withParams)({type:"minLength",min:e},function(t){return!(0,n.req)(t)||(0,n.len)(t)>=e})}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(0);t.default=function(e){return(0,n.withParams)({type:"maxLength",max:e},function(t){return!(0,n.req)(t)||(0,n.len)(t)<=e})}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(0);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,n.withParams)({type:"macAddress"},function(t){if(!(0,n.req)(t))return!0;if("string"!=typeof t)return!1;var r="string"==typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==r&&(6===r.length||8===r.length)&&r.every(u)})};var u=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(0),u=(0,n.withParams)({type:"ipAddress"},function(e){if(!(0,n.req)(e))return!0;if("string"!=typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(o)});t.default=u;var o=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(0).regex)("email",/(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/);t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(0);t.default=function(e,t){return(0,n.withParams)({type:"between",min:e,max:t},function(r){return!(0,n.req)(r)||(!/\s/.test(r)||r instanceof Date)&&+e<=+r&&+t>=+r})}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(0).regex)("numeric",/^[0-9]*$/);t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(0).regex)("alphaNum",/^[a-zA-Z0-9]*$/);t.default=n},function(e,t){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,t,r){"use strict";(function(e){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.withParams=void 0;var n="undefined"!=typeof window?window:void 0!==e?e:{},u=n.vuelidate?n.vuelidate.withParams:function(e,t){return"object"===r(e)&&void 0!==t?t:e(function(){})};t.withParams=u}).call(this,r(21))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(22).withParams;t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(0).regex)("alpha",/^[a-zA-Z]*$/);t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"alpha",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"alphaNum",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"numeric",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"between",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"email",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"ipAddress",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"macAddress",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"maxLength",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"minLength",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"required",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"requiredIf",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(t,"requiredUnless",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"sameAs",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"url",{enumerable:!0,get:function(){return b.default}}),Object.defineProperty(t,"or",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"and",{enumerable:!0,get:function(){return P.default}}),Object.defineProperty(t,"not",{enumerable:!0,get:function(){return g.default}}),Object.defineProperty(t,"minValue",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"maxValue",{enumerable:!0,get:function(){return j.default}}),Object.defineProperty(t,"integer",{enumerable:!0,get:function(){return O.default}}),Object.defineProperty(t,"decimal",{enumerable:!0,get:function(){return _.default}}),t.helpers=void 0;var n=M(r(24)),u=M(r(20)),o=M(r(19)),i=M(r(18)),f=M(r(17)),a=M(r(16)),l=M(r(15)),d=M(r(14)),c=M(r(13)),s=M(r(12)),p=M(r(11)),y=M(r(10)),v=M(r(9)),b=M(r(8)),m=M(r(7)),P=M(r(6)),g=M(r(5)),h=M(r(4)),j=M(r(3)),O=M(r(2)),_=M(r(1)),w=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(0));function M(e){return e&&e.__esModule?e:{default:e}}t.helpers=w}])});

Vue.use(vuelidate.default)

let App = new Vue({
el:'#Appv',
data:{
Categorias:[],
form:{
id:null,
nombre:null
},
errors:[]
},
created:function() {
this.Listado();
},

validations: {
  form: {
    nombre: {
      required: validators.required,
      minLength: validators.minLength(4),
      alpha:validators.alpha
    }
  }
},
methods: {
Guardar:function(id){
 if (id==null) {
  if(!this.$v.form.$invalid) {
    let Url='Categoria';
    axios.post(Url,{
    nombre:this.form.nombre
    }).then(response=>{
    this.Listado();
    this.form.nombre='';
    this.errors=[];
    $('#modelId').modal('hide');
    //mensaje exitoso
    Swal.fire(
      'Transaccion exitosa.!',
      'El registro se ha agregado!',
      'success'
    )
    //
    }).catch(error=>{
      this.errors=error.response.data
    });
   } else {
     console.log('❌ Invalid form')
   }
 } else {
//METODO EDITAR
let Url='Categoria/'+id;
axios.put(Url,this.form).then(response=>{
this.Listado();
this.form={id:null,nombre:null};
$('#modelId').modal('hide');
Swal.fire(
  'Editar!',
  'Editado con exito!',
  'success'
)
})
}
},
Listado:function(){
var Url='Categoria';
axios.get(Url).then(response=>{
this.Categorias=response.data
});
},
Mostrar:function(item){
this.form.id=item.id;
this.form.nombre=item.nombre;
$("#textR").text('Editar Categoria');//title modal
$("#textG").text('Editar');//text button guardar a editar
$('#modelId').modal('show');
},
eliminar:function(id){
    var Url='Categoria/'+id;
    Swal.fire({
        title: 'Esta seguro?',
        text: "Una vez eliminado el registro no se podra recuperar!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar!'
      }).then((result) => {
        if (result.value) {
          Swal.fire(
            'Eliminado!',
            'Transaccion exitosa.',
            'success'
          )
          axios.delete(Url).then(response=>{
            this.Listado();
            });
        }
      })
},
cancelar:function(){
this.form={id:null,nombre:null};
}
}
});



!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.Sweetalert2=e()}(this,function(){"use strict";function w(t){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function r(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function u(t,e,n){return(u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,n){var o=[null];o.push.apply(o,e);var i=new(Function.bind.apply(t,o));return n&&c(i,n.prototype),i}).apply(null,arguments)}function l(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function d(t,e,n){return(d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var o=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=s(t)););return t}(t,e);if(o){var i=Object.getOwnPropertyDescriptor(o,e);return i.get?i.get.call(n):i.value}})(t,e,n||t)}var e="SweetAlert2:",p=function(e){return Object.keys(e).map(function(t){return e[t]})},f=function(t){return Array.prototype.slice.call(t)},C=function(t){console.warn("".concat(e," ").concat(t))},k=function(t){console.error("".concat(e," ").concat(t))},m=[],h=function(t,e){var n;n='"'.concat(t,'" is deprecated and will be removed in the next major release. Please use "').concat(e,'" instead.'),-1===m.indexOf(n)&&(m.push(n),C(n))},v=function(t){return"function"==typeof t?t():t},B=function(t){return t&&Promise.resolve(t)===t},t=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),n=function(t){var e={};for(var n in t)e[t[n]]="swal2-"+t[n];return e},x=n(["container","shown","height-auto","iosfix","popup","modal","no-backdrop","toast","toast-shown","toast-column","fade","show","hide","noanimation","close","title","header","content","actions","confirm","cancel","footer","icon","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl"]),g=n(["success","warning","info","question","error"]),b={previousBodyPadding:null},y=function(t,e){return t.classList.contains(e)},S=function(e,t,n){f(e.classList).forEach(function(t){-1===p(x).indexOf(t)&&-1===p(g).indexOf(t)&&e.classList.remove(t)}),t&&t[n]&&O(e,t[n])};function A(t,e){if(!e)return null;switch(e){case"select":case"textarea":case"file":return M(t,x[e]);case"checkbox":return t.querySelector(".".concat(x.checkbox," input"));case"radio":return t.querySelector(".".concat(x.radio," input:checked"))||t.querySelector(".".concat(x.radio," input:first-child"));case"range":return t.querySelector(".".concat(x.range," input"));default:return M(t,x.input)}}var P,L=function(t){if(t.focus(),"file"!==t.type){var e=t.value;t.value="",t.value=e}},E=function(t,e,n){t&&e&&("string"==typeof e&&(e=e.split(/\s+/).filter(Boolean)),e.forEach(function(e){t.forEach?t.forEach(function(t){n?t.classList.add(e):t.classList.remove(e)}):n?t.classList.add(e):t.classList.remove(e)}))},O=function(t,e){E(t,e,!0)},T=function(t,e){E(t,e,!1)},M=function(t,e){for(var n=0;n<t.childNodes.length;n++)if(y(t.childNodes[n],e))return t.childNodes[n]},V=function(t,e,n){n||0===parseInt(n)?t.style[e]="number"==typeof n?n+"px":n:t.style.removeProperty(e)},j=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"flex";t.style.opacity="",t.style.display=e},q=function(t){t.style.opacity="",t.style.display="none"},H=function(t,e,n){e?j(t,n):q(t)},I=function(t){return!(!t||!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))},R=function(){return document.body.querySelector("."+x.container)},N=function(t){var e=R();return e?e.querySelector(t):null},D=function(t){return N("."+t)},U=function(){return D(x.popup)},_=function(){var t=U();return f(t.querySelectorAll("."+x.icon))},z=function(){var t=_().filter(function(t){return I(t)});return t.length?t[0]:null},W=function(){return D(x.title)},K=function(){return D(x.content)},F=function(){return D(x.image)},Z=function(){return D(x["progress-steps"])},Q=function(){return D(x["validation-message"])},Y=function(){return N("."+x.actions+" ."+x.confirm)},$=function(){return N("."+x.actions+" ."+x.cancel)},J=function(){return D(x.actions)},X=function(){return D(x.header)},G=function(){return D(x.footer)},tt=function(){return D(x.close)},et=function(){var t=f(U().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort(function(t,e){return t=parseInt(t.getAttribute("tabindex")),(e=parseInt(e.getAttribute("tabindex")))<t?1:t<e?-1:0}),e=f(U().querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable], audio[controls], video[controls]')).filter(function(t){return"-1"!==t.getAttribute("tabindex")});return function(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}(t.concat(e)).filter(function(t){return I(t)})},nt=function(){return!ot()&&!document.body.classList.contains(x["no-backdrop"])},ot=function(){return document.body.classList.contains(x["toast-shown"])},it=function(){return"undefined"==typeof window||"undefined"==typeof document},rt='\n <div aria-labelledby="'.concat(x.title,'" aria-describedby="').concat(x.content,'" class="').concat(x.popup,'" tabindex="-1">\n   <div class="').concat(x.header,'">\n     <ul class="').concat(x["progress-steps"],'"></ul>\n     <div class="').concat(x.icon," ").concat(g.error,'">\n       <span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span>\n     </div>\n     <div class="').concat(x.icon," ").concat(g.question,'"></div>\n     <div class="').concat(x.icon," ").concat(g.warning,'"></div>\n     <div class="').concat(x.icon," ").concat(g.info,'"></div>\n     <div class="').concat(x.icon," ").concat(g.success,'">\n       <div class="swal2-success-circular-line-left"></div>\n       <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n       <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n       <div class="swal2-success-circular-line-right"></div>\n     </div>\n     <img class="').concat(x.image,'" />\n     <h2 class="').concat(x.title,'" id="').concat(x.title,'"></h2>\n     <button type="button" class="').concat(x.close,'">&times;</button>\n   </div>\n   <div class="').concat(x.content,'">\n     <div id="').concat(x.content,'"></div>\n     <input class="').concat(x.input,'" />\n     <input type="file" class="').concat(x.file,'" />\n     <div class="').concat(x.range,'">\n       <input type="range" />\n       <output></output>\n     </div>\n     <select class="').concat(x.select,'"></select>\n     <div class="').concat(x.radio,'"></div>\n     <label for="').concat(x.checkbox,'" class="').concat(x.checkbox,'">\n       <input type="checkbox" />\n       <span class="').concat(x.label,'"></span>\n     </label>\n     <textarea class="').concat(x.textarea,'"></textarea>\n     <div class="').concat(x["validation-message"],'" id="').concat(x["validation-message"],'"></div>\n   </div>\n   <div class="').concat(x.actions,'">\n     <button type="button" class="').concat(x.confirm,'">OK</button>\n     <button type="button" class="').concat(x.cancel,'">Cancel</button>\n   </div>\n   <div class="').concat(x.footer,'">\n   </div>\n </div>\n').replace(/(^|\n)\s*/g,""),at=function(t){Jt.isVisible()&&P!==t.target.value&&Jt.resetValidationMessage(),P=t.target.value},st=function(t){var e;if((e=R())&&(e.parentNode.removeChild(e),T([document.documentElement,document.body],[x["no-backdrop"],x["toast-shown"],x["has-column"]])),it())k("SweetAlert2 requires document to initialize");else{var n=document.createElement("div");n.className=x.container,n.innerHTML=rt;var o,i,r,a,s,c,u,l,d,p,f,m,g="string"==typeof(o=t.target)?document.querySelector(o):o;g.appendChild(n),i=t,(r=U()).setAttribute("role",i.toast?"alert":"dialog"),r.setAttribute("aria-live",i.toast?"polite":"assertive"),i.toast||r.setAttribute("aria-modal","true"),a=g,"rtl"===window.getComputedStyle(a).direction&&O(R(),x.rtl),s=K(),c=M(s,x.input),u=M(s,x.file),l=s.querySelector(".".concat(x.range," input")),d=s.querySelector(".".concat(x.range," output")),p=M(s,x.select),f=s.querySelector(".".concat(x.checkbox," input")),m=M(s,x.textarea),c.oninput=at,u.onchange=at,p.onchange=at,f.onchange=at,m.oninput=at,l.oninput=function(t){at(t),d.value=l.value},l.onchange=function(t){at(t),l.nextSibling.value=l.value}}},ct=function(t,e){t instanceof HTMLElement?e.appendChild(t):"object"===w(t)?ut(e,t):t&&(e.innerHTML=t)},ut=function(t,e){if(t.innerHTML="",0 in e)for(var n=0;n in e;n++)t.appendChild(e[n].cloneNode(!0));else t.appendChild(e.cloneNode(!0))},lt=function(){if(it())return!1;var t=document.createElement("div"),e={WebkitAnimation:"webkitAnimationEnd",OAnimation:"oAnimationEnd oanimationend",animation:"animationend"};for(var n in e)if(e.hasOwnProperty(n)&&void 0!==t.style[n])return e[n];return!1}(),dt=function(t){var e=K().querySelector("#"+x.content);t.html?(ct(t.html,e),j(e,"block")):t.text?(e.textContent=t.text,j(e,"block")):q(e),function(e){for(var t,n=K(),o=["input","file","range","select","radio","checkbox","textarea"],i=function(t){t.placeholder&&!e.inputPlaceholder||(t.placeholder=e.inputPlaceholder)},r=0;r<o.length;r++){var a=x[o[r]],s=M(n,a);if(t=A(n,o[r])){for(var c in t.attributes)if(t.attributes.hasOwnProperty(c)){var u=t.attributes[c].name;"type"!==u&&"value"!==u&&t.removeAttribute(u)}for(var l in e.inputAttributes)"range"===o[r]&&"placeholder"===l||t.setAttribute(l,e.inputAttributes[l])}s.className=a,e.inputClass&&O(s,e.inputClass),e.customClass&&O(s,e.customClass.input),q(s)}switch(e.input){case"text":case"email":case"password":case"number":case"tel":case"url":t=M(n,x.input),"string"==typeof e.inputValue||"number"==typeof e.inputValue?t.value=e.inputValue:B(e.inputValue)||C('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(w(e.inputValue),'"')),i(t),t.type=e.input,j(t);break;case"file":i(t=M(n,x.file)),t.type=e.input,j(t);break;case"range":var d=M(n,x.range),p=d.querySelector("input"),f=d.querySelector("output");p.value=e.inputValue,p.type=e.input,f.value=e.inputValue,j(d);break;case"select":var m=M(n,x.select);if(m.innerHTML="",e.inputPlaceholder){var g=document.createElement("option");g.innerHTML=e.inputPlaceholder,g.value="",g.disabled=!0,g.selected=!0,m.appendChild(g)}j(m);break;case"radio":var h=M(n,x.radio);h.innerHTML="",j(h);break;case"checkbox":var v=M(n,x.checkbox),b=A(n,"checkbox");b.type="checkbox",b.value=1,b.id=x.checkbox,b.checked=Boolean(e.inputValue),v.querySelector("span").innerHTML=e.inputPlaceholder,j(v);break;case"textarea":var y=M(n,x.textarea);y.value=e.inputValue,i(y),j(y);break;case null:break;default:k('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(e.input,'"'))}}(t),S(K(),t.customClass,"content")},pt=function(){for(var t=_(),e=0;e<t.length;e++)q(t[e])},ft=function(){for(var t=U(),e=window.getComputedStyle(t).getPropertyValue("background-color"),n=t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"),o=0;o<n.length;o++)n[o].style.backgroundColor=e},mt=function(c){var u=Z();if(!c.progressSteps||0===c.progressSteps.length)return q(u);j(u),u.innerHTML="";var l=parseInt(null===c.currentProgressStep?Jt.getQueueStep():c.currentProgressStep);l>=c.progressSteps.length&&C("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),c.progressSteps.forEach(function(t,e){var n,o,i,r,a=(n=t,o=document.createElement("li"),O(o,x["progress-step"]),o.innerHTML=n,o);if(u.appendChild(a),e===l&&O(a,x["active-progress-step"]),e!==c.progressSteps.length-1){var s=(i=t,r=document.createElement("li"),O(r,x["progress-step-line"]),i.progressStepsDistance&&(r.style.width=i.progressStepsDistance),r);u.appendChild(s)}})},gt=function(t){var e,n,o,i,r=X();S(r,t.customClass,"header"),mt(t),function(t){var e=z();if(e&&e.classList.contains(g[t.type]))S(e,t.customClass,"icon");else if(pt(),t.type)if(ft(),-1!==Object.keys(g).indexOf(t.type)){var n=N(".".concat(x.icon,".").concat(g[t.type]));j(n),S(n,t.customClass,"icon"),E(n,"swal2-animate-".concat(t.type,"-icon"),t.animation)}else k('Unknown type! Expected "success", "error", "warning", "info" or "question", got "'.concat(t.type,'"'))}(t),function(t){var e=F();if(!t.imageUrl)return q(e);j(e),e.setAttribute("src",t.imageUrl),e.setAttribute("alt",t.imageAlt),V(e,"width",t.imageWidth),V(e,"height",t.imageHeight),e.className=x.image,S(e,t.customClass,"image"),t.imageClass&&O(e,t.imageClass)}(t),e=t,n=W(),H(n,e.title||e.titleText),e.title&&ct(e.title,n),e.titleText&&(n.innerText=e.titleText),S(n,e.customClass,"title"),o=t,i=tt(),S(i,o.customClass,"closeButton"),H(i,o.showCloseButton),i.setAttribute("aria-label",o.closeButtonAriaLabel)},ht=function(t){var e,n,o,i;e=t,n=U(),V(n,"width",e.width),V(n,"padding",e.padding),e.background&&(n.style.background=e.background),n.className=x.popup,e.toast?(O([document.documentElement,document.body],x["toast-shown"]),O(n,x.toast)):O(n,x.modal),S(n,e.customClass,"popup"),"string"==typeof e.customClass&&O(n,e.customClass),E(n,x.noanimation,!e.animation),function(t){var e=R();if(e){if("string"==typeof t.backdrop?e.style.background=t.backdrop:t.backdrop||O([document.documentElement,document.body],x["no-backdrop"]),!t.backdrop&&t.allowOutsideClick&&C('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'),t.position in x?O(e,x[t.position]):(C('The "position" parameter is not valid, defaulting to "center"'),O(e,x.center)),t.grow&&"string"==typeof t.grow){var n="grow-"+t.grow;n in x&&O(e,x[n])}S(e,t.customClass,"container"),t.customContainerClass&&O(e,t.customContainerClass)}}(t),gt(t),dt(t),function(t){var e=J(),n=Y(),o=$();if(t.showConfirmButton||t.showCancelButton?j(e):q(e),S(e,t.customClass,"actions"),H(n,t.showConfirmButton,"inline-block"),H(o,t.showCancelButton,"inline-block"),n.innerHTML=t.confirmButtonText,o.innerHTML=t.cancelButtonText,n.setAttribute("aria-label",t.confirmButtonAriaLabel),o.setAttribute("aria-label",t.cancelButtonAriaLabel),n.className=x.confirm,S(n,t.customClass,"confirmButton"),O(n,t.confirmButtonClass),o.className=x.cancel,S(o,t.customClass,"cancelButton"),O(o,t.cancelButtonClass),t.buttonsStyling){O([n,o],x.styled),t.confirmButtonColor&&(n.style.backgroundColor=t.confirmButtonColor),t.cancelButtonColor&&(o.style.backgroundColor=t.cancelButtonColor);var i=window.getComputedStyle(n).getPropertyValue("background-color");n.style.borderLeftColor=i,n.style.borderRightColor=i}else T([n,o],x.styled),n.style.backgroundColor=n.style.borderLeftColor=n.style.borderRightColor="",o.style.backgroundColor=o.style.borderLeftColor=o.style.borderRightColor=""}(t),o=t,i=G(),H(i,o.footer),o.footer&&ct(o.footer,i),S(i,o.customClass,"footer")};var vt=[],bt=function(){var t=U();t||Jt.fire(""),t=U();var e=J(),n=Y(),o=$();j(e),j(n),O([t,e],x.loading),n.disabled=!0,o.disabled=!0,t.setAttribute("data-loading",!0),t.setAttribute("aria-busy",!0),t.focus()},yt={},wt=function(){return new Promise(function(t){var e=window.scrollX,n=window.scrollY;yt.restoreFocusTimeout=setTimeout(function(){yt.previousActiveElement&&yt.previousActiveElement.focus?(yt.previousActiveElement.focus(),yt.previousActiveElement=null):document.body&&document.body.focus(),t()},100),void 0!==e&&void 0!==n&&window.scrollTo(e,n)})},Ct={title:"",titleText:"",text:"",html:"",footer:"",type:null,toast:!1,customClass:"",customContainerClass:"",target:"body",backdrop:!0,animation:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showCancelButton:!1,preConfirm:null,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:null,confirmButtonClass:"",cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:null,cancelButtonClass:"",buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusCancel:!1,showCloseButton:!1,closeButtonAriaLabel:"Close this dialog",showLoaderOnConfirm:!1,imageUrl:null,imageWidth:null,imageHeight:null,imageAlt:"",imageClass:"",timer:null,width:null,padding:null,background:null,input:null,inputPlaceholder:"",inputValue:"",inputOptions:{},inputAutoTrim:!0,inputClass:"",inputAttributes:{},inputValidator:null,validationMessage:null,grow:!1,position:"center",progressSteps:[],currentProgressStep:null,progressStepsDistance:null,onBeforeOpen:null,onAfterClose:null,onOpen:null,onClose:null,scrollbarPadding:!0},kt=["title","titleText","text","html","type","customClass","showConfirmButton","showCancelButton","confirmButtonText","confirmButtonAriaLabel","confirmButtonColor","confirmButtonClass","cancelButtonText","cancelButtonAriaLabel","cancelButtonColor","cancelButtonClass","buttonsStyling","reverseButtons","imageUrl","imageWidth","imageHeigth","imageAlt","imageClass","progressSteps","currentProgressStep"],Bt={customContainerClass:"customClass",confirmButtonClass:"customClass",cancelButtonClass:"customClass",imageClass:"customClass",inputClass:"customClass"},xt=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusCancel","heightAuto","keydownListenerCapture"],St=function(t){return Ct.hasOwnProperty(t)},At=function(t){return Bt[t]},Pt=Object.freeze({isValidParameter:St,isUpdatableParameter:function(t){return-1!==kt.indexOf(t)},isDeprecatedParameter:At,argsToParams:function(n){var o={};switch(w(n[0])){case"object":a(o,n[0]);break;default:["title","html","type"].forEach(function(t,e){switch(w(n[e])){case"string":o[t]=n[e];break;case"undefined":break;default:k("Unexpected type of ".concat(t,'! Expected "string", got ').concat(w(n[e])))}})}return o},isVisible:function(){return I(U())},clickConfirm:function(){return Y()&&Y().click()},clickCancel:function(){return $()&&$().click()},getContainer:R,getPopup:U,getTitle:W,getContent:K,getImage:F,getIcon:z,getIcons:_,getCloseButton:tt,getActions:J,getConfirmButton:Y,getCancelButton:$,getHeader:X,getFooter:G,getFocusableElements:et,getValidationMessage:Q,isLoading:function(){return U().hasAttribute("data-loading")},fire:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return u(this,e)},mixin:function(n){return function(t){function e(){return o(this,e),l(this,s(e).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}(e,t),r(e,[{key:"_main",value:function(t){return d(s(e.prototype),"_main",this).call(this,a({},n,t))}}]),e}(this)},queue:function(t){var r=this;vt=t;var a=function(t,e){vt=[],document.body.removeAttribute("data-swal2-queue-step"),t(e)},s=[];return new Promise(function(i){!function e(n,o){n<vt.length?(document.body.setAttribute("data-swal2-queue-step",n),r.fire(vt[n]).then(function(t){void 0!==t.value?(s.push(t.value),e(n+1,o)):a(i,{dismiss:t.dismiss})})):a(i,{value:s})}(0)})},getQueueStep:function(){return document.body.getAttribute("data-swal2-queue-step")},insertQueueStep:function(t,e){return e&&e<vt.length?vt.splice(e,0,t):vt.push(t)},deleteQueueStep:function(t){void 0!==vt[t]&&vt.splice(t,1)},showLoading:bt,enableLoading:bt,getTimerLeft:function(){return yt.timeout&&yt.timeout.getTimerLeft()},stopTimer:function(){return yt.timeout&&yt.timeout.stop()},resumeTimer:function(){return yt.timeout&&yt.timeout.start()},toggleTimer:function(){var t=yt.timeout;return t&&(t.running?t.stop():t.start())},increaseTimer:function(t){return yt.timeout&&yt.timeout.increase(t)},isTimerRunning:function(){return yt.timeout&&yt.timeout.isRunning()}}),Lt={promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap};function Et(){var t=Lt.innerParams.get(this),e=Lt.domCache.get(this);t.showConfirmButton||(q(e.confirmButton),t.showCancelButton||q(e.actions)),T([e.popup,e.actions],x.loading),e.popup.removeAttribute("aria-busy"),e.popup.removeAttribute("data-loading"),e.confirmButton.disabled=!1,e.cancelButton.disabled=!1}var Ot=function(){null===b.previousBodyPadding&&document.body.scrollHeight>window.innerHeight&&(b.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=b.previousBodyPadding+function(){if("ontouchstart"in window||navigator.msMaxTouchPoints)return 0;var t=document.createElement("div");t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t);var e=t.offsetWidth-t.clientWidth;return document.body.removeChild(t),e}()+"px")},Tt=function(){null!==b.previousBodyPadding&&(document.body.style.paddingRight=b.previousBodyPadding+"px",b.previousBodyPadding=null)},Mt=function(){if(y(document.body,x.iosfix)){var t=parseInt(document.body.style.top,10);T(document.body,x.iosfix),document.body.style.top="",document.body.scrollTop=-1*t}},Vt=function(){return!!window.MSInputMethodContext&&!!document.documentMode},jt=function(){var t=R(),e=U();t.style.removeProperty("align-items"),e.offsetTop<0&&(t.style.alignItems="flex-start")},qt=function(){"undefined"!=typeof window&&Vt()&&window.removeEventListener("resize",jt)},Ht=function(){f(document.body.children).forEach(function(t){t.hasAttribute("data-previous-aria-hidden")?(t.setAttribute("aria-hidden",t.getAttribute("data-previous-aria-hidden")),t.removeAttribute("data-previous-aria-hidden")):t.removeAttribute("aria-hidden")})},It={swalPromiseResolve:new WeakMap};function Rt(t,e){ot()?Ut(e):(wt().then(function(){return Ut(e)}),yt.keydownTarget.removeEventListener("keydown",yt.keydownHandler,{capture:yt.keydownListenerCapture}),yt.keydownHandlerAdded=!1),t.parentNode&&t.parentNode.removeChild(t),T([document.documentElement,document.body],[x.shown,x["height-auto"],x["no-backdrop"],x["toast-shown"],x["toast-column"]]),nt()&&(Tt(),Mt(),qt(),Ht())}function Nt(t,e,n){t.removeEventListener(lt,Nt),y(t,x.hide)&&Rt(e,n)}function Dt(t){var e=R(),n=U(),o=Lt.innerParams.get(this),i=It.swalPromiseResolve.get(this),r=o.onClose,a=o.onAfterClose;n&&(null!==r&&"function"==typeof r&&r(n),T(n,x.show),O(n,x.hide),lt&&!y(n,x.noanimation)?n.addEventListener(lt,Nt.bind(null,n,e,a)):Rt(e,a),i(t||{}))}var Ut=function(t){null!==t&&"function"==typeof t&&setTimeout(function(){t()})};function _t(t,e,n){var o=Lt.domCache.get(t);e.forEach(function(t){o[t].disabled=n})}function zt(t,e){if(!t)return!1;if("radio"===t.type)for(var n=t.parentNode.parentNode.querySelectorAll("input"),o=0;o<n.length;o++)n[o].disabled=e;else t.disabled=e}var Wt=function(){function n(t,e){o(this,n),this.callback=t,this.remaining=e,this.running=!1,this.start()}return r(n,[{key:"start",value:function(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}},{key:"stop",value:function(){return this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date-this.started),this.remaining}},{key:"increase",value:function(t){var e=this.running;return e&&this.stop(),this.remaining+=t,e&&this.start(),this.remaining}},{key:"getTimerLeft",value:function(){return this.running&&(this.stop(),this.start()),this.remaining}},{key:"isRunning",value:function(){return this.running}}]),n}(),Kt={email:function(t,e){return/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid email address")},url:function(t,e){return/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid URL")}};var Ft=function(t){var e=R(),n=U();null!==t.onBeforeOpen&&"function"==typeof t.onBeforeOpen&&t.onBeforeOpen(n),t.animation?(O(n,x.show),O(e,x.fade),T(n,x.hide)):T(n,x.fade),j(n),e.style.overflowY="hidden",lt&&!y(n,x.noanimation)?n.addEventListener(lt,function t(){n.removeEventListener(lt,t),e.style.overflowY="auto"}):e.style.overflowY="auto",O([document.documentElement,document.body,e],x.shown),t.heightAuto&&t.backdrop&&!t.toast&&O([document.documentElement,document.body],x["height-auto"]),nt()&&(t.scrollbarPadding&&Ot(),function(){if(/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&!y(document.body,x.iosfix)){var t=document.body.scrollTop;document.body.style.top=-1*t+"px",O(document.body,x.iosfix)}}(),"undefined"!=typeof window&&Vt()&&(jt(),window.addEventListener("resize",jt)),f(document.body.children).forEach(function(t){t===R()||function(t,e){if("function"==typeof t.contains)return t.contains(e)}(t,R())||(t.hasAttribute("aria-hidden")&&t.setAttribute("data-previous-aria-hidden",t.getAttribute("aria-hidden")),t.setAttribute("aria-hidden","true"))}),setTimeout(function(){e.scrollTop=0})),ot()||yt.previousActiveElement||(yt.previousActiveElement=document.activeElement),null!==t.onOpen&&"function"==typeof t.onOpen&&setTimeout(function(){t.onOpen(n)})},Zt={select:function(t,e,i){var r=M(t,x.select);e.forEach(function(t){var e=t[0],n=t[1],o=document.createElement("option");o.value=e,o.innerHTML=n,i.inputValue.toString()===e.toString()&&(o.selected=!0),r.appendChild(o)}),r.focus()},radio:function(t,e,a){var s=M(t,x.radio);e.forEach(function(t){var e=t[0],n=t[1],o=document.createElement("input"),i=document.createElement("label");o.type="radio",o.name=x.radio,o.value=e,a.inputValue.toString()===e.toString()&&(o.checked=!0);var r=document.createElement("span");r.innerHTML=n,r.className=x.label,i.appendChild(o),i.appendChild(r),s.appendChild(i)});var n=s.querySelectorAll("input");n.length&&n[0].focus()}};var Qt,Yt=Object.freeze({hideLoading:Et,disableLoading:Et,getInput:function(t){var e=Lt.innerParams.get(t||this);return A(Lt.domCache.get(t||this).content,e.input)},close:Dt,closePopup:Dt,closeModal:Dt,closeToast:Dt,enableButtons:function(){_t(this,["confirmButton","cancelButton"],!1)},disableButtons:function(){_t(this,["confirmButton","cancelButton"],!0)},enableConfirmButton:function(){h("Swal.disableConfirmButton()","Swal.getConfirmButton().removeAttribute('disabled')"),_t(this,["confirmButton"],!1)},disableConfirmButton:function(){h("Swal.enableConfirmButton()","Swal.getConfirmButton().setAttribute('disabled', '')"),_t(this,["confirmButton"],!0)},enableInput:function(){return zt(this.getInput(),!1)},disableInput:function(){return zt(this.getInput(),!0)},showValidationMessage:function(t){var e=Lt.domCache.get(this);e.validationMessage.innerHTML=t;var n=window.getComputedStyle(e.popup);e.validationMessage.style.marginLeft="-".concat(n.getPropertyValue("padding-left")),e.validationMessage.style.marginRight="-".concat(n.getPropertyValue("padding-right")),j(e.validationMessage);var o=this.getInput();o&&(o.setAttribute("aria-invalid",!0),o.setAttribute("aria-describedBy",x["validation-message"]),L(o),O(o,x.inputerror))},resetValidationMessage:function(){var t=Lt.domCache.get(this);t.validationMessage&&q(t.validationMessage);var e=this.getInput();e&&(e.removeAttribute("aria-invalid"),e.removeAttribute("aria-describedBy"),T(e,x.inputerror))},getProgressSteps:function(){return h("Swal.getProgressSteps()","const swalInstance = Swal.fire({progressSteps: ['1', '2', '3']}); const progressSteps = swalInstance.params.progressSteps"),Lt.innerParams.get(this).progressSteps},setProgressSteps:function(t){h("Swal.setProgressSteps()","Swal.update()");var e=a({},Lt.innerParams.get(this),{progressSteps:t});Lt.innerParams.set(this,e),mt(e)},showProgressSteps:function(){var t=Lt.domCache.get(this);j(t.progressSteps)},hideProgressSteps:function(){var t=Lt.domCache.get(this);q(t.progressSteps)},_main:function(t){var p=this;!function(t){for(var e in t)St(i=e)||C('Unknown parameter "'.concat(i,'"')),t.toast&&(o=e,-1!==xt.indexOf(o)&&C('The parameter "'.concat(o,'" is incompatible with toasts'))),At(n=void 0)&&h(n,At(n));var n,o,i}(t);var f=a({},Ct,t);!function(e){e.inputValidator||Object.keys(Kt).forEach(function(t){e.input===t&&(e.inputValidator=Kt[t])}),e.showLoaderOnConfirm&&!e.preConfirm&&C("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"),e.animation=v(e.animation),(!e.target||"string"==typeof e.target&&!document.querySelector(e.target)||"string"!=typeof e.target&&!e.target.appendChild)&&(C('Target parameter is not valid, defaulting to "body"'),e.target="body"),"string"==typeof e.title&&(e.title=e.title.split("\n").join("<br />"));var t=U(),n="string"==typeof e.target?document.querySelector(e.target):e.target;(!t||t&&n&&t.parentNode!==n.parentNode)&&st(e)}(f),Object.freeze(f),Lt.innerParams.set(this,f),yt.timeout&&(yt.timeout.stop(),delete yt.timeout),clearTimeout(yt.restoreFocusTimeout);var m={popup:U(),container:R(),content:K(),actions:J(),confirmButton:Y(),cancelButton:$(),closeButton:tt(),validationMessage:Q(),progressSteps:Z()};Lt.domCache.set(this,m),ht(f);var g=this.constructor;return new Promise(function(t){var n=function(t){p.closePopup({value:t})},s=function(t){p.closePopup({dismiss:t})};It.swalPromiseResolve.set(p,t),f.timer&&(yt.timeout=new Wt(function(){s("timer"),delete yt.timeout},f.timer)),f.input&&setTimeout(function(){var t=p.getInput();t&&L(t)},0);for(var c=function(e){f.showLoaderOnConfirm&&g.showLoading(),f.preConfirm?(p.resetValidationMessage(),Promise.resolve().then(function(){return f.preConfirm(e,f.validationMessage)}).then(function(t){I(m.validationMessage)||!1===t?p.hideLoading():n(void 0===t?e:t)})):n(e)},e=function(t){var e=t.target,n=m.confirmButton,o=m.cancelButton,i=n&&(n===e||n.contains(e)),r=o&&(o===e||o.contains(e));switch(t.type){case"click":if(i)if(p.disableButtons(),f.input){var a=function(){var t=p.getInput();if(!t)return null;switch(f.input){case"checkbox":return t.checked?1:0;case"radio":return t.checked?t.value:null;case"file":return t.files.length?t.files[0]:null;default:return f.inputAutoTrim?t.value.trim():t.value}}();f.inputValidator?(p.disableInput(),Promise.resolve().then(function(){return f.inputValidator(a,f.validationMessage)}).then(function(t){p.enableButtons(),p.enableInput(),t?p.showValidationMessage(t):c(a)})):p.getInput().checkValidity()?c(a):(p.enableButtons(),p.showValidationMessage(f.validationMessage))}else c(!0);else r&&(p.disableButtons(),s(g.DismissReason.cancel))}},o=m.popup.querySelectorAll("button"),i=0;i<o.length;i++)o[i].onclick=e,o[i].onmouseover=e,o[i].onmouseout=e,o[i].onmousedown=e;if(m.closeButton.onclick=function(){s(g.DismissReason.close)},f.toast)m.popup.onclick=function(){f.showConfirmButton||f.showCancelButton||f.showCloseButton||f.input||s(g.DismissReason.close)};else{var r=!1;m.popup.onmousedown=function(){m.container.onmouseup=function(t){m.container.onmouseup=void 0,t.target===m.container&&(r=!0)}},m.container.onmousedown=function(){m.popup.onmouseup=function(t){m.popup.onmouseup=void 0,(t.target===m.popup||m.popup.contains(t.target))&&(r=!0)}},m.container.onclick=function(t){r?r=!1:t.target===m.container&&v(f.allowOutsideClick)&&s(g.DismissReason.backdrop)}}f.reverseButtons?m.confirmButton.parentNode.insertBefore(m.cancelButton,m.confirmButton):m.confirmButton.parentNode.insertBefore(m.confirmButton,m.cancelButton);var a=function(t,e){for(var n=et(f.focusCancel),o=0;o<n.length;o++)return(t+=e)===n.length?t=0:-1===t&&(t=n.length-1),n[t].focus();m.popup.focus()};if(yt.keydownHandlerAdded&&(yt.keydownTarget.removeEventListener("keydown",yt.keydownHandler,{capture:yt.keydownListenerCapture}),yt.keydownHandlerAdded=!1),f.toast||(yt.keydownHandler=function(t){return function(t,e){if(e.stopKeydownPropagation&&t.stopPropagation(),"Enter"!==t.key||t.isComposing)if("Tab"===t.key){for(var n=t.target,o=et(e.focusCancel),i=-1,r=0;r<o.length;r++)if(n===o[r]){i=r;break}t.shiftKey?a(i,-1):a(i,1),t.stopPropagation(),t.preventDefault()}else-1!==["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Left","Right","Up","Down"].indexOf(t.key)?document.activeElement===m.confirmButton&&I(m.cancelButton)?m.cancelButton.focus():document.activeElement===m.cancelButton&&I(m.confirmButton)&&m.confirmButton.focus():"Escape"!==t.key&&"Esc"!==t.key||!0!==v(e.allowEscapeKey)||(t.preventDefault(),s(g.DismissReason.esc));else if(t.target&&p.getInput()&&t.target.outerHTML===p.getInput().outerHTML){if(-1!==["textarea","file"].indexOf(e.input))return;g.clickConfirm(),t.preventDefault()}}(t,f)},yt.keydownTarget=f.keydownListenerCapture?window:m.popup,yt.keydownListenerCapture=f.keydownListenerCapture,yt.keydownTarget.addEventListener("keydown",yt.keydownHandler,{capture:yt.keydownListenerCapture}),yt.keydownHandlerAdded=!0),p.enableButtons(),p.hideLoading(),p.resetValidationMessage(),f.toast&&(f.input||f.footer||f.showCloseButton)?O(document.body,x["toast-column"]):T(document.body,x["toast-column"]),"select"===f.input||"radio"===f.input){var u=K(),l=function(t){return Zt[f.input](u,(e=t,n=[],"undefined"!=typeof Map&&e instanceof Map?e.forEach(function(t,e){n.push([e,t])}):Object.keys(e).forEach(function(t){n.push([t,e[t]])}),n),f);var e,n};B(f.inputOptions)?(g.showLoading(),f.inputOptions.then(function(t){p.hideLoading(),l(t)})):"object"===w(f.inputOptions)?l(f.inputOptions):k("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(w(f.inputOptions)))}else if(-1!==["text","email","number","tel","textarea"].indexOf(f.input)&&B(f.inputValue)){var d=g.getInput();g.showLoading(),q(d),f.inputValue.then(function(t){d.value="number"===f.input?parseFloat(t)||0:t+"",j(d),d.focus(),p.hideLoading()}).catch(function(t){k("Error in inputValue promise: "+t),d.value="",j(d),d.focus(),p.hideLoading()})}Ft(f),f.toast||(v(f.allowEnterKey)?f.focusCancel&&I(m.cancelButton)?m.cancelButton.focus():f.focusConfirm&&I(m.confirmButton)?m.confirmButton.focus():a(-1,1):document.activeElement&&"function"==typeof document.activeElement.blur&&document.activeElement.blur()),m.container.scrollTop=0})},update:function(e){var n={};Object.keys(e).forEach(function(t){Jt.isUpdatableParameter(t)?n[t]=e[t]:C('Invalid parameter to update: "'.concat(t,'". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js'))});var t=a({},Lt.innerParams.get(this),n);ht(t),Lt.innerParams.set(this,t),Object.defineProperties(this,{params:{value:a({},this.params,e),writable:!1,enumerable:!0}})}});function $t(){if("undefined"!=typeof window){"undefined"==typeof Promise&&k("This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)"),Qt=this;for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var o=Object.freeze(this.constructor.argsToParams(e));Object.defineProperties(this,{params:{value:o,writable:!1,enumerable:!0,configurable:!0}});var i=this._main(this.params);Lt.promise.set(this,i)}}$t.prototype.then=function(t){return Lt.promise.get(this).then(t)},$t.prototype.finally=function(t){return Lt.promise.get(this).finally(t)},a($t.prototype,Yt),a($t,Pt),Object.keys(Yt).forEach(function(e){$t[e]=function(){var t;if(Qt)return(t=Qt)[e].apply(t,arguments)}}),$t.DismissReason=t,$t.version="8.8.1";var Jt=$t;return Jt.default=Jt}),"undefined"!=typeof window&&window.Sweetalert2&&(window.swal=window.sweetAlert=window.Swal=window.SweetAlert=window.Sweetalert2);
"undefined"!=typeof document&&function(e,t){var n=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=t);else try{n.innerHTML=t}catch(e){n.innerText=t}}(document,"@charset \"UTF-8\";@-webkit-keyframes swal2-show{0%{-webkit-transform:scale(.7);transform:scale(.7)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes swal2-show{0%{-webkit-transform:scale(.7);transform:scale(.7)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.875em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.875em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}100%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}100%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}50%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}80%{margin-top:-.375em;-webkit-transform:scale(1.15);transform:scale(1.15)}100%{margin-top:0;-webkit-transform:scale(1);transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}50%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}80%{margin-top:-.375em;-webkit-transform:scale(1.15);transform:scale(1.15)}100%{margin-top:0;-webkit-transform:scale(1);transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}}body.swal2-toast-shown .swal2-container{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-shown{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}body.swal2-toast-column .swal2-toast{flex-direction:column;align-items:stretch}body.swal2-toast-column .swal2-toast .swal2-actions{flex:1;align-self:stretch;height:2.2em;margin-top:.3125em}body.swal2-toast-column .swal2-toast .swal2-loading{justify-content:center}body.swal2-toast-column .swal2-toast .swal2-input{height:2em;margin:.3125em auto;font-size:1em}body.swal2-toast-column .swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast{flex-direction:row;align-items:center;width:auto;padding:.625em;overflow-y:hidden;box-shadow:0 0 .625em #d9d9d9}.swal2-popup.swal2-toast .swal2-header{flex-direction:row}.swal2-popup.swal2-toast .swal2-title{flex-grow:1;justify-content:flex-start;margin:0 .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{position:initial;width:.8em;height:.8em;line-height:.8}.swal2-popup.swal2-toast .swal2-content{justify-content:flex-start;font-size:1em}.swal2-popup.swal2-toast .swal2-icon{width:2em;min-width:2em;height:2em;margin:0}.swal2-popup.swal2-toast .swal2-icon::before{display:flex;align-items:center;font-size:2em;font-weight:700}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-popup.swal2-toast .swal2-icon::before{font-size:.25em}}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{height:auto;margin:0 .3125em}.swal2-popup.swal2-toast .swal2-styled{margin:0 .3125em;padding:.3125em .625em;font-size:1em}.swal2-popup.swal2-toast .swal2-styled:focus{box-shadow:0 0 0 .0625em #fff,0 0 0 .125em rgba(50,100,150,.4)}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:2em;height:2.8125em;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.25em;left:-.9375em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:2em 2em;transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;-webkit-transform-origin:0 2em;transform-origin:0 2em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:showSweetToast .5s;animation:showSweetToast .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:hideSweetToast .2s forwards;animation:hideSweetToast .2s forwards}.swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-tip{-webkit-animation:animate-toast-success-tip .75s;animation:animate-toast-success-tip .75s}.swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-long{-webkit-animation:animate-toast-success-long .75s;animation:animate-toast-success-long .75s}@-webkit-keyframes showSweetToast{0%{-webkit-transform:translateY(-.625em) rotateZ(2deg);transform:translateY(-.625em) rotateZ(2deg);opacity:0}33%{-webkit-transform:translateY(0) rotateZ(-2deg);transform:translateY(0) rotateZ(-2deg);opacity:.5}66%{-webkit-transform:translateY(.3125em) rotateZ(2deg);transform:translateY(.3125em) rotateZ(2deg);opacity:.7}100%{-webkit-transform:translateY(0) rotateZ(0);transform:translateY(0) rotateZ(0);opacity:1}}@keyframes showSweetToast{0%{-webkit-transform:translateY(-.625em) rotateZ(2deg);transform:translateY(-.625em) rotateZ(2deg);opacity:0}33%{-webkit-transform:translateY(0) rotateZ(-2deg);transform:translateY(0) rotateZ(-2deg);opacity:.5}66%{-webkit-transform:translateY(.3125em) rotateZ(2deg);transform:translateY(.3125em) rotateZ(2deg);opacity:.7}100%{-webkit-transform:translateY(0) rotateZ(0);transform:translateY(0) rotateZ(0);opacity:1}}@-webkit-keyframes hideSweetToast{0%{opacity:1}33%{opacity:.5}100%{-webkit-transform:rotateZ(1deg);transform:rotateZ(1deg);opacity:0}}@keyframes hideSweetToast{0%{opacity:1}33%{opacity:.5}100%{-webkit-transform:rotateZ(1deg);transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes animate-toast-success-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes animate-toast-success-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes animate-toast-success-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes animate-toast-success-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-shown{top:auto;right:auto;bottom:auto;left:auto;max-width:calc(100% - .625em * 2);background-color:transparent}body.swal2-no-backdrop .swal2-shown>.swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}body.swal2-no-backdrop .swal2-shown.swal2-top{top:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-top-left,body.swal2-no-backdrop .swal2-shown.swal2-top-start{top:0;left:0}body.swal2-no-backdrop .swal2-shown.swal2-top-end,body.swal2-no-backdrop .swal2-shown.swal2-top-right{top:0;right:0}body.swal2-no-backdrop .swal2-shown.swal2-center{top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}body.swal2-no-backdrop .swal2-shown.swal2-center-left,body.swal2-no-backdrop .swal2-shown.swal2-center-start{top:50%;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-center-end,body.swal2-no-backdrop .swal2-shown.swal2-center-right{top:50%;right:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-bottom{bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-bottom-left,body.swal2-no-backdrop .swal2-shown.swal2-bottom-start{bottom:0;left:0}body.swal2-no-backdrop .swal2-shown.swal2-bottom-end,body.swal2-no-backdrop .swal2-shown.swal2-bottom-right{right:0;bottom:0}.swal2-container{display:flex;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;flex-direction:row;align-items:center;justify-content:center;padding:.625em;overflow-x:hidden;background-color:transparent;-webkit-overflow-scrolling:touch}.swal2-container.swal2-top{align-items:flex-start}.swal2-container.swal2-top-left,.swal2-container.swal2-top-start{align-items:flex-start;justify-content:flex-start}.swal2-container.swal2-top-end,.swal2-container.swal2-top-right{align-items:flex-start;justify-content:flex-end}.swal2-container.swal2-center{align-items:center}.swal2-container.swal2-center-left,.swal2-container.swal2-center-start{align-items:center;justify-content:flex-start}.swal2-container.swal2-center-end,.swal2-container.swal2-center-right{align-items:center;justify-content:flex-end}.swal2-container.swal2-bottom{align-items:flex-end}.swal2-container.swal2-bottom-left,.swal2-container.swal2-bottom-start{align-items:flex-end;justify-content:flex-start}.swal2-container.swal2-bottom-end,.swal2-container.swal2-bottom-right{align-items:flex-end;justify-content:flex-end}.swal2-container.swal2-bottom-end>:first-child,.swal2-container.swal2-bottom-left>:first-child,.swal2-container.swal2-bottom-right>:first-child,.swal2-container.swal2-bottom-start>:first-child,.swal2-container.swal2-bottom>:first-child{margin-top:auto}.swal2-container.swal2-grow-fullscreen>.swal2-modal{display:flex!important;flex:1;align-self:stretch;justify-content:center}.swal2-container.swal2-grow-row>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-grow-column{flex:1;flex-direction:column}.swal2-container.swal2-grow-column.swal2-bottom,.swal2-container.swal2-grow-column.swal2-center,.swal2-container.swal2-grow-column.swal2-top{align-items:center}.swal2-container.swal2-grow-column.swal2-bottom-left,.swal2-container.swal2-grow-column.swal2-bottom-start,.swal2-container.swal2-grow-column.swal2-center-left,.swal2-container.swal2-grow-column.swal2-center-start,.swal2-container.swal2-grow-column.swal2-top-left,.swal2-container.swal2-grow-column.swal2-top-start{align-items:flex-start}.swal2-container.swal2-grow-column.swal2-bottom-end,.swal2-container.swal2-grow-column.swal2-bottom-right,.swal2-container.swal2-grow-column.swal2-center-end,.swal2-container.swal2-grow-column.swal2-center-right,.swal2-container.swal2-grow-column.swal2-top-end,.swal2-container.swal2-grow-column.swal2-top-right{align-items:flex-end}.swal2-container.swal2-grow-column>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen)>.swal2-modal{margin:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-container .swal2-modal{margin:0!important}}.swal2-container.swal2-fade{transition:background-color .1s}.swal2-container.swal2-shown{background-color:rgba(0,0,0,.4)}.swal2-popup{display:none;position:relative;box-sizing:border-box;flex-direction:column;justify-content:center;width:32em;max-width:100%;padding:1.25em;border-radius:.3125em;background:#fff;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-popup .swal2-header{display:flex;flex-direction:column;align-items:center}.swal2-popup .swal2-title{display:block;position:relative;max-width:100%;margin:0 0 .4em;padding:0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-popup .swal2-actions{z-index:1;flex-wrap:wrap;align-items:center;justify-content:center;margin:1.25em auto 0}.swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-popup .swal2-actions.swal2-loading .swal2-styled.swal2-confirm{box-sizing:border-box;width:2.5em;height:2.5em;margin:.46875em;padding:0;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border:.25em solid transparent;border-radius:100%;border-color:transparent;background-color:transparent!important;color:transparent;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-popup .swal2-actions.swal2-loading .swal2-styled.swal2-cancel{margin-right:30px;margin-left:30px}.swal2-popup .swal2-actions.swal2-loading :not(.swal2-styled).swal2-confirm::after{content:'';display:inline-block;width:15px;height:15px;margin-left:5px;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border:3px solid #999;border-radius:50%;border-right-color:transparent;box-shadow:1px 1px 1px #fff}.swal2-popup .swal2-styled{margin:.3125em;padding:.625em 2em;box-shadow:none;font-weight:500}.swal2-popup .swal2-styled:not([disabled]){cursor:pointer}.swal2-popup .swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#3085d6;color:#fff;font-size:1.0625em}.swal2-popup .swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#aaa;color:#fff;font-size:1.0625em}.swal2-popup .swal2-styled:focus{outline:0;box-shadow:0 0 0 2px #fff,0 0 0 4px rgba(50,100,150,.4)}.swal2-popup .swal2-styled::-moz-focus-inner{border:0}.swal2-popup .swal2-footer{justify-content:center;margin:1.25em 0 0;padding:1em 0 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-popup .swal2-image{max-width:100%;margin:1.25em auto}.swal2-popup .swal2-close{position:absolute;top:0;right:0;justify-content:center;width:1.2em;height:1.2em;padding:0;overflow:hidden;transition:color .1s ease-out;border:none;border-radius:0;outline:initial;background:0 0;color:#ccc;font-family:serif;font-size:2.5em;line-height:1.2;cursor:pointer}.swal2-popup .swal2-close:hover{-webkit-transform:none;transform:none;color:#f27474}.swal2-popup>.swal2-checkbox,.swal2-popup>.swal2-file,.swal2-popup>.swal2-input,.swal2-popup>.swal2-radio,.swal2-popup>.swal2-select,.swal2-popup>.swal2-textarea{display:none}.swal2-popup .swal2-content{z-index:1;justify-content:center;margin:0;padding:0;color:#545454;font-size:1.125em;font-weight:300;line-height:normal;word-wrap:break-word}.swal2-popup #swal2-content{text-align:center}.swal2-popup .swal2-checkbox,.swal2-popup .swal2-file,.swal2-popup .swal2-input,.swal2-popup .swal2-radio,.swal2-popup .swal2-select,.swal2-popup .swal2-textarea{margin:1em auto}.swal2-popup .swal2-file,.swal2-popup .swal2-input,.swal2-popup .swal2-textarea{box-sizing:border-box;width:100%;transition:border-color .3s,box-shadow .3s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;box-shadow:inset 0 1px 1px rgba(0,0,0,.06);font-size:1.125em}.swal2-popup .swal2-file.swal2-inputerror,.swal2-popup .swal2-input.swal2-inputerror,.swal2-popup .swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-popup .swal2-file:focus,.swal2-popup .swal2-input:focus,.swal2-popup .swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:0 0 3px #c4e6f5}.swal2-popup .swal2-file::-webkit-input-placeholder,.swal2-popup .swal2-input::-webkit-input-placeholder,.swal2-popup .swal2-textarea::-webkit-input-placeholder{color:#ccc}.swal2-popup .swal2-file:-ms-input-placeholder,.swal2-popup .swal2-input:-ms-input-placeholder,.swal2-popup .swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-popup .swal2-file::-ms-input-placeholder,.swal2-popup .swal2-input::-ms-input-placeholder,.swal2-popup .swal2-textarea::-ms-input-placeholder{color:#ccc}.swal2-popup .swal2-file::placeholder,.swal2-popup .swal2-input::placeholder,.swal2-popup .swal2-textarea::placeholder{color:#ccc}.swal2-popup .swal2-range{margin:1em auto;background:inherit}.swal2-popup .swal2-range input{width:80%}.swal2-popup .swal2-range output{width:20%;font-weight:600;text-align:center}.swal2-popup .swal2-range input,.swal2-popup .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-popup .swal2-input{height:2.625em;padding:0 .75em}.swal2-popup .swal2-input[type=number]{max-width:10em}.swal2-popup .swal2-file{background:inherit;font-size:1.125em}.swal2-popup .swal2-textarea{height:6.75em;padding:.75em}.swal2-popup .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:#545454;font-size:1.125em}.swal2-popup .swal2-checkbox,.swal2-popup .swal2-radio{align-items:center;justify-content:center;background:inherit}.swal2-popup .swal2-checkbox label,.swal2-popup .swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-popup .swal2-checkbox input,.swal2-popup .swal2-radio input{margin:0 .4em}.swal2-popup .swal2-validation-message{display:none;align-items:center;justify-content:center;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-popup .swal2-validation-message::before{content:'!';display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;zoom:normal;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}@supports (-ms-accelerator:true){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@-moz-document url-prefix(){.swal2-close:focus{outline:2px solid rgba(50,100,150,.4)}}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:1.25em auto 1.875em;zoom:normal;border:.25em solid transparent;border-radius:50%;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon::before{display:flex;align-items:center;height:92%;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-warning::before{content:'!'}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-info::before{content:'i'}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-question::before{content:'?'}.swal2-icon.swal2-question.swal2-arabic-question-mark::before{content:'؟'}.swal2-icon.swal2-success{border-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:3.75em 3.75em;transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 3.75em;transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.875em;width:1.5625em;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-progress-steps{align-items:center;margin:0 0 1.25em;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;width:2em;height:2em;border-radius:2em;background:#3085d6;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#3085d6}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;width:2.5em;height:.4em;margin:0 -1px;background:#3085d6}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-show.swal2-noanimation{-webkit-animation:none;animation:none}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-hide.swal2-noanimation{-webkit-animation:none;animation:none}.swal2-rtl .swal2-close{right:auto;left:0}.swal2-animate-success-icon .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-animate-success-icon .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-animate-success-icon .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-animate-error-icon{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-animate-error-icon .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}@-webkit-keyframes swal2-rotate-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:initial!important}}");