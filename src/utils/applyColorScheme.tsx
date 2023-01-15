import React from "react";
import {ColorScheme} from "../types/common";
import colorShades from "./colors/colorShades";
import covertColor from "./colors/convertColor";

const applyColorScheme = (componentSelector: string, colorScheme: ColorScheme | undefined, componentId: string) => {
	if (colorScheme) {
		const scheme = (colorScheme as ColorScheme)!;
		let css: React.ReactNode;
		if (componentId === 'accordion') {
			css = <style>
				{`.${componentSelector}{
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
            .${componentSelector}:not(.${componentId}-disabled,[disabled],.${componentId}-loading,.${componentId}-loading-grow,.${componentId}-outline):hover{
           		background: ${scheme?.backgroundColor ? `${!scheme.background.includes('gradient') ? colorShades(-0.2, covertColor(scheme.backgroundColor)) : scheme.background}` : `${!scheme.background.includes('gradient') ? colorShades(-0.2, covertColor(scheme.background)) : scheme.background}`}
           }
           }
           `}
			</style>;
		} else {
			css = <style>
				{`.${componentSelector}{
                ${componentSelector !== 'table' && 'color: ${scheme.color};'}
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
           
           ${componentId === 'btn' ? `
           .${componentSelector}:not(.${componentId}-disabled,[disabled],.${componentId}-loading,.${componentId}-loading-grow,.${componentId}-outline):hover{
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
