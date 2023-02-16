import React from "react";
import {fireEvent, getByTestId, render} from "@testing-library/react";
import Accordion from "./Accordion";
import AccordionPanel from "./AccordionPanel";
import AccordionHeader from "./AccordionHeader";
import AccordionBody from "./AccordionBody";
import {ISizes, LayoutsArray, SizesArray, ThemesArray} from "../types/Common.types";
import except from "../tests/except";
import {VariantsArray} from "./Accordion.types";

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
	const themes = [...ThemesArray]
	themes.forEach((theme) => {
		test(`render ${theme} theme`, () => {
			const {container} = render(<Accordion theme={theme}>
				<AccordionPanel>
					<AccordionHeader>Header 1</AccordionHeader>
					<AccordionBody>
						Header 1 Content
					</AccordionBody>
				</AccordionPanel>
			</Accordion>);
			const component = container.firstChild;
			expect(component).toHaveClass(theme === 'default' ? 'accordion-wrap' : `accordion-${theme}`)
			expect(component).not.toHaveClass(...except(themes, theme === 'default' ? '' : `accordion-${theme}`))
		});
	})
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
		expect(styles.getPropertyValue('--ai-primary')).toBe(colorScheme.background);
		expect(styles.getPropertyValue('--ai-primary-color')).toBe(colorScheme.backgroundColor);
		expect(styles.getPropertyValue('--ai-primary-text')).toBe(colorScheme.color);
	});
});

describe("Render Accordion Layouts", () => {
	const layouts = [...LayoutsArray]
	layouts.forEach((layout) => {
		test(`render ${layout} layout`, () => {
			const {container} = render(<Accordion layout={layout}>
				<AccordionHeader>Header 1</AccordionHeader>
				<AccordionBody>
					Header 1 Content
				</AccordionBody></Accordion>);
			const component = container.firstChild;
			expect(component).toHaveClass(layout === 'default' ? 'accordion-wrap' : `accordion-${layout}`)
			expect(component).not.toHaveClass(...except(layouts, layout === 'default' ? '' : `accordion-${layout}`))
		});
	})
});

describe("Render Accordion Variants", () => {
	const variants = [...VariantsArray]
	variants.forEach((variant) => {
		test(`render ${variant} variant`, () => {
			const {container} = render(<Accordion variant={variant}>
				<AccordionHeader>Header 1</AccordionHeader>
				<AccordionBody>
					Header 1 Content
				</AccordionBody></Accordion>);
			const component = container.firstChild;
			expect(component).toHaveClass(variant === 'default' ? 'accordion-wrap' : `accordion-${variant}`)
			expect(component).not.toHaveClass(...except(variants, variant === 'default' ? '' : `accordion-${variant}`))
		});
	})
});

describe("Render Accordion Sizes", () => {
	const sizes = [...SizesArray]
	sizes.forEach((size) => {
		test(`render ${size} size`, () => {
			const {container} = render(<Accordion size={size}><AccordionHeader>Header 1</AccordionHeader>
				<AccordionBody>
					Header 1 Content
				</AccordionBody></Accordion>);
			const component = container.firstChild;
			expect(component).toHaveClass(size === 'md' ? 'accordion-wrap' : `accordion-${ISizes[size]}`)
			expect(component).not.toHaveClass(...except(sizes, size === 'md' ? '' : `accordion-${ISizes[size]}`))
		});
	})
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
