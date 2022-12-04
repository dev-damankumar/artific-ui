import React from 'react';
import { CSSStyle, FunctionCallback, Layouts, Sizes, Themes } from './common';

export type Variants = 'default' | 'separate' | 'bordered' | 'outlined' | 'attached';
export type IndicatorDirection = 'start' | 'end';

export interface IAccordionProps {
    children: React.ReactNode,
    theme?: Themes,
    variant?: Variants,
    layout?: Layouts,
    indicatorDirection?: IndicatorDirection,
    size?: Sizes,
}


export interface IAccordionPanel {
    children: React.ReactNode,
    theme?: Themes;
}

export interface IAccordionHeader {
    children: React.ReactNode,
    theme?: Themes,
    onToggle?: FunctionCallback,
    prefix?: React.ReactHTMLElement<any>,
    suffix?: React.ReactHTMLElement<any>
}

export interface IAccordionBody {
    children: React.ReactNode,
    open?: boolean,
    style?: CSSStyle,
    className?: string
}