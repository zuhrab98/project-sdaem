import React from 'react'

import { Label } from '../../../../components/Label/Label'
import { Icons } from '../../../../components/Icons/Icons'

import styles from './LocationCard.module.scss'
import { OwnerPopup } from '../../../../components/OwnerPopup/OwnerPopup'

export const LocationCard = ({ data }) => {
	const [visiblePopup, setVisiblePopup] = React.useState(false)

	return (
		<div className={styles.card}>
			<div className={styles.headerCard}>
				<img src={data.img} alt='locationPhoto' />
			</div>
			<div className={styles.body}>
				<div className={styles.row}>
					<div className={styles.priceBlock}>
						<p className={styles.price}>{data.price}</p>
						<p className={styles.priceText}>{data.priceTime}</p>
					</div>
					<div className={styles.labelRow}>
						<Label tag={'span'} type='small'>
							<Icons id={'user'} />
							<span>{data.numberPeopleRoom}</span>
						</Label>
						<Label tag={'span'} type='small'>
							<span>{data.rooms}</span>
						</Label>
						<Label tag={'span'} type='small'>
							<span>{data.quadrature}</span>
						</Label>
					</div>
				</div>
				<div className={styles.locationBlock}>
					<div className={styles.location}>
						<Icons id='location' />
						<p className={styles.text}>{data.address}</p>
					</div>
					<div className={styles.location}>
						<Icons id='metro' />
						<p className={styles.text}>{data.metro}</p>
					</div>
					<div className={styles.location}>
						<Icons id='pointer' />
						<p className={styles.text}>{data.area}</p>
					</div>
				</div>
				<p className={styles.desc}>{data.description}</p>
				<div className={styles.footer}>
					<Label
						tag={'div'}
						onClick={() => setVisiblePopup(!visiblePopup)}
						type='primary'
					>
						<Icons id='phone' />
						<span>Контакты</span>
						{visiblePopup && <OwnerPopup owner={data.owner} />}
					</Label>
					<Label tag={'div'} type='yellow'>
						<a href='#'>Подробнее</a>
					</Label>
				</div>
			</div>
		</div>
	)
}
