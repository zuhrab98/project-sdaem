import React from 'react'

import { Icons } from 'components/Icons/Icons'
import styles from './StartSection.module.scss'
import { Button } from 'components/Button/Button'
import { Card } from './Card/Card'
import data from './data.json'

export const StartSection = () => {
	const [cards, setCards] = React.useState([])

	React.useEffect(() => {
		setCards(data.START_CARD)
	}, [])

	return (
		<section className={styles.startSection}>
			<div className='container'>
				<div className={styles.content}>
					<h3 className={styles.title}>Поиск квартир на карте</h3>
					<p className={styles.text}>
						Ищите квартиры на сутки в центре города, возле парка или в
						живописном районе
					</p>
					<Button tag='a' name='openMap'>
						<Icons id='location' fill='#FEC81B' /> <span>Открыть карту</span>
					</Button>
				</div>
				<div className={styles.cardsRow}>
					{cards && cards.map((item, i) => <Card key={i} data={item} />)}
				</div>
			</div>
		</section>
	)
}
