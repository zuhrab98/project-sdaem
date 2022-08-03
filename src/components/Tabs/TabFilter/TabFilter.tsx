import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import cn from 'classnames'

import data from '../../../api/data.json'
import { PriceFilter } from '../../PriceFilter/PriceFilter'
import { OptionsFilter } from './OptionsFilter/OptionsFilter'
import { Button } from '../../Button/Button'
import { Icons } from '../../Icons/Icons'
import { FilterSelect } from '../../FilterSelect/FilterSelect'
import { MoreOptions } from '../../../pages/ApartamentCatalog/MoreOptions/MoreOptions'

import styles from './TabFilter.module.scss'
import { selectFilter } from '../../../redux/slices/filterSlice'

export const TabFilter = (): JSX.Element => {
	const { filtered } = useSelector(selectFilter)
	const [visibleOptions, setvisibleOptions] = React.useState(false)
  
	return (
		<div className={styles.tabsFilter}>
			<div className={styles.filteres}>
				<FilterSelect
					title='Город'
					name={filtered.citi ? filtered.citi.name : 'Выберите'}
					list={data?.FILTER_CITIES}
				/>
				<FilterSelect
					title='Комнаты'
					name={filtered.room ? filtered.room.name : 'Выберите'}
					list={data?.FILTER_ROOMS}
				/>
				<PriceFilter />
				<OptionsFilter onclick={() => setvisibleOptions((prev) => !prev)} />
				<div className={styles.buttons}>
					<Button tag='a' path='/openMap' name='openMap'>
						<Icons id='location' fill='#FEC81B' />
						<span>На карте</span>
					</Button>
					<Link
						to={`/apartmentCatalog`}
						state={{ paramName: null, citi: filtered.citi?.name }}
						className={styles.lightYellow}
					>
						<span>Показать</span>
						<Icons id={'arrow'} size={{ w: 12, h: 7 }} fill={'#242424'} />
					</Link>
				</div>
			</div>
			<MoreOptions visibleOptions={visibleOptions} filtered={filtered} />
		</div>
	)
}
