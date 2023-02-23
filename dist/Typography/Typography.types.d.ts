import { ColorScheme, Themes } from '../types/Common.types';
import { ReactNode } from 'react';
export declare const TypographyAsElementsArray: readonly ["span", "p", "div", "i", "b", "h1", "h2", "h3", "h4", "h5", "h6"];
export type TypographyAsElements = typeof TypographyAsElementsArray[number];
export declare const TypographyWeightsArray: readonly ["medium", "light", "bold"];
export type TypographyWeights = typeof TypographyWeightsArray[number];
export declare const TypographyVariantsArray: readonly ["text", "subtitle", "heading", "caption", "description", "code", "highlight", "abbr", "pre", "kbd"];
export type TypographyVariants = typeof TypographyVariantsArray[number];
export declare const propTypes: {
    variant: import("prop-types").Requireable<"text" | "subtitle" | "heading" | "caption" | "description" | "code" | "highlight" | "abbr" | "pre" | "kbd">;
    as: import("prop-types").Requireable<"span" | "p" | "div" | "i" | "b" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6">;
    weight: import("prop-types").Requireable<"medium" | "light" | "bold">;
    fontSize: import("prop-types").Requireable<NonNullable<string | number | null | undefined>>;
    fontWeight: import("prop-types").Requireable<NonNullable<string | number | null | undefined>>;
    theme: import("prop-types").Requireable<"light" | "primary" | "secondary" | "dark" | "default">;
    colorScheme: import("prop-types").Requireable<import("prop-types").InferProps<{
        background: import("prop-types").Validator<string>;
        backgroundColor: import("prop-types").Validator<string>;
        color: import("prop-types").Validator<string>;
    }>>;
};
export interface ITypographyProps {
    children?: ReactNode;
    as?: TypographyAsElements;
    weight?: TypographyWeights;
    variant?: TypographyVariants;
    fontSize?: string | number;
    fontWeight?: string | number;
    theme?: Themes;
    colorScheme?: ColorScheme;
}
