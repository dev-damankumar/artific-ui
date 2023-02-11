import React from "react";
import {render} from "@testing-library/react";
import ThemeProvider from "./ThemeProvider";
import {Button} from "../Button";

describe("Render ThemeProvider", () => {
	const theme = {
		secondary: {
			main: '#F4D35E',
			text: 'white',
		},
		secondaryNew: {
			main: '#5abaf5',
			text: 'white',
		},
		primary: {
			main: '#DA4167',
			text: 'white'
		},
		light: {
			main: '#fffce6',
			text: '#000'
		},
		dark: {
			main: '#173658',
			text: 'white'
		}
	}
	test("render components with ThemeProvider", () => {
		const {container} = render(<ThemeProvider theme={theme}>
			<Button data-testid="btn">Hello</Button>
		</ThemeProvider>);
		const component = container.firstChild!
		expect(component.nodeName.toLowerCase()).toBe('style')
		const themeWrapper = container.querySelector('[data-theme-provider]')
		expect(themeWrapper).toBeDefined()
		expect(themeWrapper).toHaveAttribute('id')
		const styles = getComputedStyle(themeWrapper!);
		expect(styles.getPropertyValue('--primary')).toBe(theme.primary.main);
		expect(styles.getPropertyValue('--primary-color')).toBe(theme.primary.main);
		expect(styles.getPropertyValue('--primary-text')).toBe(theme.primary.text);

		expect(styles.getPropertyValue('--secondary')).toBe(theme.secondary.main);
		expect(styles.getPropertyValue('--secondary-color')).toBe(theme.secondary.main);
		expect(styles.getPropertyValue('--secondary-text')).toBe(theme.secondary.text);

		expect(styles.getPropertyValue('--secondaryNew')).toBe(theme.secondaryNew.main);
		expect(styles.getPropertyValue('--secondaryNew-color')).toBe(theme.secondaryNew.main);
		expect(styles.getPropertyValue('--secondaryNew-text')).toBe(theme.secondaryNew.text);

		expect(styles.getPropertyValue('--light')).toBe(theme.light.main);
		expect(styles.getPropertyValue('--light-color')).toBe(theme.light.main);
		expect(styles.getPropertyValue('--light-text')).toBe(theme.light.text);

		expect(styles.getPropertyValue('--dark')).toBe(theme.dark.main);
		expect(styles.getPropertyValue('--dark-color')).toBe(theme.dark.main);
		expect(styles.getPropertyValue('--dark-text')).toBe(theme.dark.text);
	});
});

