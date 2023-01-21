import React from 'react';
import getClassNames from '../utils/classes/getClassnames';
import styles from './Badge.module.css';
import {defaultProps, IBadgeProps, propTypes} from '../types/badge';
import getDefaultClasses from "../utils/classes/getDefaultClasses";
import {IDiv} from "../types/common";


export const Badge: React.FC<IBadgeProps & IDiv> = (
	{
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
	const componentSelector = 'badge';
	const {
		classNames, customCss
	} = getDefaultClasses(styles, componentSelector, className, theme, layout, variant, size, colorScheme)

	return <>
		{customCss && customCss()}
		<div {...rest} style={style} className={classNames}>
			<div className={getClassNames(styles, "badge-text")}>{title}</div>
		</div>
	</>
};

Badge.displayName = 'Badge';
Badge.propTypes = propTypes;
Badge.defaultProps = defaultProps;
export default Badge



