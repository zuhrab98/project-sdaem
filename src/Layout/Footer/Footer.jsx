import React from 'react'
import styles from './Footer.module.scss'
import { Icons } from '../../components/Icons/Icons'
import { Lists } from '../../components/Lists/Lists'
import { apartments, listProduct, listServices } from './data'

export const Footer = () => {
	return (
		<footer>
			<div className={`container ${styles.footerContainer}`}>
				<div className={styles.desc}>
					<a href='#' className='logo'>
						<img src='img/logo.svg' width={134} height={19} alt='logo' />
					</a>
					<p className={styles.p}>СДАЁМ БАЙ</p>
					<p>
						ИП Шушкевич Андрей Викторович УНП 192602485 Минским горисполкомом
						10.02.2016 220068, РБ, г. Минск, ул. Осипенко, 21, кв.23 +375 29 621
						48 33, sdaem@sdaem.by Режим работы: 08:00-22:00
					</p>
				</div>

				<div className={styles.content}>
					<ul className={styles.listProduct}>
						<Lists lists={listProduct} tag='a' />
					</ul>

					<div className={styles.wrapperApartment}>
						<div className={styles.apartmentTitle}>Квартиры</div>
						<ul className={styles.listApartment}>
							<Lists lists={apartments} tag='a' />
						</ul>
					</div>

					<ul className={styles.listServices}>
						<Lists lists={listServices} tag='a' />
					</ul>
				</div>

				<div className={styles.wrapperPayment}>
					<div className={styles.socials}>
						Мы в соцсетях
						<ul className={styles.socialsList}>
							<li>
								<a href='#'>
									<Icons id={'instagram'} />
								</a>
							</li>
							<li>
								<a href='#'>
									<Icons id={'vk'} />
								</a>
							</li>
							<li>
								<a href='#'>
									<Icons id={'facebook'} />
								</a>
							</li>
						</ul>
					</div>
					<div className={styles.payment}>
						<div className={styles.paymentItem}>
							<img src='payments/visa.png' width={42} height={14} alt='visa' />
						</div>
						<div className={styles.paymentItem}>
							<img src='payments/webpay.png' alt='webpay' />
						</div>
						<div className={styles.paymentItem}>
							<img src='payments/verified-by-visa.png' alt='verified-by-visa' />
						</div>
						<div className={styles.paymentItem}>
							<img src='payments/securecode.png' alt='securecode' />
						</div>
						<div className={styles.paymentItem}>
							<img src='payments/belkart.png' alt='belkart' />
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}
