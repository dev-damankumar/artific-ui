import {
	ColorScheme,
	LayoutDirections,
	LayoutDirectionsArray,
	Sizes,
	SizesArray,
	Themes,
	ThemesArray
} from './common.types';
import React from 'react';
import PropTypes from "prop-types";

export const VariantsArray = ['default', 'striped', 'separate', 'borderless', 'bordered'] as const;
export type Variants = typeof VariantsArray[number];

export const LayoutsArray = ['default', 'rounded', 'no-radius', 'pill'] as const;
export type Layouts = typeof LayoutsArray[number];

export const propTypes = {
	variant: PropTypes.oneOf<Variants>(VariantsArray),
	theme: PropTypes.oneOf<Themes>(ThemesArray),
	layout: PropTypes.oneOf<Layouts>(LayoutsArray),
	direction: PropTypes.oneOf<LayoutDirections>(LayoutDirectionsArray),
	size: PropTypes.oneOf<Sizes>(SizesArray),
	colorScheme: PropTypes.shape({
		background: PropTypes.string.isRequired,
		backgroundColor: PropTypes.string.isRequired,
		color: PropTypes.string.isRequired,
	}),
};

export const defaultPropTypes = {
	theme: 'primary' as Themes,
	variant: 'default' as Variants,
	layout: 'default' as Layouts,
	size: 'md' as Sizes,
};

export interface IListProps {
	children: React.ReactNode,
	theme?: Themes,
	variant?: Variants,
	layout?: Layouts,
	colorScheme?: ColorScheme,
	direction?: LayoutDirections,
	size?: Sizes,
}

export interface IListItemProps {
	children: React.ReactNode,
	theme?: Themes,
	prefix?: React.ReactHTMLElement<any>,
	suffix?: React.ReactHTMLElement<any>,
	disabled?: boolean
}

export const ListItemPropTypes = {
	theme: PropTypes.oneOf<Themes>(ThemesArray),
	disabled: PropTypes.bool
};

export const ListItemDefaultPropTypes = {
	theme: 'primary' as Themes,
	disabled: false,
};
