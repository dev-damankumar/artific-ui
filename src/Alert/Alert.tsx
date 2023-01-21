import React, {useState} from 'react';
import styles from './Alert.module.css';
import {defaultProps, IAlertProps, propTypes} from '../types/alert';
import getClassNames from '../utils/classes/getClassnames';
import {IDiv} from "../types/common";
import getDefaultClasses from "../utils/classes/getDefaultClasses";

export const Alert: React.FC<IAlertProps & IDiv> = (
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
	const componentSelector = 'alert';
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

	const additionalVariantClasses = `${direction && direction !== 'left' && `${componentSelector}-note-${direction}`} ${variant === 'note' && 'alert-outline'} ${variant === 'text' && 'alert-outline'}`;

	return show ? (
		<>
			{customCss && customCss()}
			<div
				{...rest}
				className={`${classNames} ${getClassNames(styles, additionalVariantClasses)}`}
			>
				{dismiss && <button onClick={onCloseHandler} type='button'
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



