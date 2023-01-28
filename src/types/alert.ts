import {
	ColorScheme,
	CSSStyle,
	Directions,
	DirectionsArray,
	Layouts,
	LayoutsArray,
	Sizes,
	SizesArray,
	Themes,
	ThemesArray
} from './common';
import React from 'react';
import PropTypes from "prop-types";


export const VariantsArray = ['default', 'outline', 'note'] as const;
export type Variants = typeof VariantsArray[number];


export const propTypes = {
	style: PropTypes.object,
	dismiss: PropTypes.bool,
	direction: PropTypes.oneOf<Directions>(DirectionsArray),
	theme: PropTypes.oneOf<Themes>(ThemesArray),
	colorScheme: PropTypes.shape({
		background: PropTypes.string.isRequired,
		backgroundColor: PropTypes.string.isRequired,
		color: PropTypes.string.isRequired,
	}),
	className: PropTypes.string,
	variant: PropTypes.oneOf<Variants>(VariantsArray),
	layout: PropTypes.oneOf<Layouts>(LayoutsArray),
	size: PropTypes.oneOf<Sizes>(SizesArray),
};

export const defaultProps = {
	colorScheme: null,
	theme: 'primary' as Themes,
	direction: 'left' as Directions,
	variant: 'default' as Variants,
	layout: 'default' as Layouts,
	size: 'md' as Sizes,
	className: '' as string,
};


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

	[x: string]: any,
}
