import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import data from '../../../api/data.json'
import { PriceFilter } from '../../PriceFilter/PriceFilter'
import { OptionsFilter } from '../../OptionsFilter/OptionsFilter'
import { Button } from '../../Button/Button'
import { Icons } from '../../Icons/Icons'
import { FilterSelect } from '../../FilterSelect/FilterSelect'
import { MoreOptions } from '../../../pages/ApartamentCatalog/MoreOptions/MoreOptions'

import styles from './TabFilter.module.scss'
import { selectFilter } from '../../../redux/slices/filterSlice'
import { selectHome } from '../../../redux/slices/homeSlice'

type Props = {
	paramName: string
}

export const TabFilter: React.FC<Props> = ({ paramName }): JSX.Element => {
	const { filtered } = useSelector(selectFilter)
	const [visibleOptions, setvisibleOptions] = React.useState(false)
	const [list, setList] = React.useState(data?.FILTER_ROOMS)
	const { tabs } = useSelector(selectHome)

	React.useEffect(() => {
		if (tabs.paramName === 'cars' || tabs.paramName === 'baths') {
			setList(data.SLEEPING_PLACES)
		} else {
			setList(data.FILTER_ROOMS)
		}
	}, [tabs])

	return (
		<div className={styles.tabsFilter}>
			<div className={styles.filteres}>
				<FilterSelect
					title='Город'
					name={filtered.citi ? filtered.citi.name : 'Выберите'}
					list={data?.FILTER_CITIES}
				/>
				<FilterSelect
					title={tabs.property}
					name={filtered.room ? filtered.room.name : 'Выберите'}
					list={list}
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
						state={{ paramName: paramName, citi: filtered.citi?.name }}
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
