import React from "react";
import {getByRole, getByTestId, getByText, render} from "@testing-library/react";
import Avatar from "./Avatar";
import AvatarGroup from "./AvatarGroup";
import {ISizes, LayoutsArray, SizesArray, ThemesArray} from "../types/Common.types";
import except from "../tests/except";
import {VariantsArray} from "./Avatar.types";

describe("Render Avatar", () => {
	test("render the Avatar component", () => {
		const {container} = render(<Avatar title="HW"/>);
		getByText(container, "HW");
	});
	test("render default styles", () => {
		const {container} = render(<Avatar/>);
		const component = container.firstChild;
		expect(component).toHaveClass('avatar')
	});
	test("render image avatar", () => {
		const {container} = render(<Avatar src={'image.jpg'}/>);
		const component = getByRole(container, 'img')
		expect(component).toBeVisible()
	});
	test("render avatar group", () => {
		const {container} = render(<AvatarGroup>
			<Avatar title="HW"/>
			<Avatar title="HW"/>
			<Avatar title="HW"/>
		</AvatarGroup>);
		const component = container.firstChild
		expect(component).toHaveClass('avatar-group')
	});
});

describe("Render Avatar Default Themes", () => {
	const themes = [...ThemesArray]
	themes.forEach((theme) => {
		test(`render ${theme} theme`, () => {
			const {container} = render(<Avatar theme={theme}>Click Me</Avatar>);
			const component = container.firstChild;
			expect(component).toHaveClass(theme === 'default' ? 'avatar' : `avatar-${theme}`)
			expect(component).not.toHaveClass(...except(themes, theme === 'default' ? '' : `avatar-${theme}`))
		});
	})
	test("render custom color scheme", () => {
		const colorScheme = {
			color: 'black',
			background: 'linear-gradient(45deg, black, transparent)',
			backgroundColor: 'blue'
		}
		const {container} = render(<Avatar data-testid="avatar" title="AT" colorScheme={colorScheme}/>);
		const element = getByTestId(container, 'avatar')
		const styles = getComputedStyle(element);
		expect(styles.getPropertyValue('--primary')).toBe(colorScheme.background);
		expect(styles.getPropertyValue('--primary-color')).toBe(colorScheme.backgroundColor);
		expect(styles.getPropertyValue('--primary-text')).toBe(colorScheme.color);
	});
});

describe("Render Avatar Layouts", () => {
	const layouts = [...LayoutsArray]
	layouts.forEach((layout) => {
		test(`render ${layout} layout`, () => {
			const {container} = render(<Avatar layout={layout}>Click Me</Avatar>);
			const component = container.firstChild;
			expect(component).toHaveClass(layout === 'default' ? 'avatar' : `avatar-${layout}`)
			expect(component).not.toHaveClass(...except(layouts, layout === 'default' ? '' : `avatar-${layout}`))
		});
	})
});

describe("Render Avatar Variants", () => {
	const variants = [...VariantsArray]
	variants.forEach((variant) => {
		test(`render ${variant} variant`, () => {
			const {container} = render(<Avatar variant={variant}>Click Me</Avatar>);
			const component = container.firstChild;
			expect(component).toHaveClass(variant === 'default' ? 'avatar' : `avatar-${variant}`)
			expect(component).not.toHaveClass(...except(variants, variant === 'default' ? '' : `avatar-${variant}`))
		});
	})
});

describe("Render Avatar Sizes", () => {
	const sizes = [...SizesArray]
	sizes.forEach((size) => {
		test(`render ${size} size`, () => {
			const {container} = render(<Avatar size={size}>Click Me</Avatar>);
			const component = container.firstChild;
			expect(component).toHaveClass(size === 'md' ? 'avatar' : `avatar-${ISizes[size]}`)
			expect(component).not.toHaveClass(...except(sizes, size === 'md' ? '' : `avatar-${ISizes[size]}`))
		});
	})
});



