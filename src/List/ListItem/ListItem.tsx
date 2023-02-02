import React from 'react';

import classes from '../List.module.css';
import getClassNames from '../../utils/classes/getClassnames';
import {IListItemProps, ListItemDefaultPropTypes, ListItemPropTypes} from '../List.types';
import {ILi} from "../../types/Common.types";

export const ListItem: React.FC<IListItemProps & ILi> = (
	{
		children,
		theme,
		prefix,
		suffix,
		disabled,
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
ListItem.defaultProps = ListItemDefaultPropTypes;

export default ListItem;
