!function(e){function t(t){for(var r,o,i=t[0],c=t[1],l=t[2],f=0,d=[];f<i.length;f++)o=i[f],a[o]&&d.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(s&&s(t);d.length;)d.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={0:0},a={0:0},u=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[];o[e]?t.push(o[e]):0!==o[e]&&{1:1,2:1}[e]&&t.push(o[e]=new Promise(function(t,n){for(var r="assets/styles/"+e+".026d7.css",o=i.p+r,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var c=(f=a[u]).getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(c===r||c===o))return t()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){var f;if((c=(f=l[u]).getAttribute("data-href"))===r||c===o)return t()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=t,s.onerror=function(t){var r=t&&t.target&&t.target.src||o,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.request=r,n(a)},s.href=o,document.getElementsByTagName("head")[0].appendChild(s)}).then(function(){o[e]=0}));var n,r=a[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise(function(t,n){r=a[e]=[t,n]});t.push(r[2]=u);var c,l=document.getElementsByTagName("head")[0],f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=i.p+"assets/scripts/"+({1:"app",2:"home"}[n=e]||n)+".026d7.js",c=function(t){f.onerror=f.onload=null,clearTimeout(s);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,u=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");u.type=r,u.request=o,n[1](u)}a[e]=void 0}};var s=setTimeout(function(){c({type:"timeout",target:f})},12e4);f.onerror=f.onload=c,l.appendChild(f)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="./",i.oe=function(e){throw e};var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var f=0;f<c.length;f++)t(c[f]);var s=l;u.push([135,3]),n()}({124:function(e,t,n){"use strict";var r={};n.r(r),n.d(r,"getName",function(){return i}),n(120),n(56),n(95);var o="header/CHANGE_NAME",a={name:"DogJun"},u=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:a;switch((1<arguments.length?arguments[1]:void 0).type){case o:return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){var r,o,a;r=e,a=n[o=t],o in r?Object.defineProperty(r,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[o]=a})}return e}({},e,{name:"xiaomi"});default:return e}},i=function(){return{type:o}};n.d(t,"b",function(){return u}),n.d(t,"a",function(){return r})},135:function(e,t,n){n(136),e.exports=n(305)},305:function(e,t,n){"use strict";n.r(t);var r=n(2),o=n.n(r),a=n(122),u=n(313),i=n(128),c=n.n(i),l=n(63),f=n.n(l),s=function(){return o.a.createElement("p",null,"正在拼命加载中...")},d=[{path:"/",component:f()({loader:function(){return n.e(1).then(n.bind(null,314))},loading:s}),routes:[{path:"/",exact:!0,component:f()({loader:function(){return n.e(2).then(n.bind(null,312))},loading:s})},{path:"/home",exact:!0,component:f()({loader:function(){return n.e(2).then(n.bind(null,312))},loading:s})}]}],p=n(123),h=n(33),m=n(129),g=n(124),b=Object(h.c)({header:g.b}),v=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||h.d,y=Object(h.e)(b,v(Object(h.a)(m.a)));c.a.render(o.a.createElement(function(){return o.a.createElement(a.a,{store:y},o.a.createElement(u.a,null,Object(p.a)(d)))},null),document.getElementById("root"))}});