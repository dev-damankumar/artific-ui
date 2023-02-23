import { ReactNode } from 'react';
import { ColorScheme, FunctionCallback, Layouts, Sizes, Themes } from '../types/Common.types';
export declare const VariantsArray: readonly ["default", "separate", "outline", "attached"];
export type Variants = typeof VariantsArray[number];
export declare const IndicatorDirectionArray: readonly ["start", "end"];
export type IndicatorDirection = typeof IndicatorDirectionArray[number];
export interface IAccordionProps {
    children: ReactNode;
    theme?: Themes;
    variant?: Variants;
    layout?: Layouts;
    indicatorPosition?: IndicatorDirection;
    size?: Sizes;
    colorScheme?: ColorScheme;
}
export declare const propTypes: {
    children: import("prop-types").Requireable<import("prop-types").ReactNodeLike>;
    theme: import("prop-types").Requireable<"default" | "primary" | "secondary" | "dark" | "light">;
    variant: import("prop-types").Requireable<"default" | "separate" | "outline" | "attached">;
    layout: import("prop-types").Requireable<"default" | "rounded" | "pill" | "no-radius">;
    indicatorPosition: import("prop-types").Requireable<"start" | "end">;
    size: import("prop-types").Requireable<"xs" | "sm" | "md" | "lg" | "xl">;
    colorScheme: import("prop-types").Requireable<import("prop-types").InferProps<{
        background: import("prop-types").Validator<string>;
        backgroundColor: import("prop-types").Validator<string>;
        color: import("prop-types").Validator<string>;
    }>>;
};
export interface IAccordionPanel {
    children: ReactNode;
    theme?: Themes;
    disabled?: boolean;
}
export declare const IAccordionPanelPropTypes: {
    children: import("prop-types").Requireable<import("prop-types").ReactNodeLike>;
    theme: import("prop-types").Requireable<"default" | "primary" | "secondary" | "dark" | "light">;
    disabled: import("prop-types").Requireable<boolean>;
};
export interface IAccordionHeader {
    children: ReactNode;
    theme?: Themes;
    onToggle?: FunctionCallback;
    prefix?: ReactNode | undefined;
    suffix?: ReactNode | undefined;
}
export declare const IAccordionHeaderPropTypes: {
    children: import("prop-types").Requireable<import("prop-types").ReactNodeLike>;
    theme: import("prop-types").Requireable<"default" | "primary" | "secondary" | "dark" | "light">;
    onToggle: import("prop-types").Requireable<(...args: any[]) => any>;
};
export interface IAccordionBody {
    children: ReactNode;
    open?: boolean;
    disabled?: boolean;
}
export declare const IAccordionBodyPropTypes: {
    children: import("prop-types").Requireable<import("prop-types").ReactNodeLike>;
    open: import("prop-types").Requireable<boolean>;
    disabled: import("prop-types").Requireable<boolean>;
};
