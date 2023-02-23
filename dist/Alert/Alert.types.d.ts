import { ColorScheme, Directions, FunctionCallback, Layouts, Sizes, Themes } from '../types/Common.types';
import { ReactNode } from 'react';
export declare const VariantsArray: readonly ["default", "outline", "note"];
export type Variants = typeof VariantsArray[number];
export declare const propTypes: {
    dismiss: import("prop-types").Requireable<boolean>;
    onClose: import("prop-types").Requireable<(...args: any[]) => any>;
    direction: import("prop-types").Requireable<"top" | "bottom" | "right" | "left">;
    theme: import("prop-types").Requireable<"default" | "primary" | "secondary" | "dark" | "light">;
    colorScheme: import("prop-types").Requireable<import("prop-types").InferProps<{
        background: import("prop-types").Validator<string>;
        backgroundColor: import("prop-types").Validator<string>;
        color: import("prop-types").Validator<string>;
    }>>;
    variant: import("prop-types").Requireable<"default" | "outline" | "note">;
    layout: import("prop-types").Requireable<"default" | "rounded" | "pill" | "no-radius">;
    size: import("prop-types").Requireable<"xs" | "sm" | "md" | "lg" | "xl">;
};
export interface IAlertProps {
    children: ReactNode;
    dismiss?: boolean;
    direction?: Directions;
    theme?: Themes;
    colorScheme?: ColorScheme;
    variant?: Variants;
    layout?: Layouts;
    size?: Sizes;
    onClose?: FunctionCallback;
}
