import React from 'react';
import classes from '../Card.module.css';
import getClassNames from '../../utils/getClassnames';
import { ICardImageProps } from '../../types/card';

export const CardImage: React.FC<ICardImageProps> = (
    {
        src,
        alt,
        layout = 'default',
        className = '',
        ...rest
    }) => {
    let layoutArray = ['default', 'rounded', 'no-radius', 'circle'];
    let layoutClasses = '';
    if (layoutArray.includes(layout)) {
        layoutClasses = layout !== 'default' ? `card-image-${layout}` : '';
    }
    return (
        <div className={getClassNames(classes, 'card-img-div')}>
            <img {...rest} className={`${getClassNames(classes, layoutClasses)} ${className}`} src={src} alt={alt} />
        </div>
    );
};

export default CardImage
