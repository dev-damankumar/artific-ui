import { j as n, a as o, F as r, T as s } from './index-cab7d04f.js'
function i(c) {
    const e = Object.assign({ h2: 'h2', p: 'p', code: 'code' }, c.components)
    return o(r, {
        children: [
            n('div', {
                className: 'main-blogs',
                children: c.noMainHeading
                    ? n(s, { title: 'Artific UI - Sizes' })
                    : n(e.h2, { children: 'Artific UI - Sizes' }),
            }),
            `
`,
            n(e.p, {
                children:
                    'Size prop defines the size of your component that how big or small it should be on screen.',
            }),
            `
`,
            o(e.p, {
                children: [
                    n(e.code, { children: 'size' }),
                    ' prop has common five values (',
                    n(e.code, { children: 'xs' }),
                    '|',
                    n(e.code, { children: 'sm' }),
                    '|',
                    n(e.code, { children: 'md' }),
                    '|',
                    n(e.code, { children: 'lg' }),
                    '|',
                    n(e.code, { children: 'xl' }),
                    ').',
                ],
            }),
            `
`,
            o(e.p, {
                children: [
                    'values for ',
                    n(e.code, { children: 'size' }),
                    ' props can differ for some exceptional components',
                ],
            }),
        ],
    })
}
function d(c = {}) {
    const { wrapper: e } = c.components || {}
    return e ? n(e, Object.assign({}, c, { children: n(i, c) })) : i(c)
}
export { d as default }
