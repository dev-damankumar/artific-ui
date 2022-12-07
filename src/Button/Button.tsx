import React from 'react';
import styles from './Button.module.css';
import getClassNames from '../utils/getClassnames';
import ripple from '../utils/effectRipple';
import uuid from '../utils/uuid';
import colorShades from '../utils/colors/colorShades';
import covertColor from '../utils/colors/convertColor';
import sizeClasses from '../utils/sizeClasses';
import { IButtonProps } from '../types/button';
import { ColorScheme } from '../types/common';
/*Responsive checkPropTypes pending for onstalled components*/

export const Button: React.FC<IButtonProps> = (
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
    let themeClasses = `btn-${theme}`;
    let mouseDown = false;
    let variantArray = ['default', 'text', 'outline'];
    let layoutArray = ['default', 'rounded', 'pill', 'no-radius'];
    let layoutClasses = '';
    if (layoutArray.includes(layout)) {
        layoutClasses = layout !== 'default' ? `btn-${layout}` : '';
    }
    let variantClasses = '';
    if (variantArray.includes(variant)) {
        variantClasses = variant !== 'default' ? `btn-${variant} ${variant === 'text' && 'btn-outline'}` : '';
    }

    let loadingClasses = loading && `${hideTextOnLoading && 'btn-loading-no-text'} btn-loading ${loadingDirection === 'after' && 'btn-loading-right'} ${loadingStyle === 'grow' && 'btn-loading-grow'}` || '';
    let sizeClass = sizeClasses('btn', size);
    let mainBtnSelector = getClassNames(styles, 'btn');
    let id = uuid();
    const componentSelector = `${mainBtnSelector.trim()}__${id}`;
    if (colorScheme) {
        const scheme = (colorScheme as ColorScheme)!;
        let css = `<style data-xcellent-css='${id}'>
           .${componentSelector}{
                color: ${scheme.color}; 
                --primary: ${scheme.background};
               
                ${scheme?.backgroundColor
            ?
            ` --primary-color: ${scheme.backgroundColor};
                --primary-hover: ${!scheme.background.includes('gradient') ? colorShades(-0.2, covertColor(scheme.backgroundColor)) : scheme.background};
                --primary-hover-box-shadow:${colorShades(0.65, covertColor(scheme.backgroundColor))};`
            :
            `--primary-color:${!scheme.background.includes('gradient') ? scheme.background : 'var(--light-hover)'};
                --primary-hover: ${!scheme.background.includes('gradient') ? colorShades(-0.2, covertColor(scheme.background)) : scheme.background};
                --primary-hover-box-shadow: ${!scheme.background.includes('gradient') ? colorShades(0.65, covertColor(scheme.background)) : 'var(--hover-box-shadow)'};`}
           }
</style>`;
        document.head.innerHTML += css;
    }

    return <button
        {...rest}
        disabled={disabled}
        type={type}
        style={style}
        className={
            `${mainBtnSelector} ${componentSelector} ${getClassNames(
                styles,
                !colorScheme ? themeClasses : 'btn-primary',
                layoutClasses,
                disabled ? 'btn-disabled' : '',
                loadingClasses,
                variantClasses,
                sizeClass
            )} ${className}`
        }
        onMouseDown={(e: React.MouseEvent<HTMLButtonElement>) => {
            mouseDown = true;
            if (rest.onMouseDown) {
                rest.onMouseDown(e);
            }
            const target = (e.target as HTMLInputElement)!;
            if (loading || disabled) return;
            let initial = target.style?.cssText;
            if (target.nodeName.toLowerCase() === 'button' || target.closest('button')) {
                let button = e.target as HTMLButtonElement;
                if (target.closest('button')) {
                    button = target.closest('button')!;
                }
                ripple(e, button, false, initial, mouseDown);
            }
        }}
        onFocus={(e) => {
            if (rest?.onFocus) {
                rest.onFocus(e);
            }
            if (loading || disabled) return;
            let initial = e.target?.style?.cssText;
            if (!mouseDown) {
                if (e.target.nodeName.toLowerCase() === 'button' || e.target.closest('button')) {
                    let button = e.target;
                    if (e.target.closest('button')) {
                        button = e.target.closest('button')!;
                    }
                    ripple(e, button, true, initial, mouseDown);
                }
            }
        }}
    >
        {prefix && <div className={getClassNames(styles, 'btn-icon', 'btn-icon-prefix')}>{prefix}</div>}
        {(hideTextOnLoading && loading) ? <span>&nbsp;</span> : children}
        {suffix && <div className={getClassNames(styles, 'btn-icon', 'btn-icon-suffix')}>{suffix}</div>}
    </button>;
};

export default Button
