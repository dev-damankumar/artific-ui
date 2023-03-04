import React, {useState} from 'react'
import createTheme from '../utils/styles/theme'
import generateRandomClassId from '../utils/uuids/generateRandomClassId'
import {addPropsToChildren} from '../utils/helpers'

interface ITheme {
    usingThemeProvider: boolean
    theme: object
    themeId: string
    setTheme: (theme: object) => void
}

export const ThemeContext = React.createContext<ITheme | null>({
    usingThemeProvider: false,
    theme: {},
    themeId: '',
    setTheme: () => {
        return
    }
})

export const ThemeProvider: React.FC<{
    children: React.ReactNode
    theme: object
}> = ({children, theme}) => {
    const [themeState, setTheme] = useState<object>(theme)
    const usingThemeProvider = true
    const themeId = generateRandomClassId()
    const themeStyle = createTheme(theme, {
        themeId,
        scope: 'global',
    })
    const childrenWithProps = addPropsToChildren(children, {
        'data-theme-id': themeId,
    })
    return (
        <ThemeContext.Provider
            value={{theme: themeState, setTheme, usingThemeProvider, themeId}}
        >
            <style data-artific-css={themeId}>{themeStyle && themeStyle}</style>
            {childrenWithProps}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider
