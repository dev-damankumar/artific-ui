import { ColorScheme, Directions, FunctionCallback, Layouts, Sizes, Themes } from '../types/Common.types';
import { CSSProperties, ReactNode } from "react";
export declare const VariantsArray: readonly ["default", "separate", "line", "floating-line"];
export type Variants = typeof VariantsArray[number];
export declare const TabTypesArray: readonly ["default", "float"];
export type TabTypes = typeof TabTypesArray[number];
export declare const propTypes: {
    variant: import("prop-types").Requireable<"default" | "separate" | "line" | "floating-line">;
    size: import("prop-types").Requireable<"xs" | "sm" | "md" | "lg" | "xl">;
    theme: import("prop-types").Requireable<"default" | "primary" | "secondary" | "dark" | "light">;
    type: import("prop-types").Requireable<"default" | "float">;
    lineDirection: import("prop-types").Requireable<"top" | "bottom" | "right" | "left">;
    position: import("prop-types").Requireable<"top" | "bottom" | "right" | "left">;
    colorScheme: import("prop-types").Requireable<import("prop-types").InferProps<{
        background: import("prop-types").Validator<string>;
        backgroundColor: import("prop-types").Validator<string>;
        color: import("prop-types").Validator<string>;
    }>>;
    layout: import("prop-types").Requireable<"default" | "rounded" | "pill" | "no-radius">;
};
export interface ITabsProps {
    type?: TabTypes;
    children: ReactNode;
    theme?: Themes;
    lineDirection?: Directions;
    position?: Directions;
    colorScheme?: ColorScheme;
    variant?: Variants;
    layout?: Layouts;
    size?: Sizes;
}
export interface ITabItemProps {
    children: ReactNode;
    variant?: Variants;
    active?: boolean;
    activeTab?: string;
    setActiveTab?: FunctionCallback;
    target: string;
}
export declare const tabItemPropTypes: {
    variant: import("prop-types").Requireable<"default" | "separate" | "line" | "floating-line">;
    active: import("prop-types").Requireable<boolean>;
};
export interface ITabContentProps {
    children: ReactNode;
    style?: CSSProperties;
    variant?: Variants;
    activeTab?: string;
    setActiveTab?: FunctionCallback;
    id: string;
}
export declare const tabContentPropTypes: {
    variant: import("prop-types").Requireable<"default" | "separate" | "line" | "floating-line">;
    activeTab: import("prop-types").Requireable<string>;
};
