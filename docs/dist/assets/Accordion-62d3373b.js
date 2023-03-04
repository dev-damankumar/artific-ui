import{j as i,E as m,t as A,l as u,A as p,r as b,a as o,C as g,F as f,T as H,P as n,D as r,L as d,b as c}from"./index-c5414e4b.js";const y=({openCode:l,setOpenCode:e})=>i(m,{theme:A,children:!l&&i("div",{className:"preview-actions",children:i(u,{size:"sm",children:i(p,{elevation:!1,onClick:()=>{e(!0)},theme:"light",layout:"rounded",children:i("i",{className:"bx bx-code-alt"})})})})}),t=({children:l,code:e})=>{const[a,s]=b.useState(!1);return o("div",{className:"wrap",children:[i(y,{openCode:a,setOpenCode:s}),l,a&&i(g,{openCode:a,setOpenCode:s,children:e.toString().trim()})]})};function h(l){const e=Object.assign({h2:"h2",p:"p",h3:"h3",pre:"pre",code:"code",i:"i"},l.components);return o(f,{children:[i("div",{className:"main-blogs",children:l.noMainHeading?i(H,{title:"Accordion - Overview"}):i(e.h2,{children:"Accordion - Overview"})}),`
`,i(e.h2,{children:"Accordion"}),`
`,i(e.p,{children:"The accordion component allows the user to show and hide sections of related content on a page."}),`
`,i(e.p,{children:"An accordion is a lightweight container that may either be used standalone, or be connected to a larger surface, such as a card."}),`
`,i(e.h3,{children:"Basic Accordion"}),`
`,i(t,{code:`<Accordion>
        <AccordionPanel>
            <AccordionHeader>Accordion Header</AccordionHeader>
            <AccordionBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
                debitis dolorem
            </AccordionBody>
        </AccordionPanel>
        <AccordionPanel>
            <AccordionHeader>Accordion Header 2</AccordionHeader>
            <AccordionBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
                debitis dolorem
            </AccordionBody>
        </AccordionPanel>
        <AccordionPanel>
            <AccordionHeader>Accordion Header 3</AccordionHeader>
            <AccordionBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
                debitis dolorem
            </AccordionBody>
        </AccordionPanel>
    </Accordion>`,children:o(n,{fullwidth:!0,children:[o(r,{children:[i(d,{children:"Accordion Header"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid\r
debitis dolorem`})})]}),o(r,{children:[i(d,{children:"Accordion Header 2"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid\r
debitis dolorem`})})]}),o(r,{children:[i(d,{children:"Accordion Header 3"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid\r
debitis dolorem`})})]})]})}),`
`,i(e.h3,{children:"API"}),`
`,i(e.pre,{children:i(e.code,{className:"language-jsx",children:`import { Accordion } from 'artific-ui/Accordion'
`})}),`
`,i(e.h3,{children:"Accordion Themes"}),`
`,o(e.p,{children:["If you want to use a different theme for ",i(e.code,{children:"accordion"})," use the ",i(e.code,{children:"theme"}),` prop to set the theme\r
Note: All components have basic four themes ie. (`,i(e.code,{children:"primary"}),"|",i(e.code,{children:"secondary"}),"|",i(e.code,{children:"dark"}),"|",i(e.code,{children:"light"}),"). you can use either of them"]}),`
`,i("div",{style:{width:"100%"},children:o(t,{code:`
<Accordion>
    <AccordionPanel>
            <AccordionHeader>Accordion Header</AccordionHeader>
            <AccordionBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid debitis dolorem
            </AccordionBody>
        </AccordionPanel>
    </Accordion>
    <Accordion theme="secondary">
        <AccordionPanel>
            <AccordionHeader>Accordion Header</AccordionHeader>
            <AccordionBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid debitis dolorem
            </AccordionBody>
        </AccordionPanel>
    </Accordion>
    <Accordion theme="dark">
        <AccordionPanel>
            <AccordionHeader>Accordion Header</AccordionHeader>
            <AccordionBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid debitis dolorem
            </AccordionBody>
        </AccordionPanel>
    </Accordion>
    <Accordion theme="light">
        <AccordionPanel>
            <AccordionHeader>Accordion Header</AccordionHeader>
            <AccordionBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid debitis dolorem
            </AccordionBody>
        </AccordionPanel>
</Accordion>
`,children:[i(n,{children:o(r,{children:[i(d,{children:"Accordion Header"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem`})})]})}),i(n,{theme:"secondary",children:o(r,{children:[i(d,{children:"Accordion Header"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem`})})]})}),i(n,{theme:"dark",children:o(r,{children:[i(d,{children:"Accordion Header"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem`})})]})}),i(n,{theme:"light",children:o(r,{children:[i(d,{children:"Accordion Header"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem`})})]})})]})}),`
`,i(e.h3,{children:"Accordion Custom Themes"}),`
`,o(e.p,{children:["If you want to use a different color scheme for ",i(e.code,{children:"accordion"}),` instead of the provided themes then you can use\r
`,i(e.code,{children:"colorScheme"})," props to define your color scheme."]}),`
`,o(e.p,{children:["colorScheme is an object containing three properties: ",i(e.code,{children:"background"}),", ",i(e.code,{children:"backgroundColor"}),", ",i(e.code,{children:"color"})]}),`
`,i("div",{style:{width:"100%"},children:i(t,{code:`
<Accordion
        colorScheme={{
            background: 'linear-gradient(45deg, #e736f4, #673ab7)',
            backgroundColor: '#e736f4',
            color: 'white',
        }}
        theme="primary"
    >
        <AccordionPanel>
            <AccordionHeader>Accordion Header</AccordionHeader>
            <AccordionBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid debitis dolorem
            </AccordionBody>
        </AccordionPanel>
</Accordion>
    `,children:i(n,{colorScheme:{background:"linear-gradient(45deg, #e736f4, #673ab7)",backgroundColor:"#e736f4",color:"white"},theme:"primary",children:o(r,{children:[i(d,{children:"Accordion Header"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem`})})]})})})}),`
`,i(e.h3,{children:"Accordion Disabled Panel"}),`
`,o(e.p,{children:["If you want to disable a specific panel of the Accordion use ",i(e.code,{children:"disabled"})," prop on ",i(e.code,{children:"AccordionPanel"})," to disable it."]}),`
`,o(t,{code:`
<Accordion theme="primary" fullwidth>
        <AccordionPanel disabled={true}>
            <AccordionHeader>Secret Header</AccordionHeader>
            <AccordionBody>This is a secret content</AccordionBody>
        </AccordionPanel>
    </Accordion>
    <Accordion theme="secondary">
        <AccordionPanel disabled={true}>
            <AccordionHeader>Secret Header</AccordionHeader>
            <AccordionBody>This is a secret content</AccordionBody>
        </AccordionPanel>
    </Accordion>
    <Accordion theme="light">
        <AccordionPanel disabled={true}>
            <AccordionHeader>Secret Header</AccordionHeader>
            <AccordionBody>This is a secret content</AccordionBody>
        </AccordionPanel>
    </Accordion>
    <Accordion theme="dark">
        <AccordionPanel disabled={true}>
            <AccordionHeader>Secret Header</AccordionHeader>
            <AccordionBody>This is a secret content</AccordionBody>
        </AccordionPanel>
    </Accordion>
    <Accordion
        colorScheme={{
            background: 'linear-gradient(45deg, #e736f4, #673ab7)',
            backgroundColor: '#e736f4',
            color: 'white',
        }}
        theme="primary"
    >
        <AccordionPanel disabled={true}>
            <AccordionHeader>Secret Header</AccordionHeader>
            <AccordionBody>This is a secret content</AccordionBody>
        </AccordionPanel>
    </Accordion>
`,children:[i(n,{theme:"primary",fullwidth:!0,children:o(r,{disabled:!0,children:[i(d,{children:"Secret Header"}),i(c,{children:"This is a secret content"})]})}),i(n,{theme:"secondary",children:o(r,{disabled:!0,children:[i(d,{children:"Secret Header"}),i(c,{children:"This is a secret content"})]})}),i(n,{theme:"light",children:o(r,{disabled:!0,children:[i(d,{children:"Secret Header"}),i(c,{children:"This is a secret content"})]})}),i(n,{theme:"dark",children:o(r,{disabled:!0,children:[i(d,{children:"Secret Header"}),i(c,{children:"This is a secret content"})]})}),i(n,{colorScheme:{background:"linear-gradient(45deg, #e736f4, #673ab7)",backgroundColor:"#e736f4",color:"white"},theme:"primary",children:o(r,{disabled:!0,children:[i(d,{children:"Secret Header"}),i(c,{children:"This is a secret content"})]})})]}),`
`,i(e.h3,{children:"Prefix And Suffix icons"}),`
`,o(e.p,{children:["You can add icons to the start or end of ",i(e.code,{children:"AccordionHeader"}),"."]}),`
`,o(e.p,{children:["provide the prop ",i(e.code,{children:"prefix"})," or ",i(e.code,{children:"suffix"})," or both to the ",i(e.code,{children:"AccordionHeader"})," to add the icons."]}),`
`,o(t,{code:`
<Accordion>
        <AccordionPanel>
            <AccordionHeader
                prefix={<i className="bx bx-bowl-hot"></i>}
                suffix={<i className="bx bx-bowl-hot"></i>}
            >
                Accordion Header 3
            </AccordionHeader>
            <AccordionBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid debitis dolorem
            </AccordionBody>
        </AccordionPanel>
    </Accordion>
    <Accordion theme="secondary">
        <AccordionPanel>
            <AccordionHeader
                prefix={<i className="bx bx-bowl-hot"></i>}
                suffix={<i className="bx bx-bowl-hot"></i>}
            >
                Accordion Header 3
            </AccordionHeader>
            <AccordionBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid debitis dolorem
            </AccordionBody>
        </AccordionPanel>
    </Accordion>
    <Accordion theme="light">
        <AccordionPanel>
            <AccordionHeader
                prefix={<i className="bx bx-bowl-hot"></i>}
                suffix={<i className="bx bx-bowl-hot"></i>}
            >
                Accordion Header 3
            </AccordionHeader>
            <AccordionBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid debitis dolorem
            </AccordionBody>
        </AccordionPanel>
    </Accordion>
    <Accordion theme="dark">
        <AccordionPanel>
            <AccordionHeader
                prefix={<i className="bx bx-bowl-hot"></i>}
                suffix={<i className="bx bx-bowl-hot"></i>}
            >
                Accordion Header 3
            </AccordionHeader>
            <AccordionBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid debitis dolorem
            </AccordionBody>
        </AccordionPanel>
    </Accordion>
    <Accordion
        colorScheme={{
            background: 'linear-gradient(45deg, #e736f4, #673ab7)',
            backgroundColor: '#e736f4',
            color: 'white',
        }}
    >
        <AccordionPanel>
            <AccordionHeader
                prefix={<i className="bx bx-bowl-hot"></i>}
                suffix={<i className="bx bx-bowl-hot"></i>}
            >
                Accordion Header 3
            </AccordionHeader>
            <AccordionBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid debitis dolorem
            </AccordionBody>
        </AccordionPanel>
    </Accordion>`,children:[i(n,{children:o(r,{children:[i(d,{prefix:i(e.i,{className:"bx bx-bowl-hot"}),suffix:i(e.i,{className:"bx bx-bowl-hot"}),children:i(e.p,{children:"Accordion Header 3"})}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem`})})]})}),i(n,{theme:"secondary",children:o(r,{children:[i(d,{prefix:i(e.i,{className:"bx bx-bowl-hot"}),suffix:i(e.i,{className:"bx bx-bowl-hot"}),children:i(e.p,{children:"Accordion Header 3"})}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem`})})]})}),i(n,{theme:"light",children:o(r,{children:[i(d,{prefix:i(e.i,{className:"bx bx-bowl-hot"}),suffix:i(e.i,{className:"bx bx-bowl-hot"}),children:i(e.p,{children:"Accordion Header 3"})}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem`})})]})}),i(n,{theme:"dark",children:o(r,{children:[i(d,{prefix:i(e.i,{className:"bx bx-bowl-hot"}),suffix:i(e.i,{className:"bx bx-bowl-hot"}),children:i(e.p,{children:"Accordion Header 3"})}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem`})})]})}),i(n,{colorScheme:{background:"linear-gradient(45deg, #e736f4, #673ab7)",backgroundColor:"#e736f4",color:"white"},children:o(r,{children:[i(d,{prefix:i(e.i,{className:"bx bx-bowl-hot"}),suffix:i(e.i,{className:"bx bx-bowl-hot"}),children:i(e.p,{children:"Accordion Header 3"})}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem`})})]})})]}),`
`,i(e.h3,{children:"Indicator Icon Position"}),`
`,i(e.p,{children:"You can choose where accordion's indicator icon should appear when opening and closing the panel"}),`
`,o(e.p,{children:["Control which it direction should be by providing it ",i(e.code,{children:"indicatorPosition"})," of ",i(e.code,{children:"start"})," or ",i(e.code,{children:"end"})]}),`
`,o(t,{code:`
<Accordion indicatorPosition="start">
        <AccordionPanel>
            <AccordionHeader
                prefix={<i className="bx bx-bowl-hot"></i>}
                suffix={<i className="bx bx-bowl-hot"></i>}
            >
                Accordion Header 2
            </AccordionHeader>
            <AccordionBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid debitis dolorem
            </AccordionBody>
        </AccordionPanel>
    </Accordion>
     <Accordion indicatorPosition="start">
        <AccordionPanel>
            <AccordionHeader
                prefix={<i className="bx bx-bowl-hot"></i>}
                suffix={<i className="bx bx-bowl-hot"></i>}
            >
                Accordion Header 2
            </AccordionHeader>
            <AccordionBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid debitis dolorem
            </AccordionBody>
        </AccordionPanel>
    </Accordion>
    `,children:[i("h5",{children:"Default/End Position"}),i("br",{}),i(n,{children:o(r,{children:[i(d,{prefix:i(e.i,{className:"bx bx-bowl-hot"}),suffix:i(e.i,{className:"bx bx-bowl-hot"}),children:i(e.p,{children:"Accordion Header 2"})}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem`})})]})}),i(n,{theme:"secondary",children:o(r,{children:[i(d,{prefix:i(e.i,{className:"bx bx-bowl-hot"}),suffix:i(e.i,{className:"bx bx-bowl-hot"}),children:i(e.p,{children:"Accordion Header 2"})}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem`})})]})}),i(n,{theme:"light",children:o(r,{children:[i(d,{prefix:i(e.i,{className:"bx bx-bowl-hot"}),suffix:i(e.i,{className:"bx bx-bowl-hot"}),children:i(e.p,{children:"Accordion Header 2"})}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem`})})]})}),i(n,{theme:"dark",children:o(r,{children:[i(d,{prefix:i(e.i,{className:"bx bx-bowl-hot"}),suffix:i(e.i,{className:"bx bx-bowl-hot"}),children:i(e.p,{children:"Accordion Header 2"})}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem`})})]})}),i(n,{colorScheme:{background:"linear-gradient(45deg, #e736f4, #673ab7)",backgroundColor:"#e736f4",color:"white"},children:o(r,{children:[i(d,{prefix:i(e.i,{className:"bx bx-bowl-hot"}),suffix:i(e.i,{className:"bx bx-bowl-hot"}),children:i(e.p,{children:"Accordion Header 2"})}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem`})})]})}),i("br",{}),i("h5",{children:"Start Position"}),i("br",{}),i(n,{indicatorPosition:"start",children:o(r,{children:[i(d,{prefix:i(e.i,{className:"bx bx-bowl-hot"}),suffix:i(e.i,{className:"bx bx-bowl-hot"}),children:i(e.p,{children:"Accordion Header 2"})}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem`})})]})}),i(n,{theme:"secondary",indicatorPosition:"start",children:o(r,{children:[i(d,{prefix:i(e.i,{className:"bx bx-bowl-hot"}),suffix:i(e.i,{className:"bx bx-bowl-hot"}),children:i(e.p,{children:"Accordion Header 2"})}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem`})})]})}),i(n,{theme:"light",indicatorPosition:"start",children:o(r,{children:[i(d,{prefix:i(e.i,{className:"bx bx-bowl-hot"}),suffix:i(e.i,{className:"bx bx-bowl-hot"}),children:i(e.p,{children:"Accordion Header 2"})}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem`})})]})}),i(n,{theme:"dark",indicatorPosition:"start",children:o(r,{children:[i(d,{prefix:i(e.i,{className:"bx bx-bowl-hot"}),suffix:i(e.i,{className:"bx bx-bowl-hot"}),children:i(e.p,{children:"Accordion Header 2"})}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem`})})]})}),i(n,{colorScheme:{background:"linear-gradient(45deg, #e736f4, #673ab7)",backgroundColor:"#e736f4",color:"white"},indicatorPosition:"start",children:o(r,{children:[i(d,{prefix:i(e.i,{className:"bx bx-bowl-hot"}),suffix:i(e.i,{className:"bx bx-bowl-hot"}),children:i(e.p,{children:"Accordion Header 2"})}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem`})})]})})]}),`
`,i(e.h3,{children:"Accordion Layout"}),`
`,i(e.p,{children:"Artific UI provides basic four layouts to choose from to define how you component's structure should look like."}),`
`,o(e.p,{children:["Set ",i(e.code,{children:"layout"})," prop with the value of (",i(e.code,{children:"default"}),"|",i(e.code,{children:"rounded"}),"|",i(e.code,{children:"no-radius"}),"|",i(e.code,{children:"pill"}),")"]}),`
`,i(e.p,{children:"Note: Different components might have addition layouts based on there configuration and flexibility. you can check out the props table to see which layout is supported by the component"}),`
`,o(t,{code:`
<Accordion layout="default">
        <AccordionPanel>
            <AccordionHeader>Accordion Header</AccordionHeader>
            <AccordionBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid debitis dolorem
            </AccordionBody>
        </AccordionPanel>
    </Accordion>
    <Accordion layout="rounded">
        <AccordionPanel>
            <AccordionHeader>Accordion Header</AccordionHeader>
            <AccordionBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid debitis dolorem
            </AccordionBody>
        </AccordionPanel>
    </Accordion>
    <Accordion layout="no-radius">
        <AccordionPanel>
            <AccordionHeader>Accordion Header</AccordionHeader>
            <AccordionBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid debitis dolorem
            </AccordionBody>
        </AccordionPanel>
    </Accordion>
    <Accordion layout="pill">
        <AccordionPanel>
            <AccordionHeader>Accordion Header</AccordionHeader>
            <AccordionBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid debitis dolorem
            </AccordionBody>
        </AccordionPanel>
    </Accordion>
`,children:[i("h5",{children:"Basic Accordion Layout"}),i("br",{}),i(n,{layout:"default",children:o(r,{children:[i(d,{children:"Accordion Header"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem`})})]})}),i(n,{theme:"secondary",layout:"default",children:o(r,{children:[i(d,{children:"Accordion Header"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem`})})]})}),i(n,{theme:"light",layout:"default",children:o(r,{children:[i(d,{children:"Accordion Header"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem`})})]})}),i(n,{theme:"dark",layout:"default",children:o(r,{children:[i(d,{children:"Accordion Header"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem`})})]})}),i(n,{colorScheme:{background:"linear-gradient(45deg, #e736f4, #673ab7)",backgroundColor:"#e736f4",color:"white"},layout:"default",children:o(r,{children:[i(d,{children:"Accordion Header"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem`})})]})}),i("br",{}),i("br",{}),i("h5",{children:"Rounded Accordion"}),i("br",{}),i(n,{layout:"rounded",children:o(r,{children:[i(d,{children:"Accordion Header"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem`})})]})}),i(n,{theme:"secondary",layout:"rounded",children:o(r,{children:[i(d,{children:"Accordion Header"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem`})})]})}),i(n,{theme:"light",layout:"rounded",children:o(r,{children:[i(d,{children:"Accordion Header"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem`})})]})}),i(n,{theme:"dark",layout:"rounded",children:o(r,{children:[i(d,{children:"Accordion Header"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem`})})]})}),i(n,{colorScheme:{background:"linear-gradient(45deg, #e736f4, #673ab7)",backgroundColor:"#e736f4",color:"white"},layout:"rounded",children:o(r,{children:[i(d,{children:"Accordion Header"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem`})})]})}),i("br",{}),i("br",{}),i("h5",{children:"No Radius Accordion"}),i("br",{}),i(n,{layout:"no-radius",children:o(r,{children:[i(d,{children:"Accordion Header"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem`})})]})}),i(n,{theme:"secondary",layout:"no-radius",children:o(r,{children:[i(d,{children:"Accordion Header"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem`})})]})}),i(n,{theme:"light",layout:"no-radius",children:o(r,{children:[i(d,{children:"Accordion Header"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem`})})]})}),i(n,{theme:"dark",layout:"no-radius",children:o(r,{children:[i(d,{children:"Accordion Header"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem`})})]})}),i(n,{colorScheme:{background:"linear-gradient(45deg, #e736f4, #673ab7)",backgroundColor:"#e736f4",color:"white"},layout:"no-radius",children:o(r,{children:[i(d,{children:"Accordion Header"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem`})})]})}),i("br",{}),i("br",{}),i("h5",{children:"Pill Accordion"}),i("br",{}),i(n,{layout:"pill",children:o(r,{children:[i(d,{children:"Accordion Header"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem`})})]})}),i(n,{theme:"secondary",layout:"pill",children:o(r,{children:[i(d,{children:"Accordion Header"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem`})})]})}),i(n,{theme:"light",layout:"pill",children:o(r,{children:[i(d,{children:"Accordion Header"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem`})})]})}),i(n,{theme:"dark",layout:"pill",children:o(r,{children:[i(d,{children:"Accordion Header"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem`})})]})}),i(n,{colorScheme:{background:"linear-gradient(45deg, #e736f4, #673ab7)",backgroundColor:"#e736f4",color:"white"},layout:"pill",children:o(r,{children:[i(d,{children:"Accordion Header"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem`})})]})})]}),`
`,i(e.h3,{children:"Accordion Variant"}),`
`,o(e.p,{children:["Artific UI provides a ",i(e.code,{children:"variant"})," prop to make you choose how your component ui should look like"]}),`
`,o(e.p,{children:["Set ",i(e.code,{children:"variant"})," prop with the value of (",i(e.code,{children:"default"}),"|",i(e.code,{children:"attached"}),"|",i(e.code,{children:"separate"}),"|",i(e.code,{children:"outline"}),"). you can mix them with different supported ",i(e.code,{children:"theme"})," or ",i(e.code,{children:"layout"})]}),`
`,i(e.p,{children:`Note: Different components might have addition or different variant based on there configuration and flexibility.\r
you can check out the props table to see which variant is supported by the component`}),`
`,o(t,{code:`
<Accordion variant="default">
        <AccordionPanel>
            <AccordionHeader>Accordion Header</AccordionHeader>
            <AccordionBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid debitis dolorem
            </AccordionBody>
        </AccordionPanel>
        <AccordionPanel>
            <AccordionHeader>Accordion Header 2</AccordionHeader>
            <AccordionBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid debitis dolorem
            </AccordionBody>
        </AccordionPanel>
</Accordion>
<Accordion variant="attached">
        <AccordionPanel>
            <AccordionHeader>Accordion Header</AccordionHeader>
            <AccordionBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid debitis dolorem
            </AccordionBody>
        </AccordionPanel>
        <AccordionPanel>
            <AccordionHeader>Accordion Header 2</AccordionHeader>
            <AccordionBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid debitis dolorem
            </AccordionBody>
        </AccordionPanel>
</Accordion>
<Accordion variant="separate">
        <AccordionPanel>
            <AccordionHeader>Accordion Header</AccordionHeader>
            <AccordionBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid debitis dolorem
            </AccordionBody>
        </AccordionPanel>
        <AccordionPanel>
            <AccordionHeader>Accordion Header 2</AccordionHeader>
            <AccordionBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid debitis dolorem
            </AccordionBody>
        </AccordionPanel>
    </Accordion>
<Accordion variant="outline">
        <AccordionPanel>
            <AccordionHeader>Accordion Header</AccordionHeader>
            <AccordionBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid debitis dolorem
            </AccordionBody>
        </AccordionPanel>
        <AccordionPanel>
            <AccordionHeader>Accordion Header 2</AccordionHeader>
            <AccordionBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid debitis dolorem
            </AccordionBody>
        </AccordionPanel>
    </Accordion>
`,children:[i("h5",{children:"Default Accordion Variant"}),i("br",{}),o(n,{variant:"default",children:[o(r,{children:[i(d,{children:"Accordion Header"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem`})})]}),o(r,{children:[i(d,{children:"Accordion Header 2"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem`})})]})]}),i("br",{}),o(n,{theme:"secondary",variant:"default",children:[o(r,{children:[i(d,{children:"Accordion Header"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem`})})]}),o(r,{children:[i(d,{children:"Accordion Header 2"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem`})})]})]}),i("br",{}),o(n,{theme:"light",variant:"default",children:[o(r,{children:[i(d,{children:"Accordion Header"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem`})})]}),o(r,{children:[i(d,{children:"Accordion Header 2"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem`})})]})]}),i("br",{}),o(n,{theme:"dark",variant:"default",children:[o(r,{children:[i(d,{children:"Accordion Header"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem`})})]}),o(r,{children:[i(d,{children:"Accordion Header 2"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem`})})]})]}),i("br",{}),o(n,{colorScheme:{background:"linear-gradient(45deg, #e736f4, #673ab7)",backgroundColor:"#e736f4",color:"white"},variant:"default",children:[o(r,{children:[i(d,{children:"Accordion Header"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem`})})]}),o(r,{children:[i(d,{children:"Accordion Header 2"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem`})})]})]}),i("br",{}),i("br",{}),i("h5",{children:"Attached Accordion Variant"}),i("br",{}),o(n,{variant:"attached",children:[o(r,{children:[i(d,{children:"Accordion Header"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem`})})]}),o(r,{children:[i(d,{children:"Accordion Header 2"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem`})})]})]}),i("br",{}),o(n,{theme:"secondary",variant:"attached",children:[o(r,{children:[i(d,{children:"Accordion Header"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem`})})]}),o(r,{children:[i(d,{children:"Accordion Header 2"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem`})})]})]}),i("br",{}),o(n,{theme:"light",variant:"attached",children:[o(r,{children:[i(d,{children:"Accordion Header"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem`})})]}),o(r,{children:[i(d,{children:"Accordion Header 2"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem`})})]})]}),i("br",{}),o(n,{theme:"dark",variant:"attached",children:[o(r,{children:[i(d,{children:"Accordion Header"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem`})})]}),o(r,{children:[i(d,{children:"Accordion Header 2"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem`})})]})]}),i("br",{}),o(n,{colorScheme:{background:"linear-gradient(45deg, #e736f4, #673ab7)",backgroundColor:"#e736f4",color:"white"},variant:"attached",children:[o(r,{children:[i(d,{children:"Accordion Header"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem`})})]}),o(r,{children:[i(d,{children:"Accordion Header 2"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem`})})]})]}),i("br",{}),i("br",{}),i("h5",{children:"Separate Accordion"}),i("br",{}),o(n,{variant:"separate",children:[o(r,{children:[i(d,{children:"Accordion Header"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem`})})]}),o(r,{children:[i(d,{children:"Accordion Header 2"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem`})})]})]}),i("br",{}),o(n,{theme:"secondary",variant:"separate",children:[o(r,{children:[i(d,{children:"Accordion Header"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem`})})]}),o(r,{children:[i(d,{children:"Accordion Header 2"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem`})})]})]}),i("br",{}),o(n,{theme:"light",variant:"separate",children:[o(r,{children:[i(d,{children:"Accordion Header"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem`})})]}),o(r,{children:[i(d,{children:"Accordion Header 2"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem`})})]})]}),i("br",{}),o(n,{theme:"dark",variant:"separate",children:[o(r,{children:[i(d,{children:"Accordion Header"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem`})})]}),o(r,{children:[i(d,{children:"Accordion Header 2"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem`})})]})]}),i("br",{}),o(n,{colorScheme:{background:"linear-gradient(45deg, #e736f4, #673ab7)",backgroundColor:"#e736f4",color:"white"},variant:"separate",children:[o(r,{children:[i(d,{children:"Accordion Header"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem`})})]}),o(r,{children:[i(d,{children:"Accordion Header 2"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem`})})]})]}),i("br",{}),i("br",{}),i("h5",{children:"Outlined Accordion"}),i("br",{}),o(n,{variant:"outline",children:[o(r,{children:[i(d,{children:"Accordion Header"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem`})})]}),o(r,{children:[i(d,{children:"Accordion Header 2"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem`})})]})]}),i("br",{}),o(n,{theme:"secondary",variant:"outline",children:[o(r,{children:[i(d,{children:"Accordion Header"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem`})})]}),o(r,{children:[i(d,{children:"Accordion Header 2"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem`})})]})]}),i("br",{}),o(n,{theme:"light",variant:"outline",children:[o(r,{children:[i(d,{children:"Accordion Header"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem`})})]}),o(r,{children:[i(d,{children:"Accordion Header 2"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem`})})]})]}),i("br",{}),o(n,{theme:"dark",variant:"outline",children:[o(r,{children:[i(d,{children:"Accordion Header"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem`})})]}),o(r,{children:[i(d,{children:"Accordion Header 2"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem`})})]})]}),i("br",{}),o(n,{colorScheme:{background:"linear-gradient(45deg, #e736f4, #673ab7)",backgroundColor:"#e736f4",color:"white"},variant:"outline",children:[o(r,{children:[i(d,{children:"Accordion Header"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem`})})]}),o(r,{children:[i(d,{children:"Accordion Header 2"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem`})})]})]})]}),`
`,i(e.h3,{children:"Accordion Sizes"}),`
`,o(e.p,{children:["you can use a ",i(e.code,{children:"size"})," prop to define the size of your components"]}),`
`,o(e.p,{children:["Set ",i(e.code,{children:"size"})," prop with the value of (",i(e.code,{children:"xs"}),"|",i(e.code,{children:"sm"}),"|",i(e.code,{children:"md"}),"|",i(e.code,{children:"lg"}),",",i(e.code,{children:"xl"}),"). you can mix them with different supported ",i(e.code,{children:"theme"})," or ",i(e.code,{children:"layout"})]}),`
`,o(e.p,{children:["Note: Mostly all the components have the same size values ie.(",i(e.code,{children:"xs"}),"|",i(e.code,{children:"sm"}),"|",i(e.code,{children:"md"}),"|",i(e.code,{children:"lg"}),",",i(e.code,{children:"xl"}),"). but some of the components might have additional sizes."]}),`
`,o(t,{code:`
<h5>Extra Small Sizing</h5>
    <br/>
    <Accordion size="xs">
        <AccordionPanel>
            <AccordionHeader>Accordion Header</AccordionHeader>
            <AccordionBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid debitis dolorem harum officiis
            </AccordionBody>
        </AccordionPanel>
    </Accordion>
    <Accordion theme="secondary" size="xs">
        <AccordionPanel>
            <AccordionHeader>Accordion Header</AccordionHeader>
            <AccordionBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid debitis dolorem harum officiis
            </AccordionBody>
        </AccordionPanel>
    </Accordion>
    <Accordion theme="light" size="xs">
        <AccordionPanel>
            <AccordionHeader>Accordion Header</AccordionHeader>
            <AccordionBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid debitis dolorem harum officiis
            </AccordionBody>
        </AccordionPanel>
    </Accordion>
    <Accordion theme="dark" size="xs">
        <AccordionPanel>
            <AccordionHeader>Accordion Header</AccordionHeader>
            <AccordionBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid debitis dolorem harum officiis
            </AccordionBody>
        </AccordionPanel>
    </Accordion>
    <Accordion
        colorScheme={{
            background: 'linear-gradient(45deg, #e736f4, #673ab7)',
            backgroundColor: '#e736f4',
            color: 'white',
        }}
        size="xs"
    >
        <AccordionPanel>
            <AccordionHeader>Accordion Header</AccordionHeader>
            <AccordionBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid debitis dolorem harum officiis
            </AccordionBody>
        </AccordionPanel>
    </Accordion>
    <br/>
    <h5>Small Size Accordion</h5>
    <br/>
    <Accordion size="sm">
        <AccordionPanel>
            <AccordionHeader>Accordion Header</AccordionHeader>
            <AccordionBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid debitis dolorem harum officiis
            </AccordionBody>
        </AccordionPanel>
    </Accordion>
    <Accordion theme="secondary" size="sm">
        <AccordionPanel>
            <AccordionHeader>Accordion Header</AccordionHeader>
            <AccordionBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid debitis dolorem harum officiis
            </AccordionBody>
        </AccordionPanel>
    </Accordion>
    <Accordion theme="light" size="sm">
        <AccordionPanel>
            <AccordionHeader>Accordion Header</AccordionHeader>
            <AccordionBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid debitis dolorem harum officiis
            </AccordionBody>
        </AccordionPanel>
    </Accordion>
    <Accordion theme="dark" size="sm">
        <AccordionPanel>
            <AccordionHeader>Accordion Header</AccordionHeader>
            <AccordionBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid debitis dolorem harum officiis
            </AccordionBody>
        </AccordionPanel>
    </Accordion>
    <Accordion
        colorScheme={{
            background: 'linear-gradient(45deg, #e736f4, #673ab7)',
            backgroundColor: '#e736f4',
            color: 'white',
        }}
        size="sm"
    >
        <AccordionPanel>
            <AccordionHeader>Accordion Header</AccordionHeader>
            <AccordionBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid debitis dolorem harum officiis
            </AccordionBody>
        </AccordionPanel>
    </Accordion>
    <br/>
    <h5>Default/Medium Accordion</h5>
    <br/>
    <Accordion size="md">
        <AccordionPanel>
            <AccordionHeader>Accordion Header</AccordionHeader>
            <AccordionBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid debitis dolorem harum officiis
            </AccordionBody>
        </AccordionPanel>
    </Accordion>
    <Accordion theme="secondary" size="md">
        <AccordionPanel>
            <AccordionHeader>Accordion Header</AccordionHeader>
            <AccordionBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid debitis dolorem harum officiis
            </AccordionBody>
        </AccordionPanel>
    </Accordion>
    <Accordion theme="light" size="md">
        <AccordionPanel>
            <AccordionHeader>Accordion Header</AccordionHeader>
            <AccordionBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid debitis dolorem harum officiis
            </AccordionBody>
        </AccordionPanel>
    </Accordion>
    <Accordion theme="dark" size="md">
        <AccordionPanel>
            <AccordionHeader>Accordion Header</AccordionHeader>
            <AccordionBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid debitis dolorem harum officiis
            </AccordionBody>
        </AccordionPanel>
    </Accordion>
    <Accordion
        colorScheme={{
            background: 'linear-gradient(45deg, #e736f4, #673ab7)',
            backgroundColor: '#e736f4',
            color: 'white',
        }}
        size="md"
    >
        <AccordionPanel>
            <AccordionHeader>Accordion Header</AccordionHeader>
            <AccordionBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid debitis dolorem harum officiis
            </AccordionBody>
        </AccordionPanel>
    </Accordion>
    <br/>
    <h5>Large Accordion</h5>
    <br/>
    <Accordion size="lg">
        <AccordionPanel>
            <AccordionHeader>Accordion Header</AccordionHeader>
            <AccordionBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid debitis dolorem harum officiis
            </AccordionBody>
        </AccordionPanel>
    </Accordion>
    <Accordion theme="secondary" size="lg">
        <AccordionPanel>
            <AccordionHeader>Accordion Header</AccordionHeader>
            <AccordionBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid debitis dolorem harum officiis
            </AccordionBody>
        </AccordionPanel>
    </Accordion>
    <Accordion theme="light" size="lg">
        <AccordionPanel>
            <AccordionHeader>Accordion Header</AccordionHeader>
            <AccordionBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid debitis dolorem harum officiis
            </AccordionBody>
        </AccordionPanel>
    </Accordion>
    <Accordion theme="dark" size="lg">
        <AccordionPanel>
            <AccordionHeader>Accordion Header</AccordionHeader>
            <AccordionBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid debitis dolorem harum officiis
            </AccordionBody>
        </AccordionPanel>
    </Accordion>
    <Accordion
        colorScheme={{
            background: 'linear-gradient(45deg, #e736f4, #673ab7)',
            backgroundColor: '#e736f4',
            color: 'white',
        }}
        size="lg"
    >
        <AccordionPanel>
            <AccordionHeader>Accordion Header</AccordionHeader>
            <AccordionBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid debitis dolorem harum officiis
            </AccordionBody>
        </AccordionPanel>
    </Accordion>
    <br/>
    <h5>Extra Large Accordion</h5>
    <br/>
    <Accordion size="xl">
        <AccordionPanel>
            <AccordionHeader>Accordion Header</AccordionHeader>
            <AccordionBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid debitis dolorem harum officiis
            </AccordionBody>
        </AccordionPanel>
    </Accordion>
    <Accordion theme="secondary" size="xl">
        <AccordionPanel>
            <AccordionHeader>Accordion Header</AccordionHeader>
            <AccordionBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid debitis dolorem harum officiis
            </AccordionBody>
        </AccordionPanel>
    </Accordion>
    <Accordion theme="light" size="xl">
        <AccordionPanel>
            <AccordionHeader>Accordion Header</AccordionHeader>
            <AccordionBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid debitis dolorem harum officiis
            </AccordionBody>
        </AccordionPanel>
    </Accordion>
    <Accordion theme="dark" size="xl">
        <AccordionPanel>
            <AccordionHeader>Accordion Header</AccordionHeader>
            <AccordionBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid debitis dolorem harum officiis
            </AccordionBody>
        </AccordionPanel>
    </Accordion>
    <Accordion
        colorScheme={{
            background: 'linear-gradient(45deg, #e736f4, #673ab7)',
            backgroundColor: '#e736f4',
            color: 'white',
        }}
        size="xl"
    >
        <AccordionPanel>
            <AccordionHeader>Accordion Header</AccordionHeader>
            <AccordionBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid debitis dolorem harum officiis
            </AccordionBody>
        </AccordionPanel>
    </Accordion>
    `,children:[i("h5",{children:"Extra Small Sizing"}),i("br",{}),i(n,{size:"xs",children:o(r,{children:[i(d,{children:"Accordion Header"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem harum officiis`})})]})}),i(n,{theme:"secondary",size:"xs",children:o(r,{children:[i(d,{children:"Accordion Header"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem harum officiis`})})]})}),i(n,{theme:"light",size:"xs",children:o(r,{children:[i(d,{children:"Accordion Header"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem harum officiis`})})]})}),i(n,{theme:"dark",size:"xs",children:o(r,{children:[i(d,{children:"Accordion Header"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem harum officiis`})})]})}),i(n,{colorScheme:{background:"linear-gradient(45deg, #e736f4, #673ab7)",backgroundColor:"#e736f4",color:"white"},size:"xs",children:o(r,{children:[i(d,{children:"Accordion Header"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem harum officiis`})})]})}),i("br",{}),i("h5",{children:"Small Size Accordion"}),i("br",{}),i(n,{size:"sm",children:o(r,{children:[i(d,{children:"Accordion Header"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem harum officiis`})})]})}),i(n,{theme:"secondary",size:"sm",children:o(r,{children:[i(d,{children:"Accordion Header"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem harum officiis`})})]})}),i(n,{theme:"light",size:"sm",children:o(r,{children:[i(d,{children:"Accordion Header"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem harum officiis`})})]})}),i(n,{theme:"dark",size:"sm",children:o(r,{children:[i(d,{children:"Accordion Header"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem harum officiis`})})]})}),i(n,{colorScheme:{background:"linear-gradient(45deg, #e736f4, #673ab7)",backgroundColor:"#e736f4",color:"white"},size:"sm",children:o(r,{children:[i(d,{children:"Accordion Header"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem harum officiis`})})]})}),i("br",{}),i("h5",{children:"Default/Medium Accordion"}),i("br",{}),i(n,{size:"md",children:o(r,{children:[i(d,{children:"Accordion Header"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem harum officiis`})})]})}),i(n,{theme:"secondary",size:"md",children:o(r,{children:[i(d,{children:"Accordion Header"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem harum officiis`})})]})}),i(n,{theme:"light",size:"md",children:o(r,{children:[i(d,{children:"Accordion Header"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem harum officiis`})})]})}),i(n,{theme:"dark",size:"md",children:o(r,{children:[i(d,{children:"Accordion Header"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem harum officiis`})})]})}),i(n,{colorScheme:{background:"linear-gradient(45deg, #e736f4, #673ab7)",backgroundColor:"#e736f4",color:"white"},size:"md",children:o(r,{children:[i(d,{children:"Accordion Header"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem harum officiis`})})]})}),i("br",{}),i("h5",{children:"Large Accordion"}),i("br",{}),i(n,{size:"lg",children:o(r,{children:[i(d,{children:"Accordion Header"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem harum officiis`})})]})}),i(n,{theme:"secondary",size:"lg",children:o(r,{children:[i(d,{children:"Accordion Header"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem harum officiis`})})]})}),i(n,{theme:"light",size:"lg",children:o(r,{children:[i(d,{children:"Accordion Header"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem harum officiis`})})]})}),i(n,{theme:"dark",size:"lg",children:o(r,{children:[i(d,{children:"Accordion Header"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem harum officiis`})})]})}),i(n,{colorScheme:{background:"linear-gradient(45deg, #e736f4, #673ab7)",backgroundColor:"#e736f4",color:"white"},size:"lg",children:o(r,{children:[i(d,{children:"Accordion Header"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem harum officiis`})})]})}),i("br",{}),i("h5",{children:"Extra Large Accordion"}),i("br",{}),i(n,{size:"xl",children:o(r,{children:[i(d,{children:"Accordion Header"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem harum officiis`})})]})}),i(n,{theme:"secondary",size:"xl",children:o(r,{children:[i(d,{children:"Accordion Header"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem harum officiis`})})]})}),i(n,{theme:"light",size:"xl",children:o(r,{children:[i(d,{children:"Accordion Header"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem harum officiis`})})]})}),i(n,{theme:"dark",size:"xl",children:o(r,{children:[i(d,{children:"Accordion Header"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem harum officiis`})})]})}),i(n,{colorScheme:{background:"linear-gradient(45deg, #e736f4, #673ab7)",backgroundColor:"#e736f4",color:"white"},size:"xl",children:o(r,{children:[i(d,{children:"Accordion Header"}),i(c,{children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Aliquid debitis dolorem harum officiis`})})]})})]})]})}function L(l={}){const{wrapper:e}=l.components||{};return e?i(e,Object.assign({},l,{children:i(h,l)})):h(l)}export{L as default};
