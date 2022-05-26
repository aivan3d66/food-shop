import { Goods, GoodsWrapper, GoodsCategory, Error } from './component'
import { useActions, useAppSelector } from '../../../utils/helpers'
import GoodCard from './GoodCard'
import { GoodType, testActions } from '../../../state/slices/testSlice'
import { useEffect, useState } from 'react'
import Preloader from '../Preloader'
import { client } from '../../../index'
import { productsQuery } from './queries'

export default () => {
    const { getProducts } = useActions({ ...testActions })
    const { deliveryFilter, products } = useAppSelector((state) => state.testReducer)
    const [appError, setAppError] = useState<string>('kek')

    useEffect(() => {
        client.query({ query: productsQuery })
            .then((res: any) => {
                getProducts({ products: res.data?.products ?? [] })
            })
            .catch((error: any) => {
                setAppError(error.message)
            })

    }, [getProducts])

    let copyGoods: Array<GoodType> = products

    if (deliveryFilter) {
        copyGoods.filter((f: GoodType) => f.delivery)
    }

    return (
        <Goods>
            {
                appError
                    ? <Error>Houston, we have a problem! Perhaps the problem with this: <span>{appError}</span></Error>
                    : <>
                        <GoodsWrapper>
                            <GoodsCategory id='BurgersControl'>
                                <h2>Burgers</h2>
                                {
                                    products.length === 0
                                        ? <Preloader />
                                        : <>
                                            <ul>
                                                {
                                                    copyGoods.filter((f: any) => f.type === 'burger').map((m: any) => {
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
                            </GoodsCategory>
                        </GoodsWrapper>
                        <GoodsCategory id='TwistersControl'>
                            <h2>Twisters</h2>
                            {
                                products.length === 0
                                    ? <Preloader />
                                    : <>
                                        <ul>
                                            {
                                                copyGoods.filter(f => f.type === 'twister').map((m) => {
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
                        </GoodsCategory>
                        <GoodsWrapper>
                            <GoodsCategory id='ChickenControl'>
                                <h2>Chicken</h2>
                                {
                                    products.length === 0
                                        ? <Preloader />
                                        : <>
                                            <ul>
                                                {
                                                    copyGoods.filter(f => f.type === 'strips').map((m) => {
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
                            </GoodsCategory>
                        </GoodsWrapper>
                    </>
            }
        </Goods>
    )
}
