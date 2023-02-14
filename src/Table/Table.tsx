import React, {useContext} from 'react';


import styles from "./Table.module.css"
import getClassNames from "../utils/classes/getClassnames";
import {defaultProps, ITableProps, propTypes} from "./Table.types";
import getDefaultClasses from "../utils/classes/getDefaultClasses";
import {IDiv} from "../types/Common.types";
import {ThemeContext} from "../ThemeProvider";


export const Table: React.FC<ITableProps & IDiv> = (
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
	const componentSelector = 'table';
	const {
		classNames, customCss
	} = getDefaultClasses(styles, componentSelector, className, theme, layout, variant, size, colorScheme)

	const {
		classNames: wrapperClassNames
	} = getDefaultClasses(styles, componentSelector, '', '', layout, '', size, null)


	const classes = `${classNames} ${getClassNames(
		styles,
		!colorScheme ? `${componentSelector}-${theme}` : `${componentSelector}-primary`,
	)}`

	return (
		<>
			{customCss && customCss()}
			<div {...rest} data-theme-id={context?.themeId || ''} className={`${wrapperClassNames} ${getClassNames(styles, 'table-wrap')}`}>
				{/*<div className={getClassNames(styles, "table-customize-div")}>*/}
				{/*</div>*/}
				<div className={getClassNames(styles, "table-responsive")}>
					<table role="table" className={`${classes} ${getClassNames(styles, "table", "table-primary")}`}>
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
