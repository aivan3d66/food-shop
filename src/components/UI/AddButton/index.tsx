import { AddButtonActive, AddGoodBtn } from './component'
import { useState } from 'react'
import { useActions } from '../../../utils/helpers'
import { shopPageActions } from '../../../state/slices/shopPageSlice'

type AddButtonPropsType = {
    id: string
}

export default ({ id }: AddButtonPropsType) => {
    const [addBtn, setAddBtn] = useState<boolean>(false)
    const [count, setCount] = useState<number>(0)

    const { addToBasket, deleteFromBasket } = useActions({ ...shopPageActions })

    const addButtonHandler = () => {
        setCount(count + 1)
        addToBasket({ productId: id })
    }

    const deleteButtonHandler = () => {
        setCount(count - 1)
        deleteFromBasket({ productId: id })
    }

    return (
        <>
            {
                addBtn ? <AddButtonActive>
                        <span onClick={deleteButtonHandler}>-</span>
                        <span onClick={() => setAddBtn(!addBtn)}>{count}</span>
                        <span onClick={addButtonHandler}>+</span>
                    </AddButtonActive>
                    : <AddGoodBtn onClick={() => setAddBtn(!addBtn)}>
                        +
                    </AddGoodBtn>
            }
        </>
    )
}
