import React from 'react'

import cn from 'classnames'
import data from 'api/data.json'
import { FilterSelect } from 'components/FilterSelect/FilterSelect'

import styles from './MoreOptions.module.scss'
import { MoreOptionsProps, OptionType } from './interface'

export const MoreOptions: React.FC<MoreOptionsProps> = ({
    filtered,
    visibleOptions,
}) => {

    const option: OptionType[] = data.OPTIONS

    return (
        <div
            className={cn(styles.moreOptions, {
                [styles.moreOptionsActive]: visibleOptions,
            })}
        >
            <div className={'container'}>
                <div className={styles.wrapper}>
                    <div className={styles.filters}>
                        <FilterSelect
                            ClassName="moreOptionsFilter"
                            list={data.SLEEPING_PLACES}
                            name={filtered.places ? filtered.places.name : 'Выберите'}
                            title="Спальные места"
                        />
                        <FilterSelect
                            ClassName="moreOptionsFilter"
                            list={data?.REGIONS}
                            name={filtered.region ? filtered.region.name : 'Выберите'}
                            title="Район"
                        />
                        <FilterSelect
                            ClassName="moreOptionsFilter"
                            list={data?.METRO_STATIONS}
                            name={filtered.metro ? filtered.metro.name : 'Выберите'}
                            title="Метро"
                        />
                    </div>
                    <ul className={styles.checkboxsList}>
                        {option.map(({ id, name, label }) => (
                            <li key={id} className={styles.item}>
                                <label className={styles.checkboxRow}>
                                    <input
                                        className={styles.realCheckbox}
                                        name={name}
                                        type="checkbox"
                                    />
                                    <span className={styles.customCheckbox} />
                                    <span className={styles.text}>{label}</span>
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
