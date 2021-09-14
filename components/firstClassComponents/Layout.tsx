import React from 'react'

import Head from 'next/head'
import NavigationBar from './NavigationBar'
import Footer from './Footer'

interface IProps {
    children: JSX.Element
}

const Layout:React.FC<IProps> =({children}) =>{
    return(
        <div>
            <Head>
                <title>MyHealth</title>
            </Head>
            <NavigationBar />
            <main >{children}</main>
            <Footer />
        </div>
    )
}


export default Layout