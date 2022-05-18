import { Delivery } from './component'
import Button from '../Button/Button'
import InputText from '../InputText/InputText'

export default () => {
    return (
        <Delivery>
            <div>
                <h1>Delivery in Moskow city</h1>
                <div>
                    <Button name={'Delivery'} />
                    <Button name={'Pick up'} />
                </div>
            </div>
            <div>
                <label> Street:
                    <InputText />
                </label>
                <label> House:
                    <InputText />
                </label>
            </div>
        </Delivery>
    )
}
