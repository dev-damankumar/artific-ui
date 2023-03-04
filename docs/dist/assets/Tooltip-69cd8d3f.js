import { j as e, U as i, x as o, a as l, F as c } from './index-cab7d04f.js'
const d = r =>
    e(i, {
        title: 'This is tooltip',
        children: e(o, { children: 'Default Tooltip' }),
    })
function n(r) {
    const t = Object.assign(
        { h1: 'h1', p: 'p', h2: 'h2', pre: 'pre', code: 'code' },
        r.components,
    )
    return l(c, {
        children: [
            e(t.h1, { children: 'Tooltip' }),
            `
`,
            e(t.p, {
                children:
                    'Tooltips display informative text when users hover over, focus on, or tap an element.',
            }),
            `
`,
            `
`,
            e('div', {
                children: e('div', { name: 'Default', children: d.bind({}) }),
            }),
            `
`,
            e(t.h2, { children: 'API' }),
            `
`,
            e(t.pre, {
                children: e(t.code, {
                    className: 'language-jsx',
                    children: `import { Tooltip } from 'artific-ui/Tooltip';
`,
                }),
            }),
            `
`,
            e(t.h2, { children: 'Tooltip Theme' }),
            `
`,
            l(t.p, {
                children: [
                    'If you want to use a different theme for ',
                    e(t.code, { children: 'Tooltip' }),
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
            l(t.p, {
                children: [
                    'You can also use ',
                    e(t.code, { children: 'colorScheme' }),
                    ' prop to define a custom theme.',
                ],
            }),
            `
`,
            e('div', {
                children: l('div', {
                    name: 'Tooltip Theme',
                    children: [
                        e(i, {
                            title: 'This is tooltip',
                            children: e(o, { children: 'Default Tooltip' }),
                        }),
                        e('br', {}),
                        e('br', {}),
                        e(i, {
                            theme: 'secondary',
                            title: 'This is tooltip',
                            children: e(o, { children: 'Secondary Tooltip' }),
                        }),
                        e('br', {}),
                        e('br', {}),
                        e(i, {
                            theme: 'dark',
                            title: 'This is tooltip',
                            children: e(o, { children: 'Dark Tooltip' }),
                        }),
                        e('br', {}),
                        e('br', {}),
                        e(i, {
                            theme: 'light',
                            title: 'This is tooltip',
                            children: e(o, { children: 'Light Tooltip' }),
                        }),
                        e('br', {}),
                        e('br', {}),
                        e(i, {
                            colorScheme: {
                                background:
                                    'linear-gradient(45deg, #e736f4, #673ab7)',
                                backgroundColor: '#e736f4',
                                color: 'white',
                            },
                            title: 'This is tooltip',
                            children: e(o, { children: 'Light Tooltip' }),
                        }),
                        e('br', {}),
                        e('br', {}),
                    ],
                }),
            }),
            `
`,
            e(t.h2, { children: 'Tooltip Placements' }),
            `
`,
            l(t.p, {
                children: [
                    'Use ',
                    e(t.code, { children: 'placement' }),
                    ' prop to set where the tooltip should appear',
                ],
            }),
            `
`,
            l(t.p, {
                children: [
                    'possible values are (',
                    e(t.code, { children: 'bottom' }),
                    '|',
                    e(t.code, { children: 'bottom-start' }),
                    '|',
                    e(t.code, { children: 'bottom-end' }),
                    '|',
                    e(t.code, { children: 'top' }),
                    '|',
                    e(t.code, { children: 'top-start' }),
                    '|',
                    e(t.code, { children: 'top-end' }),
                    '|',
                    e(t.code, { children: 'right' }),
                    '|',
                    e(t.code, { children: 'right-start' }),
                    '|',
                    e(t.code, { children: 'right-end' }),
                    '|',
                    e(t.code, { children: 'bottom' }),
                    '|',
                    e(t.code, { children: 'bottom-start' }),
                    '|',
                    e(t.code, { children: 'bottom-end' }),
                    ')',
                ],
            }),
            `
`,
            e('div', {
                children: l('div', {
                    name: 'Tooltip Placements',
                    children: [
                        e(i, {
                            variant: 'arrow',
                            placement: 'bottom',
                            title: 'Bottom tooltip',
                            children: e(o, { children: 'Bottom Placement' }),
                        }),
                        e(i, {
                            variant: 'arrow',
                            placement: 'bottom-start',
                            title: 'Bottom tooltip',
                            children: e(o, {
                                children: 'Bottom Start Placement',
                            }),
                        }),
                        e(i, {
                            variant: 'arrow',
                            placement: 'bottom-end',
                            title: 'Bottom tooltip',
                            children: e(o, {
                                children: 'Bottom End Placement',
                            }),
                        }),
                        e('br', {}),
                        e('br', {}),
                        e('br', {}),
                        e(i, {
                            variant: 'arrow',
                            placement: 'left',
                            title: 'Left tooltip',
                            children: e(o, {
                                style: { marginLeft: 100 },
                                children: 'Left Placement',
                            }),
                        }),
                        e(i, {
                            variant: 'arrow',
                            placement: 'left-start',
                            title: 'Left tooltip',
                            children: e(o, {
                                children: 'Left Start Placement',
                            }),
                        }),
                        e(i, {
                            variant: 'arrow',
                            placement: 'left-end',
                            title: 'Left tooltip',
                            children: e(o, { children: 'Left End Placement' }),
                        }),
                        e('br', {}),
                        e('br', {}),
                        e('br', {}),
                        e(i, {
                            variant: 'arrow',
                            placement: 'right',
                            title: 'Right tooltip',
                            children: e(o, { children: 'Right Placement' }),
                        }),
                        e(i, {
                            variant: 'arrow',
                            placement: 'right-start',
                            title: 'Right tooltip',
                            children: e(o, {
                                children: 'Right Start Placement',
                            }),
                        }),
                        e(i, {
                            variant: 'arrow',
                            placement: 'right-end',
                            title: 'Right tooltip',
                            children: e(o, { children: 'Right End Placement' }),
                        }),
                        e('br', {}),
                        e('br', {}),
                        e('br', {}),
                        e(i, {
                            variant: 'arrow',
                            placement: 'top',
                            title: 'Top tooltip',
                            children: e(o, { children: 'Top Placement' }),
                        }),
                        e(i, {
                            variant: 'arrow',
                            placement: 'top-start',
                            title: 'Top tooltip',
                            children: e(o, { children: 'Top Start Placement' }),
                        }),
                        e(i, {
                            variant: 'arrow',
                            placement: 'top-end',
                            title: 'Top tooltip',
                            children: e(o, { children: 'Top End Placement' }),
                        }),
                    ],
                }),
            }),
            `
`,
            e(t.h2, { children: 'Tooltip Layouts' }),
            `
`,
            e(t.p, {
                children:
                    "Tooltip Has basic four layouts to choose from to define how you component's structure should look like.",
            }),
            `
`,
            l(t.p, {
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
            l(t.p, {
                children: [
                    e(t.code, { children: 'Note:' }),
                    ' Different components might have addition layouts based on there configuration and flexibility. you can check out the props table to see which layout is supported by the component',
                ],
            }),
            `
`,
            e('div', {
                children: l('div', {
                    name: 'Tooltip Layouts',
                    children: [
                        e(i, {
                            layout: 'default',
                            title: 'This is tooltip',
                            children: e(o, { children: 'Default Tooltip' }),
                        }),
                        e('br', {}),
                        e('br', {}),
                        e(i, {
                            layout: 'rounded',
                            title: 'This is tooltip',
                            children: e(o, { children: 'Rounded Tooltip' }),
                        }),
                        e('br', {}),
                        e('br', {}),
                        e(i, {
                            layout: 'no-radius',
                            title: 'This is tooltip',
                            children: e(o, { children: 'No Radius Tooltip' }),
                        }),
                        e('br', {}),
                        e('br', {}),
                        e(i, {
                            layout: 'pill',
                            title: 'This is tooltip',
                            children: e(o, { children: 'Pill Tooltip' }),
                        }),
                        e('br', {}),
                        e('br', {}),
                    ],
                }),
            }),
            `
`,
            e(t.h2, { children: 'Tooltip Variants' }),
            `
`,
            l(t.p, {
                children: [
                    'Artific UI provides a ',
                    e(t.code, { children: 'variant' }),
                    ' prop to make you choose how your component ui should look like',
                ],
            }),
            `
`,
            l(t.p, {
                children: [
                    'Set ',
                    e(t.code, { children: 'variant' }),
                    ' prop with the value of (',
                    e(t.code, { children: 'default' }),
                    '|',
                    e(t.code, { children: 'arrow' }),
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
                children: l('div', {
                    name: 'Tooltip Variants',
                    children: [
                        e(i, {
                            variant: 'default',
                            title: 'This is tooltip',
                            children: e(o, { children: 'Default Tooltip' }),
                        }),
                        e('br', {}),
                        e('br', {}),
                        e(i, {
                            variant: 'arrow',
                            title: 'This is tooltip',
                            children: e(o, { children: 'Arrow Tooltip' }),
                        }),
                    ],
                }),
            }),
            `
`,
            e(t.h2, { children: 'Tooltip Sizes' }),
            `
`,
            l(t.p, {
                children: [
                    'you can use a ',
                    e(t.code, { children: 'size' }),
                    ' prop to define the size of your components',
                ],
            }),
            `
`,
            l(t.p, {
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
            l(t.p, {
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
                children: l('div', {
                    name: 'Tooltip Sizes',
                    children: [
                        e(i, {
                            size: 'xs',
                            title: 'This is tooltip',
                            children: e(o, { children: 'Tooltip' }),
                        }),
                        e('br', {}),
                        e('br', {}),
                        e(i, {
                            size: 'sm',
                            title: 'This is tooltip',
                            children: e(o, { children: 'Tooltip' }),
                        }),
                        e('br', {}),
                        e('br', {}),
                        e(i, {
                            size: 'md',
                            title: 'This is tooltip',
                            children: e(o, { children: 'Tooltip' }),
                        }),
                        e('br', {}),
                        e('br', {}),
                        e(i, {
                            size: 'lg',
                            title: 'This is tooltip',
                            children: e(o, { children: 'Tooltip' }),
                        }),
                        e('br', {}),
                        e('br', {}),
                        e(i, {
                            size: 'xl',
                            title: 'This is tooltip',
                            children: e(o, { children: 'Tooltip' }),
                        }),
                        e('br', {}),
                        e('br', {}),
                    ],
                }),
            }),
        ],
    })
}
function a(r = {}) {
    const { wrapper: t } = r.components || {}
    return t ? e(t, Object.assign({}, r, { children: e(n, r) })) : n(r)
}
export { a as default, d as defaultTemplate }
