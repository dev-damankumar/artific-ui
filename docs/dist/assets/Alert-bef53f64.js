import{r as d,j as e,e as r,x as o}from"./index-f2287826.js";const h=i=>{const[s,t]=d.useState(!0);return s?e.jsxs(r,Object.assign({},i,{onClose:()=>t(!1),children:[e.jsx("i",{className:"bi bi-info-circle flex-shrink-0 me-4"}),"This is an Alert"]})):e.jsx(o,{onClick:()=>t(!0),children:"Show Alert"})};function n(i){const s=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code"},i.components);return e.jsxs(e.Fragment,{children:[e.jsx(s.h1,{children:"Alerts"}),`
`,e.jsx(s.p,{children:"An alert displays a short, important message in a way that attracts the user's attention without interrupting the user's task."}),`
`,e.jsx("div",{children:e.jsx("div",{name:"Default",children:h.bind({})})}),`
`,e.jsx(s.h2,{children:"API"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-jsx",children:`import { Alert } from 'artific-ui/Alert';
`})}),`
`,e.jsx(s.h2,{children:"Dismissible Alert"}),`
`,e.jsx(s.p,{children:"A dismissible alert is a alert which can be removed from the user's screen by clicking on the close icon button"}),`
`,e.jsx("div",{children:e.jsx("div",{name:"Dismissible Alert",children:e.jsxs(r,{dismiss:"true",children:[e.jsx("strong",{children:"Primary!"})," You should ",e.jsx("a",{href:"data/Alert.stories#",children:`read this\r
message`}),"."]})})}),`
`,e.jsx(s.h2,{children:"Alert Themes"}),`
`,e.jsxs(s.p,{children:["If you want to use a different theme for ",e.jsx(s.code,{children:"Alert"})," use the ",e.jsx(s.code,{children:"theme"}),` prop to set the theme\r
Note: All components have basic four themes ie. (`,e.jsx(s.code,{children:"primary"}),"|",e.jsx(s.code,{children:"secondary"}),"|",e.jsx(s.code,{children:"dark"}),"|",e.jsx(s.code,{children:"light"}),"). you can use either of them."]}),`
`,e.jsx("div",{children:e.jsxs("div",{name:"Alert Themes",children:[e.jsx("h5",{children:"Basic Alerts"}),e.jsx("br",{}),e.jsxs(r,{dismiss:!0,children:[e.jsx("strong",{children:"Primary!"})," You should ",e.jsx("a",{href:"data/Alert.stories#",children:`read this\r
message`}),"."]}),e.jsxs(r,{dismiss:!0,theme:"secondary",children:[e.jsx("strong",{children:"Secondary!"})," You should ",e.jsx("a",{href:"data/Alert.stories#",children:`read\r
this message`}),"."]}),e.jsxs(r,{dismiss:!0,theme:"light",children:[e.jsx("strong",{children:"Light!"})," You should ",e.jsx("a",{href:"data/Alert.stories#",children:`read\r
this\r
message`}),"."]}),e.jsxs(r,{dismiss:!0,theme:"dark",children:[e.jsx("strong",{children:"Dark!"})," You should ",e.jsx("a",{href:"data/Alert.stories#",children:`read this\r
message`}),"."]}),e.jsx("br",{})]})}),`
`,e.jsx(s.h2,{children:"2. Custom Alert"}),`
`,e.jsxs(s.p,{children:["If you want to use a different color scheme for ",e.jsx(s.code,{children:"Alert"}),` instead of the provided themes then you can use\r
`,e.jsx(s.code,{children:"colorScheme"})," props to define your color scheme."]}),`
`,e.jsxs(s.p,{children:["colorScheme is an object containing three properties: ",e.jsx(s.code,{children:"background"}),", ",e.jsx(s.code,{children:"backgroundColor"}),", ",e.jsx(s.code,{children:"color"})]}),`
`,e.jsx("div",{children:e.jsxs("div",{name:"Custom Alert",children:[e.jsx("h5",{children:"CustomScheme Alerts"}),e.jsx("br",{}),e.jsx(r,{dismiss:"true",colorScheme:{background:"linear-gradient(45deg, #e736f4, #673ab7)",backgroundColor:"#e736f4",color:"white"},children:e.jsxs(s.p,{children:[e.jsx("strong",{children:"Primary!"})," You should ",e.jsx("a",{href:"data/Alert.stories#",children:"read this message"}),"."]})})]})}),`
`,e.jsx(s.h2,{children:"3. Alert Sizes"}),`
`,e.jsxs(s.p,{children:["you can use a ",e.jsx(s.code,{children:"size"})," prop to define the size of your components"]}),`
`,e.jsxs(s.p,{children:["Set ",e.jsx(s.code,{children:"size"})," prop with the value of (",e.jsx(s.code,{children:"xs"}),"|",e.jsx(s.code,{children:"sm"}),"|",e.jsx(s.code,{children:"md"}),"|",e.jsx(s.code,{children:"lg"}),",",e.jsx(s.code,{children:"xl"}),"). you can mix them with different supported ",e.jsx(s.code,{children:"theme"})," or ",e.jsx(s.code,{children:"layout"})]}),`
`,e.jsxs(s.p,{children:["Note: Mostly all the components have the same size values ie.(",e.jsx(s.code,{children:"xs"}),"|",e.jsx(s.code,{children:"sm"}),"|",e.jsx(s.code,{children:"md"}),"|",e.jsx(s.code,{children:"lg"}),",",e.jsx(s.code,{children:"xl"}),"). but some of the components might have additional sizes."]}),`
`,e.jsx("div",{children:e.jsxs("div",{name:"Alert Sizes",children:[e.jsxs(r,{size:"xs",children:["You should ",e.jsx("a",{href:"data/Alert.stories#",children:"read this message"}),"."]}),e.jsxs(r,{size:"sm",children:["You should ",e.jsx("a",{href:"data/Alert.stories#",children:"read this message"}),"."]}),e.jsxs(r,{children:["You should ",e.jsx("a",{href:"data/Alert.stories#",children:"read this message"}),"."]}),e.jsxs(r,{size:"lg",children:["You should ",e.jsx("a",{href:"data/Alert.stories#",children:"read this message"}),"."]}),e.jsxs(r,{size:"xl",children:["You should ",e.jsx("a",{href:"data/Alert.stories#",children:"read this message"}),"."]})]})}),`
`,e.jsx(s.h2,{children:"3. Alert Layouts"}),`
`,e.jsx(s.p,{children:"Alert Has basic four layouts to choose from to define how you component's structure should look like."}),`
`,e.jsxs(s.p,{children:["Set ",e.jsx(s.code,{children:"layout"})," prop with the value of (",e.jsx(s.code,{children:"default"}),"|",e.jsx(s.code,{children:"rounded"}),"|",e.jsx(s.code,{children:"no-radius"}),"|",e.jsx(s.code,{children:"pill"}),")"]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"Note:"})," Different components might have addition layouts based on there configuration and flexibility. you can check out the props table to see which layout is supported by the component"]}),`
`,e.jsx("div",{children:e.jsxs("div",{name:"Alert Layouts",children:[e.jsx("h5",{children:"Alerts Layouts"}),e.jsx("br",{}),e.jsxs(r,{layout:"rounded",children:[e.jsx("strong",{children:"Rounded!"})," You should ",e.jsx("a",{href:"data/Alert.stories#",children:`read this\r
message`}),"."]}),e.jsxs(r,{layout:"pill",children:[e.jsx("strong",{children:"Pill!"})," You should ",e.jsx("a",{href:"data/Alert.stories#",children:`read this\r
message`}),"."]}),e.jsxs(r,{layout:"no-radius",children:[e.jsx("strong",{children:"No Radius!"})," You should ",e.jsx("a",{href:"data/Alert.stories#",children:`read this\r
message`}),"."]}),e.jsxs(r,{layout:"default",children:[e.jsx("strong",{children:"Default!"})," You should ",e.jsx("a",{href:"data/Alert.stories#",children:`read this\r
message`}),"."]})]})}),`
`,e.jsx(s.h2,{children:"3. Alert Variants"}),`
`,e.jsxs(s.p,{children:["Artific UI provides a ",e.jsx(s.code,{children:"variant"})," prop to make you choose how your component ui should look like"]}),`
`,e.jsxs(s.p,{children:["Set ",e.jsx(s.code,{children:"variant"})," prop with the value of (",e.jsx(s.code,{children:"default"}),"|",e.jsx(s.code,{children:"text"}),"|",e.jsx(s.code,{children:"note"}),"|",e.jsx(s.code,{children:"outline"}),"). you can mix them with different supported ",e.jsx(s.code,{children:"theme"})," or ",e.jsx(s.code,{children:"layout"})]}),`
`,e.jsx(s.p,{children:`Note: Different components might have addition or different variant based on there configuration and flexibility.\r
you can check out the props table to see which variant is supported by the component`}),`
`,e.jsx("div",{children:e.jsxs("div",{name:"Alert Variants",children:[e.jsxs(r,{variant:"outline",children:[e.jsx("strong",{children:"Outline!"})," You should ",e.jsx("a",{href:"data/Alert.stories#",children:`read this\r
message`}),"."]}),e.jsxs(r,{variant:"default",children:[e.jsx("strong",{children:"Default!"})," You should ",e.jsx("a",{href:"data/Alert.stories#",children:`read\r
thismessage`}),"."]}),e.jsxs(r,{variant:"note",children:[e.jsx("strong",{children:"Note!"})," You should ",e.jsx("a",{href:"data/Alert.stories#",children:`read this\r
message`}),"."]})]})}),`
`,e.jsx(s.h2,{children:"3. Note Variant Directions"}),`
`,e.jsxs(s.p,{children:["Alert Note Variant has ",e.jsx(s.code,{children:"direction"})," prop to define which direction the alert should follow."]}),`
`,e.jsxs(s.p,{children:["Set ",e.jsx(s.code,{children:"direction"})," prop with the value of (",e.jsx(s.code,{children:"top"}),"|",e.jsx(s.code,{children:"bottom"}),"|",e.jsx(s.code,{children:"left"}),"|",e.jsx(s.code,{children:"right"}),"). you can mix them with different supported ",e.jsx(s.code,{children:"theme"})," or ",e.jsx(s.code,{children:"layout"})]}),`
`,e.jsx("div",{children:e.jsxs("div",{name:"Note Variant Directions",children:[e.jsxs(r,{variant:"note",children:["You should ",e.jsx("a",{href:"data/Alert.stories#",children:"read this message"}),"."]}),e.jsxs(r,{direction:"right",variant:"note",children:["You should ",e.jsx("a",{href:"data/Alert.stories#",children:`read this\r
message`}),"."]}),e.jsxs(r,{direction:"top",variant:"note",children:["You should ",e.jsx("a",{href:"data/Alert.stories#",children:"read this message"}),"."]}),e.jsxs(r,{direction:"bottom",variant:"note",children:["You should ",e.jsx("a",{href:"data/Alert.stories#",children:`read this\r
message`}),"."]})]})})]})}function c(i={}){const{wrapper:s}=i.components||{};return s?e.jsx(s,Object.assign({},i,{children:e.jsx(n,i)})):n(i)}export{h as Template,c as default};
