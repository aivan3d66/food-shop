import { Goods, GoodsWrapper, GoodsCategory } from './component'
import { useAppSelector } from '../../../utils/helpers'
import GoodCard from './GoodCard'

export default () => {
    const { goods, deliveryFilter } = useAppSelector((state) => state.testReducer)
    let copyGoods = goods

    if (deliveryFilter) {
        copyGoods = goods.filter(f => f.delivery)
    }

    return (
        <Goods>
            <GoodsWrapper>
                <GoodsCategory>
                    <h2>Burgers</h2>
                    <ul>
                        {
                            copyGoods.filter(f => f.type === 'burger').map((m) => {
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
            </GoodsCategory>
            <GoodsWrapper>
                <GoodsCategory>
                    <h2>Chicken</h2>
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
                </GoodsCategory>
            </GoodsWrapper>
        </Goods>
    )
}
