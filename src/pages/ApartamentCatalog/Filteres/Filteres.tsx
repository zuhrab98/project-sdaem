import React from 'react'
import cn from 'classnames'

import styles from './Filteres.module.scss'

import data from '../../../api/data.json'
import { FilterSelect } from '../../../components/FilterSelect/FilterSelect'
import { PriceFilter } from '../../../components/PriceFilter/PriceFilter'
import { OptionsFilter } from '../../../components/Tabs/TabFilter/OptionsFilter/OptionsFilter'
import { Button } from '../../../components/Button/Button'
import { Icons } from '../../../components/Icons/Icons'
import {
	selectFilter,
	setFiltersClear,
} from '../../../redux/slices/filterSlice'
import { MoreOptions } from '../MoreOptions/MoreOptions'
import { useDispatch, useSelector } from 'react-redux'
import { filteredApartmentCatalog } from '../../../utils/filteredCards'
import { FilteresProps } from './interface'
import { RootState } from '../../../redux/store'


export const Filteres: React.FC<FilteresProps> = ({ setFilterCards }) => {
	const dispatch = useDispatch()
	const { filtered } = useSelector(selectFilter)
	const { itemsCard } = useSelector((store: RootState) => store.catalog)

	const [visibleOptions, setvisibleOptions] = React.useState(false)

	const handleClickByShow = () => {
		// функс фильтрует карточки при нажатии показать объекты
		const filtersCard = filteredApartmentCatalog(
			itemsCard,
			filtered.room,
			filtered.citi,
			filtered.priceFrom,
			filtered.priceTo,
			filtered.metro,
			filtered.region,
			filtered.places
		)
		setFilterCards(filtersCard)
	}

	return (
		<div className={styles.filteres}>
			<div className={cn('container', styles.filteresRow)}>
				<FilterSelect
					ClassName='rentalApartment'
					title='Комнаты'
					name={filtered.room ? filtered.room.name : 'Выберите'}
					list={data.FILTER_ROOMS}
				/>

				<PriceFilter ClassName='rentalPrice' />
				<OptionsFilter
					visibleOptions={visibleOptions}
					onclick={() => setvisibleOptions((prev) => !prev)}
				/>
				<div className={styles.buttons}>
					<Button onClick={() => dispatch(setFiltersClear())} name='beige'>
						<span>Очистить</span>
					</Button>
					<Button onClick={() => handleClickByShow()} name='show'>
						<span>Показать объекты</span>
						<Icons id={'arrow'} size={{ w: 12, h: 7 }} fill={'#FFFFFF'} />
					</Button>
				</div>
			</div>
			<MoreOptions filtered={filtered} visibleOptions={visibleOptions} />
		</div>
	)
}
