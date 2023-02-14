import React, {useContext} from 'react';
import getClassNames from '../utils/classes/getClassnames';
import {ICardProps, propTypes} from './Card.types';
import getDefaultClasses from "../utils/classes/getDefaultClasses";
import styles from "./Card.module.css";
import {IDiv} from "../types/Common.types";
import {addPropsToChildren} from "../utils/helpers";
import {ThemeContext} from "../ThemeProvider";


export const Card: React.FC<ICardProps & IDiv> = (
	{
		children,
		layout = 'default',
		theme = 'default',
		variant = 'default',
		direction = 'column',
		className,
		size = 'md',
		colorScheme,
		...rest
	}) => {
	const componentSelector = 'card';
	const context = useContext(ThemeContext)
	const {
		classNames, customCss
	} = getDefaultClasses(styles, componentSelector, className, theme, layout, variant, size, colorScheme)
	const classes = getClassNames(
		styles,
		'card',
		direction === 'row' ? 'card-row' : '',
	)

	const childrenWithProps = addPropsToChildren(children, {direction, layout}, true)
	return (
		<>
			{customCss && customCss()}
			<div {...rest} data-theme-id={context?.themeId || ''}
				 className={`${classNames} ${classes}`}>
				{childrenWithProps}
			</div>
		</>

	);
};
Card.displayName = 'Card';
Card.propTypes = propTypes;

export default Card
