import React from 'react'
import cn from 'classnames'

import styles from './MoreOptions.module.scss'

import data from 'api/data.json'
import { FilterSelect } from 'components/FilterSelect/FilterSelect'
import { MoreOptionsProps, OptionType } from './interface'

export const MoreOptions: React.FC<MoreOptionsProps> = ({
	filtered,
	visibleOptions,
}): JSX.Element => {
 
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
							title='Спальные места'
							ClassName='moreOptionsFilter'
							name={filtered.places ? filtered.places.name : 'Выберите'}
							list={data.SLEEPING_PLACES}
						/>
						<FilterSelect
							title='Район'
							ClassName='moreOptionsFilter'
							name={filtered.region ? filtered.region.name : 'Выберите'}
							list={data?.REGIONS}
						/>
						<FilterSelect
							title='Метро'
							ClassName='moreOptionsFilter'
							name={filtered.metro ? filtered.metro.name : 'Выберите'}
							list={data?.METRO_STATIONS}
						/>
					</div>
					<ul className={styles.checkboxsList}>
						{option.map(({ id, name, label }) => (
							<li key={id} className={styles.item}>
								<label className={styles.checkboxRow}>
									<input
										name={name}
										className={styles.realCheckbox}
										type='checkbox'
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
