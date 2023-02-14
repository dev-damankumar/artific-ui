import React, {createElement, useContext} from 'react';
import getClassNames from '../utils/classes/getClassnames';
import classes from './Typography.module.css';
import {ITypographyProps, propTypes} from './Typography.types';
import {IAnyElement} from "../types/Common.types";
import getDefaultClasses from "../utils/classes/getDefaultClasses";
import {ThemeContext} from "../ThemeProvider";

export const Typography: React.FC<ITypographyProps & IAnyElement> = (
	{
		children,
		style,
		className,
		fontSize,
		fontWeight,
		as = 'p',
		variant = 'text',
		weight = 'medium',
		theme = 'default',
		colorScheme,
		...rest
	}) => {
	const context = useContext(ThemeContext)
	const componentSelector = 'typography';
	const {
		classNames, customCss
	} = getDefaultClasses(classes, componentSelector, className, '', '', variant, '', colorScheme)
	const asEl = as?.toString()?.trim()?.toLowerCase() || 'p'
	const element = variant === 'abbr' ? 'abbr' : variant === 'pre' ? 'pre' : (variant === 'highlight' || variant === 'kbd') ? 'span' : variant === 'code' ? 'code' : asEl;
	const variantClasses = variant !== 'text' ? `typography-${variant}` : '';
	const weightClasses = `${weight !== 'medium' ? `typography-${weight}` : ''}`;
	const additionalThemeClass = !colorScheme ? theme !== 'default' ? `text-${theme}` : `` : ``;


	const styles = {...style, fontSize: fontSize};
	if (fontSize) {
		styles['fontSize'] = fontSize;
	}
	if (fontWeight) {
		styles['fontWeight'] = fontWeight;
	}
	const mainElement = createElement(element, {
		style: {...styles},
		className: `${classNames} ${!colorScheme ? `text-${theme}` : ''} ${getClassNames(classes, additionalThemeClass)} ${getClassNames(classes, 'typography', variantClasses, weightClasses)}`,
		...rest,
		'data-theme-id': context?.themeId || '',
		children: children
	})
	return <>
		{customCss && customCss()}
		{mainElement}
	</>;
};

Typography.displayName = 'Typography';
Typography.propTypes = propTypes;

export default Typography
