export interface PromoMenuProps {
	data: PromoMenuParams[]
	showMore?: boolean
	title: string
}


export interface PromoMenuParams {
	name: string
	citi?: string
	count?: number
  paramName?: string
}
