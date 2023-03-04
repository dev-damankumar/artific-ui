import React, {useContext} from 'react'
import classes from './List.module.css'
import getClassNames from '../utils/classes/getClassnames'
import {IListItemProps, ListItemPropTypes} from './List.types'
import {ILi} from '../types/Common.types'
import {ThemeContext} from '../ThemeProvider'

export const ListItem: React.FC<Omit<ILi, 'prefix'> & IListItemProps> = (
    {
        children,
        prefix,
        suffix,
        disabled = false,
        ...rest
    }) => {
    const context = useContext(ThemeContext)
    return (
        <li
            {...rest}
            data-theme-id={context?.themeId || ''}
            className={`${getClassNames(
                classes,
                'list-group-item',
                disabled ? 'disabled' : '',
            )}`}
        >
            {prefix && (
                <div className={getClassNames(classes, 'list-icon-left')}>
                    {prefix}
                </div>
            )}
            {children}
            {suffix && (
                <div className={getClassNames(classes, 'list-icon-right')}>
                    {suffix}
                </div>
            )}
        </li>
    )
}
ListItem.displayName = 'List'
ListItem.propTypes = ListItemPropTypes

export default ListItem
