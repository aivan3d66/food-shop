import { useAppSelector } from '../../utils/helpers'

export const Home = () => {
    const { status } = useAppSelector((state) => state.testReducer)

    return (
        <div>
            Home page. Status: {status}
        </div>
    )
}
