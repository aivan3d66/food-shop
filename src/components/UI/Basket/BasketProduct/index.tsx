import { BasketProduct } from './component'
import Button from '../../Button/Button'

export default ({ name, price, image, onDeleteHandler }: BasketProductPropsType) => {
    return (
        <BasketProduct>
            <img src={image} alt='product' />
            <div>
                <p>{name}</p>
                <p>Price: <span>{price} &#8381;</span></p>
            </div>
            <Button name={'Delete'} deliveryState={true} onClick={onDeleteHandler} />
        </BasketProduct>
    )
}

export type BasketProductPropsType = {
    name: string,
    price: number,
    image: string,
    onDeleteHandler: () => void
}
