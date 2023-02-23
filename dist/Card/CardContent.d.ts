import React from 'react';
import { IDiv } from "../types/Common.types";
export interface ICardContentProps {
    children: React.ReactNode;
}
export declare const CardContent: React.FC<ICardContentProps & IDiv>;
export default CardContent;
