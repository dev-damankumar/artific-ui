import React from 'react';
import styles from '../Button/Button.module.css';
import getClassNames from '../utils/classes/getClassnames';
import Button from '../Button';
import {IButtonProps} from '../types/button';
import {IButton} from "../types/common";


export const IconButton: React.FC<IButtonProps & IButton> = (props) => {
	return <><Button
		{...props}
		className={`${getClassNames(styles, 'icon-btn')} ${props.className}`}
	>
		{props.children}
	</Button></>;
};
export default IconButton
