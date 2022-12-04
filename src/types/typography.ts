import { CSSStyle } from './common';
import React from 'react';

export type TypographyAsElements = 'span' | 'p' | 'div' | 'i' | 'b' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
export type TypographyWeights = 'medium' | 'light' | 'bold'
export type TypographyVariants = 'text' | 'subtitle' | 'subheading' | 'caption' | 'description' | 'code'

export interface ITypographyProps {
    children: React.ReactNode,
    as: TypographyAsElements,
    weight: TypographyWeights,
    variant: TypographyVariants,
    style: CSSStyle,
    className: string,
    fontSize: string | number,
    fontWeight: string | number,
}