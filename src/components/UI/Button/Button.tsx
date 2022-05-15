import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import { Button } from './component'

export default ({ name, ...restProps } : ButtonPropsType) => {
    return (
        <Button {...restProps}>
            {name}
        </Button>
    )
}

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
type ButtonPropsType = DefaultButtonPropsType & {
    name?: string,
}
