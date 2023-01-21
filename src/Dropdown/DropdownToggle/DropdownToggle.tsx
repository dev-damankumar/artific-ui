import React from 'react';
import getClassNames from '../../utils/classes/getClassnames';
import classes from '../Dropdown.module.css';
import {Button, IButtonProps} from "../../Button";
import {defaultProps, propTypes} from "../../types/button";
import {IButton} from "../../types/common";

export const DropdownToggle: React.FC<IButtonProps & IButton> = (
	{
		style,
		className = '',
		children,
		onClick,
		colorScheme,
		...rest
	}) => {
	console.log('colorScheme d', colorScheme)
	return (
		<Button
			{...rest}
			style={style}
			onClick={onClick}
			colorScheme={colorScheme}
			type='button'
			className={
				`${getClassNames(classes, 'dropdown-btn', 'dropdown-toggle')} ${className}`
			}
		>
			{children}
		</Button>
	);
};

DropdownToggle.displayName = 'DropdownToggle';
DropdownToggle.propTypes = propTypes;
DropdownToggle.defaultProps = defaultProps;
export default DropdownToggle
