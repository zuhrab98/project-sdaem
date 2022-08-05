import React from 'react'

export type M = MouseEvent & {
	path: Node[]
}

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
