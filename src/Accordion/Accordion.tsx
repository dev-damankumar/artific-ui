import React, {FC} from 'react';
import styles from './Accordion.module.css';
import {defaultProps, IAccordionProps, propTypes} from './Accordion.types';
import getClassNames from '../utils/classes/getClassnames';
import getDefaultClasses from "../utils/classes/getDefaultClasses";
import {addPropsToChildren} from "../utils/helpers";
import {IDiv} from "../types/Common.types";

export const Accordion: FC<IAccordionProps & IDiv> = (
	{
		className,
		children,
		theme,
		variant,
		size,
		layout,
		indicatorPosition,
		colorScheme,
		...rest
	}) => {
	const componentSelector = 'accordion';
	console.log('styles', styles)
	const {
		customCss, classNames
	} = getDefaultClasses(styles, componentSelector, className, theme, layout, variant, size, colorScheme)
	const childrenWithProps = addPropsToChildren(children, {theme})
	const classes = getClassNames(styles, 'accordion-wrap', indicatorPosition === 'start' && 'accordion-indicator-left')
	return (
		<>
			{customCss && customCss()}
			<div
				{...rest}
				className={`${classNames} ${classes}`}>
				{childrenWithProps}
			</div>
		</>
	);
};
Accordion.displayName = 'Accordion';
Accordion.propTypes = propTypes;
Accordion.defaultProps = defaultProps;
export default Accordion
