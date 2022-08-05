import React from 'react'
import { HeaderBottom } from './HeaderBottom/HeaderBottom'
import { HeaderTop } from './HeaderTop/HeaderTop'

export const Header: React.FC = (): JSX.Element => {
	return (
		<header>
			<HeaderTop />
			<HeaderBottom />
		</header>
	)
}
