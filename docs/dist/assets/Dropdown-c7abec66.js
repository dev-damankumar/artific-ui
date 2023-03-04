import {
    a as r,
    F as t,
    d,
    j as i,
    L as l,
    Q as h,
    O as L,
    I as n,
    R as s,
} from './index-cab7d04f.js'
const c = '/assets/logo-6000b0e9.svg',
    a = k =>
        r(t, {
            children: [
                r(
                    d,
                    Object.assign({ autoClose: !1 }, k, {
                        children: [
                            i(l, { children: 'My Profile' }),
                            r(h, {
                                children: [
                                    i(L, { children: 'Main Items' }),
                                    i(n, {
                                        onSelect: alert,
                                        children: 'Link 1',
                                    }),
                                    i(n, { children: ' Link 2' }),
                                    i(s, {}),
                                    i(n, { children: 'Link 3' }),
                                    r(n, {
                                        children: [
                                            i('img', {
                                                src: 'https://artific.vercel.app/assets/images/logo.svg',
                                                style: {
                                                    width: '20px',
                                                    height: '20px',
                                                },
                                            }),
                                            ' Link 4',
                                        ],
                                    }),
                                    i(n, { children: 'Link 5' }),
                                    i(n, { children: 'Link 5' }),
                                    i(n, { children: 'Link 5' }),
                                    i(n, { children: 'Link 5' }),
                                    i(n, { children: 'Link 5' }),
                                    i(n, { children: 'Link 5' }),
                                    i(n, { children: 'Link 5' }),
                                    i(n, { children: 'Link 5' }),
                                    i(n, { children: 'Link 5' }),
                                    i(n, { children: 'Link 5' }),
                                    i(n, { children: 'Link 5' }),
                                    i(n, { children: 'Link 5' }),
                                    i(n, { children: 'Link 5' }),
                                    i(n, { children: 'Link 5' }),
                                    i(n, { children: 'Link 5' }),
                                    i(n, { children: 'Link 5' }),
                                    i(n, { children: 'Link 5' }),
                                ],
                            }),
                        ],
                    }),
                ),
                i('br', {}),
                i('br', {}),
                i('br', {}),
                i('br', {}),
                i('br', {}),
                i('br', {}),
                i('br', {}),
                i('br', {}),
                i('br', {}),
                i('br', {}),
                i('br', {}),
                i('br', {}),
                i('br', {}),
                i('br', {}),
                i('br', {}),
            ],
        })
