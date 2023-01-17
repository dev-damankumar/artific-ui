import React, {useState} from 'react';
import getClassNames from '../utils/getClassnames';
import styles from './Alert.module.css';
import sizeClasses from '../utils/sizeClasses';
import {defaultProps, IAlertProps, propTypes} from '../types/alert';
import applyColorScheme from "../utils/applyColorScheme";
import getRandomClassId from "../utils/generateRandonClassId";


export const Alert: React.FC<IAlertProps> = (
	{
		children,
		direction,
		dismiss,
		size,
		theme,
		colorScheme,
		className,
		style,
		variant,
		layout,
		onClose,
		...rest
	}) => {
	const id = getRandomClassId();
	const componentId = 'alert';
	const componentSelector = `${componentId}-${id}`;
	let themeClasses = `${componentId}-${theme}`;
	let [show, setShow] = useState(true);
	let layoutClasses = layout !== 'default' ? `${componentId}-${layout}` : '';
	let variantClasses = variant !== 'default' ? `${componentId}-${variant} ${direction && direction !== 'left' && `${componentId}-note-${direction}`} ${variant === 'note' && `${componentId}-outline`} ${variant === 'text' && `${componentId}-outline`}` : '';
	let sizeClass = sizeClasses(componentId, size);
	let mainBtnSelector = getClassNames(styles, componentId);


	let onCloseHandler = () => {
		if (onClose) {
			onClose();
			return;
		}
		setShow(false);
	};
	const customCss = applyColorScheme(componentSelector, colorScheme, componentId)

	return show ? (
		<>
			{customCss && customCss()}
			<div
				className={
					`${mainBtnSelector} ${componentSelector} ${getClassNames(
						styles,
						!colorScheme ? themeClasses : 'alert-primary',
						layoutClasses,
						variantClasses,
						sizeClass
					)} ${className}`
				}
				{...rest}
			>
				{dismiss &&
					<button onClick={onCloseHandler} type='button'
							className={getClassNames(styles, 'close')}>&times;</button>}
				{children}
			</div>
		</>
	) : null;
};

Alert.displayName = 'Alert';
Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;
export default Alert



