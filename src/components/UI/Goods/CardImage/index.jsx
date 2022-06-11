import React, { useRef, useState } from 'react'
import useIntersectionObserver from '../../../../utils/hooks/useIntersectionObserver'


const CardImage = ({ src }) => {
    const ref = useRef()
    const [isVisible, setIsVisible] = useState(false)

    useIntersectionObserver({
        target: ref,
        onIntersect: ([{ isIntersecting }], observerElement) => {
            if (isIntersecting) {
                setIsVisible(true)
                observerElement.unobserve(ref.current)
            }
        },
    })
    return (
        <div ref={ref}>
            {
                isVisible
                    ? <img src={src} alt='product' />
                    : <p style={{
                        fontWeight: 'bold',
                        lineHeight: '70px',
                        fontSize: '62px',
                        color: '#bababa',
                    }}>?</p>
            }
        </div>
    )
}

export default CardImage
