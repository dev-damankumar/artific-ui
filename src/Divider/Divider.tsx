import React, {useContext} from 'react'
import styles from './Divider.module.css'
import getClassNames from '../utils/classes/getClassnames'
import {IDiv} from '../types/Common.types'
import {ThemeContext} from '../ThemeProvider'

export const Divider: React.FC<{ direction?: 'horizontal' | 'vertical'; children?: React.ReactNode } & IDiv> = ({direction = 'horizontal'}) => {
    const context = useContext(ThemeContext)
    return (
        <div
            className={getClassNames(
                styles,
                'divider',
                direction === 'vertical' ? 'divider-vertical' : '',
            )}
            data-theme-id={context?.themeId || ''}
        />
    )
}

Divider.displayName = 'Divider'
export default Divider
