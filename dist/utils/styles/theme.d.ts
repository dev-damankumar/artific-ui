import { ComponentsType } from "../../types/Common.types";
interface IConfig {
    themeId: string;
    scope: 'global' | 'local';
    componentId?: string;
    componentSelector?: ComponentsType;
}
declare const createTheme: (theme: object, config?: IConfig) => string;
export default createTheme;
