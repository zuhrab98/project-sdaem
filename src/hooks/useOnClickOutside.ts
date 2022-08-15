import React from 'react'
import { M } from '../type'


export const useOnClickOutside = (
	ref: React.MutableRefObject<HTMLDivElement>,
	setModalOpen: (arg: boolean) => void
) => {

	React.useEffect(() => {
		// если клик произошел в не области выподающего списка
		const closePopup = (e: M) => {
			if (e.path[0] !== ref?.current) {
				setModalOpen(false)
			}
		}
		document.body.addEventListener('click', closePopup)

		return () => document.body.removeEventListener('click', closePopup)
	}, [ref, setModalOpen])
}
