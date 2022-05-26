import { Products, ProductsWrapper, ProductsCategory, Error } from './component'
import { useActions, useAppSelector } from '../../../utils/helpers'
import GoodCard from './GoodCard'
import { GoodType, testActions } from '../../../state/slices/testSlice'
import { useEffect, useState } from 'react'
import Preloader from '../Preloader'
import { client } from '../../../index'
import { productsQuery } from './queries'

type ProductsQueryResponseType = {
    data: {
        products: Array<GoodType>
    }
}

export default () => {
    const { getProducts } = useActions({ ...testActions })
    const { deliveryFilter, products } = useAppSelector((state) => state.testReducer)
    const [appError, setAppError] = useState<string>('')

    useEffect(() => {
        client.query({ query: productsQuery })
            .then((res: ProductsQueryResponseType) => {
                getProducts({ products: res.data?.products ?? [] })
            })
            .catch((error: any) => {
                setAppError(error.message)
            })
    }, [])

    let filterProducts: Array<GoodType> = products

    if (deliveryFilter === 'all') {
        filterProducts.map((f: GoodType) => f)
    }

    if (deliveryFilter === 'true') {
        filterProducts.filter((f: GoodType) => f.delivery === true)
    }

    return (
        <Products>
            {
                appError
                    ? <Error>Houston, we have a problem! Perhaps the problem with this: <span>{appError}</span></Error>
                    : <>
                        <ProductsWrapper>
                            <ProductsCategory id='BurgersControl'>
                                <h2>Burgers</h2>
                                {
                                    products.length === 0
                                        ? <Preloader />
                                        : <>
                                            <ul>
                                                {
                                                    filterProducts.filter((f: any) => f.type === 'burger').map((m: any) => {
                                                        return <GoodCard
                                                            key={m.id}
                                                            name={m.name}
                                                            image={m.image}
                                                            popularity={m.popularity}
                                                            price={m.price}
                                                        />
                                                    })
                                                }
                                            </ul>
                                        </>
                                }
                            </ProductsCategory>
                        </ProductsWrapper>
                        <ProductsCategory id='TwistersControl'>
                            <h2>Twisters</h2>
                            {
                                products.length === 0
                                    ? <Preloader />
                                    : <>
                                        <ul>
                                            {
                                                filterProducts.filter(f => f.type === 'twister').map((m) => {
                                                    return <GoodCard
                                                        key={m.id}
                                                        name={m.name}
                                                        image={m.image}
                                                        popularity={m.popularity}
                                                        price={m.price}
                                                    />
                                                })
                                            }
                                        </ul>
                                    </>
                            }
                        </ProductsCategory>
                        <ProductsWrapper>
                            <ProductsCategory id='ChickenControl'>
                                <h2>Chicken</h2>
                                {
                                    products.length === 0
                                        ? <Preloader />
                                        : <>
                                            <ul>
                                                {
                                                    filterProducts.filter(f => f.type === 'strips').map((m) => {
                                                        return <GoodCard
                                                            key={m.id}
                                                            name={m.name}
                                                            image={m.image}
                                                            popularity={m.popularity}
                                                            price={m.price}
                                                        />
                                                    })
                                                }
                                            </ul>
                                        </>
                                }
                            </ProductsCategory>
                        </ProductsWrapper>
                    </>
            }
        </Products>
    )
}
