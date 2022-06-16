import React from 'react'
import cn from 'classnames'
import styles from './PromoMenu.module.scss'
import { Icons } from '../../../../components/Icons/Icons'

export const PromoMenu = ({ data, showMore, title }) => {
	const [visibleLinksMore, setvisibleLinksMore] = React.useState(false)

	const toggleVisibleLinksMore = () => {
		setvisibleLinksMore((prev) => !prev)
	}
	return (
		<div className={styles.groupMenu}>
			<h3 className={styles.title}>{title}</h3>
			<div
				className={cn(styles.list, {
					[styles.showMoreLinks]: visibleLinksMore,
				})}
			>
				{data &&
					data.map((item, index) => (
						<a href={item.href} key={index} className={styles.link}>
							<span className={styles.name}>{item.name}</span>
							{item.count ? (
								<span className={styles.count}>{item.count}</span>
							) : (
								''
							)}
						</a>
					))}
			</div>

			{showMore && (
				<a
					onClick={toggleVisibleLinksMore}
					role='button'
					className={cn(styles.arrowMore, {
						[styles.arrowMoreToggle]: visibleLinksMore,
					})}
				>
					Еще
					<Icons id='arrow-more' />
				</a>
			)}
		</div>
	)
}
