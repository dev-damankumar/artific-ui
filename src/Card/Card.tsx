import React from 'react';
import getClassNames from '../utils/classes/getClassnames';
import {defaultProps, ICardProps, propTypes} from '../types/card.types';
import getDefaultClasses from "../utils/classes/getDefaultClasses";
import styles from "./Card.module.css";
import {IDiv} from "../types/common.types";
import {addPropsToChildren} from "../utils/helpers";


export const Card: React.FC<ICardProps & IDiv> = (
	{
		children,
		layout,
		theme,
		variant,
		direction,
		className,
		size,
		colorScheme,
		...rest
	}) => {
	const componentSelector = 'card';
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
			<div {...rest}
				 className={`${classNames} ${classes}`}>
				{childrenWithProps}
			</div>
		</>

	);
};
Card.displayName = 'Card';
Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card
