import React from "react";
import {getByRole, getByTestId, getByText, render} from "@testing-library/react";
import Avatar from "./Avatar";
import AvatarGroup from "./AvatarGroup";

describe("Render Avatar", () => {
	test("render the Avatar component", () => {
		const {container} = render(<Avatar title="HW"/>);
		getByText(container, "HW");
	});
	test("render default styles", () => {
		const {container} = render(<Avatar/>);
		const component = container.firstChild;
		expect(component).toHaveClass('avatar')
	});
	test("render image avatar", () => {
		const {container} = render(<Avatar src={'image.jpg'}/>);
		const component = getByRole(container, 'img')
		expect(component).toBeVisible()
	});
	test("render avatar group", () => {
		const {container} = render(<AvatarGroup>
			<Avatar title="HW"/>
			<Avatar title="HW"/>
			<Avatar title="HW"/>
		</AvatarGroup>);
		const component = container.firstChild
		expect(component).toHaveClass('avatar-group')
	});
});

describe("Render Avatar Default Themes", () => {
	test("render default theme", () => {
		const {container} = render(<Avatar/>);
		const component = container.firstChild;
		expect(component).toHaveClass('avatar-primary')
	});
	test("render primary theme", () => {
		const {container} = render(<Avatar theme="primary"/>);
		const component = container.firstChild;
		expect(component).toHaveClass('avatar-primary')
	});
	test("render secondary theme", () => {
		const {container} = render(<Avatar theme="secondary"/>);
		const component = container.firstChild;
		expect(component).toHaveClass('avatar-secondary')
	});
	test("render light theme", () => {
		const {container} = render(<Avatar theme="light"/>);
		const component = container.firstChild;
		expect(component).toHaveClass('avatar-light')
	});
	test("render dark theme", () => {
		const {container} = render(<Avatar theme="dark"/>);
		const component = container.firstChild;
		expect(component).toHaveClass('avatar-dark')
	});
	test("render custom color scheme", () => {
		const colorScheme = {
			color: 'black',
			background: 'linear-gradient(45deg, black, transparent)',
			backgroundColor: 'blue'
		}
		const {container} = render(<Avatar data-testid="avatar" title="AT" colorScheme={colorScheme}/>);
		const element = getByTestId(container, 'avatar')
		const styles = getComputedStyle(element);
		expect(styles.getPropertyValue('--primary')).toBe(colorScheme.background);
		expect(styles.getPropertyValue('--primary-color')).toBe(colorScheme.backgroundColor);
		expect(styles.getPropertyValue('--primary-text')).toBe(colorScheme.color);
	});
});

describe("Render Avatar Layouts", () => {
	test("render default layout", () => {
		const {container} = render(<Avatar/>);
		const component = container.firstChild;
		expect(component).toHaveClass('avatar')
		expect(component).not.toHaveClass('avatar-rounded', 'avatar-pill', 'avatar-no-radius')
	});
	test("render rounded layout", () => {
		const {container} = render(<Avatar layout="rounded"/>);
		const component = container.firstChild;
		expect(component).toHaveClass('avatar-rounded')
		expect(component).not.toHaveClass('avatar-pill', 'avatar-no-radius')
	});
	test("render no-radius layout", () => {
		const {container} = render(<Avatar layout="no-radius"/>);
		const component = container.firstChild;
		expect(component).toHaveClass('avatar-no-radius')
		expect(component).not.toHaveClass('avatar-rounded', 'avatar-pill')
	});
	test("render pill layout", () => {
		const {container} = render(<Avatar layout="pill"/>);
		const component = container.firstChild;
		expect(component).toHaveClass('avatar-pill')
		expect(component).not.toHaveClass('avatar-rounded', 'avatar-no-radius')
	});
});

describe("Render Avatar Variants", () => {
	test("render default variant", () => {
		const {container} = render(<Avatar/>);
		const component = container.firstChild;
		expect(component).toHaveClass('avatar')
		expect(component).not.toHaveClass('avatar-outline', 'avatar-fluid')
	});
	test("render outline variant", () => {
		const {container} = render(<Avatar variant="outline"/>);
		const component = container.firstChild;
		expect(component).toHaveClass('avatar-outline')
		expect(component).not.toHaveClass('avatar-fluid')
	});
	test("render fluid variant", () => {
		const {container} = render(<Avatar variant="fluid"/>);
		const component = container.firstChild;
		expect(component).toHaveClass('avatar-fluid')
		expect(component).not.toHaveClass('avatar-outline')

	});
});

describe("Render Avatar Sizes", () => {
	test("render default/md size", () => {
		const {container} = render(<Avatar/>);
		const component = container.firstChild;
		expect(component).toHaveClass('avatar')
		expect(component).not.toHaveClass('avatar-extra-large', 'avatar-large', 'avatar-small', 'avatar-extra-small')
	});
	test("render xl size", () => {
		const {container} = render(<Avatar size="xl"/>);
		const component = container.firstChild;
		expect(component).toHaveClass('avatar-extra-large')
		expect(component).not.toHaveClass('avatar-large', 'avatar-small', 'avatar-extra-small')
	});
	test("render lg size", () => {
		const {container} = render(<Avatar size="lg"/>);
		const component = container.firstChild;
		expect(component).toHaveClass('avatar-large')
		expect(component).not.toHaveClass('avatar-extra-large', 'avatar-small', 'avatar-extra-small')
	});
	test("render sm size", () => {
		const {container} = render(<Avatar size="sm"/>);
		const component = container.firstChild;
		expect(component).toHaveClass('avatar-small')
		expect(component).not.toHaveClass('avatar-extra-large', 'avatar-large', 'avatar-extra-small')
	});
	test("render xs size", () => {
		const {container} = render(<Avatar size="xs"/>);
		const component = container.firstChild;
		expect(component).toHaveClass('avatar-extra-small')
		expect(component).not.toHaveClass('avatar-extra-large', 'avatar-large', 'avatar-small')
	});
});



