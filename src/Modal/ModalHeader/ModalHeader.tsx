import React from 'react';
import getClassNames from "../../utils/getClassnames";
import styles from "../Modal.module.css";
import buttonStyles from "../../Button/Button.module.css";
import {IModalHeaderProps, modalHeaderDefaultProps, modalHeaderPropTypes} from "../../types/modal";

export const ModalHeader: React.FC<IModalHeaderProps> = (
	{
		dismiss,
		prefix,
		suffix,
		children,
		onClose,
	}) => {
	return (
		<div className={getClassNames(styles, "modal-header")}>
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
ModalHeader.defaultProps = modalHeaderDefaultProps;
export default ModalHeader;
