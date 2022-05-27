import { MenuTab } from './component'
import { useId } from 'react'

type MenuTabPropsType = {
    data: Array<string>,
    title: string,
}

export default ({ data, title }: MenuTabPropsType) => {
    return (
        <MenuTab>
            <h4>{title}</h4>
            <ul>
                {
                    data.map(m => <li key={useId()}>{m}</li>)
                }
            </ul>
        </MenuTab>
    )
}
