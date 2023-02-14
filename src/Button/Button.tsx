import React, {useContext} from 'react';
import styles from './Button.module.css';
import getClassNames from '../utils/classes/getClassnames';
import ripple from '../utils/effects/effectRipple';
import {IButtonProps, propTypes} from './Button.types';
import {IButton} from "../types/Common.types";
import getDefaultClasses from "../utils/classes/getDefaultClasses";
import {containsGradient} from "../utils/helpers";
import {ThemeContext} from "../ThemeProvider";

/*Responsive checkPropTypes pending for onstalled components*/

export const Button: React.FC<Omit<IButton, 'prefix'> & IButtonProps> = (
	{
		className,
		style,
		hideTextOnLoading,
		elevation = true,
		children,
		type = 'button',
		colorScheme = null,
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
		noRipple = false,
		...rest
	}) => {
	const context = useContext(ThemeContext)
	const rippleEvents = {
		mouseDown: false,
		inFocus: false
	}
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
		elevation ? `${componentSelector}-elevation` : '',
		disabled ? `${componentSelector}-disabled` : '',
		containsGradient(colorScheme) ? 'btn-gradient-hover' : ''
	)}`

	return <>
		{customCss && customCss()}
		<button
			{...rest} data-theme-id={context?.themeId || ''}
			disabled={disabled}
			type={type}
			style={style}
			className={`${classNames} ${classes}`}
			onMouseDown={(e: React.MouseEvent<HTMLButtonElement>) => {
				rippleEvents.mouseDown = true;
				if (rest.onMouseDown) {
					rest.onMouseDown(e);
				}
				const target = (e.target as HTMLInputElement)!;
				if (loading || disabled || noRipple) return;
				if (rippleEvents.mouseDown) {
					if (target.nodeName.toLowerCase() === 'button' || target.closest('button')) {
						let button = e.target as HTMLButtonElement;
						if (target.closest('button')) {
							button = target.closest('button')!;
						}
						const rippleEl = button.querySelector("[data-ripple]")
						ripple(e, button, rippleEl, false, rippleEvents);
					}
				}
			}}
			onFocus={(e) => {
				if (rest?.onFocus) {
					rest.onFocus(e);
				}
				if (loading || disabled || noRipple) return;
				if (!rippleEvents.mouseDown) {
					if (e.target.nodeName.toLowerCase() === 'button' || e.target.closest('button')) {
						let button = e.target;
						if (e.target.closest('button')) {
							button = e.target.closest('button')!;
						}
						const rippleEl = button.querySelector("[data-ripple]")
						ripple(e, button, rippleEl, true, rippleEvents);
					}
				}
			}}
		>
			{prefix && <div className={getClassNames(styles, 'btn-icon', 'btn-icon-prefix')}>{prefix}</div>}
			{(hideTextOnLoading && loading) ? <span>&nbsp;</span> : children}
			{suffix && <div className={getClassNames(styles, 'btn-icon', 'btn-icon-suffix')}>{suffix}</div>}
			<span className={getClassNames(styles, "btn-ripple")} data-ripple></span>
		</button>
	</>
};

Button.displayName = 'Button';
Button.propTypes = propTypes;

export default Button
