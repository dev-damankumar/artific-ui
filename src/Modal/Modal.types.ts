import {CSSProperties, ReactNode} from 'react'
import {ColorScheme, Directions, DirectionsArray, FunctionCallback,} from '../types/Common.types'
import {bool, func, object, oneOf, shape, string} from 'prop-types'

export const LayoutsArray = ['default', 'rounded', 'no-radius'] as const
export type Layouts = (typeof LayoutsArray)[number]

export const ThemesArray = ['light', 'dark'] as const
export type Themes = (typeof ThemesArray)[number]

export const OverlayArray = ['default', 'blur'] as const
export type Overlay = (typeof OverlayArray)[number]

export const VariantsArray = [
    'default',
    'striped',
    'striped-body',
    'striped-header',
    'striped-footer',
] as const
export type Variants = (typeof VariantsArray)[number]

export const SizesArray = [
    'full-width',
    'full-height',
    'full',
    'expanded',
    'xs',
    'sm',
    'md',
    'lg',
    'xl',
] as const
export type Sizes = (typeof SizesArray)[number]

export const OverLaySizesArray = [
    'full-width',
    'full-height',
    'full',
    'expanded',
]

export const propTypes = {
    variant: oneOf<Variants>(VariantsArray),
    size: oneOf<Sizes>(SizesArray),
    overlay: oneOf<Overlay>(OverlayArray),
    dock: oneOf<Directions>(DirectionsArray),
    position: oneOf<Directions>(DirectionsArray),
    styles: object,
    theme: oneOf<Themes>(ThemesArray),
    classes: string,
    colorScheme: shape({
        background: string.isRequired,
        backgroundColor: string.isRequired,
        color: string.isRequired,
    }),
    layout: oneOf<Layouts>(LayoutsArray),
    onBackdropClick: func,
}

export interface IModalProps {
    children?: ReactNode
    style?: CSSProperties
    styles?: CSSProperties
    theme?: Themes
    colorScheme?: ColorScheme
    variant?: Variants
    layout?: Layouts
    size?: Sizes
    classes?: string
    open?: boolean
    onClose?: FunctionCallback
    overlay?: Overlay
    dock?: Directions
    position?: Directions
    dismiss?: boolean
    onBackdropClick?: FunctionCallback
}

export interface IModalHeaderProps {
    children?: ReactNode
    dismiss?: boolean
    prefix?: ReactNode | null | undefined
    suffix?: ReactNode | null | undefined
    onClose?: FunctionCallback
}

export const modalHeaderPropTypes = {
    dismiss: bool,
    onClose: func,
}
