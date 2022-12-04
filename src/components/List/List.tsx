import React from 'react';
import classes from './List.module.css';
import getClassNames from '../../utils/getClassnames';
import sizeClasses from '../../utils/sizeClasses';
import { IListProps } from '../../types/list';

export const List: React.FC<IListProps> = (
    {
        children,
        theme,
        layout = 'default',
        variant = 'default',
        direction,
        size = 'md'
    }) => {

    let variantArray = ['default', 'striped', 'separate', 'borderless', 'bordered', 'outlined'];
    let layoutArray = ['default', 'rounded', 'no-radius'];
    let directionClasses = direction !== 'column' ? `list-group-${direction}` : '';
    let layoutClasses = '';
    if (layoutArray.includes(layout)) {
        layoutClasses = layout !== 'default' ? `list-${layout}` : '';
    }
    let variantClasses = '';
    if (variantArray.includes(variant)) {
        variantClasses = variant !== 'default' ? `list-${variant}` : '';
    }
    let sizeClass = sizeClasses('list', size);
    const childrenWithProps = React.Children.map(children, child => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, { theme, ...child.props });
        }
        return child;
    });
    return (
        <ul className={getClassNames(classes, 'list-group', layoutClasses, variantClasses, directionClasses, sizeClass)}>
            {childrenWithProps}
        </ul>
    );
};
