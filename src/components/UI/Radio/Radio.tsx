import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'
import { Radio } from './component'

export default (
  {
    type,
    name,
    options,
    value,
    onChange,
    onChangeOption,
    checked,
    ...restProps
  } : RadioPropsType
) => {

  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeOption && onChangeOption(e.currentTarget.value)
    onChange && onChange(e)
  }

  const mappedOptions = options ? options.map((o, i) => (
    <label key={name + '-' + i}>
      <input
        type={'radio'}
        name={name}
        value={o}
        checked={value === o}
        onChange={onChangeCallback}
        {...restProps}
      />
      {o}
    </label>
  )) : []

  return (
    <Radio>
      {mappedOptions}
    </Radio>
  )
}

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type RadioPropsType = DefaultRadioPropsType & {
    options?: Array<string>,
    onChangeOption?: (option: string) => void
}
