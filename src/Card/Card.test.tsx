import {findByRole, getByTestId, getByText, render} from "@testing-library/react";
import Card, {CardContent, CardImage} from "../Card";
import React from "react";

describe("Render Card", () => {
	test("render the Card component", () => {
		const {container} = render(<Card>Hello World!</Card>);
		getByText(container, "Hello World!");
	});
	test("render card content", () => {
		const {container} = render(
			<Card>
				<CardContent data-testid="content">
					This is content
				</CardContent>
			</Card>
		);
		const content = getByTestId(container, 'content')
		expect(content).toHaveTextContent('This is content')
		expect(content).toHaveClass('card-body')
	});
	test("render card image", async () => {
		const {container} = render(<Card>
			<CardImage data-testid="img" src='img.jpg'/>
			<CardContent>
				This is content
			</CardContent>
		</Card>);
		const content = getByTestId(container, 'img')
		expect(content.parentElement).toHaveClass('card-img-div')
		const img = await findByRole(container, 'img')
		expect(img).toBeDefined()
		expect(img).toHaveAttribute('src', 'img.jpg')
	});
});

describe("Render Card Image Layouts", () => {
	test("render card image default layout", async () => {
		const {container} = render(<Card>
			<CardImage data-testid="img" src='img.jpg'/>
			<CardContent>
				This is content
			</CardContent>
		</Card>);
		const content = getByTestId(container, 'img')
		expect(content).not.toHaveClass('card-image-rounded', 'card-image-pill', 'card-image-extended', 'card-image-no-radius')
	});
	test("render card image rounded layout", async () => {
		const {container} = render(<Card>
			<CardImage layout="rounded" data-testid="img" src='img.jpg'/>
			<CardContent>
				This is content
			</CardContent>
		</Card>);
		const content = getByTestId(container, 'img')
		expect(content).toHaveClass('card-image-rounded')
		expect(content).not.toHaveClass('card-image-pill', 'card-image-extended', 'card-image-no-radius')
	});

	test("render card image pill layout", async () => {
		const {container} = render(<Card>
			<CardImage layout="pill" data-testid="img" src='img.jpg'/>
			<CardContent>
				This is content
			</CardContent>
		</Card>);
		const content = getByTestId(container, 'img')
		expect(content).toHaveClass('card-image-pill')
		expect(content).not.toHaveClass('card-image-rounded', 'card-image-extended', 'card-image-no-radius')
	});

	test("render card image extended layout", async () => {
		const {container} = render(<Card>
			<CardImage layout="extended" data-testid="img" src='img.jpg'/>
			<CardContent>
				This is content
			</CardContent>
		</Card>);
		const content = getByTestId(container, 'img')
		expect(content).toHaveClass('card-image-extended')
		expect(content).not.toHaveClass('card-image-rounded', 'card-image-pill', 'card-image-no-radius')
	});

	test("render card image extended layout", async () => {
		const {container} = render(<Card>
			<CardImage layout="no-radius" data-testid="img" src='img.jpg'/>
			<CardContent>
				This is content
			</CardContent>
		</Card>);
		const content = getByTestId(container, 'img')
		expect(content).toHaveClass('card-image-no-radius')
		expect(content).not.toHaveClass('card-image-rounded', 'card-image-pill', 'card-image-no-radius')
	});

	test("render card image with extended layout and direction column", async () => {
		const {container} = render(<Card direction="column">
			<CardImage layout="no-radius" data-testid="img" src='img.jpg'/>
			<CardContent>
				This is content
			</CardContent>
		</Card>);
		const content = getByTestId(container, 'img')
		expect(content).toHaveClass('card-image-no-radius')
		expect(content.parentElement).toHaveClass('card-img-div-col')
		expect(content).not.toHaveClass('card-image-rounded', 'card-image-pill', 'card-image-no-radius')
	});
});

describe("Render Card Default Themes", () => {
	test("render default theme", () => {
		const {container} = render(<Card>Click Me</Card>);
		const component = container.firstChild;
		expect(component).toHaveClass('card-primary')
	});
	test("render primary theme", () => {
		const {container} = render(<Card theme="primary">Click Me</Card>);
		const component = container.firstChild;
		expect(component).toHaveClass('card-primary')
	});
	test("render secondary theme", () => {
		const {container} = render(<Card theme="secondary">Click Me</Card>);
		const component = container.firstChild;
		expect(component).toHaveClass('card-secondary')
	});
	test("render light theme", () => {
		const {container} = render(<Card theme="light">Click Me</Card>);
		const component = container.firstChild;
		expect(component).toHaveClass('card-light')
	});
	test("render dark theme", () => {
		const {container} = render(<Card theme="dark">Click Me</Card>);
		const component = container.firstChild;
		expect(component).toHaveClass('card-dark')
	});
	test("render custom color scheme", () => {
		const colorScheme = {
			color: 'black',
			background: 'linear-gradient(45deg, black, transparent)',
			backgroundColor: 'blue'
		}
		const {container} = render(<Card colorScheme={colorScheme}>Click Me</Card>);
		const element = getByText(container, 'Click Me');
		const styles = getComputedStyle(element);
		expect(styles.getPropertyValue('--primary')).toBe(colorScheme.background);
		expect(styles.getPropertyValue('--primary-color')).toBe(colorScheme.backgroundColor);
		expect(styles.getPropertyValue('--primary-text')).toBe(colorScheme.color);
	});
});

