import React, {useRef} from 'react';
import {defaultProps, ITooltipProps, propTypes} from "../types/tooltip";
import getRandomClassId from "../utils/generateRandonClassId";
import sizeClasses from "../utils/sizeClasses";
import getClassNames from "../utils/getClassnames";
import styles from "./Tooltip.module.css";
import applyColorScheme from "../utils/applyColorScheme";

export const Tooltip: React.FC<ITooltipProps> = (
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
	}) => {
	const ref = useRef(null)
	const id = getRandomClassId();
	const componentSelector = 'tooltip';
	const componentId = `${componentSelector}-${id}`;
	const layoutClasses = layout !== 'default' ? `${componentSelector}-${layout}` : '';
	const variantClasses = variant !== 'default' ? `${componentSelector}-${variant}` : '';
	const placementClasses = placement !== 'bottom' ? `${componentSelector}-${placement}` : `${componentSelector}-bottom`;
	const sizeClass = sizeClasses(componentSelector, size);
	const mainBtnSelector = getClassNames(styles, componentSelector);

	const classes = `${mainBtnSelector} ${componentId} ${className} ${getClassNames(
		styles,
		!colorScheme ? `${componentSelector}-${theme}` : `${componentSelector}-primary`,
		layoutClasses,
		variantClasses,
		placementClasses,
		sizeClass
	)}`

	const childrenWithProps = React.Children.map(children, (child: React.ReactNode) => {
		if (React.isValidElement(child)) {
			return React.cloneElement<any>(child, {
				'data-tooltip': true,
				children: [child.props.children, <div style={style} ref={ref}
													  className={`${classes}`}>{title}</div>]
			});
		}
		return child;
	});
	const customCss = applyColorScheme(componentId, colorScheme, componentSelector)

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
