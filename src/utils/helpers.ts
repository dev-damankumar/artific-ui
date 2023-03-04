import React, {Children, cloneElement, isValidElement, ReactNode} from 'react'
import {ColorScheme} from '../types/Common.types'

interface Config {
    [k: string]: any
}

export const addPropsToChildren = (
    children: ReactNode,
    props: object,
    prioritizeChildren = false,
    config: Config | null = null,
) => {
    return Children.map(children, child => {
        if (isValidElement(child)) {
            let tempChild = {...child.props, ...props}
            if (prioritizeChildren) {
                tempChild = {...props, ...child.props}
            }
            if (config) {
                for (const key in config) {
                    if (
                        child.props?.originalType?.displayName === key ||
                        (child.type as React.FC)?.displayName === key
                    ) {
                        tempChild = {...child.props, ...props, ...config[key]}
                        if (prioritizeChildren) {
                            tempChild = {
                                ...props,
                                ...config[key],
                                ...child.props,
                            }
                        }
                    }
                }
            }
            return cloneElement(child, tempChild)
        }
        return child
    })
}

export const containsGradient = (colorScheme: ColorScheme) => {
    return !!(colorScheme && colorScheme.background.includes('gradient'))
}
