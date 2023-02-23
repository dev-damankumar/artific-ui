import{j as e,s as i,_ as o}from"./index-f2287826.js";const d=t=>e.jsxs(e.Fragment,{children:[e.jsx(i,Object.assign({title:"DK"},t)),e.jsx(i,Object.assign({title:"A"},t)),e.jsx(i,Object.assign({title:"M"},t)),e.jsx(i,Object.assign({title:"FR"},t))]});function n(t){const s=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code"},t.components);return e.jsxs(e.Fragment,{children:[e.jsx(s.h1,{children:"Badges"}),`
`,e.jsx(s.p,{children:"Badges are used to display some info about the specific element like: count etc."}),`
`,e.jsx("div",{children:e.jsx("div",{name:"Default",children:d.bind({})})}),`
`,e.jsx(s.h2,{children:"API"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-jsx",children:`import { Badge } from 'artific-ui/Badge';
`})}),`
`,e.jsx(s.h2,{children:"Badge Group"}),`
`,e.jsxs(s.p,{children:["If you want to group the badges together use ",e.jsx(s.code,{children:"BadgeGruop"}),". ",e.jsx(s.code,{children:"BadgeGroup"})," has same props as ",e.jsx(s.code,{children:"Badge"})," which act as global ",e.jsx(s.code,{children:"props"})," for its children"]}),`
`,e.jsx("div",{children:e.jsx("div",{name:"Badge Group",children:e.jsxs(o,{children:[e.jsx(i,{theme:"primary",title:"REACT"}),e.jsx(i,{theme:"secondary",title:"NEXTJS"}),e.jsx(i,{colorScheme:{background:"linear-gradient(45deg, #e736f4, #673ab7)",backgroundColor:"#e736f4",color:"white"},title:"JAVASCRIPT"})]})})}),`
`,e.jsx(s.h2,{children:"Badges Theme"}),`
`,e.jsxs(s.p,{children:["If you want to use a different theme for ",e.jsx(s.code,{children:"Badge"})," use the ",e.jsx(s.code,{children:"theme"}),` prop to set the theme\r
Note: All components have basic four themes ie. (`,e.jsx(s.code,{children:"primary"}),"|",e.jsx(s.code,{children:"secondary"}),"|",e.jsx(s.code,{children:"dark"}),"|",e.jsx(s.code,{children:"light"}),"). you can use either of them."]}),`
`,e.jsxs(s.p,{children:["You can also use ",e.jsx(s.code,{children:"colorScheme"})," prop to define a custom theme."]}),`
`,e.jsx("div",{children:e.jsxs("div",{name:"Badges Theme",children:[e.jsx(i,{theme:"primary",title:"DK"}),e.jsx(i,{theme:"secondary",title:"DK"}),e.jsx(i,{theme:"dark",title:"DK"}),e.jsx(i,{theme:"light",title:"DK"}),e.jsx(i,{colorScheme:{background:"linear-gradient(45deg, #e736f4, #673ab7)",backgroundColor:"#e736f4",color:"white"},title:"DK"})]})}),`
`,e.jsx(s.h2,{children:"Badge Size"}),`
`,e.jsxs(s.p,{children:["you can use a ",e.jsx(s.code,{children:"size"})," prop to define the size of your components"]}),`
`,e.jsxs(s.p,{children:["Set ",e.jsx(s.code,{children:"size"})," prop with the value of (",e.jsx(s.code,{children:"xs"}),"|",e.jsx(s.code,{children:"sm"}),"|",e.jsx(s.code,{children:"md"}),"|",e.jsx(s.code,{children:"lg"}),",",e.jsx(s.code,{children:"xl"}),"). you can mix them with different supported ",e.jsx(s.code,{children:"theme"})," or ",e.jsx(s.code,{children:"layout"})]}),`
`,e.jsxs(s.p,{children:["Note: Mostly all the components have the same size values ie.(",e.jsx(s.code,{children:"xs"}),"|",e.jsx(s.code,{children:"sm"}),"|",e.jsx(s.code,{children:"md"}),"|",e.jsx(s.code,{children:"lg"}),",",e.jsx(s.code,{children:"xl"}),"). but some of the components might have additional sizes."]}),`
`,e.jsx("div",{children:e.jsxs("div",{name:"Badge Size",children:[e.jsx(i,{size:"xl",title:"XL"}),e.jsx(i,{size:"lg",title:"LG"}),e.jsx(i,{size:"md",title:"MD"}),e.jsx(i,{size:"sm",title:"SM"}),e.jsx(i,{size:"xs",title:"XS"})]})}),`
`,e.jsx(s.h2,{children:"Badge Layouts"}),`
`,e.jsx(s.p,{children:"Badge Has basic five layouts to choose from to define how you component's structure should look like."}),`
`,e.jsxs(s.p,{children:["Set ",e.jsx(s.code,{children:"layout"})," prop with the value of (",e.jsx(s.code,{children:"default"}),"|",e.jsx(s.code,{children:"rounded"}),"|",e.jsx(s.code,{children:"no-radius"}),"|",e.jsx(s.code,{children:"pill"}),",",e.jsx(s.code,{children:"circular"}),")"]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"Note:"})," Different components might have addition layouts based on there configuration and flexibility. you can check out the props table to see which layout is supported by the component"]}),`
`,e.jsx("div",{children:e.jsxs("div",{name:"Badge Layouts",children:[e.jsx("h5",{children:"Badge Layouts"}),e.jsx(i,{title:"DK",layout:"default"}),e.jsx(i,{title:"DK",layout:"rounded"}),e.jsx(i,{title:"DK",layout:"no-radius"}),e.jsx(i,{title:"DK",layout:"pill"}),e.jsx(i,{title:"DK",layout:"circular"})]})}),`
`,e.jsx(s.h2,{children:"Badge Variants"}),`
`,e.jsxs(s.p,{children:["Artific UI provides a ",e.jsx(s.code,{children:"variant"})," prop to make you choose how your component ui should look like"]}),`
`,e.jsxs(s.p,{children:["Set ",e.jsx(s.code,{children:"variant"})," prop with the value of (",e.jsx(s.code,{children:"default"}),"|",e.jsx(s.code,{children:"dot"}),"|",e.jsx(s.code,{children:"outline"}),"). you can mix them with different supported ",e.jsx(s.code,{children:"theme"})," or ",e.jsx(s.code,{children:"layout"})]}),`
`,e.jsx(s.p,{children:`Note: Different components might have addition or different variant based on there configuration and flexibility.\r
you can check out the props table to see which variant is supported by the component`}),`
`,e.jsx("div",{children:e.jsxs("div",{name:"Badge Variants",children:[e.jsx("h5",{children:"Badge Variants"}),e.jsx(i,{title:"DK",variant:"default"}),e.jsx(i,{title:"DK",variant:"outline"}),e.jsx(i,{variant:"dot"})]})})]})}function r(t={}){const{wrapper:s}=t.components||{};return s?e.jsx(s,Object.assign({},t,{children:e.jsx(n,t)})):n(t)}export{d as Template,r as default};
