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
				[styles.labelYellow]: type === 'yellow',
			})}
		>
			{children}
		</Tag>
	)
}
