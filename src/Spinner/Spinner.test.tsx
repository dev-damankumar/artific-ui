import React from "react";
import {getByTestId, render} from "@testing-library/react";
import Spinner from "./Spinner";

describe("Render Spinner", () => {
	test("render the Spinner component", () => {
		const {container} = render(<Spinner data-testid="spinner">Hello World!</Spinner>);
		const spinner = getByTestId(container, 'spinner')
		expect(spinner).toHaveClass('spinner')
	});
});

describe("Render Spinner Default Themes", () => {
	test("render default theme", () => {
		const {container} = render(<Spinner>Click Me</Spinner>);
		const component = container.firstChild;
		expect(component).toHaveClass('spinner-primary')
	});
	test("render primary theme", () => {
		const {container} = render(<Spinner theme="primary">Click Me</Spinner>);
		const component = container.firstChild;
		expect(component).toHaveClass('spinner-primary')
	});
	test("render secondary theme", () => {
		const {container} = render(<Spinner theme="secondary">Click Me</Spinner>);
		const component = container.firstChild;
		expect(component).toHaveClass('spinner-secondary')
	});
	test("render light theme", () => {
		const {container} = render(<Spinner theme="light">Click Me</Spinner>);
		const component = container.firstChild;
		expect(component).toHaveClass('spinner-light')
	});
	test("render dark theme", () => {
		const {container} = render(<Spinner theme="dark">Click Me</Spinner>);
		const component = container.firstChild;
		expect(component).toHaveClass('spinner-dark')
	});
	test("render custom color scheme", () => {
		const colorScheme = {
			color: 'black',
			background: 'linear-gradient(45deg, black, transparent)',
			backgroundColor: 'blue'
		}
		const {container} = render(<Spinner data-testid="spinner" colorScheme={colorScheme}>Click Me</Spinner>);
		const spinner = getByTestId(container, 'spinner')
		const styles = getComputedStyle(spinner);
		expect(styles.getPropertyValue('--primary')).toBe(colorScheme.background);
		expect(styles.getPropertyValue('--primary-color')).toBe(colorScheme.backgroundColor);
		expect(styles.getPropertyValue('--primary-text')).toBe(colorScheme.color);
	});
});

describe("Render Spinner Variants", () => {
	test("render default variant", () => {
		const {container} = render(<Spinner>Click Me</Spinner>);
		const component = container.firstChild;
		expect(component).toHaveClass('spinner')
		expect(component).not.toHaveClass('spinner-box', 'spinner-dots', 'spinner-ring', 'spinner-ripple')
	});
	test("render box variant", () => {
		const {container} = render(<Spinner variant="box">Click Me</Spinner>);
		const component = container.firstChild;
		expect(component).toHaveClass('spinner-box')
		expect(component).not.toHaveClass('spinner-dots', 'spinner-ring', 'spinner-ripple')
	});
	test("render dots variant", () => {
		const {container} = render(<Spinner variant="dots">Click Me</Spinner>);
		const component = container.firstChild;
		expect(component).toHaveClass('spinner-dots')
		expect(component).not.toHaveClass('spinner-box', 'spinner-ring', 'spinner-ripple')
	});
	test("render ring variant", () => {
		const {container} = render(<Spinner variant="ring">Click Me</Spinner>);
		const component = container.firstChild;
		expect(component).toHaveClass('spinner-ring')
		expect(component).not.toHaveClass('spinner-box', 'spinner-dots', 'spinner-ripple')
	});
	test("render ripple variant", () => {
		const {container} = render(<Spinner variant="ripple">Click Me</Spinner>);
		const component = container.firstChild;
		expect(component).toHaveClass('spinner-ripple')
		expect(component).not.toHaveClass('spinner-box', 'spinner-dots', 'spinner-ring')
	});
});

describe("Render Spinner Sizes", () => {
	test("render default/md size", () => {
		const {container} = render(<Spinner>Click Me</Spinner>);
		const component = container.firstChild;
		expect(component).toHaveClass('spinner')
		expect(component).not.toHaveClass('spinner-extra-large', 'spinner-large', 'spinner-small', 'spinner-extra-small')
	});
	test("render xl size", () => {
		const {container} = render(<Spinner size="xl">Click Me</Spinner>);
		const component = container.firstChild;
		expect(component).toHaveClass('spinner-extra-large')
		expect(component).not.toHaveClass('spinner-large', 'spinner-small', 'spinner-extra-small')
	});
	test("render lg size", () => {
		const {container} = render(<Spinner size="lg">Click Me</Spinner>);
		const component = container.firstChild;
		expect(component).toHaveClass('spinner-large')
		expect(component).not.toHaveClass('spinner-extra-large', 'spinner-small', 'spinner-extra-small')
	});
	test("render sm size", () => {
		const {container} = render(<Spinner size="sm">Click Me</Spinner>);
		const component = container.firstChild;
		expect(component).toHaveClass('spinner-small')
		expect(component).not.toHaveClass('spinner-extra-large', 'spinner-large', 'spinner-extra-small')
	});
	test("render xs size", () => {
		const {container} = render(<Spinner size="xs">Click Me</Spinner>);
		const component = container.firstChild;
		expect(component).toHaveClass('spinner-extra-small')
		expect(component).not.toHaveClass('spinner-extra-large', 'spinner-large', 'spinner-small')
	});
});

