(()=>{var e={};e.id=826,e.ids=[826],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},69566:(e,a,s)=>{"use strict";s.r(a),s.d(a,{GlobalError:()=>n.a,__next_app__:()=>h,originalPathname:()=>m,pages:()=>d,routeModule:()=>p,tree:()=>c}),s(22818),s(68295),s(54864);var t=s(23191),i=s(88716),l=s(37922),n=s.n(l),r=s(95231),o={};for(let e in r)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>r[e]);s.d(a,o);let c=["",{children:["blogs",{children:["ping-pong-ball-tracking-and-projected-distance-calculation-system-for-data-modeling",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,22818)),"/Users/sunday/brainfuck/sundays-internet-home/src/app/blogs/ping-pong-ball-tracking-and-projected-distance-calculation-system-for-data-modeling/page.js"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,68295)),"/Users/sunday/brainfuck/sundays-internet-home/src/app/layout.js"],"not-found":[()=>Promise.resolve().then(s.bind(s,54864)),"/Users/sunday/brainfuck/sundays-internet-home/src/app/not-found.js"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/Users/sunday/brainfuck/sundays-internet-home/src/app/blogs/ping-pong-ball-tracking-and-projected-distance-calculation-system-for-data-modeling/page.js"],m="/blogs/ping-pong-ball-tracking-and-projected-distance-calculation-system-for-data-modeling/page",h={require:s,loadChunk:()=>Promise.resolve()},p=new t.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/blogs/ping-pong-ball-tracking-and-projected-distance-calculation-system-for-data-modeling/page",pathname:"/blogs/ping-pong-ball-tracking-and-projected-distance-calculation-system-for-data-modeling",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},1920:(e,a,s)=>{Promise.resolve().then(s.bind(s,53551)),Promise.resolve().then(s.bind(s,93402)),Promise.resolve().then(s.bind(s,42265)),Promise.resolve().then(s.t.bind(s,92481,23)),Promise.resolve().then(s.t.bind(s,79404,23))},34510:(e,a,s)=>{Promise.resolve().then(s.t.bind(s,12994,23)),Promise.resolve().then(s.t.bind(s,96114,23)),Promise.resolve().then(s.t.bind(s,9727,23)),Promise.resolve().then(s.t.bind(s,79671,23)),Promise.resolve().then(s.t.bind(s,41868,23)),Promise.resolve().then(s.t.bind(s,84759,23))},95262:(e,a,s)=>{Promise.resolve().then(s.bind(s,37069))},27964:(e,a,s)=>{Promise.resolve().then(s.bind(s,7142))},37069:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>v});var t=s(10326),i=s(17577);s(23824);var l=s(90434),n=s(93402),r=s(52646),o=s(35047);let c=({sx:e})=>{let a=(0,o.usePathname)();return t.jsx(n.default,{sx:{...e,display:"flex",gap:{xs:"1rem",sm:"1rem",md:"3rem"},flexDirection:"row",justifyContent:{xs:"space-between"}},children:["ABOUT","WORK","SKILLS","PROJECTS","BLOGS"].map(e=>{let s="ABOUT"===e?"/":`/${e.toLowerCase()}`,i="ABOUT"===e&&"/"===a||"ABOUT"!==e&&a.startsWith(s);return t.jsx(l.default,{href:s,passHref:!0,children:t.jsx(r.Z,{sx:{color:i?"white":void 0,fontStyle:i?"normal":"italic",padding:"0.5rem 0",fontSize:{xs:"0.8rem",sm:"1rem"},"&:hover":{color:"gray"}},children:e})},e)})})};var d=s(87514),m=s(52188),h=s(67286),p=s(7281),x=s(36249),g=s(22449),u=s(81543);let f=[{href:"https://github.com/nuttysunday",icon:h.Z,label:"GitHub"},{href:"https://www.linkedin.com/in/shivam-ghodke/",icon:p.Z,label:"LinkedIn"},{href:"mailto:mail@shivam.foo",icon:x.Z,label:"Email"},{href:"https://drive.google.com/file/d/1OC_mcMHkBaDhWbKEMfsnLY-uBS8Xee7G/view?usp=share_link",icon:g.Z,label:"Resume"},{href:"https://x.com/sundaycide",icon:u.Z,label:"Twitter"}],b=({sx:e})=>t.jsx(n.default,{sx:{...e,display:"flex",gap:2,justifyContent:{xs:"space-between"}},children:f.map(({href:e,icon:a,label:s},i)=>t.jsx(d.Z,{title:s,arrow:!0,children:t.jsx(m.Z,{href:e,target:"_blank",rel:"noopener noreferrer",children:t.jsx(n.default,{sx:{padding:1,paddingRight:3===i?0:1,borderRadius:"50%",transition:"transform 0.3s ease","&:hover":{transform:"scale(1.5)"},paddingLeft:{xs:0===i?0:1}},children:t.jsx(a,{sx:{color:"white"}})})})},i))});var j=s(87876);let w=(0,s(90685).Z)({typography:{fontFamily:"monospace"}}),v=({children:e})=>{let a;let[s,l]=(0,i.useState)(!1),r=()=>{l(!0),a&&clearTimeout(a),a=setTimeout(()=>{l(!1)},800)};return(0,i.useEffect)(()=>(window.addEventListener("scroll",r),()=>{window.removeEventListener("scroll",r),a&&clearTimeout(a)}),[]),(0,t.jsxs)("html",{lang:"en",children:[t.jsx("head",{}),t.jsx("body",{children:(0,t.jsxs)(n.default,{className:"font-mono text-indigo-300",sx:{width:{xs:"100%",lg:"70%"},maxWidth:"1200px",margin:"0 auto",display:"flex",flexDirection:"column",position:"relative"},children:[(0,t.jsxs)(n.default,{sx:{position:"sticky",top:0,zIndex:1e3,marginY:{xs:"1rem"},padding:{xs:"1rem"},marginTop:{md:"2.5rem"},display:"flex",justifyContent:"space-between",flexDirection:{xs:"column",sm:"row",md:"row"},gap:{xs:"1rem"},background:"linear-gradient(to top, rgba(24, 24, 27, 0.9), rgba(24, 24, 27, 1))",borderRadius:"8px",boxShadow:{xs:s?"0 15px 30px -15px rgba(255,255,255,0.4)":"none",lg:"none"}},children:[t.jsx(c,{}),t.jsx(b,{})]}),t.jsx(j.Z,{theme:w,children:t.jsx(n.default,{sx:{padding:{xs:"1.2rem 1.2rem 0rem",md:"0rem 2rem 0rem"},position:"relative",zIndex:1,textAlign:{xs:"left",md:"justify"},marginBottom:"4rem"},children:e})})]})})]})}},7142:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>l});var t=s(10326);s(17577);var i=s(35047);function l(){return(0,i.useRouter)(),t.jsx("div",{className:"flex justify-center items-center h-screen",children:t.jsx("h1",{className:"text-3xl",children:"Redirecting to the homepage..."})})}},22818:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>r});var t=s(19510),i=s(16308),l=s(57371),n=s(81416);s(17710);let r=()=>{let e="text-sky-400 text-left md:text-justify";return(0,t.jsxs)(i.Z,{sx:{display:"flex",gap:"2rem",flexDirection:"column",overflowX:"hidden"},children:[(0,t.jsxs)(i.Z,{children:[t.jsx(l.default,{href:"/blogs",passHref:!0,children:t.jsx(n.Z,{sx:{color:"white",cursor:"pointer","&:hover":{color:"#fae263"},position:"absolute",left:"0rem",marginTop:"1rem",display:{xs:"none",sm:"block"}}})}),(0,t.jsxs)("div",{children:[t.jsx("p",{className:`${e} text-2xl font-bold underline decoration-4`,children:"Ping-Pong ball tracking and projected distance calculation system for data modeling"}),t.jsx("p",{className:`${e} italic opacity-90 text-sm`,children:"28th Oct 2024, 5 min read"})]})]}),t.jsx("p",{className:e,children:"I work as a software developer, research assistant at Wilson college of textiles at NC State, & this project is in collaboration with Dr. Warren Jasper."}),t.jsx(i.Z,{sx:{maxWidth:{xs:"90%",md:"600px"},borderRadius:"12px",overflow:"hidden",margin:"0 auto",minHeight:"215px"},children:t.jsx("iframe",{src:"https://www.youtube.com/embed/_IoQ6Dux8g8?si=uCX2zliGSLllFJTB",allow:"accelerometer; clipboard-write; encrypted-media",title:"YouTube video player",style:{width:"100%",height:"215px",border:"none"}})}),t.jsx("div",{className:"flex flex-col items-center",children:t.jsx("p",{className:`${e} text-white`,children:"Youtube video showing live demo, of integrating hosting with CI/CD."})}),t.jsx("div",{children:(0,t.jsxs)("ul",{className:"text-sky-500",children:[t.jsx("li",{children:(0,t.jsxs)(l.default,{href:"#understanding-the-project",children:[t.jsx("span",{children:"1. "}),t.jsx("span",{className:"underline",children:"Understanding the project"})]})}),t.jsx("li",{children:(0,t.jsxs)(l.default,{href:"#motivation",children:[t.jsx("span",{children:"2. "}),t.jsx("span",{className:"underline",children:"Motivation"})]})}),t.jsx("li",{children:(0,t.jsxs)(l.default,{href:"#traditional-way",children:[t.jsx("span",{children:"3. "}),t.jsx("span",{className:"underline",children:"Traditional way"})]})}),(0,t.jsxs)("li",{children:[(0,t.jsxs)(l.default,{href:"#our-method",children:[t.jsx("span",{children:"4. "}),t.jsx("span",{className:"underline",children:"Our method"})]}),(0,t.jsxs)("ul",{style:{paddingLeft:"20px"},children:[t.jsx("li",{children:(0,t.jsxs)(l.default,{href:"#calibration",children:[t.jsx("span",{children:"4.1 "}),t.jsx("span",{className:"underline",children:"Calibration"})]})}),t.jsx("li",{children:(0,t.jsxs)(l.default,{href:"#bt-and-dc",children:[t.jsx("span",{children:"4.2 "}),t.jsx("span",{className:"underline",children:"Ball tracking and distance calculation"})]})}),(0,t.jsxs)("li",{children:[(0,t.jsxs)(l.default,{href:"#challenges-faced",children:[t.jsx("span",{children:"4.3 "}),t.jsx("span",{className:"underline",children:"Challenges we faced"})]}),(0,t.jsxs)("ul",{style:{paddingLeft:"20px"},children:[t.jsx("li",{children:(0,t.jsxs)(l.default,{href:"#real-time",children:[t.jsx("span",{children:"4.3.1 "}),t.jsx("span",{className:"underline",children:"Hardware limitation for processing in real-time"})]})}),t.jsx("li",{children:(0,t.jsxs)(l.default,{href:"#not-track-ball",children:[t.jsx("span",{children:"4.3.2 "}),t.jsx("span",{className:"underline",children:"Speed and shape of ball made it impossible to track ball"})]})}),t.jsx("li",{children:(0,t.jsxs)(l.default,{href:"#shape-of-ball",children:[t.jsx("span",{children:"4.3.3 "}),(0,t.jsxs)("span",{className:"underline",children:["Ball not being ",t.jsx("em",{children:"ball"})," shaped"]})]})})]})]}),t.jsx("li",{children:(0,t.jsxs)(l.default,{href:"#coordinates-to-distance",children:[t.jsx("span",{children:"4.4 "}),t.jsx("span",{className:"underline",children:"Coordinates to actual distance"})]})})]})]})]})}),t.jsx("p",{id:"understanding-the-project",className:`${e} text-xl font-bold`,children:"1. Understanding the project:-"}),t.jsx("p",{className:`${e}`,children:"Calculating the distance at which ball is going to have its first point of contact with the ground after being launched using a catapult."}),(0,t.jsxs)("div",{className:"flex flex-col items-center mb-8 lg:mb-0",children:[t.jsx("img",{src:"/images/ping-pong-ball-tracking-system/objective.png",alt:"Description of image",className:"rounded-lg w-full max-w-[800px]"}),t.jsx("p",{className:`${e} mt-4 text-white`,children:"Hi"})]}),t.jsx("p",{id:"motivation",className:`${e} text-xl font-bold`,children:"2. Motivation:-"}),t.jsx("p",{className:`${e}`,children:"The reason behind doing this project is for data modeling that is to collect training data so it could later be used by machine learning regression models."}),(0,t.jsxs)("div",{className:"flex flex-col items-center mb-8 lg:mb-0",children:[t.jsx("img",{src:"/images/ping-pong-ball-tracking-system/table.jpg",alt:"Description of image",className:"rounded-lg w-full max-w-[800px]"}),t.jsx("p",{className:`${e} mt-4 text-white`,children:"Hi"})]}),t.jsx("p",{id:"traditional-way",className:`${e} text-xl font-bold`,children:"3. Traditional way:-"}),t.jsx("p",{className:`${e}`,children:"Lay an aluminum foil in the expected area where the ball is going to land for particular configuration, launch the ball, identify the dent on the foil, and calculate the distance using the measuring tape which has been placed in parallel with the foil."}),(0,t.jsxs)("div",{className:"flex flex-col items-center mb-8 lg:mb-0",children:[t.jsx("img",{src:"/images/ping-pong-ball-tracking-system/traditional.jpg",alt:"Description of image",className:"rounded-lg w-full max-w-[800px]"}),t.jsx("p",{className:`${e} mt-4 text-white`,children:"Hi"})]}),t.jsx("p",{className:`${e}`,children:"This is a tedious process, and takes a lot of time. Two man job, Not feasible when sampling for 10000 data points."}),t.jsx("p",{id:"our-method",className:`${e} text-xl font-bold`,children:"4. Our method:-"}),t.jsx("p",{className:`${e}`,children:"Using a raspberry pi with HD camera mounted on it, powered by a power bank, can be operated using a remote desktop making the system very mobile. Place raspberry pi camera as shown in the picture below:-"}),(0,t.jsxs)("div",{className:"flex flex-col items-center mb-8 lg:mb-0",children:[t.jsx("img",{src:"/images/ping-pong-ball-tracking-system/traditional.jpg",alt:"Description of image",className:"rounded-lg w-full max-w-[800px]"}),t.jsx("p",{className:`${e} mt-4 text-white`,children:"Hi"})]}),(0,t.jsxs)("div",{className:"flex flex-col items-center mb-8 lg:mb-0",children:[t.jsx("img",{src:"/images/ping-pong-ball-tracking-system/r_setup.jpg",alt:"Description of image",className:"rounded-lg w-full max-w-[800px]"}),t.jsx("p",{className:`${e} mt-4 text-white`,children:"Remote desktop in the Pi and run the program:- python3 main.py"})]}),t.jsx("p",{id:"calibration",className:`${e} text-lg font-bold`,children:"4.1. Calibration:-"}),t.jsx("p",{className:`${e}`,children:"Place a ruler scale:- Align the scale with green and red line, and get the value on the tape on inches respectively."}),(0,t.jsxs)("div",{className:"flex flex-col items-center mb-8 lg:mb-0",children:[t.jsx("img",{src:"/images/ping-pong-ball-tracking-system/calib_window.png",alt:"Description of image",className:"rounded-lg w-full max-w-[800px]"}),t.jsx("p",{className:`${e} mt-4 text-white`,children:"Here the value are:- green value (mid_value) = 112 Red value (minimum_value) = 84"})]}),t.jsx("p",{id:"bt-and-dc",className:`${e} text-lg font-bold`,children:"4.2. Ball tracking and distance calculation:-"}),t.jsx("p",{className:`${e}`,children:"So after weeks of research, trials and errors, after losing all hope and were almost about to scrap the project, my professor came up with a brilliant idea. Background separations:- So what we do is We take the first frame, convert it to b&w, and for each frame we take the absolute difference with this bg_image."}),(0,t.jsxs)("div",{className:"flex flex-col lg:flex-row lg:justify-center lg:space-x-8 items-center",children:[(0,t.jsxs)("div",{className:"flex flex-col items-center mb-8 lg:mb-0",children:[t.jsx("img",{src:"/images/ping-pong-ball-tracking-system/base_frame.png",alt:"Description of image",className:"rounded-lg w-full max-w-[400px]"}),t.jsx("p",{className:`${e} mt-4 text-white`,children:"Raw footage"})]}),(0,t.jsxs)("div",{className:"flex flex-col items-center",children:[t.jsx("img",{src:"/images/ping-pong-ball-tracking-system/bg_seperation.gif",alt:"Description of image",className:"rounded-lg max-w-[400px]"}),t.jsx("p",{className:`${e} mt-4 text-white`,children:"Background seperation"})]})]}),(0,t.jsxs)("div",{className:"flex flex-col lg:flex-row lg:justify-center lg:space-x-8 items-center",children:[(0,t.jsxs)("div",{className:"flex flex-col items-center",children:[t.jsx("img",{src:"/images/ping-pong-ball-tracking-system/ball_tracked.png",alt:"Description of image",className:"rounded-lg max-w-[400px]"}),t.jsx("p",{className:`${e} mt-4 text-white`,children:"Ball tracked"})]}),(0,t.jsxs)("div",{className:"flex flex-col items-center mb-8 lg:mb-0",children:[t.jsx("img",{src:"/images/ping-pong-ball-tracking-system/distance_output.png",alt:"Description of image",className:"rounded-lg w-full max-w-[400px]"}),t.jsx("p",{className:`${e} mt-4 text-white`,children:"Estimated distance"})]})]}),t.jsx("p",{id:"challenges-faced",className:`${e} text-lg font-bold`,children:"4.3 Challenges we faced:-"}),t.jsx("p",{className:`${e} text font-bold`,children:"4.3.1 Hardware limitation for processing in real-time"}),t.jsx("p",{className:`${e}`,children:"We actually initially wanted to do this in real-time, but because of hard-ware limitations, the pi was not able to process the frames as soon as it was getting it."}),t.jsx("p",{className:`${e}`,children:"So we decided to use post-processing, that is first record the video, store the frames in a buffer, and process each frame one by one."}),t.jsx("p",{id:"not-track-ball",className:`${e} text font-bold`,children:"4.3.2 Speed and shape of ball made it impossible to track ball"}),t.jsx("p",{className:`${e}`,children:"The second problem we faced was, ball was moving at a very high pace, that is was visible maybe for 1-3 frames, and the program was not able to do any object detection,"}),t.jsx("p",{className:`${e}`,children:"So we even tried using a plain dark color background, covered using a cloth, but nonetheless because of how small and fast the ball was, the program was not able to track it."}),t.jsx("p",{className:`${e}`,children:"So after weeks of research, trials and errors, after losing all hope and were almost about to scrap the project, my professor came up with a brilliant idea."}),(0,t.jsxs)("div",{className:"bg-white/80 p-2 rounded-lg shadow-md border-l-4 border-blue-500",children:[t.jsx("h1",{className:"text-xl font-semibold text-blue-500",children:"Important:"}),t.jsx("p",{className:"text-base text-gray-800",children:"- Now there is one caveat in here, when we are shooting the ball, there should be no movement in the background, that is the background could be cluttered, does not matter, but there should not be a moving object in the frame, because then it would be captured by the absolute difference."})]}),(0,t.jsxs)("p",{id:"shape-of-ball",className:`${e} text font-bold`,children:["4.3.3 Ball not being ",t.jsx("em",{children:"ball"})," shaped"]}),(0,t.jsxs)("p",{className:`${e}`,children:["When the ball travels at a faster pace, in a particular frame, it appears to have a deformed shape, more like a ",t.jsx("em",{children:"comet"}),"."]}),(0,t.jsxs)("div",{className:"flex flex-col items-center mb-8 lg:mb-0",children:[t.jsx("img",{src:"/images/ping-pong-ball-tracking-system/comet_shape.jpeg",alt:"Description of image",className:"rounded-lg w-full max-w-[800px]"}),t.jsx("p",{className:`${e} mt-4 text-white`,children:"Here the value are:- green value (mid_value) = 112 Red value (minimum_value) = 84"})]}),t.jsx("p",{className:`${e}`,children:"So no existing articles, blogs or open cv functions which detect objects helped us."}),t.jsx("p",{className:`${e}`,children:"https://pyimagesearch.com/2015/09/14/ball-tracking-with-opencv/"}),t.jsx("p",{className:`${e}`,children:"This article gave us a good starting point, but was not able to track the ball because of how fast the ball was moving and the ball losing its shape, and the ball was only available for 1-3 frames."}),t.jsx("p",{className:`${e}`,children:"So that is where we decided to actually just detect the contours in the image subtracted, get the area of the contour and if it is 100px, and the aspect ratio 3, that is its more of oval shape than boxier shape, then draw a circle around it, and start tracking its coordinates of the center."}),t.jsx("p",{className:`${e}`,children:"As you can see in this particular frame, its not circle, but a deformed shape, which was quite challenging to track, but because of not tracking circle, but tracking contours and having threshold of area and aspect ratio, we were able to draw around the contour and mark a circle around it and get the center coordinates."}),(0,t.jsxs)("div",{className:"flex flex-col lg:flex-row lg:justify-center lg:space-x-8 items-center",children:[(0,t.jsxs)("div",{className:"flex flex-col items-center",children:[t.jsx("img",{src:"/images/ping-pong-ball-tracking-system/comet_in_gif_1.png",alt:"Description of image",className:"rounded-lg max-w-[400px]"}),t.jsx("p",{className:`${e} mt-4 text-white`,children:"Ball shaped like amoeba"})]}),(0,t.jsxs)("div",{className:"flex flex-col items-center mb-8 lg:mb-0",children:[t.jsx("img",{src:"/images/ping-pong-ball-tracking-system/comet_in_gif_2.png",alt:"Description of image",className:"rounded-lg w-full max-w-[400px]"}),t.jsx("p",{className:`${e} mt-4 text-white`,children:"Less ameba"})]})]}),(0,t.jsxs)("div",{className:"flex flex-col items-center mb-8 lg:mb-0",children:[t.jsx("img",{src:"/images/ping-pong-ball-tracking-system/ping_track.gif",alt:"Description of image",className:"rounded-lg w-full max-w-[800px]"}),t.jsx("p",{className:`${e} mt-4 text-white`,children:"Hi"})]}),t.jsx("p",{id:"coordinates-to-distance",className:`${e} text-lg font-bold`,children:"4.4. Coordinates to actual distance"}),t.jsx("p",{className:`${e}`,children:"Now that you have understood how we have the center coordinates of the ball, but how to get the distance from it."}),t.jsx("p",{className:`${e}`,children:"Now here is where the calibration part comes into the picture."}),t.jsx("p",{className:`${e}`,children:"We have x, y coordinates of the circle with respect to the open cv window."}),(0,t.jsxs)("div",{className:"flex flex-col items-center mb-8 lg:mb-0",children:[t.jsx("img",{src:"/images/ping-pong-ball-tracking-system/distance_relative_1.png",alt:"Description of image",className:"rounded-lg w-full max-w-[800px]"}),t.jsx("p",{className:`${e} mt-4 text-white`,children:"Here the value are:- green value (mid_value) = 112 Red value (minimum_value) = 84"})]}),(0,t.jsxs)("div",{className:"flex flex-col items-center mb-8 lg:mb-0",children:[t.jsx("img",{src:"/images/ping-pong-ball-tracking-system/distance_relative_2.png",alt:"Description of image",className:"rounded-lg w-full max-w-[800px]"}),t.jsx("p",{className:`${e} mt-4 text-white`,children:"Here the value are:- green value (mid_value) = 112 Red value (minimum_value) = 84"})]}),t.jsx("p",{className:`${e}`,children:"Using above two pictures, 640 pixels == 56 inches Therefore, each pixel has = 0.0875 inches Now the coordinates are:- 223 px, 263 px Therefore, the ball is 223 * 0.0875 = 19.5125 inches"}),t.jsx("p",{className:`${e}`,children:"We have x, y coordinates of the circle with respect to the open cv window."}),(0,t.jsxs)("div",{className:"flex flex-col items-center mb-8 lg:mb-0",children:[t.jsx("img",{src:"/images/ping-pong-ball-tracking-system/distance_relative_4.png",alt:"Description of image",className:"rounded-lg w-full max-w-[800px]"}),t.jsx("p",{className:`${e} mt-4 text-white`,children:"Here the value are:- green value (mid_value) = 112 Red value (minimum_value) = 84"})]}),t.jsx("p",{className:`${e}`,children:"So the distance, from origin is, 84 + 19.512 = 103.5125 inches, so you can see in the output screenshot above."})]})}},68295:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>t});let t=(0,s(68570).createProxy)(String.raw`/Users/sunday/brainfuck/sundays-internet-home/src/app/layout.js#default`)},54864:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>t});let t=(0,s(68570).createProxy)(String.raw`/Users/sunday/brainfuck/sundays-internet-home/src/app/not-found.js#default`)},73881:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>i});var t=s(66621);let i=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,t.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},23824:()=>{}};var a=require("../../../webpack-runtime.js");a.C(e);var s=e=>a(a.s=e),t=a.X(0,[948,945,422,481,607,710],()=>s(69566));module.exports=t})();