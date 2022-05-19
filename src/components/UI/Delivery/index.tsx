import { Delivery, DeliveryBody, DeliveryControls, DeliveryHeader, DeliveryWrapper } from './component'
import Button from '../Button/Button'
import InputText from '../InputText/InputText'
import { useState } from 'react'

export default () => {
    const [deliveryState, setDeliveryState] = useState<boolean>(true)

    return (
        <Delivery>
            <DeliveryWrapper>
                <DeliveryHeader>
                    <h1>Delivery in Moscow city</h1>
                    <DeliveryControls>
                        <Button deliveryState={deliveryState} onClick={() => setDeliveryState(true)} name={'Delivery'} />
                        <Button deliveryState={!deliveryState} onClick={() => setDeliveryState(false)} name={'Pick up'} />
                    </DeliveryControls>
                </DeliveryHeader>
                {
                    deliveryState && <DeliveryBody>
                        <label> Street
                            <InputText placeholder='Street' />
                        </label>
                        <label> House
                            <InputText placeholder='House' />
                        </label>
                    </DeliveryBody>
                }

            </DeliveryWrapper>
        </Delivery>
    )
}
