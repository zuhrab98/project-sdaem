import React from 'react'

import { Icons } from '../../../components/Icons/Icons'
import styles from './RentSection.module.scss'
import { Slider } from '../../../components/Slider/Slider'
import { Button } from '../../../components/Button/Button'
import data from './data'
import { useSelector } from 'react-redux'
import filteredCards from '../../../filteredCards'
import { FilterSelect } from '../../../components/FilterSelect/FilterSelect'

export const RentSection = ({ cards }) => {
	// получаем из stora необходимые свойства
	const {
		loading,
		filterByMetro,
		filterByRegions,
		filterByRooms,
		filterByCities,
		filterByPriceFrom,
		filterByPriceTo,
	} = useSelector((store) => store.filter)

	const [sortByMetro, setSortByMetro] = React.useState([])
	const [sortByRegions, setSortByRegions] = React.useState([])

	React.useEffect(() => {
		setSortByMetro(data.metroStations) // получаем стации метро
		setSortByRegions(data.regions) // получаем районы
	}, [])

	console.log(filterByCities)

	return (
		<section className={styles.rentSection}>
			<div className='container'>
				<div className={styles.header}>
					<div className={styles.titleRow}>
						<div className={styles.subtitle}>КВАРТИРЫ НА СУТКИ</div>
						<div className={styles.title}>
							{filterByCities
								? `Аренда квартир в ${filterByCities.name}e`
								: 'Все квартиры'}
						</div>
					</div>
					<div className={styles.filter}>
						{/* выподающее меню Станций метро*/}
						<FilterSelect
							list={sortByMetro && sortByMetro}
							ClassName='filterMetro'
							name='Метро'
						>
							<Icons id='metro' ClasName={styles.metroIcon} />
						</FilterSelect>

						{/* выподающее меню Районов*/}
						<FilterSelect
							list={sortByRegions && sortByRegions}
							ClassName='filterDistricts'
							name='Район'
						/>
					</div>
				</div>

				<Slider
					data={filteredCards(
						cards,
						filterByMetro,
						filterByRegions,
						filterByRooms,
						filterByCities,
						filterByPriceFrom,
						filterByPriceTo
					)}
					isLoading={loading}
				/>

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
