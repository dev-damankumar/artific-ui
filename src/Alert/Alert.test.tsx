import React from 'react'
import {findByRole, fireEvent, getByText, render,} from '@testing-library/react'
import Alert from './Alert'
import {DirectionsArray, ISizes, LayoutsArray, SizesArray, ThemesArray,} from '../types/Common.types'
import except from '../tests/except'
import {VariantsArray} from './Alert.types'

describe('Render Alert', () => {
    test('render the Alert component', () => {
        const {container} = render(<Alert>Hello World!</Alert>)
        getByText(container, 'Hello World!')
    })
    test('should handle dismiss events', async () => {
        const {container} = render(<Alert dismiss={true}>Click me!</Alert>)
        const component = container.firstChild
        const closeButton = await findByRole(container, 'button')
        fireEvent.click(closeButton)
        expect(component).not.toBeVisible()
    })
    test('render default styles', () => {
        const {container} = render(<Alert>Click Me</Alert>)
        const component = container.firstChild
        expect(component).toHaveClass('alert')
    })
})

describe('Render Alert Default Themes', () => {
    const themes = [...ThemesArray]
    themes.forEach(theme => {
        test(`render ${theme} theme`, () => {
            const {container} = render(<Alert theme={theme}>Click Me</Alert>)
            const component = container.firstChild
            expect(component).toHaveClass(
                theme === 'default' ? 'alert' : `alert-${theme}`,
            )
            expect(component).not.toHaveClass(
                ...except(themes, theme === 'default' ? '' : `alert-${theme}`),
            )
        })
    })
    test('render custom color scheme', () => {
        const colorScheme = {
            color: 'black',
            background: 'linear-gradient(45deg, black, transparent)',
            backgroundColor: 'blue',
        }
        const {container} = render(
            <Alert colorScheme={colorScheme}>Click Me</Alert>,
        )
        const element = getByText(container, 'Click Me')
        const styles = getComputedStyle(element)
        expect(styles.getPropertyValue('--ai-primary')).toBe(
            colorScheme.background,
        )
        expect(styles.getPropertyValue('--ai-primary-color')).toBe(
            colorScheme.backgroundColor,
        )
        expect(styles.getPropertyValue('--ai-primary-text')).toBe(
            colorScheme.color,
        )
    })
})

describe('Render Alert Layouts', () => {
    const layouts = [...LayoutsArray]
    layouts.forEach(layout => {
        test(`render ${layout} layout`, () => {
            const {container} = render(
                <Alert layout={layout}>Click Me</Alert>,
            )
            const component = container.firstChild
            expect(component).toHaveClass(
                layout === 'default' ? 'alert' : `alert-${layout}`,
            )
            expect(component).not.toHaveClass(
                ...except(
                    layouts,
                    layout === 'default' ? '' : `alert-${layout}`,
                ),
            )
        })
    })
})

describe('Render Alert Variants', () => {
    const variants = [...VariantsArray]
    variants.forEach(variant => {
        test(`render ${variant} variant`, () => {
            const {container} = render(
                <Alert variant={variant}>Click Me</Alert>,
            )
            const component = container.firstChild
            expect(component).toHaveClass(
                variant === 'default' ? 'alert' : `alert-${variant}`,
            )
            expect(component).not.toHaveClass(
                ...except(
                    variants,
                    variant === 'default' ? '' : `alert-${variant}`,
                ),
            )
        })
    })
})

describe('Render Alert Sizes', () => {
    const sizes = [...SizesArray]
    sizes.forEach(size => {
        test(`render ${size} size`, () => {
            const {container} = render(<Alert size={size}>Click Me</Alert>)
            const component = container.firstChild
            expect(component).toHaveClass(
                size === 'md' ? 'alert' : `alert-${ISizes[size]}`,
            )
            expect(component).not.toHaveClass(
                ...except(sizes, size === 'md' ? '' : `alert-${ISizes[size]}`),
            )
        })
    })
})

describe('Render Alert Note Variant Directions', () => {
    const directions = [...DirectionsArray]
    directions.forEach(direction => {
        test(`render ${direction} direction`, () => {
            const {container} = render(
                <Alert variant="note" direction={direction}>
                    Click Me
                </Alert>,
            )
            const component = container.firstChild
            expect(component).toHaveClass(
                direction === 'left' ? 'alert' : `alert-note-${direction}`,
            )
            expect(component).not.toHaveClass(
                ...except(
                    directions,
                    direction === 'left' ? '' : `alert-note-${direction}`,
                ),
            )
        })
    })
})
