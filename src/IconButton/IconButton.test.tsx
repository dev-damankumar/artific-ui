import React from "react";
import {fireEvent, getByTestId, getByText, render} from "@testing-library/react";
import IconButton from "./IconButton";
import {ISizes, LayoutsArray, SizesArray, ThemesArray, VariantsArray} from "../types/Common.types";
import except from "../tests/except";

describe("Render IconButton", () => {
	test("render the IconButton component", () => {
		const {container} = render(<IconButton>Hello World!</IconButton>);
		getByText(container, "Hello World!");
	});
	test("should handle click events", () => {
		const onClickMock = jest.fn();
		const {container} = render(
			<IconButton onClick={onClickMock}>Click me!</IconButton>
		);
		const component = container.firstChild;
		fireEvent.click(component!);
		expect(onClickMock).toBeCalled();
	});
	test("render default styles", () => {
		const {container} = render(<IconButton>Click Me</IconButton>);
		const component = container.firstChild;
		expect(component).toHaveClass('btn')
	});
});

describe("Render IconButton Default Themes", () => {
	const themes = [...ThemesArray]
	themes.forEach((theme) => {
		test(`render ${theme} theme`, () => {
			const {container} = render(<IconButton theme={theme}>Click Me</IconButton>);
			const component = container.firstChild;
			expect(component).toHaveClass(theme === 'default' ? 'btn' : `btn-${theme}`)
			expect(component).not.toHaveClass(...except(themes, theme === 'default' ? '' : `btn-${theme}`))
		});
	})
	test("render custom color scheme", () => {
		const colorScheme = {
			color: 'black',
			background: 'linear-gradient(45deg, black, transparent)',
			backgroundColor: 'blue'
		}
		const {container} = render(<IconButton colorScheme={colorScheme}>Click Me</IconButton>);
		const element = getByText(container, 'Click Me');
		const styles = getComputedStyle(element);
		expect(styles.getPropertyValue('--primary')).toBe(colorScheme.background);
		expect(styles.getPropertyValue('--primary-color')).toBe(colorScheme.backgroundColor);
		expect(styles.getPropertyValue('--primary-text')).toBe(colorScheme.color);
	});
});

describe("Render IconButton Layouts", () => {
	const layouts = [...LayoutsArray]
	layouts.forEach((layout) => {
		test(`render ${layout} layout`, () => {
			const {container} = render(<IconButton layout={layout}>Click Me</IconButton>);
			const component = container.firstChild;
			expect(component).toHaveClass(layout === 'default' ? 'btn' : `btn-${layout}`)
			expect(component).not.toHaveClass(...except(layouts, layout === 'default' ? '' : `btn-${layout}`))
		});
	})
});

describe("Render IconButton Variants", () => {
	const variants = [...VariantsArray]
	variants.forEach((variant) => {
		test(`render ${variant} variant`, () => {
			const {container} = render(<IconButton variant={variant}>Click Me</IconButton>);
			const component = container.firstChild;
			expect(component).toHaveClass(variant === 'default' ? 'btn' : `btn-${variant}`)
			expect(component).not.toHaveClass(...except(variants, variant === 'default' ? '' : `btn-${variant}`))
		});
	})
});

describe("Render IconButton Sizes", () => {
	const sizes = [...SizesArray]
	sizes.forEach((size) => {
		test(`render ${size} size`, () => {
			const {container} = render(<IconButton size={size}>Click Me</IconButton>);
			const component = container.firstChild;
			expect(component).toHaveClass(size === 'md' ? 'btn' : `btn-${ISizes[size]}`)
			expect(component).not.toHaveClass(...except(sizes, size === 'md' ? '' : `btn-${ISizes[size]}`))
		});
	})
	test("render fullwidth button", () => {
		const {container} = render(<IconButton fullwidth>Click Me</IconButton>);
		const component = container.firstChild;
		expect(component).toHaveClass('btn-fullwidth')
	});
});

