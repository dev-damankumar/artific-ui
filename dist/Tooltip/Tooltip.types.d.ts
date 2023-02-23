import { ReactNode } from 'react';
import { ColorScheme, Layouts, Sizes, Themes } from '../types/Common.types';
export declare const PlacementArray: readonly ["bottom", "bottom-start", "bottom-end", "top", "top-start", "top-end", "left", "left-start", "left-end", "right", "right-start", "right-end"];
export type Placement = typeof PlacementArray[number];
export declare const VariantsArray: readonly ["default", "arrow"];
export type Variants = typeof VariantsArray[number];
export declare const propTypes: {
    theme: import("prop-types").Requireable<"default" | "primary" | "secondary" | "dark" | "light">;
    layout: import("prop-types").Requireable<"default" | "rounded" | "pill" | "no-radius">;
    variant: import("prop-types").Requireable<"default" | "arrow">;
    placement: import("prop-types").Requireable<"bottom" | "bottom-start" | "bottom-end" | "top" | "top-start" | "top-end" | "left" | "left-start" | "left-end" | "right" | "right-start" | "right-end">;
    size: import("prop-types").Requireable<"xs" | "sm" | "md" | "lg" | "xl">;
    colorScheme: import("prop-types").Requireable<import("prop-types").InferProps<{
        background: import("prop-types").Validator<string>;
        backgroundColor: import("prop-types").Validator<string>;
        color: import("prop-types").Validator<string>;
    }>>;
};
export interface ITooltipProps {
    children?: ReactNode;
    title: string | ReactNode;
    theme?: Themes;
    colorScheme?: ColorScheme;
    variant?: Variants;
    placement?: Placement;
    layout?: Layouts;
    size?: Sizes;
}
