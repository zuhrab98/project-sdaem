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
import {skeleton} from '../../utils/skeleton'
import { useSelector } from 'react-redux'
import { selectHome } from '../../redux/slices/homeSlice'
import { CardsType } from '../../type'
import { SliderProps } from './interface'

export const Slider: React.FC<SliderProps> = ({ cards }): JSX.Element => {
  
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
					? skeleton(3)
					: cards.map((obj: CardsType) => (
							<SwiperSlide key={obj.id}>
								<LocationCard data={obj} />
							</SwiperSlide>
					  ))}
			</Swiper>
		</>
	)
}
