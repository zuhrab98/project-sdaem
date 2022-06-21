import React from 'react'

import styles from './GallerySections.module.scss'
import { GalleryAds } from './GalleryAds/GalleryAds'
import { GALLERY_ADS, PROMO_MENU } from './data'
import { PromoMenu } from './PromoMenu/PromoMenu'

export const GallerySections = () => {
	return (
		<div className={styles.galleryAds}>
			<div className='container'>
				<div className={styles.row}>
					{/* карточки с картинками */}
					<div className={styles.cards}>
						<GalleryAds data={GALLERY_ADS} />
					</div>

					{/* боковое меню популярных ссылок */}
					<div className={styles.promoMenu}>
						<div className={styles.popularLinks}>
							<PromoMenu
								data={PROMO_MENU.cottages}
								title={PROMO_MENU.cottagesTitle}
								showMore={true}
							/>
							<PromoMenu
								data={PROMO_MENU.populars}
								title={PROMO_MENU.popularsTitle}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
