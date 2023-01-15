import React from 'react';
import {ColorScheme, Directions, DirectionsArray, FunctionCallback} from './common';
import PropTypes from "prop-types";

export const LayoutsArray = ['default', 'rounded', 'no-radius'] as const;
export type Layouts = typeof LayoutsArray[number];

export const ThemesArray = ['light', 'dark'] as const;
export type Themes = typeof ThemesArray[number];

export const OverlayArray = ['default', 'blur'] as const;
export type Overlay = typeof OverlayArray[number];

export const VariantsArray = ["default", "striped", "striped-body", "striped-header", "striped-footer"] as const;
export type Variants = typeof VariantsArray[number];

export const SizesArray = ['full-width', 'full-height', 'full', 'expanded', 'xs', 'sm', 'md', 'lg', 'xl'] as const;
export type Sizes = typeof SizesArray[number];

export const OverLaySizesArray = ['full-width', 'full-height', 'full', 'expanded'];

export const propTypes = {
	variant: PropTypes.oneOf<Variants>(VariantsArray),
	size: PropTypes.oneOf<Sizes>(SizesArray).isRequired,
	overlay: PropTypes.oneOf<Overlay>(OverlayArray),
	dock: PropTypes.oneOf<Directions>(DirectionsArray),
	position: PropTypes.oneOf<Directions>(DirectionsArray),
	style: PropTypes.object,
	styles: PropTypes.object,
	theme: PropTypes.oneOf<Themes>(ThemesArray),
	className: PropTypes.string,
	classes: PropTypes.string,
	colorScheme: PropTypes.shape({
		background: PropTypes.string.isRequired,
		backgroundColor: PropTypes.string.isRequired,
		color: PropTypes.string.isRequired,
	}),
	layout: PropTypes.oneOf<Layouts>(LayoutsArray),
	onBackdropClick: PropTypes.func
};

export const defaultProps = {
	colorScheme: null,
	theme: 'dark' as Themes,
	variant: 'default' as Variants,
	layout: 'default' as Layouts,
	size: 'md' as Sizes,
	className: '' as string,
	classes: '' as string,
	open: false
};

export interface IModalProps {
	children?: React.ReactNode;
	style?: React.CSSProperties;
	styles?: React.CSSProperties;
	theme?: Themes;
	colorScheme?: ColorScheme;
	variant?: Variants;
	layout?: Layouts;
	size?: Sizes;
	className?: string;
	classes?: string;
	open: boolean;
	onClose?: FunctionCallback;
	overlay?: Overlay;
	dock?: Directions;
	position?: Directions;
	dismiss?: boolean;
	onBackdropClick?: FunctionCallback;

	[x: string]: any;
}

export interface IModalHeaderProps {
	children?: React.ReactNode;
	dismiss?: boolean;
	prefix?: React.ReactNode | null | undefined;
	suffix?: React.ReactNode | null | undefined;
	onClose?: FunctionCallback,
}


export const modalHeaderPropTypes = {
	dismiss: PropTypes.bool,
	prefix: PropTypes.node || null,
	suffix: PropTypes.node || null,
	onClose: PropTypes.func
};

export const modalHeaderDefaultProps = {
	dismiss: true,
	backdropDismiss: false,
};
