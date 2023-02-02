import React, {useState} from "react";
import createTheme from "../utils/styles/theme";
import generateRandomClassId from "../utils/uuids/generateRandomClassId";

interface ITheme {
	usingThemeProvider: boolean;
	theme: object;
	themeId: string;
	setTheme: (theme: object) => void;
}

export const ThemeContext = React.createContext<ITheme | null>({
	usingThemeProvider: false,
	theme: {},
	themeId: '',
	setTheme: () => {
	}
});


export const ThemeProvider: React.FC<{ children: React.ReactNode, theme: object }> = ({children, theme}) => {
	const [themeState, setTheme] = useState<object>(theme)
	const usingThemeProvider = true
	const themeId = generateRandomClassId()
	const themeStyle = createTheme(theme, {
		themeId,
		scope: "global"
	})
	return (
		<ThemeContext.Provider
			value={{theme: themeState, setTheme, usingThemeProvider, themeId}}
		>
			<style data-artific-css={themeId}>
				{themeStyle && themeStyle}
			</style>
			<div data-theme-provider style={{display: "inline"}} id={themeId}>
				{children}
			</div>
		</ThemeContext.Provider>
	);
};


export default ThemeProvider;
