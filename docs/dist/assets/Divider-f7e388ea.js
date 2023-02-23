import{j as e,R as s}from"./index-f2287826.js";const d=n=>e.jsxs(e.Fragment,{children:[e.jsx("h5",{children:"Basic Divider"}),e.jsx(s,{}),e.jsx("h5",{children:"Basic Divider"})]});function r(n){const i=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code"},n.components);return e.jsxs(e.Fragment,{children:[e.jsx(i.h1,{children:"Divider"}),`
`,e.jsx(i.p,{children:"The divider is used to divide section by putting line between them."}),`
`,e.jsx("div",{children:e.jsx("div",{name:"Default",children:d.bind({})})}),`
`,e.jsx(i.h2,{children:"API"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-jsx",children:`import { Divider } from 'artific-ui';
`})}),`
`,e.jsx(i.h2,{children:"Divider Direction"}),`
`,e.jsxs(i.p,{children:["The Divider has main two directions ie. (",e.jsx(i.code,{children:"horizontal"}),"|",e.jsx(i.code,{children:"vertical"}),")"]}),`
`,e.jsx("div",{children:e.jsx("div",{name:"Containers",children:e.jsxs("div",{style:{display:"flex",height:200},children:[e.jsx("div",{style:{width:200,background:"gainsboro"},children:"Basic Divider"}),e.jsx(s,{direction:"vertical"}),e.jsx("div",{style:{width:200,background:"gainsboro"},children:"Basic Divider"})]})})})]})}function t(n={}){const{wrapper:i}=n.components||{};return i?e.jsx(i,Object.assign({},n,{children:e.jsx(r,n)})):r(n)}export{d as Template,t as default};
