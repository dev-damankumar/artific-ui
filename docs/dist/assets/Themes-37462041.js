import{j as o,a as c,F as d,T as i}from"./index-c5414e4b.js";function r(n){const e=Object.assign({h2:"h2",p:"p",code:"code"},n.components);return c(d,{children:[o("div",{className:"main-blogs",children:n.noMainHeading?o(i,{title:"Artific UI - Themes"}):o(e.h2,{children:"Artific UI - Themes"})}),`
`,o("h2",{children:"Theme"}),`
`,o(e.p,{children:"Theme defines which colors to apply on your component by default its primary. but it can be one of the four values."}),`
`,c(e.p,{children:[o(e.code,{children:"theme"})," props has basic four values (",o(e.code,{children:"primary"}),"|",o(e.code,{children:"secondary"}),"|",o(e.code,{children:"dark"}),"|",o(e.code,{children:"light"}),")."]}),`
`,c(e.p,{children:[o(e.code,{children:"NOTE:"}),` If you want to use a different color scheme for component instead of the provided themes then you can use\r
`,o(e.code,{children:"colorScheme"})," props to define your color scheme."]}),`
`,c(e.p,{children:["colorScheme is an object containing three properties: ",o(e.code,{children:"background"}),", ",o(e.code,{children:"backgroundColor"}),", ",o(e.code,{children:"color"}),"."]}),`
`,c(e.p,{children:[o(e.code,{children:"background:"})," is used primarly for backgrond only and its value can be ",o(e.code,{children:"color"})," | ",o(e.code,{children:"gredient"})," | ",o(e.code,{children:"url"}),". its same as the css property ",o(e.code,{children:"background"})]}),`
`,c(e.p,{children:[o(e.code,{children:"backgroundColor:"})," is used primarily for additional properties like outline or border color and it can only have ",o(e.code,{children:"color"})," as value its same as the css property ",o(e.code,{children:"backgroundColor"})]}),`
`,c(e.p,{children:[o(e.code,{children:"color:"})," is used to define your text color."]})]})}function t(n={}){const{wrapper:e}=n.components||{};return e?o(e,Object.assign({},n,{children:o(r,n)})):r(n)}export{t as default};
