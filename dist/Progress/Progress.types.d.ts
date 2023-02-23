import { CSSProperties } from 'react';
import { ColorScheme, Sizes, Themes } from '../types/Common.types';
export declare const PercentAgeArray: number[];
export type PercentAge = typeof PercentAgeArray[number];
export declare const LabelStyleArray: readonly ["default", "inside", "float", "none"];
export type LabelStyle = typeof LabelStyleArray[number];
export declare const VariantsArray: readonly ["default", "striped", "outline", "fluid"];
export type Variants = typeof VariantsArray[number];
export declare const LayoutsArray: readonly ["default", "rounded", "pill", "no-radius", "line"];
export type Layouts = typeof LayoutsArray[number];
export declare const ProgressTypeArray: readonly ["default", "line", "circular"];
export type ProgressType = typeof ProgressTypeArray[number];
export declare const propTypes: {
    variant: import("prop-types").Requireable<"default" | "striped" | "outline" | "fluid">;
    size: import("prop-types").Requireable<"xs" | "sm" | "md" | "lg" | "xl">;
    value: import("prop-types").Requireable<number>;
    values: import("prop-types").Requireable<(number | null | undefined)[]>;
    label: import("prop-types").Requireable<"default" | "inside" | "float" | "none">;
    symbol: import("prop-types").Requireable<string>;
    disabled: import("prop-types").Requireable<boolean>;
    theme: import("prop-types").Requireable<"default" | "primary" | "secondary" | "dark" | "light">;
    type: import("prop-types").Requireable<"default" | "line" | "circular">;
    loading: import("prop-types").Requireable<boolean>;
    barColors: import("prop-types").Requireable<string[]>;
    colorScheme: import("prop-types").Requireable<import("prop-types").InferProps<{
        background: import("prop-types").Validator<string>;
        backgroundColor: import("prop-types").Validator<string>;
        color: import("prop-types").Validator<string>;
    }>>;
    layout: import("prop-types").Requireable<"default" | "rounded" | "pill" | "no-radius" | "line">;
};
export interface IProgressProps {
    style?: CSSProperties;
    theme?: Themes;
    type?: ProgressType;
    colorScheme?: ColorScheme;
    variant?: Variants;
    layout?: Layouts;
    label?: LabelStyle;
    size?: Sizes;
    disabled?: boolean;
    barColors?: string[];
    value?: number;
    values?: (number | null | undefined)[];
    symbol?: string;
}
