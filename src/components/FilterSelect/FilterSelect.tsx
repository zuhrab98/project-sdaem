import React from 'react'

import { useSelector } from 'react-redux'
import cn from 'classnames'

import styles from './FilterSelect.module.scss'
import { Icons } from '../Icons/Icons'
import {
    selectFilter,
    setFiltered,
    setSort,
} from '../../redux/slices/filterSlice'
import { FilterSelectProps } from './interface'
import {  FilterType } from '../../type'
import { useOnClickOutside } from '../../hooks/useOnClickOutside'
import { useAppDispatch } from '../../redux/store'

export const FilterSelect: React.FC<FilterSelectProps> = ({
    title,
    list,
    ClassName = '',
    children,
    name,
}) => {
    const dispatch = useAppDispatch()
    const [visiblePopup, setVisiblePopup] = React.useState(false)
    const [filterName, setFilterName] = React.useState(name)
    const divRef = React.useRef<HTMLDivElement>(null)
    // useSelector по сути слушатеь на изминения store.filter, далее компонент перерисовывается
    const { filtered } = useSelector(selectFilter)

    useOnClickOutside(divRef, setVisiblePopup)

    const onClickListItem = (obj: FilterType) => {
        // Обновляем имя
        setFilterName(obj.name)
        dispatch(setFiltered(obj))

        // если фильтрвция по возрастанию или убыванию
        if (obj.filterProperty === 'desc' || obj.filterProperty === 'asc') {
            dispatch(setSort(obj))
        }
        // закрыть popup
        setVisiblePopup(false)
    }

    // когда делаем очистку фильтров обновляем имя фильтр
    React.useEffect(() => {
        setFilterName(name)
    }, [name])

    return (
        <div
            className={cn(styles.filterOfferType, {
                [styles.filterMetro]: ClassName === 'filterMetro',
                [styles.moreOptionsFilter]: ClassName === 'moreOptionsFilter',
                [styles.filterDistricts]: ClassName === 'filterDistricts',
                [styles.rentalApartment]: ClassName === 'rentalApartment',
                [styles.sortPrice]: ClassName === 'sortPrice',
            })}
        >
            {title && <span className={styles.title}>{title}</span>}

            <div
                ref={divRef}
                className={cn(styles.button, { [styles.buttonActive]: visiblePopup })}
                onClick={() => setVisiblePopup((prev) => !prev)}
            >
                {/* children это иконка метро либо другая*/}
                {children} {filterName} <Icons id={'arrow'} />
            </div>

            {/* выподающее меню */}
            {visiblePopup && (
                <div className={styles.dropdown}>
                    <ul className={styles.list}>
                        {list?.map((obj: FilterType) => (
                            <li
                                key={obj?.name}
                                className={cn(styles.item, {
                                    // активный селект
                                    [styles.selectActiveMetro]: filtered.metro
                                        ? obj?.name === filtered.metro?.name
                                        : '',
                                    [styles.selectActiveReg]: filtered.region
                                        ? obj?.name === filtered.region?.name
                                        : '',
                                    [styles.selectActiveCiti]: filtered.citi
                                        ? obj?.name === filtered.citi?.name
                                        : '',
                                    [styles.selectActiveRoom]: filtered.room
                                        ? obj?.name === filtered.room?.name
                                        : '',
                                })}
                                onClick={() => onClickListItem(obj)}
                            >
                                {obj.name}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}
