import t,{Children as e,isValidElement as o,cloneElement as i,useContext as r}from"react";import{oneOf as a,shape as s,string as l,bool as n}from"prop-types";import d from"color";function c(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(o[i[r]]=t[i[r]])}return o}function m(t,e){void 0===e&&(e={});var o=e.insertAt;if(t&&"undefined"!=typeof document){var i=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===o&&i.firstChild?i.insertBefore(r,i.firstChild):i.appendChild(r),r.styleSheet?r.styleSheet.cssText=t:r.appendChild(document.createTextNode(t))}}var u={"list-group":"List-module_list-group__vbp9y","list-icon-left":"List-module_list-icon-left__BZc9M","list-icon-right":"List-module_list-icon-right__4mF7o","list-group-item":"List-module_list-group-item__XAbyI",disabled:"List-module_disabled__SBgvM","list-rounded":"List-module_list-rounded__rKlpM","list-no-radius":"List-module_list-no-radius__kVnxU","list-pill":"List-module_list-pill__YZdBF","list-primary":"List-module_list-primary__YagL8","list-secondary":"List-module_list-secondary__E5vgM","list-light":"List-module_list-light__XYt1M","list-dark":"List-module_list-dark__H3McX","list-borderless":"List-module_list-borderless__GWp0K","list-outlined":"List-module_list-outlined__KA15n","list-bordered":"List-module_list-bordered__y1CSM","list-striped":"List-module_list-striped__-WPYl","list-separate":"List-module_list-separate__vgATG","list-large":"List-module_list-large__mJ3Bw","list-extra-large":"List-module_list-extra-large__gl8BS","list-small":"List-module_list-small__EVShk","list-extra-small":"List-module_list-extra-small__JkYBh","list-group-row":"List-module_list-group-row__ofsn6"};m(":root{--list-box-shadow:rgba(0,0,0,.1) 0px 1px 2px 0px;--list-box-shadow-hover:rgba(0,0,0,.1) 0px 1px 3px 0px,rgba(0,0,0,.06) 0px 1px 2px 0px;--list-border-radius:5px;--list-padding:10px;--list-font-size:var(--ai-font-size);--list-margin:10px;--list-border-width:1px;--list-background:var(--ai-bg);--list-background-color:var(--ai-bg);--list-text:var(--list-text)}.List-module_list-group__vbp9y{background-color:var(--ai-bg);border-radius:var(--list-border-radius);box-shadow:var(--list-box-shadow);display:flex;flex-direction:column;margin-bottom:0;padding-left:0;width:100%}.List-module_list-group__vbp9y:hover{box-shadow:var(--list-box-shadow-hover)}.List-module_list-icon-left__BZc9M{cursor:pointer;font-size:var(--list-font-size);margin-right:var(--list-margin)}.List-module_list-icon-right__4mF7o{cursor:pointer;font-size:var(--list-font-size);margin-left:auto;margin-right:0}.List-module_list-group-item__XAbyI:first-child{border-top-left-radius:var(--list-border-radius);border-top-right-radius:var(--list-border-radius)}.List-module_list-group-item__XAbyI:last-child{border-bottom-left-radius:var(--list-border-radius);border-bottom-right-radius:var(--list-border-radius)}.List-module_list-group-item__XAbyI{align-items:center;background:var(--list-background);border-bottom:var(--list-border-width) solid #d4d4d45c;color:var(--list-text);display:flex;font-size:var(--list-font-size);justify-content:flex-start;padding:var(--list-padding) calc(var(--list-padding)*1.5);position:relative}.List-module_list-group__vbp9y a{color:var(--list-text);text-decoration:none!important}.List-module_list-group-item__XAbyI:hover:not(.List-module_disabled__SBgvM){filter:brightness(.9) contrast(1.1)}.List-module_list-group-item__XAbyI.List-module_disabled__SBgvM,.List-module_list-group-item__XAbyI:disabled{cursor:not-allowed;filter:brightness(.8) contrast(1.1);-webkit-user-select:none;-moz-user-select:none;user-select:none}.List-module_list-rounded__rKlpM{--list-border-radius:15px}.List-module_list-no-radius__kVnxU{--list-border-radius:0px}.List-module_list-pill__YZdBF{--list-border-radius:50px}.List-module_list-primary__YagL8{--list-background:var(--ai-primary);--list-background-color:var(--ai-primary-color);--list-text:var(--ai-primary-text)}.List-module_list-secondary__E5vgM{--list-background:var(--ai-secondary);--list-background-color:var(--ai-secondary-color);--list-text:var(--ai-secondary-text)}.List-module_list-light__XYt1M{--list-background:var(--ai-light);--list-background-color:var(--ai-light-color);--list-text:var(--ai-light-text)}.List-module_list-dark__H3McX{--list-background:var(--ai-dark);--list-background-color:var(--ai-dark-color);--list-text:var(--ai-dark-text)}.List-module_list-borderless__GWp0K{--list-border-width:0px}.List-module_list-bordered__y1CSM,.List-module_list-outlined__KA15n{border:var(--list-border-width) solid #d4d4d45c}.List-module_list-bordered__y1CSM{box-shadow:none}.List-module_list-bordered__y1CSM:last-child,.List-module_list-outlined__KA15n:last-child{border-bottom:none}.List-module_list-striped__-WPYl .List-module_list-group-item__XAbyI:nth-child(2n){filter:brightness(.9) contrast(1.1)}.List-module_list-separate__vgATG,.List-module_list-separate__vgATG:hover,.List-module_list-striped__-WPYl,.List-module_list-striped__-WPYl:hover{box-shadow:none}.List-module_list-separate__vgATG .List-module_list-group-item__XAbyI{border-radius:var(--list-border-radius);box-shadow:0 0 5px 0 rgba(0,0,0,.05),0 0 1px 0 rgba(0,0,0,.05);margin-bottom:calc(var(--list-margin) + 5px)}.List-module_list-large__mJ3Bw{--list-padding:15px;--list-font-size:17px;--list-margin:15px}.List-module_list-extra-large__gl8BS{--list-padding:20px;--list-font-size:18px;--list-margin:18px}.List-module_list-small__EVShk{--list-padding:8px;--list-font-size:14px;--list-margin:8px}.List-module_list-extra-small__JkYBh{--list-padding:5px;--list-font-size:13px;--list-margin:5px}.List-module_list-group-row__ofsn6{flex-direction:row}.List-module_list-group-row__ofsn6 .List-module_list-group-item__XAbyI:first-child{border-radius:var(--list-border-radius) 0 0 var(--list-border-radius)}.List-module_list-group-row__ofsn6 .List-module_list-group-item__XAbyI:last-child{border-radius:0 var(--list-border-radius) var(--list-border-radius) 0}");const g=(t,...e)=>{let o=[...e],i="";return o.forEach((e=>{if(e&&"string"==typeof e){let o=null==e?void 0:e.trim(),r=o.split(/\s/g);r.length>1&&r.forEach((e=>{let o=null==e?void 0:e.trim();t[o]&&(i+=`${t[o]} `)})),t[o]&&(i+=`${t[o]} `)}})),i},f="ai",p=["ati-message-alert","accordion","alert","avatar","badge","btn","alert","card","col","container","dropdown","list","modal","pagination","progress","row","spinner","table","tab","tooltip","typography"],h={xs:"extra-small",sm:"small",lg:"large",xl:"extra-large"},b={xs:"extra-small-content",sm:"small-content",lg:"large-content",xl:"extra-large-content","full-width":"full-width","full-height":"full-height",full:"full",expanded:"expanded"},_=["primary","secondary","dark","light","default"],v={variant:a(["default","striped","separate","borderless","bordered"]),theme:a(_),layout:a(["default","rounded","no-radius","pill"]),direction:a(["row","column"]),size:a(["xs","sm","md","lg","xl"]),colorScheme:s({background:l.isRequired,backgroundColor:l.isRequired,color:l.isRequired})},x={theme:a(_),disabled:n},y=t=>{let e="",o="";return"string"==typeof t&&(e=t,o=t),"object"==typeof t&&t.background&&t.backgroundColor&&(e=t.background,o=t.backgroundColor),{background:e,backgroundColor:o}},w=(t,e={scope:"global",themeId:""})=>{let o="";return Object.keys(t).forEach((i=>{const{main:r,text:a,$hover:s}=t[i],{background:l,backgroundColor:n}=y(r);let c="";const m=d(n).hsl().object(),u=`hsla(${m.h},${m.s}%, 90%, ${m.alpha?m.alpha:"1"})`;let{backgroundHover:g,backgroundColorHover:h}=(t=>{const{h:e,s:o,l:i,alpha:r}=t,a=`hsla(${e},${o}%,${i-5}%,${r||"1"})`;return{backgroundHover:a,backgroundColorHover:a}})(m),b=null;if(s){const t=(t=>{const{main:e,text:o}=t,{background:i,backgroundColor:r}=y(e);return{backgroundHover:i,backgroundColorHover:r,textHover:o}})(s);g=t.backgroundHover,h=t.backgroundColorHover,b=t.textHover}const v=l.includes("gradient")||l.includes("url");_.includes(i)||(c=((t,e,o)=>{let i=`#${e.themeId} {`;return p.forEach((e=>{i+=`--${f}-${e}-background: var(--${t});\n\t\t\t\t   --${f}-${e}-background-color: var(--${t});\n\t\t\t\t   --${f}-${e}-text: var(--${t}-text);\n\t\t\t\t   --${f}-${e}-hover: ${o.isBackgroundImage?o.background:o.backgroundHover};\n\t\t\t\t   --${f}-${e}-color-hover: ${o.backgroundColorHover};\n\t\t\t\t   --${f}-${e}-text-hover: ${o.textHover||o.text};\n\t\t\t\t   --${f}-${e}-hover-box-shadow : ${o.boxShadow};\n\t\t\t\t   ${o.isBackgroundImage?`--${e}-gradient-hover:hsla(0, 0%, 0%, 0.15);`:""}\n    `})),i+="}",i})(i,e,{backgroundColorHover:h,textHover:b,text:a,boxShadow:u,isBackgroundImage:v,background:l,backgroundHover:g,backgroundColor:n})),o+=`\n\t\t${"local"===e.scope?`.${e.componentId}`:`[data-theme-id='${e.themeId}']`}{\n\t\t\t--${f}-${i}:${l} ;\n\t\t\t--${f}-${i}-color: ${n};\n\t\t\t--${f}-${i}-text: ${a};\n\t\t\t--${f}-${i}-hover: ${v?l:g};\n\t\t\t--${f}-${i}-color-hover: ${v?l:h};\n\t\t\t--${f}-${i}-text-hover: ${b||a};\n\t\t\t--${f}-${i}-hover-box-shadow : ${u};\n\t\t\t${v?`--${i}-gradient-hover:hsla(0, 0%, 0%, 0.15);`:""}\n\t\t}\n\t\t${c}\n\t`})),o},k={theme:{default:!0}},$=(e,o,i="",r="",a="",s="",l="",n=null,d=k)=>{var c;const m=`${o}-${`artific-${Math.random().toString(16).slice(2)}`}`,u="default"!==a?`${o}-${a}`:"",f="default"!==s?`${o}-${s}`:"",p=n?`${o}-primary`:"default"!==r?`${o}-${r}`:(null===(c=null==d?void 0:d.theme)||void 0===c?void 0:c.default)?`${o}-primary`:"",_=((t,e)=>e&&"md"!==e?`${t}-${"modal"===t?b[e]:h[e]}`:"")(o,l);let v=null;return n&&(v=((e,o,i)=>{if(o){const r=o;if(!r)return null;let a;return a=t.createElement("style",null,w({primary:{main:{background:r.background,backgroundColor:r.backgroundColor?r.backgroundColor:r.background},text:r.color}},{scope:"local",themeId:"",componentId:i,componentSelector:e})),()=>a}})(o,n,m)),{componentId:m,customCss:v,classNames:`${"accordion"!==o?o:""} ${m} ${i} ${g(e,p,u,f,_,"accordion"!==o?o:"")}`}},L=t.createContext({usingThemeProvider:!1,theme:{},themeId:"",setTheme:()=>{}});m('@import "https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css";@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap");:root{--ai-bg:#fff;--ai-bg-alt:#dddddd2b;--ai-font-family:"Nunito Sans",sans-serif,system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--ai-font-weight:400;--ai-font-size:1rem;--ai-line-height:1.5;--ai-text:#2f3950;--ai-link:#3d58f0;--ai-scroll:#f1f1f1;--ai-border-color:#eee;--ai-gap:15px;--ai-z-index-dropdown:1000;--ai-z-index-sticky:1020;--ai-z-index-fixed:1030;--ai-z-index-modal-backdrop:1040;--ai-z-index-offcanvas:1050;--ai-z-index-modal:1060;--ai-z-index-popover:1070;--ai-z-index-tooltip:1080;--ai-primary:#0015ff;--ai-primary-color:var(--ai-primary);--ai-primary-text:#fff;--ai-primary-hover:#0f30d7;--ai-primary-color-hover:var(--ai-primary-hover);--ai-primary-text-hover:var(--ai-bg);--ai-primary-hover-box-shadow:#b3b9ff;--ai-secondary:#f00573;--ai-secondary-color:var(--ai-secondary);--ai-secondary-text:#fff;--ai-secondary-hover:#a5034f;--ai-secondary-color-hover:var(--ai-secondary-hover);--ai-secondary-text-hover:var(--ai-bg);--ai-secondary-hover-box-shadow:#fdb4d6;--ai-light:#eff5f5;--ai-light-alt:var(--ai-light);--ai-light-color:var(--ai-light);--ai-light-text:#475166;--ai-light-hover:#d0e2e2;--ai-light-color-hover:var(--ai-light-hover);--ai-light-text-hover:var(--ai-bg);--ai-light-hover-box-shadow:#d0e2e2;--ai-dark:#292929;--ai-dark-color:var(--ai-dark);--ai-dark-text:#fff;--ai-dark-hover:#1c1c1c;--ai-dark-color-hover:var(--ai-dark-hover);--ai-dark-text-hover:var(--ai-bg);--ai-dark-hover-box-shadow:#d9d9d9}@font-face{font-family:Segoe UI;font-style:normal;font-weight:100;src:url(https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-light.woff2) format("woff2"),url(https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-light.woff) format("woff")}@font-face{font-family:Segoe UI;font-style:normal;font-weight:300;src:url(https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-semilight.woff2) format("woff2"),url(https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-semilight.woff) format("woff")}@font-face{font-family:Segoe UI;font-style:normal;font-weight:400;src:url(https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-regular.woff2) format("woff2"),url(https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-regular.woff) format("woff")}@font-face{font-family:Segoe UI;font-style:normal;font-weight:600;src:url(https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-semibold.woff2) format("woff2"),url(https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-semibold.woff) format("woff")}@font-face{font-family:Segoe UI;font-style:normal;font-weight:700;src:url(https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-bold.woff2) format("woff2"),url(https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-bold.woff) format("woff")}*,:after,:before{box-sizing:border-box;outline:0;transition:all .5s ease}@media (prefers-reduced-motion:no-preference){:root{scroll-behavior:smooth}}body,html{-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:transparent;background-color:var(--ai-bg);color:var(--ai-text);font-size:var(--ai-font-size);font-weight:var(--ai-font-weight);margin:0}body,h1,h2,h3,h4,h5,h6,html{font-family:var(--ai-font-family);line-height:var(--ai-line-height)}h1,h2,h3,h4,h5,h6{font-weight:600;margin-bottom:0;margin-top:0}h1{font-size:calc(1.375rem + 1.5vw)}@media (min-width:1200px){h1{font-size:2.5rem}}h2{font-size:calc(1.325rem + .9vw)}@media (min-width:1200px){h2{font-size:2rem}}h3{font-size:calc(1.3rem + .6vw)}@media (min-width:1200px){h3{font-size:1.75rem}}h4{font-size:calc(1.275rem + .3vw)}@media (min-width:1200px){h4{font-size:1.5rem}}h5{font-size:1.25rem}h6,p{font-size:var(--ai-font-size)}p{font-family:var(--ai-font-family);font-weight:var(--ai-font-weight);line-height:var(--ai-line-height);margin-bottom:0;margin-top:0}b,strong{font-weight:bolder}small{font-size:.875em}mark{background-color:#fcf8e3;padding:.2em}sub,sup{font-size:.75em;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}code,kbd,pre,samp{direction:ltr;font-family:SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;unicode-bidi:bidi-override}pre{display:block;font-size:.875em;margin-bottom:1rem;margin-top:0;overflow:auto}pre code{color:inherit;font-size:inherit;word-break:normal}code{word-wrap:break-word;color:#d63384;font-size:.875em}a>code{color:inherit}kbd{background-color:#212529;border-radius:.2rem;color:var(--ai-bg);font-size:.875em;padding:.2rem .4rem}kbd kbd{font-size:1em;font-weight:700;padding:0}figure{margin:0 0 1rem}table{border-collapse:collapse;caption-side:bottom}caption{color:#6c757d;padding-bottom:.5rem;padding-top:.5rem;text-align:left}th{text-align:inherit;text-align:-webkit-match-parent}tbody,td,tfoot,th,thead,tr{border:0 solid;border-color:inherit}label{display:inline-block}button:focus:not(:focus-visible){outline:0}button,select{text-transform:none}[role=button]{cursor:pointer}select{word-wrap:normal}select:disabled{opacity:1}hr{background-color:gray;border:0;color:inherit;margin:.5rem 0}hr:not([size]){height:1px}img,svg{vertical-align:middle}[tabindex="-1"]:focus:not(:focus-visible){outline:0!important}button,input:focus{outline:none}button{cursor:pointer}a{text-decoration:none}a:not([href]):not([class]),a:not([href]):not([class]):hover{color:inherit;text-decoration:none}dl,ol,ul{margin-bottom:1rem;margin-top:0}@media screen and (max-width:576px){body,html{--ai-font-size:0.9375rem}}');const z=a=>{var{className:s,children:l,theme:n="primary",layout:d="default",variant:m="default",direction:f="column",size:p="md",colorScheme:h}=a,b=c(a,["className","children","theme","layout","variant","direction","size","colorScheme"]);const _=r(L),{classNames:v,customCss:x}=$(u,"list",s,n,d,m,p,h),y="column"!==f?`list-group-${f}`:"",w=((t,r,a=!1,s=null)=>e.map(t,(t=>{var e,l,n;if(o(t)){let o=Object.assign(Object.assign({},t.props),r);if(a&&(o=Object.assign(Object.assign({},r),t.props)),s)for(const i in s)(null===(l=null===(e=t.props)||void 0===e?void 0:e.originalType)||void 0===l?void 0:l.displayName)!==i&&(null===(n=t.type)||void 0===n?void 0:n.displayName)!==i||(o=Object.assign(Object.assign(Object.assign({},t.props),r),s[i]),a&&(o=Object.assign(Object.assign(Object.assign({},r),s[i]),t.props)));return i(t,o)}return t})))(l,{theme:n});return t.createElement(t.Fragment,null,x&&x(),t.createElement("ul",Object.assign({},b,{"data-theme-id":(null==_?void 0:_.themeId)||"",className:`${v} ${g(u,"list-group",y)}`}),w))};z.displayName="List",z.propTypes=v;const S=e=>{var{children:o,theme:i="primary",prefix:a,suffix:s,disabled:l=!1}=e,n=c(e,["children","theme","prefix","suffix","disabled"]);const d=r(L);return t.createElement("li",Object.assign({},n,{"data-theme-id":(null==d?void 0:d.themeId)||"",className:`${g(u,"list-group-item",l?"disabled":"")}`}),a&&t.createElement("div",{className:g(u,"list-icon-left")},a),o,s&&t.createElement("div",{className:g(u,"list-icon-right")},s))};S.displayName="List",S.propTypes=x;export{z as List,S as ListItem,z as default};
