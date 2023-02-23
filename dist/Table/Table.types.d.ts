import { CSSProperties, ReactNode } from 'react';
import { ColorScheme, Layouts, Sizes, Themes } from '../types/Common.types';
export declare const VariantsArray: readonly ["default", "borderless", "striped", "outline"];
export type Variants = typeof VariantsArray[number];
export declare const propTypes: {
    theme: import("prop-types").Requireable<"default" | "primary" | "secondary" | "dark" | "light">;
    layout: import("prop-types").Requireable<"default" | "rounded" | "pill" | "no-radius">;
    variant: import("prop-types").Requireable<"default" | "borderless" | "striped" | "outline">;
    size: import("prop-types").Requireable<"xs" | "sm" | "md" | "lg" | "xl">;
    colorScheme: import("prop-types").Requireable<import("prop-types").InferProps<{
        background: import("prop-types").Validator<string>;
        backgroundColor: import("prop-types").Validator<string>;
        color: import("prop-types").Validator<string>;
    }>>;
};
export declare const defaultProps: {
    colorScheme: null;
    theme: "default" | "primary" | "secondary" | "dark" | "light";
    variant: "default" | "borderless" | "striped" | "outline";
    layout: "default" | "rounded" | "pill" | "no-radius";
    size: "xs" | "sm" | "md" | "lg" | "xl";
};
export interface ITableProps {
    children?: ReactNode;
    style?: CSSProperties;
    theme?: Themes;
    colorScheme?: ColorScheme;
    variant?: Variants;
    layout?: Layouts;
    size?: Sizes;
}
