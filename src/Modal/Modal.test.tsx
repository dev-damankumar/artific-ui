import React from "react";
import {fireEvent, getByTestId, getByText, render} from "@testing-library/react";
import Modal from "./Modal";

describe("Render Modal", () => {
	test("render the Modal component", () => {
		const {container} = render(<Modal>Hello World!</Modal>);
		getByText(container, "Hello World!");
	});
	test("should handle dismiss events", async () => {
		const onClickMock = jest.fn();
		const {container} = render(
			<Modal data-testid="modal" onBackdropClick={onClickMock} dismiss={true}>Click me!</Modal>
		);
		const component = getByTestId(container, 'modal');
		fireEvent.click(component);
		expect(onClickMock).toBeCalled();
	});
	test("render default styles", () => {
		const {container} = render(<Modal>Click Me</Modal>);
		const component = container.firstChild;
		expect(component).toHaveClass('modal')
	});
});

describe("Render Modal Default Themes", () => {
	test("render light theme", () => {
		const {container} = render(<Modal theme="light">Click Me</Modal>);
		const component = container.firstChild;
		expect(component).toHaveClass('modal-light')
	});
	test("render dark theme", () => {
		const {container} = render(<Modal theme="dark">Click Me</Modal>);
		const component = container.firstChild;
		expect(component).not.toHaveClass('modal-light')
	});
});

describe("Render Modal Layouts", () => {
	test("render default layout", () => {
		const {container} = render(<Modal>Click Me</Modal>);
		const component = container.firstChild;
		expect(component).toHaveClass('modal')
		expect(component).not.toHaveClass('modal-rounded', 'modal-pill', 'modal-no-radius')
	});
	test("render rounded layout", () => {
		const {container} = render(<Modal layout="rounded">Click Me</Modal>);
		const component = container.firstChild;
		expect(component).toHaveClass('modal-rounded')
		expect(component).not.toHaveClass('modal-pill', 'modal-no-radius')
	});
	test("render no-radius layout", () => {
		const {container} = render(<Modal layout="no-radius">Click Me</Modal>);
		const component = container.firstChild;
		expect(component).toHaveClass('modal-no-radius')
		expect(component).not.toHaveClass('modal-rounded', 'modal-pill')
	});
});

describe("Render Modal Variants", () => {
	test("render default variant", () => {
		const {container} = render(<Modal>Click Me</Modal>);
		const component = container.firstChild;
		expect(component).toHaveClass('modal')
		expect(component).not.toHaveClass('modal-striped', 'modal-striped-body', 'modal-striped-header', 'modal-striped-footer')
	});
	test("render striped variant", () => {
		const {container} = render(<Modal variant="striped">Click Me</Modal>);
		const component = container.firstChild;
		expect(component).toHaveClass('modal-striped')
		expect(component).not.toHaveClass('modal-striped-body', 'modal-striped-header', 'modal-striped-footer')

	});
	test("render striped-body variant", () => {
		const {container} = render(<Modal variant="striped-body">Click Me</Modal>);
		const component = container.firstChild;
		expect(component).toHaveClass('modal-striped-body')
		expect(component).not.toHaveClass('modal-striped', 'modal-striped-header', 'modal-striped-footer')

	});
	test("render striped-header variant", () => {
		const {container} = render(<Modal variant="striped-header">Click Me</Modal>);
		const component = container.firstChild;
		expect(component).toHaveClass('modal-striped-header')
		expect(component).not.toHaveClass('modal-striped', 'modal-striped-body', 'modal-striped-footer')

	});
	test("render striped-footer variant", () => {
		const {container} = render(<Modal variant="striped-footer">Click Me</Modal>);
		const component = container.firstChild;
		expect(component).toHaveClass('modal-striped-footer')
		expect(component).not.toHaveClass('modal-striped', 'modal-striped-body', 'modal-striped-header')

	});
});

describe("Render Modal Sizes", () => {
	test("render default/md size", () => {
		const {container} = render(<Modal data-testid="modal">Click Me</Modal>);
		const modal = getByTestId(container, 'modal');
		expect(modal.firstElementChild).toHaveClass('modal-content')
		expect(modal.firstElementChild).not.toHaveClass('modal-extra-large-content', 'modal-large-content', 'modal-small-content', 'modal-extra-small-content')
	});
	test("render xl size", () => {
		const {container} = render(<Modal data-testid="modal" size="xl">Click Me</Modal>);
		const modal = getByTestId(container, 'modal');
		expect(modal.firstElementChild).toHaveClass('modal-extra-large-content')
		expect(modal.firstElementChild).not.toHaveClass('modal-large-content', 'modal-small-content', 'modal-extra-small-content')
	});
	test("render lg size", () => {
		const {container} = render(<Modal data-testid="modal" size="lg">Click Me</Modal>);
		const modal = getByTestId(container, 'modal');
		expect(modal.firstElementChild).toHaveClass('modal-large-content')
		expect(modal.firstElementChild).not.toHaveClass('modal-extra-large-content', 'modal-small-content', 'modal-extra-small-content')
	});
	test("render sm size", () => {
		const {container} = render(<Modal data-testid="modal" size="sm">Click Me</Modal>);
		const modal = getByTestId(container, 'modal');
		expect(modal.firstElementChild).toHaveClass('modal-small-content')
		expect(modal.firstElementChild).not.toHaveClass('modal-extra-large-content', 'modal-large-content', 'modal-extra-small-content')
	});
	test("render xs size", () => {
		const {container} = render(<Modal data-testid="modal" size="xs">Click Me</Modal>);
		const modal = getByTestId(container, 'modal');
		expect(modal.firstElementChild).toHaveClass('modal-extra-small-content')
		expect(modal.firstElementChild).not.toHaveClass('modal-extra-large-content', 'modal-large-content', 'modal-small-content')
	});

	test("render full size", () => {
		const {container} = render(<Modal size="full">Click Me</Modal>);
		const component = container.firstChild;
		expect(component).toHaveClass('modal-full')
		expect(component).not.toHaveClass('modal-full-width', 'modal-full-height', 'modal-expanded')
	});
	test("render full-width size", () => {
		const {container} = render(<Modal size="full-width">Click Me</Modal>);
		const component = container.firstChild;
		expect(component).toHaveClass('modal-full-width')
		expect(component).not.toHaveClass('modal-full', 'modal-full-height', 'modal-expanded')
	});
	test("render full-height size", () => {
		const {container} = render(<Modal size="full-height">Click Me</Modal>);
		const component = container.firstChild;
		expect(component).toHaveClass('modal-full-height')
		expect(component).not.toHaveClass('modal-full-width', 'modal-full', 'modal-expanded')
	});
	test("render expanded size", () => {
		const {container} = render(<Modal size="expanded">Click Me</Modal>);
		const component = container.firstChild;
		expect(component).toHaveClass('modal-expanded')
		expect(component).not.toHaveClass('modal-full-width', 'modal-full-height', 'modal-full')
	});
});



