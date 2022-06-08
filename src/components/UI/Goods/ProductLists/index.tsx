import Preloader from '../../Preloader'
import ProductCard from '../ProductCard'
import { useAppSelector } from '../../../../utils/helpers'
import { useEffect } from 'react'
import { ProductsCategory, ProductsWrapper } from './component'

type ProductListsPropsType = {
    title: string
    categoryId: string
    productsId: Array<string>
    activeCategory: string | undefined,
    setActiveCategory: Function,
    refs: any,
    pageHeight: any
}

export default (
    {
        title,
        categoryId,
        productsId,
        pageHeight,
        setActiveCategory,
        activeCategory,
        refs,
    }: ProductListsPropsType,
) => {
    const { products } = useAppSelector((state) => state.shopPageReducer)

    // const observerMargin = Math.floor(pageHeight / 2)
    // const activeClass = activeCategory === categoryId ? 'character-block--active' : ''
    //
    // useEffect(() => {
    //     const observerConfig = {
    //         rootMargin: '0px',
    //     }
    //     const handleIntersection = function(entries: any) {
    //         entries.forEach((entry: any) => {
    //             if (entry.target.id !== activeCategory && entry.isIntersecting) {
    //                 setActiveCategory(entry.target.id)
    //             }
    //         })
    //     }
    //     const observer = new IntersectionObserver(
    //         handleIntersection,
    //         observerConfig,
    //     )
    //     observer.observe(refs[title].current)
    //     return () => observer.disconnect()
    // }, [
    //     activeCategory,
    //     setActiveCategory,
    //     observerMargin,
    //     refs,
    //     title,
    //     pageHeight,
    // ])

    return (
        <>
            <ProductsWrapper id='BurgersControl' className='products'>
                <ProductsCategory>
                    <h2>{title}</h2>
                    {
                        productsId.length === 0
                            ? <Preloader />
                            : <>
                                <ul>
                                    {
                                        products.map(f => {
                                            if (productsId.includes(f.id)) {
                                                return <ProductCard
                                                    key={f.id}
                                                    name={f.name}
                                                    image={f.image}
                                                    popularity={f.popularity}
                                                    price={f.price}
                                                    id={f.id}
                                                />
                                            }
                                        })
                                    }
                                </ul>
                            </>
                    }
                </ProductsCategory>
            </ProductsWrapper>
        </>
    )
}
