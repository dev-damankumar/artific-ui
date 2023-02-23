import { ColorScheme, Directions, FunctionCallback, Sizes, Themes } from '../types/Common.types';
import { ReactNode } from 'react';
export declare const VariantsArray: readonly ["drawer", "fluid", "default"];
export type Variants = typeof VariantsArray[number];
export declare const LayoutsArray: readonly ["rounded", "default", "no-radius", "floating"];
export type Layouts = typeof LayoutsArray[number];
export declare const PositionArray: readonly ["before", "after"];
export type Position = typeof PositionArray[number];
export interface IDropdownProps {
    children: ReactNode;
    autoClose?: boolean;
    open?: boolean;
    fullwidth?: boolean;
    position?: Directions;
    layout?: Layouts;
    theme?: Themes;
    size?: Sizes;
    colorScheme?: ColorScheme;
    variant?: Variants;
    disabled?: boolean;
    value?: string;
    placeholder?: string;
    defaultValue?: string;
    menuClass?: string;
    menuStyle?: object;
    dropdownButtonStyle?: object;
    dropdownButtonClassName?: string;
}
export declare const propTypes: {
    children: import("prop-types").Requireable<import("prop-types").ReactNodeLike>;
    autoClose: import("prop-types").Requireable<boolean>;
    fullwidth: import("prop-types").Requireable<boolean>;
    open: import("prop-types").Requireable<boolean>;
    name: import("prop-types").Requireable<string>;
    position: import("prop-types").Requireable<"top" | "bottom" | "right" | "left">;
    layout: import("prop-types").Requireable<"default" | "rounded" | "no-radius" | "floating">;
    theme: import("prop-types").Requireable<"default" | "primary" | "secondary" | "dark" | "light">;
    variant: import("prop-types").Requireable<"drawer" | "fluid" | "default">;
    size: import("prop-types").Requireable<"xs" | "sm" | "md" | "lg" | "xl">;
    disabled: import("prop-types").Requireable<boolean>;
    value: import("prop-types").Requireable<string>;
    placeholder: import("prop-types").Requireable<string>;
    defaultValue: import("prop-types").Requireable<string>;
    id: import("prop-types").Requireable<string>;
    menuClass: import("prop-types").Requireable<string>;
    menuStyle: import("prop-types").Requireable<object>;
    dropdownButtonStyle: import("prop-types").Requireable<object>;
    dropdownButtonClassName: import("prop-types").Requireable<string>;
    colorScheme: import("prop-types").Requireable<import("prop-types").InferProps<{
        background: import("prop-types").Validator<string>;
        backgroundColor: import("prop-types").Validator<string>;
        color: import("prop-types").Validator<string>;
    }>>;
};
export interface IMenuItemProps {
    onSelect?: FunctionCallback;
    closeHandler?: FunctionCallback;
    autoClose?: boolean;
    active?: boolean;
    children: ReactNode;
}
export declare const IMenuItemPropsType: {
    onSelect: import("prop-types").Requireable<(...args: any[]) => any>;
    closeHandler: import("prop-types").Requireable<(...args: any[]) => any>;
    autoClose: import("prop-types").Requireable<boolean>;
    active: import("prop-types").Requireable<boolean>;
    children: import("prop-types").Requireable<import("prop-types").ReactNodeLike>;
};
export interface IDropdownMenu {
    children: ReactNode;
    position?: Position;
    autoClose?: boolean;
    closeHandler?: FunctionCallback;
}
export declare const IDropdownMenuPropsType: {
    children: import("prop-types").Requireable<import("prop-types").ReactNodeLike>;
    position: import("prop-types").Requireable<"before" | "after">;
    closeHandler: import("prop-types").Requireable<(...args: any[]) => any>;
    autoClose: import("prop-types").Requireable<boolean>;
};
