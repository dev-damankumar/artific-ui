import React, {CSSProperties, useContext} from 'react'
import styles from './ButtonGroup.module.css'
import getClassNames from '../utils/classes/getClassnames'
import sizeClasses from '../utils/classes/sizeClasses'
import {Axis, AxisArray, ColorScheme, IDiv, Layouts, Sizes, SizesArray, Themes, Variants,} from '../types/Common.types'
import PropTypes from 'prop-types'
import {addPropsToChildren} from '../utils/helpers'
import {ThemeContext} from '../ThemeProvider'

export interface IButtonGroupProps {
    children: React.ReactNode
    direction?: Axis
    style?: CSSProperties
    theme?: Themes
    colorScheme?: ColorScheme
    variant?: Variants
    layout?: Layouts
    size?: Sizes
}

export const ButtonGroup: React.FC<IButtonGroupProps & Omit<IDiv, 'prefix'>> = ({
                                                                                    children,
                                                                                    size = 'md',
                                                                                    direction = 'horizontal',
                                                                                    theme = 'primary',
                                                                                    layout = 'default',
                                                                                    variant = 'default',
                                                                                    colorScheme,
                                                                                    ...rest
                                                                                }) => {
    const context = useContext(ThemeContext)
    const sizeClass = sizeClasses('btn-group', size)
    const directionClasses =
        direction !== 'horizontal' ? `btn-group-${direction}` : 'btn-group'
    const childrenWithProps = addPropsToChildren(
        children,
        {theme, layout, colorScheme, variant},
        true,
    )
    return (
        <>
            <div
                {...rest}
                data-theme-id={context?.themeId || ''}
                className={getClassNames(styles, sizeClass, directionClasses)}
            >
                {childrenWithProps}
            </div>
        </>
    )
}

export const propTypes = {
    children: PropTypes.node,
    size: PropTypes.oneOf(SizesArray),
    direction: PropTypes.oneOf(AxisArray),
}

ButtonGroup.displayName = 'ButtonGroup'
ButtonGroup.propTypes = propTypes
export default ButtonGroup
