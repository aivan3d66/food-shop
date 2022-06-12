import {
    Delivery,
    DeliveryBody,
    DeliveryControls,
    DeliveryHeader,
    DeliveryWrapper,
} from './component'
import Button from '../Button/Button'
import InputText from '../InputText/InputText'
import { ChangeEvent, useEffect } from 'react'
import { useActions, useAppSelector } from '../../../utils/helpers'
import { ProductType, shopPageActions } from '../../../state/slices/shopPageSlice'
import { client } from '../../../index'
import { productsQuery } from '../Goods/queries'

type ProductsQueryResponseType = {
    data: {
        products: Array<ProductType>
    }
}

export default () => {
    const {
        getProducts,
        filteredProducts,
        setAppError,
        changeDeliveryToggle,
        addDeliveryStreet,
        addDeliveryHouse,
    } = useActions({ ...shopPageActions })
    const { products, deliveryFilter } = useAppSelector((state) => state.shopPageReducer)

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
        changeDeliveryToggle({ deliveryFilter: 'true' })
        filteredProducts({ products: products.filter((f: ProductType) => f.delivery) })
    }
    const setPickUpHandler = () => {
        changeDeliveryToggle({ deliveryFilter: 'all' })
        getProductsQuery()
        filteredProducts({ products: products })
    }

    const onStreetFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
        addDeliveryStreet({ street: e.currentTarget.value })
    }
    const onHouseFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
        addDeliveryHouse({ house: e.currentTarget.value })
    }

    return (
        <Delivery>
            <DeliveryWrapper>
                <DeliveryHeader>
                    <h1>Delivery in Moscow city</h1>
                    <DeliveryControls>
                        <Button deliveryState={deliveryFilter === 'true'} onClick={setDeliveryHandler} name={'Delivery'} />
                        <Button deliveryState={deliveryFilter === 'all'} onClick={setPickUpHandler} name={'Pick up'} />
                    </DeliveryControls>
                </DeliveryHeader>
                {
                    deliveryFilter === 'true' && <DeliveryBody>
                        <div>
                            <label htmlFor='streetField'> Street </label>
                            <InputText id='streetField' placeholder='Street' onChange={onStreetFieldChange} />
                        </div>
                        <div>
                            <label htmlFor='houseField'> House </label>
                            <InputText id='houseField' placeholder='House' onChange={onHouseFieldChange} />
                        </div>
                    </DeliveryBody>
                }
            </DeliveryWrapper>
        </Delivery>
    )
}
