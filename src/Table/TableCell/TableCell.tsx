import React from 'react';
import PropTypes from "prop-types";
import {Typography} from "../../Typography";
import {ITd} from "../../types/common";

export const TableCell: React.FC<{ children: React.ReactNode } & ITd> = ({children, ...rest}) => {
	return (
		<td {...rest}>
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
