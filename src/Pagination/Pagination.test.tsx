import React from "react";
import {getByText, render} from "@testing-library/react";
import Pagination from "./Pagination";

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
	test("render default theme", () => {
		const {container} = render(<Pagination>Click Me</Pagination>);
		const component = container.firstChild;
		expect(component).toHaveClass('pagination-primary')
	});
	test("render primary theme", () => {
		const {container} = render(<Pagination theme="primary">Click Me</Pagination>);
		const component = container.firstChild;
		expect(component).toHaveClass('pagination-primary')
	});
	test("render secondary theme", () => {
		const {container} = render(<Pagination theme="secondary">Click Me</Pagination>);
		const component = container.firstChild;
		expect(component).toHaveClass('pagination-secondary')
	});
	test("render light theme", () => {
		const {container} = render(<Pagination theme="light">Click Me</Pagination>);
		const component = container.firstChild;
		expect(component).toHaveClass('pagination-light')
	});
	test("render dark theme", () => {
		const {container} = render(<Pagination theme="dark">Click Me</Pagination>);
		const component = container.firstChild;
		expect(component).toHaveClass('pagination-dark')
	});
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
	test("render default layout", () => {
		const {container} = render(<Pagination>Click Me</Pagination>);
		const component = container.firstChild;
		expect(component).toHaveClass('pagination')
		expect(component).not.toHaveClass('pagination-rounded', 'pagination-pill', 'pagination-no-radius')
	});
	test("render rounded layout", () => {
		const {container} = render(<Pagination layout="rounded">Click Me</Pagination>);
		const component = container.firstChild;
		expect(component).toHaveClass('pagination-rounded')
		expect(component).not.toHaveClass('pagination-pill', 'pagination-no-radius')
	});
	test("render no-radius layout", () => {
		const {container} = render(<Pagination layout="no-radius">Click Me</Pagination>);
		const component = container.firstChild;
		expect(component).toHaveClass('pagination-no-radius')
		expect(component).not.toHaveClass('pagination-rounded', 'pagination-pill')
	});
	test("render pill layout", () => {
		const {container} = render(<Pagination layout="pill">Click Me</Pagination>);
		const component = container.firstChild;
		expect(component).toHaveClass('pagination-pill')
		expect(component).not.toHaveClass('pagination-rounded', 'pagination-no-radius')
	});
});

describe("Render Pagination Variants", () => {
	test("render default variant", () => {
		const {container} = render(<Pagination>Click Me</Pagination>);
		const component = container.firstChild;
		expect(component).toHaveClass('pagination')
		expect(component).not.toHaveClass('pagination-separate', 'pagination-float', 'pagination-breadcrumb')
	});
	test("render separate variant", () => {
		const {container} = render(<Pagination variant="separate">Click Me</Pagination>);
		const component = container.firstChild;
		expect(component).toHaveClass('pagination-separate')
		expect(component).not.toHaveClass('pagination-float', 'pagination-breadcrumb')
	});
	test("render float variant", () => {
		const {container} = render(<Pagination variant="float">Click Me</Pagination>);
		const component = container.firstChild;
		expect(component).toHaveClass('pagination-float')
		expect(component).not.toHaveClass('pagination-separate', 'pagination-breadcrumb')
	});
	test("render breadcrumb variant", () => {
		const {container} = render(<Pagination variant="breadcrumb">Click Me</Pagination>);
		const component = container.firstChild;
		expect(component).toHaveClass('pagination-breadcrumb', 'breadcrumb')
		expect(component).not.toHaveClass('pagination-separate', 'pagination-float')
	});
});

describe("Render Pagination Sizes", () => {
	test("render default/md size", () => {
		const {container} = render(<Pagination>Click Me</Pagination>);
		const component = container.firstChild;
		expect(component).toHaveClass('pagination')
		expect(component).not.toHaveClass('pagination-extra-large', 'pagination-large', 'pagination-small', 'pagination-extra-small')
	});
	test("render xl size", () => {
		const {container} = render(<Pagination size="xl">Click Me</Pagination>);
		const component = container.firstChild;
		expect(component).toHaveClass('pagination-extra-large')
		expect(component).not.toHaveClass('pagination-large', 'pagination-small', 'pagination-extra-small')
	});
	test("render lg size", () => {
		const {container} = render(<Pagination size="lg">Click Me</Pagination>);
		const component = container.firstChild;
		expect(component).toHaveClass('pagination-large')
		expect(component).not.toHaveClass('pagination-extra-large', 'pagination-small', 'pagination-extra-small')
	});
	test("render sm size", () => {
		const {container} = render(<Pagination size="sm">Click Me</Pagination>);
		const component = container.firstChild;
		expect(component).toHaveClass('pagination-small')
		expect(component).not.toHaveClass('pagination-extra-large', 'pagination-large', 'pagination-extra-small')
	});
	test("render xs size", () => {
		const {container} = render(<Pagination size="xs">Click Me</Pagination>);
		const component = container.firstChild;
		expect(component).toHaveClass('pagination-extra-small')
		expect(component).not.toHaveClass('pagination-extra-large', 'pagination-large', 'pagination-small')
	});
});



