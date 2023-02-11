import React from 'react';
import {IBadgeProps, propTypes} from './Badge.types';
import {IDiv} from "../types/Common.types";
import styles from "./Badge.module.css"
import getClassnames from "../utils/classes/getClassnames";
import {addPropsToChildren} from "../utils/helpers";

export const BadgeGroup: React.FC<IBadgeProps & IDiv> = (
	{
		children,
		...rest
	}) => {
	const componentSelector = 'badge-group';
	const childrenWithProps = addPropsToChildren(children, {...rest})
	return <>
		<div {...rest} className={`${rest.className} ${componentSelector} ${getClassnames(styles, componentSelector)}`}>
			{childrenWithProps}
		</div>
	</>
};

BadgeGroup.displayName = 'BadgeGroup';
BadgeGroup.propTypes = propTypes;
export default BadgeGroup



