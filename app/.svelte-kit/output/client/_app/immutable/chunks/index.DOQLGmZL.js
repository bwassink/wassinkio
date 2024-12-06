var nt=Object.defineProperty;var it=(t,e,n)=>e in t?nt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var g=(t,e,n)=>it(t,typeof e!="symbol"?e+"":e,n);import{n as N,r as A,i as L,v as C,p as z,w as W,m as st,x as rt,y as lt,z as at,l as J,A as ct,B as ot,C as ft}from"./scheduler.BJrbY8Dn.js";const Q=typeof window<"u";let I=Q?()=>window.performance.now():()=>Date.now(),O=Q?t=>requestAnimationFrame(t):N;const T=new Set;function X(t){T.forEach(e=>{e.c(t)||(T.delete(e),e.f())}),T.size!==0&&O(X)}function q(t){let e;return T.size===0&&O(X),{promise:new Promise(n=>{T.add(e={c:t,f:n})}),abort(){T.delete(e)}}}let R=!1;function ut(){R=!0}function _t(){R=!1}function dt(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function ht(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const a=[];for(let o=0;o<e.length;o++){const _=e[o];_.claim_order!==void 0&&a.push(_)}e=a}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let a=0;a<e.length;a++){const o=e[a].claim_order,_=(s>0&&e[n[s]].claim_order<=o?s+1:dt(1,s,h=>e[n[h]].claim_order,o))-1;i[a]=n[_]+1;const f=_+1;n[f]=a,s=Math.max(f,s)}const c=[],r=[];let l=e.length-1;for(let a=n[s]+1;a!=0;a=i[a-1]){for(c.push(e[a-1]);l>=a;l--)r.push(e[l]);l--}for(;l>=0;l--)r.push(e[l]);c.reverse(),r.sort((a,o)=>a.claim_order-o.claim_order);for(let a=0,o=0;a<r.length;a++){for(;o<c.length&&r[a].claim_order>=c[o].claim_order;)o++;const _=o<c.length?c[o]:null;t.insertBefore(r[a],_)}}function mt(t,e){t.appendChild(e)}function Y(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function pt(t){const e=F("style");return e.textContent="/* empty */",yt(Y(t),e),e.sheet}function yt(t,e){return mt(t.head||t,e),e.sheet}function $t(t,e){if(R){for(ht(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function gt(t,e,n){t.insertBefore(e,n||null)}function xt(t,e,n){R&&!n?$t(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function S(t){t.parentNode&&t.parentNode.removeChild(t)}function Rt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function F(t){return document.createElement(t)}function vt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function G(t){return document.createTextNode(t)}function jt(){return G(" ")}function zt(){return G("")}function It(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Ot(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function qt(t){return t.dataset.svelteH}function wt(t){return Array.from(t.childNodes)}function Z(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function tt(t,e,n,i,s=!1){Z(t);const c=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const l=t[r];if(e(l)){const a=n(l);return a===void 0?t.splice(r,1):t[r]=a,s||(t.claim_info.last_index=r),l}}for(let r=t.claim_info.last_index-1;r>=0;r--){const l=t[r];if(e(l)){const a=n(l);return a===void 0?t.splice(r,1):t[r]=a,s?a===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,l}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function Nt(t,e,n,i){return tt(t,s=>s.nodeName===e,s=>{const c=[];for(let r=0;r<s.attributes.length;r++){const l=s.attributes[r];n[l.name]||c.push(l.name)}c.forEach(r=>s.removeAttribute(r))},()=>i(e))}function Ft(t,e,n){return Nt(t,e,n,F)}function Et(t,e){return tt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>G(e),!0)}function Gt(t){return Et(t," ")}function K(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return-1}function Ut(t,e){const n=K(t,"HTML_TAG_START",0),i=K(t,"HTML_TAG_END",n+1);if(n===-1||i===-1)return new j(e);Z(t);const s=t.splice(n,i-n+1);S(s[0]),S(s[s.length-1]);const c=s.slice(1,s.length-1);if(c.length===0)return new j(e);for(const r of c)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new j(e,c)}function Vt(t,e){e=""+e,t.data!==e&&(t.data=e)}function Wt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,"")}function Jt(t,e,n){t.classList.toggle(e,!!n)}function Tt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}class At{constructor(e=!1){g(this,"is_svg",!1);g(this,"e");g(this,"n");g(this,"t");g(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=vt(n.nodeName):this.e=F(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)gt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(S)}}class j extends At{constructor(n=!1,i){super(n);g(this,"l");this.e=this.n=null,this.l=i}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let i=0;i<this.n.length;i+=1)xt(this.t,this.n[i],n)}}function Kt(t,e){return new t(e)}const P=new Map;let B=0;function bt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Ct(t,e){const n={stylesheet:pt(e),rules:{}};return P.set(t,n),n}function k(t,e,n,i,s,c,r,l=0){const a=16.666/i;let o=`{
`;for(let m=0;m<=1;m+=a){const y=e+(n-e)*c(m);o+=m*100+`%{${r(y,1-y)}}
`}const _=o+`100% {${r(n,1-n)}}
}`,f=`__svelte_${bt(_)}_${l}`,h=Y(t),{stylesheet:p,rules:u}=P.get(h)||Ct(h,t);u[f]||(u[f]=!0,p.insertRule(`@keyframes ${f} ${_}`,p.cssRules.length));const d=t.style.animation||"";return t.style.animation=`${d?`${d}, `:""}${f} ${i}ms linear ${s}ms 1 both`,B+=1,f}function D(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?c=>c.indexOf(e)<0:c=>c.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),B-=s,B||St())}function St(){O(()=>{B||(P.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&S(e)}),P.clear())})}let b;function U(){return b||(b=Promise.resolve(),b.then(()=>{b=null})),b}function w(t,e,n){t.dispatchEvent(Tt(`${e?"intro":"outro"}${n}`))}const H=new Set;let $;function Qt(){$={r:0,c:[],p:$}}function Xt(){$.r||A($.c),$=$.p}function Lt(t,e){t&&t.i&&(H.delete(t),t.i(e))}function Yt(t,e,n,i){if(t&&t.o){if(H.has(t))return;H.add(t),$.c.push(()=>{H.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const V={duration:0};function Zt(t,e,n){const i={direction:"in"};let s=e(t,n,i),c=!1,r,l,a=0;function o(){r&&D(t,r)}function _(){const{delay:h=0,duration:p=300,easing:u=z,tick:d=N,css:m}=s||V;m&&(r=k(t,0,1,p,h,u,m,a++)),d(0,1);const y=I()+h,x=y+p;l&&l.abort(),c=!0,C(()=>w(t,!0,"start")),l=q(v=>{if(c){if(v>=x)return d(1,0),w(t,!0,"end"),o(),c=!1;if(v>=y){const E=u((v-y)/p);d(E,1-E)}}return c})}let f=!1;return{start(){f||(f=!0,D(t),L(s)?(s=s(i),U().then(_)):_())},invalidate(){f=!1},end(){c&&(o(),c=!1)}}}function te(t,e,n){const i={direction:"out"};let s=e(t,n,i),c=!0,r;const l=$;l.r+=1;let a;function o(){const{delay:_=0,duration:f=300,easing:h=z,tick:p=N,css:u}=s||V;u&&(r=k(t,1,0,f,_,h,u));const d=I()+_,m=d+f;C(()=>w(t,!1,"start")),"inert"in t&&(a=t.inert,t.inert=!0),q(y=>{if(c){if(y>=m)return p(0,1),w(t,!1,"end"),--l.r||A(l.c),!1;if(y>=d){const x=h((y-d)/f);p(1-x,x)}}return c})}return L(s)?U().then(()=>{s=s(i),o()}):o(),{end(_){_&&"inert"in t&&(t.inert=a),_&&s.tick&&s.tick(1,0),c&&(r&&D(t,r),c=!1)}}}function ee(t,e,n,i){let c=e(t,n,{direction:"both"}),r=i?0:1,l=null,a=null,o=null,_;function f(){o&&D(t,o)}function h(u,d){const m=u.b-r;return d*=Math.abs(m),{a:r,b:u.b,d:m,duration:d,start:u.start,end:u.start+d,group:u.group}}function p(u){const{delay:d=0,duration:m=300,easing:y=z,tick:x=N,css:v}=c||V,E={start:I()+d,b:u};u||(E.group=$,$.r+=1),"inert"in t&&(u?_!==void 0&&(t.inert=_):(_=t.inert,t.inert=!0)),l||a?a=E:(v&&(f(),o=k(t,r,u,m,d,y,v)),u&&x(0,1),l=h(E,m),C(()=>w(t,u,"start")),q(M=>{if(a&&M>a.start&&(l=h(a,m),a=null,w(t,l.b,"start"),v&&(f(),o=k(t,r,l.b,l.duration,0,y,c.css))),l){if(M>=l.end)x(r=l.b,1-r),w(t,l.b,"end"),a||(l.b?f():--l.group.r||A(l.group.c)),l=null;else if(M>=l.start){const et=M-l.start;r=l.a+l.d*y(et/l.duration),x(r,1-r)}}return!!(l||a)}))}return{run(u){L(c)?U().then(()=>{c=c({direction:u?"in":"out"}),p(u)}):p(u)},end(){f(),l=a=null}}}function ne(t){t&&t.c()}function ie(t,e){t&&t.l(e)}function Mt(t,e,n){const{fragment:i,after_update:s}=t.$$;i&&i.m(e,n),C(()=>{const c=t.$$.on_mount.map(ct).filter(L);t.$$.on_destroy?t.$$.on_destroy.push(...c):A(c),t.$$.on_mount=[]}),s.forEach(C)}function Ht(t,e){const n=t.$$;n.fragment!==null&&(lt(n.after_update),A(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Pt(t,e){t.$$.dirty[0]===-1&&(ot.push(t),ft(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function se(t,e,n,i,s,c,r=null,l=[-1]){const a=at;J(t);const o=t.$$={fragment:null,ctx:[],props:c,update:N,not_equal:s,bound:W(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:W(),dirty:l,skip_bound:!1,root:e.target||a.$$.root};r&&r(o.root);let _=!1;if(o.ctx=n?n(t,e.props||{},(f,h,...p)=>{const u=p.length?p[0]:h;return o.ctx&&s(o.ctx[f],o.ctx[f]=u)&&(!o.skip_bound&&o.bound[f]&&o.bound[f](u),_&&Pt(t,f)),h}):[],o.update(),_=!0,A(o.before_update),o.fragment=i?i(o.ctx):!1,e.target){if(e.hydrate){ut();const f=wt(e.target);o.fragment&&o.fragment.l(f),f.forEach(S)}else o.fragment&&o.fragment.c();e.intro&&Lt(t.$$.fragment),Mt(t,e.target,e.anchor),_t(),st()}J(a)}class re{constructor(){g(this,"$$");g(this,"$$set")}$destroy(){Ht(this,1),this.$destroy=N}$on(e,n){if(!L(n))return N;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!rt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Bt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Bt);export{Ut as A,Jt as B,It as C,ee as D,Zt as E,te as F,j as H,re as S,wt as a,Et as b,Ft as c,S as d,F as e,Gt as f,xt as g,$t as h,se as i,Vt as j,Lt as k,Yt as l,qt as m,Ot as n,Xt as o,ne as p,ie as q,Mt as r,jt as s,G as t,Ht as u,Qt as v,zt as w,Wt as x,Kt as y,Rt as z};