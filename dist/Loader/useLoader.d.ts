import { ILoader, LoaderConfig } from "./Loader.types";
export declare const useLoader: (this: ILoader & LoaderConfig & {
    selector: Element | null;
}, loadStyles?: boolean) => ILoader;
export default useLoader;
