import React, { SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent } from 'react'
import { Select } from './component'

export default (
    {
        options,
        onChange,
        onChangeOption,
        ...restProps
    }: SelectPropsType,
) => {
    const mappedOptions = options ? options.map((o, i) => (
        <option key={o + '-' + i}>
            {o}
        </option>
    )) : []

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChangeOption && onChangeOption(e.currentTarget.value)
        onChange && onChange(e)
    }

    return (
        <Select onChange={onChangeCallback} {...restProps}>
            {mappedOptions}
        </Select>
    )
}

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>
type SelectPropsType = DefaultSelectPropsType & {
    options?: Array<string>,
    onChangeOption?: (option: string) => void
}
