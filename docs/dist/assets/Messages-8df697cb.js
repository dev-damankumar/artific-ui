import{g as d,j as e,x as c}from"./index-f2287826.js";const l=r=>{const s=d();return s.config({dismissible:!0}),e.jsxs(e.Fragment,{children:[e.jsx(c,{onClick:()=>{s.success("Hi ! This is a message").hold()},children:"Success"}),e.jsx(c,{onClick:()=>{s.info("Hi ! This is a message").hold()},children:"Info"}),e.jsx(c,{onClick:()=>{s.error("Hi ! This is a message").hold()},children:"Danger"}),e.jsx(c,{onClick:()=>{s.warning("Hi ! This is a message").hold()},children:"Warning"})]})},m=r=>{const t=["xl","lg","md","sm","xs"].map((n,o)=>{const i=d();return i.config({size:n,dismissible:!0}),e.jsxs("div",{children:[e.jsxs(c,{onClick:()=>{i.success("Hi ! This is a message").hold()},children:["Message `",n,"`"]}),e.jsx("br",{})]},o)});return e.jsx(e.Fragment,{children:t})},x=r=>{const t=["default","rounded","no-radius","pill"].map((n,o)=>{const i=d();return i.config({layout:n}),e.jsxs("div",{children:[e.jsxs(c,{onClick:()=>{i.success("Hi ! This is a message").hold()},children:["Layout `",n,"`"]}),e.jsx("br",{})]},o)});return e.jsx(e.Fragment,{children:t})},j=r=>{const t=["primary","secondary","dark","light"].map((o,i)=>{const h=d();return h.config({theme:o,dismissible:!0}),e.jsxs("div",{children:[e.jsxs(c,{onClick:()=>{h.alert("Hi ! This is a message").hold()},children:["Theme `",o,"`"]}),e.jsx("br",{})]},i)}),n=d();return n.config({colorScheme:{background:"linear-gradient(45deg, #e736f4, #673ab7)",backgroundColor:"#e736f4",color:"white"},dismissible:!0}),e.jsxs(e.Fragment,{children:[t,e.jsx(c,{onClick:()=>{n.alert("Hi ! This is a message").hold()},children:"Custom Theme"})]})},u=r=>{const t=["default","outline","note"].map((n,o)=>{const i=d();return i.config({variant:n,dismissible:!0}),e.jsxs("div",{children:[e.jsxs(c,{onClick:()=>{i.success("Hi ! This is a message").hold()},children:["Variant `",n,"`"]}),e.jsx("br",{})]},o)});return e.jsx(e.Fragment,{children:t})},p=r=>{const t=["success","info","error","warning"].map((n,o)=>{const i=d();return i.config({mode:"dark"}),e.jsxs("div",{children:[e.jsxs(c,{onClick:()=>{i[n]("Hi ! This is a message")},children:["Dark Mode for `",n,"`"]}),e.jsx("br",{})]},o)});return e.jsx(e.Fragment,{children:t})},g=r=>{const t=["success","info","error","warning"].map((n,o)=>{const i=d();return i.config({duration:o+3}),e.jsxs("div",{children:[e.jsxs(c,{onClick:()=>{i[n]("Hi ! This is a message")},children:["Duration ",o+3,"s"]}),e.jsx("br",{})]},o)});return e.jsx(e.Fragment,{children:t})},f=r=>{const t=["success","info","error","warning","alert"].map((n,o)=>{const i=d();return i.config({type:"notification",dismissible:!0}),e.jsxs("div",{children:[e.jsxs(c,{onClick:()=>{i[n]("Hi User! This is a notification message","Message From Artific").hold()},children:["Notification ",n.toUpperCase()]}),e.jsx("br",{})]},o)});return e.jsx(e.Fragment,{children:t})},b=r=>{const t=["top","top-right","bottom-left","bottom","bottom-right","top-left"].map((n,o)=>{const i=d();return i.config({dismissible:!0,position:n}),e.jsxs("div",{children:[e.jsxs(c,{onClick:()=>{i.success("Hi ! This is a message").hold()},children:["Message ",n]}),e.jsx("br",{})]},o)});return e.jsx(e.Fragment,{children:t})};function a(r){const s=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code"},r.components);return e.jsxs(e.Fragment,{children:[e.jsx(s.h1,{children:"Messages"}),`
`,e.jsx(s.p,{children:"The useMessage is like an message box that is only shown for a couple of seconds when something happens (i.e. when the user clicks on a button, submits a form, etc.)."}),`
`,e.jsx("div",{children:e.jsx("div",{name:"Default",children:l.bind({})})}),`
`,e.jsx(s.h2,{children:"API"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-jsx",children:`import { Message } from 'artific-ui';
`})}),`
`,e.jsxs(s.p,{children:[e.jsx("b",{children:"useMessage()"})," instance has following methods to use:"]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"config()"})," to set the config and supported props to the loader."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"(success|info|error|warning)()"})," method is used to show the message with their respective color schemes."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"alert()"}),"  method is used to the message with the predefine library themes. ie. (",e.jsx(s.code,{children:"primary"}),",",e.jsx(s.code,{children:"secondary"}),",",e.jsx(s.code,{children:"dark"}),",",e.jsx(s.code,{children:"light"}),")"]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"hold()"})," chain the hold method to your message to make message no disappear after the specific time."]}),`
`,`
`,e.jsx(s.h1,{children:"Message Sizes"}),`
`,e.jsxs(s.p,{children:["you can use a ",e.jsx(s.code,{children:"size"})," prop to define the size of your components"]}),`
`,e.jsxs(s.p,{children:["Set ",e.jsx(s.code,{children:"size"})," prop in config with the value of (",e.jsx(s.code,{children:"xs"}),"|",e.jsx(s.code,{children:"sm"}),"|",e.jsx(s.code,{children:"md"}),"|",e.jsx(s.code,{children:"lg"}),",",e.jsx(s.code,{children:"xl"}),"). you can mix them with different supported ",e.jsx(s.code,{children:"theme"})," or ",e.jsx(s.code,{children:"layout"})]}),`
`,e.jsxs(s.p,{children:["Note: Mostly all the components have the same size values ie.(",e.jsx(s.code,{children:"xs"}),"|",e.jsx(s.code,{children:"sm"}),"|",e.jsx(s.code,{children:"md"}),"|",e.jsx(s.code,{children:"lg"}),",",e.jsx(s.code,{children:"xl"}),"). but some of the components might have additional sizes."]}),`
`,e.jsx("div",{children:e.jsx("div",{name:"Message Sizes",children:m.bind({})})}),`
`,`
`,e.jsx(s.h1,{children:"Message Layouts"}),`
`,e.jsx(s.p,{children:"Message Has basic four layouts to choose from to define how you component's structure should look like."}),`
`,e.jsxs(s.p,{children:["Set ",e.jsx(s.code,{children:"layout"})," prop with the value of (",e.jsx(s.code,{children:"default"}),"|",e.jsx(s.code,{children:"rounded"}),"|",e.jsx(s.code,{children:"no-radius"}),"|",e.jsx(s.code,{children:"pill"}),")"]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"Note:"})," Different components might have addition layouts based on there configuration and flexibility. you can check out the props table to see which layout is supported by the component"]}),`
`,e.jsx("div",{children:e.jsx("div",{name:"Message Layouts",children:x.bind({})})}),`
`,`
`,e.jsx(s.h1,{children:"Message Themes"}),`
`,e.jsxs(s.p,{children:["If you want to use a different theme for ",e.jsx(s.code,{children:"Alert"})," use the ",e.jsx(s.code,{children:"theme"}),` prop to set the theme\r
Note: All components have basic four themes ie. (`,e.jsx(s.code,{children:"primary"}),"|",e.jsx(s.code,{children:"secondary"}),"|",e.jsx(s.code,{children:"dark"}),"|",e.jsx(s.code,{children:"light"}),"). you can use either of them."]}),`
`,e.jsxs(s.p,{children:["You can also use ",e.jsx(s.code,{children:"colorScheme"})," prop to define a custom theme."]}),`
`,e.jsx("div",{children:e.jsx("div",{name:"Message Themes",children:j.bind({})})}),`
`,`
`,e.jsx(s.h1,{children:"Message Variants"}),`
`,e.jsxs(s.p,{children:["Artific UI provides a ",e.jsx(s.code,{children:"variant"})," prop to make you choose how your component ui should look like"]}),`
`,e.jsxs(s.p,{children:["Set ",e.jsx(s.code,{children:"variant"})," prop with the value of (",e.jsx(s.code,{children:"default"}),"|",e.jsx(s.code,{children:"note"}),"|",e.jsx(s.code,{children:"outline"}),"). you can mix them with different supported ",e.jsx(s.code,{children:"theme"})," or ",e.jsx(s.code,{children:"layout"})]}),`
`,e.jsx(s.p,{children:`Note: Different components might have addition or different variant based on there configuration and flexibility.\r
you can check out the props table to see which variant is supported by the component`}),`
`,e.jsx("div",{children:e.jsx("div",{name:"Message Variants",children:u.bind({})})}),`
`,`
`,e.jsx(s.h1,{children:"Dark Mode"}),`
`,e.jsxs(s.p,{children:["To set the dark mode for your message use ",e.jsx(s.code,{children:"mode"})," prop and its value as ",e.jsx(s.code,{children:"dark"})]}),`
`,e.jsx("div",{children:e.jsx("div",{name:"Dark Mode",children:p.bind({})})}),`
`,`
`,e.jsx(s.h1,{children:"Message Duration"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"duration"})," prop is used to set after how much time message should disappare. value must be number referring to number of seconds."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"Note:"})," if you are chaining ",e.jsx(s.code,{children:".hold()"})," to the instance message will not disappear as it is the intended behaviour."]}),`
`,e.jsx("div",{children:e.jsx("div",{name:"Message Duration",children:g.bind({})})}),`
`,`
`,e.jsx(s.h1,{children:"Notification Alert"}),`
`,e.jsx(s.p,{children:"Message can be used as different element called notification which has header and body acting as notification."}),`
`,e.jsxs(s.p,{children:["set ",e.jsx(s.code,{children:"type"})," prop to ",e.jsx(s.code,{children:'"notification"'})," to make message as notification."]}),`
`,e.jsx("div",{children:e.jsx("div",{name:"Notification Alert",children:f.bind({})})}),`
`,`
`,e.jsx(s.h1,{children:"Message Positions"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"position"})," prop is used to define the position of message to be appear on the screen."]}),`
`,e.jsxs(s.p,{children:["possible values are (",e.jsx(s.code,{children:"top"}),"| ",e.jsx(s.code,{children:"top-right"}),"| ",e.jsx(s.code,{children:"bottom-left"}),"| ",e.jsx(s.code,{children:"bottom"}),"| ",e.jsx(s.code,{children:"bottom-right"}),"| ",e.jsx(s.code,{children:"top-left"}),")"]}),`
`,e.jsx("div",{children:e.jsx("div",{name:"Message Positions",children:b.bind({})})})]})}function v(r={}){const{wrapper:s}=r.components||{};return s?e.jsx(s,Object.assign({},r,{children:e.jsx(a,r)})):a(r)}export{p as DarkModeTemplate,g as DurationTemplate,x as LayoutsTemplate,f as NotificationTemplate,b as PositionTemplate,m as SizeTemplate,l as Template,j as ThemesTemplate,u as VariantsTemplate,v as default};
