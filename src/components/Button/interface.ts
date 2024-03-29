export interface ButtonProps {
	children?: React.ReactNode
	name?: string
	tag?: string
	path?: string
  type?: "button" | "submit" | "reset"
	onClick?: () => void
}
