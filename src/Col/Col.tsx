import React, {useContext} from 'react'
import styles from './Col.module.css'
import getClassNames from '../utils/classes/getClassnames'
import PropTypes from 'prop-types'
import {IDiv, Sizes, SizesArray} from '../types/Common.types'
import {ThemeContext} from '../ThemeProvider'

export const ColArray = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    'auto',
    undefined,
] as const
export type Column = (typeof ColArray)[number]

export const OrderArray = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    'first',
    'last',
    undefined,
] as const
export type Order = (typeof OrderArray)[number]

export const OffsetArray = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    undefined,
] as const
export type Offset = (typeof OffsetArray)[number]

export const JustifyArray = [
    'start',
    'end',
    'center',
    'space-between',
    'space-around',
    'space-evenly',
] as const
export type Justify = (typeof JustifyArray)[number]

interface IColProps {
    children: React.ReactNode
    style?: React.CSSProperties
    size?: Sizes
    col?: Column
    order?: Order
    offset?: Offset
    justify?: Justify
}

export const Col: React.FC<IColProps & IDiv> = ({
                                                    col = undefined,
                                                    size = undefined,
                                                    style = {},
                                                    className = '',
                                                    order = undefined,
                                                    offset = undefined,
                                                    justify = 'start',
                                                    children,
                                                    ...rest
                                                }) => {
    const context = useContext(ThemeContext)
    const sizeClass =
        col === undefined
            ? size !== undefined
                ? `col-${size}`
                : 'col'
            : size !== undefined
                ? `col-${size}-${col}`
                : `col-${col}`
    const orderClass = order !== undefined ? `order-${order}` : ''
    const offsetClass = offset !== undefined ? `offset-${offset}` : ''
    const justifyClass = justify !== 'start' ? justify : 'flex-start'
    const mainStyles = {
        justifyContent: justifyClass,
    }
    return (
        <div
            {...rest}
            data-theme-id={context?.themeId || ''}
            style={{...mainStyles, ...style}}
            className={`${className} ${getClassNames(
                styles,
                'col',
                sizeClass,
                offsetClass,
                orderClass,
            )}`}
        >
            {children}
        </div>
    )
}

Col.displayName = 'Col'
Col.propTypes = {
    children: PropTypes.node,
    size: PropTypes.oneOf<Sizes>(SizesArray),
    col: PropTypes.oneOf<Column>(ColArray),
    order: PropTypes.oneOf<Order>(OrderArray),
    offset: PropTypes.oneOf<Offset>(OffsetArray),
    justify: PropTypes.oneOf<Justify>(JustifyArray),
}

export default Col
