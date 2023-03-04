import React from 'react'
import {getByTestId, render} from '@testing-library/react'
import Tooltip from './Tooltip'
import {Button} from '../Button'
import {ISizes, LayoutsArray, SizesArray, ThemesArray,} from '../types/Common.types'
import except from '../tests/except'
import {PlacementArray, VariantsArray} from './Tooltip.types'

describe('Render Tooltip', () => {
    test('render default styles', () => {
        const {container} = render(
            <Tooltip title="tooltip" data-testid="tooltip">
                <Button>Tooltip</Button>
            </Tooltip>,
        )
        const component = getByTestId(container, 'tooltip')
        expect(component).toHaveClass('tooltip')
    })
})

describe('Render Tooltip Default Themes', () => {
    const themes = [...ThemesArray]
    themes.forEach(theme => {
        test(`render ${theme} theme`, () => {
            const {container} = render(
                <Tooltip theme={theme} title="tooltip" data-testid="tooltip">
                    <Button>Tooltip</Button>
                </Tooltip>,
            )
            const component = getByTestId(container, 'tooltip')
            expect(component).toHaveClass(
                theme === 'default' ? 'tooltip' : `tooltip-${theme}`,
            )
            expect(component).not.toHaveClass(
                ...except(
                    themes,
                    theme === 'default' ? '' : `tooltip-${theme}`,
                ),
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
            <Tooltip
                title="tooltip"
                data-testid="tooltip"
                colorScheme={colorScheme}
            >
                <Button>Tooltip</Button>
            </Tooltip>,
        )
        const element = getByTestId(container, 'tooltip')
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

describe('Render Tooltip Layouts', () => {
    const layouts = [...LayoutsArray]
    layouts.forEach(layout => {
        test(`render ${layout} layout`, () => {
            const {container} = render(
                <Tooltip title="tooltip" data-testid="tooltip" layout={layout}>
                    <Button>Tooltip</Button>
                </Tooltip>,
            )
            const component = getByTestId(container, 'tooltip')
            expect(component).toHaveClass(
                layout === 'default' ? 'tooltip' : `tooltip-${layout}`,
            )
            expect(component).not.toHaveClass(
                ...except(
                    layouts,
                    layout === 'default' ? '' : `tooltip-${layout}`,
                ),
            )
        })
    })
})

describe('Render Tooltip Variants', () => {
    const variants = [...VariantsArray]
    variants.forEach(variant => {
        test(`render ${variant} variant`, () => {
            const {container} = render(
                <Tooltip
                    variant={variant}
                    title="tooltip"
                    data-testid="tooltip"
                >
                    <Button>Tooltip</Button>
                </Tooltip>,
            )
            const component = getByTestId(container, 'tooltip')
            expect(component).toHaveClass(
                variant === 'default' ? 'tooltip' : `tooltip-${variant}`,
            )
            expect(component).not.toHaveClass(
                ...except(
                    variants,
                    variant === 'default' ? '' : `tooltip-${variant}`,
                ),
            )
        })
    })
})

describe('Render Tooltip Sizes', () => {
    const sizes = [...SizesArray]
    sizes.forEach(size => {
        test(`render ${size} size`, () => {
            const {container} = render(
                <Tooltip size={size} title="tooltip" data-testid="tooltip">
                    <Button>Tooltip</Button>
                </Tooltip>,
            )
            const component = getByTestId(container, 'tooltip')
            expect(component).toHaveClass(
                size === 'md' ? 'tooltip' : `tooltip-${ISizes[size]}`,
            )
            expect(component).not.toHaveClass(
                ...except(
                    sizes,
                    size === 'md' ? '' : `tooltip-${ISizes[size]}`,
                ),
            )
        })
    })
})

describe('Render Tooltip Placements', () => {
    const placements = [...PlacementArray]
    placements.forEach(placement => {
        test(`render ${placement} placement`, () => {
            const {container} = render(
                <Tooltip
                    placement={placement}
                    title="tooltip"
                    data-testid="tooltip"
                >
                    <Button>Tooltip</Button>
                </Tooltip>,
            )
            const component = getByTestId(container, 'tooltip')
            expect(component).toHaveClass(
                placement === 'bottom' ? 'tooltip' : `tooltip-${placement}`,
            )
            expect(component).not.toHaveClass(
                ...except(
                    placements,
                    placement === 'bottom' ? '' : `tooltip-${placement}`,
                ),
            )
        })
    })
})
