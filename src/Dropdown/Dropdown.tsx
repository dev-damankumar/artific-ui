import React from 'react';
import styles from './Dropdown.module.css';
import getClassNames from '../utils/classes/getClassnames';
import {defaultProps, IDropdownProps, propTypes} from '../types/dropdown.types';
import {IDiv} from "../types/common.types";
import getDefaultClasses from "../utils/classes/getDefaultClasses";
import {addPropsToChildren} from "../utils/helpers";


export const Dropdown: React.FC<IDropdownProps & IDiv> = (
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
		theme,
		colorScheme,
		...rest
	}) => {
	const componentSelector = 'dropdown';
	const {
		classNames, customCss
	} = getDefaultClasses(styles, componentSelector, className, theme, layout, variant, size, colorScheme)

	const openDropdown = (e: Event) => {
		if (e.currentTarget === e.target) {
			(e.target as HTMLElement)!.parentElement!.classList.toggle(getClassNames(styles, 'dropdown-open').trim());
		}
	};

	const handleCloseMenu = (e: React.MouseEvent<Element, MouseEvent>) => {
		if (e) {
			if ((e.target! as HTMLElement).hasAttribute('data-dropdown')) {
				(e.target! as HTMLElement).closest(`.${getClassNames(styles, 'dropdown-open')}`)!.classList.remove(getClassNames(styles, 'dropdown-open').trim());
			}
		}
	};
	const childrenWithProps = addPropsToChildren(children, {
		autoClose, onClick: openDropdown, closeHandler: handleCloseMenu, colorScheme, theme
	})

	const classes = getClassNames(
		styles,
		fullwidth ? 'dropdown-full' : '',
		position !== 'bottom' ? `drop-${position}` : '',
	)
	return (
		<>
			{customCss && customCss()}
			<div {...rest} style={style}
				 onClick={(e: React.MouseEvent<Element, MouseEvent>): void => {
					 handleCloseMenu(e);
				 }}
				 data-dropdown
				 className={`${classNames} ${classes}`}>
				{childrenWithProps}
			</div>
		</>
	);
};
Dropdown.displayName = 'Dropdown';
Dropdown.propTypes = propTypes;
Dropdown.defaultProps = defaultProps;

export default Dropdown
