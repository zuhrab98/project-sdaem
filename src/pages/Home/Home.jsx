import React from 'react'

import { Layout } from '../../Layout/Layout'
import { HomeFilters } from './filters-section/HomeFilters'
import { GallerySections } from './gallery/GallerySections'
import { NewsSection } from './news-section/NewsSection'
import { RentSection } from './rent-section/RentSection'
import { StartSection } from './start-section/StartSection'

export const Home = () => {
	return (
		<Layout>
			<HomeFilters />
			<GallerySections />
			<RentSection />
			<StartSection />
			<NewsSection />
		</Layout>
	)
}
