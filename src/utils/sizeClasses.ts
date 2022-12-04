import { ISizes } from '../types/common';

let sizeClasses = (prefix: string, size: any) => {
    return size !== 'md' ? `${prefix}-${ISizes[size]}` : '';
};

export default sizeClasses;
