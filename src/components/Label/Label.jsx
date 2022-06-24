import React from 'react'
import cn from 'classnames'
import styles from './Label.module.scss'

export const Label = ({ tag, type, children, onClick }) => {
	const Tag = tag

	return (
		<Tag
			onClick={onClick}
			className={cn(styles.label, {
				[styles.labelGold]: type === 'gold',
				[styles.labelPrimary]: type === 'primary',
				[styles.primaryPointer]: type === 'primaryPointer',
				[styles.labelYellow]: type === 'yellow',
				[styles.lightGrey]: type === 'lightGrey',
			})}
		>
			{children}
		</Tag>
	)
}
