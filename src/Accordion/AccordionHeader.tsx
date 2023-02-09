import React from 'react';
import classes from './Accordion.module.css';
import getClassNames from '../utils/classes/getClassnames';
import {IAccordionHeader, IAccordionHeaderPropTypes} from './Accordion.types';
import {IButton} from "../types/Common.types";

export const AccordionHeader: React.FC<Omit<IButton, 'prefix'> & IAccordionHeader> = (
	{
		children,
		theme,
		onToggle,
		prefix,
		suffix,
		...rest
	}) => {
	return (
		<button
			tabIndex={0}
			{...rest}
			onClick={(e) => {
				onToggle?.(e)
				rest.onClick?.(e)
			}}
			className={`${getClassNames(classes, 'accordion-header')}`}>
			<span className={getClassNames(classes, 'accordion-link')}>
				{prefix && <div className={getClassNames(classes, 'accordion-icon-left')}>{prefix}</div>}
				{children}
				{suffix && <div className={getClassNames(classes, 'accordion-icon-right')}>{suffix}</div>}
			</span>
		</button>
	);
};

AccordionHeader.displayName = 'AccordionHeader'
AccordionHeader.propTypes = IAccordionHeaderPropTypes
export default AccordionHeader
