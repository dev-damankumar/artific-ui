import React from 'react';
import { Axis, IDiv } from "../types/Common.types";
interface IColProps {
    children: React.ReactNode;
    direction?: Axis;
    align?: AlignType;
    wrap?: boolean;
    gap?: number | [number, number];
}
export declare const AlignTypeArray: readonly ["start", "end", "center", "baseline"];
export type AlignType = typeof AlignTypeArray[number];
export declare const Space: React.FC<IColProps & IDiv>;
export default Space;
