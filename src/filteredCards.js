export const filteredCardsSlider = (cards, filterByMetro, filterByRegions) => {
	return cards
		.filter((card) => {
			if (filterByMetro) {
				if (filterByMetro.name === 'Все') {
					return true
				}
				return card.metro === filterByMetro.name
			}
			return true
		})
		.filter((card) => {
			if (filterByRegions) {
				if (filterByRegions.name === 'Все') {
					return true
				}
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

export const sort = (cards, sortCards) => {
	if (sortCards?.filterProperty === 'asc') {
		return cards.sort((a, b) => {
			return a.price.split('.')[0] - b.price.split('.')[0]
		})
	} else if (sortCards?.filterProperty === 'desc') {
		return cards.sort((a, b) => {
			return b.price.split('.')[0] - a.price.split('.')[0]
		})
	}
}
