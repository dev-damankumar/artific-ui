import React, { ReactNode } from "react";
import { ColorScheme } from "../types/Common.types";
interface Config {
    [k: string]: any;
}
export declare const addPropsToChildren: (children: ReactNode, props: object, prioritizeChildren?: boolean, config?: Config | null) => (string | number | React.ReactFragment | React.ReactElement<unknown, string | React.JSXElementConstructor<any>>)[] | null | undefined;
export declare const containsGradient: (colorScheme: ColorScheme) => boolean;
export {};
