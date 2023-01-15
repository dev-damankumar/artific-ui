import React from 'react';
import PropTypes from "prop-types";

export const TableHead: React.FC<{ children: React.ReactNode }> = ({children}) => {
	return (
		<thead>
		{children}
		</thead>
	);
};

TableHead.displayName = 'TableHead';
TableHead.propTypes = {
	children: PropTypes.node
}

export default TableHead;
