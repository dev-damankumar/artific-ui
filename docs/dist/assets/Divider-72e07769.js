import{a as r,F as c,j as e,e as t}from"./index-c5414e4b.js";const h=n=>r(c,{children:[e("h5",{children:"Basic Divider"}),e(t,{}),e("h5",{children:"Basic Divider"})]});function d(n){const i=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code"},n.components);return r(c,{children:[e(i.h1,{children:"Divider"}),`
`,e(i.p,{children:"The divider is used to divide section by putting line between them."}),`
`,e("div",{children:e("div",{name:"Default",children:h.bind({})})}),`
`,e(i.h2,{children:"API"}),`
`,e(i.pre,{children:e(i.code,{className:"language-jsx",children:`import { Divider } from 'artific-ui'
`})}),`
`,e(i.h2,{children:"Divider Direction"}),`
`,r(i.p,{children:["The Divider has main two directions ie. (",e(i.code,{children:"horizontal"}),"|",e(i.code,{children:"vertical"}),")"]}),`
`,e("div",{children:e("div",{name:"Containers",children:r("div",{style:{display:"flex",height:200},children:[e("div",{style:{width:200,background:"gainsboro"},children:e(i.p,{children:"Basic Divider"})}),e(t,{direction:"vertical"}),e("div",{style:{width:200,background:"gainsboro"},children:e(i.p,{children:"Basic Divider"})})]})})})]})}function l(n={}){const{wrapper:i}=n.components||{};return i?e(i,Object.assign({},n,{children:e(d,n)})):d(n)}export{h as Template,l as default};
