import {IModalSizes, IModalSizesType, ISizes} from '../types/common';

let sizeClasses = (prefix: string, size: any): IModalSizesType => {
	return (size !== 'md' ? `${prefix}-${prefix === 'modal' ? IModalSizes[size] : ISizes[size]}` : '') as IModalSizesType;
};

export default sizeClasses;
