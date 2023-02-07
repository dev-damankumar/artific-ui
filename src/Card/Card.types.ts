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
} from '../types/Common.types';
import {ReactNode} from 'react';
import {node, oneOf, shape, string} from "prop-types";

export const VariantsArray = ['default', 'fill', 'outline', 'fill-with-border'] as const;
export type Variants = typeof VariantsArray[number];

export const CardLayoutsArray = ['default', 'extended', 'rounded', 'no-radius'] as const;
export type CardLayouts = typeof CardLayoutsArray[number];

export interface ICardProps {
	children: ReactNode;
	direction?: LayoutDirections;
	theme?: Themes;
	layout?: CardLayouts;
	variant?: Variants;
	colorScheme?: ColorScheme;
	size?: Sizes;
}

export const propTypes = {
	children: node,
	direction: oneOf(LayoutDirectionsArray),
	theme: oneOf(ThemesArray),
	variant: oneOf(VariantsArray),
	layout: oneOf(CardLayoutsArray),
	size: oneOf<Sizes>(SizesArray),
	colorScheme: shape({
		background: string.isRequired,
		backgroundColor: string.isRequired,
		color: string.isRequired,
	}),
}

export interface ICardImageProps {
	layout?: CardLayouts | Layouts,
	src: string,
	alt?: string,
	size?: Sizes,
	direction?: LayoutDirections;
}

export const ICardImagePropsTypes = {
	layout: oneOf([...LayoutsArray, ...CardLayoutsArray]),
	alt: string,
	src: string.isRequired,
	size: oneOf<Sizes>(SizesArray),
	direction: oneOf(LayoutDirectionsArray),
}
