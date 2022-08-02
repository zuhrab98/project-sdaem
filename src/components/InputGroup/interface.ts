
export interface InputGroupProps {
	icon: string
	id?: string
	errorIcon: undefined | { message?: string; ref?: any; type?: string }
	register: Function
	type: string
	placeholder: string
}
