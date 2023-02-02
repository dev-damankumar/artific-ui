import {ColorScheme, FunctionCallback, Layouts, Sizes, Themes} from "../types/Common.types";

export type MessageType = 'success' | 'info' | 'error' | 'warning' | 'alert'
export type Positions = 'top-left' | 'top' | 'top-right' | 'bottom-left' | 'bottom' | 'bottom-right'
export type IconType = { alert: string, success: string, warning: string, error: string, info: string }
export type Types = 'default' | 'toast' | 'notification'
export type Variants = 'default' | 'outline' | 'note'
export type Mode = 'light' | 'dark' | 'auto'

export type IThemeProvider = {
	theme: object
}
export type MessageConfig = {
	type?: Types;
	variant?: Variants;
	position?: Positions;
	theme?: Themes;
	themeProvider?: IThemeProvider | null;
	layout?: Layouts;
	size?: Sizes;
	mode?: Mode;
	dismissible?: boolean;
	duration?: number;
	className?: string;
	style?: string;
	colorScheme?: ColorScheme;
}

export interface Messages {
	success: FunctionCallback;
	error: FunctionCallback;
	info: FunctionCallback;
	alert: FunctionCallback;
	warning: FunctionCallback;
	hold: FunctionCallback;
	config: (config: MessageConfig) => boolean;
}
