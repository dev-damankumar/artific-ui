import React from 'react';
import { IButtonProps } from '../Button/Button.types';
import { IButton } from "../types/Common.types";
export declare const IconButton: React.FC<Omit<IButton, 'prefix'> & IButtonProps>;
export default IconButton;
