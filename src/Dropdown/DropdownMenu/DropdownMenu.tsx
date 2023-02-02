import React from 'react';

import getClassNames from '../../utils/classes/getClassnames';
import styles from '../Dropdown.module.css';
import {IDropdownMenu, IDropdownMenuDefaultProps, IDropdownMenuPropsType} from '../Dropdown.types';
import {IDiv} from "../../types/Common.types";
import {addPropsToChildren} from "../../utils/helpers";


export const DropdownMenu: React.FC<IDropdownMenu & IDiv> = (
	{
		children,
		className = '',
		style,
		position,
		closeHandler,
		autoClose,
		...rest
	}) => {
	const classes = getClassNames(styles, 'dropdown-menu', position === 'after' ? 'dropdown-menu-right' : '')
	const childrenWithProps = addPropsToChildren(children, {autoClose, closeHandler})

	return (
		<div
			{...rest}
			className={`${classes} ${className}`}
			style={style}
		>
			<div className={getClassNames(styles, 'dropdown-wrap')}>
				{childrenWithProps}
			</div>
		</div>
	);
};
DropdownMenu.displayName = 'DropdownMenu';
DropdownMenu.propTypes = IDropdownMenuPropsType;
DropdownMenu.defaultProps = IDropdownMenuDefaultProps;

export default DropdownMenu
