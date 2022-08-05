export interface HeaderSelectedProps {
	paramName: string
	selecteds: Selecteds
}

export interface Selecteds {
	rooms: SelectedsObj[]
	cottages: SelectedsObj[]
	cars: SelectedsObj[]
	baths: SelectedsObj[]
}

export interface SelectedsObj {
	name: string
	citi: string
	path?: string
}
