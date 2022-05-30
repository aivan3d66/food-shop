import { BasketButton, Header, HeaderMenu, HeaderTricolor, HeaderWrapper } from './component'
import { HiMenuAlt1 } from 'react-icons/hi'
import { useAppSelector } from '../../../utils/helpers'
import basket from './../../../assets/images/basket.svg'
import { NavLink } from 'react-router-dom'
import { RouteNames } from '../../../routes/routes'

export default () => {
    const { basketProducts } = useAppSelector((state) => state.shopPageReducer)

    return (
        <Header>
            <HeaderTricolor>
                <span></span>
                <span></span>
                <span></span>
            </HeaderTricolor>

            <HeaderWrapper>
                <HeaderMenu>
                    <HiMenuAlt1 />
                </HeaderMenu>
                <NavLink to={RouteNames.BASKET_PAGE}>
                    <BasketButton>
                        {basketProducts.length === 0 ? 0 : basketProducts.reduce((acc, curr) => acc + curr.price, 0)} &#8381;
                        <img src={basket} alt='basket icon' />
                    </BasketButton>
                </NavLink>
            </HeaderWrapper>
        </Header>
    )
}
