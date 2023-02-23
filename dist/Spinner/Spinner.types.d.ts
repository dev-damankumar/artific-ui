import { ColorScheme, Directions, Sizes, Themes } from '../types/Common.types';
export declare const VariantsArray: readonly ["default", "ring", "dots", "box", "ripple"];
export type Variants = typeof VariantsArray[number];
export declare const propTypes: {
    dismiss: import("prop-types").Requireable<boolean>;
    direction: import("prop-types").Requireable<"top" | "bottom" | "right" | "left">;
    theme: import("prop-types").Requireable<"default" | "primary" | "secondary" | "dark" | "light">;
    colorScheme: import("prop-types").Requireable<import("prop-types").InferProps<{
        background: import("prop-types").Validator<string>;
        backgroundColor: import("prop-types").Validator<string>;
        color: import("prop-types").Validator<string>;
    }>>;
    variant: import("prop-types").Requireable<"default" | "ring" | "dots" | "box" | "ripple">;
    size: import("prop-types").Requireable<"xs" | "sm" | "md" | "lg" | "xl">;
};
export interface ISpinnerProps {
    dismiss?: boolean;
    direction?: Directions;
    theme?: Themes;
    colorScheme?: ColorScheme;
    variant?: Variants;
    size?: Sizes;
}
