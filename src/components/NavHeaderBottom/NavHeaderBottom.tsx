import React from 'react'
import styles from './NavHeaderBottom.module.scss'
import cn from 'classnames'

import { HeaderSelected } from '../HeaderSelected/HeaderSelected'
import data from '../../api/data.json'
import { useSelector } from 'react-redux'
import { selectFilter } from '../../redux/slices/filterSlice'
import { NavHeaderBottomProps } from './interface'
import { Icons } from '../Icons/Icons'
import { useOnClickOutside } from '../../hooks/useOnClickOutside'

export const NavHeaderBottom: React.FC<NavHeaderBottomProps> = ({ param }) => {
	const [isModalOpen, setModalOpen] = React.useState(false)
	const { headerSelectName } = useSelector(selectFilter)
	const divRef = React.useRef<HTMLDivElement>(null)
	useOnClickOutside(divRef, setModalOpen)

	return (
		<div
			ref={divRef}
			className={cn(styles.item, { [styles.active]: isModalOpen })}
			onClick={() => setModalOpen((prev) => !prev)}
		>
			{headerSelectName?.paramName === param?.paramName
				? headerSelectName.name
				: param.name}
			{param?.paramName === 'rooms' && <Icons id='location' fill='#FEC81B' />}
			{isModalOpen && (
				<HeaderSelected
					selecteds={data.SELECTEDS_HEADER}
					paramName={param.paramName}
				/>
			)}
		</div>
	)
}
