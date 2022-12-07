import React from 'react';
import classes from './Card.module.css';
import getClassNames from '../utils/getClassnames';
import { ICardProps } from '../types/card';

export const Card: React.FC<ICardProps> = (
    {
        children,
        layout = 'default',
        theme = '',
        variant = 'default',
        direction = 'column',
        className,
        ...rest
    }) => {
    let themeClasses = theme ? `bg-${theme}` : '';
    let layoutArray = ['default', 'extended', 'rounded', 'no-radius'];
    let variantArray = ['default', 'fill', 'outline', 'fill-with-border'];
    let layoutClasses = '';
    if (layoutArray.includes(layout)) {
        layoutClasses = layout !== 'default' ? `card-${layout}` : '';
    }
    let variantClasses = '';
    if (variantArray.includes(variant)) {
        variantClasses = variant !== 'default' ? `card-${variant}` : '';
    }
    return (
        <div {...rest}
             className={`${
                 getClassNames(
                     classes,
                     'card',
                     direction === 'row' ? 'card-row' : '',
                     layoutClasses,
                     themeClasses,
                     variantClasses
                 )} ${className}`}>
            {children}
        </div>
    );
};

export default Card