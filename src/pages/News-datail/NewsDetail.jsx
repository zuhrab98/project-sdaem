import React from 'react'
import { Layout } from '../../Layout/Layout'
import { MainBlock } from './main-block/MainBlock'
import { NewsListSection } from './news-list-section/NewsListSection'
import { HeaderSection } from './header-section/HeaderSection'
import styles from './NewsDetail.module.scss'

export const NewsDetail = () => {
	return (
		<Layout>
			<HeaderSection />
			<MainBlock />
			<NewsListSection />
		</Layout>
	)
}
