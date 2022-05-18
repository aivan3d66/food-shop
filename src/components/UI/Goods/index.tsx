import { Goods } from './component'
import { useAppSelector } from '../../../utils/helpers'
import { useId } from 'react'

export default () => {
    const { goods } = useAppSelector((state) => state.testReducer)

    return (
        <Goods>
            <div>
                <h2>Burgers</h2>
                <ul>
                    {
                        goods.map((m) => {
                            return <li key={useId()}>
                                <div>
                                    <span>{m.popularity}</span>
                                    <img src={m.image} alt='good image' />
                                </div>
                                <div>
                                    <h3>{m.name}</h3>
                                    <p>{m.price}</p>
                                </div>
                            </li>
                        })
                    }
                </ul>

            </div>
            {/*<div>*/}
            {/*    <h2>Twisters</h2>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <h2>Chicken</h2>*/}
            {/*</div>*/}
        </Goods>
    )
}
