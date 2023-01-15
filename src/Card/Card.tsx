import React from 'react';
import classes from './Card.module.css';
import getClassNames from '../utils/getClassnames';
import {defaultProps, ICardProps, propTypes} from '../types/card';
import applyColorScheme from "../utils/applyColorScheme";
import getRandomClassId from "../utils/generateRandonClassId";

export const Card: React.FC<ICardProps> = (
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
	const id = getRandomClassId();
	const componentId = 'card';
	const componentSelector = `${componentId}-${id}`;
	const themeClasses = theme ? `bg-${colorScheme ? 'primary' : theme}` : '';
	const layoutClasses = layout !== 'default' ? `card-${layout}` : '';
	const variantClasses = variant !== 'default' ? `card-${variant}` : '';

	const customCss = applyColorScheme(componentSelector, colorScheme, componentId)
	// const sizeClass = sizeClasses('card-image', size);
	return (
		<>
			{customCss && customCss()}
			<div {...rest}
				 className={`${
					 getClassNames(
						 classes,
						 'card',
						 direction === 'row' ? 'card-row' : '',
						 layoutClasses,
						 themeClasses,
						 variantClasses,
						 // sizeClass
					 )} ${className} ${componentSelector}`}>
				{children}
			</div>
		</>

	);
};
Card.displayName = 'Card';
Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card
