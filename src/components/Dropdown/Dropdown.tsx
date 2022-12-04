import React from 'react';
import sizeClasses from '../../utils/sizeClasses';
import classes from './Dropdown.module.css';
import getClassNames from '../../utils/getClassnames';
import { IDropdownProps } from '../../types/dropdown';

export const Dropdown: React.FC<IDropdownProps> = (
    {
        autoClose = false,
        children,
        className,
        style,
        size = 'md',
        position = 'bottom',
        fullwidth,
        layout = 'default',
        variant = 'default'
    }) => {
    let sizeClassNames = sizeClasses('dropdown', size);
    let layoutArray = ['rounded', 'default', 'no-radius', 'floating'];
    let variantArray = ['drawer', 'fluid'];
    let layoutClasses = '';
    if (layoutArray.includes(layout)) {
        layoutClasses = layout !== 'default' ? `dropdown-${layout}` : '';
    }
    let variantClasses = '';
    if (variantArray.includes(variant)) {
        variantClasses = variant !== 'default' ? `dropdown-${variant}` : '';
    }

    let sizeClass = sizeClasses('dropdown', size);
    let openDropdown = (e: Event) => {
        if (e.currentTarget === e.target) {
            (e.target as HTMLElement)!.parentElement!.classList.toggle(getClassNames(classes, 'dropdown-open').trim());
        }
    };

    let handleCloseMenu = (e: React.MouseEvent<Element, MouseEvent>) => {
        if ((e.target! as HTMLElement).dataset.dropdown) {
            (e.target! as HTMLElement).classList.remove(getClassNames(classes, 'dropdown-open').trim());
        }
    };
    const childrenWithProps = React.Children.map(children, child => {
        if (React.isValidElement(child)) {
            return React.cloneElement<any>(child, {
                autoClose, toggleHandler: openDropdown, closeHandler: handleCloseMenu
            });
        }
        return child;
    });

    return (
        <div style={style}
             onClick={(e: React.MouseEvent<Element, MouseEvent>): void => {
                 handleCloseMenu(e);
             }}
             data-dropdown
             className={`${getClassNames(
                 classes,
                 'dropdown',
                 sizeClassNames,
                 fullwidth ? 'dropdown-full' : '',
                 position !== 'bottom' ? `drop-${position}` : '',
                 layoutClasses,
                 variantClasses,
                 sizeClass
             )} ${className}`}>
            {childrenWithProps}
        </div>
    );
};
