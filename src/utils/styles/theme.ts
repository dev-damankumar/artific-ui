import Color from 'color'
import {ComponentsType, Themes, ThemesArray} from '../../types/Common.types'
import {ComponentsArray, prefix} from '../constants'

interface IMain {
    background: string
    backgroundColor: string
}

interface IThemeProps {
    background: string
    backgroundColorHover: string
    backgroundColor: string
    textHover: string
    text: string
    boxShadow: string
    isBackgroundImage: boolean
    backgroundHover: string
}

interface IConfig {
    themeId: string
    scope: 'global' | 'local'
    componentId?: string
    componentSelector?: ComponentsType
}

const getBackgroundColors = (main: string | IMain) => {
    let bg = ''
    let bgColor = ''

    if (typeof main === 'string') {
        bg = main
        bgColor = main
    }
    if (typeof main === 'object' && main.background && main.backgroundColor) {
        bg = main.background
        bgColor = main.backgroundColor
    }
    return {background: bg, backgroundColor: bgColor}
}

const getHoverColors = (hover: any) => {
    const {main, text} = hover as any
    const {background, backgroundColor} = getBackgroundColors(main)
    return {
        backgroundHover: background,
        backgroundColorHover: backgroundColor,
        textHover: text,
    }
}

const getDefaultHoverColors = (bgHsl: any) => {
    const {h, s, l, alpha} = bgHsl as any
    const hoverBg = `hsla(${h},${s}%,${l - 5}%,${alpha ? alpha : '1'})`
    return {
        backgroundHover: hoverBg,
        backgroundColorHover: hoverBg,
    }
}

const createNewTheme = (
    themeName: string,
    config: IConfig,
    themeProps: IThemeProps,
) => {
    let styles = `#${config.themeId} {`
    ComponentsArray.forEach(component => {
        styles += `--${prefix}-${component}-background: var(--${themeName});
				   --${prefix}-${component}-background-color: var(--${themeName});
				   --${prefix}-${component}-text: var(--${themeName}-text);
				   --${prefix}-${component}-hover: ${
            themeProps.isBackgroundImage
                ? themeProps.background
                : themeProps.backgroundHover
        };
				   --${prefix}-${component}-color-hover: ${themeProps.backgroundColorHover};
				   --${prefix}-${component}-text-hover: ${
            themeProps.textHover || themeProps.text
        };
				   --${prefix}-${component}-hover-box-shadow : ${themeProps.boxShadow};
				   ${
            themeProps.isBackgroundImage
                ? `--${component}-gradient-hover:hsla(0, 0%, 0%, 0.15);`
                : ''
        }
    `
    })
    styles += '}'
    return styles
}
const createTheme = (
    theme: object,
    config: IConfig = {
        scope: 'global',
        themeId: '',
    },
) => {
    let themeStyle = ''
    Object.keys(theme).forEach((t: string) => {
        const {main, text, $hover} = theme[t as keyof object] as any
        const {background, backgroundColor} = getBackgroundColors(main)
        let newThemeStyles = ''

        const bgColorObject = Color(backgroundColor).hsl().object()
        const boxShadow = `hsla(${bgColorObject.h},${bgColorObject.s}%, 90%, ${
            bgColorObject.alpha ? bgColorObject.alpha : '1'
        })`
        let {backgroundHover, backgroundColorHover} =
            getDefaultHoverColors(bgColorObject)
        let textHover = null
        if ($hover) {
            const colors = getHoverColors($hover)
            backgroundHover = colors.backgroundHover
            backgroundColorHover = colors.backgroundColorHover
            textHover = colors.textHover
        }
        const isBackgroundImage =
            background.includes('gradient') || background.includes('url')
        if (!ThemesArray.includes(t as Themes)) {
            newThemeStyles = createNewTheme(t, config, {
                backgroundColorHover,
                textHover,
                text,
                boxShadow,
                isBackgroundImage,
                background,
                backgroundHover,
                backgroundColor,
            })
        }
        themeStyle += `
		${
            config.scope === 'local'
                ? `.${config.componentId}`
                : `[data-theme-id='${config.themeId}']`
        }{
			--${prefix}-${t}:${background} ;
			--${prefix}-${t}-color: ${backgroundColor};
			--${prefix}-${t}-text: ${text};
			--${prefix}-${t}-hover: ${isBackgroundImage ? background : backgroundHover};
			--${prefix}-${t}-color-hover: ${
            isBackgroundImage ? background : backgroundColorHover
        };
			--${prefix}-${t}-text-hover: ${textHover || text};
			--${prefix}-${t}-hover-box-shadow : ${boxShadow};
			${isBackgroundImage ? `--${t}-gradient-hover:hsla(0, 0%, 0%, 0.15);` : ''}
		}
		${newThemeStyles}
	`
    })
    return themeStyle
}

export default createTheme
