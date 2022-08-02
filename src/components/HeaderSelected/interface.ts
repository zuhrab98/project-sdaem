export interface HeaderSelectedProps {
	paramName: string
	selecteds: {
		rooms: Selecteds[]
		cottages: Selecteds[]
		cars: Selecteds[]
		baths: Selecteds[]
	}
}

export interface Selecteds {
	name: string
	citi: string
	path?: string
}
 