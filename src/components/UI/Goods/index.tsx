import { Products, ProductsWrapper, ProductsCategory, Error, ProductsWrapperStyled } from './component'
import { useAppSelector } from '../../../utils/helpers'
import GoodCard from './GoodCard'
import Preloader from '../Preloader'

export default () => {
    const { products, status } = useAppSelector((state) => state.shopPageReducer)

    return (
        <Products>
            {
                status
                    ? <Error>Houston, we have a problem! Perhaps the problem with this: <span>{status}</span></Error>
                    : <>
                        <ProductsWrapper id='BurgersControl'>
                            <ProductsCategory>
                                <h2>Burgers</h2>
                                {
                                    products.length === 0
                                        ? <Preloader />
                                        : <>
                                            <ul>
                                                {
                                                    products.filter((f: any) => f.type === 'burger').map((m: any) => {
                                                        return <GoodCard
                                                            key={m.id}
                                                            name={m.name}
                                                            image={m.image}
                                                            popularity={m.popularity}
                                                            price={m.price}
                                                            id={m.id}
                                                        />
                                                    })
                                                }
                                            </ul>
                                        </>
                                }
                            </ProductsCategory>
                        </ProductsWrapper>
                        <ProductsWrapperStyled id='TwistersControl'>
                            <ProductsCategory>
                                <h2>Twisters</h2>
                                {
                                    products.length === 0
                                        ? <Preloader />
                                        : <>
                                            <ul>
                                                {
                                                    products.filter(f => f.type === 'twister').map((m) => {
                                                        return <GoodCard
                                                            key={m.id}
                                                            id={m.id}
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
                        </ProductsWrapperStyled>
                        <ProductsWrapper id='ChickenControl'>
                            <ProductsCategory>
                                <h2>Chicken</h2>
                                {
                                    products.length === 0
                                        ? <Preloader />
                                        : <>
                                            <ul>
                                                {
                                                    products.filter(f => f.type === 'strips').map((m) => {
                                                        return <GoodCard
                                                            key={m.id}
                                                            id={m.id}
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
