import React from "react";
import {getByText, render} from "@testing-library/react";
import Typography from "./Typography";
import except from "../tests/except";
import {
    TypographyAsElementsArray,
    TypographyVariants,
    TypographyVariantsArray,
    TypographyWeightsArray,
} from "./Typography.types";
import {ThemesArray} from "../types/Common.types";

describe("Render Typography", () => {
    test("render the Typography component", () => {
        const {container} = render(<Typography>Hello World!</Typography>);
        getByText(container, "Hello World!");
    });
    test("render default styles", () => {
        const {container} = render(<Typography>Click Me</Typography>);
        const component = container.firstChild;
        expect(component).toHaveClass("typography");
    });
});

describe("Render Typography Default Themes", () => {
    const themes = [...ThemesArray];
    themes.forEach((theme) => {
        test(`render ${theme} theme`, () => {
            const {container} = render(
                <Typography theme={theme}>Click Me</Typography>
            );
            const component = container.firstChild;
            expect(component).toHaveClass(
                theme === "default" ? "typography" : `text-${theme}`
            );
            expect(component).not.toHaveClass(
                ...except(themes, theme === "default" ? "typography" : `text-${theme}`)
            );
        });
    });
    test("render custom color scheme", () => {
        const colorScheme = {
            color: "black",
            background: "linear-gradient(45deg, black, transparent)",
            backgroundColor: "blue",
        };
        const {container} = render(
            <Typography colorScheme={colorScheme}>Click Me</Typography>
        );
        const element = getByText(container, "Click Me");
        const styles = getComputedStyle(element);
        expect(styles.getPropertyValue("--ai-primary")).toBe(
            colorScheme.background
        );
        expect(styles.getPropertyValue("--ai-primary-color")).toBe(
            colorScheme.backgroundColor
        );
        expect(styles.getPropertyValue("--ai-primary-text")).toBe(
            colorScheme.color
        );
    });
});

describe("Render Typography Weights", () => {
    const weights = [...TypographyWeightsArray];
    weights.forEach((weight) => {
        test(`render ${weight} weight`, () => {
            const {container} = render(
                <Typography weight={weight}>Click Me</Typography>
            );
            const component = container.firstChild;
            expect(component).toHaveClass(
                weight === "medium" ? "typography" : `typography-${weight}`
            );
            expect(component).not.toHaveClass(
                ...except(
                    weights,
                    weight === "medium" ? "typography" : `typography-${weight}`
                )
            );
        });
    });
});

describe("Render Typography Variants", () => {
    const variants = [...TypographyVariantsArray];
    variants.forEach((variant) => {
        test(`render ${variant} variant`, () => {
            const {container} = render(
                <Typography variant={variant as TypographyVariants}>
                    Click Me
                </Typography>
            );
            const component = container.firstChild;
            expect(component).toHaveClass(
                variant === "text" ? "typography" : `typography-${variant}`
            );
            expect(component).not.toHaveClass(
                ...except(
                    variants,
                    variant === "text" ? "typography" : `typography-${variant}`
                )
            );
        });
    });
});

describe("Render Typography As Element", () => {
    const asElements = [...TypographyAsElementsArray];
    asElements.forEach((asElement) => {
        test(`render ${asElement} element`, () => {
            const {container} = render(
                <Typography as={asElement}>Click Me</Typography>
            );
            const component = container?.firstElementChild;
            expect(component?.nodeName.toLowerCase()).toBe(asElement);
        });
    });
});
