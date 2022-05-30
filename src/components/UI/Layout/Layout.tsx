import Header from '../Header'
import React, { FC } from 'react'
import Footer from '../Footer'

type LayoutPropsType = {
    children: JSX.Element
}

const Layout: FC<LayoutPropsType> = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Layout
