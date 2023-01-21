import React from 'react';
import styles from "../Grid.module.css"
import getClassNames from "../utils/classes/getClassnames";
import PropTypes from "prop-types";
import {IDiv} from "../types/common";

interface IRowProps {
	children: React.ReactNode;
	className?: string;
	style?: React.CSSProperties;
}

export const Row: React.FC<IRowProps & IDiv> = (
	{
		style,
		className,
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
	className: PropTypes.string,
	style: PropTypes.object,
};
Row.defaultProps = {
	className: ''
};
export default Row;
