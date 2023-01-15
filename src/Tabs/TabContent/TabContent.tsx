import React from 'react';
import getClassNames from "../../utils/getClassnames";
import styles from "../Tabs.module.css";
import {ITabContentProps, tabContentDefaultProps, tabContentPropTypes} from "../../types/tabs";
import ErrorMessage from "../../utils/Error";

export const TabContent: React.FC<ITabContentProps> = ({id, activeTab, children}) => {
	if (!id) {
		return <ErrorMessage>`id` Prop is Required</ErrorMessage>
	}
	return (
		<div className={getClassNames(styles, "tab-pane", activeTab === id ? "tab-open" : '')}>
			{children}
		</div>
	);
};

TabContent.displayName = 'TabContent';
TabContent.propTypes = tabContentPropTypes;
TabContent.defaultProps = tabContentDefaultProps;

export default TabContent;
