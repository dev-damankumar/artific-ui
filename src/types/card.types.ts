import {
	ColorScheme,
	LayoutDirections,
	LayoutDirectionsArray,
	Layouts,
	LayoutsArray,
	Sizes,
	SizesArray,
	Themes,
	ThemesArray
} from './common.types';
import React from 'react';
import PropTypes from "prop-types";


export const VariantsArray = ['default', 'fill', 'outline', 'fill-with-border'] as const;
export type Variants = typeof VariantsArray[number];


export const CardLayoutsArray = ['default', 'extended', 'rounded', 'no-radius'] as const;
export type CardLayouts = typeof CardLayoutsArray[number];

export interface ICardProps {
	children: React.ReactNode;
	direction?: LayoutDirections;
	theme?: Themes;
	layout?: CardLayouts;
	variant?: Variants;
	className?: string;
	colorScheme?: ColorScheme;
	size?: Sizes;
}

export const propTypes = {
	children: PropTypes.node,
	direction: PropTypes.oneOf(LayoutDirectionsArray),
	theme: PropTypes.oneOf(ThemesArray),
	variant: PropTypes.oneOf(VariantsArray),
	layout: PropTypes.oneOf(CardLayoutsArray),
	className: PropTypes.string,
	size: PropTypes.oneOf<Sizes>(SizesArray),
	colorScheme: PropTypes.shape({
		background: PropTypes.string.isRequired,
		backgroundColor: PropTypes.string.isRequired,
		color: PropTypes.string.isRequired,
	}),
}

export const defaultProps = {
	layout: 'default' as CardLayouts,
	theme: 'default' as Themes,
	variant: 'default' as Variants,
	direction: 'column' as LayoutDirections,
	size: 'md' as Sizes,
	className: '',
	colorScheme: null,
}


export interface ICardImageProps {
	layout?: CardLayouts | Layouts,
	className?: string,
	src: string,
	alt?: string,
	size?: Sizes,
	direction?: LayoutDirections;
}

export const ICardImagePropsTypes = {
	layout: PropTypes.oneOf([...LayoutsArray, ...CardLayoutsArray]),
	className: PropTypes.string,
	alt: PropTypes.string,
	src: PropTypes.string.isRequired,
	size: PropTypes.oneOf<Sizes>(SizesArray),
	direction: PropTypes.oneOf(LayoutDirectionsArray),
}

export const ICardImageDefaultProps = {
	size: 'md' as Sizes,
}
