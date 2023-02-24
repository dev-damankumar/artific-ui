import{j as n,a as c,F as r,T as t}from"./index-cab7d04f.js";function i(o){const e=Object.assign({h2:"h2",p:"p",code:"code"},o.components);return c(r,{children:[n("div",{className:"main-blogs",children:o.noMainHeading?n(t,{title:"Artific UI - Variants"}):n(e.h2,{children:"Artific UI - Variants"})}),`
`,n("h2",{children:"Variant"}),`
`,n(e.p,{children:"Variant defines how you components ui should look like"}),`
`,c(e.p,{children:[n(e.code,{children:"variant"}),` prop has different the values based on which component you are using\r
but most common are (`,n(e.code,{children:"default"}),"|",n(e.code,{children:"outline"}),"|",n(e.code,{children:"separate"}),"|",n(e.code,{children:"text"}),"). you can mix them with diffrent supported ",n(e.code,{children:"theme"})," or ",n(e.code,{children:"layout"})," to make component more customizabe"]}),`
`,n("h2",{children:"Size"}),`
`,n(e.p,{children:"Size prop defines the size of your component that how big or small it should be on screen."}),`
`,c(e.p,{children:[n(e.code,{children:"size"})," prop has common five values (",n(e.code,{children:"xs"}),"|",n(e.code,{children:"sm"}),"|",n(e.code,{children:"md"}),"|",n(e.code,{children:"lg"}),"|",n(e.code,{children:"xl"}),")."]}),`
`,c(e.p,{children:["values for ",n(e.code,{children:"size"})," props can differ for some exceptional components"]})]})}function a(o={}){const{wrapper:e}=o.components||{};return e?n(e,Object.assign({},o,{children:n(i,o)})):i(o)}export{a as default};