describe("Render Card Layouts", () => {
	test("render default layout", () => {
		const {container} = render(<Card>Click Me</Card>);
		const component = container.firstChild;
		expect(component).toHaveClass('card')
		expect(component).not.toHaveClass('card-rounded', 'card-extended', 'card-no-radius')
	});
	test("render rounded layout", () => {
		const {container} = render(<Card layout="rounded">Click Me</Card>);
		const component = container.firstChild;
		expect(component).toHaveClass('card-rounded')
		expect(component).not.toHaveClass('card-extended', 'card-no-radius')
	});
	test("render no-radius layout", () => {
		const {container} = render(<Card layout="no-radius">Click Me</Card>);
		const component = container.firstChild;
		expect(component).toHaveClass('card-no-radius')
		expect(component).not.toHaveClass('card-rounded', 'card-extended')
	});
	test("render extended layout", () => {
		const {container} = render(<Card layout="extended">Click Me</Card>);
		const component = container.firstChild;
		expect(component).toHaveClass('card-extended')
		expect(component).not.toHaveClass('card-rounded', 'card-no-radius')
	});
});

describe("Render Card Variants", () => {
	test("render default variant", () => {
		const {container} = render(<Card>Click Me</Card>);
		const component = container.firstChild;
		expect(component).toHaveClass('card')
		expect(component).not.toHaveClass('card-outline', 'card-fill', 'card-fill-with-border')
	});
	test("render outline variant", () => {
		const {container} = render(<Card variant="outline">Click Me</Card>);
		const component = container.firstChild;
		expect(component).toHaveClass('card-outline')
		expect(component).not.toHaveClass('card-fill', 'card-fill-with-border')
	});
	test("render fill variant", () => {
		const {container} = render(<Card variant="fill">Click Me</Card>);
		const component = container.firstChild;
		expect(component).toHaveClass('card-fill')
		expect(component).not.toHaveClass('card-outline', 'card-fill-with-border')
	});
	test("render fill with border variant", () => {
		const {container} = render(<Card variant="fill-with-border">Click Me</Card>);
		const component = container.firstChild;
		expect(component).toHaveClass('card-fill-with-border')
		expect(component).not.toHaveClass('card-outline', 'card-fill')
	});
});

describe("Render Card Sizes", () => {
	test("render default/md size", () => {
		const {container} = render(<Card>Click Me</Card>);
		const component = container.firstChild;
		expect(component).toHaveClass('card')
		expect(component).not.toHaveClass('card-extra-large', 'card-large', 'card-small', 'card-extra-small')
	});
	test("render xl size", () => {
		const {container} = render(<Card size="xl">Click Me</Card>);
		const component = container.firstChild;
		expect(component).toHaveClass('card-extra-large')
		expect(component).not.toHaveClass('card-large', 'card-small', 'card-extra-small')
	});
	test("render lg size", () => {
		const {container} = render(<Card size="lg">Click Me</Card>);
		const component = container.firstChild;
		expect(component).toHaveClass('card-large')
		expect(component).not.toHaveClass('card-extra-large', 'card-small', 'card-extra-small')
	});
	test("render sm size", () => {
		const {container} = render(<Card size="sm">Click Me</Card>);
		const component = container.firstChild;
		expect(component).toHaveClass('card-small')
		expect(component).not.toHaveClass('card-extra-large', 'card-large', 'card-extra-small')
	});
	test("render xs size", () => {
		const {container} = render(<Card size="xs">Click Me</Card>);
		const component = container.firstChild;
		expect(component).toHaveClass('card-extra-small')
		expect(component).not.toHaveClass('card-extra-large', 'card-large', 'card-small')
	});
});

describe("Render Card Directions", () => {
	test("render default/column direction", () => {
		const {container} = render(<Card direction="column">
			<CardImage data-testid="img" src='img.jpg'/>
			<CardContent>
				This is content
			</CardContent>
		</Card>);
		const component = container.firstChild;
		const content = getByTestId(container, 'img')
		expect(content.parentElement).not.toHaveClass('card-img-no-margin')
		expect(component).not.toHaveClass('card-row')
	});
	test("render row direction", () => {
		const {container} = render(<Card direction="row">
			<CardImage data-testid="img" src='img.jpg'/>
			<CardContent>
				This is content
			</CardContent>
		</Card>);
		const component = container.firstChild;
		const content = getByTestId(container, 'img')
		expect(content.parentElement).toHaveClass('card-img-no-margin')
		expect(component).toHaveClass('card-row')
	});
});
