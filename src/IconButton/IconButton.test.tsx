import React from "react";
import {fireEvent, getByTestId, getByText, render} from "@testing-library/react";
import IconButton from "./IconButton";

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
		expect(component).toHaveClass('btn', 'icon-btn')
	});
});

describe("Render IconButton Default Themes", () => {
	test("render default theme", () => {
		const {container} = render(<IconButton>Click Me</IconButton>);
		const component = container.firstChild;
		expect(component).toHaveClass('btn-primary')
	});
	test("render primary theme", () => {
		const {container} = render(<IconButton theme="primary">Click Me</IconButton>);
		const component = container.firstChild;
		expect(component).toHaveClass('btn-primary')
	});
	test("render secondary theme", () => {
		const {container} = render(<IconButton theme="secondary">Click Me</IconButton>);
		const component = container.firstChild;
		expect(component).toHaveClass('btn-secondary')
	});
	test("render light theme", () => {
		const {container} = render(<IconButton theme="light">Click Me</IconButton>);
		const component = container.firstChild;
		expect(component).toHaveClass('btn-light')
	});
	test("render dark theme", () => {
		const {container} = render(<IconButton theme="dark">Click Me</IconButton>);
		const component = container.firstChild;
		expect(component).toHaveClass('btn-dark')
	});
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
	test("render default layout", () => {
		const {container} = render(<IconButton>Click Me</IconButton>);
		const component = container.firstChild;
		expect(component).toHaveClass('btn')
		expect(component).not.toHaveClass('btn-rounded', 'btn-pill', 'btn-no-radius')
	});
	test("render rounded layout", () => {
		const {container} = render(<IconButton layout="rounded">Click Me</IconButton>);
		const component = container.firstChild;
		expect(component).toHaveClass('btn-rounded')
		expect(component).not.toHaveClass('btn-pill', 'btn-no-radius')
	});
	test("render no-radius layout", () => {
		const {container} = render(<IconButton layout="no-radius">Click Me</IconButton>);
		const component = container.firstChild;
		expect(component).toHaveClass('btn-no-radius')
		expect(component).not.toHaveClass('btn-rounded', 'btn-pill')
	});
	test("render pill layout", () => {
		const {container} = render(<IconButton layout="pill">Click Me</IconButton>);
		const component = container.firstChild;
		expect(component).toHaveClass('btn-pill')
		expect(component).not.toHaveClass('btn-rounded', 'btn-no-radius')
	});
});

describe("Render IconButton Variants", () => {
	test("render default variant", () => {
		const {container} = render(<IconButton>Click Me</IconButton>);
		const component = container.firstChild;
		expect(component).toHaveClass('btn')
		expect(component).not.toHaveClass('btn-outline', 'btn-text')
	});
	test("render outline variant", () => {
		const {container} = render(<IconButton variant="outline">Click Me</IconButton>);
		const component = container.firstChild;
		expect(component).toHaveClass('btn-outline')
		expect(component).not.toHaveClass('btn-text')
	});
	test("render text variant", () => {
		const {container} = render(<IconButton variant="text">Click Me</IconButton>);
		const component = container.firstChild;
		expect(component).toHaveClass('btn-text', 'btn-outline')
	});
});

describe("Render IconButton Sizes", () => {
	test("render default/md size", () => {
		const {container} = render(<IconButton>Click Me</IconButton>);
		const component = container.firstChild;
		expect(component).toHaveClass('btn')
		expect(component).not.toHaveClass('btn-extra-large', 'btn-large', 'btn-small', 'btn-extra-small')
	});
	test("render xl size", () => {
		const {container} = render(<IconButton size="xl">Click Me</IconButton>);
		const component = container.firstChild;
		expect(component).toHaveClass('btn-extra-large')
		expect(component).not.toHaveClass('btn-large', 'btn-small', 'btn-extra-small')
	});
	test("render lg size", () => {
		const {container} = render(<IconButton size="lg">Click Me</IconButton>);
		const component = container.firstChild;
		expect(component).toHaveClass('btn-large')
		expect(component).not.toHaveClass('btn-extra-large', 'btn-small', 'btn-extra-small')
	});
	test("render sm size", () => {
		const {container} = render(<IconButton size="sm">Click Me</IconButton>);
		const component = container.firstChild;
		expect(component).toHaveClass('btn-small')
		expect(component).not.toHaveClass('btn-extra-large', 'btn-large', 'btn-extra-small')
	});
	test("render xs size", () => {
		const {container} = render(<IconButton size="xs">Click Me</IconButton>);
		const component = container.firstChild;
		expect(component).toHaveClass('btn-extra-small')
		expect(component).not.toHaveClass('btn-extra-large', 'btn-large', 'btn-small')
	});
	test("render fullwidth icon button", () => {
		const {container} = render(<IconButton fullwidth>Click Me</IconButton>);
		const component = container.firstChild;
		expect(component).toHaveClass('btn-fullwidth')
	});
});

describe("Render IconButton With Icons", () => {
	test("render suffix icon", () => {
		const {container} = render(<IconButton
			suffix={<i data-testid='icon1' className='bx bxs-user-circle'></i>}

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
	test("render disabled icon button", () => {
		const {container} = render(<IconButton
			disabled={true}
		>
			Click Me
		</IconButton>);
		const component = container.firstChild;
		expect(component).toHaveAttribute('disabled', "")
	});
	test("render not disabled icon button", () => {
		const {container} = render(<IconButton

		>
			Click Me
		</IconButton>);
		const component = container.firstChild;
		expect(component).not.toHaveAttribute('disabled', "")
	});
	test("render loading icon button", () => {
		const {container} = render(<IconButton
			loading={true}

		>
			Click Me
		</IconButton>);
		const component = container.firstChild;
		expect(component).toHaveClass('btn-loading')
	});
	test("render no loading icon button", () => {
		const {container} = render(<IconButton
			loading={false}

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

		>
			Click Me
		</IconButton>);
		const component = container.firstChild;
		expect(component).toHaveClass('btn-loading', 'btn-loading-no-text')
	});
	test("render icon button loading direction:before", () => {
		const {container} = render(<IconButton
			loadingDirection="before"
			loading={true}

		>
			Click Me
		</IconButton>);
		const component = container.firstChild;
		expect(component).toHaveClass('btn-loading')
		expect(component).not.toHaveClass('btn-loading-right')
	});
	test("render icon button loading direction:after", () => {
		const {container} = render(<IconButton
			loadingDirection="after"
			loading={true}

		>
			Click Me
		</IconButton>);
		const component = container.firstChild;
		expect(component).toHaveClass('btn-loading', 'btn-loading-right')
	});
	test("render icon button loading style:grow", () => {
		const {container} = render(<IconButton
			loadingStyle="grow"
			loading={true}

		>
			Click Me
		</IconButton>);
		const component = container.firstChild;
		expect(component).toHaveClass('btn-loading', 'btn-loading-grow')
	});
});
