import{j as e,Y as l,q as r}from"./index-f2287826.js";const o=i=>e.jsx(l,{theme:{secondary1:{main:"#F4D35E",text:"white"},primary:{main:"#DA4167",text:"white"},light:{main:"#fffce6",text:"#000"},dark:{main:"#173658",text:"white"}},children:e.jsx(r,Object.assign({theme:"secondary1",value:50},i))});function n(i){const s=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre"},i.components);return e.jsxs(e.Fragment,{children:[e.jsx(s.h1,{children:"Progress"}),`
`,e.jsx(s.p,{children:"Progress indicators commonly known as spinners, express an unspecified wait time or display the length of a process."}),`
`,e.jsxs(s.p,{children:["use ",e.jsx(s.code,{children:"value"})," | ",e.jsx(s.code,{children:"values"})," props to set how much progress is done."]}),`
`,`
`,e.jsx("div",{children:e.jsx("div",{name:"Default",children:o.bind({})})}),`
`,e.jsx(s.h2,{children:"API"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-jsx",children:`import { Progress } from 'artific-ui/Progress';
`})}),`
`,e.jsx(s.h2,{children:"Progress Theme"}),`
`,e.jsxs(s.p,{children:["If you want to use a different theme for ",e.jsx(s.code,{children:"Progress"})," use the ",e.jsx(s.code,{children:"theme"}),` prop to set the theme\r
Note: All components have basic four themes ie. (`,e.jsx(s.code,{children:"primary"}),"|",e.jsx(s.code,{children:"secondary"}),"|",e.jsx(s.code,{children:"dark"}),"|",e.jsx(s.code,{children:"light"}),"). you can use either of them."]}),`
`,e.jsxs(s.p,{children:["You can also use ",e.jsx(s.code,{children:"colorScheme"})," prop to define a custom theme."]}),`
`,e.jsx("div",{children:e.jsxs("div",{name:"Progress Theme",children:[e.jsx(r,{theme:"primary",value:50}),e.jsx(r,{theme:"secondary",value:50}),e.jsx(r,{theme:"light",value:50}),e.jsx(r,{theme:"dark",value:50}),e.jsx(r,{value:50,colorScheme:{background:"linear-gradient(45deg, #e736f4, #673ab7)",backgroundColor:"#e736f4",color:"white"}})]})}),`
`,e.jsx(s.h2,{children:"Label Inside Progress"}),`
`,e.jsxs(s.p,{children:["Use ",e.jsx(s.code,{children:"label"})," props on ",e.jsx(s.code,{children:"Progress"})," and value as ",e.jsx(s.code,{children:'"inside"'})," to make label inside the bar."]}),`
`,e.jsx("div",{children:e.jsx("div",{name:"Label Inside Progress",children:e.jsx(r,{label:"inside",theme:"secondary",value:50})})}),`
`,e.jsx(s.h2,{children:"Multiple Progress"}),`
`,e.jsxs(s.p,{children:["Use ",e.jsx(s.code,{children:"values"})," props to progres bar as number array ie.(number[]) if you want multiple progress bar."]}),`
`,e.jsxs(s.p,{children:["Use ",e.jsx(s.code,{children:"barColors"})," props to define the color of progress bar. make sure colors passed in array are respective to the values. if no color is provides it will use default color for each bar."]}),`
`,e.jsx("div",{children:e.jsx("div",{name:"Multiple Progress",children:e.jsx(r,{theme:"primary",barColors:["red","blue","green"],values:[50,20,10]})})}),`
`,e.jsx(s.h2,{children:"Progress Types"}),`
`,e.jsxs(s.p,{children:["You can also define the type progress bar  by providing ",e.jsx(s.code,{children:"type"})," prop."]}),`
`,e.jsxs(s.p,{children:["Possible values for ",e.jsx(s.code,{children:"type"})," prop are (",e.jsx(s.code,{children:"default"}),"|",e.jsx(s.code,{children:"circular"}),"|",e.jsx(s.code,{children:"line"}),")"]}),`
`,e.jsx("div",{children:e.jsxs("div",{name:"Progress Types",children:[e.jsx(r,{value:80,type:"default",theme:"primary"}),e.jsx(r,{value:80,type:"circular",theme:"primary"}),e.jsx(r,{value:80,type:"line",theme:"primary"})]})}),`
`,e.jsx(s.h2,{children:"Progress Sizes"}),`
`,e.jsxs(s.p,{children:["you can use a ",e.jsx(s.code,{children:"size"})," prop to define the size of your components"]}),`
`,e.jsxs(s.p,{children:["Set ",e.jsx(s.code,{children:"size"})," prop with the value of (",e.jsx(s.code,{children:"xs"}),"|",e.jsx(s.code,{children:"sm"}),"|",e.jsx(s.code,{children:"md"}),"|",e.jsx(s.code,{children:"lg"}),",",e.jsx(s.code,{children:"xl"}),"). you can mix them with different supported ",e.jsx(s.code,{children:"theme"})," or ",e.jsx(s.code,{children:"layout"})]}),`
`,e.jsxs(s.p,{children:["Note: Mostly all the components have the same size values ie.(",e.jsx(s.code,{children:"xs"}),"|",e.jsx(s.code,{children:"sm"}),"|",e.jsx(s.code,{children:"md"}),"|",e.jsx(s.code,{children:"lg"}),",",e.jsx(s.code,{children:"xl"}),"). but some of the components might have additional sizes."]}),`
`,e.jsx("div",{children:e.jsxs("div",{name:"Progress Sizes",children:[e.jsx(r,{size:"xl",value:80}),e.jsx(r,{size:"lg",value:80}),e.jsx(r,{value:80}),e.jsx(r,{size:"sm",value:80}),e.jsx(r,{size:"xs",value:80}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("h5",{children:"Circular Progress Size"}),e.jsx(r,{size:"xl",value:80,type:"circular"}),e.jsx(r,{size:"lg",value:80,type:"circular"}),e.jsx(r,{value:80,type:"circular"}),e.jsx(r,{size:"sm",value:80,type:"circular"}),e.jsx(r,{size:"xs",value:80,type:"circular"})]})}),`
`,e.jsx(s.h2,{children:"Progress Layouts"}),`
`,e.jsx(s.p,{children:"Progress Has basic four layouts to choose from to define how you component's structure should look like."}),`
`,e.jsxs(s.p,{children:["Set ",e.jsx(s.code,{children:"layout"})," prop with the value of (",e.jsx(s.code,{children:"default"}),"|",e.jsx(s.code,{children:"rounded"}),"|",e.jsx(s.code,{children:"no-radius"}),"|",e.jsx(s.code,{children:"pill"}),"|",e.jsx(s.code,{children:"line"}),")"]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"Note:"})," circular progress bar only has (",e.jsx(s.code,{children:"default"}),"|",e.jsx(s.code,{children:"line"}),") layouts"]}),`
`,e.jsx("div",{children:e.jsxs("div",{name:"Progress Layouts",children:[e.jsx(r,{layout:"default",value:80}),e.jsx(r,{layout:"rounded",value:80}),e.jsx(r,{layout:"no-radius",value:80}),e.jsx(r,{layout:"pill",value:80}),e.jsx(r,{layout:"line",value:80}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("h5",{children:"Circular Progress Layouts"}),e.jsx(r,{type:"circular",layout:"default",value:80}),e.jsx(r,{type:"circular",layout:"line",value:80})]})}),`
`,e.jsx(s.h2,{children:"Progress Variants"}),`
`,e.jsxs(s.p,{children:["Artific UI provides a ",e.jsx(s.code,{children:"variant"})," prop to make you choose how your component ui should look like"]}),`
`,e.jsxs(s.p,{children:["Set ",e.jsx(s.code,{children:"variant"})," prop with the value of (",e.jsx(s.code,{children:"default"}),"|",e.jsx(s.code,{children:"fluid"}),"|",e.jsx(s.code,{children:"striped"}),"|",e.jsx(s.code,{children:"outline"}),"). you can mix them with different supported ",e.jsx(s.code,{children:"theme"})," or ",e.jsx(s.code,{children:"layout"})]}),`
`,e.jsx(s.p,{children:`Note: Different components might have addition or different variant based on there configuration and flexibility.\r
you can check out the props table to see which variant is supported by the component`}),`
`,e.jsx("div",{children:e.jsxs("div",{name:"Progress Variants",children:[e.jsx(r,{variant:"default",value:80}),e.jsx(r,{variant:"fluid",value:80}),e.jsx(r,{variant:"striped",value:80}),e.jsx(r,{variant:"outline",value:80}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("h5",{children:"Circular Progress Variants"}),e.jsx(r,{type:"circular",variant:"default",value:80}),e.jsx(r,{type:"circular",variant:"fluid",value:80}),e.jsx(r,{type:"circular",variant:"striped",value:80}),e.jsx(r,{type:"circular",variant:"outline",value:80})]})})]})}function d(i={}){const{wrapper:s}=i.components||{};return s?e.jsx(s,Object.assign({},i,{children:e.jsx(n,i)})):n(i)}export{d as default,o as defaultTemplate};
