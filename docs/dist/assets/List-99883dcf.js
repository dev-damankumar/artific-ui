import { a as o, J as d, j as e, Z as i, F as n } from './index-cab7d04f.js'
const m = t =>
    o(
        d,
        Object.assign({}, t, {
            children: [
                e(i, { children: 'Lorem ipsum dolor sit amet.' }),
                e(i, { children: 'Lorem ipsum dolor sit amet.' }),
                e(i, { children: 'Lorem ipsum dolor sit amet.' }),
                e(i, { children: 'Lorem ipsum dolor sit amet.' }),
            ],
        }),
    )
function l(t) {
    const r = Object.assign(
        { h2: 'h2', p: 'p', pre: 'pre', code: 'code', i: 'i' },
        t.components,
    )
    return o(n, {
        children: [
            e(r.h2, { children: 'Lists' }),
            `
`,
            e(r.p, {
                children:
                    'Lists are a continuous group of text or images. They are composed of items containing primary and supplemental actions, which are represented by icons and text.',
            }),
            `
`,
            `
`,
            e('div', {
                children: e('div', { name: 'Default', children: m.bind({}) }),
            }),
            `
`,
            e(r.h2, { children: 'API' }),
            `
`,
            e(r.pre, {
                children: e(r.code, {
                    className: 'language-jsx',
                    children: `import { List } from 'artific-ui/List';
`,
                }),
            }),
            `
`,
            e(r.h2, { children: 'List Themes' }),
            `
`,
            o(r.p, {
                children: [
                    'If you want to use a different theme for ',
                    e(r.code, { children: 'Alert' }),
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
            o(r.p, {
                children: [
                    'You can also use ',
                    e(r.code, { children: 'colorScheme' }),
                    ' prop to define a custom theme.',
                ],
            }),
            `
`,
            e('div', {
                children: o('div', {
                    name: 'List Themes',
                    children: [
                        o(d, {
                            children: [
                                e(i, {
                                    children: 'Lorem ipsum dolor sit amet.',
                                }),
                                e(i, {
                                    children: 'Lorem ipsum dolor sit amet.',
                                }),
                                e(i, {
                                    children: 'Lorem ipsum dolor sit amet.',
                                }),
                                e(i, {
                                    children: 'Lorem ipsum dolor sit amet.',
                                }),
                            ],
                        }),
                        e('br', {}),
                        e('br', {}),
                        o(d, {
                            theme: 'secondary',
                            children: [
                                e(i, {
                                    children: 'Lorem ipsum dolor sit amet.',
                                }),
                                e(i, {
                                    children: 'Lorem ipsum dolor sit amet.',
                                }),
                                e(i, {
                                    children: 'Lorem ipsum dolor sit amet.',
                                }),
                                e(i, {
                                    children: 'Lorem ipsum dolor sit amet.',
                                }),
                            ],
                        }),
                        e('br', {}),
                        e('br', {}),
                        o(d, {
                            theme: 'dark',
                            children: [
                                e(i, {
                                    children: 'Lorem ipsum dolor sit amet.',
                                }),
                                e(i, {
                                    children: 'Lorem ipsum dolor sit amet.',
                                }),
                                e(i, {
                                    children: 'Lorem ipsum dolor sit amet.',
                                }),
                                e(i, {
                                    children: 'Lorem ipsum dolor sit amet.',
                                }),
                            ],
                        }),
                        e('br', {}),
                        e('br', {}),
                        o(d, {
                            theme: 'light',
                            children: [
                                e(i, {
                                    children: 'Lorem ipsum dolor sit amet.',
                                }),
                                e(i, {
                                    children: 'Lorem ipsum dolor sit amet.',
                                }),
                                e(i, {
                                    children: 'Lorem ipsum dolor sit amet.',
                                }),
                                e(i, {
                                    children: 'Lorem ipsum dolor sit amet.',
                                }),
                            ],
                        }),
                        e('br', {}),
                        e('br', {}),
                        o(d, {
                            theme: 'primary',
                            colorScheme: {
                                background:
                                    'linear-gradient(45deg, #e736f4, #673ab7)',
                                backgroundColor: '#e736f4',
                                color: 'white',
                            },
                            children: [
                                e(i, {
                                    children: 'Lorem ipsum dolor sit amet.',
                                }),
                                e(i, {
                                    children: 'Lorem ipsum dolor sit amet.',
                                }),
                                e(i, {
                                    children: 'Lorem ipsum dolor sit amet.',
                                }),
                                e(i, {
                                    children: 'Lorem ipsum dolor sit amet.',
                                }),
                            ],
                        }),
                        e('br', {}),
                        e('br', {}),
                    ],
                }),
            }),
            `
`,
            e(r.h2, { children: 'Basic List With Icons' }),
            `
`,
            o(r.p, {
                children: [
                    'Use ',
                    e(r.code, { children: 'prefix' }),
                    ' or ',
                    e(r.code, { children: 'suffix' }),
                    ' to add a icon to your list at the start or end respectively.',
                ],
            }),
            `
`,
            e('div', {
                children: o('div', {
                    name: 'Basic List With Icons',
                    children: [
                        o(d, {
                            variant: 'expanded',
                            theme: 'light',
                            children: [
                                e(i, {
                                    prefix: e(r.i, {
                                        className: 'bx bx-expand-vertical',
                                    }),
                                    children: 'Lorem ipsum dolor sit amet.',
                                }),
                                e(i, {
                                    suffix: e(r.i, {
                                        className: 'bx bx-expand-vertical',
                                    }),
                                    children: 'Lorem ipsum dolor sit amet.',
                                }),
                            ],
                        }),
                        e('br', {}),
                        e('br', {}),
                    ],
                }),
            }),
            `
`,
            e(r.h2, { children: 'Disabled List Item' }),
            `
`,
            o(r.p, {
                children: [
                    'Use ',
                    e(r.code, { children: 'disabled' }),
                    ' prop to disable a list',
                ],
            }),
            `
`,
            e('div', {
                children: o('div', {
                    name: 'Disabled List Item',
                    children: [
                        o(d, {
                            variant: 'expanded',
                            theme: 'light',
                            children: [
                                e(i, {
                                    disabled: !0,
                                    children: 'Lorem ipsum dolor sit amet.',
                                }),
                                e(i, {
                                    children: 'Lorem ipsum dolor sit amet.',
                                }),
                            ],
                        }),
                        e('br', {}),
                        e('br', {}),
                    ],
                }),
            }),
            `
`,
            e(r.h2, { children: 'List Layouts' }),
            `
`,
            e(r.p, {
                children:
                    "List Has basic four layouts to choose from to define how you component's structure should look like.",
            }),
            `
`,
            o(r.p, {
                children: [
                    'Set ',
                    e(r.code, { children: 'layout' }),
                    ' prop with the value of (',
                    e(r.code, { children: 'default' }),
                    '|',
                    e(r.code, { children: 'rounded' }),
                    '|',
                    e(r.code, { children: 'no-radius' }),
                    ')',
                ],
            }),
            `
`,
            o(r.p, {
                children: [
                    e(r.code, { children: 'Note:' }),
                    ' Different components might have addition layouts based on there configuration and flexibility. you can check out the props table to see which layout is supported by the component',
                ],
            }),
            `
`,
            e('div', {
                children: o('div', {
                    name: 'List Layouts',
                    children: [
                        o(d, {
                            layout: 'default',
                            theme: 'light',
                            children: [
                                e(i, {
                                    children: 'Lorem ipsum dolor sit amet.',
                                }),
                                e(i, {
                                    children: 'Lorem ipsum dolor sit amet.',
                                }),
                                e(i, {
                                    children: 'Lorem ipsum dolor sit amet.',
                                }),
                                e(i, {
                                    children: 'Lorem ipsum dolor sit amet.',
                                }),
                            ],
                        }),
                        e('br', {}),
                        e('br', {}),
                        o(d, {
                            layout: 'rounded',
                            theme: 'light',
                            children: [
                                e(i, {
                                    children: 'Lorem ipsum dolor sit amet.',
                                }),
                                e(i, {
                                    children: 'Lorem ipsum dolor sit amet.',
                                }),
                                e(i, {
                                    children: 'Lorem ipsum dolor sit amet.',
                                }),
                                e(i, {
                                    children: 'Lorem ipsum dolor sit amet.',
                                }),
                            ],
                        }),
                        e('br', {}),
                        e('br', {}),
                        o(d, {
                            layout: 'no-radius',
                            theme: 'light',
                            children: [
                                e(i, {
                                    children: 'Lorem ipsum dolor sit amet.',
                                }),
                                e(i, {
                                    children: 'Lorem ipsum dolor sit amet.',
                                }),
                                e(i, {
                                    children: 'Lorem ipsum dolor sit amet.',
                                }),
                                e(i, {
                                    children: 'Lorem ipsum dolor sit amet.',
                                }),
                            ],
                        }),
                        e('br', {}),
                        e('br', {}),
                        o(d, {
                            layout: 'pill',
                            theme: 'light',
                            children: [
                                e(i, {
                                    children: 'Lorem ipsum dolor sit amet.',
                                }),
                                e(i, {
                                    children: 'Lorem ipsum dolor sit amet.',
                                }),
                                e(i, {
                                    children: 'Lorem ipsum dolor sit amet.',
                                }),
                                e(i, {
                                    children: 'Lorem ipsum dolor sit amet.',
                                }),
                            ],
                        }),
                        e('br', {}),
                        e('br', {}),
                    ],
                }),
            }),
            `
`,
            e(r.h2, { children: 'List Directions' }),
            `
`,
            o(r.p, {
                children: [
                    'Use ',
                    e(r.code, { children: 'direction' }),
                    ' prop to set the direction flow of your list.',
                ],
            }),
            `
`,
            o(r.p, {
                children: [
                    'Followings are the value for ',
                    e(r.code, { children: 'direction' }),
                    ' props (',
                    e(r.code, { children: 'column' }),
                    '|',
                    e(r.code, { children: 'row' }),
                    ')',
                ],
            }),
            `
`,
            e('div', {
                children: o('div', {
                    name: 'List Directions',
                    children: [
                        o(d, {
                            direction: 'column',
                            theme: 'light',
                            children: [
                                e(i, { children: 'Lorem ipsum' }),
                                e(i, { children: 'Lorem ipsum' }),
                                e(i, { children: 'Lorem ipsum' }),
                                e(i, { children: 'Lorem ipsum' }),
                            ],
                        }),
                        e('br', {}),
                        e('br', {}),
                        o(d, {
                            theme: 'light',
                            direction: 'row',
                            children: [
                                e(i, { children: 'Lorem ipsum' }),
                                e(i, { children: 'Lorem ipsum' }),
                                e(i, { children: 'Lorem ipsum' }),
                                e(i, { children: 'Lorem ipsum' }),
                            ],
                        }),
                        e('br', {}),
                        e('br', {}),
                    ],
                }),
            }),
            `
`,
            e(r.h2, { children: 'List Sizes' }),
            `
`,
            o(r.p, {
                children: [
                    'you can use a ',
                    e(r.code, { children: 'size' }),
                    ' prop to define the size of your components',
                ],
            }),
            `
`,
            o(r.p, {
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
            o(r.p, {
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
                children: o('div', {
                    name: 'List Sizes',
                    children: [
                        o(d, {
                            size: 'xs',
                            theme: 'light',
                            children: [
                                e(i, {
                                    children: 'Lorem ipsum dolor sit amet.',
                                }),
                                e(i, {
                                    children: 'Lorem ipsum dolor sit amet.',
                                }),
                                e(i, {
                                    children: 'Lorem ipsum dolor sit amet.',
                                }),
                                e(i, {
                                    children: 'Lorem ipsum dolor sit amet.',
                                }),
                            ],
                        }),
                        e('br', {}),
                        e('br', {}),
                        o(d, {
                            size: 'sm',
                            theme: 'light',
                            children: [
                                e(i, {
                                    children: 'Lorem ipsum dolor sit amet.',
                                }),
                                e(i, {
                                    children: 'Lorem ipsum dolor sit amet.',
                                }),
                                e(i, {
                                    children: 'Lorem ipsum dolor sit amet.',
                                }),
                                e(i, {
                                    children: 'Lorem ipsum dolor sit amet.',
                                }),
                            ],
                        }),
                        e('br', {}),
                        e('br', {}),
                        o(d, {
                            size: 'md',
                            theme: 'light',
                            children: [
                                e(i, {
                                    children: 'Lorem ipsum dolor sit amet.',
                                }),
                                e(i, {
                                    children: 'Lorem ipsum dolor sit amet.',
                                }),
                                e(i, {
                                    children: 'Lorem ipsum dolor sit amet.',
                                }),
                                e(i, {
                                    children: 'Lorem ipsum dolor sit amet.',
                                }),
                            ],
                        }),
                        e('br', {}),
                        e('br', {}),
                        o(d, {
                            size: 'lg',
                            theme: 'light',
                            children: [
                                e(i, {
                                    children: 'Lorem ipsum dolor sit amet.',
                                }),
                                e(i, {
                                    children: 'Lorem ipsum dolor sit amet.',
                                }),
                                e(i, {
                                    children: 'Lorem ipsum dolor sit amet.',
                                }),
                                e(i, {
                                    children: 'Lorem ipsum dolor sit amet.',
                                }),
                            ],
                        }),
                        e('br', {}),
                        e('br', {}),
                        o(d, {
                            size: 'xl',
                            theme: 'light',
                            children: [
                                e(i, {
                                    children: 'Lorem ipsum dolor sit amet.',
                                }),
                                e(i, {
                                    children: 'Lorem ipsum dolor sit amet.',
                                }),
                                e(i, {
                                    children: 'Lorem ipsum dolor sit amet.',
                                }),
                                e(i, {
                                    children: 'Lorem ipsum dolor sit amet.',
                                }),
                            ],
                        }),
                        e('br', {}),
                        e('br', {}),
                    ],
                }),
            }),
            `
`,
            e(r.h2, { children: 'List Variants' }),
            `
`,
            o(r.p, {
                children: [
                    'Artific UI provides a ',
                    e(r.code, { children: 'variant' }),
                    ' prop to make you choose how your component ui should look like',
                ],
            }),
            `
`,
            o(r.p, {
                children: [
                    'Set ',
                    e(r.code, { children: 'variant' }),
                    ' prop with the value of (',
                    e(r.code, { children: 'default' }),
                    '|',
                    e(r.code, { children: 'striped' }),
                    '|',
                    e(r.code, { children: 'separate' }),
                    '|',
                    e(r.code, { children: 'borderless' }),
                    '|',
                    e(r.code, { children: 'bordered' }),
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
                children: o('div', {
                    name: 'List Variants',
                    children: [
                        o(d, {
                            variant: 'default',
                            theme: 'light',
                            children: [
                                e(i, {
                                    children: 'Lorem ipsum dolor sit amet.',
                                }),
                                e(i, {
                                    children: 'Lorem ipsum dolor sit amet.',
                                }),
                                e(i, {
                                    children: 'Lorem ipsum dolor sit amet.',
                                }),
                                e(i, {
                                    children: 'Lorem ipsum dolor sit amet.',
                                }),
                            ],
                        }),
                        e('br', {}),
                        e('br', {}),
                        o(d, {
                            variant: 'striped',
                            theme: 'light',
                            children: [
                                e(i, {
                                    children: 'Lorem ipsum dolor sit amet.',
                                }),
                                e(i, {
                                    children: 'Lorem ipsum dolor sit amet.',
                                }),
                                e(i, {
                                    children: 'Lorem ipsum dolor sit amet.',
                                }),
                                e(i, {
                                    children: 'Lorem ipsum dolor sit amet.',
                                }),
                            ],
                        }),
                        e('br', {}),
                        e('br', {}),
                        o(d, {
                            variant: 'separate',
                            theme: 'light',
                            children: [
                                e(i, {
                                    children: 'Lorem ipsum dolor sit amet.',
                                }),
                                e(i, {
                                    children: 'Lorem ipsum dolor sit amet.',
                                }),
                                e(i, {
                                    children: 'Lorem ipsum dolor sit amet.',
                                }),
                                e(i, {
                                    children: 'Lorem ipsum dolor sit amet.',
                                }),
                            ],
                        }),
                        e('br', {}),
                        e('br', {}),
                        o(d, {
                            variant: 'borderless',
                            theme: 'light',
                            children: [
                                e(i, {
                                    children: 'Lorem ipsum dolor sit amet.',
                                }),
                                e(i, {
                                    children: 'Lorem ipsum dolor sit amet.',
                                }),
                                e(i, {
                                    children: 'Lorem ipsum dolor sit amet.',
                                }),
                                e(i, {
                                    children: 'Lorem ipsum dolor sit amet.',
                                }),
                            ],
                        }),
                        e('br', {}),
                        e('br', {}),
                        o(d, {
                            variant: 'bordered',
                            theme: 'light',
                            children: [
                                e(i, {
                                    children: 'Lorem ipsum dolor sit amet.',
                                }),
                                e(i, {
                                    children: 'Lorem ipsum dolor sit amet.',
                                }),
                                e(i, {
                                    children: 'Lorem ipsum dolor sit amet.',
                                }),
                                e(i, {
                                    children: 'Lorem ipsum dolor sit amet.',
                                }),
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
function c(t = {}) {
    const { wrapper: r } = t.components || {}
    return r ? e(r, Object.assign({}, t, { children: e(l, t) })) : l(t)
}
export { c as default, m as defaultTemplate }
