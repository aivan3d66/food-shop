import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import { Checkbox } from './component'

export default (
  {
    type,
    onChange,
    onChangeChecked,
    className,
    spanClassName,
    children,
    ...restProps
  } : CheckboxPropsType
) => {

  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeChecked && onChangeChecked(e.currentTarget.checked)
    onChange && onChange(e)
  }

  return (
      <Checkbox>
          <label>
              <input
                  type={'checkbox'}
                  onChange={onChangeCallback}

                  {...restProps}
              />
              {children && <span>{children}</span>}
          </label>
      </Checkbox>

  )
}

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type CheckboxPropsType = DefaultInputPropsType & {
    onChangeChecked?: (checked: boolean) => void
    spanClassName?: string
}
