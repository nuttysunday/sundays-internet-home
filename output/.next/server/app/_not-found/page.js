(()=>{var e={};e.id=409,e.ids=[409],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},36012:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>p,originalPathname:()=>c,pages:()=>u,routeModule:()=>f,tree:()=>d}),r(7352),r(35866),r(68295);var n=r(23191),o=r(88716),s=r(37922),i=r.n(s),a=r(95231),l={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>a[e]);r.d(t,l);let d=["",{children:["/_not-found",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.t.bind(r,35866,23)),"next/dist/client/components/not-found-error"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,68295)),"/Users/sunday/brainfuck/sundays-internet-home/src/app/layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,35866,23)),"next/dist/client/components/not-found-error"]}],u=[],c="/_not-found/page",p={require:r,loadChunk:()=>Promise.resolve()},f=new n.AppPageRouteModule({definition:{kind:o.x.APP_PAGE,page:"/_not-found/page",pathname:"/_not-found",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},34510:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,12994,23)),Promise.resolve().then(r.t.bind(r,96114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,79671,23)),Promise.resolve().then(r.t.bind(r,41868,23)),Promise.resolve().then(r.t.bind(r,84759,23))},95262:(e,t,r)=>{Promise.resolve().then(r.bind(r,97567))},97567:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>b});var n=r(10326),o=r(17577);r(23824);var s=r(90434),i=r(93402),a=r(52646),l=r(35047);let d=({sx:e})=>{let t=(0,l.usePathname)();return n.jsx(i.Z,{sx:{...e,display:"flex",gap:{xs:"1rem",sm:"1rem",md:"3rem"},flexDirection:"row",justifyContent:{xs:"space-between"}},children:["ABOUT","WORK","SKILLS","PROJECTS","BLOGS"].map(e=>n.jsx(s.default,{href:"ABOUT"===e?"/":`/${e.toLowerCase()}`,passHref:!0,children:n.jsx(a.Z,{sx:{color:t===("ABOUT"===e?"/":`/${e.toLowerCase()}`)?"white":void 0,fontStyle:t===("ABOUT"===e?"/":`/${e.toLowerCase()}`)?"normal":"italic",padding:"0.5rem 0",fontSize:{xs:"0.8rem",sm:"1rem"},"&:hover":{color:"gray"}},children:e})},e))})};var u=r(87514),c=r(52188),p=r(67286),f=r(7281),m=r(36249),x=r(22449);let h=[{href:"https://github.com/nuttysunday",icon:p.Z,label:"GitHub"},{href:"https://www.linkedin.com/in/shivam-ghodke/",icon:f.Z,label:"LinkedIn"},{href:"mailto:mail@shivam.foo",icon:m.Z,label:"Email"},{href:"https://docs.google.com/document/d/e/2PACX-1vT02vaxSFn4V0yvp61oHaj73079Y-VVu3jWX-DXa-69OOjcSHdLgowbyEShv6pVmVpNYPb4JpTsz8jg/pub",icon:x.Z,label:"Resume"}],g=({sx:e})=>n.jsx(i.Z,{sx:{...e,display:"flex",gap:2,justifyContent:{xs:"space-between"}},children:h.map(({href:e,icon:t,label:r},o)=>n.jsx(u.Z,{title:r,arrow:!0,children:n.jsx(c.Z,{href:e,target:"_blank",rel:"noopener noreferrer",children:n.jsx(i.Z,{sx:{padding:1,paddingRight:3===o?0:1,borderRadius:"50%",transition:"transform 0.3s ease","&:hover":{transform:"scale(1.5)"},paddingLeft:{xs:0===o?0:1}},children:n.jsx(t,{sx:{color:"white"}})})})},o))}),b=({children:e})=>{let t;let[r,s]=(0,o.useState)(!1),a=()=>{s(!0),t&&clearTimeout(t),t=setTimeout(()=>{s(!1)},800)};return(0,o.useEffect)(()=>(window.addEventListener("scroll",a),()=>{window.removeEventListener("scroll",a),t&&clearTimeout(t)}),[]),n.jsx("html",{lang:"en",children:n.jsx("body",{children:(0,n.jsxs)(i.Z,{className:"font-mono text-indigo-300",sx:{width:{xs:"100%",lg:"70%"},maxWidth:"1200px",margin:"0 auto",display:"flex",flexDirection:"column",position:"relative"},children:[(0,n.jsxs)(i.Z,{sx:{position:"sticky",top:0,zIndex:1e3,marginY:{xs:"1rem"},padding:{xs:"1rem"},marginTop:{md:"2.5rem"},display:"flex",justifyContent:"space-between",flexDirection:{xs:"column",sm:"row",md:"row"},gap:{xs:"1rem"},background:"linear-gradient(to top, rgba(24, 24, 27, 0.9), rgba(24, 24, 27, 1))",borderRadius:"8px",boxShadow:{xs:r?"0 15px 30px -15px rgba(255,255,255,0.4)":"none",lg:"none"}},children:[n.jsx(d,{}),n.jsx(g,{})]}),n.jsx(i.Z,{sx:{padding:{xs:"1.2rem 1.2rem 0rem",md:"2rem 2rem 0rem"},position:"relative",zIndex:1,textAlign:{xs:"left",md:"justify"},marginBottom:"4rem"},children:e})]})})})}},16399:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{isNotFoundError:function(){return o},notFound:function(){return n}});let r="NEXT_NOT_FOUND";function n(){let e=Error(r);throw e.digest=r,e}function o(e){return"object"==typeof e&&null!==e&&"digest"in e&&e.digest===r}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7352:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{PARALLEL_ROUTE_DEFAULT_PATH:function(){return o},default:function(){return s}});let n=r(16399),o="next/dist/client/components/parallel-route-default.js";function s(){(0,n.notFound)()}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},68295:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});let n=(0,r(68570).createProxy)(String.raw`/Users/sunday/brainfuck/sundays-internet-home/src/app/layout.js#default`)},23824:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[948,404],()=>r(36012));module.exports=n})();