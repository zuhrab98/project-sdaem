import React from 'react'

import { Icons } from '../../../components/Icons/Icons'
import { Filter } from '../../../components/Filter/Filter'
import styles from './RentSection.module.scss'
import { Slider } from '../../../components/Slider/Slider'
import { Button } from '../../../components/Button/Button'
import data from './data'

export const RentSection = ({
	onChangeSortMetro,
	valueMetro,
	onChangeSortRegions,
	valueRegions,
	cards,
	loading,
}) => {
	const [sortByMetro, setSortByMetro] = React.useState([])
	const [sortByRegions, setSortByRegions] = React.useState([])

	React.useEffect(() => {
		setSortByMetro(data.metroStations) // получаем стации метро
		setSortByRegions(data.regions) // получаем районы
	}, [])


	const filteredCards = () => {
		return cards
			.filter((card) => {
				if (valueMetro) {
					return card.metro === valueMetro.name
				}
				return true
			})
			.filter((card) => {
				if (valueRegions) {
					return card.region === valueRegions.name
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
							valueMetro={valueMetro}
							onChangeSortMetro={onChangeSortMetro}
							list={sortByMetro && sortByMetro}
							ClassName='filterMetro'
							name='Метро'
						>
							<Icons id='metro' ClasName={styles.metroIcon} />
						</Filter>

						{/* выподающее меню Районов*/}
						<Filter
							valueRegions={valueRegions}
							onChangeSortRegions={onChangeSortRegions}
							list={sortByRegions && sortByRegions}
							ClassName='filterDistricts'
							name='Район'
						/>
					</div>
				</div>

				<Slider data={filteredCards()} loading={loading} />

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
