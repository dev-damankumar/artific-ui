import React from 'react';
import classes from '../List.module.css';
import bgClasses from '../../bg.module.css';
import getClassNames from '../../utils/getClassnames';
import { IListItemProps } from '../../types/list';

export const ListItem: React.FC<IListItemProps> = (
    {
        children,
        theme = 'primary',
        prefix,
        suffix
    }) => {
    let themeClasses = theme ? `bg-${theme}` : '';
    return (
        <li className={`${getClassNames(classes, 'list-group-item')} ${getClassNames(bgClasses, themeClasses)}`}>
            {prefix && <div className={getClassNames(classes, 'list-icon-left')}>{prefix}</div>}
            {children}
            {suffix && <div className={getClassNames(classes, 'list-icon-right')}>{suffix}</div>}
        </li>
    );
};

export default ListItem;