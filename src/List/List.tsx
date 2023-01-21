import React from 'react';
import styles from './List.module.css';
import getClassNames from '../utils/classes/getClassnames';
import {defaultPropTypes, IListProps, propTypes} from '../types/list';
import {IUl} from "../types/common";
import getDefaultClasses from "../utils/classes/getDefaultClasses";
import {addPropsToChildren} from "../utils/helpers";

export const List: React.FC<IListProps & IUl> = (
	{
		className,
		children,
		theme,
		layout,
		variant,
		direction,
		size,
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
List.defaultProps = defaultPropTypes;

export default List
