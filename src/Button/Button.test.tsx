import React from "react";
import {fireEvent, getByTestId, getByText, render} from "@testing-library/react";
import Button from "./Button";
import {ISizes, LayoutsArray, SizesArray, ThemesArray, VariantsArray} from "../types/Common.types";
import except from "../tests/except";

describe("Render Button", () => {
	test("render the Button component", () => {
		const {container} = render(<Button>Hello World!</Button>);
		getByText(container, "Hello World!");
	});
	test("should handle click events", () => {
		const onClickMock = jest.fn();
		const {container} = render(
			<Button onClick={onClickMock}>Click me!</Button>
		);
		const component = container.firstChild;
		fireEvent.click(component!);
		expect(onClickMock).toBeCalled();
	});
	test("render default styles", () => {
		const {container} = render(<Button>Click Me</Button>);
		const component = container.firstChild;
		expect(component).toHaveClass('btn')
	});
});

describe("Render Button Default Themes", () => {
	const themes = [...ThemesArray]
	themes.forEach((theme) => {
		test(`render ${theme} theme`, () => {
			const {container} = render(<Button theme={theme}>Click Me</Button>);
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
		const {container} = render(<Button colorScheme={colorScheme}>Click Me</Button>);
		const element = getByText(container, 'Click Me');
		const styles = getComputedStyle(element);
		expect(styles.getPropertyValue('--ai-primary')).toBe(colorScheme.background);
		expect(styles.getPropertyValue('--ai-primary-color')).toBe(colorScheme.backgroundColor);
		expect(styles.getPropertyValue('--ai-primary-text')).toBe(colorScheme.color);
	});
});

describe("Render Button Layouts", () => {
	const layouts = [...LayoutsArray]
	layouts.forEach((layout) => {
		test(`render ${layout} layout`, () => {
			const {container} = render(<Button layout={layout}>Click Me</Button>);
			const component = container.firstChild;
			expect(component).toHaveClass(layout === 'default' ? 'btn' : `btn-${layout}`)
			expect(component).not.toHaveClass(...except(layouts, layout === 'default' ? '' : `btn-${layout}`))
		});
	})
});

describe("Render Button Variants", () => {
	const variants = [...VariantsArray]
	variants.forEach((variant) => {
		test(`render ${variant} variant`, () => {
			const {container} = render(<Button variant={variant}>Click Me</Button>);
			const component = container.firstChild;
			expect(component).toHaveClass(variant === 'default' ? 'btn' : `btn-${variant}`)
			expect(component).not.toHaveClass(...except(variants, variant === 'default' ? '' : `btn-${variant}`))
		});
	})
});

describe("Render Button Sizes", () => {
	const sizes = [...SizesArray]
	sizes.forEach((size) => {
		test(`render ${size} size`, () => {
			const {container} = render(<Button size={size}>Click Me</Button>);
			const component = container.firstChild;
			expect(component).toHaveClass(size === 'md' ? 'btn' : `btn-${ISizes[size]}`)
			expect(component).not.toHaveClass(...except(sizes, size === 'md' ? '' : `btn-${ISizes[size]}`))
		});
	})
	test("render fullwidth button", () => {
		const {container} = render(<Button fullwidth>Click Me</Button>);
		const component = container.firstChild;
		expect(component).toHaveClass('btn-fullwidth')
	});
});

describe("Render Button With Icons", () => {
	test("render suffix icon", () => {
		const {container} = render(<Button
			suffix={<i data-testid='icon1' className='bx bxs-user-circle'></i>}
			type="button"
		>
			Click Me
		</Button>);
		const component = container.firstChild;
		const icon1 = getByTestId(container, 'icon1')
		expect(component).toContainHTML(`<i data-testid='icon1' class='bx bxs-user-circle'></i>`)
		expect(icon1.parentElement).toHaveClass('btn-icon-suffix')
	});
	test("render prefix icon", () => {
		const {container} = render(<Button
			prefix={<i data-testid='icon1' className='bx bxs-user-circle'></i>}
			type="button"
		>
			Click Me
		</Button>);
		const component = container.firstChild;
		const icon1 = getByTestId(container, 'icon1')
		expect(component).toContainHTML(`<i data-testid='icon1' class='bx bxs-user-circle'></i>`)
		expect(icon1.parentElement).toHaveClass('btn-icon-prefix')

	});
	test("render both icon", () => {
		const {container} = render(<Button
			suffix={<i data-testid='icon1' className='bx bxs-user-circle'></i>}
			prefix={<i data-testid='icon2' className='bx bxs-user-circle'></i>}
			type="button"
		>
			Click Me
		</Button>);
		const component = container.firstChild;
		const icon1 = getByTestId(container, 'icon1')
		const icon2 = getByTestId(container, 'icon2')
		expect(component).toContainHTML(`<i data-testid='icon1' class='bx bxs-user-circle'></i>`)
		expect(component).toContainHTML(`<i data-testid='icon2' class='bx bxs-user-circle'></i>`)
		expect(icon1.parentElement).toHaveClass('btn-icon-suffix')
		expect(icon2.parentElement).toHaveClass('btn-icon-prefix')
	});
});

describe("Render Button States", () => {
	test("render disabled button", () => {
		const {container} = render(<Button
			disabled={true}
			type="button"
		>
			Click Me
		</Button>);
		const component = container.firstChild;
		expect(component).toHaveAttribute('disabled', "")
	});
	test("render not disabled button", () => {
		const {container} = render(<Button
			type="button"
		>
			Click Me
		</Button>);
		const component = container.firstChild;
		expect(component).not.toHaveAttribute('disabled', "")
	});
	test("render loading button", () => {
		const {container} = render(<Button
			loading={true}
			type="button"
		>
			Click Me
		</Button>);
		const component = container.firstChild;
		expect(component).toHaveClass('btn-loading')
	});
	test("render no loading button", () => {
		const {container} = render(<Button
			loading={false}
			type="button"
		>
			Click Me
		</Button>);
		const component = container.firstChild;
		expect(component).not.toHaveClass('btn-loading')
	});
	test("render hide text while loading", () => {
		const {container} = render(<Button
			hideTextOnLoading
			loading={true}
			type="button"
		>
			Click Me
		</Button>);
		const component = container.firstChild;
		expect(component).toHaveClass('btn-loading', 'btn-loading-no-text')
	});
	test("render button loading direction:before", () => {
		const {container} = render(<Button
			loadingDirection="before"
			loading={true}
			type="button"
		>
			Click Me
		</Button>);
		const component = container.firstChild;
		expect(component).toHaveClass('btn-loading')
		expect(component).not.toHaveClass('btn-loading-right')
	});
	test("render button loading direction:after", () => {
		const {container} = render(<Button
			loadingDirection="after"
			loading={true}
			type="button"
		>
			Click Me
		</Button>);
		const component = container.firstChild;
		expect(component).toHaveClass('btn-loading', 'btn-loading-right')
	});
	test("render button loading style:grow", () => {
		const {container} = render(<Button
			loadingStyle="grow"
			loading={true}
			type="button"
		>
			Click Me
		</Button>);
		const component = container.firstChild;
		expect(component).toHaveClass('btn-loading', 'btn-loading-grow')
	});
});
