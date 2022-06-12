import { Menu, MenuLogo, MenuTricolor, MenuWrapper } from './component'
import MenuTab from './MenuTab'

export default () => {
    const data: Array<string> = ['subsection', 'subsection', 'subsection', 'subsection', 'subsection', 'subsection', 'subsection']

    return (
        <Menu>
            <MenuWrapper>
                <MenuTricolor>
                    <span></span>
                    <span></span>
                    <span></span>
                </MenuTricolor>
                <MenuTab title={'Section 1'} data={data} />
                <MenuTab title={'Section 2'} data={data} />
                <MenuLogo />
                <MenuTab title={'Section 3'} data={data} />
                <MenuTab title={'Section 4'} data={data} />
            </MenuWrapper>
        </Menu>
    )
}
