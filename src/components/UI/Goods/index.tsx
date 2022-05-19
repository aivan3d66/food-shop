import { Goods, GoodsWrapper, GoodsCategory } from './component'
import { useAppSelector } from '../../../utils/helpers'
import GoodCard from './GoodCard'

export default () => {
    const { goods, deliveryFilter } = useAppSelector((state) => state.testReducer)

    const burgersCategory = goods.filter(f => f.type === 'burger' && f.delivery === deliveryFilter)
    const twistersCategory = goods.filter(f => f.type === 'twister' && f.delivery === deliveryFilter)
    const stripsCategory = goods.filter(f => f.type === 'strips' && f.delivery === deliveryFilter)

    return (
        <Goods>
            <GoodsWrapper>
                <GoodsCategory>
                    <h2>Burgers</h2>
                    <ul>
                        {
                            burgersCategory.map((m) => {
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
                </GoodsCategory>
            </GoodsWrapper>
            <GoodsCategory>
                <h2>Twisters</h2>
                <ul>
                    {
                        twistersCategory.map((m) => {
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
            </GoodsCategory>
            <GoodsWrapper>
                <GoodsCategory>
                    <h2>Chicken</h2>
                    <ul>
                        {
                            stripsCategory.map((m) => {
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
                </GoodsCategory>
            </GoodsWrapper>
        </Goods>
    )
}
