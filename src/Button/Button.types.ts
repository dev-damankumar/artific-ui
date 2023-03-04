import {CSSProperties, ReactElement, ReactNode} from 'react'
import {
    ColorScheme,
    Layouts,
    LayoutsArray,
    Sizes,
    SizesArray,
    Themes,
    ThemesArray,
    Variants,
    VariantsArray,
} from '../types/Common.types'
import PropTypes from 'prop-types'

export const LoadingDirectionsArray = ['before', 'after'] as const
export type LoadingDirections = (typeof LoadingDirectionsArray)[number]

export const LoadingStylesArray = ['spin', 'grow'] as const
export type LoadingStyles = (typeof LoadingStylesArray)[number]

export const DirectionsArray = ['horizontal', 'vertical'] as const
export type Directions = (typeof DirectionsArray)[number]

export const ButtonTypeArray = ['button', 'reset', 'submit'] as const
export type ButtonType = (typeof ButtonTypeArray)[number]

export const propTypes = {
    variant: PropTypes.oneOf<Variants>(VariantsArray),
    size: PropTypes.oneOf<Sizes>(SizesArray),
    disabled: PropTypes.bool,
    elevation: PropTypes.bool,
    type: PropTypes.oneOf(ButtonTypeArray),
    theme: PropTypes.oneOf<Themes>(ThemesArray),
    hideTextOnLoading: PropTypes.bool,
    loading: PropTypes.bool,
    noRipple: PropTypes.bool,
    fullwidth: PropTypes.bool,
    colorScheme: PropTypes.shape({
        background: PropTypes.string.isRequired,
        backgroundColor: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
    }),
    loadingDirection: PropTypes.oneOf<LoadingDirections>(
        LoadingDirectionsArray,
    ),
    layout: PropTypes.oneOf<Layouts>(LayoutsArray),
    loadingStyle: PropTypes.oneOf<LoadingStyles>(LoadingStylesArray),
}

export interface IButtonProps {
    children: ReactNode
    type?: ButtonType
    style?: CSSProperties
    theme?: Themes
    hideTextOnLoading?: boolean
    elevation?: boolean
    noRipple?: boolean
    fullwidth?: boolean
    colorScheme?: ColorScheme
    loadingDirection?: LoadingDirections
    variant?: Variants
    layout?: Layouts
    size?: Sizes
    loadingStyle?: LoadingStyles
    disabled?: boolean
    loading?: boolean
    prefix?: ReactElement | null
    suffix?: ReactElement | null
}
