import {ColorScheme, Themes, ThemesArray} from '../types/Common.types'
import {ReactNode} from 'react'
import {number, oneOf, oneOfType, shape, string} from 'prop-types'

export const TypographyAsElementsArray = [
    'span',
    'p',
    'div',
    'i',
    'b',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
] as const
export type TypographyAsElements = (typeof TypographyAsElementsArray)[number]

export const TypographyWeightsArray = ['medium', 'light', 'bold'] as const
export type TypographyWeights = (typeof TypographyWeightsArray)[number]

export const TypographyVariantsArray = [
    'text',
    'subtitle',
    'heading',
    'caption',
    'description',
    'code',
    'highlight',
    'abbr',
    'pre',
    'kbd',
] as const
export type TypographyVariants = (typeof TypographyVariantsArray)[number]

export const propTypes = {
    variant: oneOf<TypographyVariants>(TypographyVariantsArray),
    as: oneOf<TypographyAsElements>(TypographyAsElementsArray),
    weight: oneOf<TypographyWeights>(TypographyWeightsArray),
    fontSize: oneOfType([string, number]),
    fontWeight: oneOfType([string, number]),
    theme: oneOf<Themes>(ThemesArray),
    colorScheme: shape({
        background: string.isRequired,
        backgroundColor: string.isRequired,
        color: string.isRequired,
    }),
}

export interface ITypographyProps {
    children?: ReactNode
    as?: TypographyAsElements
    weight?: TypographyWeights
    variant?: TypographyVariants
    fontSize?: string | number
    fontWeight?: string | number
    theme?: Themes
    colorScheme?: ColorScheme
}
