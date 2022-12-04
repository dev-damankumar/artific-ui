import { LayoutDirections, Sizes, Themes } from './common';
import React from 'react';

export type Variants = 'default' | 'striped' | 'separate' | 'borderless' | 'bordered' | 'outlined';
export type Layouts = 'default' | 'rounded' | 'no-radius';

export interface IListProps {
    children: React.ReactNode,
    theme?: Themes,
    variant?: Variants,
    layout?: Layouts,
    direction?: LayoutDirections,
    size?: Sizes
}

export interface IListItemProps {
    children: React.ReactNode,
    theme?: Themes,
    prefix?: React.ReactHTMLElement<any>,
    suffix?: React.ReactHTMLElement<any>,
}