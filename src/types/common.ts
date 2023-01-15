import React from 'react';

export const ISizes: any = {
	xs: 'extra-small',
	sm: 'small',
	lg: 'large',
	xl: 'extra-large'
};

export const IModalSizesArray = ['extra-small-content', 'full', 'expanded', 'small-content', 'large-content', 'extra-large-content', 'full-width', 'full-height'] as const;
export type IModalSizesType = typeof IModalSizesArray[number];
export const IModalSizes: any = {
	xs: 'extra-small-content',
	sm: 'small-content',
	lg: 'large-content',
	xl: 'extra-large-content',
	'full-width': 'full-width',
	'full-height': 'full-height',
	'full': 'full',
	'expanded': 'expanded'
};


export const VariantsArray = ["default", "text", "outline"] as const;
export type Variants = typeof VariantsArray[number];

export const ThemesArray = ["primary", "secondary", "dark", "light", "default"] as const;
export type Themes = typeof ThemesArray[number];


export const LayoutsArray = ['default', 'rounded', 'pill', 'no-radius'] as const;
export type Layouts = typeof LayoutsArray[number];

export const SizesArray = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
export type Sizes = typeof SizesArray[number];

export const DirectionsArray = ['top', 'bottom', 'right', 'left'] as const;
export type Directions = typeof DirectionsArray[number];


export const LayoutDirectionsArray = ['row', 'column'] as const;
export type LayoutDirections = typeof LayoutDirectionsArray[number];


export const AxisArray = ['horizontal', 'vertical'] as const;
export type Axis = typeof AxisArray[number];


export type ColorScheme = {
	background: string;
	backgroundColor?: string;
	color: string;
} | null


export interface CSSStyle extends React.CSSProperties {
}

export type FunctionCallback = (...args: any[]) => any;
