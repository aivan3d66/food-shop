import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent} from 'react'
import { InputText } from './component'

export default (
  {
    type,
    onChange,
    onChangeText,
    onKeyPress,
    onEnter,
    error,
    className,
    spanClassName,

    ...restProps
  }: InputTextPropsType
) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    onChange
    && onChange(e)

    onChangeText && onChangeText(e.currentTarget.value)
  }
  const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
    onKeyPress && onKeyPress(e);

    onEnter
    && e.key === 'Enter'
    && onEnter()
  }

  return (
    <>
      <InputText
        type={'text'}
        onChange={onChangeCallback}
        onKeyPress={onKeyPressCallback}

        {...restProps}
      />
      {error && <span>{error}</span>}
    </>
  )
}

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type InputTextPropsType = DefaultInputPropsType & {
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: string
    spanClassName?: string
}
