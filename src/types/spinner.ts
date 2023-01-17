import {ColorScheme, CSSStyle, Directions, DirectionsArray, Sizes, SizesArray, Themes, ThemesArray} from './common';
import PropTypes from "prop-types";


export const VariantsArray = ['default', 'ring', 'dots', 'box', 'ripple'] as const;
export type Variants = typeof VariantsArray[number];


export const propTypes = {
	style: PropTypes.object,
	dismiss: PropTypes.bool,
	direction: PropTypes.oneOf<Directions>(DirectionsArray),
	theme: PropTypes.oneOf<Themes>(ThemesArray),
	colorScheme: PropTypes.shape({
		background: PropTypes.string.isRequired,
		backgroundColor: PropTypes.string.isRequired,
		color: PropTypes.string.isRequired,
	}),
	className: PropTypes.string,
	variant: PropTypes.oneOf<Variants>(VariantsArray),
	size: PropTypes.oneOf<Sizes>(SizesArray),
};

export const defaultProps = {
	colorScheme: null,
	theme: 'primary' as Themes,
	direction: 'left' as Directions,
	variant: 'default' as Variants,
	size: 'md' as Sizes,
	className: '' as string,
};


export interface ISpinnerProps {
	style?: CSSStyle,
	dismiss?: boolean,
	direction?: Directions,
	theme?: Themes,
	colorScheme?: ColorScheme,
	className?: string,
	variant?: Variants,
	size?: Sizes,

	[x: string]: any,
}
