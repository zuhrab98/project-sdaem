import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import styles from './GalleryAds.module.scss'
import { setFiltered } from '../../../../redux/slices/filterSlice'

export const GalleryAds = ({ data }) => {
	const dispatch = useDispatch()

	const handlerClick = (citi) => {
		citi && dispatch(setFiltered({ name: citi, filterProperty: 'citi' }))
	}

	return (
		<>
			{data &&
				data.map((item) => (
					<div key={item.title} className={styles.item}>
						{item.paramName ? (
							<Link
								to='/apartmentCatalog'
								state={{ paramName: item.paramName }}
								className={styles.desc}
							>
								<p className={styles.subtitle}>{item.subtitle}</p>
								<h3 className={styles.title}>{item.title}</h3>
							</Link>
						) : (
							<div className={styles.desc}>
								<p className={styles.subtitle}>{item.subtitle}</p>
								<h3 className={styles.title}>{item.title}</h3>
								{item.cities && (
									<div className={styles.citiesRow}>
										{item.cities.map((item) => (
											<Link
												key={item.citi}
												className={styles.city}
												to='/apartmentCatalog'
												state={{ paramName: null }}
												onClick={() => handlerClick(item?.citi)}
											>
												{item.citi}
											</Link>
										))}
									</div>
								)}
							</div>
						)}
						<div className={styles.link}>
							<img src={item.img} alt='' />
						</div>
					</div>
				))}
		</>
	)
}
