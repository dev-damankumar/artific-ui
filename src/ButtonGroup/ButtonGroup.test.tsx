import React from "react";
import {getByTestId, getByText, render} from "@testing-library/react";
import ButtonGroup from "./ButtonGroup";
import Button from "../Button";

describe("Render ButtonGroup", () => {
	test("render the ButtonGroup component", () => {
		const {container} = render(<ButtonGroup>
			<Button>Button 1</Button>
			<Button>Button 2</Button>
		</ButtonGroup>);
		const component = container.firstChild
		getByText(container, "Button 1");
		getByText(container, "Button 2");
		expect(component).toHaveClass('btn-group')
	});
});

describe("Render ButtonGroup Default Themes", () => {
	test("render default theme", () => {
		const {container} = render(<ButtonGroup>
			<Button data-testid="button1">Button 1</Button>
			<Button data-testid="button2">Button 2</Button>
		</ButtonGroup>);
		const button1 = getByTestId(container, 'button1')
		const button2 = getByTestId(container, 'button2')
		expect(button1).toHaveClass('btn-primary')
		expect(button2).toHaveClass('btn-primary')
	});
	test("render primary theme", () => {
		const {container} = render(<ButtonGroup theme="primary">
			<Button data-testid="button1">Button 1</Button>
			<Button data-testid="button2">Button 2</Button>
		</ButtonGroup>);
		const button1 = getByTestId(container, 'button1')
		const button2 = getByTestId(container, 'button2')
		expect(button1).toHaveClass('btn-primary')
		expect(button2).toHaveClass('btn-primary')
	});
	test("render secondary theme", () => {
		const {container} = render(<ButtonGroup theme="secondary">
			<Button data-testid="button1">Button 1</Button>
			<Button data-testid="button2">Button 2</Button>
		</ButtonGroup>);
		const button1 = getByTestId(container, 'button1')
		const button2 = getByTestId(container, 'button2')
		expect(button1).toHaveClass('btn-secondary')
		expect(button2).toHaveClass('btn-secondary')
	});
	test("render light theme", () => {
		const {container} = render(<ButtonGroup theme="light">
			<Button data-testid="button1">Button 1</Button>
			<Button data-testid="button2">Button 2</Button>
		</ButtonGroup>);
		const button1 = getByTestId(container, 'button1')
		const button2 = getByTestId(container, 'button2')
		expect(button1).toHaveClass('btn-light')
		expect(button2).toHaveClass('btn-light')
	});
	test("render dark theme", () => {
		const {container} = render(<ButtonGroup theme="dark">
			<Button data-testid="button1">Button 1</Button>
			<Button data-testid="button2">Button 2</Button>
		</ButtonGroup>);
		const button1 = getByTestId(container, 'button1')
		const button2 = getByTestId(container, 'button2')
		expect(button1).toHaveClass('btn-dark')
		expect(button2).toHaveClass('btn-dark')
	});
	test("render custom color scheme", () => {
		const colorScheme = {
			color: 'black',
			background: 'linear-gradient(45deg, black, transparent)',
			backgroundColor: 'blue'
		}
		const {container} = render(<ButtonGroup colorScheme={colorScheme}>
			<Button data-testid="button1">Button 1</Button>
			<Button data-testid="button2">Button 2</Button>
		</ButtonGroup>);
		const button1 = getByTestId(container, 'button1')
		const button2 = getByTestId(container, 'button2')
		const styles = getComputedStyle(button1);
		expect(styles.getPropertyValue('--primary')).toBe(colorScheme.background);
		expect(styles.getPropertyValue('--primary-color')).toBe(colorScheme.backgroundColor);
		expect(styles.getPropertyValue('--primary-text')).toBe(colorScheme.color);

		const styles2 = getComputedStyle(button2);
		expect(styles2.getPropertyValue('--primary')).toBe(colorScheme.background);
		expect(styles2.getPropertyValue('--primary-color')).toBe(colorScheme.backgroundColor);
		expect(styles2.getPropertyValue('--primary-text')).toBe(colorScheme.color);
	});
});

