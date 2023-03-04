import {
    ColorScheme,
    Directions,
    DirectionsArray,
    FunctionCallback,
    Layouts,
    LayoutsArray,
    Sizes,
    SizesArray,
    Themes,
    ThemesArray,
} from '../types/Common.types'
import {bool, oneOf, shape, string} from 'prop-types'
import {CSSProperties, ReactNode} from 'react'

export const VariantsArray = [
    'default',
    'separate',
    'line',
    'floating-line',
] as const
export type Variants = (typeof VariantsArray)[number]

export const TabTypesArray = ['default', 'float'] as const
export type TabTypes = (typeof TabTypesArray)[number]

export const propTypes = {
    variant: oneOf<Variants>(VariantsArray),
    size: oneOf<Sizes>(SizesArray),
    theme: oneOf<Themes>(ThemesArray),
    type: oneOf<TabTypes>(TabTypesArray),
    lineDirection: oneOf<Directions>(DirectionsArray),
    position: oneOf<Directions>(DirectionsArray),
    colorScheme: shape({
        background: string.isRequired,
        backgroundColor: string.isRequired,
        color: string.isRequired,
    }),
    layout: oneOf<Layouts>(LayoutsArray),
}

export interface ITabsProps {
    type?: TabTypes
    children: ReactNode
    theme?: Themes
    lineDirection?: Directions
    position?: Directions
    colorScheme?: ColorScheme
    variant?: Variants
    layout?: Layouts
    size?: Sizes
}

export interface ITabItemProps {
    children: ReactNode
    variant?: Variants
    active?: boolean
    activeTab?: string
    setActiveTab?: FunctionCallback
    target: string
}

export const tabItemPropTypes = {
    variant: oneOf<Variants>(VariantsArray),
    active: bool,
}

export interface ITabContentProps {
    children: ReactNode
    style?: CSSProperties
    variant?: Variants
    activeTab?: string
    setActiveTab?: FunctionCallback
    id: string
}

export const tabContentPropTypes = {
    variant: oneOf<Variants>(VariantsArray),
    activeTab: string,
}
