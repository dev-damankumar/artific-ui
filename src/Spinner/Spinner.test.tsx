import React from "react";
import {getByTestId, render} from "@testing-library/react";
import Spinner from "./Spinner";
import {ISizes, SizesArray, ThemesArray} from "../types/Common.types";
import except from "../tests/except";
import {VariantsArray} from "./Spinner.types";

describe("Render Spinner", () => {
	test("render the Spinner component", () => {
		const {container} = render(<Spinner data-testid="spinner">Hello World!</Spinner>);
		const spinner = getByTestId(container, 'spinner')
		expect(spinner).toHaveClass('spinner')
	});
});

describe("Render Spinner Default Themes", () => {
	const themes = [...ThemesArray]
	themes.forEach((theme) => {
		test(`render ${theme} theme`, () => {
			const {container} = render(<Spinner theme={theme}>Click Me</Spinner>);
			const component = container.firstChild;
			expect(component).toHaveClass(theme === 'default' ? 'spinner' : `spinner-${theme}`)
			expect(component).not.toHaveClass(...except(themes, theme === 'default' ? '' : `spinner-${theme}`))
		});
	})
	test("render custom color scheme", () => {
		const colorScheme = {
			color: 'black',
			background: 'linear-gradient(45deg, black, transparent)',
			backgroundColor: 'blue'
		}
		const {container} = render(<Spinner data-testid="spinner" colorScheme={colorScheme}>Click Me</Spinner>);
		const spinner = getByTestId(container, 'spinner')
		const styles = getComputedStyle(spinner);
		expect(styles.getPropertyValue('--ai-primary')).toBe(colorScheme.background);
		expect(styles.getPropertyValue('--ai-primary-color')).toBe(colorScheme.backgroundColor);
		expect(styles.getPropertyValue('--ai-primary-text')).toBe(colorScheme.color);
	});
});

describe("Render Spinner Variants", () => {
	const variants = [...VariantsArray]
	variants.forEach((variant) => {
		test(`render ${variant} variant`, () => {
			const {container} = render(<Spinner variant={variant}>Click Me</Spinner>);
			const component = container.firstChild;
			expect(component).toHaveClass(variant === 'default' ? 'spinner' : `spinner-${variant}`)
			expect(component).not.toHaveClass(...except(variants, variant === 'default' ? '' : `spinner-${variant}`))
		});
	})
});

describe("Render Spinner Sizes", () => {
	const sizes = [...SizesArray]
	sizes.forEach((size) => {
		test(`render ${size} size`, () => {
			const {container} = render(<Spinner size={size}>Click Me</Spinner>);
			const component = container.firstChild;
			expect(component).toHaveClass(size === 'md' ? 'spinner' : `spinner-${ISizes[size]}`)
			expect(component).not.toHaveClass(...except(sizes, size === 'md' ? '' : `spinner-${ISizes[size]}`))
		});
	})
});

