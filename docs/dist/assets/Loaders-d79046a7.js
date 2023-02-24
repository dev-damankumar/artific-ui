import{h as n,j as e,F as m,x as o,a as s}from"./index-cab7d04f.js";const u=d=>{const i=n();return e(m,{children:e(o,{onClick:()=>{i.show("Hi ! This is a message")},children:"Submit"})})},g=d=>{const i=n();return i.config({dismissible:!0}),s("div",{children:[e(o,{onClick:()=>{i.show("Hi ! This is a message")},children:"Loader"}),e("br",{})]})},p=d=>{const i=n(),r=n();return i.config({dismissible:!0,theme:"dark"}),r.config({dismissible:!0,theme:"light"}),s("div",{children:[e(o,{onClick:()=>{i.show("Hi ! This is a message")},children:"Loader Dark"}),e(o,{onClick:()=>{r.show("Hi ! This is a message")},children:"Loader Light"}),e("br",{})]})},f=d=>{const i=n(),r=n(),c=n(),h=n(),t=n(),l=n();return i.config({dismissible:!0}),r.config({dismissible:!0,variant:"blur"}),c.config({dismissible:!0,variant:"solid"}),h.config({dismissible:!0,theme:"light"}),t.config({dismissible:!0,theme:"light",variant:"blur"}),l.config({dismissible:!0,theme:"light",variant:"solid"}),s("div",{children:[e(o,{onClick:()=>{i.show("Hi ! This is a message")},children:"Loader Default"}),e(o,{onClick:()=>{r.show("Hi ! This is a message")},children:"Default Loader Blur"}),e(o,{onClick:()=>{c.show("Hi ! This is a message")},children:"Default Loader Solid"}),e(o,{onClick:()=>{h.show("Hi ! This is a message")},children:"Light Loader Default"}),e(o,{onClick:()=>{t.show("Hi ! This is a message")},children:"Light Loader Blur"}),e(o,{onClick:()=>{l.show("Hi ! This is a message")},children:"Light Loader Solid"})]})},b=d=>{const i=n(),r=n(),c=n(),h=n(),t=n();return n(),i.config({dismissible:!0,size:"xl"}),r.config({dismissible:!0,size:"lg"}),c.config({dismissible:!0,size:"md"}),h.config({dismissible:!0,size:"sm"}),t.config({dismissible:!0,size:"xs"}),s("div",{children:[e(o,{onClick:()=>{i.show("Hi ! This is a message")},children:"Loader XL"}),e(o,{onClick:()=>{r.show("Hi ! This is a message")},children:"Loader LG"}),e(o,{onClick:()=>{c.show("Hi ! This is a message")},children:"Default"}),e(o,{onClick:()=>{h.show("Hi ! This is a message")},children:"Loader SM"}),e(o,{onClick:()=>{t.show("Hi ! This is a message")},children:"Loader XS"})]})};function a(d){const i=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code"},d.components);return s(m,{children:[e(i.h1,{children:"Loaders"}),`
`,e(i.p,{children:"useLoader is used to show that a process is happening on the background and tells user to wait."}),`
`,e("div",{children:e("div",{name:"Loaders",children:u.bind({})})}),`
`,e(i.h2,{children:"API"}),`
`,e(i.pre,{children:e(i.code,{className:"language-jsx",children:`import { useLoader } from 'artific-ui';
`})}),`
`,s(i.p,{children:[e("b",{children:"useLoader()"})," instance has following methods to use:"]}),`
`,s(i.p,{children:[e(i.code,{children:"config()"})," to set the config and supported props to the loader."]}),`
`,s(i.p,{children:[e(i.code,{children:"show()"})," method is used to show the loader."]}),`
`,s(i.p,{children:[e(i.code,{children:"hide()"}),"  method is used to hide the loader."]}),`
`,s(i.p,{children:[e(i.code,{children:"destroy()"}),"  method is used to remove the loader from the DOM."]}),`
`,`
`,e(i.h1,{children:"Dismissible"}),`
`,e(i.p,{children:"Dismissible Loader can be used to close the loader when user clicks on it."}),`
`,s(i.p,{children:["provide ",e(i.code,{children:"{dismissible: true}"})," to the ",e(i.code,{children:"config"})," method when instantiating loader."]}),`
`,e("div",{children:e("div",{name:"Dismissible",children:g.bind({})})}),`
`,`
`,e(i.h1,{children:"Loader Themes"}),`
`,s(i.p,{children:["If you want to use a different theme for ",e(i.code,{children:"Loader"})," use the ",e(i.code,{children:"theme"})," prop in ",e(i.code,{children:"config"})," method to set the theme"]}),`
`,s(i.p,{children:["Note: Loader only have basic twi themes ie. (",e(i.code,{children:"dark"}),"|",e(i.code,{children:"light"}),"). you can use either of them."]}),`
`,e("div",{children:e("div",{name:"Loader Themes",children:p.bind({})})}),`
`,`
`,e(i.h1,{children:"Variants"}),`
`,s(i.p,{children:["Artific UI provides a ",e(i.code,{children:"variant"})," prop to make you choose how your component ui should look like"]}),`
`,s(i.p,{children:["Set ",e(i.code,{children:"variant"})," prop with the value of (",e(i.code,{children:"default"}),"|",e(i.code,{children:"blur"}),"|",e(i.code,{children:"solid"}),"). you can mix them with different supported ",e(i.code,{children:"theme"})]}),`
`,e(i.p,{children:`Note: Different components might have addition or different variant based on there configuration and flexibility.\r
you can check out the props table to see which variant is supported by the component`}),`
`,e("div",{children:e("div",{name:"Variants",children:f.bind({})})}),`
`,`
`,e(i.h1,{children:"Sizes"}),`
`,s(i.p,{children:["you can use a ",e(i.code,{children:"size"})," prop to define the size of your components"]}),`
`,s(i.p,{children:["Set ",e(i.code,{children:"size"})," prop with the value of (",e(i.code,{children:"xs"}),"|",e(i.code,{children:"sm"}),"|",e(i.code,{children:"md"}),"|",e(i.code,{children:"lg"}),",",e(i.code,{children:"xl"}),"). you can mix them with different supported ",e(i.code,{children:"theme"})," or ",e(i.code,{children:"layout"})]}),`
`,s(i.p,{children:["Note: Mostly all the components have the same size values ie.(",e(i.code,{children:"xs"}),"|",e(i.code,{children:"sm"}),"|",e(i.code,{children:"md"}),"|",e(i.code,{children:"lg"}),",",e(i.code,{children:"xl"}),"). but some of the components might have additional sizes."]}),`
`,e("div",{children:e("div",{name:"Sizes",children:b.bind({})})})]})}function w(d={}){const{wrapper:i}=d.components||{};return i?e(i,Object.assign({},d,{children:e(a,d)})):a(d)}export{g as DissmissableTemplate,b as SizesTemplate,u as Template,p as ThemeTemplate,f as VariantsTemplate,w as default};
