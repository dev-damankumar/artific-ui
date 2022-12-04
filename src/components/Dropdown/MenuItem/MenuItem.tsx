import React from 'react';
import getClassNames from '../../../utils/getClassnames';
import classes from '../Dropdown.module.css';
import { IMenuItemProps } from '../../../types/dropdown';

export const MenuItem: React.FC<IMenuItemProps> = (
    {
        onSelect,
        className,
        style,
        children,
        closeHandler,
        autoClose,
        ...rest
    }) => {
    return (
        <a style={style} onClick={(e) => {
            if (onSelect) {
                onSelect(e);
            }
            if (autoClose) {
                closeHandler?.();
            }
            if (rest.onClick) {
                rest.onClick(e);
            }
        }} className={`${getClassNames(classes, 'dropdown-item')} ${className}`} {...rest}>
            {children}
        </a>
    );
};
