import React from 'react'

export interface SearchProps {
	onClickSearch: (e?: React.MouseEvent) => void
	search: string
}
