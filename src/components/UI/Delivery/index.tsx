import { Delivery, DeliveryBody, DeliveryControls, DeliveryHeader, DeliveryWrapper } from './component'
import Button from '../Button/Button'
import InputText from '../InputText/InputText'

export default () => {
    return (
        <Delivery>
            <DeliveryWrapper>
                <DeliveryHeader>
                    <h1>Delivery in Moscow city</h1>
                    <DeliveryControls>
                        <Button name={'Delivery'} />
                        <Button name={'Pick up'} />
                    </DeliveryControls>
                </DeliveryHeader>
                <DeliveryBody>
                    <label> Street
                        <InputText />
                    </label>
                    <label> House
                        <InputText />
                    </label>
                </DeliveryBody>
            </DeliveryWrapper>
        </Delivery>
    )
}
