import React from 'react'

export interface ModalProps {
	children: React.ReactNode
  className?: string
	action: string
  isActive?: (param: boolean) => void
  navigatPage?: string
}