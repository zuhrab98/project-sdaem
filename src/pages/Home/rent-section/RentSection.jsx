import React from 'react'
import { Icons } from '../../../components/Icons/Icons'
import { SelectFilterItem } from '../../../components/Tabs/TabFilter/SelectFilterItem/SelectFilterItem'

import styles from './RentSection.module.scss'

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
			</div>
		</section>
	)
}
