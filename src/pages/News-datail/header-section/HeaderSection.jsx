import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Icons } from '../../../components/Icons/Icons'
import { Label } from '../../../components/Label/Label'
import styles from './HeaderSection.module.scss'
import data from '../data.json'

export const HeaderSection = () => {
	const [newsDescription, setNewsDescription] = React.useState(null)
	const [socialIcons, setSocialIcons] = React.useState([])

	useEffect(() => {
		setNewsDescription(data.description)
		setSocialIcons(data.socials)
	}, [newsDescription, socialIcons])

	return (
		<section className={styles.headerSection}>
			<div className={styles.wrapperContainer}>
				<div className={styles.subtitle}>
					<div className={styles.link}>
						<Link to=''>
							<Icons id='home' fill='#4E64F9' />
							<span>Новости</span>
						</Link>
					</div>
					<p className={styles.text}>{newsDescription?.subtitle}</p>
				</div>
				<h1 className={styles.title1}>{newsDescription?.title}</h1>
				<div className={styles.wrapper}>
					<Label tag='div' type='primary'>
						{newsDescription?.date}
					</Label>
					<div className={styles.toShare}>
						<span className={styles.text}>Поделиться</span>
						{socialIcons &&
							socialIcons.map((item, i) => (
								<a
									className={styles.socialLink}
									key={i}
									target='_blank'
									rel='noreferrer'
									href={`${item.path}`}
								>
									<div className={styles.icon}>
										<Icons
											id={`${item.social}`}
											fill='#664EF9'
											size={{ w: '17', h: '17' }}
										/>
									</div>
								</a>
							))}
					</div>
				</div>
			</div>
		</section>
	)
}
