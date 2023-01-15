import React from 'react';
import styles from "./Pagination.module.css"
import getClassNames from "../utils/getClassnames";
import {defaultProps, IPaginationProps, propTypes} from "../types/pagination";
import getRandomClassId from "../utils/generateRandonClassId";
import sizeClasses from "../utils/sizeClasses";
import applyColorScheme from "../utils/applyColorScheme";

export const Pagination: React.FC<IPaginationProps> = (
	{
		children,
		layout,
		variant,
		size,
		className,
		colorScheme,
		theme
	}) => {
	const id = getRandomClassId();
	const componentSelector = 'pagination';
	const componentId = `${componentSelector}-${id}`;
	const layoutClasses = layout !== 'default' ? `${componentSelector}-${layout}` : '';
	const variantClasses = variant !== 'default' ? variant === 'breadcrumb' ? 'breadcrumb' : `${componentSelector}-${variant}` : '';
	const sizeClass = sizeClasses(componentSelector, size);
	const mainBtnSelector = getClassNames(styles, componentSelector);


	const classes = `${mainBtnSelector} ${componentId} ${className} ${getClassNames(
		styles,
		!colorScheme ? `${componentSelector}-${theme}` : `${componentSelector}-primary`,
		layoutClasses,
		variantClasses,
		variant === 'float' ? `breadcrumb` : '',
		variant === 'float' ? `breadcrumb-separate` : '',
		sizeClass
	)}`

	const childrenWithProps = React.Children.map(children, child => {
		if (React.isValidElement(child)) {
			return React.cloneElement<any>(child, {
				variant,
			});
		}
		return child;
	});
	const customCss = applyColorScheme(componentId, colorScheme, componentSelector)
	return (
		<>
			{customCss && customCss()}
			<ul className={classes}>
				{childrenWithProps}
			</ul>
		</>
	);
};
Pagination.displayName = 'Pagination';
Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;
export default Pagination;
