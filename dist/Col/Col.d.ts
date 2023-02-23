import React from 'react';
import { IDiv, Sizes } from "../types/Common.types";
export declare const ColArray: readonly [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, "auto", undefined];
export type Column = typeof ColArray[number];
export declare const OrderArray: readonly [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, "first", "last", undefined];
export type Order = typeof OrderArray[number];
export declare const OffsetArray: readonly [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, undefined];
export type Offset = typeof OffsetArray[number];
export declare const JustifyArray: readonly ["start", "end", "center", "space-between", "space-around", "space-evenly"];
export type Justify = typeof JustifyArray[number];
interface IColProps {
    children: React.ReactNode;
    style?: React.CSSProperties;
    size?: Sizes;
    col?: Column;
    order?: Order;
    offset?: Offset;
    justify?: Justify;
}
export declare const Col: React.FC<IColProps & IDiv>;
export default Col;
