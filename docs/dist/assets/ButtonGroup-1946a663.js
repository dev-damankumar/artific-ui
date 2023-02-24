import{a as r,y as o,j as e,x as n,F as h}from"./index-cab7d04f.js";const c=i=>r(o,Object.assign({},i,{children:[e(n,{type:"button",children:"Primary"}),e(n,{type:"button",children:"Light"}),e(n,{type:"button",children:"Dark"})]}));function d(i){const t=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre"},i.components);return r(h,{children:[e(t.h1,{children:"ButtonGroup"}),`
`,r(t.p,{children:["You can group together multiple button with ",e(t.code,{children:"ButtonGroup"})]}),`
`,`
`,e("div",{children:e("div",{name:"Default",children:c.bind({})})}),`
`,e(t.h2,{children:"API"}),`
`,e(t.pre,{children:e(t.code,{className:"language-jsx",children:`import { Button } from 'artific-ui/Button';
`})}),`
`,e(t.h2,{children:"Button Horizontal Group"}),`
`,r(t.p,{children:["Use ",e(t.code,{children:"direction"})," props on ",e(t.code,{children:"ButtonGroup"})," to define the direction of the ButtonGroup"]}),`
`,r(t.p,{children:["default is ",e(t.code,{children:"horizontal"})]}),`
`,e("div",{children:e("div",{name:"Button Horizontal Group",children:r(o,{children:[e(n,{type:"button",children:"Primary"}),e(n,{theme:"secondary",type:"button",children:"Secondary"}),e(n,{theme:"light",type:"button",children:"Light"}),e(n,{theme:"dark",type:"button",children:"Dark"})]})})}),`
`,e(t.h2,{children:"Button Vertical Group"}),`
`,r(t.p,{children:["Use ",e(t.code,{children:"direction"})," props on ",e(t.code,{children:"ButtonGroup"})," to define the direction of the ButtonGroup"]}),`
`,r(t.p,{children:["default is ",e(t.code,{children:"horizontal"})]}),`
`,e("div",{children:e("div",{name:"Button Vertical Group",children:r(o,{direction:"vertical",children:[e(n,{type:"button",children:"Primary"}),e(n,{theme:"light",type:"button",children:"Light"}),e(n,{theme:"dark",type:"button",children:"Dark"})]})})}),`
`,e(t.h2,{children:"Button Group Sizes"}),`
`,r(t.p,{children:["you can use a ",e(t.code,{children:"size"})," prop to define the size of your components"]}),`
`,r(t.p,{children:["Set ",e(t.code,{children:"size"})," prop with the value of (",e(t.code,{children:"xs"}),"|",e(t.code,{children:"sm"}),"|",e(t.code,{children:"md"}),"|",e(t.code,{children:"lg"}),",",e(t.code,{children:"xl"}),"). you can mix them with different supported ",e(t.code,{children:"theme"})," or ",e(t.code,{children:"layout"})]}),`
`,r(t.p,{children:[e(t.code,{children:"Note:"})," when using ",e(t.code,{children:"ButtonGroup"})," you don't have to provide the ",e(t.code,{children:"size"})," prop on ",e(t.code,{children:"Button"})," itself just use the props on the main component."]}),`
`,e("div",{children:r("div",{name:"Button Group Sizes",children:[r(o,{size:"xs",children:[e(n,{type:"button",children:"Primary"}),e(n,{theme:"light",type:"button",children:"Light"}),e(n,{theme:"dark",type:"button",children:"Dark"})]}),e("br",{}),e("br",{}),r(o,{size:"sm",children:[e(n,{type:"button",children:"Primary"}),e(n,{theme:"light",type:"button",children:"Light"}),e(n,{theme:"dark",type:"button",children:"Dark"})]}),e("br",{}),e("br",{}),r(o,{size:"lg",children:[e(n,{type:"button",children:"Primary"}),e(n,{theme:"light",type:"button",children:"Light"}),e(n,{theme:"dark",type:"button",children:"Dark"})]}),e("br",{}),e("br",{}),r(o,{size:"xl",children:[e(n,{type:"button",children:"Primary"}),e(n,{theme:"light",type:"button",children:"Light"}),e(n,{theme:"dark",type:"button",children:"Dark"})]})]})})]})}function u(i={}){const{wrapper:t}=i.components||{};return t?e(t,Object.assign({},i,{children:e(d,i)})):d(i)}export{u as default,c as defaultTemplate};
