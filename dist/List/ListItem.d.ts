import React from 'react';
import { IListItemProps } from './List.types';
import { ILi } from "../types/Common.types";
export declare const ListItem: React.FC<Omit<ILi, 'prefix'> & IListItemProps>;
export default ListItem;
