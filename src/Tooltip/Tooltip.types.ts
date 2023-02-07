import {ReactNode} from 'react';
import {ColorScheme, Layouts, LayoutsArray, Sizes, SizesArray, Themes, ThemesArray,} from '../types/Common.types';
import {oneOf, shape, string} from "prop-types";

export const PlacementArray = ["bottom", "bottom-start", "bottom-end", "top", "top-start", "top-end", "left", "left-start", "left-end", "right", "right-start", "right-end"] as const;
export type Placement = typeof PlacementArray[number];

export const VariantsArray = ["default", "arrow"] as const;
export type Variants = typeof VariantsArray[number];

export const propTypes = {
	theme: oneOf<Themes>(ThemesArray),
	layout: oneOf<Layouts>(LayoutsArray),
	variant: oneOf<Variants>(VariantsArray),
	placement: oneOf<Placement>(PlacementArray),
	size: oneOf<Sizes>(SizesArray),
	colorScheme: shape({
		background: string.isRequired,
		backgroundColor: string.isRequired,
		color: string.isRequired,
	}),
};

export interface ITooltipProps {
	children?: ReactNode;
	title: string | ReactNode;
	theme?: Themes;
	colorScheme?: ColorScheme;
	variant?: Variants;
	placement?: Placement;
	layout?: Layouts;
	size?: Sizes;
}
