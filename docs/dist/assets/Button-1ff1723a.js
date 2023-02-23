import{j as e,x as t,b as i}from"./index-f2287826.js";const s=o=>e.jsx(t,Object.assign({},o,{children:"Default"}));function d(o){const n=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",i:"i",img:"img"},o.components);return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{children:"Buttons"}),`
`,e.jsx(n.p,{children:"Buttons allow users to take actions, and make choices, with a single tap."}),`
`,`
`,e.jsx("div",{children:e.jsx("div",{children:s.bind({})})}),`
`,e.jsx(n.h2,{children:"API"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { Button } from 'artific-ui/Button';
`})}),`
`,e.jsx(n.h2,{children:"Button Themes"}),`
`,e.jsxs(n.p,{children:["If you want to use a different theme for ",e.jsx(n.code,{children:"Button"})," use the ",e.jsx(n.code,{children:"theme"}),` prop to set the theme\r
Note: All components have basic four themes ie. (`,e.jsx(n.code,{children:"primary"}),"|",e.jsx(n.code,{children:"secondary"}),"|",e.jsx(n.code,{children:"dark"}),"|",e.jsx(n.code,{children:"light"}),"). you can use either of them."]}),`
`,e.jsx("div",{children:e.jsx("div",{children:e.jsxs(i,{children:[e.jsx(t,{theme:"primary",type:"button",children:"Primary"}),e.jsx(t,{theme:"secondary",type:"button",children:"Secondary"}),e.jsx(t,{theme:"light",type:"button",children:"Light"}),e.jsx(t,{theme:"dark",type:"button",children:"Dark"})]})})}),`
`,e.jsx(n.h2,{children:"Custom Theme Buttons"}),`
`,e.jsxs(n.p,{children:["If you want to use a different color scheme for ",e.jsx(n.code,{children:"Button"}),` instead of the provided themes then you can use\r
`,e.jsx(n.code,{children:"colorScheme"})," props to define your color scheme."]}),`
`,e.jsxs(n.p,{children:["colorScheme is an object containing three properties: ",e.jsx(n.code,{children:"background"}),", ",e.jsx(n.code,{children:"backgroundColor"}),", ",e.jsx(n.code,{children:"color"})]}),`
`,e.jsx("div",{children:e.jsx("div",{name:"Custom theme buttons",children:e.jsxs(i,{children:[e.jsx(t,{colorScheme:{background:"linear-gradient(45deg, #e736f4, #673ab7)",backgroundColor:"#e736f4",color:"white"},type:"button",children:"Primary"}),e.jsx(t,{colorScheme:{background:"red",color:"white"},theme:"light",type:"button",children:"Light"}),e.jsx(t,{colorScheme:{background:"linear-gradient(45deg, #e736f4, #673ab7)",backgroundColor:"#e736f4",color:"white"},variant:"outline",type:"button",children:"Custom Outline"}),e.jsx(t,{colorScheme:{background:"red",color:"white"},variant:"outline",theme:"light",type:"button",children:"Custom Outline"})]})})}),`
`,e.jsx(n.h2,{children:"Variants"}),`
`,e.jsxs(n.p,{children:["Artific UI provides a ",e.jsx(n.code,{children:"variant"})," prop to make you choose how your component ui should look like"]}),`
`,e.jsxs(n.p,{children:["Set ",e.jsx(n.code,{children:"variant"})," prop with the value of (",e.jsx(n.code,{children:"default"}),"|",e.jsx(n.code,{children:"text"}),"|",e.jsx(n.code,{children:"outline"}),"). you can mix them with different supported ",e.jsx(n.code,{children:"theme"})," or ",e.jsx(n.code,{children:"layout"})]}),`
`,e.jsx(n.p,{children:`Note: Different components might have addition or different variant based on there configuration and flexibility.\r
you can check out the props table to see which variant is supported by the component`}),`
`,e.jsx("div",{children:e.jsx("div",{name:"Variants",children:e.jsxs(i,{children:[e.jsx(t,{variant:"default",type:"button",children:"Default"}),e.jsx(t,{variant:"text",type:"button",children:"Text"}),e.jsx(t,{variant:"outline",type:"button",children:"Outline"})]})})}),`
`,e.jsx(n.h2,{children:"Icons In Buttons"}),`
`,e.jsxs(n.p,{children:["You can append or prepend an icon to the button with prop called ",e.jsx(n.code,{children:"prefix"})," and ",e.jsx(n.code,{children:"suffix"})]}),`
`,e.jsx(n.p,{children:"any jsx is allowed in these props."}),`
`,e.jsx("div",{children:e.jsx("div",{children:e.jsxs(i,{children:[e.jsx(t,{prefix:e.jsx(n.i,{className:"bx bxs-user-circle"}),type:"button",children:"User"}),e.jsx(t,{theme:"light",type:"button",suffix:e.jsx(n.i,{className:"bx bx-cog"}),children:"Settings"}),e.jsx(t,{theme:"dark",prefix:e.jsx(n.img,{src:"https://www.freepnglogos.com/uploads/logo-outlook/transparent-outlook-icon-2.png"}),type:"button",children:"User"}),e.jsx(t,{theme:"light",type:"button",suffix:e.jsx(n.img,{src:"https://www.freepnglogos.com/uploads/logo-outlook/transparent-outlook-icon-2.png"}),children:"Settings"})]})})}),`
`,e.jsx(n.h2,{children:"Button Layouts"}),`
`,e.jsx(n.p,{children:"Button Has basic four layouts to choose from to define how you component's structure should look like."}),`
`,e.jsxs(n.p,{children:["Set ",e.jsx(n.code,{children:"layout"})," prop with the value of (",e.jsx(n.code,{children:"default"}),"|",e.jsx(n.code,{children:"rounded"}),"|",e.jsx(n.code,{children:"no-radius"}),"|",e.jsx(n.code,{children:"pill"}),")"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Note:"})," Different components might have addition layouts based on there configuration and flexibility. you can check out the props table to see which layout is supported by the component"]}),`
`,e.jsx("div",{children:e.jsx("div",{name:"Button Layouts",children:e.jsxs(i,{children:[e.jsx(t,{layout:"default",type:"button",children:"Default"}),e.jsx(t,{layout:"rounded",type:"button",children:"Rounded"}),e.jsx(t,{layout:"pill",type:"button",children:"Pill"}),e.jsx(t,{layout:"no-radius",type:"button",children:"No Radius"})]})})}),`
`,e.jsx(n.h2,{children:"Full Width Button"}),`
`,e.jsxs(n.p,{children:["Button has a ",e.jsx(n.code,{children:"fullWidth"})," prop which is used to make a button full width"]}),`
`,e.jsx("div",{children:e.jsx("div",{name:"Full Width Button",children:e.jsx(t,{fullwidth:!0,type:"button",children:"Default"})})}),`
`,e.jsx(n.h2,{children:"Sizes"}),`
`,e.jsxs(n.p,{children:["you can use a ",e.jsx(n.code,{children:"size"})," prop to define the size of your components"]}),`
`,e.jsxs(n.p,{children:["Set ",e.jsx(n.code,{children:"size"})," prop with the value of (",e.jsx(n.code,{children:"xs"}),"|",e.jsx(n.code,{children:"sm"}),"|",e.jsx(n.code,{children:"md"}),"|",e.jsx(n.code,{children:"lg"}),",",e.jsx(n.code,{children:"xl"}),"). you can mix them with different supported ",e.jsx(n.code,{children:"theme"})," or ",e.jsx(n.code,{children:"layout"})]}),`
`,e.jsxs(n.p,{children:["Note: Mostly all the components have the same size values ie.(",e.jsx(n.code,{children:"xs"}),"|",e.jsx(n.code,{children:"sm"}),"|",e.jsx(n.code,{children:"md"}),"|",e.jsx(n.code,{children:"lg"}),",",e.jsx(n.code,{children:"xl"}),"). but some of the components might have additional sizes."]}),`
`,e.jsx("div",{children:e.jsx("div",{name:"Sizes",children:e.jsxs(i,{children:[e.jsx(t,{size:"xs",type:"button",children:"Extra Small"}),e.jsx(t,{size:"sm",type:"button",children:"Small"}),e.jsx(t,{type:"button",children:"default"}),e.jsx(t,{size:"lg",type:"button",children:"Large"}),e.jsx(t,{size:"xl",type:"button",children:"Extra Large"})]})})}),`
`,e.jsx(n.h2,{children:"Disabled Buttons"}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.code,{children:"disabled"})," prop to make any button disable."]}),`
`,e.jsx("div",{children:e.jsx("div",{name:"Disabled Buttons",children:e.jsxs(i,{children:[e.jsx(t,{disabled:!0,type:"button",children:"Primary"}),e.jsx(t,{disabled:!0,theme:"light",type:"button",children:"Light"}),e.jsx(t,{disabled:!0,theme:"dark",type:"button",children:"Dark"})]})})}),`
`,e.jsx(n.h2,{children:"Loading Buttons"}),`
`,e.jsxs(n.p,{children:["When you click the button you can set it to loading state with the prop called ",e.jsx(n.code,{children:"loading"})]}),`
`,e.jsxs(n.p,{children:["also you can choose to hide the text of button when ",e.jsx(n.code,{children:"loading"})," is true, by setting with the ",e.jsx(n.code,{children:"hideTextOnLoading"})," props"]}),`
`,e.jsxs(n.p,{children:["also you can use ",e.jsx(n.code,{children:"loadingStyle:"})," (",e.jsx(n.code,{children:"spin"}),"|",e.jsx(n.code,{children:"grow"}),") to change the loading style."]}),`
`,e.jsxs(n.p,{children:["use ",e.jsx(n.code,{children:"loadingDirection"})," to set on with direction loader should appare."]}),`
`,e.jsx("div",{children:e.jsx("div",{name:"Loading Buttons",children:e.jsxs(i,{children:[e.jsx(t,{loading:!0,hideTextOnLoading:!0,loadingStyle:"spin",type:"button",children:"Loading Grow"}),e.jsx(t,{loading:!0,hideTextOnLoading:!0,loadingStyle:"grow",type:"button",children:"Loading Grow"}),e.jsx(t,{loading:!0,loadingStyle:"grow",type:"button",children:"Loading Grow"}),e.jsx(t,{loading:!0,loadingDirection:"after",type:"button",children:"Loading Spin"}),e.jsx(t,{loading:!0,loadingDirection:"after",loadingStyle:"grow",type:"button",children:"Loading Grow"})]})})})]})}function c(o={}){const{wrapper:n}=o.components||{};return n?e.jsx(n,Object.assign({},o,{children:e.jsx(d,o)})):d(o)}export{c as default,s as defaultTemplate};
