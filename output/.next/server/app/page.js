(()=>{var e={};e.id=931,e.ids=[931],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},82992:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>a.a,__next_app__:()=>c,originalPathname:()=>m,pages:()=>u,routeModule:()=>p,tree:()=>d}),r(11838),r(68295),r(54864);var s=r(23191),n=r(88716),i=r(37922),a=r.n(i),o=r(95231),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(t,l);let d=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,11838)),"/Users/sunday/brainfuck/sundays-internet-home/src/app/page.js"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,68295)),"/Users/sunday/brainfuck/sundays-internet-home/src/app/layout.js"],"not-found":[()=>Promise.resolve().then(r.bind(r,54864)),"/Users/sunday/brainfuck/sundays-internet-home/src/app/not-found.js"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["/Users/sunday/brainfuck/sundays-internet-home/src/app/page.js"],m="/page",c={require:r,loadChunk:()=>Promise.resolve()},p=new s.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},34510:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,12994,23)),Promise.resolve().then(r.t.bind(r,96114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,79671,23)),Promise.resolve().then(r.t.bind(r,41868,23)),Promise.resolve().then(r.t.bind(r,84759,23))},95262:(e,t,r)=>{Promise.resolve().then(r.bind(r,37069))},27964:(e,t,r)=>{Promise.resolve().then(r.bind(r,7142))},35303:()=>{},37069:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>w});var s=r(10326),n=r(17577);r(23824);var i=r(90434),a=r(93402),o=r(52646),l=r(35047);let d=({sx:e})=>{let t=(0,l.usePathname)();return s.jsx(a.default,{sx:{...e,display:"flex",gap:{xs:"1rem",sm:"1rem",md:"3rem"},flexDirection:"row",justifyContent:{xs:"space-between"}},children:["ABOUT","WORK","SKILLS","PROJECTS","BLOGS"].map(e=>{let r="ABOUT"===e?"/":`/${e.toLowerCase()}`,n="ABOUT"===e&&"/"===t||"ABOUT"!==e&&t.startsWith(r);return s.jsx(i.default,{href:r,passHref:!0,children:s.jsx(o.Z,{sx:{color:n?"white":void 0,fontStyle:n?"normal":"italic",padding:"0.5rem 0",fontSize:{xs:"0.8rem",sm:"1rem"},"&:hover":{color:"gray"}},children:e})},e)})})};var u=r(87514),m=r(52188),c=r(67286),p=r(7281),h=r(36249),x=r(22449),f=r(81543);let g=[{href:"https://github.com/nuttysunday",icon:c.Z,label:"GitHub"},{href:"https://www.linkedin.com/in/shivam-ghodke/",icon:p.Z,label:"LinkedIn"},{href:"mailto:mail@shivam.foo",icon:h.Z,label:"Email"},{href:"https://drive.google.com/file/d/1oiRDiDfy_RhmdgZE0C0CVOubbTuOliY5/view?usp=share_link",icon:x.Z,label:"Resume"},{href:"https://x.com/sundaycide",icon:f.Z,label:"Twitter"}],y=({sx:e})=>s.jsx(a.default,{sx:{...e,display:"flex",gap:2,justifyContent:{xs:"space-between"}},children:g.map(({href:e,icon:t,label:r},n)=>s.jsx(u.Z,{title:r,arrow:!0,children:s.jsx(m.Z,{href:e,target:"_blank",rel:"noopener noreferrer",children:s.jsx(a.default,{sx:{padding:1,paddingRight:3===n?0:1,borderRadius:"50%",transition:"transform 0.3s ease","&:hover":{transform:"scale(1.5)"},paddingLeft:{xs:0===n?0:1}},children:s.jsx(t,{sx:{color:"white"}})})})},n))});var v=r(87876);let b=(0,r(90685).Z)({typography:{fontFamily:"monospace"}}),w=({children:e})=>{let t;let[r,i]=(0,n.useState)(!1),o=()=>{i(!0),t&&clearTimeout(t),t=setTimeout(()=>{i(!1)},800)};return(0,n.useEffect)(()=>(window.addEventListener("scroll",o),()=>{window.removeEventListener("scroll",o),t&&clearTimeout(t)}),[]),(0,s.jsxs)("html",{lang:"en",children:[s.jsx("head",{}),s.jsx("body",{children:(0,s.jsxs)(a.default,{className:"font-mono text-indigo-300",sx:{width:{xs:"100%",lg:"70%"},maxWidth:"1200px",margin:"0 auto",display:"flex",flexDirection:"column",position:"relative"},children:[(0,s.jsxs)(a.default,{sx:{position:"sticky",top:0,zIndex:1e3,marginY:{xs:"1rem"},padding:{xs:"1rem"},marginTop:{md:"2.5rem"},display:"flex",justifyContent:"space-between",flexDirection:{xs:"column",sm:"row",md:"row"},gap:{xs:"1rem"},background:"linear-gradient(to top, rgba(24, 24, 27, 0.9), rgba(24, 24, 27, 1))",borderRadius:"8px",boxShadow:{xs:r?"0 15px 30px -15px rgba(255,255,255,0.4)":"none",lg:"none"}},children:[s.jsx(d,{}),s.jsx(y,{})]}),s.jsx(v.Z,{theme:b,children:s.jsx(a.default,{sx:{padding:{xs:"1.2rem 1.2rem 0rem",md:"0rem 2rem 0rem"},position:"relative",zIndex:1,textAlign:{xs:"left",md:"justify"},marginBottom:"4rem"},children:e})})]})})]})}},7142:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var s=r(10326);r(17577);var n=r(35047);function i(){return(0,n.useRouter)(),s.jsx("div",{className:"flex justify-center items-center h-screen",children:s.jsx("h1",{className:"text-3xl",children:"Redirecting to the homepage..."})})}},19510:(e,t,r)=>{"use strict";e.exports=r(23191).vendored["react-rsc"].ReactJsxRuntime},68295:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});let s=(0,r(68570).createProxy)(String.raw`/Users/sunday/brainfuck/sundays-internet-home/src/app/layout.js#default`)},54864:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});let s=(0,r(68570).createProxy)(String.raw`/Users/sunday/brainfuck/sundays-internet-home/src/app/not-found.js#default`)},11838:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var s=r(19510);function n(){return(0,s.jsxs)("div",{children:[s.jsx("p",{style:{marginBottom:"2rem"},children:"Hi, I'm Shivam—yet another software engineer, currently pursuing my Master’s in Computer Science at NC State University, North Carolina. I’ve got a 3.6/4 GPA, and some of my favorite classes include Databases, Cloud Computing, Software Engineering, and Computer Networks. I’m set to graduate in May 2025."}),s.jsx("p",{style:{marginBottom:"2rem"},children:"Before this, I wrapped up my undergrad in May 2023 from Mumbai University with an 8.6/10 GPA. I took courses like Web Development, Algorithms, and DevOps, with projects mainly revolving around Data Science and Machine Learning."}),s.jsx("p",{style:{marginBottom:"2rem"},children:"These days, I’m all about Full Stack Development, currently exploring NextJS & TailwindCSS. I'am also self-hosting web apps on Raspberry Pi, using Cloudflare Tunnels and Docker, also leveraging Docker Watchtower to reflect changes in real-time by setting up CI/CD pipeline. Along the way, I’ve picked up some skills in wifi network security, remote desktop/SSH setups, firewall configurations, and OpenVPN and SMTP protocols with ImprovMX for mail forwarding."}),s.jsx("p",{style:{marginBottom:"2rem"},children:"I love exploring random new technologies and staying up-to-date with the latest in the computer world."})]})}},73881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var s=r(66621);let n=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},23824:()=>{}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[948,945],()=>r(82992));module.exports=s})();