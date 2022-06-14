import React from 'react'
import styles from './Tabs.module.scss'
import { TabHeaderItem } from './TabHeaderItem/TabHeaderItem'

const tabs = [
	{ name: 'Квартиры на сутки', lable: 'apartment' },
	{ name: 'Коттеджи и усадьбы', lable: 'cottage' },
	{ name: 'Бани и сауны', lable: 'bathhouses' },
	{ name: 'Авто напрокат', lable: 'car' },
]

export const Tabs = () => {
	return (
		<div className={styles.container}>
			<TabHeaderItem items={tabs} />
		</div>
	)
}
