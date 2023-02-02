import React from 'react';
import styles from "./Pagination.module.css"
import getClassNames from "../utils/classes/getClassnames";
import {defaultProps, IPaginationProps, propTypes} from "../types/pagination.types";
import getDefaultClasses from "../utils/classes/getDefaultClasses";
import {addPropsToChildren} from "../utils/helpers";
import {IUl} from "../types/common.types";


export const Pagination: React.FC<IPaginationProps & IUl> = (
	{
		children,
		layout,
		variant,
		size,
		className,
		colorScheme,
		theme,
		...rest
	}) => {
	const componentSelector = 'pagination';
	const {
		classNames, customCss
	} = getDefaultClasses(styles, componentSelector, className, theme, layout, variant, size, colorScheme)
	const variantClasses = variant === 'breadcrumb' && 'breadcrumb'
	const classes = `${classNames} ${getClassNames(
		styles,
		variantClasses,
		variant === 'float' ? `breadcrumb` : '',
		variant === 'float' ? `breadcrumb-separate` : '',
	)}`

	const childrenWithProps = addPropsToChildren(children, {variant})
	return (
		<>
			{customCss && customCss()}
			<ul {...rest} className={classes}>
				{childrenWithProps}
			</ul>
		</>
	);
};
Pagination.displayName = 'Pagination';
Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;
export default Pagination;
