import React from 'react';
import styles from './Button.module.css';
import getClassNames from '../utils/getClassnames';
import ripple from '../utils/effectRipple';
import sizeClasses from '../utils/sizeClasses';
import {defaultProps, IButtonProps, propTypes} from '../types/button';
import applyColorScheme from "../utils/applyColorScheme";
import getRandomClassId from "../utils/generateRandonClassId";
/*Responsive checkPropTypes pending for onstalled components*/

export const Button: React.FC<IButtonProps> = (props) => {
	const {
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
		fullWidth,
		loadingDirection,
		loadingStyle,
		size,
		prefix,
		suffix,
		variants,
		...rest
	} = props
	let mouseDown = false;
	const id = getRandomClassId();
	const componentSelector = 'btn';
	const componentId = `${componentSelector}-${id}`;
	const layoutClasses = layout !== 'default' ? `${componentSelector}-${layout}` : '';
	const variantClasses = variant !== 'default' ? `${componentSelector}-${variant} ${variant === 'text' && `${componentSelector}-outline`}` : '';
	const loadingClasses = loading && `${hideTextOnLoading && `${componentSelector}-loading-no-text`} ${componentSelector}-loading ${loadingDirection === 'after' && `${componentSelector}-loading-right`} ${loadingStyle === 'grow' && `${componentSelector}-loading-grow`}` || '';
	const sizeClass = sizeClasses(componentSelector, size);
	const mainBtnSelector = getClassNames(styles, componentSelector);


	const classes = `${mainBtnSelector} ${componentId} ${className} ${getClassNames(
		styles,
		!colorScheme ? `${componentSelector}-${theme}` : `${componentSelector}-primary`,
		layoutClasses,
		fullWidth ? `${componentSelector}-fullwidth` : '',
		disabled ? `${componentSelector}-disabled` : '',
		loadingClasses,
		variantClasses,
		sizeClass
	)}`
	const customCss = applyColorScheme(componentId, colorScheme, componentSelector)

	return <>
		{customCss && customCss()}
		<button
			{...rest}
			disabled={disabled}
			type={type}
			style={style}
			className={`${classes} ${colorScheme ? [layoutClasses,
				loadingClasses,
				variantClasses,
				sizeClass].join(" ") : ''}`}
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
		</button>
	</>
};

Button.displayName = 'Button';
Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button
