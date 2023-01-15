import React from 'react';
import styles from "./Table.module.css"
import getClassNames from "../utils/getClassnames";
import {defaultProps, ITableProps, propTypes} from "../types/table";
import getRandomClassId from "../utils/generateRandonClassId";
import sizeClasses from "../utils/sizeClasses";
import applyColorScheme from "../utils/applyColorScheme";

export const Table: React.FC<ITableProps> = (
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
	const componentSelector = 'table';
	const componentId = `${componentSelector}-${id}`;
	const layoutClasses = layout !== 'default' ? `${componentSelector}-${layout}` : '';
	const variantClasses = variant !== 'default' ? `${componentSelector}-${variant}` : '';
	const sizeClass = sizeClasses(componentSelector, size);
	const mainBtnSelector = getClassNames(styles, componentSelector);


	const classes = `${mainBtnSelector} ${componentId} ${className} ${getClassNames(
		styles,
		!colorScheme ? `${componentSelector}-${theme}` : `${componentSelector}-primary`,
		variantClasses,
	)}`

	const customCss = applyColorScheme(componentId, colorScheme, componentSelector)
	return (
		<>
			{customCss && customCss()}
			<div className={getClassNames(styles, 'table-wrap', layoutClasses, sizeClass)}>
				{/*<div className={getClassNames(styles, "table-customize-div")}>*/}
				{/*</div>*/}
				<div className={getClassNames(styles, "table-responsive")}>
					<table className={`${classes} ${getClassNames(styles, "table", "table-primary")}`}>
						{children}
					</table>
				</div>
			</div>
		</>
	);
};
Table.displayName = 'Table';
Table.propTypes = propTypes;
Table.defaultProps = defaultProps;
export default Table;
