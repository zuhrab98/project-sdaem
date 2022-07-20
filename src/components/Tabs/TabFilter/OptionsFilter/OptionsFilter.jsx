import React from 'react'
import cn from 'classnames'
import styles from './OptionsFilter.module.scss'
import { Icons } from '../../../Icons/Icons'

export const OptionsFilter = ({ onclick }) => {
	return (
		<div className={styles.optionsFilter}>
			<button onClick={onclick} type='button' className={styles.button}>
				<span className={styles.content}>Больше опций </span>
				<span className={styles.icon}>
					<Icons id={'options'} />
				</span>
			</button>
		</div>
	)
}
