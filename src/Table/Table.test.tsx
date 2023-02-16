import React from "react";
import {getByRole, getByTestId, render} from "@testing-library/react";
import Table from "./Table";
import {ISizes, LayoutsArray, SizesArray, ThemesArray} from "../types/Common.types";
import except from "../tests/except";
import {VariantsArray} from "./Table.types";
import TableRow from "./TableRow";
import TableHeading from "./TableHeading";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import TableCell from "./TableCell";

describe("Render Table", () => {
	test("render the Table component", () => {
		const {container} = render(<Table>
			<TableHead data-testid="thead">
				<TableRow data-testid="tr">
					<TableHeading data-testid="th">heading</TableHeading>
				</TableRow>
			</TableHead>
			<TableBody data-testid="tbody">
				<TableRow>
					<TableCell data-testid="td">cell</TableCell>
				</TableRow>
			</TableBody>
		</Table>);
		const component = getByRole(container, 'table');
		const thead = getByTestId(container, 'thead')
		const tr = getByTestId(container, 'tr')
		const th = getByTestId(container, 'th')
		const tbody = getByTestId(container, 'tbody')
		const td = getByTestId(container, 'td')
		expect(thead.nodeName.toLowerCase()).toBe('thead')
		expect(tr.nodeName.toLowerCase()).toBe('tr')
		expect(th.nodeName.toLowerCase()).toBe('th')
		expect(th).toHaveTextContent('heading')
		expect(tbody.nodeName.toLowerCase()).toBe('tbody')
		expect(td.nodeName.toLowerCase()).toBe('td')
		expect(td).toHaveTextContent('cell')
		expect(component.nodeName.toLowerCase()).toBe('table')
		expect(component).toHaveClass('table')

	});
	test("render default styles", () => {
		const {container} = render(<Table>
			<TableHead>
				<TableRow>
					<TableHeading>heading</TableHeading>
				</TableRow>
			</TableHead>
			<TableBody>
				<TableRow>
					<TableCell>cell</TableCell>
				</TableRow>
			</TableBody>
		</Table>);
		const component = getByRole(container, 'table');
		expect(component).toHaveClass('table')
	});
});

describe("Render Table Default Themes", () => {
	const themes = [...ThemesArray]
	themes.forEach((theme) => {
		test(`render ${theme} theme`, () => {
			const {container} = render(<Table theme={theme}>
				<TableHead>
					<TableRow>
						<TableHeading>heading</TableHeading>
					</TableRow>
				</TableHead>
				<TableBody>
					<TableRow>
						<TableCell>cell</TableCell>
					</TableRow>
				</TableBody>
			</Table>);
			const component = getByRole(container, 'table');
			expect(component).toHaveClass(theme === 'default' ? 'table' : `table-${theme}`)
			expect(component).not.toHaveClass(...except(themes, theme === 'default' ? '' : `table-${theme}`))
		});
	})
	test("render custom color scheme", () => {
		const colorScheme = {
			color: 'black',
			background: 'linear-gradient(45deg, black, transparent)',
			backgroundColor: 'blue'
		}
		const {container} = render(<Table colorScheme={colorScheme}>
			<TableHead>
				<TableRow>
					<TableHeading>heading</TableHeading>
				</TableRow>
			</TableHead>
			<TableBody>
				<TableRow>
					<TableCell>cell</TableCell>
				</TableRow>
			</TableBody>
		</Table>);
		const element = getByRole(container, 'table');
		const styles = getComputedStyle(element);
		expect(styles.getPropertyValue('--ai-primary')).toBe(colorScheme.background);
		expect(styles.getPropertyValue('--ai-primary-color')).toBe(colorScheme.backgroundColor);
		expect(styles.getPropertyValue('--ai-primary-text')).toBe(colorScheme.color);
	});
});

describe("Render Table Layouts", () => {
	const layouts = [...LayoutsArray]
	layouts.forEach((layout) => {
		test(`render ${layout} layout`, () => {
			const {container} = render(<Table layout={layout}>
				<TableHead>
					<TableRow>
						<TableHeading>heading</TableHeading>
					</TableRow>
				</TableHead>
				<TableBody>
					<TableRow>
						<TableCell>cell</TableCell>
					</TableRow>
				</TableBody>
			</Table>);
			const component = getByRole(container, 'table');
			expect(component).toHaveClass(layout === 'default' ? 'table' : `table-${layout}`)
			expect(component).not.toHaveClass(...except(layouts, layout === 'default' ? '' : `table-${layout}`))
		});
	})
});

describe("Render Table Variants", () => {
	const variants = [...VariantsArray]
	variants.forEach((variant) => {
		test(`render ${variant} variant`, () => {
			const {container} = render(<Table variant={variant}>
				<TableHead>
					<TableRow>
						<TableHeading>heading</TableHeading>
					</TableRow>
				</TableHead>
				<TableBody>
					<TableRow>
						<TableCell>cell</TableCell>
					</TableRow>
				</TableBody>
			</Table>);
			const component = getByRole(container, 'table');
			expect(component).toHaveClass(variant === 'default' ? 'table' : `table-${variant}`)
			expect(component).not.toHaveClass(...except(variants, variant === 'default' ? '' : `table-${variant}`))
		});
	})
});

describe("Render Table Sizes", () => {
	const sizes = [...SizesArray]
	sizes.forEach((size) => {
		test(`render ${size} size`, () => {
			const {container} = render(<Table size={size}>
				<TableHead>
					<TableRow>
						<TableHeading>heading</TableHeading>
					</TableRow>
				</TableHead>
				<TableBody>
					<TableRow>
						<TableCell>cell</TableCell>
					</TableRow>
				</TableBody>
			</Table>);
			const component = getByRole(container, 'table');
			expect(component).toHaveClass(size === 'md' ? 'table' : `table-${ISizes[size]}`)
			expect(component).not.toHaveClass(...except(sizes, size === 'md' ? '' : `table-${ISizes[size]}`))
		});
	})
});


