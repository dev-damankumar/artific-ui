import {
	ColorScheme,
	Directions,
	DirectionsArray,
	FunctionCallback,
	Sizes,
	SizesArray,
	Themes,
	ThemesArray
} from '../types/Common.types';
import {ReactNode} from 'react';
import {bool, func, node, object, oneOf, shape, string} from "prop-types";

export const VariantsArray = ['drawer', 'fluid', 'default'] as const;
export type Variants = typeof VariantsArray[number];

export const LayoutsArray = ['rounded', 'default', 'no-radius', 'floating'] as const;
export type Layouts = typeof LayoutsArray[number];

export const PositionArray = ['before', 'after'] as const;
export type Position = typeof PositionArray[number];

export interface IDropdownProps {
	children: ReactNode,
	autoClose?: boolean,
	fullwidth?: boolean,
	position?: Directions,
	layout?: Layouts,
	theme?: Themes,
	size?: Sizes,
	colorScheme?: ColorScheme,
	variant?: Variants,
	disabled?: boolean,
	value?: string,
	placeholder?: string,
	defaultValue?: string,
	menuClass?: string,
	menuStyle?: object,
	dropdownButtonStyle?: object,
	dropdownButtonClassName?: string
}

export const propTypes = {
	children: node,
	autoClose: bool,
	fullwidth: bool,
	name: string,
	position: oneOf(DirectionsArray),
	layout: oneOf(LayoutsArray),
	theme: oneOf(ThemesArray),
	variant: oneOf<Variants>(VariantsArray),
	size: oneOf<Sizes>(SizesArray),
	disabled: bool,
	value: string,
	placeholder: string,
	defaultValue: string,
	id: string,
	menuClass: string,
	menuStyle: object,
	dropdownButtonStyle: object,
	dropdownButtonClassName: string,
	colorScheme: shape({
		background: string.isRequired,
		backgroundColor: string.isRequired,
		color: string.isRequired,
	}),
}

export interface IMenuItemProps {
	onSelect?: FunctionCallback,
	closeHandler?: FunctionCallback,
	autoClose?: boolean,
	active?: boolean,
	children: ReactNode,
}

export const IMenuItemPropsType = {
	onSelect: func,
	closeHandler: func,
	autoClose: bool,
	active: bool,
	children: node,
}


export interface IDropdownMenu {
	children: ReactNode,
	position?: Position,
	autoClose?: boolean,
	closeHandler?: FunctionCallback,
}

export const IDropdownMenuPropsType = {
	children: node,
	position: oneOf(PositionArray),
	closeHandler: func,
	autoClose: bool,
}

