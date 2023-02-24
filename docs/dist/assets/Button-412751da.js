import{j as e,x as t,a as o,F as c,c as d}from"./index-cab7d04f.js";const l=i=>e(t,Object.assign({},i,{children:"Default"}));function r(i){const n=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",i:"i",img:"img"},i.components);return o(c,{children:[e(n.h1,{children:"Buttons"}),`
`,e(n.p,{children:"Buttons allow users to take actions, and make choices, with a single tap."}),`
`,`
`,e("div",{children:e("div",{children:l.bind({})})}),`
`,e(n.h2,{children:"API"}),`
`,e(n.pre,{children:e(n.code,{className:"language-jsx",children:`import { Button } from 'artific-ui/Button';
`})}),`
`,e(n.h2,{children:"Button Themes"}),`
`,o(n.p,{children:["If you want to use a different theme for ",e(n.code,{children:"Button"})," use the ",e(n.code,{children:"theme"}),` prop to set the theme\r
Note: All components have basic four themes ie. (`,e(n.code,{children:"primary"}),"|",e(n.code,{children:"secondary"}),"|",e(n.code,{children:"dark"}),"|",e(n.code,{children:"light"}),"). you can use either of them."]}),`
`,e("div",{children:e("div",{children:o(d,{children:[e(t,{theme:"primary",type:"button",children:"Primary"}),e(t,{theme:"secondary",type:"button",children:"Secondary"}),e(t,{theme:"light",type:"button",children:"Light"}),e(t,{theme:"dark",type:"button",children:"Dark"})]})})}),`
`,e(n.h2,{children:"Custom Theme Buttons"}),`
`,o(n.p,{children:["If you want to use a different color scheme for ",e(n.code,{children:"Button"}),` instead of the provided themes then you can use\r
`,e(n.code,{children:"colorScheme"})," props to define your color scheme."]}),`
`,o(n.p,{children:["colorScheme is an object containing three properties: ",e(n.code,{children:"background"}),", ",e(n.code,{children:"backgroundColor"}),", ",e(n.code,{children:"color"})]}),`
`,e("div",{children:e("div",{name:"Custom theme buttons",children:o(d,{children:[e(t,{colorScheme:{background:"linear-gradient(45deg, #e736f4, #673ab7)",backgroundColor:"#e736f4",color:"white"},type:"button",children:"Primary"}),e(t,{colorScheme:{background:"red",color:"white"},theme:"light",type:"button",children:"Light"}),e(t,{colorScheme:{background:"linear-gradient(45deg, #e736f4, #673ab7)",backgroundColor:"#e736f4",color:"white"},variant:"outline",type:"button",children:"Custom Outline"}),e(t,{colorScheme:{background:"red",color:"white"},variant:"outline",theme:"light",type:"button",children:"Custom Outline"})]})})}),`
`,e(n.h2,{children:"Variants"}),`
`,o(n.p,{children:["Artific UI provides a ",e(n.code,{children:"variant"})," prop to make you choose how your component ui should look like"]}),`
`,o(n.p,{children:["Set ",e(n.code,{children:"variant"})," prop with the value of (",e(n.code,{children:"default"}),"|",e(n.code,{children:"text"}),"|",e(n.code,{children:"outline"}),"). you can mix them with different supported ",e(n.code,{children:"theme"})," or ",e(n.code,{children:"layout"})]}),`
`,e(n.p,{children:`Note: Different components might have addition or different variant based on there configuration and flexibility.\r
you can check out the props table to see which variant is supported by the component`}),`
`,e("div",{children:e("div",{name:"Variants",children:o(d,{children:[e(t,{variant:"default",type:"button",children:"Default"}),e(t,{variant:"text",type:"button",children:"Text"}),e(t,{variant:"outline",type:"button",children:"Outline"})]})})}),`
`,e(n.h2,{children:"Icons In Buttons"}),`
`,o(n.p,{children:["You can append or prepend an icon to the button with prop called ",e(n.code,{children:"prefix"})," and ",e(n.code,{children:"suffix"})]}),`
`,e(n.p,{children:"any jsx is allowed in these props."}),`
`,e("div",{children:e("div",{children:o(d,{children:[e(t,{prefix:e(n.i,{className:"bx bxs-user-circle"}),type:"button",children:"User"}),e(t,{theme:"light",type:"button",suffix:e(n.i,{className:"bx bx-cog"}),children:"Settings"}),e(t,{theme:"dark",prefix:e(n.img,{src:"https://www.freepnglogos.com/uploads/logo-outlook/transparent-outlook-icon-2.png"}),type:"button",children:"User"}),e(t,{theme:"light",type:"button",suffix:e(n.img,{src:"https://www.freepnglogos.com/uploads/logo-outlook/transparent-outlook-icon-2.png"}),children:"Settings"})]})})}),`
`,e(n.h2,{children:"Button Layouts"}),`
`,e(n.p,{children:"Button Has basic four layouts to choose from to define how you component's structure should look like."}),`
`,o(n.p,{children:["Set ",e(n.code,{children:"layout"})," prop with the value of (",e(n.code,{children:"default"}),"|",e(n.code,{children:"rounded"}),"|",e(n.code,{children:"no-radius"}),"|",e(n.code,{children:"pill"}),")"]}),`
`,o(n.p,{children:[e(n.code,{children:"Note:"})," Different components might have addition layouts based on there configuration and flexibility. you can check out the props table to see which layout is supported by the component"]}),`
`,e("div",{children:e("div",{name:"Button Layouts",children:o(d,{children:[e(t,{layout:"default",type:"button",children:"Default"}),e(t,{layout:"rounded",type:"button",children:"Rounded"}),e(t,{layout:"pill",type:"button",children:"Pill"}),e(t,{layout:"no-radius",type:"button",children:"No Radius"})]})})}),`
`,e(n.h2,{children:"Full Width Button"}),`
`,o(n.p,{children:["Button has a ",e(n.code,{children:"fullWidth"})," prop which is used to make a button full width"]}),`
`,e("div",{children:e("div",{name:"Full Width Button",children:e(t,{fullwidth:!0,type:"button",children:"Default"})})}),`
`,e(n.h2,{children:"Sizes"}),`
`,o(n.p,{children:["you can use a ",e(n.code,{children:"size"})," prop to define the size of your components"]}),`
`,o(n.p,{children:["Set ",e(n.code,{children:"size"})," prop with the value of (",e(n.code,{children:"xs"}),"|",e(n.code,{children:"sm"}),"|",e(n.code,{children:"md"}),"|",e(n.code,{children:"lg"}),",",e(n.code,{children:"xl"}),"). you can mix them with different supported ",e(n.code,{children:"theme"})," or ",e(n.code,{children:"layout"})]}),`
`,o(n.p,{children:["Note: Mostly all the components have the same size values ie.(",e(n.code,{children:"xs"}),"|",e(n.code,{children:"sm"}),"|",e(n.code,{children:"md"}),"|",e(n.code,{children:"lg"}),",",e(n.code,{children:"xl"}),"). but some of the components might have additional sizes."]}),`
`,e("div",{children:e("div",{name:"Sizes",children:o(d,{children:[e(t,{size:"xs",type:"button",children:"Extra Small"}),e(t,{size:"sm",type:"button",children:"Small"}),e(t,{type:"button",children:"default"}),e(t,{size:"lg",type:"button",children:"Large"}),e(t,{size:"xl",type:"button",children:"Extra Large"})]})})}),`
`,e(n.h2,{children:"Disabled Buttons"}),`
`,o(n.p,{children:["Use ",e(n.code,{children:"disabled"})," prop to make any button disable."]}),`
`,e("div",{children:e("div",{name:"Disabled Buttons",children:o(d,{children:[e(t,{disabled:!0,type:"button",children:"Primary"}),e(t,{disabled:!0,theme:"light",type:"button",children:"Light"}),e(t,{disabled:!0,theme:"dark",type:"button",children:"Dark"})]})})}),`
`,e(n.h2,{children:"Loading Buttons"}),`
`,o(n.p,{children:["When you click the button you can set it to loading state with the prop called ",e(n.code,{children:"loading"})]}),`
`,o(n.p,{children:["also you can choose to hide the text of button when ",e(n.code,{children:"loading"})," is true, by setting with the ",e(n.code,{children:"hideTextOnLoading"})," props"]}),`
`,o(n.p,{children:["also you can use ",e(n.code,{children:"loadingStyle:"})," (",e(n.code,{children:"spin"}),"|",e(n.code,{children:"grow"}),") to change the loading style."]}),`
`,o(n.p,{children:["use ",e(n.code,{children:"loadingDirection"})," to set on with direction loader should appare."]}),`
`,e("div",{children:e("div",{name:"Loading Buttons",children:o(d,{children:[e(t,{loading:!0,hideTextOnLoading:!0,loadingStyle:"spin",type:"button",children:"Loading Grow"}),e(t,{loading:!0,hideTextOnLoading:!0,loadingStyle:"grow",type:"button",children:"Loading Grow"}),e(t,{loading:!0,loadingStyle:"grow",type:"button",children:"Loading Grow"}),e(t,{loading:!0,loadingDirection:"after",type:"button",children:"Loading Spin"}),e(t,{loading:!0,loadingDirection:"after",loadingStyle:"grow",type:"button",children:"Loading Grow"})]})})})]})}function a(i={}){const{wrapper:n}=i.components||{};return n?e(n,Object.assign({},i,{children:e(r,i)})):r(i)}export{a as default,l as defaultTemplate};
