/*! For license information please see 36.7be3407e.chunk.js.LICENSE.txt */
(this["webpackJsonppopulation-arcgis"]=this["webpackJsonppopulation-arcgis"]||[]).push([[36],{1140:function(t,e,a){"use strict";a.d(e,"a",(function(){return d}));var i=a(116),n=a(117),o=a(676);function r(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=Object(o.a)(t)););return t}function c(){return c="undefined"!==typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,a){var i=r(t,e);if(i){var n=Object.getOwnPropertyDescriptor(i,e);return n.get?n.get.call(arguments.length<3?t:a):n.value}},c.apply(this,arguments)}var l=a(154),s=a(155),u=a(867);function d(t,e,a){if(u.a.isBrowser){var r=function(t){var e=function(t){Object(l.a)(a,t);var e=Object(s.a)(a);function a(t){var n;return Object(i.a)(this,a),(n=e.call(this,t)).observedEntry=[],n.callback=t,n}return Object(n.a)(a,[{key:"observe",value:function(t,e){return this.observedEntry.push({target:t,options:e}),c(Object(o.a)(a.prototype),"observe",this).call(this,t,e)}},{key:"unobserve",value:function(t){var e=this,i=this.observedEntry.filter((function(e){return e.target!==t}));this.observedEntry=[],this.callback(c(Object(o.a)(a.prototype),"takeRecords",this).call(this),this),this.disconnect(),i.forEach((function(t){return e.observe(t.target,t.options)}))}}]),a}(window.MutationObserver);return"intersection"===t?window.IntersectionObserver:"mutation"===t?e:window.ResizeObserver}(t);return new r(e,a)}}},1162:function(t,e,a){"use strict";a.d(e,"a",(function(){return k})),a.d(e,"b",(function(){return x}));var i=a(6),n=a(236),o=a(116),r=a(117),c=a(154),l=a(155),s=a(337),u=a(867),d=a(869),m=a(1140),b="flip-rtl",f={},h={},v={s:16,m:24,l:32};function p(t){return g.apply(this,arguments)}function g(){return(g=Object(s.a)(Object(n.a)().mark((function t(e){var a,i,o,r,c,l,s,d;return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=e.icon,i=e.scale,o=v[i],r=y(a),c="F"===r.charAt(r.length-1),l=c?r.substring(0,r.length-1):r,s="".concat(l).concat(o).concat(c?"F":""),!f[s]){t.next=8;break}return t.abrupt("return",f[s]);case 8:return h[s]||(h[s]=fetch(Object(u.g)("./assets/icon/".concat(s,".json"))).then((function(t){return t.json()})).catch((function(){return console.error('"'.concat(s,'" is not a valid calcite-ui-icon name')),""}))),t.next=11,h[s];case 11:return d=t.sent,f[s]=d,t.abrupt("return",d);case 14:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(t){var e=!isNaN(Number(t.charAt(0))),a=t.split("-");return 1===a.length?e?"i".concat(t):t:a.map((function(t,a){return 0===a?e?"i".concat(t.toUpperCase()):t:t.charAt(0).toUpperCase()+t.slice(1)})).join("")}var k=Object(u.i)(function(t){Object(c.a)(a,t);var e=Object(l.a)(a);function a(){var t;return Object(o.a)(this,a),(t=e.call(this)).__registerHost(),t.__attachShadow(),t.icon=null,t.flipRtl=!1,t.scale="m",t.visible=!1,t}return Object(r.a)(a,[{key:"connectedCallback",value:function(){var t=this;this.waitUntilVisible((function(){t.visible=!0,t.loadIconPathData()}))}},{key:"disconnectedCallback",value:function(){var t;null===(t=this.intersectionObserver)||void 0===t||t.disconnect(),this.intersectionObserver=null}},{key:"componentWillLoad",value:function(){var t=Object(s.a)(Object(n.a)().mark((function t(){return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.loadIconPathData();case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t,e=this.el,a=this.flipRtl,n=this.pathData,o=this.scale,r=this.textLabel,c=Object(d.c)(e),l=v[o],s=!!r,m=[].concat(n||"");return Object(u.h)(u.d,{"aria-hidden":Object(d.j)(!s),"aria-label":s?r:null,role:s?"img":null},Object(u.h)("svg",{class:(t={},Object(i.a)(t,b,"rtl"===c&&a),Object(i.a)(t,"svg",!0),t),fill:"currentColor",height:"100%",viewBox:"0 0 ".concat(l," ").concat(l),width:"100%",xmlns:"http://www.w3.org/2000/svg"},m.map((function(t){return"string"===typeof t?Object(u.h)("path",{d:t}):Object(u.h)("path",{d:t.d,opacity:"opacity"in t?t.opacity:1})}))))}},{key:"loadIconPathData",value:function(){var t=Object(s.a)(Object(n.a)().mark((function t(){var e,a,i;return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=this.icon,a=this.scale,i=this.visible,u.a.isBrowser&&e&&i){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,p({icon:e,scale:a});case 5:this.pathData=t.sent;case 6:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"waitUntilVisible",value:function(t){var e=this;this.intersectionObserver=Object(m.a)("intersection",(function(a){a.forEach((function(a){a.isIntersecting&&(e.intersectionObserver.disconnect(),e.intersectionObserver=null,t())}))}),{rootMargin:"50px"}),this.intersectionObserver?this.intersectionObserver.observe(this.el):t()}},{key:"el",get:function(){return this}}],[{key:"assetsDirs",get:function(){return["assets"]}},{key:"watchers",get:function(){return{icon:["loadIconPathData"],scale:["loadIconPathData"]}}},{key:"style",get:function(){return"@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:inline-flex;color:var(--calcite-ui-icon-color)}:host([scale=s]){block-size:1rem;inline-size:1rem;min-inline-size:1rem;min-block-size:1rem}:host([scale=m]){block-size:1.5rem;inline-size:1.5rem;min-inline-size:1.5rem;min-block-size:1.5rem}:host([scale=l]){block-size:2rem;inline-size:2rem;min-inline-size:2rem;min-block-size:2rem}.flip-rtl{transform:scaleX(-1)}.svg{display:block}"}}]),a}(u.c),[1,"calcite-icon",{icon:[513],flipRtl:[516,"flip-rtl"],scale:[513],textLabel:[1,"text-label"],pathData:[32],visible:[32]}]);function x(){if("undefined"!==typeof customElements){["calcite-icon"].forEach((function(t){if("calcite-icon"===t)customElements.get(t)||customElements.define(t,k)}))}}x()},1200:function(t,e,a){"use strict";function i(){}function n(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(t.disabled)return t.el.setAttribute("tabindex","-1"),t.el.setAttribute("aria-disabled","true"),t.el.contains(document.activeElement)&&document.activeElement.blur(),void(t.el.click=i);t.el.click=HTMLElement.prototype.click,"function"===typeof e?t.el.setAttribute("tabindex",e.call(t)?"0":"-1"):!0===e?t.el.setAttribute("tabindex","0"):!1===e&&t.el.removeAttribute("tabindex"),t.el.removeAttribute("aria-disabled")}a.d(e,"a",(function(){return n}))},1224:function(t,e,a){"use strict";a.d(e,"a",(function(){return d}));var i=a(15),n=a(116),o=a(117),r=a(154),c=a(155),l=a(867),s=a(921),u=Object(l.i)(function(t){Object(r.a)(a,t);var e=Object(c.a)(a);function a(){var t;return Object(n.a)(this,a),(t=e.call(this)).__registerHost(),t.__attachShadow(),t.active=!1,t.inline=!1,t.scale="m",t.value=0,t.text="",t.noPadding=!1,t}return Object(o.a)(a,[{key:"render",value:function(){var t=this.el,e=this.inline,a=this.label,n=this.scale,o=this.text,r=this.type,c=this.value,u=t.id||Object(s.a)(),d=e?this.getInlineSize(n):this.getSize(n),m=.45*d,b="0 0 ".concat(d," ").concat(d),f="determinate"===r,h=2*m*Math.PI,v=c/100*h,p=h-v,g=Math.floor(c),y={"aria-valuenow":g,"aria-valuemin":0,"aria-valuemax":100,complete:100===g},k={r:m,cx:d/2,cy:d/2},x={"stroke-dasharray":"".concat(v," ").concat(p)};return Object(l.h)(l.d,Object(i.a)({"aria-label":a,id:u,role:"progressbar"},f?y:{}),Object(l.h)("div",{class:"loader__svgs"},Object(l.h)("svg",{class:"loader__svg loader__svg--1",viewBox:b},Object(l.h)("circle",Object(i.a)({},k))),Object(l.h)("svg",{class:"loader__svg loader__svg--2",viewBox:b},Object(l.h)("circle",Object(i.a)({},k))),Object(l.h)("svg",Object(i.a)({class:"loader__svg loader__svg--3",viewBox:b},f?{style:x}:{}),Object(l.h)("circle",Object(i.a)({},k)))),o&&Object(l.h)("div",{class:"loader__text"},o),f&&Object(l.h)("div",{class:"loader__percentage"},c))}},{key:"getSize",value:function(t){return{s:32,m:56,l:80}[t]}},{key:"getInlineSize",value:function(t){return{s:12,m:16,l:20}[t]}},{key:"el",get:function(){return this}}],[{key:"style",get:function(){return'@charset "UTF-8";@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{position:relative;margin-inline:auto;display:none;align-items:center;justify-content:center;opacity:1;min-block-size:var(--calcite-loader-size);font-size:var(--calcite-loader-font-size);stroke:var(--calcite-ui-brand);stroke-width:3;fill:none;transform:scale(1, 1);animation:loader-color-shift calc(var(--calcite-internal-animation-timing-slow) * 2) alternate-reverse infinite linear;padding-block:var(--calcite-loader-padding, 4rem)}:host([scale=s]){--calcite-loader-font-size:var(--calcite-font-size--2);--calcite-loader-size:2rem;--calcite-loader-size-inline:0.75rem}:host([scale=m]){--calcite-loader-font-size:var(--calcite-font-size-0);--calcite-loader-size:4rem;--calcite-loader-size-inline:1rem}:host([scale=l]){--calcite-loader-font-size:var(--calcite-font-size-2);--calcite-loader-size:6rem;--calcite-loader-size-inline:1.5rem}:host([no-padding]){padding-block:0px}:host{display:none}:host([active]){display:flex}.loader__text{display:block;text-align:center;font-size:var(--calcite-font-size--2);line-height:1rem;color:var(--calcite-ui-text-1);margin-block-start:calc(var(--calcite-loader-size) + 1.5rem)}.loader__percentage{position:absolute;display:block;text-align:center;color:var(--calcite-ui-text-1);font-size:var(--calcite-loader-font-size);inline-size:var(--calcite-loader-size);inset-inline-start:50%;margin-inline-start:calc(var(--calcite-loader-size) / 2 * -1);line-height:0.25;transform:scale(1, 1)}.loader__svgs{position:absolute;overflow:visible;opacity:1;inline-size:var(--calcite-loader-size);block-size:var(--calcite-loader-size);inset-inline-start:50%;margin-inline-start:calc(var(--calcite-loader-size) / 2 * -1);transform:scale(1, 1)}.loader__svg{position:absolute;inset-block-start:0px;transform-origin:center;overflow:visible;inset-inline-start:0;inline-size:var(--calcite-loader-size);block-size:var(--calcite-loader-size);animation-iteration-count:infinite;animation-timing-function:linear;animation-name:loader-clockwise}@supports (display: grid){.loader__svg--1{animation-name:loader-offset-1}.loader__svg--2{animation-name:loader-offset-2}.loader__svg--3{animation-name:loader-offset-3}}:host([type=determinate]){animation:none;stroke:var(--calcite-ui-border-3)}:host([type=determinate]) .loader__svg--3{animation:none;stroke:var(--calcite-ui-brand);stroke-dasharray:150.79632;transform:rotate(-90deg);transition:all var(--calcite-internal-animation-timing-fast) linear}:host([inline]){position:relative;margin:0px;animation:none;stroke:currentColor;stroke-width:2;padding-block:0px;block-size:var(--calcite-loader-size-inline);min-block-size:var(--calcite-loader-size-inline);inline-size:var(--calcite-loader-size-inline);margin-inline-end:calc(var(--calcite-loader-size-inline) * 0.5);vertical-align:calc(var(--calcite-loader-size-inline) * -1 * 0.2)}:host([active][inline]){display:inline-block}:host([inline]) .loader__svgs{inset-block-start:0px;margin:0px;inset-inline-start:0;inline-size:var(--calcite-loader-size-inline);block-size:var(--calcite-loader-size-inline)}:host([inline]) .loader__svg{inline-size:var(--calcite-loader-size-inline);block-size:var(--calcite-loader-size-inline)}:host([complete]){opacity:0;transform:scale(0.75, 0.75);transform-origin:center;transition:opacity var(--calcite-internal-animation-timing-medium) linear 1000ms, transform var(--calcite-internal-animation-timing-medium) linear 1000ms}:host([complete]) .loader__svgs{opacity:0;transform:scale(0.75, 0.75);transform-origin:center;transition:opacity calc(180ms * var(--calcite-internal-duration-factor)) linear 800ms, transform calc(180ms * var(--calcite-internal-duration-factor)) linear 800ms}:host([complete]) .loader__percentage{color:var(--calcite-ui-brand);transform:scale(1.05, 1.05);transform-origin:center;transition:color var(--calcite-internal-animation-timing-medium) linear, transform var(--calcite-internal-animation-timing-medium) linear}.loader__svg--1{stroke-dasharray:27.9252444444% 139.6262222222%;animation-duration:calc(var(--calcite-internal-animation-timing-slow) * 2.4)}@keyframes loader-offset-1{0%{stroke-dasharray:27.9252444444% 251.3272%;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222% 139.6262222222%;stroke-dashoffset:-83.7757333333%}100%{stroke-dasharray:27.9252444444% 251.3272%;stroke-dashoffset:-279.2524444444%}}.loader__svg--2{stroke-dasharray:55.8504888889% 139.6262222222%;animation-duration:calc(var(--calcite-internal-animation-timing-slow) * 3.2)}@keyframes loader-offset-2{0%{stroke-dasharray:55.8504888889% 223.4019555556%;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222% 139.6262222222%;stroke-dashoffset:-97.7383555556%}100%{stroke-dasharray:55.8504888889% 223.4019555556%;stroke-dashoffset:-279.2524444444%}}.loader__svg--3{stroke-dasharray:13.9626222222% 139.6262222222%;animation-duration:calc(var(--calcite-internal-animation-timing-slow) * 3.867)}@keyframes loader-offset-3{0%{stroke-dasharray:13.9626222222% 265.2898222222%;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222% 139.6262222222%;stroke-dashoffset:-76.7944222222%}100%{stroke-dasharray:13.9626222222% 265.2898222222%;stroke-dashoffset:-279.2524444444%}}@keyframes loader-color-shift{0%{stroke:var(--calcite-ui-brand)}33%{stroke:var(--calcite-ui-brand-press)}66%{stroke:var(--calcite-ui-brand-hover)}100%{stroke:var(--calcite-ui-brand)}}@keyframes loader-clockwise{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}'}}]),a}(l.c),[1,"calcite-loader",{active:[516],inline:[516],label:[1],scale:[513],type:[513],value:[2],text:[1],noPadding:[516,"no-padding"]}]);function d(){if("undefined"!==typeof customElements){["calcite-loader"].forEach((function(t){if("calcite-loader"===t)customElements.get(t)||customElements.define(t,u)}))}}d()},1257:function(t,e,a){"use strict";a.d(e,"a",(function(){return E})),a.d(e,"b",(function(){return D}));var i=a(6),n=a(236),o=a(337),r=a(116),c=a(117),l=a(113),s=a(154),u=a(155),d=a(867),m=a(1140),b=a(1200),f=a(869),h=a(1162),v=a(1224),p="button",g="button--text-visible",y="button--compact",k="icon-container",x="slot-container",O="slot-container--hidden",j="text-container",z="text-container--visible",_="Loading",w="tooltip",E=Object(d.i)(function(t){Object(s.a)(a,t);var e=Object(u.a)(a);function a(){var t;return Object(r.a)(this,a),(t=e.call(this)).__registerHost(),t.__attachShadow(),t.calciteActionClick=Object(d.e)(Object(l.a)(t),"calciteActionClick",6),t.active=!1,t.appearance="solid",t.compact=!1,t.disabled=!1,t.indicator=!1,t.intlLoading=_,t.loading=!1,t.scale="m",t.textEnabled=!1,t.mutationObserver=Object(m.a)("mutation",(function(){return Object(d.f)(Object(l.a)(t))})),t.handleTooltipSlotChange=function(e){var a=e.target.assignedElements({flatten:!0}).filter((function(t){return null===t||void 0===t?void 0:t.matches("calcite-tooltip")}))[0];a&&(a.referenceElement=t.buttonEl)},t.calciteActionClickHandler=function(){t.disabled||t.calciteActionClick.emit()},t}return Object(c.a)(a,[{key:"connectedCallback",value:function(){var t;null===(t=this.mutationObserver)||void 0===t||t.observe(this.el,{childList:!0,subtree:!0})}},{key:"disconnectedCallback",value:function(){var t;null===(t=this.mutationObserver)||void 0===t||t.disconnect()}},{key:"componentDidRender",value:function(){Object(b.a)(this)}},{key:"setFocus",value:function(){var t=Object(o.a)(Object(n.a)().mark((function t(){var e;return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:null===(e=this.buttonEl)||void 0===e||e.focus();case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"renderTextContainer",value:function(){var t,e=this.text,a=this.textEnabled,n=(t={},Object(i.a)(t,j,!0),Object(i.a)(t,z,a),t);return e?Object(d.h)("div",{class:n,key:"text-container"},e):null}},{key:"renderIconContainer",value:function(){var t,e,a=this.loading,n=this.icon,o=this.scale,r=this.el,c=this.intlLoading,l="l"===o?"m":"s",s="l"===o?"l":"m",u=a?Object(d.h)("calcite-loader",{active:!0,inline:!0,label:c,scale:s}):null,m=n?Object(d.h)("calcite-icon",{icon:n,scale:l}):null,b=u||m,f=b||(null===(e=r.children)||void 0===e?void 0:e.length),h=Object(d.h)("div",{class:(t={},Object(i.a)(t,x,!0),Object(i.a)(t,O,a),t)},Object(d.h)("slot",null));return f?Object(d.h)("div",{"aria-hidden":"true",class:k,key:"icon-container"},b,h):null}},{key:"render",value:function(){var t,e=this,a=this.compact,n=this.disabled,o=this.loading,r=this.textEnabled,c=this.label,l=this.text,s=c||l,u=(t={},Object(i.a)(t,p,!0),Object(i.a)(t,g,r),Object(i.a)(t,y,a),t);return Object(d.h)(d.d,{onClick:this.calciteActionClickHandler},Object(d.h)("button",{"aria-busy":Object(f.j)(o),"aria-disabled":Object(f.j)(n),"aria-label":s,class:u,disabled:n,ref:function(t){return e.buttonEl=t}},this.renderIconContainer(),this.renderTextContainer()),Object(d.h)("slot",{name:w,onSlotchange:this.handleTooltipSlotChange}))}},{key:"el",get:function(){return this}}],[{key:"style",get:function(){return'@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{display:flex;background-color:transparent;--calcite-action-indicator-color:var(--calcite-ui-brand)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.button{position:relative;margin:0px;display:flex;inline-size:auto;cursor:pointer;align-items:center;justify-content:flex-start;border-style:none;background-color:var(--calcite-ui-foreground-1);fill:var(--calcite-ui-text-3);font-family:var(--calcite-sans-family);font-size:var(--calcite-font-size--2);line-height:1rem;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-3);outline-color:transparent;text-align:unset;flex:1 0 auto}.button:hover{background-color:var(--calcite-ui-foreground-2);fill:var(--calcite-ui-text-1);color:var(--calcite-ui-text-1)}.button:focus{background-color:var(--calcite-ui-foreground-2);fill:var(--calcite-ui-text-1);color:var(--calcite-ui-text-1);outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.button:active{background-color:var(--calcite-ui-foreground-3)}.button .icon-container{pointer-events:none;margin:0px;display:flex;align-items:center;justify-content:center;min-inline-size:1rem;min-block-size:1rem}.button .text-container{margin:0px;inline-size:0px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;line-height:1.5rem;opacity:0;transition-property:opacity;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-property:margin;transition-property:inline-size}.button .text-container--visible{inline-size:auto;flex:1 1 auto;opacity:1}:host([scale=s]) .button{padding-inline:0.5rem;padding-block:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem;font-weight:var(--calcite-font-weight-normal)}:host([scale=s]) .button--text-visible .icon-container{margin-inline-end:0.5rem}:host([scale=m]) .button{padding-inline:1rem;padding-block:0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem;font-weight:var(--calcite-font-weight-normal)}:host([scale=m]) .button--text-visible .icon-container{margin-inline-end:0.75rem}:host([scale=l]) .button{padding:1.25rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;font-weight:var(--calcite-font-weight-normal)}:host([scale=l]) .button--text-visible .icon-container{margin-inline-end:1rem}:host([alignment=center]) .button{justify-content:center}:host([alignment=end]) .button{justify-content:flex-end}:host([alignment=center]) .button .text-container--visible,:host([alignment=end]) .button .text-container--visible{flex:0 1 auto}:host([scale=s][compact]) .button,:host([scale=m][compact]) .button,:host([scale=l][compact]) .button{padding-inline:0px}.slot-container{display:flex}.slot-container--hidden{display:none}.button--text-visible{inline-size:100%}:host([active]) .button,:host([active]) .button:hover,:host([active]) .button:focus,:host([active][loading]) .button{background-color:var(--calcite-ui-foreground-3);fill:var(--calcite-ui-text-1);color:var(--calcite-ui-text-1)}:host([active]) .button:active{background-color:var(--calcite-ui-foreground-1)}:host([appearance=clear]) .button,:host([appearance=transparent]) .button{background-color:transparent;transition-property:box-shadow;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}:host([appearance=clear]) .button:hover,:host([appearance=clear]) .button:focus,:host([appearance=transparent]) .button:hover,:host([appearance=transparent]) .button:focus{background-color:transparent;box-shadow:0 0 0 2px var(--calcite-ui-border-1) inset}:host([active][appearance=clear]) .button,:host([active][appearance=clear]) .button:hover,:host([active][appearance=clear]) .button:focus,:host([active][appearance=transparent]) .button,:host([active][appearance=transparent]) .button:hover,:host([active][appearance=transparent]) .button:focus{background-color:var(--calcite-ui-foreground-3);fill:var(--calcite-ui-text-1);color:var(--calcite-ui-text-1)}:host([appearance=clear][loading]) .button,:host([appearance=clear][disabled]) .button,:host([appearance=transparent][loading]) .button,:host([appearance=transparent][disabled]) .button{background-color:transparent}:host([loading]) .button,:host([loading]) .button:hover,:host([loading]) .button:focus{background-color:var(--calcite-ui-foreground-1)}:host([loading]) .button .text-container,:host([loading]) .button:hover .text-container,:host([loading]) .button:focus .text-container{opacity:var(--calcite-ui-opacity-disabled)}:host([loading]) calcite-loader[inline]{color:var(--calcite-ui-text-3);margin-inline-end:0px}:host([disabled]) .button,:host([disabled]) .button:hover,:host([disabled]) .button:focus{cursor:default;background-color:var(--calcite-ui-foreground-1);opacity:var(--calcite-ui-opacity-disabled)}:host([disabled][active]) .button,:host([disabled][active]) .button:hover,:host([disabled][active]) .button:focus{background-color:var(--calcite-ui-foreground-3);opacity:var(--calcite-ui-opacity-disabled)}:host([indicator]) .button::after{content:"";position:absolute;block-size:0.5rem;inline-size:0.5rem;border-radius:9999px;border-width:2px;background-color:var(--calcite-action-indicator-color);border-color:var(--calcite-ui-foreground-1);inset-block-end:0.75rem;inset-inline-end:0.75rem}:host([indicator]) .button--text-visible::after{inset-block-end:auto}:host([indicator]) .button--text-visible .text-container--visible{margin-inline-end:1rem}:host([indicator]) .button:hover::after,:host([indicator]) .button:focus::after{border-color:var(--calcite-ui-foreground-1)}:host([indicator][scale=s]) .button::after{inset-block-end:0.25rem;inset-inline-end:0.25rem}:host([indicator][scale=s]) .button--text-visible::after{inset-block-end:auto;inset-inline-end:0.5rem}:host([indicator][active]) .button::after{border-color:var(--calcite-ui-foreground-3)}'}}]),a}(d.c),[1,"calcite-action",{active:[516],alignment:[513],appearance:[513],compact:[516],disabled:[516],icon:[1],indicator:[516],intlLoading:[1,"intl-loading"],label:[1],loading:[516],scale:[513],text:[1],textEnabled:[516,"text-enabled"],setFocus:[64]}]);function D(){if("undefined"!==typeof customElements){["calcite-action","calcite-icon","calcite-loader"].forEach((function(t){switch(t){case"calcite-action":customElements.get(t)||customElements.define(t,E);break;case"calcite-icon":customElements.get(t)||Object(h.b)();break;case"calcite-loader":customElements.get(t)||Object(v.a)()}}))}}D()}}]);
//# sourceMappingURL=36.7be3407e.chunk.js.map