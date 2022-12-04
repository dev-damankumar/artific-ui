import { Layouts, Themes } from './common';
import React from 'react';

export type Variants = 'default' | 'fill' | 'outline' | 'fill-with-border'
export type Directions = 'row' | 'column';

export interface ICardProps {
    children: React.ReactNode,
    direction?: Directions,
    theme?: Themes,
    layout?: Layouts,
    variant?: Variants,
    className?: string
}

export interface ICardImageProps {
    layout?: Layouts,
    className?: string,
    src: string,
    alt?: string,
}