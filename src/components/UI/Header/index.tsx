import { Basket, Header, HeaderMenu, HeaderTricolor, HeaderWrapper } from './component'
import { HiMenuAlt1 } from 'react-icons/hi'
import { useAppSelector } from '../../../utils/helpers'
import basket from './../../../assets/images/basket.svg'

export default () => {
    const { basketPrice } = useAppSelector((state) => state.testReducer)

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
                <Basket>
                    {basketPrice} &#8381;
                    <img src={basket} alt='basket icon' />
                </Basket>
            </HeaderWrapper>
        </Header>
    )
}
