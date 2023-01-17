import React from 'react';
import getClassNames from '../utils/getClassnames';
import styles from './Avatar.module.css';
import sizeClasses from '../utils/sizeClasses';
import {defaultProps, IAvatarProps, propTypes} from '../types/avatar';
import applyColorScheme from "../utils/applyColorScheme";
import getRandomClassId from "../utils/generateRandonClassId";


export const Avatar: React.FC<IAvatarProps> = (
	{
		src,
		alt,
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
	const componentSelector = 'avatar';
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
			{src ? <img alt={alt} className={getClassNames(styles, "avatar-image")} src={src}/> :
				<div className={getClassNames(styles, "avatar-text")}>{title}</div>}
		</div>
	</>
};

Avatar.displayName = 'Avatar';
Avatar.propTypes = propTypes;
Avatar.defaultProps = defaultProps;
export default Avatar



