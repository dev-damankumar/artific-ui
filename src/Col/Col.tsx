import React from 'react';
import styles from "../Grid.module.css"
import getClassNames from "../utils/getClassnames";
import PropTypes from "prop-types";
import {Sizes, SizesArray} from "../types/common";


export const ColArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, undefined] as const;
export type Col = typeof ColArray[number];


interface IColProps {
	children: React.ReactNode;
	className?: string;
	style?: React.CSSProperties;
	size?: Sizes;
	col?: Col;
}

export const Col: React.FC<IColProps> = (
	{
		col,
		size,
		style,
		className,
		children
	}) => {
	const sizeClass = !col ? `col-${size}` : `col-${size}-${col}`
	return (
		<div style={style} className={`${className} ${getClassNames(styles, 'col', sizeClass)}`}>
			{children}
		</div>
	);
};

Col.displayName = 'Col';
Col.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	style: PropTypes.object,
	size: PropTypes.oneOf<Sizes>(SizesArray),
	col: PropTypes.oneOf<Col>(ColArray),
};
Col.defaultProps = {
	className: '',
	size: 'md' as Sizes,
	col: undefined as Col,
};
export default Col;
