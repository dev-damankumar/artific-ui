import React from 'react';
import sizeClasses from '../utils/sizeClasses';
import classes from './Dropdown.module.css';
import getClassNames from '../utils/getClassnames';
import {defaultProps, IDropdownProps, propTypes} from '../types/dropdown';
import getRandomClassId from "../utils/generateRandonClassId";
import applyColorScheme from "../utils/applyColorScheme";

export const Dropdown: React.FC<IDropdownProps> = (
	{
		autoClose,
		children,
		className = '',
		style,
		size,
		position,
		fullwidth,
		layout,
		variant,
		colorScheme
	}) => {
	const id = getRandomClassId();
	const componentId = 'dropdown';
	const componentSelector = `${componentId}-${id}`;
	const layoutClasses = layout !== 'default' ? `dropdown-${layout}` : '';
	const variantClasses = variant !== 'default' ? `dropdown-${variant}` : '';
	const sizeClass = sizeClasses('dropdown', size);
	const openDropdown = (e: Event) => {
		if (e.currentTarget === e.target) {
			(e.target as HTMLElement)!.parentElement!.classList.toggle(getClassNames(classes, 'dropdown-open').trim());
		}
	};

	const handleCloseMenu = (e: React.MouseEvent<Element, MouseEvent>) => {
		if (e) {
			if ((e.target! as HTMLElement).hasAttribute('data-dropdown')) {
				(e.target! as HTMLElement).closest(`.${getClassNames(classes, 'dropdown-open')}`)!.classList.remove(getClassNames(classes, 'dropdown-open').trim());
			}
		}
	};
	const childrenWithProps = React.Children.map(children, child => {
		if (React.isValidElement(child)) {
			return React.cloneElement<any>(child, {
				autoClose, onClick: openDropdown, closeHandler: handleCloseMenu, colorScheme
			});
		}
		return child;
	});
	const customCss = applyColorScheme(componentSelector, colorScheme, componentId)
	return (
		<>
			{customCss && customCss()}
			<div style={style}
				 onClick={(e: React.MouseEvent<Element, MouseEvent>): void => {
					 handleCloseMenu(e);
				 }}
				 data-dropdown
				 className={`${componentSelector} ${getClassNames(
					 classes,
					 'dropdown',
					 fullwidth ? 'dropdown-full' : '',
					 position !== 'bottom' ? `drop-${position}` : '',
					 layoutClasses,
					 variantClasses,
					 sizeClass
				 )} ${className}`}>
				{childrenWithProps}
			</div>
		</>
	);
};
Dropdown.displayName = 'Dropdown';
Dropdown.propTypes = propTypes;
Dropdown.defaultProps = defaultProps;


export default Dropdown
