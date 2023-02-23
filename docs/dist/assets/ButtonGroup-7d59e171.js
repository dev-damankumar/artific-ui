import{j as e,y as i,x as n}from"./index-f2287826.js";const o=r=>e.jsxs(i,Object.assign({},r,{children:[e.jsx(n,{type:"button",children:"Primary"}),e.jsx(n,{type:"button",children:"Light"}),e.jsx(n,{type:"button",children:"Dark"})]}));function s(r){const t=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre"},r.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{children:"ButtonGroup"}),`
`,e.jsxs(t.p,{children:["You can group together multiple button with ",e.jsx(t.code,{children:"ButtonGroup"})]}),`
`,`
`,e.jsx("div",{children:e.jsx("div",{name:"Default",children:o.bind({})})}),`
`,e.jsx(t.h2,{children:"API"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`import { Button } from 'artific-ui/Button';
`})}),`
`,e.jsx(t.h2,{children:"Button Horizontal Group"}),`
`,e.jsxs(t.p,{children:["Use ",e.jsx(t.code,{children:"direction"})," props on ",e.jsx(t.code,{children:"ButtonGroup"})," to define the direction of the ButtonGroup"]}),`
`,e.jsxs(t.p,{children:["default is ",e.jsx(t.code,{children:"horizontal"})]}),`
`,e.jsx("div",{children:e.jsx("div",{name:"Button Horizontal Group",children:e.jsxs(i,{children:[e.jsx(n,{type:"button",children:"Primary"}),e.jsx(n,{theme:"secondary",type:"button",children:"Secondary"}),e.jsx(n,{theme:"light",type:"button",children:"Light"}),e.jsx(n,{theme:"dark",type:"button",children:"Dark"})]})})}),`
`,e.jsx(t.h2,{children:"Button Vertical Group"}),`
`,e.jsxs(t.p,{children:["Use ",e.jsx(t.code,{children:"direction"})," props on ",e.jsx(t.code,{children:"ButtonGroup"})," to define the direction of the ButtonGroup"]}),`
`,e.jsxs(t.p,{children:["default is ",e.jsx(t.code,{children:"horizontal"})]}),`
`,e.jsx("div",{children:e.jsx("div",{name:"Button Vertical Group",children:e.jsxs(i,{direction:"vertical",children:[e.jsx(n,{type:"button",children:"Primary"}),e.jsx(n,{theme:"light",type:"button",children:"Light"}),e.jsx(n,{theme:"dark",type:"button",children:"Dark"})]})})}),`
`,e.jsx(t.h2,{children:"Button Group Sizes"}),`
`,e.jsxs(t.p,{children:["you can use a ",e.jsx(t.code,{children:"size"})," prop to define the size of your components"]}),`
`,e.jsxs(t.p,{children:["Set ",e.jsx(t.code,{children:"size"})," prop with the value of (",e.jsx(t.code,{children:"xs"}),"|",e.jsx(t.code,{children:"sm"}),"|",e.jsx(t.code,{children:"md"}),"|",e.jsx(t.code,{children:"lg"}),",",e.jsx(t.code,{children:"xl"}),"). you can mix them with different supported ",e.jsx(t.code,{children:"theme"})," or ",e.jsx(t.code,{children:"layout"})]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"Note:"})," when using ",e.jsx(t.code,{children:"ButtonGroup"})," you don't have to provide the ",e.jsx(t.code,{children:"size"})," prop on ",e.jsx(t.code,{children:"Button"})," itself just use the props on the main component."]}),`
`,e.jsx("div",{children:e.jsxs("div",{name:"Button Group Sizes",children:[e.jsxs(i,{size:"xs",children:[e.jsx(n,{type:"button",children:"Primary"}),e.jsx(n,{theme:"light",type:"button",children:"Light"}),e.jsx(n,{theme:"dark",type:"button",children:"Dark"})]}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs(i,{size:"sm",children:[e.jsx(n,{type:"button",children:"Primary"}),e.jsx(n,{theme:"light",type:"button",children:"Light"}),e.jsx(n,{theme:"dark",type:"button",children:"Dark"})]}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs(i,{size:"lg",children:[e.jsx(n,{type:"button",children:"Primary"}),e.jsx(n,{theme:"light",type:"button",children:"Light"}),e.jsx(n,{theme:"dark",type:"button",children:"Dark"})]}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs(i,{size:"xl",children:[e.jsx(n,{type:"button",children:"Primary"}),e.jsx(n,{theme:"light",type:"button",children:"Light"}),e.jsx(n,{theme:"dark",type:"button",children:"Dark"})]})]})})]})}function h(r={}){const{wrapper:t}=r.components||{};return t?e.jsx(t,Object.assign({},r,{children:e.jsx(s,r)})):s(r)}export{h as default,o as defaultTemplate};
