import React from "react";
import {getByRole, getByText, render} from "@testing-library/react";
import Table from "./Table";

describe("Render Table", () => {
	test("render the Table component", () => {
		const {container} = render(<Table>Hello World!</Table>);
		getByText(container, "Hello World!");
	});
	test("render default styles", () => {
		const {container} = render(<Table>Click Me</Table>);
		const component = getByRole(container, 'table');
		expect(component).toHaveClass('table')
	});
});

describe("Render Table Default Themes", () => {
	test("render default theme", () => {
		const {container} = render(<Table>Click Me</Table>);
		const component = getByRole(container, 'table');
		expect(component).toHaveClass('table-primary')
	});
	test("render primary theme", () => {
		const {container} = render(<Table theme="primary">Click Me</Table>);
		const component = getByRole(container, 'table');
		expect(component).toHaveClass('table-primary')
	});
	test("render secondary theme", () => {
		const {container} = render(<Table theme="secondary">Click Me</Table>);
		const component = getByRole(container, 'table');
		expect(component).toHaveClass('table-secondary')
	});
	test("render light theme", () => {
		const {container} = render(<Table theme="light">Click Me</Table>);
		const component = getByRole(container, 'table');
		expect(component).toHaveClass('table-light')
	});
	test("render dark theme", () => {
		const {container} = render(<Table theme="dark">Click Me</Table>);
		const component = getByRole(container, 'table');
		expect(component).toHaveClass('table-dark')
	});
	test("render custom color scheme", () => {
		const colorScheme = {
			color: 'black',
			background: 'linear-gradient(45deg, black, transparent)',
			backgroundColor: 'blue'
		}
		const {container} = render(<Table colorScheme={colorScheme}>Click Me</Table>);
		const element = getByText(container, 'Click Me');
		const styles = getComputedStyle(element);
		expect(styles.getPropertyValue('--primary')).toBe(colorScheme.background);
		expect(styles.getPropertyValue('--primary-color')).toBe(colorScheme.backgroundColor);
		expect(styles.getPropertyValue('--primary-text')).toBe(colorScheme.color);
	});
});

describe("Render Table Layouts", () => {
	test("render default layout", () => {
		const {container} = render(<Table>Click Me</Table>);
		const component = getByRole(container, 'table');
		expect(component).toHaveClass('table')
		expect(component).not.toHaveClass('table-rounded', 'table-pill', 'table-no-radius')
	});
	test("render rounded layout", () => {
		const {container} = render(<Table layout="rounded">Click Me</Table>);
		const component = getByRole(container, 'table');
		expect(component).toHaveClass('table-rounded')
		expect(component).not.toHaveClass('table-pill', 'table-no-radius')
	});
	test("render no-radius layout", () => {
		const {container} = render(<Table layout="no-radius">Click Me</Table>);
		const component = getByRole(container, 'table');
		expect(component).toHaveClass('table-no-radius')
		expect(component).not.toHaveClass('table-rounded', 'table-pill')
	});
	test("render pill layout", () => {
		const {container} = render(<Table layout="pill">Click Me</Table>);
		const component = getByRole(container, 'table');
		expect(component).toHaveClass('table-pill')
		expect(component).not.toHaveClass('table-rounded', 'table-no-radius')
	});
});

describe("Render Table Variants", () => {
	test("render default variant", () => {
		const {container} = render(<Table>Click Me</Table>);
		const component = getByRole(container, 'table');
		expect(component).toHaveClass('table')
		expect(component).not.toHaveClass('table-outline', 'table-striped', 'table-borderless')
	});
	test("render outline variant", () => {
		const {container} = render(<Table variant="outline">Click Me</Table>);
		const component = getByRole(container, 'table');
		expect(component).toHaveClass('table-outline')
		expect(component).not.toHaveClass('table-striped', 'table-borderless')
	});
	test("render striped variant", () => {
		const {container} = render(<Table variant="striped">Click Me</Table>);
		const component = getByRole(container, 'table');
		expect(component).toHaveClass('table-striped')
		expect(component).not.toHaveClass('table-outline', 'table-borderless')
	});
	test("render borderless variant", () => {
		const {container} = render(<Table variant="borderless">Click Me</Table>);
		const component = getByRole(container, 'table');
		expect(component).toHaveClass('table-borderless')
		expect(component).not.toHaveClass('table-striped', 'table-outline')
	});
});

describe("Render Table Sizes", () => {
	test("render default/md size", () => {
		const {container} = render(<Table>Click Me</Table>);
		const component = getByRole(container, 'table');
		expect(component).toHaveClass('table')
		expect(component).not.toHaveClass('table-extra-large', 'table-large', 'table-small', 'table-extra-small')
	});
	test("render xl size", () => {
		const {container} = render(<Table size="xl">Click Me</Table>);
		const component = getByRole(container, 'table');
		expect(component).toHaveClass('table-extra-large')
		expect(component).not.toHaveClass('table-large', 'table-small', 'table-extra-small')
	});
	test("render lg size", () => {
		const {container} = render(<Table size="lg">Click Me</Table>);
		const component = getByRole(container, 'table');
		expect(component).toHaveClass('table-large')
		expect(component).not.toHaveClass('table-extra-large', 'table-small', 'table-extra-small')
	});
	test("render sm size", () => {
		const {container} = render(<Table size="sm">Click Me</Table>);
		const component = getByRole(container, 'table');
		expect(component).toHaveClass('table-small')
		expect(component).not.toHaveClass('table-extra-large', 'table-large', 'table-extra-small')
	});
	test("render xs size", () => {
		const {container} = render(<Table size="xs">Click Me</Table>);
		const component = getByRole(container, 'table');
		expect(component).toHaveClass('table-extra-small')
		expect(component).not.toHaveClass('table-extra-large', 'table-large', 'table-small')
	});
});


