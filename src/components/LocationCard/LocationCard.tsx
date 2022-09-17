import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'
import cn from 'classnames'
import { useDispatch } from 'react-redux'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './swiperCards.scss'
import styles from './LocationCard.module.scss'
import { setFav } from '../../redux/slices/catalogSlice'
import { LocationCardProps } from './interface'
import { useOnClickOutside } from '../../hooks/useOnClickOutside'
import { Label } from '../Label/Label'
import { Icons } from '../Icons/Icons'
import { Button } from '../Button/Button'
import { OwnerPopup } from '../OwnerPopup/OwnerPopup'


export const LocationCard: React.FC<LocationCardProps> = ({
    cardList,
    data,
    catalogCards,
}) => {
    const dispatch = useDispatch()
    const [visiblePopup, setVisiblePopup] = React.useState(false)
    const [activeFav, setActiveFav] = React.useState(false)
    const [childRef, setChildRef] = React.useState<React.MutableRefObject<HTMLDivElement>>()

    const hendlerClick = (id: number) => {
        setActiveFav((prev) => !prev)
        dispatch(setFav(id))
    }
    useOnClickOutside(childRef, setVisiblePopup)

    return (
        <div
            className={cn(styles.card, {
                [styles.cardCatalog]: catalogCards,
                [styles.catalogCard]: cardList,
            })}
        >
            <div
                className={cn(styles.headerCard, 'headerCard', {
                    [styles.imgList]: cardList,
                })}
            >
                <span className={styles.label}>Gold</span>
                {data.img.length > 1 ? (
                    <Swiper
                        loop
                        modules={[Pagination, Navigation]}
                        navigation
                        pagination={{
                            clickable: true,
                        }}
                        slidesPerView={1}
                        spaceBetween={30}
                    >
                        {data?.img.map((url, i) => (
                            <SwiperSlide key={i}>
                                <img alt="ApartamentPhoto" src={url} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
                    <img alt="ApartamentPhoto" src={data.img[0]} />
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
                            <Label>
                                <Icons id="user" />
                                <span>{data.numberPeopleRoom}</span>
                            </Label>
                            <Label>
                                <span>{data.rooms} комн.</span>
                            </Label>
                            <Label>
                                <span>{data.quadrature}</span>
                            </Label>
                        </div>
                    </div>
                    <div className={styles.locationBlock}>
                        <div className={styles.location}>
                            <Icons id="location" />
                            <p className={styles.text}>
                                {data.citi}, {data.address}
                            </p>
                        </div>
                        <div className={styles.location}>
                            <Icons id="metro" />
                            <p className={styles.text}>{data.metro}</p>
                        </div>
                        <div className={styles.location}>
                            <Icons id="pointer" />
                            <p className={styles.text}>{data.region}</p>
                        </div>
                    </div>
                    <p className={styles.desc}>{data.description}</p>
                    <div className={styles.footer}>
                        {catalogCards && (
                            <Button name="fav" onClick={() => hendlerClick(data.id)}>
                                {activeFav ? (
                                    <Icons id="fav" />
                                ) : (
                                    <Icons fill="#EB5757" id="heart" />
                                )}
                            </Button>
                        )}

                        <Label
                            onClick={() => setVisiblePopup(!visiblePopup)}
                            setChildRef={setChildRef}
                            type="primaryPointer"
                        >
                            <Icons id="phone" />
                            Контакты
                            {visiblePopup && <OwnerPopup owner={data.owner} />}
                        </Label>
                        <Button name="yellow" path={'/apartmentCatalog'} tag={'a'}>
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
                            <Icons fill="#664EF9" id="location" size={{ w: 20, h: 20 }} />
                            <p className={styles.text}>
                                {data.citi}, {data.address}
                            </p>
                        </div>
                    </div>
                    <div className={styles.labelRow}>
                        <Label>
                            <Icons id={'user'} size={{ w: 20, h: 20 }} />
                            <p>{data.numberPeopleRoom}</p>
                        </Label>
                        <Label>
                            <p>{data.rooms} комн.</p>
                        </Label>
                        <Label type="location">
                            <Icons fill="#664EF9" id="metro" />
                            <p className={styles.text}>{data.metro}</p>
                        </Label>
                        <Label type="location">
                            <span className={styles.primaryText}>район:</span>
                            <p className={styles.text}>{data.region}</p>
                        </Label>
                    </div>
                    <p className={styles.desc}>{data.description}</p>

                    <div className={styles.footer}>
                        <div className={styles.left}>
                            <Label
                                onClick={() => setVisiblePopup(!visiblePopup)}
                                setChildRef={setChildRef}
                                type="primaryPointer"
                            >
                                <Icons id="phone" />
                                Контакты
                                {visiblePopup && <OwnerPopup owner={data.owner} />}
                            </Label>
                            <Button name="fav" onClick={() => hendlerClick(data.id)}>
                                {activeFav ? (
                                    <>
                                        <span>Добавлено</span>
                                        <Icons id="fav" />
                                    </>
                                ) : (
                                    <>
                                        <span>В закладки</span>
                                        <Icons fill="#EB5757" id="heart" />
                                    </>
                                )}
                            </Button>
                        </div>
                        <Button name="yellow" path={'/apartmentCatalog'} tag={'a'}>
                            <span>Подробнее</span>
                        </Button>
                    </div>
                </div>
            )}
        </div>
    )
}
