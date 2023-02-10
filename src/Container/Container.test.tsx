import React from "react";
import {getByText, render} from "@testing-library/react";
import Container from "./Container";

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
	test("render default/md size", () => {
		const {container} = render(<Container>Click Me</Container>);
		const component = container.firstChild;
		expect(component).toHaveClass('container')
		expect(component).not.toHaveClass('container-xl', 'container-lg', 'container-sm', 'container-xs')
	});
	test("render xl size", () => {
		const {container} = render(<Container size="xl">Click Me</Container>);
		const component = container.firstChild;
		expect(component).toHaveClass('container-xl')
		expect(component).not.toHaveClass('container-lg', 'container-sm', 'container-xs')
	});
	test("render lg size", () => {
		const {container} = render(<Container size="lg">Click Me</Container>);
		const component = container.firstChild;
		expect(component).toHaveClass('container-lg')
		expect(component).not.toHaveClass('container-xl', 'container-sm', 'container-xs')
	});
	test("render sm size", () => {
		const {container} = render(<Container size="sm">Click Me</Container>);
		const component = container.firstChild;
		expect(component).toHaveClass('container-sm')
		expect(component).not.toHaveClass('container-xl', 'container-lg', 'container-xs')
	});
	test("render xs size", () => {
		const {container} = render(<Container size="xs">Click Me</Container>);
		const component = container.firstChild;
		expect(component).toHaveClass('container-xs')
		expect(component).not.toHaveClass('container-xl', 'container-lg', 'container-sm')
	});
});


