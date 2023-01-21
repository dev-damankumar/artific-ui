import React, {createElement} from 'react';
import getClassNames from '../utils/classes/getClassnames';
import classes from './Typography.module.css';
import colorClasses from '../bg.module.css';
import {defaultProps, ITypographyProps, propTypes} from '../types/typography';
import {IAnyElement} from "../types/common";
import getDefaultClasses from "../utils/classes/getDefaultClasses";

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
	const componentSelector = 'typography';
	const {
		classNames, customCss
	} = getDefaultClasses(classes, componentSelector, className, '', '', variant, '', colorScheme)
	const asEl = as?.toString()?.trim()?.toLowerCase() || ''
	const element = variant === 'abbr' ? 'abbr' : variant === 'pre' ? 'pre' : asEl;
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
		className: `${classNames} ${!colorScheme ? `text-${theme}` : ''} ${getClassNames(colorClasses, additionalThemeClass)} ${getClassNames(classes, 'typography', variantClasses, weightClasses)}`,
		...rest,
		children: children
	})
	return <>
		{customCss && customCss()}
		<p></p>
		{mainElement}
	</>;
};

Typography.displayName = 'Typography';
Typography.propTypes = propTypes;
Typography.defaultProps = defaultProps;


export default Typography
