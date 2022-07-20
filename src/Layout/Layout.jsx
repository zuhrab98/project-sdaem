import React from 'react'

import { Footer } from './Footer/Footer'
import { Header } from './Header/Header'
import '../scss/app.scss'
import { Outlet } from 'react-router'

export const Layout = () => {
	return (
		<div className='wrapper'>
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</div>
	)
}
