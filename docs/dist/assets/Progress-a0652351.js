import { j as e, Y as c, v as i, a as n, F as d } from './index-cab7d04f.js'
const a = l =>
    e(c, {
        theme: {
            secondary1: { main: '#F4D35E', text: 'white' },
            primary: { main: '#DA4167', text: 'white' },
            light: { main: '#fffce6', text: '#000' },
            dark: { main: '#173658', text: 'white' },
        },
        children: e(i, Object.assign({ theme: 'secondary1', value: 50 }, l)),
    })
function o(l) {
    const r = Object.assign(
        { h1: 'h1', p: 'p', code: 'code', h2: 'h2', pre: 'pre' },
        l.components,
    )
    return n(d, {
        children: [
            e(r.h1, { children: 'Progress' }),
            `
`,
            e(r.p, {
                children:
                    'Progress indicators commonly known as spinners, express an unspecified wait time or display the length of a process.',
            }),
            `
`,
            n(r.p, {
                children: [
                    'use ',
                    e(r.code, { children: 'value' }),
                    ' | ',
                    e(r.code, { children: 'values' }),
                    ' props to set how much progress is done.',
                ],
            }),
            `
`,
            `
`,
            e('div', {
                children: e('div', { name: 'Default', children: a.bind({}) }),
            }),
            `
`,
            e(r.h2, { children: 'API' }),
            `
`,
            e(r.pre, {
                children: e(r.code, {
                    className: 'language-jsx',
                    children: `import { Progress } from 'artific-ui/Progress';
`,
                }),
            }),
            `
`,
            e(r.h2, { children: 'Progress Theme' }),
            `
`,
            n(r.p, {
                children: [
                    'If you want to use a different theme for ',
                    e(r.code, { children: 'Progress' }),
                    ' use the ',
                    e(r.code, { children: 'theme' }),
                    ` prop to set the theme\r
Note: All components have basic four themes ie. (`,
                    e(r.code, { children: 'primary' }),
                    '|',
                    e(r.code, { children: 'secondary' }),
                    '|',
                    e(r.code, { children: 'dark' }),
                    '|',
                    e(r.code, { children: 'light' }),
                    '). you can use either of them.',
                ],
            }),
            `
`,
            n(r.p, {
                children: [
                    'You can also use ',
                    e(r.code, { children: 'colorScheme' }),
                    ' prop to define a custom theme.',
                ],
            }),
            `
`,
            e('div', {
                children: n('div', {
                    name: 'Progress Theme',
                    children: [
                        e(i, { theme: 'primary', value: 50 }),
                        e(i, { theme: 'secondary', value: 50 }),
                        e(i, { theme: 'light', value: 50 }),
                        e(i, { theme: 'dark', value: 50 }),
                        e(i, {
                            value: 50,
                            colorScheme: {
                                background:
                                    'linear-gradient(45deg, #e736f4, #673ab7)',
                                backgroundColor: '#e736f4',
                                color: 'white',
                            },
                        }),
                    ],
                }),
            }),
            `
`,
            e(r.h2, { children: 'Label Inside Progress' }),
            `
`,
            n(r.p, {
                children: [
                    'Use ',
                    e(r.code, { children: 'label' }),
                    ' props on ',
                    e(r.code, { children: 'Progress' }),
                    ' and value as ',
                    e(r.code, { children: '"inside"' }),
                    ' to make label inside the bar.',
                ],
            }),
            `
`,
            e('div', {
                children: e('div', {
                    name: 'Label Inside Progress',
                    children: e(i, {
                        label: 'inside',
                        theme: 'secondary',
                        value: 50,
                    }),
                }),
            }),
            `
`,
            e(r.h2, { children: 'Multiple Progress' }),
            `
`,
            n(r.p, {
                children: [
                    'Use ',
                    e(r.code, { children: 'values' }),
                    ' props to progres bar as number array ie.(number[]) if you want multiple progress bar.',
                ],
            }),
            `
`,
            n(r.p, {
                children: [
                    'Use ',
                    e(r.code, { children: 'barColors' }),
                    ' props to define the color of progress bar. make sure colors passed in array are respective to the values. if no color is provides it will use default color for each bar.',
                ],
            }),
            `
`,
            e('div', {
                children: e('div', {
                    name: 'Multiple Progress',
                    children: e(i, {
                        theme: 'primary',
                        barColors: ['red', 'blue', 'green'],
                        values: [50, 20, 10],
                    }),
                }),
            }),
            `
`,
            e(r.h2, { children: 'Progress Types' }),
            `
`,
            n(r.p, {
                children: [
                    'You can also define the type progress bar  by providing ',
                    e(r.code, { children: 'type' }),
                    ' prop.',
                ],
            }),
            `
`,
            n(r.p, {
                children: [
                    'Possible values for ',
                    e(r.code, { children: 'type' }),
                    ' prop are (',
                    e(r.code, { children: 'default' }),
                    '|',
                    e(r.code, { children: 'circular' }),
                    '|',
                    e(r.code, { children: 'line' }),
                    ')',
                ],
            }),
            `
`,
            e('div', {
                children: n('div', {
                    name: 'Progress Types',
                    children: [
                        e(i, { value: 80, type: 'default', theme: 'primary' }),
                        e(i, { value: 80, type: 'circular', theme: 'primary' }),
                        e(i, { value: 80, type: 'line', theme: 'primary' }),
                    ],
                }),
            }),
            `
`,
            e(r.h2, { children: 'Progress Sizes' }),
            `
`,
            n(r.p, {
                children: [
                    'you can use a ',
                    e(r.code, { children: 'size' }),
                    ' prop to define the size of your components',
                ],
            }),
            `
`,
            n(r.p, {
                children: [
                    'Set ',
                    e(r.code, { children: 'size' }),
                    ' prop with the value of (',
                    e(r.code, { children: 'xs' }),
                    '|',
                    e(r.code, { children: 'sm' }),
                    '|',
                    e(r.code, { children: 'md' }),
                    '|',
                    e(r.code, { children: 'lg' }),
                    ',',
                    e(r.code, { children: 'xl' }),
                    '). you can mix them with different supported ',
                    e(r.code, { children: 'theme' }),
                    ' or ',
                    e(r.code, { children: 'layout' }),
                ],
            }),
            `
`,
            n(r.p, {
                children: [
                    'Note: Mostly all the components have the same size values ie.(',
                    e(r.code, { children: 'xs' }),
                    '|',
                    e(r.code, { children: 'sm' }),
                    '|',
                    e(r.code, { children: 'md' }),
                    '|',
                    e(r.code, { children: 'lg' }),
                    ',',
                    e(r.code, { children: 'xl' }),
                    '). but some of the components might have additional sizes.',
                ],
            }),
            `
`,
            e('div', {
                children: n('div', {
                    name: 'Progress Sizes',
                    children: [
                        e(i, { size: 'xl', value: 80 }),
                        e(i, { size: 'lg', value: 80 }),
                        e(i, { value: 80 }),
                        e(i, { size: 'sm', value: 80 }),
                        e(i, { size: 'xs', value: 80 }),
                        e('br', {}),
                        e('br', {}),
                        e('h5', { children: 'Circular Progress Size' }),
                        e(i, { size: 'xl', value: 80, type: 'circular' }),
                        e(i, { size: 'lg', value: 80, type: 'circular' }),
                        e(i, { value: 80, type: 'circular' }),
                        e(i, { size: 'sm', value: 80, type: 'circular' }),
                        e(i, { size: 'xs', value: 80, type: 'circular' }),
                    ],
                }),
            }),
            `
`,
            e(r.h2, { children: 'Progress Layouts' }),
            `
`,
            e(r.p, {
                children:
                    "Progress Has basic four layouts to choose from to define how you component's structure should look like.",
            }),
            `
`,
            n(r.p, {
                children: [
                    'Set ',
                    e(r.code, { children: 'layout' }),
                    ' prop with the value of (',
                    e(r.code, { children: 'default' }),
                    '|',
                    e(r.code, { children: 'rounded' }),
                    '|',
                    e(r.code, { children: 'no-radius' }),
                    '|',
                    e(r.code, { children: 'pill' }),
                    '|',
                    e(r.code, { children: 'line' }),
                    ')',
                ],
            }),
            `
`,
            n(r.p, {
                children: [
                    e(r.code, { children: 'Note:' }),
                    ' circular progress bar only has (',
                    e(r.code, { children: 'default' }),
                    '|',
                    e(r.code, { children: 'line' }),
                    ') layouts',
                ],
            }),
            `
`,
            e('div', {
                children: n('div', {
                    name: 'Progress Layouts',
                    children: [
                        e(i, { layout: 'default', value: 80 }),
                        e(i, { layout: 'rounded', value: 80 }),
                        e(i, { layout: 'no-radius', value: 80 }),
                        e(i, { layout: 'pill', value: 80 }),
                        e(i, { layout: 'line', value: 80 }),
                        e('br', {}),
                        e('br', {}),
                        e('h5', { children: 'Circular Progress Layouts' }),
                        e(i, {
                            type: 'circular',
                            layout: 'default',
                            value: 80,
                        }),
                        e(i, { type: 'circular', layout: 'line', value: 80 }),
                    ],
                }),
            }),
            `
`,
            e(r.h2, { children: 'Progress Variants' }),
            `
`,
            n(r.p, {
                children: [
                    'Artific UI provides a ',
                    e(r.code, { children: 'variant' }),
                    ' prop to make you choose how your component ui should look like',
                ],
            }),
            `
`,
            n(r.p, {
                children: [
                    'Set ',
                    e(r.code, { children: 'variant' }),
                    ' prop with the value of (',
                    e(r.code, { children: 'default' }),
                    '|',
                    e(r.code, { children: 'fluid' }),
                    '|',
                    e(r.code, { children: 'striped' }),
                    '|',
                    e(r.code, { children: 'outline' }),
                    '). you can mix them with different supported ',
                    e(r.code, { children: 'theme' }),
                    ' or ',
                    e(r.code, { children: 'layout' }),
                ],
            }),
            `
`,
            e(r.p, {
                children: `Note: Different components might have addition or different variant based on there configuration and flexibility.\r
you can check out the props table to see which variant is supported by the component`,
            }),
            `
`,
            e('div', {
                children: n('div', {
                    name: 'Progress Variants',
                    children: [
                        e(i, { variant: 'default', value: 80 }),
                        e(i, { variant: 'fluid', value: 80 }),
                        e(i, { variant: 'striped', value: 80 }),
                        e(i, { variant: 'outline', value: 80 }),
                        e('br', {}),
                        e('br', {}),
                        e('h5', { children: 'Circular Progress Variants' }),
                        e(i, {
                            type: 'circular',
                            variant: 'default',
                            value: 80,
                        }),
                        e(i, { type: 'circular', variant: 'fluid', value: 80 }),
                        e(i, {
                            type: 'circular',
                            variant: 'striped',
                            value: 80,
                        }),
                        e(i, {
                            type: 'circular',
                            variant: 'outline',
                            value: 80,
                        }),
                    ],
                }),
            }),
        ],
    })
}
function s(l = {}) {
    const { wrapper: r } = l.components || {}
    return r ? e(r, Object.assign({}, l, { children: e(o, l) })) : o(l)
}
export { s as default, a as defaultTemplate }
