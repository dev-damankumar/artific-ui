import React from 'react';
import { IDiv } from "../types/Common.types";
interface IRowProps {
    children: React.ReactNode;
    style?: React.CSSProperties;
}
export declare const Row: React.FC<IRowProps & IDiv>;
export default Row;
