/*! For license information please see 124.14af4f64.chunk.js.LICENSE.txt */
(this["webpackJsonppopulation-arcgis"]=this["webpackJsonppopulation-arcgis"]||[]).push([[124],{1140:function(t,e,a){"use strict";a.d(e,"a",(function(){return f}));var n=a(116),i=a(117),r=a(676);function c(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=Object(r.a)(t)););return t}function o(){return o="undefined"!==typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,a){var n=c(t,e);if(n){var i=Object.getOwnPropertyDescriptor(n,e);return i.get?i.get.call(arguments.length<3?t:a):i.value}},o.apply(this,arguments)}var l=a(154),s=a(155),u=a(867);function f(t,e,a){if(u.a.isBrowser){var c=function(t){var e=function(t){Object(l.a)(a,t);var e=Object(s.a)(a);function a(t){var i;return Object(n.a)(this,a),(i=e.call(this,t)).observedEntry=[],i.callback=t,i}return Object(i.a)(a,[{key:"observe",value:function(t,e){return this.observedEntry.push({target:t,options:e}),o(Object(r.a)(a.prototype),"observe",this).call(this,t,e)}},{key:"unobserve",value:function(t){var e=this,n=this.observedEntry.filter((function(e){return e.target!==t}));this.observedEntry=[],this.callback(o(Object(r.a)(a.prototype),"takeRecords",this).call(this),this),this.disconnect(),n.forEach((function(t){return e.observe(t.target,t.options)}))}}]),a}(window.MutationObserver);return"intersection"===t?window.IntersectionObserver:"mutation"===t?e:window.ResizeObserver}(t);return new c(e,a)}}},1504:function(t,e,a){"use strict";a.r(e),a.d(e,"CalciteFlow",(function(){return g})),a.d(e,"defineCustomElement",(function(){return y}));var n=a(6),i=a(236),r=a(337),c=a(116),o=a(117),l=a(113),s=a(154),u=a(155),f=a(867),m=a(1140),d="frame",p="frame--advancing",h="frame--retreating",v=Object(f.i)(function(t){Object(s.a)(a,t);var e=Object(u.a)(a);function a(){var t;return Object(c.a)(this,a),(t=e.call(this)).__registerHost(),t.__attachShadow(),t.flowDirection=null,t.itemCount=0,t.items=[],t.itemMutationObserver=Object(m.a)("mutation",(function(){return t.updateFlowProps()})),t.getFlowDirection=function(t,e){return t&&e>1||t>1?e<t?"retreating":"advancing":null},t.updateFlowProps=function(){var e=Object(l.a)(t),a=e.el,n=e.items,i=Array.from(a.querySelectorAll("calcite-flow-item, calcite-panel")).filter((function(t){return!t.matches("calcite-flow-item calcite-flow-item, calcite-panel calcite-panel")})),r=n.length,c=i.length,o=i[c-1],s=i[c-2];if(c&&o&&i.forEach((function(t){t.showBackButton=t===o&&c>1,t.hidden=t!==o})),s&&(s.menuOpen=!1),t.items=i,r!==c){var u=t.getFlowDirection(r,c);t.itemCount=c,t.flowDirection=u}},t}return Object(o.a)(a,[{key:"back",value:function(){var t=Object(r.a)(Object(i.a)().mark((function t(){var e,a,n;return Object(i.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=this.items,a=e[e.length-1]){t.next=4;break}return t.abrupt("return");case 4:return n=a.beforeBack?a.beforeBack:function(){return Promise.resolve()},t.abrupt("return",n.call(a).then((function(){return a.remove(),a})));case 6:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"connectedCallback",value:function(){var t;null===(t=this.itemMutationObserver)||void 0===t||t.observe(this.el,{childList:!0,subtree:!0}),this.updateFlowProps()}},{key:"disconnectedCallback",value:function(){var t;null===(t=this.itemMutationObserver)||void 0===t||t.disconnect()}},{key:"handleItemBackClick",value:function(){this.back()}},{key:"render",value:function(){var t,e=this.flowDirection,a=(t={},Object(n.a)(t,d,!0),Object(n.a)(t,p,"advancing"===e),Object(n.a)(t,h,"retreating"===e),t);return Object(f.h)("div",{class:a},Object(f.h)("slot",null))}},{key:"el",get:function(){return this}}],[{key:"style",get:function(){return"@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{position:relative;display:flex;inline-size:100%;flex:1 1 auto;align-items:stretch;overflow:hidden;background-color:transparent}:host .frame{position:relative;margin:0px;display:flex;inline-size:100%;flex:1 1 auto;flex-direction:column;align-items:stretch;padding:0px}:host ::slotted(calcite-flow-item),:host ::slotted(calcite-panel){block-size:100%}:host ::slotted(.calcite-match-height:last-child){display:flex;flex:1 1 auto;overflow:hidden}:host .frame--advancing{animation:calcite-frame-advance var(--calcite-animation-timing)}:host .frame--retreating{animation:calcite-frame-retreat var(--calcite-animation-timing)}@keyframes calcite-frame-advance{0%{--tw-bg-opacity:0.5;transform:translate3d(50px, 0, 0)}100%{--tw-bg-opacity:1;transform:translate3d(0, 0, 0)}}@keyframes calcite-frame-retreat{0%{--tw-bg-opacity:0.5;transform:translate3d(-50px, 0, 0)}100%{--tw-bg-opacity:1;transform:translate3d(0, 0, 0)}}"}}]),a}(f.c),[1,"calcite-flow",{flowDirection:[32],itemCount:[32],items:[32],back:[64]},[[0,"calciteFlowItemBackClick","handleItemBackClick"],[0,"calcitePanelBackClick","handleItemBackClick"]]]);function b(){if("undefined"!==typeof customElements){["calcite-flow"].forEach((function(t){if("calcite-flow"===t)customElements.get(t)||customElements.define(t,v)}))}}b();var g=v,y=b}}]);
//# sourceMappingURL=124.14af4f64.chunk.js.map