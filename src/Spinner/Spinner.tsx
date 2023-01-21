import React from 'react';
import getClassNames from '../utils/classes/getClassnames';
import styles from './Spinner.module.css';
import {defaultProps, ISpinnerProps, propTypes} from '../types/spinner';
import {IDiv} from "../types/common";
import getDefaultClasses from "../utils/classes/getDefaultClasses";


export const Spinner: React.FC<ISpinnerProps & IDiv> = (
	{
		size,
		theme,
		colorScheme,
		className,
		style,
		variant,
		...rest
	}) => {
	const componentSelector = 'spinner';
	const {
		classNames, customCss
	} = getDefaultClasses(styles, componentSelector, className, theme, '', variant, size, colorScheme)
	let additionalVariantClasses = variant === 'default' && `${componentSelector}-default`;

	const classes = `${classNames} ${getClassNames(
		styles,
		additionalVariantClasses
	)}`

	let element: JSX.Element = <div {...rest} style={style} className={classes}>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
	</div>
	if (variant === 'ring' || variant === 'box') {
		element = <div {...rest} style={style} className={classes}></div>
	}
	if (variant === 'dots') {
		element = <div {...rest} style={style} className={classes}>
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
		element = <div {...rest} style={style} className={classes}>
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
Spinner.defaultProps = defaultProps;
export default Spinner



