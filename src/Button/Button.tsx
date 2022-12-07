import React from 'react';
import styles from './Button.module.css';
import getClassNames from '../utils/getClassnames';
import ripple from '../utils/effectRipple';
import uuid from '../utils/uuid';
import sizeClasses from '../utils/sizeClasses';
import {defaultProps, IButtonProps, propTypes} from '../types/button';
import applyColorScheme from "../utils/applyColorScheme";
/*Responsive checkPropTypes pending for onstalled components*/

export const Button: React.FC<IButtonProps> = (
	{
		className,
		style,
		hideTextOnLoading,
		children,
		type,
		colorScheme,
		theme,
		variant,
		layout,
		disabled,
		loading,
		loadingDirection,
		loadingStyle,
		size,
		prefix,
		suffix,
		variants,
		...rest

	}) => {
	let mouseDown = false;
	const id = uuid();
	const layoutClasses = layout !== 'default' ? `btn-${layout}` : '';
	const variantClasses = variant !== 'default' ? `btn-${variant} ${variant === 'text' && 'btn-outline'}` : '';
	const loadingClasses = loading && `${hideTextOnLoading && 'btn-loading-no-text'} btn-loading ${loadingDirection === 'after' && 'btn-loading-right'} ${loadingStyle === 'grow' && 'btn-loading-grow'}` || '';
	const sizeClass = sizeClasses('btn', size);
	const mainBtnSelector = getClassNames(styles, 'btn');
	const componentSelector = `${mainBtnSelector.trim()}__${id}`;

	const classes = `${mainBtnSelector} ${componentSelector} ${className} ${getClassNames(
		styles,
		!colorScheme ? `btn-${theme}` : 'btn-primary',
		layoutClasses,
		disabled ? 'btn-disabled' : '',
		loadingClasses,
		variantClasses,
		sizeClass
	)}`
	applyColorScheme(id, componentSelector, colorScheme)

	return <button
		{...rest}
		disabled={disabled}
		type={type}
		style={style}
		className={classes}
		onMouseDown={(e: React.MouseEvent<HTMLButtonElement>) => {
			mouseDown = true;
			if (rest.onMouseDown) {
				rest.onMouseDown(e);
			}
			const target = (e.target as HTMLInputElement)!;
			if (loading || disabled) return;
			let initial = target.style?.cssText;
			if (target.nodeName.toLowerCase() === 'button' || target.closest('button')) {
				let button = e.target as HTMLButtonElement;
				if (target.closest('button')) {
					button = target.closest('button')!;
				}
				ripple(e, button, false, initial, mouseDown);
			}
		}}
		onFocus={(e) => {
			if (rest?.onFocus) {
				rest.onFocus(e);
			}
			if (loading || disabled) return;
			let initial = e.target?.style?.cssText;
			if (!mouseDown) {
				if (e.target.nodeName.toLowerCase() === 'button' || e.target.closest('button')) {
					let button = e.target;
					if (e.target.closest('button')) {
						button = e.target.closest('button')!;
					}
					ripple(e, button, true, initial, mouseDown);
				}
			}
		}}
	>
		{prefix && <div className={getClassNames(styles, 'btn-icon', 'btn-icon-prefix')}>{prefix}</div>}
		{(hideTextOnLoading && loading) ? <span>&nbsp;</span> : children}
		{suffix && <div className={getClassNames(styles, 'btn-icon', 'btn-icon-suffix')}>{suffix}</div>}
	</button>;
};

Button.displayName = 'Button';
Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button
