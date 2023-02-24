import{j as i,n as r,a as n,F as h}from"./index-cab7d04f.js";const c=a=>i(r,Object.assign({},a,{children:"Lorem ipsum dolor sit amet."}));function d(a){const e=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code"},a.components);return n(h,{children:[i(e.h1,{children:"Typography"}),`
`,i(e.p,{children:"Use typography to present your design and content as clearly and efficiently as possible."}),`
`,`
`,i("div",{children:i("div",{name:"Default",children:c.bind({})})}),`
`,i(e.h2,{children:"API"}),`
`,i(e.pre,{children:i(e.code,{className:"language-jsx",children:`import { Typography } from 'artific-ui/Typography';
`})}),`
`,i(e.h2,{children:"Default Typography"}),`
`,i(e.p,{children:"Use typography to present your design and content as clearly and efficiently as possible."}),`
`,n(e.p,{children:["you can use ",i(e.code,{children:"as"})," props to define which element type your typography should have."]}),`
`,i("div",{children:n("div",{name:"Default Typography",children:[i(r,{children:"Default Paragraph"}),i(r,{as:"span",children:"Paragraph as span"}),i(r,{as:"div",children:"Paragraph as div"})]})}),`
`,i(e.h2,{children:"Typography Weights"}),`
`,n(e.p,{children:["Use ",i(e.code,{children:"weight"})," prop with value (",i(e.code,{children:"light"}),"|",i(e.code,{children:"medium"}),"|",i(e.code,{children:"bold"}),") to set the font weight."]}),`
`,i("div",{children:n("div",{name:"Typography Weights",children:[i(r,{weight:"light",children:"Light Weight Paragraph"}),i(r,{weight:"medium",children:"Medium Weight Paragraph"}),i(r,{weight:"bold",children:"Bold Weight Paragraph"})]})}),`
`,i(e.h2,{children:"Typography As HTML Element"}),`
`,n(e.p,{children:["Use ",i(e.code,{children:"as"})," prop with value (",i(e.code,{children:"p"}),"|",i(e.code,{children:"b"}),"|",i(e.code,{children:"span"}),"|",i(e.code,{children:"i"}),"|",i(e.code,{children:"div"}),"|",i(e.code,{children:"h1-h6"}),") to set the element type."]}),`
`,i("div",{children:n("div",{name:"Typography As HTML Element",children:[n(r,{as:"p",children:["Typography as ",i(e.code,{children:"p"})]}),n(r,{as:"b",children:["Typography as ",i(e.code,{children:"b"})]}),n(r,{as:"span",children:["Typography as ",i(e.code,{children:"span"})]}),n(r,{as:"i",children:["Typography as ",i(e.code,{children:"i"})]}),n(r,{as:"div",children:["Typography as ",i(e.code,{children:"div"})]}),n(r,{as:"h1",children:["Typography as ",i(e.code,{children:"h1"})]}),n(r,{as:"h2",children:["Typography as ",i(e.code,{children:"h2"})]}),n(r,{as:"h3",children:["Typography as ",i(e.code,{children:"h3"})]}),n(r,{as:"h4",children:["Typography as ",i(e.code,{children:"h4"})]}),n(r,{as:"h5",children:["Typography as ",i(e.code,{children:"h5"})]}),n(r,{as:"h6",children:["Typography as ",i(e.code,{children:"h6"})]})]})}),`
`,i(e.h2,{children:"Variants"}),`
`,n(e.p,{children:["Artific UI provides a ",i(e.code,{children:"variant"})," prop to make you choose how your component ui should look like"]}),`
`,n(e.p,{children:["Set ",i(e.code,{children:"variant"})," prop with the value of (",i(e.code,{children:"subtitle"}),"|",i(e.code,{children:"heading"}),"|",i(e.code,{children:"caption"}),"|",i(e.code,{children:"description"}),"|",i(e.code,{children:"highlight"}),"|",i(e.code,{children:"abbr"}),"|",i(e.code,{children:"kbd"}),"|",i(e.code,{children:"pre"}),"|",i(e.code,{children:"code"}),"). you can mix them with different supported ",i(e.code,{children:"theme"})," or ",i(e.code,{children:"layout"})]}),`
`,i(e.p,{children:`Note: Different components might have addition or different variant based on there configuration and flexibility.\r
you can check out the props table to see which variant is supported by the component`}),`
`,i("div",{children:n("div",{name:"Variants",children:[n("div",{className:"col-md-3",children:[i("h5",{children:"Subtitle Variants"}),i("div",{className:"row",children:n("div",{className:"col-md-12",children:[i(r,{weight:"light",variant:"subtitle",children:"Subtitle Variant for typography"}),i(r,{weight:"medium",variant:"subtitle",as:"span",children:`Subtitle Variant for typography as\r
span`}),i(r,{weight:"bold",variant:"subtitle",as:"div",children:`Subtitle Variant for typography as\r
div`})]})})]}),i("br",{}),i("br",{}),i("br",{}),n("div",{className:"col-md-3",children:[i("h5",{children:"Heading Variants"}),i("div",{className:"row",children:n("div",{className:"col-md-12",children:[i(r,{as:"h1",variant:"heading",children:"Heading Variant H1"}),i(r,{as:"h2",variant:"heading",children:"Heading Variant H2"}),i(r,{as:"h3",variant:"heading",children:"Heading Variant H3"}),i(r,{as:"h4",variant:"heading",children:"Heading Variant H4"}),i(r,{as:"h5",variant:"heading",children:"Heading Variant H5"}),i(r,{as:"h6",variant:"heading",children:"Heading Variant H6"})]})})]}),i("br",{}),i("br",{}),i("br",{}),n("div",{className:"col-md-3",children:[i("h5",{children:"Caption Variants"}),i("div",{className:"row",children:n("div",{className:"col-md-12",children:[i(r,{weight:"light",variant:"caption",children:"Caption Variant for typography"}),i(r,{weight:"medium",variant:"caption",as:"span",children:`Caption Variant for typography as\r
span`}),i(r,{weight:"bold",variant:"caption",as:"div",children:`Caption Variant for typography as\r
div`})]})})]}),i("br",{}),i("br",{}),i("br",{}),n("div",{className:"col-md-3",children:[i("h5",{children:"Description Variants"}),i("div",{className:"row",children:n("div",{className:"col-md-12",children:[i(r,{weight:"light",variant:"description",children:"Description Variant for typography"}),i(r,{weight:"medium",variant:"description",as:"span",children:`Description Variant for typography as\r
span`}),i(r,{weight:"bold",variant:"description",as:"div",children:`Description Variant for typography as\r
div`})]})})]}),i("br",{}),i("br",{}),i("br",{}),n("div",{className:"col-md-3",children:[i("h5",{children:"Highlight Variants"}),i("div",{className:"row",children:n("div",{className:"col-md-12",children:[i(r,{weight:"light",children:n(e.p,{children:["Lorem ipsum ",i(r,{weight:"light",variant:"highlight",children:"Highlight me!"}),` dolor sit\r
amet, consectetur adipisicing elit. Distinctio, inventore?`]})}),i(r,{weight:"medium",children:n(e.p,{children:["Lorem ipsum ",i(r,{weight:"medium",variant:"highlight",children:"Highlight me!"}),` dolor sit\r
amet, consectetur adipisicing elit. Distinctio, inventore?`]})}),i(r,{weight:"bold",children:n(e.p,{children:["Lorem ipsum ",i(r,{weight:"bold",variant:"highlight",children:"Highlight me!"}),` dolor sit\r
amet, consectetur adipisicing elit. Distinctio, inventore?`]})})]})})]}),i("br",{}),i("br",{}),i("br",{}),n("div",{className:"col-md-3",children:[i("h5",{children:"Abbreviation Variant"}),i("div",{className:"row",children:n("div",{className:"col-md-12",children:[i(r,{weight:"light",children:n(e.p,{children:["Lorem ipsum ",i(r,{weight:"light",title:"World Wide Web",variant:"abbr",children:"WWW"}),` dolor sit\r
amet, consectetur adipisicing elit. Distinctio, inventore?`]})}),i(r,{weight:"medium",children:n(e.p,{children:["Lorem ipsum ",i(r,{weight:"medium",title:"World Wide Web",variant:"abbr",children:"WWW"}),` dolor sit\r
amet, consectetur adipisicing elit. Distinctio, inventore?`]})}),i(r,{weight:"bold",children:n(e.p,{children:["Lorem ipsum ",i(r,{weight:"bold",title:"World Wide Web",variant:"abbr",children:"WWW"}),` dolor sit\r
amet, consectetur adipisicing elit. Distinctio, inventore?`]})})]})})]}),i("br",{}),i("br",{}),i("br",{}),n("div",{className:"col-md-3",children:[i("h5",{children:"KBD Variant"}),i("div",{className:"row",children:n("div",{className:"col-md-12",children:[i(r,{weight:"light",children:n(e.p,{children:["Lorem ipsum ",i(r,{weight:"light",variant:"kbd",children:"ATL + J"}),` dolor sit\r
amet, consectetur adipisicing elit. Distinctio, inventore?`]})}),i(r,{weight:"medium",children:n(e.p,{children:["Lorem ipsum ",i(r,{weight:"medium",variant:"kbd",children:"ATL + J"}),` dolor sit\r
amet, consectetur adipisicing elit. Distinctio, inventore?`]})}),i(r,{weight:"bold",children:n(e.p,{children:["Lorem ipsum ",i(r,{weight:"bold",variant:"kbd",children:"ATL + J"}),` dolor sit\r
amet, consectetur adipisicing elit. Distinctio, inventore?`]})})]})})]}),i("br",{}),i("br",{}),i("br",{}),n("div",{className:"col-md-3",children:[i("h5",{children:"Pre Variants"}),i("div",{className:"row",children:n("div",{className:"col-md-12",children:[i(r,{weight:"light",variant:"pre",children:`function App() {
    return (
        <div className="container">
            <Typographys/>
        </div>
    );
}`}),i(r,{weight:"medium",variant:"pre",as:"span",children:`function App() {
    return (
        <div className="container">
            <Typographys/>
        </div>
    );
}`}),i(r,{weight:"bold",variant:"pre",as:"div",children:`function App() {
    return (
        <div className="container">
            <Typographys/>
        </div>
    );
}`})]})})]}),i("br",{}),i("br",{}),i("br",{}),n("div",{className:"col-md-3",children:[i("h5",{children:"Code Variants"}),i("div",{className:"row",children:n("div",{className:"col-md-12",children:[i(r,{weight:"light",variant:"code",children:`function App() {
    return (
        <div className="container">
            <Typographys/>
        </div>
    );
}`}),i(r,{weight:"medium",variant:"code",as:"span",children:`function App() {
    return (
        <div className="container">
            <Typographys/>
        </div>
    );
}`}),i(r,{weight:"bold",variant:"code",as:"div",children:`function App() {
    return (
        <div className="container">
            <Typographys/>
        </div>
    );
}`})]})})]}),i("br",{}),i("br",{}),i("br",{}),n("div",{className:"col-md-3",children:[i("h5",{children:"Code With Pre Variant"}),i("div",{className:"row",children:i("div",{className:"col-md-12",children:n(r,{variant:"pre",children:[i(r,{weight:"light",variant:"code",children:`function App() {
    return (
        <div className="container">
            <Typographys/>
        </div>
    );
}`}),i(r,{weight:"medium",variant:"code",as:"span",children:`function App() {
    return (
        <div className="container">
            <Typographys/>
        </div>
    );
}`}),i(r,{weight:"bold",variant:"code",as:"div",children:`function App() {
    return (
        <div className="container">
            <Typographys/>
        </div>
    );
}`})]})})})]}),i("br",{}),i("br",{}),i("br",{})]})}),`
`,i(e.h2,{children:"Typography Themes"}),`
`,n(e.p,{children:["If you want to use a different theme for ",i(e.code,{children:"Alert"})," use the ",i(e.code,{children:"theme"}),` prop to set the theme\r
Note: All components have basic four themes ie. (`,i(e.code,{children:"primary"}),"|",i(e.code,{children:"secondary"}),"|",i(e.code,{children:"dark"}),"|",i(e.code,{children:"light"}),"). you can use either of them."]}),`
`,n(e.p,{children:["You can also use ",i(e.code,{children:"colorScheme"})," prop to define a custom theme."]}),`
`,i("div",{children:n("div",{name:"Typography Themes",children:[i(r,{theme:"primary",children:"Default Paragraph"}),i(r,{theme:"secondary",children:"Default Paragraph"}),i(r,{style:{backgroundColor:"black"},theme:"light",children:"Default Paragraph"}),i(r,{theme:"dark",children:"Default Paragraph"}),i(r,{colorScheme:{background:"linear-gradient(45deg, #e736f4, #673ab7)",backgroundColor:"#e736f4",color:"red"},children:"Default Paragraph"})]})})]})}function l(a={}){const{wrapper:e}=a.components||{};return e?i(e,Object.assign({},a,{children:i(d,a)})):d(a)}export{l as default,c as defaultTemplate};
