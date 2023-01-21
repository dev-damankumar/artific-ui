import React from 'react';
import getClassNames from "../../utils/classes/getClassnames";
import styles from "../Tabs.module.css";
import {ITabContentProps, tabContentDefaultProps, tabContentPropTypes} from "../../types/tabs";
import ErrorMessage from "../../utils/errors/Error";
import {IDiv} from "../../types/common";

export const TabContent: React.FC<ITabContentProps & IDiv> = (
	{
		id,
		activeTab,
		children,
		...rest

	}) => {
	if (!id) {
		return <ErrorMessage>`id` Prop is Required</ErrorMessage>
	}
	return (
		<div {...rest} className={getClassNames(styles, "tab-pane", activeTab === id ? "tab-open" : '')}>
			{children}
		</div>
	);
};

TabContent.displayName = 'TabContent';
TabContent.propTypes = tabContentPropTypes;
TabContent.defaultProps = tabContentDefaultProps;

export default TabContent;
