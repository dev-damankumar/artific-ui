import{a as r,l as d,j as e,c as t,F as o}from"./index-c5414e4b.js";const c=i=>r(d,Object.assign({},i,{children:[e(t,{type:"button",children:"Primary"}),e(t,{type:"button",children:"Light"}),e(t,{type:"button",children:"Dark"})]}));function h(i){const n=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre"},i.components);return r(o,{children:[e(n.h1,{children:"ButtonGroup"}),`
`,r(n.p,{children:["You can group together multiple button with ",e(n.code,{children:"ButtonGroup"})]}),`
`,`
`,e("div",{children:e("div",{name:"Default",children:c.bind({})})}),`
`,e(n.h2,{children:"API"}),`
`,e(n.pre,{children:e(n.code,{className:"language-jsx",children:`import { Button } from 'artific-ui/Button'
`})}),`
`,e(n.h2,{children:"Button Horizontal Group"}),`
`,r(n.p,{children:["Use ",e(n.code,{children:"direction"})," props on ",e(n.code,{children:"ButtonGroup"})," to define the direction of the ButtonGroup"]}),`
`,r(n.p,{children:["default is ",e(n.code,{children:"horizontal"})]}),`
`,e("div",{children:e("div",{name:"Button Horizontal Group",children:r(d,{children:[e(t,{type:"button",children:"Primary"}),e(t,{theme:"secondary",type:"button",children:e(n.p,{children:"Secondary"})}),e(t,{theme:"light",type:"button",children:e(n.p,{children:"Light"})}),e(t,{theme:"dark",type:"button",children:e(n.p,{children:"Dark"})})]})})}),`
`,e(n.h2,{children:"Button Vertical Group"}),`
`,r(n.p,{children:["Use ",e(n.code,{children:"direction"})," props on ",e(n.code,{children:"ButtonGroup"})," to define the direction of the ButtonGroup"]}),`
`,r(n.p,{children:["default is ",e(n.code,{children:"horizontal"})]}),`
`,e("div",{children:e("div",{name:"Button Vertical Group",children:r(d,{direction:"vertical",children:[e(t,{type:"button",children:"Primary"}),e(t,{theme:"light",type:"button",children:e(n.p,{children:"Light"})}),e(t,{theme:"dark",type:"button",children:e(n.p,{children:"Dark"})})]})})}),`
`,e(n.h2,{children:"Button Group Sizes"}),`
`,r(n.p,{children:["you can use a ",e(n.code,{children:"size"})," prop to define the size of your components"]}),`
`,r(n.p,{children:["Set ",e(n.code,{children:"size"})," prop with the value of (",e(n.code,{children:"xs"}),"|",e(n.code,{children:"sm"}),"|",e(n.code,{children:"md"}),"|",e(n.code,{children:"lg"}),",",e(n.code,{children:"xl"}),"). you can mix them with different supported ",e(n.code,{children:"theme"})," or ",e(n.code,{children:"layout"})]}),`
`,r(n.p,{children:[e(n.code,{children:"Note:"})," when using ",e(n.code,{children:"ButtonGroup"})," you don't have to provide the ",e(n.code,{children:"size"})," prop on ",e(n.code,{children:"Button"})," itself just use the props on the main component."]}),`
`,e("div",{children:r("div",{name:"Button Group Sizes",children:[r(d,{size:"xs",children:[e(t,{type:"button",children:"Primary"}),e(t,{theme:"light",type:"button",children:e(n.p,{children:"Light"})}),e(t,{theme:"dark",type:"button",children:e(n.p,{children:"Dark"})})]}),e("br",{}),e("br",{}),r(d,{size:"sm",children:[e(t,{type:"button",children:"Primary"}),e(t,{theme:"light",type:"button",children:e(n.p,{children:"Light"})}),e(t,{theme:"dark",type:"button",children:e(n.p,{children:"Dark"})})]}),e("br",{}),e("br",{}),r(d,{size:"lg",children:[e(t,{type:"button",children:"Primary"}),e(t,{theme:"light",type:"button",children:e(n.p,{children:"Light"})}),e(t,{theme:"dark",type:"button",children:e(n.p,{children:"Dark"})})]}),e("br",{}),e("br",{}),r(d,{size:"xl",children:[e(t,{type:"button",children:"Primary"}),e(t,{theme:"light",type:"button",children:e(n.p,{children:"Light"})}),e(t,{theme:"dark",type:"button",children:e(n.p,{children:"Dark"})})]})]})})]})}function p(i={}){const{wrapper:n}=i.components||{};return n?e(n,Object.assign({},i,{children:e(h,i)})):h(i)}export{p as default,c as defaultTemplate};
