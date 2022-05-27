import { Filter, FilterWrapper } from './component'
import { useActions, useAppSelector } from '../../../utils/helpers'
import { client } from '../../../index'
import { useEffect } from 'react'
import { CategoryType, testActions } from '../../../state/slices/testSlice'
import Preloader from '../Preloader'
import { categoriesQuery } from './queries'

type CategoriesQueryResponseType = {
    data: {
        categories: Array<CategoryType>
    }
}

export default () => {
    const { categories } = useAppSelector((state) => state.testReducer)
    const { getCategories, setAppError } = useActions({ ...testActions })

    const getCategoriesQuery = () => {
        client.query({ query: categoriesQuery })
            .then((res: CategoriesQueryResponseType) => {
                getCategories({ categories: res.data?.categories ?? [] })
            })
            .catch((error: any) => {
                setAppError(error.message)
            })
    }

    useEffect(() => {
        getCategoriesQuery()
    }, [])

    return (
        <Filter>
            <FilterWrapper>
                {
                    categories.length === 0
                        ? <Preloader />
                        : <ul>
                            {
                                categories.map((m, i: number) => {
                                    const scrollId = `#${m}Control`
                                    return <li key={i}><a href={scrollId}>{m.name}</a></li>
                                })
                            }
                        </ul>
                }

            </FilterWrapper>
        </Filter>
    )
}
