import React from 'react';

import getClassNames from '../../utils/classes/getClassnames';
import classes from '../Dropdown.module.css';
import {IMenuItemProps, IMenuItemPropsType} from '../Dropdown.types';
import {ILink} from "../../types/Common.types";

export const MenuItem: React.FC<IMenuItemProps & ILink> = (
	{
		active,
		onSelect,
		className,
		style,
		children,
		closeHandler,
		autoClose,
		...rest
	}) => {
	return (
		<a
			{...rest}
			style={style}
			onClick={(e) => {
				onSelect?.(e);
				rest?.onClick?.(e);
				if (autoClose) {
					closeHandler!();
				}
			}}
			className={`${getClassNames(classes, 'dropdown-item', active ? 'active' : '')} ${className}`}
		>
			{children}
		</a>
	);
};
MenuItem.displayName = 'MenuItem';
MenuItem.propTypes = IMenuItemPropsType;

export default MenuItem
