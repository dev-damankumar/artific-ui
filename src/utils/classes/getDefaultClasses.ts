import sizeClasses from "./sizeClasses";
import getRandomClassId from "../uuids/generateRandonClassId";
import {ColorScheme, ComponentsType} from "../../types/common";
import getClassNames from "./getClassnames";
import applyColorScheme from "../colors/applyColorScheme";

interface CSSClasses {
	[x: string]: any,
}

const getDefaultClasses = (styles: CSSClasses, componentSelector: ComponentsType, className: string = '', theme: string = '', layout: string = '', variant: string = '', size: string = '', colorScheme: ColorScheme = null) => {
	const id = getRandomClassId();
	const componentId = `${componentSelector}-${id}`;
	const layoutClass = layout !== 'default' ? `${componentSelector}-${layout}` : '';
	const variantClass = variant !== 'default' ? `${componentSelector}-${variant}` : '';
	const themeClass = !colorScheme ? theme !== 'default' ? `${componentSelector}-${theme}` : `${componentSelector}-primary` : `${componentSelector}-primary`;
	const sizeClass = sizeClasses(componentSelector, size);
	const customCss = applyColorScheme(componentSelector, colorScheme, componentId)
	return {
		componentId,
		customCss,
		classNames: `${componentSelector !== 'accordion' ? componentSelector : ''} ${componentId} ${className} ${getClassNames(styles, themeClass, layoutClass, variantClass, sizeClass, componentSelector !== 'accordion' ? componentSelector : '')}`
	}
}

export default getDefaultClasses
