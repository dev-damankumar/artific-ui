import React from 'react';
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
import PropTypes from "prop-types";

export const VariantsArray = ['default', 'separate', 'outlined', 'attached'] as const;
export type Variants = typeof VariantsArray[number];

export const IndicatorDirectionArray = ['start', 'end'] as const;
export type IndicatorDirection = typeof IndicatorDirectionArray[number];

export interface IAccordionProps {
	children: React.ReactNode,
	theme?: Themes,
	variant?: Variants,
	layout?: Layouts,
	indicatorPosition?: IndicatorDirection,
	size?: Sizes,
	colorScheme?: ColorScheme;
}

export const propTypes = {
	children: PropTypes.node,
	theme: PropTypes.oneOf(ThemesArray),
	variant: PropTypes.oneOf(VariantsArray),
	layout: PropTypes.oneOf(LayoutsArray),
	indicatorPosition: PropTypes.oneOf(IndicatorDirectionArray),
	size: PropTypes.oneOf(SizesArray),
	colorScheme: PropTypes.shape({
		background: PropTypes.string.isRequired,
		backgroundColor: PropTypes.string.isRequired,
		color: PropTypes.string.isRequired,
	}),
}

export interface IAccordionPanel {
	children: React.ReactNode,
	theme?: Themes;
}

export const IAccordionPanelPropTypes = {
	children: PropTypes.node,
	theme: PropTypes.oneOf(ThemesArray)
}


export interface IAccordionHeader {
	children: React.ReactNode,
	theme?: Themes,
	onToggle?: FunctionCallback,
	prefix?: React.ReactNode | undefined,
	suffix?: React.ReactNode | undefined
}

export const IAccordionHeaderPropTypes = {
	children: PropTypes.node,
	theme: PropTypes.oneOf(ThemesArray),
	onToggle: PropTypes.func,
}


export interface IAccordionBody {
	children: React.ReactNode,
	open?: boolean,
}

export const IAccordionBodyPropTypes = {
	children: PropTypes.node,
	open: PropTypes.bool,
}

