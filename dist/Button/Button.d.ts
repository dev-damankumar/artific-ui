import React from 'react';
import { IButtonProps } from './Button.types';
import { IButton } from "../types/Common.types";
export declare const Button: React.FC<Omit<IButton, 'prefix'> & IButtonProps>;
export default Button;
