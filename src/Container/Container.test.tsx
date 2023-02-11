import React from "react";
import {getByText, render} from "@testing-library/react";
import Container from "./Container";
import {SizesArray} from "../types/Common.types";
import except from "../tests/except";

describe("Render Container", () => {
	test("render the Container component", () => {
		const {container} = render(<Container>Hello World!</Container>);
		getByText(container, "Hello World!");
		expect(container.firstChild).toHaveClass('container')
	});
	test("render the container fluid", () => {
		const {container} = render(<Container fluid>Hello World!</Container>);
		expect(container.firstChild).toHaveClass('container-fluid')
		expect(container.firstChild).not.toHaveClass('container')
	});
});


describe("Render Container Sizes", () => {
	const sizes = [...SizesArray]
	sizes.forEach((size) => {
		test(`render ${size} size`, () => {
			const {container} = render(<Container size={size}>Click Me</Container>);
			const component = container.firstChild;
			expect(component).toHaveClass(size === 'md' ? 'container' : `container-${size}`)
			expect(component).not.toHaveClass(...except(sizes, size === 'md' ? '' : `container-${size}`))
		});
	})
});


