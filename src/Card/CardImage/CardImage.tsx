import React from 'react';
import styles from '../Card.module.css';
import getClassNames from '../../utils/classes/getClassnames';
import {ICardImageDefaultProps, ICardImageProps, ICardImagePropsTypes} from '../../types/card';
import {IImage} from "../../types/common";

export const CardImage: React.FC<ICardImageProps & IImage> = (
	{
		src,
		alt,
		layout,
		className,
		size,
		...rest
	}) => {
	const layoutClasses = layout !== 'default' ? `card-image-${layout}` : '';
	return (
		<div className={getClassNames(styles, 'card-img-div')}>
			<img {...rest} className={`${getClassNames(styles, layoutClasses)} ${className}`} src={src}
				 alt={alt}/>
		</div>
	);
};
CardImage.displayName = 'CardImage';
CardImage.propTypes = ICardImagePropsTypes;
CardImage.defaultProps = ICardImageDefaultProps;

export default CardImage
