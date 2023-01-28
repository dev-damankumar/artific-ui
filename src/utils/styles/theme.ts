import Color from 'color';

interface IMain {
	background: string;
	backgroundColor: string;
}

interface IConfig {
	themeId: string;
	scope: 'global' | 'local'
	componentId?: string;
	componentSelector?: string;
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
const createTheme = (theme: object, config: IConfig = {
	scope: 'global',
	themeId: ''
}) => {
	let themeStyle = '';
	Object.keys(theme).forEach((t: string) => {
		const {main, text, $hover} = (theme[t as keyof object] as any);
		const {background, backgroundColor} = getBackgroundColors(main)
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
	`
	})
	return themeStyle
}

export default createTheme
