import React from 'react';
import {ColorScheme, Layouts, LayoutsArray, Sizes, SizesArray, Themes, ThemesArray,} from './common';
import PropTypes from "prop-types";

export const VariantsArray = ["default", "separate", "breadcrumb", "float"] as const;
export type Variants = typeof VariantsArray[number];

export const propTypes = {
	variant: PropTypes.oneOf<Variants>(VariantsArray),
	size: PropTypes.oneOf<Sizes>(SizesArray),
	style: PropTypes.object,
	theme: PropTypes.oneOf<Themes>(ThemesArray),
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
	size: 'md' as Sizes,
	className: '' as string,
	variants: undefined
};

export interface IPaginationProps {
	children: React.ReactNode;
	style?: React.CSSProperties;
	theme?: Themes;
	colorScheme?: ColorScheme;
	variant?: Variants;
	layout?: Layouts;
	size?: Sizes;
	className?: string;

	[x: string]: any;
}

export interface IPaginationItemProps {
	children: React.ReactNode;
	style?: React.CSSProperties;
	variant?: Variants;
	active?: boolean;
	className?: string;
}


export const paginationItemPropTypes = {
	variant: PropTypes.oneOf<Variants>(VariantsArray),
	style: PropTypes.object,
	className: PropTypes.string,
	active: PropTypes.bool,
};

export const paginationItemDefaultProps = {
	className: '' as string,
	active: false,
	variant: 'default' as Variants,
};
