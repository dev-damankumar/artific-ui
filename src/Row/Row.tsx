import React from 'react';
import styles from "./Row.module.css"
import getClassNames from "../utils/classes/getClassnames";
import PropTypes from "prop-types";
import {IDiv} from "../types/Common.types";

interface IRowProps {
	children: React.ReactNode;
	style?: React.CSSProperties;
}

export const Row: React.FC<IRowProps & IDiv> = (
	{
		style = {},
		className = '',
		children,
		...rest
	}) => {
	return (
		<div {...rest} style={style} className={`${className} ${getClassNames(styles, 'row')}`}>
			{children}
		</div>
	);
};

Row.displayName = 'Row';
Row.propTypes = {
	children: PropTypes.node,


};

export default Row;
