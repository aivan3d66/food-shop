import { Filter, FilterWrapper } from './component'
import { useAppSelector } from '../../../utils/helpers'


export default () => {
    const { categories } = useAppSelector((state) => state.testReducer)
    const filters: Array<string> = ['Burgers', 'Twisters', 'Chicken', 'Baskets', 'Snakes', 'Sauce', 'Drinks', 'Tee & Coffee', 'Desserts', 'Hits at 50', 'Hits at 51']

    return (
        <Filter>
            <FilterWrapper>
                <ul>
                    {
                        filters.map((m, i: number) => {
                            const scrollId = `#${m}Control`
                            return <li key={i}><a href={scrollId}>{m}</a></li>
                        })
                    }
                </ul>
            </FilterWrapper>
        </Filter>
    )
}
