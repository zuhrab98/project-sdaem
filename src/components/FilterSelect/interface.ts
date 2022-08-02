type FilterProperty = {
	name: string
	filterProperty: string
}

export interface FilterSelectProps {
	title?: string
	list: FilterProperty[]
	ClassName?: string
	children?: React.ReactNode
	name: string
}
