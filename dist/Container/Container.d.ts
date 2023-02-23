import React from 'react';
import { IDiv, Sizes } from "../types/Common.types";
interface IContainerProps {
    children: React.ReactNode;
    style?: React.CSSProperties;
    fluid?: boolean;
    size?: Sizes;
}
export declare const Container: React.FC<IContainerProps & IDiv>;
export default Container;
