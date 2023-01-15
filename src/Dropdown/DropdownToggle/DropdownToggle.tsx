import React from 'react';
import getClassNames from '../../utils/getClassnames';
import classes from '../Dropdown.module.css';
import {Button, IButtonProps} from "../../Button";
import {defaultProps, propTypes} from "../../types/button";

export const DropdownToggle: React.FC<IButtonProps> = (
	{
		style,
		className = '',
		children,
		onClick,
		colorScheme,
	}) => {
	return (
		<Button
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
