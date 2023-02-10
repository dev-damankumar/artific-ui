import React from "react";
import {getByTestId, render} from "@testing-library/react";
import Progress from "./Progress";

describe("Render Progress", () => {
	test("render progress bar", async () => {
		const {container} = render(
			<Progress value={50}></Progress>
		);
		const component = container.firstElementChild!;
		expect(component.querySelector('.progress-bar')).toHaveStyle('width:50%;')
	});
	test("render progress bar label inside", async () => {
		const {container} = render(
			<Progress label="inside" value={50}></Progress>
		);
		const component = container.firstElementChild!;
		expect(component.querySelector('.progress-bar')).toHaveTextContent('50%')
	});
	test("render progress bar label float", async () => {
		const {container} = render(
			<Progress label="float" value={50}></Progress>
		);
		const component = container.firstElementChild!;
		expect(component).toHaveClass('progress-label-float')
	});
	test("render default styles", () => {
		const {container} = render(<Progress>Click Me</Progress>);
		const component = container.firstChild;
		expect(component).toHaveClass('progress')
	});
});

describe("Render Progress Default Themes", () => {
	test("render default theme", () => {
		const {container} = render(<Progress>Click Me</Progress>);
		const component = container.firstChild;
		expect(component).toHaveClass('progress-primary')
	});
	test("render primary theme", () => {
		const {container} = render(<Progress theme="primary">Click Me</Progress>);
		const component = container.firstChild;
		expect(component).toHaveClass('progress-primary')
	});
	test("render secondary theme", () => {
		const {container} = render(<Progress theme="secondary">Click Me</Progress>);
		const component = container.firstChild;
		expect(component).toHaveClass('progress-secondary')
	});
	test("render light theme", () => {
		const {container} = render(<Progress theme="light">Click Me</Progress>);
		const component = container.firstChild;
		expect(component).toHaveClass('progress-light')
	});
	test("render dark theme", () => {
		const {container} = render(<Progress theme="dark">Click Me</Progress>);
		const component = container.firstChild;
		expect(component).toHaveClass('progress-dark')
	});
	test("render custom color scheme", () => {
		const colorScheme = {
			color: 'black',
			background: 'linear-gradient(45deg, black, transparent)',
			backgroundColor: 'blue'
		}
		const {container} = render(<Progress data-testid="progress" colorScheme={colorScheme}>Click Me</Progress>);
		const element = getByTestId(container, 'progress');
		const styles = getComputedStyle(element);
		expect(styles.getPropertyValue('--primary')).toBe(colorScheme.background);
		expect(styles.getPropertyValue('--primary-color')).toBe(colorScheme.backgroundColor);
		expect(styles.getPropertyValue('--primary-text')).toBe(colorScheme.color);
	});
});

describe("Render Progress Layouts", () => {
	test("render default layout", () => {
		const {container} = render(<Progress>Click Me</Progress>);
		const component = container.firstChild;
		expect(component).toHaveClass('progress')
		expect(component).not.toHaveClass('progress-rounded', 'progress-pill', 'progress-no-radius')
	});
	test("render rounded layout", () => {
		const {container} = render(<Progress layout="rounded">Click Me</Progress>);
		const component = container.firstChild;
		expect(component).toHaveClass('progress-rounded')
		expect(component).not.toHaveClass('progress-pill', 'progress-no-radius')
	});
	test("render no-radius layout", () => {
		const {container} = render(<Progress layout="no-radius">Click Me</Progress>);
		const component = container.firstChild;
		expect(component).toHaveClass('progress-no-radius')
		expect(component).not.toHaveClass('progress-rounded', 'progress-pill')
	});
	test("render pill layout", () => {
		const {container} = render(<Progress layout="pill">Click Me</Progress>);
		const component = container.firstChild;
		expect(component).toHaveClass('progress-pill')
		expect(component).not.toHaveClass('progress-rounded', 'progress-no-radius')
	});
});

describe("Render Progress Variants", () => {
	test("render default variant", () => {
		const {container} = render(<Progress>Click Me</Progress>);
		const component = container.firstChild;
		expect(component).toHaveClass('progress')
		expect(component).not.toHaveClass('progress-outline', 'progress-fluid', 'progress-striped')
	});
	test("render outline variant", () => {
		const {container} = render(<Progress variant="outline">Click Me</Progress>);
		const component = container.firstChild;
		expect(component).toHaveClass('progress-outline')
		expect(component).not.toHaveClass('progress-fluid', 'progress-striped')
	});
	test("render note variant", () => {
		const {container} = render(<Progress variant="fluid">Click Me</Progress>);
		const component = container.firstChild;
		expect(component).toHaveClass('progress-fluid')
		expect(component).not.toHaveClass('progress-outline', 'progress-striped')
	});
	test("render note variant", () => {
		const {container} = render(<Progress variant="striped">Click Me</Progress>);
		const component = container.firstChild;
		expect(component).toHaveClass('progress-striped')
		expect(component).not.toHaveClass('progress-outline', 'progress-fluid')
	});
});

describe("Render Progress Sizes", () => {
	test("render default/md size", () => {
		const {container} = render(<Progress>Click Me</Progress>);
		const component = container.firstChild;
		expect(component).toHaveClass('progress')
		expect(component).not.toHaveClass('progress-extra-large', 'progress-large', 'progress-small', 'progress-extra-small')
	});
	test("render xl size", () => {
		const {container} = render(<Progress size="xl">Click Me</Progress>);
		const component = container.firstChild;
		expect(component).toHaveClass('progress-extra-large')
		expect(component).not.toHaveClass('progress-large', 'progress-small', 'progress-extra-small')
	});
	test("render lg size", () => {
		const {container} = render(<Progress size="lg">Click Me</Progress>);
		const component = container.firstChild;
		expect(component).toHaveClass('progress-large')
		expect(component).not.toHaveClass('progress-extra-large', 'progress-small', 'progress-extra-small')
	});
	test("render sm size", () => {
		const {container} = render(<Progress size="sm">Click Me</Progress>);
		const component = container.firstChild;
		expect(component).toHaveClass('progress-small')
		expect(component).not.toHaveClass('progress-extra-large', 'progress-large', 'progress-extra-small')
	});
	test("render xs size", () => {
		const {container} = render(<Progress size="xs">Click Me</Progress>);
		const component = container.firstChild;
		expect(component).toHaveClass('progress-extra-small')
		expect(component).not.toHaveClass('progress-extra-large', 'progress-large', 'progress-small')
	});
});


