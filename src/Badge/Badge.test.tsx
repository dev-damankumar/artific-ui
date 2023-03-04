import React from 'react'
import {getByTestId, getByText, render} from '@testing-library/react'
import Badge from './Badge'
import {ISizes, LayoutsArray, SizesArray, ThemesArray,} from '../types/Common.types'
import except from '../tests/except'
import {VariantsArray} from './Badge.types'

describe('Render Badge', () => {
    test('render the Badge component', () => {
        const {container} = render(<Badge title="HW"/>)
        getByText(container, 'HW')
    })
    test('render default styles', () => {
        const {container} = render(<Badge/>)
        const component = container.firstChild
        expect(component).toHaveClass('badge')
    })
})

describe('Render Badge Default Themes', () => {
    const themes = [...ThemesArray]
    themes.forEach(theme => {
        test(`render ${theme} theme`, () => {
            const {container} = render(<Badge theme={theme}>Click Me</Badge>)
            const component = container.firstChild
            expect(component).toHaveClass(
                theme === 'default' ? 'badge' : `badge-${theme}`,
            )
            expect(component).not.toHaveClass(
                ...except(themes, theme === 'default' ? '' : `badge-${theme}`),
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
            <Badge data-testid="badge" title="AT" colorScheme={colorScheme}/>,
        )
        const element = getByTestId(container, 'badge')
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

describe('Render Badge Layouts', () => {
    const layouts = [...LayoutsArray]
    layouts.forEach(layout => {
        test(`render ${layout} layout`, () => {
            const {container} = render(
                <Badge layout={layout}>Click Me</Badge>,
            )
            const component = container.firstChild
            expect(component).toHaveClass(
                layout === 'default' ? 'badge' : `badge-${layout}`,
            )
            expect(component).not.toHaveClass(
                ...except(
                    layouts,
                    layout === 'default' ? '' : `badge-${layout}`,
                ),
            )
        })
    })
})

describe('Render Badge Variants', () => {
    const variants = [...VariantsArray]
    variants.forEach(variant => {
        test(`render ${variant} variant`, () => {
            const {container} = render(
                <Badge variant={variant}>Click Me</Badge>,
            )
            const component = container.firstChild
            expect(component).toHaveClass(
                variant === 'default' ? 'badge' : `badge-${variant}`,
            )
            expect(component).not.toHaveClass(
                ...except(
                    variants,
                    variant === 'default' ? '' : `badge-${variant}`,
                ),
            )
        })
    })
})

describe('Render Badge Sizes', () => {
    const sizes = [...SizesArray]
    sizes.forEach(size => {
        test(`render ${size} size`, () => {
            const {container} = render(<Badge size={size}>Click Me</Badge>)
            const component = container.firstChild
            expect(component).toHaveClass(
                size === 'md' ? 'badge' : `badge-${ISizes[size]}`,
            )
            expect(component).not.toHaveClass(
                ...except(sizes, size === 'md' ? '' : `badge-${ISizes[size]}`),
            )
        })
    })
})
