(()=>{var e={};e.id=872,e.ids=[872],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},48038:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>a.a,__next_app__:()=>m,originalPathname:()=>p,pages:()=>c,routeModule:()=>u,tree:()=>d}),r(70001),r(68295),r(54864);var s=r(23191),i=r(88716),n=r(37922),a=r.n(n),o=r(95231),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(t,l);let d=["",{children:["blogs",{children:["certi-tester-web-app",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,70001)),"/Users/sunday/brainfuck/sundays-internet-home/src/app/blogs/certi-tester-web-app/page.js"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,68295)),"/Users/sunday/brainfuck/sundays-internet-home/src/app/layout.js"],"not-found":[()=>Promise.resolve().then(r.bind(r,54864)),"/Users/sunday/brainfuck/sundays-internet-home/src/app/not-found.js"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/Users/sunday/brainfuck/sundays-internet-home/src/app/blogs/certi-tester-web-app/page.js"],p="/blogs/certi-tester-web-app/page",m={require:r,loadChunk:()=>Promise.resolve()},u=new s.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/blogs/certi-tester-web-app/page",pathname:"/blogs/certi-tester-web-app",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},20335:(e,t,r)=>{Promise.resolve().then(r.bind(r,53551)),Promise.resolve().then(r.bind(r,93402)),Promise.resolve().then(r.bind(r,42265)),Promise.resolve().then(r.t.bind(r,79404,23))},34510:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,12994,23)),Promise.resolve().then(r.t.bind(r,96114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,79671,23)),Promise.resolve().then(r.t.bind(r,41868,23)),Promise.resolve().then(r.t.bind(r,84759,23))},95262:(e,t,r)=>{Promise.resolve().then(r.bind(r,37069))},27964:(e,t,r)=>{Promise.resolve().then(r.bind(r,7142))},37069:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>j});var s=r(10326),i=r(17577);r(23824);var n=r(90434),a=r(93402),o=r(52646),l=r(35047);let d=({sx:e})=>{let t=(0,l.usePathname)();return s.jsx(a.default,{sx:{...e,display:"flex",gap:{xs:"1rem",sm:"1rem",md:"3rem"},flexDirection:"row",justifyContent:{xs:"space-between"}},children:["ABOUT","WORK","SKILLS","PROJECTS","BLOGS"].map(e=>{let r="ABOUT"===e?"/":`/${e.toLowerCase()}`,i="ABOUT"===e&&"/"===t||"ABOUT"!==e&&t.startsWith(r);return s.jsx(n.default,{href:r,passHref:!0,children:s.jsx(o.Z,{sx:{color:i?"white":void 0,fontStyle:i?"normal":"italic",padding:"0.5rem 0",fontSize:{xs:"0.8rem",sm:"1rem"},"&:hover":{color:"gray"}},children:e})},e)})})};var c=r(87514),p=r(52188),m=r(67286),u=r(7281),x=r(36249),h=r(22449),f=r(81543);let b=[{href:"https://github.com/nuttysunday",icon:m.Z,label:"GitHub"},{href:"https://www.linkedin.com/in/shivam-ghodke/",icon:u.Z,label:"LinkedIn"},{href:"mailto:mail@shivam.foo",icon:x.Z,label:"Email"},{href:"https://drive.google.com/file/d/1OC_mcMHkBaDhWbKEMfsnLY-uBS8Xee7G/view?usp=share_link",icon:h.Z,label:"Resume"},{href:"https://x.com/sundaycide",icon:f.Z,label:"Twitter"}],g=({sx:e})=>s.jsx(a.default,{sx:{...e,display:"flex",gap:2,justifyContent:{xs:"space-between"}},children:b.map(({href:e,icon:t,label:r},i)=>s.jsx(c.Z,{title:r,arrow:!0,children:s.jsx(p.Z,{href:e,target:"_blank",rel:"noopener noreferrer",children:s.jsx(a.default,{sx:{padding:1,paddingRight:3===i?0:1,borderRadius:"50%",transition:"transform 0.3s ease","&:hover":{transform:"scale(1.5)"},paddingLeft:{xs:0===i?0:1}},children:s.jsx(t,{sx:{color:"white"}})})})},i))});var v=r(87876);let y=(0,r(90685).Z)({typography:{fontFamily:"monospace"}}),j=({children:e})=>{let t;let[r,n]=(0,i.useState)(!1),o=()=>{n(!0),t&&clearTimeout(t),t=setTimeout(()=>{n(!1)},800)};return(0,i.useEffect)(()=>(window.addEventListener("scroll",o),()=>{window.removeEventListener("scroll",o),t&&clearTimeout(t)}),[]),(0,s.jsxs)("html",{lang:"en",children:[s.jsx("head",{}),s.jsx("body",{children:(0,s.jsxs)(a.default,{className:"font-mono text-indigo-300",sx:{width:{xs:"100%",lg:"70%"},maxWidth:"1200px",margin:"0 auto",display:"flex",flexDirection:"column",position:"relative"},children:[(0,s.jsxs)(a.default,{sx:{position:"sticky",top:0,zIndex:1e3,marginY:{xs:"1rem"},padding:{xs:"1rem"},marginTop:{md:"2.5rem"},display:"flex",justifyContent:"space-between",flexDirection:{xs:"column",sm:"row",md:"row"},gap:{xs:"1rem"},background:"linear-gradient(to top, rgba(24, 24, 27, 0.9), rgba(24, 24, 27, 1))",borderRadius:"8px",boxShadow:{xs:r?"0 15px 30px -15px rgba(255,255,255,0.4)":"none",lg:"none"}},children:[s.jsx(d,{}),s.jsx(g,{})]}),s.jsx(v.Z,{theme:y,children:s.jsx(a.default,{sx:{padding:{xs:"1.2rem 1.2rem 0rem",md:"0rem 2rem 0rem"},position:"relative",zIndex:1,textAlign:{xs:"left",md:"justify"},marginBottom:"4rem"},children:e})})]})})]})}},7142:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var s=r(10326);r(17577);var i=r(35047);function n(){return(0,i.useRouter)(),s.jsx("div",{className:"flex justify-center items-center h-screen",children:s.jsx("h1",{className:"text-3xl",children:"Redirecting to the homepage..."})})}},70001:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var s=r(19510),i=r(16308),n=r(57371),a=r(81416);let o=()=>{let e="text-teal-400 text-left md:text-justify";return(0,s.jsxs)(i.Z,{sx:{display:"flex",gap:"2rem",flexDirection:"column",overflowX:"hidden"},children:[(0,s.jsxs)(i.Z,{children:[s.jsx(n.default,{href:"/blogs",passHref:!0,children:s.jsx(a.Z,{sx:{color:"white",cursor:"pointer","&:hover":{color:"#fae263"},position:"absolute",left:"0rem",marginTop:"1rem",display:{xs:"none",sm:"block"}}})}),(0,s.jsxs)("div",{children:[s.jsx("p",{className:`${e} text-2xl font-bold underline decoration-4`,children:"Certi Tester web app"}),s.jsx("p",{className:`${e} italic opacity-90 text-sm`,children:"Coming mid Nov"})]})]}),s.jsx("p",{className:e,children:"I work as a software developer, research assistant at Wilson college of textiles at NC State, & this project is in collaboration with Dr. Warren Jasper."})]})}},68295:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});let s=(0,r(68570).createProxy)(String.raw`/Users/sunday/brainfuck/sundays-internet-home/src/app/layout.js#default`)},54864:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});let s=(0,r(68570).createProxy)(String.raw`/Users/sunday/brainfuck/sundays-internet-home/src/app/not-found.js#default`)},73881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var s=r(66621);let i=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},23824:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[948,945,422,607],()=>r(48038));module.exports=s})();