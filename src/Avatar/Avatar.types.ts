import {ColorScheme, Layouts, LayoutsArray, Sizes, SizesArray, Themes, ThemesArray} from '../types/Common.types';
import PropTypes from "prop-types";


export const VariantsArray = ['default', 'outline', 'fluid'] as const;
export type Variants = typeof VariantsArray[number];


export const propTypes = {
	theme: PropTypes.oneOf<Themes>(ThemesArray),
	colorScheme: PropTypes.shape({
		background: PropTypes.string.isRequired,
		backgroundColor: PropTypes.string.isRequired,
		color: PropTypes.string.isRequired,
	}),
	src: PropTypes.string,
	alt: PropTypes.string,
	title: PropTypes.string,
	variant: PropTypes.oneOf<Variants>(VariantsArray),
	layout: PropTypes.oneOf<Layouts>(LayoutsArray),
	size: PropTypes.oneOf<Sizes>(SizesArray),
};

export interface IAvatarProps {
	theme?: Themes,
	colorScheme?: ColorScheme,
	src?: string,
	alt?: string,
	title?: string,
	variant?: Variants,
	layout?: Layouts,
	size?: Sizes,
}
