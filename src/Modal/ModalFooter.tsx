import React, {useContext} from 'react';

import getClassNames from "../utils/classes/getClassnames";
import styles from "./Modal.module.css";
import {IDiv} from "../types/Common.types";
import {ThemeContext} from "../ThemeProvider";

export const ModalFooter: React.FC<{ children: React.ReactNode } & IDiv> = (
	{
		children,
		...rest
	}) => {
	const context = useContext(ThemeContext)
	return (
		<div {...rest} data-theme-id={context?.themeId || ''} className={getClassNames(styles, "modal-footer")}>
			<div className={getClassNames(styles, 'd-modal-button-div')}>
				{children}
			</div>
		</div>
	);
};
ModalFooter.displayName = 'ModalFooter'
export default ModalFooter;
