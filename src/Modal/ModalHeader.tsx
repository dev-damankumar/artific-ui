import React from 'react';
import getClassNames from "../utils/classes/getClassnames";
import styles from "./Modal.module.css";
import buttonStyles from "../Button/Button.module.css";
import {IModalHeaderProps, modalHeaderPropTypes} from "./Modal.types";
import {IDiv} from "../types/Common.types";

export const ModalHeader: React.FC<IModalHeaderProps & IDiv> = (
	{
		dismiss = true,
		prefix,
		suffix,
		children,
		onClose,
		...rest
	}) => {
	return (
		<div {...rest} className={getClassNames(styles, "modal-header")}>
			{prefix && <div className={getClassNames(buttonStyles, 'btn-icon', 'btn-icon-prefix')}>{prefix}</div>}
			{children}
			{suffix && <div className={getClassNames(buttonStyles, 'btn-icon', 'btn-icon-suffix')}>{suffix}</div>}
			{dismiss &&
				<span onClick={onClose} className={getClassNames(styles, "modal-close")}
					  data-dismiss="modal">×</span>}
		</div>
	);
};
ModalHeader.displayName = 'ModalHeader';
ModalHeader.propTypes = modalHeaderPropTypes;
export default ModalHeader;
