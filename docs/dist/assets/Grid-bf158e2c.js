import{j as e,a as r,F as o,g as c,h as s,i as n}from"./index-c5414e4b.js";const i={border:"1px dashed #089b8d",background:"#afe0db"};function t(d){const l=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code"},d.components);return r(o,{children:[e(l.h1,{children:"Grids"}),`
`,e(l.p,{children:"The grid creates visual consistency between layouts while allowing flexibility across a wide variety of designs. Material Design's responsive UI is based on a 12-column grid layout."}),`
`,e("div",{children:r("div",{children:[e("h5",{children:"Basic Layout"}),e(c,{style:{background:"#fff0eb",padding:"20px 35px"},children:r(s,{style:{background:"#c2c3f5",padding:"20px"},children:[e(n,{style:{...i},children:"Col 1"}),e(n,{offset:3,style:{...i},children:e(l.p,{children:"Col 2"})}),e(n,{style:{...i},children:"Col 3"})]})})]})}),`
`,e(l.h2,{children:"API"}),`
`,e(l.pre,{children:e(l.code,{className:"language-jsx",children:`import { Container, Row, Col } from 'artific-ui'
`})}),`
`,e(l.h2,{children:"Containers"}),`
`,e(l.p,{children:"The container centers your content horizontally. It's the most basic layout element."}),`
`,e("div",{children:e("div",{name:"Containers",children:e(c,{style:{background:"#f1f1f1",padding:"20px",height:100},children:e("p",{children:e(l.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Asperiores consectetur et facere maxime molestiae omnis porro\r
praesentium quisquam recusandae reprehenderit.`})})})})}),`
`,e(l.h2,{children:"Container Fluid"}),`
`,e(l.p,{children:"A fluid container width is bounded by the 100% screen width"}),`
`,e("div",{children:e("div",{name:"Container Fluid",children:e(c,{fluid:!0,style:{background:"#f1f1f1",padding:"20px",height:100},children:e("p",{children:e(l.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Asperiores consectetur et facere maxime molestiae omnis porro\r
praesentium quisquam recusandae reprehenderit.`})})})})}),`
`,e(l.h2,{children:"Grids"}),`
`,e(l.p,{children:"The grid creates visual consistency between layouts while allowing flexibility across a wide variety of designs. Material Design's responsive UI is based on a 12-column grid layout."}),`
`,e("div",{children:r("div",{name:"Grids",children:[e("h5",{children:"12 Columns Layout"}),e(c,{fluid:!0,style:{background:"#fff0eb",padding:"20px 35px"},children:r(s,{style:{background:"#c2c3f5",padding:"20px"},children:[e(n,{style:{...i},children:"Col 1"}),e(n,{style:{...i},children:"Col 2"}),e(n,{style:{...i},children:"Col 3"}),e(n,{style:{...i},children:"Col 4"}),e(n,{style:{...i},children:"Col 5"}),e(n,{style:{...i},children:"Col 6"}),e(n,{style:{...i},children:"Col 7"}),e(n,{style:{...i},children:"Col 8"}),e(n,{style:{...i},children:"Col 9"}),e(n,{style:{...i},children:"Col 10"}),e(n,{style:{...i},children:"Col 11"}),e(n,{style:{...i},children:"Col 12"})]})}),e("br",{}),e("br",{}),e("h5",{children:"Equal With Columns"}),e(c,{fluid:!0,style:{background:"#fff0eb",padding:"20px 35px"},children:r(s,{style:{background:"#c2c3f5",padding:"20px"},children:[e(n,{style:{...i},children:"Col 1"}),e(n,{style:{...i},children:"Col 2"}),e(n,{style:{...i},children:"Col 3"})]})}),e("br",{}),e("br",{}),e("h5",{children:"Equal With Columns"}),e(c,{fluid:!0,style:{background:"#fff0eb",padding:"20px 35px"},children:r(s,{style:{background:"#c2c3f5",padding:"20px"},children:[e(n,{size:"sm",col:6,style:{...i},children:e(l.p,{children:"col-sm-6"})}),e(n,{size:"md",col:12,style:{...i},children:e(l.p,{children:"col-md-6"})}),e(n,{size:"lg",col:8,style:{...i},children:e(l.p,{children:"col-lg-8"})})]})}),e("br",{}),e("br",{})]})})]})}function h(d={}){const{wrapper:l}=d.components||{};return l?e(l,Object.assign({},d,{children:e(t,d)})):t(d)}export{i as colStyle,h as default};
