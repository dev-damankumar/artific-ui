import React, {useEffect} from 'react';

import getClassNames from "../../utils/classes/getClassnames";
import styles from "../Tabs.module.css";
import {ITabItemProps, tabItemDefaultProps, tabItemPropTypes} from "../Tabs.types";
import ErrorMessage from "../../utils/errors/Error";
import {ILi} from "../../types/Common.types";

export const TabItem: React.FC<ITabItemProps & ILi> = (
	{
		target,
		children,
		active,
		activeTab,
		setActiveTab,
		...rest
	}) => {
	if (!target) {
		return <ErrorMessage>`target` Prop is Required</ErrorMessage>
	}
	useEffect(() => {
		if (activeTab === null && active) {
			setActiveTab?.(target)
		}
	}, [])

	const tabChangeHandler = (e: React.MouseEvent<HTMLElement>, target: string) => {
		e.preventDefault()
		setActiveTab?.(target)
	}

	return (
		<li {...rest} onClick={(e: React.MouseEvent<HTMLElement>) => {
			tabChangeHandler(e, target)
		}}
			className={getClassNames(styles, 'tab-item', activeTab === target ? 'active' : '')}>
			<a
				className={getClassNames(styles, 'tab-link')}
			>
				{children}
			</a>
		</li>
	);
};

TabItem.displayName = 'TabItem';
TabItem.propTypes = tabItemPropTypes;
TabItem.defaultProps = tabItemDefaultProps;

export default TabItem;
