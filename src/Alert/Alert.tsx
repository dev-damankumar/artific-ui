import React, {useContext, useState} from 'react';
import styles from './Alert.module.css';
import {IAlertProps, propTypes} from './Alert.types';
import getClassNames from '../utils/classes/getClassnames';
import {IDiv} from "../types/Common.types";
import getDefaultClasses from "../utils/classes/getDefaultClasses";
import {ThemeContext} from "../ThemeProvider";

export const Alert: React.FC<IAlertProps & IDiv> = (
	{
		children,
		direction = 'left',
		dismiss,
		size = 'md',
		theme = 'primary',
		colorScheme,
		className,
		style,
		variant = 'default',
		layout = 'default',
		onClose,
		...rest
	}) => {
	const componentSelector = 'alert';
	const context = useContext(ThemeContext)
	let [show, setShow] = useState(true);
	const {
		customCss, classNames
	} = getDefaultClasses(styles, componentSelector, className, theme, layout, variant, size, colorScheme)

	const onCloseHandler = () => {
		if (onClose) {
			onClose?.();
			return;
		}
		setShow(false);
	};

	const additionalVariantClasses = `${(variant === 'note' && direction && direction !== 'left') ? `${componentSelector}-note-${direction}` : ''} ${(variant === 'note') ? 'alert-outline' : ''}`;
	return show ? (
		<>
			{customCss && customCss()}
			<div
				{...rest} data-theme-id={context?.themeId || ''}
				className={`${classNames} ${getClassNames(styles, additionalVariantClasses)}`}
			>
				{dismiss && <button role="button" onClick={onCloseHandler} type='button'
									className={getClassNames(styles, 'close')}>&times;</button>}
				{children}
			</div>
		</>
	) : null;
};

Alert.displayName = 'Alert';
Alert.propTypes = propTypes;
export default Alert



