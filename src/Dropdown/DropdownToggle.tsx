import React, {useContext} from 'react';
import getClassNames from '../utils/classes/getClassnames';
import classes from './Dropdown.module.css';
import {Button, IButtonProps} from "../Button";
import {propTypes} from "../Button/Button.types";
import {IButton} from "../types/Common.types";
import {ThemeContext} from "../ThemeProvider";

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
	const context = useContext(ThemeContext)
	return (
		<Button
			{...rest} data-theme-id={context?.themeId || ''}
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
export default DropdownToggle
