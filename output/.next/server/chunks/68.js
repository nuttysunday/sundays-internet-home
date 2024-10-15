exports.id=68,exports.ids=[68],exports.modules={34510:(e,t,n)=>{Promise.resolve().then(n.t.bind(n,12994,23)),Promise.resolve().then(n.t.bind(n,96114,23)),Promise.resolve().then(n.t.bind(n,9727,23)),Promise.resolve().then(n.t.bind(n,79671,23)),Promise.resolve().then(n.t.bind(n,41868,23)),Promise.resolve().then(n.t.bind(n,84759,23))},95262:(e,t,n)=>{Promise.resolve().then(n.bind(n,97567))},74003:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var r=n(91367),i=n(45353),o=n(2687),l=n(17577),s=n.n(l),a=n(86220);function d(e,t){var n=Object.create(null);return e&&l.Children.map(e,function(e){return e}).forEach(function(e){n[e.key]=t&&(0,l.isValidElement)(e)?t(e):e}),n}function c(e,t,n){return null!=n[t]?n[t]:e.props[t]}var u=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},m=function(e){function t(t,n){var r,i=(r=e.call(this,t,n)||this).handleExited.bind(function(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(r));return r.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},r}(0,o.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n,r,i=t.children,o=t.handleExited;return{children:t.firstRender?d(e.children,function(t){return(0,l.cloneElement)(t,{onExited:o.bind(null,t),in:!0,appear:c(t,"appear",e),enter:c(t,"enter",e),exit:c(t,"exit",e)})}):(Object.keys(r=function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var r,i=Object.create(null),o=[];for(var l in e)l in t?o.length&&(i[l]=o,o=[]):o.push(l);var s={};for(var a in t){if(i[a])for(r=0;r<i[a].length;r++){var d=i[a][r];s[i[a][r]]=n(d)}s[a]=n(a)}for(r=0;r<o.length;r++)s[o[r]]=n(o[r]);return s}(i,n=d(e.children))).forEach(function(t){var s=r[t];if((0,l.isValidElement)(s)){var a=t in i,d=t in n,u=i[t],m=(0,l.isValidElement)(u)&&!u.props.in;d&&(!a||m)?r[t]=(0,l.cloneElement)(s,{onExited:o.bind(null,s),in:!0,exit:c(s,"exit",e),enter:c(s,"enter",e)}):d||!a||m?d&&a&&(0,l.isValidElement)(u)&&(r[t]=(0,l.cloneElement)(s,{onExited:o.bind(null,s),in:u.props.in,exit:c(s,"exit",e),enter:c(s,"enter",e)})):r[t]=(0,l.cloneElement)(s,{in:!1})}}),r),firstRender:!1}},n.handleExited=function(e,t){var n=d(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState(function(t){var n=(0,i.Z)({},t.children);return delete n[e.key],{children:n}}))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,i=(0,r.Z)(e,["component","childFactory"]),o=this.state.contextValue,l=u(this.state.children).map(n);return(delete i.appear,delete i.enter,delete i.exit,null===t)?s().createElement(a.Z.Provider,{value:o},l):s().createElement(a.Z.Provider,{value:o},s().createElement(t,i,l))},t}(s().Component);m.propTypes={},m.defaultProps={component:"div",childFactory:function(e){return e}};let h=m},97567:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>g});var r=n(10326),i=n(17577);n(23824);var o=n(90434),l=n(93402),s=n(52646),a=n(35047);let d=({sx:e})=>{let t=(0,a.usePathname)();return(0,r.jsxs)(l.default,{sx:{...e,display:"flex",gap:{xs:"1rem",sm:"1rem",md:"3rem"},flexDirection:"row",justifyContent:{xs:"space-between"}},children:[r.jsx(o.default,{href:"/",passHref:!0,children:r.jsx(s.Z,{sx:{color:"/"===t?"white":void 0,fontStyle:"/"===t?"normal":"italic",padding:"0.5rem 0","&:hover":{color:"gray"}},children:"ABOUT"})}),r.jsx(o.default,{href:"/work",passHref:!0,children:r.jsx(s.Z,{sx:{color:"/work"===t?"white":void 0,fontStyle:"/work"===t?"normal":"italic",padding:"0.5rem 0","&:hover":{color:"gray"}},children:"WORK"})}),r.jsx(o.default,{href:"/skills",passHref:!0,children:r.jsx(s.Z,{sx:{color:"/skills"===t?"white":void 0,fontStyle:"/skills"===t?"normal":"italic",padding:"0.5rem 0","&:hover":{color:"gray"}},children:"SKILLS"})}),r.jsx(o.default,{href:"/projects",passHref:!0,children:r.jsx(s.Z,{sx:{color:"/projects"===t?"white":void 0,fontStyle:"/projects"===t?"normal":"italic",padding:"0.5rem 0","&:hover":{color:"gray"}},children:"PROJECTS"})})]})};var c=n(87514),u=n(52188),m=n(67286),h=n(7281),p=n(36249),f=n(22449);let x=[{href:"https://github.com/nuttysunday",icon:m.Z,label:"GitHub"},{href:"https://www.linkedin.com/in/shivam-ghodke/",icon:h.Z,label:"LinkedIn"},{href:"mailto:mail@shivam.foo",icon:p.Z,label:"Email"},{href:"https://docs.google.com/document/d/e/2PACX-1vT02vaxSFn4V0yvp61oHaj73079Y-VVu3jWX-DXa-69OOjcSHdLgowbyEShv6pVmVpNYPb4JpTsz8jg/pub",icon:f.Z,label:"Resume"}],v=({sx:e})=>r.jsx(l.default,{sx:{...e,display:"flex",gap:2,justifyContent:{xs:"space-between"}},children:x.map(({href:e,icon:t,label:n},i)=>r.jsx(c.Z,{title:n,arrow:!0,children:r.jsx(u.Z,{href:e,target:"_blank",rel:"noopener noreferrer",children:r.jsx(l.default,{sx:{padding:1,paddingRight:3===i?0:1,borderRadius:"50%",transition:"transform 0.3s ease","&:hover":{transform:"scale(1.5)"},paddingLeft:{xs:0===i?0:1}},children:r.jsx(t,{sx:{color:"white"}})})})},i))}),g=({children:e})=>{let t;let[n,o]=(0,i.useState)(!1),s=()=>{o(!0),t&&clearTimeout(t),t=setTimeout(()=>{o(!1)},800)};return(0,i.useEffect)(()=>(window.addEventListener("scroll",s),()=>{window.removeEventListener("scroll",s),t&&clearTimeout(t)}),[]),r.jsx("html",{lang:"en",children:r.jsx("body",{children:(0,r.jsxs)(l.default,{className:"font-mono text-indigo-300",sx:{width:{xs:"100%",lg:"70%"},maxWidth:"1200px",margin:"0 auto",display:"flex",flexDirection:"column",position:"relative"},children:[(0,r.jsxs)(l.default,{sx:{position:"sticky",top:0,zIndex:1e3,marginY:{xs:"1rem",md:"3rem"},padding:{xs:"1rem",md:"2rem 2rem 0rem"},display:"flex",justifyContent:"space-between",flexDirection:{xs:"column",sm:"row",md:"row"},gap:{xs:"1rem"},background:"linear-gradient(to top, rgba(24, 24, 27, 0.9), rgba(24, 24, 27, 1))",borderRadius:"8px",boxShadow:{xs:n?"0 15px 30px -15px rgba(255,255,255,0.4)":"none",lg:"none"}},children:[r.jsx(d,{}),r.jsx(v,{})]}),r.jsx(l.default,{sx:{padding:{xs:"1.2rem 1.2rem 0rem",md:"2rem 2rem 0rem"},position:"relative",zIndex:1,textAlign:{xs:"left",md:"justify"},marginBottom:"4rem"},children:e})]})})})}},68295:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r});let r=(0,n(68570).createProxy)(String.raw`/Users/sunday/brainfuck/sundays-internet-home/src/app/layout.js#default`)},73881:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>i});var r=n(66621);let i=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,r.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},23824:()=>{}};