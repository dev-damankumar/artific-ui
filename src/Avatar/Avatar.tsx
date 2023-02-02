import React from 'react';


import styles from './Avatar.module.css';
import {defaultProps, IAvatarProps, propTypes} from './Avatar.types';
import {IDiv} from "../types/Common.types";
import getClassNames from '../utils/classes/getClassnames';
import getDefaultClasses from "../utils/classes/getDefaultClasses";


export const Avatar: React.FC<IAvatarProps & IDiv> = (
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
		...rest
	}) => {
	const componentSelector = 'avatar';
	const {
		classNames, customCss
	} = getDefaultClasses(styles, componentSelector, className, theme, layout, variant, size, colorScheme)

	return <>
		{customCss && customCss()}
		<div {...rest} style={style} className={classNames}>
			{src ? <img alt={alt} className={getClassNames(styles, "avatar-image")} src={src}/> :
				<div className={getClassNames(styles, "avatar-text")}>{title}</div>}
		</div>
	</>
};

Avatar.displayName = 'Avatar';
Avatar.propTypes = propTypes;
Avatar.defaultProps = defaultProps;
export default Avatar



