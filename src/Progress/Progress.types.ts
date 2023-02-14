import {CSSProperties} from 'react';
import {ColorScheme, Sizes, SizesArray, Themes, ThemesArray} from '../types/Common.types';
import {arrayOf, bool, number, oneOf, shape, string} from "prop-types";

// @ts-ignore
export const PercentAgeArray = Array.from(Array(100).keys()) as const;
export type PercentAge = typeof PercentAgeArray[number]
export const LabelStyleArray = ['default', 'inside', 'float', 'none'] as const;
export type LabelStyle = typeof LabelStyleArray[number]

export const VariantsArray = ["default", "striped", "outline", "fluid"] as const;
export type Variants = typeof VariantsArray[number];

export const LayoutsArray = ['default', 'rounded', 'pill', 'no-radius', 'line'] as const;
export type Layouts = typeof LayoutsArray[number];

export const ProgressTypeArray = ['default', 'line', 'circular'] as const;
export type ProgressType = typeof ProgressTypeArray[number];

export const propTypes = {
	variant: oneOf<Variants>(VariantsArray),
	size: oneOf<Sizes>(SizesArray),
	value: oneOf<PercentAge>(PercentAgeArray),
	values: arrayOf(number) || undefined,
	label: oneOf<LabelStyle>(LabelStyleArray),
	symbol: string,
	disabled: bool,
	theme: oneOf<Themes>(ThemesArray),
	type: oneOf<ProgressType>(ProgressTypeArray),
	loading: bool,
	barColors: arrayOf(string.isRequired) || undefined,
	colorScheme: shape({
		background: string.isRequired,
		backgroundColor: string.isRequired,
		color: string.isRequired,
	}),
	layout: oneOf<Layouts>(LayoutsArray),
};


export interface IProgressProps {
	style?: CSSProperties;
	theme?: Themes;
	type?: ProgressType;
	colorScheme?: ColorScheme;
	variant?: Variants;
	layout?: Layouts;
	label?: LabelStyle;
	size?: Sizes;
	disabled?: boolean;
	barColors?: string[];
	value?: number;
	values?: (number | null | undefined)[];
	symbol?: string;
}
