import { ColorScheme, Sizes, Themes } from '../types/Common.types';
import PropTypes from "prop-types";
export declare const LayoutsArray: readonly ["default", "rounded", "pill", "no-radius", "circular"];
export type Layouts = typeof LayoutsArray[number];
export declare const VariantsArray: readonly ["default", "outline", "dot"];
export type Variants = typeof VariantsArray[number];
export declare const propTypes: {
    theme: PropTypes.Requireable<"default" | "primary" | "secondary" | "dark" | "light">;
    colorScheme: PropTypes.Requireable<PropTypes.InferProps<{
        background: PropTypes.Validator<string>;
        backgroundColor: PropTypes.Validator<string>;
        color: PropTypes.Validator<string>;
    }>>;
    title: PropTypes.Requireable<string>;
    variant: PropTypes.Requireable<"default" | "outline" | "dot">;
    layout: PropTypes.Requireable<"default" | "rounded" | "pill" | "no-radius" | "circular">;
    size: PropTypes.Requireable<"xs" | "sm" | "md" | "lg" | "xl">;
};
export interface IBadgeProps {
    theme?: Themes;
    colorScheme?: ColorScheme;
    title?: string;
    variant?: Variants;
    layout?: Layouts;
    size?: Sizes;
}
