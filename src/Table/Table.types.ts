import {CSSProperties, ReactNode} from 'react';
import {ColorScheme, Layouts, LayoutsArray, Sizes, SizesArray, Themes, ThemesArray,} from '../types/Common.types';
import {oneOf, shape, string} from "prop-types";

export const VariantsArray = ["default", "borderless", "striped", "outline"] as const;
export type Variants = typeof VariantsArray[number];

export const propTypes = {
	theme: oneOf<Themes>(ThemesArray),
	layout: oneOf<Layouts>(LayoutsArray),
	variant: oneOf<Variants>(VariantsArray),
	size: oneOf<Sizes>(SizesArray),
	colorScheme: shape({
		background: string.isRequired,
		backgroundColor: string.isRequired,
		color: string.isRequired,
	}),
};

export const defaultProps = {
	colorScheme: null,
	theme: 'primary' as Themes,
	variant: 'default' as Variants,
	layout: 'default' as Layouts,
	size: 'md' as Sizes,
};

export interface ITableProps {
	children?: ReactNode;
	style?: CSSProperties;
	theme?: Themes;
	colorScheme?: ColorScheme;
	variant?: Variants;
	layout?: Layouts;
	size?: Sizes;
}
