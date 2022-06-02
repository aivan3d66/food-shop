type CardImagePropsType = {
    src: string
}

const CardImage = ({ src }: CardImagePropsType) => {
    return (
        <img src={src} alt='good'/>
    )
}

export default CardImage
