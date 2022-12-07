import React from 'react';
import classes from './Accordion.module.css';
import getClassNames from '../utils/getClassnames';
import sizeClasses from '../utils/sizeClasses';
import {defaultProps, IAccordionProps, propTypes} from '../types/accordion';

export const Accordion: React.FC<IAccordionProps> = (
	{
		children,
		theme,
		variant,
		size,
		layout,
		indicatorDirection
	}) => {
	const layoutClasses = layout !== 'default' ? `accordion-${layout}` : '';
	const variantClasses = variant !== 'default' ? `accordion-${variant}` : '';
	const sizeClass = sizeClasses('accordion', size);

	const childrenWithProps = React.Children.map(children, child => {
		if (React.isValidElement(child)) {
			return React.cloneElement(child, {theme, ...child.props});
		}
		return child;
	});
	return (
		<div
			className={
				getClassNames(classes, 'accordion-wrap',
					indicatorDirection === 'start' ? 'accordion-indicator-left' : '',
					layoutClasses,
					variantClasses,
					sizeClass)
			}>
			{childrenWithProps}
		</div>
	);
};

Accordion.propTypes = propTypes;
Accordion.defaultProps = defaultProps;
export default Accordion
