import { CardsType, FilterPropertyType, PriceType } from '../type'

// export const filteredCardsSlider = (cards, filterByMetro, filterByRegions) => {
// 	return cards
// 		.filter((card) => {
// 			if (filterByMetro) {
// 				return card.metro === filterByMetro.name
// 			}
// 			return true
// 		})
// 		.filter((card) => {
// 			if (filterByRegions) {
// 				return card.region === filterByRegions.name
// 			}
// 			return true
// 		})
// }

export const filteredApartmentCatalog = (
	cards: CardsType[],
	filterByRooms: FilterPropertyType,
	filterByCities: FilterPropertyType,
	priceFrom: FilterPropertyType,
	priceTo: FilterPropertyType,
	filterByMetro: FilterPropertyType,
	filterByRegions: FilterPropertyType,
	filterByPlaces: FilterPropertyType
): CardsType[] => {
	return cards
		.filter((card) => {
			if (filterByPlaces) {
				return card.numberPeopleRoom === filterByPlaces.name
			}
			return true
		})
		.filter((card) => {
			if (filterByMetro) {
				return card.metro === filterByMetro.name
			}
			return true
		})
		.filter((card) => {
			if (filterByRegions) {
				return card.region === filterByRegions.name
			}
			return true
		})
		.filter((card) => {
			if (filterByRooms) {
				return card.rooms === filterByRooms.name
			}
			return true
		})
		.filter((card) => {
			if (filterByCities) {
				return card.citi === filterByCities.name
			}
			return true
		})
		.filter((card) => {
			if (priceFrom.name && priceTo.name) {
				return (
					parseInt(card.price) >= Number(priceFrom.name) &&
					Number(priceTo.name) >= parseInt(card.price)
				)
			}
			return true
		})
}
