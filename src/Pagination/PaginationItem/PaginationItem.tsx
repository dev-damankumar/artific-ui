import React from 'react';
import getClassNames from "../../utils/getClassnames";
import styles from "../Pagination.module.css";
import {IPaginationItemProps, paginationItemDefaultProps, paginationItemPropTypes} from "../../types/pagination";

export const PaginationItem: React.FC<IPaginationItemProps> = ({children, variant, active}) => {
	return (
		<li className={getClassNames(styles, (variant === 'breadcrumb' || variant === 'float') ? 'breadcrumb-item' : 'page-item', active ? 'active' : '')}>
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
