import React from 'react';
import classes from './List.module.css';
import getClassNames from '../utils/getClassnames';
import sizeClasses from '../utils/sizeClasses';
import {defaultPropTypes, IListProps, propTypes} from '../types/list';
import getRandomClassId from "../utils/generateRandonClassId";
import applyColorScheme from "../utils/applyColorScheme";

export const List: React.FC<IListProps> = (
	{
		children,
		theme,
		layout,
		variant,
		direction,
		size,
		colorScheme
	}) => {
	const id = getRandomClassId();
	const componentId = 'list';
	const componentSelector = `${componentId}-${id}`;
	let directionClasses = direction !== 'column' ? `list-group-${direction}` : '';
	let layoutClasses = layout !== 'default' ? `list-${layout}` : '';
	let variantClasses = variant !== 'default' ? `list-${variant}` : '';
	let sizeClass = sizeClasses('list', size);
	const childrenWithProps = React.Children.map(children, child => {
		if (React.isValidElement(child)) {
			return React.cloneElement(child, {theme, ...child.props});
		}
		return child;
	});
	const customCss = applyColorScheme(componentSelector, colorScheme, componentId)
	return (
		<>
			{customCss && customCss()}
			<ul className={
				`${componentSelector} ${getClassNames(classes, 'list-group', layoutClasses, variantClasses, directionClasses, sizeClass)}`
			}>
				{childrenWithProps}
			</ul>
		</>
	);
};

List.displayName = 'Button';
List.propTypes = propTypes;
List.defaultProps = defaultPropTypes;

export default List
