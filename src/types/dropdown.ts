import { CSSStyle, Directions, FunctionCallback, Sizes } from './common';
import React from 'react';

export type Variants = 'drawer' | 'fluid';
export type Layouts = 'rounded' | 'default' | 'no-radius' | 'floating'
export type Position = 'before' | 'after'

export interface IDropdownProps {
    children: React.ReactNode,
    style?: CSSStyle,
    className?: string,
    multiple?: boolean,
    autoClose: boolean,
    fullwidth?: boolean,
    variants?: Variants[],
    name: string,
    position?: Directions,
    layout?: Layouts,
    size?: Sizes,
    variant?: Variants,
    disabled?: boolean,
    value?: string,
    placeholder?: string,
    defaultValue?: string,
    id?: string,
    menuClass?: string,
    menuStyle?: object,
    dropdownButtonStyle?: object,
    dropdownButtonClassName?: string
}

export interface IMenuItemProps {
    style?: CSSStyle,
    className?: string,
    onSelect?: FunctionCallback,
    closeHandler?: FunctionCallback,
    autoClose?: boolean,
    children: React.ReactNode,

    [key: string]: any

}

export interface IDropdownMenu {
    children: React.ReactNode,
    className?: string,
    style?: object,
    position?: Position,
    autoClose?: boolean,
    closeHandler?: FunctionCallback,

    [key: string]: any
}

export interface IDropdownToggle {
    children: React.ReactNode,
    className?: string,
    style?: object,
    toggleHandler?: FunctionCallback,
}