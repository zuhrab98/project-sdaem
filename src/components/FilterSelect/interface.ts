import { FilterType } from "../../type"

export interface FilterSelectProps {
	title?: string
	list: FilterType[]
	ClassName?: string
	children?: React.ReactNode
	name: string
}
