import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import cn from 'classnames'

import data from '../../../api/data'
import { PriceFilter } from './PriceFilter/PriceFilter'
import { OptionsFilter } from './OptionsFilter/OptionsFilter'
import { Button } from '../../Button/Button'
import { Icons } from '../../Icons/Icons'
import { FilterSelect } from '../../FilterSelect/FilterSelect'

import styles from './TabFilter.module.scss'
import { selectFilter } from '../../../redux/slices/filterSlice'

export const TabFilter = () => {
	const { filterByRooms, filterByCities } = useSelector(selectFilter)
	const [visibleOptions, setvisibleOptions] = React.useState(false)

	return (
		<div className={styles.tabsFilter}>
			<div className={styles.filteres}>
				<FilterSelect
					title='Город'
					name={filterByCities ? filterByCities.name : 'Выберите'}
					list={data?.FILTER_CITIES}
				/>
				<FilterSelect
					title='Комнаты'
					name={filterByRooms ? filterByRooms.name : 'Выберите'}
					list={data?.FILTER_ROOMS}
				/>
				<PriceFilter />
				<OptionsFilter onclick={() => setvisibleOptions((prev) => !prev)} />
				<div className={styles.buttons}>
					<Button to='/' tag='a' name='openMap'>
						<Icons id='location' fill='#FEC81B' />
						<span>На карте</span>
					</Button>
					<Link
						to={`/apartmentCatalog`}
						state={{ paramName: null, citi: filterByCities?.name }}
						className={styles.lightYellow}
					>
						<span>Показать</span>
						<Icons id={'arrow'} size={{ w: 12, h: 7 }} fill={'#242424'} />
					</Link>
				</div>
			</div>
			{visibleOptions && (
				<div className={cn('container', styles.moreOptions)}>
					<FilterSelect
						title='Спальные места'
						name={'Выберите'}
						list={data?.SLEEPING_PLACES}
					/>
					<FilterSelect title='Район' name='Выберите' list={data?.REGIONS} />
					<FilterSelect
						title='Метро'
						name='Выберите'
						list={data?.METRO_STATIONS}
					/>
				</div>
			)}
		</div>
	)
}
