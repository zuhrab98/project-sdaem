import React from 'react'

import { Icons } from '../../../components/Icons/Icons'
import styles from './RentSection.module.scss'
import { Slider } from '../../../components/Slider/Slider'
import { Button } from '../../../components/Button/Button'
import data from '../../../api/data.json'
import { useSelector } from 'react-redux'
import { filteredApartmentCatalog } from '../../../utils/filteredCards'
import { FilterSelect } from '../../../components/FilterSelect/FilterSelect'
import { selectFilter } from '../../../redux/slices/filterSlice'
import { CardsType } from '../../../type'

export const RentSection: React.FC<{cards: CardsType[]}> = ({ cards }):JSX.Element => {
	// получаем из stora необходимые свойства
	const { filtered } = useSelector(selectFilter)

	const filtersCard = filteredApartmentCatalog(
		cards,
		filtered.room,
		filtered.citi,
		filtered.priceFrom,
		filtered.priceTo,
		filtered.metro,
		filtered.region,
		filtered.places
	)

	return (
		<section className={styles.rentSection}>
			<div className='container'>
				<div className={styles.header}>
					<div className={styles.titleRow}>
						<div className={styles.subtitle}>КВАРТИРЫ НА СУТКИ</div>
						<div className={styles.title}>Аренда квартир {filtered.citi?.name &&`в ${filtered.citi.name}е`}</div>
					</div>
					<div className={styles.filter}>
						{/* выподающее меню Станций метро*/}
						<FilterSelect
							list={data?.METRO_STATIONS}
							ClassName='filterMetro'
							name='Метро'
						>
							<Icons id='metro' ClassName={styles.metroIcon} />
						</FilterSelect>

						{/* выподающее меню Районов*/}
						<FilterSelect
							list={data.REGIONS}
							ClassName='filterDistricts'
							name='Район'
						/>
					</div>
				</div>

				<Slider cards={filtersCard} />

				<div className={styles.offers}>
					<div className={styles.left}>
						<p className={styles.number}>
							{filtersCard?.length} <span>+</span>
						</p>
						<p className={styles.text}>Предложение</p>
					</div>
					<Button tag='a' path='/apartmentCatalog' name='show'>
						<span>Посмотреть все</span>{' '}
						<Icons size={{ w: 16, h: 9 }} id={'arrow'} fill='#fff' />
					</Button>
				</div>
			</div>
		</section>
	)
}
