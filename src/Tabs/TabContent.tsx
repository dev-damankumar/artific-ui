import React, {useContext} from 'react';

import getClassNames from "../utils/classes/getClassnames";
import styles from "./Tabs.module.css";
import {ITabContentProps, tabContentPropTypes} from "./Tabs.types";
import ErrorMessage from "../utils/errors/Error";
import {IDiv} from "../types/Common.types";
import {ThemeContext} from "../ThemeProvider";

export const TabContent: React.FC<ITabContentProps & IDiv> = (
	{
		id,
		activeTab = '',
		children,
		...rest

	}) => {
	const context = useContext(ThemeContext)
	if (!id) {
		return <ErrorMessage>`id` Prop is Required</ErrorMessage>
	}
	return (
		<div {...rest} data-theme-id={context?.themeId || ''} className={getClassNames(styles, "tab-pane", activeTab === id ? "tab-open" : '')}>
			{children}
		</div>
	);
};

TabContent.displayName = 'TabContent';
TabContent.propTypes = tabContentPropTypes;

export default TabContent;
