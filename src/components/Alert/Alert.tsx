import React, { useState } from 'react';
import getClassNames from '../../utils/getClassnames';
import styles from './Alert.module.css';
import uuid from '../../utils/uuid';
import colorShades from '../../utils/colors/colorShades';
import covertColor from '../../utils/colors/convertColor';
import sizeClasses from '../../utils/sizeClasses';
import { IAlertProps } from '../../types/alert';

export const Alert: React.FC<IAlertProps> = (
    {
        children,
        direction = 'left',
        dismiss,
        size = 'md',
        theme = 'primary',
        colorScheme = null,
        className,
        style = {},
        variant = 'default',
        layout = 'default',
        onClose,
        ...rest
    }) => {
    let themeClasses = `alert-${theme}`;
    let variantArray = ['default', 'text', 'outline', 'note'];
    let layoutArray = ['default', 'rounded', 'pill', 'no-radius'];
    let [show, setShow] = useState(true);
    let layoutClasses = '';
    if (layoutArray.includes(layout)) {
        layoutClasses = layout !== 'default' ? `alert-${layout}` : '';
    }
    let variantClasses = '';
    if (variantArray.includes(variant)) {
        variantClasses = variant !== 'default' ? `alert-${variant} ${direction && direction !== 'left' && `alert-note-${direction}`} ${variant === 'note' && 'alert-outline'} ${variant === 'text' && 'alert-outline'}` : '';
    }

    let sizeClass = sizeClasses('alert', size);
    let mainBtnSelector = getClassNames(styles, 'alert');
    const id = uuid();
    const componentSelector = `${mainBtnSelector.trim()}__${id}`;
    if (colorScheme) {

        let css = `<style data-xcellent-css='${id}'>
           .${componentSelector}{
                color: ${colorScheme.color}; 
                --primary: ${colorScheme.background};
               
                ${colorScheme?.backgroundColor
            ?
            ` --primary-color: ${colorScheme.backgroundColor};
                --primary-hover: ${!colorScheme.background.includes('gradient') ? colorShades(-0.2, covertColor(colorScheme.backgroundColor)) : colorScheme.background};
                --primary-hover-box-shadow:${colorShades(0.65, covertColor(colorScheme.backgroundColor))};`
            :
            `--primary-color:${!colorScheme.background.includes('gradient') ? colorScheme.background : 'var(--light-hover)'};
                --primary-hover: ${!colorScheme.background.includes('gradient') ? colorShades(-0.2, covertColor(colorScheme.background)) : colorScheme.background};
                --primary-hover-box-shadow: ${!colorScheme.background.includes('gradient') ? colorShades(0.65, covertColor(colorScheme.background)) : 'var(--hover-box-shadow)'};`}
           }
</style>`;
        document.head.innerHTML += css;
    }

    let onCloseHandler = () => {
        if (onClose) {
            onClose();
            return;
        }
        setShow(false);
    };
    return show ? (
        <div
            className={
                `${mainBtnSelector} ${componentSelector} ${getClassNames(
                    styles,
                    !colorScheme ? themeClasses : 'alert-primary',
                    layoutClasses,
                    variantClasses,
                    sizeClass
                )} ${className}`
            }
            {...rest}
        >
            {dismiss &&
                <button onClick={onCloseHandler} type='button'
                        className={getClassNames(styles, 'close')}>&times;</button>}
            {children}
        </div>
    ) : null;
};


