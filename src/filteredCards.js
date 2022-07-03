const filteredCards = (
	cards,
	filterByMetro,
	filterByRegions,
	filterByRooms,
	filterByCities,
	filterPriceFrom,
	filterPriceTo
) => {


  // debugger

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
