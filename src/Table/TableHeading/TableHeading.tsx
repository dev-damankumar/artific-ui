import React from 'react';
import PropTypes from "prop-types";
import {Typography} from "../../Typography";
import {ITh} from "../../types/common";

export const TableHeading: React.FC<{ children: React.ReactNode } & ITh> = ({children, ...rest}) => {
	return (
		<th {...rest}>
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
