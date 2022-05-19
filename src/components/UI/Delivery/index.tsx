import { Delivery, DeliveryBody, DeliveryControls, DeliveryHeader, DeliveryWrapper } from './component'
import Button from '../Button/Button'
import InputText from '../InputText/InputText'
import { useState } from 'react'
import { useActions } from '../../../utils/helpers'
import { testActions } from '../../../state/slices/testSlice'

export default () => {
    const [deliveryState, setDeliveryState] = useState<boolean>(true)
    const { changeDeliveryToggle } = useActions({ ...testActions })

    const setDeliveryHandler = () => {
        setDeliveryState(true)
        changeDeliveryToggle({ deliveryFilter: 'all' })
    }
    const setPickUpHandler = () => {
        setDeliveryState(false)
        changeDeliveryToggle({ deliveryFilter: 'delivery' })
    }

    return (
        <Delivery>
            <DeliveryWrapper>
                <DeliveryHeader>
                    <h1>Delivery in Moscow city</h1>
                    <DeliveryControls>
                        <Button deliveryState={deliveryState} onClick={setDeliveryHandler} name={'Delivery'} />
                        <Button deliveryState={!deliveryState} onClick={setPickUpHandler} name={'Pick up'} />
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
