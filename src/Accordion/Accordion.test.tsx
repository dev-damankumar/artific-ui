import React from "react";
import {fireEvent, getByTestId, render} from "@testing-library/react";
import Accordion from "./Accordion";
import AccordionPanel from "./AccordionPanel";
import AccordionHeader from "./AccordionHeader";
import AccordionBody from "./AccordionBody";

describe("Render Accordion", () => {
	test("render the Accordion component", () => {
		const {container} = render(<Accordion>
			<AccordionPanel>
				<AccordionHeader>Header 1</AccordionHeader>
				<AccordionBody>
					Header 1 Content
				</AccordionBody>
			</AccordionPanel>
			<AccordionPanel>
				<AccordionHeader>Header 2</AccordionHeader>
				<AccordionBody>
					Header 2 Content
				</AccordionBody>
			</AccordionPanel>
		</Accordion>);
		const component = container.firstChild
		expect(component).toHaveClass('accordion-wrap')
		expect(component).toHaveTextContent('Header 1')
		expect(component).toHaveTextContent('Header 2')
	});
	test("should handle click events", () => {
		const {container} = render(<Accordion>
			<AccordionPanel data-testid='panel'>
				<AccordionHeader data-testid='header'>Header 1</AccordionHeader>
				<AccordionBody data-testid='body'>
					Header 1 Content
				</AccordionBody>
			</AccordionPanel>
		</Accordion>);
		const header = getByTestId(container, 'header')
		fireEvent.click(header)
		const panel = getByTestId(container, 'panel')
		expect(panel).toBeVisible()
		expect(panel).toHaveClass('accordion-open')
	});
});

describe("Render Accordion Default Themes", () => {
	test("render default theme", () => {
		const {container} = render(<Accordion>
			<AccordionPanel>
				<AccordionHeader>Header 1</AccordionHeader>
				<AccordionBody>
					Header 1 Content
				</AccordionBody>
			</AccordionPanel>
		</Accordion>);
		const component = container.firstChild;
		expect(component).toHaveClass('accordion-primary')
	});
	test("render primary theme", () => {
		const {container} = render(<Accordion theme="primary">
			<AccordionHeader>Header 1</AccordionHeader>
			<AccordionBody>
				Header 1 Content
			</AccordionBody>
		</Accordion>);
		const component = container.firstChild;
		expect(component).toHaveClass('accordion-primary')
	});
	test("render secondary theme", () => {
		const {container} = render(<Accordion theme="secondary">
			<AccordionHeader>Header 1</AccordionHeader>
			<AccordionBody>
				Header 1 Content
			</AccordionBody>
		</Accordion>);
		const component = container.firstChild;
		expect(component).toHaveClass('accordion-secondary')
	});
	test("render light theme", () => {
		const {container} = render(<Accordion theme="light">
			<AccordionHeader>Header 1</AccordionHeader>
			<AccordionBody>
				Header 1 Content
			</AccordionBody>
		</Accordion>);
		const component = container.firstChild;
		expect(component).toHaveClass('accordion-light')
	});
	test("render dark theme", () => {
		const {container} = render(<Accordion theme="dark">
			<AccordionHeader>Header 1</AccordionHeader>
			<AccordionBody>
				Header 1 Content
			</AccordionBody>
		</Accordion>);
		const component = container.firstChild;
		expect(component).toHaveClass('accordion-dark')
	});
	test("render custom color scheme", () => {
		const colorScheme = {
			color: 'black',
			background: 'linear-gradient(45deg, black, transparent)',
			backgroundColor: 'blue'
		}
		const {container} = render(<Accordion data-testid="accordion" colorScheme={colorScheme}>
			<AccordionHeader>Header 1</AccordionHeader>
			<AccordionBody>
				Header 1 Content
			</AccordionBody>
		</Accordion>);
		const element = getByTestId(container, 'accordion')
		const styles = getComputedStyle(element);
		expect(styles.getPropertyValue('--primary')).toBe(colorScheme.background);
		expect(styles.getPropertyValue('--primary-color')).toBe(colorScheme.backgroundColor);
		expect(styles.getPropertyValue('--primary-text')).toBe(colorScheme.color);
	});
});

