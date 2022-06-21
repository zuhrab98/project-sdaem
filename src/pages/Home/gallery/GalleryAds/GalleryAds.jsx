import React from 'react'
import cn from 'classnames'
import styles from './GalleryAds.module.scss'

export const GalleryAds = ({ data }) => {
	return (
		<>
			{data &&
				data.map((item) => (
					<div key={item.title} className={styles.item}>
						{item.href ? (
							<a href='#' className={styles.desc}>
								<p className={styles.subtitle}>{item.subtitle}</p>
								<h3 className={styles.title}>{item.title}</h3>
							</a>
						) : (
							<div className={styles.desc}>
								<p className={styles.subtitle}>{item.subtitle}</p>
								<h3 className={styles.title}>{item.title}</h3>
								{item.cities && (
									<div className={styles.citiesRow}>
										{item.cities.map((item) => (
											<a
												key={item.city}
												className={styles.city}
												href={item.href}
											>
												{item.city}
											</a>
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
