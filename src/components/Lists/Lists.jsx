import React from 'react'
import cn from 'classnames'
import styles from './Lists.module.scss'

export const Lists = ({ lists, tag }) => {
	const Tag = tag
	return (
		<>
			{lists &&
				lists.map((item, i) => (
					<li key={i}>
						{Tag && <Tag href={item.href}>{item.name}</Tag>}
						{Tag === undefined && item.name}
					</li>
				))}
		</>
	)
}
