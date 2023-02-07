import React from 'react';
import classes from './Accordion.module.css';
import getClassNames from '../utils/classes/getClassnames';
import {IAccordionHeader, IAccordionHeaderPropTypes} from './Accordion.types';
import {IDiv} from "../types/Common.types";

export const AccordionHeader: React.FC<IAccordionHeader & IDiv> = (
	{
		children,
		theme,
		onToggle,
		prefix,
		suffix,
		...rest
	}) => {
	return (
		<div
			{...rest}
			onClick={(e) => {
				onToggle?.(e)
				rest.onClick?.(e)
			}}
			className={`${getClassNames(classes, 'accordion-header')}`}>
			<a className={getClassNames(classes, 'accordion-link')}>
				{prefix && <div className={getClassNames(classes, 'accordion-icon-left')}>{prefix}</div>}
				{children}
				{suffix && <div className={getClassNames(classes, 'accordion-icon-right')}>{suffix}</div>}
			</a>
		</div>
	);
};

AccordionHeader.displayName = 'AccordionHeader'
AccordionHeader.propTypes = IAccordionHeaderPropTypes
export default AccordionHeader
