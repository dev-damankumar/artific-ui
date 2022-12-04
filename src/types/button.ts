import React from 'react';
import { ColorScheme, Layouts, Sizes, Themes, Variants } from './common';

export type LoadingDirections = 'before' | 'after';
export type LoadingStyles = 'spin' | 'grow';
export type Directions = 'horizontal' | 'vertical';

export interface IButtonProps {
    children: React.ReactNode,
    type: 'reset' | 'button' | 'submit';
    style?: React.CSSProperties;
    theme?: Themes;
    hideTextOnLoading?: boolean;
    colorScheme?: ColorScheme,
    loadingDirection?: LoadingDirections;
    variant?: Variants;
    layout?: Layouts;
    size?: Sizes;
    loadingStyle?: LoadingStyles;
    variants?: Variants[];
    disabled?: boolean;
    loading?: boolean;
    prefix?: boolean | null,
    suffix?: boolean | null,
    className?: string,

    [x: string]: any,
}
