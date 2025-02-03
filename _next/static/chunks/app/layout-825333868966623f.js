(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{1842:function(e,t,r){Promise.resolve().then(r.bind(r,8919)),Promise.resolve().then(r.bind(r,7826)),Promise.resolve().then(r.bind(r,8302)),Promise.resolve().then(r.bind(r,9201)),Promise.resolve().then(r.bind(r,9380)),Promise.resolve().then(r.t.bind(r,7977,23)),Promise.resolve().then(r.t.bind(r,7402,23))},7826:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var a=r(9268);r(6006);var i=r(8121),o=r(6494),n=r(5846),s=r.n(n),l=function(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=function e(t){var r,a,i="";if("string"==typeof t||"number"==typeof t)i+=t;else if("object"==typeof t){if(Array.isArray(t))for(r=0;r<t.length;r++)t[r]&&(a=e(t[r]))&&(i&&(i+=" "),i+=a);else for(r in t)t[r]&&(i&&(i+=" "),i+=r)}return i}(e))&&(a&&(a+=" "),a+=t);return a},c=r(9201);function d(){let{activeSection:e,setActiveSection:t,setTimeOfLastClick:r}=(0,c.useActiveSectionContext)();return(0,a.jsxs)("header",{className:"z-[999] relative",children:[(0,a.jsx)(i.E.div,{className:"fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75",initial:{y:-100,x:"-50%",opacity:0},animate:{y:0,x:"-50%",opacity:1}}),(0,a.jsx)("nav",{className:"flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0",children:(0,a.jsx)("ul",{className:"flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5",children:o.Ok.map(o=>(0,a.jsx)(i.E.li,{className:"h-3/4 flex items-center justify-center relative",initial:{y:-100,opacity:0},animate:{y:0,opacity:1},children:(0,a.jsxs)(s(),{className:l("flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",{"text-gray-950 dark:text-gray-200":e===o.name}),href:o.hash,onClick:()=>{t(o.name),r(Date.now())},children:[o.name,o.name===e&&(0,a.jsx)(i.E.span,{className:"bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800",layoutId:"activeSection",transition:{type:"spring",stiffness:380,damping:30}})]})},o.hash))})})]})}},8302:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return n}});var a=r(9268),i=r(9380);r(6006);var o=r(8136);function n(){let{theme:e,toggleTheme:t}=(0,i.useTheme)();return(0,a.jsx)("button",{className:"fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950",onClick:t,children:"light"===e?(0,a.jsx)(o.eSY,{}):(0,a.jsx)(o.s1t,{})})}},9201:function(e,t,r){"use strict";r.r(t),r.d(t,{ActiveSectionContext:function(){return o},default:function(){return n},useActiveSectionContext:function(){return s}});var a=r(9268),i=r(6006);let o=(0,i.createContext)(null);function n(e){let{children:t}=e,[r,n]=(0,i.useState)("Home"),[s,l]=(0,i.useState)(0);return(0,a.jsx)(o.Provider,{value:{activeSection:r,setActiveSection:n,timeOfLastClick:s,setTimeOfLastClick:l},children:t})}function s(){let e=(0,i.useContext)(o);if(null===e)throw Error("useActiveSectionContext must be used within an ActiveSectionContextProvider");return e}},9380:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return n},useTheme:function(){return s}});var a=r(9268),i=r(6006);let o=(0,i.createContext)(null);function n(e){let{children:t}=e,[r,n]=(0,i.useState)("light");return(0,i.useEffect)(()=>{let e=window.localStorage.getItem("theme");e?(n(e),"dark"===e&&document.documentElement.classList.add("dark")):window.matchMedia("(prefers-color-scheme: dark)").matches&&(n("dark"),document.documentElement.classList.add("dark"))},[]),(0,a.jsx)(o.Provider,{value:{theme:r,toggleTheme:()=>{"light"===r?(n("dark"),window.localStorage.setItem("theme","dark"),document.documentElement.classList.add("dark")):(n("light"),window.localStorage.setItem("theme","light"),document.documentElement.classList.remove("dark"))}},children:t})}function s(){let e=(0,i.useContext)(o);if(null===e)throw Error("useTheme must be used within a ThemeContextProvider");return e}},6494:function(e,t,r){"use strict";r.d(t,{$c:function(){return l},Ok:function(){return s},nD:function(){return c},ZU:function(){return d},Ih:function(){return u}});var a=r(6006),i=r(198),o=r(2801),n=r(7782);let s=[{name:"Home",hash:"#home"},{name:"About",hash:"#about"},{name:"Projects",hash:"#projects"},{name:"Skills",hash:"#skills"},{name:"Experience",hash:"#experience"},{name:"Contact",hash:"#contact"}],l=[{title:"Started Diploma in Computer System Design",location:"NIBM - Colombo",description:"After A/Ls , I immediately started Diploma In Computer System Design and Completed it by end of2022 ",icon:a.createElement(n.qWM),date:"2022 - 2023"},{title:"Started Higher National Diploma in Software Engineering",location:"NIBM - Colombo",description:"By the completion of Diploma , I immediately started HND in Software engineering ",icon:a.createElement(n.qWM),date:"2023 - 2024"},{title:"Front-End Developer (6 Months Intern)",location:"CyberCraft.lk",description:"I worked as a front-end developer for 2 years on remote projects at CyberCraft PVT LTD. During this time, I enhanced my skills in React Native and Node.js.",icon:a.createElement(i.zQU),date:"2022 - 2024"},{title:"Full-Stack MERN Developer",location:"Fiverr , Upwork",description:"I'm now a full-stack MERN developer working as a freelancer. My stack includes React.js, Express.js, Node.js and MongoDB. I'm open to full-time opportunities.",icon:a.createElement(o.huN),date:"2021 - present"}],c=[{title:"Driver-Smart",description:"I developed two mobile apps, one for drivers and another for police officers, aimed at verifying driving licenses, recording violations, and facilitating fines and payments.",tags:["React Native","Node.js","MongoDB","Express.js"],imageUrl:{src:"/nadeerasilvaa.github.io/_next/static/media/corpcomment.e7df1348.png",height:1528,width:1092,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAIAAABVpBlvAAAAkUlEQVR42j3GvQ6CMBAA4Ht6R3wH42R0cDDGRyBgjBqNRDQMQELKXwtKr1yvMvlNH7Dl5FMEIjo371hlGhGEkXed7rJwm/rHNi6+NRSjDMrIOywX4f6BeYMdiLo63a6r9WY29/znhawFg2ZAnSsRJa++65kZnHPM7m8qjKMtK1SdaSVOIWIgIq0HKaVSErUmoh/8hYMeksXgBgAAAABJRU5ErkJggg==",blurWidth:6,blurHeight:8},url:"https://github.com/NadeeraSilvaa/DriveSmartDriver"},{title:"Course Connect",description:"Developed a android application to manage short courses offered by a university. It allows students to register as users and enroll in courses, while admins can log in to add new short courses.",tags:["Java","XML","Firebase","SQLITE","Android Studio"],imageUrl:{src:"/nadeerasilvaa.github.io/_next/static/media/rmtdev.7be1090a.png",height:1654,width:878,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAICAYAAADeM14FAAAAfUlEQVR42gWAQQvBYBjHf8/rv41SdhoHIjflQzj6tr7KyEXKbcVR2WTbu0fm7ifg4HiNM1L1bhfl/ZUrzfLlpkD15dyV1w/jronb/Sxost7ZsUghdvaNrenZZDyqHklYSFAS3NMENBqGAKY+kv1aiELBQKsi3PKpzc2oDcIfW0gtISsaWwkAAAAASUVORK5CYII=",blurWidth:4,blurHeight:8},url:"https://github.com/NadeeraSilvaa/Course_Management_System"},{title:"Emotion-Detector",description:"I developed a Facial Emotion Detector using digital image processing libraries and by training a machine learning model.",tags:["Python","HTML","CSS","JavaScript","TensorFlow","Open-CV"],imageUrl:{src:"/nadeerasilvaa.github.io/_next/static/media/wordanalytics.6d62daf0.png",height:911,width:1896,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAbklEQVR42mP4f2jt/70r/+9Z/m/bon9bFwIZ//ev+r51McO9xbO/b1nybMXCbztX/z648e2W5Zcm9m/MrWZQZnePs4ueEFfUl1wSF5ZrYR9vLuMVZebFIKdgycBpwMCgx8CgDyTFOIx4RLQYWHQA9bUtzaDsCYwAAAAASUVORK5CYII=",blurWidth:8,blurHeight:4},url:"https://github.com/NadeeraSilvaa/Facial-Emotion-Detector-with-Live-Feed"}],d=["HTML","CSS","JavaScript","TypeScript","React","Next.js","Node.js","Express","Git","MongoDB","Python","MySQL","SQLlite","Java","Arduino - Robotics","Solidity - BlockChain"],u=["Sinhala - Native","English - Professional","Tamil - Good","Self Study","Team Player","Punctual","Problem Solving","Eager to Learn"]},7402:function(){},7977:function(e){e.exports={style:{fontFamily:"'__Inter_8c47c1', '__Inter_Fallback_8c47c1'",fontStyle:"normal"},className:"__className_8c47c1"}},8919:function(e,t,r){"use strict";let a,i;r.r(t),r.d(t,{CheckmarkIcon:function(){return Q},ErrorIcon:function(){return z},LoaderIcon:function(){return $},ToastBar:function(){return ee},ToastIcon:function(){return Z},Toaster:function(){return ei},default:function(){return eo},resolveValue:function(){return k},toast:function(){return B},useToaster:function(){return _},useToasterStore:function(){return O}});var o,n=r(6006);let s={data:""},l=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||s,c=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,d=/\/\*[^]*?\*\/|  +/g,u=/\n+/g,m=(e,t)=>{let r="",a="",i="";for(let o in e){let n=e[o];"@"==o[0]?"i"==o[1]?r=o+" "+n+";":a+="f"==o[1]?m(n,o):o+"{"+m(n,"k"==o[1]?"":t)+"}":"object"==typeof n?a+=m(n,t?t.replace(/([^,])+/g,e=>o.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):o):null!=n&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=m.p?m.p(o,n):o+":"+n+";")}return r+(t&&i?t+"{"+i+"}":i)+a},p={},f=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+f(e[r]);return t}return e},h=(e,t,r,a,i)=>{var o;let n=f(e),s=p[n]||(p[n]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(n));if(!p[s]){let t=n!==e?e:(e=>{let t,r,a=[{}];for(;t=c.exec(e.replace(d,""));)t[4]?a.shift():t[3]?(r=t[3].replace(u," ").trim(),a.unshift(a[0][r]=a[0][r]||{})):a[0][t[1]]=t[2].replace(u," ").trim();return a[0]})(e);p[s]=m(i?{["@keyframes "+s]:t}:t,r?"":"."+s)}let l=r&&p.g?p.g:null;return r&&(p.g=p[s]),o=p[s],l?t.data=t.data.replace(l,o):-1===t.data.indexOf(o)&&(t.data=a?o+t.data:t.data+o),s},g=(e,t,r)=>e.reduce((e,a,i)=>{let o=t[i];if(o&&o.call){let e=o(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;o=t?"."+t:e&&"object"==typeof e?e.props?"":m(e,""):!1===e?"":e}return e+a+(null==o?"":o)},"");function b(e){let t=this||{},r=e.call?e(t.p):e;return h(r.unshift?r.raw?g(r,[].slice.call(arguments,1),t.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(t.p):r),{}):r,l(t.target),t.g,t.o,t.k)}b.bind({g:1});let y,v,x,A=b.bind({k:1});function w(e,t){let r=this||{};return function(){let a=arguments;function i(o,n){let s=Object.assign({},o),l=s.className||i.className;r.p=Object.assign({theme:v&&v()},s),r.o=/ *go\d+/.test(l),s.className=b.apply(r,a)+(l?" "+l:""),t&&(s.ref=n);let c=e;return e[0]&&(c=s.as||e,delete s.as),x&&c[0]&&x(s),y(c,s)}return t?t(i):i}}var E=e=>"function"==typeof e,k=(e,t)=>E(e)?e(t):e,S=(a=0,()=>(++a).toString()),C=()=>{if(void 0===i&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");i=!e||e.matches}return i},N=new Map,I=e=>{if(N.has(e))return;let t=setTimeout(()=>{N.delete(e),L({type:4,toastId:e})},1e3);N.set(e,t)},j=e=>{let t=N.get(e);t&&clearTimeout(t)},D=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&j(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:r}=t;return e.toasts.find(e=>e.id===r.id)?D(e,{type:1,toast:r}):D(e,{type:0,toast:r});case 3:let{toastId:a}=t;return a?I(a):e.toasts.forEach(e=>{I(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===a||void 0===a?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+i}))}}},M=[],P={toasts:[],pausedAt:void 0},L=e=>{P=D(P,e),M.forEach(e=>{e(P)})},R={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},O=(e={})=>{let[t,r]=(0,n.useState)(P);(0,n.useEffect)(()=>(M.push(r),()=>{let e=M.indexOf(r);e>-1&&M.splice(e,1)}),[t]);let a=t.toasts.map(t=>{var r,a;return{...e,...e[t.type],...t,duration:t.duration||(null==(r=e[t.type])?void 0:r.duration)||(null==e?void 0:e.duration)||R[t.type],style:{...e.style,...null==(a=e[t.type])?void 0:a.style,...t.style}}});return{...t,toasts:a}},T=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||S()}),U=e=>(t,r)=>{let a=T(t,e,r);return L({type:2,toast:a}),a.id},B=(e,t)=>U("blank")(e,t);B.error=U("error"),B.success=U("success"),B.loading=U("loading"),B.custom=U("custom"),B.dismiss=e=>{L({type:3,toastId:e})},B.remove=e=>L({type:4,toastId:e}),B.promise=(e,t,r)=>{let a=B.loading(t.loading,{...r,...null==r?void 0:r.loading});return e.then(e=>(B.success(k(t.success,e),{id:a,...r,...null==r?void 0:r.success}),e)).catch(e=>{B.error(k(t.error,e),{id:a,...r,...null==r?void 0:r.error})}),e};var H=(e,t)=>{L({type:1,toast:{id:e,height:t}})},F=()=>{L({type:5,time:Date.now()})},_=e=>{let{toasts:t,pausedAt:r}=O(e);(0,n.useEffect)(()=>{if(r)return;let e=Date.now(),a=t.map(t=>{if(t.duration===1/0)return;let r=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(r<0){t.visible&&B.dismiss(t.id);return}return setTimeout(()=>B.dismiss(t.id),r)});return()=>{a.forEach(e=>e&&clearTimeout(e))}},[t,r]);let a=(0,n.useCallback)(()=>{r&&L({type:6,time:Date.now()})},[r]),i=(0,n.useCallback)((e,r)=>{let{reverseOrder:a=!1,gutter:i=8,defaultPosition:o}=r||{},n=t.filter(t=>(t.position||o)===(e.position||o)&&t.height),s=n.findIndex(t=>t.id===e.id),l=n.filter((e,t)=>t<s&&e.visible).length;return n.filter(e=>e.visible).slice(...a?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+i,0)},[t]);return{toasts:t,handlers:{updateHeight:H,startPause:F,endPause:a,calculateOffset:i}}},z=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${A`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${A`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${A`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,$=w("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${A`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`} 1s linear infinite;
`,Q=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${A`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${A`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,V=w("div")`
  position: absolute;
`,K=w("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Y=w("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${A`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Z=({toast:e})=>{let{icon:t,type:r,iconTheme:a}=e;return void 0!==t?"string"==typeof t?n.createElement(Y,null,t):t:"blank"===r?null:n.createElement(K,null,n.createElement($,{...a}),"loading"!==r&&n.createElement(V,null,"error"===r?n.createElement(z,{...a}):n.createElement(Q,{...a})))},W=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,G=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,q=w("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,J=w("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,X=(e,t)=>{let r=e.includes("top")?1:-1,[a,i]=C()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[W(r),G(r)];return{animation:t?`${A(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${A(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ee=n.memo(({toast:e,position:t,style:r,children:a})=>{let i=e.height?X(e.position||t||"top-center",e.visible):{opacity:0},o=n.createElement(Z,{toast:e}),s=n.createElement(J,{...e.ariaProps},k(e.message,e));return n.createElement(q,{className:e.className,style:{...i,...r,...e.style}},"function"==typeof a?a({icon:o,message:s}):n.createElement(n.Fragment,null,o,s))});o=n.createElement,m.p=void 0,y=o,v=void 0,x=void 0;var et=({id:e,className:t,style:r,onHeightUpdate:a,children:i})=>{let o=n.useCallback(t=>{if(t){let r=()=>{a(e,t.getBoundingClientRect().height)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,a]);return n.createElement("div",{ref:o,className:t,style:r},i)},er=(e,t)=>{let r=e.includes("top"),a=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:C()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...r?{top:0}:{bottom:0},...a}},ea=b`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ei=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:a,children:i,containerStyle:o,containerClassName:s})=>{let{toasts:l,handlers:c}=_(r);return n.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...o},className:s,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map(r=>{let o=r.position||t,s=er(o,c.calculateOffset(r,{reverseOrder:e,gutter:a,defaultPosition:t}));return n.createElement(et,{id:r.id,key:r.id,onHeightUpdate:c.updateHeight,className:r.visible?ea:"",style:s},"custom"===r.type?k(r.message,r):i?i(r):n.createElement(ee,{toast:r,position:o}))}))},eo=B}},function(e){e.O(0,[680,296,166,269,584,253,769,744],function(){return e(e.s=1842)}),_N_E=e.O()}]);