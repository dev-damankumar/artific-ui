import React from 'react';
import {CSSStyle, FunctionCallback, Layouts, LayoutsArray, Sizes, SizesArray, Themes, ThemesArray} from './common';
import PropTypes from "prop-types";

export const VariantsArray = ['default', 'separate', 'bordered', 'outlined', 'attached'] as const;
export type Variants = typeof VariantsArray[number];

export const IndicatorDirectionArray = ['start', 'end'] as const;
export type IndicatorDirection = typeof IndicatorDirectionArray[number];

export interface IAccordionProps {
	children: React.ReactNode,
	theme?: Themes,
	variant?: Variants,
	layout?: Layouts,
	indicatorDirection?: IndicatorDirection,
	size?: Sizes,
}

export const propTypes = {
	children: PropTypes.node,
	theme: PropTypes.oneOf(ThemesArray),
	variant: PropTypes.oneOf(VariantsArray),
	layout: PropTypes.oneOf(LayoutsArray),
	indicatorDirection: PropTypes.oneOf(IndicatorDirectionArray),
	size: PropTypes.oneOf(SizesArray),
}

export const defaultProps = {
	theme: 'default' as Themes,
	variant: 'default' as Variants,
	size: 'md' as Sizes,
	layout: 'default' as Layouts,
	indicatorDirection: 'end' as IndicatorDirection
}

export interface IAccordionPanel {
	children: React.ReactNode,
	theme?: Themes;
}

export const IAccordionPanelPropTypes = {
	children: PropTypes.node,
	theme: PropTypes.oneOf(ThemesArray)
}

export const IAccordionPanelDefaultPropTypes = {}

export interface IAccordionHeader {
	children: React.ReactNode,
	theme?: Themes,
	onToggle?: FunctionCallback,
	prefix?: React.ReactNode,
	suffix?: React.ReactNode
}

export const IAccordionHeaderPropTypes = {
	children: PropTypes.node,
	theme: PropTypes.oneOf(ThemesArray),
	onToggle: PropTypes.func,
	prefix: PropTypes.node,
	suffix: PropTypes.node
}

export const IAccordionHeaderDefaultPropTypes = {
	prefix: undefined,
	suffix: undefined
}

export interface IAccordionBody {
	children: React.ReactNode,
	open?: boolean,
	style?: CSSStyle,
	className?: string
}

export const IAccordionBodyPropTypes = {
	children: PropTypes.node,
	open: PropTypes.bool,
	style: PropTypes.object,
	className: PropTypes.string,
}

export const IAccordionBodyDefaultPropTypes = {}