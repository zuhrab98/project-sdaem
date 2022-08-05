import React from 'react'
import styles from './NavHeaderBottom.module.scss'
import cn from 'classnames'

import { HeaderSelected } from '../HeaderSelected/HeaderSelected'
import data from '../../api/data.json'
import { useSelector } from 'react-redux'
import { selectFilter } from '../../redux/slices/filterSlice'
import { M, NavHeaderBottomProps } from './interface'
import { Icons } from '../Icons/Icons'

export const NavHeaderBottom: React.FC<NavHeaderBottomProps> = ({ param }) => {
	const [isModalOpen, setModalOpen] = React.useState(false)
	const { headerSelectName } = useSelector(selectFilter)
	const btnRef = React.useRef(null)

	React.useEffect(() => {
		// если клик произошел в не области выподающего списка
		const closePopup = (e: M) => {
			if (e.path[0] !== btnRef?.current) {
				setModalOpen(false)
			}
		}
		document.body.addEventListener('click', closePopup)

		return () => document.body.removeEventListener('click', closePopup)
	}, [])

	return (
		<div
			ref={btnRef}
			className={cn(styles.item, { [styles.active]: isModalOpen })}
			onClick={() => setModalOpen((prev) => !prev)}
		>
     
			{headerSelectName?.paramName === param?.paramName
				? headerSelectName.name
				: param.name}
      {param?.paramName === 'rooms' && <Icons id='location' fill='#FEC81B'/>}
			{isModalOpen && (
				<HeaderSelected
					selecteds={data.SELECTEDS_HEADER}
					paramName={param.paramName}
				/>
			)}
		</div>
	)
}
