import React from 'react'

import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import cn from 'classnames'
import { Icons } from 'components/Icons/Icons'
import { LocationCard } from 'components/LocationCard/LocationCard'
import { Breadcrumbs } from 'components/Breadcrumbs/Breadcrumbs'
import { FilterSelect } from 'components/FilterSelect/FilterSelect'
import { filteredApartmentCatalog } from 'utils/filteredCards'
import { Button } from 'components/Button/Button'
import { selectFilter, setFiltered } from 'redux/slices/filterSlice'
import {
    fetchCatalogCards,
    setCurrentPage,
} from 'redux/slices/catalogSlice'
import { Pagination } from 'components/Pagination/Pagination'
import { usePagination } from 'hooks/usePagination'
import { FilterPropertyType, FilterType } from 'type'
import { RootState, useAppDispatch } from 'redux/store'
import data from 'api/data.json'
import { Skeleton } from 'components/Skeleton/Skeleton'

import { Filteres } from './Filteres/Filteres'
import styles from './ApartamentCatalog.module.scss'

interface useParamType {
	paramName?: string | null
	citi?: string
}

const labelsBtnRooms: FilterPropertyType[] = [
    { label: '1-комнатные', name: '1 ком.', filterProperty: 'room' },
    { label: '2-комнатные', name: '2 ком.', filterProperty: 'room' },
    { label: '3-комнатные', name: '3 ком.', filterProperty: 'room' },
    { label: '4-комнатные', name: '4 ком.', filterProperty: 'room' },
]
const labelsBtnCars: FilterPropertyType[] = [
    { label: '1-местный', name: '1', filterProperty: 'room' },
    { label: '2-местный', name: '2', filterProperty: 'room' },
    { label: '3-местный', name: '3', filterProperty: 'room' },
    { label: '4-местный', name: '4', filterProperty: 'room' },
]

const breadcrumsb = [{ page: 'Home', path: '/' }]

export const ApartamentCatalog: React.FC = () => {
    const dispatch = useAppDispatch()
    const location = useLocation()
    const useParam: useParamType = location.state

    const { currentPage, status, itemsCard } = useSelector(
        (store: RootState) => store.catalog,
    )
    const { sortCards, filtered } = useSelector(selectFilter)

    const [labelsBtn, setLabelsBtn] = React.useState(labelsBtnRooms)
    const [titleCatalog, setTitleCatalog] = React.useState<string>()
    const [list, setList] = React.useState<FilterType[]>(data.FILTER_ROOMS)
    const [filterCards, setFilterCards] = React.useState([])
    const [layoutItem, setLayoutItem] = React.useState<string>('table')
    const [itemsPerPage] = React.useState<number>(6)

    React.useEffect(() => {
        setTitleCatalog(useParam?.paramName || 'Квартиры')

        if (useParam?.paramName === 'cars') {
            setLabelsBtn(labelsBtnCars)
        }

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
    }, [itemsCard, useParam])

    React.useEffect(() => {
        const order = sortCards?.filterProperty === 'asc' ? 'asc' : 'desc'
        const param = useParam?.paramName ? useParam.paramName : 'rooms'
        dispatch(fetchCatalogCards({ param, order }))

        window.scroll(0, 0)
    }, [sortCards, filtered.citi, useParam, dispatch])

    const paginate = (pageNumbe: number) => {
        dispatch(setCurrentPage(pageNumbe))
    }

    const { currentItem, pageNumbers } = usePagination(
        currentPage,
        filterCards,
        itemsPerPage,
    )

    switch (titleCatalog) {
        case 'rooms':
            setTitleCatalog('Квартир')
            setList(data.FILTER_ROOMS)

            return
        case 'cottages':
            setTitleCatalog('Коттеджи и усадьбы')
            setList(data.FILTER_ROOMS)

            return
        case 'cars':
            setTitleCatalog('Авто')
            setList(data.SLEEPING_PLACES)

            return
        case 'baths':
            setTitleCatalog('Бани и сауны')
            setList(data.SLEEPING_PLACES)

            return
        default:
            break
    }

    const handleClickByLabel = (item: FilterPropertyType) => {
        dispatch(
            setFiltered({ name: item.name, filterProperty: item.filterProperty }),
        )
    }

    return (
        <div className={styles.apartmentCatalog}>
            <div className={styles.header}>
                <div className="container">
                    <Breadcrumbs breadcrumsb={breadcrumsb} pagaName={titleCatalog} />
                    <h1>
                        Аренда {titleCatalog} на сутки
                        {filtered.citi ? ` в ${filtered.citi?.name}е` : ''}
                    </h1>

                    <div className={styles.recommendations}>
                        <p className={styles.text}>Рекомендуем посмотреть</p>
                        <div className={styles.additionalParameters}>
                            {labelsBtn.map((item) => (
                                <button
                                    key={item.name}
                                    className={styles.btn}
                                    onClick={() => handleClickByLabel(item)}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Filteres list={list} setFilterCards={setFilterCards} />
            <div className={styles.sortWrapper}>
                <div className="container">
                    <div className={styles.row}>
                        <FilterSelect
                            ClassName="sortPrice"
                            list={data.SORT}
                            name="По умолчанию"
                        >
                            <Icons ClassName={styles.sortIcon} id="sortIcon" />
                        </FilterSelect>
                        <div className={styles.layoutGroupRoot}>
                            {data.LAYOUT_GROUP.map((item, i) => (
                                <button
                                    key={i}
                                    className={cn(styles.itemBtn, {
                                        [styles.active]: layoutItem === item.value,
                                    })}
                                    onClick={() => setLayoutItem(item.value)}
                                >
                                    <Icons
                                        fill={layoutItem === item.value && '#664EF9'}
                                        id={item.value}
                                    />{' '}
                                    {item.name}
                                </button>
                            ))}
                        </div>
                        <Button name="openMap" path="/maps" tag="a">
                            <Icons fill="#664ef9" id="location" />
                            <span>Показать на карте</span>
                        </Button>
                    </div>
                </div>
            </div>

            <div className={styles.wrapperContent}>
                <div className="container">
                    <h2 className={styles.title}>
                        Найдено {filterCards.length} результата
                    </h2>
                    <div
                        className={cn(styles.boxCards, {
                            [styles.cardslist]: layoutItem === 'list',
                        })}
                    >
                        {status === 'loading'
                            ? <Skeleton col={itemsPerPage} />
                            : currentItem.map((card, i: number) => (
                                <LocationCard
                                    key={i}
                                    cardList={layoutItem === 'list'}
                                    catalogCards
                                    data={card}
                                />
							  ))}
                    </div>
                    {filterCards.length > 1 && (
                        <Pagination pageNumbers={pageNumbers} paginate={paginate} />
                    )}
                </div>
            </div>
            <section className={styles.maps}>
                <div className="container">
                    <div className={styles.content}>
                        <h3 className={styles.title}>
                            Показать найденные квартиры на карте
                        </h3>
                        <p className={styles.text}>
                            Ищите новостройки рядом с работой, парком или родственниками
                        </p>
                        <Button name="openMap" tag="a">
                            <Icons fill="#FEC81B" id="location" /> <span>Открыть карту</span>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
