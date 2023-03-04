import {
    j as i,
    a as r,
    F as h,
    T as s,
    G as n,
    b as d,
    W as c,
    K as o,
} from './index-cab7d04f.js'
function t(l) {
    const e = Object.assign(
        { h2: 'h2', p: 'p', pre: 'pre', code: 'code', i: 'i' },
        l.components,
    )
    return r(h, {
        children: [
            i('div', {
                className: 'main-blogs',
                children: l.noMainHeading
                    ? i(s, { title: 'Accordion - Overview' })
                    : i(e.h2, { children: 'Accordion - Overview' }),
            }),
            `
`,
            i(e.h2, { children: 'Accordion' }),
            `
`,
            i(e.p, {
                children:
                    'The accordion component allows the user to show and hide sections of related content on a page.',
            }),
            `
`,
            i(e.p, {
                children:
                    'An accordion is a lightweight container that may either be used standalone, or be connected to a larger surface, such as a card.',
            }),
            `
`,
            i(e.h2, { children: 'Basic Accordion' }),
            `
`,
            r(n, {
                children: [
                    r(d, {
                        children: [
                            i(c, { children: 'Accordion Header' }),
                            i(o, {
                                children: i(e.p, {
                                    children:
                                        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem',
                                }),
                            }),
                        ],
                    }),
                    r(d, {
                        children: [
                            i(c, { children: 'Accordion Header 2' }),
                            i(o, {
                                children: i(e.p, {
                                    children:
                                        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem',
                                }),
                            }),
                        ],
                    }),
                    r(d, {
                        children: [
                            i(c, { children: 'Accordion Header 3' }),
                            i(o, {
                                children: i(e.p, {
                                    children:
                                        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem',
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            `
`,
            i(e.h2, { children: 'API' }),
            `
`,
            i(e.pre, {
                children: i(e.code, {
                    className: 'language-jsx',
                    children: `import { Accordion } from 'artific-ui/Accordion';
`,
                }),
            }),
            `
`,
            i(e.h2, { children: 'Accordion Themes' }),
            `
`,
            r(e.p, {
                children: [
                    'If you want to use a different theme for ',
                    i(e.code, { children: 'accordion' }),
                    ' use the ',
                    i(e.code, { children: 'theme' }),
                    ` prop to set the theme\r
Note: All components have basic four themes ie. (`,
                    i(e.code, { children: 'primary' }),
                    '|',
                    i(e.code, { children: 'secondary' }),
                    '|',
                    i(e.code, { children: 'dark' }),
                    '|',
                    i(e.code, { children: 'light' }),
                    '). you can use either of them',
                ],
            }),
            `
`,
            r('div', {
                name: 'Accordion Themes',
                children: [
                    i(n, {
                        children: r(d, {
                            children: [
                                i(c, { children: 'Accordion Header' }),
                                i(o, {
                                    children: i(e.p, {
                                        children:
                                            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem',
                                    }),
                                }),
                            ],
                        }),
                    }),
                    i(n, {
                        theme: 'secondary',
                        children: r(d, {
                            children: [
                                i(c, { children: 'Accordion Header' }),
                                i(o, {
                                    children: i(e.p, {
                                        children:
                                            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem',
                                    }),
                                }),
                            ],
                        }),
                    }),
                    i(n, {
                        theme: 'dark',
                        children: r(d, {
                            children: [
                                i(c, { children: 'Accordion Header' }),
                                i(o, {
                                    children: i(e.p, {
                                        children:
                                            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem',
                                    }),
                                }),
                            ],
                        }),
                    }),
                    i(n, {
                        theme: 'light',
                        children: r(d, {
                            children: [
                                i(c, { children: 'Accordion Header' }),
                                i(o, {
                                    children: i(e.p, {
                                        children:
                                            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem',
                                    }),
                                }),
                            ],
                        }),
                    }),
                ],
            }),
            `
`,
            i(e.h2, { children: 'Accordion Custom Themes' }),
            `
`,
            r(e.p, {
                children: [
                    'If you want to use a different color scheme for ',
                    i(e.code, { children: 'accordion' }),
                    ` instead of the provided themes then  you can use\r
`,
                    i(e.code, { children: 'colorScheme' }),
                    ' props to define your color scheme.',
                ],
            }),
            `
`,
            r(e.p, {
                children: [
                    'colorScheme is an object containing three properties: ',
                    i(e.code, { children: 'background' }),
                    ', ',
                    i(e.code, { children: 'backgroundColor' }),
                    ', ',
                    i(e.code, { children: 'color' }),
                ],
            }),
            `
`,
            i('div', {
                name: 'Accordion Custom Themes',
                children: i(n, {
                    colorScheme: {
                        background: 'linear-gradient(45deg, #e736f4, #673ab7)',
                        backgroundColor: '#e736f4',
                        color: 'white',
                    },
                    theme: 'primary',
                    children: r(d, {
                        children: [
                            i(c, { children: 'Accordion Header' }),
                            i(o, {
                                children: i(e.p, {
                                    children:
                                        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem',
                                }),
                            }),
                        ],
                    }),
                }),
            }),
            `
`,
            i(e.h2, { children: 'Accordion Disabled Panel' }),
            `
`,
            r(e.p, {
                children: [
                    'If you want to disable a specific panel of the Accordion use ',
                    i(e.code, { children: 'disabled' }),
                    ' prop on ',
                    i(e.code, { children: 'AccordionPanel' }),
                    ' to disable it.',
                ],
            }),
            `
`,
            r('div', {
                name: 'Accordion Disabled Panel',
                children: [
                    i(n, {
                        theme: 'primary',
                        children: r(d, {
                            disabled: !0,
                            children: [
                                i(c, { children: 'Secret Header' }),
                                i(o, {
                                    children: i(e.p, {
                                        children: 'This is a secret content',
                                    }),
                                }),
                            ],
                        }),
                    }),
                    i(n, {
                        theme: 'secondary',
                        children: r(d, {
                            disabled: !0,
                            children: [
                                i(c, { children: 'Secret Header' }),
                                i(o, {
                                    children: i(e.p, {
                                        children: 'This is a secret content',
                                    }),
                                }),
                            ],
                        }),
                    }),
                    i(n, {
                        theme: 'light',
                        children: r(d, {
                            disabled: !0,
                            children: [
                                i(c, { children: 'Secret Header' }),
                                i(o, {
                                    children: i(e.p, {
                                        children: 'This is a secret content',
                                    }),
                                }),
                            ],
                        }),
                    }),
                    i(n, {
                        theme: 'dark',
                        children: r(d, {
                            disabled: !0,
                            children: [
                                i(c, { children: 'Secret Header' }),
                                i(o, {
                                    children: i(e.p, {
                                        children: 'This is a secret content',
                                    }),
                                }),
                            ],
                        }),
                    }),
                    i(n, {
                        colorScheme: {
                            background:
                                'linear-gradient(45deg, #e736f4, #673ab7)',
                            backgroundColor: '#e736f4',
                            color: 'white',
                        },
                        theme: 'primary',
                        children: r(d, {
                            disabled: !0,
                            children: [
                                i(c, { children: 'Secret Header' }),
                                i(o, {
                                    children: i(e.p, {
                                        children: 'This is a secret content',
                                    }),
                                }),
                            ],
                        }),
                    }),
                ],
            }),
            `
`,
            i(e.h2, { children: 'Prefix And Suffix icons' }),
            `
`,
            r(e.p, {
                children: [
                    'You can add icons to the start or end of ',
                    i(e.code, { children: 'AccordionHeader' }),
                    '.',
                ],
            }),
            `
`,
            r(e.p, {
                children: [
                    'provide the prop ',
                    i(e.code, { children: 'prefix' }),
                    ' or ',
                    i(e.code, { children: 'suffix' }),
                    ' or both to the ',
                    i(e.code, { children: 'AccordionHeader' }),
                    ' to add the icons.',
                ],
            }),
            `
`,
            r('div', {
                name: 'Prefix And Suffix icons',
                children: [
                    i(n, {
                        children: r(d, {
                            children: [
                                i(c, {
                                    prefix: i(e.i, {
                                        className: 'bx bx-bowl-hot',
                                    }),
                                    suffix: i(e.i, {
                                        className: 'bx bx-bowl-hot',
                                    }),
                                    children: `Accordion\r
Header 3`,
                                }),
                                i(o, {
                                    children: i(e.p, {
                                        children:
                                            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem',
                                    }),
                                }),
                            ],
                        }),
                    }),
                    i(n, {
                        theme: 'secondary',
                        children: r(d, {
                            children: [
                                i(c, {
                                    prefix: i(e.i, {
                                        className: 'bx bx-bowl-hot',
                                    }),
                                    suffix: i(e.i, {
                                        className: 'bx bx-bowl-hot',
                                    }),
                                    children: `Accordion\r
Header 3`,
                                }),
                                i(o, {
                                    children: i(e.p, {
                                        children:
                                            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem',
                                    }),
                                }),
                            ],
                        }),
                    }),
                    i(n, {
                        theme: 'light',
                        children: r(d, {
                            children: [
                                i(c, {
                                    prefix: i(e.i, {
                                        className: 'bx bx-bowl-hot',
                                    }),
                                    suffix: i(e.i, {
                                        className: 'bx bx-bowl-hot',
                                    }),
                                    children: `Accordion\r
Header 3`,
                                }),
                                i(o, {
                                    children: i(e.p, {
                                        children:
                                            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem',
                                    }),
                                }),
                            ],
                        }),
                    }),
                    i(n, {
                        theme: 'dark',
                        children: r(d, {
                            children: [
                                i(c, {
                                    prefix: i(e.i, {
                                        className: 'bx bx-bowl-hot',
                                    }),
                                    suffix: i(e.i, {
                                        className: 'bx bx-bowl-hot',
                                    }),
                                    children: `Accordion\r
Header 3`,
                                }),
                                i(o, {
                                    children: i(e.p, {
                                        children:
                                            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem',
                                    }),
                                }),
                            ],
                        }),
                    }),
                    i(n, {
                        colorScheme: {
                            background:
                                'linear-gradient(45deg, #e736f4, #673ab7)',
                            backgroundColor: '#e736f4',
                            color: 'white',
                        },
                        children: r(d, {
                            children: [
                                i(c, {
                                    prefix: i(e.i, {
                                        className: 'bx bx-bowl-hot',
                                    }),
                                    suffix: i(e.i, {
                                        className: 'bx bx-bowl-hot',
                                    }),
                                    children: `Accordion\r
Header 3`,
                                }),
                                i(o, {
                                    children: i(e.p, {
                                        children:
                                            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem',
                                    }),
                                }),
                            ],
                        }),
                    }),
                ],
            }),
            `
`,
            i(e.h2, { children: 'Indicator Icon Position' }),
            `
`,
            i(e.p, {
                children:
                    "You can choose where accordion's indicator icon should appear when opening and closing the panel",
            }),
            `
`,
            r(e.p, {
                children: [
                    'Control which it direction should be by providing it ',
                    i(e.code, { children: 'indicatorPosition' }),
                    ' of ',
                    i(e.code, { children: 'start' }),
                    ' or ',
                    i(e.code, { children: 'end' }),
                ],
            }),
            `
`,
            r('div', {
                name: 'Indicator Icon Position',
                children: [
                    i('h5', { children: 'Default/End Position' }),
                    i(n, {
                        children: r(d, {
                            children: [
                                i(c, {
                                    prefix: i(e.i, {
                                        className: 'bx bx-bowl-hot',
                                    }),
                                    suffix: i(e.i, {
                                        className: 'bx bx-bowl-hot',
                                    }),
                                    children: `Accordion\r
Header 2`,
                                }),
                                i(o, {
                                    children: i(e.p, {
                                        children:
                                            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem',
                                    }),
                                }),
                            ],
                        }),
                    }),
                    i(n, {
                        theme: 'secondary',
                        children: r(d, {
                            children: [
                                i(c, {
                                    prefix: i(e.i, {
                                        className: 'bx bx-bowl-hot',
                                    }),
                                    suffix: i(e.i, {
                                        className: 'bx bx-bowl-hot',
                                    }),
                                    children: `Accordion\r
Header 2`,
                                }),
                                i(o, {
                                    children: i(e.p, {
                                        children:
                                            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem',
                                    }),
                                }),
                            ],
                        }),
                    }),
                    i(n, {
                        theme: 'light',
                        children: r(d, {
                            children: [
                                i(c, {
                                    prefix: i(e.i, {
                                        className: 'bx bx-bowl-hot',
                                    }),
                                    suffix: i(e.i, {
                                        className: 'bx bx-bowl-hot',
                                    }),
                                    children: `Accordion\r
Header 2`,
                                }),
                                i(o, {
                                    children: i(e.p, {
                                        children:
                                            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem',
                                    }),
                                }),
                            ],
                        }),
                    }),
                    i(n, {
                        theme: 'dark',
                        children: r(d, {
                            children: [
                                i(c, {
                                    prefix: i(e.i, {
                                        className: 'bx bx-bowl-hot',
                                    }),
                                    suffix: i(e.i, {
                                        className: 'bx bx-bowl-hot',
                                    }),
                                    children: `Accordion\r
Header 2`,
                                }),
                                i(o, {
                                    children: i(e.p, {
                                        children:
                                            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem',
                                    }),
                                }),
                            ],
                        }),
                    }),
                    i(n, {
                        colorScheme: {
                            background:
                                'linear-gradient(45deg, #e736f4, #673ab7)',
                            backgroundColor: '#e736f4',
                            color: 'white',
                        },
                        children: r(d, {
                            children: [
                                i(c, {
                                    prefix: i(e.i, {
                                        className: 'bx bx-bowl-hot',
                                    }),
                                    suffix: i(e.i, {
                                        className: 'bx bx-bowl-hot',
                                    }),
                                    children: `Accordion\r
Header 2`,
                                }),
                                i(o, {
                                    children: i(e.p, {
                                        children:
                                            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem',
                                    }),
                                }),
                            ],
                        }),
                    }),
                    i('br', {}),
                    i('h5', { children: 'Start Position' }),
                    i(n, {
                        indicatorPosition: 'start',
                        children: r(d, {
                            children: [
                                i(c, {
                                    prefix: i(e.i, {
                                        className: 'bx bx-bowl-hot',
                                    }),
                                    suffix: i(e.i, {
                                        className: 'bx bx-bowl-hot',
                                    }),
                                    children: `Accordion\r
Header 2`,
                                }),
                                i(o, {
                                    children: i(e.p, {
                                        children:
                                            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem',
                                    }),
                                }),
                            ],
                        }),
                    }),
                    i(n, {
                        theme: 'secondary',
                        indicatorPosition: 'start',
                        children: r(d, {
                            children: [
                                i(c, {
                                    prefix: i(e.i, {
                                        className: 'bx bx-bowl-hot',
                                    }),
                                    suffix: i(e.i, {
                                        className: 'bx bx-bowl-hot',
                                    }),
                                    children: `Accordion\r
Header 2`,
                                }),
                                i(o, {
                                    children: i(e.p, {
                                        children:
                                            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem',
                                    }),
                                }),
                            ],
                        }),
                    }),
                    i(n, {
                        theme: 'light',
                        indicatorPosition: 'start',
                        children: r(d, {
                            children: [
                                i(c, {
                                    prefix: i(e.i, {
                                        className: 'bx bx-bowl-hot',
                                    }),
                                    suffix: i(e.i, {
                                        className: 'bx bx-bowl-hot',
                                    }),
                                    children: `Accordion\r
Header 2`,
                                }),
                                i(o, {
                                    children: i(e.p, {
                                        children:
                                            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem',
                                    }),
                                }),
                            ],
                        }),
                    }),
                    i(n, {
                        theme: 'dark',
                        indicatorPosition: 'start',
                        children: r(d, {
                            children: [
                                i(c, {
                                    prefix: i(e.i, {
                                        className: 'bx bx-bowl-hot',
                                    }),
                                    suffix: i(e.i, {
                                        className: 'bx bx-bowl-hot',
                                    }),
                                    children: `Accordion\r
Header 2`,
                                }),
                                i(o, {
                                    children: i(e.p, {
                                        children:
                                            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem',
                                    }),
                                }),
                            ],
                        }),
                    }),
                    i(n, {
                        colorScheme: {
                            background:
                                'linear-gradient(45deg, #e736f4, #673ab7)',
                            backgroundColor: '#e736f4',
                            color: 'white',
                        },
                        indicatorPosition: 'start',
                        children: r(d, {
                            children: [
                                i(c, {
                                    prefix: i(e.i, {
                                        className: 'bx bx-bowl-hot',
                                    }),
                                    suffix: i(e.i, {
                                        className: 'bx bx-bowl-hot',
                                    }),
                                    children: `Accordion\r
Header 2`,
                                }),
                                i(o, {
                                    children: i(e.p, {
                                        children:
                                            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem',
                                    }),
                                }),
                            ],
                        }),
                    }),
                ],
            }),
            `
`,
            i(e.h2, { children: 'Accordion Layout' }),
            `
`,
            i(e.p, {
                children:
                    "Artific UI provides basic four layouts to choose from to define how you component's structure should look like.",
            }),
            `
`,
            r(e.p, {
                children: [
                    'Set ',
                    i(e.code, { children: 'layout' }),
                    ' prop with the value of (',
                    i(e.code, { children: 'default' }),
                    '|',
                    i(e.code, { children: 'rounded' }),
                    '|',
                    i(e.code, { children: 'no-radius' }),
                    '|',
                    i(e.code, { children: 'pill' }),
                    ')',
                ],
            }),
            `
`,
            i(e.p, {
                children:
                    'Note: Different components might have addition layouts based on there configuration and flexibility. you can check out the props table to see which layout is supported by the component',
            }),
            `
`,
            r('div', {
                name: 'Accordion Layout',
                children: [
                    i('h5', { children: 'Basic Accordion Layout' }),
                    i(n, {
                        layout: 'default',
                        children: r(d, {
                            children: [
                                i(c, { children: 'Accordion Header' }),
                                i(o, {
                                    children: i(e.p, {
                                        children:
                                            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem',
                                    }),
                                }),
                            ],
                        }),
                    }),
                    i(n, {
                        theme: 'secondary',
                        layout: 'default',
                        children: r(d, {
                            children: [
                                i(c, { children: 'Accordion Header' }),
                                i(o, {
                                    children: i(e.p, {
                                        children:
                                            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem',
                                    }),
                                }),
                            ],
                        }),
                    }),
                    i(n, {
                        theme: 'light',
                        layout: 'default',
                        children: r(d, {
                            children: [
                                i(c, { children: 'Accordion Header' }),
                                i(o, {
                                    children: i(e.p, {
                                        children:
                                            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem',
                                    }),
                                }),
                            ],
                        }),
                    }),
                    i(n, {
                        theme: 'dark',
                        layout: 'default',
                        children: r(d, {
                            children: [
                                i(c, { children: 'Accordion Header' }),
                                i(o, {
                                    children: i(e.p, {
                                        children:
                                            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem',
                                    }),
                                }),
                            ],
                        }),
                    }),
                    i(n, {
                        colorScheme: {
                            background:
                                'linear-gradient(45deg, #e736f4, #673ab7)',
                            backgroundColor: '#e736f4',
                            color: 'white',
                        },
                        layout: 'default',
                        children: r(d, {
                            children: [
                                i(c, { children: 'Accordion Header' }),
                                i(o, {
                                    children: i(e.p, {
                                        children:
                                            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem',
                                    }),
                                }),
                            ],
                        }),
                    }),
                    i('br', {}),
                    i('br', {}),
                    i('h5', { children: 'Rounded Accordion' }),
                    i(n, {
                        layout: 'rounded',
                        children: r(d, {
                            children: [
                                i(c, { children: 'Accordion Header' }),
                                i(o, {
                                    children: i(e.p, {
                                        children:
                                            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem',
                                    }),
                                }),
                            ],
                        }),
                    }),
                    i(n, {
                        theme: 'secondary',
                        layout: 'rounded',
                        children: r(d, {
                            children: [
                                i(c, { children: 'Accordion Header' }),
                                i(o, {
                                    children: i(e.p, {
                                        children:
                                            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem',
                                    }),
                                }),
                            ],
                        }),
                    }),
                    i(n, {
                        theme: 'light',
                        layout: 'rounded',
                        children: r(d, {
                            children: [
                                i(c, { children: 'Accordion Header' }),
                                i(o, {
                                    children: i(e.p, {
                                        children:
                                            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem',
                                    }),
                                }),
                            ],
                        }),
                    }),
                    i(n, {
                        theme: 'dark',
                        layout: 'rounded',
                        children: r(d, {
                            children: [
                                i(c, { children: 'Accordion Header' }),
                                i(o, {
                                    children: i(e.p, {
                                        children:
                                            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem',
                                    }),
                                }),
                            ],
                        }),
                    }),
                    i(n, {
                        colorScheme: {
                            background:
                                'linear-gradient(45deg, #e736f4, #673ab7)',
                            backgroundColor: '#e736f4',
                            color: 'white',
                        },
                        layout: 'rounded',
                        children: r(d, {
                            children: [
                                i(c, { children: 'Accordion Header' }),
                                i(o, {
                                    children: i(e.p, {
                                        children:
                                            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem',
                                    }),
                                }),
                            ],
                        }),
                    }),
                    i('br', {}),
                    i('br', {}),
                    i('h5', { children: 'No Radius Accordion' }),
                    i(n, {
                        layout: 'no-radius',
                        children: r(d, {
                            children: [
                                i(c, { children: 'Accordion Header' }),
                                i(o, {
                                    children: i(e.p, {
                                        children:
                                            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem',
                                    }),
                                }),
                            ],
                        }),
                    }),
                    i(n, {
                        theme: 'secondary',
                        layout: 'no-radius',
                        children: r(d, {
                            children: [
                                i(c, { children: 'Accordion Header' }),
                                i(o, {
                                    children: i(e.p, {
                                        children:
                                            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem',
                                    }),
                                }),
                            ],
                        }),
                    }),
                    i(n, {
                        theme: 'light',
                        layout: 'no-radius',
                        children: r(d, {
                            children: [
                                i(c, { children: 'Accordion Header' }),
                                i(o, {
                                    children: i(e.p, {
                                        children:
                                            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem',
                                    }),
                                }),
                            ],
                        }),
                    }),
                    i(n, {
                        theme: 'dark',
                        layout: 'no-radius',
                        children: r(d, {
                            children: [
                                i(c, { children: 'Accordion Header' }),
                                i(o, {
                                    children: i(e.p, {
                                        children:
                                            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem',
                                    }),
                                }),
                            ],
                        }),
                    }),
                    i(n, {
                        colorScheme: {
                            background:
                                'linear-gradient(45deg, #e736f4, #673ab7)',
                            backgroundColor: '#e736f4',
                            color: 'white',
                        },
                        layout: 'no-radius',
                        children: r(d, {
                            children: [
                                i(c, { children: 'Accordion Header' }),
                                i(o, {
                                    children: i(e.p, {
                                        children:
                                            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem',
                                    }),
                                }),
                            ],
                        }),
                    }),
                    i('br', {}),
                    i('br', {}),
                    i('h5', { children: 'Pill Accordion' }),
                    i(n, {
                        layout: 'pill',
                        children: r(d, {
                            children: [
                                i(c, { children: 'Accordion Header' }),
                                i(o, {
                                    children: i(e.p, {
                                        children:
                                            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem',
                                    }),
                                }),
                            ],
                        }),
                    }),
                    i(n, {
                        theme: 'secondary',
                        layout: 'pill',
                        children: r(d, {
                            children: [
                                i(c, { children: 'Accordion Header' }),
                                i(o, {
                                    children: i(e.p, {
                                        children:
                                            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem',
                                    }),
                                }),
                            ],
                        }),
                    }),
                    i(n, {
                        theme: 'light',
                        layout: 'pill',
                        children: r(d, {
                            children: [
                                i(c, { children: 'Accordion Header' }),
                                i(o, {
                                    children: i(e.p, {
                                        children:
                                            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem',
                                    }),
                                }),
                            ],
                        }),
                    }),
                    i(n, {
                        theme: 'dark',
                        layout: 'pill',
                        children: r(d, {
                            children: [
                                i(c, { children: 'Accordion Header' }),
                                i(o, {
                                    children: i(e.p, {
                                        children:
                                            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem',
                                    }),
                                }),
                            ],
                        }),
                    }),
                    i(n, {
                        colorScheme: {
                            background:
                                'linear-gradient(45deg, #e736f4, #673ab7)',
                            backgroundColor: '#e736f4',
                            color: 'white',
                        },
                        layout: 'pill',
                        children: r(d, {
                            children: [
                                i(c, { children: 'Accordion Header' }),
                                i(o, {
                                    children: i(e.p, {
                                        children:
                                            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem',
                                    }),
                                }),
                            ],
                        }),
                    }),
                ],
            }),
            `
`,
            i(e.h2, { children: 'Accordion Variant' }),
            `
`,
            r(e.p, {
                children: [
                    'Artific UI provides a ',
                    i(e.code, { children: 'variant' }),
                    ' prop to make you choose how your component ui should look like',
                ],
            }),
            `
`,
            r(e.p, {
                children: [
                    'Set ',
                    i(e.code, { children: 'variant' }),
                    ' prop with the value of (',
                    i(e.code, { children: 'default' }),
                    '|',
                    i(e.code, { children: 'attached' }),
                    '|',
                    i(e.code, { children: 'separate' }),
                    '|',
                    i(e.code, { children: 'outline' }),
                    '). you can mix them with different supported ',
                    i(e.code, { children: 'theme' }),
                    ' or ',
                    i(e.code, { children: 'layout' }),
                ],
            }),
            `
`,
            i(e.p, {
                children: `Note: Different components might have addition or different variant based on there configuration and flexibility.\r
you can check out the props table to see which variant is supported by the component`,
            }),
            `
`,
            r('div', {
                name: 'Accordion Variant',
                children: [
                    i('h5', { children: 'Default Accordion Variant' }),
                    i('br', {}),
                    r(n, {
                        variant: 'default',
                        children: [
                            r(d, {
                                children: [
                                    i(c, { children: 'Accordion Header' }),
                                    i(o, {
                                        children: i(e.p, {
                                            children:
                                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem',
                                        }),
                                    }),
                                ],
                            }),
                            r(d, {
                                children: [
                                    i(c, { children: 'Accordion Header 2' }),
                                    i(o, {
                                        children: i(e.p, {
                                            children:
                                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem',
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    i('br', {}),
                    r(n, {
                        theme: 'secondary',
                        variant: 'default',
                        children: [
                            r(d, {
                                children: [
                                    i(c, { children: 'Accordion Header' }),
                                    i(o, {
                                        children: i(e.p, {
                                            children:
                                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem',
                                        }),
                                    }),
                                ],
                            }),
                            r(d, {
                                children: [
                                    i(c, { children: 'Accordion Header 2' }),
                                    i(o, {
                                        children: i(e.p, {
                                            children:
                                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem',
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    i('br', {}),
                    r(n, {
                        theme: 'light',
                        variant: 'default',
                        children: [
                            r(d, {
                                children: [
                                    i(c, { children: 'Accordion Header' }),
                                    i(o, {
                                        children: i(e.p, {
                                            children:
                                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem',
                                        }),
                                    }),
                                ],
                            }),
                            r(d, {
                                children: [
                                    i(c, { children: 'Accordion Header 2' }),
                                    i(o, {
                                        children: i(e.p, {
                                            children:
                                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem',
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    i('br', {}),
                    r(n, {
                        theme: 'dark',
                        variant: 'default',
                        children: [
                            r(d, {
                                children: [
                                    i(c, { children: 'Accordion Header' }),
                                    i(o, {
                                        children: i(e.p, {
                                            children:
                                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem',
                                        }),
                                    }),
                                ],
                            }),
                            r(d, {
                                children: [
                                    i(c, { children: 'Accordion Header 2' }),
                                    i(o, {
                                        children: i(e.p, {
                                            children:
                                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem',
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    i('br', {}),
                    r(n, {
                        colorScheme: {
                            background:
                                'linear-gradient(45deg, #e736f4, #673ab7)',
                            backgroundColor: '#e736f4',
                            color: 'white',
                        },
                        variant: 'default',
                        children: [
                            r(d, {
                                children: [
                                    i(c, { children: 'Accordion Header' }),
                                    i(o, {
                                        children: i(e.p, {
                                            children:
                                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem',
                                        }),
                                    }),
                                ],
                            }),
                            r(d, {
                                children: [
                                    i(c, { children: 'Accordion Header 2' }),
                                    i(o, {
                                        children: i(e.p, {
                                            children:
                                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem',
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    i('br', {}),
                    i('br', {}),
                    i('h5', { children: 'Attached Accordion Variant' }),
                    i('br', {}),
                    r(n, {
                        variant: 'attached',
                        children: [
                            r(d, {
                                children: [
                                    i(c, { children: 'Accordion Header' }),
                                    i(o, {
                                        children: i(e.p, {
                                            children:
                                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem',
                                        }),
                                    }),
                                ],
                            }),
                            r(d, {
                                children: [
                                    i(c, { children: 'Accordion Header 2' }),
                                    i(o, {
                                        children: i(e.p, {
                                            children:
                                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem',
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    i('br', {}),
                    r(n, {
                        theme: 'secondary',
                        variant: 'attached',
                        children: [
                            r(d, {
                                children: [
                                    i(c, { children: 'Accordion Header' }),
                                    i(o, {
                                        children: i(e.p, {
                                            children:
                                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem',
                                        }),
                                    }),
                                ],
                            }),
                            r(d, {
                                children: [
                                    i(c, { children: 'Accordion Header 2' }),
                                    i(o, {
                                        children: i(e.p, {
                                            children:
                                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem',
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    i('br', {}),
                    r(n, {
                        theme: 'light',
                        variant: 'attached',
                        children: [
                            r(d, {
                                children: [
                                    i(c, { children: 'Accordion Header' }),
                                    i(o, {
                                        children: i(e.p, {
                                            children:
                                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem',
                                        }),
                                    }),
                                ],
                            }),
                            r(d, {
                                children: [
                                    i(c, { children: 'Accordion Header 2' }),
                                    i(o, {
                                        children: i(e.p, {
                                            children:
                                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem',
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    i('br', {}),
                    r(n, {
                        theme: 'dark',
                        variant: 'attached',
                        children: [
                            r(d, {
                                children: [
                                    i(c, { children: 'Accordion Header' }),
                                    i(o, {
                                        children: i(e.p, {
                                            children:
                                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem',
                                        }),
                                    }),
                                ],
                            }),
                            r(d, {
                                children: [
                                    i(c, { children: 'Accordion Header 2' }),
                                    i(o, {
                                        children: i(e.p, {
                                            children:
                                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem',
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    i('br', {}),
                    r(n, {
                        colorScheme: {
                            background:
                                'linear-gradient(45deg, #e736f4, #673ab7)',
                            backgroundColor: '#e736f4',
                            color: 'white',
                        },
                        variant: 'attached',
                        children: [
                            r(d, {
                                children: [
                                    i(c, { children: 'Accordion Header' }),
                                    i(o, {
                                        children: i(e.p, {
                                            children:
                                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem',
                                        }),
                                    }),
                                ],
                            }),
                            r(d, {
                                children: [
                                    i(c, { children: 'Accordion Header 2' }),
                                    i(o, {
                                        children: i(e.p, {
                                            children:
                                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem',
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    i('br', {}),
                    i('br', {}),
                    i('h5', { children: 'Separate Accordion' }),
                    i('br', {}),
                    r(n, {
                        variant: 'separate',
                        children: [
                            r(d, {
                                children: [
                                    i(c, { children: 'Accordion Header' }),
                                    i(o, {
                                        children: i(e.p, {
                                            children:
                                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem',
                                        }),
                                    }),
                                ],
                            }),
                            r(d, {
                                children: [
                                    i(c, { children: 'Accordion Header 2' }),
                                    i(o, {
                                        children: i(e.p, {
                                            children:
                                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem',
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    i('br', {}),
                    r(n, {
                        theme: 'secondary',
                        variant: 'separate',
                        children: [
                            r(d, {
                                children: [
                                    i(c, { children: 'Accordion Header' }),
                                    i(o, {
                                        children: i(e.p, {
                                            children:
                                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem',
                                        }),
                                    }),
                                ],
                            }),
                            r(d, {
                                children: [
                                    i(c, { children: 'Accordion Header 2' }),
                                    i(o, {
                                        children: i(e.p, {
                                            children:
                                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem',
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    i('br', {}),
                    r(n, {
                        theme: 'light',
                        variant: 'separate',
                        children: [
                            r(d, {
                                children: [
                                    i(c, { children: 'Accordion Header' }),
                                    i(o, {
                                        children: i(e.p, {
                                            children:
                                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem',
                                        }),
                                    }),
                                ],
                            }),
                            r(d, {
                                children: [
                                    i(c, { children: 'Accordion Header 2' }),
                                    i(o, {
                                        children: i(e.p, {
                                            children:
                                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem',
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    i('br', {}),
                    r(n, {
                        theme: 'dark',
                        variant: 'separate',
                        children: [
                            r(d, {
                                children: [
                                    i(c, { children: 'Accordion Header' }),
                                    i(o, {
                                        children: i(e.p, {
                                            children:
                                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem',
                                        }),
                                    }),
                                ],
                            }),
                            r(d, {
                                children: [
                                    i(c, { children: 'Accordion Header 2' }),
                                    i(o, {
                                        children: i(e.p, {
                                            children:
                                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem',
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    i('br', {}),
                    r(n, {
                        colorScheme: {
                            background:
                                'linear-gradient(45deg, #e736f4, #673ab7)',
                            backgroundColor: '#e736f4',
                            color: 'white',
                        },
                        variant: 'separate',
                        children: [
                            r(d, {
                                children: [
                                    i(c, { children: 'Accordion Header' }),
                                    i(o, {
                                        children: i(e.p, {
                                            children:
                                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem',
                                        }),
                                    }),
                                ],
                            }),
                            r(d, {
                                children: [
                                    i(c, { children: 'Accordion Header 2' }),
                                    i(o, {
                                        children: i(e.p, {
                                            children:
                                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem',
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    i('br', {}),
                    i('br', {}),
                    i('h5', { children: 'Outlined Accordion' }),
                    i('br', {}),
                    r(n, {
                        variant: 'outline',
                        children: [
                            r(d, {
                                children: [
                                    i(c, { children: 'Accordion Header' }),
                                    i(o, {
                                        children: i(e.p, {
                                            children:
                                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem',
                                        }),
                                    }),
                                ],
                            }),
                            r(d, {
                                children: [
                                    i(c, { children: 'Accordion Header 2' }),
                                    i(o, {
                                        children: i(e.p, {
                                            children:
                                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem',
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    i('br', {}),
                    r(n, {
                        theme: 'secondary',
                        variant: 'outline',
                        children: [
                            r(d, {
                                children: [
                                    i(c, { children: 'Accordion Header' }),
                                    i(o, {
                                        children: i(e.p, {
                                            children:
                                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem',
                                        }),
                                    }),
                                ],
                            }),
                            r(d, {
                                children: [
                                    i(c, { children: 'Accordion Header 2' }),
                                    i(o, {
                                        children: i(e.p, {
                                            children:
                                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem',
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    i('br', {}),
                    r(n, {
                        theme: 'light',
                        variant: 'outline',
                        children: [
                            r(d, {
                                children: [
                                    i(c, { children: 'Accordion Header' }),
                                    i(o, {
                                        children: i(e.p, {
                                            children:
                                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem',
                                        }),
                                    }),
                                ],
                            }),
                            r(d, {
                                children: [
                                    i(c, { children: 'Accordion Header 2' }),
                                    i(o, {
                                        children: i(e.p, {
                                            children:
                                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem',
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    i('br', {}),
                    r(n, {
                        theme: 'dark',
                        variant: 'outline',
                        children: [
                            r(d, {
                                children: [
                                    i(c, { children: 'Accordion Header' }),
                                    i(o, {
                                        children: i(e.p, {
                                            children:
                                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem',
                                        }),
                                    }),
                                ],
                            }),
                            r(d, {
                                children: [
                                    i(c, { children: 'Accordion Header 2' }),
                                    i(o, {
                                        children: i(e.p, {
                                            children:
                                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem',
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    i('br', {}),
                    r(n, {
                        colorScheme: {
                            background:
                                'linear-gradient(45deg, #e736f4, #673ab7)',
                            backgroundColor: '#e736f4',
                            color: 'white',
                        },
                        variant: 'outline',
                        children: [
                            r(d, {
                                children: [
                                    i(c, { children: 'Accordion Header' }),
                                    i(o, {
                                        children: i(e.p, {
                                            children:
                                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem',
                                        }),
                                    }),
                                ],
                            }),
                            r(d, {
                                children: [
                                    i(c, { children: 'Accordion Header 2' }),
                                    i(o, {
                                        children: i(e.p, {
                                            children:
                                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem',
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            `
`,
            i(e.h2, { children: 'Accordion Sizes' }),
            `
`,
            r(e.p, {
                children: [
                    'you can use a ',
                    i(e.code, { children: 'size' }),
                    ' prop to define the size of your components',
                ],
            }),
            `
`,
            r(e.p, {
                children: [
                    'Set ',
                    i(e.code, { children: 'size' }),
                    ' prop with the value of (',
                    i(e.code, { children: 'xs' }),
                    '|',
                    i(e.code, { children: 'sm' }),
                    '|',
                    i(e.code, { children: 'md' }),
                    '|',
                    i(e.code, { children: 'lg' }),
                    ',',
                    i(e.code, { children: 'xl' }),
                    '). you can mix them with different supported ',
                    i(e.code, { children: 'theme' }),
                    ' or ',
                    i(e.code, { children: 'layout' }),
                ],
            }),
            `
`,
            r(e.p, {
                children: [
                    'Note: Mostly all the components have the same size values ie.(',
                    i(e.code, { children: 'xs' }),
                    '|',
                    i(e.code, { children: 'sm' }),
                    '|',
                    i(e.code, { children: 'md' }),
                    '|',
                    i(e.code, { children: 'lg' }),
                    ',',
                    i(e.code, { children: 'xl' }),
                    '). but some of the components might have additional sizes.',
                ],
            }),
            `
`,
            r('div', {
                name: 'Accordion Sizes',
                children: [
                    i('h5', { children: 'Extra Small Sizing' }),
                    i('br', {}),
                    i(n, {
                        size: 'xs',
                        children: r(d, {
                            children: [
                                i(c, { children: 'Accordion Header' }),
                                i(o, {
                                    children: i(e.p, {
                                        children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem\r
harum officiis`,
                                    }),
                                }),
                            ],
                        }),
                    }),
                    i(n, {
                        theme: 'secondary',
                        size: 'xs',
                        children: r(d, {
                            children: [
                                i(c, { children: 'Accordion Header' }),
                                i(o, {
                                    children: i(e.p, {
                                        children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem\r
harum officiis`,
                                    }),
                                }),
                            ],
                        }),
                    }),
                    i(n, {
                        theme: 'light',
                        size: 'xs',
                        children: r(d, {
                            children: [
                                i(c, { children: 'Accordion Header' }),
                                i(o, {
                                    children: i(e.p, {
                                        children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem\r
harum officiis`,
                                    }),
                                }),
                            ],
                        }),
                    }),
                    i(n, {
                        theme: 'dark',
                        size: 'xs',
                        children: r(d, {
                            children: [
                                i(c, { children: 'Accordion Header' }),
                                i(o, {
                                    children: i(e.p, {
                                        children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem\r
harum officiis`,
                                    }),
                                }),
                            ],
                        }),
                    }),
                    i(n, {
                        colorScheme: {
                            background:
                                'linear-gradient(45deg, #e736f4, #673ab7)',
                            backgroundColor: '#e736f4',
                            color: 'white',
                        },
                        size: 'xs',
                        children: r(d, {
                            children: [
                                i(c, { children: 'Accordion Header' }),
                                i(o, {
                                    children: i(e.p, {
                                        children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem\r
harum officiis`,
                                    }),
                                }),
                            ],
                        }),
                    }),
                    i('br', {}),
                    i('h5', { children: 'Small Size Accordion' }),
                    i('br', {}),
                    i(n, {
                        size: 'sm',
                        children: r(d, {
                            children: [
                                i(c, { children: 'Accordion Header' }),
                                i(o, {
                                    children: i(e.p, {
                                        children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem\r
harum officiis`,
                                    }),
                                }),
                            ],
                        }),
                    }),
                    i(n, {
                        theme: 'secondary',
                        size: 'sm',
                        children: r(d, {
                            children: [
                                i(c, { children: 'Accordion Header' }),
                                i(o, {
                                    children: i(e.p, {
                                        children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem\r
harum officiis`,
                                    }),
                                }),
                            ],
                        }),
                    }),
                    i(n, {
                        theme: 'light',
                        size: 'sm',
                        children: r(d, {
                            children: [
                                i(c, { children: 'Accordion Header' }),
                                i(o, {
                                    children: i(e.p, {
                                        children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem\r
harum officiis`,
                                    }),
                                }),
                            ],
                        }),
                    }),
                    i(n, {
                        theme: 'dark',
                        size: 'sm',
                        children: r(d, {
                            children: [
                                i(c, { children: 'Accordion Header' }),
                                i(o, {
                                    children: i(e.p, {
                                        children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem\r
harum officiis`,
                                    }),
                                }),
                            ],
                        }),
                    }),
                    i(n, {
                        colorScheme: {
                            background:
                                'linear-gradient(45deg, #e736f4, #673ab7)',
                            backgroundColor: '#e736f4',
                            color: 'white',
                        },
                        size: 'sm',
                        children: r(d, {
                            children: [
                                i(c, { children: 'Accordion Header' }),
                                i(o, {
                                    children: i(e.p, {
                                        children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem\r
harum officiis`,
                                    }),
                                }),
                            ],
                        }),
                    }),
                    i('br', {}),
                    i('h5', { children: 'Default/Medium Accordion' }),
                    i('br', {}),
                    i(n, {
                        size: 'md',
                        children: r(d, {
                            children: [
                                i(c, { children: 'Accordion Header' }),
                                i(o, {
                                    children: i(e.p, {
                                        children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem\r
harum officiis`,
                                    }),
                                }),
                            ],
                        }),
                    }),
                    i(n, {
                        theme: 'secondary',
                        size: 'md',
                        children: r(d, {
                            children: [
                                i(c, { children: 'Accordion Header' }),
                                i(o, {
                                    children: i(e.p, {
                                        children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem\r
harum officiis`,
                                    }),
                                }),
                            ],
                        }),
                    }),
                    i(n, {
                        theme: 'light',
                        size: 'md',
                        children: r(d, {
                            children: [
                                i(c, { children: 'Accordion Header' }),
                                i(o, {
                                    children: i(e.p, {
                                        children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem\r
harum officiis`,
                                    }),
                                }),
                            ],
                        }),
                    }),
                    i(n, {
                        theme: 'dark',
                        size: 'md',
                        children: r(d, {
                            children: [
                                i(c, { children: 'Accordion Header' }),
                                i(o, {
                                    children: i(e.p, {
                                        children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem\r
harum officiis`,
                                    }),
                                }),
                            ],
                        }),
                    }),
                    i(n, {
                        colorScheme: {
                            background:
                                'linear-gradient(45deg, #e736f4, #673ab7)',
                            backgroundColor: '#e736f4',
                            color: 'white',
                        },
                        size: 'md',
                        children: r(d, {
                            children: [
                                i(c, { children: 'Accordion Header' }),
                                i(o, {
                                    children: i(e.p, {
                                        children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem\r
harum officiis`,
                                    }),
                                }),
                            ],
                        }),
                    }),
                    i('br', {}),
                    i('h5', { children: 'Large Accordion' }),
                    i('br', {}),
                    i(n, {
                        size: 'lg',
                        children: r(d, {
                            children: [
                                i(c, { children: 'Accordion Header' }),
                                i(o, {
                                    children: i(e.p, {
                                        children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem\r
harum officiis`,
                                    }),
                                }),
                            ],
                        }),
                    }),
                    i(n, {
                        theme: 'secondary',
                        size: 'lg',
                        children: r(d, {
                            children: [
                                i(c, { children: 'Accordion Header' }),
                                i(o, {
                                    children: i(e.p, {
                                        children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem\r
harum officiis`,
                                    }),
                                }),
                            ],
                        }),
                    }),
                    i(n, {
                        theme: 'light',
                        size: 'lg',
                        children: r(d, {
                            children: [
                                i(c, { children: 'Accordion Header' }),
                                i(o, {
                                    children: i(e.p, {
                                        children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem\r
harum officiis`,
                                    }),
                                }),
                            ],
                        }),
                    }),
                    i(n, {
                        theme: 'dark',
                        size: 'lg',
                        children: r(d, {
                            children: [
                                i(c, { children: 'Accordion Header' }),
                                i(o, {
                                    children: i(e.p, {
                                        children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem\r
harum officiis`,
                                    }),
                                }),
                            ],
                        }),
                    }),
                    i(n, {
                        colorScheme: {
                            background:
                                'linear-gradient(45deg, #e736f4, #673ab7)',
                            backgroundColor: '#e736f4',
                            color: 'white',
                        },
                        size: 'lg',
                        children: r(d, {
                            children: [
                                i(c, { children: 'Accordion Header' }),
                                i(o, {
                                    children: i(e.p, {
                                        children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem\r
harum officiis`,
                                    }),
                                }),
                            ],
                        }),
                    }),
                    i('br', {}),
                    i('h5', { children: 'Extra Large Accordion' }),
                    i('br', {}),
                    i(n, {
                        size: 'xl',
                        children: r(d, {
                            children: [
                                i(c, { children: 'Accordion Header' }),
                                i(o, {
                                    children: i(e.p, {
                                        children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem\r
harum officiis`,
                                    }),
                                }),
                            ],
                        }),
                    }),
                    i(n, {
                        theme: 'secondary',
                        size: 'xl',
                        children: r(d, {
                            children: [
                                i(c, { children: 'Accordion Header' }),
                                i(o, {
                                    children: i(e.p, {
                                        children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem\r
harum officiis`,
                                    }),
                                }),
                            ],
                        }),
                    }),
                    i(n, {
                        theme: 'light',
                        size: 'xl',
                        children: r(d, {
                            children: [
                                i(c, { children: 'Accordion Header' }),
                                i(o, {
                                    children: i(e.p, {
                                        children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem\r
harum officiis`,
                                    }),
                                }),
                            ],
                        }),
                    }),
                    i(n, {
                        theme: 'dark',
                        size: 'xl',
                        children: r(d, {
                            children: [
                                i(c, { children: 'Accordion Header' }),
                                i(o, {
                                    children: i(e.p, {
                                        children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem\r
harum officiis`,
                                    }),
                                }),
                            ],
                        }),
                    }),
                    i(n, {
                        colorScheme: {
                            background:
                                'linear-gradient(45deg, #e736f4, #673ab7)',
                            backgroundColor: '#e736f4',
                            color: 'white',
                        },
                        size: 'xl',
                        children: r(d, {
                            children: [
                                i(c, { children: 'Accordion Header' }),
                                i(o, {
                                    children: i(e.p, {
                                        children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem\r
harum officiis`,
                                    }),
                                }),
                            ],
                        }),
                    }),
                ],
            }),
        ],
    })
}
function m(l = {}) {
    const { wrapper: e } = l.components || {}
    return e ? i(e, Object.assign({}, l, { children: i(t, l) })) : t(l)
}
export { m as default }
