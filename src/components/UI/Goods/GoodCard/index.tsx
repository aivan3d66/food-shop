import { CardControl, CardFlag, CardText, GoodCard } from './component'
import { PopularityType } from '../../../../state/slices/testSlice'
import AddButton from '../../AddButton'
import theme from '../../../../theme'

type GoodCardPropsType = {
    name: string,
    popularity: PopularityType,
    image: string,
    price: number,
}

export default ({ name, image, price, popularity }: GoodCardPropsType) => {
    const red = popularity === 'hit' ? theme.colors.red : theme.colors.black

    return (
        <GoodCard>
            {popularity !== 'def' ? <CardFlag red={red}>{popularity}</CardFlag> : ''}

            <CardControl>
                <img src={image} alt='good image' />
                <AddButton />
            </CardControl>
            <CardText>
                <h3>{name}</h3>
                <p>{price} &#8381;</p>
            </CardText>
        </GoodCard>
    )
}
