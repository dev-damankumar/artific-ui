import React, {useContext, useState} from 'react';
import styles from './Accordion.module.css';
import {IAccordionPanel, IAccordionPanelPropTypes} from './Accordion.types';
import getClassNames from '../utils/classes/getClassnames';
import {addPropsToChildren} from "../utils/helpers";
import {IDiv} from "../types/Common.types";
import {ThemeContext} from "../ThemeProvider";

export const AccordionPanel: React.FC<IAccordionPanel & IDiv> = (
	{
		children,
		theme,
		disabled = false,
		...rest
	}) => {
	const context = useContext(ThemeContext)
	const [open, setOpen] = useState(false);
	let toggleAccordion = () => {
		if (disabled) return
		setOpen(!open);
	};
	const childrenWithProps = addPropsToChildren(children, {theme, disabled, open, onToggle: toggleAccordion})
	return (
		<div {...rest} data-theme-id={context?.themeId || ''} className={getClassNames(styles, 'accordion', open ? 'accordion-open' : '', disabled ? 'accordion-disabled' : '')}>
			{childrenWithProps}
		</div>
	);
};

AccordionPanel.displayName = 'AccordionPanel'
AccordionPanel.propTypes = IAccordionPanelPropTypes
export default AccordionPanel;
