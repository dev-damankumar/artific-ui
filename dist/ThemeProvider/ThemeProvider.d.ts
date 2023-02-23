import React from "react";
interface ITheme {
    usingThemeProvider: boolean;
    theme: object;
    themeId: string;
    setTheme: (theme: object) => void;
}
export declare const ThemeContext: React.Context<ITheme | null>;
export declare const ThemeProvider: React.FC<{
    children: React.ReactNode;
    theme: object;
}>;
export default ThemeProvider;
