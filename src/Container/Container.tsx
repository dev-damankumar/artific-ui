import React, {useContext} from 'react'

import styles from './Container.module.css'
import getClassNames from '../utils/classes/getClassnames'
import PropTypes from 'prop-types'
import {IDiv, Sizes, SizesArray} from '../types/Common.types'
import {ThemeContext} from '../ThemeProvider'

interface IContainerProps {
    children: React.ReactNode
    style?: React.CSSProperties
    fluid?: boolean
    size?: Sizes
}

export const Container: React.FC<IContainerProps & IDiv> = ({
                                                                style = {},
                                                                className = '',
                                                                size,
                                                                fluid,
                                                                children,
                                                                ...rest
                                                            }) => {
    const context = useContext(ThemeContext)
    const sizeClass = fluid ? '' : `container-${size}`
    return (
        <div
            {...rest}
            data-theme-id={context?.themeId || ''}
            style={style}
            className={`${className} ${getClassNames(
                styles,
                fluid ? 'container-fluid' : 'container',
                sizeClass,
            )}`.trim()}
        >
            {children}
        </div>
    )
}

Container.displayName = 'Container'
Container.propTypes = {
    children: PropTypes.node,

    fluid: PropTypes.bool,
    size: PropTypes.oneOf<Sizes>(SizesArray),
}
Container.defaultProps = {
    fluid: false,
    size: 'md' as Sizes,
}
export default Container
