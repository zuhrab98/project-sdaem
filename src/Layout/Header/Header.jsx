import React from 'react'
import { HeaderBottom } from './HeaderBottom/HeaderBottom'
import { HeaderTop } from './HeaderTop/HeaderTop'

export const Header = () => {
	return (
		<>
			<header>
				<HeaderTop />
				<HeaderBottom />
			</header>
		</>
	)
}
