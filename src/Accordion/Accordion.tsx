import React from 'react';
import classes from './Accordion.module.css';
import getClassNames from '../utils/getClassnames';
import sizeClasses from '../utils/sizeClasses';
import {defaultProps, IAccordionProps, propTypes} from '../types/accordion';
import applyColorScheme from "../utils/applyColorScheme";
import getRandomClassId from "../utils/generateRandonClassId";

export const Accordion: React.FC<IAccordionProps> = (
	{
		children,
		theme,
		variant,
		size,
		layout,
		indicatorDirection,
		colorScheme
	}) => {
	const id = getRandomClassId();
	const componentId = 'accordion';
	const componentSelector = `${componentId}-${id}`;
	const layoutClasses = layout !== 'default' ? `accordion-${layout}` : '';
	const variantClasses = variant !== 'default' ? `accordion-${variant}` : '';
	const sizeClass = sizeClasses('accordion', size);

	const childrenWithProps = React.Children.map(children, child => {
		if (React.isValidElement(child)) {
			return React.cloneElement(child, {theme, ...child.props});
		}
		return child;
	});
	const customCss = applyColorScheme(componentSelector, colorScheme, componentId)
	return (
		<>
			{customCss && customCss()}
			<div
				className={
					`${componentSelector} ${getClassNames(classes, 'accordion-wrap',
						indicatorDirection === 'start' ? 'accordion-indicator-left' : '',
						layoutClasses,
						variantClasses,
						sizeClass)}`
				}>
				{childrenWithProps}
			</div>
		</>
	);
};
Accordion.displayName = 'Accordion';
Accordion.propTypes = propTypes;
Accordion.defaultProps = defaultProps;
export default Accordion
