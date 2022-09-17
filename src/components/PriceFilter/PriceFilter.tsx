import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import cn from 'classnames'

import { selectFilter, setFiltered } from '../../redux/slices/filterSlice'
import { PriceFilterProps } from './interface'
import styles from './PriceFilter.module.scss'
import { FilterPropertyType } from '../../type'

export const PriceFilter: React.FC<PriceFilterProps> = ({
    ClassName,
}) => {
    const dispatch = useDispatch()
    const { filtered } = useSelector(selectFilter)

    const onChangeInput = (obj: FilterPropertyType) => {
        dispatch(setFiltered(obj))
    }

    return (
        <div
            className={cn(styles.filterPrice, {
                [styles.rentalPrice]: ClassName,
            })}
        >
            <div className={styles.title}>Цена за сутки (BYN)</div>
            <div className={styles.priceWrapper}>
                <input
                    className={styles.input}
                    name="price"
                    onChange={(e) =>
                        onChangeInput({
                            name: e.target.value,
                            filterProperty: 'priceFrom',
                        })
                    }
                    placeholder="От"
                    type="number"
                    value={filtered.priceFrom.name}
                />
                -
                <input
                    className={styles.input}
                    name="price"
                    onChange={(e) =>
                        onChangeInput({ name: e.target.value, filterProperty: 'priceTo' })
                    }
                    placeholder="До"
                    type="number"
                    value={filtered.priceTo.name}
                />
            </div>
        </div>
    )
}
