import {FunctionCallback, Sizes} from "./common.types";


export type Variants = 'default' | 'solid' | 'blur'
export type Themes = 'dark' | 'light'

export type LoaderConfig = {
	variant?: Variants;
	theme?: Themes;
	size?: Sizes;
	dismissible?: boolean;
	className?: string;
	style?: string;
}

export interface ILoader {
	show: FunctionCallback;
	hide: FunctionCallback;
	destroy: FunctionCallback;
	config: (config: LoaderConfig) => boolean;
}
