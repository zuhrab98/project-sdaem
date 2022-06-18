import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css'
import './slider.scss'

export const Slider = ({ data, cards }) => {
	const Cards = cards
	return (
		<>
			<Swiper
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				spaceBetween={30}
				slidesPerView={3}
				navigation
			>
				{data.map((obj) => (
					<SwiperSlide key={obj.id}>
						<Cards data={obj} />
					</SwiperSlide>
				))}
			</Swiper>
		</>
	)
}
