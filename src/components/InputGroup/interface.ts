import { InputHTMLAttributes } from "react"
import { Message } from "react-hook-form"

export interface InputGroupProps extends InputHTMLAttributes<HTMLInputElement>  {
	icon: string
	id?: string
	errorIcon: boolean
	register: Function
	type: string
	placeholder: string
  helperText?: Message
}
