import React from 'react';
import styles from "../Grid.module.css"
import getClassNames from "../utils/getClassnames";
import PropTypes from "prop-types";
import {Sizes, SizesArray} from "../types/common";

interface IContainerProps {
	children: React.ReactNode;
	className?: string;
	style?: React.CSSProperties;
	fluid?: boolean;
	size?: Sizes;
}

export const Container: React.FC<IContainerProps> = (
	{
		style,
		className,
		size,
		fluid,
		children
	}) => {
	const sizeClass = fluid ? '' : `container-${size}`
	return (
		<div style={style}
			 className={`${className} ${getClassNames(styles, fluid ? 'container-fluid' : 'container', sizeClass)}`}>
			{children}
		</div>
	);
};

Container.displayName = 'Container';
Container.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	style: PropTypes.object,
	fluid: PropTypes.bool,
	size: PropTypes.oneOf<Sizes>(SizesArray),
};
Container.defaultProps = {
	fluid: false,
	size: 'md' as Sizes,
	className: ''

};
export default Container;
