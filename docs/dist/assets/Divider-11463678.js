import{a as r,F as c,j as i,R as t}from"./index-cab7d04f.js";const h=n=>r(c,{children:[i("h5",{children:"Basic Divider"}),i(t,{}),i("h5",{children:"Basic Divider"})]});function d(n){const e=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code"},n.components);return r(c,{children:[i(e.h1,{children:"Divider"}),`
`,i(e.p,{children:"The divider is used to divide section by putting line between them."}),`
`,i("div",{children:i("div",{name:"Default",children:h.bind({})})}),`
`,i(e.h2,{children:"API"}),`
`,i(e.pre,{children:i(e.code,{className:"language-jsx",children:`import { Divider } from 'artific-ui';
`})}),`
`,i(e.h2,{children:"Divider Direction"}),`
`,r(e.p,{children:["The Divider has main two directions ie. (",i(e.code,{children:"horizontal"}),"|",i(e.code,{children:"vertical"}),")"]}),`
`,i("div",{children:i("div",{name:"Containers",children:r("div",{style:{display:"flex",height:200},children:[i("div",{style:{width:200,background:"gainsboro"},children:"Basic Divider"}),i(t,{direction:"vertical"}),i("div",{style:{width:200,background:"gainsboro"},children:"Basic Divider"})]})})})]})}function o(n={}){const{wrapper:e}=n.components||{};return e?i(e,Object.assign({},n,{children:i(d,n)})):d(n)}export{h as Template,o as default};
