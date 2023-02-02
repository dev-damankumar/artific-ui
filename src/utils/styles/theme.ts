import Color from 'color';
import {ComponentsType, Themes, ThemesArray} from "../../types/common.types";
import {ComponentsArray} from "../constants";

interface IMain {
	background: string;
	backgroundColor: string;
}

interface IThemeProps {
	background: string;
	backgroundColorHover: string;
	backgroundColor: string;
	textHover: string;
	text: string;
	boxShadow: string;
	isBackgroundImage: boolean;
	backgroundHover: string;
}

interface IConfig {
	themeId: string;
	scope: 'global' | 'local'
	componentId?: string;
	componentSelector?: ComponentsType;
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
	const {main, text} = (hover as any);
	const {background, backgroundColor} = getBackgroundColors(main)
	return {backgroundHover: background, backgroundColorHover: backgroundColor, textHover: text}
}

const getDefaultHoverColors = (bgHsl: any) => {
	const {h, s, l, alpha} = (bgHsl as any);
	const hoverBg = `hsla(${h},${s}%,${l - 5}%,${alpha ? alpha : '1'})`
	return {
		backgroundHover: hoverBg,
		backgroundColorHover: hoverBg,
	}
}

const createNewTheme = (themeName: string, config: IConfig, themeProps: IThemeProps) => {
	let styles = `#${config.themeId} {`
	ComponentsArray.forEach(component => {
		styles += `--${component}-background: var(--${themeName});
				   --${component}-background-color: var(--${themeName});
				   --${component}-text: var(--${themeName}-text);
				   --${component}-hover: ${themeProps.isBackgroundImage ? themeProps.background : themeProps.backgroundHover};
				   --${component}-color-hover: ${themeProps.backgroundColorHover};
				   --${component}-text-hover: ${themeProps.textHover || themeProps.text};
				   --${component}-hover-box-shadow : ${themeProps.boxShadow};
    `

	})
	styles += '}'
	return styles
}
const createTheme = (theme: object, config: IConfig = {
	scope: 'global',
	themeId: ''
}) => {
	let themeStyle = '';
	Object.keys(theme).forEach((t: string) => {

		const {main, text, $hover} = (theme[t as keyof object] as any);
		const {background, backgroundColor} = getBackgroundColors(main)
		let newThemeStyles = ''

		const bgColorObject = Color(backgroundColor).hsl().object()
		const boxShadow = `hsla(${bgColorObject.h},${bgColorObject.s}%, 90%, ${bgColorObject.alpha ? bgColorObject.alpha : '1'})`
		let {backgroundHover, backgroundColorHover} = getDefaultHoverColors(bgColorObject)
		let textHover = null
		if (($hover)) {
			const colors = getHoverColors($hover)
			backgroundHover = colors.backgroundHover
			backgroundColorHover = colors.backgroundColorHover
			textHover = colors.textHover
		}
		const isBackgroundImage = (background.includes('gradient') || background.includes('url'))
		if (!ThemesArray.includes(t as Themes)) {
			newThemeStyles = createNewTheme(t, config, {
				backgroundColorHover,
				textHover,
				text,
				boxShadow,
				isBackgroundImage,
				background,
				backgroundHover,
				backgroundColor
			})
		}
		themeStyle += `
		${config.scope === 'local' ? `.${config.componentId}` : `#${config.themeId}`}{
			--${t}:${background} ;
			--${t}-color: ${backgroundColor};
			--${t}-text: ${text};
			--${t}-hover: ${isBackgroundImage ? background : backgroundHover};
			--${t}-color-hover: ${backgroundColorHover};
			--${t}-text-hover: ${textHover || text};
			--${t}-hover-box-shadow : ${boxShadow};
		}
		${newThemeStyles}
	`
	})
	return themeStyle
}

export default createTheme
