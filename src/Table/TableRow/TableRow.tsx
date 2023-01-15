import React from 'react';
import PropTypes from "prop-types";

export const TableRow: React.FC<{ children: React.ReactNode }> = ({children}) => {
	return (
		<tr>{children}</tr>
	);
};

TableRow.displayName = 'TableRow';
TableRow.propTypes = {
	children: PropTypes.node
};

export default TableRow;
