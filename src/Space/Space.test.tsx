import React from "react";
import {getByText, render} from "@testing-library/react";
import Space from "./Space";
import {Axis, AxisArray} from "../types/Common.types";

describe("Render Col", () => {
	test("render the Col component", () => {
		const {container} = render(<Space>Hello World!</Space>);
		getByText(container, "Hello World!");
		expect(container.firstChild).toHaveClass('space')
	});
	test("render the space with order", () => {
		const {container} = render(<Space wrap={false}>Hello World!</Space>);
		expect(container.firstChild).not.toHaveClass('space-wrap')
	});
});


describe("Render Col Number", () => {
	const spaces = [5, 10, 15, 20]
	spaces.forEach(space => {
		test(`render ${space} space`, () => {
			const {container} = render(<Space gap={space as number}>Click Me</Space>);
			const component = container.firstChild;
			expect(component).toHaveStyle(`gap:${space}px`)
		});
	})
});

describe("Render Space directions", () => {
	const sizes = [...AxisArray]
	sizes.forEach((size) => {
		test(`render ${size} size`, () => {
			const {container} = render(<Space gap={10} direction={size as Axis}>Click Me</Space>);
			const component = container.firstChild;
			let style: string
			if (size === 'horizontal') {
				style = `flex-direction: row;`
			} else {
				style = `flex-direction: column;`
			}
			expect(component).toHaveStyle(style)
		});
	})
});


