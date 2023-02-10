import {
	ColorScheme,
	LayoutDirections,
	LayoutDirectionsArray,
	Sizes,
	SizesArray,
	Themes,
	ThemesArray
} from '../types/Common.types';
import {ReactNode} from 'react';
import {bool, oneOf, shape, string} from "prop-types";

export const VariantsArray = ['default', 'striped', 'separate', 'borderless', 'bordered'] as const;
export type Variants = typeof VariantsArray[number];

export const LayoutsArray = ['default', 'rounded', 'no-radius', 'pill'] as const;
export type Layouts = typeof LayoutsArray[number];

export const propTypes = {
	variant: oneOf<Variants>(VariantsArray),
	theme: oneOf<Themes>(ThemesArray),
	layout: oneOf<Layouts>(LayoutsArray),
	direction: oneOf<LayoutDirections>(LayoutDirectionsArray),
	size: oneOf<Sizes>(SizesArray),
	colorScheme: shape({
		background: string.isRequired,
		backgroundColor: string.isRequired,
		color: string.isRequired,
	}),
};

export interface IListProps {
	children: ReactNode,
	theme?: Themes,
	variant?: Variants,
	layout?: Layouts,
	colorScheme?: ColorScheme,
	direction?: LayoutDirections,
	size?: Sizes,
}

export interface IListItemProps {
	children: ReactNode,
	theme?: Themes,
	prefix?: ReactNode,
	suffix?: ReactNode,
	disabled?: boolean
}

export const ListItemPropTypes = {
	theme: oneOf<Themes>(ThemesArray),
	disabled: bool
};
