import React, { CSSProperties } from 'react';
import { Axis, ColorScheme, IDiv, Layouts, Sizes, Themes, Variants } from '../types/Common.types';
import PropTypes from "prop-types";
export interface IButtonGroupProps {
    children: React.ReactNode;
    direction?: Axis;
    style?: CSSProperties;
    theme?: Themes;
    colorScheme?: ColorScheme;
    variant?: Variants;
    layout?: Layouts;
    size?: Sizes;
}
export declare const ButtonGroup: React.FC<IButtonGroupProps & Omit<IDiv, 'prefix'>>;
export declare const propTypes: {
    children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    size: PropTypes.Requireable<"xs" | "sm" | "md" | "lg" | "xl">;
    direction: PropTypes.Requireable<"horizontal" | "vertical">;
};
export default ButtonGroup;
