import React from 'react'
import styles from './Footer.module.scss'
import { Icons } from '../../components/Icons/Icons'
import { Lists } from '../../components/Lists/Lists'
import data from '../../api/data.json'
import { Link } from 'react-router-dom'

export const Footer: React.FC = (): JSX.Element => {
	return (
		<footer>
			<div className={`container ${styles.footerContainer}`}>
				<div className={styles.desc}>
					<Link to='/' className='logo'>
						<img src='/img/logo.svg' width={134} height={19} alt='logo' />
					</Link>
					<p className={styles.p}>СДАЁМ БАЙ</p>
					<p>
						ИП Шушкевич Андрей Викторович <br />
						УНП 192602485 Минским горисполкомом <br />
						10.02.2016
						<br />
						220068, РБ, г. Минск, ул. Осипенко, 21, кв.23
						<br />
						+375 29 621 48 33, sdaem@sdaem.by
						<br />
						Режим работы: 08:00-22:00
						<br />
					</p>
				</div>

				<div className={styles.content}>
					<ul className={styles.listProduct}>
						<Lists lists={data.LIST_PRODUCTS} tag='a' />
					</ul>

					<div className={styles.wrapperApartment}>
						<div className={styles.apartmentTitle}>Квартиры</div>
						<ul className={styles.listApartment}>
							<Lists lists={data.APARTAMENTS} tag='a' />
						</ul>
					</div>

					<ul className={styles.listServices}>
						<Lists lists={data.NAVS_FOOTER} tag='a' />
					</ul>
				</div>

				<div className={styles.wrapperPayment}>
					<div className={styles.socials}>
						Мы в соцсетях
						<ul className={styles.socialsList}>
							<li>
								<a
									href='https://www.instagram.com/sdaem.by'
									target='_blank'
									rel='noreferrer'
								>
									<Icons id={'instagram'} />
								</a>
							</li>
							<li>
								<a
									href='https://vk.com/sdaem_by'
									target='_blank'
									rel='noreferrer'
								>
									<Icons id={'vk'} />
								</a>
							</li>
							<li>
								<a
									href='https://www.facebook.com/sdaem.by'
									target='_blank'
									rel='noreferrer'
								>
									<Icons id={'facebook'} />
								</a>
							</li>
						</ul>
					</div>
					<div className={styles.payment}>
						{data?.PAYMENT.map((item, i) => (
							<div key={i} className={styles.paymentItem}>
								<img src={item.src} alt={item.alt} />
							</div>
						))}
					</div>
				</div>
			</div>
		</footer>
	)
}
