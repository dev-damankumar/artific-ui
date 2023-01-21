import React from 'react';
import styles from "../Grid.module.css"
import getClassNames from "../utils/classes/getClassnames";
import PropTypes from "prop-types";
import {IDiv, Sizes, SizesArray} from "../types/common";


export const ColArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, undefined] as const;
export type Column = typeof ColArray[number];


interface IColProps {
	children: React.ReactNode;
	className?: string;
	style?: React.CSSProperties;
	size?: Sizes;
	col?: Column;
}

export const Col: React.FC<IColProps & IDiv> = (
	{
		col,
		size,
		style,
		className,
		children,
		...rest
	}) => {
	const sizeClass = !col ? `col-${size}` : `col-${size}-${col}`
	return (
		<div {...rest} style={style} className={`${className} ${getClassNames(styles, 'col', sizeClass)}`}>
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
	col: PropTypes.oneOf<Column>(ColArray),
};
Col.defaultProps = {
	className: '',
	size: 'md' as Sizes,
	col: undefined as Column,
};
export default Col;
