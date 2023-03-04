import * as React from 'react'
import {getByTestId, render} from '@testing-library/react'
import ThemeProvider from './ThemeProvider'
import {Button} from '../Button'

describe('Render ThemeProvider', () => {
    const theme = {
        secondary: {
            main: '#F4D35E',
            text: 'white',
        },
        secondaryNew: {
            main: '#5abaf5',
            text: 'white',
        },
        primary: {
            main: '#DA4167',
            text: 'white',
        },
        light: {
            main: '#fffce6',
            text: '#000',
        },
        dark: {
            main: '#173658',
            text: 'white',
        },
    }
    test('render components with ThemeProvider', () => {
        const {container} = render(
            <ThemeProvider theme={theme}>
                <Button data-testid="btn">Hello</Button>
            </ThemeProvider>,
        )
        const component = container.firstChild
        expect(component?.nodeName.toLowerCase()).toBe('style')
        const btn = getByTestId(container, 'btn')
        expect(btn).toBeDefined()
        expect(btn).toHaveAttribute('data-theme-id')
        const styles = getComputedStyle(btn)
        expect(styles.getPropertyValue('--ai-primary')).toBe(theme.primary.main)
        expect(styles.getPropertyValue('--ai-primary-color')).toBe(
            theme.primary.main,
        )
        expect(styles.getPropertyValue('--ai-primary-text')).toBe(
            theme.primary.text,
        )

        expect(styles.getPropertyValue('--ai-secondary')).toBe(
            theme.secondary.main,
        )
        expect(styles.getPropertyValue('--ai-secondary-color')).toBe(
            theme.secondary.main,
        )
        expect(styles.getPropertyValue('--ai-secondary-text')).toBe(
            theme.secondary.text,
        )

        expect(styles.getPropertyValue('--ai-secondaryNew')).toBe(
            theme.secondaryNew.main,
        )
        expect(styles.getPropertyValue('--ai-secondaryNew-color')).toBe(
            theme.secondaryNew.main,
        )
        expect(styles.getPropertyValue('--ai-secondaryNew-text')).toBe(
            theme.secondaryNew.text,
        )

        expect(styles.getPropertyValue('--ai-light')).toBe(theme.light.main)
        expect(styles.getPropertyValue('--ai-light-color')).toBe(
            theme.light.main,
        )
        expect(styles.getPropertyValue('--ai-light-text')).toBe(
            theme.light.text,
        )

        expect(styles.getPropertyValue('--ai-dark')).toBe(theme.dark.main)
        expect(styles.getPropertyValue('--ai-dark-color')).toBe(theme.dark.main)
        expect(styles.getPropertyValue('--ai-dark-text')).toBe(theme.dark.text)
    })
})
