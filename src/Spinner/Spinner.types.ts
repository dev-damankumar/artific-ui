import {ColorScheme, Directions, DirectionsArray, Sizes, SizesArray, Themes, ThemesArray,} from '../types/Common.types'
import {bool, oneOf, shape, string} from 'prop-types'

export const VariantsArray = [
    'default',
    'ring',
    'dots',
    'box',
    'ripple',
] as const
export type Variants = (typeof VariantsArray)[number]

export const propTypes = {
    dismiss: bool,
    direction: oneOf<Directions>(DirectionsArray),
    theme: oneOf<Themes>(ThemesArray),
    colorScheme: shape({
        background: string.isRequired,
        backgroundColor: string.isRequired,
        color: string.isRequired,
    }),
    variant: oneOf<Variants>(VariantsArray),
    size: oneOf<Sizes>(SizesArray),
}

export interface ISpinnerProps {
    dismiss?: boolean
    direction?: Directions
    theme?: Themes
    colorScheme?: ColorScheme
    variant?: Variants
    size?: Sizes
}
