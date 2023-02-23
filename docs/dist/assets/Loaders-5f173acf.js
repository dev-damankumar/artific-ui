import{f as i,j as e,x as n}from"./index-f2287826.js";const a=o=>{const s=i();return e.jsx(e.Fragment,{children:e.jsx(n,{onClick:()=>{s.show("Hi ! This is a message")},children:"Submit"})})},m=o=>{const s=i();return s.config({dismissible:!0}),e.jsxs("div",{children:[e.jsx(n,{onClick:()=>{s.show("Hi ! This is a message")},children:"Loader"}),e.jsx("br",{})]})},x=o=>{const s=i(),d=i();return s.config({dismissible:!0,theme:"dark"}),d.config({dismissible:!0,theme:"light"}),e.jsxs("div",{children:[e.jsx(n,{onClick:()=>{s.show("Hi ! This is a message")},children:"Loader Dark"}),e.jsx(n,{onClick:()=>{d.show("Hi ! This is a message")},children:"Loader Light"}),e.jsx("br",{})]})},j=o=>{const s=i(),d=i(),r=i(),c=i(),h=i(),t=i();return s.config({dismissible:!0}),d.config({dismissible:!0,variant:"blur"}),r.config({dismissible:!0,variant:"solid"}),c.config({dismissible:!0,theme:"light"}),h.config({dismissible:!0,theme:"light",variant:"blur"}),t.config({dismissible:!0,theme:"light",variant:"solid"}),e.jsxs("div",{children:[e.jsx(n,{onClick:()=>{s.show("Hi ! This is a message")},children:"Loader Default"}),e.jsx(n,{onClick:()=>{d.show("Hi ! This is a message")},children:"Default Loader Blur"}),e.jsx(n,{onClick:()=>{r.show("Hi ! This is a message")},children:"Default Loader Solid"}),e.jsx(n,{onClick:()=>{c.show("Hi ! This is a message")},children:"Light Loader Default"}),e.jsx(n,{onClick:()=>{h.show("Hi ! This is a message")},children:"Light Loader Blur"}),e.jsx(n,{onClick:()=>{t.show("Hi ! This is a message")},children:"Light Loader Solid"})]})},u=o=>{const s=i(),d=i(),r=i(),c=i(),h=i();return i(),s.config({dismissible:!0,size:"xl"}),d.config({dismissible:!0,size:"lg"}),r.config({dismissible:!0,size:"md"}),c.config({dismissible:!0,size:"sm"}),h.config({dismissible:!0,size:"xs"}),e.jsxs("div",{children:[e.jsx(n,{onClick:()=>{s.show("Hi ! This is a message")},children:"Loader XL"}),e.jsx(n,{onClick:()=>{d.show("Hi ! This is a message")},children:"Loader LG"}),e.jsx(n,{onClick:()=>{r.show("Hi ! This is a message")},children:"Default"}),e.jsx(n,{onClick:()=>{c.show("Hi ! This is a message")},children:"Loader SM"}),e.jsx(n,{onClick:()=>{h.show("Hi ! This is a message")},children:"Loader XS"})]})};function l(o){const s=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code"},o.components);return e.jsxs(e.Fragment,{children:[e.jsx(s.h1,{children:"Loaders"}),`
`,e.jsx(s.p,{children:"useLoader is used to show that a process is happening on the background and tells user to wait."}),`
`,e.jsx("div",{children:e.jsx("div",{name:"Loaders",children:a.bind({})})}),`
`,e.jsx(s.h2,{children:"API"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-jsx",children:`import { useLoader } from 'artific-ui';
`})}),`
`,e.jsxs(s.p,{children:[e.jsx("b",{children:"useLoader()"})," instance has following methods to use:"]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"config()"})," to set the config and supported props to the loader."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"show()"})," method is used to show the loader."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"hide()"}),"  method is used to hide the loader."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"destroy()"}),"  method is used to remove the loader from the DOM."]}),`
`,`
`,e.jsx(s.h1,{children:"Dismissible"}),`
`,e.jsx(s.p,{children:"Dismissible Loader can be used to close the loader when user clicks on it."}),`
`,e.jsxs(s.p,{children:["provide ",e.jsx(s.code,{children:"{dismissible: true}"})," to the ",e.jsx(s.code,{children:"config"})," method when instantiating loader."]}),`
`,e.jsx("div",{children:e.jsx("div",{name:"Dismissible",children:m.bind({})})}),`
`,`
`,e.jsx(s.h1,{children:"Loader Themes"}),`
`,e.jsxs(s.p,{children:["If you want to use a different theme for ",e.jsx(s.code,{children:"Loader"})," use the ",e.jsx(s.code,{children:"theme"})," prop in ",e.jsx(s.code,{children:"config"})," method to set the theme"]}),`
`,e.jsxs(s.p,{children:["Note: Loader only have basic twi themes ie. (",e.jsx(s.code,{children:"dark"}),"|",e.jsx(s.code,{children:"light"}),"). you can use either of them."]}),`
`,e.jsx("div",{children:e.jsx("div",{name:"Loader Themes",children:x.bind({})})}),`
`,`
`,e.jsx(s.h1,{children:"Variants"}),`
`,e.jsxs(s.p,{children:["Artific UI provides a ",e.jsx(s.code,{children:"variant"})," prop to make you choose how your component ui should look like"]}),`
`,e.jsxs(s.p,{children:["Set ",e.jsx(s.code,{children:"variant"})," prop with the value of (",e.jsx(s.code,{children:"default"}),"|",e.jsx(s.code,{children:"blur"}),"|",e.jsx(s.code,{children:"solid"}),"). you can mix them with different supported ",e.jsx(s.code,{children:"theme"})]}),`
`,e.jsx(s.p,{children:`Note: Different components might have addition or different variant based on there configuration and flexibility.\r
you can check out the props table to see which variant is supported by the component`}),`
`,e.jsx("div",{children:e.jsx("div",{name:"Variants",children:j.bind({})})}),`
`,`
`,e.jsx(s.h1,{children:"Sizes"}),`
`,e.jsxs(s.p,{children:["you can use a ",e.jsx(s.code,{children:"size"})," prop to define the size of your components"]}),`
`,e.jsxs(s.p,{children:["Set ",e.jsx(s.code,{children:"size"})," prop with the value of (",e.jsx(s.code,{children:"xs"}),"|",e.jsx(s.code,{children:"sm"}),"|",e.jsx(s.code,{children:"md"}),"|",e.jsx(s.code,{children:"lg"}),",",e.jsx(s.code,{children:"xl"}),"). you can mix them with different supported ",e.jsx(s.code,{children:"theme"})," or ",e.jsx(s.code,{children:"layout"})]}),`
`,e.jsxs(s.p,{children:["Note: Mostly all the components have the same size values ie.(",e.jsx(s.code,{children:"xs"}),"|",e.jsx(s.code,{children:"sm"}),"|",e.jsx(s.code,{children:"md"}),"|",e.jsx(s.code,{children:"lg"}),",",e.jsx(s.code,{children:"xl"}),"). but some of the components might have additional sizes."]}),`
`,e.jsx("div",{children:e.jsx("div",{name:"Sizes",children:u.bind({})})})]})}function p(o={}){const{wrapper:s}=o.components||{};return s?e.jsx(s,Object.assign({},o,{children:e.jsx(l,o)})):l(o)}export{m as DissmissableTemplate,u as SizesTemplate,a as Template,x as ThemeTemplate,j as VariantsTemplate,p as default};
