import { Goods, GoodsWrapper, GoodsCategory } from './component'
import { useAppSelector } from '../../../utils/helpers'
import { useId } from 'react'
import GoodCard from './GoodCard'

export default () => {
    const { goods } = useAppSelector((state) => state.testReducer)

    const burgersCategory = goods.filter(f => f.type === 'burger')
    const twistersCategory = goods.filter(f => f.type === 'twister')
    const stripsCategory = goods.filter(f => f.type === 'strips')

    return (
        <Goods>
            <GoodsWrapper>
                <GoodsCategory>
                    <h2>Burgers</h2>
                    <ul>
                        {
                            burgersCategory.map((m) => {
                                return <GoodCard
                                    key={useId()}
                                    name={m.name}
                                    image={m.image}
                                    popularity={m.popularity}
                                    price={m.price}
                                />
                            })
                        }
                    </ul>
                </GoodsCategory>
            </GoodsWrapper>
            <GoodsCategory>
                <h2>Twisters</h2>
                <ul>
                    {
                        twistersCategory.map((m) => {
                            return <GoodCard
                                key={useId()}
                                name={m.name}
                                image={m.image}
                                popularity={m.popularity}
                                price={m.price}
                            />
                        })
                    }
                </ul>
            </GoodsCategory>
            <GoodsWrapper>
                <GoodsCategory>
                    <h2>Chicken</h2>
                    <ul>
                        {
                            stripsCategory.map((m) => {
                                return <GoodCard
                                    key={useId()}
                                    name={m.name}
                                    image={m.image}
                                    popularity={m.popularity}
                                    price={m.price}
                                />
                            })
                        }
                    </ul>
                </GoodsCategory>
            </GoodsWrapper>
        </Goods>
    )
}
