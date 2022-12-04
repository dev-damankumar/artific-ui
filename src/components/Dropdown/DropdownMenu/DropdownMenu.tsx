import React from 'react';
import getClassNames from '../../../utils/getClassnames';
import classes from '../Dropdown.module.css';
import { IDropdownMenu } from '../../../types/dropdown';

export const DropdownMenu: React.FC<IDropdownMenu> = (
    {
        children,
        className,
        style,
        position = 'before',
        closeHandler,
        autoClose,
        ...rest
    }) => {
    const childrenWithProps = React.Children.map(children, child => {
        if (React.isValidElement(child)) {
            return React.cloneElement<any>(child, { autoClose, closeHandler });
        }
        return child;
    });
    return (
        <div
            {...rest}
            className={
                `${getClassNames(classes, 'dropdown-menu', position === 'after' ? 'dropdown-menu-right' : '')} ${className}`
            }
            style={style}
        >
            <div className={getClassNames(classes, 'dropdown-wrap')}>
                {childrenWithProps}
            </div>
        </div>
    );
};
