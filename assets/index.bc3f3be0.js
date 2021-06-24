var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,n=Object.getOwnPropertySymbols,o=Object.prototype.propertyIsEnumerable,s=(t,n,o)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,r=(e,r)=>{for(var a in r||(r={}))t.call(r,a)&&s(e,a,r[a]);if(n)for(var a of n(r))o.call(r,a)&&s(e,a,r[a]);return e};import{d as a,t as i,c as l,i as c,a as u,b as d,r as p,e as f,p as h,f as g,n as m,o as v,g as y,h as b,j as _,w,k as z,l as O,m as x,v as $,T as j,q as S,s as B,u as M,x as T,y as E,z as A,A as R,B as L}from"./vendor.0bd17459.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(n){const o=new URL(e,location),s=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((n,r)=>{const a=new URL(e,o);if(self[t].moduleMap[a])return n(self[t].moduleMap[a]);const i=new Blob([`import * as m from '${a}';`,`${t}.moduleMap['${a}']=m;`],{type:"text/javascript"}),l=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(i),onerror(){r(new Error(`Failed to import: ${e}`)),s(l)},onload(){n(self[t].moduleMap[a]),s(l)}});document.head.appendChild(l)})),self[t].moduleMap={}}}("/assets/");
/*!
  * azui v0.0.1
  * (c) 2021 Aaron
  * @license MIT
  */
