import React from "react";
import {fireEvent, getByRole, getByTestId, render} from "@testing-library/react";
import Tabs from "./Tabs";
import TabItem from "./TabItem";
import TabContent from "./TabContent";
import {DirectionsArray, ISizes, LayoutsArray, SizesArray, ThemesArray} from "../types/Common.types";
import except from "../tests/except";
import {VariantsArray} from "./Tabs.types";

describe("Render Tabs", () => {
	test("render the Tabs component", () => {
		const {container} = render(<Tabs>
			<TabItem data-testid="item1" active target="home">Home</TabItem>
			<TabItem data-testid="item2" target="about">About</TabItem>
			<TabContent data-testid="content1" id="home">
				<h3>HOME</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
					labore
					et dolore magna aliqua.</p>
			</TabContent>
			<TabContent data-testid="content2" id="about">
				<h3>About</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
					labore
					et dolore magna aliqua.</p>
			</TabContent>
		</Tabs>);
		const component = container.firstElementChild
		expect(component).toHaveClass("tab")
	});
	test("should handle onchange events", async () => {
		const {container} = render(
			<Tabs>
				<TabItem data-testid="item1" active target="home">Home</TabItem>
				<TabItem data-testid="item2" target="about">About</TabItem>
				<TabContent data-testid="content1" id="home">
					<h3>HOME</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
						labore
						et dolore magna aliqua.</p>
				</TabContent>
				<TabContent data-testid="content2" id="about">
					<h3>About</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
						labore
						et dolore magna aliqua.</p>
				</TabContent>
			</Tabs>
		);
		const item2 = getByTestId(container, 'item2')
		const content1 = getByTestId(container, 'content1')
		const content2 = getByTestId(container, 'content2')
		expect(content1).toHaveClass('tab-open')
		expect(content2).not.toHaveClass('tab-open')
		fireEvent.click(item2);
		setTimeout(() => {
			expect(content1).not.toHaveClass('tab-open')
			expect(content2).toHaveClass('tab-open')
		}, 500)

	});
	test("render default styles", () => {
		const {container} = render(<Tabs>
			<TabItem active target="home">Home</TabItem>
			<TabItem target="about">About</TabItem>
			<TabContent id="home">
				<h3>HOME</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
					labore
					et dolore magna aliqua.</p>
			</TabContent>
			<TabContent id="about">
				<h3>About</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
					labore
					et dolore magna aliqua.</p>
			</TabContent>
		</Tabs>);
		const component = container.firstChild;
		expect(component).toHaveClass('tab')
	});
});

describe("Render Tabs Default Themes", () => {
	const themes = [...ThemesArray]
	themes.forEach((theme) => {
		test(`render ${theme} theme`, () => {
			const {container} = render(<Tabs theme={theme}>
				<TabItem active target="home">Home</TabItem>
				<TabItem target="about">About</TabItem>
				<TabContent id="home">
					<h3>HOME</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
						labore
						et dolore magna aliqua.</p>
				</TabContent>
				<TabContent id="about">
					<h3>About</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
						labore
						et dolore magna aliqua.</p>
				</TabContent>
			</Tabs>);
			const component = container.firstChild;
			expect(component).toHaveClass(theme === 'default' ? 'tab' : `tab-${theme}`)
			expect(component).not.toHaveClass(...except(themes, theme === 'default' ? 'tab' : `tab-${theme}`))
		});
	})
	test("render custom color scheme", () => {
		const colorScheme = {
			color: 'black',
			background: 'linear-gradient(45deg, black, transparent)',
			backgroundColor: 'blue'
		}
		const {container} = render(<Tabs data-testid="tab" colorScheme={colorScheme}>
			<TabItem active target="home">Home</TabItem>
			<TabItem target="about">About</TabItem>
			<TabContent id="home">
				<h3>HOME</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
					labore
					et dolore magna aliqua.</p>
			</TabContent>
			<TabContent id="about">
				<h3>About</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
					labore
					et dolore magna aliqua.</p>
			</TabContent>
		</Tabs>);
		const element = getByTestId(container, 'tab');
		const styles = getComputedStyle(element);
		expect(styles.getPropertyValue('--primary')).toBe(colorScheme.background);
		expect(styles.getPropertyValue('--primary-color')).toBe(colorScheme.backgroundColor);
		expect(styles.getPropertyValue('--primary-text')).toBe(colorScheme.color);
	});
});

