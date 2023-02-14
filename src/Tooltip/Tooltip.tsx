import React, {useContext, useRef} from 'react';
import {ITooltipProps, propTypes} from "./Tooltip.types";
import getClassNames from "../utils/classes/getClassnames";
import styles from "./Tooltip.module.css";
import {IDiv} from "../types/Common.types";
import getDefaultClasses from "../utils/classes/getDefaultClasses";
import uuid from "../utils/uuids/uuid";
import {ThemeContext} from "../ThemeProvider";

export const Tooltip: React.FC<ITooltipProps & IDiv> = (
	{
		theme = 'primary',
		title,
		layout = 'default',
		variant = 'default',
		placement = 'bottom',
		size = 'md',
		className,
		style,
		children,
		colorScheme,
		...rest
	}) => {
	const context = useContext(ThemeContext)
	const ref = useRef(null)
	const componentSelector = 'tooltip';
	const {
		classNames, customCss
	} = getDefaultClasses(styles, componentSelector, className, theme, layout, variant, size, colorScheme)
	const placementClasses = placement !== 'bottom' ? `${componentSelector}-${placement}` : `${componentSelector}-bottom`;

	const classes = `${classNames} ${getClassNames(
		styles,
		placementClasses,
	)}`

	const childrenWithProps = React.Children.map(children, (child: React.ReactNode) => {
		if (React.isValidElement(child)) {
			return React.cloneElement<any>(child, {
				'data-tooltip': true,
				children: [child.props.children,
					<div key={uuid()} role="tooltip" {...rest} data-theme-id={context?.themeId || ''} style={style} ref={ref}
						 className={`${classes}`}>{title}</div>]
			});
		}
		return child;
	});

	return (
		<>
			{customCss && customCss()}
			{childrenWithProps}
		</>
	);
};


Tooltip.displayName = 'Tooltip';
Tooltip.propTypes = propTypes;

export default Tooltip;
