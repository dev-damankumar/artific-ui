import React, {useContext} from 'react'

import PropTypes from 'prop-types'
import {Typography} from '../Typography'
import {ITh} from '../types/Common.types'
import {ThemeContext} from '../ThemeProvider'

export const TableHeading: React.FC<{ children: React.ReactNode } & ITh> = ({
                                                                                children,
                                                                                ...rest
                                                                            }) => {
    const context = useContext(ThemeContext)
    return (
        <th {...rest} data-theme-id={context?.themeId || ''}>
            <Typography
                fontSize="inherit"
                fontWeight="bold"
                style={{color: 'inherit'}}
                as="div"
            >
                {children}
            </Typography>
        </th>
    )
}

TableHeading.displayName = 'TableHeading'
TableHeading.propTypes = {
    children: PropTypes.node,
}

export default TableHeading
