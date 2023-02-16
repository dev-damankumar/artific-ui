import {findByRole, getByTestId, getByText, render} from "@testing-library/react";
import Card, {CardContent, CardImage} from "../Card";
import React from "react";
import {ISizes, SizesArray, ThemesArray} from "../types/Common.types";
import except from "../tests/except";
import {CardLayoutsArray, VariantsArray} from "./Card.types";

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

describe("Render Card Default Themes", () => {
	const themes = [...ThemesArray]
	themes.forEach((theme) => {
		test(`render ${theme} theme`, () => {
			const {container} = render(<Card theme={theme}>Click Me</Card>);
			const component = container.firstChild;
			expect(component).toHaveClass(theme === 'default' ? 'card' : `card-${theme}`)
			expect(component).not.toHaveClass(...except(themes, theme === 'default' ? '' : `card-${theme}`))
		});
	})
	test("render custom color scheme", () => {
		const colorScheme = {
			color: 'black',
			background: 'linear-gradient(45deg, black, transparent)',
			backgroundColor: 'blue'
		}
		const {container} = render(<Card colorScheme={colorScheme}>Click Me</Card>);
		const element = getByText(container, 'Click Me');
		const styles = getComputedStyle(element);
		expect(styles.getPropertyValue('--ai-primary')).toBe(colorScheme.background);
		expect(styles.getPropertyValue('--ai-primary-color')).toBe(colorScheme.backgroundColor);
		expect(styles.getPropertyValue('--ai-primary-text')).toBe(colorScheme.color);
	});
});


describe("Render Card Layouts", () => {
	const layouts = [...CardLayoutsArray]
	layouts.forEach((layout) => {
		test(`render ${layout} layout`, () => {
			const {container} = render(<Card layout={layout}>Click Me</Card>);
			const component = container.firstChild;
			expect(component).toHaveClass(layout === 'default' ? 'card' : `card-${layout}`)
			expect(component).not.toHaveClass(...except(layouts, layout === 'default' ? '' : `card-${layout}`))
		});
	})
});

describe("Render Card Variants", () => {
	const variants = [...VariantsArray]
	variants.forEach((variant) => {
		test(`render ${variant} variant`, () => {
			const {container} = render(<Card variant={variant}>Click Me</Card>);
			const component = container.firstChild;
			expect(component).toHaveClass(variant === 'default' ? 'card' : `card-${variant}`)
			expect(component).not.toHaveClass(...except(variants, variant === 'default' ? '' : `card-${variant}`))
		});
	})
});

describe("Render Card Sizes", () => {
	const sizes = [...SizesArray]
	sizes.forEach((size) => {
		test(`render ${size} size`, () => {
			const {container} = render(<Card size={size}>Click Me</Card>);
			const component = container.firstChild;
			expect(component).toHaveClass(size === 'md' ? 'card' : `card-${ISizes[size]}`)
			expect(component).not.toHaveClass(...except(sizes, size === 'md' ? '' : `card-${ISizes[size]}`))
		});
	})
});

describe("Render Card Image Layouts", () => {
	const layouts = [...CardLayoutsArray]
	layouts.forEach(layout => {
		test(`render card image ${layout} layout`, async () => {
			const {container} = render(<Card>
				<CardImage layout={layout} data-testid="img" src='img.jpg'/>
				<CardContent>
					This is content
				</CardContent>
			</Card>);
			const content = getByTestId(container, 'img')
			expect(content).toHaveClass(layout === 'default' ? 'card-image' : `card-image-${layout}`)
			expect(content).not.toHaveClass(...except(layouts, layout === 'default' ? '' : `card-image-${layout}`))
		});
	})

	test("render card image extended layout", async () => {
		const {container} = render(<Card>
			<CardImage layout="no-radius" data-testid="img" src='img.jpg'/>
			<CardContent>
				This is content
			</CardContent>
		</Card>);
		const content = getByTestId(container, 'img')
		expect(content).toHaveClass('card-image-no-radius')
		expect(content).not.toHaveClass(...except(layouts, 'card-image-no-radius'))
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
		expect(content).not.toHaveClass('card-img-rounded', 'card-img-pill', 'card-img-no-radius')
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
