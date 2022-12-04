import React from 'react';
import classes from './Accordion.module.css';
import getClassNames from '../../utils/getClassnames';
import sizeClasses from '../../utils/sizeClasses';
import { IAccordionProps } from '../../types/accordion';

export const Accordion: React.FC<IAccordionProps> = (
    {
        children,
        theme = '',
        variant = 'default',
        size = 'md', layout = 'default',
        indicatorDirection = 'end'
    }) => {
    let variantArray = ['default', 'separate', 'bordered', 'outlined', 'attached'];
    let layoutArray = ['default', 'rounded', 'no-radius', 'pill'];
    let layoutClasses = '';
    if (layoutArray.includes(layout)) {
        layoutClasses = layout !== 'default' ? `accordion-${layout}` : '';
    }
    let variantClasses = '';
    if (variantArray.includes(variant)) {
        variantClasses = variant !== 'default' ? `accordion-${variant}` : '';
    }

    let sizeClass = sizeClasses('accordion', size);
    const childrenWithProps = React.Children.map(children, child => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, { theme, ...child.props });
        }
        return child;
    });
    return (
        <div
            className={
                getClassNames(classes, 'accordion-wrap',
                    indicatorDirection === 'start' ? 'accordion-indicator-left':'',
                    layoutClasses,
                    variantClasses,
                    sizeClass)
            }>
            {childrenWithProps}
        </div>
    );
};


