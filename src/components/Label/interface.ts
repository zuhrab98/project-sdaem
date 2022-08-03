import React from 'react'

export interface LabelProps {
	tag: 'div' | 'a' | 'span'
	type?: string
  className?: string
	children: React.ReactNode
	onClick?: () => void
}
