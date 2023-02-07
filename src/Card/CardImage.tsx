import React from 'react';
import styles from './Card.module.css';
import getClassNames from '../utils/classes/getClassnames';
import {ICardImageProps, ICardImagePropsTypes} from './Card.types';
import {IImage} from "../types/Common.types";

export const CardImage: React.FC<ICardImageProps & IImage> = (
	{
		src,
		alt,
		layout,
		className,
		size = 'md',
		direction,
		...rest
	}) => {
	const layoutClasses = layout !== 'default' ? `card-image-${layout}` : '';
	console.log('direction', direction)
	console.log('layout', layout)
	return (
		<div
			className={getClassNames(styles, 'card-img-div', direction === 'row' ? 'card-img-no-margin' : '', (direction === 'column' && layout !== 'extended') ? 'card-img-div-col' : '')}>
			<img {...rest} className={`${getClassNames(styles, layoutClasses)} ${className}`} src={src}
				 alt={alt}/>
		</div>
	);
};
CardImage.displayName = 'CardImage';
CardImage.propTypes = ICardImagePropsTypes;

export default CardImage
