import React from 'react';


import styles from "./Container.module.css"
import getClassNames from "../utils/classes/getClassnames";
import PropTypes from "prop-types";
import {IDiv, Sizes, SizesArray} from "../types/Common.types";

interface IContainerProps {
	children: React.ReactNode;

	style?: React.CSSProperties;
	fluid?: boolean;
	size?: Sizes;
}

export const Container: React.FC<IContainerProps & IDiv> = (
	{
		style,
		className,
		size,
		fluid,
		children,
		...rest
	}) => {
	const sizeClass = fluid ? '' : `container-${size}`
	return (
		<div {...rest} style={style}
			 className={`${className} ${getClassNames(styles, fluid ? 'container-fluid' : 'container', sizeClass)}`}>
			{children}
		</div>
	);
};

Container.displayName = 'Container';
Container.propTypes = {
	children: PropTypes.node,


	fluid: PropTypes.bool,
	size: PropTypes.oneOf<Sizes>(SizesArray),
};
Container.defaultProps = {
	fluid: false,
	size: 'md' as Sizes,
};
export default Container;
