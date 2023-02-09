import React, {useRef} from 'react';
import classes from './Accordion.module.css';
import {IAccordionBody, IAccordionBodyPropTypes} from './Accordion.types';
import getClassNames from '../utils/classes/getClassnames';
import {CSSStyle, IDiv} from '../types/Common.types';

export const AccordionBody: React.FC<IAccordionBody & IDiv> = (
	{
		children,
		open = false,
		style,
		className,
		...rest
	}) => {
	const ref = useRef(null);
	const bodyStyle: CSSStyle = {};
	if (open) {
		if (ref?.current) {
			bodyStyle['padding'] = 'var(--accordion-padding)';
			bodyStyle['height'] = `calc(${(ref?.current as HTMLElement)?.scrollHeight}px + calc(var(--accordion-padding)*2))`;
		}
	} else {
		bodyStyle['padding'] = '0 var(--accordion-padding) 0 var(--accordion-padding)';
		bodyStyle['height'] = 0;
	}
	return (
		<div
			{...rest}
			ref={ref}
			style={{...style, ...bodyStyle}}
			className={`${getClassNames(classes, 'accordion-panel')} ${className}`}>
			<div className={getClassNames(classes, 'accordion-body')}>
				{!rest.disabled && children}
			</div>
		</div>
	);
};

AccordionBody.displayName = 'AccordionBody'
AccordionBody.propTypes = IAccordionBodyPropTypes
export default AccordionBody

