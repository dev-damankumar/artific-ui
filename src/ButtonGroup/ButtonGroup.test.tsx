import React from 'react'
import {getByTestId, getByText, render} from '@testing-library/react'
import ButtonGroup from './ButtonGroup'
import Button from '../Button'
import {ISizes, LayoutsArray, SizesArray, ThemesArray, VariantsArray,} from '../types/Common.types'
import except from '../tests/except'

describe('Render ButtonGroup', () => {
    test('render the ButtonGroup component', () => {
        const {container} = render(
            <ButtonGroup>
                <Button>Button 1</Button>
                <Button>Button 2</Button>
            </ButtonGroup>,
        )
        const component = container.firstChild
        getByText(container, 'Button 1')
        getByText(container, 'Button 2')
        expect(component).toHaveClass('btn-group')
    })
})

describe('Render ButtonGroup Default Themes', () => {
    const themes = [...ThemesArray]
    themes.forEach(theme => {
        test(`render ${theme} theme`, () => {
            const {container} = render(
                <ButtonGroup theme={theme}>
                    <Button data-testid="button1">Button 1</Button>
                    <Button data-testid="button2">Button 2</Button>
                </ButtonGroup>,
            )
            const component = container.firstChild
            expect(component?.firstChild).toHaveClass(
                theme === 'default' ? 'btn' : `btn-${theme}`,
            )
            expect(component?.firstChild).not.toHaveClass(
                ...except(themes, theme === 'default' ? '' : `btn-${theme}`),
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
            <ButtonGroup colorScheme={colorScheme}>
                <Button data-testid="button1">Button 1</Button>
                <Button data-testid="button2">Button 2</Button>
            </ButtonGroup>,
        )
        const button1 = getByTestId(container, 'button1')
        const button2 = getByTestId(container, 'button2')
        const styles = getComputedStyle(button1)
        expect(styles.getPropertyValue('--ai-primary')).toBe(
            colorScheme.background,
        )
        expect(styles.getPropertyValue('--ai-primary-color')).toBe(
            colorScheme.backgroundColor,
        )
        expect(styles.getPropertyValue('--ai-primary-text')).toBe(
            colorScheme.color,
        )

        const styles2 = getComputedStyle(button2)
        expect(styles2.getPropertyValue('--ai-primary')).toBe(
            colorScheme.background,
        )
        expect(styles2.getPropertyValue('--ai-primary-color')).toBe(
            colorScheme.backgroundColor,
        )
        expect(styles2.getPropertyValue('--ai-primary-text')).toBe(
            colorScheme.color,
        )
    })
})

describe('Render ButtonGroup Layouts', () => {
    const layouts = [...LayoutsArray]
    layouts.forEach(layout => {
        test(`render ${layout} layout`, () => {
            const {container} = render(
                <ButtonGroup layout={layout}>
                    <Button data-testid="button1">Button 1</Button>
                    <Button data-testid="button2">Button 2</Button>
                </ButtonGroup>,
            )
            const component = container?.firstChild
            expect(component?.firstChild).toHaveClass(
                layout === 'default' ? 'btn' : `btn-${layout}`,
            )
            expect(component?.firstChild).not.toHaveClass(
                ...except(layouts, layout === 'default' ? '' : `btn-${layout}`),
            )
        })
    })
})

describe('Render ButtonGroup Variants', () => {
    const variants = [...VariantsArray]
    variants.forEach(variant => {
        test(`render ${variant} variant`, () => {
            const {container} = render(
                <ButtonGroup variant={variant}>
                    <Button data-testid="button1">Button 1</Button>
                    <Button data-testid="button2">Button 2</Button>
                </ButtonGroup>,
            )
            const component = container.firstChild
            expect(component?.firstChild).toHaveClass(
                variant === 'default' ? 'btn' : `btn-${variant}`,
            )
            expect(component?.firstChild).not.toHaveClass(
                ...except(
                    variants,
                    variant === 'default' ? '' : `btn-${variant}`,
                ),
            )
        })
    })
})

describe('Render ButtonGroup Sizes', () => {
    const sizes = [...SizesArray]
    sizes.forEach(size => {
        test(`render ${size} size`, () => {
            const {container} = render(
                <ButtonGroup size={size}>
                    <Button>Button 1</Button>
                    <Button>Button 2</Button>
                </ButtonGroup>,
            )
            const component = container?.firstChild
            expect(component).toHaveClass(
                size === 'md' ? 'btn-group' : `btn-group-${ISizes[size]}`,
            )
            expect(component).not.toHaveClass(
                ...except(
                    sizes,
                    size === 'md' ? '' : `btn-group-${ISizes[size]}`,
                ),
            )
        })
    })
})
