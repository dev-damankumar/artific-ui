import React from 'react';
import getClassNames from '../utils/classes/getClassnames';
import styles from './Badge.module.css';
import {IBadgeProps, propTypes} from './Badge.types';
import getDefaultClasses from "../utils/classes/getDefaultClasses";
import {IDiv} from "../types/Common.types";


export const Badge: React.FC<IBadgeProps & IDiv> = (
	{
		title,
		size = 'md',
		theme = 'primary',
		colorScheme,
		className,
		style,
		variant = 'default',
		layout = 'default',
		...rest
	}) => {
	const componentSelector = 'badge';
	const {
		classNames, customCss
	} = getDefaultClasses(styles, componentSelector, className, theme, layout, variant, size, colorScheme)

	return <>
		{customCss && customCss()}
		<div {...rest} style={style} className={classNames}>
			{variant !== 'dot' && <div className={getClassNames(styles, "badge-text")}>{title}</div>}
		</div>
	</>
};

Badge.displayName = 'Badge';
Badge.propTypes = propTypes;
export default Badge



