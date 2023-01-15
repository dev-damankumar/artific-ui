import React, {useEffect, useState} from 'react';
import styles from "./Tabs.module.css";
import getClassNames from "../utils/getClassnames";
import {defaultProps, ITabsProps, propTypes} from "../types/tabs";
import getRandomClassId from "../utils/generateRandonClassId";
import sizeClasses from "../utils/sizeClasses";
import applyColorScheme from "../utils/applyColorScheme";

export const Tabs: React.FC<ITabsProps> = (
	{
		type,
		children,
		layout,
		position,
		variant,
		lineDirection,
		size,
		className,
		colorScheme,
		theme
	}) => {
	const [activeTab, setActiveTab] = useState(null)
	const id = getRandomClassId();
	const componentSelector = 'tab';
	const componentId = `${componentSelector}-${id}`;
	const typeClasses = type !== 'default' ? `tab-${type}` : 'tabs';
	const positionClasses = position !== 'top' ? `tab-${position}` : '';
	const layoutClasses = layout !== 'default' ? `${componentSelector}-${layout}` : '';
	const variantClasses = variant !== 'default' ? `${componentSelector}-${variant}` : '';
	const lineDirectionClasses = variant === 'floating-line' ? `${componentSelector}-${variant}-${lineDirection}` : '';
	const sizeClass = sizeClasses(componentSelector, size);
	const mainBtnSelector = getClassNames(styles, componentSelector);


	const classes = `${mainBtnSelector} ${componentId} ${className} ${getClassNames(
		styles,
		!colorScheme ? `${componentSelector}-${theme}` : `${componentSelector}-primary`,
		positionClasses,
	)}`

	let hasActiveProp: boolean = false
	const tabItems: JSX.Element[] = []
	const tabContents: JSX.Element[] = []
	React.Children.forEach(children, (child: React.ReactNode) => {
		if (React.isValidElement(child)) {
			if (child.props?.originalType?.displayName === 'TabContent' || (child.type as React.FC)?.displayName === 'TabContent') {
				tabContents.push(React.cloneElement<any>(child, {
					variant, activeTab, setActiveTab, key: getRandomClassId()
				}))
			} else {
				if (child.props.active) {
					hasActiveProp = true
				}
				tabItems.push(React.cloneElement<any>(child, {
					variant, activeTab, setActiveTab, key: getRandomClassId()
				}))
			}
		}
		return child;
	});

	useEffect(() => {
		if (!hasActiveProp) {
			setActiveTab(tabItems[0].props.target)
		}
	}, [])

	const customCss = applyColorScheme(componentId, colorScheme, componentSelector)
	return (
		<>
			{customCss && customCss()}
			<div className={`${classes} ${getClassNames(styles, "tab-wrap")}`}>
				<ul className={getClassNames(styles, "tab-pills", typeClasses, sizeClass, layoutClasses, variantClasses, lineDirectionClasses)}
					role="tablist">
					{tabItems}
				</ul>
				<div className={getClassNames(styles, "tab-content")}>
					{tabContents}
				</div>
			</div>
		</>
	);
};

Tabs.displayName = 'Tabs';
Tabs.propTypes = propTypes;
Tabs.defaultProps = defaultProps;
export default Tabs;
