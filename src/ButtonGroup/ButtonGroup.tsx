import React from 'react';
import styles from './ButtonGroup.module.css';
import getClassNames from '../utils/classes/getClassnames';
import sizeClasses from '../utils/classes/sizeClasses';
import {Directions, DirectionsArray, IDiv, Sizes, SizesArray} from '../types/common.types';
import PropTypes from "prop-types";


export interface IButtonGroupProps {
	children: React.ReactNode,
	size?: Sizes,
	direction?: Directions
}

export const ButtonGroup: React.FC<IButtonGroupProps & IDiv> = (
	{
		children,
		size = 'md',
		direction = 'horizontal',
		...rest
	}) => {
	let sizeClass = sizeClasses('btn-group', size);
	let directionClasses = direction !== 'horizontal' ? `btn-group-${direction}` : 'btn-group';
	return (
		<>


			<div {...rest} className={getClassNames(styles, sizeClass, directionClasses)}>
				{children}
			</div>
		</>
	);
};

export const propTypes = {
	children: PropTypes.node,
	size: PropTypes.oneOf(SizesArray),
	direction: PropTypes.oneOf(DirectionsArray)
};

export const defaultProps = {
	size: 'md' as Sizes,
	direction: 'horizontal' as Directions
};

ButtonGroup.displayName = 'ButtonGroup';
ButtonGroup.propTypes = propTypes;
ButtonGroup.defaultProps = defaultProps;


export default ButtonGroup
