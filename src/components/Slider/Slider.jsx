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

export const Slider = ({ data, isLoading }) => {
	return (
		<>
			<Swiper
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				spaceBetween={30}
				slidesPerView={3}
				navigation
			>
				{isLoading
					? [...new Array(3)].map((_, index) => (
							<SwiperSlide key={index}>
								<Skeleton />
							</SwiperSlide>
					  ))
					: data.map((obj) => (
							<SwiperSlide key={obj.id}>
								<LocationCard data={obj} />
							</SwiperSlide>
					  ))}
			</Swiper>
		</>
	)
}
