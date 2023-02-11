import React from "react";
import {getByText, render} from "@testing-library/react";
import Pagination from "./Pagination";
import {ISizes, LayoutsArray, SizesArray, ThemesArray} from "../types/Common.types";
import except from "../tests/except";
import {VariantsArray} from "./Pagination.types";

describe("Render Pagination", () => {
	test("render the Pagination component", () => {
		const {container} = render(<Pagination>Hello World!</Pagination>);
		getByText(container, "Hello World!");
	});
	test("render default styles", () => {
		const {container} = render(<Pagination>Click Me</Pagination>);
		const component = container.firstChild;
		expect(component).toHaveClass('pagination')
	});
});

describe("Render Pagination Default Themes", () => {
	const themes = [...ThemesArray]
	themes.forEach((theme) => {
		test(`render ${theme} theme`, () => {
			const {container} = render(<Pagination theme={theme}>Click Me</Pagination>);
			const component = container.firstChild;
			expect(component).toHaveClass(theme === 'default' ? 'pagination' : `pagination-${theme}`)
			expect(component).not.toHaveClass(...except(themes, theme === 'default' ? '' : `pagination-${theme}`))
		});
	})
	test("render custom color scheme", () => {
		const colorScheme = {
			color: 'black',
			background: 'linear-gradient(45deg, black, transparent)',
			backgroundColor: 'blue'
		}
		const {container} = render(<Pagination colorScheme={colorScheme}>Click Me</Pagination>);
		const element = getByText(container, 'Click Me');
		const styles = getComputedStyle(element);
		expect(styles.getPropertyValue('--primary')).toBe(colorScheme.background);
		expect(styles.getPropertyValue('--primary-color')).toBe(colorScheme.backgroundColor);
		expect(styles.getPropertyValue('--primary-text')).toBe(colorScheme.color);
	});
});

describe("Render Pagination Layouts", () => {
	const layouts = [...LayoutsArray]
	layouts.forEach((layout) => {
		test(`render ${layout} layout`, () => {
			const {container} = render(<Pagination layout={layout}>Click Me</Pagination>);
			const component = container.firstChild;
			expect(component).toHaveClass(layout === 'default' ? 'pagination' : `pagination-${layout}`)
			expect(component).not.toHaveClass(...except(layouts, layout === 'default' ? '' : `pagination-${layout}`))
		});
	})
});

describe("Render Pagination Variants", () => {
	const variants = [...VariantsArray]
	variants.forEach((variant) => {
		test(`render ${variant} variant`, () => {
			const {container} = render(<Pagination variant={variant}>Click Me</Pagination>);
			const component = container.firstChild;
			expect(component).toHaveClass(variant === 'default' ? 'pagination' : `pagination-${variant}`)
			expect(component).not.toHaveClass(...except(variants, variant === 'default' ? '' : `pagination-${variant}`))
		});
	})
});

describe("Render Pagination Sizes", () => {
	const sizes = [...SizesArray]
	sizes.forEach((size) => {
		test(`render ${size} size`, () => {
			const {container} = render(<Pagination size={size}>Click Me</Pagination>);
			const component = container.firstChild;
			expect(component).toHaveClass(size === 'md' ? 'pagination' : `pagination-${ISizes[size]}`)
			expect(component).not.toHaveClass(...except(sizes, size === 'md' ? '' : `pagination-${ISizes[size]}`))
		});
	})
});



