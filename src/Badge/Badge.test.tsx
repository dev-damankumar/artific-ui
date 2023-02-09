import React from "react";
import {getByTestId, getByText, render} from "@testing-library/react";
import Badge from "./Badge";

describe("Render Badge", () => {
	test("render the Badge component", () => {
		const {container} = render(<Badge title="HW"/>);
		getByText(container, "HW");
	});
	test("render default styles", () => {
		const {container} = render(<Badge/>);
		const component = container.firstChild;
		expect(component).toHaveClass('badge')
	});
});

describe("Render Badge Default Themes", () => {
	test("render default theme", () => {
		const {container} = render(<Badge/>);
		const component = container.firstChild;
		expect(component).toHaveClass('badge-primary')
	});
	test("render primary theme", () => {
		const {container} = render(<Badge theme="primary"/>);
		const component = container.firstChild;
		expect(component).toHaveClass('badge-primary')
	});
	test("render secondary theme", () => {
		const {container} = render(<Badge theme="secondary"/>);
		const component = container.firstChild;
		expect(component).toHaveClass('badge-secondary')
	});
	test("render light theme", () => {
		const {container} = render(<Badge theme="light"/>);
		const component = container.firstChild;
		expect(component).toHaveClass('badge-light')
	});
	test("render dark theme", () => {
		const {container} = render(<Badge theme="dark"/>);
		const component = container.firstChild;
		expect(component).toHaveClass('badge-dark')
	});
	test("render custom color scheme", () => {
		const colorScheme = {
			color: 'black',
			background: 'linear-gradient(45deg, black, transparent)',
			backgroundColor: 'blue'
		}
		const {container} = render(<Badge data-testid="badge" title="AT" colorScheme={colorScheme}/>);
		const element = getByTestId(container, 'badge')
		const styles = getComputedStyle(element);
		expect(styles.getPropertyValue('--primary')).toBe(colorScheme.background);
		expect(styles.getPropertyValue('--primary-color')).toBe(colorScheme.backgroundColor);
		expect(styles.getPropertyValue('--primary-text')).toBe(colorScheme.color);
	});
});

describe("Render Badge Layouts", () => {
	test("render default layout", () => {
		const {container} = render(<Badge/>);
		const component = container.firstChild;
		expect(component).toHaveClass('badge')
		expect(component).not.toHaveClass('badge-rounded', 'badge-pill', 'badge-no-radius')
	});
	test("render rounded layout", () => {
		const {container} = render(<Badge layout="rounded"/>);
		const component = container.firstChild;
		expect(component).toHaveClass('badge-rounded')
		expect(component).not.toHaveClass('badge-pill', 'badge-no-radius')
	});
	test("render no-radius layout", () => {
		const {container} = render(<Badge layout="no-radius"/>);
		const component = container.firstChild;
		expect(component).toHaveClass('badge-no-radius')
		expect(component).not.toHaveClass('badge-rounded', 'badge-pill')
	});
	test("render pill layout", () => {
		const {container} = render(<Badge layout="pill"/>);
		const component = container.firstChild;
		expect(component).toHaveClass('badge-pill')
		expect(component).not.toHaveClass('badge-rounded', 'badge-no-radius')
	});
});

describe("Render Badge Variants", () => {
	test("render default variant", () => {
		const {container} = render(<Badge/>);
		const component = container.firstChild;
		expect(component).toHaveClass('badge')
		expect(component).not.toHaveClass('badge-outline', 'badge-dot')
	});
	test("render outline variant", () => {
		const {container} = render(<Badge variant="outline"/>);
		const component = container.firstChild;
		expect(component).toHaveClass('badge-outline')
		expect(component).not.toHaveClass('badge-dot')
	});
	test("render dot variant", () => {
		const {container} = render(<Badge variant="dot"/>);
		const component = container.firstChild;
		expect(component).toHaveClass('badge-dot')
		expect(component).not.toHaveClass('badge-outline')

	});
});

describe("Render Badge Sizes", () => {
	test("render default/md size", () => {
		const {container} = render(<Badge/>);
		const component = container.firstChild;
		expect(component).toHaveClass('badge')
		expect(component).not.toHaveClass('badge-extra-large', 'badge-large', 'badge-small', 'badge-extra-small')
	});
	test("render xl size", () => {
		const {container} = render(<Badge size="xl"/>);
		const component = container.firstChild;
		expect(component).toHaveClass('badge-extra-large')
		expect(component).not.toHaveClass('badge-large', 'badge-small', 'badge-extra-small')
	});
	test("render lg size", () => {
		const {container} = render(<Badge size="lg"/>);
		const component = container.firstChild;
		expect(component).toHaveClass('badge-large')
		expect(component).not.toHaveClass('badge-extra-large', 'badge-small', 'badge-extra-small')
	});
	test("render sm size", () => {
		const {container} = render(<Badge size="sm"/>);
		const component = container.firstChild;
		expect(component).toHaveClass('badge-small')
		expect(component).not.toHaveClass('badge-extra-large', 'badge-large', 'badge-extra-small')
	});
	test("render xs size", () => {
		const {container} = render(<Badge size="xs"/>);
		const component = container.firstChild;
		expect(component).toHaveClass('badge-extra-small')
		expect(component).not.toHaveClass('badge-extra-large', 'badge-large', 'badge-small')
	});
});



