import React from 'react';
import styles from '../Card.module.css';
import getClassNames from '../../utils/classes/getClassnames';
import {ICardImageDefaultProps, ICardImageProps, ICardImagePropsTypes} from '../../types/card.types';
import {IImage} from "../../types/common.types";

export const CardImage: React.FC<ICardImageProps & IImage> = (
	{
		src,
		alt,
		layout,
		className,
		size,
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
CardImage.defaultProps = ICardImageDefaultProps;

export default CardImage
