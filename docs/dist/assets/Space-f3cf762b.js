import { a as t, j as n, x as e, c, F as l } from './index-cab7d04f.js'
const h = r => {
    t('div', {
        children: [
            t('h5', {
                children: [
                    'Without ',
                    n('code', { children: 'Space' }),
                    ' component',
                ],
            }),
            n(e, { children: 'Button 1' }),
            n(e, { children: 'Button 2' }),
            n(e, { children: 'Button 3' }),
            n(e, { children: 'Button 4' }),
            n(e, { children: 'Button 5' }),
            n('br', {}),
            n('br', {}),
            n('br', {}),
            t('h5', {
                children: [
                    'With ',
                    n('code', { children: 'Space' }),
                    ' component',
                ],
            }),
            t(
                c,
                Object.assign({}, r, {
                    children: [
                        n(e, { children: 'Button 1' }),
                        n(e, { children: 'Button 2' }),
                        n(e, { children: 'Button 3' }),
                        n(e, { children: 'Button 4' }),
                        n(e, { children: 'Button 5' }),
                    ],
                }),
            ),
            n('br', {}),
            n('br', {}),
            n('br', {}),
            t('h5', {
                children: [n('code', { children: 'wrap:false' }), ' component'],
            }),
            t(
                c,
                Object.assign({ wrap: !1 }, r, {
                    children: [
                        n(e, { children: 'Button 1' }),
                        n(e, { children: 'Button 2' }),
                        n(e, { children: 'Button 3' }),
                        n(e, { children: 'Button 4' }),
                        n(e, { children: 'Button 5' }),
                        n(e, { children: 'Button 5' }),
                    ],
                }),
            ),
        ],
    })
}
function d(r) {
    const i = Object.assign(
        { h1: 'h1', p: 'p', code: 'code', h2: 'h2', pre: 'pre' },
        r.components,
    )
    return t(l, {
        children: [
            n(i.h1, { children: 'Spaces' }),
            `
`,
            n(i.p, {
                children:
                    'A Space Helps you to set the spacing of its children in a flexible way. It Avoids components clinging together and set a unified space.',
            }),
            `
`,
            t(i.p, {
                children: [
                    'By Default all the items will wrap if content overflows to make it not wrap the items set ',
                    n(i.code, { children: 'wrap' }),
                    ' prop to ',
                    n(i.code, { children: 'false' }),
                ],
            }),
            `
`,
            n('div', {
                children: n('div', { name: 'Default', children: h.bind({}) }),
            }),
            `
`,
            n(i.h2, { children: 'API' }),
            `
`,
            n(i.pre, {
                children: n(i.code, {
                    className: 'language-jsx',
                    children: `import { Space } from 'artific-ui/Space';
`,
                }),
            }),
            `
`,
            n(i.h2, { children: 'Space Gap' }),
            `
`,
            t(i.p, {
                children: [
                    'A ',
                    n(i.code, { children: 'gap' }),
                    ' prop is used to define how much spacing the children should have.',
                ],
            }),
            `
`,
            t(i.p, {
                children: [
                    n(i.code, { children: 'gap' }),
                    ' prop value can be any number donating the px unit to define gap or it can be a tuple [number,number]',
                ],
            }),
            `
`,
            t(i.p, {
                children: [
                    'donation ',
                    n(i.code, { children: 'horizontal' }),
                    ' spacing and ',
                    n(i.code, { children: 'verticle' }),
                    ' spacing respectively',
                ],
            }),
            `
`,
            n('div', {
                children: t('div', {
                    name: 'Space Gap',
                    children: [
                        t('div', {
                            children: [
                                t(c, {
                                    gap: 30,
                                    children: [
                                        n(e, { children: 'Button 1' }),
                                        n(e, { children: 'Button 2' }),
                                        n(e, { children: 'Button 3' }),
                                        n(e, { children: 'Button 4' }),
                                        n(e, { children: 'Button 5' }),
                                    ],
                                }),
                                n('br', {}),
                                n('br', {}),
                                t(c, {
                                    gap: [30, 0],
                                    children: [
                                        n(e, { children: 'Button 1' }),
                                        n(e, { children: 'Button 2' }),
                                        n(e, { children: 'Button 3' }),
                                        n(e, { children: 'Button 4' }),
                                        n(e, { children: 'Button 5' }),
                                    ],
                                }),
                                n('br', {}),
                                n('br', {}),
                                t(c, {
                                    gap: [0, 30],
                                    children: [
                                        n(e, { children: 'Button 1' }),
                                        n(e, { children: 'Button 2' }),
                                        n(e, { children: 'Button 3' }),
                                        n(e, { children: 'Button 4' }),
                                        n(e, { children: 'Button 5' }),
                                        n(e, { children: 'Button 5' }),
                                    ],
                                }),
                            ],
                        }),
                        n(i.p, { children: ';' }),
                    ],
                }),
            }),
            `
`,
            n(i.h2, { children: 'Space Direction' }),
            `
`,
            t(i.p, {
                children: [
                    'A ',
                    n(i.code, { children: 'direction' }),
                    ' prop is used to define on which direction the spacing should be applied. by default it applies on ',
                    n(i.code, { children: 'both' }),
                ],
            }),
            `
`,
            t(i.p, {
                children: [
                    n(i.code, { children: 'direction' }),
                    ' prop values can be : (',
                    n(i.code, { children: 'horizontal' }),
                    ',',
                    n(i.code, { children: 'verticle' }),
                    ',',
                    n(i.code, { children: 'both' }),
                    ')',
                ],
            }),
            `
`,
            n('div', {
                children: t('div', {
                    name: 'Space Direction',
                    children: [
                        t('div', {
                            children: [
                                t(c, {
                                    children: [
                                        n(e, { children: 'Button 1' }),
                                        n(e, { children: 'Button 2' }),
                                        n(e, { children: 'Button 3' }),
                                        n(e, { children: 'Button 3' }),
                                        n(e, { children: 'Button 3' }),
                                    ],
                                }),
                                n('br', {}),
                                n('br', {}),
                                t(c, {
                                    direction: 'horizontal',
                                    children: [
                                        n(e, { children: 'Button 1' }),
                                        n(e, { children: 'Button 2' }),
                                        n(e, { children: 'Button 3' }),
                                        n(e, { children: 'Button 3' }),
                                        n(e, { children: 'Button 3' }),
                                        n(e, { children: 'Button 3' }),
                                    ],
                                }),
                                n('br', {}),
                                n('br', {}),
                                t(c, {
                                    direction: 'vertical',
                                    children: [
                                        n(e, { children: 'Button 1' }),
                                        n(e, { children: 'Button 2' }),
                                        n(e, { children: 'Button 3' }),
                                        n(e, { children: 'Button 3' }),
                                        n(e, { children: 'Button 3' }),
                                        n(e, { children: 'Button 3' }),
                                    ],
                                }),
                            ],
                        }),
                        n(i.p, { children: ';' }),
                    ],
                }),
            }),
            `
`,
            n(i.h2, { children: 'Space Align' }),
            `
`,
            t(i.p, {
                children: [
                    'A ',
                    n(i.code, { children: 'align' }),
                    ' prop is used to align items on y-axis. its is same as the ',
                    n(i.code, { children: 'align-item' }),
                    ' css property',
                ],
            }),
            `
`,
            t(i.p, {
                children: [
                    n(i.code, { children: 'align' }),
                    ' prop value can be: (',
                    n(i.code, { children: 'start' }),
                    '|',
                    n(i.code, { children: 'end' }),
                    '|',
                    n(i.code, { children: 'baseline' }),
                    '|',
                    n(i.code, { children: 'center' }),
                    ')',
                ],
            }),
            `
`,
            n('div', {
                children: t('div', {
                    name: 'Space Align',
                    children: [
                        t('div', {
                            children: [
                                t(c, {
                                    children: [
                                        n(e, { children: 'Button 1' }),
                                        n(e, {
                                            style: { height: '100px' },
                                            children: 'Button 2',
                                        }),
                                        n(e, { children: 'Button 3' }),
                                        n(e, { children: 'Button 4' }),
                                    ],
                                }),
                                n('br', {}),
                                n('br', {}),
                                t(c, {
                                    align: 'end',
                                    children: [
                                        n(e, { children: 'Button 1' }),
                                        n(e, {
                                            style: { height: '100px' },
                                            children: 'Button 2',
                                        }),
                                        n(e, { children: 'Button 3' }),
                                        n(e, { children: 'Button 4' }),
                                    ],
                                }),
                                n('br', {}),
                                n('br', {}),
                                t(c, {
                                    align: 'center',
                                    children: [
                                        n(e, { children: 'Button 1' }),
                                        n(e, {
                                            style: { height: '100px' },
                                            children: 'Button 2',
                                        }),
                                        n(e, { children: 'Button 3' }),
                                        n(e, { children: 'Button 4' }),
                                    ],
                                }),
                            ],
                        }),
                        n(i.p, { children: ';' }),
                    ],
                }),
            }),
        ],
    })
}
function a(r = {}) {
    const { wrapper: i } = r.components || {}
    return i ? n(i, Object.assign({}, r, { children: n(d, r) })) : d(r)
}
export { h as Template, a as default }
