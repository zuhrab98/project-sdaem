import React from 'react'


export const useOnClickOutside = (
    ref: React.MutableRefObject<HTMLDivElement>,
    setModalOpen: (arg: boolean) => void,
) => {

    React.useEffect(() => {
        // если клик произошел в не области выподающего списка
        const closePopup = (e: MouseEvent): void => {
            if (!ref?.current.contains((e.target) as Node) && ref?.current) {
                setModalOpen(false)
            }
        }
        document.body.addEventListener('click', closePopup)

        return () => document.body.removeEventListener('click', closePopup)
    }, [ref, setModalOpen])
}
