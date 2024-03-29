import React, {useContext, useState} from 'react'
import styles from './Dropdown.module.css'
import getClassNames from '../utils/classes/getClassnames'
import {IDropdownProps, propTypes} from './Dropdown.types'
import {IDiv} from '../types/Common.types'
import getDefaultClasses from '../utils/classes/getDefaultClasses'
import {addPropsToChildren} from '../utils/helpers'
import {ThemeContext} from '../ThemeProvider'

export const Dropdown: React.FC<IDropdownProps & IDiv> = (
    {
        autoClose,
        children,
        className = '',
        style,
        size = 'md',
        position = 'bottom',
        fullwidth,
        layout = 'default',
        variant = 'default',
        theme = 'primary',
        colorScheme,
        ...rest
    }) => {
    const context = useContext(ThemeContext)
    const componentSelector = 'dropdown'
    const [openMenu, setOpenMenu] = useState(false)
    const {classNames, customCss} = getDefaultClasses(
        styles,
        componentSelector,
        className,
        theme,
        layout,
        variant,
        size,
        colorScheme,
    )

    const toggleDropdown = () => {
        setOpenMenu(!openMenu)
    }

    const handleCloseMenu = () => {
        setOpenMenu(false)
    }
    const childrenWithProps = addPropsToChildren(children, {}, false, {
        DropdownToggle: {
            colorScheme,
            theme,
            onClick: toggleDropdown,
        },
        DropdownMenu: {
            autoClose,
            onClick: toggleDropdown,
        },
        MenuItem: {
            closeHandler: handleCloseMenu,
            autoClose,
            onClick: toggleDropdown,
        },
    })

    const classes = getClassNames(
        styles,
        fullwidth ? 'dropdown-fullwidth' : '',
        position !== 'bottom' ? `drop-${position}` : '',
        openMenu ? 'dropdown-open' : '',
    )
    return (
        <>
            {customCss && customCss()}
            <div
                {...rest}
                data-theme-id={context?.themeId || ''}
                style={style}
                data-dropdown
                className={`${classNames} ${classes}`}
            >
                {childrenWithProps}
            </div>
        </>
    )
}
Dropdown.displayName = 'Dropdown'
Dropdown.propTypes = propTypes

export default Dropdown
