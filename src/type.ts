export type FilterProperty =
	| 'metro'
	| 'region'
	| 'asc'
	| 'desc'
	| 'places'
	| 'citi'
	| 'room'
	| 'priceFrom'
	| 'priceTo'

export type FilterPropertyType = {
	label?: string
	name: string
	filterProperty: FilterProperty
}

export type FilterType = {
	name: string
	filterProperty: string
}

export type M = MouseEvent & {
	path: Node[]
}

export interface OwnerType {
	email: string
	img: string
	name: string
	socials: { social: string; href: string }[]
	tel: string
	title: string
}

export interface CardsType {
	id: number
	address: string
	citi: string
	description: string
	img: string[]
	label: string
	metro: string
	numberPeopleRoom: string
	owner: OwnerType
	priceTime: string
	price: string
	quadrature: string
	region: string
	rooms: string
}

export interface NewsCard {
	id: string
	title?: string
	img: string
	description: string
	fullDescription: string
	date: string
}

export interface NewsCardsDetail {
	id: string
	img: string
	title: string
	description: string
	fullDescription: string
	date: string
}

export interface PriceType {
	price: string
	filterProperty: FilterProperty
}

export enum Status {
	LOADING = 'loading',
	SUCCESS = 'success',
	ERROR = 'error',
}

export type FormValues = {
	name: string
	email: string
	message: string
	login: string
	password: string
	confirmPassword: string
}

export interface Tabs {
	name: string
	property: string
	paramName: string
}
