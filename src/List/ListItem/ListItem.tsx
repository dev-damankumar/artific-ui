import React from 'react';
import classes from '../List.module.css';
import bgClasses from '../../bg.module.css';
import getClassNames from '../../utils/classes/getClassnames';
import {IListItemProps} from '../../types/list';
import {ILi} from "../../types/common";

export const ListItem: React.FC<IListItemProps & ILi> = (
	{
		children,
		theme = 'primary',
		prefix,
		suffix,
		...rest
	}) => {
	let themeClasses = theme ? `bg-${theme}` : '';
	return (
		<li {...rest}
			className={`${getClassNames(classes, 'list-group-item')} ${getClassNames(bgClasses, themeClasses)}`}>
			{prefix && <div className={getClassNames(classes, 'list-icon-left')}>{prefix}</div>}
			{children}
			{suffix && <div className={getClassNames(classes, 'list-icon-right')}>{suffix}</div>}
		</li>
	);
};

export default ListItem;
