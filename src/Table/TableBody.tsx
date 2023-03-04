import React, {useContext} from 'react'

import PropTypes from 'prop-types'
import {ITbody} from '../types/Common.types'
import {ThemeContext} from '../ThemeProvider'

export const TableBody: React.FC<{ children: React.ReactNode } & ITbody> = ({
                                                                                children,
                                                                                ...rest
                                                                            }) => {
    const context = useContext(ThemeContext)
    return (
        <tbody {...rest} data-theme-id={context?.themeId || ''}>
        {children}
        </tbody>
    )
}

TableBody.displayName = 'TableBody'
TableBody.propTypes = {
    children: PropTypes.node,
}

export default TableBody
