import React from 'react';
import getClassNames from '../../../utils/getClassnames';
import classes from '../Dropdown.module.css';
import { IDropdownToggle } from '../../../types/dropdown';

export const DropdownToggle: React.FC<IDropdownToggle> = (
    {
        style,
        className,
        children,
        toggleHandler
    }) => {
    return (
        <button
            style={style}
            onClick={toggleHandler}
            type='button'
            className={
                `${getClassNames(classes, 'dropdown-btn', 'dropdown-toggle')} ${className}`
            }
        >
            {children}
        </button>
    );
};
