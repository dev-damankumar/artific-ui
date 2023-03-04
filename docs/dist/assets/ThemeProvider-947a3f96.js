import { a as t, F as d, j as e, x as o, Y as h } from './index-cab7d04f.js'
const a = n => {
    const r = {
        secondary: { main: '#F4D35E', text: 'white' },
        primary: { main: '#DA4167', text: 'white' },
        light: { main: '#fffce6', text: '#000' },
        dark: { main: '#173658', text: 'white' },
    }
    return t(d, {
        children: [
            e('h5', { children: 'Default Theme' }),
            e(
                o,
                Object.assign({ theme: 'primary' }, n, { children: 'Primary' }),
            ),
            e(
                o,
                Object.assign({ theme: 'secondary' }, n, {
                    children: 'Secondary',
                }),
            ),
            e(o, Object.assign({ theme: 'dark' }, n, { children: 'Dark' })),
            e(o, Object.assign({ theme: 'light' }, n, { children: 'Light' })),
            e('br', {}),
            e('br', {}),
            e('h5', { children: 'Custom Theme' }),
            t(h, {
                theme: r,
                children: [
                    e(
                        o,
                        Object.assign({ theme: 'primary' }, n, {
                            children: 'Primary',
                        }),
                    ),
                    e(
                        o,
                        Object.assign({ theme: 'secondary' }, n, {
                            children: 'Secondary',
                        }),
                    ),
                    e(
                        o,
                        Object.assign({ theme: 'dark' }, n, {
                            children: 'Dark',
                        }),
                    ),
                    e(
                        o,
                        Object.assign({ theme: 'light' }, n, {
                            children: 'Light',
                        }),
                    ),
                ],
            }),
        ],
    })
}
function c(n) {
    const r = Object.assign(
            { h1: 'h1', p: 'p', h2: 'h2', pre: 'pre', code: 'code' },
            n.components,
        ),
        { Source: i } = r
    return (
        i || l('Source', !0),
        t(d, {
            children: [
                e(r.h1, { children: 'ThemeProvider' }),
                `
`,
                e(r.p, {
                    children:
                        'ThemeProvider allow users to define their own theming for the components globally.',
                }),
                `
`,
                `
`,
                e('div', {
                    children: e('div', {
                        name: 'Default',
                        children: a.bind({}),
                    }),
                }),
                `
`,
                e(r.h2, { children: 'API' }),
                `
`,
                e(r.pre, {
                    children: e(r.code, {
                        className: 'language-jsx',
                        children: `import { ThemeProvider } from 'artific-ui/ThemeProvider';
`,
                    }),
                }),
                `
`,
                e(r.h2, { children: 'Basics' }),
                `
`,
                t(r.p, {
                    children: [
                        'If you want to use a custom theme for entire library use ',
                        e(r.code, { children: 'ThemeProvider' }),
                        ' and wrap it around your ',
                        e(r.code, { children: 'app.js' }),
                        ' or root component.',
                    ],
                }),
                `
`,
                t(r.p, {
                    children: [
                        'Provide theme object where each property donates the main themes ie. (',
                        e(r.code, { children: 'primary' }),
                        '|',
                        e(r.code, { children: 'secondary' }),
                        '|',
                        e(r.code, { children: 'dark' }),
                        '|',
                        e(r.code, { children: 'light' }),
                        ');',
                    ],
                }),
                `
`,
                t(r.p, {
                    children: [
                        'Each Theme is a object with two properties (',
                        e(r.code, { children: 'main' }),
                        ',',
                        e(r.code, { children: 'text' }),
                        ')',
                    ],
                }),
                `
`,
                t(r.p, {
                    children: [
                        e(r.code, { children: 'main' }),
                        ' prop value can either be string defining color or can be object defining two properties ',
                        e(r.code, { children: 'background' }),
                        ' and ',
                        e(r.code, { children: 'backgroundColor' }),
                        '.',
                    ],
                }),
                `
`,
                t(r.p, {
                    children: [
                        `The main purpose of this is to let you use gradients without disrupting the styling so when you provide object to the main property.\r
`,
                        e(r.code, { children: 'background' }),
                        ' with be your gradient color or image (this prop is similar to css background property) and ',
                        e(r.code, { children: 'backgroundColor' }),
                        ' will be your simple color',
                    ],
                }),
                `
`,
                t(r.p, {
                    children: [
                        e(r.code, { children: 'text' }),
                        ' props value is a string that will be your text color',
                    ],
                }),
                `
`,
                e(r.h2, { children: 'Theme Provider For Message API' }),
                `
`,
                e('b', { children: 'Note:' }),
                `
`,
                t(r.p, {
                    children: [
                        'In order to apply your custom theme to the ',
                        e(r.code, { children: 'useMessage' }),
                        ' api, you can add a ',
                        e(r.code, { children: 'themProvider' }),
                        ` property as second argument to the useMessage()\r
constructor. the main difference is `,
                        e(r.code, { children: 'themeProvider' }),
                        ' will be an object containing the ',
                        e(r.code, { children: 'theme' }),
                        ' property. see  below example',
                    ],
                }),
                `
`,
                e(i, {
                    language: 'js',
                    dark: !0,
                    format: !0,
                    code: `const message=useMessage(null,{
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
	 })`,
                }),
                `
`,
                e(r.h2, { children: 'Defining your own theme' }),
                `
`,
                t(r.p, {
                    children: [
                        'You can also add your own theme in the similar way and then use the property name of that theme in ',
                        e(r.code, { children: 'theme' }),
                        ' props value.',
                    ],
                }),
                `
`,
                e(i, {
                    language: 'js',
                    dark: !0,
                    format: !0,
                    code: `<ThemeProvider theme={{
	 		myCustomTheme: {
	 			main: {
	 				background: linear-gradient(to right, #43cea2, #185a9d);
	 				backgroundColor:'red';
	 			},
	 			text: 'white'
	 		}
	 	}}>
	 	<Button theme="myCustomTheme">My Button</Button>
</ThemeProvider>`,
                }),
            ],
        })
    )
}
function m(n = {}) {
    const { wrapper: r } = n.components || {}
    return r ? e(r, Object.assign({}, n, { children: e(c, n) })) : c(n)
}
function l(n, r) {
    throw new Error(
        'Expected ' +
            (r ? 'component' : 'object') +
            ' `' +
            n +
            '` to be defined: you likely forgot to import, pass, or provide it.',
    )
}
export { m as default, a as defaultTemplate }
