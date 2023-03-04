import React, {useContext} from 'react'

import PropTypes from 'prop-types'
import {Typography} from '../Typography'
import {ITd} from '../types/Common.types'
import {ThemeContext} from '../ThemeProvider'

export const TableCell: React.FC<{ children: React.ReactNode } & ITd> = ({
                                                                             children,
                                                                             ...rest
                                                                         }) => {
    const context = useContext(ThemeContext)
    return (
        <td {...rest} data-theme-id={context?.themeId || ''}>
            <Typography
                fontSize="inherit"
                style={{color: 'inherit'}}
                as="div"
            >
                {children}
            </Typography>
        </td>
    )
}

TableCell.displayName = 'TableCell'
TableCell.propTypes = {
    children: PropTypes.node,
}

export default TableCell
