import React from "react";
import {getByText, render} from "@testing-library/react";
import Col, {ColArray} from "./Col";
import {SizesArray} from "../types/Common.types";
import except from "../tests/except";

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
	const cols = [...ColArray]
	cols.forEach(col => {
		test(`render ${col} col`, () => {
			const {container} = render(<Col col={col}>Click Me</Col>);
			const component = container.firstChild;
			expect(component).toHaveClass(col === 'auto' || col === undefined ? 'col' : `col-${col}`)
		});
	})
});

describe("Render Col Sizes", () => {
	const sizes = [...SizesArray]
	sizes.forEach((size) => {
		test(`render ${size} size`, () => {
			const {container} = render(<Col size={size}>Click Me</Col>);
			const component = container.firstChild;
			expect(component).toHaveClass(size === 'md' ? 'col' : `col-${size}`)
			expect(component).not.toHaveClass(...except(sizes, size === 'md' ? '' : `col-${size}`))
		});
	})
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

