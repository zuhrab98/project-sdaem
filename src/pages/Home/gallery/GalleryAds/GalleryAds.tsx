import React from 'react'
import { Link } from 'react-router-dom'

import styles from './GalleryAds.module.scss'
import { setFiltered } from '../../../../redux/slices/filterSlice'
import { Icons } from '../../../../components/Icons/Icons'
import { useAppDispatch } from '../../../../redux/store'
import { GalleryAdsProps } from './interface'

export const GalleryAds: React.FC<GalleryAdsProps> = ({
	data,
}): JSX.Element => {
	const dispatch = useAppDispatch()

	const handleOnClick = (citi: string) => {
		citi && dispatch(setFiltered({ name: citi, filterProperty: 'citi' }))
	}

	return (
		<>
			{data?.map((item) => (
				<div key={item.title} className={styles.item}>
					<img src={item.img} alt='gsllery' className={styles.img}/>
					{item.paramName ? (
						<div className={styles.desc}>
							<p className={styles.subtitle}>{item.subtitle}</p>
							<h3 className={styles.title}>{item.title}</h3>
						</div>
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
											onClick={() => handleOnClick(item.citi)}
										>
											{item.citi}
										</Link>
									))}
								</div>
							)}
						</div>
					)}
					{item?.paramName && (
						<Link
							to='/apartmentCatalog'
							state={{ paramName: item.paramName }}
							className={styles.arrow}
						>
							<Icons id='arrow' size={{ w: 15, h: 8 }} fill={'#ffffff'} />
						</Link>
					)}
				</div>
			))}
		</>
	)
}
