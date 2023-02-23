import{j as i,T as l,G as c,F as r,W as d,K as s}from"./index-f2287826.js";function n(o){const e=Object.assign({h2:"h2",p:"p",pre:"pre",code:"code",i:"i"},o.components);return i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"main-blogs",children:o.noMainHeading?i.jsx(l,{title:"Accordion - Overview"}):i.jsx(e.h2,{children:"Accordion - Overview"})}),`
`,i.jsx(e.h2,{children:"Accordion"}),`
`,i.jsx(e.p,{children:"The accordion component allows the user to show and hide sections of related content on a page."}),`
`,i.jsx(e.p,{children:"An accordion is a lightweight container that may either be used standalone, or be connected to a larger surface, such as a card."}),`
`,i.jsx(e.h2,{children:"Basic Accordion"}),`
`,i.jsxs(c,{children:[i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header"}),i.jsx(s,{children:i.jsx(e.p,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem"})})]}),i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header 2"}),i.jsx(s,{children:i.jsx(e.p,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem"})})]}),i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header 3"}),i.jsx(s,{children:i.jsx(e.p,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem"})})]})]}),`
`,i.jsx(e.h2,{children:"API"}),`
`,i.jsx(e.pre,{children:i.jsx(e.code,{className:"language-jsx",children:`import { Accordion } from 'artific-ui/Accordion';
`})}),`
`,i.jsx(e.h2,{children:"Accordion Themes"}),`
`,i.jsxs(e.p,{children:["If you want to use a different theme for ",i.jsx(e.code,{children:"accordion"})," use the ",i.jsx(e.code,{children:"theme"}),` prop to set the theme\r
Note: All components have basic four themes ie. (`,i.jsx(e.code,{children:"primary"}),"|",i.jsx(e.code,{children:"secondary"}),"|",i.jsx(e.code,{children:"dark"}),"|",i.jsx(e.code,{children:"light"}),"). you can use either of them"]}),`
`,i.jsxs("div",{name:"Accordion Themes",children:[i.jsx(c,{children:i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header"}),i.jsx(s,{children:i.jsx(e.p,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem"})})]})}),i.jsx(c,{theme:"secondary",children:i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header"}),i.jsx(s,{children:i.jsx(e.p,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem"})})]})}),i.jsx(c,{theme:"dark",children:i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header"}),i.jsx(s,{children:i.jsx(e.p,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem"})})]})}),i.jsx(c,{theme:"light",children:i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header"}),i.jsx(s,{children:i.jsx(e.p,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem"})})]})})]}),`
`,i.jsx(e.h2,{children:"Accordion Custom Themes"}),`
`,i.jsxs(e.p,{children:["If you want to use a different color scheme for ",i.jsx(e.code,{children:"accordion"}),` instead of the provided themes then  you can use\r
`,i.jsx(e.code,{children:"colorScheme"})," props to define your color scheme."]}),`
`,i.jsxs(e.p,{children:["colorScheme is an object containing three properties: ",i.jsx(e.code,{children:"background"}),", ",i.jsx(e.code,{children:"backgroundColor"}),", ",i.jsx(e.code,{children:"color"})]}),`
`,i.jsx("div",{name:"Accordion Custom Themes",children:i.jsx(c,{colorScheme:{background:"linear-gradient(45deg, #e736f4, #673ab7)",backgroundColor:"#e736f4",color:"white"},theme:"primary",children:i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header"}),i.jsx(s,{children:i.jsx(e.p,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem"})})]})})}),`
`,i.jsx(e.h2,{children:"Accordion Disabled Panel"}),`
`,i.jsxs(e.p,{children:["If you want to disable a specific panel of the Accordion use ",i.jsx(e.code,{children:"disabled"})," prop on ",i.jsx(e.code,{children:"AccordionPanel"})," to disable it."]}),`
`,i.jsxs("div",{name:"Accordion Disabled Panel",children:[i.jsx(c,{theme:"primary",children:i.jsxs(r,{disabled:!0,children:[i.jsx(d,{children:"Secret Header"}),i.jsx(s,{children:i.jsx(e.p,{children:"This is a secret content"})})]})}),i.jsx(c,{theme:"secondary",children:i.jsxs(r,{disabled:!0,children:[i.jsx(d,{children:"Secret Header"}),i.jsx(s,{children:i.jsx(e.p,{children:"This is a secret content"})})]})}),i.jsx(c,{theme:"light",children:i.jsxs(r,{disabled:!0,children:[i.jsx(d,{children:"Secret Header"}),i.jsx(s,{children:i.jsx(e.p,{children:"This is a secret content"})})]})}),i.jsx(c,{theme:"dark",children:i.jsxs(r,{disabled:!0,children:[i.jsx(d,{children:"Secret Header"}),i.jsx(s,{children:i.jsx(e.p,{children:"This is a secret content"})})]})}),i.jsx(c,{colorScheme:{background:"linear-gradient(45deg, #e736f4, #673ab7)",backgroundColor:"#e736f4",color:"white"},theme:"primary",children:i.jsxs(r,{disabled:!0,children:[i.jsx(d,{children:"Secret Header"}),i.jsx(s,{children:i.jsx(e.p,{children:"This is a secret content"})})]})})]}),`
`,i.jsx(e.h2,{children:"Prefix And Suffix icons"}),`
`,i.jsxs(e.p,{children:["You can add icons to the start or end of ",i.jsx(e.code,{children:"AccordionHeader"}),"."]}),`
`,i.jsxs(e.p,{children:["provide the prop ",i.jsx(e.code,{children:"prefix"})," or ",i.jsx(e.code,{children:"suffix"})," or both to the ",i.jsx(e.code,{children:"AccordionHeader"})," to add the icons."]}),`
`,i.jsxs("div",{name:"Prefix And Suffix icons",children:[i.jsx(c,{children:i.jsxs(r,{children:[i.jsx(d,{prefix:i.jsx(e.i,{className:"bx bx-bowl-hot"}),suffix:i.jsx(e.i,{className:"bx bx-bowl-hot"}),children:`Accordion\r
Header 3`}),i.jsx(s,{children:i.jsx(e.p,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem"})})]})}),i.jsx(c,{theme:"secondary",children:i.jsxs(r,{children:[i.jsx(d,{prefix:i.jsx(e.i,{className:"bx bx-bowl-hot"}),suffix:i.jsx(e.i,{className:"bx bx-bowl-hot"}),children:`Accordion\r
Header 3`}),i.jsx(s,{children:i.jsx(e.p,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem"})})]})}),i.jsx(c,{theme:"light",children:i.jsxs(r,{children:[i.jsx(d,{prefix:i.jsx(e.i,{className:"bx bx-bowl-hot"}),suffix:i.jsx(e.i,{className:"bx bx-bowl-hot"}),children:`Accordion\r
Header 3`}),i.jsx(s,{children:i.jsx(e.p,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem"})})]})}),i.jsx(c,{theme:"dark",children:i.jsxs(r,{children:[i.jsx(d,{prefix:i.jsx(e.i,{className:"bx bx-bowl-hot"}),suffix:i.jsx(e.i,{className:"bx bx-bowl-hot"}),children:`Accordion\r
Header 3`}),i.jsx(s,{children:i.jsx(e.p,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem"})})]})}),i.jsx(c,{colorScheme:{background:"linear-gradient(45deg, #e736f4, #673ab7)",backgroundColor:"#e736f4",color:"white"},children:i.jsxs(r,{children:[i.jsx(d,{prefix:i.jsx(e.i,{className:"bx bx-bowl-hot"}),suffix:i.jsx(e.i,{className:"bx bx-bowl-hot"}),children:`Accordion\r
Header 3`}),i.jsx(s,{children:i.jsx(e.p,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem"})})]})})]}),`
`,i.jsx(e.h2,{children:"Indicator Icon Position"}),`
`,i.jsx(e.p,{children:"You can choose where accordion's indicator icon should appear when opening and closing the panel"}),`
`,i.jsxs(e.p,{children:["Control which it direction should be by providing it ",i.jsx(e.code,{children:"indicatorPosition"})," of ",i.jsx(e.code,{children:"start"})," or ",i.jsx(e.code,{children:"end"})]}),`
`,i.jsxs("div",{name:"Indicator Icon Position",children:[i.jsx("h5",{children:"Default/End Position"}),i.jsx(c,{children:i.jsxs(r,{children:[i.jsx(d,{prefix:i.jsx(e.i,{className:"bx bx-bowl-hot"}),suffix:i.jsx(e.i,{className:"bx bx-bowl-hot"}),children:`Accordion\r
Header 2`}),i.jsx(s,{children:i.jsx(e.p,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem"})})]})}),i.jsx(c,{theme:"secondary",children:i.jsxs(r,{children:[i.jsx(d,{prefix:i.jsx(e.i,{className:"bx bx-bowl-hot"}),suffix:i.jsx(e.i,{className:"bx bx-bowl-hot"}),children:`Accordion\r
Header 2`}),i.jsx(s,{children:i.jsx(e.p,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem"})})]})}),i.jsx(c,{theme:"light",children:i.jsxs(r,{children:[i.jsx(d,{prefix:i.jsx(e.i,{className:"bx bx-bowl-hot"}),suffix:i.jsx(e.i,{className:"bx bx-bowl-hot"}),children:`Accordion\r
Header 2`}),i.jsx(s,{children:i.jsx(e.p,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem"})})]})}),i.jsx(c,{theme:"dark",children:i.jsxs(r,{children:[i.jsx(d,{prefix:i.jsx(e.i,{className:"bx bx-bowl-hot"}),suffix:i.jsx(e.i,{className:"bx bx-bowl-hot"}),children:`Accordion\r
Header 2`}),i.jsx(s,{children:i.jsx(e.p,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem"})})]})}),i.jsx(c,{colorScheme:{background:"linear-gradient(45deg, #e736f4, #673ab7)",backgroundColor:"#e736f4",color:"white"},children:i.jsxs(r,{children:[i.jsx(d,{prefix:i.jsx(e.i,{className:"bx bx-bowl-hot"}),suffix:i.jsx(e.i,{className:"bx bx-bowl-hot"}),children:`Accordion\r
Header 2`}),i.jsx(s,{children:i.jsx(e.p,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem"})})]})}),i.jsx("br",{}),i.jsx("h5",{children:"Start Position"}),i.jsx(c,{indicatorPosition:"start",children:i.jsxs(r,{children:[i.jsx(d,{prefix:i.jsx(e.i,{className:"bx bx-bowl-hot"}),suffix:i.jsx(e.i,{className:"bx bx-bowl-hot"}),children:`Accordion\r
Header 2`}),i.jsx(s,{children:i.jsx(e.p,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem"})})]})}),i.jsx(c,{theme:"secondary",indicatorPosition:"start",children:i.jsxs(r,{children:[i.jsx(d,{prefix:i.jsx(e.i,{className:"bx bx-bowl-hot"}),suffix:i.jsx(e.i,{className:"bx bx-bowl-hot"}),children:`Accordion\r
Header 2`}),i.jsx(s,{children:i.jsx(e.p,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem"})})]})}),i.jsx(c,{theme:"light",indicatorPosition:"start",children:i.jsxs(r,{children:[i.jsx(d,{prefix:i.jsx(e.i,{className:"bx bx-bowl-hot"}),suffix:i.jsx(e.i,{className:"bx bx-bowl-hot"}),children:`Accordion\r
Header 2`}),i.jsx(s,{children:i.jsx(e.p,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem"})})]})}),i.jsx(c,{theme:"dark",indicatorPosition:"start",children:i.jsxs(r,{children:[i.jsx(d,{prefix:i.jsx(e.i,{className:"bx bx-bowl-hot"}),suffix:i.jsx(e.i,{className:"bx bx-bowl-hot"}),children:`Accordion\r
Header 2`}),i.jsx(s,{children:i.jsx(e.p,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem"})})]})}),i.jsx(c,{colorScheme:{background:"linear-gradient(45deg, #e736f4, #673ab7)",backgroundColor:"#e736f4",color:"white"},indicatorPosition:"start",children:i.jsxs(r,{children:[i.jsx(d,{prefix:i.jsx(e.i,{className:"bx bx-bowl-hot"}),suffix:i.jsx(e.i,{className:"bx bx-bowl-hot"}),children:`Accordion\r
Header 2`}),i.jsx(s,{children:i.jsx(e.p,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem"})})]})})]}),`
`,i.jsx(e.h2,{children:"Accordion Layout"}),`
`,i.jsx(e.p,{children:"Artific UI provides basic four layouts to choose from to define how you component's structure should look like."}),`
`,i.jsxs(e.p,{children:["Set ",i.jsx(e.code,{children:"layout"})," prop with the value of (",i.jsx(e.code,{children:"default"}),"|",i.jsx(e.code,{children:"rounded"}),"|",i.jsx(e.code,{children:"no-radius"}),"|",i.jsx(e.code,{children:"pill"}),")"]}),`
`,i.jsx(e.p,{children:"Note: Different components might have addition layouts based on there configuration and flexibility. you can check out the props table to see which layout is supported by the component"}),`
`,i.jsxs("div",{name:"Accordion Layout",children:[i.jsx("h5",{children:"Basic Accordion Layout"}),i.jsx(c,{layout:"default",children:i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header"}),i.jsx(s,{children:i.jsx(e.p,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem"})})]})}),i.jsx(c,{theme:"secondary",layout:"default",children:i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header"}),i.jsx(s,{children:i.jsx(e.p,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem"})})]})}),i.jsx(c,{theme:"light",layout:"default",children:i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header"}),i.jsx(s,{children:i.jsx(e.p,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem"})})]})}),i.jsx(c,{theme:"dark",layout:"default",children:i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header"}),i.jsx(s,{children:i.jsx(e.p,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem"})})]})}),i.jsx(c,{colorScheme:{background:"linear-gradient(45deg, #e736f4, #673ab7)",backgroundColor:"#e736f4",color:"white"},layout:"default",children:i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header"}),i.jsx(s,{children:i.jsx(e.p,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem"})})]})}),i.jsx("br",{}),i.jsx("br",{}),i.jsx("h5",{children:"Rounded Accordion"}),i.jsx(c,{layout:"rounded",children:i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header"}),i.jsx(s,{children:i.jsx(e.p,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem"})})]})}),i.jsx(c,{theme:"secondary",layout:"rounded",children:i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header"}),i.jsx(s,{children:i.jsx(e.p,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem"})})]})}),i.jsx(c,{theme:"light",layout:"rounded",children:i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header"}),i.jsx(s,{children:i.jsx(e.p,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem"})})]})}),i.jsx(c,{theme:"dark",layout:"rounded",children:i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header"}),i.jsx(s,{children:i.jsx(e.p,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem"})})]})}),i.jsx(c,{colorScheme:{background:"linear-gradient(45deg, #e736f4, #673ab7)",backgroundColor:"#e736f4",color:"white"},layout:"rounded",children:i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header"}),i.jsx(s,{children:i.jsx(e.p,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem"})})]})}),i.jsx("br",{}),i.jsx("br",{}),i.jsx("h5",{children:"No Radius Accordion"}),i.jsx(c,{layout:"no-radius",children:i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header"}),i.jsx(s,{children:i.jsx(e.p,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem"})})]})}),i.jsx(c,{theme:"secondary",layout:"no-radius",children:i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header"}),i.jsx(s,{children:i.jsx(e.p,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem"})})]})}),i.jsx(c,{theme:"light",layout:"no-radius",children:i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header"}),i.jsx(s,{children:i.jsx(e.p,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem"})})]})}),i.jsx(c,{theme:"dark",layout:"no-radius",children:i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header"}),i.jsx(s,{children:i.jsx(e.p,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem"})})]})}),i.jsx(c,{colorScheme:{background:"linear-gradient(45deg, #e736f4, #673ab7)",backgroundColor:"#e736f4",color:"white"},layout:"no-radius",children:i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header"}),i.jsx(s,{children:i.jsx(e.p,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem"})})]})}),i.jsx("br",{}),i.jsx("br",{}),i.jsx("h5",{children:"Pill Accordion"}),i.jsx(c,{layout:"pill",children:i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header"}),i.jsx(s,{children:i.jsx(e.p,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem"})})]})}),i.jsx(c,{theme:"secondary",layout:"pill",children:i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header"}),i.jsx(s,{children:i.jsx(e.p,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem"})})]})}),i.jsx(c,{theme:"light",layout:"pill",children:i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header"}),i.jsx(s,{children:i.jsx(e.p,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem"})})]})}),i.jsx(c,{theme:"dark",layout:"pill",children:i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header"}),i.jsx(s,{children:i.jsx(e.p,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem"})})]})}),i.jsx(c,{colorScheme:{background:"linear-gradient(45deg, #e736f4, #673ab7)",backgroundColor:"#e736f4",color:"white"},layout:"pill",children:i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header"}),i.jsx(s,{children:i.jsx(e.p,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem"})})]})})]}),`
`,i.jsx(e.h2,{children:"Accordion Variant"}),`
`,i.jsxs(e.p,{children:["Artific UI provides a ",i.jsx(e.code,{children:"variant"})," prop to make you choose how your component ui should look like"]}),`
`,i.jsxs(e.p,{children:["Set ",i.jsx(e.code,{children:"variant"})," prop with the value of (",i.jsx(e.code,{children:"default"}),"|",i.jsx(e.code,{children:"attached"}),"|",i.jsx(e.code,{children:"separate"}),"|",i.jsx(e.code,{children:"outline"}),"). you can mix them with different supported ",i.jsx(e.code,{children:"theme"})," or ",i.jsx(e.code,{children:"layout"})]}),`
`,i.jsx(e.p,{children:`Note: Different components might have addition or different variant based on there configuration and flexibility.\r
you can check out the props table to see which variant is supported by the component`}),`
`,i.jsxs("div",{name:"Accordion Variant",children:[i.jsx("h5",{children:"Default Accordion Variant"}),i.jsx("br",{}),i.jsxs(c,{variant:"default",children:[i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header"}),i.jsx(s,{children:i.jsx(e.p,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem"})})]}),i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header 2"}),i.jsx(s,{children:i.jsx(e.p,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem"})})]})]}),i.jsx("br",{}),i.jsxs(c,{theme:"secondary",variant:"default",children:[i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header"}),i.jsx(s,{children:i.jsx(e.p,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem"})})]}),i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header 2"}),i.jsx(s,{children:i.jsx(e.p,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem"})})]})]}),i.jsx("br",{}),i.jsxs(c,{theme:"light",variant:"default",children:[i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header"}),i.jsx(s,{children:i.jsx(e.p,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem"})})]}),i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header 2"}),i.jsx(s,{children:i.jsx(e.p,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem"})})]})]}),i.jsx("br",{}),i.jsxs(c,{theme:"dark",variant:"default",children:[i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header"}),i.jsx(s,{children:i.jsx(e.p,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem"})})]}),i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header 2"}),i.jsx(s,{children:i.jsx(e.p,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem"})})]})]}),i.jsx("br",{}),i.jsxs(c,{colorScheme:{background:"linear-gradient(45deg, #e736f4, #673ab7)",backgroundColor:"#e736f4",color:"white"},variant:"default",children:[i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header"}),i.jsx(s,{children:i.jsx(e.p,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem"})})]}),i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header 2"}),i.jsx(s,{children:i.jsx(e.p,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem"})})]})]}),i.jsx("br",{}),i.jsx("br",{}),i.jsx("h5",{children:"Attached Accordion Variant"}),i.jsx("br",{}),i.jsxs(c,{variant:"attached",children:[i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header"}),i.jsx(s,{children:i.jsx(e.p,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem"})})]}),i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header 2"}),i.jsx(s,{children:i.jsx(e.p,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem"})})]})]}),i.jsx("br",{}),i.jsxs(c,{theme:"secondary",variant:"attached",children:[i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header"}),i.jsx(s,{children:i.jsx(e.p,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem"})})]}),i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header 2"}),i.jsx(s,{children:i.jsx(e.p,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem"})})]})]}),i.jsx("br",{}),i.jsxs(c,{theme:"light",variant:"attached",children:[i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header"}),i.jsx(s,{children:i.jsx(e.p,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem"})})]}),i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header 2"}),i.jsx(s,{children:i.jsx(e.p,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem"})})]})]}),i.jsx("br",{}),i.jsxs(c,{theme:"dark",variant:"attached",children:[i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header"}),i.jsx(s,{children:i.jsx(e.p,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem"})})]}),i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header 2"}),i.jsx(s,{children:i.jsx(e.p,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem"})})]})]}),i.jsx("br",{}),i.jsxs(c,{colorScheme:{background:"linear-gradient(45deg, #e736f4, #673ab7)",backgroundColor:"#e736f4",color:"white"},variant:"attached",children:[i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header"}),i.jsx(s,{children:i.jsx(e.p,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem"})})]}),i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header 2"}),i.jsx(s,{children:i.jsx(e.p,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem"})})]})]}),i.jsx("br",{}),i.jsx("br",{}),i.jsx("h5",{children:"Separate Accordion"}),i.jsx("br",{}),i.jsxs(c,{variant:"separate",children:[i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header"}),i.jsx(s,{children:i.jsx(e.p,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem"})})]}),i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header 2"}),i.jsx(s,{children:i.jsx(e.p,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem"})})]})]}),i.jsx("br",{}),i.jsxs(c,{theme:"secondary",variant:"separate",children:[i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header"}),i.jsx(s,{children:i.jsx(e.p,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem"})})]}),i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header 2"}),i.jsx(s,{children:i.jsx(e.p,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem"})})]})]}),i.jsx("br",{}),i.jsxs(c,{theme:"light",variant:"separate",children:[i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header"}),i.jsx(s,{children:i.jsx(e.p,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem"})})]}),i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header 2"}),i.jsx(s,{children:i.jsx(e.p,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem"})})]})]}),i.jsx("br",{}),i.jsxs(c,{theme:"dark",variant:"separate",children:[i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header"}),i.jsx(s,{children:i.jsx(e.p,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem"})})]}),i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header 2"}),i.jsx(s,{children:i.jsx(e.p,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem"})})]})]}),i.jsx("br",{}),i.jsxs(c,{colorScheme:{background:"linear-gradient(45deg, #e736f4, #673ab7)",backgroundColor:"#e736f4",color:"white"},variant:"separate",children:[i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header"}),i.jsx(s,{children:i.jsx(e.p,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem"})})]}),i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header 2"}),i.jsx(s,{children:i.jsx(e.p,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem"})})]})]}),i.jsx("br",{}),i.jsx("br",{}),i.jsx("h5",{children:"Outlined Accordion"}),i.jsx("br",{}),i.jsxs(c,{variant:"outline",children:[i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header"}),i.jsx(s,{children:i.jsx(e.p,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem"})})]}),i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header 2"}),i.jsx(s,{children:i.jsx(e.p,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem"})})]})]}),i.jsx("br",{}),i.jsxs(c,{theme:"secondary",variant:"outline",children:[i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header"}),i.jsx(s,{children:i.jsx(e.p,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem"})})]}),i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header 2"}),i.jsx(s,{children:i.jsx(e.p,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem"})})]})]}),i.jsx("br",{}),i.jsxs(c,{theme:"light",variant:"outline",children:[i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header"}),i.jsx(s,{children:i.jsx(e.p,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem"})})]}),i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header 2"}),i.jsx(s,{children:i.jsx(e.p,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem"})})]})]}),i.jsx("br",{}),i.jsxs(c,{theme:"dark",variant:"outline",children:[i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header"}),i.jsx(s,{children:i.jsx(e.p,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem"})})]}),i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header 2"}),i.jsx(s,{children:i.jsx(e.p,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem"})})]})]}),i.jsx("br",{}),i.jsxs(c,{colorScheme:{background:"linear-gradient(45deg, #e736f4, #673ab7)",backgroundColor:"#e736f4",color:"white"},variant:"outline",children:[i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header"}),i.jsx(s,{children:i.jsx(e.p,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem"})})]}),i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header 2"}),i.jsx(s,{children:i.jsx(e.p,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem"})})]})]})]}),`
`,i.jsx(e.h2,{children:"Accordion Sizes"}),`
`,i.jsxs(e.p,{children:["you can use a ",i.jsx(e.code,{children:"size"})," prop to define the size of your components"]}),`
`,i.jsxs(e.p,{children:["Set ",i.jsx(e.code,{children:"size"})," prop with the value of (",i.jsx(e.code,{children:"xs"}),"|",i.jsx(e.code,{children:"sm"}),"|",i.jsx(e.code,{children:"md"}),"|",i.jsx(e.code,{children:"lg"}),",",i.jsx(e.code,{children:"xl"}),"). you can mix them with different supported ",i.jsx(e.code,{children:"theme"})," or ",i.jsx(e.code,{children:"layout"})]}),`
`,i.jsxs(e.p,{children:["Note: Mostly all the components have the same size values ie.(",i.jsx(e.code,{children:"xs"}),"|",i.jsx(e.code,{children:"sm"}),"|",i.jsx(e.code,{children:"md"}),"|",i.jsx(e.code,{children:"lg"}),",",i.jsx(e.code,{children:"xl"}),"). but some of the components might have additional sizes."]}),`
`,i.jsxs("div",{name:"Accordion Sizes",children:[i.jsx("h5",{children:"Extra Small Sizing"}),i.jsx("br",{}),i.jsx(c,{size:"xs",children:i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header"}),i.jsx(s,{children:i.jsx(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem\r
harum officiis`})})]})}),i.jsx(c,{theme:"secondary",size:"xs",children:i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header"}),i.jsx(s,{children:i.jsx(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem\r
harum officiis`})})]})}),i.jsx(c,{theme:"light",size:"xs",children:i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header"}),i.jsx(s,{children:i.jsx(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem\r
harum officiis`})})]})}),i.jsx(c,{theme:"dark",size:"xs",children:i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header"}),i.jsx(s,{children:i.jsx(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem\r
harum officiis`})})]})}),i.jsx(c,{colorScheme:{background:"linear-gradient(45deg, #e736f4, #673ab7)",backgroundColor:"#e736f4",color:"white"},size:"xs",children:i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header"}),i.jsx(s,{children:i.jsx(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem\r
harum officiis`})})]})}),i.jsx("br",{}),i.jsx("h5",{children:"Small Size Accordion"}),i.jsx("br",{}),i.jsx(c,{size:"sm",children:i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header"}),i.jsx(s,{children:i.jsx(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem\r
harum officiis`})})]})}),i.jsx(c,{theme:"secondary",size:"sm",children:i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header"}),i.jsx(s,{children:i.jsx(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem\r
harum officiis`})})]})}),i.jsx(c,{theme:"light",size:"sm",children:i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header"}),i.jsx(s,{children:i.jsx(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem\r
harum officiis`})})]})}),i.jsx(c,{theme:"dark",size:"sm",children:i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header"}),i.jsx(s,{children:i.jsx(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem\r
harum officiis`})})]})}),i.jsx(c,{colorScheme:{background:"linear-gradient(45deg, #e736f4, #673ab7)",backgroundColor:"#e736f4",color:"white"},size:"sm",children:i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header"}),i.jsx(s,{children:i.jsx(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem\r
harum officiis`})})]})}),i.jsx("br",{}),i.jsx("h5",{children:"Default/Medium Accordion"}),i.jsx("br",{}),i.jsx(c,{size:"md",children:i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header"}),i.jsx(s,{children:i.jsx(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem\r
harum officiis`})})]})}),i.jsx(c,{theme:"secondary",size:"md",children:i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header"}),i.jsx(s,{children:i.jsx(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem\r
harum officiis`})})]})}),i.jsx(c,{theme:"light",size:"md",children:i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header"}),i.jsx(s,{children:i.jsx(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem\r
harum officiis`})})]})}),i.jsx(c,{theme:"dark",size:"md",children:i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header"}),i.jsx(s,{children:i.jsx(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem\r
harum officiis`})})]})}),i.jsx(c,{colorScheme:{background:"linear-gradient(45deg, #e736f4, #673ab7)",backgroundColor:"#e736f4",color:"white"},size:"md",children:i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header"}),i.jsx(s,{children:i.jsx(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem\r
harum officiis`})})]})}),i.jsx("br",{}),i.jsx("h5",{children:"Large Accordion"}),i.jsx("br",{}),i.jsx(c,{size:"lg",children:i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header"}),i.jsx(s,{children:i.jsx(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem\r
harum officiis`})})]})}),i.jsx(c,{theme:"secondary",size:"lg",children:i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header"}),i.jsx(s,{children:i.jsx(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem\r
harum officiis`})})]})}),i.jsx(c,{theme:"light",size:"lg",children:i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header"}),i.jsx(s,{children:i.jsx(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem\r
harum officiis`})})]})}),i.jsx(c,{theme:"dark",size:"lg",children:i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header"}),i.jsx(s,{children:i.jsx(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem\r
harum officiis`})})]})}),i.jsx(c,{colorScheme:{background:"linear-gradient(45deg, #e736f4, #673ab7)",backgroundColor:"#e736f4",color:"white"},size:"lg",children:i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header"}),i.jsx(s,{children:i.jsx(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem\r
harum officiis`})})]})}),i.jsx("br",{}),i.jsx("h5",{children:"Extra Large Accordion"}),i.jsx("br",{}),i.jsx(c,{size:"xl",children:i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header"}),i.jsx(s,{children:i.jsx(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem\r
harum officiis`})})]})}),i.jsx(c,{theme:"secondary",size:"xl",children:i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header"}),i.jsx(s,{children:i.jsx(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem\r
harum officiis`})})]})}),i.jsx(c,{theme:"light",size:"xl",children:i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header"}),i.jsx(s,{children:i.jsx(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem\r
harum officiis`})})]})}),i.jsx(c,{theme:"dark",size:"xl",children:i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header"}),i.jsx(s,{children:i.jsx(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem\r
harum officiis`})})]})}),i.jsx(c,{colorScheme:{background:"linear-gradient(45deg, #e736f4, #673ab7)",backgroundColor:"#e736f4",color:"white"},size:"xl",children:i.jsxs(r,{children:[i.jsx(d,{children:"Accordion Header"}),i.jsx(s,{children:i.jsx(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem\r
harum officiis`})})]})})]})]})}function h(o={}){const{wrapper:e}=o.components||{};return e?i.jsx(e,Object.assign({},o,{children:i.jsx(n,o)})):n(o)}export{h as default};