import React from 'react';
import PropTypes from "prop-types";

export const TableBody: React.FC<{ children: React.ReactNode }> = ({children}) => {
	return (
		<tbody>
		{children}
		</tbody>
	);
};

TableBody.displayName = 'TableBody';
TableBody.propTypes = {
	children: PropTypes.node
};

export default TableBody;
