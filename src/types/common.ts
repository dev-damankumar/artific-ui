import React from 'react';

export const ISizes: any = {
	xs: 'extra-small',
	sm: 'small',
	lg: 'large',
	xl: 'extra-large'
};


export const VariantsArray = ["default", "text", "outline"] as const;
export type Variants = typeof VariantsArray[number];

export const ThemesArray = ["primary", "dark", "light"] as const;
export type Themes = typeof ThemesArray[number];


export const LayoutsArray = ['default', 'rounded', 'pill', 'no-radius'] as const;
export type Layouts = typeof LayoutsArray[number];

export const SizesArray = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
export type Sizes = typeof SizesArray[number];

export const DirectionsArray = ['top', 'bottom', 'right', 'left'] as const;
export type Directions = typeof DirectionsArray[number];


export const LayoutDirectionsArray = ['row', 'column'] as const;
export type LayoutDirections = typeof LayoutDirectionsArray[number];

export type ColorScheme = {
	background: string;
	backgroundColor?: string;
	color: string;
} | null


export interface CSSStyle extends React.CSSProperties {
}

export type FunctionCallback = (...args: any[]) => any;
