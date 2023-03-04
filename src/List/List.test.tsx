import React from 'react'
import {getByTestId, getByText, render} from '@testing-library/react'
import List from './List'
import ListItem from './ListItem'
import {ISizes, LayoutsArray, SizesArray, ThemesArray,} from '../types/Common.types'
import except from '../tests/except'
import {VariantsArray} from './List.types'

describe('Render List', () => {
    test('render the List component', () => {
        const {container} = render(<List>Hello World!</List>)
        getByText(container, 'Hello World!')
    })
    test('render disabled list', () => {
        const {container} = render(
            <List>
                <ListItem data-testid="item" disabled={true}>
                    item1
                </ListItem>
                <ListItem>item2</ListItem>
            </List>,
        )
        const item = getByTestId(container, 'item')

        expect(item).toHaveClass('disabled')
    })
    test('render default styles', () => {
        const {container} = render(
            <List>
                <ListItem>item1</ListItem>
                <ListItem>item2</ListItem>
            </List>,
        )
        const component = container.firstChild
        expect(component).toHaveClass('list')
    })
})

describe('Render List With Icons', () => {
    test('render suffix icon', () => {
        const {container} = render(
            <List>
                <ListItem
                    suffix={
                        <i
                            data-testid="icon1"
                            className="bx bxs-user-circle"
                        ></i>
                    }
                >
                    item1
                </ListItem>
                <ListItem>item2</ListItem>
            </List>,
        )
        const component = container.firstChild
        const icon1 = getByTestId(container, 'icon1')
        expect(component).toContainHTML(
            `<i data-testid='icon1' class='bx bxs-user-circle'></i>`,
        )
        expect(icon1.parentElement).toHaveClass('list-icon-right')
    })
    test('render prefix icon', () => {
        const {container} = render(
            <List>
                <ListItem
                    prefix={
                        <i
                            data-testid="icon1"
                            className="bx bxs-user-circle"
                        ></i>
                    }
                >
                    item1
                </ListItem>
                <ListItem>item2</ListItem>
            </List>,
        )
        const component = container.firstChild
        const icon1 = getByTestId(container, 'icon1')
        expect(component).toContainHTML(
            `<i data-testid='icon1' class='bx bxs-user-circle'></i>`,
        )
        expect(icon1.parentElement).toHaveClass('list-icon-left')
    })
    test('render both icon', () => {
        const {container} = render(
            <List>
                <ListItem
                    suffix={
                        <i
                            data-testid="icon1"
                            className="bx bxs-user-circle"
                        ></i>
                    }
                    prefix={
                        <i
                            data-testid="icon2"
                            className="bx bxs-user-circle"
                        ></i>
                    }
                >
                    item1
                </ListItem>
                <ListItem>item2</ListItem>
            </List>,
        )
        const component = container.firstChild
        const icon1 = getByTestId(container, 'icon1')
        const icon2 = getByTestId(container, 'icon2')
        expect(component).toContainHTML(
            `<i data-testid='icon1' class='bx bxs-user-circle'></i>`,
        )
        expect(component).toContainHTML(
            `<i data-testid='icon2' class='bx bxs-user-circle'></i>`,
        )
        expect(icon1.parentElement).toHaveClass('list-icon-right')
        expect(icon2.parentElement).toHaveClass('list-icon-left')
    })
})

describe('Render List Default Themes', () => {
    const themes = [...ThemesArray]
    themes.forEach(theme => {
        test(`render ${theme} theme`, () => {
            const {container} = render(
                <List theme={theme}>
                    <ListItem>item1</ListItem>
                    <ListItem>item2</ListItem>
                </List>,
            )
            const component = container.firstChild
            expect(component).toHaveClass(
                theme === 'default' ? 'list' : `list-${theme}`,
            )
            expect(component).not.toHaveClass(
                ...except(themes, theme === 'default' ? '' : `list-${theme}`),
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
            <List data-testid="item1" colorScheme={colorScheme}>
                <ListItem>item1</ListItem>
                <ListItem>item2</ListItem>
            </List>,
        )
        const element = getByTestId(container, 'item1')
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

describe('Render List Layouts', () => {
    const layouts = [...LayoutsArray]
    layouts.forEach(layout => {
        test(`render ${layout} layout`, () => {
            const {container} = render(
                <List layout={layout}>
                    <ListItem>item1</ListItem>
                    <ListItem>item2</ListItem>
                </List>,
            )
            const component = container.firstChild
            expect(component).toHaveClass(
                layout === 'default' ? 'list' : `list-${layout}`,
            )
            expect(component).not.toHaveClass(
                ...except(
                    layouts,
                    layout === 'default' ? '' : `list-${layout}`,
                ),
            )
        })
    })
})

describe('Render List Variants', () => {
    const variants = [...VariantsArray]
    variants.forEach(variant => {
        test(`render ${variant} variant`, () => {
            const {container} = render(
                <List variant={variant}>
                    <ListItem>item1</ListItem>
                    <ListItem>item2</ListItem>
                </List>,
            )
            const component = container.firstChild
            expect(component).toHaveClass(
                variant === 'default' ? 'list' : `list-${variant}`,
            )
            expect(component).not.toHaveClass(
                ...except(
                    variants,
                    variant === 'default' ? '' : `list-${variant}`,
                ),
            )
        })
    })
})

describe('Render List Sizes', () => {
    const sizes = [...SizesArray]
    sizes.forEach(size => {
        test(`render ${size} size`, () => {
            const {container} = render(
                <List size={size}>
                    <ListItem>item1</ListItem>
                    <ListItem>item2</ListItem>
                </List>,
            )
            const component = container.firstChild
            expect(component).toHaveClass(
                size === 'md' ? 'list' : `list-${ISizes[size]}`,
            )
            expect(component).not.toHaveClass(
                ...except(sizes, size === 'md' ? '' : `list-${ISizes[size]}`),
            )
        })
    })
})

describe('Render List Directions', () => {
    test('render default/column direction', () => {
        const {container} = render(
            <List direction="column">
                <ListItem>item1</ListItem>
                <ListItem>item2</ListItem>
            </List>,
        )
        const component = container.firstChild
        expect(component).not.toHaveClass('list-group-row')
    })
    test('render row direction', () => {
        const {container} = render(
            <List direction="row">
                <ListItem>item1</ListItem>
                <ListItem>item2</ListItem>
            </List>,
        )
        const component = container.firstChild
        expect(component).toHaveClass('list-group-row')
    })
})
