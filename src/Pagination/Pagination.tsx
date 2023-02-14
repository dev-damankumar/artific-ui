import React, {useContext} from 'react';


import styles from "./Pagination.module.css"
import getClassNames from "../utils/classes/getClassnames";
import {IPaginationProps, propTypes} from "./Pagination.types";
import getDefaultClasses from "../utils/classes/getDefaultClasses";
import {addPropsToChildren} from "../utils/helpers";
import {IUl} from "../types/Common.types";
import {ThemeContext} from "../ThemeProvider";


export const Pagination: React.FC<IPaginationProps & IUl> = (
	{
		children,
		layout = 'default',
		variant = 'default',
		size = 'md',
		className,
		colorScheme,
		theme = 'primary',
		...rest
	}) => {
	const context = useContext(ThemeContext)
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
			<ul {...rest} data-theme-id={context?.themeId || ''} className={classes}>
				{childrenWithProps}
			</ul>
		</>
	);
};
Pagination.displayName = 'Pagination';
Pagination.propTypes = propTypes;
export default Pagination;
