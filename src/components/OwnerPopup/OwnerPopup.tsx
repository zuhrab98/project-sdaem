import React from 'react'
import styles from './OwnerPopup.module.scss'
import { Icons } from '../Icons/Icons'
import { OwnerPopupProps } from './interface'

export const OwnerPopup: React.FC<OwnerPopupProps> = ({
	owner,
}): JSX.Element => {

	return (
		<div  className={styles.phonePopUp}>
			<div className={styles.userImg}>
				<img src={owner?.img} alt='user' />
			</div>
			<p className={styles.title}>{owner?.title}</p>
			<p className={styles.name}>{owner?.name}</p>
			<p className={styles.telephone}>{owner?.tel}</p>
			<a className={styles.email} href={`mailto:${owner?.email}`}>
				{owner?.email}
			</a>
			<div className={styles.socials}>
				{owner?.socials?.map((item, i) => (
					<a key={i} className={styles.icon} href={item.href}>
						<Icons id={item.social} />
					</a>
				))}
			</div>
		</div>
	)
}
