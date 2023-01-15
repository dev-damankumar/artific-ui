import React from 'react';
import classes from '../Card.module.css';
import getClassNames from '../../utils/getClassnames';
import {ICardImageDefaultProps, ICardImageProps, ICardImagePropsTypes} from '../../types/card';

export const CardImage: React.FC<ICardImageProps> = (
	{
		src,
		alt,
		layout = 'default',
		className = '',
		size,
		...rest
	}) => {
	const layoutClasses = layout !== 'default' ? `card-image-${layout}` : '';
	// const sizeClass = sizeClasses('card-image', size);
	return (
		<div className={getClassNames(classes, 'card-img-div')}>
			<img {...rest} className={`${getClassNames(classes, layoutClasses)} ${className}`} src={src}
				 alt={alt}/>
		</div>
	);
};
CardImage.displayName = 'CardImage';
CardImage.propTypes = ICardImagePropsTypes;
CardImage.defaultProps = ICardImageDefaultProps;

export default CardImage
