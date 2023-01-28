import React from 'react';
import classes from '../Accordion.module.css';
import bgClasses from '../../color.module.css';
import getClassNames from '../../utils/classes/getClassnames';
import {IAccordionHeader, IAccordionHeaderDefaultPropTypes, IAccordionHeaderPropTypes} from '../../types/accordion';
import {IDiv} from "../../types/common";

export const AccordionHeader: React.FC<IAccordionHeader & IDiv> = (
	{
		children,
		theme,
		onToggle,
		prefix,
		suffix,
		...rest
	}) => {
	const themeClasses = theme !== 'default' ? `bg-${theme}` : 'bg-primary';
	return (
		<div
			{...rest}
			onClick={(e) => {
				onToggle?.(e)
				rest.onClick?.(e)
			}}
			className={`${getClassNames(classes, 'accordion-header')} ${getClassNames(bgClasses, themeClasses)}`}>
			<a className={getClassNames(classes, 'accordion-link')}>
				{prefix && <div className={getClassNames(classes, 'accordion-icon-left')}>{prefix}</div>}
				{children}
				{suffix && <div className={getClassNames(classes, 'accordion-icon-right')}>{suffix}</div>}
			</a>
		</div>
	);
};

AccordionHeader.propTypes = IAccordionHeaderPropTypes
AccordionHeader.defaultProps = IAccordionHeaderDefaultPropTypes
export default AccordionHeader
