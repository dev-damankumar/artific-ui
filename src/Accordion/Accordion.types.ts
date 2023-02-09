import {ReactNode} from 'react';
import {
	ColorScheme,
	FunctionCallback,
	Layouts,
	LayoutsArray,
	Sizes,
	SizesArray,
	Themes,
	ThemesArray
} from '../types/Common.types';
import {bool, func, node, oneOf, shape, string} from "prop-types";

export const VariantsArray = ['default', 'separate', 'outline', 'attached'] as const;
export type Variants = typeof VariantsArray[number];

export const IndicatorDirectionArray = ['start', 'end'] as const;
export type IndicatorDirection = typeof IndicatorDirectionArray[number];

export interface IAccordionProps {
	children: ReactNode,
	theme?: Themes,
	variant?: Variants,
	layout?: Layouts,
	indicatorPosition?: IndicatorDirection,
	size?: Sizes,
	colorScheme?: ColorScheme;
}

export const propTypes = {
	children: node,
	theme: oneOf(ThemesArray),
	variant: oneOf(VariantsArray),
	layout: oneOf(LayoutsArray),
	indicatorPosition: oneOf(IndicatorDirectionArray),
	size: oneOf(SizesArray),
	colorScheme: shape({
		background: string.isRequired,
		backgroundColor: string.isRequired,
		color: string.isRequired,
	}),
}

export interface IAccordionPanel {
	children: ReactNode,
	theme?: Themes;
	disabled?: boolean;
}

export const IAccordionPanelPropTypes = {
	children: node,
	theme: oneOf(ThemesArray),
	disabled: bool,
}


export interface IAccordionHeader {
	children: ReactNode,
	theme?: Themes,
	onToggle?: FunctionCallback,
	prefix?: ReactNode | undefined,
	suffix?: ReactNode | undefined
}

export const IAccordionHeaderPropTypes = {
	children: node,
	theme: oneOf(ThemesArray),
	onToggle: func,
}


export interface IAccordionBody {
	children: ReactNode,
	open?: boolean,
	disabled?: boolean,
}

export const IAccordionBodyPropTypes = {
	children: node,
	open: bool,
	disabled: bool,
}

