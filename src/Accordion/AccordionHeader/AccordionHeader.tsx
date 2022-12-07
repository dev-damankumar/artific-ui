import React from 'react';
import classes from '../Accordion.module.css';
import bgClasses from '../../bg.module.css';
import getClassNames from '../../utils/getClassnames';
import {IAccordionHeader, IAccordionHeaderDefaultPropTypes, IAccordionHeaderPropTypes} from '../../types/accordion';

export const AccordionHeader: React.FC<IAccordionHeader> = (
	{
		children,
		theme,
		onToggle,
		prefix,
		suffix
	}) => {
	const themeClasses = theme ? `bg-${theme}` : '';
	return (
		<div onClick={onToggle}
			 className={`${getClassNames(classes, 'accordion-header')} ${getClassNames(bgClasses, themeClasses)}`}>
			<a className={getClassNames(classes, 'accordion-link')}>
				{prefix && <div className={getClassNames(classes, 'accordion-icon-left')}>{prefix}</div>}
				{children}
				{suffix && <div className={getClassNames(classes, 'accordion-icon-left')}>{suffix}</div>}
			</a>
		</div>
	);
};

AccordionHeader.propTypes = IAccordionHeaderPropTypes
AccordionHeader.defaultProps = IAccordionHeaderDefaultPropTypes
export default AccordionHeader