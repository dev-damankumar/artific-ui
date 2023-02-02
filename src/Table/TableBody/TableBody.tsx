import React from 'react';

import PropTypes from "prop-types";
import {ITbody} from "../../types/Common.types";

export const TableBody: React.FC<{ children: React.ReactNode } & ITbody> = (
	{
		children,
		...rest
	}) => {
	return (
		<tbody {...rest}>
		{children}
		</tbody>
	);
};

TableBody.displayName = 'TableBody';
TableBody.propTypes = {
	children: PropTypes.node
};

export default TableBody;
