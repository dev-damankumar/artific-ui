import React, {useContext} from 'react';

import PropTypes from "prop-types";
import {ITr} from "../types/Common.types";
import {ThemeContext} from "../ThemeProvider";

export const TableRow: React.FC<{ children: React.ReactNode } & ITr> = ({children, ...rest}) => {
	const context = useContext(ThemeContext)
	return (
		<tr {...rest} data-theme-id={context?.themeId || ''}>{children}</tr>
	);
};

TableRow.displayName = 'TableRow';
TableRow.propTypes = {
	children: PropTypes.node
};

export default TableRow;
