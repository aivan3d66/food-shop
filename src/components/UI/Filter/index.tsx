import { Filter, FilterWrapper } from './component'
import { useActions, useAppSelector } from '../../../utils/helpers'
import { client } from '../../../index'
import { useEffect } from 'react'
import { CategoryType, shopPageActions } from '../../../state/slices/shopPageSlice'
import Preloader from '../Preloader'
import { categoriesQuery } from './queries'
import { SwiperSlide, Swiper } from 'swiper/react'
import { A11y } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'

type CategoriesQueryResponseType = {
    data: {
        categories: Array<CategoryType>
    }
}

export default () => {
    const { categories } = useAppSelector((state) => state.shopPageReducer)
    const { getCategories, setAppError } = useActions({ ...shopPageActions })

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
                            <Swiper
                                modules={[A11y]}
                                spaceBetween={20}
                                breakpoints={{
                                    320: {
                                        slidesPerView: 5,
                                    },
                                    768: {
                                        slidesPerView: 6,
                                    },
                                    1120: {
                                        slidesPerView: 11,
                                    },
                                    1230: {
                                        slidesPerView: 11,
                                    },

                                }}
                                centeredSlidesBounds={true}
                                pagination={{ clickable: true }}
                                scrollbar={{ draggable: true }}
                                grabCursor={true}
                            >

                                {
                                    categories.map((m, i: number) => {
                                        const scrollId = `#${m.name}Control`
                                        return (
                                            <SwiperSlide key={i}>
                                                <li><a href={scrollId}>{m.name}</a></li>
                                            </SwiperSlide>
                                        )
                                    })
                                }
                            </Swiper>
                        </ul>
                }
            </FilterWrapper>
        </Filter>
    )
}
