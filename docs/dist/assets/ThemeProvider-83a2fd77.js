import{j as e,x as t,Y as s}from"./index-f2287826.js";const c=n=>{const r={secondary:{main:"#F4D35E",text:"white"},primary:{main:"#DA4167",text:"white"},light:{main:"#fffce6",text:"#000"},dark:{main:"#173658",text:"white"}};return e.jsxs(e.Fragment,{children:[e.jsx("h5",{children:"Default Theme"}),e.jsx(t,Object.assign({theme:"primary"},n,{children:"Primary"})),e.jsx(t,Object.assign({theme:"secondary"},n,{children:"Secondary"})),e.jsx(t,Object.assign({theme:"dark"},n,{children:"Dark"})),e.jsx(t,Object.assign({theme:"light"},n,{children:"Light"})),e.jsx("br",{}),e.jsx("br",{}),e.jsx("h5",{children:"Custom Theme"}),e.jsxs(s,{theme:r,children:[e.jsx(t,Object.assign({theme:"primary"},n,{children:"Primary"})),e.jsx(t,Object.assign({theme:"secondary"},n,{children:"Secondary"})),e.jsx(t,Object.assign({theme:"dark"},n,{children:"Dark"})),e.jsx(t,Object.assign({theme:"light"},n,{children:"Light"}))]})]})};function i(n){const r=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code"},n.components),{Source:o}=r;return o||d("Source",!0),e.jsxs(e.Fragment,{children:[e.jsx(r.h1,{children:"ThemeProvider"}),`
`,e.jsx(r.p,{children:"ThemeProvider allow users to define their own theming for the components globally."}),`
`,`
`,e.jsx("div",{children:e.jsx("div",{name:"Default",children:c.bind({})})}),`
`,e.jsx(r.h2,{children:"API"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-jsx",children:`import { ThemeProvider } from 'artific-ui/ThemeProvider';
`})}),`
`,e.jsx(r.h2,{children:"Basics"}),`
`,e.jsxs(r.p,{children:["If you want to use a custom theme for entire library use ",e.jsx(r.code,{children:"ThemeProvider"})," and wrap it around your ",e.jsx(r.code,{children:"app.js"})," or root component."]}),`
`,e.jsxs(r.p,{children:["Provide theme object where each property donates the main themes ie. (",e.jsx(r.code,{children:"primary"}),"|",e.jsx(r.code,{children:"secondary"}),"|",e.jsx(r.code,{children:"dark"}),"|",e.jsx(r.code,{children:"light"}),");"]}),`
`,e.jsxs(r.p,{children:["Each Theme is a object with two properties (",e.jsx(r.code,{children:"main"}),",",e.jsx(r.code,{children:"text"}),")"]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"main"})," prop value can either be string defining color or can be object defining two properties ",e.jsx(r.code,{children:"background"})," and ",e.jsx(r.code,{children:"backgroundColor"}),"."]}),`
`,e.jsxs(r.p,{children:[`The main purpose of this is to let you use gradients without disrupting the styling so when you provide object to the main property.\r
`,e.jsx(r.code,{children:"background"})," with be your gradient color or image (this prop is similar to css background property) and ",e.jsx(r.code,{children:"backgroundColor"})," will be your simple color"]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"text"})," props value is a string that will be your text color"]}),`
`,e.jsx(r.h2,{children:"Theme Provider For Message API"}),`
`,e.jsx("b",{children:"Note:"}),`
`,e.jsxs(r.p,{children:["In order to apply your custom theme to the ",e.jsx(r.code,{children:"useMessage"})," api, you can add a ",e.jsx(r.code,{children:"themProvider"}),` property as second argument to the useMessage()\r
constructor. the main difference is `,e.jsx(r.code,{children:"themeProvider"})," will be an object containing the ",e.jsx(r.code,{children:"theme"})," property. see  below example"]}),`
`,e.jsx(o,{language:"js",dark:!0,format:!0,code:`const message=useMessage(null,{
	 	theme:{
	 		primary: {
	 		main: {
	 			background: linear-gradient(to right, #43cea2, #185a9d);
	 			backgroundColor:'red';
	 		},
	 		text: 'white'
	 	},
	 	secondary: {
	 		main: '#F4D35E',
	 		text: 'white',
	 	},
	 	light: {
	 		main: '#fffce6',
	 		text: '#000'
	 	},
	 	dark: {
	 		main: '#173658',
	 		text: 'white'
	 	}
	 	}
	 })`}),`
`,e.jsx(r.h2,{children:"Defining your own theme"}),`
`,e.jsxs(r.p,{children:["You can also add your own theme in the similar way and then use the property name of that theme in ",e.jsx(r.code,{children:"theme"})," props value."]}),`
`,e.jsx(o,{language:"js",dark:!0,format:!0,code:`<ThemeProvider theme={{
	 		myCustomTheme: {
	 			main: {
	 				background: linear-gradient(to right, #43cea2, #185a9d);
	 				backgroundColor:'red';
	 			},
	 			text: 'white'
	 		}
	 	}}>
	 	<Button theme="myCustomTheme">My Button</Button>
</ThemeProvider>`})]})}function a(n={}){const{wrapper:r}=n.components||{};return r?e.jsx(r,Object.assign({},n,{children:e.jsx(i,n)})):i(n)}function d(n,r){throw new Error("Expected "+(r?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default,c as defaultTemplate};
