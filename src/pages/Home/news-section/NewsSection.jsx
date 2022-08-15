import React from 'react'

import { Icons } from '../../../components/Icons/Icons'
import styles from './StartSection.module.scss'
import { Button } from '../../../components/Button/Button'
import data from './data.json'

export const StartSection = () => {
	const [cards, setCards] = React.useState([])

	React.useEffect(() => {
		setCards(data.START_CARD)
	}, [])

	return (
		<section className={styles.startSection}>
			<div className='container'>
				<div className={styles.wrapper}>
          <div className={styles.apartmentForDay}>
            <p>ЧТО ТАКОЕ SDAEM.BY</p>
            <h3>Квартира на сутки в Минске</h3>
            <div className={styles.content}>
              <img src="" alt="" />
              <p></p>
            </div>
          </div>
        </div>
			</div>
		</section>
	)
}
