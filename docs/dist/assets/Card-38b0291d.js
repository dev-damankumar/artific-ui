import {
    j as e,
    z as r,
    a as t,
    M as a,
    F as s,
    S as l,
} from './index-cab7d04f.js'
const n = c =>
    e(
        r,
        Object.assign({}, c, {
            style: { width: '50%' },
            children: t(a, {
                children: [
                    e('h4', {
                        className: 'card-title',
                        children: 'Basic Card',
                    }),
                    e('p', {
                        className: 'card-subtitle',
                        children: 'Ui Designer',
                    }),
                    e('p', {
                        className: 'card-text',
                        children:
                            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, voluptatum?',
                    }),
                    e('a', {
                        href: 'data/Card.stories#',
                        className: 'btn btn-success btn-small',
                        children: 'See Profile',
                    }),
                ],
            }),
        }),
    )
function d(c) {
    const i = Object.assign(
        { h1: 'h1', p: 'p', h2: 'h2', pre: 'pre', code: 'code' },
        c.components,
    )
    return t(s, {
        children: [
            e(i.h1, { children: 'Card' }),
            `
`,
            e(i.p, {
                children:
                    'Cards can be used for headers and footers, a wide variety of content, contain contextual background colors and images',
            }),
            `
`,
            e('div', {
                children: e('div', { name: 'Card', children: n.bind({}) }),
            }),
            `
`,
            e(i.h2, { children: 'API' }),
            `
`,
            e(i.pre, {
                children: e(i.code, {
                    className: 'language-jsx',
                    children: `import { Card } from 'artific-ui/Card';
`,
                }),
            }),
            `
`,
            e(i.h2, { children: 'Card Themes' }),
            `
`,
            t(i.p, {
                children: [
                    'If you want to use a different theme for ',
                    e(i.code, { children: 'Card' }),
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
            t(i.p, {
                children: [
                    'You can also use ',
                    e(i.code, { children: 'colorScheme' }),
                    ' prop to define a custom theme.',
                ],
            }),
            `
`,
            e('div', {
                children: e('div', {
                    name: 'Card Themes',
                    children: e('div', {
                        className: 'col-md-12',
                        children: t('div', {
                            style: {
                                display: 'flex',
                                alignItems: 'center',
                                flexWrap: 'wrap',
                            },
                            children: [
                                e('div', {
                                    style: { width: '50%' },
                                    children: e(r, {
                                        children: t(a, {
                                            children: [
                                                e('h4', {
                                                    className: 'card-title',
                                                    children:
                                                        'Basic Default Card',
                                                }),
                                                e('p', {
                                                    className: 'card-subtitle',
                                                    children: 'Ui Designer',
                                                }),
                                                e('p', {
                                                    className: 'card-text',
                                                    children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Consectetur, voluptatum?`,
                                                }),
                                                e('a', {
                                                    href: 'data/Card.stories#',
                                                    className:
                                                        'btn btn-success btn-small',
                                                    children: 'See Profile',
                                                }),
                                            ],
                                        }),
                                    }),
                                }),
                                e('div', {
                                    style: { width: '50%' },
                                    children: e(r, {
                                        theme: 'primary',
                                        children: t(a, {
                                            children: [
                                                e('h4', {
                                                    className: 'card-title',
                                                    children: 'Primary Card',
                                                }),
                                                e('p', {
                                                    className: 'card-subtitle',
                                                    children: 'Ui Designer',
                                                }),
                                                e('p', {
                                                    className: 'card-text',
                                                    children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Consectetur, voluptatum?`,
                                                }),
                                                e('a', {
                                                    href: 'data/Card.stories#',
                                                    className:
                                                        'btn btn-success btn-small',
                                                    children: 'See Profile',
                                                }),
                                            ],
                                        }),
                                    }),
                                }),
                                e('div', {
                                    style: { width: '50%' },
                                    children: e(r, {
                                        theme: 'secondary',
                                        children: t(a, {
                                            children: [
                                                e('h4', {
                                                    className: 'card-title',
                                                    children: 'Primary Card',
                                                }),
                                                e('p', {
                                                    className: 'card-subtitle',
                                                    children: 'Ui Designer',
                                                }),
                                                e('p', {
                                                    className: 'card-text',
                                                    children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Consectetur, voluptatum?`,
                                                }),
                                                e('a', {
                                                    href: 'data/Card.stories#',
                                                    className:
                                                        'btn btn-success btn-small',
                                                    children: 'See Profile',
                                                }),
                                            ],
                                        }),
                                    }),
                                }),
                                e('div', {
                                    style: { width: '50%' },
                                    children: e(r, {
                                        theme: 'dark',
                                        children: t(a, {
                                            children: [
                                                e('h4', {
                                                    className: 'card-title',
                                                    children: 'Dark Card',
                                                }),
                                                e('p', {
                                                    className: 'card-subtitle',
                                                    children: 'Ui Designer',
                                                }),
                                                e('p', {
                                                    className: 'card-text',
                                                    children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Consectetur, voluptatum?`,
                                                }),
                                                e('a', {
                                                    href: 'data/Card.stories#',
                                                    className:
                                                        'btn btn-success btn-small',
                                                    children: 'See Profile',
                                                }),
                                            ],
                                        }),
                                    }),
                                }),
                                e('div', {
                                    style: { width: '50%' },
                                    children: e(r, {
                                        theme: 'light',
                                        children: t(a, {
                                            children: [
                                                e('h4', {
                                                    className: 'card-title',
                                                    children: 'Light Card',
                                                }),
                                                e('p', {
                                                    className: 'card-subtitle',
                                                    children: 'Ui Designer',
                                                }),
                                                e('p', {
                                                    className: 'card-text',
                                                    children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Consectetur, voluptatum?`,
                                                }),
                                                e('a', {
                                                    href: 'data/Card.stories#',
                                                    className:
                                                        'btn btn-success btn-small',
                                                    children: 'See Profile',
                                                }),
                                            ],
                                        }),
                                    }),
                                }),
                                e('div', {
                                    style: { width: '50%' },
                                    children: e(r, {
                                        colorScheme: {
                                            background:
                                                'linear-gradient(45deg, #e736f4, #673ab7)',
                                            backgroundColor: '#e736f4',
                                            color: 'white',
                                        },
                                        theme: 'primary',
                                        children: t(a, {
                                            children: [
                                                e('h4', {
                                                    className: 'card-title',
                                                    children: 'Custom Card',
                                                }),
                                                e('p', {
                                                    className: 'card-subtitle',
                                                    children: 'Ui Designer',
                                                }),
                                                e('p', {
                                                    className: 'card-text',
                                                    children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Consectetur, voluptatum?`,
                                                }),
                                                e('a', {
                                                    href: 'data/Card.stories#',
                                                    className:
                                                        'btn btn-success btn-small',
                                                    children: 'See Profile',
                                                }),
                                            ],
                                        }),
                                    }),
                                }),
                            ],
                        }),
                    }),
                }),
            }),
            `
`,
            e(i.h2, { children: 'Card With Image' }),
            `
`,
            t(i.p, {
                children: [
                    'use ',
                    e(i.code, { children: 'CardImage' }),
                    ' to add the main image for your card',
                ],
            }),
            `
`,
            e('div', {
                children: e('div', {
                    name: 'Card With Image',
                    children: e('div', {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            width: '50%',
                        },
                        children: e('div', {
                            className: 'col-md-6',
                            children: t(r, {
                                children: [
                                    e(l, {
                                        src: 'https://www.w3schools.com/bootstrap4/img_avatar1.png',
                                        alt: 'Card image',
                                    }),
                                    t(a, {
                                        children: [
                                            e('h4', {
                                                className: 'card-title',
                                                children: 'Basic Card',
                                            }),
                                            e('p', {
                                                className: 'card-subtitle',
                                                children: 'Ui Designer',
                                            }),
                                            e('p', {
                                                className: 'card-text',
                                                children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Consectetur, voluptatum?`,
                                            }),
                                            e('a', {
                                                href: 'data/Card.stories#',
                                                className:
                                                    'btn btn-success btn-small',
                                                children: 'See Profile',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                    }),
                }),
            }),
            `
`,
            e(i.h2, { children: 'Card Directions' }),
            `
`,
            t(i.p, {
                children: [
                    e(i.code, { children: 'direction' }),
                    ' prop can be use to define the flow of direction of the card when ',
                    e(i.code, { children: 'CardImage' }),
                    ' is used',
                ],
            }),
            `
`,
            t(i.p, {
                children: [
                    'default ',
                    e(i.code, { children: 'direction' }),
                    ' is ',
                    e(i.code, { children: 'column' }),
                ],
            }),
            `
`,
            e('div', {
                children: e('div', {
                    name: 'Card Directions',
                    children: e('div', {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            width: '60%',
                        },
                        children: e('div', {
                            className: 'col-md-6',
                            children: t(r, {
                                direction: 'row',
                                children: [
                                    e(l, {
                                        src: 'https://www.w3schools.com/bootstrap4/img_avatar1.png',
                                        alt: 'Card image',
                                    }),
                                    t(a, {
                                        children: [
                                            e('h4', {
                                                className: 'card-title',
                                                children: 'Basic Card',
                                            }),
                                            e('p', {
                                                className: 'card-subtitle',
                                                children: 'Ui Designer',
                                            }),
                                            e('p', {
                                                className: 'card-text',
                                                children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Consectetur, voluptatum?`,
                                            }),
                                            e('a', {
                                                href: 'data/Card.stories#',
                                                className:
                                                    'btn btn-success btn-small',
                                                children: 'See Profile',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                    }),
                }),
            }),
            `
`,
            e(i.h2, { children: 'Card Layouts' }),
            `
`,
            e(i.p, {
                children:
                    "Card Has basic four layouts to choose from to define how you component's structure should look like.",
            }),
            `
`,
            t(i.p, {
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
                    e(i.code, { children: 'extended' }),
                    ')',
                ],
            }),
            `
`,
            t(i.p, {
                children: [
                    e(i.code, { children: 'Note:' }),
                    ' Different components might have addition layouts based on there configuration and flexibility. you can check out the props table to see which layout is supported by the component',
                ],
            }),
            `
`,
            e('div', {
                children: e('div', {
                    name: 'Card Layouts',
                    children: t('div', {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                        },
                        children: [
                            e('div', {
                                style: { width: '50%' },
                                children: e(r, {
                                    layout: 'default',
                                    children: t(a, {
                                        children: [
                                            e('h4', {
                                                className: 'card-title',
                                                children: 'Default Card',
                                            }),
                                            e('p', {
                                                className: 'card-subtitle',
                                                children: 'Ui Designer',
                                            }),
                                            e('p', {
                                                className: 'card-text',
                                                children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Consectetur, voluptatum?`,
                                            }),
                                            e('a', {
                                                href: 'data/Card.stories#',
                                                className:
                                                    'btn btn-success btn-small',
                                                children: 'See Profile',
                                            }),
                                        ],
                                    }),
                                }),
                            }),
                            e('div', {
                                style: { width: '50%' },
                                children: e(r, {
                                    layout: 'rounded',
                                    children: t(a, {
                                        children: [
                                            e('h4', {
                                                className: 'card-title',
                                                children: 'Rounded Card',
                                            }),
                                            e('p', {
                                                className: 'card-subtitle',
                                                children: 'Ui Designer',
                                            }),
                                            e('p', {
                                                className: 'card-text',
                                                children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Consectetur, voluptatum?`,
                                            }),
                                            e('a', {
                                                href: 'data/Card.stories#',
                                                className:
                                                    'btn btn-success btn-small',
                                                children: 'See Profile',
                                            }),
                                        ],
                                    }),
                                }),
                            }),
                            e('div', {
                                style: { width: '50%' },
                                children: e(r, {
                                    layout: 'no-radius',
                                    children: t(a, {
                                        children: [
                                            e('h4', {
                                                className: 'card-title',
                                                children: 'No Radius Card',
                                            }),
                                            e('p', {
                                                className: 'card-subtitle',
                                                children: 'Ui Designer',
                                            }),
                                            e('p', {
                                                className: 'card-text',
                                                children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Consectetur, voluptatum?`,
                                            }),
                                            e('a', {
                                                href: 'data/Card.stories#',
                                                className:
                                                    'btn btn-success btn-small',
                                                children: 'See Profile',
                                            }),
                                        ],
                                    }),
                                }),
                            }),
                            e('div', {
                                style: { width: '50%' },
                                children: t(r, {
                                    layout: 'extended',
                                    children: [
                                        e(l, {
                                            src: 'https://www.w3schools.com/bootstrap4/img_avatar1.png',
                                            alt: 'Card image',
                                        }),
                                        t(a, {
                                            children: [
                                                e('h4', {
                                                    className: 'card-title',
                                                    children: 'Extended Card',
                                                }),
                                                e('p', {
                                                    className: 'card-subtitle',
                                                    children: 'Ui Designer',
                                                }),
                                                e('p', {
                                                    className: 'card-text',
                                                    children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Consectetur, voluptatum?`,
                                                }),
                                                e('a', {
                                                    href: 'data/Card.stories#',
                                                    className:
                                                        'btn btn-success btn-small',
                                                    children: 'See Profile',
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                }),
            }),
            `
`,
            e(i.h2, { children: 'Card Variants' }),
            `
`,
            t(i.p, {
                children: [
                    'Artific UI provides a ',
                    e(i.code, { children: 'variant' }),
                    ' prop to make you choose how your component ui should look like',
                ],
            }),
            `
`,
            t(i.p, {
                children: [
                    'Set ',
                    e(i.code, { children: 'variant' }),
                    ' prop with the value of (',
                    e(i.code, { children: 'default' }),
                    '|',
                    e(i.code, { children: 'fill' }),
                    '|',
                    e(i.code, { children: 'fill-with-border' }),
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
                children: e('div', {
                    name: 'Card Variants',
                    children: t('div', {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                        },
                        children: [
                            e('div', {
                                style: { width: '50%' },
                                children: e(r, {
                                    variant: 'default',
                                    children: t(a, {
                                        children: [
                                            e('h4', {
                                                className: 'card-title',
                                                children: 'Default Variant',
                                            }),
                                            e('p', {
                                                className: 'card-subtitle',
                                                children: 'Ui Designer',
                                            }),
                                            e('p', {
                                                className: 'card-text',
                                                children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Consectetur, voluptatum?`,
                                            }),
                                            e('a', {
                                                href: 'data/Card.stories#',
                                                className:
                                                    'btn btn-success btn-small',
                                                children: 'See Profile',
                                            }),
                                        ],
                                    }),
                                }),
                            }),
                            e('div', {
                                style: { width: '50%' },
                                children: e(r, {
                                    variant: 'outline',
                                    children: t(a, {
                                        children: [
                                            e('h4', {
                                                className: 'card-title',
                                                children: 'Outline Variant',
                                            }),
                                            e('p', {
                                                className: 'card-subtitle',
                                                children: 'Ui Designer',
                                            }),
                                            e('p', {
                                                className: 'card-text',
                                                children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Consectetur, voluptatum?`,
                                            }),
                                            e('a', {
                                                href: 'data/Card.stories#',
                                                className:
                                                    'btn btn-success btn-small',
                                                children: 'See Profile',
                                            }),
                                        ],
                                    }),
                                }),
                            }),
                            e('div', {
                                style: { width: '50%' },
                                children: e(r, {
                                    variant: 'fill',
                                    children: t(a, {
                                        children: [
                                            e('h4', {
                                                className: 'card-title',
                                                children: 'Fill Variant',
                                            }),
                                            e('p', {
                                                className: 'card-subtitle',
                                                children: 'Ui Designer',
                                            }),
                                            e('p', {
                                                className: 'card-text',
                                                children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Consectetur, voluptatum?`,
                                            }),
                                            e('a', {
                                                href: 'data/Card.stories#',
                                                className:
                                                    'btn btn-success btn-small',
                                                children: 'See Profile',
                                            }),
                                        ],
                                    }),
                                }),
                            }),
                            e('div', {
                                style: { width: '50%' },
                                children: e(r, {
                                    variant: 'fill-with-border',
                                    children: t(a, {
                                        children: [
                                            e('h4', {
                                                className: 'card-title',
                                                children: 'Fill Border Variant',
                                            }),
                                            e('p', {
                                                className: 'card-subtitle',
                                                children: 'Ui Designer',
                                            }),
                                            e('p', {
                                                className: 'card-text',
                                                children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r
Consectetur, voluptatum?`,
                                            }),
                                            e('a', {
                                                href: 'data/Card.stories#',
                                                className:
                                                    'btn btn-success btn-small',
                                                children: 'See Profile',
                                            }),
                                        ],
                                    }),
                                }),
                            }),
                        ],
                    }),
                }),
            }),
            `
`,
            e(i.h2, { children: 'Basic Cards Images Layout' }),
            `
`,
            t(i.p, {
                children: [
                    e(i.code, { children: 'CardImage' }),
                    " also Has basic four layouts to choose from to define how you component's structure should look like.",
                ],
            }),
            `
`,
            t(i.p, {
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
                    ')',
                ],
            }),
            `
`,
            t(i.p, {
                children: [
                    e(i.code, { children: 'Note:' }),
                    ' Different components might have addition layouts based on there configuration and flexibility. you can check out the props table to see which layout is supported by the component',
                ],
            }),
            `
`,
            e('div', {
                children: e('div', {
                    name: 'Basic Cards Images Layout',
                    children: t('div', {
                        style: { display: 'flex', alignItems: 'center' },
                        children: [
                            e('div', {
                                style: { width: '50%' },
                                style: { width: '50%' },
                                children: t(r, {
                                    children: [
                                        e(l, {
                                            layout: 'default',
                                            src: 'https://www.w3schools.com/bootstrap4/img_avatar1.png',
                                            alt: 'Card image',
                                        }),
                                        e(a, {
                                            children: e('h5', {
                                                className: 'card-title',
                                                children:
                                                    'Default Image Layout',
                                            }),
                                        }),
                                    ],
                                }),
                            }),
                            e('div', {
                                style: { width: '50%' },
                                children: t(r, {
                                    children: [
                                        e(l, {
                                            layout: 'rounded',
                                            src: 'https://www.w3schools.com/bootstrap4/img_avatar1.png',
                                            alt: 'Card image',
                                        }),
                                        e(a, {
                                            children: e('h5', {
                                                className: 'card-title',
                                                children:
                                                    'Rounded Image Layout',
                                            }),
                                        }),
                                    ],
                                }),
                            }),
                            e('div', {
                                style: { width: '50%' },
                                children: t(r, {
                                    children: [
                                        e(l, {
                                            layout: 'no-radius',
                                            src: 'https://www.w3schools.com/bootstrap4/img_avatar1.png',
                                            alt: 'Card image',
                                        }),
                                        e(a, {
                                            children: e('h5', {
                                                className: 'card-title',
                                                children:
                                                    'No Radius Image Layout',
                                            }),
                                        }),
                                    ],
                                }),
                            }),
                            e('div', {
                                style: { width: '50%' },
                                children: t(r, {
                                    children: [
                                        e(l, {
                                            layout: 'pill',
                                            src: 'https://www.w3schools.com/bootstrap4/img_avatar1.png',
                                            alt: 'Card image',
                                        }),
                                        e(a, {
                                            children: e('h5', {
                                                className: 'card-title',
                                                children: 'Circle Image Layout',
                                            }),
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                }),
            }),
        ],
    })
}
function h(c = {}) {
    const { wrapper: i } = c.components || {}
    return i ? e(i, Object.assign({}, c, { children: e(d, c) })) : d(c)
}
export { n as Template, h as default }
