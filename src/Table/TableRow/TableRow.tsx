import React from 'react';

import PropTypes from "prop-types";
import {ITr} from "../../types/Common.types";

export const TableRow: React.FC<{ children: React.ReactNode } & ITr> = ({children, ...rest}) => {
	return (
		<tr {...rest}>{children}</tr>
	);
};

TableRow.displayName = 'TableRow';
TableRow.propTypes = {
	children: PropTypes.node
};

export default TableRow;
