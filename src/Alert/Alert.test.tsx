import React from "react";
import {findByRole, fireEvent, getByText, render} from "@testing-library/react";
import Alert from "./Alert";

describe("Render Alert", () => {
	test("render the Alert component", () => {
		const {container} = render(<Alert>Hello World!</Alert>);
		getByText(container, "Hello World!");
	});
	test("should handle dismiss events", async () => {
		const {container} = render(
			<Alert dismiss={true}>Click me!</Alert>
		);
		const component = container.firstChild;
		const closeButton = await findByRole(container, 'button')
		fireEvent.click(closeButton);
		expect(component).not.toBeVisible()
	});
	test("render default styles", () => {
		const {container} = render(<Alert>Click Me</Alert>);
		const component = container.firstChild;
		expect(component).toHaveClass('alert')
	});
});

describe("Render Alert Default Themes", () => {
	test("render default theme", () => {
		const {container} = render(<Alert>Click Me</Alert>);
		const component = container.firstChild;
		expect(component).toHaveClass('alert-primary')
	});
	test("render primary theme", () => {
		const {container} = render(<Alert theme="primary">Click Me</Alert>);
		const component = container.firstChild;
		expect(component).toHaveClass('alert-primary')
	});
	test("render secondary theme", () => {
		const {container} = render(<Alert theme="secondary">Click Me</Alert>);
		const component = container.firstChild;
		expect(component).toHaveClass('alert-secondary')
	});
	test("render light theme", () => {
		const {container} = render(<Alert theme="light">Click Me</Alert>);
		const component = container.firstChild;
		expect(component).toHaveClass('alert-light')
	});
	test("render dark theme", () => {
		const {container} = render(<Alert theme="dark">Click Me</Alert>);
		const component = container.firstChild;
		expect(component).toHaveClass('alert-dark')
	});
	test("render custom color scheme", () => {
		const colorScheme = {
			color: 'black',
			background: 'linear-gradient(45deg, black, transparent)',
			backgroundColor: 'blue'
		}
		const {container} = render(<Alert colorScheme={colorScheme}>Click Me</Alert>);
		const element = getByText(container, 'Click Me');
		const styles = getComputedStyle(element);
		expect(styles.getPropertyValue('--primary')).toBe(colorScheme.background);
		expect(styles.getPropertyValue('--primary-color')).toBe(colorScheme.backgroundColor);
		expect(styles.getPropertyValue('--primary-text')).toBe(colorScheme.color);
	});
});

describe("Render Alert Layouts", () => {
	test("render default layout", () => {
		const {container} = render(<Alert>Click Me</Alert>);
		const component = container.firstChild;
		expect(component).toHaveClass('alert')
		expect(component).not.toHaveClass('alert-rounded', 'alert-pill', 'alert-no-radius')
	});
	test("render rounded layout", () => {
		const {container} = render(<Alert layout="rounded">Click Me</Alert>);
		const component = container.firstChild;
		expect(component).toHaveClass('alert-rounded')
		expect(component).not.toHaveClass('alert-pill', 'alert-no-radius')
	});
	test("render no-radius layout", () => {
		const {container} = render(<Alert layout="no-radius">Click Me</Alert>);
		const component = container.firstChild;
		expect(component).toHaveClass('alert-no-radius')
		expect(component).not.toHaveClass('alert-rounded', 'alert-pill')
	});
	test("render pill layout", () => {
		const {container} = render(<Alert layout="pill">Click Me</Alert>);
		const component = container.firstChild;
		expect(component).toHaveClass('alert-pill')
		expect(component).not.toHaveClass('alert-rounded', 'alert-no-radius')
	});
});

describe("Render Alert Variants", () => {
	test("render default variant", () => {
		const {container} = render(<Alert>Click Me</Alert>);
		const component = container.firstChild;
		expect(component).toHaveClass('alert')
		expect(component).not.toHaveClass('alert-outline', 'alert-note')
	});
	test("render outline variant", () => {
		const {container} = render(<Alert variant="outline">Click Me</Alert>);
		const component = container.firstChild;
		expect(component).toHaveClass('alert-outline')
		expect(component).not.toHaveClass('alert-note')
	});
	test("render note variant", () => {
		const {container} = render(<Alert variant="note">Click Me</Alert>);
		const component = container.firstChild;
		expect(component).toHaveClass('alert-outline', 'alert-note')
	});
});

describe("Render Alert Sizes", () => {
	test("render default/md size", () => {
		const {container} = render(<Alert>Click Me</Alert>);
		const component = container.firstChild;
		expect(component).toHaveClass('alert')
		expect(component).not.toHaveClass('alert-extra-large', 'alert-large', 'alert-small', 'alert-extra-small')
	});
	test("render xl size", () => {
		const {container} = render(<Alert size="xl">Click Me</Alert>);
		const component = container.firstChild;
		expect(component).toHaveClass('alert-extra-large')
		expect(component).not.toHaveClass('alert-large', 'alert-small', 'alert-extra-small')
	});
	test("render lg size", () => {
		const {container} = render(<Alert size="lg">Click Me</Alert>);
		const component = container.firstChild;
		expect(component).toHaveClass('alert-large')
		expect(component).not.toHaveClass('alert-extra-large', 'alert-small', 'alert-extra-small')
	});
	test("render sm size", () => {
		const {container} = render(<Alert size="sm">Click Me</Alert>);
		const component = container.firstChild;
		expect(component).toHaveClass('alert-small')
		expect(component).not.toHaveClass('alert-extra-large', 'alert-large', 'alert-extra-small')
	});
	test("render xs size", () => {
		const {container} = render(<Alert size="xs">Click Me</Alert>);
		const component = container.firstChild;
		expect(component).toHaveClass('alert-extra-small')
		expect(component).not.toHaveClass('alert-extra-large', 'alert-large', 'alert-small')
	});
});

describe("Render Alert Note Variant Directions", () => {
	test("render default/left direction", () => {
		const {container} = render(<Alert variant="note" direction="left">Click Me</Alert>);
		const component = container.firstChild;
		expect(component).toHaveClass('alert')
		expect(component).not.toHaveClass('alert-note-right', 'alert-note-top', 'alert-note-bottom')
	});
	test("render right direction", () => {
		const {container} = render(<Alert variant="note" direction="right">Click Me</Alert>);
		const component = container.firstChild;
		expect(component).toHaveClass('alert-note-right')
		expect(component).not.toHaveClass('alert-note-top', 'alert-note-bottom')
	});
	test("render top direction", () => {
		const {container} = render(<Alert variant="note" direction="top">Click Me</Alert>);
		const component = container.firstChild;
		expect(component).toHaveClass('alert-note-top')
		expect(component).not.toHaveClass('alert-note-right', 'alert-note-bottom')
	});
	test("render bottom direction", () => {
		const {container} = render(<Alert variant="note" direction="bottom">Click Me</Alert>);
		const component = container.firstChild;
		expect(component).toHaveClass('alert-note-bottom')
		expect(component).not.toHaveClass('alert-note-right', 'alert-note-top')
	});
});


