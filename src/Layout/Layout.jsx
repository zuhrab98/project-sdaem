import React from 'react'

import { Footer } from './Footer/Footer'
import { Header } from './Header/Header'
import '../scss/app.scss'

export const Layout = ({ children }) => {
	return (
		<div>
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	)
}
