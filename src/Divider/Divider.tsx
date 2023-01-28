import React from 'react';
import styles from "./Divider.module.css"
import getClassNames from "../utils/classes/getClassnames";

export const Divider = () => {
	return (
		<div className={getClassNames(styles, 'divider')}/>
	);
};

export default Divider;
