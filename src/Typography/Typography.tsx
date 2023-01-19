import React, {createElement} from 'react';
import getClassNames from '../utils/getClassnames';
import classes from './Typography.module.css';
import {defaultProps, ITypographyProps, propTypes} from '../types/typography';
import getRandomClassId from "../utils/generateRandonClassId";
import applyColorScheme from "../utils/applyColorScheme";

export const Typography: React.FC<ITypographyProps> = (
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
	const id = getRandomClassId();
	const componentId = 'btn';
	const componentSelector = `${componentId}-${id}`;
	const asEl = as?.toString()?.trim()?.toLowerCase() || ''
	const element = variant === 'abbr' ? 'abbr' : variant === 'pre' ? 'pre' : asEl;
	const variantClasses = variant !== 'text' ? `typography-${variant}` : '';
	const weightClasses = `${weight !== 'medium' ? `typography-${weight}` : ''}`;

	const styles = {...style, fontSize: fontSize};
	if (fontSize) {
		styles['fontSize'] = fontSize;
	}
	if (fontWeight) {
		styles['fontWeight'] = fontWeight;
	}
	const customCss = applyColorScheme(componentSelector, colorScheme, componentId)
	const mainElement = createElement(element, {
		style: {...styles},
		className: `${!colorScheme ? `text-${theme}` : ''} ${getClassNames(classes, 'typography', variantClasses, weightClasses)} ${className}`,
		...rest,
		children: children
	})
	return <>
		{customCss && customCss()}
		{mainElement}
	</>;
};

Typography.displayName = 'Typography';
Typography.propTypes = propTypes;
Typography.defaultProps = defaultProps;


export default Typography
