import React from "react";
import {getByTestId, render} from "@testing-library/react";
import Tooltip from "./Tooltip";
import {Button} from "../Button";

describe("Render Tooltip", () => {
	test("render default styles", () => {
		const {container} = render(<Tooltip title="tooltip" data-testid="tooltip">
			<Button>Tooltip</Button>
		</Tooltip>);
		const component = getByTestId(container, 'tooltip')
		expect(component).toHaveClass('tooltip')
	});
});

describe("Render Tooltip Default Themes", () => {
	test("render default theme", () => {
		const {container} = render(<Tooltip title="tooltip" data-testid="tooltip"><Button>Tooltip</Button></Tooltip>);
		const component = getByTestId(container, 'tooltip')
		expect(component).toHaveClass('tooltip-primary')
	});
	test("render primary theme", () => {
		const {container} = render(
			<Tooltip title="tooltip" data-testid="tooltip" theme="primary"><Button>Tooltip</Button></Tooltip>);
		const component = getByTestId(container, 'tooltip')
		expect(component).toHaveClass('tooltip-primary')
	});
	test("render secondary theme", () => {
		const {container} = render(
			<Tooltip title="tooltip" data-testid="tooltip" theme="secondary"><Button>Tooltip</Button></Tooltip>);
		const component = getByTestId(container, 'tooltip')
		expect(component).toHaveClass('tooltip-secondary')
	});
	test("render light theme", () => {
		const {container} = render(<Tooltip title="tooltip" data-testid="tooltip" theme="light"><Button>Tooltip</Button></Tooltip>);
		const component = getByTestId(container, 'tooltip')
		expect(component).toHaveClass('tooltip-light')
	});
	test("render dark theme", () => {
		const {container} = render(<Tooltip title="tooltip" data-testid="tooltip" theme="dark"><Button>Tooltip</Button></Tooltip>);
		const component = getByTestId(container, 'tooltip')
		expect(component).toHaveClass('tooltip-dark')
	});
	test("render custom color scheme", () => {
		const colorScheme = {
			color: 'black',
			background: 'linear-gradient(45deg, black, transparent)',
			backgroundColor: 'blue'
		}
		const {container} = render(
			<Tooltip title="tooltip" data-testid="tooltip" colorScheme={colorScheme}><Button>Tooltip</Button></Tooltip>);
		const element = getByTestId(container, 'tooltip');
		const styles = getComputedStyle(element);
		expect(styles.getPropertyValue('--primary')).toBe(colorScheme.background);
		expect(styles.getPropertyValue('--primary-color')).toBe(colorScheme.backgroundColor);
		expect(styles.getPropertyValue('--primary-text')).toBe(colorScheme.color);
	});
});

describe("Render Tooltip Layouts", () => {
	test("render default layout", () => {
		const {container} = render(<Tooltip title="tooltip" data-testid="tooltip"><Button>Tooltip</Button></Tooltip>);
		const component = getByTestId(container, 'tooltip')
		expect(component).toHaveClass('tooltip')
		expect(component).not.toHaveClass('tooltip-rounded', 'tooltip-pill', 'tooltip-no-radius')
	});
	test("render rounded layout", () => {
		const {container} = render(
			<Tooltip title="tooltip" data-testid="tooltip" layout="rounded"><Button>Tooltip</Button></Tooltip>);
		const component = getByTestId(container, 'tooltip')
		expect(component).toHaveClass('tooltip-rounded')
		expect(component).not.toHaveClass('tooltip-pill', 'tooltip-no-radius')
	});
	test("render no-radius layout", () => {
		const {container} = render(
			<Tooltip title="tooltip" data-testid="tooltip" layout="no-radius"><Button>Tooltip</Button></Tooltip>);
		const component = getByTestId(container, 'tooltip')
		expect(component).toHaveClass('tooltip-no-radius')
		expect(component).not.toHaveClass('tooltip-rounded', 'tooltip-pill')
	});
	test("render pill layout", () => {
		const {container} = render(<Tooltip title="tooltip" data-testid="tooltip" layout="pill"><Button>Tooltip</Button></Tooltip>);
		const component = getByTestId(container, 'tooltip')
		expect(component).toHaveClass('tooltip-pill')
		expect(component).not.toHaveClass('tooltip-rounded', 'tooltip-no-radius')
	});
});

describe("Render Tooltip Variants", () => {
	test("render default variant", () => {
		const {container} = render(<Tooltip title="tooltip" data-testid="tooltip"><Button>Tooltip</Button></Tooltip>);
		const component = getByTestId(container, 'tooltip')
		expect(component).toHaveClass('tooltip')
		expect(component).not.toHaveClass('tooltip-arrow')
	});
	test("render outline variant", () => {
		const {container} = render(
			<Tooltip title="tooltip" data-testid="tooltip" variant="arrow"><Button>Tooltip</Button></Tooltip>);
		const component = getByTestId(container, 'tooltip')
		expect(component).toHaveClass('tooltip-arrow')
	});
});

describe("Render Tooltip Sizes", () => {
	test("render default/md size", () => {
		const {container} = render(<Tooltip title="tooltip" data-testid="tooltip"><Button>Tooltip</Button></Tooltip>);
		const component = getByTestId(container, 'tooltip')
		expect(component).toHaveClass('tooltip')
		expect(component).not.toHaveClass('tooltip-extra-large', 'tooltip-large', 'tooltip-small', 'tooltip-extra-small')
	});
	test("render xl size", () => {
		const {container} = render(
			<Tooltip title="tooltip" data-testid="tooltip" size="xl"><Button>Tooltip</Button></Tooltip>);
		const component = getByTestId(container, 'tooltip')
		expect(component).toHaveClass('tooltip-extra-large')
		expect(component).not.toHaveClass('tooltip-large', 'tooltip-small', 'tooltip-extra-small')
	});
	test("render lg size", () => {
		const {container} = render(
			<Tooltip title="tooltip" data-testid="tooltip" size="lg"><Button>Tooltip</Button></Tooltip>);
		const component = getByTestId(container, 'tooltip')
		expect(component).toHaveClass('tooltip-large')
		expect(component).not.toHaveClass('tooltip-extra-large', 'tooltip-small', 'tooltip-extra-small')
	});
	test("render sm size", () => {
		const {container} = render(
			<Tooltip title="tooltip" data-testid="tooltip" size="sm"><Button>Tooltip</Button></Tooltip>);
		const component = getByTestId(container, 'tooltip')
		expect(component).toHaveClass('tooltip-small')
		expect(component).not.toHaveClass('tooltip-extra-large', 'tooltip-large', 'tooltip-extra-small')
	});
	test("render xs size", () => {
		const {container} = render(
			<Tooltip title="tooltip" data-testid="tooltip" size="xs"><Button>Tooltip</Button></Tooltip>);
		const component = getByTestId(container, 'tooltip')
		expect(component).toHaveClass('tooltip-extra-small')
		expect(component).not.toHaveClass('tooltip-extra-large', 'tooltip-large', 'tooltip-small')
	});
});


