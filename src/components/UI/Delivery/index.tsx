import { Delivery, DeliveryBody, DeliveryControls, DeliveryHeader, DeliveryWrapper } from './component'
import Button from '../Button/Button'
import InputText from '../InputText/InputText'
import { useEffect, useState } from 'react'
import { useActions, useAppSelector } from '../../../utils/helpers'
import { GoodType, shopPageActions, shopPageReducer } from '../../../state/slices/shopPageSlice'
import { client } from '../../../index'
import { productsQuery } from '../Goods/queries'

type ProductsQueryResponseType = {
    data: {
        products: Array<GoodType>
    }
}

export default () => {
    const [deliveryState, setDeliveryState] = useState<boolean>(false)
    const { getProducts, filteredProducts, setAppError, changeDeliveryToggle } = useActions({ ...shopPageActions })
    const { products } = useAppSelector((state) => state.shopPageReducer)

    const getProductsQuery = () => {
        client.query({ query: productsQuery })
            .then((res: ProductsQueryResponseType) => {
                getProducts({ products: res.data?.products ?? [] })
            })
            .catch((error: any) => {
                setAppError(error.message)
            })
    }

    useEffect(() => {
        getProductsQuery()
    }, [])

    const setDeliveryHandler = () => {
        setDeliveryState(true)
        changeDeliveryToggle({ deliveryFilter: 'true' })
        filteredProducts({ products: products.filter((f: GoodType) => f.delivery) })
    }
    const setPickUpHandler = () => {
        setDeliveryState(false)
        changeDeliveryToggle({ deliveryFilter: 'all' })
        getProductsQuery()
        filteredProducts({ products: products })
    }

    return (
        <Delivery>
            <DeliveryWrapper>
                <DeliveryHeader>
                    <h1>Delivery in Moscow city</h1>
                    <DeliveryControls>
                        <Button deliveryState={deliveryState} onClick={setDeliveryHandler} name={'Delivery'} />
                        <Button deliveryState={!deliveryState} onClick={setPickUpHandler} name={'Pick up'} />
                    </DeliveryControls>
                </DeliveryHeader>
                {
                    deliveryState && <DeliveryBody>
                        <label> Street
                            <InputText placeholder='Street' />
                        </label>
                        <label> House
                            <InputText placeholder='House' />
                        </label>
                    </DeliveryBody>
                }

            </DeliveryWrapper>
        </Delivery>
    )
}
