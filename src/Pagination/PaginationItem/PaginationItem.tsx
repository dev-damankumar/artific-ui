import React from 'react';

import getClassNames from "../../utils/classes/getClassnames";
import styles from "../Pagination.module.css";
import {IPaginationItemProps, paginationItemDefaultProps, paginationItemPropTypes} from "../Pagination.types";
import {ILi} from "../../types/Common.types";

export const PaginationItem: React.FC<IPaginationItemProps & ILi> = (
	{
		children,
		variant,
		active,
		...rest
	}) => {
	return (
		<li {...rest}
			className={getClassNames(styles, (variant === 'breadcrumb' || variant === 'float') ? 'breadcrumb-item' : 'page-item', active ? 'active' : '')}>
			<a
				className={getClassNames(styles, (variant === 'breadcrumb' || variant === 'float') ? 'breadcrumb-link' : 'page-link')}
			>
				{children}
			</a>
		</li>
	);
};

PaginationItem.displayName = 'PaginationItem';
PaginationItem.propTypes = paginationItemPropTypes;
PaginationItem.defaultProps = paginationItemDefaultProps;

export default PaginationItem;
