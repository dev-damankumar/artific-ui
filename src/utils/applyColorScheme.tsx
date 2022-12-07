import React from "react";
import {ColorScheme} from "../types/common";
import colorShades from "./colors/colorShades";
import covertColor from "./colors/convertColor";

const applyColorScheme = (componentSelector: string, colorScheme: ColorScheme | undefined) => {
	if (colorScheme) {
		const scheme = (colorScheme as ColorScheme)!;
		let css = <style>
			{`.${componentSelector}{
                color: ${scheme.color}; 
                --primary: ${scheme.background};
                ${scheme?.backgroundColor ?
				` --primary-color: ${scheme.backgroundColor};
                --primary-hover: ${!scheme.background.includes('gradient') ? colorShades(-0.2, covertColor(scheme.backgroundColor)) : scheme.background};
                --primary-hover-box-shadow:${colorShades(0.65, covertColor(scheme.backgroundColor))};`
				:
				`--primary-color:${!scheme.background.includes('gradient') ? scheme.background : 'var(--light-hover)'};
                --primary-hover: ${!scheme.background.includes('gradient') ? colorShades(-0.2, covertColor(scheme.background)) : scheme.background};
                --primary-hover-box-shadow: ${!scheme.background.includes('gradient') ? colorShades(0.65, covertColor(scheme.background)) : 'var(--hover-box-shadow)'};`}
           }`}
		</style>;
		return () => css
	}
	return
}

export default applyColorScheme