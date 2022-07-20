export const filteredCardsSlider = (cards, filterByMetro, filterByRegions) => {
	return cards
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
}

export const filteredApartmentCatalog = (
	cards,
	filterByRooms,
	filterByCities,
	priceFrom,
	priceTo,
	filterByMetro,
	filterByRegions,
  filterByPlaces
) => {
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
			if (priceFrom.price && priceTo.price) {
				return (
					Number(card.price.split('.')[0]) >= Number(priceFrom.price) &&
					Number(priceTo.price) >= Number(card.price.split('.')[0])
				)
			}
			return true
		})
}
