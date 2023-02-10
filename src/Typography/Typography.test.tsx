import React from "react";
import {getByText, render} from "@testing-library/react";
import Typography from "./Typography";

describe("Render Typography", () => {
	test("render the Typography component", () => {
		const {container} = render(<Typography>Hello World!</Typography>);
		getByText(container, "Hello World!");
	});
	test("render default styles", () => {
		const {container} = render(<Typography>Click Me</Typography>);
		const component = container.firstChild;
		expect(component).toHaveClass('typography')
	});
});

describe("Render Typography Default Themes", () => {
	test("render default theme", () => {
		const {container} = render(<Typography>Click Me</Typography>);
		const component = container.firstChild;
		expect(component).toHaveClass('text-default')
	});
	test("render primary theme", () => {
		const {container} = render(<Typography theme="primary">Click Me</Typography>);
		const component = container.firstChild;
		expect(component).toHaveClass('text-primary')
	});
	test("render secondary theme", () => {
		const {container} = render(<Typography theme="secondary">Click Me</Typography>);
		const component = container.firstChild;
		expect(component).toHaveClass('text-secondary')
	});
	test("render light theme", () => {
		const {container} = render(<Typography theme="light">Click Me</Typography>);
		const component = container.firstChild;
		expect(component).toHaveClass('text-light')
	});
	test("render dark theme", () => {
		const {container} = render(<Typography theme="dark">Click Me</Typography>);
		const component = container.firstChild;
		expect(component).toHaveClass('text-dark')
	});
	test("render custom color scheme", () => {
		const colorScheme = {
			color: 'black',
			background: 'linear-gradient(45deg, black, transparent)',
			backgroundColor: 'blue'
		}
		const {container} = render(<Typography colorScheme={colorScheme}>Click Me</Typography>);
		const element = getByText(container, 'Click Me');
		const styles = getComputedStyle(element);
		expect(styles.getPropertyValue('--primary')).toBe(colorScheme.background);
		expect(styles.getPropertyValue('--primary-color')).toBe(colorScheme.backgroundColor);
		expect(styles.getPropertyValue('--primary-text')).toBe(colorScheme.color);
	});
});

describe("Render Typography Weights", () => {
	test("render default/medium weight", () => {
		const {container} = render(<Typography>Click Me</Typography>);
		const component = container.firstChild;
		expect(component).toHaveClass('typography')
		expect(component).not.toHaveClass('typography-light', 'typography-bold')
	});
	test("render rounded weight", () => {
		const {container} = render(<Typography weight="light">Click Me</Typography>);
		const component = container.firstChild;
		expect(component).toHaveClass('typography-light')
		expect(component).not.toHaveClass('typography-bold')
	});
	test("render no-radius weight", () => {
		const {container} = render(<Typography weight="bold">Click Me</Typography>);
		const component = container.firstChild;
		expect(component).toHaveClass('typography-bold')
		expect(component).not.toHaveClass('typography-light')
	});
});

describe("Render Typography Variants", () => {
	test("render default variant", () => {
		const {container} = render(<Typography>Click Me</Typography>);
		const component = container.firstChild;
		expect(component).toHaveClass('typography')
		expect(component).not.toHaveClass('typography-text', 'typography-heading')
	});
	test("render outline variant", () => {
		const {container} = render(<Typography variant="text">Click Me</Typography>);
		const component = container.firstChild;
		expect(component).toHaveClass('typography-text')
		expect(component).not.toHaveClass('typography-heading')
	});
	test("render note variant", () => {
		const {container} = render(<Typography variant="heading">Click Me</Typography>);
		const component = container.firstChild;
		expect(component).toHaveClass('typography-heading');
		expect(component).not.toHaveClass('typography-text')
	});
});

