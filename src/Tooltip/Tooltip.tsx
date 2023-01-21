import React, {useRef} from 'react';
import {defaultProps, ITooltipProps, propTypes} from "../types/tooltip";
import getClassNames from "../utils/classes/getClassnames";
import styles from "./Tooltip.module.css";
import {IDiv} from "../types/common";
import getDefaultClasses from "../utils/classes/getDefaultClasses";

export const Tooltip: React.FC<ITooltipProps & IDiv> = (
	{
		theme,
		title,
		layout,
		variant
		, placement,
		size,
		className,
		style,
		children,
		colorScheme,
		...rest
	}) => {
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
				children: [child.props.children, <div {...rest} style={style} ref={ref}
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
Tooltip.defaultProps = defaultProps;


export default Tooltip;
