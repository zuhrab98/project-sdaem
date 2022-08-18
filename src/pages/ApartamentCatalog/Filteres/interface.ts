import { CardsType, FilterType } from '../../../type'

export interface FilteresProps {
	setFilterCards?: (filtersCard: CardsType[]) => void
  list: FilterType[]
}
