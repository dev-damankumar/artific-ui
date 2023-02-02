import React from 'react';
import getClassNames from '../../utils/classes/getClassnames';
import classes from '../Card.module.css';
import {IDiv} from "../../types/common.types";

export interface ICardContentProps {
	children: React.ReactNode,
}

export const CardContent: React.FC<ICardContentProps & IDiv> = ({children, ...rest}) => {
	return (
		<div {...rest} className={getClassNames(classes, 'card-body')}>
			{children}
		</div>
	);
};


export default CardContent
