import{r as h,a as i,e as t,j as e,x as l,F as s}from"./index-cab7d04f.js";const c=n=>{const[r,d]=h.useState(!0);return r?i(t,Object.assign({},n,{onClose:()=>d(!1),children:[e("i",{className:"bi bi-info-circle flex-shrink-0 me-4"}),"This is an Alert"]})):e(l,{onClick:()=>d(!0),children:"Show Alert"})};function o(n){const r=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code"},n.components);return i(s,{children:[e(r.h1,{children:"Alerts"}),`
`,e(r.p,{children:"An alert displays a short, important message in a way that attracts the user's attention without interrupting the user's task."}),`
`,e("div",{children:e("div",{name:"Default",children:c.bind({})})}),`
`,e(r.h2,{children:"API"}),`
`,e(r.pre,{children:e(r.code,{className:"language-jsx",children:`import { Alert } from 'artific-ui/Alert';
`})}),`
`,e(r.h2,{children:"Dismissible Alert"}),`
`,e(r.p,{children:"A dismissible alert is a alert which can be removed from the user's screen by clicking on the close icon button"}),`
`,e("div",{children:e("div",{name:"Dismissible Alert",children:i(t,{dismiss:"true",children:[e("strong",{children:"Primary!"})," You should ",e("a",{href:"data/Alert.stories#",children:`read this\r
message`}),"."]})})}),`
`,e(r.h2,{children:"Alert Themes"}),`
`,i(r.p,{children:["If you want to use a different theme for ",e(r.code,{children:"Alert"})," use the ",e(r.code,{children:"theme"}),` prop to set the theme\r
Note: All components have basic four themes ie. (`,e(r.code,{children:"primary"}),"|",e(r.code,{children:"secondary"}),"|",e(r.code,{children:"dark"}),"|",e(r.code,{children:"light"}),"). you can use either of them."]}),`
`,e("div",{children:i("div",{name:"Alert Themes",children:[e("h5",{children:"Basic Alerts"}),e("br",{}),i(t,{dismiss:!0,children:[e("strong",{children:"Primary!"})," You should ",e("a",{href:"data/Alert.stories#",children:`read this\r
message`}),"."]}),i(t,{dismiss:!0,theme:"secondary",children:[e("strong",{children:"Secondary!"})," You should ",e("a",{href:"data/Alert.stories#",children:`read\r
this message`}),"."]}),i(t,{dismiss:!0,theme:"light",children:[e("strong",{children:"Light!"})," You should ",e("a",{href:"data/Alert.stories#",children:`read\r
this\r
message`}),"."]}),i(t,{dismiss:!0,theme:"dark",children:[e("strong",{children:"Dark!"})," You should ",e("a",{href:"data/Alert.stories#",children:`read this\r
message`}),"."]}),e("br",{})]})}),`
`,e(r.h2,{children:"2. Custom Alert"}),`
`,i(r.p,{children:["If you want to use a different color scheme for ",e(r.code,{children:"Alert"}),` instead of the provided themes then you can use\r
`,e(r.code,{children:"colorScheme"})," props to define your color scheme."]}),`
`,i(r.p,{children:["colorScheme is an object containing three properties: ",e(r.code,{children:"background"}),", ",e(r.code,{children:"backgroundColor"}),", ",e(r.code,{children:"color"})]}),`
`,e("div",{children:i("div",{name:"Custom Alert",children:[e("h5",{children:"CustomScheme Alerts"}),e("br",{}),e(t,{dismiss:"true",colorScheme:{background:"linear-gradient(45deg, #e736f4, #673ab7)",backgroundColor:"#e736f4",color:"white"},children:i(r.p,{children:[e("strong",{children:"Primary!"})," You should ",e("a",{href:"data/Alert.stories#",children:"read this message"}),"."]})})]})}),`
`,e(r.h2,{children:"3. Alert Sizes"}),`
`,i(r.p,{children:["you can use a ",e(r.code,{children:"size"})," prop to define the size of your components"]}),`
`,i(r.p,{children:["Set ",e(r.code,{children:"size"})," prop with the value of (",e(r.code,{children:"xs"}),"|",e(r.code,{children:"sm"}),"|",e(r.code,{children:"md"}),"|",e(r.code,{children:"lg"}),",",e(r.code,{children:"xl"}),"). you can mix them with different supported ",e(r.code,{children:"theme"})," or ",e(r.code,{children:"layout"})]}),`
`,i(r.p,{children:["Note: Mostly all the components have the same size values ie.(",e(r.code,{children:"xs"}),"|",e(r.code,{children:"sm"}),"|",e(r.code,{children:"md"}),"|",e(r.code,{children:"lg"}),",",e(r.code,{children:"xl"}),"). but some of the components might have additional sizes."]}),`
`,e("div",{children:i("div",{name:"Alert Sizes",children:[i(t,{size:"xs",children:["You should ",e("a",{href:"data/Alert.stories#",children:"read this message"}),"."]}),i(t,{size:"sm",children:["You should ",e("a",{href:"data/Alert.stories#",children:"read this message"}),"."]}),i(t,{children:["You should ",e("a",{href:"data/Alert.stories#",children:"read this message"}),"."]}),i(t,{size:"lg",children:["You should ",e("a",{href:"data/Alert.stories#",children:"read this message"}),"."]}),i(t,{size:"xl",children:["You should ",e("a",{href:"data/Alert.stories#",children:"read this message"}),"."]})]})}),`
`,e(r.h2,{children:"3. Alert Layouts"}),`
`,e(r.p,{children:"Alert Has basic four layouts to choose from to define how you component's structure should look like."}),`
`,i(r.p,{children:["Set ",e(r.code,{children:"layout"})," prop with the value of (",e(r.code,{children:"default"}),"|",e(r.code,{children:"rounded"}),"|",e(r.code,{children:"no-radius"}),"|",e(r.code,{children:"pill"}),")"]}),`
`,i(r.p,{children:[e(r.code,{children:"Note:"})," Different components might have addition layouts based on there configuration and flexibility. you can check out the props table to see which layout is supported by the component"]}),`
`,e("div",{children:i("div",{name:"Alert Layouts",children:[e("h5",{children:"Alerts Layouts"}),e("br",{}),i(t,{layout:"rounded",children:[e("strong",{children:"Rounded!"})," You should ",e("a",{href:"data/Alert.stories#",children:`read this\r
message`}),"."]}),i(t,{layout:"pill",children:[e("strong",{children:"Pill!"})," You should ",e("a",{href:"data/Alert.stories#",children:`read this\r
message`}),"."]}),i(t,{layout:"no-radius",children:[e("strong",{children:"No Radius!"})," You should ",e("a",{href:"data/Alert.stories#",children:`read this\r
message`}),"."]}),i(t,{layout:"default",children:[e("strong",{children:"Default!"})," You should ",e("a",{href:"data/Alert.stories#",children:`read this\r
message`}),"."]})]})}),`
`,e(r.h2,{children:"3. Alert Variants"}),`
`,i(r.p,{children:["Artific UI provides a ",e(r.code,{children:"variant"})," prop to make you choose how your component ui should look like"]}),`
`,i(r.p,{children:["Set ",e(r.code,{children:"variant"})," prop with the value of (",e(r.code,{children:"default"}),"|",e(r.code,{children:"text"}),"|",e(r.code,{children:"note"}),"|",e(r.code,{children:"outline"}),"). you can mix them with different supported ",e(r.code,{children:"theme"})," or ",e(r.code,{children:"layout"})]}),`
`,e(r.p,{children:`Note: Different components might have addition or different variant based on there configuration and flexibility.\r
you can check out the props table to see which variant is supported by the component`}),`
`,e("div",{children:i("div",{name:"Alert Variants",children:[i(t,{variant:"outline",children:[e("strong",{children:"Outline!"})," You should ",e("a",{href:"data/Alert.stories#",children:`read this\r
message`}),"."]}),i(t,{variant:"default",children:[e("strong",{children:"Default!"})," You should ",e("a",{href:"data/Alert.stories#",children:`read\r
thismessage`}),"."]}),i(t,{variant:"note",children:[e("strong",{children:"Note!"})," You should ",e("a",{href:"data/Alert.stories#",children:`read this\r
message`}),"."]})]})}),`
`,e(r.h2,{children:"3. Note Variant Directions"}),`
`,i(r.p,{children:["Alert Note Variant has ",e(r.code,{children:"direction"})," prop to define which direction the alert should follow."]}),`
`,i(r.p,{children:["Set ",e(r.code,{children:"direction"})," prop with the value of (",e(r.code,{children:"top"}),"|",e(r.code,{children:"bottom"}),"|",e(r.code,{children:"left"}),"|",e(r.code,{children:"right"}),"). you can mix them with different supported ",e(r.code,{children:"theme"})," or ",e(r.code,{children:"layout"})]}),`
`,e("div",{children:i("div",{name:"Note Variant Directions",children:[i(t,{variant:"note",children:["You should ",e("a",{href:"data/Alert.stories#",children:"read this message"}),"."]}),i(t,{direction:"right",variant:"note",children:["You should ",e("a",{href:"data/Alert.stories#",children:`read this\r
message`}),"."]}),i(t,{direction:"top",variant:"note",children:["You should ",e("a",{href:"data/Alert.stories#",children:"read this message"}),"."]}),i(t,{direction:"bottom",variant:"note",children:["You should ",e("a",{href:"data/Alert.stories#",children:`read this\r
message`}),"."]})]})})]})}function u(n={}){const{wrapper:r}=n.components||{};return r?e(r,Object.assign({},n,{children:e(o,n)})):o(n)}export{c as Template,u as default};
