import React from 'react'

export interface LabelProps {
	tag: 'div' | 'a'
	type: string
	children: React.ReactNode
	onClick?: () => void
}
