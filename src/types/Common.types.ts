import React from 'react';
import {ComponentsArray} from "../utils/constants/components";

export const ISizes: any = {
	xs: 'extra-small',
	sm: 'small',
	lg: 'large',
	xl: 'extra-large'
};

export const IModalSizesArray = ['', 'extra-small-content', 'full', 'expanded', 'small-content', 'large-content', 'extra-large-content', 'full-width', 'full-height'] as const;
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
export type CreateArrayWithLengthX<LENGTH extends number,
	ACC extends unknown[] = [],
	> = ACC['length'] extends LENGTH
	? ACC
	: CreateArrayWithLengthX<LENGTH, [...ACC, 1]>

export type NumericRange<START_ARR extends number[],
	END extends number,
	ACC extends number = never>
	= START_ARR['length'] extends END
	? ACC | END
	: NumericRange<[...START_ARR, 1], END, ACC | START_ARR['length']>


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
	backgroundColor: string;
	color: string;
} | null
export type IDiv = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
export type IButton = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
export type IImage = React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>
export type ILink = React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
export type IUl = React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>
export type ILi = React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>
export type ITbody = React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>
export type ITd = React.DetailedHTMLProps<React.TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>
export type ITh = React.DetailedHTMLProps<React.ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>
export type ITr = React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>
export type IAnyElement = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>


export interface CSSStyle extends React.CSSProperties {
}

export type FunctionCallback = (...args: any[]) => any;


export const ComponentsTypeArray = ComponentsArray;
export type ComponentsType = typeof ComponentsTypeArray[number];
