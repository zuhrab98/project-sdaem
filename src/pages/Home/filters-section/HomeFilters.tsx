import React from 'react'

import cn from 'classnames'
import { TabHeaderItem } from 'components/Tabs/TabHeaderItem/TabHeaderItem'
import data from 'api/data.json'

import styles from './HomeFilters.module.scss'

export const HomeFilters: React.FC = () => {
    return (
        <section className={cn(styles.filterSection, 'container')}>
            <div className={styles.wrapper}>
                <TabHeaderItem tabs={data.TABS} />
            </div>
        </section>
    )
}
