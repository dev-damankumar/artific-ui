import { CSSProperties, ReactNode } from 'react';
import { ColorScheme, Directions, FunctionCallback } from '../types/Common.types';
export declare const LayoutsArray: readonly ["default", "rounded", "no-radius"];
export type Layouts = typeof LayoutsArray[number];
export declare const ThemesArray: readonly ["light", "dark"];
export type Themes = typeof ThemesArray[number];
export declare const OverlayArray: readonly ["default", "blur"];
export type Overlay = typeof OverlayArray[number];
export declare const VariantsArray: readonly ["default", "striped", "striped-body", "striped-header", "striped-footer"];
export type Variants = typeof VariantsArray[number];
export declare const SizesArray: readonly ["full-width", "full-height", "full", "expanded", "xs", "sm", "md", "lg", "xl"];
export type Sizes = typeof SizesArray[number];
export declare const OverLaySizesArray: string[];
export declare const propTypes: {
    variant: import("prop-types").Requireable<"default" | "striped" | "striped-body" | "striped-header" | "striped-footer">;
    size: import("prop-types").Requireable<"full-width" | "full-height" | "full" | "expanded" | "xs" | "sm" | "md" | "lg" | "xl">;
    overlay: import("prop-types").Requireable<"default" | "blur">;
    dock: import("prop-types").Requireable<"top" | "bottom" | "right" | "left">;
    position: import("prop-types").Requireable<"top" | "bottom" | "right" | "left">;
    styles: import("prop-types").Requireable<object>;
    theme: import("prop-types").Requireable<"light" | "dark">;
    classes: import("prop-types").Requireable<string>;
    colorScheme: import("prop-types").Requireable<import("prop-types").InferProps<{
        background: import("prop-types").Validator<string>;
        backgroundColor: import("prop-types").Validator<string>;
        color: import("prop-types").Validator<string>;
    }>>;
    layout: import("prop-types").Requireable<"default" | "rounded" | "no-radius">;
    onBackdropClick: import("prop-types").Requireable<(...args: any[]) => any>;
};
export interface IModalProps {
    children?: ReactNode;
    style?: CSSProperties;
    styles?: CSSProperties;
    theme?: Themes;
    colorScheme?: ColorScheme;
    variant?: Variants;
    layout?: Layouts;
    size?: Sizes;
    classes?: string;
    open?: boolean;
    onClose?: FunctionCallback;
    overlay?: Overlay;
    dock?: Directions;
    position?: Directions;
    dismiss?: boolean;
    onBackdropClick?: FunctionCallback;
}
export interface IModalHeaderProps {
    children?: ReactNode;
    dismiss?: boolean;
    prefix?: ReactNode | null | undefined;
    suffix?: ReactNode | null | undefined;
    onClose?: FunctionCallback;
}
export declare const modalHeaderPropTypes: {
    dismiss: import("prop-types").Requireable<boolean>;
    onClose: import("prop-types").Requireable<(...args: any[]) => any>;
};
