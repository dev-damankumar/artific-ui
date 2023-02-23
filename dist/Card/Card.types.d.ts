import { ColorScheme, LayoutDirections, Layouts, Sizes, Themes } from '../types/Common.types';
import { ReactNode } from 'react';
export declare const VariantsArray: readonly ["default", "fill", "outline", "fill-with-border"];
export type Variants = typeof VariantsArray[number];
export declare const CardLayoutsArray: readonly ["default", "extended", "rounded", "no-radius"];
export type CardLayouts = typeof CardLayoutsArray[number];
export interface ICardProps {
    children: ReactNode;
    direction?: LayoutDirections;
    theme?: Themes;
    layout?: CardLayouts;
    variant?: Variants;
    colorScheme?: ColorScheme;
    size?: Sizes;
}
export declare const propTypes: {
    children: import("prop-types").Requireable<import("prop-types").ReactNodeLike>;
    direction: import("prop-types").Requireable<"row" | "column">;
    theme: import("prop-types").Requireable<"default" | "primary" | "secondary" | "dark" | "light">;
    variant: import("prop-types").Requireable<"default" | "fill" | "outline" | "fill-with-border">;
    layout: import("prop-types").Requireable<"default" | "extended" | "rounded" | "no-radius">;
    size: import("prop-types").Requireable<"xs" | "sm" | "md" | "lg" | "xl">;
    colorScheme: import("prop-types").Requireable<import("prop-types").InferProps<{
        background: import("prop-types").Validator<string>;
        backgroundColor: import("prop-types").Validator<string>;
        color: import("prop-types").Validator<string>;
    }>>;
};
export interface ICardImageProps {
    layout?: CardLayouts | Layouts;
    src: string;
    alt?: string;
    size?: Sizes;
    direction?: LayoutDirections;
}
export declare const ICardImagePropsTypes: {
    layout: import("prop-types").Requireable<"default" | "extended" | "rounded" | "no-radius" | "pill">;
    alt: import("prop-types").Requireable<string>;
    src: import("prop-types").Validator<string>;
    size: import("prop-types").Requireable<"xs" | "sm" | "md" | "lg" | "xl">;
    direction: import("prop-types").Requireable<"row" | "column">;
};
