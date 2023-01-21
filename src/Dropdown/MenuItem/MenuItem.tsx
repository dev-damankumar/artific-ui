import React from 'react';
import getClassNames from '../../utils/classes/getClassnames';
import classes from '../Dropdown.module.css';
import {IMenuItemProps, IMenuItemPropsType} from '../../types/dropdown';
import {ILink} from "../../types/common";

export const MenuItem: React.FC<IMenuItemProps & ILink> = (
	{
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
			className={`${getClassNames(classes, 'dropdown-item')} ${className}`}
		>
			{children}
		</a>
	);
};
MenuItem.displayName = 'MenuItem';
MenuItem.propTypes = IMenuItemPropsType;

export default MenuItem
