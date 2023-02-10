import React from 'react';
import styles from './List.module.css';
import getClassNames from '../utils/classes/getClassnames';
import {IListProps, propTypes} from './List.types';
import {IUl} from "../types/Common.types";
import getDefaultClasses from "../utils/classes/getDefaultClasses";
import {addPropsToChildren} from "../utils/helpers";


export const List: React.FC<IListProps & IUl> = (
	{
		className,
		children,
		theme = 'primary',
		layout = 'default',
		variant = 'default',
		direction = 'column',
		size = 'md',
		colorScheme,
		...rest
	}) => {
	const componentSelector = 'list';
	const {
		classNames, customCss
	} = getDefaultClasses(styles, componentSelector, className, theme, layout, variant, size, colorScheme)
	const directionClasses = direction !== 'column' ? `list-group-${direction}` : '';
	const childrenWithProps = addPropsToChildren(children, {theme})

	return (
		<>
			{customCss && customCss()}
			<ul {...rest} className={`${classNames} ${getClassNames(styles, 'list-group', directionClasses)}`}>
				{childrenWithProps}
			</ul>
		</>
	);
};

List.displayName = 'List';
List.propTypes = propTypes;

export default List
