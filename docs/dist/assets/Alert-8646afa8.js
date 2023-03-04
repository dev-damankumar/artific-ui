import{r as o,a as i,Q as n,j as e,c as s,F as l}from"./index-c5414e4b.js";const c=d=>{const[r,t]=o.useState(!0);return r?i(n,Object.assign({},d,{onClose:()=>t(!1),children:[e("i",{className:"bi bi-info-circle flex-shrink-0 me-4"}),"This is an Alert"]})):e(s,{onClick:()=>t(!0),children:"Show Alert"})};function h(d){const r=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code"},d.components);return i(l,{children:[e(r.h1,{children:"Alerts"}),`
`,e(r.p,{children:"An alert displays a short, important message in a way that attracts the user's attention without interrupting the user's task."}),`
`,e("div",{children:e("div",{name:"Default",children:c.bind({})})}),`
`,e(r.h2,{children:"API"}),`
`,e(r.pre,{children:e(r.code,{className:"language-jsx",children:`import { Alert } from 'artific-ui/Alert'
`})}),`
`,e(r.h2,{children:"Alert Themes"}),`
`,i(r.p,{children:["If you want to use a different theme for ",e(r.code,{children:"Alert"})," use the ",e(r.code,{children:"theme"}),` prop to set the theme\r
Note: All components have basic four themes ie. (`,e(r.code,{children:"primary"}),"|",e(r.code,{children:"secondary"}),"|",e(r.code,{children:"dark"}),"|",e(r.code,{children:"light"}),"). you can use either of them."]}),`
`,e("div",{children:i("div",{name:"Alert Themes",children:[e("h5",{children:"Basic Alerts"}),e("br",{}),e(n,{dismiss:!0,children:i(r.p,{children:[e("strong",{children:"Primary!"})," You should"," ",`\r
`,e("a",{href:"data/Alert.stories#",children:"read this message"}),"."]})}),e(n,{dismiss:!0,theme:"secondary",children:i(r.p,{children:[e("strong",{children:"Secondary!"})," You should"," ",`\r
`,e("a",{href:"data/Alert.stories#",children:"read this message"}),"."]})}),e(n,{dismiss:!0,theme:"light",children:i(r.p,{children:[e("strong",{children:"Light!"})," You should"," ",`\r
`,e("a",{href:"data/Alert.stories#",children:"read this message"}),"."]})}),e(n,{dismiss:!0,theme:"dark",children:i(r.p,{children:[e("strong",{children:"Dark!"})," You should"," ",`\r
`,e("a",{href:"data/Alert.stories#",children:"read this message"}),"."]})}),e("br",{})]})}),`
`,e(r.h2,{children:"Custom Alert"}),`
`,i(r.p,{children:["If you want to use a different color scheme for ",e(r.code,{children:"Alert"}),` instead of the provided themes then you can use\r
`,e(r.code,{children:"colorScheme"})," props to define your color scheme."]}),`
`,i(r.p,{children:["colorScheme is an object containing three properties: ",e(r.code,{children:"background"}),", ",e(r.code,{children:"backgroundColor"}),", ",e(r.code,{children:"color"})]}),`
`,e("div",{children:e("div",{name:"Custom Alert",children:e(n,{dismiss:!0,colorScheme:{background:"linear-gradient(45deg, #e736f4, #673ab7)",backgroundColor:"#e736f4",color:"white"},children:i(r.p,{children:[e("strong",{children:"Primary!"})," You should"," ",`\r
`,e("a",{href:"data/Alert.stories#",children:"read this message"}),"."]})})})}),`
`,e(r.h2,{children:"Dismissible Alert"}),`
`,e(r.p,{children:"A dismissible alert is a alert which can be removed from the user's screen by clicking on the close icon button"}),`
`,e("div",{children:i("div",{name:"Dismissible Alert",children:[e(n,{dismiss:!0,children:i(r.p,{children:[e("strong",{children:"Primary!"})," You should"," ",`\r
`,e("a",{href:"data/Alert.stories#",children:"read this message"}),"."]})}),e(n,{dismiss:!0,theme:"secondary",children:i(r.p,{children:[e("strong",{children:"Secondary!"})," You should"," ",`\r
`,e("a",{href:"data/Alert.stories#",children:"read this message"}),"."]})}),e(n,{dismiss:!0,theme:"dark",children:i(r.p,{children:[e("strong",{children:"Dark!"})," You should"," ",`\r
`,e("a",{href:"data/Alert.stories#",children:"read this message"}),"."]})}),e(n,{dismiss:!0,theme:"light",children:i(r.p,{children:[e("strong",{children:"Light!"})," You should"," ",`\r
`,e("a",{href:"data/Alert.stories#",children:"read this message"}),"."]})}),e(n,{dismiss:!0,colorScheme:{background:"linear-gradient(45deg, #e736f4, #673ab7)",backgroundColor:"#e736f4",color:"white"},children:i(r.p,{children:[e("strong",{children:"Custom!"})," You should"," ",`\r
`,e("a",{href:"data/Alert.stories#",children:"read this message"}),"."]})})]})}),`
`,e(r.h2,{children:"Alert Sizes"}),`
`,i(r.p,{children:["you can use a ",e(r.code,{children:"size"})," prop to define the size of your components"]}),`
`,i(r.p,{children:["Set ",e(r.code,{children:"size"})," prop with the value of (",e(r.code,{children:"xs"}),"|",e(r.code,{children:"sm"}),"|",e(r.code,{children:"md"}),"|",e(r.code,{children:"lg"}),",",e(r.code,{children:"xl"}),"). you can mix them with different supported ",e(r.code,{children:"theme"})," or ",e(r.code,{children:"layout"})]}),`
`,i(r.p,{children:["Note: Mostly all the components have the same size values ie.(",e(r.code,{children:"xs"}),"|",e(r.code,{children:"sm"}),"|",e(r.code,{children:"md"}),"|",e(r.code,{children:"lg"}),",",e(r.code,{children:"xl"}),"). but some of the components might have additional sizes."]}),`
`,e("div",{children:i("div",{name:"Alert Sizes",children:[e(n,{dismiss:!0,size:"xs",children:i(r.p,{children:["You should ",e("a",{href:"data/Alert.stories#",children:"read this message"}),"."]})}),e(n,{dismiss:!0,size:"sm",children:i(r.p,{children:["You should ",e("a",{href:"data/Alert.stories#",children:"read this message"}),"."]})}),e(n,{dismiss:!0,children:i(r.p,{children:["You should ",e("a",{href:"data/Alert.stories#",children:"read this message"}),"."]})}),e(n,{dismiss:!0,size:"lg",children:i(r.p,{children:["You should ",e("a",{href:"data/Alert.stories#",children:"read this message"}),"."]})}),e(n,{dismiss:!0,size:"xl",children:i(r.p,{children:["You should ",e("a",{href:"data/Alert.stories#",children:"read this message"}),"."]})})]})}),`
`,e(r.h2,{children:"Alert Layouts"}),`
`,e(r.p,{children:"Alert Has basic four layouts to choose from to define how you component's structure should look like."}),`
`,i(r.p,{children:["Set ",e(r.code,{children:"layout"})," prop with the value of (",e(r.code,{children:"default"}),"|",e(r.code,{children:"rounded"}),"|",e(r.code,{children:"no-radius"}),"|",e(r.code,{children:"pill"}),")"]}),`
`,i(r.p,{children:[e(r.code,{children:"Note:"})," Different components might have addition layouts based on there configuration and flexibility. you can check out the props table to see which layout is supported by the component"]}),`
`,e("div",{children:i("div",{name:"Alert Layouts",children:[e("h5",{children:"Alerts Layouts"}),e("br",{}),e(n,{layout:"rounded",children:i(r.p,{children:[e("strong",{children:"Rounded!"})," You should"," ",`\r
`,e("a",{href:"data/Alert.stories#",children:"read this message"}),"."]})}),e(n,{layout:"pill",children:i(r.p,{children:[e("strong",{children:"Pill!"})," You should"," ",`\r
`,e("a",{href:"data/Alert.stories#",children:"read this message"}),"."]})}),e(n,{layout:"no-radius",children:i(r.p,{children:[e("strong",{children:"No Radius!"})," You should"," ",`\r
`,e("a",{href:"data/Alert.stories#",children:"read this message"}),"."]})}),e(n,{layout:"default",children:i(r.p,{children:[e("strong",{children:"Default!"})," You should"," ",`\r
`,e("a",{href:"data/Alert.stories#",children:"read this message"}),"."]})})]})}),`
`,e(r.h2,{children:"Alert Variants"}),`
`,i(r.p,{children:["Artific UI provides a ",e(r.code,{children:"variant"})," prop to make you choose how your component ui should look like"]}),`
`,i(r.p,{children:["Set ",e(r.code,{children:"variant"})," prop with the value of (",e(r.code,{children:"default"}),"|",e(r.code,{children:"text"}),"|",e(r.code,{children:"note"}),"|",e(r.code,{children:"outline"}),"). you can mix them with different supported ",e(r.code,{children:"theme"})," or ",e(r.code,{children:"layout"})]}),`
`,e(r.p,{children:`Note: Different components might have addition or different variant based on there configuration and flexibility.\r
you can check out the props table to see which variant is supported by the component`}),`
`,e("div",{children:i("div",{name:"Alert Variants",children:[e(n,{variant:"outline",children:i(r.p,{children:[e("strong",{children:"Outline!"})," You should"," ",`\r
`,e("a",{href:"data/Alert.stories#",children:"read this message"}),"."]})}),e(n,{variant:"default",children:i(r.p,{children:[e("strong",{children:"Default!"})," You should"," ",`\r
`,e("a",{href:"data/Alert.stories#",children:"read thismessage"}),"."]})}),e(n,{variant:"note",children:i(r.p,{children:[e("strong",{children:"Note!"})," You should"," ",`\r
`,e("a",{href:"data/Alert.stories#",children:"read this message"}),"."]})})]})}),`
`,e(r.h2,{children:"Note Variant Directions"}),`
`,i(r.p,{children:["Alert Note Variant has ",e(r.code,{children:"direction"})," prop to define which direction the alert should follow."]}),`
`,i(r.p,{children:["Set ",e(r.code,{children:"direction"})," prop with the value of (",e(r.code,{children:"top"}),"|",e(r.code,{children:"bottom"}),"|",e(r.code,{children:"left"}),"|",e(r.code,{children:"right"}),"). you can mix them with different supported ",e(r.code,{children:"theme"})," or ",e(r.code,{children:"layout"})]}),`
`,e("div",{children:i("div",{name:"Note Variant Directions",children:[e(n,{variant:"note",children:i(r.p,{children:["You should ",e("a",{href:"data/Alert.stories#",children:"read this message"}),"."]})}),e(n,{direction:"right",variant:"note",children:i(r.p,{children:["You should ",e("a",{href:"data/Alert.stories#",children:"read this message"}),"."]})}),e(n,{direction:"top",variant:"note",children:i(r.p,{children:["You should ",e("a",{href:"data/Alert.stories#",children:"read this message"}),"."]})}),e(n,{direction:"bottom",variant:"note",children:i(r.p,{children:["You should ",e("a",{href:"data/Alert.stories#",children:"read this message"}),"."]})})]})})]})}function u(d={}){const{wrapper:r}=d.components||{};return r?e(r,Object.assign({},d,{children:e(h,d)})):h(d)}export{c as Template,u as default};
