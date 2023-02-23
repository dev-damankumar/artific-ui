import{j as e,u as s}from"./index-f2287826.js";const o=i=>e.jsxs(e.Fragment,{children:[e.jsx("h5",{children:"Basic Spinners"}),e.jsx(s,i)]});function r(i){const n=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code"},i.components);return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{children:"Spinners"}),`
`,e.jsx(n.p,{children:"A spinner for displaying loading state of a page or a section."}),`
`,e.jsx("div",{children:e.jsx("div",{name:"Default",children:o.bind({})})}),`
`,e.jsx(n.h2,{children:"API"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { Spinner } from 'artific-ui/Spinner';
`})}),`
`,e.jsx(n.h2,{children:"Spinner Themes"}),`
`,e.jsxs(n.p,{children:["If you want to use a different theme for ",e.jsx(n.code,{children:"Alert"})," use the ",e.jsx(n.code,{children:"theme"}),` prop to set the theme\r
Note: All components have basic four themes ie. (`,e.jsx(n.code,{children:"primary"}),"|",e.jsx(n.code,{children:"secondary"}),"|",e.jsx(n.code,{children:"dark"}),"|",e.jsx(n.code,{children:"light"}),"). you can use either of them."]}),`
`,e.jsxs(n.p,{children:["You can also use ",e.jsx(n.code,{children:"colorScheme"})," prop to define a custom theme."]}),`
`,e.jsx("div",{children:e.jsxs("div",{name:"Basic Spinner Themes",children:[e.jsx(s,{theme:"primary"}),e.jsx(s,{theme:"secondary"}),e.jsx(s,{theme:"dark"}),e.jsx("div",{style:{padding:"0 5px",background:"black",display:"inline-block"},children:e.jsx(s,{theme:"light"})}),e.jsx(s,{colorScheme:{background:"linear-gradient(45deg, #e736f4, #673ab7)",backgroundColor:"#e736f4",color:"white"}})]})}),`
`,e.jsx(n.h2,{children:"Spinner Size"}),`
`,e.jsxs(n.p,{children:["you can use a ",e.jsx(n.code,{children:"size"})," prop to define the size of your components"]}),`
`,e.jsxs(n.p,{children:["Set ",e.jsx(n.code,{children:"size"})," prop with the value of (",e.jsx(n.code,{children:"xs"}),"|",e.jsx(n.code,{children:"sm"}),"|",e.jsx(n.code,{children:"md"}),"|",e.jsx(n.code,{children:"lg"}),",",e.jsx(n.code,{children:"xl"}),"). you can mix them with different supported ",e.jsx(n.code,{children:"theme"})," or ",e.jsx(n.code,{children:"layout"})]}),`
`,e.jsxs(n.p,{children:["Note: Mostly all the components have the same size values ie.(",e.jsx(n.code,{children:"xs"}),"|",e.jsx(n.code,{children:"sm"}),"|",e.jsx(n.code,{children:"md"}),"|",e.jsx(n.code,{children:"lg"}),",",e.jsx(n.code,{children:"xl"}),"). but some of the components might have additional sizes."]}),`
`,e.jsx("div",{children:e.jsxs("div",{name:"Spinner Size",children:[e.jsx(s,{size:"xl"}),e.jsx(s,{size:"lg"}),e.jsx(s,{size:"md"}),e.jsx(s,{size:"sm"}),e.jsx(s,{size:"xs"})]})}),`
`,e.jsx(n.h2,{children:"Spinner Variants"}),`
`,e.jsxs(n.p,{children:["Artific UI provides a ",e.jsx(n.code,{children:"variant"})," prop to make you choose how your component ui should look like"]}),`
`,e.jsxs(n.p,{children:["Set ",e.jsx(n.code,{children:"variant"})," prop with the value of (",e.jsx(n.code,{children:"default"}),"|",e.jsx(n.code,{children:"ring"}),"|",e.jsx(n.code,{children:"dots"}),"|",e.jsx(n.code,{children:"box"}),"|",e.jsx(n.code,{children:"ripple"}),"). you can mix them with different supported ",e.jsx(n.code,{children:"theme"})," or ",e.jsx(n.code,{children:"layout"})]}),`
`,e.jsx(n.p,{children:`Note: Different components might have addition or different variant based on there configuration and flexibility.\r
you can check out the props table to see which variant is supported by the component`}),`
`,e.jsx("div",{children:e.jsxs("div",{name:"Spinner Variants",children:[e.jsx(s,{variant:"default"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(s,{variant:"ring"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(s,{variant:"dots"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(s,{variant:"box"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(s,{variant:"ripple"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{})]})})]})}function c(i={}){const{wrapper:n}=i.components||{};return n?e.jsx(n,Object.assign({},i,{children:e.jsx(r,i)})):r(i)}export{o as Template,c as default};
