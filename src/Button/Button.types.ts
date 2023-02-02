import React from 'react';
import {
	ColorScheme,
	Layouts,
	LayoutsArray,
	Sizes,
	SizesArray,
	Themes,
	ThemesArray,
	Variants,
	VariantsArray
} from '../types/Common.types';
import PropTypes from "prop-types";

export const LoadingDirectionsArray = ['before', 'after'] as const;
export type LoadingDirections = typeof LoadingDirectionsArray[number];

export const LoadingStylesArray = ['spin', 'grow'] as const;
export type LoadingStyles = typeof LoadingStylesArray[number];

export const DirectionsArray = ['horizontal', 'vertical'] as const;
export type Directions = typeof DirectionsArray[number];

export const ButtonTypeArray = ['button', 'reset', 'submit'] as const;
export type ButtonType = typeof ButtonTypeArray[number];

export const propTypes = {
	variant: PropTypes.oneOf<Variants>(VariantsArray),
	size: PropTypes.oneOf<Sizes>(SizesArray),
	disabled: PropTypes.bool,
	type: PropTypes.oneOf(ButtonTypeArray),
	style: PropTypes.object,
	theme: PropTypes.oneOf<Themes>(ThemesArray),
	hideTextOnLoading: PropTypes.bool,
	loading: PropTypes.bool,
	fullwidth: PropTypes.bool,
	className: PropTypes.string,
	colorScheme: PropTypes.shape({
		background: PropTypes.string.isRequired,
		backgroundColor: PropTypes.string.isRequired,
		color: PropTypes.string.isRequired,
	}),
	loadingDirection: PropTypes.oneOf<LoadingDirections>(LoadingDirectionsArray),
	layout: PropTypes.oneOf<Layouts>(LayoutsArray),
	loadingStyle: PropTypes.oneOf<LoadingStyles>(LoadingStylesArray),
};

export const defaultProps = {
	type: 'button' as ButtonType,
	colorScheme: null,
	theme: 'primary' as Themes,
	variant: 'default' as Variants,
	layout: 'default' as Layouts,
	loadingDirection: 'before' as LoadingDirections,
	loadingStyle: 'spin' as LoadingStyles,
	size: 'md' as Sizes,
	className: '' as string,
	fullwidth: false,
	prefix: undefined,
	suffix: undefined,
};

export interface IButtonProps {
	children: React.ReactNode;
	type?: ButtonType;
	style?: React.CSSProperties;
	theme?: Themes;
	hideTextOnLoading?: boolean;
	fullwidth?: boolean;
	colorScheme?: ColorScheme;
	loadingDirection?: LoadingDirections;
	variant?: Variants;
	layout?: Layouts;
	size?: Sizes;
	loadingStyle?: LoadingStyles;
	disabled?: boolean;
	loading?: boolean;
	prefix?: React.ReactNode | undefined;
	suffix?: React.ReactNode | undefined;
	className?: string;

	[x: string]: any;
}
