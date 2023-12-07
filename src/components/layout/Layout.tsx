import React, { PropsWithChildren } from 'react'
import { Header } from '../header/Header'
import { Footer } from '../footer/Footer'
import "./Layout.scss"


export const Layout = ({ children }: PropsWithChildren) => {
    return (
        <div className='layout'>
            <div className='layout-children' >
                <Header />
                {children}
            </div>
            <Footer />
        </div>
    )
}
