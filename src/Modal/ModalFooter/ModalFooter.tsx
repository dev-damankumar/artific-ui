import React from 'react';
import getClassNames from "../../utils/getClassnames";
import styles from "../Modal.module.css";

export const ModalFooter: React.FC<{ children: React.ReactNode }> = ({children}) => {
	return (
		<div className={getClassNames(styles, "modal-footer")}>
			<div className={getClassNames(styles, 'd-modal-button-div')}>
				{children}
			</div>
		</div>
	);
};

export default ModalFooter;
