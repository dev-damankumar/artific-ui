import React, {useContext} from 'react'
import {IBadgeProps, propTypes} from './Badge.types'
import {IDiv} from '../types/Common.types'
import styles from './Badge.module.css'
import getClassnames from '../utils/classes/getClassnames'
import {addPropsToChildren} from '../utils/helpers'
import {ThemeContext} from '../ThemeProvider'

export const BadgeGroup: React.FC<IBadgeProps & IDiv> = ({
                                                             children,
                                                             ...rest
                                                         }) => {
    const context = useContext(ThemeContext)
    const componentSelector = 'badge-group'
    const childrenWithProps = addPropsToChildren(children, {...rest})
    return (
        <>
            <div
                {...rest}
                data-theme-id={context?.themeId || ''}
                className={`${
                    rest.className
                } ${componentSelector} ${getClassnames(
                    styles,
                    componentSelector,
                )}`}
            >
                {childrenWithProps}
            </div>
        </>
    )
}

BadgeGroup.displayName = 'BadgeGroup'
BadgeGroup.propTypes = propTypes
export default BadgeGroup
