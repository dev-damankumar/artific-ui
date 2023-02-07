import {CSSProperties, ReactNode} from 'react';
import {ColorScheme, Layouts, LayoutsArray, Sizes, SizesArray, Themes, ThemesArray,} from '../types/Common.types';
import {bool, oneOf, shape, string} from "prop-types";

export const VariantsArray = ["default", "separate", "breadcrumb", "float"] as const;
export type Variants = typeof VariantsArray[number];

export const propTypes = {
	variant: oneOf<Variants>(VariantsArray),
	size: oneOf<Sizes>(SizesArray),
	theme: oneOf<Themes>(ThemesArray),
	colorScheme: shape({
		background: string.isRequired,
		backgroundColor: string.isRequired,
		color: string.isRequired,
	}),
	layout: oneOf<Layouts>(LayoutsArray),
};

export interface IPaginationProps {
	children: ReactNode;
	style?: CSSProperties;
	theme?: Themes;
	colorScheme?: ColorScheme;
	variant?: Variants;
	layout?: Layouts;
	size?: Sizes;
}

export interface IPaginationItemProps {
	children: ReactNode;
	style?: CSSProperties;
	variant?: Variants;
	active?: boolean;
}


export const paginationItemPropTypes = {
	variant: oneOf<Variants>(VariantsArray),
	active: bool,
};

