import { a as i, q as c, j as e, u as r, F as l } from './index-cab7d04f.js'
const t = d =>
    i(
        c,
        Object.assign({}, d, {
            children: [
                e(r, { children: 'Prev' }),
                e(r, { active: !0, children: '1' }),
                e(r, { children: '2' }),
                e(r, { children: '3' }),
                e(r, { children: 'Next' }),
            ],
        }),
    )
function h(d) {
    const n = Object.assign(
        { h1: 'h1', p: 'p', h2: 'h2', pre: 'pre', code: 'code' },
        d.components,
    )
    return i(l, {
        children: [
            e(n.h1, { children: 'Pagination' }),
            `
`,
            e(n.p, {
                children:
                    'The Pagination component enables the user to select a specific page from a range of pages.',
            }),
            `
`,
            `
`,
            e('div', {
                children: e('div', { name: 'Default', children: t.bind({}) }),
            }),
            `
`,
            e(n.h2, { children: 'API' }),
            `
`,
            e(n.pre, {
                children: e(n.code, {
                    className: 'language-jsx',
                    children: `import { Pagination } from 'artific-ui/Pagination';
`,
                }),
            }),
            `
`,
            e(n.h2, { children: 'Pagination Theme' }),
            `
`,
            i(n.p, {
                children: [
                    'If you want to use a different theme for ',
                    e(n.code, { children: 'Pagination' }),
                    ' use the ',
                    e(n.code, { children: 'theme' }),
                    ` prop to set the theme\r
Note: All components have basic four themes ie. (`,
                    e(n.code, { children: 'primary' }),
                    '|',
                    e(n.code, { children: 'secondary' }),
                    '|',
                    e(n.code, { children: 'dark' }),
                    '|',
                    e(n.code, { children: 'light' }),
                    '). you can use either of them.',
                ],
            }),
            `
`,
            i(n.p, {
                children: [
                    'You can also use ',
                    e(n.code, { children: 'colorScheme' }),
                    ' prop to define a custom theme.',
                ],
            }),
            `
`,
            e('div', {
                children: i('div', {
                    name: 'Pagination Theme',
                    children: [
                        i(c, {
                            theme: 'primary',
                            children: [
                                e(r, { children: 'Prev' }),
                                e(r, { active: !0, children: '1' }),
                                e(r, { children: '2' }),
                                e(r, { children: '3' }),
                                e(r, { children: 'Next' }),
                            ],
                        }),
                        e('br', {}),
                        e('br', {}),
                        i(c, {
                            theme: 'secondary',
                            children: [
                                e(r, { children: 'Prev' }),
                                e(r, { active: !0, children: '1' }),
                                e(r, { children: '2' }),
                                e(r, { children: '3' }),
                                e(r, { children: 'Next' }),
                            ],
                        }),
                        e('br', {}),
                        e('br', {}),
                        i(c, {
                            theme: 'dark',
                            children: [
                                e(r, { children: 'Prev' }),
                                e(r, { active: !0, children: '1' }),
                                e(r, { children: '2' }),
                                e(r, { children: '3' }),
                                e(r, { children: 'Next' }),
                            ],
                        }),
                        e('br', {}),
                        e('br', {}),
                        i(c, {
                            theme: 'light',
                            children: [
                                e(r, { children: 'Prev' }),
                                e(r, { active: !0, children: '1' }),
                                e(r, { children: '2' }),
                                e(r, { children: '3' }),
                                e(r, { children: 'Next' }),
                            ],
                        }),
                        e('br', {}),
                        e('br', {}),
                        i(c, {
                            colorScheme: {
                                background:
                                    'linear-gradient(45deg, #e736f4, #673ab7)',
                                backgroundColor: '#e736f4',
                                color: 'white',
                            },
                            children: [
                                e(r, { children: 'Prev' }),
                                e(r, { active: !0, children: '1' }),
                                e(r, { children: '2' }),
                                e(r, { children: '3' }),
                                e(r, { children: 'Next' }),
                            ],
                        }),
                    ],
                }),
            }),
            `
`,
            e(n.h2, { children: 'Pagination Layouts' }),
            `
`,
            e(n.p, {
                children:
                    "Pagination Has basic four layouts to choose from to define how you component's structure should look like.",
            }),
            `
`,
            i(n.p, {
                children: [
                    'Set ',
                    e(n.code, { children: 'layout' }),
                    ' prop with the value of (',
                    e(n.code, { children: 'default' }),
                    '|',
                    e(n.code, { children: 'rounded' }),
                    '|',
                    e(n.code, { children: 'no-radius' }),
                    '|',
                    e(n.code, { children: 'pill' }),
                    ')',
                ],
            }),
            `
`,
            i(n.p, {
                children: [
                    e(n.code, { children: 'Note:' }),
                    ' Different components might have addition layouts based on there configuration and flexibility. you can check out the props table to see which layout is supported by the component',
                ],
            }),
            `
`,
            e('div', {
                children: i('div', {
                    name: 'Pagination Layouts',
                    children: [
                        i(c, {
                            layout: 'default',
                            children: [
                                e(r, { children: 'Prev' }),
                                e(r, { active: !0, children: '1' }),
                                e(r, { children: '2' }),
                                e(r, { children: '3' }),
                                e(r, { children: 'Next' }),
                            ],
                        }),
                        e('br', {}),
                        e('br', {}),
                        i(c, {
                            layout: 'rounded',
                            children: [
                                e(r, { children: 'Prev' }),
                                e(r, { active: !0, children: '1' }),
                                e(r, { children: '2' }),
                                e(r, { children: '3' }),
                                e(r, { children: 'Next' }),
                            ],
                        }),
                        e('br', {}),
                        e('br', {}),
                        i(c, {
                            layout: 'pill',
                            children: [
                                e(r, { children: 'Prev' }),
                                e(r, { active: !0, children: '1' }),
                                e(r, { children: '2' }),
                                e(r, { children: '3' }),
                                e(r, { children: 'Next' }),
                            ],
                        }),
                        e('br', {}),
                        e('br', {}),
                        i(c, {
                            layout: 'no-radius',
                            children: [
                                e(r, { children: 'Prev' }),
                                e(r, { active: !0, children: '1' }),
                                e(r, { children: '2' }),
                                e(r, { children: '3' }),
                                e(r, { children: 'Next' }),
                            ],
                        }),
                    ],
                }),
            }),
            `
`,
            e(n.h2, { children: 'Pagination Variants' }),
            `
`,
            i(n.p, {
                children: [
                    'Artific UI provides a ',
                    e(n.code, { children: 'variant' }),
                    ' prop to make you choose how your component ui should look like',
                ],
            }),
            `
`,
            i(n.p, {
                children: [
                    'Set ',
                    e(n.code, { children: 'variant' }),
                    ' prop with the value of (',
                    e(n.code, { children: 'default' }),
                    '|',
                    e(n.code, { children: 'separate' }),
                    '|',
                    e(n.code, { children: 'breadcrumb' }),
                    '|',
                    e(n.code, { children: 'float' }),
                    '). you can mix them with different supported ',
                    e(n.code, { children: 'theme' }),
                    ' or ',
                    e(n.code, { children: 'layout' }),
                ],
            }),
            `
`,
            e(n.p, {
                children: `Note: Different components might have addition or different variant based on there configuration and flexibility.\r
you can check out the props table to see which variant is supported by the component`,
            }),
            `
`,
            e('div', {
                children: i('div', {
                    name: 'Pagination Variants',
                    children: [
                        i(c, {
                            variant: 'default',
                            children: [
                                e(r, { children: 'Prev' }),
                                e(r, { active: !0, children: '1' }),
                                e(r, { children: '2' }),
                                e(r, { children: '3' }),
                                e(r, { children: 'Next' }),
                            ],
                        }),
                        e('br', {}),
                        e('br', {}),
                        i(c, {
                            variant: 'separate',
                            children: [
                                e(r, { children: 'Prev' }),
                                e(r, { active: !0, children: '1' }),
                                e(r, { children: '2' }),
                                e(r, { children: '3' }),
                                e(r, { children: 'Next' }),
                            ],
                        }),
                        e('br', {}),
                        e('br', {}),
                        i(c, {
                            variant: 'breadcrumb',
                            children: [
                                e(r, { children: 'Photos' }),
                                e(r, { children: 'Summer 2017' }),
                                e(r, { children: 'Italy' }),
                                e(r, { children: 'Rome' }),
                            ],
                        }),
                        e('br', {}),
                        e('br', {}),
                        i(c, {
                            variant: 'float',
                            children: [
                                e(r, { children: 'Photos' }),
                                e(r, { children: 'Summer 2017' }),
                                e(r, { children: 'Italy' }),
                                e(r, { children: 'Rome' }),
                            ],
                        }),
                        e('br', {}),
                        e('br', {}),
                    ],
                }),
            }),
            `
`,
            e(n.h2, { children: 'Pagination Sizes' }),
            `
`,
            i(n.p, {
                children: [
                    'you can use a ',
                    e(n.code, { children: 'size' }),
                    ' prop to define the size of your components',
                ],
            }),
            `
`,
            i(n.p, {
                children: [
                    'Set ',
                    e(n.code, { children: 'size' }),
                    ' prop with the value of (',
                    e(n.code, { children: 'xs' }),
                    '|',
                    e(n.code, { children: 'sm' }),
                    '|',
                    e(n.code, { children: 'md' }),
                    '|',
                    e(n.code, { children: 'lg' }),
                    ',',
                    e(n.code, { children: 'xl' }),
                    '). you can mix them with different supported ',
                    e(n.code, { children: 'theme' }),
                    ' or ',
                    e(n.code, { children: 'layout' }),
                ],
            }),
            `
`,
            i(n.p, {
                children: [
                    'Note: Mostly all the components have the same size values ie.(',
                    e(n.code, { children: 'xs' }),
                    '|',
                    e(n.code, { children: 'sm' }),
                    '|',
                    e(n.code, { children: 'md' }),
                    '|',
                    e(n.code, { children: 'lg' }),
                    ',',
                    e(n.code, { children: 'xl' }),
                    '). but some of the components might have additional sizes.',
                ],
            }),
            `
`,
            e('div', {
                children: i('div', {
                    name: 'Pagination Sizes',
                    children: [
                        i(c, {
                            size: 'xs',
                            children: [
                                e(r, { children: 'Prev' }),
                                e(r, { active: !0, children: '1' }),
                                e(r, { children: '2' }),
                                e(r, { children: '3' }),
                                e(r, { children: 'Next' }),
                            ],
                        }),
                        e('br', {}),
                        e('br', {}),
                        i(c, {
                            size: 'sm',
                            children: [
                                e(r, { children: 'Prev' }),
                                e(r, { active: !0, children: '1' }),
                                e(r, { children: '2' }),
                                e(r, { children: '3' }),
                                e(r, { children: 'Next' }),
                            ],
                        }),
                        e('br', {}),
                        e('br', {}),
                        i(c, {
                            size: 'md',
                            children: [
                                e(r, { children: 'Prev' }),
                                e(r, { active: !0, children: '1' }),
                                e(r, { children: '2' }),
                                e(r, { children: '3' }),
                                e(r, { children: 'Next' }),
                            ],
                        }),
                        e('br', {}),
                        e('br', {}),
                        i(c, {
                            size: 'lg',
                            children: [
                                e(r, { children: 'Prev' }),
                                e(r, { active: !0, children: '1' }),
                                e(r, { children: '2' }),
                                e(r, { children: '3' }),
                                e(r, { children: 'Next' }),
                            ],
                        }),
                        e('br', {}),
                        e('br', {}),
                        i(c, {
                            size: 'xl',
                            children: [
                                e(r, { children: 'Prev' }),
                                e(r, { active: !0, children: '1' }),
                                e(r, { children: '2' }),
                                e(r, { children: '3' }),
                                e(r, { children: 'Next' }),
                            ],
                        }),
                        e('br', {}),
                        e('br', {}),
                    ],
                }),
            }),
        ],
    })
}
function a(d = {}) {
    const { wrapper: n } = d.components || {}
    return n ? e(n, Object.assign({}, d, { children: e(h, d) })) : h(d)
}
export { a as default, t as defaultTemplate }
