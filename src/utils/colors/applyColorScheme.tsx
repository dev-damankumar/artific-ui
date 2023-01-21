import React from "react";
import {ColorScheme, ComponentsType} from "../../types/common";
import colorShades from "./colorShades";
import covertColor from "./convertColor";

const applyColorScheme = (componentSelector: ComponentsType, colorScheme: ColorScheme | undefined, componentId: string, variant: string = 'default') => {
	if (colorScheme) {
		const scheme = (colorScheme as ColorScheme)!;
		let css: React.ReactNode;
		if (componentSelector === 'accordion') {
			css = <style>
				{`.${componentId}{
                color: ${scheme.color}; 
                --primary: ${scheme.background};
                ${scheme?.backgroundColor ?
					` --primary-color: ${scheme.backgroundColor};
                --primary-hover: ${!scheme.background.includes('gradient') ? colorShades(-0.2, covertColor(scheme.backgroundColor)) : scheme.background};
                --primary-hover-box-shadow:${colorShades(0.65, covertColor(scheme.backgroundColor))};`
					:
					`--primary-color:${!scheme.background.includes('gradient') ? scheme.background : 'hsla(var(--light-hover),var(--alpha))'};
                --primary-hover: ${!scheme.background.includes('gradient') ? colorShades(-0.2, covertColor(scheme.background)) : scheme.background};
                --primary-hover-box-shadow: ${!scheme.background.includes('gradient') ? colorShades(0.65, covertColor(scheme.background)) : 'hsla(var(--hover-box-shadow),var(--alpha))'};`}
            .${componentId}:not(.${componentId}-disabled,[disabled],.${componentId}-loading,.${componentId}-loading-grow,.${componentId}-outline):hover{
           		background: ${scheme?.backgroundColor ? `${!scheme.background.includes('gradient') ? colorShades(-0.2, covertColor(scheme.backgroundColor)) : scheme.background}` : `${!scheme.background.includes('gradient') ? colorShades(-0.2, covertColor(scheme.background)) : scheme.background}`}
           }
           }
           `}
			</style>;
		} else {
			css = <style>
				{`.${componentId}{
                ${componentSelector !== 'table' && `color: ${scheme.color};`}
                --primary: ${scheme.background};
                ${scheme?.backgroundColor ?
					` --primary-color: ${scheme.backgroundColor};
                --primary-hover: ${!scheme.background.includes('gradient') ? colorShades(-0.2, covertColor(scheme.backgroundColor)) : scheme.background};
                --primary-hover-box-shadow:${colorShades(0.65, covertColor(scheme.backgroundColor))};`
					:
					`--primary-color:${!scheme.background.includes('gradient') ? scheme.background : 'hsla(var(--light-hover),var(--alpha))'};
                --primary-hover: ${!scheme.background.includes('gradient') ? colorShades(-0.2, covertColor(scheme.background)) : scheme.background};
                --primary-hover-box-shadow: ${!scheme.background.includes('gradient') ? colorShades(0.65, covertColor(scheme.background)) : 'hsla(var(--hover-box-shadow),var(--alpha))'};`}
           
           }
           
           ${(componentSelector === 'btn' && variant !== 'outline') ? `
           .${componentId}:not(.${componentId}[disabled]):hover{
           		background: ${scheme?.backgroundColor ? `${!scheme.background.includes('gradient') ? colorShades(-0.2, covertColor(scheme.backgroundColor)) : scheme.background}` : `${!scheme.background.includes('gradient') ? colorShades(-0.2, covertColor(scheme.background)) : scheme.background}`}
           }
           ` : ''}
           `}
			</style>;
		}

		return () => css
	}
	return
}

export default applyColorScheme
