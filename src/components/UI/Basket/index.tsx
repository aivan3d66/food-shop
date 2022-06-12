import { Basket, BasketEmpty, BasketPrice, BasketProducts, BasketWrapper, Price, ValidationMessage } from './component'
import { useActions, useAppSelector } from '../../../utils/helpers'
import Button from '../Button/Button'
import { shopPageActions } from '../../../state/slices/shopPageSlice'
import { NavLink } from 'react-router-dom'
import { RouteNames } from '../../../routes/routes'
import BasketProduct from './BasketProduct'

export default () => {
    const { basketProducts, deliveryAddress, deliveryFilter } = useAppSelector((state) => state.shopPageReducer)
    const { buyProducts, deleteFromBasket } = useActions({ ...shopPageActions })

    const price = basketProducts.length === 0 ? 0 : basketProducts.reduce((acc, curr) => acc + curr.price, 0)

    const onBuyHandler = () => buyProducts({ products: [], deliveryAddress: { street: '', house: '' } })

    return (
        <Basket>
            <BasketWrapper>
                <BasketProducts>
                    <h1>
                        Products: <BasketEmpty>{basketProducts.length === 0 && 'basket is empty'}</BasketEmpty>
                    </h1>
                    <ul>
                        {
                            basketProducts.length !== 0 && basketProducts.map(p => {

                                const onDeleteHandler = () => {
                                    deleteFromBasket({ productId: p.id })
                                }

                                return (
                                    <BasketProduct
                                        key={p.id}
                                        name={p.name}
                                        image={p.image}
                                        price={p.price}
                                        onDeleteHandler={onDeleteHandler}
                                    />
                                )
                            })
                        }
                    </ul>
                </BasketProducts>
                <BasketPrice>
                    <Price>Total price: {price}&#8381;</Price>
                    <div>
                        <NavLink to={RouteNames.START_PAGE}>
                            <Button name={'Back'} />
                        </NavLink>
                        <Button
                            name={'Buy'}
                            deliveryState={basketProducts.length > 0}
                            disabled={deliveryFilter === 'true' && deliveryAddress.street === '' && deliveryAddress.house === ''}
                            onClick={onBuyHandler}
                        />
                    </div>
                    {
                        deliveryFilter === 'true' && deliveryAddress.street === '' && deliveryAddress.house === ''
                            ? <ValidationMessage>You must fill the delivery fields!</ValidationMessage>
                            : ''
                    }
                </BasketPrice>
            </BasketWrapper>
        </Basket>
    )
}
