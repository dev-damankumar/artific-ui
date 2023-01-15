import React from 'react';
import PropTypes from "prop-types";
import {Typography} from "../../Typography";

export const TableCell: React.FC<{ children: React.ReactNode }> = ({children}) => {
	return (
		<td>
			<Typography fontSize="inherit" style={{color: 'inherit'}} as="div">
				{children}
			</Typography>
		</td>
	);
};

TableCell.displayName = 'TableCell';
TableCell.propTypes = {
	children: PropTypes.node
};


export default TableCell;
