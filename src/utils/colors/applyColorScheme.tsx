import React from 'react'
import {ColorScheme, ComponentsType} from '../../types/Common.types'
import createTheme from '../styles/theme'

const applyColorScheme = (
    componentSelector: ComponentsType,
    colorScheme: ColorScheme | undefined,
    componentId: string,
) => {
    if (colorScheme) {
        const scheme = colorScheme as ColorScheme
        if (!scheme) return null
        let css: React.ReactNode = null
        css = (
            <style>
                {createTheme(
                    {
                        primary: {
                            main: {
                                background: scheme.background,
                                backgroundColor: scheme.backgroundColor
                                    ? scheme.backgroundColor
                                    : scheme.background,
                            },
                            text: scheme.color,
                        },
                    },
                    {
                        scope: 'local',
                        themeId: '',
                        componentId,
                        componentSelector,
                    },
                )}
            </style>
        )
        return () => css
    }
    return
}

export default applyColorScheme
