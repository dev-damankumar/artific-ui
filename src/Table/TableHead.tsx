import React, {useContext} from 'react'

import PropTypes from 'prop-types'
import {ITbody} from '../types/Common.types'
import {ThemeContext} from '../ThemeProvider'

export const TableHead: React.FC<{ children: React.ReactNode } & ITbody> = ({
                                                                                children,
                                                                                ...rest
                                                                            }) => {
    const context = useContext(ThemeContext)
    return (
        <thead {...rest} data-theme-id={context?.themeId || ''}>
        {children}
        </thead>
    )
}

TableHead.displayName = 'TableHead'
TableHead.propTypes = {
    children: PropTypes.node,
}

export default TableHead
