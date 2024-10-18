(()=>{var e={};e.id=732,e.ids=[732],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},4477:(e,s,t)=>{"use strict";t.r(s),t.d(s,{GlobalError:()=>n.a,__next_app__:()=>p,originalPathname:()=>m,pages:()=>c,routeModule:()=>u,tree:()=>d}),t(53854),t(68295),t(54864);var r=t(23191),a=t(88716),i=t(37922),n=t.n(i),l=t(95231),o={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);t.d(s,o);let d=["",{children:["skills",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,53854)),"/Users/sunday/brainfuck/sundays-internet-home/src/app/skills/page.js"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,68295)),"/Users/sunday/brainfuck/sundays-internet-home/src/app/layout.js"],"not-found":[()=>Promise.resolve().then(t.bind(t,54864)),"/Users/sunday/brainfuck/sundays-internet-home/src/app/not-found.js"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/Users/sunday/brainfuck/sundays-internet-home/src/app/skills/page.js"],m="/skills/page",p={require:t,loadChunk:()=>Promise.resolve()},u=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/skills/page",pathname:"/skills",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},34510:(e,s,t)=>{Promise.resolve().then(t.t.bind(t,12994,23)),Promise.resolve().then(t.t.bind(t,96114,23)),Promise.resolve().then(t.t.bind(t,9727,23)),Promise.resolve().then(t.t.bind(t,79671,23)),Promise.resolve().then(t.t.bind(t,41868,23)),Promise.resolve().then(t.t.bind(t,84759,23))},95262:(e,s,t)=>{Promise.resolve().then(t.bind(t,37069))},27964:(e,s,t)=>{Promise.resolve().then(t.bind(t,7142))},35303:()=>{},37069:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>v});var r=t(10326),a=t(17577);t(23824);var i=t(90434),n=t(93402),l=t(52646),o=t(35047);let d=({sx:e})=>{let s=(0,o.usePathname)();return r.jsx(n.default,{sx:{...e,display:"flex",gap:{xs:"1rem",sm:"1rem",md:"3rem"},flexDirection:"row",justifyContent:{xs:"space-between"}},children:["ABOUT","WORK","SKILLS","PROJECTS","BLOGS"].map(e=>{let t="ABOUT"===e?"/":`/${e.toLowerCase()}`,a="ABOUT"===e&&"/"===s||"ABOUT"!==e&&s.startsWith(t);return r.jsx(i.default,{href:t,passHref:!0,children:r.jsx(l.Z,{sx:{color:a?"white":void 0,fontStyle:a?"normal":"italic",padding:"0.5rem 0",fontSize:{xs:"0.8rem",sm:"1rem"},"&:hover":{color:"gray"}},children:e})},e)})})};var c=t(87514),m=t(52188),p=t(67286),u=t(7281),x=t(36249),h=t(22449);let f=[{href:"https://github.com/nuttysunday",icon:p.Z,label:"GitHub"},{href:"https://www.linkedin.com/in/shivam-ghodke/",icon:u.Z,label:"LinkedIn"},{href:"mailto:mail@shivam.foo",icon:x.Z,label:"Email"},{href:"https://drive.google.com/file/d/1oiRDiDfy_RhmdgZE0C0CVOubbTuOliY5/view?usp=share_link",icon:h.Z,label:"Resume"}],g=({sx:e})=>r.jsx(n.default,{sx:{...e,display:"flex",gap:2,justifyContent:{xs:"space-between"}},children:f.map(({href:e,icon:s,label:t},a)=>r.jsx(c.Z,{title:t,arrow:!0,children:r.jsx(m.Z,{href:e,target:"_blank",rel:"noopener noreferrer",children:r.jsx(n.default,{sx:{padding:1,paddingRight:3===a?0:1,borderRadius:"50%",transition:"transform 0.3s ease","&:hover":{transform:"scale(1.5)"},paddingLeft:{xs:0===a?0:1}},children:r.jsx(s,{sx:{color:"white"}})})})},a))});var b=t(87876);let j=(0,t(90685).Z)({typography:{fontFamily:"monospace"}}),v=({children:e})=>{let s;let[t,i]=(0,a.useState)(!1),l=()=>{i(!0),s&&clearTimeout(s),s=setTimeout(()=>{i(!1)},800)};return(0,a.useEffect)(()=>(window.addEventListener("scroll",l),()=>{window.removeEventListener("scroll",l),s&&clearTimeout(s)}),[]),(0,r.jsxs)("html",{lang:"en",children:[r.jsx("head",{}),r.jsx("body",{children:(0,r.jsxs)(n.default,{className:"font-mono text-indigo-300",sx:{width:{xs:"100%",lg:"70%"},maxWidth:"1200px",margin:"0 auto",display:"flex",flexDirection:"column",position:"relative"},children:[(0,r.jsxs)(n.default,{sx:{position:"sticky",top:0,zIndex:1e3,marginY:{xs:"1rem"},padding:{xs:"1rem"},marginTop:{md:"2.5rem"},display:"flex",justifyContent:"space-between",flexDirection:{xs:"column",sm:"row",md:"row"},gap:{xs:"1rem"},background:"linear-gradient(to top, rgba(24, 24, 27, 0.9), rgba(24, 24, 27, 1))",borderRadius:"8px",boxShadow:{xs:t?"0 15px 30px -15px rgba(255,255,255,0.4)":"none",lg:"none"}},children:[r.jsx(d,{}),r.jsx(g,{})]}),r.jsx(b.Z,{theme:j,children:r.jsx(n.default,{sx:{padding:{xs:"1.2rem 1.2rem 0rem",md:"0rem 2rem 0rem"},position:"relative",zIndex:1,textAlign:{xs:"left",md:"justify"},marginBottom:"4rem"},children:e})})]})})]})}},7142:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>i});var r=t(10326);t(17577);var a=t(35047);function i(){return(0,a.useRouter)(),r.jsx("div",{className:"flex justify-center items-center h-screen",children:r.jsx("h1",{className:"text-3xl",children:"Redirecting to the homepage..."})})}},19510:(e,s,t)=>{"use strict";e.exports=t(23191).vendored["react-rsc"].ReactJsxRuntime},68295:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>r});let r=(0,t(68570).createProxy)(String.raw`/Users/sunday/brainfuck/sundays-internet-home/src/app/layout.js#default`)},54864:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>r});let r=(0,t(68570).createProxy)(String.raw`/Users/sunday/brainfuck/sundays-internet-home/src/app/not-found.js#default`)},53854:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>a});var r=t(19510);function a(){return(0,r.jsxs)("div",{className:"max-w-2xl mx-auto px-4 sm:px-2 md:px-8",children:[" ",r.jsx("h1",{className:"underline",children:"Technologies I've used:"}),(0,r.jsxs)("div",{className:"space-y-4",children:[(0,r.jsxs)("div",{className:"p-2",children:[" ",r.jsx("h2",{className:"font-semibold",children:"Languages:"}),r.jsx("p",{className:"text-gray-100",children:"Python, JavaScript, SQL, HTML/CSS"})]}),(0,r.jsxs)("div",{className:"p-2",children:[" ",r.jsx("h2",{className:"font-semibold",children:"Frameworks & API:"}),r.jsx("p",{className:"text-gray-100",children:"NextJS, React, Material UI, TailwindCSS, NodeJS, ExpressJS, Flask, RestAPI, Axios, FetchAPI, Postman"})]}),(0,r.jsxs)("div",{className:"p-2",children:[" ",r.jsx("h2",{className:"font-semibold",children:"Database, Cloud & Tools:"}),r.jsx("p",{className:"text-gray-100",children:"MySQL, MongoDB, Google Cloud, Docker, GitHub Actions, Vite, Webpack, npm, git, CI/CD pipeline"})]}),(0,r.jsxs)("div",{className:"p-2",children:[" ",r.jsx("h2",{className:"font-semibold",children:"Self-hosting:"}),r.jsx("p",{className:"text-gray-100",children:"Raspberry Pi, Cloudflare Tunnel, Debian OS, Firewall Configurations, Docker Watchtower, Shell scripting, OpenVPN & SMTP protocols, remote desktop/SSH setups (XRDP Protocol)"})]}),(0,r.jsxs)("div",{className:"p-2",children:[" ",r.jsx("h2",{className:"font-semibold",children:"Data Science Tools:"}),r.jsx("p",{className:"text-gray-100",children:"TensorFlow, scikit-learn, OpenCV, NumPy, pandas, Plotly, Seaborn, Matplotlib, Streamlit, Mediapipe"})]})]})]})}},73881:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>a});var r=t(66621);let a=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,r.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},23824:()=>{}};var s=require("../../webpack-runtime.js");s.C(e);var t=e=>s(s.s=e),r=s.X(0,[948,406],()=>t(4477));module.exports=r})();