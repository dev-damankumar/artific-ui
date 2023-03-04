import{j as e,a as o,F as c,T as a}from"./index-c5414e4b.js";function i(t){const n=Object.assign({h2:"h2",p:"p",code:"code"},t.components);return o(c,{children:[e("div",{className:"main-blogs",children:t.noMainHeading?e(a,{title:"Artific UI - Variants"}):e(n.h2,{children:"Artific UI - Variants"})}),`
`,e("h2",{children:"Variants"}),`
`,e(n.p,{children:"Variant defines how you components ui should look like"}),`
`,o(n.p,{children:[e(n.code,{children:"variant"}),` prop has different the values based on which component you are using\r
but most common are (`,e(n.code,{children:"default"}),"|",e(n.code,{children:"outline"}),"|",e(n.code,{children:"separate"}),"|",e(n.code,{children:"text"}),"). you can mix them with diffrent supported ",e(n.code,{children:"theme"})," or ",e(n.code,{children:"layout"})," to make component more customizabe"]})]})}function d(t={}){const{wrapper:n}=t.components||{};return n?e(n,Object.assign({},t,{children:e(i,t)})):i(t)}export{d as default};
