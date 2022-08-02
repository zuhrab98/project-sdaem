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
import { useDispatch } from 'react-redux'
import { setFav } from '../../redux/slices/catalogSlice'

export const LocationCard = ({ cardList, data, catalogCards }) => {
	const dispatch = useDispatch()
	const [visiblePopup, setVisiblePopup] = React.useState(false)
	const [activeFav, setActiveFav] = React.useState(false)

	const hendlerClick = () => {
		setActiveFav((prev) => !prev)
		dispatch(setFav(Number(data.id)))
	}
	return (
		<div
			className={cn(styles.card, {
				[styles.cardCatalog]: catalogCards,
				[styles.catalogCard]: cardList,
			})}
		>
			<div className={cn(styles.headerCard, 'headerCard', {[styles.imgList]: cardList})}>
        <span className={styles.label}>Gold</span>
				{data.img.length > 1 ? (
					<Swiper
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
								<img src={url} alt='ApartamentPhoto' />
							</SwiperSlide>
						))}
					</Swiper>
				) : (
					<img src={data.img[0]} alt='ApartamentPhoto' />
				)}
			</div>
			{!cardList ? (
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
						{catalogCards && (
							<Button name='fav' onClick={() => hendlerClick(data)}>
								{activeFav ? (
									<Icons id='fav' />
								) : (
									<Icons id='heart' fill='#EB5757' />
								)}
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
						<Button tag={'a'} path={'/apartmentCatalog'} name='yellow'>
							<span>Подробнее</span>
						</Button>
					</div>
				</div>
			) : (
				<div className={styles.bodyList}>
					<div className={styles.row}>
						<h3 className={styles.title}>
							{data.rooms}-комн. апартаменты на {data.region}{' '}
						</h3>
						<div className={styles.priceBlock}>
							<p className={styles.price}>{data.price}</p>
							<p className={styles.priceText}>{data.priceTime}</p>
						</div>
					</div>
					<div className={styles.locationBlock}>
						<div className={styles.location}>
							<Icons id='location' fill='#664EF9' size={{ w: 20, h: 20 }} />
							<p className={styles.text}>
								{data.citi}, {data.address}
							</p>
						</div>
					</div>
					<div className={styles.labelRow}>
						<Label tag={'span'} type='small'>
							<Icons id={'user'} size={{ w: '20', h: '20' }} />
							<p>{data.numberPeopleRoom}</p>
						</Label>
						<Label tag={'span'} type='small'>
							<p>{data.rooms} комн.</p>
						</Label>
						<Label tag={'span'} className={styles.location}>
							<Icons id='metro' fill='#664EF9' />
							<p className={styles.text}>{data.metro}</p>
						</Label>
						<Label tag={'span'} className={styles.location}>
							<span className={styles.primaryText}>район:</span>
							<p className={styles.text}>{data.region}</p>
						</Label>
					</div>
					<p className={styles.desc}>{data.description}</p>

					<div className={styles.footer}>
						<div className={styles.left}>
							<Label
								tag={'div'}
								onClick={() => setVisiblePopup(!visiblePopup)}
								type='primaryPointer'
							>
								<Icons id='phone' />
								<span>Контакты</span>
								{visiblePopup && <OwnerPopup owner={data.owner} />}
							</Label>
							<Button name='fav' onClick={() => hendlerClick(data)}>
								{cardList && 'В закладки'}
								{activeFav ? (
									<Icons id='fav' />
								) : (
									<Icons id='heart' fill='#EB5757' />
								)}
							</Button>
						</div>
						<Button tag={'a'} path={'/apartmentCatalog'} name='yellow'>
							<span>Подробнее</span>
						</Button>
					</div>
				</div>
			)}
		</div>
	)
}
