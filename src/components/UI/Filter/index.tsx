import { Filter, FilterWrapper, Slide } from './component'
import { useActions, useAppSelector } from '../../../utils/helpers'
import { client } from '../../../index'
import { useEffect } from 'react'
import { CategoryType, shopPageActions } from '../../../state/slices/shopPageSlice'
import Preloader from '../Preloader'
import { categoriesQuery } from './queries'
import { SwiperSlide, Swiper } from 'swiper/react'
import { A11y } from 'swiper'
import theme from '../../../theme'

import 'swiper/css'
import 'swiper/css/navigation'

type CategoriesQueryResponseType = {
    data: {
        categories: Array<CategoryType>
    }
}
type FiltersPropsType = {
    activeCategory: string | undefined,
    handleCLick: (name: string) => void
}
export default ({ activeCategory, handleCLick }: FiltersPropsType) => {
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

    const categoriesRender = () => {
        return categories.map((m, i: number) => {
            const activeStyle = activeCategory === m.id ? {
                color: theme.colors.darkRed,
                borderBottomColor: theme.colors.darkRed,
            } : { color: theme.colors.black }

            return (
                <SwiperSlide key={i}>
                    <Slide
                        id={m.name}
                        style={activeStyle}
                        onClick={() => handleCLick(m.name)}
                    >
                        <span>{m.name}</span>
                    </Slide>
                </SwiperSlide>
            )
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
                                        slidesPerView: 4,
                                    },
                                    768: {
                                        slidesPerView: 6,
                                    },
                                    1120: {
                                        slidesPerView: 8,
                                    },
                                    1230: {
                                        slidesPerView: 10,
                                    },

                                }}
                                centeredSlidesBounds={true}
                                scrollbar={{ draggable: true }}
                                grabCursor={true}
                            >
                                {categoriesRender()}
                            </Swiper>
                        </ul>
                }
            </FilterWrapper>
        </Filter>
    )
}