describe("Render Tabs Layouts", () => {
	const layouts = [...LayoutsArray]
	layouts.forEach((layout) => {
		test(`render ${layout} layout`, () => {
			const {container} = render(<Tabs layout={layout}>
				<TabItem active target="home">Home</TabItem>
				<TabItem target="about">About</TabItem>
				<TabContent id="home">
					<h3>HOME</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
						labore
						et dolore magna aliqua.</p>
				</TabContent>
				<TabContent id="about">
					<h3>About</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
						labore
						et dolore magna aliqua.</p>
				</TabContent>
			</Tabs>);
			const component = container.firstChild;
			expect(component).toHaveClass(layout === 'default' ? 'tab' : `tab-${layout}`)
			expect(component).not.toHaveClass(...except(layouts, layout === 'default' ? 'tab' : `tab-${layout}`))
		});
	})
});

describe("Render Tabs Variants", () => {
	const variants = [...VariantsArray]
	variants.forEach((variant) => {
		test(`render ${variant} variant`, () => {
			const {container} = render(<Tabs variant={variant}>
				<TabItem active target="home">Home</TabItem>
				<TabItem target="about">About</TabItem>
				<TabContent id="home">
					<h3>HOME</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
						labore
						et dolore magna aliqua.</p>
				</TabContent>
				<TabContent id="about">
					<h3>About</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
						labore
						et dolore magna aliqua.</p>
				</TabContent>
			</Tabs>);
			const component = container.firstChild;
			expect(component).toHaveClass(variant === 'default' ? 'tab' : `tab-${variant}`)
			expect(component).not.toHaveClass(...except(variants, variant === 'default' ? 'tab' : `tab-${variant}`))
		});
	})
});

describe("Render Tabs Sizes", () => {
	const sizes = [...SizesArray]
	sizes.forEach((size) => {
		test(`render ${size} size`, () => {
			const {container} = render(<Tabs size={size}>
				<TabItem active target="home">Home</TabItem>
				<TabItem target="about">About</TabItem>
				<TabContent id="home">
					<h3>HOME</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
						labore
						et dolore magna aliqua.</p>
				</TabContent>
				<TabContent id="about">
					<h3>About</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
						labore
						et dolore magna aliqua.</p>
				</TabContent>
			</Tabs>);
			const component = container.firstChild;
			expect(component).toHaveClass(size === 'md' ? 'tab' : `tab-${ISizes[size]}`)
			expect(component).not.toHaveClass(...except(sizes, size === 'md' ? 'tab' : `tab-${ISizes[size]}`))
		});
	})
});

describe("Render Tabs Postions", () => {
	const positions = [...DirectionsArray]
	positions.forEach((position) => {
		test(`render ${position} position`, () => {
			const {container} = render(<Tabs position={position}>
				<TabItem active target="home">Home</TabItem>
				<TabItem target="about">About</TabItem>
				<TabContent id="home">
					<h3>HOME</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
						labore
						et dolore magna aliqua.</p>
				</TabContent>
				<TabContent id="about">
					<h3>About</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
						labore
						et dolore magna aliqua.</p>
				</TabContent>
			</Tabs>);
			const component = container.firstChild;
			expect(component).toHaveClass(position === 'top' ? 'tab' : `tab-${position}`)
			expect(component).not.toHaveClass(...except(positions, position === 'top' ? 'tab' : `tab-${position}`))
		});
	})
});

describe("Render Floating-Lines Line Direction", () => {
	const lineDirections = [...DirectionsArray]
	lineDirections.forEach((lineDirection) => {
		test(`render ${lineDirection} lineDirection`, () => {
			const {container} = render(<Tabs variant="floating-line" lineDirection={lineDirection}>
				<TabItem active target="home">Home</TabItem>
				<TabItem target="about">About</TabItem>
				<TabContent id="home">
					<h3>HOME</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
						labore
						et dolore magna aliqua.</p>
				</TabContent>
				<TabContent id="about">
					<h3>About</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
						labore
						et dolore magna aliqua.</p>
				</TabContent>
			</Tabs>);
			const component = getByRole(container, 'tablist')
			expect(component).toHaveClass(lineDirection === 'left' ? 'tab-floating-line' : `tab-floating-line-${lineDirection}`)
			expect(component).not.toHaveClass(...except(lineDirections, lineDirection === 'left' ? 'tab-floating-line' : `tab-floating-line-${lineDirection}`))
		});
	})
});


