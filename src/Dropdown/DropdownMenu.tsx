import React, {useContext} from 'react'
import getClassNames from '../utils/classes/getClassnames'
import styles from './Dropdown.module.css'
import {IDropdownMenu, IDropdownMenuPropsType} from './Dropdown.types'
import {IDiv} from '../types/Common.types'
import {addPropsToChildren} from '../utils/helpers'
import {ThemeContext} from '../ThemeProvider'

export const DropdownMenu: React.FC<IDropdownMenu & IDiv> = (
    {
        children,
        className = '',
        style,
        position = 'before',
        autoClose,
        onClick,
        ...rest
    }) => {
    const context = useContext(ThemeContext)
    const classes = getClassNames(
        styles,
        'dropdown-menu',
        position === 'after' ? 'dropdown-menu-right' : '',
    )
    const childrenWithProps = addPropsToChildren(children, {}, false)

    return (
        <div
            {...rest}
            data-theme-id={context?.themeId || ''}
            className={`${classes} ${className}`}
            style={style}
            onClick={e => {
                if (autoClose) {
                    onClick?.(e)
                }
            }}
        >
            <div className={getClassNames(styles, 'dropdown-wrap')}>
                {childrenWithProps}
            </div>
        </div>
    )
}
DropdownMenu.displayName = 'DropdownMenu'
DropdownMenu.propTypes = IDropdownMenuPropsType

export default DropdownMenu
