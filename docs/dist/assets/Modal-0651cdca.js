import {
    r as o,
    a as s,
    F as v,
    j as e,
    x as t,
    k as n,
    m as a,
    n as r,
    o as l,
    p as d,
} from './index-cab7d04f.js'
const E = p => {
        const [i, c] = o.useState(!1)
        return s(v, {
            children: [
                e(t, {
                    size: 'sm',
                    type: 'button',
                    onClick: () => {
                        c(!0)
                    },
                    children: 'Open Modal',
                }),
                s(n, {
                    open: i,
                    onClose: () => {
                        c(!1)
                    },
                    children: [
                        e(a, {
                            children: e(r, {
                                variant: 'heading',
                                children: 'This is Heading',
                            }),
                        }),
                        e(l, {
                            children:
                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cum deserunt dolores eos excepturi explicabo inventore ipsam, ipsum iste necessitatibus pariatur quibusdam quod sapiente sed totam veritatis voluptates? Eos, illo, molestiae? Aliquam architecto dolorem, iusto laudantium officiis',
                        }),
                        s(d, {
                            children: [
                                e(t, {
                                    type: 'button',
                                    theme: 'primary',
                                    size: 'sm',
                                    children: 'Delete',
                                }),
                                e(t, {
                                    type: 'button',
                                    theme: 'dark',
                                    size: 'sm',
                                    children: 'Cancel',
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    },
    H = p => {
        const [i, c] = o.useState(!1),
            [b, u] = o.useState(!1),
            [f, m] = o.useState(!1)
        return s(v, {
            children: [
                e(t, {
                    type: 'button',
                    onClick: () => {
                        m(!0)
                    },
                    size: 'sm',
                    children: 'Modal with no close icon',
                }),
                e(t, {
                    type: 'button',
                    onClick: () => {
                        c(!0)
                    },
                    size: 'sm',
                    children: 'Open Non-Backdrop Dismissible Modal',
                }),
                e(t, {
                    type: 'button',
                    onClick: () => {
                        u(!0)
                    },
                    size: 'sm',
                    children: 'Open Backdrop Dismissible Modal',
                }),
                s(n, {
                    open: f,
                    dismiss: !1,
                    children: [
                        e(a, {
                            children: e(r, {
                                variant: 'heading',
                                children: 'This is Heading',
                            }),
                        }),
                        e(l, {
                            children:
                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cum deserunt dolores eos excepturi explicabo inventore ipsam, ipsum iste necessitatibus pariatur quibusdam quod sapiente sed totam veritatis voluptates? Eos, illo, molestiae? Aliquam architecto dolorem, iusto laudantium officiis',
                        }),
                        s(d, {
                            children: [
                                e(t, {
                                    type: 'button',
                                    theme: 'primary',
                                    size: 'sm',
                                    children: 'Delete',
                                }),
                                e(t, {
                                    onClick: () => {
                                        m(!1)
                                    },
                                    type: 'button',
                                    theme: 'dark',
                                    size: 'sm',
                                    children: 'Close Me From Here',
                                }),
                            ],
                        }),
                    ],
                }),
                s(n, {
                    open: i,
                    onClose: () => {
                        c(!1)
                    },
                    children: [
                        e(a, {
                            children: e(r, {
                                variant: 'heading',
                                children: 'This is Heading',
                            }),
                        }),
                        e(l, {
                            children:
                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cum deserunt dolores eos excepturi explicabo inventore ipsam, ipsum iste necessitatibus pariatur quibusdam quod sapiente sed totam veritatis voluptates? Eos, illo, molestiae? Aliquam architecto dolorem, iusto laudantium officiis',
                        }),
                        s(d, {
                            children: [
                                e(t, {
                                    type: 'button',
                                    theme: 'primary',
                                    size: 'sm',
                                    children: 'Delete',
                                }),
                                e(t, {
                                    type: 'button',
                                    theme: 'dark',
                                    size: 'sm',
                                    children: 'Cancel',
                                }),
                            ],
                        }),
                    ],
                }),
                s(n, {
                    open: b,
                    onClose: () => {
                        u(!1)
                    },
                    onBackdropClick: () => {
                        u(!1)
                    },
                    children: [
                        e(a, {
                            children: e(r, {
                                variant: 'heading',
                                children: 'This is Heading',
                            }),
                        }),
                        e(l, {
                            children:
                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cum deserunt dolores eos excepturi explicabo inventore ipsam, ipsum iste necessitatibus pariatur quibusdam quod sapiente sed totam veritatis voluptates? Eos, illo, molestiae? Aliquam architecto dolorem, iusto laudantium officiis',
                        }),
                        s(d, {
                            children: [
                                e(t, {
                                    type: 'button',
                                    theme: 'primary',
                                    size: 'sm',
                                    children: 'Delete',
                                }),
                                e(t, {
                                    type: 'button',
                                    theme: 'dark',
                                    size: 'sm',
                                    children: 'Cancel',
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    },
    A = p => {
        const [i, c] = o.useState(!1),
            [b, u] = o.useState(!1),
            [f, m] = o.useState(!1)
        return s(v, {
            children: [
                e(t, {
                    type: 'button',
                    size: 'sm',
                    onClick: () => {
                        m(!0)
                    },
                    children: 'Default Layout',
                }),
                e(t, {
                    size: 'sm',
                    type: 'button',
                    onClick: () => {
                        c(!0)
                    },
                    children: 'Rounded Layout',
                }),
                e(t, {
                    size: 'sm',
                    type: 'button',
                    onClick: () => {
                        u(!0)
                    },
                    children: 'No Radius Layout',
                }),
                s(n, {
                    open: f,
                    onClose: () => {
                        m(!1)
                    },
                    layout: 'default',
                    children: [
                        e(a, {
                            children: e(r, {
                                variant: 'heading',
                                children: 'This is Heading',
                            }),
                        }),
                        e(l, {
                            children:
                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cum deserunt dolores eos excepturi explicabo inventore ipsam, ipsum iste necessitatibus pariatur quibusdam quod sapiente sed totam veritatis voluptates? Eos, illo, molestiae? Aliquam architecto dolorem, iusto laudantium officiis',
                        }),
                        s(d, {
                            children: [
                                e(t, {
                                    type: 'button',
                                    theme: 'primary',
                                    size: 'sm',
                                    children: 'Delete',
                                }),
                                e(t, {
                                    type: 'button',
                                    theme: 'dark',
                                    size: 'sm',
                                    children: 'Close',
                                }),
                            ],
                        }),
                    ],
                }),
                s(n, {
                    open: i,
                    onClose: () => {
                        c(!1)
                    },
                    layout: 'rounded',
                    children: [
                        e(a, {
                            children: e(r, {
                                variant: 'heading',
                                children: 'This is Heading',
                            }),
                        }),
                        e(l, {
                            children:
                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cum deserunt dolores eos excepturi explicabo inventore ipsam, ipsum iste necessitatibus pariatur quibusdam quod sapiente sed totam veritatis voluptates? Eos, illo, molestiae? Aliquam architecto dolorem, iusto laudantium officiis',
                        }),
                        s(d, {
                            children: [
                                e(t, {
                                    type: 'button',
                                    theme: 'primary',
                                    size: 'sm',
                                    children: 'Delete',
                                }),
                                e(t, {
                                    type: 'button',
                                    theme: 'dark',
                                    size: 'sm',
                                    children: 'Cancel',
                                }),
                            ],
                        }),
                    ],
                }),
                s(n, {
                    open: b,
                    onClose: () => {
                        u(!1)
                    },
                    layout: 'no-radius',
                    children: [
                        e(a, {
                            children: e(r, {
                                variant: 'heading',
                                children: 'This is Heading',
                            }),
                        }),
                        e(l, {
                            children:
                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cum deserunt dolores eos excepturi explicabo inventore ipsam, ipsum iste necessitatibus pariatur quibusdam quod sapiente sed totam veritatis voluptates? Eos, illo, molestiae? Aliquam architecto dolorem, iusto laudantium officiis',
                        }),
                        s(d, {
                            children: [
                                e(t, {
                                    type: 'button',
                                    theme: 'primary',
                                    size: 'sm',
                                    children: 'Delete',
                                }),
                                e(t, {
                                    type: 'button',
                                    theme: 'dark',
                                    size: 'sm',
                                    children: 'Cancel',
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    },
    w = p => {
        const [i, c] = o.useState(!1),
            [b, u] = o.useState(!1),
            [f, m] = o.useState(!1),
            [y, h] = o.useState(!1)
        return s(v, {
            children: [
                e(t, {
                    type: 'button',
                    size: 'sm',
                    onClick: () => {
                        m(!0)
                    },
                    children: 'Default/Dark Theme',
                }),
                e(t, {
                    size: 'sm',
                    type: 'button',
                    onClick: () => {
                        c(!0)
                    },
                    children: 'Light Theme',
                }),
                e(t, {
                    size: 'sm',
                    type: 'button',
                    onClick: () => {
                        u(!0)
                    },
                    children: 'Default/Dark Theme with Blur Overlay',
                }),
                e(t, {
                    size: 'sm',
                    type: 'button',
                    onClick: () => {
                        h(!0)
                    },
                    children: 'Light Theme with Blur Overlay',
                }),
                s(n, {
                    open: f,
                    onClose: () => {
                        m(!1)
                    },
                    theme: 'dark',
                    children: [
                        e(a, {
                            children: e(r, {
                                variant: 'heading',
                                children: 'This is Heading',
                            }),
                        }),
                        e(l, {
                            children:
                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cum deserunt dolores eos excepturi explicabo inventore ipsam, ipsum iste necessitatibus pariatur quibusdam quod sapiente sed totam veritatis voluptates? Eos, illo, molestiae? Aliquam architecto dolorem, iusto laudantium officiis',
                        }),
                        s(d, {
                            children: [
                                e(t, {
                                    type: 'button',
                                    theme: 'primary',
                                    size: 'sm',
                                    children: 'Delete',
                                }),
                                e(t, {
                                    type: 'button',
                                    theme: 'dark',
                                    size: 'sm',
                                    children: 'Close',
                                }),
                            ],
                        }),
                    ],
                }),
                s(n, {
                    open: i,
                    onClose: () => {
                        c(!1)
                    },
                    theme: 'light',
                    children: [
                        e(a, {
                            children: e(r, {
                                variant: 'heading',
                                children: 'This is Heading',
                            }),
                        }),
                        e(l, {
                            children:
                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cum deserunt dolores eos excepturi explicabo inventore ipsam, ipsum iste necessitatibus pariatur quibusdam quod sapiente sed totam veritatis voluptates? Eos, illo, molestiae? Aliquam architecto dolorem, iusto laudantium officiis',
                        }),
                        s(d, {
                            children: [
                                e(t, {
                                    type: 'button',
                                    theme: 'primary',
                                    size: 'sm',
                                    children: 'Delete',
                                }),
                                e(t, {
                                    type: 'button',
                                    theme: 'dark',
                                    size: 'sm',
                                    children: 'Cancel',
                                }),
                            ],
                        }),
                    ],
                }),
                s(n, {
                    open: b,
                    onClose: () => {
                        u(!1)
                    },
                    theme: 'dark',
                    overlay: 'blur',
                    children: [
                        e(a, {
                            children: e(r, {
                                variant: 'heading',
                                children: 'This is Heading',
                            }),
                        }),
                        e(l, {
                            children:
                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cum deserunt dolores eos excepturi explicabo inventore ipsam, ipsum iste necessitatibus pariatur quibusdam quod sapiente sed totam veritatis voluptates? Eos, illo, molestiae? Aliquam architecto dolorem, iusto laudantium officiis',
                        }),
                        s(d, {
                            children: [
                                e(t, {
                                    type: 'button',
                                    theme: 'primary',
                                    size: 'sm',
                                    children: 'Delete',
                                }),
                                e(t, {
                                    type: 'button',
                                    theme: 'dark',
                                    size: 'sm',
                                    children: 'Cancel',
                                }),
                            ],
                        }),
                    ],
                }),
                s(n, {
                    open: y,
                    onClose: () => {
                        h(!1)
                    },
                    overlay: 'blur',
                    theme: 'light',
                    children: [
                        e(a, {
                            children: e(r, {
                                variant: 'heading',
                                children: 'This is Heading',
                            }),
                        }),
                        e(l, {
                            children:
                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cum deserunt dolores eos excepturi explicabo inventore ipsam, ipsum iste necessitatibus pariatur quibusdam quod sapiente sed totam veritatis voluptates? Eos, illo, molestiae? Aliquam architecto dolorem, iusto laudantium officiis',
                        }),
                        s(d, {
                            children: [
                                e(t, {
                                    type: 'button',
                                    theme: 'primary',
                                    size: 'sm',
                                    children: 'Delete',
                                }),
                                e(t, {
                                    type: 'button',
                                    theme: 'dark',
                                    size: 'sm',
                                    children: 'Cancel',
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    },
    M = p => {
        const [i, c] = o.useState(!1),
            [b, u] = o.useState(!1),
            [f, m] = o.useState(!1),
            [y, h] = o.useState(!1),
            [C, g] = o.useState(!1),
            [S, z] = o.useState(!1),
            [T, k] = o.useState(!1),
            [L, q] = o.useState(!1),
            [O, x] = o.useState(!1)
        return s(v, {
            children: [
                e(t, {
                    type: 'button',
                    size: 'sm',
                    onClick: () => {
                        m(!0)
                    },
                    children: 'Default Size',
                }),
                e(t, {
                    size: 'sm',
                    type: 'button',
                    onClick: () => {
                        c(!0)
                    },
                    children: 'Extra Small Size',
                }),
                e(t, {
                    size: 'sm',
                    type: 'button',
                    onClick: () => {
                        u(!0)
                    },
                    children: 'Small Size',
                }),
                e(t, {
                    size: 'sm',
                    type: 'button',
                    onClick: () => {
                        h(!0)
                    },
                    children: 'Large Size',
                }),
                e(t, {
                    size: 'sm',
                    type: 'button',
                    onClick: () => {
                        g(!0)
                    },
                    children: 'Extra Large Size',
                }),
                e(t, {
                    size: 'sm',
                    type: 'button',
                    onClick: () => {
                        z(!0)
                    },
                    children: 'Full Size',
                }),
                e(t, {
                    size: 'sm',
                    type: 'button',
                    onClick: () => {
                        k(!0)
                    },
                    children: 'Full width Size',
                }),
                e(t, {
                    size: 'sm',
                    type: 'button',
                    onClick: () => {
                        q(!0)
                    },
                    children: 'Full Height Size',
                }),
                e(t, {
                    size: 'sm',
                    type: 'button',
                    onClick: () => {
                        x(!0)
                    },
                    children: 'Expanded',
                }),
                s(n, {
                    open: f,
                    onClose: () => {
                        m(!1)
                    },
                    children: [
                        e(a, {
                            children: e(r, {
                                variant: 'heading',
                                children: 'This is Heading',
                            }),
                        }),
                        e(l, {
                            children:
                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cum deserunt dolores eos excepturi explicabo inventore ipsam, ipsum iste necessitatibus pariatur quibusdam quod sapiente sed totam veritatis voluptates? Eos, illo, molestiae? Aliquam architecto dolorem, iusto laudantium officiis',
                        }),
                        s(d, {
                            children: [
                                e(t, {
                                    type: 'button',
                                    theme: 'primary',
                                    size: 'sm',
                                    children: 'Delete',
                                }),
                                e(t, {
                                    type: 'button',
                                    theme: 'dark',
                                    size: 'sm',
                                    children: 'Close',
                                }),
                            ],
                        }),
                    ],
                }),
                s(n, {
                    size: 'xs',
                    open: i,
                    onClose: () => {
                        c(!1)
                    },
                    children: [
                        e(a, {
                            children: e(r, {
                                variant: 'heading',
                                children: 'This is Heading',
                            }),
                        }),
                        e(l, {
                            children:
                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cum deserunt dolores eos excepturi explicabo inventore ipsam, ipsum iste necessitatibus pariatur quibusdam quod sapiente sed totam veritatis voluptates? Eos, illo, molestiae? Aliquam architecto dolorem, iusto laudantium officiis',
                        }),
                        s(d, {
                            children: [
                                e(t, {
                                    type: 'button',
                                    theme: 'primary',
                                    size: 'sm',
                                    children: 'Delete',
                                }),
                                e(t, {
                                    type: 'button',
                                    theme: 'dark',
                                    size: 'sm',
                                    children: 'Cancel',
                                }),
                            ],
                        }),
                    ],
                }),
                s(n, {
                    size: 'sm',
                    open: b,
                    onClose: () => {
                        u(!1)
                    },
                    children: [
                        e(a, {
                            children: e(r, {
                                variant: 'heading',
                                children: 'This is Heading',
                            }),
                        }),
                        e(l, {
                            children:
                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cum deserunt dolores eos excepturi explicabo inventore ipsam, ipsum iste necessitatibus pariatur quibusdam quod sapiente sed totam veritatis voluptates? Eos, illo, molestiae? Aliquam architecto dolorem, iusto laudantium officiis',
                        }),
                        s(d, {
                            children: [
                                e(t, {
                                    type: 'button',
                                    theme: 'primary',
                                    size: 'sm',
                                    children: 'Delete',
                                }),
                                e(t, {
                                    type: 'button',
                                    theme: 'dark',
                                    size: 'sm',
                                    children: 'Cancel',
                                }),
                            ],
                        }),
                    ],
                }),
                s(n, {
                    size: 'lg',
                    open: y,
                    onClose: () => {
                        h(!1)
                    },
                    children: [
                        e(a, {
                            children: e(r, {
                                variant: 'heading',
                                children: 'This is Heading',
                            }),
                        }),
                        e(l, {
                            children:
                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cum deserunt dolores eos excepturi explicabo inventore ipsam, ipsum iste necessitatibus pariatur quibusdam quod sapiente sed totam veritatis voluptates? Eos, illo, molestiae? Aliquam architecto dolorem, iusto laudantium officiis',
                        }),
                        s(d, {
                            children: [
                                e(t, {
                                    type: 'button',
                                    theme: 'primary',
                                    size: 'sm',
                                    children: 'Delete',
                                }),
                                e(t, {
                                    type: 'button',
                                    theme: 'dark',
                                    size: 'sm',
                                    children: 'Cancel',
                                }),
                            ],
                        }),
                    ],
                }),
                s(n, {
                    size: 'xl',
                    open: C,
                    onClose: () => {
                        g(!1)
                    },
                    children: [
                        e(a, {
                            children: e(r, {
                                variant: 'heading',
                                children: 'This is Heading',
                            }),
                        }),
                        e(l, {
                            children:
                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cum deserunt dolores eos excepturi explicabo inventore ipsam, ipsum iste necessitatibus pariatur quibusdam quod sapiente sed totam veritatis voluptates? Eos, illo, molestiae? Aliquam architecto dolorem, iusto laudantium officiis',
                        }),
                        s(d, {
                            children: [
                                e(t, {
                                    type: 'button',
                                    theme: 'primary',
                                    size: 'sm',
                                    children: 'Delete',
                                }),
                                e(t, {
                                    type: 'button',
                                    theme: 'dark',
                                    size: 'sm',
                                    children: 'Cancel',
                                }),
                            ],
                        }),
                    ],
                }),
                s(n, {
                    size: 'full',
                    open: S,
                    onClose: () => {
                        z(!1)
                    },
                    children: [
                        e(a, {
                            children: e(r, {
                                variant: 'heading',
                                children: 'This is Heading',
                            }),
                        }),
                        e(l, {
                            children:
                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cum deserunt dolores eos excepturi explicabo inventore ipsam, ipsum iste necessitatibus pariatur quibusdam quod sapiente sed totam veritatis voluptates? Eos, illo, molestiae? Aliquam architecto dolorem, iusto laudantium officiis',
                        }),
                        s(d, {
                            children: [
                                e(t, {
                                    type: 'button',
                                    theme: 'primary',
                                    size: 'sm',
                                    children: 'Delete',
                                }),
                                e(t, {
                                    type: 'button',
                                    theme: 'dark',
                                    size: 'sm',
                                    children: 'Cancel',
                                }),
                            ],
                        }),
                    ],
                }),
                s(n, {
                    size: 'full-width',
                    open: T,
                    onClose: () => {
                        k(!1)
                    },
                    children: [
                        e(a, {
                            children: e(r, {
                                variant: 'heading',
                                children: 'This is Heading',
                            }),
                        }),
                        e(l, {
                            children:
                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cum deserunt dolores eos excepturi explicabo inventore ipsam, ipsum iste necessitatibus pariatur quibusdam quod sapiente sed totam veritatis voluptates? Eos, illo, molestiae? Aliquam architecto dolorem, iusto laudantium officiis',
                        }),
                        s(d, {
                            children: [
                                e(t, {
                                    type: 'button',
                                    theme: 'primary',
                                    size: 'sm',
                                    children: 'Delete',
                                }),
                                e(t, {
                                    type: 'button',
                                    theme: 'dark',
                                    size: 'sm',
                                    children: 'Cancel',
                                }),
                            ],
                        }),
                    ],
                }),
                s(n, {
                    size: 'full-height',
                    open: L,
                    onClose: () => {
                        q(!1)
                    },
                    children: [
                        e(a, {
                            children: e(r, {
                                variant: 'heading',
                                children: 'This is Heading',
                            }),
                        }),
                        e(l, {
                            children:
                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cum deserunt dolores eos excepturi explicabo inventore ipsam, ipsum iste necessitatibus pariatur quibusdam quod sapiente sed totam veritatis voluptates? Eos, illo, molestiae? Aliquam architecto dolorem, iusto laudantium officiis',
                        }),
                        s(d, {
                            children: [
                                e(t, {
                                    type: 'button',
                                    theme: 'primary',
                                    size: 'sm',
                                    children: 'Delete',
                                }),
                                e(t, {
                                    type: 'button',
                                    theme: 'dark',
                                    size: 'sm',
                                    children: 'Cancel',
                                }),
                            ],
                        }),
                    ],
                }),
                s(n, {
                    size: 'expanded',
                    open: O,
                    onClose: () => {
                        x(!1)
                    },
                    children: [
                        e(a, {
                            children: e(r, {
                                variant: 'heading',
                                children: 'This is Heading',
                            }),
                        }),
                        e(l, {
                            children:
                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cum deserunt dolores eos excepturi explicabo inventore ipsam, ipsum iste necessitatibus pariatur quibusdam quod sapiente sed totam veritatis voluptates? Eos, illo, molestiae? Aliquam architecto dolorem, iusto laudantium officiis',
                        }),
                        s(d, {
                            children: [
                                e(t, {
                                    type: 'button',
                                    theme: 'primary',
                                    size: 'sm',
                                    children: 'Delete',
                                }),
                                e(t, {
                                    type: 'button',
                                    theme: 'dark',
                                    size: 'sm',
                                    children: 'Cancel',
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    },
    B = p => {
        const [i, c] = o.useState(!1),
            [b, u] = o.useState(!1),
            [f, m] = o.useState(!1),
            [y, h] = o.useState(!1),
            [C, g] = o.useState(!1)
        return s(v, {
            children: [
                e(t, {
                    type: 'button',
                    size: 'sm',
                    onClick: () => {
                        m(!0)
                    },
                    children: 'Default Variant',
                }),
                e(t, {
                    size: 'sm',
                    type: 'button',
                    onClick: () => {
                        c(!0)
                    },
                    children: 'Striped Variant',
                }),
                e(t, {
                    size: 'sm',
                    type: 'button',
                    onClick: () => {
                        u(!0)
                    },
                    children: 'Striped Body Variant',
                }),
                e(t, {
                    size: 'sm',
                    type: 'button',
                    onClick: () => {
                        h(!0)
                    },
                    children: 'Striped Header Variant',
                }),
                e(t, {
                    size: 'sm',
                    type: 'button',
                    onClick: () => {
                        g(!0)
                    },
                    children: 'Striped Footer Variant',
                }),
                s(n, {
                    open: f,
                    onClose: () => {
                        m(!1)
                    },
                    children: [
                        e(a, {
                            children: e(r, {
                                variant: 'heading',
                                children: 'This is Heading',
                            }),
                        }),
                        e(l, {
                            children:
                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cum deserunt dolores eos excepturi explicabo inventore ipsam, ipsum iste necessitatibus pariatur quibusdam quod sapiente sed totam veritatis voluptates? Eos, illo, molestiae? Aliquam architecto dolorem, iusto laudantium officiis',
                        }),
                        s(d, {
                            children: [
                                e(t, {
                                    type: 'button',
                                    theme: 'primary',
                                    size: 'sm',
                                    children: 'Delete',
                                }),
                                e(t, {
                                    type: 'button',
                                    theme: 'dark',
                                    size: 'sm',
                                    children: 'Close',
                                }),
                            ],
                        }),
                    ],
                }),
                s(n, {
                    variant: 'striped',
                    open: i,
                    onClose: () => {
                        c(!1)
                    },
                    children: [
                        e(a, {
                            children: e(r, {
                                variant: 'heading',
                                children: 'This is Heading',
                            }),
                        }),
                        e(l, {
                            children:
                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cum deserunt dolores eos excepturi explicabo inventore ipsam, ipsum iste necessitatibus pariatur quibusdam quod sapiente sed totam veritatis voluptates? Eos, illo, molestiae? Aliquam architecto dolorem, iusto laudantium officiis',
                        }),
                        s(d, {
                            children: [
                                e(t, {
                                    type: 'button',
                                    theme: 'primary',
                                    size: 'sm',
                                    children: 'Delete',
                                }),
                                e(t, {
                                    type: 'button',
                                    theme: 'dark',
                                    size: 'sm',
                                    children: 'Cancel',
                                }),
                            ],
                        }),
                    ],
                }),
                s(n, {
                    variant: 'striped-body',
                    open: b,
                    onClose: () => {
                        u(!1)
                    },
                    children: [
                        e(a, {
                            children: e(r, {
                                variant: 'heading',
                                children: 'This is Heading',
                            }),
                        }),
                        e(l, {
                            children:
                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cum deserunt dolores eos excepturi explicabo inventore ipsam, ipsum iste necessitatibus pariatur quibusdam quod sapiente sed totam veritatis voluptates? Eos, illo, molestiae? Aliquam architecto dolorem, iusto laudantium officiis',
                        }),
                        s(d, {
                            children: [
                                e(t, {
                                    type: 'button',
                                    theme: 'primary',
                                    size: 'sm',
                                    children: 'Delete',
                                }),
                                e(t, {
                                    type: 'button',
                                    theme: 'dark',
                                    size: 'sm',
                                    children: 'Cancel',
                                }),
                            ],
                        }),
                    ],
                }),
                s(n, {
                    variant: 'striped-header',
                    open: y,
                    onClose: () => {
                        h(!1)
                    },
                    children: [
                        e(a, {
                            children: e(r, {
                                variant: 'heading',
                                children: 'This is Heading',
                            }),
                        }),
                        e(l, {
                            children:
                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cum deserunt dolores eos excepturi explicabo inventore ipsam, ipsum iste necessitatibus pariatur quibusdam quod sapiente sed totam veritatis voluptates? Eos, illo, molestiae? Aliquam architecto dolorem, iusto laudantium officiis',
                        }),
                        s(d, {
                            children: [
                                e(t, {
                                    type: 'button',
                                    theme: 'primary',
                                    size: 'sm',
                                    children: 'Delete',
                                }),
                                e(t, {
                                    type: 'button',
                                    theme: 'dark',
                                    size: 'sm',
                                    children: 'Cancel',
                                }),
                            ],
                        }),
                    ],
                }),
                s(n, {
                    variant: 'striped-footer',
                    open: C,
                    onClose: () => {
                        g(!1)
                    },
                    children: [
                        e(a, {
                            children: e(r, {
                                variant: 'heading',
                                children: 'This is Heading',
                            }),
                        }),
                        e(l, {
                            children:
                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cum deserunt dolores eos excepturi explicabo inventore ipsam, ipsum iste necessitatibus pariatur quibusdam quod sapiente sed totam veritatis voluptates? Eos, illo, molestiae? Aliquam architecto dolorem, iusto laudantium officiis',
                        }),
                        s(d, {
                            children: [
                                e(t, {
                                    type: 'button',
                                    theme: 'primary',
                                    size: 'sm',
                                    children: 'Delete',
                                }),
                                e(t, {
                                    type: 'button',
                                    theme: 'dark',
                                    size: 'sm',
                                    children: 'Cancel',
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    },
    F = p => {
        const [i, c] = o.useState(!1),
            [b, u] = o.useState(!1),
            [f, m] = o.useState(!1),
            [y, h] = o.useState(!1)
        return s(v, {
            children: [
                e(t, {
                    type: 'button',
                    size: 'sm',
                    onClick: () => {
                        m(!0)
                    },
                    children: 'Left Docking',
                }),
                e(t, {
                    size: 'sm',
                    type: 'button',
                    onClick: () => {
                        c(!0)
                    },
                    children: 'Right Docking',
                }),
                e(t, {
                    size: 'sm',
                    type: 'button',
                    onClick: () => {
                        u(!0)
                    },
                    children: 'Top Docking',
                }),
                e(t, {
                    size: 'sm',
                    type: 'button',
                    onClick: () => {
                        h(!0)
                    },
                    children: 'Bottom Docking',
                }),
                s(n, {
                    open: f,
                    dock: 'left',
                    onClose: () => {
                        m(!1)
                    },
                    children: [
                        e(a, {
                            children: e(r, {
                                variant: 'heading',
                                children: 'This is Heading',
                            }),
                        }),
                        e(l, {
                            children:
                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cum deserunt dolores eos excepturi explicabo inventore ipsam, ipsum iste necessitatibus pariatur quibusdam quod sapiente sed totam veritatis voluptates? Eos, illo, molestiae? Aliquam architecto dolorem, iusto laudantium officiis',
                        }),
                        s(d, {
                            children: [
                                e(t, {
                                    type: 'button',
                                    theme: 'primary',
                                    size: 'sm',
                                    children: 'Delete',
                                }),
                                e(t, {
                                    type: 'button',
                                    theme: 'dark',
                                    size: 'sm',
                                    children: 'Close',
                                }),
                            ],
                        }),
                    ],
                }),
                s(n, {
                    dock: 'right',
                    open: i,
                    onClose: () => {
                        c(!1)
                    },
                    children: [
                        e(a, {
                            children: e(r, {
                                variant: 'heading',
                                children: 'This is Heading',
                            }),
                        }),
                        e(l, {
                            children:
                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cum deserunt dolores eos excepturi explicabo inventore ipsam, ipsum iste necessitatibus pariatur quibusdam quod sapiente sed totam veritatis voluptates? Eos, illo, molestiae? Aliquam architecto dolorem, iusto laudantium officiis',
                        }),
                        s(d, {
                            children: [
                                e(t, {
                                    type: 'button',
                                    theme: 'primary',
                                    size: 'sm',
                                    children: 'Delete',
                                }),
                                e(t, {
                                    type: 'button',
                                    theme: 'dark',
                                    size: 'sm',
                                    children: 'Cancel',
                                }),
                            ],
                        }),
                    ],
                }),
                s(n, {
                    dock: 'top',
                    open: b,
                    onClose: () => {
                        u(!1)
                    },
                    children: [
                        e(a, {
                            children: e(r, {
                                variant: 'heading',
                                children: 'This is Heading',
                            }),
                        }),
                        e(l, {
                            children:
                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cum deserunt dolores eos excepturi explicabo inventore ipsam, ipsum iste necessitatibus pariatur quibusdam quod sapiente sed totam veritatis voluptates? Eos, illo, molestiae? Aliquam architecto dolorem, iusto laudantium officiis',
                        }),
                        s(d, {
                            children: [
                                e(t, {
                                    type: 'button',
                                    theme: 'primary',
                                    size: 'sm',
                                    children: 'Delete',
                                }),
                                e(t, {
                                    type: 'button',
                                    theme: 'dark',
                                    size: 'sm',
                                    children: 'Cancel',
                                }),
                            ],
                        }),
                    ],
                }),
                s(n, {
                    dock: 'bottom',
                    open: y,
                    onClose: () => {
                        h(!1)
                    },
                    children: [
                        e(a, {
                            children: e(r, {
                                variant: 'heading',
                                children: 'This is Heading',
                            }),
                        }),
                        e(l, {
                            children:
                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cum deserunt dolores eos excepturi explicabo inventore ipsam, ipsum iste necessitatibus pariatur quibusdam quod sapiente sed totam veritatis voluptates? Eos, illo, molestiae? Aliquam architecto dolorem, iusto laudantium officiis',
                        }),
                        s(d, {
                            children: [
                                e(t, {
                                    type: 'button',
                                    theme: 'primary',
                                    size: 'sm',
                                    children: 'Delete',
                                }),
                                e(t, {
                                    type: 'button',
                                    theme: 'dark',
                                    size: 'sm',
                                    children: 'Cancel',
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    },
    P = p => {
        const [i, c] = o.useState(!1),
            [b, u] = o.useState(!1),
            [f, m] = o.useState(!1),
            [y, h] = o.useState(!1)
        return s(v, {
            children: [
                e(t, {
                    type: 'button',
                    size: 'sm',
                    onClick: () => {
                        m(!0)
                    },
                    children: 'Left Position',
                }),
                e(t, {
                    size: 'sm',
                    type: 'button',
                    onClick: () => {
                        c(!0)
                    },
                    children: 'Right Position',
                }),
                e(t, {
                    size: 'sm',
                    type: 'button',
                    onClick: () => {
                        u(!0)
                    },
                    children: 'Top Position',
                }),
                e(t, {
                    size: 'sm',
                    type: 'button',
                    onClick: () => {
                        h(!0)
                    },
                    children: 'Bottom Position',
                }),
                s(n, {
                    open: f,
                    position: 'left',
                    size: 'full-height',
                    onClose: () => {
                        m(!1)
                    },
                    children: [
                        e(a, {
                            children: e(r, {
                                variant: 'heading',
                                children: 'This is Heading',
                            }),
                        }),
                        e(l, {
                            children:
                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cum deserunt dolores eos excepturi explicabo inventore ipsam, ipsum iste necessitatibus pariatur quibusdam quod sapiente sed totam veritatis voluptates? Eos, illo, molestiae? Aliquam architecto dolorem, iusto laudantium officiis',
                        }),
                        s(d, {
                            children: [
                                e(t, {
                                    type: 'button',
                                    theme: 'primary',
                                    size: 'sm',
                                    children: 'Delete',
                                }),
                                e(t, {
                                    type: 'button',
                                    theme: 'dark',
                                    size: 'sm',
                                    children: 'Close',
                                }),
                            ],
                        }),
                    ],
                }),
                s(n, {
                    position: 'right',
                    open: i,
                    size: 'full-height',
                    onClose: () => {
                        c(!1)
                    },
                    children: [
                        e(a, {
                            children: e(r, {
                                variant: 'heading',
                                children: 'This is Heading',
                            }),
                        }),
                        e(l, {
                            children:
                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cum deserunt dolores eos excepturi explicabo inventore ipsam, ipsum iste necessitatibus pariatur quibusdam quod sapiente sed totam veritatis voluptates? Eos, illo, molestiae? Aliquam architecto dolorem, iusto laudantium officiis',
                        }),
                        s(d, {
                            children: [
                                e(t, {
                                    type: 'button',
                                    theme: 'primary',
                                    size: 'sm',
                                    children: 'Delete',
                                }),
                                e(t, {
                                    type: 'button',
                                    theme: 'dark',
                                    size: 'sm',
                                    children: 'Cancel',
                                }),
                            ],
                        }),
                    ],
                }),
                s(n, {
                    position: 'top',
                    open: b,
                    size: 'full-width',
                    onClose: () => {
                        u(!1)
                    },
                    children: [
                        e(a, {
                            children: e(r, {
                                variant: 'heading',
                                children: 'This is Heading',
                            }),
                        }),
                        e(l, {
                            children:
                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cum deserunt dolores eos excepturi explicabo inventore ipsam, ipsum iste necessitatibus pariatur quibusdam quod sapiente sed totam veritatis voluptates? Eos, illo, molestiae? Aliquam architecto dolorem, iusto laudantium officiis',
                        }),
                        s(d, {
                            children: [
                                e(t, {
                                    type: 'button',
                                    theme: 'primary',
                                    size: 'sm',
                                    children: 'Delete',
                                }),
                                e(t, {
                                    type: 'button',
                                    theme: 'dark',
                                    size: 'sm',
                                    children: 'Cancel',
                                }),
                            ],
                        }),
                    ],
                }),
                s(n, {
                    position: 'bottom',
                    open: y,
                    size: 'full-width',
                    onClose: () => {
                        h(!1)
                    },
                    children: [
                        e(a, {
                            children: e(r, {
                                variant: 'heading',
                                children: 'This is Heading',
                            }),
                        }),
                        e(l, {
                            children:
                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cum deserunt dolores eos excepturi explicabo inventore ipsam, ipsum iste necessitatibus pariatur quibusdam quod sapiente sed totam veritatis voluptates? Eos, illo, molestiae? Aliquam architecto dolorem, iusto laudantium officiis',
                        }),
                        s(d, {
                            children: [
                                e(t, {
                                    type: 'button',
                                    theme: 'primary',
                                    size: 'sm',
                                    children: 'Delete',
                                }),
                                e(t, {
                                    type: 'button',
                                    theme: 'dark',
                                    size: 'sm',
                                    children: 'Cancel',
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    }
function D(p) {
    const i = Object.assign(
        { h1: 'h1', p: 'p', h2: 'h2', pre: 'pre', code: 'code' },
        p.components,
    )
    return s(v, {
        children: [
            e(i.h1, { children: 'Modals' }),
            `
`,
            e(i.p, {
                children:
                    'The Modal component is a dialog box/popup window that is displayed on top of the current page:',
            }),
            `
`,
            `
`,
            e('div', {
                children: e('div', { name: 'Default', children: E.bind({}) }),
            }),
            `
`,
            e(i.h2, { children: 'API' }),
            `
`,
            e(i.pre, {
                children: e(i.code, {
                    className: 'language-jsx',
                    children: `import {Modal} from 'artific-ui/Modal';
`,
                }),
            }),
            `
`,
            e(i.h2, { children: 'Dismissible' }),
            `
`,
            e(i.p, {
                children:
                    'Dismissible Modal will close itself when user clicks outside of it.',
            }),
            `
`,
            s(i.p, {
                children: [
                    e(i.code, { children: 'onClose' }),
                    ' prop expect a callback which it will use to call when user click on the close button on header.',
                ],
            }),
            `
`,
            s(i.p, {
                children: [
                    'use ',
                    e(i.code, { children: 'dismiss={false}' }),
                    " when you don't want user to close modal. it will remove the close button from header.",
                ],
            }),
            `
`,
            s(i.p, {
                children: [
                    'if you want user to close button when he clicks outside use ',
                    e(i.code, { children: 'onBackdropClick' }),
                    ' and provide it with callback to close the modal.',
                ],
            }),
            `
`,
            `
`,
            e('div', {
                children: e('div', {
                    name: 'Dismissible',
                    children: H.bind({}),
                }),
            }),
            `
`,
            e(i.h2, { children: 'Modal Layouts' }),
            `
`,
            e(i.p, {
                children:
                    "Modal Has basic four layouts to choose from to define how you component's structure should look like.",
            }),
            `
`,
            s(i.p, {
                children: [
                    'Set ',
                    e(i.code, { children: 'layout' }),
                    ' prop with the value of (',
                    e(i.code, { children: 'default' }),
                    '|',
                    e(i.code, { children: 'rounded' }),
                    '|',
                    e(i.code, { children: 'no-radius' }),
                    ')',
                ],
            }),
            `
`,
            s(i.p, {
                children: [
                    e(i.code, { children: 'Note:' }),
                    ' Different components might have addition layouts based on there configuration and flexibility. you can check out the props table to see which layout is supported by the component',
                ],
            }),
            `
`,
            `
`,
            e('div', {
                children: e('div', {
                    name: 'Modal Layouts',
                    children: A.bind({}),
                }),
            }),
            `
`,
            e(i.h2, { children: 'Modal Themes' }),
            `
`,
            s(i.p, {
                children: [
                    'If you want to use a different theme for ',
                    e(i.code, { children: 'Modal' }),
                    ' use the ',
                    e(i.code, { children: 'theme' }),
                    ' prop to set the theme',
                ],
            }),
            `
`,
            s(i.p, {
                children: [
                    'Note: All components have basic four themes ie. (',
                    e(i.code, { children: 'dark' }),
                    '|',
                    e(i.code, { children: 'light' }),
                    '). you can use either of them.',
                ],
            }),
            `
`,
            s(i.p, {
                children: [
                    'also you can use ',
                    e(i.code, { children: 'overlay' }),
                    ' prop to set your backdrop to either ',
                    e(i.code, { children: 'transparent' }),
                    ' which is default or ',
                    e(i.code, { children: 'blur' }),
                    '.',
                ],
            }),
            `
`,
            `
`,
            e('div', {
                children: e('div', {
                    name: 'Modal Themes',
                    children: w.bind({}),
                }),
            }),
            `
`,
            e(i.h2, { children: 'Modal Sizes' }),
            `
`,
            s(i.p, {
                children: [
                    'you can use a ',
                    e(i.code, { children: 'size' }),
                    ' prop to define the size of your components',
                ],
            }),
            `
`,
            s(i.p, {
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
                    '|',
                    e(i.code, { children: 'full-width' }),
                    '|',
                    e(i.code, { children: 'full-height' }),
                    '|',
                    e(i.code, { children: 'full' }),
                    '|',
                    e(i.code, { children: 'extended' }),
                    '). you can mix them with different supported ',
                    e(i.code, { children: 'theme' }),
                    ' or ',
                    e(i.code, { children: 'layout' }),
                ],
            }),
            `
`,
            `
`,
            e('div', {
                children: e('div', {
                    name: 'Modal Sizes',
                    children: M.bind({}),
                }),
            }),
            `
`,
            e(i.h2, { children: 'Modal Variants' }),
            `
`,
            s(i.p, {
                children: [
                    'Artific UI provides a ',
                    e(i.code, { children: 'variant' }),
                    ' prop to make you choose how your component ui should look like',
                ],
            }),
            `
`,
            s(i.p, {
                children: [
                    'Set ',
                    e(i.code, { children: 'variant' }),
                    ' prop with the value of (',
                    e(i.code, { children: 'default' }),
                    '|',
                    e(i.code, { children: 'striped' }),
                    '|',
                    e(i.code, { children: 'striped-body' }),
                    '|',
                    e(i.code, { children: 'striped-header' }),
                    '|',
                    e(i.code, { children: 'striped-footer' }),
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
            `
`,
            e('div', {
                children: e('div', {
                    name: 'Modal Variants',
                    children: B.bind({}),
                }),
            }),
            `
`,
            e(i.h2, { children: 'Docking' }),
            `
`,
            s(i.p, {
                children: [
                    e(i.code, { children: 'dock' }),
                    ' prop is used to make modal dock or stick to the specific direction with padding.',
                ],
            }),
            `
`,
            s(i.p, {
                children: [
                    'possible values are: (',
                    e(i.code, { children: 'left' }),
                    '|',
                    e(i.code, { children: 'right' }),
                    '|',
                    e(i.code, { children: 'top' }),
                    '|',
                    e(i.code, { children: 'bottom' }),
                    ')',
                ],
            }),
            `
`,
            `
`,
            e('div', {
                children: e('div', { name: 'Docking', children: F.bind({}) }),
            }),
            `
`,
            e(i.h2, { children: 'Positions' }),
            `
`,
            s(i.p, {
                children: [
                    e(i.code, { children: 'position' }),
                    ' prop is used to make modal start from the specific direction. The main differnce between ',
                    e(i.code, { children: 'dock' }),
                    ' and ',
                    e(i.code, { children: 'position' }),
                    ' is that position does not includes padding.',
                ],
            }),
            `
`,
            s(i.p, {
                children: [
                    'possible values are: (',
                    e(i.code, { children: 'left' }),
                    '|',
                    e(i.code, { children: 'right' }),
                    '|',
                    e(i.code, { children: 'top' }),
                    '|',
                    e(i.code, { children: 'bottom' }),
                    ')',
                ],
            }),
            `
`,
            `
`,
            e('div', {
                children: e('div', { name: 'Positions', children: P.bind({}) }),
            }),
        ],
    })
}
function j(p = {}) {
    const { wrapper: i } = p.components || {}
    return i ? e(i, Object.assign({}, p, { children: e(D, p) })) : D(p)
}
export {
    j as default,
    E as defaultTemplate,
    H as dismissTypesTemplate,
    F as dockingTemplate,
    A as layoutsTemplate,
    P as positionTemplate,
    M as sizesTemplate,
    w as themesTemplate,
    B as variantsTemplate,
}
