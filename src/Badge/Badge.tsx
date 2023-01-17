import React from 'react';
import getClassNames from '../utils/getClassnames';
import styles from './Badge.module.css';
import sizeClasses from '../utils/sizeClasses';
import {defaultProps, IBadgeProps, propTypes} from '../types/badge';
import applyColorScheme from "../utils/applyColorScheme";
import getRandomClassId from "../utils/generateRandonClassId";


export const Badge: React.FC<IBadgeProps> = (
	{
		title,
		size,
		theme,
		colorScheme,
		className,
		style,
		variant,
		layout,
	}) => {
	const id = getRandomClassId();
	const componentSelector = 'badge';
	const componentId = `${componentSelector}-${id}`;
	let themeClasses = !colorScheme ? `${componentSelector}-${theme}` : `${componentSelector}-primary`;
	let layoutClasses = layout !== 'default' ? `${componentSelector}-${layout}` : '';
	let variantClasses = variant !== 'default' ? `${componentSelector}-${variant}` : '';
	let sizeClass = sizeClasses(componentSelector, size);
	let mainBtnSelector = getClassNames(styles, componentSelector);

	const classes = `${mainBtnSelector} ${componentId} ${className} ${getClassNames(
		styles,
		layoutClasses,
		themeClasses,
		variantClasses,
		sizeClass
	)}`

	const customCss = applyColorScheme(componentSelector, colorScheme, componentId)

	return <>
		{customCss && customCss()}
		<div style={style} className={classes}>
			<div className={getClassNames(styles, "badge-text")}>{title}</div>
		</div>
	</>
};

Badge.displayName = 'Badge';
Badge.propTypes = propTypes;
Badge.defaultProps = defaultProps;
export default Badge