describe("Render ButtonGroup Layouts", () => {
	test("render default layout", () => {
		const {container} = render(<ButtonGroup>
			<Button data-testid="button1">Button 1</Button>
			<Button data-testid="button2">Button 2</Button>
		</ButtonGroup>);
		const button1 = getByTestId(container, 'button1')
		const button2 = getByTestId(container, 'button2')
		expect(button1).not.toHaveClass('btn-rounded', 'btn-pill', 'btn-no-radius')
		expect(button2).not.toHaveClass('btn-rounded', 'btn-pill', 'btn-no-radius')
	});
	test("render rounded layout", () => {
		const {container} = render(<ButtonGroup layout="rounded">
			<Button data-testid="button1">Button 1</Button>
			<Button data-testid="button2">Button 2</Button>
		</ButtonGroup>);
		const button1 = getByTestId(container, 'button1')
		const button2 = getByTestId(container, 'button2')
		expect(button1).toHaveClass('btn-rounded')
		expect(button1).not.toHaveClass('btn-pill', 'btn-no-radius')
		expect(button2).toHaveClass('btn-rounded')
		expect(button2).not.toHaveClass('btn-pill', 'btn-no-radius')
	});
	test("render no-radius layout", () => {
		const {container} = render(<ButtonGroup layout="no-radius">
			<Button data-testid="button1">Button 1</Button>
			<Button data-testid="button2">Button 2</Button>
		</ButtonGroup>);
		const button1 = getByTestId(container, 'button1')
		const button2 = getByTestId(container, 'button2')
		expect(button1).toHaveClass('btn-no-radius')
		expect(button1).not.toHaveClass('btn-rounded', 'btn-pill')
		expect(button2).toHaveClass('btn-no-radius')
		expect(button2).not.toHaveClass('btn-rounded', 'btn-pill')
	});
	test("render pill layout", () => {
		const {container} = render(<ButtonGroup layout="pill">
			<Button data-testid="button1">Button 1</Button>
			<Button data-testid="button2">Button 2</Button>
		</ButtonGroup>);
		const button1 = getByTestId(container, 'button1')
		const button2 = getByTestId(container, 'button2')
		expect(button1).toHaveClass('btn-pill')
		expect(button1).not.toHaveClass('btn-rounded', 'btn-no-radius')
		expect(button2).toHaveClass('btn-pill')
		expect(button2).not.toHaveClass('btn-rounded', 'btn-no-radius')
	});
});

describe("Render ButtonGroup Variants", () => {
	test("render default variant", () => {
		const {container} = render(<ButtonGroup>
			<Button data-testid="button1">Button 1</Button>
			<Button data-testid="button2">Button 2</Button>
		</ButtonGroup>);
		const button1 = getByTestId(container, 'button1')
		const button2 = getByTestId(container, 'button2')
		expect(button1).not.toHaveClass('btn-outline', 'btn-text')
		expect(button2).not.toHaveClass('btn-outline', 'btn-text')
	});
	test("render outline variant", () => {
		const {container} = render(<ButtonGroup variant="outline">
			<Button data-testid="button1">Button 1</Button>
			<Button data-testid="button2">Button 2</Button>
		</ButtonGroup>);
		const button1 = getByTestId(container, 'button1')
		const button2 = getByTestId(container, 'button2')
		expect(button1).toHaveClass('btn-outline')
		expect(button1).not.toHaveClass('btn-text')
		expect(button2).toHaveClass('btn-outline')
		expect(button2).not.toHaveClass('btn-text')
	});
	test("render text variant", () => {
		const {container} = render(<ButtonGroup variant="text">
			<Button data-testid="button1">Button 1</Button>
			<Button data-testid="button2">Button 2</Button>
		</ButtonGroup>);
		const button1 = getByTestId(container, 'button1')
		const button2 = getByTestId(container, 'button2')
		expect(button1).toHaveClass('btn-text', 'btn-outline')
		expect(button2).toHaveClass('btn-text', 'btn-outline')
	});
});

describe("Render ButtonGroup Sizes", () => {
	test("render default/md size", () => {
		const {container} = render(<ButtonGroup>
			<Button>Button 1</Button>
			<Button>Button 2</Button>
		</ButtonGroup>);
		const component = container.firstChild;
		expect(component).toHaveClass('btn-group')
		expect(component).not.toHaveClass('btn-group-extra-large', 'btn-group-large', 'btn-group-small', 'btn-group-extra-small')
	});
	test("render xl size", () => {
		const {container} = render(<ButtonGroup size="xl">
			<Button>Button 1</Button>
			<Button>Button 2</Button>
		</ButtonGroup>);
		const component = container.firstChild;
		expect(component).toHaveClass('btn-group-extra-large')
		expect(component).not.toHaveClass('btn-group-large', 'btn-group-small', 'btn-group-extra-small')
	});
	test("render lg size", () => {
		const {container} = render(<ButtonGroup size="lg">
			<Button>Button 1</Button>
			<Button>Button 2</Button>
		</ButtonGroup>);
		const component = container.firstChild;
		expect(component).toHaveClass('btn-group-large')
		expect(component).not.toHaveClass('btn-group-extra-large', 'btn-group-small', 'btn-group-extra-small')
	});
	test("render sm size", () => {
		const {container} = render(<ButtonGroup size="sm">
			<Button>Button 1</Button>
			<Button>Button 2</Button>
		</ButtonGroup>);
		const component = container.firstChild;
		expect(component).toHaveClass('btn-group-small')
		expect(component).not.toHaveClass('btn-group-extra-large', 'btn-group-large', 'btn-group-extra-small')
	});
	test("render xs size", () => {
		const {container} = render(<ButtonGroup size="xs">
			<Button>Button 1</Button>
			<Button>Button 2</Button>
		</ButtonGroup>);
		const component = container.firstChild;
		expect(component).toHaveClass('btn-group-extra-small')
		expect(component).not.toHaveClass('btn-group-extra-large', 'btn-group-large', 'btn-group-small')
	});
});
