import {ColorScheme, Sizes, SizesArray, Themes, ThemesArray,} from '../types/Common.types'
import PropTypes from 'prop-types'

export const LayoutsArray = [
    'default',
    'rounded',
    'pill',
    'no-radius',
    'circular',
] as const
export type Layouts = (typeof LayoutsArray)[number]

export const VariantsArray = ['default', 'outline', 'dot'] as const
export type Variants = (typeof VariantsArray)[number]

export const propTypes = {
    theme: PropTypes.oneOf<Themes>(ThemesArray),
    colorScheme: PropTypes.shape({
        background: PropTypes.string.isRequired,
        backgroundColor: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
    }),
    title: PropTypes.string,
    variant: PropTypes.oneOf<Variants>(VariantsArray),
    layout: PropTypes.oneOf<Layouts>(LayoutsArray),
    size: PropTypes.oneOf<Sizes>(SizesArray),
}

export interface IBadgeProps {
    theme?: Themes
    colorScheme?: ColorScheme
    title?: string
    variant?: Variants
    layout?: Layouts
    size?: Sizes
}
