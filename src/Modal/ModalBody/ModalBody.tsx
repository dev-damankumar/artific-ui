import React from 'react';
import getClassNames from "../../utils/getClassnames";
import styles from "../Modal.module.css";

export const ModalBody: React.FC<{ children: React.ReactNode }> = ({children}) => {
	return (
		<div className={getClassNames(styles, "modal-body")}>
			{children}
		</div>
	);
};

export default ModalBody;
