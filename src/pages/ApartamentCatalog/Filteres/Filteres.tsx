import React from 'react'

import cn from 'classnames'
import { FilterSelect } from 'components/FilterSelect/FilterSelect'
import { PriceFilter } from 'components/PriceFilter/PriceFilter'
import { OptionsFilter } from 'components/OptionsFilter/OptionsFilter'
import { Button } from 'components/Button/Button'
import { Icons } from 'components/Icons/Icons'
import {
    selectFilter,
    setFiltersClear,
} from 'redux/slices/filterSlice'
import { useDispatch, useSelector } from 'react-redux'
import { filteredApartmentCatalog } from 'utils/filteredCards'
import { RootState } from 'redux/store'
import { selectHome } from 'redux/slices/homeSlice'

import { FilteresProps } from './interface'
import { MoreOptions } from '../MoreOptions/MoreOptions'
import styles from './Filteres.module.scss'


export const Filteres: React.FC<FilteresProps> = ({ setFilterCards, list }) => {
    const dispatch = useDispatch()
    const { filtered } = useSelector(selectFilter)
    const { itemsCard } = useSelector((store: RootState) => store.catalog)
    const { tabs } = useSelector(selectHome)

    const [visibleOptions, setvisibleOptions] = React.useState(false)

    const handleClickByShow = () => {
        // функс фильтрует карточки при нажатии показать объекты
        const filtersCard = filteredApartmentCatalog(
            itemsCard,
            filtered.room,
            filtered.citi,
            filtered.priceFrom,
            filtered.priceTo,
            filtered.metro,
            filtered.region,
            filtered.places,
        )
        setFilterCards(filtersCard)
    }

    return (
        <div className={styles.filteres}>
            <div className={cn('container', styles.filteresRow)}>
                <FilterSelect
                    ClassName="rentalApartment"
                    list={list}
                    name={filtered.room ? filtered.room.name : 'Выберите'}
                    title={tabs.property}
                />

                <PriceFilter ClassName="rentalPrice" />
                <OptionsFilter
                    onclick={() => setvisibleOptions((prev) => !prev)}
                    visibleOptions={visibleOptions}
                />
                <div className={styles.buttons}>
                    <Button name="beige" onClick={() => dispatch(setFiltersClear())}>
                        <span>Очистить</span>
                    </Button>
                    <Button name="show" onClick={handleClickByShow}>
                        <span>Показать объекты</span>
                        <Icons fill={'#FFFFFF'} id={'arrow'} size={{ w: 12, h: 7 }} />
                    </Button>
                </div>
            </div>
            <MoreOptions filtered={filtered} visibleOptions={visibleOptions} />
        </div>
    )
}
