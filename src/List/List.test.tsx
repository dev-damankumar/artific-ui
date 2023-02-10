import React from "react";
import {getByTestId, getByText, render} from "@testing-library/react";
import List from "./List";
import ListItem from "./ListItem";

describe("Render List", () => {
	test("render the List component", () => {
		const {container} = render(<List>Hello World!</List>);
		getByText(container, "Hello World!");
	});
	test("render disabled list", () => {
		const {container} = render(<List>
			<ListItem data-testid="item" disabled={true}>item1</ListItem>
			<ListItem>item2</ListItem>
		</List>);
		const item = getByTestId(container, 'item')

		expect(item).toHaveClass('disabled')
	});
	test("render default styles", () => {
		const {container} = render(<List>
			<ListItem>item1</ListItem>
			<ListItem>item2</ListItem>
		</List>);
		const component = container.firstChild;
		expect(component).toHaveClass('list')
	});
});

describe("Render List With Icons", () => {
	test("render suffix icon", () => {
		const {container} = render(<List
		>
			<ListItem suffix={<i data-testid='icon1' className='bx bxs-user-circle'></i>}>item1</ListItem>
			<ListItem>item2</ListItem>
		</List>);
		const component = container.firstChild;
		const icon1 = getByTestId(container, 'icon1')
		expect(component).toContainHTML(`<i data-testid='icon1' class='bx bxs-user-circle'></i>`)
		expect(icon1.parentElement).toHaveClass('list-icon-right')
	});
	test("render prefix icon", () => {
		const {container} = render(<List
		>
			<ListItem prefix={<i data-testid='icon1' className='bx bxs-user-circle'></i>}>item1</ListItem>
			<ListItem>item2</ListItem>
		</List>);
		const component = container.firstChild;
		const icon1 = getByTestId(container, 'icon1')
		expect(component).toContainHTML(`<i data-testid='icon1' class='bx bxs-user-circle'></i>`)
		expect(icon1.parentElement).toHaveClass('list-icon-left')

	});
	test("render both icon", () => {
		const {container} = render(<List

		>
			<ListItem
				suffix={<i data-testid='icon1' className='bx bxs-user-circle'></i>}
				prefix={<i data-testid='icon2' className='bx bxs-user-circle'></i>}
			>item1</ListItem>
			<ListItem>item2</ListItem>
		</List>);
		const component = container.firstChild;
		const icon1 = getByTestId(container, 'icon1')
		const icon2 = getByTestId(container, 'icon2')
		expect(component).toContainHTML(`<i data-testid='icon1' class='bx bxs-user-circle'></i>`)
		expect(component).toContainHTML(`<i data-testid='icon2' class='bx bxs-user-circle'></i>`)
		expect(icon1.parentElement).toHaveClass('list-icon-right')
		expect(icon2.parentElement).toHaveClass('list-icon-left')
	});
});

describe("Render List Default Themes", () => {
	test("render default theme", () => {
		const {container} = render(<List>
			<ListItem>item1</ListItem>
			<ListItem>item2</ListItem>
		</List>);
		const component = container.firstChild;
		expect(component).toHaveClass('list-primary')
	});
	test("render primary theme", () => {
		const {container} = render(<List theme="primary">
			<ListItem>item1</ListItem>
			<ListItem>item2</ListItem>
		</List>);
		const component = container.firstChild;
		expect(component).toHaveClass('list-primary')
	});
	test("render secondary theme", () => {
		const {container} = render(<List theme="secondary">
			<ListItem>item1</ListItem>
			<ListItem>item2</ListItem>
		</List>);
		const component = container.firstChild;
		expect(component).toHaveClass('list-secondary')
	});
	test("render light theme", () => {
		const {container} = render(<List theme="light">
			<ListItem>item1</ListItem>
			<ListItem>item2</ListItem>
		</List>);
		const component = container.firstChild;
		expect(component).toHaveClass('list-light')
	});
	test("render dark theme", () => {
		const {container} = render(<List theme="dark">
			<ListItem>item1</ListItem>
			<ListItem>item2</ListItem>
		</List>);
		const component = container.firstChild;
		expect(component).toHaveClass('list-dark')
	});
	test("render custom color scheme", () => {
		const colorScheme = {
			color: 'black',
			background: 'linear-gradient(45deg, black, transparent)',
			backgroundColor: 'blue'
		}
		const {container} = render(<List data-testid="item1" colorScheme={colorScheme}>
			<ListItem>item1</ListItem>
			<ListItem>item2</ListItem>
		</List>);
		const element = getByTestId(container, 'item1');
		const styles = getComputedStyle(element);
		expect(styles.getPropertyValue('--primary')).toBe(colorScheme.background);
		expect(styles.getPropertyValue('--primary-color')).toBe(colorScheme.backgroundColor);
		expect(styles.getPropertyValue('--primary-text')).toBe(colorScheme.color);
	});
});

