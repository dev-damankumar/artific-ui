import React from 'react'
import {fireEvent, getByTestId, getByText, render,} from '@testing-library/react'
import Modal from './Modal'
import {LayoutsArray, ThemesArray, VariantsArray} from './Modal.types'
import except from '../tests/except'

describe('Render Modal', () => {
    test('render the Modal component', () => {
        const {container} = render(<Modal>Hello World!</Modal>)
        getByText(container, 'Hello World!')
    })
    test('should handle dismiss events', async () => {
        const onClickMock = jest.fn()
        const {container} = render(
            <Modal
                data-testid="modal"
                onBackdropClick={onClickMock}
                dismiss={true}
            >
                Click me!
            </Modal>,
        )
        const component = getByTestId(container, 'modal')
        fireEvent.click(component)
        expect(onClickMock).toBeCalled()
    })
    test('render default styles', () => {
        const {container} = render(<Modal>Click Me</Modal>)
        const component = container.firstChild
        expect(component).toHaveClass('modal')
    })
})

describe('Render Modal Default Themes', () => {
    const themes = [...ThemesArray]
    themes.forEach(theme => {
        test(`render ${theme} theme`, () => {
            const {container} = render(<Modal theme={theme}>Click Me</Modal>)
            const component = container.firstChild
            expect(component).toHaveClass(
                theme === 'dark' ? 'modal' : `modal-${theme}`,
            )
            expect(component).not.toHaveClass(
                ...except(themes, theme === 'dark' ? '' : `modal-${theme}`),
            )
        })
    })
})

describe('Render Modal Layouts', () => {
    const layouts = [...LayoutsArray]
    layouts.forEach(layout => {
        test(`render ${layout} layout`, () => {
            const {container} = render(
                <Modal layout={layout}>Click Me</Modal>,
            )
            const component = container.firstChild
            expect(component).toHaveClass(
                layout === 'default' ? 'modal' : `modal-${layout}`,
            )
            expect(component).not.toHaveClass(
                ...except(
                    layouts,
                    layout === 'default' ? '' : `modal-${layout}`,
                ),
            )
        })
    })
})

describe('Render Modal Variants', () => {
    const variants = [...VariantsArray]
    variants.forEach(variant => {
        test(`render ${variant} variant`, () => {
            const {container} = render(
                <Modal variant={variant}>Click Me</Modal>,
            )
            const component = container.firstChild
            expect(component).toHaveClass(
                variant === 'default' ? 'modal' : `modal-${variant}`,
            )
            expect(component).not.toHaveClass(
                ...except(
                    variants,
                    variant === 'default' ? '' : `modal-${variant}`,
                ),
            )
        })
    })
})

describe('Render Modal Sizes', () => {
    test('render default/md size', () => {
        const {container} = render(
            <Modal data-testid="modal">Click Me</Modal>,
        )
        const modal = getByTestId(container, 'modal')
        expect(modal.firstElementChild).toHaveClass('modal-content')
        expect(modal.firstElementChild).not.toHaveClass(
            'modal-extra-large-content',
            'modal-large-content',
            'modal-small-content',
            'modal-extra-small-content',
        )
    })
    test('render xl size', () => {
        const {container} = render(
            <Modal data-testid="modal" size="xl">
                Click Me
            </Modal>,
        )
        const modal = getByTestId(container, 'modal')
        expect(modal.firstElementChild).toHaveClass('modal-extra-large-content')
        expect(modal.firstElementChild).not.toHaveClass(
            'modal-large-content',
            'modal-small-content',
            'modal-extra-small-content',
        )
    })
    test('render lg size', () => {
        const {container} = render(
            <Modal data-testid="modal" size="lg">
                Click Me
            </Modal>,
        )
        const modal = getByTestId(container, 'modal')
        expect(modal.firstElementChild).toHaveClass('modal-large-content')
        expect(modal.firstElementChild).not.toHaveClass(
            'modal-extra-large-content',
            'modal-small-content',
            'modal-extra-small-content',
        )
    })
    test('render sm size', () => {
        const {container} = render(
            <Modal data-testid="modal" size="sm">
                Click Me
            </Modal>,
        )
        const modal = getByTestId(container, 'modal')
        expect(modal.firstElementChild).toHaveClass('modal-small-content')
        expect(modal.firstElementChild).not.toHaveClass(
            'modal-extra-large-content',
            'modal-large-content',
            'modal-extra-small-content',
        )
    })
    test('render xs size', () => {
        const {container} = render(
            <Modal data-testid="modal" size="xs">
                Click Me
            </Modal>,
        )
        const modal = getByTestId(container, 'modal')
        expect(modal.firstElementChild).toHaveClass('modal-extra-small-content')
        expect(modal.firstElementChild).not.toHaveClass(
            'modal-extra-large-content',
            'modal-large-content',
            'modal-small-content',
        )
    })

    test('render full size', () => {
        const {container} = render(<Modal size="full">Click Me</Modal>)
        const component = container.firstChild
        expect(component).toHaveClass('modal-full')
        expect(component).not.toHaveClass(
            'modal-full-width',
            'modal-full-height',
            'modal-expanded',
        )
    })
    test('render full-width size', () => {
        const {container} = render(<Modal size="full-width">Click Me</Modal>)
        const component = container.firstChild
        expect(component).toHaveClass('modal-full-width')
        expect(component).not.toHaveClass(
            'modal-full',
            'modal-full-height',
            'modal-expanded',
        )
    })
    test('render full-height size', () => {
        const {container} = render(<Modal size="full-height">Click Me</Modal>)
        const component = container.firstChild
        expect(component).toHaveClass('modal-full-height')
        expect(component).not.toHaveClass(
            'modal-full-width',
            'modal-full',
            'modal-expanded',
        )
    })
    test('render expanded size', () => {
        const {container} = render(<Modal size="expanded">Click Me</Modal>)
        const component = container.firstChild
        expect(component).toHaveClass('modal-expanded')
        expect(component).not.toHaveClass(
            'modal-full-width',
            'modal-full-height',
            'modal-full',
        )
    })
})