const C={string:String,number:Number,boolean:Boolean,symbol:Symbol,date:Date,array:Array,object:Object,function:Function,any:null};class k{constructor(e,t){this.typeName=e,this.type=Array.isArray(e)?e.map((e=>C[e])):C[e],this.validator=t}def(e){return this.default=e,this}get isRequired(){return this.required=!0,this}}const W={any:()=>new k("any"),string:()=>new k("string"),oneOfString:e=>new k("string",(t=>-1!==e.indexOf(t))),number:()=>new k("number"),integer:()=>new k("number",(e=>"number"==typeof e&&isFinite(e)&&Math.floor(e)===e)),bool:()=>new k("boolean").isRequired,symbol:()=>new k("symbol"),object:()=>new k("object"),array:()=>new k("array"),func:()=>new k("function"),hexColor:()=>new k("string",(e=>"string"==typeof e&&/^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(e))),oneOfType(e){const t=e.map((e=>e.typeName)),n=e.map((e=>e.validator)).filter(Boolean);return new k(t,n.length>0?e=>{for(const t of n)if(!t(e))return!1;return!0}:void 0)}},H=a({name:"AzButton",props:{size:W.oneOfString(["big","medium","small","mini"]),type:W.oneOfString(["primary","success","danger","warning","text"]),nativeType:W.oneOfString(["button","submit","reset"]).def("button"),loading:W.oneOfType([W.bool()]),disabled:W.oneOfType([W.bool()]),block:W.oneOfType([W.bool()]).def(!1),round:W.oneOfType([W.bool()]).def(!1),circle:W.oneOfType([W.bool()]).def(!1)},emits:["click"],setup(e,{emit:t,slots:n}){const{size:o,type:s,loading:r,disabled:a,block:u,round:d,circle:p}=i(e),f=(({size:e,type:t,loading:n,disabled:o,block:s,round:r,circle:a,config:i})=>{const c=l((()=>(null==e?void 0:e.value)||(null==i?void 0:i.size)||"")),u=l((()=>(null==t?void 0:t.value)||(null==i?void 0:i.type)||""));return l((()=>{const e=null==c?void 0:c.value,t=null==u?void 0:u.value;return{[`az-button--${e}`]:Boolean(e),[`az-button--${t}`]:Boolean(t),"is-loading":n.value,"is-disabled":o.value,"is--block":s.value,"is--round":r.value,"is--circle":a.value}}))})({size:o,type:s,loading:r,disabled:a,block:u,round:d,circle:p,config:c("#AzButtonConfig",{})}),{isShowContainer:h}=(({slots:e,loading:t,circle:n})=>({isShowContainer:l((()=>!(n.value&&t.value||!e.default)))}))({slots:n,loading:r,circle:p}),{handleClick:g}=(({emit:e,loading:t,disabled:n})=>({handleClick:o=>{n.value||t.value||e("click",o)}}))({emit:t,loading:r,disabled:a});return{classes:f,handleClick:g,isShowContainer:h}}});H.install=e=>{e.component(H.name,H)};const D={key:0,class:"az-icon-loading"},q={key:1};H.render=function(e,t,n,o,s,r){return z(),u("button",{class:["az-button",e.classes],onClick:t[1]||(t[1]=(...t)=>e.handleClick(...t)),type:e.nativeType},[e.loading?(z(),u("i",D)):d("",!0),e.isShowContainer?(z(),u("span",q,[p(e.$slots,"default")])):d("",!0)],10,["type"])};const I=a({name:"AzButtonGroup",props:{size:W.oneOfString(["big","medium","small","mini"]),type:W.oneOfString(["primary","success","danger","warning","text"])},setup(e){const t=f({size:e.size,type:e.type});h("#AzButtonConfig",t)}});I.install=e=>{e.component(I.name,I)};const F={class:"az-button-group"};I.render=function(e,t,n,o,s,r){return z(),u("div",F,[p(e.$slots,"default")])};const N=e=>Object.prototype.toString.call(e).slice(8,-1),V=a({name:"AzRow",props:{gutter:W.oneOfType([W.number(),W.array()]).def(0),justify:W.oneOfString(["start","end","center","space-between","space-around"]).def("start"),align:W.oneOfString(["top","middle","bottom"]).def("top"),tag:W.oneOfType([W.string()]).def("div"),wrap:W.oneOfType([W.bool()]).def(!0)},setup(e){const{gutter:t,justify:n,align:o,wrap:s}=i(e),r=(c=t,l((()=>{let e=c.value;if("Array"===N(e)){if(!e.length)return{margin:"0px"};if(1===e.length){let t=e[0]/2;return{marginLeft:`-${t}px`,marginRight:`-${t}px`,marginTop:`-${t}px`,marginBottom:`-${t}px`}}if(2===e.length){let[t,n]=e;return{marginLeft:`-${n/2}px`,marginRight:`-${n/2}px`,marginTop:`-${t/2}px`,marginBottom:`-${t/2}px`}}if(3===e.length){let[t,n,o]=e;return{marginLeft:`-${n/2}px`,marginRight:`-${n/2}px`,marginTop:`-${t}px`,marginBottom:`-${o}px`}}if(e.length>=4){let[t,n,o,s]=e;return{marginLeft:`-${s}px`,marginRight:`-${n}px`,marginTop:`-${t}px`,marginBottom:`-${o}px`}}}return isNaN(e)&&(e=0),"Number"===N(e)?(e/=2,{marginLeft:`-${e}px`,marginRight:`-${e}px`}):{}}))),a=(({justify:e,align:t,wrap:n})=>l((()=>{const o=null==t?void 0:t.value,s=null==e?void 0:e.value;return{[`az-row--${o}`]:Boolean(o),[`az-row--${s}`]:Boolean(s),"az-row--no-wrap":null==n?void 0:n.value}})))({justify:n,align:o,wrap:s});var c;return h("#AzRowConfig",f({gutter:e.gutter})),{gutter:t,styles:r,classes:a}}});V.install=e=>{e.component(V.name,V)},V.render=function(e,t,n,o,s,r){return z(),u(g(e.tag),{class:["az-row",e.classes],style:e.styles},{default:w((()=>[p(e.$slots,"default")])),_:3},8,["style","class"])};const P=["xl","lg","md","sm","xs"],G=a({name:"AzCol",props:{span:W.oneOfType([W.number()]),order:W.oneOfType([W.number()]),offset:W.oneOfType([W.number()]),push:W.oneOfType([W.number()]),pull:W.oneOfType([W.number()]),tag:W.oneOfType([W.string()]).def("div"),xs:W.oneOfType([W.number(),W.object()]),sm:W.oneOfType([W.number(),W.object()]),md:W.oneOfType([W.number(),W.object()]),lg:W.oneOfType([W.number(),W.object()]),xl:W.oneOfType([W.number(),W.object()]),flex:W.oneOfType([W.string(),W.number()])},setup(e){const{span:t}=i(e);return{styles:(({config:e})=>l((()=>{const{gutter:t}=e;let n=t;if("Array"===N(n)){if(!n.length)return{padding:"0px"};if(1===n.length){let e=n[0]/2;return{paddingLeft:`${e}px`,paddingRight:`${e}px`,paddingTop:`${e}px`,paddingBottom:`${e}px`}}if(2===n.length){let[e,t]=n;return{paddingLeft:t/2+"px",paddingRight:t/2+"px",paddingTop:e/2+"px",paddingBottom:e/2+"px"}}if(3===n.length){let[e,t,o]=n;return{paddingLeft:t/2+"px",paddingRight:t/2+"px",paddingTop:`${e}px`,paddingBottom:`${o}px`}}if(n.length>=4){let[e,t,o,s]=n;return{paddingLeft:`${s}px`,paddingRight:`${t}px`,paddingTop:`${e}px`,paddingBottom:`${o}px`}}}return isNaN(n)&&(n=0),"Number"===N(n)?(n/=2,{paddingLeft:`${n}px`,paddingRight:`${n}px`}):{}})))({config:c("#AzRowConfig",{})}),classes:(({span:e,props:t})=>{const n=l((()=>null==e?void 0:e.value));return l((()=>{let e=[];return P.reverse().forEach((n=>{let o={};const s=t[n];void 0!==s&&(o="number"==typeof s?{span:s}:s||{},e.push({[`az-col-${n}-${o.span}`]:void 0!==o.span,[`az-col-${n}-order-${o.order}`]:o.order||0===o.order,[`az-col-${n}-offset-${o.offset}`]:o.offset||0===o.offset,[`az-col-${n}-push-${o.push}`]:o.push||0===o.push,[`az-col-${n}-pull-${o.pull}`]:o.pull||0===o.pull}))})),[{[`az-col-${null==n?void 0:n.value}`]:null==n?void 0:n.value,[`az-col-order-${t.order}`]:t.order,[`az-col-offset-${t.offset}`]:t.offset,[`az-col-push-${t.push}`]:t.push,[`az-col-pull-${t.pull}`]:t.pull},...e]}))})({span:t,props:e})}}});G.install=e=>{e.component(G.name,G)};const U=O(),X=U((function(e,t,n,o,s,r){return z(),u(g(e.tag),{class:["az-col",e.classes],style:e.styles},{default:U((()=>[p(e.$slots,"default")])),_:3},8,["style","class"])}));G.render=X,G.__scopeId="data-v-5ef5bdbc";const Y=Symbol("Layout"),J=a({name:"AzContainer",props:{inBody:W.oneOfType([W.bool()]).def(!1),height:W.string(),direction:W.oneOfString(["horizontal","vertical"])},setup(e){const t=f({hasAside:!1}),{inBody:n,height:o,direction:s}=i(e),r=(({inBody:e,height:t,nextTick:n})=>(l((()=>{e&&n((()=>{document.body.style.minHeight=document.documentElement.style.minHeight="100vh"})),!e&&n((()=>{document.body.style.minHeight=document.documentElement.style.minHeight=""}))})),l((()=>({height:null==t?void 0:t.value})))))({inBody:n,height:o,nextTick:m}),a=(({direction:e,data:t})=>{const n=l((()=>null==e?void 0:e.value));return l((()=>({"is-horizontal":"horizontal"===(null==n?void 0:n.value)||t.hasAside})))})({direction:s,data:t});return h(Y,{setAside:()=>{t.hasAside=!0}}),{styles:r,classes:a}}});J.install=e=>{e.component(J.name,J)};const K=O()((function(e,t,n,o,s,r){return z(),u("div",{class:["az-container",e.classes],style:e.styles},[p(e.$slots,"default")],6)}));J.render=K,J.__scopeId="data-v-5e6a7e75";const Q=a({name:"AzAside",props:{width:W.string().def("250px")},setup(){var e;null==(e=c(Y))||e.setAside()}});Q.install=e=>{e.component(Q.name,Q)},Q.render=function(e,t,n,o,s,r){return z(),u("div",{class:"az-aside",style:{width:e.width}},[p(e.$slots,"default")],4)};const Z=a({name:"AzFooter",props:{height:W.string().def("60px")}});Z.install=e=>{e.component(Z.name,Z)},Z.render=function(e,t,n,o,s,r){return z(),u("div",{class:"az-footer",style:{height:e.height}},[p(e.$slots,"default")],4)};const ee=a({name:"AzHeader",props:{height:W.string().def("60px")}});ee.install=e=>{e.component(ee.name,ee)},ee.render=function(e,t,n,o,s,r){return z(),u("div",{class:"az-header",style:{height:e.height}},[p(e.$slots,"default")],4)};const te=a({name:"AzMain",setup:()=>({})});te.install=e=>{e.component(te.name,te)};const ne={class:"az-main"};te.render=function(e,t,n,o,s,r){return z(),u("div",ne,[p(e.$slots,"default")])};const oe=(e,t,n,o=!1)=>{e&&t&&n&&e.addEventListener(t,n,o)},se=(e,t,n,o=!1)=>{e&&t&&n&&e.removeEventListener(t,n,o)},re={vertical:{client:"clientY",offset:"offsetTop",content:"offsetHeight",scroll:"scrollTop",direction:"top",area:"clientHeight"},cross:{client:"clientX",offset:"offsetLeft",content:"offsetWidth",scroll:"scrollLeft",direction:"left",area:"clientWidth"}},ae="undefined"==typeof window;var ie=function(){if("undefined"!=typeof Map)return Map;function e(e,t){var n=-1;return e.some((function(e,o){return e[0]===t&&(n=o,!0)})),n}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(t){var n=e(this.__entries__,t),o=this.__entries__[n];return o&&o[1]},t.prototype.set=function(t,n){var o=e(this.__entries__,t);~o?this.__entries__[o][1]=n:this.__entries__.push([t,n])},t.prototype.delete=function(t){var n=this.__entries__,o=e(n,t);~o&&n.splice(o,1)},t.prototype.has=function(t){return!!~e(this.__entries__,t)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(e,t){void 0===t&&(t=null);for(var n=0,o=this.__entries__;n<o.length;n++){var s=o[n];e.call(t,s[1],s[0])}},t}()}(),le="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,ce="undefined"!=typeof global&&global.Math===Math?global:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),ue="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(ce):function(e){return setTimeout((function(){return e(Date.now())}),1e3/60)},de=["top","right","bottom","left","width","height","size","weight"],pe="undefined"!=typeof MutationObserver,fe=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(e,t){var n=!1,o=!1,s=0;function r(){n&&(n=!1,e()),o&&i()}function a(){ue(r)}function i(){var e=Date.now();if(n){if(e-s<2)return;o=!0}else n=!0,o=!1,setTimeout(a,20);s=e}return i}(this.refresh.bind(this))}return e.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},e.prototype.removeObserver=function(e){var t=this.observers_,n=t.indexOf(e);~n&&t.splice(n,1),!t.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},e.prototype.updateObservers_=function(){var e=this.observers_.filter((function(e){return e.gatherActive(),e.hasActive()}));return e.forEach((function(e){return e.broadcastActive()})),e.length>0},e.prototype.connect_=function(){le&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),pe?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){le&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(e){var t=e.propertyName,n=void 0===t?"":t;de.some((function(e){return!!~n.indexOf(e)}))&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),he=function(e,t){for(var n=0,o=Object.keys(t);n<o.length;n++){var s=o[n];Object.defineProperty(e,s,{value:t[s],enumerable:!1,writable:!1,configurable:!0})}return e},ge=function(e){return e&&e.ownerDocument&&e.ownerDocument.defaultView||ce},me=we(0,0,0,0);function ve(e){return parseFloat(e)||0}function ye(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce((function(t,n){return t+ve(e["border-"+n+"-width"])}),0)}var be="undefined"!=typeof SVGGraphicsElement?function(e){return e instanceof ge(e).SVGGraphicsElement}:function(e){return e instanceof ge(e).SVGElement&&"function"==typeof e.getBBox};function _e(e){return le?be(e)?we(0,0,(t=e.getBBox()).width,t.height):function(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return me;var o,s=ge(e).getComputedStyle(e),r=function(e){for(var t={},n=0,o=["top","right","bottom","left"];n<o.length;n++){var s=o[n],r=e["padding-"+s];t[s]=ve(r)}return t}(s),a=r.left+r.right,i=r.top+r.bottom,l=ve(s.width),c=ve(s.height);if("border-box"===s.boxSizing&&(Math.round(l+a)!==t&&(l-=ye(s,"left","right")+a),Math.round(c+i)!==n&&(c-=ye(s,"top","bottom")+i)),(o=e)!==ge(o).document.documentElement){var u=Math.round(l+a)-t,d=Math.round(c+i)-n;1!==Math.abs(u)&&(l-=u),1!==Math.abs(d)&&(c-=d)}return we(r.left,r.top,l,c)}(e):me;var t}function we(e,t,n,o){return{x:e,y:t,width:n,height:o}}var ze=function(){function e(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=we(0,0,0,0),this.target=e}return e.prototype.isActive=function(){var e=_e(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},e}(),Oe=function(e,t){var n,o,s,r,a,i,l,c=(o=(n=t).x,s=n.y,r=n.width,a=n.height,i="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,l=Object.create(i.prototype),he(l,{x:o,y:s,width:r,height:a,top:s,right:o+r,bottom:a+s,left:o}),l);he(this,{target:e,contentRect:c})},xe=function(){function e(e,t,n){if(this.activeObservations_=[],this.observations_=new ie,"function"!=typeof e)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=t,this.callbackCtx_=n}return e.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof ge(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)||(t.set(e,new ze(e)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof ge(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)&&(t.delete(e),t.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach((function(t){t.isActive()&&e.activeObservations_.push(t)}))},e.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,t=this.activeObservations_.map((function(e){return new Oe(e.target,e.broadcastRect())}));this.callback_.call(e,t,e),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),$e="undefined"!=typeof WeakMap?new WeakMap:new ie,je=function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=fe.getInstance(),o=new xe(t,n,this);$e.set(this,o)};["observe","unobserve","disconnect"].forEach((function(e){je.prototype[e]=function(){var t;return(t=$e.get(this))[e].apply(t,arguments)}}));var Se=void 0!==ce.ResizeObserver?ce.ResizeObserver:je;const Be=function(e){for(const t of e){const e=t.target.__resizeListeners__||[];e.length&&e.forEach((e=>{e()}))}},Me=a({name:"AzScrollView",props:{size:W.string().def("10px"),showBar:W.oneOfType([W.bool()]).def(!0),height:W.oneOfType([W.number()]).def(600),noresize:W.oneOfType([W.bool()]).def(!1),tag:W.string().def("div")},emit:["scroll"],setup(e,{emit:t}){const{size:n,showBar:o,height:s,noresize:a}=i(e),c=f({isEnterWarp:!1,barWidth:0,barHeight:0,warpInfo:{offsetHeight:0,offsetWidth:0},clientWidth:0,scrollConfig:{left:0,top:0},isMouseDown:!1}),{scrollViewContentRef:u,clientRef:d}=(({config:e,noresize:t})=>{const n=b(),o=b(),s=()=>{var t,s,r,a;e.warpInfo.offsetHeight=null==(t=n.value)?void 0:t.offsetHeight,e.warpInfo={offsetHeight:(null==(s=n.value)?void 0:s.offsetHeight)||0,offsetWidth:(null==(r=n.value)?void 0:r.offsetWidth)||0},e.clientWidth=null==(a=o.value)?void 0:a.clientWidth};return v((()=>{var e,n;t.value?(e=o.value,n=s,!ae&&e&&(e.__resizeListeners__||(e.__resizeListeners__=[],e.__ro__=new Se(Be),e.__ro__.observe(e)),e.__resizeListeners__.push(n)),addEventListener("resize",s)):s()})),y((()=>{var e,n;t.value&&(e=o.value,n=s,e&&e.__resizeListeners__&&(e.__resizeListeners__.splice(e.__resizeListeners__.indexOf(n),1),e.__resizeListeners__.length||e.__ro__.disconnect()),removeEventListener("resize",s))})),{scrollViewContentRef:n,clientRef:o}})({config:c,noresize:a}),{onMouseenter:p,onMouseleave:h,onWarpScroll:g,isShowBar:m,onScrollBarMouseDown:_,content:w,mouseDownConfig:z}=(({config:e,showBar:t,height:n,emit:o})=>{const s=b(),r=l((()=>(null==t?void 0:t.value)&&e.isEnterWarp)),a=f({clientY:0,clientX:0,offsetTop:0,offsetLeft:0,offsetHeight:0,offsetWidth:0,type:""}),i=t=>{const{type:o}=a;let r="vertical"===o?n.value:e[re[o].area],i=r/e.warpInfo[re[o].content],l=t[re[o].client]-(a[re[o].client]-a[re[o].offset]);l=Math.max(l,0),l=Math.min(r-a[re[o].content],l),e.scrollConfig[re[o].direction]=l,Reflect.set((null==s?void 0:s.value)||{},re[o].scroll,l/i)},c=t=>{se(document,"mousemove",i),se(document,"mouseup",c),e.isMouseDown=!1,a[re[a.type].client]=0,a[re[a.type].offset]=0,a[re[a.type].content]=0,a.type=""};return{onMouseenter:()=>{e.isEnterWarp=!0},onMouseleave:()=>{e.isEnterWarp=!1},isShowBar:r,onWarpScroll:t=>{if(e.isMouseDown)return;const s=Math.min(n.value/e.warpInfo.offsetHeight,1),r=Math.min(e.clientWidth/e.warpInfo.offsetWidth,1);e.scrollConfig.left=t.target.scrollLeft*r,e.scrollConfig.top=t.target.scrollTop*s,o("scroll",t)},onScrollBarMouseDown:(t,n)=>{var o;const{target:s}=n;null==(o=null==window?void 0:window.getSelection())||o.removeAllRanges(),e.isMouseDown=!0,a.type=t,a[re[t].client]=n[re[t].client],a[re[t].offset]=s[re[t].offset],a[re[t].content]=s[re[t].content],oe(document,"mousemove",i),oe(document,"mouseup",c),document.onselectstart=()=>!1},content:s,mouseDownConfig:a}})({config:c,showBar:o,height:s,emit:t}),{verticalStyle:O,crossStyle:x,warpStyle:$,containerStyle:j,verticalBarStyle:S,crossBarStyle:B}=(({size:e,height:t,config:n})=>{const o=l((()=>({borderRadius:e.value}))),s=l((()=>r({width:e.value},o.value))),a=l((()=>{let e=t.value/n.warpInfo.offsetHeight;return e=Math.min(e,1),{height:100*e+"%",top:`${n.scrollConfig.top}px`}})),i=l((()=>r({height:e.value,right:`${parseFloat(e.value)}px`},o.value))),c=l((()=>{let e=n.clientWidth/n.warpInfo.offsetWidth;return e=Math.min(e,1),{width:100*e+"%",left:`${n.scrollConfig.left}px`}}));return{verticalStyle:s,crossStyle:i,warpStyle:l((()=>({height:`${t.value}px`}))),containerStyle:l((()=>({height:`${t.value+17}px`}))),verticalBarStyle:a,crossBarStyle:c}})({size:n,height:s,config:c});return{scrollViewContentRef:u,clientRef:d,verticalStyle:O,crossStyle:x,warpStyle:$,containerStyle:j,verticalBarStyle:S,crossBarStyle:B,onWarpScroll:g,onMouseenter:p,onMouseleave:h,onScrollBarMouseDown:_,isShowBar:m,content:w,mouseDownConfig:z}}});Me.install=e=>{e.component(Me.name,Me)},Me.render=function(e,t,n,o,s,r){return z(),u("div",{class:"az-scroll-view__warp",onMouseenter:t[4]||(t[4]=(...t)=>e.onMouseenter(...t)),onMouseleave:t[5]||(t[5]=(...t)=>e.onMouseleave(...t)),style:e.warpStyle,ref:"clientRef"},[_(j,{name:"az-fade"},{default:w((()=>[x(_("div",{class:"az-scroll-bar az-scroll-vertical-bar",style:e.verticalStyle},[_("div",{class:["az-scroll-bar-content",{active:"vertical"===e.mouseDownConfig.type}],style:e.verticalBarStyle,onMousedown:t[1]||(t[1]=t=>e.onScrollBarMouseDown("vertical",t))},null,38)],4),[[$,e.isShowBar]])])),_:1}),_(j,{name:"az-fade"},{default:w((()=>[x(_("div",{class:"az-scroll-bar az-scroll-cross-bar",style:e.crossStyle},[_("div",{class:["az-scroll-bar-content",{active:"cross"===e.mouseDownConfig.type}],style:e.crossBarStyle,onMousedown:t[2]||(t[2]=t=>e.onScrollBarMouseDown("cross",t))},null,38)],4),[[$,e.isShowBar]])])),_:1}),_("div",{class:"az-scroll-view-content",style:e.containerStyle,onScroll:t[3]||(t[3]=(...t)=>e.onWarpScroll(...t)),ref:"content"},[(z(),u(g(e.tag),{class:"az-scroll__view",ref:"scrollViewContentRef"},{default:w((()=>[p(e.$slots,"default")])),_:3},512))],36)],36)};const Te=[H,I,V,G,J,Q,Z,ee,te,Me],Ee={version:"0.0.1",install:e=>{Te.forEach((t=>{(t=>{if(!t.name)throw"component need name";e.component(t.name,t)})(t)}))}};const Ae={},Re=B("默认按钮"),Le=B("主要按钮"),Ce=B("成功按钮"),ke=B("警告按钮"),We=B("危险按钮");Ae.render=function(e,t){const n=S("az-button");return z(),u("div",null,[_(n,null,{default:w((()=>[Re])),_:1}),_(n,{type:"primary"},{default:w((()=>[Le])),_:1}),_(n,{type:"success"},{default:w((()=>[Ce])),_:1}),_(n,{type:"warning"},{default:w((()=>[ke])),_:1}),_(n,{type:"danger"},{default:w((()=>[We])),_:1})])};const He=a({components:{vdpv_0:Ae},setup(e){const t=b(),n=[t],o=f({vdpv_0Height:0});return r(r({toggleCode:e=>{const t="vdpv_"+e;0===o[t+"Height"]?o[t+"Height"]=(n[e].value?n[e].value.offsetHeight:0)||0:o[t+"Height"]=0}},i(o)),{vdpv_0Ref:t})}});He.$vd={matter:{title:"Button",wrapperClass:"md-button"},toc:[{content:"Button 按钮",anchor:"button-按钮",level:1},{content:"按钮颜色",anchor:"按钮颜色",level:2},{content:"Button Props",anchor:"button-props",level:2}]};const De=He,qe={class:"vuedoc  md-button"},Ie=T('<h1 id="button-按钮" data-source-line="2"><a class="markdownIt-Anchor" href="#button-按钮">#</a> Button 按钮</h1><p data-source-line="4">常用的操作按钮</p><h2 id="按钮颜色" data-source-line="6"><a class="markdownIt-Anchor" href="#按钮颜色">#</a> 按钮颜色</h2><p data-source-line="8">使用<code>color</code>属性来定义 Button 的颜色</p><p data-source-line="10"><code>color</code>: ‘primary’ | ‘success’ | ‘info’ | ‘warning’ | ‘danger’</p><pre style="display:none;"></pre>',6),Fe={class:"vuedoc-demo "},Ne={class:"vuedoc-demo__inner"},Ve={class:"vuedoc-demo__preview"},Pe={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},Ge=T('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">az-button</span>&gt;</span>默认按钮<span class="hljs-tag">&lt;/<span class="hljs-name">az-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">az-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>主要按钮<span class="hljs-tag">&lt;/<span class="hljs-name">az-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">az-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>成功按钮<span class="hljs-tag">&lt;/<span class="hljs-name">az-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">az-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span>警告按钮<span class="hljs-tag">&lt;/<span class="hljs-name">az-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">az-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span>&gt;</span>危险按钮<span class="hljs-tag">&lt;/<span class="hljs-name">az-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n</span></code></pre></div>',1),Ue=T('<h2 id="button-props" data-source-line="24"><a class="markdownIt-Anchor" href="#button-props">#</a> Button Props</h2><table data-source-line="26"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>color</td><td>类型</td><td>‘primary’ / ‘success’ / ‘warning’ / ‘danger’ / ‘info’ / ‘string’</td><td>-</td></tr><tr><td>size</td><td>尺寸</td><td>‘large’ / ‘small’</td><td>-</td></tr><tr><td>type</td><td>类型</td><td>‘round’ / ‘circle’ / ‘link’ / ‘plain’</td><td>-</td></tr><tr><td>loading</td><td>是否加载中状态</td><td>boolean</td><td>false</td></tr><tr><td>disabled</td><td>是否禁用状态</td><td>boolean</td><td>false</td></tr><tr><td>nativaz-type</td><td>原生 type 属性</td><td>‘button’ / ‘submit’ / ‘reset’</td><td>button</td></tr></tbody></table>',2);De.render=function(e,t,n,o,s,r){const a=S("vdpv_0");return z(),u("div",qe,[Ie,_("div",Fe,[_("div",Ne,[_("div",Ve,[_(a)]),_("div",{style:{height:e.vdpv_0Height+"px"},class:"vuedoc-demo__source"},[_("div",Pe,[Ge],512)],4),_("div",{class:"vuedoc-demo__footer",onClick:t[1]||(t[1]=t=>e.toggleCode(0))},M(e.vdpv_0Height>0?"hidden":"show"),1)])]),Ue])};var Xe=[{title:"Basic",items:[{name:"Button",component:De}]}],Ye=a({name:"AppLayout",setup(){const e=E(),t=f({primaryColor:"#409eff"});return{route:e,menus:Xe,data:t}}});Ye.render=function(e,t,n,o,s,r){const a=S("router-view"),i=S("az-scroll-view");return z(),u(i,{height:800},{default:w((()=>[_(a)])),_:1})};const Je=A({history:R(),strict:!0,routes:[{path:"/"},{path:"/component",name:"Layout",component:Ye,redirect:"/button",children:Xe.reduce(((e,t)=>{const n=t.items.map((e=>(console.log(e.name),{path:`/${e.name.toLowerCase()}`,name:e.name,component:e.component})));return e.push(...n),e}),[])}]});var Ke=a({name:"App",components:{}});Ke.render=function(e,t,n,o,s,r){const a=S("router-view");return z(),u(a)};const Qe=L(Ke);Qe.use(Ee),Qe.use(Je),Qe.mount("#app");
