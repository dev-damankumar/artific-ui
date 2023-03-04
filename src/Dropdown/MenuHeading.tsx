import React, {useContext} from 'react'
import getClassNames from '../utils/classes/getClassnames'
import classes from './Dropdown.module.css'
import {IDiv} from '../types/Common.types'
import {ThemeContext} from '../ThemeProvider'

export const MenuHeading: React.FC<IDiv> = ({
                                                className,
                                                style,
                                                children,
                                                ...rest
                                            }) => {
    const context = useContext(ThemeContext)
    return (
        <div
            {...rest}
            data-theme-id={context?.themeId || ''}
            style={style}
            className={`${getClassNames(
                classes,
                'dropdown-header',
            )} ${className}`}
        >
            {children}
        </div>
    )
}
MenuHeading.displayName = 'MenuHeading'
export default MenuHeading
