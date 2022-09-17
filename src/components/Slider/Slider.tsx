import React from 'react'

import { useSelector } from 'react-redux'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { LocationCard } from '../LocationCard/LocationCard'
import { selectHome } from '../../redux/slices/homeSlice'
import { CardsType } from '../../type'
import { SliderProps } from './interface'
import { Skeleton } from '../Skeleton/Skeleton'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css'
import './slider.scss'

export const Slider: React.FC<SliderProps> = ({ cards }) => {

    const { status } = useSelector(selectHome)

    return (
        <>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                navigation
                slidesPerView={3}
                spaceBetween={30}
            >
                {status === 'loading'
                    ? <Skeleton col={3} />
                    : cards.map((obj: CardsType) => (
                        <SwiperSlide key={obj.id}>
                            <LocationCard data={obj} />
                        </SwiperSlide>
					  ))}
            </Swiper>
        </>
    )
}
