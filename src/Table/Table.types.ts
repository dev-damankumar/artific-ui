import React from 'react';
import {ColorScheme, Layouts, LayoutsArray, Sizes, SizesArray, Themes, ThemesArray,} from '../types/Common.types';
import PropTypes from "prop-types";

export const VariantsArray = ["default", "borderless", "striped", "outline"] as const;
export type Variants = typeof VariantsArray[number];

export const propTypes = {
	theme: PropTypes.oneOf<Themes>(ThemesArray),
	layout: PropTypes.oneOf<Layouts>(LayoutsArray),
	variant: PropTypes.oneOf<Variants>(VariantsArray),
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
	variants: undefined
};

export interface ITableProps {
	children?: React.ReactNode;
	style?: React.CSSProperties;
	theme?: Themes;
	colorScheme?: ColorScheme;
	variant?: Variants;
	layout?: Layouts;
	size?: Sizes;
	className?: string;

	[x: string]: any;
}
