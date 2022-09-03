import React from 'react'
import cn from 'classnames'
import styles from './Modal.module.scss'
import { Button } from '../Button/Button'
import { ModalProps } from './interface'
import { useNavigate } from 'react-router'

export const Modal: React.FC<ModalProps> = ({
	children,
	className,
	action,
	isActive,
	navigatPage,
}): JSX.Element => {
	const refModal = React.useRef(null)
	const navigate = useNavigate()

	React.useEffect(() => {
		const closePopup = (e: MouseEvent) => {
      if (!navigatPage) {
        if (refModal.current && !refModal.current.contains(e.target)) {
          isActive(false)
        }
      }
		}
		document.addEventListener('mousedown', closePopup)

		return () => document.removeEventListener('mousedown', closePopup)
	}, [refModal, isActive,navigatPage])

	const handleOnClick = () => {
		if (navigatPage) {
			navigate('/')
		} else {
			isActive(false)
		}
	}

	return (
		<div className={cn({ [styles.modal]: className === 'modalContacts' })}>
			<div ref={refModal} className={styles.content}>
				<div className={styles.wrapper}>
					{children}
					<Button onClick={handleOnClick} name='buttonDef'>
						{action}
					</Button>
				</div>
			</div>
		</div>
	)
}
