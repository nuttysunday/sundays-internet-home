(()=>{var e={};e.id=606,e.ids=[606],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},13190:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>a.a,__next_app__:()=>m,originalPathname:()=>c,pages:()=>u,routeModule:()=>p,tree:()=>d}),t(28514),t(68295),t(54864);var s=t(23191),n=t(88716),i=t(37922),a=t.n(i),o=t(95231),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);t.d(r,l);let d=["",{children:["blogs",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,28514)),"/Users/sunday/brainfuck/sundays-internet-home/src/app/blogs/page.js"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,68295)),"/Users/sunday/brainfuck/sundays-internet-home/src/app/layout.js"],"not-found":[()=>Promise.resolve().then(t.bind(t,54864)),"/Users/sunday/brainfuck/sundays-internet-home/src/app/not-found.js"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["/Users/sunday/brainfuck/sundays-internet-home/src/app/blogs/page.js"],c="/blogs/page",m={require:t,loadChunk:()=>Promise.resolve()},p=new s.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/blogs/page",pathname:"/blogs",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},34510:(e,r,t)=>{Promise.resolve().then(t.t.bind(t,12994,23)),Promise.resolve().then(t.t.bind(t,96114,23)),Promise.resolve().then(t.t.bind(t,9727,23)),Promise.resolve().then(t.t.bind(t,79671,23)),Promise.resolve().then(t.t.bind(t,41868,23)),Promise.resolve().then(t.t.bind(t,84759,23))},61975:(e,r,t)=>{Promise.resolve().then(t.t.bind(t,79404,23))},95262:(e,r,t)=>{Promise.resolve().then(t.bind(t,97567))},27964:(e,r,t)=>{Promise.resolve().then(t.bind(t,7142))},97567:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>b});var s=t(10326),n=t(17577);t(23824);var i=t(90434),a=t(93402),o=t(52646),l=t(35047);let d=({sx:e})=>{let r=(0,l.usePathname)();return s.jsx(a.Z,{sx:{...e,display:"flex",gap:{xs:"1rem",sm:"1rem",md:"3rem"},flexDirection:"row",justifyContent:{xs:"space-between"}},children:["ABOUT","WORK","SKILLS","PROJECTS","BLOGS"].map(e=>s.jsx(i.default,{href:"ABOUT"===e?"/":`/${e.toLowerCase()}`,passHref:!0,children:s.jsx(o.Z,{sx:{color:r===("ABOUT"===e?"/":`/${e.toLowerCase()}`)?"white":void 0,fontStyle:r===("ABOUT"===e?"/":`/${e.toLowerCase()}`)?"normal":"italic",padding:"0.5rem 0",fontSize:{xs:"0.8rem",sm:"1rem"},"&:hover":{color:"gray"}},children:e})},e))})};var u=t(87514),c=t(52188),m=t(67286),p=t(7281),x=t(36249),h=t(22449);let f=[{href:"https://github.com/nuttysunday",icon:m.Z,label:"GitHub"},{href:"https://www.linkedin.com/in/shivam-ghodke/",icon:p.Z,label:"LinkedIn"},{href:"mailto:mail@shivam.foo",icon:x.Z,label:"Email"},{href:"https://drive.google.com/file/d/1oiRDiDfy_RhmdgZE0C0CVOubbTuOliY5/view?usp=share_link",icon:h.Z,label:"Resume"}],g=({sx:e})=>s.jsx(a.Z,{sx:{...e,display:"flex",gap:2,justifyContent:{xs:"space-between"}},children:f.map(({href:e,icon:r,label:t},n)=>s.jsx(u.Z,{title:t,arrow:!0,children:s.jsx(c.Z,{href:e,target:"_blank",rel:"noopener noreferrer",children:s.jsx(a.Z,{sx:{padding:1,paddingRight:3===n?0:1,borderRadius:"50%",transition:"transform 0.3s ease","&:hover":{transform:"scale(1.5)"},paddingLeft:{xs:0===n?0:1}},children:s.jsx(r,{sx:{color:"white"}})})})},n))}),b=({children:e})=>{let r;let[t,i]=(0,n.useState)(!1),o=()=>{i(!0),r&&clearTimeout(r),r=setTimeout(()=>{i(!1)},800)};return(0,n.useEffect)(()=>(window.addEventListener("scroll",o),()=>{window.removeEventListener("scroll",o),r&&clearTimeout(r)}),[]),(0,s.jsxs)("html",{lang:"en",children:[s.jsx("head",{}),s.jsx("body",{children:(0,s.jsxs)(a.Z,{className:"font-mono text-indigo-300",sx:{width:{xs:"100%",lg:"70%"},maxWidth:"1200px",margin:"0 auto",display:"flex",flexDirection:"column",position:"relative"},children:[(0,s.jsxs)(a.Z,{sx:{position:"sticky",top:0,zIndex:1e3,marginY:{xs:"1rem"},padding:{xs:"1rem"},marginTop:{md:"2.5rem"},display:"flex",justifyContent:"space-between",flexDirection:{xs:"column",sm:"row",md:"row"},gap:{xs:"1rem"},background:"linear-gradient(to top, rgba(24, 24, 27, 0.9), rgba(24, 24, 27, 1))",borderRadius:"8px",boxShadow:{xs:t?"0 15px 30px -15px rgba(255,255,255,0.4)":"none",lg:"none"}},children:[s.jsx(d,{}),s.jsx(g,{})]}),s.jsx(a.Z,{sx:{padding:{xs:"1.2rem 1.2rem 0rem",md:"2rem 2rem 0rem"},position:"relative",zIndex:1,textAlign:{xs:"left",md:"justify"},marginBottom:"4rem"},children:e})]})})]})}},7142:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>i});var s=t(10326);t(17577);var n=t(35047);function i(){return(0,n.useRouter)(),s.jsx("div",{className:"flex justify-center items-center h-screen",children:s.jsx("h1",{className:"text-3xl",children:"Redirecting to the homepage..."})})}},670:(e,r,t)=>{"use strict";let{createProxy:s}=t(68570);e.exports=s("/Users/sunday/brainfuck/sundays-internet-home/node_modules/next/dist/client/link.js")},19510:(e,r,t)=>{"use strict";e.exports=t(23191).vendored["react-rsc"].ReactJsxRuntime},28514:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>a});var s=t(19510),n=t(670),i=t.n(n);function a(){return s.jsx("div",{children:s.jsx("ul",{children:s.jsx("li",{children:s.jsx(i(),{href:"/blogs/self-hosting",className:"text-2xl font-bold underline decoration-sky-500",children:"Self-hosting"})})})})}},68295:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>s});let s=(0,t(68570).createProxy)(String.raw`/Users/sunday/brainfuck/sundays-internet-home/src/app/layout.js#default`)},54864:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>s});let s=(0,t(68570).createProxy)(String.raw`/Users/sunday/brainfuck/sundays-internet-home/src/app/not-found.js#default`)},73881:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>n});var s=t(66621);let n=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},23824:()=>{}};var r=require("../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[948,22],()=>t(13190));module.exports=s})();