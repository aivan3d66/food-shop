import { AddButtonActive, AddGoodBtn } from './component'
import { useState } from 'react'

// type AddBtnPropsType = {
//     addToBasket: (id: string) => void,
// }

export default () => {
    const [addBtn, setAddBtn] = useState<boolean>(false)
    const [count, setCount] = useState<number>(1)

    return (
        <>
            {
                addBtn ? <AddButtonActive>
                        <span onClick={() => setCount(count - 1)}>-</span>
                        <span onClick={() => setAddBtn(!addBtn)}>{count}</span>
                        <span onClick={() => setCount(count + 1)}>+</span>
                    </AddButtonActive>
                    : <AddGoodBtn onClick={() => setAddBtn(!addBtn)}>
                        +
                    </AddGoodBtn>
            }
        </>
    )
}
