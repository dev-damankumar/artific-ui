import{a as i,F as l,j as e,q as t,H as h}from"./index-c5414e4b.js";const r="/assets/a1-6ef42bd5.jpg",d="/assets/a2-b960c70b.jpeg",c="/assets/a3-17690e89.jpeg",s="/assets/a4-175e1d32.jpeg",u=o=>i(l,{children:[e(t,Object.assign({src:r},o)),e(t,Object.assign({title:"DK"},o)),e(t,Object.assign({src:c},o)),e(t,Object.assign({title:"M"},o))]});function a(o){const n=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code"},o.components);return i(l,{children:[e(n.h1,{children:"Avatars"}),`
`,e(n.p,{children:"Avatars are used for displaying images and text in confined space."}),`
`,e("div",{children:e("div",{name:"Default",children:u.bind({})})}),`
`,e(n.h2,{children:"API"}),`
`,e(n.pre,{children:e(n.code,{className:"language-jsx",children:`import { Avatar } from 'artific-ui/Avatar'
`})}),`
`,e(n.h2,{children:"Avatar Themes"}),`
`,i(n.p,{children:["If you want to use a different theme for ",e(n.code,{children:"Avatar"})," use the ",e(n.code,{children:"theme"}),` prop to set the theme\r
Note: All components have basic four themes ie. (`,e(n.code,{children:"primary"}),"|",e(n.code,{children:"secondary"}),"|",e(n.code,{children:"dark"}),"|",e(n.code,{children:"light"}),"). you can use either of them."]}),`
`,i(n.p,{children:["You can also use ",e(n.code,{children:"colorScheme"})," prop to define a custom theme."]}),`
`,e("div",{children:i("div",{name:"Avatar Themes",children:[e(t,{theme:"primary",title:"DK"}),e(t,{theme:"secondary",title:"DK"}),e(t,{theme:"dark",title:"DK"}),e(t,{theme:"light",title:"DK"}),e(t,{colorScheme:{background:"linear-gradient(45deg, #e736f4, #673ab7)",backgroundColor:"#e736f4",color:"white"},title:"DK"})]})}),`
`,e(n.h2,{children:"Avatar Size"}),`
`,i(n.p,{children:["you can use a ",e(n.code,{children:"size"})," prop to define the size of your components"]}),`
`,i(n.p,{children:["Set ",e(n.code,{children:"size"})," prop with the value of (",e(n.code,{children:"xs"}),"|",e(n.code,{children:"sm"}),"|",e(n.code,{children:"md"}),"|",e(n.code,{children:"lg"}),",",e(n.code,{children:"xl"}),"). you can mix them with different supported ",e(n.code,{children:"theme"})," or ",e(n.code,{children:"layout"})]}),`
`,i(n.p,{children:["Note: Mostly all the components have the same size values ie.(",e(n.code,{children:"xs"}),"|",e(n.code,{children:"sm"}),"|",e(n.code,{children:"md"}),"|",e(n.code,{children:"lg"}),",",e(n.code,{children:"xl"}),"). but some of the components might have additional sizes."]}),`
`,e("div",{children:i("div",{name:"Avatar Size",children:[e(t,{size:"xl",title:"XL"}),e(t,{size:"lg",title:"LG"}),e(t,{size:"md",title:"MD"}),e(t,{size:"sm",title:"SM"}),e(t,{size:"xs",title:"XS"})]})}),`
`,e(n.h2,{children:"Avatar Layouts"}),`
`,e(n.p,{children:"Avatar Has basic four layouts to choose from to define how you component's structure should look like."}),`
`,i(n.p,{children:["Set ",e(n.code,{children:"layout"})," prop with the value of (",e(n.code,{children:"default"}),"|",e(n.code,{children:"rounded"}),"|",e(n.code,{children:"no-radius"}),"|",e(n.code,{children:"pill"}),")"]}),`
`,i(n.p,{children:[e(n.code,{children:"Note:"})," Different components might have addition layouts based on there configuration and flexibility. you can check out the props table to see which layout is supported by the component"]}),`
`,e("div",{children:i("div",{name:"Avatar Layouts",children:[e(t,{src:r,layout:"default"}),e(t,{src:d,layout:"rounded"}),e(t,{src:c,layout:"no-radius"}),e(t,{src:s,layout:"pill"})]})}),`
`,e(n.h2,{children:"Avatar Variants"}),`
`,i(n.p,{children:["Artific UI provides a ",e(n.code,{children:"variant"})," prop to make you choose how your component ui should look like"]}),`
`,i(n.p,{children:["Set ",e(n.code,{children:"variant"})," prop with the value of (",e(n.code,{children:"default"}),"|",e(n.code,{children:"fluid"}),"|",e(n.code,{children:"outline"}),"). you can mix them with different supported ",e(n.code,{children:"theme"})," or ",e(n.code,{children:"layout"})]}),`
`,e(n.p,{children:`Note: Different components might have addition or different variant based on there configuration and flexibility.\r
you can check out the props table to see which variant is supported by the component`}),`
`,e("div",{children:i("div",{name:"Avatar Variants",children:[e(t,{src:r,variant:"default"}),e(t,{src:d,variant:"outline"}),e(t,{src:c,variant:"fluid"})]})}),`
`,e(n.h2,{children:"Avatar Group"}),`
`,e(n.p,{children:"Avatar Group is used to group together a multiple avatars"}),`
`,i(n.p,{children:["Use ",e(n.code,{children:"AvatarGroup"})," with ",e(n.code,{children:"Avatar"})," as children to group them together"]}),`
`,e("div",{children:e("div",{name:"Avatar Group",children:i(h,{children:[e(t,{src:r,variant:"fluid"}),e(t,{src:d,variant:"fluid"}),e(t,{src:c,variant:"fluid"})]})})})]})}function m(o={}){const{wrapper:n}=o.components||{};return n?e(n,Object.assign({},o,{children:e(a,o)})):a(o)}export{u as Template,m as default};
