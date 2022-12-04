import { ColorScheme, CSSStyle, Directions, Layouts, Sizes, Themes } from './common';
import React from 'react';

export type Variants = 'default' | 'text' | 'outline' | 'note';

export interface IAlertProps {
    children: React.ReactNode,
    style?: CSSStyle,
    dismiss?: boolean,
    direction?: Directions,
    theme?: Themes,
    colorScheme?: ColorScheme,
    className?: string,
    variant?: Variants,
    layout?: Layouts,
    size?: Sizes,
    variants?: Variants[],

    [x: string]: any,
}
