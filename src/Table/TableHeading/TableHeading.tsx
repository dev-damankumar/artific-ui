import React from 'react';
import PropTypes from "prop-types";
import {Typography} from "../../Typography";

export const TableHeading: React.FC<{ children: React.ReactNode }> = ({children}) => {
	return (
		<th>
			<Typography fontSize="inherit" fontWeight="bold" style={{color: 'inherit'}} as="div">
				{children}
			</Typography>
		</th>
	);
};

TableHeading.displayName = 'TableHeading';
TableHeading.propTypes = {
	children: PropTypes.node
};

export default TableHeading;
