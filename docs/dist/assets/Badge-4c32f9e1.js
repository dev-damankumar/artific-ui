import { a as n, F as c, j as e, s as t, _ as r } from './index-cab7d04f.js'
const l = o =>
    n(c, {
        children: [
            e(t, Object.assign({ title: 'DK' }, o)),
            e(t, Object.assign({ title: 'A' }, o)),
            e(t, Object.assign({ title: 'M' }, o)),
            e(t, Object.assign({ title: 'FR' }, o)),
        ],
    })
function d(o) {
    const i = Object.assign(
        { h1: 'h1', p: 'p', h2: 'h2', pre: 'pre', code: 'code' },
        o.components,
    )
    return n(c, {
        children: [
            e(i.h1, { children: 'Badges' }),
            `
`,
            e(i.p, {
                children:
                    'Badges are used to display some info about the specific element like: count etc.',
            }),
            `
`,
            e('div', {
                children: e('div', { name: 'Default', children: l.bind({}) }),
            }),
            `
`,
            e(i.h2, { children: 'API' }),
            `
`,
            e(i.pre, {
                children: e(i.code, {
                    className: 'language-jsx',
                    children: `import { Badge } from 'artific-ui/Badge';
`,
                }),
            }),
            `
`,
            e(i.h2, { children: 'Badge Group' }),
            `
`,
            n(i.p, {
                children: [
                    'If you want to group the badges together use ',
                    e(i.code, { children: 'BadgeGruop' }),
                    '. ',
                    e(i.code, { children: 'BadgeGroup' }),
                    ' has same props as ',
                    e(i.code, { children: 'Badge' }),
                    ' which act as global ',
                    e(i.code, { children: 'props' }),
                    ' for its children',
                ],
            }),
            `
`,
            e('div', {
                children: e('div', {
                    name: 'Badge Group',
                    children: n(r, {
                        children: [
                            e(t, { theme: 'primary', title: 'REACT' }),
                            e(t, { theme: 'secondary', title: 'NEXTJS' }),
                            e(t, {
                                colorScheme: {
                                    background:
                                        'linear-gradient(45deg, #e736f4, #673ab7)',
                                    backgroundColor: '#e736f4',
                                    color: 'white',
                                },
                                title: 'JAVASCRIPT',
                            }),
                        ],
                    }),
                }),
            }),
            `
`,
            e(i.h2, { children: 'Badges Theme' }),
            `
`,
            n(i.p, {
                children: [
                    'If you want to use a different theme for ',
                    e(i.code, { children: 'Badge' }),
                    ' use the ',
                    e(i.code, { children: 'theme' }),
                    ` prop to set the theme\r
Note: All components have basic four themes ie. (`,
                    e(i.code, { children: 'primary' }),
                    '|',
                    e(i.code, { children: 'secondary' }),
                    '|',
                    e(i.code, { children: 'dark' }),
                    '|',
                    e(i.code, { children: 'light' }),
                    '). you can use either of them.',
                ],
            }),
            `
`,
            n(i.p, {
                children: [
                    'You can also use ',
                    e(i.code, { children: 'colorScheme' }),
                    ' prop to define a custom theme.',
                ],
            }),
            `
`,
            e('div', {
                children: n('div', {
                    name: 'Badges Theme',
                    children: [
                        e(t, { theme: 'primary', title: 'DK' }),
                        e(t, { theme: 'secondary', title: 'DK' }),
                        e(t, { theme: 'dark', title: 'DK' }),
                        e(t, { theme: 'light', title: 'DK' }),
                        e(t, {
                            colorScheme: {
                                background:
                                    'linear-gradient(45deg, #e736f4, #673ab7)',
                                backgroundColor: '#e736f4',
                                color: 'white',
                            },
                            title: 'DK',
                        }),
                    ],
                }),
            }),
            `
`,
            e(i.h2, { children: 'Badge Size' }),
            `
`,
            n(i.p, {
                children: [
                    'you can use a ',
                    e(i.code, { children: 'size' }),
                    ' prop to define the size of your components',
                ],
            }),
            `
`,
            n(i.p, {
                children: [
                    'Set ',
                    e(i.code, { children: 'size' }),
                    ' prop with the value of (',
                    e(i.code, { children: 'xs' }),
                    '|',
                    e(i.code, { children: 'sm' }),
                    '|',
                    e(i.code, { children: 'md' }),
                    '|',
                    e(i.code, { children: 'lg' }),
                    ',',
                    e(i.code, { children: 'xl' }),
                    '). you can mix them with different supported ',
                    e(i.code, { children: 'theme' }),
                    ' or ',
                    e(i.code, { children: 'layout' }),
                ],
            }),
            `
`,
            n(i.p, {
                children: [
                    'Note: Mostly all the components have the same size values ie.(',
                    e(i.code, { children: 'xs' }),
                    '|',
                    e(i.code, { children: 'sm' }),
                    '|',
                    e(i.code, { children: 'md' }),
                    '|',
                    e(i.code, { children: 'lg' }),
                    ',',
                    e(i.code, { children: 'xl' }),
                    '). but some of the components might have additional sizes.',
                ],
            }),
            `
`,
            e('div', {
                children: n('div', {
                    name: 'Badge Size',
                    children: [
                        e(t, { size: 'xl', title: 'XL' }),
                        e(t, { size: 'lg', title: 'LG' }),
                        e(t, { size: 'md', title: 'MD' }),
                        e(t, { size: 'sm', title: 'SM' }),
                        e(t, { size: 'xs', title: 'XS' }),
                    ],
                }),
            }),
            `
`,
            e(i.h2, { children: 'Badge Layouts' }),
            `
`,
            e(i.p, {
                children:
                    "Badge Has basic five layouts to choose from to define how you component's structure should look like.",
            }),
            `
`,
            n(i.p, {
                children: [
                    'Set ',
                    e(i.code, { children: 'layout' }),
                    ' prop with the value of (',
                    e(i.code, { children: 'default' }),
                    '|',
                    e(i.code, { children: 'rounded' }),
                    '|',
                    e(i.code, { children: 'no-radius' }),
                    '|',
                    e(i.code, { children: 'pill' }),
                    ',',
                    e(i.code, { children: 'circular' }),
                    ')',
                ],
            }),
            `
`,
            n(i.p, {
                children: [
                    e(i.code, { children: 'Note:' }),
                    ' Different components might have addition layouts based on there configuration and flexibility. you can check out the props table to see which layout is supported by the component',
                ],
            }),
            `
`,
            e('div', {
                children: n('div', {
                    name: 'Badge Layouts',
                    children: [
                        e('h5', { children: 'Badge Layouts' }),
                        e(t, { title: 'DK', layout: 'default' }),
                        e(t, { title: 'DK', layout: 'rounded' }),
                        e(t, { title: 'DK', layout: 'no-radius' }),
                        e(t, { title: 'DK', layout: 'pill' }),
                        e(t, { title: 'DK', layout: 'circular' }),
                    ],
                }),
            }),
            `
`,
            e(i.h2, { children: 'Badge Variants' }),
            `
`,
            n(i.p, {
                children: [
                    'Artific UI provides a ',
                    e(i.code, { children: 'variant' }),
                    ' prop to make you choose how your component ui should look like',
                ],
            }),
            `
`,
            n(i.p, {
                children: [
                    'Set ',
                    e(i.code, { children: 'variant' }),
                    ' prop with the value of (',
                    e(i.code, { children: 'default' }),
                    '|',
                    e(i.code, { children: 'dot' }),
                    '|',
                    e(i.code, { children: 'outline' }),
                    '). you can mix them with different supported ',
                    e(i.code, { children: 'theme' }),
                    ' or ',
                    e(i.code, { children: 'layout' }),
                ],
            }),
            `
`,
            e(i.p, {
                children: `Note: Different components might have addition or different variant based on there configuration and flexibility.\r
you can check out the props table to see which variant is supported by the component`,
            }),
            `
`,
            e('div', {
                children: n('div', {
                    name: 'Badge Variants',
                    children: [
                        e('h5', { children: 'Badge Variants' }),
                        e(t, { title: 'DK', variant: 'default' }),
                        e(t, { title: 'DK', variant: 'outline' }),
                        e(t, { variant: 'dot' }),
                    ],
                }),
            }),
        ],
    })
}
function a(o = {}) {
    const { wrapper: i } = o.components || {}
    return i ? e(i, Object.assign({}, o, { children: e(d, o) })) : d(o)
}
export { l as Template, a as default }