describe("Render Accordion Layouts", () => {
	test("render default layout", () => {
		const {container} = render(<Accordion>
			<AccordionHeader>Header 1</AccordionHeader>
			<AccordionBody>
				Header 1 Content
			</AccordionBody></Accordion>);
		const component = container.firstChild;
		expect(component).not.toHaveClass('accordion-rounded', 'accordion-pill', 'accordion-no-radius')
	});
	test("render rounded layout", () => {
		const {container} = render(<Accordion layout="rounded">
			<AccordionHeader>Header 1</AccordionHeader>
			<AccordionBody>
				Header 1 Content
			</AccordionBody></Accordion>);
		const component = container.firstChild;
		expect(component).toHaveClass('accordion-rounded')
		expect(component).not.toHaveClass('accordion-pill', 'accordion-no-radius')
	});
	test("render no-radius layout", () => {
		const {container} = render(<Accordion layout="no-radius">
			<AccordionHeader>Header 1</AccordionHeader>
			<AccordionBody>
				Header 1 Content
			</AccordionBody></Accordion>);
		const component = container.firstChild;
		expect(component).toHaveClass('accordion-no-radius')
		expect(component).not.toHaveClass('accordion-rounded', 'accordion-pill')
	});
	test("render pill layout", () => {
		const {container} = render(<Accordion layout="pill">
			<AccordionHeader>Header 1</AccordionHeader>
			<AccordionBody>
				Header 1 Content
			</AccordionBody></Accordion>);
		const component = container.firstChild;
		expect(component).toHaveClass('accordion-pill')
		expect(component).not.toHaveClass('accordion-rounded', 'accordion-no-radius')
	});
});

describe("Render Accordion Variants", () => {
	test("render default variant", () => {
		const {container} = render(<Accordion>
			<AccordionHeader>Header 1</AccordionHeader>
			<AccordionBody>
				Header 1 Content
			</AccordionBody></Accordion>);
		const component = container.firstChild;
		expect(component).not.toHaveClass('accordion-outline', 'accordion-attached', 'accordion-separate')
	});
	test("render outline variant", () => {
		const {container} = render(<Accordion variant="outline">
			<AccordionHeader>Header 1</AccordionHeader>
			<AccordionBody>
				Header 1 Content
			</AccordionBody></Accordion>);
		const component = container.firstChild;
		expect(component).toHaveClass('accordion-outline')
		expect(component).not.toHaveClass('accordion-attached', 'accordion-separate')
	});
	test("render separate variant", () => {
		const {container} = render(<Accordion variant="separate"><AccordionHeader>Header 1</AccordionHeader>
			<AccordionBody>
				Header 1 Content
			</AccordionBody></Accordion>);
		const component = container.firstChild;
		expect(component).toHaveClass('accordion-separate')
		expect(component).not.toHaveClass('accordion-outline', 'accordion-attached')
	});
	test("render attached variant", () => {
		const {container} = render(<Accordion variant="attached"><AccordionHeader>Header 1</AccordionHeader>
			<AccordionBody>
				Header 1 Content
			</AccordionBody></Accordion>);
		const component = container.firstChild;
		expect(component).toHaveClass('accordion-attached')
		expect(component).not.toHaveClass('accordion-outline', 'accordion-separate')
	});
});

describe("Render Accordion Sizes", () => {
	test("render default/md size", () => {
		const {container} = render(<Accordion><AccordionHeader>Header 1</AccordionHeader>
			<AccordionBody>
				Header 1 Content
			</AccordionBody></Accordion>);
		const component = container.firstChild;
		expect(component).not.toHaveClass('accordion-extra-large', 'accordion-large', 'accordion-small', 'accordion-extra-small')
	});
	test("render xl size", () => {
		const {container} = render(<Accordion size="xl">
			<AccordionHeader>Header 1</AccordionHeader>
			<AccordionBody>
				Header 1 Content
			</AccordionBody></Accordion>);
		const component = container.firstChild;
		expect(component).toHaveClass('accordion-extra-large')
		expect(component).not.toHaveClass('accordion-large', 'accordion-small', 'accordion-extra-small')
	});
	test("render lg size", () => {
		const {container} = render(<Accordion size="lg">
			<AccordionHeader>Header 1</AccordionHeader>
			<AccordionBody>
				Header 1 Content
			</AccordionBody></Accordion>);
		const component = container.firstChild;
		expect(component).toHaveClass('accordion-large')
		expect(component).not.toHaveClass('accordion-extra-large', 'accordion-small', 'accordion-extra-small')
	});
	test("render sm size", () => {
		const {container} = render(<Accordion size="sm">
			<AccordionHeader>Header 1</AccordionHeader>
			<AccordionBody>
				Header 1 Content
			</AccordionBody></Accordion>);
		const component = container.firstChild;
		expect(component).toHaveClass('accordion-small')
		expect(component).not.toHaveClass('accordion-extra-large', 'accordion-large', 'accordion-extra-small')
	});
	test("render xs size", () => {
		const {container} = render(<Accordion size="xs">
			<AccordionHeader>Header 1</AccordionHeader>
			<AccordionBody>
				Header 1 Content
			</AccordionBody></Accordion>);
		const component = container.firstChild;
		expect(component).toHaveClass('accordion-extra-small')
		expect(component).not.toHaveClass('accordion-extra-large', 'accordion-large', 'accordion-small')
	});
});

