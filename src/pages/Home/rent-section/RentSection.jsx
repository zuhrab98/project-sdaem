import React from 'react'

import { Icons } from '../../../components/Icons/Icons'
import { SelectFilterItem } from '../../../components/Tabs/TabFilter/SelectFilterItem/SelectFilterItem'
import { CARD_LOCATION } from './data'
import { LocationCard } from './LocationCard/LocationCard'

import styles from './RentSection.module.scss'
import { Slider } from '../../../components/Slider/Slider'
import { Button } from '../../../components/Button/Button'

export const RentSection = () => {
	return (
		<section className={styles.rentSection}>
			<div className='container'>
				<div className={styles.header}>
					<div className={styles.titleRow}>
						<div className={styles.subtitle}>КВАРТИРЫ НА СУТКИ</div>
						<div className={styles.title}>Аренда квартир в Минске</div>
					</div>
					<div className={styles.filter}>
						<SelectFilterItem
							data={['Калужская', 'Охотный ряд', 'Беляево']}
							ClassName='filterMetro'
							name='Метро'
						>
							<Icons id='metro' ClasName={styles.metroIcon} />
						</SelectFilterItem>

						<SelectFilterItem
							data={['Калужская', 'Охотный ряд', 'Беляево']}
							ClassName='filterDistricts'
							name='Район'
						/>
					</div>
				</div>
				<div className={styles.sliderRow}>
					<Slider data={CARD_LOCATION} cards={LocationCard} />
				</div>
				<div className={styles.offers}>
					<div className={styles.left}>
						<p className={styles.number}>
							341 <span>+</span>
						</p>
						<p className={styles.text}>Предложений по Минску</p>
					</div>
					<Button name='show'>
						<span>Посмотреть все</span>{' '}
						<Icons size={{ w: 16, h: 9 }} id={'arrow'} fill='#fff' />
					</Button>
				</div>
			</div>
		</section>
	)
}
