import { Goods } from './component'
import { CategoryType } from '../../../state/slices/shopPageSlice'
import ProductLists from './ProductLists'

type ProductListsPropsType = {
    categories: Array<CategoryType>
    activeCategory: string | undefined,
    setActiveCategory: Function,
    refs: any,
    pageHeight: number
}

export default (
    {
        categories,
        pageHeight,
        setActiveCategory,
        activeCategory,
        refs,
    }: ProductListsPropsType,
) => {
    return (
        <Goods>
            {
                categories.map((c, i: number) => {
                    return (
                        <ProductLists
                            key={i}
                            title={c.name}
                            productsId={c.products}
                            categoryId={c.id}
                            activeCategory={activeCategory}
                            setActiveCategory={setActiveCategory}
                            refs={refs}
                            pageHeight={pageHeight}
                        />
                    )
                })
            }
        </Goods>
    )
}
