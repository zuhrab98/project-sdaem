import React from 'react'
import cn from 'classnames'
import styles from './PromoMenu.module.scss'
import { Icons } from '../../../../components/Icons/Icons'
import { Link } from 'react-router-dom'
import { setFiltered } from '../../../../redux/slices/filterSlice'
import { useDispatch } from 'react-redux'

export const PromoMenu = ({ data, showMore, title }) => {
	const [visibleLinksMore, setvisibleLinksMore] = React.useState(false)
	const dispatch = useDispatch()

	const toggleVisibleLinksMore = () => {
		setvisibleLinksMore((prev) => !prev)
	}

	const handlerClick = (item) => {
		dispatch(setFiltered({ name: item?.citi, filterProperty: 'citi' }))
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
						<Link
							to='/apartmentCatalog'
							onClick={() => handlerClick(item)}
							state={{ paramName: item.paramName }}
							key={index}
							className={styles.link}
						>
							<span className={styles.name}>{item.name}</span>
							{item.count ? (
								<span className={styles.count}>{item.count}</span>
							) : (
								''
							)}
						</Link>
					))}
			</div>

			{showMore && (
				<span
					onClick={toggleVisibleLinksMore}
					role='button'
					className={cn(styles.arrowMore, {
						[styles.arrowMoreToggle]: visibleLinksMore,
					})}
				>
					Еще
					<Icons id='arrow-more' />
				</span>
			)}
		</div>
	)
}