describe("Render IconButton With Icons", () => {
	test("render suffix icon", () => {
		const {container} = render(<IconButton
			suffix={<i data-testid='icon1' className='bx bxs-user-circle'></i>}
			type="button"
		>
			Click Me
		</IconButton>);
		const component = container.firstChild;
		const icon1 = getByTestId(container, 'icon1')
		expect(component).toContainHTML(`<i data-testid='icon1' class='bx bxs-user-circle'></i>`)
		expect(icon1.parentElement).toHaveClass('btn-icon-suffix')
	});
	test("render prefix icon", () => {
		const {container} = render(<IconButton
			prefix={<i data-testid='icon1' className='bx bxs-user-circle'></i>}
			type="button"
		>
			Click Me
		</IconButton>);
		const component = container.firstChild;
		const icon1 = getByTestId(container, 'icon1')
		expect(component).toContainHTML(`<i data-testid='icon1' class='bx bxs-user-circle'></i>`)
		expect(icon1.parentElement).toHaveClass('btn-icon-prefix')

	});
	test("render both icon", () => {
		const {container} = render(<IconButton
			suffix={<i data-testid='icon1' className='bx bxs-user-circle'></i>}
			prefix={<i data-testid='icon2' className='bx bxs-user-circle'></i>}
			type="button"
		>
			Click Me
		</IconButton>);
		const component = container.firstChild;
		const icon1 = getByTestId(container, 'icon1')
		const icon2 = getByTestId(container, 'icon2')
		expect(component).toContainHTML(`<i data-testid='icon1' class='bx bxs-user-circle'></i>`)
		expect(component).toContainHTML(`<i data-testid='icon2' class='bx bxs-user-circle'></i>`)
		expect(icon1.parentElement).toHaveClass('btn-icon-suffix')
		expect(icon2.parentElement).toHaveClass('btn-icon-prefix')
	});
});

describe("Render IconButton States", () => {
	test("render disabled button", () => {
		const {container} = render(<IconButton
			disabled={true}
			type="button"
		>
			Click Me
		</IconButton>);
		const component = container.firstChild;
		expect(component).toHaveAttribute('disabled', "")
	});
	test("render not disabled button", () => {
		const {container} = render(<IconButton
			type="button"
		>
			Click Me
		</IconButton>);
		const component = container.firstChild;
		expect(component).not.toHaveAttribute('disabled', "")
	});
	test("render loading button", () => {
		const {container} = render(<IconButton
			loading={true}
			type="button"
		>
			Click Me
		</IconButton>);
		const component = container.firstChild;
		expect(component).toHaveClass('btn-loading')
	});
	test("render no loading button", () => {
		const {container} = render(<IconButton
			loading={false}
			type="button"
		>
			Click Me
		</IconButton>);
		const component = container.firstChild;
		expect(component).not.toHaveClass('btn-loading')
	});
	test("render hide text while loading", () => {
		const {container} = render(<IconButton
			hideTextOnLoading
			loading={true}
			type="button"
		>
			Click Me
		</IconButton>);
		const component = container.firstChild;
		expect(component).toHaveClass('btn-loading', 'btn-loading-no-text')
	});
	test("render button loading direction:before", () => {
		const {container} = render(<IconButton
			loadingDirection="before"
			loading={true}
			type="button"
		>
			Click Me
		</IconButton>);
		const component = container.firstChild;
		expect(component).toHaveClass('btn-loading')
		expect(component).not.toHaveClass('btn-loading-right')
	});
	test("render button loading direction:after", () => {
		const {container} = render(<IconButton
			loadingDirection="after"
			loading={true}
			type="button"
		>
			Click Me
		</IconButton>);
		const component = container.firstChild;
		expect(component).toHaveClass('btn-loading', 'btn-loading-right')
	});
	test("render button loading style:grow", () => {
		const {container} = render(<IconButton
			loadingStyle="grow"
			loading={true}
			type="button"
		>
			Click Me
		</IconButton>);
		const component = container.firstChild;
		expect(component).toHaveClass('btn-loading', 'btn-loading-grow')
	});
});
