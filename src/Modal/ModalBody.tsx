import React, {useContext} from 'react';

import getClassNames from "../utils/classes/getClassnames";
import styles from "./Modal.module.css";
import {IDiv} from "../types/Common.types";
import {ThemeContext} from "../ThemeProvider";

export const ModalBody: React.FC<{ children: React.ReactNode } & IDiv> = (
	{
		children,
		...rest
	}) => {
	const context = useContext(ThemeContext)
	return (
		<div {...rest} data-theme-id={context?.themeId || ''} className={getClassNames(styles, "modal-body")}>
			{children}
		</div>
	);
};
ModalBody.displayName = 'ModalBody'
export default ModalBody;
