import React, {useContext, useRef} from 'react';
import classes from './Accordion.module.css';
import {IAccordionBody, IAccordionBodyPropTypes} from './Accordion.types';
import getClassNames from '../utils/classes/getClassnames';
import {CSSStyle, IDiv} from '../types/Common.types';
import {ThemeContext} from "../ThemeProvider";

export const AccordionBody: React.FC<IAccordionBody & IDiv> = (
	{
		children,
		open = false,
		style,
		className,
		...rest
	}) => {
	const context = useContext(ThemeContext)
	const ref = useRef(null);
	const bodyStyle: CSSStyle = {};
	if (open) {
		if (ref?.current) {
			bodyStyle['padding'] = 'var(--ai-acc-pad) calc(var(--ai-acc-pad) * 2)';
			bodyStyle['height'] = `calc(${(ref?.current as HTMLElement)?.scrollHeight}px + calc(var(--ai-acc-pad)*2))`;
		}
	} else {
		bodyStyle['padding'] = '0 calc(var(--ai-acc-pad) * 2) 0 calc(var(--ai-acc-pad) * 2)';
		bodyStyle['height'] = 0;
	}
	return (
		<div
			{...rest} data-theme-id={context?.themeId || ''}
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