function o(k) {
    const e = Object.assign(
        { h1: 'h1', p: 'p', h2: 'h2', pre: 'pre', code: 'code' },
        k.components,
    )
    return r(t, {
        children: [
            i(e.h1, { children: 'Dropdown' }),
            `
`,
            i(e.p, {
                children:
                    'A dropdown menu is a toggleable menu that allows the user to choose one value from a predefined list',
            }),
            `
`,
            i(e.h2, { children: 'Basic Dropdown' }),
            `
`,
            i('div', {
                children: i('div', {
                    name: 'Basic Dropdown',
                    children: a.bind({}),
                }),
            }),
            `
`,
            i(e.h2, { children: 'API' }),
            `
`,
            i(e.pre, {
                children: i(e.code, {
                    className: 'language-jsx',
                    children: `import { Dropdown } from 'artific-ui/Dropdown';
`,
                }),
            }),
            `
`,
            i(e.h2, { children: 'Dropdown Themes' }),
            `
`,
            r(e.p, {
                children: [
                    'If you want to use a different theme for ',
                    i(e.code, { children: 'Dropdown' }),
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
                    '). you can use either of them.',
                ],
            }),
            `
`,
            i('div', {
                children: r('div', {
                    name: 'Dropdown Themes',
                    children: [
                        r(d, {
                            variant: 'drawer',
                            theme: 'primary',
                            children: [
                                i(l, {
                                    children: i(e.p, { children: 'Dropdown' }),
                                }),
                                r(h, {
                                    children: [
                                        i(L, { children: 'Main Items' }),
                                        i(n, {
                                            active: !0,
                                            onSelect: alert,
                                            children: 'Link 1',
                                        }),
                                        i(n, { children: ' Link 2' }),
                                        i(n, { children: 'Link 3' }),
                                        r(n, {
                                            children: [
                                                i('img', {
                                                    src: c,
                                                    style: {
                                                        width: '20px',
                                                        height: '20px',
                                                    },
                                                }),
                                                ' Link 4',
                                            ],
                                        }),
                                        i(n, { children: 'Link 5' }),
                                    ],
                                }),
                            ],
                        }),
                        r(d, {
                            variant: 'drawer',
                            theme: 'secondary',
                            children: [
                                i(l, {
                                    children: i(e.p, { children: 'Dropdown' }),
                                }),
                                r(h, {
                                    children: [
                                        i(L, { children: 'Main Items' }),
                                        i(n, {
                                            active: !0,
                                            onSelect: alert,
                                            children: 'Link 1',
                                        }),
                                        i(n, { children: ' Link 2' }),
                                        i(n, { children: 'Link 3' }),
                                        r(n, {
                                            children: [
                                                i('img', {
                                                    src: c,
                                                    style: {
                                                        width: '20px',
                                                        height: '20px',
                                                    },
                                                }),
                                                ' Link 4',
                                            ],
                                        }),
                                        i(n, { children: 'Link 5' }),
                                    ],
                                }),
                            ],
                        }),
                        r(d, {
                            variant: 'drawer',
                            theme: 'dark',
                            children: [
                                i(l, {
                                    children: i(e.p, { children: 'Dropdown' }),
                                }),
                                r(h, {
                                    children: [
                                        i(L, { children: 'Main Items' }),
                                        i(n, {
                                            active: !0,
                                            onSelect: alert,
                                            children: 'Link 1',
                                        }),
                                        i(n, { children: ' Link 2' }),
                                        i(n, { children: 'Link 3' }),
                                        r(n, {
                                            children: [
                                                i('img', {
                                                    src: c,
                                                    style: {
                                                        width: '20px',
                                                        height: '20px',
                                                    },
                                                }),
                                                ' Link 4',
                                            ],
                                        }),
                                        i(n, { children: 'Link 5' }),
                                    ],
                                }),
                            ],
                        }),
                        r(d, {
                            variant: 'drawer',
                            theme: 'light',
                            children: [
                                i(l, {
                                    children: i(e.p, { children: 'Dropdown' }),
                                }),
                                r(h, {
                                    children: [
                                        i(L, { children: 'Main Items' }),
                                        i(n, {
                                            active: !0,
                                            onSelect: alert,
                                            children: 'Link 1',
                                        }),
                                        i(n, { children: ' Link 2' }),
                                        i(n, { children: 'Link 3' }),
                                        r(n, {
                                            children: [
                                                i('img', {
                                                    src: c,
                                                    style: {
                                                        width: '20px',
                                                        height: '20px',
                                                    },
                                                }),
                                                ' Link 4',
                                            ],
                                        }),
                                        i(n, { children: 'Link 5' }),
                                    ],
                                }),
                            ],
                        }),
                        i('br', {}),
                        i('br', {}),
                        i('br', {}),
                        i('br', {}),
                        i('br', {}),
                        i('br', {}),
                    ],
                }),
            }),
            `
`,
            i(e.h2, { children: 'Custom Dropdown' }),
            `
`,
            r(e.p, {
                children: [
                    'If you want to use a different color scheme for ',
                    i(e.code, { children: 'Dropdown' }),
                    ` instead of the provided themes then you can use\r
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
                children: r('div', {
                    name: 'Custom Dropdown',
                    children: [
                        i('h5', { children: 'Custom Dropdown' }),
                        r(d, {
                            colorScheme: {
                                background:
                                    'linear-gradient(45deg, #e736f4, #673ab7)',
                                backgroundColor: '#e736f4',
                                color: 'white',
                            },
                            children: [
                                i(l, {
                                    children: i(e.p, {
                                        children: 'My Profile',
                                    }),
                                }),
                                r(h, {
                                    children: [
                                        i(n, {
                                            onSelect: alert,
                                            children: 'Link 1',
                                        }),
                                        i(n, { children: ' Link 2' }),
                                        i(n, { children: 'Link 3' }),
                                        r(n, {
                                            children: [
                                                i('img', {
                                                    src: c,
                                                    style: {
                                                        width: '20px',
                                                        height: '20px',
                                                    },
                                                }),
                                                ' Link 4',
                                            ],
                                        }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                    ],
                                }),
                            ],
                        }),
                        i('br', {}),
                        i('br', {}),
                        i('br', {}),
                        i('br', {}),
                        i('br', {}),
                        i('br', {}),
                        i('br', {}),
                        i('br', {}),
                        i('br', {}),
                    ],
                }),
            }),
            `
`,
            i(e.h2, { children: 'Dropdown Positions' }),
            `
`,
            r(e.p, {
                children: [
                    'Use ',
                    i(e.code, { children: 'position' }),
                    ' prop to choose in which direction dropdown should open',
                ],
            }),
            `
`,
            r(e.p, {
                children: [
                    'Possible values are: (',
                    i(e.code, { children: 'left' }),
                    '|',
                    i(e.code, { children: 'right' }),
                    '|',
                    i(e.code, { children: 'top' }),
                    '|',
                    i(e.code, { children: 'bottom' }),
                    ')',
                ],
            }),
            `
`,
            i('div', {
                children: r('div', {
                    name: 'Dropdown Positions',
                    children: [
                        r(d, {
                            position: 'left',
                            style: { marginLeft: '50%' },
                            children: [
                                i(l, {
                                    children: i(e.p, {
                                        children: 'My Profile',
                                    }),
                                }),
                                r(h, {
                                    children: [
                                        i(n, {
                                            onSelect: alert,
                                            children: 'Link 1',
                                        }),
                                        i(n, { children: ' Link 2' }),
                                        i(n, { children: 'Link 3' }),
                                        r(n, {
                                            children: [
                                                i('img', {
                                                    src: c,
                                                    style: {
                                                        width: '20px',
                                                        height: '20px',
                                                    },
                                                }),
                                                ' Link 4',
                                            ],
                                        }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                    ],
                                }),
                            ],
                        }),
                        i('br', {}),
                        i('br', {}),
                        r(d, {
                            position: 'right',
                            children: [
                                i(l, {
                                    children: i(e.p, {
                                        children: 'My Profile',
                                    }),
                                }),
                                r(h, {
                                    children: [
                                        i(n, {
                                            onSelect: alert,
                                            children: 'Link 1',
                                        }),
                                        i(n, { children: ' Link 2' }),
                                        i(n, { children: 'Link 3' }),
                                        r(n, {
                                            children: [
                                                i('img', {
                                                    src: c,
                                                    style: {
                                                        width: '20px',
                                                        height: '20px',
                                                    },
                                                }),
                                                ' Link 4',
                                            ],
                                        }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                    ],
                                }),
                            ],
                        }),
                        i('br', {}),
                        i('br', {}),
                        r(d, {
                            position: 'top',
                            children: [
                                i(l, {
                                    children: i(e.p, {
                                        children: 'My Profile',
                                    }),
                                }),
                                r(h, {
                                    children: [
                                        i(n, {
                                            onSelect: alert,
                                            children: 'Link 1',
                                        }),
                                        i(n, { children: ' Link 2' }),
                                        i(n, { children: 'Link 3' }),
                                        r(n, {
                                            children: [
                                                i('img', {
                                                    src: c,
                                                    style: {
                                                        width: '20px',
                                                        height: '20px',
                                                    },
                                                }),
                                                ' Link 4',
                                            ],
                                        }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                    ],
                                }),
                            ],
                        }),
                        i('br', {}),
                        i('br', {}),
                        i('br', {}),
                        i('br', {}),
                        i('br', {}),
                        i('br', {}),
                        i('br', {}),
                        i('br', {}),
                        i('br', {}),
                    ],
                }),
            }),
            `
`,
            i(e.h2, { children: 'Full Width Dropdown' }),
            `
`,
            r(e.p, {
                children: [
                    'Dropdown has a ',
                    i(e.code, { children: 'fullWidth' }),
                    ' prop which is used to make a dropdown menu width same as the width of the button',
                ],
            }),
            `
`,
            i('div', {
                children: r('div', {
                    name: 'Full Width Dropdown',
                    children: [
                        r(d, {
                            fullwidth: !0,
                            children: [
                                i(l, {
                                    children: i(e.p, {
                                        children:
                                            'Very Long Button...................................',
                                    }),
                                }),
                                r(h, {
                                    children: [
                                        i(n, {
                                            onSelect: alert,
                                            children: 'Link 1',
                                        }),
                                        i(n, { children: ' Link 2' }),
                                        i(n, { children: 'Link 3' }),
                                        r(n, {
                                            children: [
                                                i('img', {
                                                    src: c,
                                                    style: {
                                                        width: '20px',
                                                        height: '20px',
                                                    },
                                                }),
                                                ' Link 4',
                                            ],
                                        }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                    ],
                                }),
                            ],
                        }),
                        i('br', {}),
                        i('br', {}),
                        i('br', {}),
                        i('br', {}),
                        i('br', {}),
                        i('br', {}),
                        i('br', {}),
                        i('br', {}),
                        i('br', {}),
                    ],
                }),
            }),
            `
`,
            i(e.h2, { children: 'Dropdown Layouts' }),
            `
`,
            i(e.p, {
                children:
                    "Dropdown Has basic four layouts to choose from to define how you component's structure should look like.",
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
                    i(e.code, { children: 'floating' }),
                    ')',
                ],
            }),
            `
`,
            r(e.p, {
                children: [
                    i(e.code, { children: 'Note:' }),
                    ' Different components might have addition layouts based on there configuration and flexibility. you can check out the props table to see which layout is supported by the component',
                ],
            }),
            `
`,
            i('div', {
                children: r('div', {
                    name: 'Dropdown Layouts',
                    children: [
                        r(d, {
                            layout: 'default',
                            children: [
                                i(l, {
                                    children: i(e.p, {
                                        children: 'My Profile',
                                    }),
                                }),
                                r(h, {
                                    children: [
                                        i(n, {
                                            onSelect: alert,
                                            children: 'Link 1',
                                        }),
                                        i(n, { children: ' Link 2' }),
                                        i(n, { children: 'Link 3' }),
                                        r(n, {
                                            children: [
                                                i('img', {
                                                    src: c,
                                                    style: {
                                                        width: '20px',
                                                        height: '20px',
                                                    },
                                                }),
                                                ' Link 4',
                                            ],
                                        }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                    ],
                                }),
                            ],
                        }),
                        r(d, {
                            layout: 'rounded',
                            children: [
                                i(l, {
                                    children: i(e.p, {
                                        children: 'My Profile',
                                    }),
                                }),
                                r(h, {
                                    children: [
                                        i(n, {
                                            onSelect: alert,
                                            children: 'Link 1',
                                        }),
                                        i(n, { children: ' Link 2' }),
                                        i(n, { children: 'Link 3' }),
                                        r(n, {
                                            children: [
                                                i('img', {
                                                    src: c,
                                                    style: {
                                                        width: '20px',
                                                        height: '20px',
                                                    },
                                                }),
                                                ' Link 4',
                                            ],
                                        }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                    ],
                                }),
                            ],
                        }),
                        r(d, {
                            layout: 'no-radius',
                            children: [
                                i(l, {
                                    children: i(e.p, {
                                        children: 'My Profile',
                                    }),
                                }),
                                r(h, {
                                    children: [
                                        i(n, {
                                            onSelect: alert,
                                            children: 'Link 1',
                                        }),
                                        i(n, { children: ' Link 2' }),
                                        i(n, { children: 'Link 3' }),
                                        r(n, {
                                            children: [
                                                i('img', {
                                                    src: c,
                                                    style: {
                                                        width: '20px',
                                                        height: '20px',
                                                    },
                                                }),
                                                ' Link 4',
                                            ],
                                        }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                    ],
                                }),
                            ],
                        }),
                        r(d, {
                            layout: 'floating',
                            children: [
                                i(l, {
                                    children: i(e.p, {
                                        children: 'My Profile',
                                    }),
                                }),
                                r(h, {
                                    children: [
                                        i(n, {
                                            onSelect: alert,
                                            children: 'Link 1',
                                        }),
                                        i(n, { children: ' Link 2' }),
                                        i(n, { children: 'Link 3' }),
                                        r(n, {
                                            children: [
                                                i('img', {
                                                    src: c,
                                                    style: {
                                                        width: '20px',
                                                        height: '20px',
                                                    },
                                                }),
                                                ' Link 4',
                                            ],
                                        }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                    ],
                                }),
                            ],
                        }),
                        i('br', {}),
                        i('br', {}),
                        i('br', {}),
                        i('br', {}),
                        i('br', {}),
                        i('br', {}),
                        i('br', {}),
                        i('br', {}),
                        i('br', {}),
                    ],
                }),
            }),
            `
`,
            i(e.h2, { children: 'Dropdown Variants' }),
            `
`,
            r(e.p, {
                children: [
                    'Dropdown uses ',
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
                    i(e.code, { children: 'drawer' }),
                    '|',
                    i(e.code, { children: 'fluid' }),
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
            i('div', {
                children: r('div', {
                    name: 'Dropdown Variants',
                    children: [
                        r(d, {
                            variant: 'default',
                            children: [
                                i(l, {
                                    children: i(e.p, {
                                        children: 'My Profile',
                                    }),
                                }),
                                r(h, {
                                    children: [
                                        i(n, {
                                            onSelect: alert,
                                            children: 'Link 1',
                                        }),
                                        i(n, { children: ' Link 2' }),
                                        i(n, { children: 'Link 3' }),
                                        r(n, {
                                            children: [
                                                i('img', {
                                                    src: c,
                                                    style: {
                                                        width: '20px',
                                                        height: '20px',
                                                    },
                                                }),
                                                ' Link 4',
                                            ],
                                        }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                    ],
                                }),
                            ],
                        }),
                        r(d, {
                            variant: 'drawer',
                            children: [
                                i(l, {
                                    children: i(e.p, {
                                        children: 'My Profile',
                                    }),
                                }),
                                r(h, {
                                    children: [
                                        i(n, {
                                            onSelect: alert,
                                            children: 'Link 1',
                                        }),
                                        i(n, { children: ' Link 2' }),
                                        i(n, { children: 'Link 3' }),
                                        r(n, {
                                            children: [
                                                i('img', {
                                                    src: c,
                                                    style: {
                                                        width: '20px',
                                                        height: '20px',
                                                    },
                                                }),
                                                ' Link 4',
                                            ],
                                        }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                    ],
                                }),
                            ],
                        }),
                        r(d, {
                            variant: 'fluid',
                            children: [
                                i(l, {
                                    children: i(e.p, {
                                        children: 'My Profile',
                                    }),
                                }),
                                r(h, {
                                    children: [
                                        i(n, {
                                            onSelect: alert,
                                            children: 'Link 1',
                                        }),
                                        i(n, { children: ' Link 2' }),
                                        i(n, { children: 'Link 3' }),
                                        r(n, {
                                            children: [
                                                i('img', {
                                                    src: c,
                                                    style: {
                                                        width: '20px',
                                                        height: '20px',
                                                    },
                                                }),
                                                ' Link 4',
                                            ],
                                        }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                    ],
                                }),
                            ],
                        }),
                        i('br', {}),
                        i('br', {}),
                        i('br', {}),
                        i('br', {}),
                        i('br', {}),
                        i('br', {}),
                        i('br', {}),
                        i('br', {}),
                        i('br', {}),
                    ],
                }),
            }),
            `
`,
            i(e.h2, { children: 'Dropdown Sizes' }),
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
            i('div', {
                children: r('div', {
                    name: 'Dropdown Sizes',
                    children: [
                        r(d, {
                            size: 'xs',
                            children: [
                                i(l, {
                                    children: i(e.p, {
                                        children: 'My Profile',
                                    }),
                                }),
                                r(h, {
                                    children: [
                                        i(n, {
                                            onSelect: alert,
                                            children: 'Link 1',
                                        }),
                                        i(n, { children: ' Link 2' }),
                                        i(n, { children: 'Link 3' }),
                                        r(n, {
                                            children: [
                                                i('img', {
                                                    src: c,
                                                    style: {
                                                        width: '20px',
                                                        height: '20px',
                                                    },
                                                }),
                                                ' Link 4',
                                            ],
                                        }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                    ],
                                }),
                            ],
                        }),
                        r(d, {
                            size: 'sm',
                            children: [
                                i(l, {
                                    children: i(e.p, {
                                        children: 'My Profile',
                                    }),
                                }),
                                r(h, {
                                    children: [
                                        i(n, {
                                            onSelect: alert,
                                            children: 'Link 1',
                                        }),
                                        i(n, { children: ' Link 2' }),
                                        i(n, { children: 'Link 3' }),
                                        r(n, {
                                            children: [
                                                i('img', {
                                                    src: c,
                                                    style: {
                                                        width: '20px',
                                                        height: '20px',
                                                    },
                                                }),
                                                ' Link 4',
                                            ],
                                        }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                    ],
                                }),
                            ],
                        }),
                        r(d, {
                            size: 'md',
                            children: [
                                i(l, {
                                    children: i(e.p, {
                                        children: 'My Profile',
                                    }),
                                }),
                                r(h, {
                                    children: [
                                        i(n, {
                                            onSelect: alert,
                                            children: 'Link 1',
                                        }),
                                        i(n, { children: ' Link 2' }),
                                        i(n, { children: 'Link 3' }),
                                        r(n, {
                                            children: [
                                                i('img', {
                                                    src: c,
                                                    style: {
                                                        width: '20px',
                                                        height: '20px',
                                                    },
                                                }),
                                                ' Link 4',
                                            ],
                                        }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                    ],
                                }),
                            ],
                        }),
                        r(d, {
                            size: 'lg',
                            children: [
                                i(l, {
                                    children: i(e.p, {
                                        children: 'My Profile',
                                    }),
                                }),
                                r(h, {
                                    children: [
                                        i(n, {
                                            onSelect: alert,
                                            children: 'Link 1',
                                        }),
                                        i(n, { children: ' Link 2' }),
                                        i(n, { children: 'Link 3' }),
                                        r(n, {
                                            children: [
                                                i('img', {
                                                    src: c,
                                                    style: {
                                                        width: '20px',
                                                        height: '20px',
                                                    },
                                                }),
                                                ' Link 4',
                                            ],
                                        }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                    ],
                                }),
                            ],
                        }),
                        r(d, {
                            size: 'xl',
                            children: [
                                i(l, {
                                    children: i(e.p, {
                                        children: 'My Profile',
                                    }),
                                }),
                                r(h, {
                                    children: [
                                        i(n, {
                                            onSelect: alert,
                                            children: 'Link 1',
                                        }),
                                        i(n, { children: ' Link 2' }),
                                        i(n, { children: 'Link 3' }),
                                        r(n, {
                                            children: [
                                                i('img', {
                                                    src: c,
                                                    style: {
                                                        width: '20px',
                                                        height: '20px',
                                                    },
                                                }),
                                                ' Link 4',
                                            ],
                                        }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                        i(n, { children: 'Link 5' }),
                                    ],
                                }),
                            ],
                        }),
                        i('br', {}),
                        i('br', {}),
                        i('br', {}),
                        i('br', {}),
                        i('br', {}),
                        i('br', {}),
                        i('br', {}),
                        i('br', {}),
                        i('br', {}),
                    ],
                }),
            }),
        ],
    })
}
function b(k = {}) {
    const { wrapper: e } = k.components || {}
    return e ? i(e, Object.assign({}, k, { children: i(o, k) })) : o(k)
}
export { a as Template, b as default }
