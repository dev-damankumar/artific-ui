import React, {useContext} from 'react'
import getClassNames from '../utils/classes/getClassnames'
import classes from './Dropdown.module.css'
import {IMenuItemProps, IMenuItemPropsType} from './Dropdown.types'
import {ILink} from '../types/Common.types'
import {ThemeContext} from '../ThemeProvider'

export const MenuItem: React.FC<IMenuItemProps & ILink> = (
    {
        active,
        onSelect,
        className,
        style,
        children,
        closeHandler,
        autoClose,
        ...rest
    }) => {
    const context = useContext(ThemeContext)
    return (
        <a
            {...rest}
            data-theme-id={context?.themeId || ''}
            style={style}
            onClick={e => {
                onSelect?.(e)
                rest?.onClick?.(e)
                if (autoClose) {
                    closeHandler?.()
                }
            }}
            className={`${getClassNames(
                classes,
                'dropdown-item',
                active ? 'active' : '',
            )} ${className}`}
        >
            {children}
        </a>
    )
}
MenuItem.displayName = 'MenuItem'
MenuItem.propTypes = IMenuItemPropsType

export default MenuItem
