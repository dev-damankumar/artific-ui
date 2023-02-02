import {ColorScheme, CSSStyle, Themes, ThemesArray} from './common.types';
import React from 'react';
import PropTypes from "prop-types";


export const TypographyAsElementsArray = ['span', 'p', 'div', 'i', 'b', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;
export type TypographyAsElements = typeof TypographyAsElementsArray[number];

export const TypographyWeightsArray = ['medium', 'light', 'bold'] as const;
export type TypographyWeights = typeof TypographyWeightsArray[number];

export const TypographyVariantsArray = ['text', 'subtitle', 'heading', 'caption', 'description', 'code', 'highlight', 'abbr', 'pre', 'kbd'] as const;
export type TypographyVariants = typeof TypographyVariantsArray[number];


export const propTypes = {
	variant: PropTypes.oneOf<TypographyVariants>(TypographyVariantsArray),
	as: PropTypes.oneOf<TypographyAsElements>(TypographyAsElementsArray),
	weight: PropTypes.oneOf<TypographyWeights>(TypographyWeightsArray),
	fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	fontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	style: PropTypes.object,
	theme: PropTypes.oneOf<Themes>(ThemesArray),
	className: PropTypes.string,
	colorScheme: PropTypes.shape({
		background: PropTypes.string.isRequired,
		backgroundColor: PropTypes.string.isRequired,
		color: PropTypes.string.isRequired,
	}),
};

export const defaultProps = {
	as: 'p' as TypographyAsElements,
	weight: 'medium' as TypographyWeights,
	variant: 'text' as TypographyVariants,
	theme: 'default' as Themes,
	colorScheme: null,
	className: '' as string,
};

export interface ITypographyProps {
	children?: React.ReactNode,
	as?: TypographyAsElements,
	weight?: TypographyWeights,
	variant?: TypographyVariants,
	style?: CSSStyle,
	className?: string,
	fontSize?: string | number,
	fontWeight?: string | number,
	theme?: Themes;
	colorScheme?: ColorScheme;
}
