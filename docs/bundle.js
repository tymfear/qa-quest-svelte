var app=function(){"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function u(t,e,n){const r=e.subscribe(n);t.$$.on_destroy.push(r.unsubscribe?()=>r.unsubscribe():r)}function a(t,e,n){if(t){const r=i(t,e,n);return t[0](r)}}function i(t,n,r){return t[1]?e({},e(n.$$scope.ctx,t[1](r?r(n):{}))):n.$$scope.ctx}function l(t,n,r,o){return t[1]?e({},e(n.$$scope.changed||{},t[1](o?o(r):{}))):n.$$scope.changed||{}}function $(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function d(t,e){t.appendChild(e)}function f(t,e,n){t.insertBefore(e,n||null)}function p(t){t.parentNode.removeChild(t)}function h(t){return document.createElement(t)}function m(t){return document.createTextNode(t)}function M(){return m(" ")}function w(){return m("")}function g(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function v(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function L(t,e){e=""+e,t.data!==e&&(t.data=e)}let k;function A(t){k=t}function j(){if(!k)throw new Error("Function called outside component initialization");return k}function x(t){j().$$.on_mount.push(t)}function y(){const t=k;return(e,n)=>{const r=t.$$.callbacks[e];if(r){const o=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);r.slice().forEach(e=>{e.call(t,o)})}}}function D(t,e){j().$$.context.set(t,e)}function S(t){return j().$$.context.get(t)}const C=[],T=Promise.resolve();let b=!1;const N=[],I=[],E=[];function O(t){I.push(t)}function z(){const t=new Set;do{for(;C.length;){const t=C.shift();A(t),_(t.$$)}for(;N.length;)N.shift()();for(;I.length;){const e=I.pop();t.has(e)||(e(),t.add(e))}}while(C.length);for(;E.length;)E.pop()();b=!1}function _(t){t.fragment&&(t.update(t.dirty),o(t.before_render),t.fragment.p(t.dirty,t.ctx),t.dirty=null,t.after_render.forEach(O))}const Y=new Set;let P;function U(){P={remaining:0,callbacks:[]}}function Q(){P.remaining||o(P.callbacks)}function R(t,e){t&&t.i&&(Y.delete(t),t.i(e))}function K(t,e,n){if(t&&t.o){if(Y.has(t))return;Y.add(t),P.callbacks.push(()=>{Y.delete(t),n&&(t.d(1),n())}),t.o(e)}}function B(t,n){const r=n.token={};function o(t,o,s,c){if(n.token!==r)return;n.resolved=s&&{[s]:c};const u=e(e({},n.ctx),n.resolved),a=t&&(n.current=t)(u);n.block&&(n.blocks?n.blocks.forEach((t,e)=>{e!==o&&t&&(U(),K(t,1,()=>{n.blocks[e]=null}),Q())}):n.block.d(1),a.c(),R(a,1),a.m(n.mount(),n.anchor),z()),n.block=a,n.blocks&&(n.blocks[o]=a)}if((s=t)&&"object"==typeof s&&"function"==typeof s.then){if(t.then(t=>{o(n.then,1,n.value,t)},t=>{o(n.catch,2,n.error,t)}),n.current!==n.pending)return o(n.pending,0),!0}else{if(n.current!==n.then)return o(n.then,1,n.value,t),!0;n.resolved={[n.value]:t}}var s}function q(t,e,r){const{fragment:c,on_mount:u,on_destroy:a,after_render:i}=t.$$;c.m(e,r),O(()=>{const e=u.map(n).filter(s);a?a.push(...e):o(e),t.$$.on_mount=[]}),i.forEach(O)}function G(t,e){t.$$.fragment&&(o(t.$$.on_destroy),e&&t.$$.fragment.d(1),t.$$.on_destroy=t.$$.fragment=null,t.$$.ctx={})}function W(t,e){t.$$.dirty||(C.push(t),b||(b=!0,T.then(z)),t.$$.dirty=r()),t.$$.dirty[e]=!0}function Z(e,n,s,c,u,a){const i=k;A(e);const l=n.props||{},$=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:u,bound:r(),on_mount:[],on_destroy:[],before_render:[],after_render:[],context:new Map(i?i.$$.context:[]),callbacks:r(),dirty:null};let d=!1;var f;$.ctx=s?s(e,l,(t,n)=>{$.ctx&&u($.ctx[t],$.ctx[t]=n)&&($.bound[t]&&$.bound[t](n),d&&W(e,t))}):l,$.update(),d=!0,o($.before_render),$.fragment=c($.ctx),n.target&&(n.hydrate?$.fragment.l((f=n.target,Array.from(f.childNodes))):$.fragment.c(),n.intro&&R(e.$$.fragment),q(e,n.target,n.anchor),z()),A(i)}class J{$destroy(){G(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function F(e,n=t){let r;const o=[];function s(t){if(c(e,t)){if(e=t,!r)return;o.forEach(t=>t[1]()),o.forEach(t=>t[0](e))}}return{set:s,update:function(t){s(t(e))},subscribe:function(c,u=t){const a=[c,u];return o.push(a),1===o.length&&(r=n(s)||t),c(e),()=>{const t=o.indexOf(a);-1!==t&&o.splice(t,1),0===o.length&&r()}}}}function H(e,n,r){const c=!Array.isArray(e),u=c?[e]:e,a=n.length<2,i=[],l={subscribe:F(r,e=>{let r=!1;const l=[];let $=0,d=t;const f=()=>{if($)return;d();const r=n(c?l[0]:l,e);a?e(r):d=s(r)?r:t},p=u.map((t,e)=>t.subscribe(t=>{l[e]=t,$&=~(1<<e),r&&f()},()=>{o(i),$|=1<<e}));return r=!0,f(),function(){o(p),d()}}).subscribe};return{subscribe(e,n=t){i.push(n);const r=l.subscribe(e,n);return()=>{const t=i.indexOf(n);-1!==t&&i.splice(t,1),r()}}}}const V={},X={};function tt(t){return{...t.location,state:t.history.state,key:t.history.state&&t.history.state.key||"initial"}}const et=function(t,e){const n=[];let r=tt(t);return{get location(){return r},listen(e){n.push(e);const o=()=>{r=tt(t),e({location:r,action:"POP"})};return t.addEventListener("popstate",o),()=>{t.removeEventListener("popstate",o);const r=n.indexOf(e);n.splice(r,1)}},navigate(e,{state:o,replace:s=!1}={}){o={...o,key:Date.now()+""};try{s?t.history.replaceState(o,null,e):t.history.pushState(o,null,e)}catch(n){t.location[s?"replace":"assign"](e)}r=tt(t),n.forEach(t=>t({location:r,action:"PUSH"}))}}}(Boolean("undefined"!=typeof window&&window.document&&window.document.createElement)?window:function(t="/"){let e=0;const n=[{pathname:t,search:""}],r=[];return{get location(){return n[e]},addEventListener(t,e){},removeEventListener(t,e){},history:{get entries(){return n},get index(){return e},get state(){return r[e]},pushState(t,o,s){const[c,u=""]=s.split("?");e++,n.push({pathname:c,search:u}),r.push(t)},replaceState(t,o,s){const[c,u=""]=s.split("?");n[e]={pathname:c,search:u},r[e]=t}}}}()),{navigate:nt}=et,rt=/^:(.+)/,ot=4,st=3,ct=2,ut=1,at=1;function it(t){return"*"===t[0]}function lt(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function $t(t){return t.replace(/(^\/+|\/+$)/g,"")}function dt(t,e){return{route:t,score:t.default?0:lt(t.path).reduce((t,e)=>(t+=ot,!function(t){return""===t}(e)?!function(t){return rt.test(t)}(e)?it(e)?t-=ot+ut:t+=st:t+=ct:t+=at,t),0),index:e}}function ft(t,e){let n,r;const[o]=e.split("?"),s=lt(o),c=""===s[0],u=function(t){return t.map(dt).sort((t,e)=>t.score<e.score?1:t.score>e.score?-1:t.index-e.index)}(t);for(let t=0,o=u.length;t<o;t++){const o=u[t].route;let a=!1;if(o.default){r={route:o,params:{},uri:e};continue}const i=lt(o.path),l={},$=Math.max(s.length,i.length);let d=0;for(;d<$;d++){const t=i[d],e=s[d];if(void 0!==t&&it(t)){l["*"===t?"*":t.slice(1)]=s.slice(d).map(decodeURIComponent).join("/");break}if(void 0===e){a=!0;break}let n=rt.exec(t);if(n&&!c){const t=decodeURIComponent(e);l[n[1]]=t}else if(t!==e){a=!0;break}}if(!a){n={route:o,params:l,uri:"/"+s.slice(0,d).join("/")};break}}return n||r||null}function pt(t,e){return`${$t("/"===e?t:`${$t(t)}/${$t(e)}`)}/`}function ht(t){var e;const n=t.$$slots.default,r=a(n,t,null);return{c(){r&&r.c()},l(t){r&&r.l(t)},m(t,n){r&&r.m(t,n),e=!0},p(t,e){r&&r.p&&t.$$scope&&r.p(l(n,e,t,null),i(n,e,null))},i(t){e||(R(r,t),e=!0)},o(t){K(r,t),e=!1},d(t){r&&r.d(t)}}}function mt(t,e,n){let r,o,s,{basepath:c="/",url:a=null}=e;const i=S(V),l=S(X),$=F([]);u(t,$,t=>{n("$routes",s=t)});const d=F(null);let f=!1;const p=i||F(a?{pathname:a}:et.location);u(t,p,t=>{n("$location",o=t)});const h=l?l.routerBase:F({path:c,uri:c});u(t,h,t=>{n("$base",r=t)});const m=H([h,d],([t,e])=>{if(null===e)return t;const{path:n}=t,{route:r,uri:o}=e;return{path:r.default?n:r.path.replace(/\*.*$/,""),uri:o}});i||(x(()=>{return et.listen(t=>{p.set(t.location)})}),D(V,p)),D(X,{activeRoute:d,base:h,routerBase:m,registerRoute:function(t){const{path:e}=r;let{path:n}=t;if(t._path=n,t.path=pt(e,n),"undefined"==typeof window){if(f)return;const e=function(t,e){return ft([t],e)}(t,o.pathname);e&&(d.set(e),f=!0)}else $.update(e=>(e.push(t),e))},unregisterRoute:function(t){$.update(e=>{const n=e.indexOf(t);return e.splice(n,1),e})}});let{$$slots:M={},$$scope:w}=e;return t.$set=(t=>{"basepath"in t&&n("basepath",c=t.basepath),"url"in t&&n("url",a=t.url),"$$scope"in t&&n("$$scope",w=t.$$scope)}),t.$$.update=((t={$base:1,$routes:1,$location:1})=>{if(t.$base){const{path:t}=r;$.update(e=>(e.forEach(e=>e.path=pt(t,e._path)),e))}if(t.$routes||t.$location){const t=ft(s,o.pathname);d.set(t)}}),{basepath:c,url:a,routes:$,location:p,base:h,$$slots:M,$$scope:w}}class Mt extends J{constructor(t){super(),Z(this,t,mt,ht,c,["basepath","url"])}}function wt(t){var e,n,r,o,s=[vt,gt],c=[];function u(t){return null!==t.component?0:1}return e=u(t),n=c[e]=s[e](t),{c(){n.c(),r=w()},m(t,n){c[e].m(t,n),f(t,r,n),o=!0},p(t,o){var a=e;(e=u(o))===a?c[e].p(t,o):(U(),K(c[a],1,()=>{c[a]=null}),Q(),(n=c[e])||(n=c[e]=s[e](o)).c(),R(n,1),n.m(r.parentNode,r))},i(t){o||(R(n),o=!0)},o(t){K(n),o=!1},d(t){c[e].d(t),t&&p(r)}}}function gt(t){var e;const n=t.$$slots.default,r=a(n,t,null);return{c(){r&&r.c()},l(t){r&&r.l(t)},m(t,n){r&&r.m(t,n),e=!0},p(t,e){r&&r.p&&t.$$scope&&r.p(l(n,e,t,null),i(n,e,null))},i(t){e||(R(r,t),e=!0)},o(t){K(r,t),e=!1},d(t){r&&r.d(t)}}}function vt(t){var n,r,o=[t.routeParams,t.routeProps],s=t.component;function c(t){let n={};for(var r=0;r<o.length;r+=1)n=e(n,o[r]);return{props:n}}if(s)var u=new s(c());return{c(){u&&u.$$.fragment.c(),n=w()},m(t,e){u&&q(u,t,e),f(t,n,e),r=!0},p(t,e){var r=t.routeParams||t.routeProps?function(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const c=t[s],u=e[s];if(u){for(const t in c)t in u||(r[t]=1);for(const t in u)o[t]||(n[t]=u[t],o[t]=1);t[s]=u}else for(const t in c)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}(o,[t.routeParams&&e.routeParams,t.routeProps&&e.routeProps]):{};if(s!==(s=e.component)){if(u){U();const t=u;K(t.$$.fragment,1,()=>{G(t)}),Q()}s?((u=new s(c())).$$.fragment.c(),R(u.$$.fragment,1),q(u,n.parentNode,n)):u=null}else s&&u.$set(r)},i(t){r||(R(u.$$.fragment,t),r=!0)},o(t){u&&K(u.$$.fragment,t),r=!1},d(t){t&&p(n),u&&G(u,t)}}}function Lt(t){var e,n,r=null!==t.$activeRoute&&t.$activeRoute.route===t.route&&wt(t);return{c(){r&&r.c(),e=w()},m(t,o){r&&r.m(t,o),f(t,e,o),n=!0},p(t,n){null!==n.$activeRoute&&n.$activeRoute.route===n.route?r?(r.p(t,n),R(r,1)):((r=wt(n)).c(),R(r,1),r.m(e.parentNode,e)):r&&(U(),K(r,1,()=>{r=null}),Q())},i(t){n||(R(r),n=!0)},o(t){K(r),n=!1},d(t){r&&r.d(t),t&&p(e)}}}function kt(t,n,r){let o,{path:s="",component:c=null}=n;const{registerRoute:a,unregisterRoute:i,activeRoute:l}=S(X);u(t,l,t=>{r("$activeRoute",o=t)});const d={path:s,default:""===s};let f={},p={};var h;a(d),"undefined"!=typeof window&&(h=(()=>{i(d)}),j().$$.on_destroy.push(h));let{$$slots:m={},$$scope:M}=n;return t.$set=(t=>{r("$$props",n=e(e({},n),t)),"path"in t&&r("path",s=t.path),"component"in t&&r("component",c=t.component),"$$scope"in t&&r("$$scope",M=t.$$scope)}),t.$$.update=((t={$activeRoute:1,$$props:1})=>{t.$activeRoute&&o&&o.route===d&&r("routeParams",f=o.params);{const{path:t,component:e,...o}=n;r("routeProps",p=o)}}),{path:s,component:c,activeRoute:l,route:d,routeParams:f,routeProps:p,$activeRoute:o,$$props:n=$(n),$$slots:m,$$scope:M}}class At extends J{constructor(t){super(),Z(this,t,kt,Lt,c,["path","component"])}}function jt(e){var n;return{c(){(n=h("div")).innerHTML='<div class="svelte-1dvheto"></div>',v(n,"class","lds-heart svelte-1dvheto")},m(t,e){f(t,n,e)},p:t,i:t,o:t,d(t){t&&p(n)}}}class xt extends J{constructor(t){super(),Z(this,t,null,jt,c,[])}}function yt(e){var n;return{c(){(n=h("p")).textContent="Failed to load kitty image"},m(t,e){f(t,n,e)},p:t,i:t,o:t,d(t){t&&p(n)}}}function Dt(e){var n;return{c(){v(n=h("img"),"src",e.src),v(n,"alt","Kitty Gif"),v(n,"class","svelte-1i2w0f1")},m(t,e){f(t,n,e)},p:t,i:t,o:t,d(t){t&&p(n)}}}function St(e){var n,r,o,s,c=new xt({});return{c(){n=h("div"),c.$$.fragment.c(),r=M(),(o=h("p")).textContent="Loading your kitty",v(o,"class","svelte-1i2w0f1"),v(n,"class","loader svelte-1i2w0f1")},m(t,e){f(t,n,e),q(c,n,null),d(n,r),d(n,o),s=!0},p:t,i(t){s||(R(c.$$.fragment,t),s=!0)},o(t){K(c.$$.fragment,t),s=!1},d(t){t&&p(n),G(c)}}}function Ct(t){var n,r,o;let s={ctx:t,current:null,pending:St,then:Dt,catch:yt,value:"src",error:"null",blocks:Array(3)};return B(r=t.kittyUrl,s),{c(){n=h("div"),s.block.c(),v(n,"class","kittyContainer svelte-1i2w0f1")},m(t,e){f(t,n,e),s.block.m(n,s.anchor=null),s.mount=(()=>n),s.anchor=null,o=!0},p(n,o){t=o,s.ctx=t,r!==(r=t.kittyUrl)&&B(r,s)||s.block.p(n,e(e({},t),s.resolved))},i(t){o||(R(s.block),o=!0)},o(t){for(let t=0;t<3;t+=1){K(s.blocks[t])}o=!1},d(t){t&&p(n),s.block.d(),s=null}}}function Tt(t){return{kittyUrl:async function(){const t=await fetch("https://api.thecatapi.com/v1/images/search?limit=1&size=full",{headers:{"x-api-key":"4ba6ad98-b2e1-4e4d-976c-6888d3dcf759"}});return(await t.json())[0].url}()}}class bt extends J{constructor(t){super(),Z(this,t,Tt,Ct,c,[])}}const Nt=F(!1),It=F(!1);function Et(e){var n,r,o,s,c,u,a,i,l,$,w,k,A,j=e.$showAdminArea?"user's":"";return{c(){n=h("p"),r=m("Switch toggle to show or hide "),o=m(j),s=m(" kitty"),c=M(),u=h("div"),a=h("label"),i=h("input"),l=M(),($=h("span")).textContent="On",w=M(),(k=h("span")).textContent="Off",v(n,"class","svelte-198kwew"),v(i,"type","checkbox"),i.checked=e.$showKitty,v(i,"class","svelte-198kwew"),v($,"class","switch-left svelte-198kwew"),v(k,"class","switch-right svelte-198kwew"),v(a,"class","rocker svelte-198kwew"),v(u,"class","mid svelte-198kwew"),A=g(i,"click",e.handleChange)},m(t,e){f(t,n,e),d(n,r),d(n,o),d(n,s),f(t,c,e),f(t,u,e),d(u,a),d(a,i),d(a,l),d(a,$),d(a,w),d(a,k)},p(t,e){t.$showAdminArea&&j!==(j=e.$showAdminArea?"user's":"")&&L(o,j),t.$showKitty&&(i.checked=e.$showKitty)},i:t,o:t,d(t){t&&(p(n),p(c),p(u)),A()}}}function Ot(t,e,n){let r,o;u(t,It,t=>{n("$showAdminArea",r=t)}),u(t,Nt,t=>{n("$showKitty",o=t)});return{handleChange:()=>{Nt.update(t=>!t)},$showAdminArea:r,$showKitty:o}}class zt extends J{constructor(t){super(),Z(this,t,Ot,Et,c,[])}}function _t(t){var e,n=new bt({});return{c(){n.$$.fragment.c()},m(t,r){q(n,t,r),e=!0},i(t){e||(R(n.$$.fragment,t),e=!0)},o(t){K(n.$$.fragment,t),e=!1},d(t){G(n,t)}}}function Yt(t){var e,n,r,o,s,c=new zt({}),u=t.$showKitty&&_t();return{c(){(e=h("h2")).textContent="Member Area",n=M(),r=h("div"),c.$$.fragment.c(),o=M(),u&&u.c()},m(t,a){f(t,e,a),f(t,n,a),f(t,r,a),q(c,r,null),d(r,o),u&&u.m(r,null),s=!0},p(t,e){e.$showKitty?u?R(u,1):((u=_t()).c(),R(u,1),u.m(r,null)):u&&(U(),K(u,1,()=>{u=null}),Q())},i(t){s||(R(c.$$.fragment,t),R(u),s=!0)},o(t){K(c.$$.fragment,t),K(u),s=!1},d(t){t&&(p(e),p(n),p(r)),G(c),u&&u.d()}}}function Pt(t,e,n){let r;return u(t,Nt,t=>{n("$showKitty",r=t)}),{$showKitty:r}}class Ut extends J{constructor(t){super(),Z(this,t,Pt,Yt,c,[])}}function Qt(e){var n,r,o,s,c=new zt({});return{c(){(n=h("h2")).textContent="Admin Area",r=M(),o=h("div"),c.$$.fragment.c()},m(t,e){f(t,n,e),f(t,r,e),f(t,o,e),q(c,o,null),s=!0},p:t,i(t){s||(R(c.$$.fragment,t),s=!0)},o(t){K(c.$$.fragment,t),s=!1},d(t){t&&(p(n),p(r),p(o)),G(c)}}}class Rt extends J{constructor(t){super(),Z(this,t,null,Qt,c,[])}}function Kt(e){var n,r,o,s,c,u,a=e.$showAdminArea?"Member":"Admin";return{c(){n=h("nav"),r=h("a"),o=m("Show "),s=m(a),c=m(" Area"),v(r,"href","#admin"),v(r,"class","svelte-mf9xs1"),v(n,"class","svelte-mf9xs1"),u=g(r,"click",e.click_handler)},m(t,e){f(t,n,e),d(n,r),d(r,o),d(r,s),d(r,c)},p(t,e){t.$showAdminArea&&a!==(a=e.$showAdminArea?"Member":"Admin")&&L(s,a)},i:t,o:t,d(t){t&&p(n),u()}}}function Bt(t,e,n){let r;return u(t,It,t=>{n("$showAdminArea",r=t)}),{$showAdminArea:r,click_handler:function(){return It.update(t=>!t)}}}class qt extends J{constructor(t){super(),Z(this,t,Bt,Kt,c,[])}}const Gt=F({});function Wt(t){var e,n=new Ut({});return{c(){n.$$.fragment.c()},m(t,r){q(n,t,r),e=!0},i(t){e||(R(n.$$.fragment,t),e=!0)},o(t){K(n.$$.fragment,t),e=!1},d(t){G(n,t)}}}function Zt(t){var e,n=new Rt({});return{c(){n.$$.fragment.c()},m(t,r){q(n,t,r),e=!0},i(t){e||(R(n.$$.fragment,t),e=!0)},o(t){K(n.$$.fragment,t),e=!1},d(t){G(n,t)}}}function Jt(t){var e,n,r,o,s,c,u=new qt({}),a=[Zt,Wt],i=[];function l(t){return t.$showAdminArea?0:1}return r=l(t),o=i[r]=a[r](t),{c(){e=M(),u.$$.fragment.c(),n=M(),o.c(),s=w(),document.title="Show me the kitty"},m(t,o){f(t,e,o),q(u,t,o),f(t,n,o),i[r].m(t,o),f(t,s,o),c=!0},p(t,e){var n=r;(r=l(e))!==n&&(U(),K(i[n],1,()=>{i[n]=null}),Q(),(o=i[r])||(o=i[r]=a[r](e)).c(),R(o,1),o.m(s.parentNode,s))},i(t){c||(R(u.$$.fragment,t),R(o),c=!0)},o(t){K(u.$$.fragment,t),K(o),c=!1},d(t){t&&p(e),G(u,t),t&&p(n),i[r].d(t),t&&p(s)}}}function Ft(t,e,n){let r;return u(t,It,t=>{n("$showAdminArea",r=t)}),x(()=>{Nt.update(()=>Math.random()<.5),Gt.update(t=>({...t,showAuthorInfo:!0,author:"Taras Voloshenko",profileLink:"https://www.linkedin.com/in/taras-voloshenko-12a42912",questName:"Show me a Kitty!"}))}),{$showAdminArea:r}}class Ht extends J{constructor(t){super(),Z(this,t,Ft,Jt,c,[])}}const Vt=({})=>({}),Xt=({})=>({});function te(t){var e,n,r,s,c,u,$,m,w,L;const k=t.$$slots.header,A=a(k,t,Xt),j=t.$$slots.default,x=a(j,t,null);return{c(){e=h("div"),n=M(),r=h("div"),s=h("header"),A&&A.c(),c=M(),x&&x.c(),u=M(),$=h("footer"),(m=h("a")).textContent="Close",v(e,"class","modal-background svelte-1j1nv7m"),v(s,"id","header"),v(s,"class","svelte-1j1nv7m"),v(m,"href","#"),v(m,"class","svelte-1j1nv7m"),v($,"class","svelte-1j1nv7m"),v(r,"class","modal svelte-1j1nv7m"),L=[g(e,"click",t.dispatchClose),g(m,"click",t.dispatchClose)]},l(t){A&&A.l(header_nodes),x&&x.l(div1_nodes)},m(t,o){f(t,e,o),f(t,n,o),f(t,r,o),d(r,s),A&&A.m(s,null),d(r,c),x&&x.m(r,null),d(r,u),d(r,$),d($,m),w=!0},p(t,e){A&&A.p&&t.$$scope&&A.p(l(k,e,t,Vt),i(k,e,Xt)),x&&x.p&&t.$$scope&&x.p(l(j,e,t,null),i(j,e,null))},i(t){w||(R(A,t),R(x,t),w=!0)},o(t){K(A,t),K(x,t),w=!1},d(t){t&&(p(e),p(n),p(r)),A&&A.d(t),x&&x.d(t),o(L)}}}function ee(t,e,n){const r=y();let{$$slots:o={},$$scope:s}=e;return t.$set=(t=>{"$$scope"in t&&n("$$scope",s=t.$$scope)}),{dispatchClose:()=>r("closeModal"),$$slots:o,$$scope:s}}class ne extends J{constructor(t){super(),Z(this,t,ee,te,c,[])}}function re(e){var n,r,o;return{c(){n=h("div"),r=h("a"),v(o=h("img"),"src",oe),v(o,"alt","LinkedIn icon"),v(r,"href",e.link),v(r,"target","blank")},m(t,e){f(t,n,e),d(n,r),d(r,o)},p(t,e){t.link&&v(r,"href",e.link)},i:t,o:t,d(t){t&&p(n)}}}const oe="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pjxzdmcgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDggNDg7IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA0OCA0OCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGcgaWQ9Ikljb25zIj48ZyBpZD0iSWNvbnNfMjJfIj48Zz48cGF0aCBkPSJNMzQuOTU0OTUsMTAuNTI1aC0yMS45MWMtMS4zODk5LDAtMi41MiwxLjEzLTIuNTIsMi41MTk5djIxLjkxYzAsMS4zOTAxLDEuMTMsMi41MjAxLDIuNTIsMi41MjAxICAgICBoMjEuOTFjMS4zOSwwLDIuNTIwMS0xLjEzLDIuNTIwMS0yLjUyMDF2LTIxLjkxQzM3LjQ3NTA1LDExLjY1NSwzNi4zNDUwNSwxMC41MjUsMzQuOTU0OTUsMTAuNTI1eiBNMTkuNDE1MDUsMzEuMzM0OSAgICAgYy0wLjk1LTAuMDEtMS45MTAxLTAuMDEtMi44NzAxLDBjLTAuMTgsMC0wLjIzLTAuMDQ5OS0wLjIzLTAuMjM5OVYyMC45NTQ5YzAtMC4xOSwwLjA2LTAuMjM5OSwwLjI0LTAuMjM5OSAgICAgYzAuOTUsMC4wMSwxLjkxLDAuMDEsMi44NjAxLDBjMC4xODk5LDAsMC4yNCwwLjA2LDAuMjI5OSwwLjIzOTl2NS4wODAxYzAsMS42OSwwLDMuMzc5OSwwLjAxMDEsNS4wNjk5ICAgICBDMTkuNjU1MDUsMzEuMjg1LDE5LjU5NTA1LDMxLjMzNDksMTkuNDE1MDUsMzEuMzM0OXogTTE3Ljk4NDk1LDE5LjM1NDljLTEuMDYsMC4wMS0xLjkzLTAuODc5OS0xLjkzLTEuOTMgICAgIGMwLjAxLTEuMDEsMC43OC0xLjkyLDEuOTIwMS0xLjkzYzEuMDc5OS0wLjAxLDEuOTQsMC44MSwxLjk0LDEuOTNDMTkuOTE1MDUsMTguNTI1LDE5LjA3NDk1LDE5LjM0NSwxNy45ODQ5NSwxOS4zNTQ5eiAgICAgIE0zMS42NDQ5NSwzMS4zMzQ5aC0yLjgxYy0wLjIzLDAtMC4yMzk5LTAuMDEtMC4yMzk5LTAuMjV2LTUuMTRjMC0wLjQ3OTktMC4wMTAxLTAuOTYtMC4xNTAxLTEuNDMgICAgIGMtMC4yMTk5LTAuNzI5OS0wLjY5LTEuMDgtMS40Ni0xLjFjLTAuNTQtMC4wMS0xLjA1LDAuMDktMS40MywwLjUxYy0wLjMxLDAuMzMtMC40NCwwLjczLTAuNSwxLjE3MDEgICAgIGMtMC4wNCwwLjM4OTktMC4wNywwLjc4OTktMC4wNywxLjE5Yy0wLjAwOTksMS42MDk5LTAuMDA5OSwzLjIxOTksMCw0LjgxOTljMCwwLjE4MDEtMC4wNSwwLjIzLTAuMjIsMC4yMyAgICAgYy0wLjk2LTAuMDEtMS45Mjk5LTAuMDEtMi44OSwwYy0wLjE2OTksMC0wLjIyOTktMC4wNDk5LTAuMjI5OS0wLjIzYzAuMDEtMy4zNzk5LDAuMDEtNi43NywwLTEwLjE2ICAgICBjMC0wLjE4LDAuMDctMC4yMjk5LDAuMjI5OS0wLjIyOTljMC45MiwwLjAxLDEuODQwMSwwLjAxLDIuNzYsMGMwLjE4LDAsMC4yNCwwLjA3LDAuMjMsMC4yMzk5Yy0wLjAxLDAuMzcsMCwwLjc1LDAsMS4xMiAgICAgYzAuNTItMC43NywxLjIyMDEtMS4yNiwyLjEwMDEtMS40Nzk5YzEuMDE5OS0wLjI1LDIuMDI5OS0wLjE3MDEsMi45OSwwLjI1YzAuOTI5OSwwLjM5OTksMS40Mjk5LDEuMTU5OSwxLjY5LDIuMDk5OSAgICAgYzAuMTc5OSwwLjYxLDAuMjYsMS4yNCwwLjI3LDEuODhjMC4wMDk5LDIuMDcsMC4wMTk5LDQuMTQwMSwwLjAyOTksNi4yMkMzMS45NDQ5NSwzMS4zMzQ5LDMxLjk0NDk1LDMxLjMzNDksMzEuNjQ0OTUsMzEuMzM0OXoiIHN0eWxlPSJmaWxsOiMwMDk3RDM7Ii8+PC9nPjwvZz48L2c+PC9zdmc+";function se(t,e,n){let{link:r}=e;return t.$set=(t=>{"link"in t&&n("link",r=t.link)}),{link:r}}class ce extends J{constructor(t){super(),Z(this,t,se,re,c,["link"])}}function ue(t){var e;return{c(){(e=h("h3")).textContent="Credits",v(e,"slot","header"),v(e,"class","svelte-14j0lur")},m(t,n){f(t,e,n)},d(t){t&&p(e)}}}function ae(t){var e,n,r,o,s,c,u,a,i,l=t.$headerStore.author,$=new ce({props:{link:t.$headerStore.profileLink}});return{c(){e=M(),(n=h("h4")).textContent="Quest Author",r=M(),o=h("div"),s=h("h1"),c=m(l),u=M(),a=h("div"),$.$$.fragment.c(),v(n,"class","svelte-14j0lur"),v(s,"id","authorName"),v(s,"class","svelte-14j0lur"),v(a,"id","linkedinLink"),v(a,"class","svelte-14j0lur"),v(o,"class","authorInfo svelte-14j0lur")},m(t,l){f(t,e,l),f(t,n,l),f(t,r,l),f(t,o,l),d(o,s),d(s,c),d(o,u),d(o,a),q($,a,null),i=!0},p(t,e){i&&!t.$headerStore||l===(l=e.$headerStore.author)||L(c,l);var n={};t.$headerStore&&(n.link=e.$headerStore.profileLink),$.$set(n)},i(t){i||(R($.$$.fragment,t),i=!0)},o(t){K($.$$.fragment,t),i=!1},d(t){t&&(p(e),p(n),p(r),p(o)),G($)}}}function ie(t){var e,n=new ne({props:{$$slots:{default:[ae],header:[ue]},$$scope:{ctx:t}}});return n.$on("closeModal",t.closeModal_handler),{c(){n.$$.fragment.c()},m(t,r){q(n,t,r),e=!0},p(t,e){var r={};(t.$$scope||t.$headerStore)&&(r.$$scope={changed:t,ctx:e}),n.$set(r)},i(t){e||(R(n.$$.fragment,t),e=!0)},o(t){K(n.$$.fragment,t),e=!1},d(t){G(n,t)}}}function le(t,e,n){let r;return u(t,Gt,t=>{n("$headerStore",r=t)}),{closeModal_handler:function(e){!function(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(t=>t(e))}(t,e)},$headerStore:r}}class $e extends J{constructor(t){super(),Z(this,t,le,ie,c,[])}}function de(t){var e,n;return{c(){(e=h("p")).textContent="Credits",n=g(e,"click",t.click_handler_1)},m(t,n){f(t,e,n)},d(t){t&&p(e),n()}}}function fe(t){var e,n=new $e({});return n.$on("closeModal",t.closeModal_handler),{c(){n.$$.fragment.c()},m(t,r){q(n,t,r),e=!0},i(t){e||(R(n.$$.fragment,t),e=!0)},o(t){K(n.$$.fragment,t),e=!1},d(t){G(n,t)}}}function pe(t){var e,n,r,o,s,c,u,a,i,l,$,k=t.$headerStore.questName,A=t.$headerStore.showAuthorInfo&&de(t),j=t.showModal&&fe(t);return{c(){e=h("header"),(n=h("p")).textContent="QA Quest",r=M(),o=h("p"),s=m(k),c=M(),u=h("div"),A&&A.c(),a=M(),j&&j.c(),i=w(),v(n,"class","logo svelte-i111q8"),v(o,"class","quest-name svelte-i111q8"),v(u,"class","credits svelte-i111q8"),v(e,"class","svelte-i111q8"),$=g(n,"click",t.click_handler)},m(t,$){f(t,e,$),d(e,n),d(e,r),d(e,o),d(o,s),d(e,c),d(e,u),A&&A.m(u,null),f(t,a,$),j&&j.m(t,$),f(t,i,$),l=!0},p(t,e){l&&!t.$headerStore||k===(k=e.$headerStore.questName)||L(s,k),e.$headerStore.showAuthorInfo?A||((A=de(e)).c(),A.m(u,null)):A&&(A.d(1),A=null),e.showModal?j?R(j,1):((j=fe(e)).c(),R(j,1),j.m(i.parentNode,i)):j&&(U(),K(j,1,()=>{j=null}),Q())},i(t){l||(R(j),l=!0)},o(t){K(j),l=!1},d(t){t&&p(e),A&&A.d(),t&&p(a),j&&j.d(t),t&&p(i),$()}}}function he(t,e,n){let r;u(t,Gt,t=>{n("$headerStore",r=t)});let o=!1;return{showModal:o,$headerStore:r,click_handler:function(){return nt("/")},click_handler_1:function(){const t=o=!0;return n("showModal",o),t},closeModal_handler:function(){const t=o=!1;return n("showModal",o),t}}}class me extends J{constructor(t){super(),Z(this,t,he,pe,c,[])}}function Me(e){var n,r,o,s=e.getDate();return{c(){n=h("footer"),r=m("© "),o=m(s),v(n,"class","svelte-1eyzs2r")},m(t,e){f(t,n,e),d(n,r),d(n,o)},p:t,i:t,o:t,d(t){t&&p(n)}}}function we(t){return{getDate:()=>{return(new Date).getFullYear()}}}class ge extends J{constructor(t){super(),Z(this,t,we,Me,c,[])}}function ve(t){var e;return{c(){(e=h("a")).textContent="Show me a Kitty!",v(e,"href","/kitty"),v(e,"class","svelte-1fx3a60")},m(t,n){f(t,e,n)},d(t){t&&p(e)}}}function Le(t){var e,n,r,o,s,c,u=new Mt({props:{$$slots:{default:[ve]},$$scope:{ctx:t}}});return{c(){e=h("div"),(n=h("h1")).textContent="Choose your quest",r=M(),o=h("div"),u.$$.fragment.c(),v(o,"id","navigator-links"),v(o,"class","svelte-1fx3a60"),v(e,"id","quest-navigator"),v(e,"class","svelte-1fx3a60")},m(t,a){f(t,e,a),d(e,n),d(e,r),d(e,o),q(u,o,null),s=function(t){function e(t){const e=function(t,e){for(;e&&e.tagName!==t;)e=e.parentNode;return e}("A",t.target);e&&""===e.target&&e.host===location.host&&function(t){return!t.defaultPrevented&&0===t.button&&!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}(t)&&!e.hasAttribute("noroute")&&(t.preventDefault(),nt(e.pathname,{replace:e.hasAttribute("replace")}))}return t.addEventListener("click",e),{destroy(){t.removeEventListener("click",e)}}}.call(null,o)||{},c=!0},p(t,e){var n={};t.$$scope&&(n.$$scope={changed:t,ctx:e}),u.$set(n)},i(t){c||(R(u.$$.fragment,t),c=!0)},o(t){K(u.$$.fragment,t),c=!1},d(t){t&&p(e),G(u),s&&"function"==typeof s.destroy&&s.destroy()}}}function ke(t){return x(()=>{Gt.update(t=>({...t,questName:"Choose you quest!",showAuthorInfo:!1}))}),{}}class Ae extends J{constructor(t){super(),Z(this,t,ke,Le,c,[])}}function je(t){var e,n,r=new At({props:{path:"kitty",component:Ht}}),o=new At({props:{path:"/",component:Ae}});return{c(){r.$$.fragment.c(),e=M(),o.$$.fragment.c()},m(t,s){q(r,t,s),f(t,e,s),q(o,t,s),n=!0},p(t,e){var n={};t.KittyApp&&(n.component=Ht),r.$set(n);var s={};t.MainApp&&(s.component=Ae),o.$set(s)},i(t){n||(R(r.$$.fragment,t),R(o.$$.fragment,t),n=!0)},o(t){K(r.$$.fragment,t),K(o.$$.fragment,t),n=!1},d(t){G(r,t),t&&p(e),G(o,t)}}}function xe(t){var e,n,r,o,s=new me({}),c=new Mt({props:{$$slots:{default:[je]},$$scope:{ctx:t}}}),u=new ge({});return{c(){s.$$.fragment.c(),e=M(),n=h("main"),c.$$.fragment.c(),r=M(),u.$$.fragment.c(),v(n,"class","container svelte-1g6mwj8")},m(t,a){q(s,t,a),f(t,e,a),f(t,n,a),q(c,n,null),f(t,r,a),q(u,t,a),o=!0},p(t,e){var n={};t.$$scope&&(n.$$scope={changed:t,ctx:e}),c.$set(n)},i(t){o||(R(s.$$.fragment,t),R(c.$$.fragment,t),R(u.$$.fragment,t),o=!0)},o(t){K(s.$$.fragment,t),K(c.$$.fragment,t),K(u.$$.fragment,t),o=!1},d(t){G(s,t),t&&(p(e),p(n)),G(c),t&&p(r),G(u,t)}}}return new class extends J{constructor(t){super(),Z(this,t,null,xe,c,[])}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
