(()=>{"use strict";var e,t,n,r,o,a,s,i,c,u,l,f,p,d,A={148:(e,t,n)=>{n.d(t,{Z:()=>A});var r=n(559),o=n.n(r),a=n(476),s=n.n(a),i=n(678),c=n.n(i),u=new URL(n(735),n.b),l=new URL(n(852),n.b),f=s()(o()),p=c()(u),d=c()(l);f.push([e.id,'@font-face{font-family:"Jost";src:url('+p+') format("truetype");font-weight:400;font-style:normal}@font-face{font-family:"Julius Sans One";src:url('+d+') format("truetype");font-weight:400;font-style:normal}*{font-family:"Julius Sans One","儷黑 Pro","LiHei Pro","微軟正黑體","Microsoft JhengHei",sans-serif}p{color:red}.hello{color:blue}img{max-height:500px}',"",{version:3,sources:["webpack://./style.sass","webpack://./styles/_fonts.sass"],names:[],mappings:"AAAA,WCAA,kBACE,CAAA,8DACA,CAAA,eACA,CAAA,iBACA,CAAA,WAEF,6BACE,CAAA,8DACA,CAAA,eACA,CAAA,iBACA,CAAA,EAEF,0FACE,CAAA,EDTF,SAFa,CAAA,OAKb,UACE,CAAA,IAEF,gBACE",sourcesContent:["@import './styles/_fonts'\n\n$body-color: red\n\np\n  color: $body-color\n\n.hello\n  color: blue\n\nimg\n  max-height: 500px","@font-face\n  font-family: 'Jost'\n  src: url('./fonts/Jost-Regular.ttf') format('truetype')\n  font-weight: 400\n  font-style: normal\n\n@font-face\n  font-family: 'Julius Sans One'\n  src: url('./fonts/JuliusSansOne-Regular.ttf') format('truetype')\n  font-weight: 400\n  font-style: normal\n\n*\n  font-family: 'Julius Sans One', '儷黑 Pro', 'LiHei Pro', '微軟正黑體', 'Microsoft JhengHei', sans-serif\n"],sourceRoot:""}]);const A=f},476:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(s[c]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);r&&s[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},678:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},559:e=>{e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),a="/*# ".concat(o," */"),s=n.sources.map((function(e){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(e," */")}));return[t].concat(s).concat([a]).join("\n")}return[t].join("\n")}},892:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},s=[],i=0;i<e.length;i++){var c=e[i],u=r.base?c[0]+r.base:c[0],l=a[u]||0,f="".concat(u," ").concat(l);a[u]=l+1;var p=n(f),d={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(d);else{var A=o(d,r);r.byIndex=i,t.splice(i,0,{identifier:f,updater:A,references:1})}s.push(f)}return s}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var s=0;s<a.length;s++){var i=n(a[s]);t[i].references--}for(var c=r(e,o),u=0;u<a.length;u++){var l=n(a[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=c}}},311:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},60:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},192:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},760:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},865:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},735:(e,t,n)=>{e.exports=n.p+"fonts/Jost-Regular.ttf"},852:(e,t,n)=>{e.exports=n.p+"fonts/JuliusSansOne-Regular.ttf"}},m={};function h(e){var t=m[e];if(void 0!==t)return t.exports;var n=m[e]={id:e,exports:{}};return A[e](n,n.exports,h),n.exports}h.m=A,h.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return h.d(t,{a:t}),t},h.d=(e,t)=>{for(var n in t)h.o(t,n)&&!h.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},h.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),h.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;h.g.importScripts&&(e=h.g.location+"");var t=h.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),h.p=e})(),h.b=document.baseURI||self.location.href,e=h(892),t=h.n(e),n=h(760),r=h.n(n),o=h(311),a=h.n(o),s=h(192),i=h.n(s),c=h(60),u=h.n(c),l=h(865),f=h.n(l),p=h(148),(d={}).styleTagTransform=f(),d.setAttributes=i(),d.insert=a().bind(null,"head"),d.domAPI=r(),d.insertStyleElement=u(),t()(p.Z,d),p.Z&&p.Z.locals&&p.Z.locals})();
//# sourceMappingURL=main.ddf529.bundle.js.map