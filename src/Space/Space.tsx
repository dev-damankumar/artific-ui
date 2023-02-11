import React from 'react';
import styles from "./Space.module.css"
import getClassNames from "../utils/classes/getClassnames";
import PropTypes from "prop-types";
import {Axis, AxisArray, IDiv} from "../types/Common.types";


interface IColProps {
	children: React.ReactNode;
	direction?: Axis | 'both';
	align?: AlignType;
	wrap?: boolean;
	gap?: number | [number, number];
}

export const AlignTypeArray = ['start', 'end', 'center', 'baseline'] as const;
export type AlignType = typeof AlignTypeArray[number];

export const Space: React.FC<IColProps & IDiv> = (
	{
		wrap = true,
		direction = 'both',
		gap = 10,
		children,
		align = 'start',
		...rest
	}) => {
	let gapStyle: any = gap;
	if (typeof gapStyle === 'number') {
		gapStyle = direction === 'both' ? `${gapStyle}px` : direction === 'horizontal' ? `0 ${gapStyle}px` : `${gapStyle}px 0`
	}
	if (Array.isArray(gapStyle) && gapStyle.length === 2) {
		gapStyle = `${gapStyle[1]}px ${gapStyle[0]}px`
	}
	const mainStyle = {gap: gapStyle};
	const alignClasses = `space-align-${align}`
	return (
		<div {...rest} style={{...rest.style, ...mainStyle}} className={`${getClassNames(styles, alignClasses, 'space', wrap ? 'space-wrap' : '')}`}>
			{children}
		</div>
	);
};

Space.displayName = 'Space';
Space.propTypes = {
	children: PropTypes.node,
	wrap: PropTypes.bool,
	direction: PropTypes.oneOf(AxisArray || 'both'),
	align: PropTypes.oneOf(AlignTypeArray),
	gap: PropTypes.number || PropTypes.arrayOf(PropTypes.number),
};

export default Space;
