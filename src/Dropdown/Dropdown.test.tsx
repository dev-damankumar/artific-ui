import React from "react";
import {fireEvent, getByTestId, getByText, render} from "@testing-library/react";
import Dropdown from "./Dropdown";
import DropdownToggle from "./DropdownToggle";
import DropdownMenu from "./DropdownMenu";
import MenuItem from "./MenuItem";

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
	test("render default theme", () => {
		const {container} = render(<Dropdown>Click Me</Dropdown>);
		const component = container.firstChild;
		expect(component).toHaveClass('dropdown-primary')
	});
	test("render primary theme", () => {
		const {container} = render(<Dropdown theme="primary">Click Me</Dropdown>);
		const component = container.firstChild;
		expect(component).toHaveClass('dropdown-primary')
	});
	test("render secondary theme", () => {
		const {container} = render(<Dropdown theme="secondary">Click Me</Dropdown>);
		const component = container.firstChild;
		expect(component).toHaveClass('dropdown-secondary')
	});
	test("render light theme", () => {
		const {container} = render(<Dropdown theme="light">Click Me</Dropdown>);
		const component = container.firstChild;
		expect(component).toHaveClass('dropdown-light')
	});
	test("render dark theme", () => {
		const {container} = render(<Dropdown theme="dark">Click Me</Dropdown>);
		const component = container.firstChild;
		expect(component).toHaveClass('dropdown-dark')
	});
	test("render custom color scheme", () => {
		const colorScheme = {
			color: 'black',
			background: 'linear-gradient(45deg, black, transparent)',
			backgroundColor: 'blue'
		}
		const {container} = render(<Dropdown colorScheme={colorScheme}>Click Me</Dropdown>);
		const element = getByText(container, 'Click Me');
		const styles = getComputedStyle(element);
		expect(styles.getPropertyValue('--primary')).toBe(colorScheme.background);
		expect(styles.getPropertyValue('--primary-color')).toBe(colorScheme.backgroundColor);
		expect(styles.getPropertyValue('--primary-text')).toBe(colorScheme.color);
	});
});

describe("Render Dropdown Layouts", () => {
	test("render default layout", () => {
		const {container} = render(<Dropdown>Click Me</Dropdown>);
		const component = container.firstChild;
		expect(component).toHaveClass('dropdown')
		expect(component).not.toHaveClass('dropdown-rounded', 'dropdown-floating', 'dropdown-no-radius')
	});
	test("render rounded layout", () => {
		const {container} = render(<Dropdown layout="rounded">Click Me</Dropdown>);
		const component = container.firstChild;
		expect(component).toHaveClass('dropdown-rounded')
		expect(component).not.toHaveClass('dropdown-floating', 'dropdown-no-radius')
	});
	test("render no-radius layout", () => {
		const {container} = render(<Dropdown layout="no-radius">Click Me</Dropdown>);
		const component = container.firstChild;
		expect(component).toHaveClass('dropdown-no-radius')
		expect(component).not.toHaveClass('dropdown-rounded', 'dropdown-floating')
	});
	test("render floating layout", () => {
		const {container} = render(<Dropdown layout="floating">Click Me</Dropdown>);
		const component = container.firstChild;
		expect(component).toHaveClass('dropdown-floating')
		expect(component).not.toHaveClass('dropdown-rounded', 'dropdown-no-radius')
	});
});

describe("Render Dropdown Variants", () => {
	test("render default variant", () => {
		const {container} = render(<Dropdown>Click Me</Dropdown>);
		const component = container.firstChild;
		expect(component).toHaveClass('dropdown')
		expect(component).not.toHaveClass('dropdown-fluid', 'dropdown-drawer')
	});
	test("render fluid variant", () => {
		const {container} = render(<Dropdown variant="fluid">Click Me</Dropdown>);
		const component = container.firstChild;
		expect(component).toHaveClass('dropdown-fluid')
		expect(component).not.toHaveClass('dropdown-drawer')
	});
	test("render drawer variant", () => {
		const {container} = render(<Dropdown variant="drawer">Click Me</Dropdown>);
		const component = container.firstChild;
		expect(component).toHaveClass('dropdown-drawer')
	});
});

describe("Render Dropdown Sizes", () => {
	test("render default/md size", () => {
		const {container} = render(<Dropdown>Click Me</Dropdown>);
		const component = container.firstChild;
		expect(component).toHaveClass('dropdown')
		expect(component).not.toHaveClass('dropdown-extra-large', 'dropdown-large', 'dropdown-small', 'dropdown-extra-small')
	});
	test("render xl size", () => {
		const {container} = render(<Dropdown size="xl">Click Me</Dropdown>);
		const component = container.firstChild;
		expect(component).toHaveClass('dropdown-extra-large')
		expect(component).not.toHaveClass('dropdown-large', 'dropdown-small', 'dropdown-extra-small')
	});
	test("render lg size", () => {
		const {container} = render(<Dropdown size="lg">Click Me</Dropdown>);
		const component = container.firstChild;
		expect(component).toHaveClass('dropdown-large')
		expect(component).not.toHaveClass('dropdown-extra-large', 'dropdown-small', 'dropdown-extra-small')
	});
	test("render sm size", () => {
		const {container} = render(<Dropdown size="sm">Click Me</Dropdown>);
		const component = container.firstChild;
		expect(component).toHaveClass('dropdown-small')
		expect(component).not.toHaveClass('dropdown-extra-large', 'dropdown-large', 'dropdown-extra-small')
	});
	test("render xs size", () => {
		const {container} = render(<Dropdown size="xs">Click Me</Dropdown>);
		const component = container.firstChild;
		expect(component).toHaveClass('dropdown-extra-small')
		expect(component).not.toHaveClass('dropdown-extra-large', 'dropdown-large', 'dropdown-small')
	});
	test("render fullwidth dropdown", () => {
		const {container} = render(<Dropdown fullwidth>Click Me</Dropdown>);
		const component = container.firstChild;
		expect(component).toHaveClass('dropdown-fullwidth')
	});
});


describe("Render Dropdown Note Variant Directions", () => {
	test("render default/bottom position", () => {
		const {container} = render(<Dropdown>Click Me</Dropdown>);
		const component = container.firstChild;
		expect(component).not.toHaveClass('drop-left', 'drop-top', 'drop-right')
	});
	test("render left position", () => {
		const {container} = render(<Dropdown position="left">Click Me</Dropdown>);
		const component = container.firstChild;
		expect(component).toHaveClass('drop-left')
		expect(component).not.toHaveClass('drop-top', 'drop-right')
	});
	test("render right direction", () => {
		const {container} = render(<Dropdown position="right">Click Me</Dropdown>);
		const component = container.firstChild;
		expect(component).toHaveClass('drop-right')
		expect(component).not.toHaveClass('drop-left', 'drop-top')
	});
	test("render top position", () => {
		const {container} = render(<Dropdown position="top">Click Me</Dropdown>);
		const component = container.firstChild;
		expect(component).toHaveClass('drop-top')
		expect(component).not.toHaveClass('drop-left', 'drop-right')
	});

});


