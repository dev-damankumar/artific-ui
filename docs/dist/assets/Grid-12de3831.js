import{j as e,P as r,c as d,d as s}from"./index-f2287826.js";const n={border:"1px dashed #089b8d",background:"#afe0db"};function c(l){const i=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code"},l.components);return e.jsxs(e.Fragment,{children:[e.jsx(i.h1,{children:"Grids"}),`
`,e.jsx(i.p,{children:"The grid creates visual consistency between layouts while allowing flexibility across a wide variety of designs. Material Design's responsive UI is based on a 12-column grid layout."}),`
`,e.jsx("div",{children:e.jsxs("div",{children:[e.jsx("h5",{children:"Basic Layout"}),e.jsx(r,{style:{background:"#fff0eb",padding:"20px 35px"},children:e.jsxs(d,{style:{background:"#c2c3f5",padding:"20px"},children:[e.jsx(s,{style:{...n},children:"Col 1"}),e.jsx(s,{offset:3,style:{...n},children:"Col 2"}),e.jsx(s,{style:{...n},children:"Col 3"})]})})]})}),`
`,e.jsx(i.h2,{children:"API"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-jsx",children:`import { Container,Row,Col } from 'artific-ui';
`})}),`
`,e.jsx(i.h2,{children:"Containers"}),`
`,e.jsx(i.p,{children:"The container centers your content horizontally. It's the most basic layout element."}),`
`,e.jsx("div",{children:e.jsx("div",{name:"Containers",children:e.jsx(r,{style:{background:"#f1f1f1",padding:"20px",height:100},children:e.jsx("p",{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consectetur et facere maxime\r
molestiae omnis porro praesentium quisquam recusandae reprehenderit.`})})})}),`
`,e.jsx(i.h2,{children:"Container Fluid"}),`
`,e.jsx(i.p,{children:"A fluid container width is bounded by the 100% screen width"}),`
`,e.jsx("div",{children:e.jsx("div",{name:"Container Fluid",children:e.jsx(r,{fluid:!0,style:{background:"#f1f1f1",padding:"20px",height:100},children:e.jsx("p",{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consectetur et facere maxime\r
molestiae omnis porro praesentium quisquam recusandae reprehenderit.`})})})}),`
`,e.jsx(i.h2,{children:"Grids"}),`
`,e.jsx(i.p,{children:"The grid creates visual consistency between layouts while allowing flexibility across a wide variety of designs. Material Design's responsive UI is based on a 12-column grid layout."}),`
`,e.jsx("div",{children:e.jsxs("div",{name:"Grids",children:[e.jsx("h5",{children:"12 Columns Layout"}),e.jsx(r,{fluid:!0,style:{background:"#fff0eb",padding:"20px 35px"},children:e.jsxs(d,{style:{background:"#c2c3f5",padding:"20px"},children:[e.jsx(s,{style:{...n},children:"Col 1"}),e.jsx(s,{style:{...n},children:"Col 2"}),e.jsx(s,{style:{...n},children:"Col 3"}),e.jsx(s,{style:{...n},children:"Col 4"}),e.jsx(s,{style:{...n},children:"Col 5"}),e.jsx(s,{style:{...n},children:"Col 6"}),e.jsx(s,{style:{...n},children:"Col 7"}),e.jsx(s,{style:{...n},children:"Col 8"}),e.jsx(s,{style:{...n},children:"Col 9"}),e.jsx(s,{style:{...n},children:"Col 10"}),e.jsx(s,{style:{...n},children:"Col 11"}),e.jsx(s,{style:{...n},children:"Col 12"})]})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("h5",{children:"Equal With Columns"}),e.jsx(r,{fluid:!0,style:{background:"#fff0eb",padding:"20px 35px"},children:e.jsxs(d,{style:{background:"#c2c3f5",padding:"20px"},children:[e.jsx(s,{style:{...n},children:"Col 1"}),e.jsx(s,{style:{...n},children:"Col 2"}),e.jsx(s,{style:{...n},children:"Col 3"})]})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("h5",{children:"Equal With Columns"}),e.jsx(r,{fluid:!0,style:{background:"#fff0eb",padding:"20px 35px"},children:e.jsxs(d,{style:{background:"#c2c3f5",padding:"20px"},children:[e.jsx(s,{size:"sm",col:6,style:{...n},children:"col-sm-6"}),e.jsx(s,{size:"md",col:12,style:{...n},children:"col-md-6"}),e.jsx(s,{size:"lg",col:8,style:{...n},children:"col-lg-8"})]})}),e.jsx("br",{}),e.jsx("br",{})]})})]})}function o(l={}){const{wrapper:i}=l.components||{};return i?e.jsx(i,Object.assign({},l,{children:e.jsx(c,l)})):c(l)}export{n as colStyle,o as default};