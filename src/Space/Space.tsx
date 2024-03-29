import React, {useContext} from 'react'
import styles from './Space.module.css'
import getClassNames from '../utils/classes/getClassnames'
import PropTypes from 'prop-types'
import {Axis, AxisArray, IDiv} from '../types/Common.types'
import {ThemeContext} from '../ThemeProvider'

interface IColProps {
    children: React.ReactNode
    direction?: Axis
    align?: AlignType
    wrap?: boolean
    gap?: number | [number, number]
}

export const AlignTypeArray = [
    'start',
    'end',
    'center',
    'baseline',
    'default',
] as const
export type AlignType = (typeof AlignTypeArray)[number]

export const Space: React.FC<IColProps & IDiv> = ({
                                                      wrap = true,
                                                      direction = 'horizontal',
                                                      gap = 10,
                                                      children,
                                                      align = 'default',
                                                      ...rest
                                                  }) => {
    const context = useContext(ThemeContext)
    let gapStyle: any = gap
    let directionStyle: any = 'column'
    if (typeof gapStyle === 'number') {
        directionStyle = direction === 'horizontal' ? `row` : 'column'
    }
    if (Array.isArray(gapStyle) && gapStyle.length === 2) {
        gapStyle = `${gapStyle[1]}px ${gapStyle[0]}px`
    }
    const mainStyle = {gap: gapStyle, flexDirection: directionStyle}
    const alignClasses = align !== 'default' ? `space-align-${align}` : ''
    return (
        <div
            {...rest}
            data-theme-id={context?.themeId || ''}
            style={{...rest.style, ...mainStyle}}
            className={`${getClassNames(
                styles,
                alignClasses,
                'space',
                wrap ? 'space-wrap' : '',
                `space-direction-${directionStyle}`,
            )}`}
        >
            {children}
        </div>
    )
}

Space.displayName = 'Space'
Space.propTypes = {
    children: PropTypes.node,
    wrap: PropTypes.bool,
    direction: PropTypes.oneOf(AxisArray),
    align: PropTypes.oneOf(AlignTypeArray),
    gap: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.arrayOf(PropTypes.number),
        PropTypes.any,
    ]),
}

export default Space