describe("Render Accordion With Icons", () => {
	test("render suffix icon", () => {
		const {container} = render(<Accordion
		>
			<AccordionHeader suffix={<i data-testid='icon1' className='bx bxs-user-circle'></i>}>Header
				1</AccordionHeader>
			<AccordionBody>
				Header 1 Content
			</AccordionBody>
		</Accordion>);
		const component = container.firstChild;
		const icon1 = getByTestId(container, 'icon1')
		expect(component).toContainHTML(`<i data-testid='icon1' class='bx bxs-user-circle'></i>`)
		expect(icon1.parentElement).toHaveClass('accordion-icon-right')
	});
	test("render prefix icon", () => {
		const {container} = render(<Accordion
		>
			<AccordionHeader prefix={<i data-testid='icon1' className='bx bxs-user-circle'></i>}>Header
				1</AccordionHeader>
			<AccordionBody>
				Header 1 Content
			</AccordionBody>
		</Accordion>);
		const component = container.firstChild;
		const icon1 = getByTestId(container, 'icon1')
		expect(component).toContainHTML(`<i data-testid='icon1' class='bx bxs-user-circle'></i>`)
		expect(icon1.parentElement).toHaveClass('accordion-icon-left')

	});
	test("render both icon", () => {
		const {container} = render(<Accordion>
			<AccordionHeader
				suffix={<i data-testid='icon1' className='bx bxs-user-circle'></i>}
				prefix={<i data-testid='icon2' className='bx bxs-user-circle'></i>}>
				Header 1
			</AccordionHeader>
			<AccordionBody>
				Header 1 Content
			</AccordionBody>
		</Accordion>);
		const component = container.firstChild;
		const icon1 = getByTestId(container, 'icon1')
		const icon2 = getByTestId(container, 'icon2')
		expect(component).toContainHTML(`<i data-testid='icon1' class='bx bxs-user-circle'></i>`)
		expect(component).toContainHTML(`<i data-testid='icon2' class='bx bxs-user-circle'></i>`)
		expect(icon1.parentElement).toHaveClass('accordion-icon-right')
		expect(icon2.parentElement).toHaveClass('accordion-icon-left')
	});
});

describe("Render Accordion With Indicator Positions", () => {
	test("render start position", () => {
		const {container} = render(<Accordion
			data-testid='accordion'
			indicatorPosition="start"
		>
			<AccordionHeader>Header 1</AccordionHeader>
			<AccordionBody>
				Header 1 Content
			</AccordionBody>
		</Accordion>);
		const accordion = getByTestId(container, 'accordion')
		expect(accordion).toHaveClass('accordion-indicator-left')
	});
	test("render end position", () => {
		const {container} = render(<Accordion
			data-testid='accordion'
			indicatorPosition="end"
		>
			<AccordionHeader>Header 1</AccordionHeader>
			<AccordionBody>
				Header 1 Content
			</AccordionBody>
		</Accordion>);
		const accordion = getByTestId(container, 'accordion')
		expect(accordion).not.toHaveClass('accordion-indicator-left')
	});
});

describe("Render Accordion States", () => {
	test("render disabled accordion", () => {
		const {container} = render(<Accordion
		>
			<AccordionPanel disabled={true}>
				<AccordionHeader data-testid='header'>Header 1</AccordionHeader>
				<AccordionBody>
					Header 1 Content
				</AccordionBody>
			</AccordionPanel>
		</Accordion>);
		const component = container.firstChild;
		const header = getByTestId(container, 'header')
		expect(header).toHaveAttribute('disabled', '')
		expect(component!.firstChild!).toHaveClass('accordion-disabled')
	});
	test("render not disabled accordion", () => {
		const {container} = render(<Accordion
		>
			<AccordionHeader>Header 1</AccordionHeader>
			<AccordionBody>
				Header 1 Content
			</AccordionBody>
		</Accordion>);
		const component = container.firstChild;
		expect(component).not.toHaveAttribute('disabled', "")
	});
});
