import { ColorScheme, LayoutDirections, Sizes, Themes } from '../types/Common.types';
import { ReactNode } from 'react';
export declare const VariantsArray: readonly ["default", "striped", "separate", "borderless", "bordered"];
export type Variants = typeof VariantsArray[number];
export declare const LayoutsArray: readonly ["default", "rounded", "no-radius", "pill"];
export type Layouts = typeof LayoutsArray[number];
export declare const propTypes: {
    variant: import("prop-types").Requireable<"default" | "striped" | "separate" | "borderless" | "bordered">;
    theme: import("prop-types").Requireable<"default" | "primary" | "secondary" | "dark" | "light">;
    layout: import("prop-types").Requireable<"default" | "rounded" | "no-radius" | "pill">;
    direction: import("prop-types").Requireable<"row" | "column">;
    size: import("prop-types").Requireable<"xs" | "sm" | "md" | "lg" | "xl">;
    colorScheme: import("prop-types").Requireable<import("prop-types").InferProps<{
        background: import("prop-types").Validator<string>;
        backgroundColor: import("prop-types").Validator<string>;
        color: import("prop-types").Validator<string>;
    }>>;
};
export interface IListProps {
    children: ReactNode;
    theme?: Themes;
    variant?: Variants;
    layout?: Layouts;
    colorScheme?: ColorScheme;
    direction?: LayoutDirections;
    size?: Sizes;
}
export interface IListItemProps {
    children: ReactNode;
    theme?: Themes;
    prefix?: ReactNode;
    suffix?: ReactNode;
    disabled?: boolean;
}
export declare const ListItemPropTypes: {
    theme: import("prop-types").Requireable<"default" | "primary" | "secondary" | "dark" | "light">;
    disabled: import("prop-types").Requireable<boolean>;
};
