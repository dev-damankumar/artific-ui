import React from 'react';
import styles from './Progress.module.css';
import getClassNames from '../utils/classes/getClassnames';
import {defaultProps, IProgressProps, propTypes} from '../types/progress';
import uuid from "../utils/uuids/uuid";
import getDefaultClasses from "../utils/classes/getDefaultClasses";
import {IDiv} from "../types/common";


export const Progress: React.FC<IProgressProps & IDiv> = (
	{
		value,
		label,
		values,
		symbol,
		className,
		circular,
		style,
		children,
		barColors,
		colorScheme,
		theme,
		variant,
		layout,
		disabled,
		size,
		...rest
	}) => {
	const componentSelector = 'progress';
	const {
		classNames, customCss
	} = getDefaultClasses(styles, componentSelector, className, theme, layout, variant, size, colorScheme)

	const isLabelInside = label === 'inside' || values?.length! > 0
	const classes = `${classNames} ${getClassNames(
		styles,
		label !== 'default' ? `${componentSelector}-label-${label}` : '',
		isLabelInside ? `${componentSelector}-label-inside` : '',
		values?.length! > 0 ? `${componentSelector}-multiple` : '',
		disabled ? `${componentSelector}-disabled` : '',
	)}`
	if (circular) {
		return <>
			{customCss && customCss()}
			<div role="progressbar" {...rest} className={`${classes} ${getClassNames(styles, 'progress-circular')}`}>
				<div className={getClassNames(styles, "progress-inner")}>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 34 34">
						<circle cx="16" cy="16" r="15.9155"
								className={getClassNames(styles, "progress-bar-background")}></circle>
						<circle style={{strokeDashoffset: `${value}%`}} cx="16" cy="16" r="15.9155"
								className={getClassNames(styles, "progress-bar-progress")}></circle>
					</svg>
				</div>
				<span className={getClassNames(styles, "progress-text")}
					  title={`${value}${symbol}`}>{`${value}${symbol}`}</span>
			</div>
		</>
	}
	return <>
		{customCss && customCss()}
		<div role="progressbar" {...rest} className={classes}>
			<div className={getClassNames(styles, "progress-inner")}>
				{values?.length! > 0 ? values!.map((v, i) => {
					return <div key={uuid()} className={getClassNames(styles, "progress-bar")}
								style={{backgroundColor: barColors ? barColors[i] || '' : '', width: `${v}%`}}>
						{isLabelInside && `${v}${symbol}`}
					</div>
				}) : <div className={getClassNames(styles, "progress-bar")}
						  style={{width: `${value}%`}}>{isLabelInside && `${value}${symbol}`}</div>}
			</div>
			{!isLabelInside && values?.length! > 0 ? values!.map((v) => {
				return <span key={uuid()} className={getClassNames(styles, "progress-text")}
							 title={`${v}${symbol}`}>{`${v}${symbol}`}</span>
			}) : !isLabelInside && <span className={getClassNames(styles, "progress-text")}
										 title={`${value}${symbol}`}>{`${value}${symbol}`}</span>}

		</div>
	</>
};

Progress.displayName = 'Progress';
Progress.propTypes = propTypes;
Progress.defaultProps = defaultProps;

export default Progress
