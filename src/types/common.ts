import React from 'react';

export const ISizes: any = {
    xs: 'extra-small',
    sm: 'small',
    lg: 'large',
    xl: 'extra-large'
};

export type Themes = 'primary' | 'dark' | 'light';
export type Variants = 'default' | 'text' | 'outline';
export type Layouts = 'default' | 'rounded' | 'pill' | 'no-radius';
export type Sizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type Directions = 'top' | 'bottom' | 'right' | 'left'
export type LayoutDirections = 'row' | 'column'

export type ColorScheme = {
    background: string;
    backgroundColor: string;
    color: string;
} | null


export interface CSSStyle extends React.CSSProperties {
}

export type FunctionCallback = (...args: any[]) => any;
