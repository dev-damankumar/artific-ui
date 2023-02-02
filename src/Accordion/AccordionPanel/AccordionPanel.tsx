import React, {useState} from 'react';
import styles from '../Accordion.module.css';
import {IAccordionPanel, IAccordionPanelDefaultPropTypes, IAccordionPanelPropTypes} from '../../types/accordion.types';
import getClassNames from '../../utils/classes/getClassnames';
import {addPropsToChildren} from "../../utils/helpers";
import {IDiv} from "../../types/common.types";


export const AccordionPanel: React.FC<IAccordionPanel & IDiv> = (
	{
		children,
		theme,
		...rest
	}) => {
	const [open, setOpen] = useState(false);
	let toggleAccordion = () => {
		setOpen(!open);
	};
	const childrenWithProps = addPropsToChildren(children, {theme, open, onToggle: toggleAccordion})
	return (
		<div {...rest} className={getClassNames(styles, 'accordion', open ? 'open' : '')}>
			{childrenWithProps}
		</div>
	);
};

AccordionPanel.propTypes = IAccordionPanelPropTypes
AccordionPanel.defaultProps = IAccordionPanelDefaultPropTypes
export default AccordionPanel;
