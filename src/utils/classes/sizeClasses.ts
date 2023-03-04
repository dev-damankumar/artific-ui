import {IModalSizes, IModalSizesType, ISizes} from '../../types/Common.types'

const sizeClasses = (prefix: string, size: any): IModalSizesType | '' => {
    if (!size) return ''
    return (
        size !== 'md'
            ? `${prefix}-${
                prefix === 'modal' ? IModalSizes[size] : ISizes[size]
            }`
            : ''
    ) as IModalSizesType
}

export default sizeClasses
