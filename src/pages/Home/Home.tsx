import Delivery from '../../components/UI/Delivery'
import Filter from '../../components/UI/Filter'
import Menu from '../../components/UI/Menu'
import { createRef, useEffect, useState } from 'react'
import { useAppSelector } from '../../utils/helpers'
import Goods from '../../components/UI/Goods'

export const Home = () => {
    const [activeCategory, setActiveCategory] = useState()
    const [pageHeight, setPageHeight] = useState<number>(0)

    const { categories } = useAppSelector((state) => state.shopPageReducer)

    const refs = categories.reduce((refsObj: any, category) => {
        refsObj[category.name] = createRef()
        return refsObj
    }, {})

    const handleCLick = (name: string) => {
        refs[name].current.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
        })
    }

    useEffect(() => {
        setPageHeight(window.innerHeight)
        window.addEventListener('resize', (e) => {
            setTimeout(() => {
                setPageHeight(window.innerHeight)
            }, 300)
        })
    }, [])

    return (
        <>
            <Delivery />
            <Filter
                activeCategory={activeCategory}
                handleCLick={handleCLick}
            />
            <Goods
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                refs={refs}
                pageHeight={pageHeight}
                categories={categories}
            />
            <Menu />
        </>
    )
}
