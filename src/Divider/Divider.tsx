import React from 'react';
import styles from "./Divider.module.css"
import getClassNames from "../utils/classes/getClassnames";
import {IDiv} from "../types/Common.types";

export const Divider: React.FC<{ direction?: 'horizontal' | 'vertical', children?: React.ReactNode } & IDiv> = ({direction = 'horizontal'}) => {
	return (
		<div className={getClassNames(styles, 'divider', direction === 'vertical' ? 'divider-vertical' : '')}/>
	);
};

Divider.displayName = 'Divider';
export default Divider;
