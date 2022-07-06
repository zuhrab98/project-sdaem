const filteredCards = (
	cards,
	filterByMetro,
	filterByRegions,
	filterByRooms,
	filterByCities,
	filterPriceFrom,
	filterPriceTo
) => {

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
		.filter((card) => {
			if (filterByRooms) {
				if (filterByRooms.name === 'Все') {
					return true
				}
				return card.rooms === filterByRooms.name
			}
			return true
		})
		.filter((card) => {
			if (filterByCities) {
				if (filterByCities.name === 'Все') {
					return true
				}
				return card.citi === filterByCities.name
			}
			return true
		})
		.filter((card) => {
			if (filterPriceFrom && filterPriceTo) {
				return (
					Number(card.price.split('.')[0]) >= Number(filterPriceFrom.price) &&
					filterPriceTo &&
					Number(filterPriceTo.price) >= Number(card.price.split('.')[0])
				)
			}
			return true
		})
}

export default filteredCards
