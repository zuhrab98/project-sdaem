import React from 'react'
import { Icons } from '../../../../components/Icons/Icons'
import styles from './Card.module.scss'
import { Button } from '../../../../components/Button/Button'
import cn from 'classnames'

export const Card = ({ data }) => {
	return (
		<div className={cn(styles.card, { [styles.gold]: data.type })}>
			<div className={styles.header}>
				{/* если есть типа то без картинки*/}
				{data.type ? (
					<p className={styles.title}>{data.title}</p>
				) : (
					<>
						<div className={styles.img}>
							<img src={data.img} alt='start-ard-img' />
						</div>
						<p className={styles.title}>{data.title}</p>
					</>
				)}
			</div>

			{/* если есть тип то два пораграфа */}
			{data.type ? (
				<div className={styles.goldText}>
					<p dangerouslySetInnerHTML={{ __html: data.text1 }}></p>
					<p dangerouslySetInnerHTML={{ __html: data.text2 }}></p>
				</div>
			) : (
				<p
					className={styles.text}
					dangerouslySetInnerHTML={{ __html: data.text }}
				></p>
			)}

			<Button tag='a' path='/' name='yellowGradient'>
				<span>{data.bntText}</span>
				{data.id !== '1' ? (
					<Icons id={'arrow'} size={{ w: 12, h: 7 }} fill='#242424' />
				) : (
					''
				)}
			</Button>
		</div>
	)
}
