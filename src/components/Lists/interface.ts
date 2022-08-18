export interface ListProps {
	lists: ParamLists[]
	tag: string
}

export interface ParamLists {
	name: string
	paramName?: string
	path?: string
	citi?: string
	property?: string 
}
