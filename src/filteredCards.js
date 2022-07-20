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
	filterByPriceFrom,
	filterByPriceTo
) => {
	return cards
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
			if (filterByPriceFrom.price && filterByPriceTo.price) {
				return (
					Number(card.price.split('.')[0]) >= Number(filterByPriceFrom.price) &&
					filterByPriceTo &&
					Number(filterByPriceTo.price) >= Number(card.price.split('.')[0])
				)
			}
			return true
		})
}

