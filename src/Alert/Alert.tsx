import React, {useState} from 'react';
import getClassNames from '../utils/getClassnames';
import styles from './Alert.module.css';
import sizeClasses from '../utils/sizeClasses';
import {IAlertProps} from '../types/alert';
import applyColorScheme from "../utils/applyColorScheme";
import getRandomClassId from "../utils/generateRandonClassId";

export const Alert: React.FC<IAlertProps> = (
	{
		children,
		direction = 'left',
		dismiss,
		size = 'md',
		theme = 'primary',
		colorScheme = null,
		className,
		style = {},
		variant = 'default',
		layout = 'default',
		onClose,
		...rest
	}) => {
	const id = getRandomClassId();
	const componentId = 'alert';
	const componentSelector = `${componentId}-${id}`;
	let themeClasses = `alert-${theme}`;
	let variantArray = ['default', 'text', 'outline', 'note'];
	let layoutArray = ['default', 'rounded', 'pill', 'no-radius'];
	let [show, setShow] = useState(true);
	let layoutClasses = '';
	if (layoutArray.includes(layout)) {
		layoutClasses = layout !== 'default' ? `alert-${layout}` : '';
	}
	let variantClasses = '';
	if (variantArray.includes(variant)) {
		variantClasses = variant !== 'default' ? `alert-${variant} ${direction && direction !== 'left' && `alert-note-${direction}`} ${variant === 'note' && 'alert-outline'} ${variant === 'text' && 'alert-outline'}` : '';
	}

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

export default Alert



