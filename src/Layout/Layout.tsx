import React from 'react'

import { Outlet } from 'react-router'

import { Footer } from './Footer/Footer'
import { Header } from './Header/Header'
import '../scss/app.scss'

export const Layout: React.FC = () => {
    return (
        <div className="wrapper">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}
