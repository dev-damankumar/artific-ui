import React from 'react';
import getClassNames from '../../utils/classes/getClassnames';
import classes from '../Dropdown.module.css';
import {IDiv} from "../../types/common.types";

export const MenuHeading: React.FC<IDiv> = (
	{
		className,
		style,
		children,
		...rest
	}) => {
	return (
		<div
			{...rest}
			style={style}
			className={`${getClassNames(classes, 'dropdown-header')} ${className}`}
		>
			{children}
		</div>
	);
};
MenuHeading.displayName = 'MenuHeading';
export default MenuHeading
