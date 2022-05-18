import { GoodCard } from './component'
import { PopularityType } from '../../../../state/slices/testSlice'

type GoodCardPropsType = {
    name: string,
    popularity: PopularityType,
    image: string,
    price: number,
}

export default ({name, image, price, popularity}: GoodCardPropsType) => {
    return (
        <GoodCard>
            <div>
                <span>{popularity}</span>
                <img src={image} alt='good image' />
            </div>
            <div>
                <h3>{name}</h3>
                <p>{price}</p>
            </div>
        </GoodCard>
    )
}
