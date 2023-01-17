import React from 'react';
import getClassNames from '../../utils/getClassnames';
import classes from '../Card.module.css';

export interface ICardContentProps {
	children: React.ReactNode,
}

export const CardContent: React.FC<ICardContentProps> = ({children}) => {
	return (
		<div className={getClassNames(classes, 'card-body')}>
			{children}
		</div>
	);
};


export default CardContent
