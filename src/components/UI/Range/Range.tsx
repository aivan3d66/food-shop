import React, { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes } from 'react'
import s from './Range.module.css'
import { Range } from './component'


export default (
    {
        type,
        onChange,
        onChangeRange,
        className,

        ...restProps
    }: RangePropsType,
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)

        onChangeRange && onChangeRange(+e.currentTarget.value)
    }

    const finalRangeClassName = `${s.range} ${className ? className : ''}`

    return (
        <Range>
            <input
                type={'range'}
                onChange={onChangeCallback}
                className={finalRangeClassName}

                {...restProps}
            />
        </Range>
    )
}

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type RangePropsType = DefaultInputPropsType & {
    onChangeRange?: (value: number) => void
}
