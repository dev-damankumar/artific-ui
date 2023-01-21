import React from 'react';
import {ColorScheme, Sizes, SizesArray, Themes, ThemesArray} from './common';
import PropTypes from "prop-types";

// @ts-ignore
export const PercentAgeArray = Array.from(Array(100).keys()) as const;
export type PercentAge = typeof PercentAgeArray[number]
export const LabelStyleArray = ['default', 'inside', 'float'] as const;
export type LabelStyle = typeof LabelStyleArray[number]

export const VariantsArray = ["default", "striped", "outline", "fluid"] as const;
export type Variants = typeof VariantsArray[number];

export const LayoutsArray = ['default', 'rounded', 'pill', 'no-radius', 'line'] as const;
export type Layouts = typeof LayoutsArray[number];

export const propTypes = {
	variant: PropTypes.oneOf<Variants>(VariantsArray),
	size: PropTypes.oneOf<Sizes>(SizesArray),
	value: PropTypes.oneOf<PercentAge>(PercentAgeArray),
	values: PropTypes.arrayOf(PropTypes.number) || undefined,
	label: PropTypes.oneOf<LabelStyle>(LabelStyleArray),
	symbol: PropTypes.string,
	disabled: PropTypes.bool,
	style: PropTypes.object,
	theme: PropTypes.oneOf<Themes>(ThemesArray),
	loading: PropTypes.bool,
	circular: PropTypes.bool,
	barColors: PropTypes.arrayOf(PropTypes.string.isRequired) || undefined,
	className: PropTypes.string,
	colorScheme: PropTypes.shape({
		background: PropTypes.string.isRequired,
		backgroundColor: PropTypes.string.isRequired,
		color: PropTypes.string.isRequired,
	}),
	layout: PropTypes.oneOf<Layouts>(LayoutsArray),
};

export const defaultProps = {
	colorScheme: null,
	theme: 'primary' as Themes,
	variant: 'default' as Variants,
	layout: 'default' as Layouts,
	label: 'default' as LabelStyle,
	size: 'md' as Sizes,
	className: '' as string,
	barColors: ['primary'] as string[],
	value: 0,
	values: undefined as undefined,
	symbol: '%',
};

export interface IProgressProps {
	style?: React.CSSProperties;
	theme?: Themes;
	colorScheme?: ColorScheme;
	variant?: Variants;
	layout?: Layouts;
	label?: LabelStyle;
	size?: Sizes;
	disabled?: boolean;
	circular?: boolean;
	barColors?: string[];
	className?: string;
	value?: number;
	values?: (number | null | undefined)[];
	symbol?: string;

	[x: string]: any;
}
