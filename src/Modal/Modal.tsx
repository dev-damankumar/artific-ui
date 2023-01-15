import React from 'react';
import modalStyles from "./Modal.module.css"
import getClassNames from "../utils/getClassnames";
import {defaultProps, IModalProps, OverLaySizesArray, propTypes} from "../types/modal";
import getRandomClassId from "../utils/generateRandonClassId";
import sizeClasses from "../utils/sizeClasses";
import applyColorScheme from "../utils/applyColorScheme";
import {IModalSizesType} from "../types/common";

export const Modal: React.FC<IModalProps> = (
	{
		open,
		className,
		style,
		classes,
		styles,
		colorScheme,
		theme,
		variant,
		layout,
		size,
		onClose,
		dismiss,
		onBackdropClick,
		overlay,
		dock,
		position,
		children,
		...rest
	}) => {
	const id = getRandomClassId();
	const componentId = 'modal';
	const componentSelector = `${componentId}-${id}`;
	const layoutClasses = layout !== 'default' ? `${componentId}-${layout}` : '';
	const variantClasses = variant !== 'default' ? `${componentId}-${variant}` : '';
	const dockClasses = dock ? `${componentId}-dock-${dock}` : '';
	const positionClasses = position ? `${componentId}-${position}` : '';
	const sizeClass: IModalSizesType = sizeClasses(componentId, size);
	const mainBtnSelector = getClassNames(modalStyles, componentId);

	const childrenWithProps = React.Children.map(children, child => {
		if (React.isValidElement(child)) {
			return React.cloneElement<any>(child, {
				onClose, colorScheme, dismiss,
			});
		}
		return child;
	});

	const onBackdropEffect = (e: React.MouseEvent<HTMLElement>) => {
		if (e.target !== e.currentTarget) return;
		(e.target as HTMLElement).firstElementChild!.classList.add(getClassNames(modalStyles, 'shake').trim())
		setTimeout(() => {
			(e.target as HTMLElement).firstElementChild!.classList.remove(getClassNames(modalStyles, 'shake').trim())
		}, 500)
	}

	const mainClasses = `${mainBtnSelector} ${componentSelector} ${className} ${getClassNames(
		modalStyles,
		!colorScheme ? `${componentId}-${theme}` : `${componentId}-dark`,
		open ? 'modal-show' : '',
		overlay === 'blur' ? 'modal-overlay-blur' : '',
		layoutClasses,
		variantClasses,
		dockClasses,
		positionClasses,
		OverLaySizesArray.includes(size || '') ? sizeClass : ''
	)}`
	const customCss = applyColorScheme(componentSelector, colorScheme, componentId)
	return (
		<>
			{customCss && customCss()}
			<div style={style} className={`${mainClasses}`} onClick={(e) => {
				if (onBackdropClick) {
					onBackdropClick(e);
				}
				if (rest.onClick) {
					rest.onClick(e)
				}
				onBackdropEffect(e)
			}}>
				<div
					style={styles}
					className={`${classes} ${getClassNames(modalStyles, "modal-content", !OverLaySizesArray.includes(size || '') ? sizeClass : '')}`}>
					{childrenWithProps}
				</div>
			</div>
		</>
	);
};
Modal.displayName = 'Modal';
Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;
export default Modal;
