import { CardControl, CardFlag, CardText, GoodCard } from './component'
import { PopularityType } from '../../../../state/slices/shopPageSlice'
import AddButton from '../../AddButton'
import theme from '../../../../theme'
import CardImage from '../CardImage'

type GoodCardPropsType = {
    name: string,
    popularity: PopularityType,
    image: string,
    price: number,
    id: string
}

export default ({ name, image, price, popularity, id }: GoodCardPropsType) => {
    const red = popularity === 'Hit' ? theme.colors.red : theme.colors.black

    return (
        <GoodCard>
            {popularity !== 'Def' ? <CardFlag red={red}>{popularity}</CardFlag> : ''}

            <CardControl>
                <CardImage src={image} />
                <AddButton id={id} />
            </CardControl>
            <CardText>
                <h3>{name}</h3>
                <p>{price} &#8381;</p>
            </CardText>
        </GoodCard>
    )
}
