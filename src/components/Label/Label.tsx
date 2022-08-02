import React from 'react'
import cn from 'classnames'
import styles from './Label.module.scss'
import { LabelProps } from './interface'

export const Label:React.FC<LabelProps> = ({ tag, type, children, onClick }): JSX.Element => {
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
