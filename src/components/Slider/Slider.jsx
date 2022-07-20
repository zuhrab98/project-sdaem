import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css'
import './slider.scss'
import { LocationCard } from '../LocationCard/LocationCard'
import Skeleton from '../LocationCard/Skeleton'
import { useSelector } from 'react-redux'
import { selectHome } from '../../redux/slices/homeSlice'

export const Slider = ({ cards }) => {
	const { status } = useSelector(selectHome)

	return (
		<>
			<Swiper
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				spaceBetween={30}
				slidesPerView={3}
				navigation
			>
				{status === 'loading'
					? [...new Array(3)].map((_, index) => (
							<SwiperSlide key={index}>
								<Skeleton />
							</SwiperSlide>
					  ))
					: cards.map((obj) => (
							<SwiperSlide key={obj.id}>
								<LocationCard data={obj} />
							</SwiperSlide>
					  ))}
			</Swiper>
		</>
	)
}
