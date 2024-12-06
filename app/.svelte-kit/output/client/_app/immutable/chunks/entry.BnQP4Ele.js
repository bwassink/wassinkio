import{t as le,o as fe}from"./scheduler.BJrbY8Dn.js";import{w as yt}from"./index.CxsFIwBe.js";new URL("sveltekit-internal://");function ue(t,n){return t==="/"||n==="ignore"?t:n==="never"?t.endsWith("/")?t.slice(0,-1):t:n==="always"&&!t.endsWith("/")?t+"/":t}function de(t){return t.split("%25").map(decodeURI).join("%25")}function he(t){for(const n in t)t[n]=decodeURIComponent(t[n]);return t}function ut({href:t}){return t.split("#")[0]}const pe=["href","pathname","search","toString","toJSON"];function ge(t,n,e){const a=new URL(t);Object.defineProperty(a,"searchParams",{value:new Proxy(a.searchParams,{get(r,o){if(o==="get"||o==="getAll"||o==="has")return i=>(e(i),r[o](i));n();const s=Reflect.get(r,o);return typeof s=="function"?s.bind(r):s}}),enumerable:!0,configurable:!0});for(const r of pe)Object.defineProperty(a,r,{get(){return n(),t[r]},enumerable:!0,configurable:!0});return a}const me="/__data.json",_e=".html__data.json";function ye(t){return t.endsWith(".html")?t.replace(/\.html$/,_e):t.replace(/\/$/,"")+me}function we(...t){let n=5381;for(const e of t)if(typeof e=="string"){let a=e.length;for(;a;)n=n*33^e.charCodeAt(--a)}else if(ArrayBuffer.isView(e)){const a=new Uint8Array(e.buffer,e.byteOffset,e.byteLength);let r=a.length;for(;r;)n=n*33^a[--r]}else throw new TypeError("value must be a string or TypedArray");return(n>>>0).toString(36)}function ve(t){const n=atob(t),e=new Uint8Array(n.length);for(let a=0;a<n.length;a++)e[a]=n.charCodeAt(a);return e.buffer}const Ft=window.fetch;window.fetch=(t,n)=>((t instanceof Request?t.method:(n==null?void 0:n.method)||"GET")!=="GET"&&q.delete(wt(t)),Ft(t,n));const q=new Map;function be(t,n){const e=wt(t,n),a=document.querySelector(e);if(a!=null&&a.textContent){let{body:r,...o}=JSON.parse(a.textContent);const s=a.getAttribute("data-ttl");return s&&q.set(e,{body:r,init:o,ttl:1e3*Number(s)}),a.getAttribute("data-b64")!==null&&(r=ve(r)),Promise.resolve(new Response(r,o))}return window.fetch(t,n)}function Ee(t,n,e){if(q.size>0){const a=wt(t,e),r=q.get(a);if(r){if(performance.now()<r.ttl&&["default","force-cache","only-if-cached",void 0].includes(e==null?void 0:e.cache))return new Response(r.body,r.init);q.delete(a)}}return window.fetch(n,e)}function wt(t,n){let a=`script[data-sveltekit-fetched][data-url=${JSON.stringify(t instanceof Request?t.url:t)}]`;if(n!=null&&n.headers||n!=null&&n.body){const r=[];n.headers&&r.push([...new Headers(n.headers)].join(",")),n.body&&(typeof n.body=="string"||ArrayBuffer.isView(n.body))&&r.push(n.body),a+=`[data-hash="${we(...r)}"]`}return a}const ke=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Se(t){const n=[];return{pattern:t==="/"?/^\/$/:new RegExp(`^${Re(t).map(a=>{const r=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(a);if(r)return n.push({name:r[1],matcher:r[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const o=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(a);if(o)return n.push({name:o[1],matcher:o[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!a)return;const s=a.split(/\[(.+?)\](?!\])/);return"/"+s.map((c,f)=>{if(f%2){if(c.startsWith("x+"))return dt(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return dt(String.fromCharCode(...c.slice(2).split("-").map(l=>parseInt(l,16))));const u=ke.exec(c),[,h,g,d,_]=u;return n.push({name:d,matcher:_,optional:!!h,rest:!!g,chained:g?f===1&&s[0]==="":!1}),g?"(.*?)":h?"([^/]*)?":"([^/]+?)"}return dt(c)}).join("")}).join("")}/?$`),params:n}}function Ae(t){return!/^\([^)]+\)$/.test(t)}function Re(t){return t.slice(1).split("/").filter(Ae)}function Ie(t,n,e){const a={},r=t.slice(1),o=r.filter(i=>i!==void 0);let s=0;for(let i=0;i<n.length;i+=1){const c=n[i];let f=r[i-s];if(c.chained&&c.rest&&s&&(f=r.slice(i-s,i+1).filter(u=>u).join("/"),s=0),f===void 0){c.rest&&(a[c.name]="");continue}if(!c.matcher||e[c.matcher](f)){a[c.name]=f;const u=n[i+1],h=r[i+1];u&&!u.rest&&u.optional&&h&&c.chained&&(s=0),!u&&!h&&Object.keys(a).length===o.length&&(s=0);continue}if(c.optional&&c.chained){s++;continue}return}if(!s)return a}function dt(t){return t.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Le({nodes:t,server_loads:n,dictionary:e,matchers:a}){const r=new Set(n);return Object.entries(e).map(([i,[c,f,u]])=>{const{pattern:h,params:g}=Se(i),d={id:i,exec:_=>{const l=h.exec(_);if(l)return Ie(l,g,a)},errors:[1,...u||[]].map(_=>t[_]),layouts:[0,...f||[]].map(s),leaf:o(c)};return d.errors.length=d.layouts.length=Math.max(d.errors.length,d.layouts.length),d});function o(i){const c=i<0;return c&&(i=~i),[c,t[i]]}function s(i){return i===void 0?i:[r.has(i),t[i]]}}function Mt(t,n=JSON.parse){try{return n(sessionStorage[t])}catch{}}function Tt(t,n,e=JSON.stringify){const a=e(n);try{sessionStorage[t]=a}catch{}}var Ct;const P=((Ct=globalThis.__sveltekit_1a1rbyp)==null?void 0:Ct.base)??"";var Vt;const Pe=((Vt=globalThis.__sveltekit_1a1rbyp)==null?void 0:Vt.assets)??P,Te="1733180334096",qt="sveltekit:snapshot",Gt="sveltekit:scroll",Ht="sveltekit:states",Ue="sveltekit:pageurl",$="sveltekit:history",H="sveltekit:navigation",W={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},Y=location.origin;function Bt(t){if(t instanceof URL)return t;let n=document.baseURI;if(!n){const e=document.getElementsByTagName("base");n=e.length?e[0].href:document.URL}return new URL(t,n)}function vt(){return{x:pageXOffset,y:pageYOffset}}function j(t,n){return t.getAttribute(`data-sveltekit-${n}`)}const Ut={...W,"":W.hover};function Kt(t){let n=t.assignedSlot??t.parentNode;return(n==null?void 0:n.nodeType)===11&&(n=n.host),n}function Yt(t,n){for(;t&&t!==n;){if(t.nodeName.toUpperCase()==="A"&&t.hasAttribute("href"))return t;t=Kt(t)}}function gt(t,n){let e;try{e=new URL(t instanceof SVGAElement?t.href.baseVal:t.href,document.baseURI)}catch{}const a=t instanceof SVGAElement?t.target.baseVal:t.target,r=!e||!!a||nt(e,n)||(t.getAttribute("rel")||"").split(/\s+/).includes("external"),o=(e==null?void 0:e.origin)===Y&&t.hasAttribute("download");return{url:e,external:r,target:a,download:o}}function z(t){let n=null,e=null,a=null,r=null,o=null,s=null,i=t;for(;i&&i!==document.documentElement;)a===null&&(a=j(i,"preload-code")),r===null&&(r=j(i,"preload-data")),n===null&&(n=j(i,"keepfocus")),e===null&&(e=j(i,"noscroll")),o===null&&(o=j(i,"reload")),s===null&&(s=j(i,"replacestate")),i=Kt(i);function c(f){switch(f){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Ut[a??"off"],preload_data:Ut[r??"off"],keepfocus:c(n),noscroll:c(e),reload:c(o),replace_state:c(s)}}function xt(t){const n=yt(t);let e=!0;function a(){e=!0,n.update(s=>s)}function r(s){e=!1,n.set(s)}function o(s){let i;return n.subscribe(c=>{(i===void 0||e&&c!==i)&&s(i=c)})}return{notify:a,set:r,subscribe:o}}function xe(){const{set:t,subscribe:n}=yt(!1);let e;async function a(){clearTimeout(e);try{const r=await fetch(`${Pe}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!r.ok)return!1;const s=(await r.json()).version!==Te;return s&&(t(!0),clearTimeout(e)),s}catch{return!1}}return{subscribe:n,check:a}}function nt(t,n){return t.origin!==Y||!t.pathname.startsWith(n)}const Ne=-1,Oe=-2,je=-3,$e=-4,De=-5,Ce=-6;function Ve(t,n){if(typeof t=="number")return r(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const e=t,a=Array(e.length);function r(o,s=!1){if(o===Ne)return;if(o===je)return NaN;if(o===$e)return 1/0;if(o===De)return-1/0;if(o===Ce)return-0;if(s)throw new Error("Invalid input");if(o in a)return a[o];const i=e[o];if(!i||typeof i!="object")a[o]=i;else if(Array.isArray(i))if(typeof i[0]=="string"){const c=i[0],f=n==null?void 0:n[c];if(f)return a[o]=f(r(i[1]));switch(c){case"Date":a[o]=new Date(i[1]);break;case"Set":const u=new Set;a[o]=u;for(let d=1;d<i.length;d+=1)u.add(r(i[d]));break;case"Map":const h=new Map;a[o]=h;for(let d=1;d<i.length;d+=2)h.set(r(i[d]),r(i[d+1]));break;case"RegExp":a[o]=new RegExp(i[1],i[2]);break;case"Object":a[o]=Object(i[1]);break;case"BigInt":a[o]=BigInt(i[1]);break;case"null":const g=Object.create(null);a[o]=g;for(let d=1;d<i.length;d+=2)g[i[d]]=r(i[d+1]);break;default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(i.length);a[o]=c;for(let f=0;f<i.length;f+=1){const u=i[f];u!==Oe&&(c[f]=r(u))}}else{const c={};a[o]=c;for(const f in i){const u=i[f];c[f]=r(u)}}return a[o]}return r(0)}const Jt=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...Jt];const Fe=new Set([...Jt]);[...Fe];function Me(t){return t.filter(n=>n!=null)}class at{constructor(n,e){this.status=n,typeof e=="string"?this.body={message:e}:e?this.body=e:this.body={message:`Error: ${n}`}}toString(){return JSON.stringify(this.body)}}class Wt{constructor(n,e){this.status=n,this.location=e}}class bt extends Error{constructor(n,e,a){super(a),this.status=n,this.text=e}}const qe="x-sveltekit-invalidated",Ge="x-sveltekit-trailing-slash";function X(t){return t instanceof at||t instanceof bt?t.status:500}function He(t){return t instanceof bt?t.text:"Internal Error"}const O=Mt(Gt)??{},B=Mt(qt)??{},U={url:xt({}),page:xt({}),navigating:yt(null),updated:xe()};function Et(t){O[t]=vt()}function Be(t,n){let e=t+1;for(;O[e];)delete O[e],e+=1;for(e=n+1;B[e];)delete B[e],e+=1}function C(t){return location.href=t.href,new Promise(()=>{})}function Nt(){}let rt,mt,Z,T,_t,F;const zt=[],Q=[];let R=null;const Xt=[],Ke=[];let N=[],y={branch:[],error:null,url:null},kt=!1,tt=!1,Ot=!0,K=!1,M=!1,Zt=!1,ot=!1,it,S,L,I,V;const G=new Set;let ht;async function on(t,n,e){var r,o;document.URL!==location.href&&(location.href=location.href),F=t,rt=Le(t),T=document.documentElement,_t=n,mt=t.nodes[0],Z=t.nodes[1],mt(),Z(),S=(r=history.state)==null?void 0:r[$],L=(o=history.state)==null?void 0:o[H],S||(S=L=Date.now(),history.replaceState({...history.state,[$]:S,[H]:L},""));const a=O[S];a&&(history.scrollRestoration="manual",scrollTo(a.x,a.y)),e?await en(_t,e):Qe(location.href,{replaceState:!0}),tn()}async function Ye(){if(await(ht||(ht=Promise.resolve())),!ht)return;ht=null;const t=ct(y.url,!0);R=null;const n=V={},e=t&&await It(t);if(!(!e||n!==V)){if(e.type==="redirect")return St(new URL(e.location,y.url).href,{},1,n);e.props.page&&(I=e.props.page),y=e.state,Qt(),it.$set(e.props)}}function Qt(){zt.length=0,ot=!1}function te(t){Q.some(n=>n==null?void 0:n.snapshot)&&(B[t]=Q.map(n=>{var e;return(e=n==null?void 0:n.snapshot)==null?void 0:e.capture()}))}function ee(t){var n;(n=B[t])==null||n.forEach((e,a)=>{var r,o;(o=(r=Q[a])==null?void 0:r.snapshot)==null||o.restore(e)})}function jt(){Et(S),Tt(Gt,O),te(L),Tt(qt,B)}async function St(t,n,e,a){return J({type:"goto",url:Bt(t),keepfocus:n.keepFocus,noscroll:n.noScroll,replace_state:n.replaceState,state:n.state,redirect_count:e,nav_token:a,accept:()=>{n.invalidateAll&&(ot=!0)}})}async function Je(t){if(t.id!==(R==null?void 0:R.id)){const n={};G.add(n),R={id:t.id,token:n,promise:It({...t,preload:n}).then(e=>(G.delete(n),e.type==="loaded"&&e.state.error&&(R=null),e))}}return R.promise}async function pt(t){const n=rt.find(e=>e.exec(ae(t)));n&&await Promise.all([...n.layouts,n.leaf].map(e=>e==null?void 0:e[1]()))}function ne(t,n,e){var o;y=t.state;const a=document.querySelector("style[data-sveltekit]");a&&a.remove(),I=t.props.page,it=new F.root({target:n,props:{...t.props,stores:U,components:Q},hydrate:e}),ee(L);const r={from:null,to:{params:y.params,route:{id:((o=y.route)==null?void 0:o.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};N.forEach(s=>s(r)),tt=!0}function et({url:t,params:n,branch:e,status:a,error:r,route:o,form:s}){let i="never";if(P&&(t.pathname===P||t.pathname===P+"/"))i="always";else for(const d of e)(d==null?void 0:d.slash)!==void 0&&(i=d.slash);t.pathname=ue(t.pathname,i),t.search=t.search;const c={type:"loaded",state:{url:t,params:n,branch:e,error:r,route:o},props:{constructors:Me(e).map(d=>d.node.component),page:I}};s!==void 0&&(c.props.form=s);let f={},u=!I,h=0;for(let d=0;d<Math.max(e.length,y.branch.length);d+=1){const _=e[d],l=y.branch[d];(_==null?void 0:_.data)!==(l==null?void 0:l.data)&&(u=!0),_&&(f={...f,..._.data},u&&(c.props[`data_${h}`]=f),h+=1)}return(!y.url||t.href!==y.url.href||y.error!==r||s!==void 0&&s!==I.form||u)&&(c.props.page={error:r,params:n,route:{id:(o==null?void 0:o.id)??null},state:{},status:a,url:new URL(t),form:s??null,data:u?f:I.data}),c}async function At({loader:t,parent:n,url:e,params:a,route:r,server_data_node:o}){var u,h,g;let s=null,i=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},f=await t();if((u=f.universal)!=null&&u.load){let d=function(...l){for(const m of l){const{href:b}=new URL(m,e);c.dependencies.add(b)}};const _={route:new Proxy(r,{get:(l,m)=>(i&&(c.route=!0),l[m])}),params:new Proxy(a,{get:(l,m)=>(i&&c.params.add(m),l[m])}),data:(o==null?void 0:o.data)??null,url:ge(e,()=>{i&&(c.url=!0)},l=>{i&&c.search_params.add(l)}),async fetch(l,m){let b;l instanceof Request?(b=l.url,m={body:l.method==="GET"||l.method==="HEAD"?void 0:await l.blob(),cache:l.cache,credentials:l.credentials,headers:l.headers,integrity:l.integrity,keepalive:l.keepalive,method:l.method,mode:l.mode,redirect:l.redirect,referrer:l.referrer,referrerPolicy:l.referrerPolicy,signal:l.signal,...m}):b=l;const A=new URL(b,e);return i&&d(A.href),A.origin===e.origin&&(b=A.href.slice(e.origin.length)),tt?Ee(b,A.href,m):be(b,m)},setHeaders:()=>{},depends:d,parent(){return i&&(c.parent=!0),n()},untrack(l){i=!1;try{return l()}finally{i=!0}}};s=await f.universal.load.call(null,_)??null}return{node:f,loader:t,server:o,universal:(h=f.universal)!=null&&h.load?{type:"data",data:s,uses:c}:null,data:s??(o==null?void 0:o.data)??null,slash:((g=f.universal)==null?void 0:g.trailingSlash)??(o==null?void 0:o.slash)}}function $t(t,n,e,a,r,o){if(ot)return!0;if(!r)return!1;if(r.parent&&t||r.route&&n||r.url&&e)return!0;for(const s of r.search_params)if(a.has(s))return!0;for(const s of r.params)if(o[s]!==y.params[s])return!0;for(const s of r.dependencies)if(zt.some(i=>i(new URL(s))))return!0;return!1}function Rt(t,n){return(t==null?void 0:t.type)==="data"?t:(t==null?void 0:t.type)==="skip"?n??null:null}function We(t,n){if(!t)return new Set(n.searchParams.keys());const e=new Set([...t.searchParams.keys(),...n.searchParams.keys()]);for(const a of e){const r=t.searchParams.getAll(a),o=n.searchParams.getAll(a);r.every(s=>o.includes(s))&&o.every(s=>r.includes(s))&&e.delete(a)}return e}function Dt({error:t,url:n,route:e,params:a}){return{type:"loaded",state:{error:t,url:n,route:e,params:a,branch:[]},props:{page:I,constructors:[]}}}async function It({id:t,invalidating:n,url:e,params:a,route:r,preload:o}){if((R==null?void 0:R.id)===t)return G.delete(R.token),R.promise;const{errors:s,layouts:i,leaf:c}=r,f=[...i,c];s.forEach(p=>p==null?void 0:p().catch(()=>{})),f.forEach(p=>p==null?void 0:p[1]().catch(()=>{}));let u=null;const h=y.url?t!==y.url.pathname+y.url.search:!1,g=y.route?r.id!==y.route.id:!1,d=We(y.url,e);let _=!1;const l=f.map((p,v)=>{var x;const E=y.branch[v],k=!!(p!=null&&p[0])&&((E==null?void 0:E.loader)!==p[1]||$t(_,g,h,d,(x=E.server)==null?void 0:x.uses,a));return k&&(_=!0),k});if(l.some(Boolean)){try{u=await ie(e,l)}catch(p){const v=await D(p,{url:e,params:a,route:{id:t}});return G.has(o)?Dt({error:v,url:e,params:a,route:r}):st({status:X(p),error:v,url:e,route:r})}if(u.type==="redirect")return u}const m=u==null?void 0:u.nodes;let b=!1;const A=f.map(async(p,v)=>{var lt;if(!p)return;const E=y.branch[v],k=m==null?void 0:m[v];if((!k||k.type==="skip")&&p[1]===(E==null?void 0:E.loader)&&!$t(b,g,h,d,(lt=E.universal)==null?void 0:lt.uses,a))return E;if(b=!0,(k==null?void 0:k.type)==="error")throw k;return At({loader:p[1],url:e,params:a,route:r,parent:async()=>{var Pt;const Lt={};for(let ft=0;ft<v;ft+=1)Object.assign(Lt,(Pt=await A[ft])==null?void 0:Pt.data);return Lt},server_data_node:Rt(k===void 0&&p[0]?{type:"skip"}:k??null,p[0]?E==null?void 0:E.server:void 0)})});for(const p of A)p.catch(()=>{});const w=[];for(let p=0;p<f.length;p+=1)if(f[p])try{w.push(await A[p])}catch(v){if(v instanceof Wt)return{type:"redirect",location:v.location};if(G.has(o))return Dt({error:await D(v,{params:a,url:e,route:{id:r.id}}),url:e,params:a,route:r});let E=X(v),k;if(m!=null&&m.includes(v))E=v.status??E,k=v.error;else if(v instanceof at)k=v.body;else{if(await U.updated.check())return await C(e);k=await D(v,{params:a,url:e,route:{id:r.id}})}const x=await ze(p,w,s);return x?et({url:e,params:a,branch:w.slice(0,x.idx).concat(x.node),status:E,error:k,route:r}):await oe(e,{id:r.id},k,E)}else w.push(void 0);return et({url:e,params:a,branch:w,status:200,error:null,route:r,form:n?void 0:null})}async function ze(t,n,e){for(;t--;)if(e[t]){let a=t;for(;!n[a];)a-=1;try{return{idx:a+1,node:{node:await e[t](),loader:e[t],data:{},server:null,universal:null}}}catch{continue}}}async function st({status:t,error:n,url:e,route:a}){const r={};let o=null;if(F.server_loads[0]===0)try{const f=await ie(e,[!0]);if(f.type!=="data"||f.nodes[0]&&f.nodes[0].type!=="data")throw 0;o=f.nodes[0]??null}catch{(e.origin!==Y||e.pathname!==location.pathname||kt)&&await C(e)}const i=await At({loader:mt,url:e,params:r,route:a,parent:()=>Promise.resolve({}),server_data_node:Rt(o)}),c={node:await Z(),loader:Z,universal:null,server:null,data:null};return et({url:e,params:r,branch:[i,c],status:t,error:n,route:null})}function ct(t,n){if(!t||nt(t,P))return;let e;try{e=F.hooks.reroute({url:new URL(t)})??t.pathname}catch{return}const a=ae(e);for(const r of rt){const o=r.exec(a);if(o)return{id:t.pathname+t.search,invalidating:n,route:r,params:he(o),url:t}}}function ae(t){return de(t.slice(P.length)||"/")}function re({url:t,type:n,intent:e,delta:a}){let r=!1;const o=ce(y,e,t,n);a!==void 0&&(o.navigation.delta=a);const s={...o.navigation,cancel:()=>{r=!0,o.reject(new Error("navigation cancelled"))}};return K||Xt.forEach(i=>i(s)),r?null:o}async function J({type:t,url:n,popped:e,keepfocus:a,noscroll:r,replace_state:o,state:s={},redirect_count:i=0,nav_token:c={},accept:f=Nt,block:u=Nt}){const h=ct(n,!1),g=re({url:n,type:t,delta:e==null?void 0:e.delta,intent:h});if(!g){u();return}const d=S,_=L;f(),K=!0,tt&&U.navigating.set(g.navigation),V=c;let l=h&&await It(h);if(!l){if(nt(n,P))return await C(n);l=await oe(n,{id:null},await D(new bt(404,"Not Found",`Not found: ${n.pathname}`),{url:n,params:{},route:{id:null}}),404)}if(n=(h==null?void 0:h.url)||n,V!==c)return g.reject(new Error("navigation aborted")),!1;if(l.type==="redirect")if(i>=20)l=await st({status:500,error:await D(new Error("Redirect loop"),{url:n,params:{},route:{id:null}}),url:n,route:{id:null}});else return St(new URL(l.location,n).href,{},i+1,c),!1;else l.props.page.status>=400&&await U.updated.check()&&await C(n);if(Qt(),Et(d),te(_),l.props.page.url.pathname!==n.pathname&&(n.pathname=l.props.page.url.pathname),s=e?e.state:s,!e){const w=o?0:1,p={[$]:S+=w,[H]:L+=w,[Ht]:s};(o?history.replaceState:history.pushState).call(history,p,"",n),o||Be(S,L)}if(R=null,l.props.page.state=s,tt){y=l.state,l.props.page&&(l.props.page.url=n);const w=(await Promise.all(Ke.map(p=>p(g.navigation)))).filter(p=>typeof p=="function");if(w.length>0){let p=function(){N=N.filter(v=>!w.includes(v))};w.push(p),N.push(...w)}it.$set(l.props),Zt=!0}else ne(l,_t,!1);const{activeElement:m}=document;await le();const b=e?e.scroll:r?vt():null;if(Ot){const w=n.hash&&document.getElementById(decodeURIComponent(n.hash.slice(1)));b?scrollTo(b.x,b.y):w?w.scrollIntoView():scrollTo(0,0)}const A=document.activeElement!==m&&document.activeElement!==document.body;!a&&!A&&nn(),Ot=!0,l.props.page&&(I=l.props.page),K=!1,t==="popstate"&&ee(L),g.fulfil(void 0),N.forEach(w=>w(g.navigation)),U.navigating.set(null)}async function oe(t,n,e,a){return t.origin===Y&&t.pathname===location.pathname&&!kt?await st({status:a,error:e,url:t,route:n}):await C(t)}function Xe(){let t;T.addEventListener("mousemove",o=>{const s=o.target;clearTimeout(t),t=setTimeout(()=>{a(s,2)},20)});function n(o){a(o.composedPath()[0],1)}T.addEventListener("mousedown",n),T.addEventListener("touchstart",n,{passive:!0});const e=new IntersectionObserver(o=>{for(const s of o)s.isIntersecting&&(pt(s.target.href),e.unobserve(s.target))},{threshold:0});function a(o,s){const i=Yt(o,T);if(!i)return;const{url:c,external:f,download:u}=gt(i,P);if(f||u)return;const h=z(i);if(!h.reload)if(s<=h.preload_data){const g=ct(c,!1);g&&Je(g)}else s<=h.preload_code&&pt(c.pathname)}function r(){e.disconnect();for(const o of T.querySelectorAll("a")){const{url:s,external:i,download:c}=gt(o,P);if(i||c)continue;const f=z(o);f.reload||(f.preload_code===W.viewport&&e.observe(o),f.preload_code===W.eager&&pt(s.pathname))}}N.push(r),r()}function D(t,n){if(t instanceof at)return t.body;const e=X(t),a=He(t);return F.hooks.handleError({error:t,event:n,status:e,message:a})??{message:a}}function Ze(t,n){fe(()=>(t.push(n),()=>{const e=t.indexOf(n);t.splice(e,1)}))}function sn(t){Ze(N,t)}function Qe(t,n={}){return t=Bt(t),t.origin!==Y?Promise.reject(new Error("goto: invalid URL")):St(t,n,0)}function cn(){return ot=!0,Ye()}function tn(){var n;history.scrollRestoration="manual",addEventListener("beforeunload",e=>{let a=!1;if(jt(),!K){const r=ce(y,void 0,null,"leave"),o={...r.navigation,cancel:()=>{a=!0,r.reject(new Error("navigation cancelled"))}};Xt.forEach(s=>s(o))}a?(e.preventDefault(),e.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&jt()}),(n=navigator.connection)!=null&&n.saveData||Xe(),T.addEventListener("click",async e=>{var g;if(e.button||e.which!==1||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.defaultPrevented)return;const a=Yt(e.composedPath()[0],T);if(!a)return;const{url:r,external:o,target:s,download:i}=gt(a,P);if(!r)return;if(s==="_parent"||s==="_top"){if(window.parent!==window)return}else if(s&&s!=="_self")return;const c=z(a);if(!(a instanceof SVGAElement)&&r.protocol!==location.protocol&&!(r.protocol==="https:"||r.protocol==="http:")||i)return;if(o||c.reload){re({url:r,type:"link"})?K=!0:e.preventDefault();return}const[u,h]=r.href.split("#");if(h!==void 0&&u===ut(location)){const[,d]=y.url.href.split("#");if(d===h){e.preventDefault(),h===""||h==="top"&&a.ownerDocument.getElementById("top")===null?window.scrollTo({top:0}):(g=a.ownerDocument.getElementById(h))==null||g.scrollIntoView();return}if(M=!0,Et(S),t(r),!c.replace_state)return;M=!1}e.preventDefault(),await new Promise(d=>{requestAnimationFrame(()=>{setTimeout(d,0)}),setTimeout(d,100)}),J({type:"link",url:r,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??r.href===location.href})}),T.addEventListener("submit",e=>{if(e.defaultPrevented)return;const a=HTMLFormElement.prototype.cloneNode.call(e.target),r=e.submitter;if(((r==null?void 0:r.formMethod)||a.method)!=="get")return;const s=new URL((r==null?void 0:r.hasAttribute("formaction"))&&(r==null?void 0:r.formAction)||a.action);if(nt(s,P))return;const i=e.target,c=z(i);if(c.reload)return;e.preventDefault(),e.stopPropagation();const f=new FormData(i),u=r==null?void 0:r.getAttribute("name");u&&f.append(u,(r==null?void 0:r.getAttribute("value"))??""),s.search=new URLSearchParams(f).toString(),J({type:"form",url:s,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??s.href===location.href})}),addEventListener("popstate",async e=>{var a;if((a=e.state)!=null&&a[$]){const r=e.state[$];if(V={},r===S)return;const o=O[r],s=e.state[Ht]??{},i=new URL(e.state[Ue]??location.href),c=e.state[H],f=ut(location)===ut(y.url);if(c===L&&(Zt||f)){t(i),O[S]=vt(),o&&scrollTo(o.x,o.y),s!==I.state&&(I={...I,state:s},it.$set({page:I})),S=r;return}const h=r-S;await J({type:"popstate",url:i,popped:{state:s,scroll:o,delta:h},accept:()=>{S=r,L=c},block:()=>{history.go(-h)},nav_token:V})}else if(!M){const r=new URL(location.href);t(r)}}),addEventListener("hashchange",()=>{M&&(M=!1,history.replaceState({...history.state,[$]:++S,[H]:L},"",location.href))});for(const e of document.querySelectorAll("link"))e.rel==="icon"&&(e.href=e.href);addEventListener("pageshow",e=>{e.persisted&&U.navigating.set(null)});function t(e){y.url=e,U.page.set({...I,url:e}),U.page.notify()}}async function en(t,{status:n=200,error:e,node_ids:a,params:r,route:o,data:s,form:i}){kt=!0;const c=new URL(location.href);({params:r={},route:o={id:null}}=ct(c,!1)||{});let f;try{const u=a.map(async(d,_)=>{const l=s[_];return l!=null&&l.uses&&(l.uses=se(l.uses)),At({loader:F.nodes[d],url:c,params:r,route:o,parent:async()=>{const m={};for(let b=0;b<_;b+=1)Object.assign(m,(await u[b]).data);return m},server_data_node:Rt(l)})}),h=await Promise.all(u),g=rt.find(({id:d})=>d===o.id);if(g){const d=g.layouts;for(let _=0;_<d.length;_++)d[_]||h.splice(_,0,void 0)}f=et({url:c,params:r,branch:h,status:n,error:e,form:i,route:g??null})}catch(u){if(u instanceof Wt){await C(new URL(u.location,location.href));return}f=await st({status:X(u),error:await D(u,{url:c,params:r,route:o}),url:c,route:o})}f.props.page&&(f.props.page.state={}),ne(f,t,!0)}async function ie(t,n){var r;const e=new URL(t);e.pathname=ye(t.pathname),t.pathname.endsWith("/")&&e.searchParams.append(Ge,"1"),e.searchParams.append(qe,n.map(o=>o?"1":"0").join(""));const a=await Ft(e.href);if(!a.ok){let o;throw(r=a.headers.get("content-type"))!=null&&r.includes("application/json")?o=await a.json():a.status===404?o="Not Found":a.status===500&&(o="Internal Error"),new at(a.status,o)}return new Promise(async o=>{var h;const s=new Map,i=a.body.getReader(),c=new TextDecoder;function f(g){return Ve(g,{Promise:d=>new Promise((_,l)=>{s.set(d,{fulfil:_,reject:l})})})}let u="";for(;;){const{done:g,value:d}=await i.read();if(g&&!u)break;for(u+=!d&&u?`
`:c.decode(d,{stream:!0});;){const _=u.indexOf(`
`);if(_===-1)break;const l=JSON.parse(u.slice(0,_));if(u=u.slice(_+1),l.type==="redirect")return o(l);if(l.type==="data")(h=l.nodes)==null||h.forEach(m=>{(m==null?void 0:m.type)==="data"&&(m.uses=se(m.uses),m.data=f(m.data))}),o(l);else if(l.type==="chunk"){const{id:m,data:b,error:A}=l,w=s.get(m);s.delete(m),A?w.reject(f(A)):w.fulfil(f(b))}}}})}function se(t){return{dependencies:new Set((t==null?void 0:t.dependencies)??[]),params:new Set((t==null?void 0:t.params)??[]),parent:!!(t!=null&&t.parent),route:!!(t!=null&&t.route),url:!!(t!=null&&t.url),search_params:new Set((t==null?void 0:t.search_params)??[])}}function nn(){const t=document.querySelector("[autofocus]");if(t)t.focus();else{const n=document.body,e=n.getAttribute("tabindex");n.tabIndex=-1,n.focus({preventScroll:!0,focusVisible:!1}),e!==null?n.setAttribute("tabindex",e):n.removeAttribute("tabindex");const a=getSelection();if(a&&a.type!=="None"){const r=[];for(let o=0;o<a.rangeCount;o+=1)r.push(a.getRangeAt(o));setTimeout(()=>{if(a.rangeCount===r.length){for(let o=0;o<a.rangeCount;o+=1){const s=r[o],i=a.getRangeAt(o);if(s.commonAncestorContainer!==i.commonAncestorContainer||s.startContainer!==i.startContainer||s.endContainer!==i.endContainer||s.startOffset!==i.startOffset||s.endOffset!==i.endOffset)return}a.removeAllRanges()}})}}}function ce(t,n,e,a){var c,f;let r,o;const s=new Promise((u,h)=>{r=u,o=h});return s.catch(()=>{}),{navigation:{from:{params:t.params,route:{id:((c=t.route)==null?void 0:c.id)??null},url:t.url},to:e&&{params:(n==null?void 0:n.params)??null,route:{id:((f=n==null?void 0:n.route)==null?void 0:f.id)??null},url:e},willUnload:!n,type:a,complete:s},fulfil:r,reject:o}}export{sn as a,on as b,Qe as g,cn as i,U as s};