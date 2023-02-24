import{a as r,F as c,j as e,w as i}from"./index-cab7d04f.js";const t=o=>r(c,{children:[e("h5",{children:"Basic Spinners"}),e(i,o)]});function d(o){const n=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code"},o.components);return r(c,{children:[e(n.h1,{children:"Spinners"}),`
`,e(n.p,{children:"A spinner for displaying loading state of a page or a section."}),`
`,e("div",{children:e("div",{name:"Default",children:t.bind({})})}),`
`,e(n.h2,{children:"API"}),`
`,e(n.pre,{children:e(n.code,{className:"language-jsx",children:`import { Spinner } from 'artific-ui/Spinner';
`})}),`
`,e(n.h2,{children:"Spinner Themes"}),`
`,r(n.p,{children:["If you want to use a different theme for ",e(n.code,{children:"Alert"})," use the ",e(n.code,{children:"theme"}),` prop to set the theme\r
Note: All components have basic four themes ie. (`,e(n.code,{children:"primary"}),"|",e(n.code,{children:"secondary"}),"|",e(n.code,{children:"dark"}),"|",e(n.code,{children:"light"}),"). you can use either of them."]}),`
`,r(n.p,{children:["You can also use ",e(n.code,{children:"colorScheme"})," prop to define a custom theme."]}),`
`,e("div",{children:r("div",{name:"Basic Spinner Themes",children:[e(i,{theme:"primary"}),e(i,{theme:"secondary"}),e(i,{theme:"dark"}),e("div",{style:{padding:"0 5px",background:"black",display:"inline-block"},children:e(i,{theme:"light"})}),e(i,{colorScheme:{background:"linear-gradient(45deg, #e736f4, #673ab7)",backgroundColor:"#e736f4",color:"white"}})]})}),`
`,e(n.h2,{children:"Spinner Size"}),`
`,r(n.p,{children:["you can use a ",e(n.code,{children:"size"})," prop to define the size of your components"]}),`
`,r(n.p,{children:["Set ",e(n.code,{children:"size"})," prop with the value of (",e(n.code,{children:"xs"}),"|",e(n.code,{children:"sm"}),"|",e(n.code,{children:"md"}),"|",e(n.code,{children:"lg"}),",",e(n.code,{children:"xl"}),"). you can mix them with different supported ",e(n.code,{children:"theme"})," or ",e(n.code,{children:"layout"})]}),`
`,r(n.p,{children:["Note: Mostly all the components have the same size values ie.(",e(n.code,{children:"xs"}),"|",e(n.code,{children:"sm"}),"|",e(n.code,{children:"md"}),"|",e(n.code,{children:"lg"}),",",e(n.code,{children:"xl"}),"). but some of the components might have additional sizes."]}),`
`,e("div",{children:r("div",{name:"Spinner Size",children:[e(i,{size:"xl"}),e(i,{size:"lg"}),e(i,{size:"md"}),e(i,{size:"sm"}),e(i,{size:"xs"})]})}),`
`,e(n.h2,{children:"Spinner Variants"}),`
`,r(n.p,{children:["Artific UI provides a ",e(n.code,{children:"variant"})," prop to make you choose how your component ui should look like"]}),`
`,r(n.p,{children:["Set ",e(n.code,{children:"variant"})," prop with the value of (",e(n.code,{children:"default"}),"|",e(n.code,{children:"ring"}),"|",e(n.code,{children:"dots"}),"|",e(n.code,{children:"box"}),"|",e(n.code,{children:"ripple"}),"). you can mix them with different supported ",e(n.code,{children:"theme"})," or ",e(n.code,{children:"layout"})]}),`
`,e(n.p,{children:`Note: Different components might have addition or different variant based on there configuration and flexibility.\r
you can check out the props table to see which variant is supported by the component`}),`
`,e("div",{children:r("div",{name:"Spinner Variants",children:[e(i,{variant:"default"}),e("br",{}),e("br",{}),e(i,{variant:"ring"}),e("br",{}),e("br",{}),e(i,{variant:"dots"}),e("br",{}),e("br",{}),e("br",{}),e("br",{}),e(i,{variant:"box"}),e("br",{}),e("br",{}),e(i,{variant:"ripple"}),e("br",{}),e("br",{}),e("br",{}),e("br",{})]})})]})}function l(o={}){const{wrapper:n}=o.components||{};return n?e(n,Object.assign({},o,{children:e(d,o)})):d(o)}export{t as Template,l as default};
