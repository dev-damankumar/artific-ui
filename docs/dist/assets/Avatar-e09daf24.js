import { a as i, F as l, j as e, t as n, l as h } from './index-cab7d04f.js'
const r = '/assets/a1-6ef42bd5.jpg',
    d = '/assets/a2-b960c70b.jpeg',
    c = '/assets/a3-17690e89.jpeg',
    s = '/assets/a4-175e1d32.jpeg',
    u = o =>
        i(l, {
            children: [
                e(n, Object.assign({ src: r }, o)),
                e(n, Object.assign({ title: 'DK' }, o)),
                e(n, Object.assign({ src: c }, o)),
                e(n, Object.assign({ title: 'M' }, o)),
            ],
        })
function a(o) {
    const t = Object.assign(
        { h1: 'h1', p: 'p', h2: 'h2', pre: 'pre', code: 'code' },
        o.components,
    )
    return i(l, {
        children: [
            e(t.h1, { children: 'Avatars' }),
            `
`,
            e(t.p, {
                children:
                    'Avatars are used for displaying images and text in confined space.',
            }),
            `
`,
            e('div', {
                children: e('div', { name: 'Default', children: u.bind({}) }),
            }),
            `
`,
            e(t.h2, { children: 'API' }),
            `
`,
            e(t.pre, {
                children: e(t.code, {
                    className: 'language-jsx',
                    children: `import { Avatar } from 'artific-ui/Avatar';
`,
                }),
            }),
            `
`,
            e(t.h2, { children: 'Avatar Themes' }),
            `
`,
            i(t.p, {
                children: [
                    'If you want to use a different theme for ',
                    e(t.code, { children: 'Avatar' }),
                    ' use the ',
                    e(t.code, { children: 'theme' }),
                    ` prop to set the theme\r
Note: All components have basic four themes ie. (`,
                    e(t.code, { children: 'primary' }),
                    '|',
                    e(t.code, { children: 'secondary' }),
                    '|',
                    e(t.code, { children: 'dark' }),
                    '|',
                    e(t.code, { children: 'light' }),
                    '). you can use either of them.',
                ],
            }),
            `
`,
            i(t.p, {
                children: [
                    'You can also use ',
                    e(t.code, { children: 'colorScheme' }),
                    ' prop to define a custom theme.',
                ],
            }),
            `
`,
            e('div', {
                children: i('div', {
                    name: 'Avatar Themes',
                    children: [
                        e(n, { theme: 'primary', title: 'DK' }),
                        e(n, { theme: 'secondary', title: 'DK' }),
                        e(n, { theme: 'dark', title: 'DK' }),
                        e(n, { theme: 'light', title: 'DK' }),
                        e(n, {
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
            e(t.h2, { children: 'Avatar Size' }),
            `
`,
            i(t.p, {
                children: [
                    'you can use a ',
                    e(t.code, { children: 'size' }),
                    ' prop to define the size of your components',
                ],
            }),
            `
`,
            i(t.p, {
                children: [
                    'Set ',
                    e(t.code, { children: 'size' }),
                    ' prop with the value of (',
                    e(t.code, { children: 'xs' }),
                    '|',
                    e(t.code, { children: 'sm' }),
                    '|',
                    e(t.code, { children: 'md' }),
                    '|',
                    e(t.code, { children: 'lg' }),
                    ',',
                    e(t.code, { children: 'xl' }),
                    '). you can mix them with different supported ',
                    e(t.code, { children: 'theme' }),
                    ' or ',
                    e(t.code, { children: 'layout' }),
                ],
            }),
            `
`,
            i(t.p, {
                children: [
                    'Note: Mostly all the components have the same size values ie.(',
                    e(t.code, { children: 'xs' }),
                    '|',
                    e(t.code, { children: 'sm' }),
                    '|',
                    e(t.code, { children: 'md' }),
                    '|',
                    e(t.code, { children: 'lg' }),
                    ',',
                    e(t.code, { children: 'xl' }),
                    '). but some of the components might have additional sizes.',
                ],
            }),
            `
`,
            e('div', {
                children: i('div', {
                    name: 'Avatar Size',
                    children: [
                        e(n, { size: 'xl', title: 'XL' }),
                        e(n, { size: 'lg', title: 'LG' }),
                        e(n, { size: 'md', title: 'MD' }),
                        e(n, { size: 'sm', title: 'SM' }),
                        e(n, { size: 'xs', title: 'XS' }),
                    ],
                }),
            }),
            `
`,
            e(t.h2, { children: 'Avatar Layouts' }),
            `
`,
            e(t.p, {
                children:
                    "Avatar Has basic four layouts to choose from to define how you component's structure should look like.",
            }),
            `
`,
            i(t.p, {
                children: [
                    'Set ',
                    e(t.code, { children: 'layout' }),
                    ' prop with the value of (',
                    e(t.code, { children: 'default' }),
                    '|',
                    e(t.code, { children: 'rounded' }),
                    '|',
                    e(t.code, { children: 'no-radius' }),
                    '|',
                    e(t.code, { children: 'pill' }),
                    ')',
                ],
            }),
            `
`,
            i(t.p, {
                children: [
                    e(t.code, { children: 'Note:' }),
                    ' Different components might have addition layouts based on there configuration and flexibility. you can check out the props table to see which layout is supported by the component',
                ],
            }),
            `
`,
            e('div', {
                children: i('div', {
                    name: 'Avatar Layouts',
                    children: [
                        e(n, { src: r, layout: 'default' }),
                        e(n, { src: d, layout: 'rounded' }),
                        e(n, { src: c, layout: 'no-radius' }),
                        e(n, { src: s, layout: 'pill' }),
                    ],
                }),
            }),
            `
`,
            e(t.h2, { children: 'Avatar Variants' }),
            `
`,
            i(t.p, {
                children: [
                    'Artific UI provides a ',
                    e(t.code, { children: 'variant' }),
                    ' prop to make you choose how your component ui should look like',
                ],
            }),
            `
`,
            i(t.p, {
                children: [
                    'Set ',
                    e(t.code, { children: 'variant' }),
                    ' prop with the value of (',
                    e(t.code, { children: 'default' }),
                    '|',
                    e(t.code, { children: 'fluid' }),
                    '|',
                    e(t.code, { children: 'outline' }),
                    '). you can mix them with different supported ',
                    e(t.code, { children: 'theme' }),
                    ' or ',
                    e(t.code, { children: 'layout' }),
                ],
            }),
            `
`,
            e(t.p, {
                children: `Note: Different components might have addition or different variant based on there configuration and flexibility.\r
you can check out the props table to see which variant is supported by the component`,
            }),
            `
`,
            e('div', {
                children: i('div', {
                    name: 'Avatar Variants',
                    children: [
                        e(n, { src: r, variant: 'default' }),
                        e(n, { src: d, variant: 'outline' }),
                        e(n, { src: c, variant: 'fluid' }),
                    ],
                }),
            }),
            `
`,
            e(t.h2, { children: 'Avatar Group' }),
            `
`,
            e(t.p, {
                children:
                    'Avatar Group is used to group together a multiple avatars',
            }),
            `
`,
            i(t.p, {
                children: [
                    'Use ',
                    e(t.code, { children: 'AvatarGroup' }),
                    ' with ',
                    e(t.code, { children: 'Avatar' }),
                    ' as children to group them together',
                ],
            }),
            `
`,
            e('div', {
                children: e('div', {
                    name: 'Avatar Group',
                    children: i(h, {
                        children: [
                            e(n, { src: r, variant: 'fluid' }),
                            e(n, { src: d, variant: 'fluid' }),
                            e(n, { src: c, variant: 'fluid' }),
                        ],
                    }),
                }),
            }),
        ],
    })
}
function m(o = {}) {
    const { wrapper: t } = o.components || {}
    return t ? e(t, Object.assign({}, o, { children: e(a, o) })) : a(o)
}
export { u as Template, m as default }
