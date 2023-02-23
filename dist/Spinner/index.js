import e,{useContext as n}from"react";import{bool as r,oneOf as o,shape as i,string as t}from"prop-types";import a from"color";const l=(e,...n)=>{let r=[...n],o="";return r.forEach((n=>{if(n&&"string"==typeof n){let r=null==n?void 0:n.trim(),i=r.split(/\s/g);i.length>1&&i.forEach((n=>{let r=null==n?void 0:n.trim();e[r]&&(o+=`${e[r]} `)})),e[r]&&(o+=`${e[r]} `)}})),o};function s(e,n){void 0===n&&(n={});var r=n.insertAt;if(e&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===r&&o.firstChild?o.insertBefore(i,o.firstChild):o.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}var d={"spinner-ring":"Spinner-module_spinner-ring__LmWnG","spinner-default":"Spinner-module_spinner-default__q4r38","spinner-dots":"Spinner-module_spinner-dots__we1rz","spinner-ripple":"Spinner-module_spinner-ripple__otiqE","spinner-box":"Spinner-module_spinner-box__lGXZK",ball1:"Spinner-module_ball1__inA1Y",ball2:"Spinner-module_ball2__pC4Yo","spinner-primary":"Spinner-module_spinner-primary__QEjrc","spinner-secondary":"Spinner-module_spinner-secondary__Iyhsh","spinner-light":"Spinner-module_spinner-light__21Ew1","spinner-dark":"Spinner-module_spinner-dark__eK-U9","spinner-extra-large":"Spinner-module_spinner-extra-large__Cok03","spinner-large":"Spinner-module_spinner-large__Qd2w9","spinner-small":"Spinner-module_spinner-small__OyfLz","spinner-extra-small":"Spinner-module_spinner-extra-small__pspKr",rotate:"Spinner-module_rotate__XvwN5"};s(':root{--spinner-background-color:var(--ai-primary-color);--spinner-border-radius:5px;--spinner-font-size:var(--ai-font-size);--spinner-margin:15px;--spinner-cursor:pointer;--spinner-border-width:2px;--spinner-padding:3px;--spinner-main-bg:#f8f8f8;--spinner-scale:1}.Spinner-module_spinner-ring__LmWnG{display:inline-block}.Spinner-module_spinner-ring__LmWnG:after{animation:Spinner-module_spinner-ring__LmWnG 1.2s linear infinite;border:var(--spinner-border-width) solid var(--spinner-background-color);border-color:var(--spinner-background-color) transparent var(--spinner-background-color) transparent;border-radius:50%;content:" ";display:block;height:calc(var(--spinner-font-size)*2);width:calc(var(--spinner-font-size)*2)}.Spinner-module_spinner-default__q4r38{display:inline-block;height:calc(var(--spinner-font-size)*2);position:relative;width:calc(var(--spinner-font-size)*2)}.Spinner-module_spinner-default__q4r38 div{animation:Spinner-module_spinner-default__q4r38 1.2s cubic-bezier(.5,0,.5,1) infinite;border:var(--spinner-border-width) solid var(--spinner-background-color);border-color:var(--spinner-background-color) transparent transparent transparent;border-radius:50%;box-sizing:border-box;display:block;height:calc(var(--spinner-font-size)*2);position:absolute;width:calc(var(--spinner-font-size)*2)}.Spinner-module_spinner-default__q4r38 div:first-child{animation-delay:-.45s}.Spinner-module_spinner-default__q4r38 div:nth-child(2){animation-delay:-.3s}.Spinner-module_spinner-default__q4r38 div:nth-child(3){animation-delay:-.15s}@keyframes Spinner-module_spinner-default__q4r38{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.Spinner-module_spinner-dots__we1rz{align-items:center;display:inline-flex;flex-wrap:wrap;gap:var(--spinner-padding);height:calc(var(--spinner-font-size)*2);justify-content:center;position:relative;width:calc(var(--spinner-font-size)*2)}.Spinner-module_spinner-dots__we1rz div{animation:Spinner-module_spinner-dots__we1rz 1.2s linear infinite;background:var(--spinner-background-color);border-radius:50%;height:calc(var(--spinner-font-size)*2/3 - var(--spinner-padding));width:calc(var(--spinner-font-size)*2/3 - var(--spinner-padding))}.Spinner-module_spinner-dots__we1rz div:first-child{animation-delay:0s}.Spinner-module_spinner-dots__we1rz div:nth-child(2){animation-delay:-.4s}.Spinner-module_spinner-dots__we1rz div:nth-child(3){animation-delay:-.8s}.Spinner-module_spinner-dots__we1rz div:nth-child(4){animation-delay:-.4s}.Spinner-module_spinner-dots__we1rz div:nth-child(5){animation-delay:-.8s}.Spinner-module_spinner-dots__we1rz div:nth-child(6){animation-delay:-1.2s}.Spinner-module_spinner-dots__we1rz div:nth-child(7){animation-delay:-.8s}.Spinner-module_spinner-dots__we1rz div:nth-child(8){animation-delay:-1.2s}.Spinner-module_spinner-dots__we1rz div:nth-child(9){animation-delay:-1.6s}@keyframes Spinner-module_spinner-dots__we1rz{0%,to{opacity:1}50%{opacity:.5}}.Spinner-module_spinner-ripple__otiqE{display:inline-block;height:calc(var(--spinner-font-size)*2);position:relative;transform:scale(var(--spinner-scale));width:calc(var(--spinner-font-size)*2)}.Spinner-module_spinner-ripple__otiqE div{animation:Spinner-module_spinner-ripple__otiqE 1s cubic-bezier(0,.2,.8,1) infinite;border:4px solid var(--spinner-background-color);border-radius:50%;opacity:1;position:absolute}.Spinner-module_spinner-ripple__otiqE div:nth-child(2){animation-delay:-.5s}@keyframes Spinner-module_spinner-ripple__otiqE{0%{height:0;left:36px;opacity:0;top:36px;width:0}4.9%{height:0;left:36px;opacity:0;top:36px;width:0}5%{height:0;left:36px;opacity:1;top:36px;width:0}to{height:72px;left:0;opacity:0;top:0;width:72px}}.Spinner-module_spinner-box__lGXZK{height:calc(var(--spinner-font-size)*3);width:calc(var(--spinner-font-size)*3)}.Spinner-module_spinner-box__lGXZK:after,.Spinner-module_spinner-box__lGXZK:before{border-radius:50%;content:"";display:block;height:var(--spinner-font-size);width:var(--spinner-font-size)}.Spinner-module_spinner-box__lGXZK:before{animation:Spinner-module_ball1__inA1Y 1s infinite;background:var(--ai-primary-color);box-shadow:calc(var(--spinner-font-size)*1.5) 0 0 var(--ai-secondary-color);margin-bottom:10px}.Spinner-module_spinner-box__lGXZK:after{animation:Spinner-module_ball2__pC4Yo 1s infinite;background:var(--ai-secondary-color);box-shadow:calc(var(--spinner-font-size)*1.5) 0 0 var(--ai-bg)}@keyframes Spinner-module_rotate__XvwN5{0%{transform:rotate(0deg) scale(.8)}50%{transform:rotate(1turn) scale(1.2)}to{transform:rotate(2turn) scale(.8)}}@keyframes Spinner-module_ball1__inA1Y{0%{box-shadow:calc(var(--spinner-font-size)*1.5) 0 0 var(--ai-secondary-color)}50%{box-shadow:0 0 0 var(--ai-secondary-color);margin-bottom:0;transform:translate(var(--spinner-font-size),var(--spinner-font-size))}to{box-shadow:calc(var(--spinner-font-size)*1.5) 0 0 var(--ai-secondary-color);margin-bottom:10px}}@keyframes Spinner-module_ball2__pC4Yo{0%{box-shadow:calc(var(--spinner-font-size)*1.5) 0 0 var(--ai-primary-color)}50%{box-shadow:0 0 0 var(--ai-primary-color);margin-top:-10px;transform:translate(var(--spinner-font-size),var(--spinner-font-size))}to{box-shadow:calc(var(--spinner-font-size)*1.5) 0 0 var(--ai-primary-color);margin-top:0}}.Spinner-module_spinner-primary__QEjrc{--spinner-background-color:var(--ai-primary-color)}.Spinner-module_spinner-secondary__Iyhsh{--spinner-background-color:var(--ai-secondary-color)}.Spinner-module_spinner-light__21Ew1{--spinner-background-color:var(--ai-light-color)}.Spinner-module_spinner-dark__eK-U9{--spinner-background-color:var(--ai-dark-color)}.Spinner-module_spinner-extra-large__Cok03{--spinner-font-size:24px;--spinner-border-width:6px}.Spinner-module_spinner-large__Qd2w9{--spinner-font-size:20px;--spinner-border-width:5px}.Spinner-module_spinner-small__OyfLz{--spinner-border-width:3px;--spinner-font-size:12px}.Spinner-module_spinner-extra-small__pspKr{--spinner-border-width:2px;--spinner-font-size:8px}.Spinner-module_spinner-ripple__otiqE.Spinner-module_spinner-extra-large__Cok03{--spinner-scale:2}.Spinner-module_spinner-ripple__otiqE.Spinner-module_spinner-large__Qd2w9{--spinner-scale:1.5}.Spinner-module_spinner-ripple__otiqE.Spinner-module_spinner-small__OyfLz{--spinner-scale:.5}.Spinner-module_spinner-ripple__otiqE.Spinner-module_spinner-extra-small__pspKr{--spinner-scale:.3}@keyframes Spinner-module_spinner-ring__LmWnG{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}');const p="ai",c=["ati-message-alert","accordion","alert","avatar","badge","btn","alert","card","col","container","dropdown","list","modal","pagination","progress","row","spinner","table","tab","tooltip","typography"],m={xs:"extra-small",sm:"small",lg:"large",xl:"extra-large"},f={xs:"extra-small-content",sm:"small-content",lg:"large-content",xl:"extra-large-content","full-width":"full-width","full-height":"full-height",full:"full",expanded:"expanded"},u=["primary","secondary","dark","light","default"],h={dismiss:r,direction:o(["top","bottom","right","left"]),theme:o(u),colorScheme:i({background:t.isRequired,backgroundColor:t.isRequired,color:t.isRequired}),variant:o(["default","ring","dots","box","ripple"]),size:o(["xs","sm","md","lg","xl"])},g=e=>{let n="",r="";return"string"==typeof e&&(n=e,r=e),"object"==typeof e&&e.background&&e.backgroundColor&&(n=e.background,r=e.backgroundColor),{background:n,backgroundColor:r}},b=(e,n={scope:"global",themeId:""})=>{let r="";return Object.keys(e).forEach((o=>{const{main:i,text:t,$hover:l}=e[o],{background:s,backgroundColor:d}=g(i);let m="";const f=a(d).hsl().object(),h=`hsla(${f.h},${f.s}%, 90%, ${f.alpha?f.alpha:"1"})`;let{backgroundHover:b,backgroundColorHover:_}=(e=>{const{h:n,s:r,l:o,alpha:i}=e,t=`hsla(${n},${r}%,${o-5}%,${i||"1"})`;return{backgroundHover:t,backgroundColorHover:t}})(f),v=null;if(l){const e=(e=>{const{main:n,text:r}=e,{background:o,backgroundColor:i}=g(n);return{backgroundHover:o,backgroundColorHover:i,textHover:r}})(l);b=e.backgroundHover,_=e.backgroundColorHover,v=e.textHover}const y=s.includes("gradient")||s.includes("url");u.includes(o)||(m=((e,n,r)=>{let o=`#${n.themeId} {`;return c.forEach((n=>{o+=`--${p}-${n}-background: var(--${e});\n\t\t\t\t   --${p}-${n}-background-color: var(--${e});\n\t\t\t\t   --${p}-${n}-text: var(--${e}-text);\n\t\t\t\t   --${p}-${n}-hover: ${r.isBackgroundImage?r.background:r.backgroundHover};\n\t\t\t\t   --${p}-${n}-color-hover: ${r.backgroundColorHover};\n\t\t\t\t   --${p}-${n}-text-hover: ${r.textHover||r.text};\n\t\t\t\t   --${p}-${n}-hover-box-shadow : ${r.boxShadow};\n\t\t\t\t   ${r.isBackgroundImage?`--${n}-gradient-hover:hsla(0, 0%, 0%, 0.15);`:""}\n    `})),o+="}",o})(o,n,{backgroundColorHover:_,textHover:v,text:t,boxShadow:h,isBackgroundImage:y,background:s,backgroundHover:b,backgroundColor:d})),r+=`\n\t\t${"local"===n.scope?`.${n.componentId}`:`[data-theme-id='${n.themeId}']`}{\n\t\t\t--${p}-${o}:${s} ;\n\t\t\t--${p}-${o}-color: ${d};\n\t\t\t--${p}-${o}-text: ${t};\n\t\t\t--${p}-${o}-hover: ${y?s:b};\n\t\t\t--${p}-${o}-color-hover: ${y?s:_};\n\t\t\t--${p}-${o}-text-hover: ${v||t};\n\t\t\t--${p}-${o}-hover-box-shadow : ${h};\n\t\t\t${y?`--${o}-gradient-hover:hsla(0, 0%, 0%, 0.15);`:""}\n\t\t}\n\t\t${m}\n\t`})),r},_={theme:{default:!0}},v=(n,r,o="",i="",t="",a="",s="",d=null,p=_)=>{var c;const u=`${r}-${`artific-${Math.random().toString(16).slice(2)}`}`,h="default"!==t?`${r}-${t}`:"",g="default"!==a?`${r}-${a}`:"",v=d?`${r}-primary`:"default"!==i?`${r}-${i}`:(null===(c=null==p?void 0:p.theme)||void 0===c?void 0:c.default)?`${r}-primary`:"",y=((e,n)=>n&&"md"!==n?`${e}-${"modal"===e?f[n]:m[n]}`:"")(r,s);let x=null;return d&&(x=((n,r,o)=>{if(r){const i=r;if(!i)return null;let t;return t=e.createElement("style",null,b({primary:{main:{background:i.background,backgroundColor:i.backgroundColor?i.backgroundColor:i.background},text:i.color}},{scope:"local",themeId:"",componentId:o,componentSelector:n})),()=>t}})(r,d,u)),{componentId:u,customCss:x,classNames:`${"accordion"!==r?r:""} ${u} ${o} ${l(n,v,h,g,y,"accordion"!==r?r:"")}`}},y=e.createContext({usingThemeProvider:!1,theme:{},themeId:"",setTheme:()=>{}});s('@import "https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css";@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap");:root{--ai-bg:#fff;--ai-bg-alt:#dddddd2b;--ai-font-family:"Nunito Sans",sans-serif,system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--ai-font-weight:400;--ai-font-size:1rem;--ai-line-height:1.5;--ai-text:#2f3950;--ai-link:#3d58f0;--ai-scroll:#f1f1f1;--ai-border-color:#eee;--ai-gap:15px;--ai-z-index-dropdown:1000;--ai-z-index-sticky:1020;--ai-z-index-fixed:1030;--ai-z-index-modal-backdrop:1040;--ai-z-index-offcanvas:1050;--ai-z-index-modal:1060;--ai-z-index-popover:1070;--ai-z-index-tooltip:1080;--ai-primary:#0015ff;--ai-primary-color:var(--ai-primary);--ai-primary-text:#fff;--ai-primary-hover:#0f30d7;--ai-primary-color-hover:var(--ai-primary-hover);--ai-primary-text-hover:var(--ai-bg);--ai-primary-hover-box-shadow:#b3b9ff;--ai-secondary:#f00573;--ai-secondary-color:var(--ai-secondary);--ai-secondary-text:#fff;--ai-secondary-hover:#a5034f;--ai-secondary-color-hover:var(--ai-secondary-hover);--ai-secondary-text-hover:var(--ai-bg);--ai-secondary-hover-box-shadow:#fdb4d6;--ai-light:#eff5f5;--ai-light-alt:var(--ai-light);--ai-light-color:var(--ai-light);--ai-light-text:#475166;--ai-light-hover:#d0e2e2;--ai-light-color-hover:var(--ai-light-hover);--ai-light-text-hover:var(--ai-bg);--ai-light-hover-box-shadow:#d0e2e2;--ai-dark:#292929;--ai-dark-color:var(--ai-dark);--ai-dark-text:#fff;--ai-dark-hover:#1c1c1c;--ai-dark-color-hover:var(--ai-dark-hover);--ai-dark-text-hover:var(--ai-bg);--ai-dark-hover-box-shadow:#d9d9d9}@font-face{font-family:Segoe UI;font-style:normal;font-weight:100;src:url(https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-light.woff2) format("woff2"),url(https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-light.woff) format("woff")}@font-face{font-family:Segoe UI;font-style:normal;font-weight:300;src:url(https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-semilight.woff2) format("woff2"),url(https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-semilight.woff) format("woff")}@font-face{font-family:Segoe UI;font-style:normal;font-weight:400;src:url(https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-regular.woff2) format("woff2"),url(https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-regular.woff) format("woff")}@font-face{font-family:Segoe UI;font-style:normal;font-weight:600;src:url(https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-semibold.woff2) format("woff2"),url(https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-semibold.woff) format("woff")}@font-face{font-family:Segoe UI;font-style:normal;font-weight:700;src:url(https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-bold.woff2) format("woff2"),url(https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-bold.woff) format("woff")}*,:after,:before{box-sizing:border-box;outline:0;transition:all .5s ease}@media (prefers-reduced-motion:no-preference){:root{scroll-behavior:smooth}}body,html{-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:transparent;background-color:var(--ai-bg);color:var(--ai-text);font-size:var(--ai-font-size);font-weight:var(--ai-font-weight);margin:0}body,h1,h2,h3,h4,h5,h6,html{font-family:var(--ai-font-family);line-height:var(--ai-line-height)}h1,h2,h3,h4,h5,h6{font-weight:600;margin-bottom:0;margin-top:0}h1{font-size:calc(1.375rem + 1.5vw)}@media (min-width:1200px){h1{font-size:2.5rem}}h2{font-size:calc(1.325rem + .9vw)}@media (min-width:1200px){h2{font-size:2rem}}h3{font-size:calc(1.3rem + .6vw)}@media (min-width:1200px){h3{font-size:1.75rem}}h4{font-size:calc(1.275rem + .3vw)}@media (min-width:1200px){h4{font-size:1.5rem}}h5{font-size:1.25rem}h6,p{font-size:var(--ai-font-size)}p{font-family:var(--ai-font-family);font-weight:var(--ai-font-weight);line-height:var(--ai-line-height);margin-bottom:0;margin-top:0}b,strong{font-weight:bolder}small{font-size:.875em}mark{background-color:#fcf8e3;padding:.2em}sub,sup{font-size:.75em;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}code,kbd,pre,samp{direction:ltr;font-family:SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;unicode-bidi:bidi-override}pre{display:block;font-size:.875em;margin-bottom:1rem;margin-top:0;overflow:auto}pre code{color:inherit;font-size:inherit;word-break:normal}code{word-wrap:break-word;color:#d63384;font-size:.875em}a>code{color:inherit}kbd{background-color:#212529;border-radius:.2rem;color:var(--ai-bg);font-size:.875em;padding:.2rem .4rem}kbd kbd{font-size:1em;font-weight:700;padding:0}figure{margin:0 0 1rem}table{border-collapse:collapse;caption-side:bottom}caption{color:#6c757d;padding-bottom:.5rem;padding-top:.5rem;text-align:left}th{text-align:inherit;text-align:-webkit-match-parent}tbody,td,tfoot,th,thead,tr{border:0 solid;border-color:inherit}label{display:inline-block}button:focus:not(:focus-visible){outline:0}button,select{text-transform:none}[role=button]{cursor:pointer}select{word-wrap:normal}select:disabled{opacity:1}hr{background-color:gray;border:0;color:inherit;margin:.5rem 0}hr:not([size]){height:1px}img,svg{vertical-align:middle}[tabindex="-1"]:focus:not(:focus-visible){outline:0!important}button,input:focus{outline:none}button{cursor:pointer}a{text-decoration:none}a:not([href]):not([class]),a:not([href]):not([class]):hover{color:inherit;text-decoration:none}dl,ol,ul{margin-bottom:1rem;margin-top:0}@media screen and (max-width:576px){body,html{--ai-font-size:0.9375rem}}');const x=r=>{var{size:o="md",theme:i="primary",colorScheme:t,className:a,style:s,variant:p="default"}=r,c=function(e,n){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)n.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(r[o[i]]=e[o[i]])}return r}(r,["size","theme","colorScheme","className","style","variant"]);const m=n(y),f="spinner",{classNames:u,customCss:h}=v(d,f,a,i,"",p,o,t);const g=`${u} ${l(d,"default"===p&&`${f}-default`)}`;let b=e.createElement("div",Object.assign({},c,{"data-theme-id":(null==m?void 0:m.themeId)||"",style:s,className:g}),e.createElement("div",null),e.createElement("div",null),e.createElement("div",null),e.createElement("div",null));return"ring"!==p&&"box"!==p||(b=e.createElement("div",Object.assign({},c,{"data-theme-id":(null==m?void 0:m.themeId)||"",style:s,className:g}))),"dots"===p&&(b=e.createElement("div",Object.assign({},c,{"data-theme-id":(null==m?void 0:m.themeId)||"",style:s,className:g}),e.createElement("div",null),e.createElement("div",null),e.createElement("div",null),e.createElement("div",null),e.createElement("div",null),e.createElement("div",null),e.createElement("div",null),e.createElement("div",null),e.createElement("div",null))),"ripple"===p&&(b=e.createElement("div",Object.assign({},c,{"data-theme-id":(null==m?void 0:m.themeId)||"",style:s,className:g}),e.createElement("div",null),e.createElement("div",null))),e.createElement(e.Fragment,null,h&&h(),b)};x.displayName="Spinner",x.propTypes=h;export{x as Spinner,x as default};
