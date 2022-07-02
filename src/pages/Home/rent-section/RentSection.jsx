import React from 'react'

import { Icons } from '../../../components/Icons/Icons'
import { Filter } from '../../../components/Filter/Filter'
import styles from './RentSection.module.scss'
import { Slider } from '../../../components/Slider/Slider'
import { Button } from '../../../components/Button/Button'
import data from './data'
import { HomeContext } from '../Home'

export const RentSection = ({ onChangeSortMetro, onChangeSortRegions }) => {
	const { isLoading, items, filterByMetro, filterByRegions } =
		React.useContext(HomeContext)

	const [sortByMetro, setSortByMetro] = React.useState([])
	const [sortByRegions, setSortByRegions] = React.useState([])

	React.useEffect(() => {
		setSortByMetro(data.metroStations) // получаем стации метро
		setSortByRegions(data.regions) // получаем районы
	}, [])

	const filteredCards = () => {
		return items
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

	return (
		<section className={styles.rentSection}>
			<div className='container'>
				<div className={styles.header}>
					<div className={styles.titleRow}>
						<div className={styles.subtitle}>КВАРТИРЫ НА СУТКИ</div>
						<div className={styles.title}>Аренда квартир в Минске</div>
					</div>
					<div className={styles.filter}>
						{/* выподающее меню Станций метро*/}
						<Filter
							onChangeSortMetro={onChangeSortMetro}
							list={sortByMetro && sortByMetro}
							ClassName='filterMetro'
							name='Метро'
						>
							<Icons id='metro' ClasName={styles.metroIcon} />
						</Filter>

						{/* выподающее меню Районов*/}
						<Filter
							onChangeSortRegions={onChangeSortRegions}
							list={sortByRegions && sortByRegions}
							ClassName='filterDistricts'
							name='Район'
						/>
					</div>
				</div>

				<Slider data={filteredCards()} isLoading={isLoading} />

				<div className={styles.offers}>
					<div className={styles.left}>
						<p className={styles.number}>
							341 <span>+</span>
						</p>
						<p className={styles.text}>Предложений по Минску</p>
					</div>
					<Button tag='a' name='show'>
						<span>Посмотреть все</span>{' '}
						<Icons size={{ w: 16, h: 9 }} id={'arrow'} fill='#fff' />
					</Button>
				</div>
			</div>
		</section>
	)
}
