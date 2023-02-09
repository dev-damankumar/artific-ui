import React from "react";
import {fireEvent, getByTestId, getByText, render} from "@testing-library/react";
import Button from "./Button";

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
	test("render default theme", () => {
		const {container} = render(<Button>Click Me</Button>);
		const component = container.firstChild;
		expect(component).toHaveClass('btn-primary')
	});
	test("render primary theme", () => {
		const {container} = render(<Button theme="primary">Click Me</Button>);
		const component = container.firstChild;
		expect(component).toHaveClass('btn-primary')
	});
	test("render secondary theme", () => {
		const {container} = render(<Button theme="secondary">Click Me</Button>);
		const component = container.firstChild;
		expect(component).toHaveClass('btn-secondary')
	});
	test("render light theme", () => {
		const {container} = render(<Button theme="light">Click Me</Button>);
		const component = container.firstChild;
		expect(component).toHaveClass('btn-light')
	});
	test("render dark theme", () => {
		const {container} = render(<Button theme="dark">Click Me</Button>);
		const component = container.firstChild;
		expect(component).toHaveClass('btn-dark')
	});
	test("render custom color scheme", () => {
		const colorScheme = {
			color: 'black',
			background: 'linear-gradient(45deg, black, transparent)',
			backgroundColor: 'blue'
		}
		const {container} = render(<Button colorScheme={colorScheme}>Click Me</Button>);
		const element = getByText(container, 'Click Me');
		const styles = getComputedStyle(element);
		expect(styles.getPropertyValue('--primary')).toBe(colorScheme.background);
		expect(styles.getPropertyValue('--primary-color')).toBe(colorScheme.backgroundColor);
		expect(styles.getPropertyValue('--primary-text')).toBe(colorScheme.color);
	});
});

describe("Render Button Layouts", () => {
	test("render default layout", () => {
		const {container} = render(<Button>Click Me</Button>);
		const component = container.firstChild;
		expect(component).toHaveClass('btn')
		expect(component).not.toHaveClass('btn-rounded', 'btn-pill', 'btn-no-radius')
	});
	test("render rounded layout", () => {
		const {container} = render(<Button layout="rounded">Click Me</Button>);
		const component = container.firstChild;
		expect(component).toHaveClass('btn-rounded')
		expect(component).not.toHaveClass('btn-pill', 'btn-no-radius')
	});
	test("render no-radius layout", () => {
		const {container} = render(<Button layout="no-radius">Click Me</Button>);
		const component = container.firstChild;
		expect(component).toHaveClass('btn-no-radius')
		expect(component).not.toHaveClass('btn-rounded', 'btn-pill')
	});
	test("render pill layout", () => {
		const {container} = render(<Button layout="pill">Click Me</Button>);
		const component = container.firstChild;
		expect(component).toHaveClass('btn-pill')
		expect(component).not.toHaveClass('btn-rounded', 'btn-no-radius')
	});
});

describe("Render Button Variants", () => {
	test("render default variant", () => {
		const {container} = render(<Button>Click Me</Button>);
		const component = container.firstChild;
		expect(component).toHaveClass('btn')
		expect(component).not.toHaveClass('btn-outline', 'btn-text')
	});
	test("render outline variant", () => {
		const {container} = render(<Button variant="outline">Click Me</Button>);
		const component = container.firstChild;
		expect(component).toHaveClass('btn-outline')
		expect(component).not.toHaveClass('btn-text')
	});
	test("render text variant", () => {
		const {container} = render(<Button variant="text">Click Me</Button>);
		const component = container.firstChild;
		expect(component).toHaveClass('btn-text', 'btn-outline')
	});
});

describe("Render Button Sizes", () => {
	test("render default/md size", () => {
		const {container} = render(<Button>Click Me</Button>);
		const component = container.firstChild;
		expect(component).toHaveClass('btn')
		expect(component).not.toHaveClass('btn-extra-large', 'btn-large', 'btn-small', 'btn-extra-small')
	});
	test("render xl size", () => {
		const {container} = render(<Button size="xl">Click Me</Button>);
		const component = container.firstChild;
		expect(component).toHaveClass('btn-extra-large')
		expect(component).not.toHaveClass('btn-large', 'btn-small', 'btn-extra-small')
	});
	test("render lg size", () => {
		const {container} = render(<Button size="lg">Click Me</Button>);
		const component = container.firstChild;
		expect(component).toHaveClass('btn-large')
		expect(component).not.toHaveClass('btn-extra-large', 'btn-small', 'btn-extra-small')
	});
	test("render sm size", () => {
		const {container} = render(<Button size="sm">Click Me</Button>);
		const component = container.firstChild;
		expect(component).toHaveClass('btn-small')
		expect(component).not.toHaveClass('btn-extra-large', 'btn-large', 'btn-extra-small')
	});
	test("render xs size", () => {
		const {container} = render(<Button size="xs">Click Me</Button>);
		const component = container.firstChild;
		expect(component).toHaveClass('btn-extra-small')
		expect(component).not.toHaveClass('btn-extra-large', 'btn-large', 'btn-small')
	});
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
