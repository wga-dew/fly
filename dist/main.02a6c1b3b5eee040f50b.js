!function(){"use strict";var t=function(t){var e;t.windowLoadData;(e=document.querySelectorAll("a.disabled"))&&e.forEach((function(t){t.addEventListener("click",(function(t){return t.preventDefault(),!1}))}))};function e(t,e){var o="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!o){if(Array.isArray(t)||(o=function(t,e){if(!t)return;if("string"==typeof t)return n(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);"Object"===o&&t.constructor&&(o=t.constructor.name);if("Map"===o||"Set"===o)return Array.from(t);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return n(t,e)}(t))||e&&t&&"number"==typeof t.length){o&&(t=o);var a=0,i=function(){};return{s:i,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,r=!0,c=!1;return{s:function(){o=o.call(t)},n:function(){var t=o.next();return r=t.done,t},e:function(t){c=!0,l=t},f:function(){try{r||null==o.return||o.return()}finally{if(c)throw l}}}}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}var o=function(t){var n=t.actionHandleEl,o=void 0===n?null:n,a=(t.showEl,t.show,document.querySelectorAll(o));a&&a.forEach((function(t){!function(t){var n=t.el,o=void 0===n?null:n,a=t.toggleEl,i=void 0===a?null:a,l=t.dur,r=void 0===l?300:l,c=t.display,s=void 0===c?"block":c,d=t.activeClass,u=void 0===d?"show":d;o&&i&&i.addEventListener("click",(function(){var t=o.scrollHeight;o.style.display=s,0==parseFloat(window.getComputedStyle(o).transitionDuration)&&(o.style.transition="height ".concat(r/1e3,"s ease-in-out")),window.addEventListener("resize",(function(){if(o.classList.contains(u)){var t,n=[],a=e(o.children);try{for(a.s();!(t=a.n()).done;){var i=t.value;n.push(i.clientHeight)}}catch(t){a.e(t)}finally{a.f()}var l=n.reduce((function(t,e){return t+e}));o.style.height="".concat(l,"px")}})),o.classList.contains(u)?(o.classList.remove(u),o.style.height="calc(".concat(o.style.height," - ").concat(t,"px)")):(o.classList.add(u),o.style.height="".concat(t,"px"),o.style.maxHeight="100%")}))}({toggleEl:t,el:t.nextElementSibling})}))},a=function(t){var e=t.asideBlockSelector,n=void 0===e?null:e,o=t.asideCloseSelector,a=void 0===o?null:o,i=t.asideOpenSelector,l=void 0===i?null:i,r=t.id,c=void 0===r?null:r,s=t.overley,d=void 0===s?null:s,u=t.options,h=void 0===u?{width:"100%"}:u,v=document.querySelectorAll("[".concat(l,"=").concat(c,"]")),f=document.querySelector("[".concat(n,"=").concat(c,"]")),y=f.querySelector("[".concat(a,"=").concat(c,"]")),p=document.querySelector(d);function w(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;t&&(t.classList.remove("show"),t.removeAttribute("style")),e&&e.classList.remove("active")}v&&(v.forEach((function(t){t.addEventListener("click",(function(){var t;f&&(window.innerWidth<=375?f.style.width="100%":f.style.width=h.width,f.classList.add("show"),p&&p.classList.add("active"),t=f,window.addEventListener("resize",(function(){t.classList.contains("show")&&(window.innerWidth<=375?t.style.width="100%":t.style.width=h.width)})))}))})),y.addEventListener("click",(function(){w(f,p)})),p&&p.addEventListener("click",(function(){w(f,p)})))},i=function(t){var e=t.swiperSelector,n=void 0===e?null:e,o=t.touch,a=void 0!==o&&o,i=t.count,l=void 0===i?1:i,r=document.querySelector(n),c=r.querySelector(".swiper_container"),s=c.querySelectorAll(".swiper_item"),d=r.querySelector(".prev"),u=r.querySelector(".next");if(r&&c&&s){var h=function(t){if(!(E&&b&&M&&x))return!1;X=Math.round(t.timeStamp),k=M-E,q=x-b;var e=X-A;a&&(Math.abs(k)>=C||Math.abs(q)>=H&&e>W?Math.abs(k)>Math.abs(q)&&(k>0?y():p()):(c.style.transform="translateX(-".concat(g*m,"px)"),c.style.transitionDuration=L)),v()},v=function(){E=null,b=null,M=null,x=null,q=null,k=null,A=null,X=null},f=function(){l<1&&(l=1),l>5&&(l=5),D=Math.round(s[0].clientWidth-.1*s[0].clientWidth),C=Math.round(s[0].clientWidth/2),H=Math.round(r.clientHeight/2),W=Math.round((C+H)/2),m=0,S=s.length,g=+window.getComputedStyle(r).width.replace("px","")/l,s.forEach((function(t){t.style.width=g+"px",t.style.height="auto"})),c.style.width="".concat(g*S,"px"),c.style.height="auto",c.style.transform="translateX(0)"},y=function(){m>0?--m:m=m,w(m)},p=function(){m!=S-l?++m:m=m,w(m)},w=function(t){switch(c.style.transitionDuration=L,t){case t<0:c.style.transform="translateX(-".concat(g*(S-1),"px)");break;case S:c.style.transform="translateX(0px)";break;default:c.style.transform="translateX(-".concat(g*t,"px)")}},m=null,S=null,g=null,L=window.getComputedStyle(c).transitionDuration.split(",")[0];f(),d&&u&&(d.addEventListener("click",y),u.addEventListener("click",p)),r.addEventListener("touchstart",(function(t){var e=t.touches?t.touches[0]:t;E=e.clientX,b=e.clientY,A=Math.round(t.timeStamp)}),{passive:!0}),r.addEventListener("touchmove",(function(t){if(!E||!b)return!1;var e=t.touches?t.touches[0]:t;M=e.clientX,x=e.clientY,k=M-E,q=x-b,Math.abs(k)>D&&h(t),Math.abs(k)>Math.abs(q)&&(c.style.transitionDuration="0ms",c.style.transform=k>0&&m>0?"translateX(-".concat(g*m-Math.abs(k),"px)"):k>0&&0==m?"translateX(".concat(g*m+Math.abs(k),"px)"):"translateX(-".concat(g*m+Math.abs(k),"px)"))}),{passive:!0}),r.addEventListener("touchend",h,{passive:!0}),window.addEventListener("resize",f,{passive:!0});var E=null,b=null,M=null,x=null,k=null,q=null,A=null,X=null,C=Math.round(s[0].clientWidth/2),D=Math.round(s[0].clientWidth-.1*s[0].clientWidth),H=Math.round(r.clientHeight/4),W=Math.round((C+H)/2)}},l=function(t){var e=t.dataName,n=void 0===e?null:e,o=document.querySelector("[data-modal='".concat(n,"']")),a=document.querySelector("[data-open='".concat(n,"']")),i=document.querySelector("[data-close='".concat(n,"']"));function l(){o.classList.remove("show")}o&&a&&i&&(a.addEventListener("click",(function(){o.classList.add("show")})),i.addEventListener("click",l),o.addEventListener("click",(function(t){t.target.closest(".modal")||l()})))};window.addEventListener("DOMContentLoaded",(function(e){t({windowLoadData:e}),o({showEl:".accordion-collapse",actionHandleEl:".accordion-header"}),a({asideCloseSelector:"data-close",asideOpenSelector:"data-open",asideBlockSelector:"data-aside",id:"sidenav-1",overley:".overley",options:{width:"350px"}}),a({asideCloseSelector:"data-close",asideOpenSelector:"data-open",asideBlockSelector:"data-aside",id:"sidenav-2",options:{width:"100%"}}),i({swiperSelector:".swiper1",touch:!0,count:3}),l({dataName:"modal-1"});var n="Hello";n.something=5,alert(n.something)}))}();