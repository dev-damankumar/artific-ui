import{n as h,a as i,F as a,j as e,c as d}from"./index-c5414e4b.js";const u=c=>{const n=h();return n.config({dismissible:!0}),i(a,{children:[e(d,{onClick:()=>{n.success("Hi ! This is a message").hold()},children:"Success"}),e(d,{onClick:()=>{n.info("Hi ! This is a message").hold()},children:"Info"}),e(d,{onClick:()=>{n.error("Hi ! This is a message").hold()},children:"Danger"}),e(d,{onClick:()=>{n.warning("Hi ! This is a message").hold()},children:"Warning"})]})},p=c=>{const t=["xl","lg","md","sm","xs"].map((o,r)=>{const s=h();return s.config({size:o,dismissible:!0}),i("div",{children:[i(d,{onClick:()=>{s.success("Hi ! This is a message").hold()},children:["Message `",o,"`"]}),e("br",{})]},r)});return e(a,{children:t})},g=c=>{const t=["default","rounded","no-radius","pill"].map((o,r)=>{const s=h();return s.config({layout:o}),i("div",{children:[i(d,{onClick:()=>{s.success("Hi ! This is a message").hold()},children:["Layout `",o,"`"]}),e("br",{})]},r)});return e(a,{children:t})},f=c=>{const t=["primary","secondary","dark","light"].map((r,s)=>{const l=h();return l.config({theme:r,dismissible:!0}),i("div",{children:[i(d,{onClick:()=>{l.alert("Hi ! This is a message").hold()},children:["Theme `",r,"`"]}),e("br",{})]},s)}),o=h();return o.config({colorScheme:{background:"linear-gradient(45deg, #e736f4, #673ab7)",backgroundColor:"#e736f4",color:"white"},dismissible:!0}),i(a,{children:[t,e(d,{onClick:()=>{o.alert("Hi ! This is a message").hold()},children:"Custom Theme"})]})},b=c=>{const t=["default","outline","note"].map((o,r)=>{const s=h();return s.config({variant:o,dismissible:!0}),i("div",{children:[i(d,{onClick:()=>{s.success("Hi ! This is a message").hold()},children:["Variant `",o,"`"]}),e("br",{})]},r)});return e(a,{children:t})},y=c=>{const t=["success","info","error","warning"].map((o,r)=>{const s=h();return s.config({mode:"dark"}),i("div",{children:[i(d,{onClick:()=>{s[o]("Hi ! This is a message")},children:["Dark Mode for `",o,"`"]}),e("br",{})]},r)});return e(a,{children:t})},v=c=>{const t=["success","info","error","warning"].map((o,r)=>{const s=h();return s.config({duration:r+3}),i("div",{children:[i(d,{onClick:()=>{s[o]("Hi ! This is a message")},children:["Duration ",r+3,"s"]}),e("br",{})]},r)});return e(a,{children:t})},k=c=>{const t=["success","info","error","warning","alert"].map((o,r)=>{const s=h();return s.config({type:"notification",dismissible:!0}),i("div",{children:[i(d,{onClick:()=>{s[o]("Hi User! This is a notification message","Message From Artific").hold()},children:["Notification ",o.toUpperCase()]}),e("br",{})]},r)});return e(a,{children:t})},M=c=>{const t=["top","top-right","bottom-left","bottom","bottom-right","top-left"].map((o,r)=>{const s=h();return s.config({dismissible:!0,position:o}),i("div",{children:[i(d,{onClick:()=>{s.success("Hi ! This is a message").hold()},children:["Message ",o]}),e("br",{})]},r)});return e(a,{children:t})};function m(c){const n=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code"},c.components);return i(a,{children:[e(n.h1,{children:"Messages"}),`
`,e(n.p,{children:"The useMessage is like an message box that is only shown for a couple of seconds when something happens (i.e. when the user clicks on a button, submits a form, etc.)."}),`
`,e("div",{children:e("div",{name:"Default",children:u.bind({})})}),`
`,e(n.h2,{children:"API"}),`
`,e(n.pre,{children:e(n.code,{className:"language-jsx",children:`import { Message } from 'artific-ui'
`})}),`
`,i(n.p,{children:[e("b",{children:"useMessage()"})," instance has following methods to use:"]}),`
`,i(n.p,{children:[e(n.code,{children:"config()"})," to set the config and supported props to the loader."]}),`
`,i(n.p,{children:[e(n.code,{children:"(success|info|error|warning)()"})," method is used to show the message with their respective color schemes."]}),`
`,i(n.p,{children:[e(n.code,{children:"alert()"})," method is used to the message with the predefine library themes. ie. (",e(n.code,{children:"primary"}),",",e(n.code,{children:"secondary"}),",",e(n.code,{children:"dark"}),",",e(n.code,{children:"light"}),")"]}),`
`,i(n.p,{children:[e(n.code,{children:"hold()"})," chain the hold method to your message to make message no disappear after the specific time."]}),`
`,`
`,e(n.h1,{children:"Message Sizes"}),`
`,i(n.p,{children:["you can use a ",e(n.code,{children:"size"})," prop to define the size of your components"]}),`
`,i(n.p,{children:["Set ",e(n.code,{children:"size"})," prop in config with the value of (",e(n.code,{children:"xs"}),"|",e(n.code,{children:"sm"}),"|",e(n.code,{children:"md"}),"|",e(n.code,{children:"lg"}),",",e(n.code,{children:"xl"}),"). you can mix them with different supported ",e(n.code,{children:"theme"})," or ",e(n.code,{children:"layout"})]}),`
`,i(n.p,{children:["Note: Mostly all the components have the same size values ie.(",e(n.code,{children:"xs"}),"|",e(n.code,{children:"sm"}),"|",e(n.code,{children:"md"}),"|",e(n.code,{children:"lg"}),",",e(n.code,{children:"xl"}),"). but some of the components might have additional sizes."]}),`
`,e("div",{children:e("div",{name:"Message Sizes",children:p.bind({})})}),`
`,`
`,e(n.h1,{children:"Message Layouts"}),`
`,e(n.p,{children:"Message Has basic four layouts to choose from to define how you component's structure should look like."}),`
`,i(n.p,{children:["Set ",e(n.code,{children:"layout"})," prop with the value of (",e(n.code,{children:"default"}),"|",e(n.code,{children:"rounded"}),"|",e(n.code,{children:"no-radius"}),"|",e(n.code,{children:"pill"}),")"]}),`
`,i(n.p,{children:[e(n.code,{children:"Note:"})," Different components might have addition layouts based on there configuration and flexibility. you can check out the props table to see which layout is supported by the component"]}),`
`,e("div",{children:e("div",{name:"Message Layouts",children:g.bind({})})}),`
`,`
`,e(n.h1,{children:"Message Themes"}),`
`,i(n.p,{children:["If you want to use a different theme for ",e(n.code,{children:"Alert"})," use the ",e(n.code,{children:"theme"}),` prop to set the theme\r
Note: All components have basic four themes ie. (`,e(n.code,{children:"primary"}),"|",e(n.code,{children:"secondary"}),"|",e(n.code,{children:"dark"}),"|",e(n.code,{children:"light"}),"). you can use either of them."]}),`
`,i(n.p,{children:["You can also use ",e(n.code,{children:"colorScheme"})," prop to define a custom theme."]}),`
`,e("div",{children:e("div",{name:"Message Themes",children:f.bind({})})}),`
`,`
`,e(n.h1,{children:"Message Variants"}),`
`,i(n.p,{children:["Artific UI provides a ",e(n.code,{children:"variant"})," prop to make you choose how your component ui should look like"]}),`
`,i(n.p,{children:["Set ",e(n.code,{children:"variant"})," prop with the value of (",e(n.code,{children:"default"}),"|",e(n.code,{children:"note"}),"|",e(n.code,{children:"outline"}),"). you can mix them with different supported ",e(n.code,{children:"theme"})," or ",e(n.code,{children:"layout"})]}),`
`,e(n.p,{children:`Note: Different components might have addition or different variant based on there configuration and flexibility.\r
you can check out the props table to see which variant is supported by the component`}),`
`,e("div",{children:e("div",{name:"Message Variants",children:b.bind({})})}),`
`,`
`,e(n.h1,{children:"Dark Mode"}),`
`,i(n.p,{children:["To set the dark mode for your message use ",e(n.code,{children:"mode"})," prop and its value as ",e(n.code,{children:"dark"})]}),`
`,e("div",{children:e("div",{name:"Dark Mode",children:y.bind({})})}),`
`,`
`,e(n.h1,{children:"Message Duration"}),`
`,i(n.p,{children:[e(n.code,{children:"duration"})," prop is used to set after how much time message should disappare. value must be number referring to number of seconds."]}),`
`,i(n.p,{children:[e(n.code,{children:"Note:"})," if you are chaining ",e(n.code,{children:".hold()"})," to the instance message will not disappear as it is the intended behaviour."]}),`
`,e("div",{children:e("div",{name:"Message Duration",children:v.bind({})})}),`
`,`
`,e(n.h1,{children:"Notification Alert"}),`
`,e(n.p,{children:"Message can be used as different element called notification which has header and body acting as notification."}),`
`,i(n.p,{children:["set ",e(n.code,{children:"type"})," prop to ",e(n.code,{children:'"notification"'})," to make message as notification."]}),`
`,e("div",{children:e("div",{name:"Notification Alert",children:k.bind({})})}),`
`,`
`,e(n.h1,{children:"Message Positions"}),`
`,i(n.p,{children:[e(n.code,{children:"position"})," prop is used to define the position of message to be appear on the screen."]}),`
`,i(n.p,{children:["possible values are (",e(n.code,{children:"top"}),"| ",e(n.code,{children:"top-right"}),"| ",e(n.code,{children:"bottom-left"}),"| ",e(n.code,{children:"bottom"}),"| ",e(n.code,{children:"bottom-right"}),"| ",e(n.code,{children:"top-left"}),")"]}),`
`,e("div",{children:e("div",{name:"Message Positions",children:M.bind({})})})]})}function w(c={}){const{wrapper:n}=c.components||{};return n?e(n,Object.assign({},c,{children:e(m,c)})):m(c)}export{y as DarkModeTemplate,v as DurationTemplate,g as LayoutsTemplate,k as NotificationTemplate,M as PositionTemplate,p as SizeTemplate,u as Template,f as ThemesTemplate,b as VariantsTemplate,w as default};
