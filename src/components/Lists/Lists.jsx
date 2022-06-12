import React from 'react'
import cn from 'classnames'

export const Lists = ({ lists, tag }) => {
	const Tag = tag
	return (
		<>
			{lists &&
				lists.map((item) => (
					<li key={item.name}>
						{Tag && <Tag href={item.href}>{item.name}</Tag>}
						{Tag === undefined && item.name}
					</li>
				))}
		</>
	)
}
