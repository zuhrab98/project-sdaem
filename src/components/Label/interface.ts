import React from 'react'

export interface LabelProps {
	type?: string
  className?: string
	children: React.ReactNode
	onClick?: () => void
  setChildRef?: (arg: React.MutableRefObject<HTMLDivElement>) => void
}
