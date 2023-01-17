import React from 'react';
import getClassNames from '../utils/getClassnames';
import styles from './Spinner.module.css';
import sizeClasses from '../utils/sizeClasses';
import {defaultProps, ISpinnerProps, propTypes} from '../types/spinner';
import applyColorScheme from "../utils/applyColorScheme";
import getRandomClassId from "../utils/generateRandonClassId";


export const Spinner: React.FC<ISpinnerProps> = (
	{
		size,
		theme,
		colorScheme,
		className,
		style,
		variant,
	}) => {
	const id = getRandomClassId();
	const componentSelector = 'spinner';
	const componentId = `${componentSelector}-${id}`;
	let themeClasses = !colorScheme ? `${componentSelector}-${theme}` : `${componentSelector}-primary`;
	let variantClasses = variant !== 'default' ? `${componentSelector}-${variant}` : `${componentSelector}-default`;
	let sizeClass = sizeClasses(componentSelector, size);
	let mainBtnSelector = getClassNames(styles, componentSelector);

	const classes = `${mainBtnSelector} ${componentId} ${className} ${getClassNames(
		styles,
		themeClasses,
		variantClasses,
		sizeClass
	)}`

	const customCss = applyColorScheme(componentSelector, colorScheme, componentId)
	let element: JSX.Element = <div style={style} className={classes}>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
	</div>
	if (variant === 'ring' || variant === 'box') {
		element = <div style={style} className={classes}></div>
	}
	if (variant === 'dots') {
		element = <div style={style} className={classes}>
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
		element = <div style={style} className={classes}>
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



