import {ColorScheme, CSSStyle, Layouts, LayoutsArray, Sizes, SizesArray, Themes, ThemesArray} from './common';
import PropTypes from "prop-types";


export const VariantsArray = ['default', 'outline', 'fluid'] as const;
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
	src: PropTypes.string,
	alt: PropTypes.string,
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
	src: '' as string,
	title: '' as string,
	alt: '' as string,
};


export interface IAvatarProps {
	style?: CSSStyle,
	theme?: Themes,
	colorScheme?: ColorScheme,
	className?: string,
	src?: string,
	alt?: string,
	title?: string,
	variant?: Variants,
	layout?: Layouts,
	size?: Sizes,

	[x: string]: any,
}
