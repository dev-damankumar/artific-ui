import React from 'react';
import styles from "./Divider.module.css"
import getClassNames from "../utils/classes/getClassnames";
import {IDiv} from "../types/common.types";

export const Divider: React.FC<{ direction?: 'horizontal' | 'vertical', children?: React.ReactNode } & IDiv> = ({direction = 'horizontal'}) => {
	return (
		<div className={getClassNames(styles, 'divider', direction === 'vertical' ? 'divider-vertical' : '')}/>
	);
};

export default Divider;
