import React, {useState} from 'react';
import classes from '../Accordion.module.css';
import getClassNames from '../../utils/getClassnames';
import {IAccordionPanel, IAccordionPanelDefaultPropTypes, IAccordionPanelPropTypes} from '../../types/accordion';


export const AccordionPanel: React.FC<IAccordionPanel> = (
	{
		children,
		theme
	}) => {
	const [open, setOpen] = useState(false);
	let toggleAccordion = () => {
		setOpen(!open);
	};
	const childrenWithProps = React.Children.map(children, child => {
		if (React.isValidElement(child)) {
			return React.cloneElement(child, {theme, open, onToggle: toggleAccordion, ...child.props});
		}
		return child;
	});
	return (
		<div className={getClassNames(classes, 'accordion', open ? 'open' : '')}>
			{childrenWithProps}
		</div>
	);
};

AccordionPanel.propTypes = IAccordionPanelPropTypes
AccordionPanel.defaultProps = IAccordionPanelDefaultPropTypes
export default AccordionPanel;