import React from 'react'

import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import data from '../../../api/data.json'
import { PriceFilter } from '../../PriceFilter/PriceFilter'
import { OptionsFilter } from '../../OptionsFilter/OptionsFilter'
import { Button } from '../../Button/Button'
import { Icons } from '../../Icons/Icons'
import { FilterSelect } from '../../FilterSelect/FilterSelect'
import { MoreOptions } from '../../../pages/ApartamentCatalog/MoreOptions/MoreOptions'
import styles from './TabFilter.module.scss'
import { selectFilter } from '../../../redux/slices/filterSlice'
import { selectHome } from '../../../redux/slices/homeSlice'

type Props = {
	paramName: string
}

export const TabFilter: React.FC<Props> = ({ paramName }) => {
    const { filtered } = useSelector(selectFilter)
    const [visibleOptions, setvisibleOptions] = React.useState(false)
    const [list, setList] = React.useState(data?.FILTER_ROOMS)
    const { tabs } = useSelector(selectHome)

    React.useEffect(() => {
        if (tabs.paramName === 'cars' || tabs.paramName === 'baths') {
            setList(data.SLEEPING_PLACES)
        } else {
            setList(data.FILTER_ROOMS)
        }
    }, [tabs])

    return (
        <div className={styles.tabsFilter}>
            <div className={styles.filteres}>
                <FilterSelect
                    list={data?.FILTER_CITIES}
                    name={filtered.citi ? filtered.citi.name : 'Выберите'}
                    title="Город"
                />
                <FilterSelect
                    list={list}
                    name={filtered.room ? filtered.room.name : 'Выберите'}
                    title={tabs.property}
                />
                <PriceFilter />
                <OptionsFilter onclick={() => setvisibleOptions((prev) => !prev)} />
                <div className={styles.buttons}>
                    <Button name="openMap" path="/openMap" tag="a">
                        <Icons fill="#FEC81B" id="location" />
                        <span>На карте</span>
                    </Button>
                    <Link
                        className={styles.lightYellow}
                        state={{ paramName: paramName, citi: filtered.citi?.name }}
                        to={'/apartmentCatalog'}
                    >
                        <span>Показать</span>
                        <Icons fill={'#242424'} id={'arrow'} size={{ w: 12, h: 7 }} />
                    </Link>
                </div>
            </div>
            <MoreOptions filtered={filtered} visibleOptions={visibleOptions} />
        </div>
    )
}
