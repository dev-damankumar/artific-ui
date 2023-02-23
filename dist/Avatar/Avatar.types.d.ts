import { ColorScheme, Layouts, Sizes, Themes } from '../types/Common.types';
import PropTypes from "prop-types";
export declare const VariantsArray: readonly ["default", "outline", "fluid"];
export type Variants = typeof VariantsArray[number];
export declare const propTypes: {
    theme: PropTypes.Requireable<"default" | "primary" | "secondary" | "dark" | "light">;
    colorScheme: PropTypes.Requireable<PropTypes.InferProps<{
        background: PropTypes.Validator<string>;
        backgroundColor: PropTypes.Validator<string>;
        color: PropTypes.Validator<string>;
    }>>;
    src: PropTypes.Requireable<string>;
    alt: PropTypes.Requireable<string>;
    title: PropTypes.Requireable<string>;
    variant: PropTypes.Requireable<"default" | "outline" | "fluid">;
    layout: PropTypes.Requireable<"default" | "rounded" | "pill" | "no-radius">;
    size: PropTypes.Requireable<"xs" | "sm" | "md" | "lg" | "xl">;
};
export interface IAvatarProps {
    theme?: Themes;
    colorScheme?: ColorScheme;
    src?: string;
    alt?: string;
    title?: string;
    variant?: Variants;
    layout?: Layouts;
    size?: Sizes;
}
