import React from 'react';
import styles from "../Grid.module.css"
import getClassNames from "../utils/getClassnames";
import PropTypes from "prop-types";

interface IRowProps {
	children: React.ReactNode;
	className?: string;
	style?: React.CSSProperties;
}

export const Row: React.FC<IRowProps> = (
	{
		style,
		className,
		children
	}) => {
	return (
		<div style={style} className={`${className} ${getClassNames(styles, 'row')}`}>
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
