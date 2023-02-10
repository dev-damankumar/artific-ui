import React from "react";
import {getByText, render} from "@testing-library/react";
import Col from "./Col";

describe("Render Col", () => {
	test("render the Col component", () => {
		const {container} = render(<Col>Hello World!</Col>);
		getByText(container, "Hello World!");
		expect(container.firstChild).toHaveClass('col')
	});
	test("render the col with order", () => {
		const {container} = render(<Col order={3}>Hello World!</Col>);
		expect(container.firstChild).toHaveClass('order-3')
	});
	test("render the col with offset", () => {
		const {container} = render(<Col offset={3}>Hello World!</Col>);
		expect(container.firstChild).toHaveClass('offset-3')
	});
});


describe("Render Col Number", () => {
	test("render default col", () => {
		const {container} = render(<Col>Click Me</Col>);
		const component = container.firstChild;
		expect(component).toHaveClass('col')
	});
	test("render 12 col", () => {
		const {container} = render(<Col col={12}>Click Me</Col>);
		const component = container.firstChild;
		expect(component).toHaveClass('col-12')
	});
	test("render lg col", () => {
		const {container} = render(<Col col={6}>Click Me</Col>);
		const component = container.firstChild;
		expect(component).toHaveClass('col-6')
	});
	test("render sm col", () => {
		const {container} = render(<Col col={3}>Click Me</Col>);
		const component = container.firstChild;
		expect(component).toHaveClass('col-3')
	});
	test("render xs col", () => {
		const {container} = render(<Col col={8}>Click Me</Col>);
		const component = container.firstChild;
		expect(component).toHaveClass('col-8')
	});
});

describe("Render Col Sizes", () => {
	test("render default/md size", () => {
		const {container} = render(<Col>Click Me</Col>);
		const component = container.firstChild;
		expect(component).toHaveClass('col')
		expect(component).not.toHaveClass('col-xl', 'col-lg', 'col-sm', 'col-xs')
	});
	test("render xl size", () => {
		const {container} = render(<Col size="xl">Click Me</Col>);
		const component = container.firstChild;
		expect(component).toHaveClass('col-xl')
		expect(component).not.toHaveClass('col-lg', 'col-sm', 'col-xs')
	});
	test("render lg size", () => {
		const {container} = render(<Col size="lg">Click Me</Col>);
		const component = container.firstChild;
		expect(component).toHaveClass('col-lg')
		expect(component).not.toHaveClass('col-xl', 'col-sm', 'col-xs')
	});
	test("render sm size", () => {
		const {container} = render(<Col size="sm">Click Me</Col>);
		const component = container.firstChild;
		expect(component).toHaveClass('col-sm')
		expect(component).not.toHaveClass('col-xl', 'col-lg', 'col-xs')
	});
	test("render xs size", () => {
		const {container} = render(<Col size="xs">Click Me</Col>);
		const component = container.firstChild;
		expect(component).toHaveClass('col-xs')
		expect(component).not.toHaveClass('col-xl', 'col-lg', 'col-sm')
	});
});

describe("Render Col Sizes With Numbers", () => {
	test("render xl-12 size", () => {
		const {container} = render(<Col size="xl" col={12}>Click Me</Col>);
		const component = container.firstChild;
		expect(component).toHaveClass('col-xl-12')
	});
	test("render lg-8 size", () => {
		const {container} = render(<Col size="lg" col={8}>Click Me</Col>);
		const component = container.firstChild;
		expect(component).toHaveClass('col-lg-8')
	});
	test("render sm-11 size", () => {
		const {container} = render(<Col size="sm" col={11}>Click Me</Col>);
		const component = container.firstChild;
		expect(component).toHaveClass('col-sm-11')
	});
	test("render xs-2 size", () => {
		const {container} = render(<Col size="xs" col={2}>Click Me</Col>);
		const component = container.firstChild;
		expect(component).toHaveClass('col-xs-2')
	});
});

