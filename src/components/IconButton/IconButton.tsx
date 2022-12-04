import React from 'react';
import styles from '../Button/Button.module.css';
import getClassNames from '../../utils/getClassnames';
import { Button } from '../Button';
import { IButtonProps } from '../../types/button';


export const IconButton: React.FC<IButtonProps> = (
    {
        className,
        style,
        hideTextOnLoading,
        children,
        type = 'button',
        colorScheme = null,
        theme = 'primary',
        variant = 'default',
        layout = 'default',
        disabled,
        loading,
        loadingDirection = 'before',
        loadingStyle = 'spin',
        size = 'md',
        prefix,
        suffix,
        variants,
        ...rest
    }) => {
    return <Button
        type={type}
        theme={theme}
        variant={variant}
        hideTextOnLoading={hideTextOnLoading}
        layout={layout}
        disabled={disabled}
        loading={loading}
        colorScheme={colorScheme}
        loadingStyle={loadingStyle}
        size={size}
        loadingDirection={loadingDirection}
        style={style}
        className={`${getClassNames(styles, 'icon-btn')} ${className}`}
        {...rest}
    >
        {children}
    </Button>;
};
