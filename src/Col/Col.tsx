import React from 'react';
import styles from "./Col.module.css"
import getClassNames from "../utils/classes/getClassnames";
import PropTypes from "prop-types";
import {IDiv, Sizes, SizesArray} from "../types/Common.types";

export const ColArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'auto', undefined] as const;
export type Column = typeof ColArray[number];

export const OrderArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'first', 'last', undefined] as const;
export type Order = typeof OrderArray[number];

export const OffsetArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, undefined] as const;
export type Offset = typeof OffsetArray[number];

interface IColProps {
	children: React.ReactNode;

	style?: React.CSSProperties;
	size?: Sizes;
	col?: Column;
	order?: Order;
	offset?: Offset;
}

export const Col: React.FC<IColProps & IDiv> = (
	{
		col,
		size,
		style,
		className,
		order,
		offset,
		children,
		...rest
	}) => {
	const sizeClass = !col ? `col-${size}` : `col-${size}-${col}`
	const orderClass = order !== undefined ? `order-${order}` : ''
	const offsetClass = offset !== undefined ? `offset-${offset}` : ''

	return (
		<div {...rest} style={style} className={`${className} ${getClassNames(styles, 'col', sizeClass, offsetClass, orderClass)}`}>
			{children}
		</div>
	);
};

Col.displayName = 'Col';
Col.propTypes = {
	children: PropTypes.node,
	size: PropTypes.oneOf<Sizes>(SizesArray),
	col: PropTypes.oneOf<Column>(ColArray),
	order: PropTypes.oneOf<Order>(OrderArray),
	offset: PropTypes.oneOf<Offset>(OffsetArray),
};
Col.defaultProps = {
	size: 'md' as Sizes,
	col: undefined as Column,
	order: undefined as Order,
	offset: undefined as Offset,
};
export default Col;
