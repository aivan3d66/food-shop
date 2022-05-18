import { Menu, MenuLogo, MenuWrapper } from './component'
import { useId } from 'react'


export default () => {
    const data: Array<string> = ['subsection', 'subsection', 'subsection', 'subsection', 'subsection', 'subsection', 'subsection']

    return (
        <Menu>
            <MenuWrapper>
                <ul>
                    Section
                    {
                        data.map(m => <li key={useId()}>{m}</li>)
                    }
                </ul>
                <ul>
                    Section
                    {
                        data.map(m => <li key={useId()}>{m}</li>)
                    }
                </ul>
                <MenuLogo/>
                <ul>
                    Section
                    {
                        data.map(m => <li key={useId()}>{m}</li>)
                    }
                </ul>
                <ul>
                    Section
                    {
                        data.map(m => <li key={useId()}>{m}</li>)
                    }
                </ul>
            </MenuWrapper>
        </Menu>
    )
}
