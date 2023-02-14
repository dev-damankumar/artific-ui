import React, {useContext, useEffect, useState} from 'react';


import styles from "./Tabs.module.css";
import getClassNames from "../utils/classes/getClassnames";
import {ITabsProps, propTypes} from "./Tabs.types";
import getRandomClassId from "../utils/uuids/generateRandomClassId";
import getDefaultClasses from "../utils/classes/getDefaultClasses";
import {IDiv} from "../types/Common.types";
import {ThemeContext} from "../ThemeProvider";


export const Tabs: React.FC<ITabsProps & IDiv> = (
	{
		type = 'default',
		children,
		layout = 'default',
		position = 'top',
		variant = 'default',
		lineDirection = 'bottom',
		size = 'md',
		className,
		colorScheme,
		theme = 'primary',
		...rest
	}) => {
	const context = useContext(ThemeContext)
	const [activeTab, setActiveTab] = useState(null)
	const componentSelector = 'tab';
	const {
		classNames, customCss
	} = getDefaultClasses(styles, componentSelector, className, theme, layout, variant, size, colorScheme)
	const typeClasses = type !== 'default' ? `tab-${type}` : 'tabs';
	const positionClasses = position !== 'top' ? `tab-${position}` : '';
	const lineDirectionClasses = variant === 'floating-line' ? `${componentSelector}-${variant}-${lineDirection}` : '';


	const classes = `${classNames} ${getClassNames(
		styles,
		!colorScheme ? `${componentSelector}-${theme}` : `${componentSelector}-primary`,
	)}`

	let hasActiveProp: boolean = false
	const tabItems: JSX.Element[] = []
	const tabContents: JSX.Element[] = []
	React.Children.forEach(children, (child: React.ReactNode) => {
		if (React.isValidElement(child)) {
			if (child.props?.originalType?.displayName === 'TabContent' || (child.type as React.FC)?.displayName === 'TabContent') {
				tabContents.push(React.cloneElement<any>(child, {
					variant, activeTab, key: getRandomClassId()
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

	return (
		<>
			{customCss && customCss()}
			<div {...rest} data-theme-id={context?.themeId || ''} className={`${classes} ${getClassNames(styles, "tab-wrap", positionClasses)}`}>
				<ul className={`${classes} ${getClassNames(styles, "tab-pills", typeClasses, lineDirectionClasses)}`}
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
export default Tabs;
