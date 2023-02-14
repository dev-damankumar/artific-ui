import React, {FC, useContext} from 'react';
import styles from './Accordion.module.css';
import {IAccordionProps, propTypes} from './Accordion.types';
import getClassNames from '../utils/classes/getClassnames';
import getDefaultClasses from "../utils/classes/getDefaultClasses";
import {addPropsToChildren} from "../utils/helpers";
import {IDiv} from "../types/Common.types";
import {ThemeContext} from "../ThemeProvider";

export const Accordion: FC<IAccordionProps & IDiv> = (
	{
		className = '',
		children,
		theme = 'default',
		variant = 'default',
		size = 'md',
		layout = 'default',
		indicatorPosition = 'end',
		colorScheme,
		...rest
	}) => {
	const context = useContext(ThemeContext)
	const componentSelector = 'accordion';
	const {
		customCss, classNames
	} = getDefaultClasses(styles, componentSelector, className, theme, layout, variant, size, colorScheme)
	const childrenWithProps = addPropsToChildren(children, {theme})
	const classes = getClassNames(styles, 'accordion-wrap', indicatorPosition === 'start' && 'accordion-indicator-left')
	return (
		<>
			{customCss && customCss()}
			<div
				{...rest} data-theme-id={context?.themeId || ''}
				className={`${classNames} ${classes}`}
			>
				{childrenWithProps}
			</div>
		</>
	);
};
Accordion.displayName = 'Accordion';
Accordion.propTypes = propTypes;
export default Accordion
