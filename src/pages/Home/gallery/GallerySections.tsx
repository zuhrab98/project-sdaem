import React from 'react'

import data from 'api/data.json'

import styles from './GallerySections.module.scss'
import { GalleryAds } from './GalleryAds/GalleryAds'
import { PromoMenu } from './PromoMenu/PromoMenu'

export const GallerySections: React.FC = () => {
    return (
        <div className={styles.galleryAds}>
            <div className="container">
                <div className={styles.row}>
                    {/* карточки с картинками */}
                    <div className={styles.cards}>
                        <GalleryAds data={data.GALLERY_ADS} />
                    </div>

                    {/* боковое меню популярных ссылок */}
                    <div className={styles.promoMenu}>
                        <div className={styles.popularLinks}>
                            <PromoMenu
                                data={data.PROMO_MENU.ROOMS}
                                title={data.PROMO_MENU.ROOMS_TITLE}
                            />
                            <PromoMenu
                                data={data.PROMO_MENU.COTTAGES}
                                showMore
                                title={data.PROMO_MENU.COTTAGES_TITLE}
                            />
                            <PromoMenu
                                data={data.PROMO_MENU.POPULARS}
                                title={data.PROMO_MENU.POPULARS_TITLE}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
