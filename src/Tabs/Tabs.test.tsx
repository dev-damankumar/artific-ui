import React from "react";
import {fireEvent, getByTestId, render} from "@testing-library/react";
import Tabs from "./Tabs";
import TabItem from "./TabItem";
import TabContent from "./TabContent";

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
		// expect(content1).not.toHaveClass('tab-open')
		expect(content2).toHaveClass('tab-open')
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
	test("render default theme", () => {
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
		expect(component).toHaveClass('tab-primary')
	});
	test("render primary theme", () => {
		const {container} = render(<Tabs theme="primary">
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
		expect(component).toHaveClass('tab-primary')
	});
	test("render secondary theme", () => {
		const {container} = render(<Tabs theme="secondary">
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
		expect(component).toHaveClass('tab-secondary')
	});
	test("render light theme", () => {
		const {container} = render(<Tabs theme="light">
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
		expect(component).toHaveClass('tab-light')
	});
	test("render dark theme", () => {
		const {container} = render(<Tabs theme="dark">
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
		expect(component).toHaveClass('tab-dark')
	});
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
	test("render default layout", () => {
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
		expect(component).not.toHaveClass('tab-rounded', 'tab-pill', 'tab-no-radius')
	});
	test("render rounded layout", () => {
		const {container} = render(<Tabs layout="rounded">
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
		expect(component).toHaveClass('tab-rounded')
		expect(component).not.toHaveClass('tab-pill', 'tab-no-radius')
	});
	test("render no-radius layout", () => {
		const {container} = render(<Tabs layout="no-radius">
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
		expect(component).toHaveClass('tab-no-radius')
		expect(component).not.toHaveClass('tab-rounded', 'tab-pill')
	});
	test("render pill layout", () => {
		const {container} = render(<Tabs layout="pill">
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
		expect(component).toHaveClass('tab-pill')
		expect(component).not.toHaveClass('tab-rounded', 'tab-no-radius')
	});
});

describe("Render Tabs Variants", () => {
	test("render default variant", () => {
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
		expect(component).not.toHaveClass('tab-line', 'tab-floating-line', 'tab-separate')
	});
	test("render line variant", () => {
		const {container} = render(<Tabs variant="line">
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
		expect(component).toHaveClass('tab-line')
		expect(component).not.toHaveClass('tab-floating-line', 'tab-separate')
	});
	test("render floating-line variant", () => {
		const {container} = render(<Tabs variant="floating-line">
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
		expect(component).toHaveClass('tab-floating-line')
		expect(component).not.toHaveClass('tab-line', 'tab-separate')
	});
	test("render separate variant", () => {
		const {container} = render(<Tabs variant="separate">
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
		expect(component).toHaveClass('tab-separate')
		expect(component).not.toHaveClass('tab-line', 'tab-floating-line')
	});
});

describe("Render Tabs Sizes", () => {
	test("render default/md size", () => {
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
		expect(component).not.toHaveClass('tab-extra-large', 'tab-large', 'tab-small', 'tab-extra-small')
	});
	test("render xl size", () => {
		const {container} = render(<Tabs size="xl">
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
		expect(component).toHaveClass('tab-extra-large')
		expect(component).not.toHaveClass('tab-large', 'tab-small', 'tab-extra-small')
	});
	test("render lg size", () => {
		const {container} = render(<Tabs size="lg">
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
		expect(component).toHaveClass('tab-large')
		expect(component).not.toHaveClass('tab-extra-large', 'tab-small', 'tab-extra-small')
	});
	test("render sm size", () => {
		const {container} = render(<Tabs size="sm">
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
		expect(component).toHaveClass('tab-small')
		expect(component).not.toHaveClass('tab-extra-large', 'tab-large', 'tab-extra-small')
	});
	test("render xs size", () => {
		const {container} = render(<Tabs size="xs">
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
		expect(component).toHaveClass('tab-extra-small')
		expect(component).not.toHaveClass('tab-extra-large', 'tab-large', 'tab-small')
	});
});


