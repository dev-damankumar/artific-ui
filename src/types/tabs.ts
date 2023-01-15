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
	ThemesArray,
} from './common';
import PropTypes from "prop-types";
import React from "react";

export const VariantsArray = ["default", "separate", "line", "floating-line"] as const;
export type Variants = typeof VariantsArray[number];

export const TabTypesArray = ["default", "float"] as const;
export type TabTypes = typeof TabTypesArray[number];

export const propTypes = {
	variant: PropTypes.oneOf<Variants>(VariantsArray),
	size: PropTypes.oneOf<Sizes>(SizesArray),
	style: PropTypes.object,
	theme: PropTypes.oneOf<Themes>(ThemesArray),
	type: PropTypes.oneOf<TabTypes>(TabTypesArray),
	lineDirection: PropTypes.oneOf<Directions>(DirectionsArray),
	position: PropTypes.oneOf<Directions>(DirectionsArray),
	className: PropTypes.string,
	colorScheme: PropTypes.shape({
		background: PropTypes.string.isRequired,
		backgroundColor: PropTypes.string.isRequired,
		color: PropTypes.string.isRequired,
	}),
	layout: PropTypes.oneOf<Layouts>(LayoutsArray),
};

export const defaultProps = {
	colorScheme: null,
	theme: 'primary' as Themes,
	variant: 'default' as Variants,
	layout: 'default' as Layouts,
	lineDirection: 'bottom' as Directions,
	position: 'top' as Directions,
	type: 'default' as TabTypes,
	size: 'md' as Sizes,
	className: '' as string,
	variants: undefined
};

export interface ITabsProps {
	type?: TabTypes;
	children: React.ReactNode;
	style?: React.CSSProperties;
	theme?: Themes;
	lineDirection?: Directions;
	position?: Directions;
	colorScheme?: ColorScheme;
	variant?: Variants;
	layout?: Layouts;
	size?: Sizes;
	className?: string;

	[x: string]: any;
}

export interface ITabItemProps {
	children: React.ReactNode;
	style?: React.CSSProperties;
	variant?: Variants;
	active?: boolean;
	activeTab?: string;
	setActiveTab?: FunctionCallback;
	className?: string;
	target: string;
}


export const tabItemPropTypes = {
	variant: PropTypes.oneOf<Variants>(VariantsArray),
	style: PropTypes.object,
	className: PropTypes.string,
	active: PropTypes.bool,
};

export const tabItemDefaultProps = {
	className: '' as string,
	active: false,
	variant: 'default' as Variants,
};


export interface ITabContentProps {
	children: React.ReactNode;
	style?: React.CSSProperties;
	variant?: Variants;
	activeTab?: string;
	setActiveTab?: FunctionCallback;
	className?: string;
	id: string;
}


export const tabContentPropTypes = {
	variant: PropTypes.oneOf<Variants>(VariantsArray),
	style: PropTypes.object,
	className: PropTypes.string,
	activeTab: PropTypes.string,
};

export const tabContentDefaultProps = {
	className: '' as string,
	activeTab: '',
	variant: 'default' as Variants,
};
