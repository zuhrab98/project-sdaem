import React from 'react'
import styles from './MainBlock.module.scss'
import data from '../data.json'

export const MainBlock = () => {
	const [mainBlock, setMainBlock] = React.useState({})

	React.useEffect(() => {
		setMainBlock(data.description)
	}, [])

	return (
		<section className={styles.mainBlock}>
			<div className={styles.wrapper}>
				<div className={styles.imgBlock}>
					<img src={mainBlock?.img} width={844} height={563} alt='mainImg' />
				</div>
				<div className={styles.textBlock}>
					<p dangerouslySetInnerHTML={{ __html: mainBlock?.text }}></p>
				</div>
			</div>
		</section>
	)
}
// news list
