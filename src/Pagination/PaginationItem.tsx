import React, {useContext} from 'react';
import getClassNames from "../utils/classes/getClassnames";
import styles from "./Pagination.module.css";
import {IPaginationItemProps, paginationItemPropTypes} from "./Pagination.types";
import {ILi} from "../types/Common.types";
import {ThemeContext} from "../ThemeProvider";

export const PaginationItem: React.FC<IPaginationItemProps & ILi> = (
	{
		children,
		variant = 'default',
		active = false,
		...rest
	}) => {
	const context = useContext(ThemeContext)
	return (
		<li {...rest} data-theme-id={context?.themeId || ''}
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

export default PaginationItem;
