import { Menu, MenuLogo, MenuTricolor, MenuWrapper } from './component'
import { useId } from 'react'

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
                <div>
                    <h4>Section 1</h4>
                    <ul>
                        {
                            data.map(m => <li key={useId()}>{m}</li>)
                        }
                    </ul>
                </div>
                <div>
                    <h4>Section 2</h4>
                    <ul>
                        {
                            data.map(m => <li key={useId()}>{m}</li>)
                        }
                    </ul>
                </div>
                <MenuLogo />
                <div>
                    <h4>Section 3</h4>
                    <ul>
                        {
                            data.map(m => <li key={useId()}>{m}</li>)
                        }
                    </ul>
                </div>
                <div>
                    <h4>Section 4</h4>
                    <ul>
                        {
                            data.map(m => <li key={useId()}>{m}</li>)
                        }
                    </ul>
                </div>
            </MenuWrapper>
        </Menu>
    )
}
