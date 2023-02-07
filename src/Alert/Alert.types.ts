import {
	ColorScheme,
	Directions,
	DirectionsArray,
	FunctionCallback,
	Layouts,
	LayoutsArray,
	Sizes,
	SizesArray,
	Themes,
	ThemesArray
} from '../types/Common.types';
import {ReactNode} from 'react';
import {bool, func, oneOf, shape, string} from "prop-types";

export const VariantsArray = ['default', 'outline', 'note'] as const;
export type Variants = typeof VariantsArray[number];


export const propTypes = {
	dismiss: bool,
	onClose: func,
	direction: oneOf<Directions>(DirectionsArray),
	theme: oneOf<Themes>(ThemesArray),
	colorScheme: shape({
		background: string.isRequired,
		backgroundColor: string.isRequired,
		color: string.isRequired,
	}),
	variant: oneOf<Variants>(VariantsArray),
	layout: oneOf<Layouts>(LayoutsArray),
	size: oneOf<Sizes>(SizesArray),
};

export const defaultProps = {
	colorScheme: null,
	theme: 'primary' as Themes,
	direction: 'left' as Directions,
	variant: 'default' as Variants,
	layout: 'default' as Layouts,
	size: 'md' as Sizes,
};


export interface IAlertProps {
	children: ReactNode,
	dismiss?: boolean,
	direction?: Directions,
	theme?: Themes,
	colorScheme?: ColorScheme,
	variant?: Variants,
	layout?: Layouts,
	size?: Sizes,
	onClose?: FunctionCallback
}
