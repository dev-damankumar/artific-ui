import React from 'react';
import PropTypes from "prop-types";
import {ITbody} from "../../types/common.types";

export const TableHead: React.FC<{ children: React.ReactNode } & ITbody> = ({children, ...rest}) => {
	return (
		<thead {...rest}>
		{children}
		</thead>
	);
};

TableHead.displayName = 'TableHead';
TableHead.propTypes = {
	children: PropTypes.node
}

export default TableHead;
