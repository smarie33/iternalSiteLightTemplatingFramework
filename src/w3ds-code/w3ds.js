/* w3 Design System v2.0.0
 released Fri Aug 11 2017 13:31:33 GMT-0400 (EDT) */
!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){function o(e,t){try{return t(e)}catch(e){console.error("Error: ",e)}}function r(){Array.prototype.slice.apply(document.querySelectorAll(".ds-overlay, .ds-overlay-focus, .ds-overlay-fullscreen")).forEach(function(e){o(e,A)})}function i(){Array.prototype.slice.apply(document.querySelectorAll(".ds-tray")).forEach(function(e){o(e,w)})}function s(){Array.prototype.slice.apply(document.querySelectorAll(".ds-tabs")).forEach(function(e){o(e,g)})}function c(){var e=Array.prototype.slice.apply(document.querySelectorAll(".ds-tooltip"));o(e,a),e.forEach(function(e){o(e,x)})}function a(e){var t=document.createElement("style");t.id=x.styleTagId,t.innerHTML="",document.head.appendChild(t)}function l(){Array.prototype.slice.apply(document.querySelectorAll(".ds-dismissible")).forEach(function(e){o(e,q)})}function d(){Array.prototype.slice.apply(document.querySelectorAll(".ds-dropdown")).forEach(function(e){o(e,S)})}function u(){Array.prototype.slice.apply(document.querySelectorAll(".ds-progress-bar")).forEach(function(e){o(e,k.progressBar)})}function f(){Array.prototype.slice.apply(document.querySelectorAll(".ds-file-upload")).forEach(function(e){o(e,k.fileUpload)})}function p(){Array.prototype.slice.apply(document.querySelectorAll(".ds-accordion, .ds-accordion-small, .ds-accordion-large")).forEach(function(e){o(e,T)})}function v(){o(Array.prototype.slice.call(document.querySelectorAll('[class*="ds-set-height-"]')),D)}function y(){Array.prototype.slice.apply(document.querySelectorAll(".ds-carousel")).forEach(function(e){o(e,O)})}function m(){Array.prototype.slice.apply(document.querySelectorAll('a[href^="#"]')).forEach(function(e){e.hash.length>0&&o(e,H)})}function h(){o("",C)}function b(){o("",F)}function L(){Array.prototype.slice.apply(document.querySelectorAll(".ds-expand-collapse")).forEach(function(e){o(e,I)})}function E(){r(),i(),s(),c(),l(),d(),u(),f(),p(),v(),y(),m(),L(),document.querySelector(".ds-scrollspy")?b():h(),window.addEventListener("resize",N.last(40,v))}var A=n(1),w=n(3),g=n(4),x=n(5),q=n(6),S=n(7),k=n(8),T=n(9),M=n(10),O=n(11),C=n(16),F=n(17),H=n(18),I=n(19),N=n(2),j=M.setHeight,D=M.setHeightMultipleGroups;window.w3ds={init:E,overlay:A,tray:w,tabGroup:g,tooltip:x,dismissible:q,dropdown:S,progressBar:k,accordion:T,setHeight:j,setAllHeightGroups:D,carousel:O,jumpLink:H,sideNav:C,scrollspy:F,expandCollapse:I},document.addEventListener("DOMContentLoaded",function(e){document.querySelector(".ds-js-manual-init")||E()})},function(e,t,n){function o(e,t){e.classList.add("ds-open"),l.style.overflow="hidden",e.setAttribute("aria-hidden",!1),t.focus()}function r(e,t){e.classList.remove("ds-open"),l.style.overflow="auto",e.setAttribute("aria-hidden",!0),t.focus()}function i(e,t){function n(){e.removeEventListener("click",i),window.removeEventListener("focusin",s),window.removeEventListener("keydown",d),r(e,m)}function i(e){u(e.target)||n()}function s(e){f(e.target)||p.focus()}function d(e){e.keyCode===a.esc&&n()}function u(t){return-1!==t.className.split(" ").indexOf("ds-overlay-box")||t.id!==e.id&&u(t.parentNode)}function f(e){return-1!==e.className.split(" ").indexOf("ds-overlay-box")||e!==l&&f(e.parentNode)}var p,v,y=c(e.dataset,t),m=document.querySelector("#"+e.id+"-open");if(e.setAttribute("aria-hidden","true"),e.setAttribute("role","dialog"),e.querySelector(".ds-overlay-box").setAttribute("role","document"),"false"!==y.closeButton&&e.querySelector(".ds-overlay-box").insertAdjacentHTML("afterbegin",'<button class="ds-close ds-button ds-flat"><span class="ds-icon-x"></span></button>'),p=e.querySelector(".ds-close"),!m)return console.warn("w3DS: an open control does not exist for the overlay:",e);m.addEventListener("click",function(t){v=Array.prototype.slice.call(document.querySelectorAll("body > :not(.ds-overlay-container)")).filter(function(t){return t!==e}),window.addEventListener("keydown",d),window.addEventListener("focusin",s),-1===e.className.split(" ").indexOf("ds-overlay-focus")&&e.addEventListener("click",i),o(e,p),v.forEach(function(e){e.setAttribute("aria-hidden",!0)})}),p.addEventListener("click",function(){v.forEach(function(e){e.setAttribute("aria-hidden",!1)}),n()})}var s=n(2),c=s.objectFrom,a=s.keycodes,l=document.querySelector("body");e.exports=i},function(e,t){function n(){return Array.prototype.slice.call(arguments).reduce(function(e,t){if(t instanceof window.DOMStringMap)for(var n in t)e[n]=t[n];else for(var o in t)t.propertyIsEnumerable(o)&&(e[o]=t[o]);return e},{})}function o(e,t){var n;return function(){var o=Date.now();(!n||o-n>e)&&(t.apply(this,arguments),n=o)}}function r(e,t){var n,o;return function(){var r=Date.now(),i=this,s=arguments,c=function(){t.apply(i,s),n=r};o=setTimeout(function(){Date.now()-n>e&&c()},e),(!n||r-n>e)&&(c(),clearTimeout(o))}}function i(e,t){var n,r;return o(e,function(){var o=Date.now(),i=this,s=arguments;n&&o-n>e&&clearTimeout(r),r=setTimeout(function(){Date.now()-n>e&&(t.apply(i,s),n=o)},e),n=o})}function s(){function e(e){var t=Array.prototype.slice.call(arguments,1);o[e].forEach(function(e){e.apply(null,t)})}function t(e,t){return o[e]?o[e].push(t):o[e]=[t],t}function n(e,t){function n(e){return e!==t}if(e instanceof Function)for(var r in o)o[r].filter(n);else t?o[e].filter(n):o[e]=void 0}var o={};return{addListener:t,removeListener:n,trigger:e}}function c(e,t){function n(e){return e.length<4?n("0"+e):e}var o,r;return e=e||"",t=t||m,r=t[t.length-1],o=t.length?n(+r+1+""):"0001",t.push(o),o=e+o}function a(e,t){var n=window.pageYOffset,o=e-n,r=function(e){e+=20;var i=p(e,n,o,t);window.scroll(0,i),e<t&&setTimeout(function(){r(e)},20)};r(0)}function l(e){return function(t,n,o,r){function i(n){n+=f;var s=p(n,a,v,o);window.requestAnimationFrame(function(){t.style[e]=s+"px"}),n<o?setTimeout(function(){i(n)},f):r&&r()}o instanceof Function&&(r=o,o=null);var s=window.getComputedStyle(t),c=s["transition-property"],a=s[e],l="auto"===n?d(t,e,a):n,f=20,v=l-u(a);t.style[e]=a,t.offsetWidth,c&&-1!==c.indexOf(e)?(t.addEventListener("transitionend",function o(i){i.propertyName===e&&(t.style[e]=n,t.removeEventListener("transitionend",o),r&&r())}),t.style[e]=l+"px"):i(0)}}function d(e,t,n){e.style[t]="auto";var o=u(window.getComputedStyle(e)[t]);return e.style[t]=n,o}function u(e){return+e.replace(/px|em|rem/g,function(e){return""})}function f(e){for(var t=0;e;)t+=e.offsetTop+e.clientTop,e=e.offsetParent;return t}function p(e,t,n,o){return(e/=o/2)<1?n/2*e*e+t:(e-=1,-n/2*(e*(e-2)-1)+t)}function v(e,t){return e instanceof Array&&(e=null,t=e),e=e||"",t=t||[],{id:function(){return c(e,t)}}}function y(e,t){return e===t||e!==document.body&&y(e.parentNode,t)}var m=[],h={esc:27,enter:13,space:32,tab:9,left:37,up:38,right:39,down:40,shift:16},b=["a[href]","area[href]","input:not([disabled])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","iframe","object","embed","*[tabindex]","*[contenteditable]"];e.exports={objectFrom:n,keycodes:h,events:s,uniqueId:c,createUniqueIdSet:v,focusable:b.join(", "),scrollTo:a,getScrollTopFromBody:f,easeInOut:p,isTargetInsideElement:y,getAutoValue:d,animateProperty:l,throttle:o,throttleLast:r,last:i}},function(e,t,n){function o(e){e.style.zIndex=101,e.classList.add("ds-open"),e.classList.contains("ds-tray-left")?d(e,e.getAttribute("data-width")||"auto"):e.classList.contains("ds-tray-right")?u(e,e.getAttribute("data-margin-left")||0):l(e,e.getAttribute("data-height")||"auto"),e.parentElement.classList.add("ds-tray-open"),e.setAttribute("aria-hidden",!1)}function r(e){e.style.zIndex="";var t=e.id,n=document.querySelector(".ds-tray-open ."+t+"-open");if(n&&n.classList.remove("active"),e.classList.contains("ds-megamenu")){Array.prototype.slice.call(e.querySelectorAll(a)).forEach(function(e){e.tabIndex=-1})}else e.tabIndex=-1;e.classList.contains("ds-tray-left")?d(e,0,function(){e.classList.remove("ds-open")}):e.classList.contains("ds-tray-right")?u(e,"100%",function(){e.classList.remove("ds-open")}):l(e,0,function(){e.classList.remove("ds-open")}),e.parentElement.classList.remove("ds-tray-open"),e.setAttribute("aria-hidden",!0)}function i(e){function t(t){n(),u(),o(e),e.classList.contains("ds-megamenu")?s():e.tabIndex=0,A=!0}function n(){w.forEach(function(e){L.removeEventListener(e,t)})}function i(){w.forEach(function(e){L.addEventListener(e,t)})}function s(){var t=e.id,n=document.querySelector(".ds-tray-open ."+t+"-open");n.classList.add("active"),E.forEach(function(e){e.tabIndex=0}),n.addEventListener("blur",d)}function l(){var t=e.id,n=document.querySelector(".ds-tray-open ."+t+"-open");E.forEach(function(e){e.tabIndex=-1}),n.classList.remove("active"),n.removeEventListener("blur",d)}function d(e){E[0].focus()}function u(){e.classList.contains("ds-tray-hover-open")&&(L.addEventListener("mouseleave",m),e.addEventListener("mouseenter",h)),document.addEventListener("click",y,!0),L.addEventListener("click",m),window.addEventListener("keydown",m),e.addEventListener("blur",p,!0)}function p(t){c(t.relatedTarget,e)||e.classList.contains("ds-open")&&L.focus()}function v(){document.removeEventListener("click",y,!0),L.removeEventListener("click",m),window.removeEventListener("keydown",m),e.removeEventListener("blur",p),e.removeEventListener("mouseleave",m),e.classList.contains("ds-tray-hover-open")&&(L.removeEventListener("mouseleave",m),e.removeEventListener("mouseenter",h))}function y(e){e.stopPropagation(),b(e.target)||m(e)}function m(t){if(A){if(t.keyCode){if(t.keyCode!==f.esc)return;L.focus()}"mouseleave"===t.type&&c(t.relatedTarget,e)||(e.classList.contains("ds-megamenu")?l():e.tabIndex=-1,r(e),v(),i(),A=!1)}}function h(){e.addEventListener("mouseleave",m)}function b(t){return"BODY"!==t.tagName&&(!!t.classList.contains("ds-tray")||t.id!==e.id&&b(t.parentNode))}e.classList.contains("ds-tray-left")?e.style.width=0:e.classList.contains("ds-tray-right")?e.style.marginLeft="100%":e.style.height=0;var L=document.querySelector("."+e.id+"-open"),E=Array.prototype.slice.call(e.querySelectorAll(a)),A=!1,w=["click"];e.classList.contains("ds-tray-hover-open")&&w.push("mouseenter"),e.setAttribute("aria-hidden",!0),i()}var s=n(2),c=s.isTargetInsideElement,a=s.focusable,l=s.animateProperty("height"),d=s.animateProperty("width"),u=s.animateProperty("margin-left"),f=s.keycodes;e.exports=i},function(e,t,n){function o(e){function t(e){c=!1,u.forEach(function(t){t===e?(t.control.className+=" ds-selected",t.control.setAttribute("tabindex",0),t.control.setAttribute("aria-selected",!0),t.content&&(t.content.style.display="")):(t.control.setAttribute("aria-selected",!1),o(t),t.content&&(t.content.style.display="none"))})}function n(){c=!0,setTimeout(function(){c&&u.forEach(o)},10)}function o(e){var t=e.control.className.split(" ").filter(function(e){return"ds-selected"!==e}).join(" ");e.control.className=t,e.control.setAttribute("tabindex",-1)}function r(){var t=e.getElementsByClassName("ds-tab-controls")[0],n=e.querySelectorAll(".ds-tab-controls .ds-selected")[0];if(n){var o=n.offsetLeft%t.scrollWidth-t.clientWidth/2.25;t.scrollLeft=o}}function s(e){var t,n=e.target;e.keyCode===i.left?l.forEach(function(e,o){e===n&&o>0&&(t=o-1)}):e.keyCode===i.right&&l.forEach(function(e,o,r){e===n&&o<r.length-1&&(t=o+1)}),t>=0&&l[t].focus()}var c,a=e.querySelector(".ds-tab-controls"),l=Array.prototype.slice.apply(a.querySelectorAll(".ds-tab-controls .ds-button")),d=["click"];-1!==a.className.split(" ").indexOf("ds-tab-controls-hover")&&d.push("mouseenter");var u=l.map(function(t){var n="#"+t.id.split("-").map(function(e){return"control"===e?"content":e},"").join("-");return{control:t,content:t.id?e.querySelector(n):null}});a.addEventListener("keydown",s),l.forEach(function(e){e.classList.contains("ds-selected")?e.setAttribute("aria-selected",!0):(e.setAttribute("tabindex",-1),e.setAttribute("aria-selected",!1))}),u.forEach(function(e){-1===e.control.className.split(" ").indexOf("ds-selected")&&e.content&&(e.content.style.display="none"),d.forEach(function(n){e.control.addEventListener(n,function(){t(e),r()})}),-1!==d.indexOf("mouseenter")&&(e.control.addEventListener("mouseleave",n),e.content&&(e.content.addEventListener("mouseenter",function(){c=!1}),e.content.addEventListener("mouseleave",function(){o(e)})))}),r()}var r=n(2),i=r.keycodes;e.exports=o},function(e,t,n){function o(e){e.querySelector(".ds-tooltip-content").setAttribute("aria-hidden",!1),e.querySelector(".ds-tooltip-content").style.overflow="visible",e.classList.add("ds-open")}function r(e){function t(e){n.removeEventListener("transitionend",t),n.style.overflow="",n.setAttribute("aria-hidden",!0)}var n=e.querySelector(".ds-tooltip-content");n.addEventListener("transitionend",t),e.classList.remove("ds-open")}function i(e){function t(e){v.addEventListener(y,i),e.addEventListener("keydown",i)}function n(){v.removeEventListener(y,i),e.removeEventListener("keydown",i)}function i(t){t.keyCode&&13!==t.keyCode||(n(),o(e),d(e))}function s(n){var i=document.querySelectorAll(".ds-tooltip.ds-open"),s=n.target.parentElement,c=s.id;if(-1===s.className.split(" ").indexOf("ds-tooltip"))return u(),r(e),void t(e);for(var a=0;a<i.length;a++)if(-1===i[a].className.split(" ").indexOf("example")){if(i[a].id!==c)return u(),r(i[a]),o(s),d(s),void(i=[]);if(i[a].id===c)return u(),r(e),n.stopPropagation(),void t(e)}}function l(e){e.stopPropagation(),b.reduce(function(t,n){return n.el===e.relatedTarget||t},!1)||s(e)}function d(e){b.forEach(function(e){e.tabindex?e.el.setAttribute("tabindex",e.tabindex):e.el.setAttribute("tabindex",0)}),e.classList.contains("ds-click")||e.addEventListener(m,f),document.addEventListener("click",l,!0),e.addEventListener("keydown",f),e.addEventListener("blur",l,!0)}function u(){b.forEach(function(e){e.el.setAttribute("tabindex",-1)}),e.classList.contains("ds-click")||e.removeEventListener(m,f),document.removeEventListener("click",l,!0),e.removeEventListener("keydown",f),e.removeEventListener("blur",l,!0)}function f(n){n.keyCode&&13!==n.keyCode||(r(e),u(),t(e))}var p=document.querySelector("#"+a),v=e.querySelector(".ds-tooltip-trigger")?e.querySelector(".ds-tooltip-trigger"):document.querySelector("#"+e.id),y="mouseover",m="mouseout",h=Array.prototype.slice.call(e.querySelectorAll(".ds-tooltip-trigger")),b=Array.prototype.slice.call(e.querySelectorAll(c)).filter(function(e){return!e.classList.contains("ds-tooltip-trigger")}).map(function(e){return{el:e,tabindex:e.getAttribute("tabindex")}});e.querySelector(".ds-tooltip-content").setAttribute("aria-hidden",!0),b.forEach(function(e){e.el.setAttribute("tabindex",-1)}),h.forEach(function(e){null==e.getAttribute("tabindex")&&e.setAttribute("tabindex",0)}),function(){var t,n=e.querySelector(".ds-tooltip-content").dataset.caret;null!=n&&-1===p.innerHTML.indexOf(n)&&(t='.ds-tooltip-content[data-caret="'+n+'"]',p.innerHTML+=t+"::before, "+t+"::after { left: "+n+"%; }\n")}(),-1!==e.className.split(" ").indexOf("ds-click")&&(y=m="click"),t(e)}var s=n(2),c=s.focusable,a="tooltip-caret-positions";e.exports=i,e.exports.styleTagId="tooltip-caret-positions"},function(e,t){function n(e){e.remove(),r.style.overflow="auto"}function o(e){function t(t){e.classList.add("ds-fade"),e.addEventListener("transitionend",o)}function o(i){i.target.classList.contains("ds-dismissible")&&(e.removeEventListener("transitionend",o),e.classList.remove("ds-fade"),n(e)),r.removeEventListener("click",t)}var r=e.querySelector(".ds-close");r.addEventListener("click",t)}var r=document.querySelector("body");e.exports=o},function(e,t,n){function o(e){e.classList.add("ds-open")}function r(e){e.classList.remove("ds-open")}function i(e){function t(){e.addEventListener(h,l),e.addEventListener("keydown",d)}function n(){e.removeEventListener(h,l),e.removeEventListener("keydown",d)}function i(){e.addEventListener(b,f),e.addEventListener("keydown",u),e.addEventListener("blur",p,!0),e.addEventListener("focus",v,!0)}function s(){e.removeEventListener(b,f),e.removeEventListener("keydown",u),e.removeEventListener("blur",p,!0),e.removeEventListener("focus",v,!0)}function l(){n(),A.forEach(function(e){e.tabindex?e.el.setAttribute("tabindex",e.tabindex):e.el.removeAttribute("tabindex")}),L.setAttribute("aria-hidden","false"),E.forEach(function(e,t){"-1"===e.getAttribute("tabindex")&&e.setAttribute("tabindex",0)}),o(e),i()}function d(e){e.keyCode!==c.enter&&e.keyCode!==c.space||(e.preventDefault(),l())}function u(e){e.keyCode!==c.enter&&e.keyCode!==c.space||(e.preventDefault(),f(e))}function f(e){["ds-dropdown","ds-dropup","ds-title","ds-option"].reduce(function(t,n){return t||e.target.classList.contains(n)},!1)?y():e.stopPropagation()}function p(e){m=!0,window.requestAnimationFrame(function(){m&&y()})}function v(){m=!1}function y(){s(),A.forEach(function(e){e.el.setAttribute("tabindex",-1)}),L.setAttribute("aria-hidden","true"),E.forEach(function(e){e.setAttribute("tabindex",-1)}),r(e),e.focus(),t()}var m,h="click",b="click",L=e.querySelector(".ds-options"),E=Array.prototype.slice.call(e.querySelectorAll(".ds-option")),A=Array.prototype.slice.call(e.querySelectorAll(a)).map(function(e){return{el:e,tabindex:e.getAttribute("tabindex")}});L.setAttribute("aria-hidden","true"),A.forEach(function(e){e.el.setAttribute("tabindex",-1)}),E.forEach(function(e){e.setAttribute("tabindex",-1)}),e.classList.contains("ds-hover")&&(h="mouseenter",b="mouseleave"),t()}var s=n(2),c=s.keycodes,a=s.focusable;e.exports=i},function(e,t){function n(e){function t(e){e>c&&e<=s?(o.style.width=e+"%",r&&n(e)):e>s?(o.style.width=s+"%",r&&n(s)):(o.style.width=c+"%",r&&n(c))}function n(e){r.innerHTML=e,r.style.left="calc("+e+"% - "+r.offsetWidth/2+"px)"}var o=e.querySelector(".ds-progress"),r=e.querySelector(".ds-progress-counter"),i=o.dataset.value||0,s=o.dataset.maxValue||100,c=o.dataset.minValue||0;t(i),new window.MutationObserver(function(e){e.forEach(function(e){t(e.target.dataset.value)})}).observe(o,{attributes:!0})}function o(e){function t(e){n.style.width=e+"%"}var n=e.querySelector(".ds-progress");t(n.dataset.value||0),new window.MutationObserver(function(e){e.forEach(function(e){t(e.target.dataset.value)})}).observe(n,{attributes:!0})}e.exports={progressBar:n,fileUpload:o}},function(e,t,n){function o(e){e.classList.add("ds-open"),e.setAttribute("aria-expanded","true"),e.querySelector(".ds-accordion-slidedown").setAttribute("aria-hidden","false")}function r(e){e.classList.remove("ds-open"),e.setAttribute("aria-expanded","false"),e.querySelector(".ds-accordion-slidedown").setAttribute("aria-hidden","true")}function i(e){function t(e){var t=this;(e.target.classList.contains("ds-accordion-title")||e.target.classList.contains("ds-accordion-control"))&&(t.classList.contains("ds-open")?(n(),r(t)):(i(),o(t)))}function n(){l.forEach(function(e){e.el.setAttribute("tabindex",-1)})}function i(){l.forEach(function(e){e.tabindex?e.el.setAttribute("tabindex",e.tabindex):e.el.removeAttribute("tabindex")})}var s=Array.prototype.slice.call(e.querySelectorAll(".ds-accordion-control")),l=Array.prototype.slice.call(e.querySelectorAll(a)).map(function(e){return{el:e,tabindex:e.getAttribute("tabindex")}});s.forEach(function(e){e.setAttribute("tabindex",0),e.addEventListener("click",t),e.addEventListener("keydown",function(e){e.keyCode===c.enter&&t.call(this,e)})}),n()}var s=n(2),c=s.keycodes,a=s.focusable;e.exports=i},function(e,t){function n(e){var t=e.map(function(e){return Array.prototype.filter.call(e.classList,function(e){return-1!==e.indexOf("ds-set-height")}).map(function(t){return{class:t,el:e}})[0]}).reduce(function(e,t,n,o){return e[t.class]||(e[t.class]=[]),e[t.class].push(t.el),e},{});Object.keys(t).forEach(function(e){o(t[e])})}function o(e){var t=0;e.forEach(function(e){e.style.minHeight=""}),e.forEach(function(e){var n=e.offsetHeight;t=n>t?n:t}),e.forEach(function(e){e.style.minHeight=t+"px"})}e.exports={setHeight:o,setHeightMultipleGroups:n}},function(e,t,n){function o(e,t){function n(e){return e>=c()?m?0:null:e+1}function o(e){return e<=0?m?c():null:e-1}function c(){return y.length-1}function a(e){null!=e&&(v.style.left=-100*e+"%",m||(("left"===h&&0!==e||"right"===h&&e!==y.length-1)&&d(),0===e?l(e):e===y.length-1&&l(e)))}function l(e){h=0===e?"left":"right",b="left"===h?f.elements.left:f.elements.right,b.style.opacity=0,b.classList.add("ds-disabled")}function d(){b.style.display="",b.classList.remove("ds-disabled"),b.style.opacity=1,h=null,b=null}var u,f,p=r(),v=e.querySelector(".ds-carousel-items"),y=Array.prototype.slice.call(e.querySelectorAll(".ds-carousel-items > *")),m=e.classList.contains("ds-infinite"),h=null,b=null;t=t||0,u=i(e,y,p,t),f=s(u.el,p),function(){var e=100*y.length+"%",n=100/y.length+"%";v.style.width=e,y.forEach(function(e){e.style.width=n}),a(t||0)}(),p.addListener("changePosition",function(e){a(e)}),p.addListener("arrowClick",function(e){var t;"left"===e?t=o(u.position()):"right"===e&&(t=n(u.position())),u.position(t),a(t)})}var r=n(2).events,i=n(12),s=n(14);e.exports=o},function(e,t,n){function o(e,t,n,o){function i(e){return void 0===e?f:null===e?null:"number"!=typeof e?console.warn("cannot change position to a non-number"):(f=e,void l(e))}function s(){u.forEach(function(e){e.addEventListener("click",a)})}function c(){u.forEach(function(e){e.removeEventListener("click",a)})}function a(e){var t=e.target,o=+t.dataset.index;o!==f&&(f=o,l(o),n.trigger("changePosition",o))}function l(e){u.forEach(function(t,n){n===e?t.classList.add("ds-selected"):t.classList.remove("ds-selected")})}function d(e){var t={},n=e.classes.contains("ds-carousel-controls-circle")?"circle":e.classes.contains("ds-carousel-controls-number")?"number":null;return t.items=e.numOfItems,t.type=t.items<6?n||"circle":"condensed",t.color=e.classes.contains("ds-carousel-controls-color"),t}var u,f=o||0,p={classes:e.classList,numOfItems:t.length};return u=function(){var t=r(d(p));e.insertAdjacentHTML("beforeend",t);var n=e.querySelectorAll(".ds-carousel-position-indicator > div");return Array.prototype.slice.call(n)}(),s(),{position:i,addListeners:s,removeListeners:c,el:e.querySelector(".ds-carousel-position-indicator")}}var r=n(13);e.exports=o},function(e,t){e.exports=function(e){var t,n="",o=(Array.prototype.join,e.type);n+="\n";var r=e.color&&"circle"===o;n+="\n";var i=[];n+="\n";for(var s=0;s<e.items;s++)i.push(s);return n+='\n\n\n<div class="ds-carousel-position-indicator ds-'+(null==(t=o)?"":t)+" "+(null==(t=r?"ds-color":"")?"":t)+'">\n\n\t',"condensed"!==o?(n+="\n\n\t\t",i.forEach(function(e,r){n+='\n\t\t\t<div class="ds-indicator '+(null==(t=0===r?"ds-selected":"")?"":t)+'" data-index="'+(null==(t=r)?"":t)+'">'+(null==(t="number"===o?r+1:"")?"":t)+"</div>\n\t\t"}),n+="\n\n\t"):n+='\n\n\t\t<div class="ds-indicator">1 / '+(null==(t=e.items)?"":t)+"</div>\n\n\t",n+="\n\n</div>\n\n"}},function(e,t,n){function o(e,t){function n(){s.forEach(function(e){e.addEventListener("click",i)})}function o(){s.forEach(function(e){e.removeEventListener("click",i)})}function i(e){e.stopPropagation();var n=e.target,o=n.classList.contains("ds-left")||n.parentElement.classList.contains("ds-left")?"left":"right";t.trigger("arrowClick",o)}var s;return s=function(){var t=r({direction:"left"}),n=r({direction:"right"});e.insertAdjacentHTML("afterbegin",t),e.insertAdjacentHTML("beforeend",n);var o=e.querySelectorAll(".ds-carousel-arrow");return Array.prototype.slice.call(o)}(),n(),{elements:{left:s.filter(function(e){return e.classList.contains("ds-left")})[0],right:s.filter(function(e){return e.classList.contains("ds-right")})[0]},addListeners:n,removeListeners:o}}var r=n(15);e.exports=o},function(e,t){e.exports=function(e){var t,n="";return n+='<div class="ds-carousel-arrow ds-'+(null==(t=e.direction)?"":t)+'">\n\t<span class="ds-icon-caret-'+(null==(t=e.direction)?"":t)+'-m-l ds-icon-size-medium"></span>\n</div>'}},function(e,t){function n(){function e(){window.requestAnimationFrame(function(){r.classList.add("ds-side-nav-mobile-drawer-expanded"),s.classList.add("ds-active")})}function t(){window.requestAnimationFrame(function(){r.classList.remove("ds-side-nav-mobile-drawer-expanded"),s.classList.remove("ds-active")})}function n(){r.classList.contains("ds-side-nav-mobile-drawer-expanded")?t():e()}function o(){var e=Math.max(document.documentElement.clientWidth,window.innerWidth||0);s&&e>780&&t()}var r=document.querySelector("body"),i=document.querySelector(".ds-side-nav"),s=document.querySelector(".ds-side-nav-mobile-spacer"),c=document.querySelector(".ds-side-nav-mobile-open");if(i&&c){var a=i.parentElement.querySelector(".ds-side-nav-mobile");a&&a.dataset&&a.dataset.noinit||(i.classList.add("ds-side-nav-mobile-drawer"),c.addEventListener("click",n),s&&s.addEventListener("click",n),window.addEventListener("resize",o),window.addEventListener("orientationchange",o))}}e.exports=n},function(e,t,n){function o(){function e(){var t=window.getComputedStyle(m).height;t!==w&&(w=t,window.requestAnimationFrame(window.w3ds.activeScrollspy.reset)),g=setTimeout(function(){e()},100),x||(x=!0,window.addEventListener("resize",function t(){q||clearTimeout(g),q=Date.now(),Date.now-q>250&&(x=!1,window.removeEventListener("resize",t),e())}))}function t(){h=y.map(function(e){return{id:e.id,el:e,title:e.dataset&&e.dataset.scrollspyTitle,scrollTop:Math.floor(i(e)+A)}}).sort(function(e,t){return e.scrollTop-t.scrollTop}),o()}function n(){h=h.map(function(e){return{id:e.id,el:e.el,title:e.title,scrollTop:Math.floor(i(e.el)+A)}}),o()}function o(){b=h.filter(function(e){return e.title})}function r(e,t){var n=Math.ceil(e);return t.reduce(function(e,t){return t.scrollTop>n?e:e?t.scrollTop-n>e.scrollTop-n?t:e:t},null)}function a(e){for(var t=!0,n=[];t;)e.classList.contains("ds-nav-section")&&n.push(e),e=e.parentElement,e.classList.contains("ds-scrollspy")&&(t=!1);return n}function l(e,t){var n=t?"prev":"next",o=E.filter(function(e){return e.type===n})[0],r=o.label,i=o.link;if(t)if(window.cancelAnimationFrame(S),e<=0){if(i.classList.contains("ds-disabled"))return;S=window.requestAnimationFrame(function(){i.classList.add("ds-disabled"),i.removeAttribute("href"),r.innerHTML=""})}else S=window.requestAnimationFrame(function(){i.classList.contains("ds-disabled")&&i.classList.remove("ds-disabled"),r.innerHTML=b[e-1].title,i.href="#"+b[e-1].id});else if(window.cancelAnimationFrame(k),e>=b.length-1){if(i.classList.contains("ds-disabled"))return;k=window.requestAnimationFrame(function(){i.classList.add("ds-disabled"),i.removeAttribute("href"),r.innerHTML=""})}else k=window.requestAnimationFrame(function(){i.classList.contains("ds-disabled")&&i.classList.remove("ds-disabled"),r.innerHTML=b[e+1].title,i.href="#"+b[e+1].id})}function d(e){var t=b.indexOf(e);l(t,!0),l(t,!1)}function u(e){var t=document.querySelector(".ds-scrollspy .ds-active");t||(t=document.querySelector(".ds-scrollspy .ds-nav-item"));var n=a(t),o=L.reduce(function(t,n){return n.href===e.id?n.el:t},null),r=a(o);window.requestAnimationFrame(function(){t.classList.remove("ds-active"),n.forEach(function(e){e.classList.remove("ds-expanded")}),o.parentElement.classList.add("ds-active"),r.forEach(function(e){e.classList.add("ds-expanded")})})}function f(e){var t=document.querySelector(".ds-scrollspy .ds-expanded"),n=document.querySelector(".ds-scrollspy .ds-active");if(e<h[0].scrollTop&&t&&n&&window.requestAnimationFrame(function(){t.classList.remove("ds-expanded"),n.classList.remove("ds-active")}),e<h[0].scrollTop){var o=E.filter(function(e){return"prev"===e.type})[0],r=E.filter(function(e){return"next"===e.type})[0];window.requestAnimationFrame(function(){o.link.classList.add("ds-disabled"),o.link.removeAttribute("href"),r.label.innerHTML=h[0].title,r.link.href="#"+h[0].id})}}function p(){var e=Math.ceil(window.pageYOffset)+5,t=r(e,h),n=r(e,b);t?(d(n),u(t)):f(e)}var v=document.querySelector(".ds-scrollspy"),y=Array.prototype.slice.call(document.querySelectorAll(".ds-scrollspy-section")),m=document.querySelector(".ds-scrollspy-el");if(!y||!m||!v)return null;var h,b,L=Array.prototype.slice.call(v.querySelectorAll("a")).map(function(e){return{el:e,href:e.href.substring(e.href.indexOf("#")+1)}}),E=Array.prototype.slice.call(v.parentElement.querySelectorAll(".ds-side-nav-mobile-control")).map(function(e){return{el:e,link:e.querySelector("a"),label:e.querySelector(".ds-side-nav-mobile-label"),type:e.dataset.control}}),A=parseInt(m.dataset.offset)||0,w=window.getComputedStyle(m).height;window.w3ds.activeScrollspy={reset:function(){t(),n(),p()}},window.w3ds.activeScrollspy.reset(),c(),window.addEventListener("scroll",s(40,function(){window.requestAnimationFrame(p)})),e();var g,x,q,S,k}var r=n(2),i=r.getScrollTopFromBody,s=r.throttle,c=n(16);e.exports=o},function(e,t,n){function o(e,t){if(e.hash){var n=document.querySelector(e.hash);e.addEventListener("click",function(e){e.preventDefault();var o;n&&(o=s(n),t?i(o,600):window.scroll(0,o))})}}var r=n(2),i=r.scrollTo,s=r.getScrollTopFromBody;e.exports=o},function(e,t){function n(e){var t=e.getAttribute("data-element"),n=Array.prototype.slice.apply(document.querySelectorAll(t));e.addEventListener("click",function(){n.forEach(function(e){e.classList.toggle("ds-hide");var t=e.parentElement,n=t.querySelector("[class*=hide-me]"),o=n.getAttribute("aria-hidden");o="true"===o?"false":"true",n.setAttribute("aria-hidden",o)})})}e.exports=n}]);