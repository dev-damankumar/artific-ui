import React from 'react';
import styles from './ButtonGroup.module.css';
import getClassNames from '../utils/getClassnames';
import sizeClasses from '../utils/sizeClasses';
import {Directions, DirectionsArray, Sizes, SizesArray} from '../types/common';
import PropTypes from "prop-types";

export interface IButtonGroupProps {
	children: React.ReactNode,
	size?: Sizes,
	direction?: Directions
}

export const propTypes = {
	children: PropTypes.node,
	size: PropTypes.oneOf(SizesArray),
	direction: PropTypes.oneOf(DirectionsArray)
};

export const defaultProps = {
	size: 'md' as Sizes,
	direction: 'horizontal' as Directions
};

export const ButtonGroup: React.FC<IButtonGroupProps> = ({children, size = 'md', direction = 'horizontal'}) => {
	let sizeClass = sizeClasses('btn-group', size);
	let directionClasses = direction !== 'horizontal' ? `btn-group-${direction}` : 'btn-group';
	return (
		<div className={getClassNames(styles, sizeClass, directionClasses)}>
			{children}
		</div>
	);
};

ButtonGroup.displayName = 'ButtonGroup';
ButtonGroup.propTypes = propTypes;
ButtonGroup.defaultProps = defaultProps;


export default ButtonGroup
