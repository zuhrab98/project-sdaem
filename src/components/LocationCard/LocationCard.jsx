import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'
import cn from 'classnames'

import { Label } from '../Label/Label'
import { Icons } from '../Icons/Icons'
import { Button } from '../Button/Button'
import { OwnerPopup } from '../OwnerPopup/OwnerPopup'
import styles from './LocationCard.module.scss'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './swiperCards.scss'

export const LocationCard = ({ cardList, ClassName, data, fav }) => {
	const [visiblePopup, setVisiblePopup] = React.useState(false)
	return (
		<div
			className={cn(styles.card, {
				[styles.shadow]: fav,
				[styles.catalogCard]: ClassName === 'catalogCard',
			})}
		>
			<div className={cn(styles.headerCard, 'headerCard')}>
				{data.img.length > 1 ? (
					<Swiper
						className={styles.sliderCatalog}
						slidesPerView={1}
						spaceBetween={30}
						loop={true}
						pagination={{
							clickable: true,
						}}
						navigation={true}
						modules={[Pagination, Navigation]}
					>
						{data?.img.map((url, i) => (
							<SwiperSlide key={i}>
								<img src={url} alt='locationPhoto' />
							</SwiperSlide>
						))}
					</Swiper>
				) : (
					<img src={data.img[0]} alt='locationPhoto' />
				)}
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
							<span>{data.rooms} комн.</span>
						</Label>
						<Label tag={'span'} type='small'>
							<span>{data.quadrature}</span>
						</Label>
					</div>
				</div>
				<div className={styles.locationBlock}>
					<div className={styles.location}>
						<Icons id='location' />
						<p className={styles.text}>
							{data.citi}, {data.address}
						</p>
					</div>
					<div className={styles.location}>
						<Icons id='metro' />
						<p className={styles.text}>{data.metro}</p>
					</div>
					<div className={styles.location}>
						<Icons id='pointer' />
						<p className={styles.text}>{data.region}</p>
					</div>
				</div>
				<p className={styles.desc}>{data.description}</p>
				<div className={styles.footer}>
					{fav && (
						<Button name='fav'>
							<Icons id='heart' fill='#EB5757' />
						</Button>
					)}

					<Label
						tag={'div'}
						onClick={() => setVisiblePopup(!visiblePopup)}
						type='primaryPointer'
					>
						<Icons id='phone' />
						<span>Контакты</span>
						{visiblePopup && <OwnerPopup owner={data.owner} />}
					</Label>
					<Button tag={'a'} path={'/news'} name='yellow'>
						<span>Подробнее</span>
					</Button>
				</div>
			</div>
		</div>
	)
}
