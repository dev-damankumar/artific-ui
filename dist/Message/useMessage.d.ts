import { IThemeProvider, MessageConfig, Messages } from "./Message.types";
export declare const useMessage: (this: (Messages & MessageConfig), loadStyle?: boolean, themeProvider?: IThemeProvider | null | undefined) => Messages;
export default useMessage;
