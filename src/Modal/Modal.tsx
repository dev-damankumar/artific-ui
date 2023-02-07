import React from 'react';
import modalStyles from "./Modal.module.css"
import getClassNames from "../utils/classes/getClassnames";
import {IModalProps, OverLaySizesArray, propTypes} from "./Modal.types";
import {IDiv, IModalSizesType} from "../types/Common.types";
import getDefaultClasses from "../utils/classes/getDefaultClasses";
import {addPropsToChildren} from "../utils/helpers";
import sizeClasses from "../utils/classes/sizeClasses";


export const Modal: React.FC<IModalProps & IDiv> = (
	{
		open = false,
		className,
		style,
		classes = '',
		styles,
		colorScheme,
		theme = 'dark',
		variant = 'default',
		layout = 'default',
		size = 'md',
		onClose,
		dismiss,
		onBackdropClick,
		overlay,
		dock,
		position,
		children,
		...rest
	}) => {
	const componentSelector = 'modal';
	const {
		classNames, customCss
	} = getDefaultClasses(modalStyles, componentSelector, className, theme, layout, variant, '', colorScheme)
	const dockClasses = dock ? `${componentSelector}-dock-${dock}` : '';
	const positionClasses = position ? `${componentSelector}-${position}` : '';
	const sizeClass: IModalSizesType = sizeClasses(componentSelector, size);
	const additionalModalSize = OverLaySizesArray.includes(size || '') ? sizeClass : ''
	const additionalModalContentSize = !OverLaySizesArray.includes(size || '') ? sizeClass : ''
	const childrenWithProps = addPropsToChildren(children, {onClose, colorScheme, dismiss})

	const onBackdropEffect = (e: React.MouseEvent<HTMLElement>) => {
		if (e.target !== e.currentTarget) return;
		(e.target as HTMLElement).firstElementChild!.classList.add(getClassNames(modalStyles, 'shake').trim())
		setTimeout(() => {
			(e.target as HTMLElement).firstElementChild!.classList.remove(getClassNames(modalStyles, 'shake').trim())
		}, 500)
	}


	const mainClasses = `${classNames} ${getClassNames(
		modalStyles,
		!colorScheme ? `${componentSelector}-${theme}` : `${componentSelector}-dark`,
		open ? 'modal-show' : '',
		overlay === 'blur' ? 'modal-overlay-blur' : '',
		dockClasses,
		positionClasses,
		additionalModalSize
	)}`
	return (
		<>
			{customCss && customCss()}
			<div {...rest} style={style} className={mainClasses} onClick={(e) => {
				onBackdropClick?.(e);
				rest?.onClick?.(e)
				onBackdropEffect(e)
			}}>
				<div
					style={styles}
					className={`${classes} ${getClassNames(modalStyles, "modal-content", additionalModalContentSize)}`}>
					{childrenWithProps}
				</div>
			</div>
		</>
	);
};

Modal.displayName = 'Modal';
Modal.propTypes = propTypes;
export default Modal;
