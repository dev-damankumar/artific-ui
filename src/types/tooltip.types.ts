import React from 'react';
import {ColorScheme, Layouts, LayoutsArray, Sizes, SizesArray, Themes, ThemesArray,} from './common.types';
import PropTypes from "prop-types";

export const PlacementArray = ["bottom", "bottom-start", "bottom-end", "top", "top-start", "top-end", "left", "left-start", "left-end", "right", "right-start", "right-end"] as const;
export type Placement = typeof PlacementArray[number];

export const VariantsArray = ["default", "arrow"] as const;
export type Variants = typeof VariantsArray[number];

export const propTypes = {
	theme: PropTypes.oneOf<Themes>(ThemesArray),
	layout: PropTypes.oneOf<Layouts>(LayoutsArray),
	variant: PropTypes.oneOf<Variants>(VariantsArray),
	placement: PropTypes.oneOf<Placement>(PlacementArray),
	size: PropTypes.oneOf<Sizes>(SizesArray),
	style: PropTypes.object,
	className: PropTypes.string,
	colorScheme: PropTypes.shape({
		background: PropTypes.string.isRequired,
		backgroundColor: PropTypes.string.isRequired,
		color: PropTypes.string.isRequired,
	}),
};

export const defaultProps = {
	colorScheme: null,
	theme: 'primary' as Themes,
	variant: 'default' as Variants,
	layout: 'default' as Layouts,
	size: 'md' as Sizes,
	className: '' as string,
	placement: 'bottom' as Placement,
};

export interface ITooltipProps {
	children?: React.ReactNode;
	title: string | React.ReactNode;
	style?: React.CSSProperties;
	theme?: Themes;
	colorScheme?: ColorScheme;
	variant?: Variants;
	placement?: Placement;
	layout?: Layouts;
	size?: Sizes;
	className?: string;

	[x: string]: any;
}
