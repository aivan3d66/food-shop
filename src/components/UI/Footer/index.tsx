import { Footer, FooterWrapper } from './component'
import { FaVk } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { FaOdnoklassniki } from 'react-icons/fa'

export default () => {
    return (
        <Footer>
            <FooterWrapper>
                <ul>
                    <li><FaVk /></li>
                    <li><FaTwitter /></li>
                    <li><FaFacebookF /></li>
                    <li><FaOdnoklassniki /></li>
                </ul>
            </FooterWrapper>
        </Footer>
    )
}