describe("Render List Layouts", () => {
	test("render default layout", () => {
		const {container} = render(<List>
			<ListItem>item1</ListItem>
			<ListItem>item2</ListItem>
		</List>);
		const component = container.firstChild;
		expect(component).toHaveClass('list')
		expect(component).not.toHaveClass('list-rounded', 'list-pill', 'list-no-radius')
	});
	test("render rounded layout", () => {
		const {container} = render(<List layout="rounded">
			<ListItem>item1</ListItem>
			<ListItem>item2</ListItem>
		</List>);
		const component = container.firstChild;
		expect(component).toHaveClass('list-rounded')
		expect(component).not.toHaveClass('list-pill', 'list-no-radius')
	});
	test("render no-radius layout", () => {
		const {container} = render(<List layout="no-radius">
			<ListItem>item1</ListItem>
			<ListItem>item2</ListItem>
		</List>);
		const component = container.firstChild;
		expect(component).toHaveClass('list-no-radius')
		expect(component).not.toHaveClass('list-rounded', 'list-pill')
	});
	test("render pill layout", () => {
		const {container} = render(<List layout="pill">
			<ListItem>item1</ListItem>
			<ListItem>item2</ListItem>
		</List>);
		const component = container.firstChild;
		expect(component).toHaveClass('list-pill')
		expect(component).not.toHaveClass('list-rounded', 'list-no-radius')
	});
});

describe("Render List Variants", () => {
	test("render default variant", () => {
		const {container} = render(<List>
			<ListItem>item1</ListItem>
			<ListItem>item2</ListItem>
		</List>);
		const component = container.firstChild;
		expect(component).toHaveClass('list')
		expect(component).not.toHaveClass('list-separate', 'list-striped', 'list-bordered', 'list-borderless')
	});
	test("render outline variant", () => {
		const {container} = render(<List variant="separate">
			<ListItem>item1</ListItem>
			<ListItem>item2</ListItem>
		</List>);
		const component = container.firstChild;
		expect(component).toHaveClass('list-separate')
		expect(component).not.toHaveClass('list-striped', 'list-bordered', 'list-borderless')
	});
	test("render outline variant", () => {
		const {container} = render(<List variant="striped">
			<ListItem>item1</ListItem>
			<ListItem>item2</ListItem>
		</List>);
		const component = container.firstChild;
		expect(component).toHaveClass('list-striped')
		expect(component).not.toHaveClass('list-separate', 'list-bordered', 'list-borderless')
	});
	test("render outline variant", () => {
		const {container} = render(<List variant="bordered">
			<ListItem>item1</ListItem>
			<ListItem>item2</ListItem>
		</List>);
		const component = container.firstChild;
		expect(component).toHaveClass('list-bordered')
		expect(component).not.toHaveClass('list-separate', 'list-striped', 'list-borderless')
	});
	test("render note variant", () => {
		const {container} = render(<List variant="borderless">
			<ListItem>item1</ListItem>
			<ListItem>item2</ListItem>
		</List>);
		const component = container.firstChild;
		expect(component).toHaveClass('list-borderless')
		expect(component).not.toHaveClass('list-separate', 'list-striped', 'list-bordered')
	});
});

describe("Render List Sizes", () => {
	test("render default/md size", () => {
		const {container} = render(<List>
			<ListItem>item1</ListItem>
			<ListItem>item2</ListItem>
		</List>);
		const component = container.firstChild;
		expect(component).toHaveClass('list')
		expect(component).not.toHaveClass('list-extra-large', 'list-large', 'list-small', 'list-extra-small')
	});
	test("render xl size", () => {
		const {container} = render(<List size="xl">
			<ListItem>item1</ListItem>
			<ListItem>item2</ListItem>
		</List>);
		const component = container.firstChild;
		expect(component).toHaveClass('list-extra-large')
		expect(component).not.toHaveClass('list-large', 'list-small', 'list-extra-small')
	});
	test("render lg size", () => {
		const {container} = render(<List size="lg">
			<ListItem>item1</ListItem>
			<ListItem>item2</ListItem>
		</List>);
		const component = container.firstChild;
		expect(component).toHaveClass('list-large')
		expect(component).not.toHaveClass('list-extra-large', 'list-small', 'list-extra-small')
	});
	test("render sm size", () => {
		const {container} = render(<List size="sm">
			<ListItem>item1</ListItem>
			<ListItem>item2</ListItem>
		</List>);
		const component = container.firstChild;
		expect(component).toHaveClass('list-small')
		expect(component).not.toHaveClass('list-extra-large', 'list-large', 'list-extra-small')
	});
	test("render xs size", () => {
		const {container} = render(<List size="xs">
			<ListItem>item1</ListItem>
			<ListItem>item2</ListItem>
		</List>);
		const component = container.firstChild;
		expect(component).toHaveClass('list-extra-small')
		expect(component).not.toHaveClass('list-extra-large', 'list-large', 'list-small')
	});
});

describe("Render List Directions", () => {
	test("render default/column direction", () => {
		const {container} = render(<List direction="column">
			<ListItem>item1</ListItem>
			<ListItem>item2</ListItem>
		</List>);
		const component = container.firstChild;
		expect(component).not.toHaveClass('list-group-row')
	});
	test("render row direction", () => {
		const {container} = render(<List direction="row">
			<ListItem>item1</ListItem>
			<ListItem>item2</ListItem>
		</List>);
		const component = container.firstChild;
		expect(component).toHaveClass('list-group-row')
	});
});


