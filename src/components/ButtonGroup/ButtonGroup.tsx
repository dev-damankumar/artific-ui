import React from 'react';
import styles from './ButtonGroup.module.css';
import getClassNames from '../../utils/getClassnames';
import sizeClasses from '../../utils/sizeClasses';
import { Directions } from '../../types/button';
import { Sizes } from '../../types/common';

export interface IButtonGroupProps {
    children: React.ReactNode,
    size: Sizes,
    direction: Directions
}

export const ButtonGroup: React.FC<IButtonGroupProps> = ({ children, size = 'md', direction = 'horizontal' }) => {
    let sizeClass = sizeClasses('btn-group', size);
    let directionClasses = direction !== 'horizontal' ? `btn-group-${direction}` : 'btn-group';
    return (
        <div className={getClassNames(styles, sizeClass, directionClasses)}>
            {children}
        </div>
    );
};

