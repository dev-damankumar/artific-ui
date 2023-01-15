import {ColorScheme, CSSStyle, Directions, DirectionsArray, FunctionCallback, Sizes, SizesArray} from './common';
import React from 'react';
import PropTypes from "prop-types";


export const VariantsArray = ['drawer', 'fluid', 'default'] as const;
export type Variants = typeof VariantsArray[number];


export const LayoutsArray = ['rounded', 'default', 'no-radius', 'floating'] as const;
export type Layouts = typeof LayoutsArray[number];

export const PositionArray = ['before', 'after'] as const;
export type Position = typeof PositionArray[number];

export interface IDropdownProps {
	children: React.ReactNode,
	style?: CSSStyle,
	className?: string,
	multiple?: boolean,
	autoClose?: boolean,
	fullwidth?: boolean,
	variants?: Variants[],
	position?: Directions,
	layout?: Layouts,
	size?: Sizes,
	colorScheme?: ColorScheme,
	variant?: Variants,
	disabled?: boolean,
	value?: string,
	placeholder?: string,
	defaultValue?: string,
	id?: string,
	menuClass?: string,
	menuStyle?: object,
	dropdownButtonStyle?: object,
	dropdownButtonClassName?: string
}

export const propTypes = {
	children: PropTypes.node,
	style: PropTypes.object,
	className: PropTypes.string,
	multiple: PropTypes.bool,
	autoClose: PropTypes.bool,
	fullwidth: PropTypes.bool,
	variants: PropTypes.arrayOf(PropTypes.oneOf(VariantsArray).isRequired),
	name: PropTypes.string,
	position: PropTypes.oneOf(DirectionsArray),
	layout: PropTypes.oneOf(LayoutsArray),
	variant: PropTypes.oneOf<Variants>(VariantsArray),
	size: PropTypes.oneOf<Sizes>(SizesArray),
	disabled: PropTypes.bool,
	value: PropTypes.string,
	placeholder: PropTypes.string,
	defaultValue: PropTypes.string,
	id: PropTypes.string,
	menuClass: PropTypes.string,
	menuStyle: PropTypes.object,
	dropdownButtonStyle: PropTypes.object,
	dropdownButtonClassName: PropTypes.string,
	colorScheme: PropTypes.shape({
		background: PropTypes.string.isRequired,
		backgroundColor: PropTypes.string.isRequired,
		color: PropTypes.string.isRequired,
	}),
}

export const defaultProps = {
	size: 'md' as Sizes,
	position: 'bottom' as Directions,
	layout: 'default' as Layouts,
	variant: 'default' as Variants,
}

export interface IMenuItemProps {
	style?: CSSStyle,
	className?: string,
	onSelect?: FunctionCallback,
	closeHandler?: FunctionCallback,
	autoClose?: boolean,
	children: React.ReactNode,

	[key: string]: any

}

export const IMenuItemPropsType = {
	style: PropTypes.object,
	className: PropTypes.string,
	onSelect: PropTypes.func,
	closeHandler: PropTypes.func,
	autoClose: PropTypes.bool,
	children: PropTypes.node,
}


export interface IDropdownMenu {
	children: React.ReactNode,
	className?: string,
	style?: object,
	position?: Position,
	autoClose?: boolean,
	closeHandler?: FunctionCallback,

	[key: string]: any
}

export const IDropdownMenuPropsType = {
	children: PropTypes.node,
	style: PropTypes.object,
	className: PropTypes.string,
	position: PropTypes.oneOf(PositionArray),
	closeHandler: PropTypes.func,
	autoClose: PropTypes.bool,
}


export const IDropdownMenuDefaultProps = {
	position: 'before' as Position,
}
