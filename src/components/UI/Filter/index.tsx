import { Filter, FilterWrapper } from './component'


export default () => {
    const filters: Array<string> = ['Burgers', 'Twisters', 'Chicken', 'Baskets', 'Snakes', 'Sauce', 'Drinks', 'Tee & Coffee', 'Desserts', 'Hits at 50', 'Hits at 51']

    return (
        <Filter>
            <FilterWrapper>
                <ul>
                    {
                        filters.map(m => {
                            return <li>{m}</li>
                        })
                    }
                </ul>
            </FilterWrapper>
        </Filter>
    )
}
