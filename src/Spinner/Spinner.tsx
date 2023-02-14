import React, {useContext} from 'react';
import getClassNames from '../utils/classes/getClassnames';
import styles from './Spinner.module.css';
import {ISpinnerProps, propTypes} from './Spinner.types';
import {IDiv} from "../types/Common.types";
import getDefaultClasses from "../utils/classes/getDefaultClasses";
import {ThemeContext} from "../ThemeProvider";

export const Spinner: React.FC<ISpinnerProps & IDiv> = (
	{
		size = 'md',
		theme = 'primary',
		colorScheme,
		className,
		style,
		variant = 'default',
		...rest
	}) => {
	const context = useContext(ThemeContext)
	const componentSelector = 'spinner';
	const {
		classNames, customCss
	} = getDefaultClasses(styles, componentSelector, className, theme, '', variant, size, colorScheme)
	let additionalVariantClasses = variant === 'default' && `${componentSelector}-default`;

	const classes = `${classNames} ${getClassNames(
		styles,
		additionalVariantClasses
	)}`

	let element: JSX.Element = <div {...rest} data-theme-id={context?.themeId || ''} style={style} className={classes}>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
	</div>
	if (variant === 'ring' || variant === 'box') {
		element = <div {...rest} data-theme-id={context?.themeId || ''} style={style} className={classes}></div>
	}
	if (variant === 'dots') {
		element = <div {...rest} data-theme-id={context?.themeId || ''} style={style} className={classes}>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>

	}
	if (variant === 'ripple') {
		element = <div {...rest} data-theme-id={context?.themeId || ''} style={style} className={classes}>
			<div></div>
			<div></div>
		</div>
	}
	return <>
		{customCss && customCss()}
		{element}
	</>
};

Spinner.displayName = 'Spinner';
Spinner.propTypes = propTypes;
export default Spinner



