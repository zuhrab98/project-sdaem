import React from 'react'

import cn from 'classnames'

import styles from './OptionsFilter.module.scss'
import { Icons } from '../Icons/Icons'
import { OptionsFilterProps } from './interface'

export const OptionsFilter: React.FC<OptionsFilterProps> = ({
    onclick,
    visibleOptions,
}) => {
    return (
        <div className={styles.optionsFilter}>
            <button
                className={cn(styles.button, { [styles.active]: visibleOptions })}
                onClick={onclick}
                type="button"
            >
                <span className={styles.content}>Больше опций </span>
                <span className={styles.icon}>
                    <Icons id={'options'} />
                </span>
            </button>
        </div>
    )
}
