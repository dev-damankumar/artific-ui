import React from "react";
import {getByText, render} from "@testing-library/react";
import Row from "./Row";

describe("Render Row", () => {
	test("render the Row component", () => {
		const {container} = render(<Row>Hello World!</Row>);
		getByText(container, "Hello World!");
	});
	test("render default styles", () => {
		const {container} = render(<Row>Click Me</Row>);
		const component = container.firstChild;
		expect(component).toHaveClass('row')
	});
});
