/// <reference types="react" />
import { ColorScheme, ComponentsType } from "../../types/Common.types";
interface CSSClasses {
}
type IStyleConfig = {
    theme: IStyleThemeConfig;
} | null;
interface IStyleThemeConfig {
    default?: boolean;
}
declare const getDefaultClasses: (styles: CSSClasses, componentSelector: ComponentsType, className?: string, theme?: string, layout?: string, variant?: string, size?: string, colorScheme?: ColorScheme, config?: IStyleConfig) => {
    componentId: string;
    customCss: (() => import("react").ReactNode) | null | undefined;
    classNames: string;
};
export default getDefaultClasses;
