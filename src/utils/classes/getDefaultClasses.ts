import sizeClasses from "./sizeClasses";
import getRandomClassId from "../uuids/generateRandomClassId";
import {ColorScheme, ComponentsType} from "../../types/Common.types";
import getClassNames from "./getClassnames";
import applyColorScheme from "../colors/applyColorScheme";

interface CSSClasses {

}

type IStyleConfig = {
	theme: IStyleThemeConfig
} | null

interface IStyleThemeConfig {
	default?: boolean
}

const defaultStyles = {
	theme: {
		default: true
	}
}

const getDefaultClasses = (styles: CSSClasses, componentSelector: ComponentsType, className: string = '', theme: string = '', layout: string = '', variant: string = '', size: string = '', colorScheme: ColorScheme = null, config: IStyleConfig = defaultStyles) => {
	const id = getRandomClassId();
	const componentId = `${componentSelector}-${id}`;
	const layoutClass = layout !== 'default' ? `${componentSelector}-${layout}` : '';
	const variantClass = variant !== 'default' ? `${componentSelector}-${variant}` : '';
	const themeClass = !colorScheme ? theme !== 'default' ? `${componentSelector}-${theme}` : config?.theme?.default ? `${componentSelector}-primary` : '' : `${componentSelector}-primary`;
	const sizeClass = sizeClasses(componentSelector, size);
	let customCss = null
	if (colorScheme) {
		customCss = applyColorScheme(componentSelector, colorScheme, componentId)
	}
	return {
		componentId,
		customCss,
		classNames: `${componentSelector !== 'accordion' ? componentSelector : ''} ${componentId} ${className} ${getClassNames(styles, themeClass, layoutClass, variantClass, sizeClass, componentSelector !== 'accordion' ? componentSelector : '')}`
	}
}

export default getDefaultClasses
