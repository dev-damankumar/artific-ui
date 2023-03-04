import React, {useContext} from 'react'
import styles from './Card.module.css'
import getClassNames from '../utils/classes/getClassnames'
import {ICardImageProps, ICardImagePropsTypes} from './Card.types'
import {IImage} from '../types/Common.types'
import {ThemeContext} from '../ThemeProvider'

export const CardImage: React.FC<ICardImageProps & IImage> = (
    {
        src,
        alt,
        layout,
        className,
        direction,
        ...rest
    }) => {
    const context = useContext(ThemeContext)
    const layoutClasses = layout !== 'default' ? `card-image-${layout}` : ''
    return (
        <div
            className={getClassNames(
                styles,
                'card-img-div',
                direction === 'row' ? 'card-img-no-margin' : '',
                direction === 'column' && layout !== 'extended'
                    ? 'card-img-div-col'
                    : '',
            )}
        >
            <img
                role="img"
                {...rest}
                data-theme-id={context?.themeId || ''}
                className={`${getClassNames(
                    styles,
                    'card-image',
                    layoutClasses,
                )} ${className}`}
                src={src}
                alt={alt}
            />
        </div>
    )
}
CardImage.displayName = 'CardImage'
CardImage.propTypes = ICardImagePropsTypes

export default CardImage
