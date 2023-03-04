import React from 'react'
import {getByTestId, render} from '@testing-library/react'
import Progress from './Progress'
import {ISizes, SizesArray, ThemesArray} from '../types/Common.types'
import except from '../tests/except'
import {LayoutsArray, VariantsArray} from './Progress.types'

describe('Render Progress', () => {
    test('render progress bar', async () => {
        const {container} = render(<Progress value={50}></Progress>)
        const component = container.firstElementChild
        expect(component?.querySelector('.progress-bar')).toHaveStyle(
            'width:50%;',
        )
    })
    test('render progress bar label inside', async () => {
        const {container} = render(
            <Progress label="inside" value={50}></Progress>,
        )
        const component = container.firstElementChild
        expect(component?.querySelector('.progress-bar')).toHaveTextContent(
            '50%',
        )
    })
    test('render progress bar label float', async () => {
        const {container} = render(
            <Progress label="float" value={50}></Progress>,
        )
        const component = container.firstElementChild
        expect(component).toHaveClass('progress-label-float')
    })
    test('render default styles', () => {
        const {container} = render(<Progress>Click Me</Progress>)
        const component = container.firstChild
        expect(component).toHaveClass('progress')
    })
})

describe('Render Progress Default Themes', () => {
    const themes = [...ThemesArray]
    themes.forEach(theme => {
        test(`render ${theme} theme`, () => {
            const {container} = render(
                <Progress theme={theme}>Click Me</Progress>,
            )
            const component = container.firstChild
            expect(component).toHaveClass(
                theme === 'default' ? 'progress' : `progress-${theme}`,
            )
            expect(component).not.toHaveClass(
                ...except(
                    themes,
                    theme === 'default' ? '' : `progress-${theme}`,
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
            <Progress data-testid="progress" colorScheme={colorScheme}>
                Click Me
            </Progress>,
        )
        const element = getByTestId(container, 'progress')
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

    themes.forEach(theme => {
        test(`render circular progess bar ${theme} theme`, () => {
            const {container} = render(
                <Progress type="circular" theme={theme}>
                    Click Me
                </Progress>,
            )
            const component = container.firstChild
            expect(component).toHaveClass(
                theme === 'default' ? 'progress' : `progress-${theme}`,
                'progress-circular',
            )
            expect(component).not.toHaveClass(
                ...except(
                    themes,
                    theme === 'default' ? '' : `progress-${theme}`,
                ),
            )
        })
    })
    test('render circular progessbar custom color scheme', () => {
        const colorScheme = {
            color: 'black',
            background: 'linear-gradient(45deg, black, transparent)',
            backgroundColor: 'blue',
        }
        const {container} = render(
            <Progress
                type="circular"
                data-testid="progress"
                colorScheme={colorScheme}
            >
                Click Me
            </Progress>,
        )
        const element = getByTestId(container, 'progress')
        expect(element).toHaveClass('progress-circular')
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

    themes.forEach(theme => {
        test(`render line progessbar ${theme} theme`, () => {
            const {container} = render(
                <Progress type="line" theme={theme}>
                    Click Me
                </Progress>,
            )
            const component = container.firstChild
            expect(component).toHaveClass(
                theme === 'default' ? 'progress' : `progress-${theme}`,
                'progress-line',
            )
            expect(component).not.toHaveClass(
                ...except(
                    themes,
                    theme === 'default' ? '' : `progress-${theme}`,
                ),
            )
        })
    })
    test('render line progessbar custom color scheme', () => {
        const colorScheme = {
            color: 'black',
            background: 'linear-gradient(45deg, black, transparent)',
            backgroundColor: 'blue',
        }
        const {container} = render(
            <Progress
                type="line"
                data-testid="progress"
                colorScheme={colorScheme}
            >
                Click Me
            </Progress>,
        )

        const element = getByTestId(container, 'progress')
        expect(element).toHaveClass('progress-line')
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

describe('Render Progress Layouts', () => {
    const layouts = [...LayoutsArray]
    layouts.forEach(layout => {
        test(`render ${layout} layout`, () => {
            const {container} = render(
                <Progress layout={layout}>Click Me</Progress>,
            )
            const component = container.firstChild
            expect(component).toHaveClass(
                layout === 'default' ? 'progress' : `progress-${layout}`,
            )
            expect(component).not.toHaveClass(
                ...except(
                    layouts,
                    layout === 'default' ? '' : `progress-${layout}`,
                ),
            )
        })
    })

    layouts.forEach(layout => {
        test(`render circular progress bar ${layout} layout`, () => {
            const {container} = render(
                <Progress type="circular" layout={layout}>
                    Click Me
                </Progress>,
            )
            const component = container.firstChild
            expect(component).toHaveClass(
                layout === 'default' ? 'progress' : `progress-${layout}`,
                'progress-circular',
            )
            expect(component).not.toHaveClass(
                ...except(
                    layouts,
                    layout === 'default' ? '' : `progress-${layout}`,
                ),
            )
        })
    })

    layouts.forEach(layout => {
        test(`render line progress bar ${layout} layout`, () => {
            const {container} = render(
                <Progress type="line" layout={layout}>
                    Click Me
                </Progress>,
            )
            const component = container.firstChild
            expect(component).toHaveClass(
                layout === 'default' ? 'progress' : `progress-${layout}`,
                'progress-line',
            )
            expect(component).not.toHaveClass(
                ...except(
                    layouts,
                    layout === 'default' ? '' : `progress-${layout}`,
                ),
            )
        })
    })
})

describe('Render Progress Variants', () => {
    const variants = [...VariantsArray]
    variants.forEach(variant => {
        test(`render ${variant} variant`, () => {
            const {container} = render(
                <Progress variant={variant}>Click Me</Progress>,
            )
            const component = container.firstChild
            expect(component).toHaveClass(
                variant === 'default' ? 'progress' : `progress-${variant}`,
            )
            expect(component).not.toHaveClass(
                ...except(
                    variants,
                    variant === 'default' ? '' : `progress-${variant}`,
                ),
            )
        })
    })
    variants.forEach(variant => {
        test(`render circular progress bar ${variant} variant`, () => {
            const {container} = render(
                <Progress type="circular" variant={variant}>
                    Click Me
                </Progress>,
            )
            const component = container.firstChild
            expect(component).toHaveClass(
                variant === 'default' ? 'progress' : `progress-${variant}`,
                'progress-circular',
            )
            expect(component).not.toHaveClass(
                ...except(
                    variants,
                    variant === 'default' ? '' : `progress-${variant}`,
                ),
            )
        })
    })
    variants.forEach(variant => {
        test(`render line progress bar ${variant} variant`, () => {
            const {container} = render(
                <Progress type="line" variant={variant}>
                    Click Me
                </Progress>,
            )
            const component = container.firstChild
            expect(component).toHaveClass(
                variant === 'default' ? 'progress' : `progress-${variant}`,
                'progress-line',
            )
            expect(component).not.toHaveClass(
                ...except(
                    variants,
                    variant === 'default' ? '' : `progress-${variant}`,
                ),
            )
        })
    })
})

describe('Render Progress Sizes', () => {
    const sizes = [...SizesArray]
    sizes.forEach(size => {
        test(`render ${size} size`, () => {
            const {container} = render(
                <Progress size={size}>Click Me</Progress>,
            )
            const component = container.firstChild
            expect(component).toHaveClass(
                size === 'md' ? 'progress' : `progress-${ISizes[size]}`,
            )
            expect(component).not.toHaveClass(
                ...except(
                    sizes,
                    size === 'md' ? '' : `progress-${ISizes[size]}`,
                ),
            )
        })
    })
    sizes.forEach(size => {
        test(`render  circular progress bar ${size} size`, () => {
            const {container} = render(
                <Progress type="circular" size={size}>
                    Click Me
                </Progress>,
            )
            const component = container.firstChild
            expect(component).toHaveClass(
                size === 'md' ? 'progress' : `progress-${ISizes[size]}`,
                'progress-circular',
            )
            expect(component).not.toHaveClass(
                ...except(
                    sizes,
                    size === 'md' ? '' : `progress-${ISizes[size]}`,
                ),
            )
        })
    })
    sizes.forEach(size => {
        test(`render  line progress bar ${size} size`, () => {
            const {container} = render(
                <Progress type="line" size={size}>
                    Click Me
                </Progress>,
            )
            const component = container.firstChild
            expect(component).toHaveClass(
                size === 'md' ? 'progress' : `progress-${ISizes[size]}`,
                'progress-line',
            )
            expect(component).not.toHaveClass(
                ...except(
                    sizes,
                    size === 'md' ? '' : `progress-${ISizes[size]}`,
                ),
            )
        })
    })
})
