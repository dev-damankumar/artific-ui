import React, {useContext} from 'react';
import getClassNames from '../utils/classes/getClassnames';
import classes from './Card.module.css';
import {IDiv} from "../types/Common.types";
import {ThemeContext} from "../ThemeProvider";

export interface ICardContentProps {
	children: React.ReactNode,
}

export const CardContent: React.FC<ICardContentProps & IDiv> = ({children, ...rest}) => {
	const context = useContext(ThemeContext)
	return (
		<div {...rest} data-theme-id={context?.themeId || ''} className={getClassNames(classes, 'card-body')}>
			{children}
		</div>
	);
};


CardContent.displayName = 'CardContent'
export default CardContent
