import React from 'react';

import getClassNames from "../utils/classes/getClassnames";
import styles from "./Modal.module.css";
import {IDiv} from "../types/Common.types";

export const ModalFooter: React.FC<{ children: React.ReactNode } & IDiv> = (
	{
		children,
		...rest
	}) => {
	return (
		<div {...rest} className={getClassNames(styles, "modal-footer")}>
			<div className={getClassNames(styles, 'd-modal-button-div')}>
				{children}
			</div>
		</div>
	);
};
ModalFooter.displayName = 'ModalFooter'
export default ModalFooter;
