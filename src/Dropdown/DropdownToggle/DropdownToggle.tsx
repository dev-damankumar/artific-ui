import React from 'react';
import getClassNames from '../../utils/classes/getClassnames';
import classes from '../Dropdown.module.css';
import {Button, IButtonProps} from "../../Button";
import {defaultProps, propTypes} from "../../types/button.types";
import {IButton} from "../../types/common.types";

export const DropdownToggle: React.FC<IButtonProps & IButton> = (
	{
		style,
		className = '',
		children,
		onClick,
		colorScheme,
		theme,
		...rest
	}) => {
	return (
		<Button
			{...rest}
			style={{...style, margin: '0'}}
			onClick={onClick}
			colorScheme={colorScheme}
			type='button'
			theme={theme}
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
