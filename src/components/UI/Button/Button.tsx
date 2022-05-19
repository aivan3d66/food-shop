import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import { Button } from './component'
import theme from '../../../theme'

export default ({ name, deliveryState, ...restProps } : ButtonPropsType) => {
    const red = deliveryState === true ? theme.buttonIsActive : theme.buttonNotActive

    return (
        <Button {...restProps} red={red}>
            {name}
        </Button>
    )
}

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
type ButtonPropsType = DefaultButtonPropsType & {
    name?: string,
    deliveryState?: boolean,
}
