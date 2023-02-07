import React from 'react';
import classes from './List.module.css';
import getClassNames from '../utils/classes/getClassnames';
import {IListItemProps, ListItemPropTypes} from './List.types';
import {ILi} from "../types/Common.types";

export const ListItem: React.FC<IListItemProps & ILi> = (
	{
		children,
		theme = 'primary',
		prefix,
		suffix,
		disabled = false,
		...rest
	}) => {
	return (
		<li {...rest}
			className={`${getClassNames(classes, 'list-group-item', disabled ? 'disabled' : '')}`}>
			{prefix && <div className={getClassNames(classes, 'list-icon-left')}>{prefix}</div>}
			{children}
			{suffix && <div className={getClassNames(classes, 'list-icon-right')}>{suffix}</div>}
		</li>
	);
};
ListItem.displayName = 'List';
ListItem.propTypes = ListItemPropTypes;

export default ListItem;
