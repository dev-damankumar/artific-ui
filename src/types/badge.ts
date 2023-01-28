import {ColorScheme, CSSStyle, Sizes, SizesArray, Themes, ThemesArray} from './common';
import PropTypes from "prop-types";

export const LayoutsArray = ['default', 'rounded', 'pill', 'no-radius', 'circular'] as const;
export type Layouts = typeof LayoutsArray[number];

export const VariantsArray = ['default', 'outline', 'dot'] as const;
export type Variants = typeof VariantsArray[number];


export const propTypes = {
	style: PropTypes.object,
	theme: PropTypes.oneOf<Themes>(ThemesArray),
	colorScheme: PropTypes.shape({
		background: PropTypes.string.isRequired,
		backgroundColor: PropTypes.string.isRequired,
		color: PropTypes.string.isRequired,
	}),
	className: PropTypes.string,
	title: PropTypes.string,
	variant: PropTypes.oneOf<Variants>(VariantsArray),
	layout: PropTypes.oneOf<Layouts>(LayoutsArray),
	size: PropTypes.oneOf<Sizes>(SizesArray),
};

export const defaultProps = {
	colorScheme: null,
	theme: 'primary' as Themes,
	variant: 'default' as Variants,
	layout: 'default' as Layouts,
	size: 'md' as Sizes,
	className: '' as string,
	title: '' as string,
};


export interface IBadgeProps {
	style?: CSSStyle,
	theme?: Themes,
	colorScheme?: ColorScheme,
	className?: string,
	title?: string,
	variant?: Variants,
	layout?: Layouts,
	size?: Sizes,

	[x: string]: any,
}
