import { CSSProperties, ReactNode } from 'react';
import { ColorScheme, Layouts, Sizes, Themes } from '../types/Common.types';
export declare const VariantsArray: readonly ["default", "separate", "breadcrumb", "float"];
export type Variants = typeof VariantsArray[number];
export declare const propTypes: {
    variant: import("prop-types").Requireable<"default" | "separate" | "breadcrumb" | "float">;
    size: import("prop-types").Requireable<"xs" | "sm" | "md" | "lg" | "xl">;
    theme: import("prop-types").Requireable<"default" | "primary" | "secondary" | "dark" | "light">;
    colorScheme: import("prop-types").Requireable<import("prop-types").InferProps<{
        background: import("prop-types").Validator<string>;
        backgroundColor: import("prop-types").Validator<string>;
        color: import("prop-types").Validator<string>;
    }>>;
    layout: import("prop-types").Requireable<"default" | "rounded" | "pill" | "no-radius">;
};
export interface IPaginationProps {
    children: ReactNode;
    style?: CSSProperties;
    theme?: Themes;
    colorScheme?: ColorScheme;
    variant?: Variants;
    layout?: Layouts;
    size?: Sizes;
}
export interface IPaginationItemProps {
    children: ReactNode;
    style?: CSSProperties;
    variant?: Variants;
    active?: boolean;
}
export declare const paginationItemPropTypes: {
    variant: import("prop-types").Requireable<"default" | "separate" | "breadcrumb" | "float">;
    active: import("prop-types").Requireable<boolean>;
};
