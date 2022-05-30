import { Basket, BasketPrice, BasketProducts, BasketWrapper } from './component'
import { useActions, useAppSelector } from '../../../utils/helpers'
import Button from '../Button/Button'
import { shopPageActions } from '../../../state/slices/shopPageSlice'
import { NavLink } from 'react-router-dom'
import { RouteNames } from '../../../routes/routes'

export default () => {
    const { basketProducts } = useAppSelector((state) => state.shopPageReducer)
    const { buyProducts, deleteFromBasket } = useActions({ ...shopPageActions })

    const price = basketProducts.length === 0 ? 0 : basketProducts.reduce((acc, curr) => acc + curr.price, 0)

    return (
        <Basket>
            <BasketWrapper>
                <BasketProducts>
                    <h1>
                        Products: {basketProducts.length === 0 && 'basket is empty'}
                    </h1>
                    <ul>
                        {
                            basketProducts.length !== 0 && basketProducts.map(p => {

                                const onDeleteHandler = () => {
                                    deleteFromBasket({ productId: p.id })
                                }

                                return <li key={p.id}>
                                    <img src={p.image} />
                                    <p>{p.name}</p>
                                    <p>Price: <span>{p.price} &#8381;</span></p>
                                    <Button name={'Delete'} deliveryState={true} onClick={onDeleteHandler} />
                                </li>
                            })
                        }
                    </ul>
                </BasketProducts>
                <BasketPrice>
                    <span>Total price: {price}&#8381;</span>
                    <div>
                        <NavLink to={RouteNames.START_PAGE}>
                            <Button name={'Back'} deliveryState={false}/>
                        </NavLink>
                        <Button name={'Buy'} deliveryState={basketProducts.length > 0} onClick={() => buyProducts({ products: [] })} />
                    </div>
                </BasketPrice>
            </BasketWrapper>
        </Basket>
    )
}
