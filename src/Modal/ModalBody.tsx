import React from 'react';

import getClassNames from "../utils/classes/getClassnames";
import styles from "./Modal.module.css";
import {IDiv} from "../types/Common.types";

export const ModalBody: React.FC<{ children: React.ReactNode } & IDiv> = (
	{
		children,
		...rest
	}) => {
	return (
		<div {...rest} className={getClassNames(styles, "modal-body")}>
			{children}
		</div>
	);
};
ModalBody.displayName = 'ModalBody'
export default ModalBody;
