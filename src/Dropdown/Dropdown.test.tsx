import React from "react";
import {fireEvent, getByTestId, getByText, render} from "@testing-library/react";
import Dropdown from "./Dropdown";
import DropdownToggle from "./DropdownToggle";
import DropdownMenu from "./DropdownMenu";
import MenuItem from "./MenuItem";
import {DirectionsArray, ISizes, SizesArray, ThemesArray} from "../types/Common.types";
import except from "../tests/except";
import {LayoutsArray, VariantsArray} from "./Dropdown.types";

describe("Render Dropdown", () => {
	test("render the Dropdown component", () => {
		const {container} = render(<Dropdown>Hello World!</Dropdown>);
		getByText(container, "Hello World!");
	});
	test("should handle click events", () => {
		const {container} = render(
			<Dropdown data-testid="dropdown" autoClose={true}>
				<DropdownToggle data-testid="btn">Toggle</DropdownToggle>
				<DropdownMenu>
					<MenuItem data-testid="menu">Menu</MenuItem>
				</DropdownMenu>
			</Dropdown>
		);
		const menu = getByTestId(container, 'menu')
		const btn = getByTestId(container, 'btn')
		const dropdown = getByTestId(container, 'dropdown')
		fireEvent.click(btn)
		fireEvent.click(menu)
		expect(dropdown).not.toHaveClass('dropdown-open')

	});
	test("render default styles", () => {
		const {container} = render(<Dropdown>Click Me</Dropdown>);
		const component = container.firstChild;
		expect(component).toHaveClass('dropdown')
	});
});

describe("Render Dropdown Default Themes", () => {
	const themes = [...ThemesArray]
	themes.forEach((theme) => {
		test(`render ${theme} theme`, () => {
			const {container} = render(<Dropdown theme={theme}>Click Me</Dropdown>);
			const component = container.firstChild;
			expect(component).toHaveClass(theme === 'default' ? 'dropdown' : `dropdown-${theme}`)
			expect(component).not.toHaveClass(...except(themes, theme === 'default' ? '' : `dropdown-${theme}`))
		});
	})
	test("render custom color scheme", () => {
		const colorScheme = {
			color: 'black',
			background: 'linear-gradient(45deg, black, transparent)',
			backgroundColor: 'blue'
		}
		const {container} = render(<Dropdown colorScheme={colorScheme}>Click Me</Dropdown>);
		const element = getByText(container, 'Click Me');
		const styles = getComputedStyle(element);
		expect(styles.getPropertyValue('--ai-primary')).toBe(colorScheme.background);
		expect(styles.getPropertyValue('--ai-primary-color')).toBe(colorScheme.backgroundColor);
		expect(styles.getPropertyValue('--ai-primary-text')).toBe(colorScheme.color);
	});
});

describe("Render Dropdown Layouts", () => {
	const layouts = [...LayoutsArray]
	layouts.forEach((layout) => {
		test(`render ${layout} layout`, () => {
			const {container} = render(<Dropdown layout={layout}>Click Me</Dropdown>);
			const component = container.firstChild;
			expect(component).toHaveClass(layout === 'default' ? 'dropdown' : `dropdown-${layout}`)
			expect(component).not.toHaveClass(...except(layouts, layout === 'default' ? '' : `dropdown-${layout}`))
		});
	})
});

describe("Render Dropdown Variants", () => {
	const variants = [...VariantsArray]
	variants.forEach((variant) => {
		test(`render ${variant} variant`, () => {
			const {container} = render(<Dropdown variant={variant}>Click Me</Dropdown>);
			const component = container.firstChild;
			expect(component).toHaveClass(variant === 'default' ? 'dropdown' : `dropdown-${variant}`)
			expect(component).not.toHaveClass(...except(variants, variant === 'default' ? '' : `dropdown-${variant}`))
		});
	})
});

describe("Render Dropdown Sizes", () => {
	const sizes = [...SizesArray]
	sizes.forEach((size) => {
		test(`render ${size} size`, () => {
			const {container} = render(<Dropdown size={size}>Click Me</Dropdown>);
			const component = container.firstChild;
			expect(component).toHaveClass(size === 'md' ? 'dropdown' : `dropdown-${ISizes[size]}`)
			expect(component).not.toHaveClass(...except(sizes, size === 'md' ? '' : `dropdown-${ISizes[size]}`))
		});
	})
});


describe("Render Dropdown Note Variant Directions", () => {
	const directions = [...DirectionsArray]
	directions.forEach(direction => {
		test(`render ${direction} direction`, () => {
			const {container} = render(<Dropdown position={direction}>Click Me</Dropdown>);
			const component = container.firstChild;
			expect(component).toHaveClass(direction === 'bottom' ? 'dropdown' : `drop-${direction}`)
			expect(component).not.toHaveClass(...except(directions, direction === 'left' ? '' : `drop-${direction}`))
		});
	})
});


