import React from 'react';
import styles from './Button.module.css';
import getClassNames from '../utils/classes/getClassnames';
import ripple from '../utils/effects/effectRipple';
import {IButtonProps, propTypes} from './Button.types';
import {IButton} from "../types/Common.types";
import getDefaultClasses from "../utils/classes/getDefaultClasses";

/*Responsive checkPropTypes pending for onstalled components*/

export const Button: React.FC<Omit<IButton, 'prefix'> & IButtonProps> = (
	{
		className,
		style,
		hideTextOnLoading,
		children,
		type = 'button',
		colorScheme,
		theme = 'primary',
		variant = 'default',
		layout = 'default',
		disabled = false,
		loading,
		fullwidth = false,
		loadingDirection = 'before',
		loadingStyle = 'spin',
		size = 'md',
		prefix = null,
		suffix = null,
		...rest
	}) => {
	let mouseDown = false;
	const componentSelector = 'btn';
	const {
		classNames, customCss
	} = getDefaultClasses(styles, componentSelector, className, theme, layout, variant, size, colorScheme)
	const additionalVariantClasses = `${variant === 'text' && `${componentSelector}-outline`}`;
	const loadingClasses = loading && `${hideTextOnLoading && `${componentSelector}-loading-no-text`} ${componentSelector}-loading ${loadingDirection === 'after' && `${componentSelector}-loading-right`} ${loadingStyle === 'grow' && `${componentSelector}-loading-grow`}` || '';

	const classes = `${getClassNames(
		styles,
		additionalVariantClasses,
		loadingClasses,
		fullwidth ? `${componentSelector}-fullwidth` : '',
		disabled ? `${componentSelector}-disabled` : '',
	)}`

	return <>
		{customCss && customCss()}
		<button
			{...rest}
			disabled={disabled}
			type={type}
			style={style}
			className={`${classNames} ${classes}`}
			onMouseDown={(e: React.MouseEvent<HTMLButtonElement>) => {
				mouseDown = true;
				if (rest.onMouseDown) {
					rest.onMouseDown(e);
				}
				const target = (e.target as HTMLInputElement)!;
				if (loading || disabled) return;
				if (target.nodeName.toLowerCase() === 'button' || target.closest('button')) {
					let button = e.target as HTMLButtonElement;
					if (target.closest('button')) {
						button = target.closest('button')!;
					}
					ripple(e, button, false, mouseDown);
				}
			}}
			onFocus={(e) => {
				if (rest?.onFocus) {
					rest.onFocus(e);
				}
				if (loading || disabled) return;
				if (!mouseDown) {
					if (e.target.nodeName.toLowerCase() === 'button' || e.target.closest('button')) {
						let button = e.target;
						if (e.target.closest('button')) {
							button = e.target.closest('button')!;
						}
						ripple(e, button, true, mouseDown);
					}
				}
			}}
		>
			{prefix && <div className={getClassNames(styles, 'btn-icon', 'btn-icon-prefix')}>{prefix}</div>}
			{(hideTextOnLoading && loading) ? <span>&nbsp;</span> : children}
			{suffix && <div className={getClassNames(styles, 'btn-icon', 'btn-icon-suffix')}>{suffix}</div>}
		</button>
	</>
};

Button.displayName = 'Button';
Button.propTypes = propTypes;

export default Button
